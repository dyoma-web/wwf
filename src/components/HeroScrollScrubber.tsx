"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { asset } from "@/lib/asset";

const FRAME_COUNT = 26;
const SCRUB_HEIGHT_VH = 180;
const HEADER_OFFSET = 72; // altura del Header sticky

/**
 * Hero con scroll-scrubbed animation: el wrapper exterior es alto
 * (180vh) y dentro un contenedor sticky pinta sobre `<canvas>` el
 * frame correspondiente al progreso de scroll. Aplica las mismas
 * clases del hero original (.hero, .hero-frame) para preservar el
 * espaciado, los CTAs flotantes y la estética del referente.
 */
export function HeroScrollScrubber({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number>(-1);
  const tickingRef = useRef(false);
  const [ready, setReady] = useState(false);
  const [progressPct, setProgressPct] = useState(0); // 0–100, para barra de carga

  /* Carga progresiva de los 26 frames. Frame 0 con prioridad alta para LCP. */
  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // fetchPriority no está en el tipado base de HTMLImageElement aún
      (img as unknown as { fetchPriority: string }).fetchPriority = i === 0 ? "high" : "low";
      img.decoding = "async";
      img.src = asset(`/images/hero-frames/frame-${String(i + 1).padStart(3, "0")}.jpg`);
      img.onload = () => {
        if (cancelled) return;
        loadedCount += 1;
        setProgressPct(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (i === 0) drawFrame(0);
        if (loadedCount === FRAME_COUNT) {
          setReady(true);
          drawFrame(0);
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

  /* Pinta el frame `idx` con cover-fit (igual que object-fit:cover). */
  const drawFrame = (idx: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[idx];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
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
    lastFrameRef.current = idx;
  };

  /* Ajusta el tamaño del canvas a su contenedor con devicePixelRatio. */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      // Repintar tras resize para no perder el frame actual
      const last = lastFrameRef.current;
      if (last >= 0) drawFrame(last);
      else drawFrame(0);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* Listener de scroll que calcula el frame según el progreso del wrapper. */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        tickingRef.current = false;
        const w = wrapperRef.current;
        if (!w) return;
        const rect = w.getBoundingClientRect();
        const scrollableDist = w.offsetHeight - window.innerHeight;
        if (scrollableDist <= 0) return;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollableDist));
        const frameIdx = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
        if (frameIdx !== lastFrameRef.current) drawFrame(frameIdx);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero wrap">
      <div ref={wrapperRef} style={{ height: `${SCRUB_HEIGHT_VH}vh`, position: "relative" }}>
        <div
          className="hero-frame"
          style={{
            position: "sticky",
            top: HEADER_OFFSET,
            height: `min(560px, calc(100vh - ${HEADER_OFFSET}px - 24px))`,
          }}
        >
          <div className="phx soil" style={{ position: "absolute", inset: 0, borderRadius: 6 }}>
            <canvas
              ref={canvasRef}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                position: "absolute",
                inset: 0,
              }}
              aria-label="Hiker on a green ridge with mountains and clouds"
              role="img"
            />
            {!ready && (
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  left: 16,
                  bottom: 16,
                  height: 3,
                  width: 120,
                  background: "rgba(255,255,255,.2)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${progressPct}%`,
                    background: "var(--orange)",
                    transition: "width .2s ease",
                  }}
                />
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
