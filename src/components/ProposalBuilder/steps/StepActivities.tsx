import { t } from "@/i18n/dict";
import type { Locale } from "@/i18n/config";
import type { Proposal, Activity } from "../types";
import type { ProposalUpdater } from "../state";
import { Field } from "./StepIntro";

type Props = { locale: Locale; proposal: Proposal; update: ProposalUpdater };

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export function StepActivities({ locale, proposal, update }: Props) {
  const dur = proposal.durationYears;
  const years = Array.from({ length: dur }, (_, i) => i + 1);

  const addActivity = () => {
    const a: Activity = {
      id: uid(),
      name: "",
      deliverable: "",
      yearStart: 1,
      yearEnd: dur,
    };
    update({ activities: [...proposal.activities, a] });
  };

  const updateActivity = (id: string, patch: Partial<Activity>) => {
    update({
      activities: proposal.activities.map((a) => (a.id === id ? { ...a, ...patch } : a)),
    });
  };

  const removeActivity = (id: string) => {
    update({ activities: proposal.activities.filter((a) => a.id !== id) });
  };

  return (
    <div style={{ display: "grid", gap: 18 }}>
      <p className="lede" style={{ margin: 0 }}>
        {t(locale, "pb_activities_lede")}
      </p>

      {proposal.activities.length === 0 && (
        <div
          style={{
            padding: "24px 18px",
            border: "1px dashed var(--line)",
            textAlign: "center",
            color: "var(--muted)",
            fontSize: 13.5,
          }}
        >
          {t(locale, "pb_activities_empty")}
        </div>
      )}

      {proposal.activities.map((a, idx) => (
        <div
          key={a.id}
          style={{
            border: "1px solid var(--line)",
            padding: 16,
            display: "grid",
            gap: 12,
            background: "#fff",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 600, fontSize: 13.5, color: "var(--muted)" }}>
              {t(locale, "pb_activity")} {idx + 1}
            </span>
            <button
              type="button"
              onClick={() => removeActivity(a.id)}
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
          <Field label={t(locale, "pb_field_activity_name")}>
            <input
              type="text"
              className="pb-input"
              value={a.name}
              onChange={(e) => updateActivity(a.id, { name: e.target.value })}
              placeholder={t(locale, "pb_field_activity_name_ph")}
              maxLength={160}
            />
          </Field>
          <Field label={t(locale, "pb_field_deliverable")}>
            <input
              type="text"
              className="pb-input"
              value={a.deliverable}
              onChange={(e) => updateActivity(a.id, { deliverable: e.target.value })}
              placeholder={t(locale, "pb_field_deliverable_ph")}
              maxLength={200}
            />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <Field label={t(locale, "pb_field_year_start")}>
              <select
                className="pb-input"
                value={a.yearStart}
                onChange={(e) =>
                  updateActivity(a.id, {
                    yearStart: Number(e.target.value),
                    yearEnd: Math.max(Number(e.target.value), a.yearEnd),
                  })
                }
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {t(locale, "pb_year")} {y}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={t(locale, "pb_field_year_end")}>
              <select
                className="pb-input"
                value={a.yearEnd}
                onChange={(e) => updateActivity(a.id, { yearEnd: Number(e.target.value) })}
              >
                {years
                  .filter((y) => y >= a.yearStart)
                  .map((y) => (
                    <option key={y} value={y}>
                      {t(locale, "pb_year")} {y}
                    </option>
                  ))}
              </select>
            </Field>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addActivity}
        className="btn ghost"
        style={{ alignSelf: "start" }}
      >
        + {t(locale, "pb_add_activity")}
      </button>
    </div>
  );
}
