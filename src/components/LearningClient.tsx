"use client";

import { useState } from "react";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { L, t, type Localized } from "@/i18n/dict";
import { Arrow, Check, Play } from "./Icons";
import { asset } from "@/lib/asset";

type Lesson = { t: Localized; s: Localized; d: Localized; done: boolean };

type Unit = {
  id: string;
  /** Color del marcador de la fase. */
  phaseColor: string;
  num: string;
  /** Imagen de portada de la fase (public/images). */
  cover: string;
  title: Localized;
  narrator: Localized;
  summary: Localized;
  meta: { kKey: string; v: Localized }[];
  lessons: Lesson[];
};

/* ──────────────────────────────────────────────────────────────────────────
 * Curriculum reestructurado en CINCO FASES ESTRATÉGICAS (deck WWF, slide 3):
 * core concepts → program design → screening financial solutions →
 * project pitching → real-world case studies.
 * La versión anterior (12 unidades / 3 lentes) queda respaldada en
 * src/_backups/LearningClient.2026-05-24.tsx.bak por si hay que revertir.
 * ────────────────────────────────────────────────────────────────────────── */
const UNITS: Unit[] = [
  {
    id: "p1",
    phaseColor: "var(--teal)",
    num: "01",
    cover: "/images/deck-14.jpg",
    title: {
      en: "Core Concepts of Landscape Finance",
      es: "Conceptos básicos de las Finanzas del Paisaje",
      fr: "Concepts fondamentaux de la Finance Paysagère",
    },
    narrator: { en: "Jane — generalist", es: "Jane — generalista", fr: "Jane — généraliste" },
    summary: {
      en: "What a landscape is, why finance must adapt to it, and how capital flows through a place.",
      es: "Qué es un paisaje, por qué las finanzas deben adaptarse a él y cómo fluye el capital por un territorio.",
      fr: "Qu'est-ce qu'un paysage, pourquoi la finance doit s'y adapter et comment le capital circule dans un territoire.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "55 min", es: "55 min", fr: "55 min" } },
      { kKey: "learning_format", v: { en: "Video + reading", es: "Video + lectura", fr: "Vidéo + lecture" } },
      { kKey: "learning_level", v: { en: "Intro", es: "Introductorio", fr: "Introductif" } },
    ],
    lessons: [
      {
        t: { en: "What is a landscape?", es: "¿Qué es un paisaje?", fr: "Qu'est-ce qu'un paysage ?" },
        s: { en: "Terrestrial, marine, and mixed", es: "Terrestre, marino y mixto", fr: "Terrestre, marin et mixte" },
        d: { en: "8 min", es: "8 min", fr: "8 min" },
        done: false,
      },
      {
        t: {
          en: "Why finance alone does not conserve",
          es: "Por qué las finanzas por sí solas no conservan",
          fr: "Pourquoi la finance seule ne conserve pas",
        },
        s: {
          en: "Externalities, subsidies, misaligned incentives",
          es: "Externalidades, subsidios, incentivos desalineados",
          fr: "Externalités, subventions, incitations mal alignées",
        },
        d: { en: "12 min", es: "12 min", fr: "12 min" },
        done: false,
      },
      {
        t: {
          en: "The biodiversity finance gap",
          es: "La brecha de financiamiento de biodiversidad",
          fr: "Le déficit de financement de la biodiversité",
        },
        s: {
          en: "Where the money is — and isn't",
          es: "Dónde está el dinero — y dónde no",
          fr: "Où est l'argent — et où il ne l'est pas",
        },
        d: { en: "10 min", es: "10 min", fr: "10 min" },
        done: false,
      },
    ],
  },
  {
    id: "p2",
    phaseColor: "var(--forest-2)",
    num: "02",
    cover: "/images/deck-15.jpg",
    title: {
      en: "Designing a Landscape Finance Program",
      es: "Diseño de un programa de Finanzas del Paisaje",
      fr: "Conception d'un programme de Finance Paysagère",
    },
    narrator: { en: "Jessica — specialist", es: "Jessica — especialista", fr: "Jessica — spécialiste" },
    summary: {
      en: "From a theory of change to a financeable program: objectives, boundaries, and stakeholders.",
      es: "De una teoría del cambio a un programa financiable: objetivos, límites y actores.",
      fr: "D'une théorie du changement à un programme finançable : objectifs, limites et parties prenantes.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "1 h 20 min", es: "1 h 20 min", fr: "1 h 20 min" } },
      { kKey: "learning_format", v: { en: "Video + templates", es: "Video + plantillas", fr: "Vidéo + modèles" } },
      { kKey: "learning_level", v: { en: "Intermediate", es: "Intermedio", fr: "Intermédiaire" } },
    ],
    lessons: [
      {
        t: {
          en: "Theory of change & objectives",
          es: "Teoría del cambio y objetivos",
          fr: "Théorie du changement et objectifs",
        },
        s: { en: "From impact to activities", es: "Del impacto a las actividades", fr: "De l'impact aux activités" },
        d: { en: "16 min", es: "16 min", fr: "16 min" },
        done: false,
      },
      {
        t: {
          en: "Defining landscape boundaries",
          es: "Definir los límites del paisaje",
          fr: "Définir les limites du paysage",
        },
        s: {
          en: "Umbrella & operational landscapes",
          es: "Paisajes paraguas y operativos",
          fr: "Paysages parapluie et opérationnels",
        },
        d: { en: "14 min", es: "14 min", fr: "14 min" },
        done: false,
      },
      {
        t: {
          en: "Mapping stakeholders & governance",
          es: "Mapear actores y gobernanza",
          fr: "Cartographier parties prenantes et gouvernance",
        },
        s: { en: "Who benefits, who decides", es: "Quién se beneficia, quién decide", fr: "Qui bénéficie, qui décide" },
        d: { en: "18 min", es: "18 min", fr: "18 min" },
        done: false,
      },
    ],
  },
  {
    id: "p3",
    phaseColor: "var(--orange)",
    num: "03",
    cover: "/images/deck-16.jpg",
    title: {
      en: "Screening Financial Solutions",
      es: "Selección de soluciones financieras",
      fr: "Sélection des solutions financières",
    },
    narrator: { en: "Jessica — specialist", es: "Jessica — especialista", fr: "Jessica — spécialiste" },
    summary: {
      en: "Matching the right instruments — blended finance, PES, debt, outcome-based — to your context.",
      es: "Emparejar los instrumentos correctos —finanzas mixtas, PSE, deuda, basados en resultados— con tu contexto.",
      fr: "Associer les bons instruments — finance mixte, PSE, dette, axés sur les résultats — à votre contexte.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "1 h 40 min", es: "1 h 40 min", fr: "1 h 40 min" } },
      { kKey: "learning_format", v: { en: "Video + templates", es: "Video + plantillas", fr: "Vidéo + modèles" } },
      { kKey: "learning_level", v: { en: "Intermediate", es: "Intermedio", fr: "Intermédiaire" } },
    ],
    lessons: [
      {
        t: { en: "Blended finance, explained", es: "Finanzas mixtas, explicadas", fr: "Finance mixte, expliquée" },
        s: { en: "Who puts in what, and why", es: "Quién aporta qué, y por qué", fr: "Qui apporte quoi, et pourquoi" },
        d: { en: "18 min", es: "18 min", fr: "18 min" },
        done: false,
      },
      {
        t: {
          en: "Payments for ecosystem services",
          es: "Pagos por servicios ecosistémicos",
          fr: "Paiements pour services écosystémiques",
        },
        s: { en: "When they work, when they fail", es: "Cuándo funcionan, cuándo fallan", fr: "Quand ils marchent, quand ils échouent" },
        d: { en: "16 min", es: "16 min", fr: "16 min" },
        done: false,
      },
      {
        t: {
          en: "Outcome-based & carbon finance",
          es: "Financiamiento por resultados y de carbono",
          fr: "Financement axé sur les résultats et carbone",
        },
        s: { en: "Structures, contracts, verification", es: "Estructuras, contratos, verificación", fr: "Structures, contrats, vérification" },
        d: { en: "22 min", es: "22 min", fr: "22 min" },
        done: false,
      },
    ],
  },
  {
    id: "p4",
    phaseColor: "var(--forest-2)",
    num: "04",
    cover: "/images/deck-17.jpg",
    title: {
      en: "Pitching the Project",
      es: "Presentar el proyecto a financiadores",
      fr: "Présenter le projet aux financeurs",
    },
    narrator: { en: "Ylva — specialist", es: "Ylva — especialista", fr: "Ylva — spécialiste" },
    summary: {
      en: "Building the investment case, the budget, and the risk story funders need to say yes.",
      es: "Construir el caso de inversión, el presupuesto y la narrativa de riesgo que los financiadores necesitan para decir que sí.",
      fr: "Construire l'argumentaire d'investissement, le budget et le récit de risque dont les financeurs ont besoin pour dire oui.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "1 h 10 min", es: "1 h 10 min", fr: "1 h 10 min" } },
      { kKey: "learning_format", v: { en: "Video + case", es: "Video + caso", fr: "Vidéo + étude de cas" } },
      { kKey: "learning_level", v: { en: "Advanced", es: "Avanzado", fr: "Avancé" } },
    ],
    lessons: [
      {
        t: { en: "Building the investment case", es: "Construir el caso de inversión", fr: "Construire l'argumentaire d'investissement" },
        s: { en: "Impact + return narrative", es: "Narrativa de impacto + retorno", fr: "Récit d'impact + rendement" },
        d: { en: "15 min", es: "15 min", fr: "15 min" },
        done: false,
      },
      {
        t: { en: "Budget & financial model", es: "Presupuesto y modelo financiero", fr: "Budget et modèle financier" },
        s: { en: "Costs, phasing, overhead", es: "Costos, fases, indirectos", fr: "Coûts, phasage, frais généraux" },
        d: { en: "20 min", es: "20 min", fr: "20 min" },
        done: false,
      },
      {
        t: { en: "Risk, safeguards & bankability", es: "Riesgo, salvaguardas y bancabilidad", fr: "Risque, garanties et bancabilité" },
        s: { en: "What gets you past screening", es: "Lo que te hace pasar el filtro", fr: "Ce qui passe le filtre" },
        d: { en: "17 min", es: "17 min", fr: "17 min" },
        done: false,
      },
    ],
  },
  {
    id: "p5",
    phaseColor: "var(--teal)",
    num: "05",
    cover: "/images/deck-18.jpg",
    title: {
      en: "Real-World Case Studies",
      es: "Casos de estudio reales",
      fr: "Études de cas réelles",
    },
    narrator: { en: "Field narrators", es: "Narradores de campo", fr: "Narrateurs de terrain" },
    summary: {
      en: "How the approach plays out on the ground — from Madagascar's seascapes to Sintang and the Cerrado.",
      es: "Cómo se aplica el enfoque en el terreno — de los paisajes marinos de Madagascar a Sintang y el Cerrado.",
      fr: "Comment l'approche se déploie sur le terrain — des paysages marins de Madagascar à Sintang et au Cerrado.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "1 h 30 min", es: "1 h 30 min", fr: "1 h 30 min" } },
      { kKey: "learning_format", v: { en: "Case studies", es: "Casos de estudio", fr: "Études de cas" } },
      { kKey: "learning_level", v: { en: "All levels", es: "Todos los niveles", fr: "Tous niveaux" } },
    ],
    lessons: [
      {
        t: { en: "Seascape finance: MTB Madagascar", es: "Finanzas de paisaje marino: MTB Madagascar", fr: "Finance des paysages marins : MTB Madagascar" },
        s: { en: "Blue economy, portfolio approach", es: "Economía azul, enfoque de portafolio", fr: "Économie bleue, approche portefeuille" },
        d: { en: "20 min", es: "20 min", fr: "20 min" },
        done: false,
      },
      {
        t: { en: "Bankable Nature Solutions", es: "Soluciones basadas en la naturaleza bancarizables", fr: "Solutions Fondées sur la Nature bancables" },
        s: { en: "13 blueprints, what worked", es: "13 modelos, qué funcionó", fr: "13 modèles, ce qui a marché" },
        d: { en: "18 min", es: "18 min", fr: "18 min" },
        done: false,
      },
      {
        t: { en: "Sintang Landscape Initiative", es: "Iniciativa de Paisaje Sintang", fr: "Initiative Paysagère de Sintang" },
        s: { en: "4 returns in West Kalimantan", es: "4 retornos en Kalimantan Occidental", fr: "4 retours au Kalimantan occidental" },
        d: { en: "16 min", es: "16 min", fr: "16 min" },
        done: false,
      },
    ],
  },
];

export function LearningClient({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<string>("p1");
  const unit = UNITS.find((u) => u.id === active)!;

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

      {/* Intro del curso (slide 24 del deck WWF) */}
      <div className="learn-intro">
        <div className="learn-intro-img">
          <Image
            src={asset("/images/course-about.jpg")}
            alt="Landscape finance in the field"
            fill
            sizes="(max-width: 800px) 100vw, 480px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
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
                  {t(locale, "learning_phase")} {u.num} · {L(locale, u.narrator)}
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
              <div className="meta">
                {unit.meta.map((m) => (
                  <div key={m.kKey}>
                    <span style={{ color: "var(--muted)" }}>{t(locale, m.kKey)} </span>
                    <strong>{L(locale, m.v)}</strong>
                  </div>
                ))}
                <div>
                  <span style={{ color: "var(--muted)" }}>{t(locale, "learning_narrator")} </span>
                  <strong>{L(locale, unit.narrator)}</strong>
                </div>
              </div>
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
                <div className="dur">{L(locale, l.d)}</div>
                <button className="btn sm ghost" style={{ padding: ".45rem .7rem" }}>
                  <Play /> {t(locale, "learning_preview")}
                </button>
              </div>
            ))}
          </div>
          <div className="unit-cta">
            <div className="note">
              <strong>{t(locale, "learning_continue")}</strong> {t(locale, "learning_continue_tail")}
            </div>
            <a href="#" className="btn orange">
              {t(locale, "learning_open_lms")} <Arrow width={14} height={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
