"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { Locale } from "@/i18n/config";
import { Arrow, Doc, Download, Pdf, Search, Xlsx } from "./Icons";

const LeafletMap = dynamic(() => import("./LeafletMap").then((m) => m.LeafletMap), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: 420,
        borderRadius: 4,
        background: "#1d1d1b",
        display: "grid",
        placeItems: "center",
        color: "#6b6a61",
        fontSize: 12,
      }}
    >
      Loading map…
    </div>
  ),
});

type Pin = {
  id: string;
  name: string;
  position: [number, number]; // [lat, lng]
  tag: string;
  brief: string;
  narrator: string;
  color: string;
};

// Paisajes WWF como puntos de ejemplo. Los primeros tres son los casos
// principales con narrador; el resto son paisajes asociados del programa
// para mostrar la cobertura global.
const PINS: Pin[] = [
  {
    id: "madagascar",
    name: "Madagascar",
    position: [-18.77, 46.87],
    tag: "Marine & terrestrial",
    brief: "Sovereign debt conversion supports MPA management and coastal livelihoods.",
    narrator: "Santatra",
    color: "#009191", // teal
  },
  {
    id: "cerrado",
    name: "Cerrado, Brazil",
    position: [-12.5, -48.0],
    tag: "Food & agriculture",
    brief: "Blended finance shifts the soy-and-cattle frontier to regenerative practice.",
    narrator: "Jaciele",
    color: "#f07d00", // orange
  },
  {
    id: "kaza",
    name: "KAZA",
    position: [-18.5, 24.5],
    tag: "Transboundary",
    brief: "Five-country conservation area piloting pooled financing and community dividends.",
    narrator: "Jane",
    color: "#2f5a34", // forest-2
  },
  {
    id: "amazon",
    name: "Amazon",
    position: [-3.5, -62.0],
    tag: "Forest restoration",
    brief: "Landscape-scale restoration finance across indigenous territories and protected areas.",
    narrator: "—",
    color: "#2f5a34",
  },
  {
    id: "coral-triangle",
    name: "Coral Triangle",
    position: [-3.0, 130.0],
    tag: "Marine",
    brief: "Outcome-based MPA financing in the world's most biodiverse marine region.",
    narrator: "—",
    color: "#009191",
  },
  {
    id: "borneo",
    name: "Borneo",
    position: [1.0, 114.0],
    tag: "Food & agriculture",
    brief: "Sustainable palm oil and certified commodity finance to replace deforestation drivers.",
    narrator: "—",
    color: "#f07d00",
  },
  {
    id: "mekong",
    name: "Greater Mekong",
    position: [17.5, 104.0],
    tag: "Transboundary",
    brief: "Basin-wide blended finance for hydropower re-optimisation and fisheries.",
    narrator: "—",
    color: "#2f5a34",
  },
  {
    id: "himalayas",
    name: "Eastern Himalayas",
    position: [28.0, 88.0],
    tag: "Mountain landscapes",
    brief: "Water-tower financing: payments for ecosystem services downstream of glaciers.",
    narrator: "—",
    color: "#009191",
  },
  {
    id: "galapagos",
    name: "Galápagos",
    position: [-0.95, -90.97],
    tag: "Marine",
    brief: "Debt-for-nature swap linked to expanded marine reserves.",
    narrator: "—",
    color: "#009191",
  },
  {
    id: "congo",
    name: "Congo Basin",
    position: [-1.0, 22.0],
    tag: "Forest / transboundary",
    brief: "Carbon and biodiversity finance across six Central African nations.",
    narrator: "—",
    color: "#2f5a34",
  },
];

type LibItem = {
  t: string;
  s: string;
  cat: "playbook" | "framework" | "template" | "glossary";
  ic: React.ReactNode;
};

const LIB: LibItem[] = [
  { t: "Sustainable Finance Playbook for Conservation", s: "PDF · 164 pp · v2026.1", cat: "playbook", ic: <Pdf /> },
  { t: "Landscape Finance Approach (LFA) framework", s: "PDF · 52 pp · v2026.1", cat: "framework", ic: <Pdf /> },
  { t: "Readiness self-assessment (editable)", s: "DOCX · 12 questions", cat: "template", ic: <Doc /> },
  { t: "Theory of change canvas — blank", s: "PDF · 1 pp", cat: "template", ic: <Pdf /> },
  { t: "Theory of change — Cerrado worked example", s: "PDF · 4 pp", cat: "template", ic: <Pdf /> },
  { t: "Financial modelling starter", s: "XLSX · blended-finance template", cat: "template", ic: <Xlsx /> },
  { t: "MRV reference sheet", s: "XLSX · measurement", cat: "template", ic: <Xlsx /> },
  { t: "Plain-language glossary", s: "PDF · 112 terms · EN/ES/FR", cat: "glossary", ic: <Pdf /> },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "playbook", label: "Playbook" },
  { id: "framework", label: "Framework" },
  { id: "template", label: "Templates" },
  { id: "glossary", label: "Glossary" },
];

export function ToolkitClient({ locale: _locale }: { locale: Locale }) {
  const [active, setActive] = useState<string>("cerrado");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("all");

  const pin = PINS.find((p) => p.id === active)!;

  const visible = LIB.filter(
    (x) =>
      (filter === "all" || x.cat === filter) &&
      (query === "" || (x.t + " " + x.s).toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <div className="page wrap sec-sm">
      <div className="sec-hd">
        <div>
          <div className="eyebrow">TOOLKIT · RESOURCES & LIBRARY</div>
          <h2 className="h-display" style={{ fontSize: "clamp(30px,4vw,50px)", margin: "8px 0 0" }}>
            Everything, ready to take.
          </h2>
          <p className="lede" style={{ marginTop: 10 }}>
            The Playbook, the LFA framework, ready-to-use templates, a plain-language glossary, and a map of landscapes
            where the approach is being applied.
          </p>
        </div>
      </div>

      {/* MAP + case */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 18, alignItems: "stretch" }}>
        <div className="map-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
            <div className="eyebrow" style={{ color: "var(--orange)" }}>
              INTERACTIVE MAP
            </div>
            <div style={{ fontSize: 11.5, color: "#9b988b" }}>{PINS.length} landscapes</div>
          </div>
          <LeafletMap pins={PINS} active={active} onPick={setActive} />
          <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
            {PINS.map((p) => (
              <button
                key={p.id}
                className="chip"
                onClick={() => setActive(p.id)}
                style={
                  active === p.id
                    ? { background: p.color, borderColor: p.color, color: "#fff" }
                    : { background: "transparent", borderColor: "#3a3a36", color: "#c7c4b8" }
                }
              >
                <span className="swatch" style={{ background: p.color }} />
                {p.name}
              </button>
            ))}
          </div>
        </div>
        <div className="res-card" style={{ padding: 0, overflow: "hidden" }}>
          <div className="phx canopy" style={{ aspectRatio: "16/10", position: "relative", borderRadius: 0 }}>
            <div className="cap">{pin.name.toUpperCase()} [ PHOTO ]</div>
          </div>
          <div style={{ padding: "22px 24px" }}>
            <div className="eyebrow" style={{ color: pin.color }}>
              {pin.tag.toUpperCase()}
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 700, margin: "6px 0 6px", letterSpacing: "-.01em" }}>{pin.name}</h3>
            <p style={{ color: "var(--ink-2)", fontSize: 13.5, margin: 0, lineHeight: 1.5 }}>{pin.brief}</p>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              <button className="btn sm orange">
                Read case <Arrow width={14} height={14} />
              </button>
              <button className="btn sm ghost">1-pager</button>
            </div>
          </div>
        </div>
      </div>

      {/* CASE CARDS */}
      <div className="sec-hd" style={{ marginTop: 72 }}>
        <div>
          <div className="eyebrow">CASE STUDIES</div>
          <h3 className="h-display" style={{ fontSize: "clamp(24px,2.6vw,34px)", margin: "8px 0 0" }}>
            Where the approach is being applied
          </h3>
        </div>
      </div>
      <div className="cases">
        {PINS.filter((p) => p.narrator !== "—").map((p) => (
          <div className="case-card" key={p.id}>
            <div className="cover phx canopy" style={{ borderRadius: 0 }}>
              <div className="cap">{p.name.toUpperCase()}</div>
            </div>
            <div className="body">
              <div className="eyebrow" style={{ color: p.color, fontSize: 11.5, letterSpacing: ".04em" }}>
                {p.tag.toUpperCase()}
              </div>
              <h4>{p.name}</h4>
              <p>{p.brief}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 14,
                }}
              >
                <div style={{ fontSize: 11.5, color: "var(--muted)" }}>Narrator · {p.narrator}</div>
                <button className="btn sm ghost" style={{ padding: ".4rem .7rem" }}>
                  Open <Arrow width={14} height={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIBRARY */}
      <div className="sec-hd" style={{ marginTop: 72 }}>
        <div>
          <div className="eyebrow">LIBRARY</div>
          <h3 className="h-display" style={{ fontSize: "clamp(24px,2.6vw,34px)", margin: "8px 0 0" }}>
            Downloadable documents
          </h3>
          <p className="lede" style={{ marginTop: 8 }}>
            All practical tools, versioned and dated. Everything here is made to be edited and used with partners.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div className="search-input">
            <span className="ic">
              <Search />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              aria-label="Search library"
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`chip ${filter === f.id ? "dark" : ""}`}
            onClick={() => setFilter(f.id)}
            style={{ cursor: "pointer" }}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="lib">
        {visible.map((x, i) => (
          <div className="lib-item" key={i}>
            <div className="ic">{x.ic}</div>
            <div>
              <div className="t">{x.t}</div>
              <div className="s">{x.s}</div>
            </div>
            <button className="btn sm orange" style={{ padding: ".45rem .8rem" }}>
              <Download /> Download
            </button>
          </div>
        ))}
        {visible.length === 0 && (
          <div style={{ padding: 28, textAlign: "center", color: "var(--muted)", gridColumn: "1/-1" }}>
            No documents match.
          </div>
        )}
      </div>
    </div>
  );
}

