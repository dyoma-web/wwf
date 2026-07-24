"use client";

import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { asset } from "@/lib/asset";
import { Arrow, Search } from "./Icons";

/** Registro genérico del mapeo: los campos varían por pestaña y los vacíos se omiten. */
type FundingRecord = {
  name: string;
  summary: string;
  source?: string;
  programme?: string;
  programmeSummary?: string;
  entityType?: string;
  capital?: string;
  instruments?: string;
  scale?: string;
  countries?: string;
  geo?: string;
  frequency?: string;
  size?: string;
  thematic?: string;
  targetGroups?: string;
  activities?: string;
  whoCanApply?: string;
  requirements?: string;
  enablingEnv?: string;
  relevance?: string;
  notes?: string;
  farmerAccess?: string;
};

const TABS = [
  { id: "global", labelKey: "fx_tab_global" },
  { id: "cambodia", labelKey: "fx_tab_cambodia" },
  { id: "indonesia", labelKey: "fx_tab_indonesia" },
  { id: "peru", labelKey: "fx_tab_peru" },
  { id: "zambia", labelKey: "fx_tab_zambia" },
  { id: "platforms", labelKey: "fx_tab_platforms" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const INSTRUMENT_OPTIONS = [
  "Grants",
  "Loans",
  "Equity",
  "Blended",
  "Guarantees",
  "Technical assistance",
];

const DOWNLOADS = [
  {
    label: "Global Mapping of Funders for Agrifood Systems",
    url: "https://cursos.landscapefinancehub.org/descargas/global-mapping-of-funders-for-agrifood-systems.xlsx",
  },
  {
    label: "Country-level Mapping of Funding Opportunities",
    url: "https://cursos.landscapefinancehub.org/descargas/county-level-mapping-of-funding-opportunities.xlsx",
  },
];

/** Campos mostrados en el detalle expandido, en orden, con su clave de etiqueta. */
const DETAIL_FIELDS: { key: keyof FundingRecord; labelKey: string }[] = [
  { key: "programmeSummary", labelKey: "fx_d_programme" },
  { key: "entityType", labelKey: "fx_d_entity_type" },
  { key: "instruments", labelKey: "fx_d_instruments" },
  { key: "capital", labelKey: "fx_d_capital" },
  { key: "scale", labelKey: "fx_d_scale" },
  { key: "countries", labelKey: "fx_d_countries" },
  { key: "geo", labelKey: "fx_d_countries" },
  { key: "size", labelKey: "fx_d_size" },
  { key: "frequency", labelKey: "fx_d_frequency" },
  { key: "thematic", labelKey: "fx_d_thematic" },
  { key: "targetGroups", labelKey: "fx_d_targets" },
  { key: "activities", labelKey: "fx_d_activities" },
  { key: "whoCanApply", labelKey: "fx_d_apply" },
  { key: "requirements", labelKey: "fx_d_requirements" },
  { key: "enablingEnv", labelKey: "fx_d_enabling" },
  { key: "relevance", labelKey: "fx_d_relevance" },
  { key: "notes", labelKey: "fx_d_notes" },
];

const urlsFrom = (source: string): string[] =>
  (source.match(/https?:\/\/[^\s,;]+/g) ?? []).slice(0, 4);

export function FundingExplorer({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<TabId>("global");
  const [data, setData] = useState<Partial<Record<TabId, FundingRecord[]>>>({});
  const [query, setQuery] = useState("");
  const [instrument, setInstrument] = useState("");
  const [access, setAccess] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);

  // Carga perezosa del JSON de la pestaña activa (solo con el modal abierto)
  useEffect(() => {
    if (!open || data[tab]) return;
    let cancelled = false;
    fetch(asset(`/data/funding-${tab}.json`))
      .then((r) => r.json())
      .then((j) => {
        if (!cancelled) setData((d) => ({ ...d, [tab]: j.records as FundingRecord[] }));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [open, tab, data]);

  // Cierre con Escape y bloqueo del scroll de fondo
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const records = useMemo(() => {
    const base = data[tab] ?? [];
    const q = query.trim().toLowerCase();
    return base.filter((r) => {
      if (q) {
        const hay = `${r.name} ${r.summary} ${r.programme ?? ""} ${r.thematic ?? ""} ${r.targetGroups ?? ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (instrument && !(r.instruments ?? "").toLowerCase().includes(instrument.toLowerCase())) return false;
      if (access && r.farmerAccess !== access) return false;
      return true;
    });
  }, [data, tab, query, instrument, access]);

  const switchTab = (id: TabId) => {
    setTab(id);
    setExpanded(null);
  };

  const accessLabel = (v: string) =>
    v === "Yes" ? t(locale, "fx_access_yes") : v === "No" ? t(locale, "fx_access_no") : t(locale, "fx_access_maybe");

  const isPlatforms = tab === "platforms";

  return (
    <>
      {/* Tarjeta compacta en el hub */}
      <div className="fx-card">
        <div>
          <div className="eyebrow" style={{ color: "var(--orange)" }}>
            {t(locale, "fx_eyebrow")}
          </div>
          <h3>{t(locale, "fx_title")}</h3>
          <p>{t(locale, "fx_sub")}</p>
        </div>
        <button className="btn orange" onClick={() => setOpen(true)}>
          {t(locale, "fx_open")} <Arrow width={14} height={14} />
        </button>
      </div>

      {/* Modal explorador */}
      {open && (
        <div className="course-modal-backdrop" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="course-modal fx-modal" role="dialog" aria-modal="true" aria-label={t(locale, "fx_title")}>
            <div className="course-modal-hd">
              <div className="t">
                <span>{t(locale, "fx_title")}</span>
              </div>
              <button
                className="course-modal-close"
                onClick={() => setOpen(false)}
                aria-label={t(locale, "learning_preview_close")}
              >
                ✕
              </button>
            </div>

            <div className="fx-toolbar">
              <div className="fx-tabs">
                {TABS.map((tb) => (
                  <button key={tb.id} className={tb.id === tab ? "on" : ""} onClick={() => switchTab(tb.id)}>
                    {t(locale, tb.labelKey)}
                  </button>
                ))}
              </div>
              <div className="fx-filters">
                <div className="search-input">
                  <span className="ic">
                    <Search />
                  </span>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t(locale, "fx_search")}
                    aria-label={t(locale, "fx_search")}
                  />
                </div>
                {!isPlatforms && (
                  <>
                    <select value={instrument} onChange={(e) => setInstrument(e.target.value)} aria-label={t(locale, "fx_filter_instrument")}>
                      <option value="">{t(locale, "fx_filter_instrument")}</option>
                      {INSTRUMENT_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <select value={access} onChange={(e) => setAccess(e.target.value)} aria-label={t(locale, "fx_filter_access")}>
                      <option value="">{t(locale, "fx_filter_access")}</option>
                      <option value="Yes">{t(locale, "fx_access_yes")}</option>
                      <option value="No">{t(locale, "fx_access_no")}</option>
                      <option value="Maybe">{t(locale, "fx_access_maybe")}</option>
                    </select>
                  </>
                )}
                <span className="fx-count">
                  {records.length} {t(locale, "fx_results")}
                </span>
              </div>
            </div>

            <div className="fx-list">
              {records.map((r, i) => (
                <div key={`${tab}-${i}`} className={`fx-row ${expanded === i ? "open" : ""}`}>
                  <button className="fx-row-hd" onClick={() => setExpanded(expanded === i ? null : i)}>
                    <div className="fx-row-main">
                      <div className="t">
                        {r.name}
                        {r.programme ? <span className="prog"> · {r.programme}</span> : null}
                      </div>
                      <div className="s">{r.summary}</div>
                    </div>
                    <div className="fx-row-side">
                      {r.farmerAccess ? (
                        <span className={`fx-badge ${r.farmerAccess.toLowerCase()}`}>{accessLabel(r.farmerAccess)}</span>
                      ) : null}
                      <span className="fx-chevron">{expanded === i ? "−" : "+"}</span>
                    </div>
                  </button>
                  {expanded === i && (
                    <div className="fx-detail">
                      {DETAIL_FIELDS.map(({ key, labelKey }) =>
                        r[key] ? (
                          <div key={key} className="fx-field">
                            <div className="k">{t(locale, labelKey)}</div>
                            <div className="v">{r[key]}</div>
                          </div>
                        ) : null,
                      )}
                      {r.source ? (
                        <div className="fx-field">
                          <div className="k">{t(locale, "fx_d_source")}</div>
                          <div className="v">
                            {urlsFrom(r.source).map((u) => (
                              <a key={u} href={u} target="_blank" rel="noopener noreferrer">
                                {new URL(u).hostname}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              ))}
              {records.length === 0 && <div className="fx-empty">{t(locale, "fx_empty")}</div>}
            </div>

            <div className="course-modal-ft">
              <p>
                {t(locale, "fx_note")} · {t(locale, "fx_download")}:{" "}
                <a href={DOWNLOADS[0].url} style={{ color: "#fff" }}>
                  Global
                </a>
                {" · "}
                <a href={DOWNLOADS[1].url} style={{ color: "#fff" }}>
                  Country-level
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
