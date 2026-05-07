"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import {
  type Audience,
  type DocTopic,
  type DocType,
  type Region,
} from "@/data/documents";
import { facetsToQuery, rankByAnswers, type Facets } from "@/lib/document-filter";
import {
  Arrow,
  Bars,
  Book,
  Check,
  Coin,
  Compass,
  Doc as DocIc,
  Globe,
  Leaf,
  Pdf,
  Tools,
} from "./Icons";

/* ----- estructura de las preguntas ----- */

type QuestionId = "role" | "region" | "topic" | "format";

type Option = {
  id: string;
  labelKey: string;
  subKey: string;
  ic: ReactNode;
  /** Mapeo a las facetas usadas por el ranker. Cada respuesta puede
   *  expandirse a múltiples valores en el filtro (p.ej. "ngo-research"
   *  cubre tanto `ngo` como `researcher`). */
  audiences?: Audience[];
  region?: Region;
  topic?: DocTopic;
  type?: DocType;
};

type Question = {
  id: QuestionId;
  labelKey: string;
  qKey: string;
  hintKey: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "role",
    labelKey: "q_role_label",
    qKey: "q_role_q",
    hintKey: "q_role_hint",
    options: [
      { id: "investor", labelKey: "aud_investor", subKey: "aud_investor_s", ic: <Coin />, audiences: ["investor"] },
      { id: "practitioner", labelKey: "aud_practitioner", subKey: "aud_practitioner_s", ic: <Tools />, audiences: ["practitioner"] },
      { id: "corporate", labelKey: "aud_corporate", subKey: "aud_corporate_s", ic: <Globe />, audiences: ["corporate"] },
      { id: "policymaker", labelKey: "aud_policymaker", subKey: "aud_policymaker_s", ic: <Bars />, audiences: ["policymaker"] },
      { id: "ngo-research", labelKey: "aud_ngo_research", subKey: "aud_ngo_research_s", ic: <Book />, audiences: ["ngo", "researcher"] },
    ],
  },
  {
    id: "region",
    labelKey: "q_region_label",
    qKey: "q_region_q",
    hintKey: "q_region_hint",
    options: [
      { id: "global", labelKey: "region_global", subKey: "region_global_s", ic: <Globe />, region: "global" },
      { id: "africa", labelKey: "region_africa", subKey: "region_africa_s", ic: <Leaf />, region: "africa" },
      { id: "asia", labelKey: "region_asia", subKey: "region_asia_s", ic: <Compass />, region: "asia" },
      { id: "latam", labelKey: "region_latam", subKey: "region_latam_s", ic: <Compass />, region: "latam" },
    ],
  },
  {
    id: "topic",
    labelKey: "q_topic_label",
    qKey: "q_topic_q",
    hintKey: "q_topic_hint",
    options: [
      { id: "basics", labelKey: "topic_basics", subKey: "topic_basics_s", ic: <Book />, topic: "basics" },
      { id: "mechanisms", labelKey: "topic_mechanisms", subKey: "topic_mechanisms_s", ic: <Coin />, topic: "mechanisms" },
      { id: "implementation", labelKey: "topic_implementation", subKey: "topic_implementation_s", ic: <Tools />, topic: "implementation" },
      { id: "strategy", labelKey: "topic_strategy", subKey: "topic_strategy_s", ic: <Compass />, topic: "strategy" },
    ],
  },
  {
    id: "format",
    labelKey: "q_format_label",
    qKey: "q_format_q",
    hintKey: "q_format_hint",
    options: [
      { id: "brief", labelKey: "type_brief", subKey: "type_brief_s", ic: <DocIc />, type: "brief" },
      { id: "guide", labelKey: "type_guide", subKey: "type_guide_s", ic: <Book />, type: "guide" },
      { id: "case-study", labelKey: "type_case_study", subKey: "type_case_study_s", ic: <Pdf />, type: "case-study" },
      { id: "playbook", labelKey: "type_playbook", subKey: "type_playbook_s", ic: <Tools />, type: "playbook" },
    ],
  },
];

type Answers = Partial<Record<QuestionId, string>>;

/** Convierte las respuestas del usuario al objeto Facets que usa el ranker. */
function answersToFacets(answers: Answers): Facets {
  const facets: Facets = {};
  for (const q of QUESTIONS) {
    const ans = answers[q.id];
    if (!ans) continue;
    const opt = q.options.find((o) => o.id === ans);
    if (!opt) continue;
    if (opt.audiences && opt.audiences.length === 1) facets.audience = opt.audiences[0];
    if (opt.region) facets.region = opt.region;
    if (opt.topic) facets.topic = opt.topic;
    if (opt.type) facets.type = opt.type;
  }
  return facets;
}

/* ----- componente ----- */

export function NavigatorClient({ locale }: { locale: Locale }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const cur = QUESTIONS[step];

  const pick = (id: string) => setAnswers((a) => ({ ...a, [cur.id]: id }));
  const labelFor = (qid: QuestionId): string => {
    const q = QUESTIONS.find((q) => q.id === qid);
    const opt = q?.options.find((o) => o.id === answers[qid]);
    return opt ? t(locale, opt.labelKey) : "—";
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
                    <div className="lbl">{t(locale, qq.labelKey)}</div>
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
              {t(locale, cur.labelKey).toUpperCase()}
            </div>
            <h2>{t(locale, cur.qKey)}</h2>
            <p style={{ color: "var(--muted)", margin: "8px 0 0", fontSize: 14 }}>{t(locale, cur.hintKey)}</p>
            <div className="opts">
              {cur.options.map((o) => (
                <button
                  key={o.id}
                  className={`opt ${answers[cur.id] === o.id ? "sel" : ""}`}
                  onClick={() => pick(o.id)}
                >
                  <div className="ic">{o.ic}</div>
                  <div>
                    <div className="t">{t(locale, o.labelKey)}</div>
                    <div className="s">{t(locale, o.subKey)}</div>
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

/* ----- pantalla de resultados ----- */

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
  const facets = answersToFacets(answers);
  const ranked = rankByAnswers(facets);
  const top = ranked.slice(0, 3);
  const totalMatches = ranked.length;

  return (
    <div>
      <div className="res-card" style={{ marginBottom: 16 }}>
        <div className="eyebrow">{t(locale, "navigator_result_eyebrow")}</div>
        <h2
          className="h-display"
          style={{ fontSize: "clamp(22px,2.4vw,32px)", margin: "8px 0 0", lineHeight: 1.2, letterSpacing: "-.01em" }}
        >
          {renderSentence(locale, {
            role: labelFor("role"),
            region: labelFor("region"),
            topic: labelFor("topic"),
            format: labelFor("format"),
          })}
        </h2>
        <p style={{ color: "var(--muted)", marginTop: 12, fontSize: 13.5 }}>
          {t(locale, "nav_result_count_pre")}
          <strong style={{ color: "var(--ink)" }}>{totalMatches}</strong>
          {t(locale, "nav_result_count_post")}
        </p>
      </div>

      {top.length > 0 ? (
        <div className="res-card dark" style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <div className="eyebrow" style={{ color: "var(--orange)" }}>
              {t(locale, "navigator_rec_pathways")}
            </div>
            <span className="chip dark">
              {top.length} / {totalMatches}
            </span>
          </div>
          <h3 style={{ fontSize: 24, margin: "6px 0 14px", color: "#fff" }}>{t(locale, "nav_top_picks")}</h3>
          <div>
            {top.map((d, i) => (
              <div className="path" key={d.id} style={{ borderBottomColor: "#3a3a36" }}>
                <div className="mk" style={{ background: "var(--orange)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="t" style={{ color: "#fff" }}>
                    {d.title}
                  </div>
                  <div className="s" style={{ color: "#c7c4b8" }}>
                    {d.description}
                  </div>
                  <div style={{ marginTop: 6, display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <span className="chip" style={{ background: "transparent", borderColor: "#3a3a36", color: "#c7c4b8" }}>
                      {t(locale, `type_${d.type.replace(/-/g, "_")}`)}
                    </span>
                    <span className="chip" style={{ background: "transparent", borderColor: "#3a3a36", color: "#c7c4b8" }}>
                      {t(locale, `topic_${d.topic}`)}
                    </span>
                  </div>
                </div>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn sm orange"
                  style={{ alignSelf: "flex-start", whiteSpace: "nowrap" }}
                >
                  {t(locale, "nav_open_doc")} <Arrow width={14} height={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="res-card" style={{ marginBottom: 16, textAlign: "center", padding: 36 }}>
          <h3 style={{ fontSize: 18, margin: "0 0 6px" }}>{t(locale, "nav_no_results")}</h3>
          <p style={{ color: "var(--muted)", fontSize: 13.5, margin: 0 }}>{t(locale, "nav_no_results_hint")}</p>
        </div>
      )}

      <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link href={`/${locale}/toolkit${facetsToQuery(facets)}`} className="btn orange">
          {t(locale, "nav_browse_all")} <Arrow width={14} height={14} />
        </Link>
        <button className="btn ghost" onClick={onRestart}>
          ↺ {t(locale, "navigator_try_diff")}
        </button>
      </div>
    </div>
  );
}

function renderSentence(
  locale: Locale,
  parts: { role: string; region: string; topic: string; format: string },
) {
  const strong = (s: string) => (
    <strong style={{ color: "var(--orange)", fontWeight: 700 }}>{s}</strong>
  );
  const { role, region, topic, format } = parts;
  if (locale === "es") {
    return (
      <>
        {strong(role)} en {strong(region)}, interesado/a en {strong(topic.toLowerCase())}, prefiriendo{" "}
        {strong(format.toLowerCase())}.
      </>
    );
  }
  if (locale === "fr") {
    return (
      <>
        {strong(role)} en {strong(region)}, intéressé(e) par {strong(topic.toLowerCase())}, préférant{" "}
        {strong(format.toLowerCase())}.
      </>
    );
  }
  return (
    <>
      {strong(role)} in {strong(region)}, interested in {strong(topic.toLowerCase())}, preferring{" "}
      {strong(format.toLowerCase())}.
    </>
  );
}
