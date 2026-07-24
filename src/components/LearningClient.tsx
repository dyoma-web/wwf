"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { L, t, type Localized } from "@/i18n/dict";
import { asset } from "@/lib/asset";
import { Arrow, Check, Play } from "./Icons";

const LMS_URL = "https://wwf.myabsorb.com/";

/** Vistas previas de los módulos (exportaciones Rise servidas desde R2). */
const COURSE_PREVIEWS: Record<string, string> = {
  m1: "https://cursos.landscapefinancehub.org/curso-1/index.html",
  m2: "https://cursos.landscapefinancehub.org/curso-2/index.html",
  m3: "https://cursos.landscapefinancehub.org/curso-3/index.html",
  m4: "https://cursos.landscapefinancehub.org/curso-4/index.html",
  m5: "https://cursos.landscapefinancehub.org/curso-5/index.html",
  m6: "https://cursos.landscapefinancehub.org/curso-6/index.html",
  m7: "https://cursos.landscapefinancehub.org/curso-7/index.html",
};

type Lesson = { t: Localized; s: Localized; d: Localized; done: boolean };

type Unit = {
  id: string;
  phaseColor: string;
  num: string;
  cover: string;
  title: Localized;
  summary: Localized;
  meta: { kKey: string; v: Localized }[];
  lessons: Lesson[];
};

// Curriculum aligned with "Copia de WEBSite_WWF_Curso.pptx", slide 5.
// Food and agri-food systems remain a cross-cutting learning lens, not a
// standalone site section.
const UNITS: Unit[] = [
  {
    id: "m1",
    phaseColor: "var(--teal)",
    num: "01",
    cover: "/images/course-about.jpg",
    title: {
      en: "Welcome and Introduction to the Course",
      es: "Bienvenida e introducción al curso",
      fr: "Bienvenue et introduction au cours",
    },
    summary: {
      en: "Why finance, food, and nature need to work together to create real change in landscapes.",
      es: "Por qué las finanzas, la alimentación y la naturaleza deben trabajar juntas para generar cambios reales en los paisajes.",
      fr: "Pourquoi la finance, l'alimentation et la nature doivent travailler ensemble pour créer un changement réel dans les paysages.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "20 min", es: "20 min", fr: "20 min" } },
      { kKey: "learning_format", v: { en: "Orientation", es: "Orientación", fr: "Orientation" } },
      { kKey: "learning_level", v: { en: "Intro", es: "Introductorio", fr: "Introductif" } },
    ],
    lessons: [
      {
        t: {
          en: "Why finance, food, and nature work together",
          es: "Por qué finanzas, alimentación y naturaleza trabajan juntas",
          fr: "Pourquoi finance, alimentation et nature vont ensemble",
        },
        s: {
          en: "Course goals, structure, and practical ways to use it",
          es: "Objetivos, estructura y formas prácticas de usar el curso",
          fr: "Objectifs, structure et usages pratiques du cours",
        },
        d: { en: "20 min", es: "20 min", fr: "20 min" },
        done: false,
      },
    ],
  },
  {
    id: "m2",
    phaseColor: "var(--forest-2)",
    num: "02",
    cover: "/images/case-mtb-madagascar-seascape.jpg",
    title: {
      en: "Explore how different financing approaches can support conservation, restoration, and nature-positive food and agriculture systems.",
      es: "Explora cómo distintos enfoques de financiación pueden apoyar la conservación, la restauración y sistemas alimentarios y agrícolas positivos para la naturaleza.",
      fr: "Explorez comment différentes approches de financement peuvent soutenir la conservation, la restauration et des systèmes alimentaires et agricoles positifs pour la nature.",
    },
    summary: {
      en: "How the Inclusive Conservation Programme provides the foundation for finance decisions.",
      es: "Cómo el Programa de Conservación Inclusiva sirve de base para las decisiones financieras.",
      fr: "Comment le Programme de Conservation Inclusive fonde les décisions financières.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "20 min", es: "20 min", fr: "20 min" } },
      { kKey: "learning_format", v: { en: "Video + reading", es: "Video + lectura", fr: "Vidéo + lecture" } },
      { kKey: "learning_level", v: { en: "Intro", es: "Introductorio", fr: "Introductif" } },
    ],
    lessons: [
      {
        t: {
          en: "Inclusive conservation as the starting point",
          es: "La conservación inclusiva como punto de partida",
          fr: "La conservation inclusive comme point de départ",
        },
        s: {
          en: "Landscape priorities before finance instruments",
          es: "Prioridades del paisaje antes que instrumentos financieros",
          fr: "Les priorités du paysage avant les instruments financiers",
        },
        d: { en: "20 min", es: "20 min", fr: "20 min" },
        done: false,
      },
    ],
  },
  {
    id: "m3",
    phaseColor: "var(--orange)",
    num: "03",
    cover: "/images/case-lfa-guide.jpg",
    title: {
      en: "Introduction to Sustainable Finance Landscapes",
      es: "Introducción a paisajes de finanzas sostenibles",
      fr: "Introduction aux paysages de finance durable",
    },
    summary: {
      en: "How to finance solutions in practice, from needs and barriers to possible pathways.",
      es: "Cómo financiar soluciones en la práctica, desde necesidades y barreras hasta rutas posibles.",
      fr: "Comment financer les solutions en pratique, des besoins et obstacles aux voies possibles.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "40 min", es: "40 min", fr: "40 min" } },
      { kKey: "learning_format", v: { en: "Video + tools", es: "Video + herramientas", fr: "Vidéo + outils" } },
      { kKey: "learning_level", v: { en: "Intro", es: "Introductorio", fr: "Introductif" } },
    ],
    lessons: [
      {
        t: {
          en: "How can you actually finance the solutions?",
          es: "¿Cómo se pueden financiar realmente las soluciones?",
          fr: "Comment financer concrètement les solutions ?",
        },
        s: {
          en: "Needs, barriers, and first finance pathways",
          es: "Necesidades, barreras y primeras rutas de financiamiento",
          fr: "Besoins, obstacles et premières voies de financement",
        },
        d: { en: "40 min", es: "40 min", fr: "40 min" },
        done: false,
      },
    ],
  },
  {
    id: "m4",
    phaseColor: "var(--forest-2)",
    num: "04",
    cover: "/images/case-lfa-practitioner-playbook.jpg",
    title: {
      en: "Financing Green in Practice",
      es: "Financiamiento verde en la práctica",
      fr: "Financement vert en pratique",
    },
    summary: {
      en: "Which financial instruments can be used, and how they come together in real financing strategies.",
      es: "Qué instrumentos financieros pueden usarse y cómo se combinan en estrategias reales de financiamiento.",
      fr: "Quels instruments financiers utiliser et comment les combiner dans des stratégies réelles.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "40 min", es: "40 min", fr: "40 min" } },
      { kKey: "learning_format", v: { en: "Cases + tools", es: "Casos + herramientas", fr: "Cas + outils" } },
      { kKey: "learning_level", v: { en: "Intermediate", es: "Intermedio", fr: "Intermédiaire" } },
    ],
    lessons: [
      {
        t: {
          en: "Financial instruments and financing strategies",
          es: "Instrumentos financieros y estrategias de financiamiento",
          fr: "Instruments financiers et stratégies de financement",
        },
        s: {
          en: "Blended finance, debt, grants, PES, and outcome-based structures",
          es: "Finanzas mixtas, deuda, subvenciones, PSE y estructuras basadas en resultados",
          fr: "Finance mixte, dette, subventions, PSE et mécanismes axés sur les résultats",
        },
        d: { en: "40 min", es: "40 min", fr: "40 min" },
        done: false,
      },
    ],
  },
  {
    id: "m5",
    phaseColor: "var(--teal)",
    num: "05",
    cover: "/images/case-sintang-indonesia.jpg",
    title: {
      en: "Greening Finance in Practice",
      es: "Finanzas verdes en la práctica",
      fr: "Verdissement de la finance en pratique",
    },
    summary: {
      en: "How system-level rules, incentives, information, and data shape finance decisions affecting landscapes.",
      es: "Cómo las reglas, incentivos, información y datos del sistema influyen en decisiones financieras que afectan los paisajes.",
      fr: "Comment les règles, incitations, informations et données systémiques orientent les décisions financières qui affectent les paysages.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "40 min", es: "40 min", fr: "40 min" } },
      { kKey: "learning_format", v: { en: "Video + examples", es: "Video + ejemplos", fr: "Vidéo + exemples" } },
      { kKey: "learning_level", v: { en: "Intermediate", es: "Intermedio", fr: "Intermédiaire" } },
    ],
    lessons: [
      {
        t: {
          en: "Rules, incentives, and information",
          es: "Reglas, incentivos e información",
          fr: "Règles, incitations et information",
        },
        s: {
          en: "Subsidies, regulation, and data that redirect financial decisions",
          es: "Subsidios, regulación y datos que redirigen decisiones financieras",
          fr: "Subventions, réglementation et données qui réorientent les décisions financières",
        },
        d: { en: "40 min", es: "40 min", fr: "40 min" },
        done: false,
      },
    ],
  },
  {
    id: "m6",
    phaseColor: "var(--orange)",
    num: "06",
    cover: "/images/case-bns-concepta-brazil.jpg",
    title: {
      en: "Scaling Landscape Finance in Practice",
      es: "Escalar las Finanzas del Paisaje en la práctica",
      fr: "Changer d'échelle en Finance Paysagère",
    },
    summary: {
      en: "How financing green and greening finance can work together at landscape scale.",
      es: "Cómo el financiamiento verde y las finanzas verdes pueden trabajar juntos a escala de paisaje.",
      fr: "Comment le financement vert et le verdissement de la finance peuvent fonctionner ensemble à l'échelle du paysage.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "40 min", es: "40 min", fr: "40 min" } },
      { kKey: "learning_format", v: { en: "Case synthesis", es: "Síntesis de casos", fr: "Synthèse de cas" } },
      { kKey: "learning_level", v: { en: "Advanced", es: "Avanzado", fr: "Avancé" } },
    ],
    lessons: [
      {
        t: {
          en: "Combining both finance tracks",
          es: "Combinar ambas rutas financieras",
          fr: "Combiner les deux voies financières",
        },
        s: {
          en: "From local pilots to systemic landscape strategies",
          es: "De pilotos locales a estrategias sistémicas de paisaje",
          fr: "Des pilotes locaux aux stratégies paysagères systémiques",
        },
        d: { en: "40 min", es: "40 min", fr: "40 min" },
        done: false,
      },
    ],
  },
  {
    id: "m7",
    phaseColor: "var(--forest-2)",
    num: "07",
    cover: "/images/case-bns-forest-africa-zambia.jpg",
    title: {
      en: "Wrapping Up and Moving Forward",
      es: "Cierre y próximos pasos",
      fr: "Conclusion et prochaines étapes",
    },
    summary: {
      en: "Reflect on what you have learned, connect it to your own context, and identify practical next steps.",
      es: "Reflexiona sobre lo aprendido, conéctalo con tu propio contexto e identifica próximos pasos prácticos.",
      fr: "Revenez sur vos apprentissages, reliez-les à votre contexte et identifiez les prochaines étapes pratiques.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "20 min", es: "20 min", fr: "20 min" } },
      { kKey: "learning_format", v: { en: "Reflection", es: "Reflexión", fr: "Réflexion" } },
      { kKey: "learning_level", v: { en: "All levels", es: "Todos los niveles", fr: "Tous niveaux" } },
    ],
    lessons: [
      {
        t: {
          en: "Apply the learning in your context",
          es: "Aplicar lo aprendido en tu contexto",
          fr: "Appliquer les apprentissages à votre contexte",
        },
        s: {
          en: "Review, reflection, and practical next steps",
          es: "Revisión, reflexión y próximos pasos prácticos",
          fr: "Révision, réflexion et prochaines étapes pratiques",
        },
        d: { en: "20 min", es: "20 min", fr: "20 min" },
        done: false,
      },
    ],
  },
];

export function LearningClient({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<string>("m1");
  const [previewOpen, setPreviewOpen] = useState(false);
  const unit = UNITS.find((u) => u.id === active)!;
  const previewUrl = COURSE_PREVIEWS[unit.id];

  // Cierre con Escape y bloqueo del scroll de fondo mientras el modal está abierto
  useEffect(() => {
    if (!previewOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreviewOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [previewOpen]);

  return (
    <div className="page wrap sec-sm">
      <div className="sec-hd">
        <div>
          <div className="eyebrow">{t(locale, "learning_eyebrow")}</div>
          <h2 className="h-display" style={{ fontSize: "clamp(30px,4vw,50px)", margin: "8px 0 0" }}>
            {t(locale, "learning_title")}
          </h2>
          <p className="lede" style={{ marginTop: 10 }}>
            {t(locale, "learning_subtitle")}
          </p>
        </div>
      </div>

      <div className="learn-intro">
        <div className="learn-intro-img">
          <Image
            src={asset("/images/learning-tuane-fernandes-wwf-brazil.jpg")}
            alt="Landscape finance in the field"
            fill
            sizes="(max-width: 800px) 100vw, 480px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="photo-credit">&copy; Tuane Fernandes / WWF-Brazil</div>
        </div>
        <div className="learn-intro-body">
          <h3 className="h-display" style={{ fontSize: "clamp(20px,2vw,26px)", margin: "0 0 10px" }}>
            {t(locale, "learning_intro_title")}
          </h3>
          <p style={{ color: "var(--ink-2)", lineHeight: 1.6, margin: 0 }}>
            {t(locale, "learning_intro_body")}
          </p>
        </div>
      </div>

      <div className="curriculum">
        <aside className="curr-list">
          {UNITS.map((u) => (
            <button key={u.id} className={u.id === active ? "on" : ""} onClick={() => setActive(u.id)}>
              <div className="num">{u.num}</div>
              <div>
                <div className="t">{L(locale, u.title)}</div>
                <div className="s">
                  <span
                    className="swatch"
                    style={{
                      background: u.phaseColor,
                      display: "inline-block",
                      marginRight: 5,
                      verticalAlign: "middle",
                    }}
                  />
                  {t(locale, "learning_phase")} {u.num}
                </div>
              </div>
            </button>
          ))}
        </aside>

        <div className="unit">
          <div className="unit-hd">
            <div style={{ flex: 1, minWidth: 260 }}>
              <span
                className="chip"
                style={{ background: unit.phaseColor, color: "#fff", borderColor: unit.phaseColor }}
              >
                {t(locale, "learning_phase")} {unit.num}
              </span>
              <h3>{L(locale, unit.title)}</h3>
              <p>{L(locale, unit.summary)}</p>
            </div>
            <div
              style={{ width: 220, aspectRatio: "4/3", flex: "0 0 220px", position: "relative", overflow: "hidden" }}
            >
              <Image
                src={asset(unit.cover)}
                alt={L(locale, unit.title)}
                fill
                sizes="220px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
          <div className="unit-lessons">
            {unit.lessons.map((l, i) => (
              <div className="row" key={i}>
                <div className={`dot ${l.done ? "done" : ""}`}>
                  {l.done ? <Check width={12} height={12} /> : String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="t">{L(locale, l.t)}</div>
                  <div className="s">{L(locale, l.s)}</div>
                </div>
                {previewUrl ? (
                  <button
                    className="btn sm ghost"
                    style={{ padding: ".45rem .7rem" }}
                    onClick={() => setPreviewOpen(true)}
                  >
                    <Play /> {t(locale, "learning_preview")}
                  </button>
                ) : (
                  <a
                    href={LMS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn sm ghost"
                    style={{ padding: ".45rem .7rem" }}
                  >
                    <Play /> {t(locale, "learning_preview")}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="unit-cta">
            <a href={LMS_URL} target="_blank" rel="noopener noreferrer" className="btn orange">
              {t(locale, "learning_open_lms")} <Arrow width={14} height={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Modal de vista previa del curso (Rise embebido desde R2) */}
      {previewOpen && previewUrl && (
        <div
          className="course-modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && setPreviewOpen(false)}
        >
          <div className="course-modal" role="dialog" aria-modal="true" aria-label={L(locale, unit.title)}>
            <div className="course-modal-hd">
              <div className="t">
                <span className="chip" style={{ background: unit.phaseColor, color: "#fff", borderColor: unit.phaseColor }}>
                  {t(locale, "learning_phase")} {unit.num}
                </span>
                <span>{L(locale, unit.title)}</span>
              </div>
              <button
                className="course-modal-close"
                onClick={() => setPreviewOpen(false)}
                aria-label={t(locale, "learning_preview_close")}
              >
                ✕
              </button>
            </div>
            <iframe src={previewUrl} title={L(locale, unit.title)} allow="fullscreen" />
            <div className="course-modal-ft">
              <p>{t(locale, "learning_preview_note")}</p>
              <a href={LMS_URL} target="_blank" rel="noopener noreferrer" className="btn orange">
                {t(locale, "learning_preview_cta")} <Arrow width={14} height={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
