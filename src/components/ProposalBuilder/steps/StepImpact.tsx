import { t } from "@/i18n/dict";
import type { Locale } from "@/i18n/config";
import type { Proposal } from "../types";
import type { ProposalUpdater } from "../state";
import { SDGS } from "../presets";
import { Field } from "./StepIntro";

type Props = { locale: Locale; proposal: Proposal; update: ProposalUpdater };

export function StepImpact({ locale, proposal, update }: Props) {
  const toggleSDG = (n: number) => {
    const current = proposal.sdgs;
    update({
      sdgs: current.includes(n) ? current.filter((x) => x !== n) : [...current, n].sort((a, b) => a - b),
    });
  };

  return (
    <div style={{ display: "grid", gap: 22 }}>
      <p className="lede" style={{ margin: 0 }}>
        {t(locale, "pb_impact_lede")}
      </p>

      <Field
        label={t(locale, "pb_field_impact")}
        hint={t(locale, "pb_field_impact_hint")}
        required
      >
        <textarea
          className="pb-input"
          value={proposal.impactStatement}
          onChange={(e) => update({ impactStatement: e.target.value })}
          placeholder={t(locale, "pb_field_impact_ph")}
          rows={5}
          maxLength={1000}
        />
        <span style={{ fontSize: 11.5, color: "var(--muted)" }}>
          {proposal.impactStatement.length}/1000
        </span>
      </Field>

      <Field label={t(locale, "pb_field_sdgs")} hint={t(locale, "pb_field_sdgs_hint")}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
          {SDGS.map((n) => {
            const on = proposal.sdgs.includes(n);
            return (
              <button
                key={n}
                type="button"
                onClick={() => toggleSDG(n)}
                style={{
                  width: 36,
                  height: 36,
                  border: `1px solid ${on ? "var(--orange)" : "var(--line)"}`,
                  background: on ? "var(--orange)" : "#fff",
                  color: on ? "#fff" : "var(--ink-2)",
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                }}
                aria-pressed={on}
              >
                {n}
              </button>
            );
          })}
        </div>
      </Field>

      <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
        <Toggle
          label={t(locale, "pb_field_ndc")}
          checked={proposal.alignedNDC}
          onChange={(v) => update({ alignedNDC: v })}
        />
        <Toggle
          label={t(locale, "pb_field_nbsap")}
          checked={proposal.alignedNBSAP}
          onChange={(v) => update({ alignedNBSAP: v })}
        />
      </div>
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ width: 18, height: 18, accentColor: "var(--orange)" }}
      />
      <span style={{ fontSize: 14 }}>{label}</span>
    </label>
  );
}
