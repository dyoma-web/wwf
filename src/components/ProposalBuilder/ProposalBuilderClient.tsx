"use client";

import { useState } from "react";
import { t } from "@/i18n/dict";
import type { Locale } from "@/i18n/config";
import { useProposal, computeProgress } from "./state";
import { STEP_IDS, type StepId } from "./types";
import { STEP_REFERENCES } from "./presets";
import { StepIntro } from "./steps/StepIntro";
import { StepImpact } from "./steps/StepImpact";
import { StepLandscape } from "./steps/StepLandscape";
import { StepActivities } from "./steps/StepActivities";
import { StepStakeholders } from "./steps/StepStakeholders";
import { StepBudget } from "./steps/StepBudget";
import { StepRisks } from "./steps/StepRisks";
import { StepReview } from "./steps/StepReview";
import { Arrow, ChevronLeft, ChevronRight } from "../Icons";
import { DOCS } from "@/data/documents";
import Link from "next/link";

const STEP_LABEL_KEYS: Record<StepId, { title: string; eyebrow: string }> = {
  intro: { title: "pb_step_intro_title", eyebrow: "pb_step_intro_eyebrow" },
  impact: { title: "pb_step_impact_title", eyebrow: "pb_step_impact_eyebrow" },
  landscape: { title: "pb_step_landscape_title", eyebrow: "pb_step_landscape_eyebrow" },
  activities: { title: "pb_step_activities_title", eyebrow: "pb_step_activities_eyebrow" },
  stakeholders: { title: "pb_step_stakeholders_title", eyebrow: "pb_step_stakeholders_eyebrow" },
  budget: { title: "pb_step_budget_title", eyebrow: "pb_step_budget_eyebrow" },
  risks: { title: "pb_step_risks_title", eyebrow: "pb_step_risks_eyebrow" },
  review: { title: "pb_step_review_title", eyebrow: "pb_step_review_eyebrow" },
};

type Props = { locale: Locale };

export function ProposalBuilderClient({ locale }: Props) {
  const { proposal, update, reset, hydrated } = useProposal();
  const [stepIdx, setStepIdx] = useState(0);
  const current = STEP_IDS[stepIdx];
  const labels = STEP_LABEL_KEYS[current];
  const progress = computeProgress(proposal);

  const goNext = () => setStepIdx((i) => Math.min(STEP_IDS.length - 1, i + 1));
  const goPrev = () => setStepIdx((i) => Math.max(0, i - 1));

  // Referencias del paso actual (docs del catálogo)
  const refDocs =
    current !== "intro" && current !== "review"
      ? STEP_REFERENCES[current]
          .map((id) => DOCS.find((d) => d.id === id))
          .filter((d): d is NonNullable<typeof d> => Boolean(d))
      : [];

  return (
    <div className="pb-shell">
      {/* Stepper */}
      <aside className="pb-stepper">
        <div className="pb-stepper-head">
          <div className="eyebrow">{t(locale, "pb_eyebrow")}</div>
          <div className="pb-progress">
            <div className="pb-progress-bar">
              <div style={{ width: `${progress}%` }} />
            </div>
            <span>{progress}%</span>
          </div>
        </div>
        <ol className="pb-stepper-list">
          {STEP_IDS.map((id, i) => {
            const active = i === stepIdx;
            const done = i < stepIdx;
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => setStepIdx(i)}
                  className={`pb-step-btn ${active ? "active" : ""} ${done ? "done" : ""}`}
                >
                  <span className="pb-step-num">{i + 1}</span>
                  <span className="pb-step-name">{t(locale, STEP_LABEL_KEYS[id].title)}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <div className="pb-stepper-foot">
          <div className="pb-save-state">
            {hydrated ? t(locale, "pb_saved_locally") : t(locale, "pb_loading")}
          </div>
        </div>
      </aside>

      {/* Body */}
      <main className="pb-body">
        <header className="pb-step-head">
          <div className="eyebrow">
            {t(locale, "pb_step")} {stepIdx + 1} / {STEP_IDS.length} · {t(locale, labels.eyebrow)}
          </div>
          <h1 className="h-display h2" style={{ margin: "6px 0 0" }}>
            {t(locale, labels.title)}
          </h1>
        </header>

        <section className="pb-step-content">
          {current === "intro" && <StepIntro locale={locale} proposal={proposal} update={update} />}
          {current === "impact" && (
            <StepImpact locale={locale} proposal={proposal} update={update} />
          )}
          {current === "landscape" && (
            <StepLandscape locale={locale} proposal={proposal} update={update} />
          )}
          {current === "activities" && (
            <StepActivities locale={locale} proposal={proposal} update={update} />
          )}
          {current === "stakeholders" && (
            <StepStakeholders locale={locale} proposal={proposal} update={update} />
          )}
          {current === "budget" && (
            <StepBudget locale={locale} proposal={proposal} update={update} />
          )}
          {current === "risks" && (
            <StepRisks locale={locale} proposal={proposal} update={update} />
          )}
          {current === "review" && (
            <StepReview locale={locale} proposal={proposal} onReset={reset} />
          )}
        </section>

        {/* Referencias del paso (catálogo) */}
        {refDocs.length > 0 && (
          <aside className="pb-step-refs">
            <div className="eyebrow muted">{t(locale, "pb_refs_eyebrow")}</div>
            <p style={{ margin: "4px 0 10px", fontSize: 12.5, color: "var(--muted)" }}>
              {t(locale, "pb_refs_hint")}
            </p>
            <ul className="pb-refs-list">
              {refDocs.map((d) => (
                <li key={d.id}>
                  <Link
                    href={`/${locale}/toolkit?doc=${d.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="pb-ref-title">{d.title}</span>
                    <Arrow width={12} height={12} />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Footer nav */}
        <footer className="pb-step-foot">
          <button
            type="button"
            onClick={goPrev}
            disabled={stepIdx === 0}
            className="btn ghost"
            style={{ opacity: stepIdx === 0 ? 0.4 : 1 }}
          >
            <ChevronLeft width={14} height={14} /> {t(locale, "pb_prev")}
          </button>
          {stepIdx < STEP_IDS.length - 1 && (
            <button type="button" onClick={goNext} className="btn orange">
              {t(locale, "pb_next")} <ChevronRight width={14} height={14} />
            </button>
          )}
        </footer>
      </main>
    </div>
  );
}
