import { t } from "@/i18n/dict";
import type { Locale } from "@/i18n/config";
import type { Proposal, ProjectType, BudgetLine } from "../types";
import type { ProposalUpdater } from "../state";
import { PROJECT_TYPES, BUDGET_PRESETS } from "../presets";
import { Field } from "./StepIntro";

type Props = { locale: Locale; proposal: Proposal; update: ProposalUpdater };

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function lineFromCategory(category: string, durationYears: number): BudgetLine {
  return {
    id: uid(),
    category,
    description: "",
    amounts: Array(durationYears).fill(0),
  };
}

export function StepBudget({ locale, proposal, update }: Props) {
  const dur = proposal.durationYears;

  const selectProjectType = (pt: ProjectType) => {
    // Reemplaza líneas vacías por el preset; conserva las que ya tienen montos.
    const preset = BUDGET_PRESETS[pt].map((cat) => lineFromCategory(cat, dur));
    const hasData = proposal.budgetLines.some((l) => l.amounts.some((a) => a > 0));
    update({
      projectType: pt,
      budgetLines: hasData ? proposal.budgetLines : preset,
    });
  };

  const addLine = () => {
    update({ budgetLines: [...proposal.budgetLines, lineFromCategory("", dur)] });
  };

  const updateLine = (id: string, patch: Partial<BudgetLine>) => {
    update({
      budgetLines: proposal.budgetLines.map((l) => (l.id === id ? { ...l, ...patch } : l)),
    });
  };

  const updateAmount = (id: string, year: number, val: number) => {
    update({
      budgetLines: proposal.budgetLines.map((l) =>
        l.id === id
          ? {
              ...l,
              amounts: l.amounts.map((a, idx) => (idx === year ? val : a)),
            }
          : l,
      ),
    });
  };

  const removeLine = (id: string) => {
    update({ budgetLines: proposal.budgetLines.filter((l) => l.id !== id) });
  };

  // Totales
  const yearTotals = Array(dur).fill(0);
  let directTotal = 0;
  for (const line of proposal.budgetLines) {
    for (let y = 0; y < dur; y++) {
      const v = line.amounts[y] || 0;
      yearTotals[y] += v;
      directTotal += v;
    }
  }
  const overhead = directTotal * (proposal.overheadPct / 100);
  const grandTotal = directTotal + overhead;
  const fmt = (n: number) => n.toLocaleString(locale === "es" ? "es-CO" : locale === "fr" ? "fr-FR" : "en-US", { maximumFractionDigits: 0 });

  return (
    <div style={{ display: "grid", gap: 22 }}>
      <p className="lede" style={{ margin: 0 }}>
        {t(locale, "pb_budget_lede")}
      </p>

      <Field
        label={t(locale, "pb_field_project_type")}
        hint={t(locale, "pb_field_project_type_hint")}
        required
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 8,
          }}
        >
          {PROJECT_TYPES.map((p) => {
            const sel = proposal.projectType === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => selectProjectType(p.id as ProjectType)}
                style={{
                  padding: "10px 12px",
                  border: `1px solid ${sel ? "var(--orange)" : "var(--line)"}`,
                  background: sel ? "color-mix(in oklab, var(--orange) 8%, #fff)" : "#fff",
                  color: "var(--ink)",
                  fontSize: 13.5,
                  fontWeight: 500,
                  textAlign: "left",
                  cursor: "pointer",
                  borderWidth: sel ? 2 : 1,
                }}
              >
                {t(locale, p.key)}
              </button>
            );
          })}
        </div>
      </Field>

      {proposal.projectType && (
        <div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{t(locale, "pb_budget_table")}</span>
            <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 400 }}>
              USD · {dur} {dur === 1 ? t(locale, "pb_year") : t(locale, "pb_years")}
            </span>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 13,
                background: "#fff",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--line)", background: "var(--paper)" }}>
                  <th style={th}>{t(locale, "pb_budget_category")}</th>
                  {Array.from({ length: dur }, (_, i) => (
                    <th key={i} style={{ ...th, width: 110, textAlign: "right" }}>
                      {t(locale, "pb_year")} {i + 1}
                    </th>
                  ))}
                  <th style={{ ...th, width: 110, textAlign: "right" }}>
                    {t(locale, "pb_budget_subtotal")}
                  </th>
                  <th style={{ ...th, width: 40 }} aria-label="Remove"></th>
                </tr>
              </thead>
              <tbody>
                {proposal.budgetLines.map((line) => {
                  const subtotal = line.amounts.reduce((a, b) => a + b, 0);
                  return (
                    <tr key={line.id} style={{ borderBottom: "1px solid var(--line-2)" }}>
                      <td style={td}>
                        <input
                          type="text"
                          className="pb-input pb-input-borderless"
                          value={line.category}
                          onChange={(e) => updateLine(line.id, { category: e.target.value })}
                          placeholder={t(locale, "pb_budget_category_ph")}
                        />
                      </td>
                      {line.amounts.map((amt, y) => (
                        <td key={y} style={{ ...td, textAlign: "right" }}>
                          <input
                            type="number"
                            min={0}
                            className="pb-input pb-input-borderless"
                            value={amt || ""}
                            onChange={(e) =>
                              updateAmount(line.id, y, Number(e.target.value) || 0)
                            }
                            placeholder="0"
                            style={{ textAlign: "right" }}
                          />
                        </td>
                      ))}
                      <td style={{ ...td, textAlign: "right", fontWeight: 600 }}>
                        {fmt(subtotal)}
                      </td>
                      <td style={{ ...td, textAlign: "center" }}>
                        <button
                          type="button"
                          onClick={() => removeLine(line.id)}
                          style={{
                            background: "none",
                            border: 0,
                            color: "var(--muted)",
                            cursor: "pointer",
                            fontSize: 16,
                            lineHeight: 1,
                          }}
                          aria-label={t(locale, "pb_remove")}
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr style={{ borderTop: "2px solid var(--ink)", fontWeight: 700 }}>
                  <td style={td}>{t(locale, "pb_budget_subtotals")}</td>
                  {yearTotals.map((v, i) => (
                    <td key={i} style={{ ...td, textAlign: "right" }}>
                      {fmt(v)}
                    </td>
                  ))}
                  <td style={{ ...td, textAlign: "right" }}>{fmt(directTotal)}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            type="button"
            onClick={addLine}
            className="btn ghost"
            style={{ marginTop: 14 }}
          >
            + {t(locale, "pb_add_budget_line")}
          </button>

          <div
            style={{
              marginTop: 22,
              padding: 16,
              background: "var(--paper)",
              display: "grid",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={{ fontSize: 13.5, fontWeight: 500 }}>
                {t(locale, "pb_field_overhead")}
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                  type="number"
                  min={0}
                  max={30}
                  className="pb-input"
                  value={proposal.overheadPct}
                  onChange={(e) =>
                    update({ overheadPct: Math.max(0, Math.min(30, Number(e.target.value))) })
                  }
                  style={{ width: 80, textAlign: "right" }}
                />
                <span style={{ fontSize: 13 }}>%</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 8,
                borderTop: "1px solid var(--line)",
                fontSize: 13,
                color: "var(--muted)",
              }}
            >
              <span>{t(locale, "pb_budget_direct")}</span>
              <span>USD {fmt(directTotal)}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 13,
                color: "var(--muted)",
              }}
            >
              <span>
                {t(locale, "pb_budget_overhead")} ({proposal.overheadPct}%)
              </span>
              <span>USD {fmt(overhead)}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 8,
                borderTop: "1px solid var(--line)",
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              <span>{t(locale, "pb_budget_total")}</span>
              <span>USD {fmt(grandTotal)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const th: React.CSSProperties = {
  padding: "10px 12px",
  textAlign: "left",
  fontWeight: 600,
  fontSize: 12.5,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--muted)",
};

const td: React.CSSProperties = {
  padding: "6px 8px",
};
