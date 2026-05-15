import { t } from "@/i18n/dict";
import type { Locale } from "@/i18n/config";
import type { Proposal, Stakeholder, StakeholderRole, EngagementLevel } from "../types";
import type { ProposalUpdater } from "../state";
import { STAKEHOLDER_ROLES, ENGAGEMENT_LEVELS } from "../presets";
import { Field } from "./StepIntro";

type Props = { locale: Locale; proposal: Proposal; update: ProposalUpdater };

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export function StepStakeholders({ locale, proposal, update }: Props) {
  const addStakeholder = () => {
    const s: Stakeholder = {
      id: uid(),
      name: "",
      role: "community",
      engagement: "consult",
    };
    update({ stakeholders: [...proposal.stakeholders, s] });
  };

  const updateStakeholder = (id: string, patch: Partial<Stakeholder>) => {
    update({
      stakeholders: proposal.stakeholders.map((s) => (s.id === id ? { ...s, ...patch } : s)),
    });
  };

  const removeStakeholder = (id: string) => {
    update({ stakeholders: proposal.stakeholders.filter((s) => s.id !== id) });
  };

  return (
    <div style={{ display: "grid", gap: 22 }}>
      <p className="lede" style={{ margin: 0 }}>
        {t(locale, "pb_stakeholders_lede")}
      </p>

      <Field
        label={t(locale, "pb_field_beneficiaries")}
        hint={t(locale, "pb_field_beneficiaries_hint")}
      >
        <textarea
          className="pb-input"
          value={proposal.primaryBeneficiaries}
          onChange={(e) => update({ primaryBeneficiaries: e.target.value })}
          placeholder={t(locale, "pb_field_beneficiaries_ph")}
          rows={3}
          maxLength={500}
        />
      </Field>

      <Field label={t(locale, "pb_field_beneficiary_count")}>
        <input
          type="number"
          className="pb-input"
          min={0}
          value={proposal.beneficiaryCount || ""}
          onChange={(e) => update({ beneficiaryCount: Number(e.target.value) || 0 })}
          placeholder="0"
          style={{ maxWidth: 220 }}
        />
      </Field>

      <div>
        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 10 }}>
          {t(locale, "pb_stakeholder_list")}
        </div>
        <p style={{ fontSize: 12.5, color: "var(--muted)", margin: "0 0 14px", lineHeight: 1.5 }}>
          {t(locale, "pb_stakeholder_list_hint")}
        </p>

        {proposal.stakeholders.length === 0 && (
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
            {t(locale, "pb_stakeholders_empty")}
          </div>
        )}

        <div style={{ display: "grid", gap: 10 }}>
          {proposal.stakeholders.map((s) => (
            <div
              key={s.id}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.2fr 1.2fr auto",
                gap: 10,
                alignItems: "center",
                padding: 12,
                border: "1px solid var(--line)",
                background: "#fff",
              }}
            >
              <input
                type="text"
                className="pb-input"
                value={s.name}
                onChange={(e) => updateStakeholder(s.id, { name: e.target.value })}
                placeholder={t(locale, "pb_field_stakeholder_name_ph")}
                maxLength={140}
              />
              <select
                className="pb-input"
                value={s.role}
                onChange={(e) =>
                  updateStakeholder(s.id, { role: e.target.value as StakeholderRole })
                }
              >
                {STAKEHOLDER_ROLES.map((r) => (
                  <option key={r.id} value={r.id}>
                    {t(locale, r.key)}
                  </option>
                ))}
              </select>
              <select
                className="pb-input"
                value={s.engagement}
                onChange={(e) =>
                  updateStakeholder(s.id, { engagement: e.target.value as EngagementLevel })
                }
              >
                {ENGAGEMENT_LEVELS.map((e) => (
                  <option key={e.id} value={e.id}>
                    {t(locale, e.key)}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => removeStakeholder(s.id)}
                style={{
                  background: "none",
                  border: 0,
                  color: "var(--muted)",
                  fontSize: 12,
                  cursor: "pointer",
                  textDecoration: "underline",
                  padding: "0 6px",
                }}
              >
                {t(locale, "pb_remove")}
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addStakeholder}
          className="btn ghost"
          style={{ marginTop: 14 }}
        >
          + {t(locale, "pb_add_stakeholder")}
        </button>
      </div>
    </div>
  );
}
