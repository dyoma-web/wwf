"use client";

import { Suspense, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import {
  DOCS,
  DOCS_LAST_UPDATED,
  getFeaturedDocs,
  getMappedDocs,
  type Audience,
  type Doc,
  type DocTopic,
  type DocType,
  type Region,
} from "@/data/documents";
import { filterDocs, type Facets } from "@/lib/document-filter";
import { Arrow, Search, Pdf, Doc as DocIc, Xlsx } from "./Icons";

const LeafletMap = dynamic(() => import("./LeafletMap").then((m) => m.LeafletMap), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: 420,
        borderRadius: 0,
        background: "#1d1d1b",
        display: "grid",
        placeItems: "center",
        color: "#6b6a61",
        fontSize: 12,
      }}
    >
      Loading mapâ€¦
    </div>
  ),
});

const REGION_COLORS: Record<Region, string> = {
  global: "#9b988b",
  africa: "#2f5a34",
  asia: "#009191",
  latam: "#f07d00",
  europe: "#6b6a61",
};

const TYPE_OPTIONS: DocType[] = [
  "case-study",
  "guide",
  "report",
  "playbook",
  "brief",
  "briefing-paper",
  "guidance-note",
  "presentation",
];
const TOPIC_OPTIONS: DocTopic[] = ["basics", "mechanisms", "implementation", "strategy"];
const AUDIENCE_OPTIONS: Audience[] = [
  "investor",
  "practitioner",
  "corporate",
  "policymaker",
  "ngo",
  "researcher",
  "community",
];
const REGION_OPTIONS: Region[] = ["global", "africa", "asia", "latam"];

export function ToolkitClient({ locale }: { locale: Locale }) {
  return (
    <Suspense fallback={null}>
      <ToolkitInner locale={locale} />
    </Suspense>
  );
}

function ToolkitInner({ locale }: { locale: Locale }) {
  const sp = useSearchParams();
  const initialFacets: Facets = useMemo(
    () => ({
      type: (sp.get("type") as DocType) ?? undefined,
      topic: (sp.get("topic") as DocTopic) ?? undefined,
      audience: (sp.get("audience") as Audience) ?? undefined,
      region: (sp.get("region") as Region) ?? undefined,
      query: sp.get("q") ?? "",
    }),
    [sp],
  );

  const [facets, setFacets] = useState<Facets>(initialFacets);
  const [activeMapPin, setActiveMapPin] = useState<string>(() => {
    const mapped = getMappedDocs();
    return mapped[0]?.id ?? "";
  });

  const mappedDocs = getMappedDocs();
  const featuredDocs = getFeaturedDocs();
  const visible = filterDocs(facets);
  const activePin = mappedDocs.find((d) => d.id === activeMapPin) ?? mappedDocs[0];

  const facetTypeLabel = (typ: DocType) => t(locale, `type_${typ.replace(/-/g, "_")}`);

  const clearFilters = () =>
    setFacets({ type: undefined, topic: undefined, audience: undefined, region: undefined, query: "" });

  const hasActiveFilter = !!(facets.type || facets.topic || facets.audience || facets.region || facets.query);

  return (
    <div className="page wrap sec-sm">
      <div className="sec-hd">
        <div>
          <div className="eyebrow">{t(locale, "toolkit_eyebrow")}</div>
          <h2 className="h-display" style={{ fontSize: "clamp(30px,4vw,50px)", margin: "8px 0 0" }}>
            {t(locale, "toolkit_title")}
          </h2>
          <p className="lede" style={{ marginTop: 10 }}>
            {t(locale, "toolkit_subtitle")}
          </p>
        </div>
      </div>

      {/* MAP + active case detail */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 18, alignItems: "stretch" }}>
        <div className="map-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
            <div className="eyebrow" style={{ color: "var(--orange)" }}>
              {t(locale, "toolkit_map")}
            </div>
            <div style={{ fontSize: 11.5, color: "#9b988b" }}>
              {mappedDocs.length} {t(locale, "toolkit_landscapes")}
            </div>
          </div>
          <LeafletMap
            pins={mappedDocs.map((d) => ({
              id: d.id,
              name: d.map!.label,
              position: d.map!.position,
              color: REGION_COLORS[d.regions[0]] ?? "#9b988b",
              tag: t(locale, `topic_${d.topic}`),
            }))}
            active={activePin?.id ?? ""}
            onPick={setActiveMapPin}
          />
          <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
            {mappedDocs.map((d) => {
              const color = REGION_COLORS[d.regions[0]] ?? "#9b988b";
              return (
                <button
                  key={d.id}
                  className="chip"
                  onClick={() => setActiveMapPin(d.id)}
                  style={
                    activePin?.id === d.id
                      ? { background: color, borderColor: color, color: "#fff" }
                      : { background: "transparent", borderColor: "#3a3a36", color: "#c7c4b8" }
                  }
                >
                  <span className="swatch" style={{ background: color }} />
                  {d.map!.label}
                </button>
              );
            })}
          </div>
        </div>
        {activePin && (
          <div className="res-card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div className="phx canopy" style={{ aspectRatio: "16/10", position: "relative", borderRadius: 0 }}>
              <div className="cap">{activePin.map!.label.toUpperCase()}</div>
            </div>
            <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
              <div className="eyebrow" style={{ color: REGION_COLORS[activePin.regions[0]] }}>
                {t(locale, `region_${activePin.regions[0]}`).toUpperCase()}
                {" Â· "}
                {t(locale, `topic_${activePin.topic}`).toUpperCase()}
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: "6px 0 6px", letterSpacing: "-.01em" }}>
                {activePin.title}
              </h3>
              <p style={{ color: "var(--ink-2)", fontSize: 13.5, margin: 0, lineHeight: 1.5, flex: 1 }}>
                {activePin.description}
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
                <a href={activePin.url} target="_blank" rel="noopener noreferrer" className="btn sm orange">
                  {t(locale, "nav_open_doc")} <Arrow width={14} height={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FEATURED CASE STUDIES */}
      <div className="sec-hd" style={{ marginTop: 72 }}>
        <div>
          <div className="eyebrow">{t(locale, "toolkit_cases_eyebrow")}</div>
          <h3 className="h-display" style={{ fontSize: "clamp(24px,2.6vw,34px)", margin: "8px 0 0" }}>
            {t(locale, "toolkit_cases_title")}
          </h3>
        </div>
      </div>
      <div className="cases">
        {featuredDocs.map((d) => {
          const color = REGION_COLORS[d.regions[0]] ?? "#9b988b";
          return (
            <a
              key={d.id}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="case-card"
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <div className="cover phx canopy" style={{ borderRadius: 0 }}>
                <div className="cap">{(d.countries?.[0] ?? d.regions[0]).toUpperCase()}</div>
              </div>
              <div className="body">
                <div className="eyebrow" style={{ color, fontSize: 11.5, letterSpacing: ".04em" }}>
                  {t(locale, `type_${d.type.replace(/-/g, "_")}`).toUpperCase()}
                  {" Â· "}
                  {t(locale, `topic_${d.topic}`).toUpperCase()}
                </div>
                <h4>{d.title}</h4>
                <p>{d.description}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 14,
                  }}
                >
                  <div style={{ fontSize: 11.5, color: "var(--muted)" }}>
                    {t(locale, "toolkit_external")}
                  </div>
                  <span className="btn sm ghost" style={{ padding: ".4rem .7rem" }}>
                    {t(locale, "toolkit_open")} <Arrow width={14} height={14} />
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* LIBRARY with multi-facet filters */}
      <div className="sec-hd" style={{ marginTop: 72 }}>
        <div>
          <div className="eyebrow">{t(locale, "toolkit_library")}</div>
          <h3 className="h-display" style={{ fontSize: "clamp(24px,2.6vw,34px)", margin: "8px 0 0" }}>
            {t(locale, "toolkit_library_title")}
          </h3>
          <p className="lede" style={{ marginTop: 8 }}>
            {t(locale, "toolkit_library_sub")}
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div className="search-input">
            <span className="ic">
              <Search />
            </span>
            <input
              value={facets.query ?? ""}
              onChange={(e) => setFacets((f) => ({ ...f, query: e.target.value }))}
              placeholder={t(locale, "toolkit_search")}
              aria-label={t(locale, "toolkit_search")}
            />
          </div>
        </div>
      </div>

      {/* Filter row */}
      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          alignItems: "center",
          marginBottom: 18,
          padding: "16px 20px",
          background: "var(--paper)",
          border: "1px solid var(--line)",
          borderRadius: 0,
        }}
      >
        <FacetSelect
          locale={locale}
          labelKey="toolkit_filter_topic"
          value={facets.topic}
          options={TOPIC_OPTIONS}
          labelFor={(v) => t(locale, `topic_${v}`)}
          onChange={(v) => setFacets((f) => ({ ...f, topic: v as DocTopic | undefined }))}
        />
        <FacetSelect
          locale={locale}
          labelKey="toolkit_filter_audience"
          value={facets.audience}
          options={AUDIENCE_OPTIONS}
          labelFor={(v) => t(locale, `aud_${v}`)}
          onChange={(v) => setFacets((f) => ({ ...f, audience: v as Audience | undefined }))}
        />
        <FacetSelect
          locale={locale}
          labelKey="toolkit_filter_region"
          value={facets.region}
          options={REGION_OPTIONS}
          labelFor={(v) => t(locale, `region_${v}`)}
          onChange={(v) => setFacets((f) => ({ ...f, region: v as Region | undefined }))}
        />
        <FacetSelect
          locale={locale}
          labelKey="toolkit_filter_type"
          value={facets.type}
          options={TYPE_OPTIONS}
          labelFor={(v) => t(locale, `type_${v.replace(/-/g, "_")}`)}
          onChange={(v) => setFacets((f) => ({ ...f, type: v as DocType | undefined }))}
        />
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 12, color: "var(--muted)" }}>
          {visible.length} / {DOCS.length} {t(locale, "toolkit_results_count")}
        </span>
        {hasActiveFilter && (
          <button
            onClick={clearFilters}
            style={{
              border: 0,
              background: "transparent",
              color: "var(--orange)",
              fontSize: 12,
              cursor: "pointer",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            {t(locale, "toolkit_filter_clear")}
          </button>
        )}
      </div>

      <div className="lib">
        {visible.map((d) => (
          <DocCard key={d.id} doc={d} locale={locale} />
        ))}
        {visible.length === 0 && (
          <div style={{ padding: 36, textAlign: "center", color: "var(--muted)", gridColumn: "1/-1" }}>
            {t(locale, "toolkit_no_match")}
          </div>
        )}
      </div>

      <p
        style={{
          marginTop: 24,
          fontSize: 11.5,
          color: "var(--muted)",
          lineHeight: 1.5,
          maxWidth: 800,
        }}
      >
        {t(locale, "toolkit_disclaimer")} <strong>{DOCS_LAST_UPDATED}</strong>.
      </p>
    </div>
  );
}

function FacetSelect({
  locale,
  labelKey,
  value,
  options,
  labelFor,
  onChange,
}: {
  locale: Locale;
  labelKey: string;
  value: string | undefined;
  options: string[];
  labelFor: (v: string) => string;
  onChange: (v: string | undefined) => void;
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <span style={{ fontSize: 10.5, color: "var(--muted)", letterSpacing: ".04em", fontWeight: 600 }}>
        {t(locale, labelKey).toUpperCase()}
      </span>
      <select
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value || undefined)}
        style={{
          padding: "7px 28px 7px 10px",
          border: "1px solid var(--line)",
          borderRadius: 0,
          background: "#fff",
          font: "inherit",
          fontSize: 13,
          color: value ? "var(--ink)" : "var(--muted)",
          cursor: "pointer",
        }}
      >
        <option value="">{t(locale, "toolkit_filter_any")}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {labelFor(o)}
          </option>
        ))}
      </select>
    </label>
  );
}

function DocCard({ doc, locale }: { doc: Doc; locale: Locale }) {
  const formatIcon =
    doc.fileName.toLowerCase().endsWith(".pdf") ? (
      <Pdf />
    ) : doc.fileName.toLowerCase().endsWith(".docx") ? (
      <DocIc />
    ) : doc.fileName.toLowerCase().endsWith(".xlsx") ? (
      <Xlsx />
    ) : (
      <Pdf />
    );

  return (
    <a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr",
        gap: 16,
        alignItems: "flex-start",
        padding: "18px 20px",
        border: "1px solid var(--line)",
        borderRadius: 0,
        background: "#fff",
        textDecoration: "none",
        color: "inherit",
        transition: "border-color .12s, transform .12s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--ink)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
    >
      <div
        style={{
          width: 48,
          height: 58,
          borderRadius: 0,
          background: "var(--paper)",
          display: "grid",
          placeItems: "center",
          color: "var(--ink-2)",
          flex: "0 0 48px",
        }}
      >
        {formatIcon}
      </div>
      <div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 6 }}>
          <span className="chip" style={{ fontSize: 10.5 }}>
            {t(locale, `type_${doc.type.replace(/-/g, "_")}`)}
          </span>
          <span className="chip" style={{ fontSize: 10.5 }}>
            {t(locale, `topic_${doc.topic}`)}
          </span>
          {doc.regions.map((r) => (
            <span key={r} className="chip" style={{ fontSize: 10.5 }}>
              {t(locale, `region_${r}`)}
            </span>
          ))}
        </div>
        <div style={{ fontWeight: 600, fontSize: 14.5, lineHeight: 1.3 }}>{doc.title}</div>
        <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 6, lineHeight: 1.5 }}>{doc.description}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            gap: 12,
          }}
        >
          <span style={{ fontSize: 11, color: "var(--muted)" }}>{doc.fileName}</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--orange)", whiteSpace: "nowrap" }}>
            {t(locale, "nav_open_doc")} â†’
          </span>
        </div>
      </div>
    </a>
  );
}
