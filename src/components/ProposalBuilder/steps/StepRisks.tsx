import { t } from "@/i18n/dict";
import type { Locale } from "@/i18n/config";
import type { Proposal, Risk, SafeguardId } from "../types";
import type { ProposalUpdater } from "../state";
import { SAFEGUARDS } from "../presets";
import { Field } from "./StepIntro";

type Props = { locale: Locale; proposal: Proposal; update: ProposalUpdater };

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export function StepRisks({ locale, proposal, update }: Props) {
  const addRisk = () => {
    const r: Risk = {
      id: uid(),
      description: "",
      likelihood: "medium",
      impact: "medium",
      mitigation: "",
    };
    update({ risks: [...proposal.risks, r] });
  };

  const updateRisk = (id: string, patch: Partial<Risk>) => {
    update({ risks: proposal.risks.map((r) => (r.id === id ? { ...r, ...patch } : r)) });
  };

  const removeRisk = (id: string) => {
    update({ risks: proposal.risks.filter((r) => r.id !== id) });
  };

  const toggleSafeguard = (id: SafeguardId) => {
    update({ safeguards: { ...proposal.safeguards, [id]: !proposal.safeguards[id] } });
  };

  return (
    <div style={{ display: "grid", gap: 26 }}>
      <p className="lede" style={{ margin: 0 }}>
        {t(locale, "pb_risks_lede")}
      </p>

      <div>
        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 10 }}>
          {t(locale, "pb_risk_register")}
        </div>
        <p style={{ fontSize: 12.5, color: "var(--muted)", margin: "0 0 14px", lineHeight: 1.5 }}>
          {t(locale, "pb_risk_register_hint")}
        </p>

        {proposal.risks.length === 0 && (
          <div
            style={{
              padding: "20px 18px",
              border: "1px dashed var(--line)",
              textAlign: "center",
              color: "var(--muted)",
              fontSize: 13.5,
              marginBottom: 14,
            }}
          >
            {t(locale, "pb_risks_empty")}
          </div>
        )}

        <div style={{ display: "grid", gap: 12 }}>
          {proposal.risks.map((r, idx) => (
            <div
              key={r.id}
              style={{
                border: "1px solid var(--line)",
                padding: 14,
                background: "#fff",
                display: "grid",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 600 }}>
                  {t(locale, "pb_risk")} {idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeRisk(r.id)}
                  style={{
                    background: "none",
                    border: 0,
                    color: "var(--muted)",
                    fontSize: 12,
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {t(locale, "pb_remove")}
                </button>
              </div>
              <Field label={t(locale, "pb_field_risk_desc")}>
                <textarea
                  className="pb-input"
                  value={r.description}
                  onChange={(e) => updateRisk(r.id, { description: e.target.value })}
                  rows={2}
                  placeholder={t(locale, "pb_field_risk_desc_ph")}
                  maxLength={300}
                />
              </Field>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <Field label={t(locale, "pb_field_likelihood")}>
                  <select
                    className="pb-input"
                    value={r.likelihood}
                    onChange={(e) =>
                      updateRisk(r.id, { likelihood: e.target.value as Risk["likelihood"] })
                    }
                  >
                    <option value="low">{t(locale, "pb_low")}</option>
                    <option value="medium">{t(locale, "pb_medium")}</option>
                    <option value="high">{t(locale, "pb_high")}</option>
                  </select>
                </Field>
                <Field label={t(locale, "pb_field_impact_lvl")}>
                  <select
                    className="pb-input"
                    value={r.impact}
                    onChange={(e) =>
                      updateRisk(r.id, { impact: e.target.value as Risk["impact"] })
                    }
                  >
                    <option value="low">{t(locale, "pb_low")}</option>
                    <option value="medium">{t(locale, "pb_medium")}</option>
                    <option value="high">{t(locale, "pb_high")}</option>
                  </select>
                </Field>
              </div>
              <Field label={t(locale, "pb_field_mitigation")}>
                <textarea
                  className="pb-input"
                  value={r.mitigation}
                  onChange={(e) => updateRisk(r.id, { mitigation: e.target.value })}
                  rows={2}
                  placeholder={t(locale, "pb_field_mitigation_ph")}
                  maxLength={300}
                />
              </Field>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addRisk}
          className="btn ghost"
          style={{ marginTop: 14 }}
        >
          + {t(locale, "pb_add_risk")}
        </button>
      </div>

      <div>
        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 10 }}>
          {t(locale, "pb_safeguards_title")}
        </div>
        <p style={{ fontSize: 12.5, color: "var(--muted)", margin: "0 0 14px", lineHeight: 1.5 }}>
          {t(locale, "pb_safeguards_hint")}
        </p>
        <div style={{ display: "grid", gap: 8 }}>
          {SAFEGUARDS.map((sg) => {
            const on = proposal.safeguards[sg.id];
            return (
              <label
                key={sg.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 12,
                  alignItems: "start",
                  padding: 12,
                  border: `1px solid ${on ? "var(--orange)" : "var(--line)"}`,
                  background: on ? "color-mix(in oklab, var(--orange) 4%, #fff)" : "#fff",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => toggleSafeguard(sg.id)}
                  style={{ width: 18, height: 18, marginTop: 2, accentColor: "var(--orange)" }}
                />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t(locale, sg.key)}</div>
                  <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2, lineHeight: 1.5 }}>
                    {t(locale, sg.descKey)}
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
