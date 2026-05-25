"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { L, t, type Localized } from "@/i18n/dict";
import { Arrow, Check, Play } from "./Icons";

type Lesson = { t: Localized; s: Localized; d: Localized; done: boolean };

type Unit = {
  id: string;
  pillKey: "lens_greening" | "lens_financing" | "lens_food";
  pillColor: string;
  num: string;
  title: Localized;
  narrator: Localized;
  summary: Localized;
  meta: { kKey: string; v: Localized }[];
  lessons: Lesson[];
};

const UNITS: Unit[] = [
  {
    id: "u1",
    pillKey: "lens_greening",
    pillColor: "var(--teal)",
    num: "01",
    title: {
      en: "Foundations of the Landscape Finance Approach",
      es: "Fundamentos del Enfoque de Finanzas del Paisaje",
      fr: "Fondamentaux de l'approche Finance Paysagère",
    },
    narrator: {
      en: "Jane — generalist",
      es: "Jane — generalista",
      fr: "Jane — généraliste",
    },
    summary: {
      en: "What a landscape is, why finance needs to adapt to it, and how capital flows through a place.",
      es: "Qué es un paisaje, por qué las finanzas deben adaptarse a él, y cómo fluye el capital por un territorio.",
      fr: "Qu'est-ce qu'un paysage, pourquoi la finance doit s'y adapter, et comment le capital circule dans un territoire.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "55 min", es: "55 min", fr: "55 min" } },
      {
        kKey: "learning_format",
        v: { en: "Video + reading", es: "Video + lectura", fr: "Vidéo + lecture" },
      },
      {
        kKey: "learning_level",
        v: { en: "Intro", es: "Introductorio", fr: "Introductif" },
      },
    ],
    lessons: [
      {
        t: {
          en: "What is a landscape?",
          es: "¿Qué es un paisaje?",
          fr: "Qu'est-ce qu'un paysage ?",
        },
        s: {
          en: "Terrestrial, marine, and mixed",
          es: "Terrestre, marino y mixto",
          fr: "Terrestre, marin et mixte",
        },
        d: { en: "8 min", es: "8 min", fr: "8 min" },
        done: true,
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
        done: true,
      },
      {
        t: {
          en: "The three lenses: Greening · Financing · Food",
          es: "Las tres lentes: Verde · Financiamiento · Alimentación",
          fr: "Les trois axes : Verte · Financement · Alimentation",
        },
        s: {
          en: "How the programme is organised",
          es: "Cómo está organizado el programa",
          fr: "Comment le programme est organisé",
        },
        d: { en: "10 min", es: "10 min", fr: "10 min" },
        done: false,
      },
      {
        t: {
          en: "Self-check: which lens fits your work?",
          es: "Autoevaluación: ¿qué lente encaja con tu trabajo?",
          fr: "Auto-évaluation : quel axe correspond à votre travail ?",
        },
        s: {
          en: "Five guiding questions",
          es: "Cinco preguntas guía",
          fr: "Cinq questions directrices",
        },
        d: { en: "6 min", es: "6 min", fr: "6 min" },
        done: false,
      },
    ],
  },
  {
    id: "u2",
    pillKey: "lens_financing",
    pillColor: "var(--forest-2)",
    num: "02",
    title: {
      en: "Financing Green: Instruments & Applications",
      es: "Financiamiento Verde: instrumentos y aplicaciones",
      fr: "Financement Vert : instruments et applications",
    },
    narrator: {
      en: "Jessica — specialist",
      es: "Jessica — especialista",
      fr: "Jessica — spécialiste",
    },
    summary: {
      en: "A plain-language walk through blended finance, PES, green bonds and outcome-based instruments.",
      es: "Un recorrido en lenguaje sencillo por finanzas mixtas, PSE, bonos verdes e instrumentos basados en resultados.",
      fr: "Un parcours en langage clair sur la finance mixte, les PSE, les obligations vertes et les instruments axés sur les résultats.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "1 h 40 min", es: "1 h 40 min", fr: "1 h 40 min" } },
      {
        kKey: "learning_format",
        v: { en: "Video + templates", es: "Video + plantillas", fr: "Vidéo + modèles" },
      },
      {
        kKey: "learning_level",
        v: { en: "Intermediate", es: "Intermedio", fr: "Intermédiaire" },
      },
    ],
    lessons: [
      {
        t: {
          en: "Blended finance, explained",
          es: "Finanzas mixtas, explicadas",
          fr: "Finance mixte, expliquée",
        },
        s: {
          en: "Who puts in what, and why",
          es: "Quién aporta qué, y por qué",
          fr: "Qui apporte quoi, et pourquoi",
        },
        d: { en: "18 min", es: "18 min", fr: "18 min" },
        done: false,
      },
      {
        t: {
          en: "Payments for ecosystem services",
          es: "Pagos por servicios ecosistémicos",
          fr: "Paiements pour services écosystémiques",
        },
        s: {
          en: "When they work, when they fail",
          es: "Cuándo funcionan, cuándo fallan",
          fr: "Quand ils fonctionnent, quand ils échouent",
        },
        d: { en: "16 min", es: "16 min", fr: "16 min" },
        done: false,
      },
      {
        t: {
          en: "Outcome-based financing",
          es: "Financiamiento basado en resultados",
          fr: "Financement axé sur les résultats",
        },
        s: {
          en: "Structures, contracts, verification",
          es: "Estructuras, contratos, verificación",
          fr: "Structures, contrats, vérification",
        },
        d: { en: "22 min", es: "22 min", fr: "22 min" },
        done: false,
      },
    ],
  },
  {
    id: "u3",
    pillKey: "lens_food",
    pillColor: "var(--orange)",
    num: "03",
    title: {
      en: "Landscape Socioeconomic Context",
      es: "Contexto socioeconómico del paisaje",
      fr: "Contexte socio-économique du paysage",
    },
    narrator: {
      en: "Ylva — specialist",
      es: "Ylva — especialista",
      fr: "Ylva — spécialiste",
    },
    summary: {
      en: "How food systems, tenure and livelihoods shape what can be financed on the ground.",
      es: "Cómo los sistemas alimentarios, la tenencia y los medios de vida moldean lo que puede financiarse sobre el terreno.",
      fr: "Comment les systèmes alimentaires, le régime foncier et les moyens de subsistance façonnent ce qui peut être financé sur le terrain.",
    },
    meta: [
      { kKey: "learning_duration", v: { en: "1 h 15 min", es: "1 h 15 min", fr: "1 h 15 min" } },
      {
        kKey: "learning_format",
        v: { en: "Video + case", es: "Video + caso", fr: "Vidéo + étude de cas" },
      },
      {
        kKey: "learning_level",
        v: { en: "Intermediate", es: "Intermedio", fr: "Intermédiaire" },
      },
    ],
    lessons: [
      {
        t: {
          en: "Reading a landscape as a social system",
          es: "Leer un paisaje como sistema social",
          fr: "Lire un paysage comme système social",
        },
        s: {
          en: "Actors, rights, flows",
          es: "Actores, derechos, flujos",
          fr: "Acteurs, droits, flux",
        },
        d: { en: "14 min", es: "14 min", fr: "14 min" },
        done: false,
      },
      {
        t: {
          en: "Harmful subsidies & how to redirect them",
          es: "Subsidios perjudiciales y cómo redirigirlos",
          fr: "Subventions nuisibles et comment les réorienter",
        },
        s: {
          en: "Practical levers",
          es: "Palancas prácticas",
          fr: "Leviers pratiques",
        },
        d: { en: "18 min", es: "18 min", fr: "18 min" },
        done: false,
      },
    ],
  },
];

export function LearningClient({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<string>("u1");
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
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span className="chip">
            <span className="swatch" style={{ background: "var(--teal)" }} />
            {t(locale, "lens_greening")}
          </span>
          <span className="chip">
            <span className="swatch" style={{ background: "var(--forest-2)" }} />
            {t(locale, "lens_financing")}
          </span>
          <span className="chip">
            <span className="swatch" style={{ background: "var(--orange)" }} />
            {t(locale, "lens_food_short")}
          </span>
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
                      background: u.pillColor,
                      display: "inline-block",
                      marginRight: 5,
                      verticalAlign: "middle",
                    }}
                  />
                  {t(locale, u.pillKey)} · {L(locale, u.narrator)}
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
                style={{ background: unit.pillColor, color: "#fff", borderColor: unit.pillColor }}
              >
                {t(locale, unit.pillKey)}
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
              className="phx canopy"
              style={{ width: 220, aspectRatio: "4/3", flex: "0 0 220px", position: "relative" }}
            >
              <div className="cap">UNIT COVER</div>
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
