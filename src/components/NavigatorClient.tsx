"use client";

import { useState, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { L, t, type Localized } from "@/i18n/dict";
import {
  Arrow,
  Bars,
  Book,
  Check,
  Coin,
  Compass,
  Doc,
  Download,
  Globe,
  Leaf,
  Warning,
  Wave,
} from "./Icons";

type QuestionId = "role" | "landscape" | "challenge" | "solution";

type Option = {
  id: string;
  t: Localized;
  s: Localized;
  ic: ReactNode;
};

type Question = {
  id: QuestionId;
  label: Localized;
  q: Localized;
  hint: Localized;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "role",
    label: { en: "Your role", es: "Tu rol", fr: "Votre rôle" },
    q: { en: "What is your role?", es: "¿Cuál es tu rol?", fr: "Quel est votre rôle ?" },
    hint: {
      en: "This tunes the language of the recommendations.",
      es: "Esto ajusta el lenguaje de las recomendaciones.",
      fr: "Cela ajuste le langage des recommandations.",
    },
    options: [
      {
        id: "conservation",
        t: { en: "Conservation professional", es: "Profesional de conservación", fr: "Professionnel de la conservation" },
        s: {
          en: "NGO, field team, protected area manager",
          es: "ONG, equipo de campo, gestor de áreas protegidas",
          fr: "ONG, équipe de terrain, gestionnaire d'aires protégées",
        },
        ic: <Leaf />,
      },
      {
        id: "finance",
        t: { en: "Finance", es: "Finanzas", fr: "Finance" },
        s: {
          en: "Bank, investor, DFI, foundation",
          es: "Banco, inversor, DFI, fundación",
          fr: "Banque, investisseur, IFD, fondation",
        },
        ic: <Coin />,
      },
      {
        id: "policy",
        t: { en: "Policy maker", es: "Formulador de políticas", fr: "Décideur politique" },
        s: {
          en: "Government, regulator, agency",
          es: "Gobierno, regulador, agencia",
          fr: "Gouvernement, régulateur, agence",
        },
        ic: <Globe />,
      },
      {
        id: "research",
        t: { en: "Researcher", es: "Investigador/a", fr: "Chercheur/euse" },
        s: {
          en: "Academic, think tank, analyst",
          es: "Académico, think tank, analista",
          fr: "Universitaire, think tank, analyste",
        },
        ic: <Book />,
      },
    ],
  },
  {
    id: "landscape",
    label: { en: "Landscape type", es: "Tipo de paisaje", fr: "Type de paysage" },
    q: {
      en: "What type of landscape do you work in?",
      es: "¿En qué tipo de paisaje trabajas?",
      fr: "Dans quel type de paysage travaillez-vous ?",
    },
    hint: {
      en: "Where your work happens on the ground.",
      es: "Dónde sucede tu trabajo sobre el terreno.",
      fr: "Où votre travail se déroule sur le terrain.",
    },
    options: [
      {
        id: "terrestrial",
        t: { en: "Terrestrial", es: "Terrestre", fr: "Terrestre" },
        s: {
          en: "Forests, savannahs, drylands, mountains",
          es: "Bosques, sabanas, tierras secas, montañas",
          fr: "Forêts, savanes, zones arides, montagnes",
        },
        ic: <Leaf />,
      },
      {
        id: "marine",
        t: { en: "Marine", es: "Marino", fr: "Marin" },
        s: {
          en: "Coastal, nearshore, open ocean",
          es: "Costero, litoral, océano abierto",
          fr: "Côtier, littoral, haute mer",
        },
        ic: <Wave />,
      },
      {
        id: "mixed",
        t: { en: "Mixed", es: "Mixto", fr: "Mixte" },
        s: {
          en: "Land-sea interface, deltas, wetlands",
          es: "Interfaz tierra-mar, deltas, humedales",
          fr: "Interface terre-mer, deltas, zones humides",
        },
        ic: <Globe />,
      },
    ],
  },
  {
    id: "challenge",
    label: { en: "Main challenge", es: "Reto principal", fr: "Défi principal" },
    q: {
      en: "What is your main challenge?",
      es: "¿Cuál es tu reto principal?",
      fr: "Quel est votre principal défi ?",
    },
    hint: {
      en: "The one that most blocks progress today.",
      es: "El que más frena el progreso hoy.",
      fr: "Celui qui freine le plus le progrès aujourd'hui.",
    },
    options: [
      {
        id: "gap",
        t: { en: "Financing gap", es: "Brecha de financiamiento", fr: "Manque de financement" },
        s: {
          en: "Insufficient capital reaching the landscape",
          es: "Capital insuficiente llegando al paisaje",
          fr: "Insuffisance de capitaux atteignant le paysage",
        },
        ic: <Coin />,
      },
      {
        id: "subsidies",
        t: { en: "Harmful subsidies", es: "Subsidios perjudiciales", fr: "Subventions nuisibles" },
        s: {
          en: "Public money working against conservation",
          es: "Dinero público trabajando contra la conservación",
          fr: "Fonds publics allant contre la conservation",
        },
        ic: <Warning />,
      },
      {
        id: "private",
        t: {
          en: "Lack of private investment",
          es: "Falta de inversión privada",
          fr: "Manque d'investissement privé",
        },
        s: {
          en: "Risk, returns, or readiness barriers",
          es: "Barreras de riesgo, retorno o preparación",
          fr: "Barrières de risque, rendement ou préparation",
        },
        ic: <Bars />,
      },
    ],
  },
  {
    id: "solution",
    label: { en: "Solution", es: "Solución", fr: "Solution" },
    q: {
      en: "What conservation solution are you pursuing?",
      es: "¿Qué solución de conservación buscas?",
      fr: "Quelle solution de conservation recherchez-vous ?",
    },
    hint: {
      en: "Roughly — you can refine later.",
      es: "De forma aproximada — puedes refinar después.",
      fr: "Grosso modo — vous pourrez affiner ensuite.",
    },
    options: [
      {
        id: "restoration",
        t: { en: "Restoration", es: "Restauración", fr: "Restauration" },
        s: {
          en: "Reforestation, rewilding, regeneration",
          es: "Reforestación, renaturalización, regeneración",
          fr: "Reforestation, réensauvagement, régénération",
        },
        ic: <Leaf />,
      },
      {
        id: "protected",
        t: { en: "Protected areas", es: "Áreas protegidas", fr: "Aires protégées" },
        s: {
          en: "New, expanded, or better managed",
          es: "Nuevas, ampliadas o mejor gestionadas",
          fr: "Nouvelles, étendues ou mieux gérées",
        },
        ic: <Globe />,
      },
      {
        id: "sus-ag",
        t: { en: "Sustainable agriculture", es: "Agricultura sostenible", fr: "Agriculture durable" },
        s: {
          en: "Agroforestry, regenerative, certified",
          es: "Agroforestería, regenerativa, certificada",
          fr: "Agroforesterie, régénérative, certifiée",
        },
        ic: <Leaf />,
      },
      {
        id: "other",
        t: { en: "Something else", es: "Otra cosa", fr: "Autre chose" },
        s: {
          en: "We still suggest a starting point",
          es: "Aun así te sugerimos un punto de partida",
          fr: "Nous suggérerons quand même un point de départ",
        },
        ic: <Compass />,
      },
    ],
  },
];

type Answers = Partial<Record<QuestionId, string>>;

export function NavigatorClient({ locale }: { locale: Locale }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const cur = QUESTIONS[step];

  const pick = (id: string) => setAnswers((a) => ({ ...a, [cur.id]: id }));
  const labelFor = (qid: QuestionId): string => {
    const q = QUESTIONS.find((q) => q.id === qid);
    const opt = q?.options.find((o) => o.id === answers[qid]);
    return opt ? L(locale, opt.t) : "—";
  };
  const next = () => (step < QUESTIONS.length - 1 ? setStep((s) => s + 1) : setDone(true));
  const prev = () => (done ? setDone(false) : setStep((s) => Math.max(0, s - 1)));
  const restart = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };
  const progress = done ? 100 : (step / QUESTIONS.length) * 100;

  return (
    <div className="page wrap sec-sm">
      <div className="sec-hd">
        <div>
          <div className="eyebrow">{t(locale, "navigator_eyebrow")}</div>
          <h2 className="h-display" style={{ fontSize: "clamp(30px,4vw,50px)", margin: "8px 0 0" }}>
            {t(locale, "navigator_title")}
          </h2>
          <p className="lede" style={{ marginTop: 10 }}>
            {t(locale, "navigator_subtitle")}
          </p>
        </div>
      </div>

      <div className="nav-wrap">
        <aside className="nav-side">
          <div className="eyebrow muted">{t(locale, "navigator_inputs")}</div>
          <div className="nav-steps">
            {QUESTIONS.map((qq, i) => {
              const cls = done ? "done" : i < step ? "done" : i === step ? "on" : "";
              return (
                <div className={`step ${cls}`} key={qq.id}>
                  <div className="i">
                    {i < step || done ? <Check width={12} height={12} /> : String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="lbl">{L(locale, qq.label)}</div>
                    <div className="val" style={{ color: answers[qq.id] ? "var(--ink)" : "var(--muted)" }}>
                      {answers[qq.id] ? labelFor(qq.id) : t(locale, "navigator_not_set")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bar">
            <span style={{ width: `${progress}%` }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 8,
              fontSize: 11,
              color: "var(--muted)",
            }}
          >
            <span>
              {done
                ? t(locale, "navigator_complete")
                : `${t(locale, "navigator_step")} ${step + 1} ${t(locale, "navigator_of")} ${QUESTIONS.length}`}
            </span>
            <button
              onClick={restart}
              style={{
                border: 0,
                background: "transparent",
                color: "var(--muted)",
                fontSize: 11,
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {t(locale, "navigator_start_over")}
            </button>
          </div>
        </aside>

        {!done ? (
          <div className="qcard">
            <div className="q-meta">
              {t(locale, "navigator_question")} {step + 1} / {QUESTIONS.length} ·{" "}
              {L(locale, cur.label).toUpperCase()}
            </div>
            <h2>{L(locale, cur.q)}</h2>
            <p style={{ color: "var(--muted)", margin: "8px 0 0", fontSize: 14 }}>{L(locale, cur.hint)}</p>
            <div className="opts">
              {cur.options.map((o) => (
                <button
                  key={o.id}
                  className={`opt ${answers[cur.id] === o.id ? "sel" : ""}`}
                  onClick={() => pick(o.id)}
                >
                  <div className="ic">{o.ic}</div>
                  <div>
                    <div className="t">{L(locale, o.t)}</div>
                    <div className="s">{L(locale, o.s)}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="qnav">
              <button
                className="btn ghost"
                onClick={prev}
                disabled={step === 0}
                style={{ opacity: step === 0 ? 0.4 : 1 }}
              >
                ← {t(locale, "navigator_back")}
              </button>
              <button
                className="btn orange"
                onClick={next}
                disabled={!answers[cur.id]}
                style={{ opacity: !answers[cur.id] ? 0.5 : 1 }}
              >
                {step === QUESTIONS.length - 1
                  ? t(locale, "navigator_see_pathways")
                  : t(locale, "navigator_next")}{" "}
                <Arrow width={14} height={14} />
              </button>
            </div>
          </div>
        ) : (
          <Results locale={locale} answers={answers} onRestart={restart} labelFor={labelFor} />
        )}
      </div>
    </div>
  );
}

type Pathway = { mk: string; color: string; t: Localized; s: Localized; fitKey: "fit_strong" | "fit_good" | "fit_explore" };

const PATHS_POOL: Pathway[] = [
  {
    mk: "01",
    color: "var(--forest-2)",
    t: { en: "Blended finance for restoration", es: "Finanzas mixtas para restauración", fr: "Finance mixte pour la restauration" },
    s: {
      en: "Concessional + commercial capital stacked into a restoration fund.",
      es: "Capital concesional y comercial apilado en un fondo de restauración.",
      fr: "Capital concessionnel et commercial empilés dans un fonds de restauration.",
    },
    fitKey: "fit_strong",
  },
  {
    mk: "02",
    color: "var(--teal)",
    t: { en: "Payments for ecosystem services", es: "Pagos por servicios ecosistémicos", fr: "Paiements pour services écosystémiques" },
    s: {
      en: "Buyers pay land stewards for measurable outcomes.",
      es: "Los compradores pagan a los gestores del territorio por resultados medibles.",
      fr: "Les acheteurs rémunèrent les gestionnaires de terres pour des résultats mesurables.",
    },
    fitKey: "fit_good",
  },
  {
    mk: "03",
    color: "var(--orange)",
    t: { en: "Subsidy redirection", es: "Redirección de subsidios", fr: "Redirection des subventions" },
    s: {
      en: "Shift harmful agricultural subsidies towards regenerative practice.",
      es: "Redirigir subsidios agrícolas perjudiciales hacia prácticas regenerativas.",
      fr: "Réorienter les subventions agricoles nuisibles vers des pratiques régénératives.",
    },
    fitKey: "fit_explore",
  },
  {
    mk: "04",
    color: "var(--forest-2)",
    t: { en: "Outcome-based MPA financing", es: "Financiamiento de AMP basado en resultados", fr: "Financement d'AMP axé sur les résultats" },
    s: {
      en: "Pay-for-performance tied to verified fish-stock or habitat metrics.",
      es: "Pago por desempeño atado a métricas verificadas de stock pesquero o hábitat.",
      fr: "Rémunération à la performance liée à des indicateurs vérifiés de stocks halieutiques ou d'habitat.",
    },
    fitKey: "fit_strong",
  },
  {
    mk: "05",
    color: "var(--teal)",
    t: { en: "Green / biodiversity bonds", es: "Bonos verdes / de biodiversidad", fr: "Obligations vertes / de biodiversité" },
    s: {
      en: "Use-of-proceeds bonds issued by a public or sovereign entity.",
      es: "Bonos de uso dirigido de fondos emitidos por una entidad pública o soberana.",
      fr: "Obligations d'usage des fonds émises par une entité publique ou souveraine.",
    },
    fitKey: "fit_good",
  },
];

const CASES = [
  {
    loc: "Cerrado, Brazil",
    tag: { en: "Financing Green", es: "Financiamiento verde", fr: "Financement vert" },
    narrator: "Jaciele",
  },
  {
    loc: "Madagascar (MTB)",
    tag: { en: "Greening Finance", es: "Finanzas verdes", fr: "Finance verte" },
    narrator: "Santatra",
  },
  {
    loc: "KAZA, Africa",
    tag: { en: "Food & Agriculture", es: "Alimentación y agricultura", fr: "Alimentation & agriculture" },
    narrator: "Jane",
  },
];

const TEMPLATES = [
  {
    t: { en: "Readiness self-assessment", es: "Autoevaluación de preparación", fr: "Auto-évaluation de préparation" },
    s: { en: "DOCX · 12 questions", es: "DOCX · 12 preguntas", fr: "DOCX · 12 questions" },
  },
  {
    t: { en: "Theory of change canvas", es: "Lienzo de teoría del cambio", fr: "Canevas de théorie du changement" },
    s: { en: "PDF · blank + example", es: "PDF · en blanco + ejemplo", fr: "PDF · vierge + exemple" },
  },
  {
    t: { en: "MRV starter sheet", es: "Hoja inicial de MRV", fr: "Feuille de démarrage MRV" },
    s: { en: "XLSX · measurement", es: "XLSX · medición", fr: "XLSX · mesure" },
  },
];

function Results({
  locale,
  answers,
  onRestart,
  labelFor,
}: {
  locale: Locale;
  answers: Answers;
  onRestart: () => void;
  labelFor: (qid: QuestionId) => string;
}) {
  const picks = (() => {
    const p = PATHS_POOL;
    if (answers.landscape === "marine") return [p[3], p[1], p[4]];
    if (answers.solution === "restoration") return [p[0], p[1], p[4]];
    if (answers.challenge === "subsidies") return [p[2], p[1], p[0]];
    return [p[0], p[1], p[2]];
  })();

  return (
    <div>
      <div className="res-card" style={{ marginBottom: 16 }}>
        <div className="eyebrow">{t(locale, "navigator_result_eyebrow")}</div>
        <h2
          className="h-display"
          style={{ fontSize: "clamp(22px,2.4vw,32px)", margin: "8px 0 0", lineHeight: 1.2, letterSpacing: "-.01em" }}
        >
          {renderSentence(locale, {
            role: labelFor("role").toLowerCase(),
            landscape: labelFor("landscape").toLowerCase(),
            challenge: labelFor("challenge").toLowerCase(),
            solution: labelFor("solution").toLowerCase(),
          })}
        </h2>
      </div>

      <div className="results">
        <div className="res-card dark">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <div className="eyebrow" style={{ color: "var(--orange)" }}>
              {t(locale, "navigator_rec_pathways")}
            </div>
            <span className="chip dark">{t(locale, "navigator_3_of_12")}</span>
          </div>
          <h3 style={{ fontSize: 24, margin: "6px 0 10px", color: "#fff" }}>{t(locale, "navigator_start_here")}</h3>
          <div>
            {picks.map((p) => (
              <div className="path" key={p.mk} style={{ borderBottomColor: "#3a3a36" }}>
                <div className="mk" style={{ background: p.color }}>
                  {p.mk}
                </div>
                <div>
                  <div className="t" style={{ color: "#fff" }}>
                    {L(locale, p.t)}
                  </div>
                  <div className="s" style={{ color: "#c7c4b8" }}>
                    {L(locale, p.s)}
                  </div>
                </div>
                <div className="fit">{t(locale, p.fitKey)}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="res-card">
            <div className="eyebrow">{t(locale, "navigator_similar")}</div>
            <h3 style={{ fontSize: 18, margin: "6px 0 8px" }}>{t(locale, "navigator_seen_work")}</h3>
            {CASES.map((c) => (
              <div
                key={c.loc}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: "10px 0",
                  borderBottom: "1px solid var(--line-2)",
                }}
              >
                <div className="phx canopy" style={{ width: 56, height: 56, borderRadius: 3, flex: "0 0 56px" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{c.loc}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 3 }}>
                    {L(locale, c.tag)} · {t(locale, "toolkit_narrator").toLowerCase()}: {c.narrator}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="res-card">
            <div className="eyebrow">{t(locale, "navigator_relevant")}</div>
            <h3 style={{ fontSize: 18, margin: "6px 0 8px" }}>{t(locale, "navigator_templates_path")}</h3>
            {TEMPLATES.map((tp, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: i < TEMPLATES.length - 1 ? "1px solid var(--line-2)" : "none",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 3,
                    background: "var(--paper)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--ink-2)",
                  }}
                >
                  <Doc />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{L(locale, tp.t)}</div>
                  <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 2 }}>{L(locale, tp.s)}</div>
                </div>
                <button className="btn sm ghost" style={{ padding: ".4rem .7rem" }}>
                  <Download /> {t(locale, "navigator_get")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button className="btn orange">
          {t(locale, "navigator_open_lms")} <Arrow width={14} height={14} />
        </button>
        <button className="btn ghost" onClick={onRestart}>
          ↺ {t(locale, "navigator_try_diff")}
        </button>
      </div>
    </div>
  );
}

function renderSentence(
  locale: Locale,
  parts: { role: string; landscape: string; challenge: string; solution: string },
) {
  const strong = (s: string) => (
    <strong style={{ color: "var(--orange)", fontWeight: 700 }}>{s}</strong>
  );
  const { role, landscape, challenge, solution } = parts;
  if (locale === "es") {
    return (
      <>
        Un/una {strong(role)} en paisajes {strong(landscape)}, enfrentando {strong(challenge)}, buscando{" "}
        {strong(solution)}.
      </>
    );
  }
  if (locale === "fr") {
    return (
      <>
        Un/une {strong(role)} dans des paysages {strong(landscape)}, face à {strong(challenge)}, recherchant{" "}
        {strong(solution)}.
      </>
    );
  }
  return (
    <>
      A {strong(role)} in {strong(landscape)} landscapes, facing {strong(challenge)}, pursuing {strong(solution)}.
    </>
  );
}
