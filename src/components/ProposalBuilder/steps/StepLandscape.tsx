import { t } from "@/i18n/dict";
import type { Locale } from "@/i18n/config";
import type { Proposal, Biome, Scale } from "../types";
import type { ProposalUpdater } from "../state";
import { BIOMES, SCALES } from "../presets";
import { Field } from "./StepIntro";

type Props = { locale: Locale; proposal: Proposal; update: ProposalUpdater };

export function StepLandscape({ locale, proposal, update }: Props) {
  return (
    <div style={{ display: "grid", gap: 22 }}>
      <p className="lede" style={{ margin: 0 }}>
        {t(locale, "pb_landscape_lede")}
      </p>

      <Field label={t(locale, "pb_field_biome")} hint={t(locale, "pb_field_biome_hint")} required>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: 8,
          }}
        >
          {BIOMES.map((b) => {
            const sel = proposal.biome === b.id;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => update({ biome: b.id as Biome })}
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
                {t(locale, b.key)}
              </button>
            );
          })}
        </div>
      </Field>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 22 }}>
        <Field label={t(locale, "pb_field_country")} required>
          <input
            type="text"
            className="pb-input"
            value={proposal.country}
            onChange={(e) => update({ country: e.target.value })}
            placeholder={t(locale, "pb_field_country_ph")}
            maxLength={120}
          />
        </Field>
        <Field label={t(locale, "pb_field_duration")} hint={t(locale, "pb_field_duration_hint")}>
          <select
            className="pb-input"
            value={proposal.durationYears}
            onChange={(e) => update({ durationYears: Number(e.target.value) })}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((y) => (
              <option key={y} value={y}>
                {y} {y === 1 ? t(locale, "pb_year") : t(locale, "pb_years")}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={t(locale, "pb_field_scale")} hint={t(locale, "pb_field_scale_hint")}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {SCALES.map((s) => {
            const sel = proposal.scale === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => update({ scale: s.id as Scale })}
                style={{
                  padding: "8px 14px",
                  border: `1px solid ${sel ? "var(--orange)" : "var(--line)"}`,
                  background: sel ? "var(--orange)" : "#fff",
                  color: sel ? "#fff" : "var(--ink-2)",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                {t(locale, s.key)}
              </button>
            );
          })}
        </div>
      </Field>
    </div>
  );
}
