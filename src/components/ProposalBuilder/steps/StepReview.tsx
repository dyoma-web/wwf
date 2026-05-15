"use client";

import { useState } from "react";
import { t } from "@/i18n/dict";
import type { Locale } from "@/i18n/config";
import type { Proposal } from "../types";
import { BIOMES, PROJECT_TYPES, SCALES, SAFEGUARDS } from "../presets";
import { Arrow, Download } from "@/components/Icons";

type Props = { locale: Locale; proposal: Proposal; onReset: () => void };

export function StepReview({ locale, proposal, onReset }: Props) {
  const [downloading, setDownloading] = useState(false);
  const [downloadErr, setDownloadErr] = useState<string | null>(null);

  // Cómputos para el resumen
  const biomeLabel =
    BIOMES.find((b) => b.id === proposal.biome)?.key && t(locale, BIOMES.find((b) => b.id === proposal.biome)!.key);
  const scaleLabel =
    SCALES.find((s) => s.id === proposal.scale)?.key && t(locale, SCALES.find((s) => s.id === proposal.scale)!.key);
  const ptypeLabel =
    PROJECT_TYPES.find((p) => p.id === proposal.projectType)?.key &&
    t(locale, PROJECT_TYPES.find((p) => p.id === proposal.projectType)!.key);

  let direct = 0;
  for (const l of proposal.budgetLines) for (const a of l.amounts) direct += a;
  const overhead = direct * (proposal.overheadPct / 100);
  const grand = direct + overhead;
  const fmt = (n: number) =>
    n.toLocaleString(locale === "es" ? "es-CO" : locale === "fr" ? "fr-FR" : "en-US", {
      maximumFractionDigits: 0,
    });

  const checkedSafeguards = SAFEGUARDS.filter((sg) => proposal.safeguards[sg.id]);

  const handleDownload = async () => {
    setDownloading(true);
    setDownloadErr(null);
    try {
      // Lazy load de @react-pdf/renderer (es pesado).
      const [{ pdf }, { ProposalPDF }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("../ProposalPDF"),
      ]);
      const blob = await pdf(<ProposalPDF proposal={proposal} locale={locale} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const safeName = (proposal.projectName || "proposal")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .slice(0, 80)
        .toLowerCase();
      a.download = `${safeName}-proposal.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      setDownloadErr(err instanceof Error ? err.message : "PDF generation failed");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div style={{ display: "grid", gap: 22 }}>
      <p className="lede" style={{ margin: 0 }}>
        {t(locale, "pb_review_lede")}
      </p>

      <section className="pb-summary">
        <h3>{proposal.projectName || t(locale, "pb_review_untitled")}</h3>
        {proposal.leadOrganization && (
          <div className="pb-summary-meta">{proposal.leadOrganization}</div>
        )}
        {(proposal.contactName || proposal.contactEmail) && (
          <div className="pb-summary-meta">
            {[proposal.contactName, proposal.contactEmail].filter(Boolean).join(" · ")}
          </div>
        )}
      </section>

      <Row label={t(locale, "pb_review_impact")} content={proposal.impactStatement} />
      <Row
        label={t(locale, "pb_review_landscape")}
        content={[biomeLabel, proposal.country, scaleLabel, `${proposal.durationYears}y`]
          .filter(Boolean)
          .join(" · ")}
      />
      <Row
        label={t(locale, "pb_review_activities")}
        content={
          proposal.activities.length
            ? `${proposal.activities.length} ${t(locale, "pb_review_activities_count")}`
            : "—"
        }
      />
      <Row
        label={t(locale, "pb_review_stakeholders")}
        content={
          proposal.stakeholders.length
            ? `${proposal.stakeholders.length} ${t(locale, "pb_review_stakeholders_count")}`
            : "—"
        }
      />
      <Row
        label={t(locale, "pb_review_budget")}
        content={
          ptypeLabel ? `${ptypeLabel} · USD ${fmt(grand)}` : t(locale, "pb_review_no_budget")
        }
      />
      <Row
        label={t(locale, "pb_review_safeguards")}
        content={
          checkedSafeguards.length
            ? `${checkedSafeguards.length} / ${SAFEGUARDS.length}`
            : "—"
        }
      />

      <div
        style={{
          padding: 20,
          background: "var(--ink)",
          color: "#fff",
          display: "grid",
          gap: 14,
          marginTop: 6,
        }}
      >
        <div>
          <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>
            {t(locale, "pb_review_export_title")}
          </div>
          <div style={{ fontSize: 13, color: "#d8d5ca", lineHeight: 1.55 }}>
            {t(locale, "pb_review_export_body")}
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={handleDownload}
            className="btn orange"
            disabled={downloading || !proposal.projectName}
            style={{ opacity: downloading || !proposal.projectName ? 0.6 : 1 }}
          >
            {downloading ? t(locale, "pb_review_generating") : t(locale, "pb_review_download")}{" "}
            <Download width={14} height={14} />
          </button>
          <button
            type="button"
            onClick={() => {
              if (confirm(t(locale, "pb_review_reset_confirm"))) onReset();
            }}
            className="btn ghost-light"
          >
            {t(locale, "pb_review_reset")} <Arrow width={14} height={14} />
          </button>
        </div>
        {!proposal.projectName && (
          <div style={{ fontSize: 12, color: "#f0c060" }}>
            {t(locale, "pb_review_need_name")}
          </div>
        )}
        {downloadErr && (
          <div style={{ fontSize: 12, color: "#ff8080" }}>
            {downloadErr}
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, content }: { label: string; content: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "180px 1fr",
        gap: 16,
        paddingBottom: 12,
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {label}
      </div>
      <div style={{ fontSize: 14, color: "var(--ink)", whiteSpace: "pre-wrap" }}>
        {content || "—"}
      </div>
    </div>
  );
}
