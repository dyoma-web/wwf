"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { asset } from "@/lib/asset";

const FRAME_COUNT = 26;
/** Punto en el progreso 0–1 a partir del cual arranca la contracción del frame. */
const MORPH_START = 0.18;
/** Breakpoint a partir del cual se activan ambilight y morph. */
const DESKTOP_MIN = 900;
/** Altura del stage al final del morph: frame (560) + 16px arriba + 16px abajo. */
const FINAL_STAGE_H = 592;
/** Distancia de scroll (px) que dura el morph + scrub. Wrapper se dimensiona para liberar el sticky justo al terminar. */
const SCROLL_DIST = 720;
/** Header height (debe coincidir con `top: 72px` en .hero-scrubber-stage). */
const HEADER_OFFSET = 72;

/** Interpolación lineal con clamp 0–1. */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** Ease-out cúbico para que la contracción termine suave. */
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Hero con tres efectos sincronizados al scroll:
 *   1. Scrub de frames (canvas avanza/retrocede entre 26 imágenes)
 *   2. Morph del frame: arranca a viewport completo, termina en su box
 *      contenido (1200px × 560px con border-radius)
 *   3. Halo Ambilight: el mismo frame escalado 1.4x y blurreado detrás,
 *      desvaneciéndose a medida que el frame se contrae
 *
 * Mobile (<900px) y `prefers-reduced-motion: reduce` reciben una versión
 * simple sin ambilight ni morph — solo el scrub de frames.
 */
export function HeroScrollScrubber({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement>(null);
  const ambCanvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number>(-1);
  const tickingRef = useRef(false);
  const isDesktopRef = useRef<boolean>(true);
  const reducedMotionRef = useRef<boolean>(false);
  const [progressPct, setProgressPct] = useState(0);
  const [ready, setReady] = useState(false);

  /* Carga progresiva de los 26 frames. */
  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      (img as unknown as { fetchPriority: string }).fetchPriority = i === 0 ? "high" : "low";
      img.decoding = "async";
      img.src = asset(`/images/hero-frames/frame-${String(i + 1).padStart(3, "0")}.jpg`);
      img.onload = () => {
        if (cancelled) return;
        loaded += 1;
        setProgressPct(Math.round((loaded / FRAME_COUNT) * 100));
        if (i === 0) drawBoth(0);
        if (loaded === FRAME_COUNT) {
          setReady(true);
          drawBoth(0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* drawImage con cover-fit en un canvas dado. */
  const drawCanvas = (canvas: HTMLCanvasElement | null, idx: number) => {
    if (!canvas) return;
    const img = imagesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;
    let dw, dh, dx, dy;
    if (ir > cr) {
      dh = ch;
      dw = ch * ir;
      dx = (cw - dw) / 2;
      dy = 0;
    } else {
      dw = cw;
      dh = cw / ir;
      dx = 0;
      dy = (ch - dh) / 2;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  const drawBoth = (idx: number) => {
    drawCanvas(fgCanvasRef.current, idx);
    if (isDesktopRef.current) drawCanvas(ambCanvasRef.current, idx);
    lastFrameRef.current = idx;
  };

  /* Resize de canvas con DPR + redibuja último frame + dimensiona wrapper. */
  useEffect(() => {
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      isDesktopRef.current = window.innerWidth >= DESKTOP_MIN;
      reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // En desktop con motion, el wrapper arranca a viewport + SCROLL_DIST. El
      // handler de scroll lo va contrayendo en cada frame (wrapper_h = stage_h +
      // 72 + SCROLL_DIST), sincronizado con la contracción del stage, para que
      // la sección siguiente suba en lockstep y no quede hueco visible.
      const wrapper = wrapperRef.current;
      const stage = stageRef.current;
      if (wrapper) {
        if (isDesktopRef.current && !reducedMotionRef.current) {
          wrapper.style.height = `${window.innerHeight + SCROLL_DIST}px`;
        } else {
          wrapper.style.height = "";
        }
      }
      // Reset --stage-h en mobile / reduced-motion para que CSS tome el control.
      if (stage && (!isDesktopRef.current || reducedMotionRef.current)) {
        stage.style.removeProperty("--stage-h");
      }

      for (const canvas of [fgCanvasRef.current, ambCanvasRef.current]) {
        if (!canvas) continue;
        const rect = canvas.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) continue;
        canvas.width = Math.max(1, Math.floor(rect.width * dpr));
        canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      }
      const last = lastFrameRef.current >= 0 ? lastFrameRef.current : 0;
      drawBoth(last);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* Scroll handler: actualiza frame index, morph y ambilight. */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const update = () => {
      const w = wrapperRef.current;
      const stage = stageRef.current;
      if (!w || !stage) return;

      const rect = w.getBoundingClientRect();
      const isDesktop = isDesktopRef.current && !reducedMotionRef.current;
      // Desktop usa SCROLL_DIST fijo (coordinado con la altura del wrapper que
      // ajusta resize()); mobile cae al cálculo basado en el wrapper CSS.
      const scrollableDist = isDesktop ? SCROLL_DIST : w.offsetHeight - window.innerHeight;
      if (scrollableDist <= 0) return;
      const scrolled = -rect.top;
      const t = Math.max(0, Math.min(1, scrolled / scrollableDist));

      // Frame index: scrubbing cubre todo el progreso 0–1
      const frameIdx = Math.min(FRAME_COUNT - 1, Math.floor(t * FRAME_COUNT));
      if (frameIdx !== lastFrameRef.current) drawBoth(frameIdx);

      // En mobile / reduced-motion, no aplicamos morph ni ambilight.
      if (!isDesktop) return;

      // Morph progress: empieza en MORPH_START, termina en t=1, easeOut cubic
      const tMorphRaw = (t - MORPH_START) / (1 - MORPH_START);
      const tMorph = easeOut(Math.max(0, Math.min(1, tMorphRaw)));

      // Altura inicial del stage = vh - header (matches CSS default).
      // Usamos viewport en lugar de stage.offsetHeight porque el stage se está
      // animando y leerlo daría el valor ya actualizado de la iteración previa.
      const initialStageH = window.innerHeight - HEADER_OFFSET;
      const stageW = stage.offsetWidth;

      // Estado contenido (tMorph=1): box de 1200×560 centrado con border-radius
      const finalW = Math.min(1200, stageW) - 48;
      const finalH = 560;
      const finalY = 16;
      const finalRadius = 6;

      // Stage shrink: de viewport completo a FINAL_STAGE_H (frame + breathing).
      // Sin esto, queda un gran espacio vacío debajo del frame contraído.
      const stageH = lerp(initialStageH, FINAL_STAGE_H, tMorph);

      const frameW = lerp(stageW, finalW, tMorph);
      const frameH = lerp(initialStageH, finalH, tMorph);
      const frameY = lerp(0, finalY, tMorph);
      const frameRadius = lerp(0, finalRadius, tMorph);

      // Ambilight: fuerte al inicio, se desvanece con la contracción
      const ambBlur = lerp(80, 0, tMorph);
      const ambScale = lerp(1.4, 1.0, tMorph);
      const ambOpacity = lerp(1.0, 0.0, tMorph);

      stage.style.setProperty("--stage-h", `${stageH}px`);
      stage.style.setProperty("--frame-w", `${frameW}px`);
      stage.style.setProperty("--frame-h", `${frameH}px`);
      stage.style.setProperty("--frame-y", `${frameY}px`);
      stage.style.setProperty("--frame-radius", `${frameRadius}px`);
      stage.style.setProperty("--amb-blur", `${ambBlur}px`);
      stage.style.setProperty("--amb-scale", ambScale.toFixed(3));
      stage.style.setProperty("--amb-opacity", ambOpacity.toFixed(3));

      // Wrapper en lockstep con el stage: wrapper_h = stage_h + 72 + SCROLL_DIST.
      // Mantiene la matemática del sticky correcta a cualquier viewport y hace
      // que la siguiente sección suba mientras el frame se contrae.
      w.style.height = `${stageH + HEADER_OFFSET + SCROLL_DIST}px`;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        tickingRef.current = false;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={wrapperRef} className="hero-scrubber">
      <div ref={stageRef} className="hero-scrubber-stage">
        <canvas ref={ambCanvasRef} className="hero-scrubber-amb" aria-hidden />
        <div className="hero-scrubber-frame hero-frame">
          <canvas
            ref={fgCanvasRef}
            className="hero-scrubber-fg"
            aria-label="Hiker on a green ridge with mountains and dramatic clouds"
            role="img"
          />
          {!ready && (
            <div className="hero-scrubber-loader" aria-hidden>
              <div style={{ width: `${progressPct}%` }} />
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
