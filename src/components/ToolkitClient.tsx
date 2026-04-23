"use client";

import { useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import type { Locale } from "@/i18n/config";
import { L, t, type Localized } from "@/i18n/dict";
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
  name: Localized;
  position: [number, number]; // [lat, lng]
  tag: Localized;
  brief: Localized;
  narrator: string; // "—" para pines que no son casos featured
  color: string;
};

const PINS: Pin[] = [
  {
    id: "madagascar",
    name: { en: "Madagascar", es: "Madagascar", fr: "Madagascar" },
    position: [-18.77, 46.87],
    tag: {
      en: "Marine & terrestrial",
      es: "Marino y terrestre",
      fr: "Marin et terrestre",
    },
    brief: {
      en: "Sovereign debt conversion supports MPA management and coastal livelihoods.",
      es: "Canje de deuda soberana que financia la gestión de AMP y medios de vida costeros.",
      fr: "Conversion de dette souveraine au service des AMP et des moyens de subsistance côtiers.",
    },
    narrator: "Santatra",
    color: "#009191",
  },
  {
    id: "cerrado",
    name: { en: "Cerrado, Brazil", es: "Cerrado, Brasil", fr: "Cerrado, Brésil" },
    position: [-12.5, -48.0],
    tag: {
      en: "Food & agriculture",
      es: "Alimentación y agricultura",
      fr: "Alimentation & agriculture",
    },
    brief: {
      en: "Blended finance shifts the soy-and-cattle frontier to regenerative practice.",
      es: "Finanzas mixtas desplazan la frontera de soja y ganadería hacia prácticas regenerativas.",
      fr: "La finance mixte déplace la frontière soja–élevage vers des pratiques régénératives.",
    },
    narrator: "Jaciele",
    color: "#f07d00",
  },
  {
    id: "kaza",
    name: { en: "KAZA", es: "KAZA", fr: "KAZA" },
    position: [-18.5, 24.5],
    tag: {
      en: "Transboundary",
      es: "Transfronterizo",
      fr: "Transfrontalier",
    },
    brief: {
      en: "Five-country conservation area piloting pooled financing and community dividends.",
      es: "Área de conservación entre cinco países pilotando financiamiento común y dividendos comunitarios.",
      fr: "Aire de conservation entre cinq pays testant un financement mutualisé et des dividendes communautaires.",
    },
    narrator: "Jane",
    color: "#2f5a34",
  },
  {
    id: "amazon",
    name: { en: "Amazon", es: "Amazonía", fr: "Amazonie" },
    position: [-3.5, -62.0],
    tag: {
      en: "Forest restoration",
      es: "Restauración forestal",
      fr: "Restauration forestière",
    },
    brief: {
      en: "Landscape-scale restoration finance across indigenous territories and protected areas.",
      es: "Financiamiento de restauración a escala de paisaje en territorios indígenas y áreas protegidas.",
      fr: "Financement de restauration à l'échelle du paysage dans les territoires autochtones et aires protégées.",
    },
    narrator: "—",
    color: "#2f5a34",
  },
  {
    id: "coral-triangle",
    name: { en: "Coral Triangle", es: "Triángulo de Coral", fr: "Triangle de corail" },
    position: [-3.0, 130.0],
    tag: {
      en: "Marine",
      es: "Marino",
      fr: "Marin",
    },
    brief: {
      en: "Outcome-based MPA financing in the world's most biodiverse marine region.",
      es: "Financiamiento de AMP basado en resultados en la región marina más biodiversa del mundo.",
      fr: "Financement d'AMP axé sur les résultats dans la région marine la plus biodiversifiée au monde.",
    },
    narrator: "—",
    color: "#009191",
  },
  {
    id: "borneo",
    name: { en: "Borneo", es: "Borneo", fr: "Bornéo" },
    position: [1.0, 114.0],
    tag: {
      en: "Food & agriculture",
      es: "Alimentación y agricultura",
      fr: "Alimentation & agriculture",
    },
    brief: {
      en: "Sustainable palm oil and certified commodity finance to replace deforestation drivers.",
      es: "Aceite de palma sostenible y financiamiento de commodities certificados para sustituir los motores de deforestación.",
      fr: "Huile de palme durable et financement de matières premières certifiées pour remplacer les moteurs de déforestation.",
    },
    narrator: "—",
    color: "#f07d00",
  },
  {
    id: "mekong",
    name: { en: "Greater Mekong", es: "Gran Mekong", fr: "Grand Mékong" },
    position: [17.5, 104.0],
    tag: {
      en: "Transboundary",
      es: "Transfronterizo",
      fr: "Transfrontalier",
    },
    brief: {
      en: "Basin-wide blended finance for hydropower re-optimisation and fisheries.",
      es: "Finanzas mixtas a escala de cuenca para reoptimizar hidroeléctricas y pesca.",
      fr: "Finance mixte à l'échelle du bassin pour la ré-optimisation hydroélectrique et les pêches.",
    },
    narrator: "—",
    color: "#2f5a34",
  },
  {
    id: "himalayas",
    name: { en: "Eastern Himalayas", es: "Himalaya oriental", fr: "Himalaya oriental" },
    position: [28.0, 88.0],
    tag: {
      en: "Mountain landscapes",
      es: "Paisajes de montaña",
      fr: "Paysages de montagne",
    },
    brief: {
      en: "Water-tower financing: payments for ecosystem services downstream of glaciers.",
      es: "Financiamiento de torres de agua: pagos por servicios ecosistémicos aguas abajo de glaciares.",
      fr: "Financement des châteaux d'eau : paiements pour services écosystémiques en aval des glaciers.",
    },
    narrator: "—",
    color: "#009191",
  },
  {
    id: "galapagos",
    name: { en: "Galápagos", es: "Galápagos", fr: "Galápagos" },
    position: [-0.95, -90.97],
    tag: {
      en: "Marine",
      es: "Marino",
      fr: "Marin",
    },
    brief: {
      en: "Debt-for-nature swap linked to expanded marine reserves.",
      es: "Canje de deuda por naturaleza vinculado a la ampliación de reservas marinas.",
      fr: "Échange dette–nature lié à l'extension des réserves marines.",
    },
    narrator: "—",
    color: "#009191",
  },
  {
    id: "congo",
    name: { en: "Congo Basin", es: "Cuenca del Congo", fr: "Bassin du Congo" },
    position: [-1.0, 22.0],
    tag: {
      en: "Forest / transboundary",
      es: "Bosque / transfronterizo",
      fr: "Forêt / transfrontalier",
    },
    brief: {
      en: "Carbon and biodiversity finance across six Central African nations.",
      es: "Financiamiento de carbono y biodiversidad en seis países de África Central.",
      fr: "Financement carbone et biodiversité dans six pays d'Afrique centrale.",
    },
    narrator: "—",
    color: "#2f5a34",
  },
];

type LibItem = {
  t: Localized;
  s: Localized;
  cat: "playbook" | "framework" | "template" | "glossary";
  ic: ReactNode;
};

const LIB: LibItem[] = [
  {
    t: {
      en: "Sustainable Finance Playbook for Conservation",
      es: "Playbook de Finanzas Sostenibles para la Conservación",
      fr: "Playbook de finance durable pour la conservation",
    },
    s: {
      en: "PDF · 164 pp · v2026.1",
      es: "PDF · 164 pp · v2026.1",
      fr: "PDF · 164 pp · v2026.1",
    },
    cat: "playbook",
    ic: <Pdf />,
  },
  {
    t: {
      en: "Landscape Finance Approach (LFA) framework",
      es: "Marco del Enfoque de Finanzas del Paisaje (LFA)",
      fr: "Cadre de l'Approche Finance Paysagère (LFA)",
    },
    s: { en: "PDF · 52 pp · v2026.1", es: "PDF · 52 pp · v2026.1", fr: "PDF · 52 pp · v2026.1" },
    cat: "framework",
    ic: <Pdf />,
  },
  {
    t: {
      en: "Readiness self-assessment (editable)",
      es: "Autoevaluación de preparación (editable)",
      fr: "Auto-évaluation de préparation (éditable)",
    },
    s: {
      en: "DOCX · 12 questions",
      es: "DOCX · 12 preguntas",
      fr: "DOCX · 12 questions",
    },
    cat: "template",
    ic: <Doc />,
  },
  {
    t: {
      en: "Theory of change canvas — blank",
      es: "Lienzo de teoría del cambio — en blanco",
      fr: "Canevas de théorie du changement — vierge",
    },
    s: { en: "PDF · 1 pp", es: "PDF · 1 p.", fr: "PDF · 1 p." },
    cat: "template",
    ic: <Pdf />,
  },
  {
    t: {
      en: "Theory of change — Cerrado worked example",
      es: "Teoría del cambio — ejemplo trabajado del Cerrado",
      fr: "Théorie du changement — exemple concret du Cerrado",
    },
    s: { en: "PDF · 4 pp", es: "PDF · 4 pp.", fr: "PDF · 4 pp." },
    cat: "template",
    ic: <Pdf />,
  },
  {
    t: {
      en: "Financial modelling starter",
      es: "Modelo financiero inicial",
      fr: "Modèle financier de départ",
    },
    s: {
      en: "XLSX · blended-finance template",
      es: "XLSX · plantilla de finanzas mixtas",
      fr: "XLSX · modèle de finance mixte",
    },
    cat: "template",
    ic: <Xlsx />,
  },
  {
    t: {
      en: "MRV reference sheet",
      es: "Hoja de referencia de MRV",
      fr: "Feuille de référence MRV",
    },
    s: {
      en: "XLSX · measurement",
      es: "XLSX · medición",
      fr: "XLSX · mesure",
    },
    cat: "template",
    ic: <Xlsx />,
  },
  {
    t: {
      en: "Plain-language glossary",
      es: "Glosario en lenguaje sencillo",
      fr: "Glossaire en langage clair",
    },
    s: {
      en: "PDF · 112 terms · EN/ES/FR",
      es: "PDF · 112 términos · EN/ES/FR",
      fr: "PDF · 112 termes · EN/ES/FR",
    },
    cat: "glossary",
    ic: <Pdf />,
  },
];

const FILTERS: { id: "all" | "playbook" | "framework" | "template" | "glossary"; labelKey: string }[] = [
  { id: "all", labelKey: "filter_all" },
  { id: "playbook", labelKey: "filter_playbook" },
  { id: "framework", labelKey: "filter_framework" },
  { id: "template", labelKey: "filter_templates" },
  { id: "glossary", labelKey: "filter_glossary" },
];

export function ToolkitClient({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<string>("cerrado");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("all");

  const pin = PINS.find((p) => p.id === active)!;

  const visible = LIB.filter(
    (x) =>
      (filter === "all" || x.cat === filter) &&
      (query === "" ||
        (L(locale, x.t) + " " + L(locale, x.s)).toLowerCase().includes(query.toLowerCase())),
  );

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

      {/* MAP + case */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 18, alignItems: "stretch" }}>
        <div className="map-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
            <div className="eyebrow" style={{ color: "var(--orange)" }}>
              {t(locale, "toolkit_map")}
            </div>
            <div style={{ fontSize: 11.5, color: "#9b988b" }}>
              {PINS.length} {t(locale, "toolkit_landscapes")}
            </div>
          </div>
          <LeafletMap
            pins={PINS.map((p) => ({
              id: p.id,
              name: L(locale, p.name),
              position: p.position,
              color: p.color,
              tag: L(locale, p.tag),
            }))}
            active={active}
            onPick={setActive}
          />
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
                {L(locale, p.name)}
              </button>
            ))}
          </div>
        </div>
        <div className="res-card" style={{ padding: 0, overflow: "hidden" }}>
          <div className="phx canopy" style={{ aspectRatio: "16/10", position: "relative", borderRadius: 0 }}>
            <div className="cap">{L(locale, pin.name).toUpperCase()}</div>
          </div>
          <div style={{ padding: "22px 24px" }}>
            <div className="eyebrow" style={{ color: pin.color }}>
              {L(locale, pin.tag).toUpperCase()}
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 700, margin: "6px 0 6px", letterSpacing: "-.01em" }}>
              {L(locale, pin.name)}
            </h3>
            <p style={{ color: "var(--ink-2)", fontSize: 13.5, margin: 0, lineHeight: 1.5 }}>
              {L(locale, pin.brief)}
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              <button className="btn sm orange">
                {t(locale, "toolkit_read_case")} <Arrow width={14} height={14} />
              </button>
              <button className="btn sm ghost">{t(locale, "toolkit_1pager")}</button>
            </div>
          </div>
        </div>
      </div>

      {/* CASE CARDS */}
      <div className="sec-hd" style={{ marginTop: 72 }}>
        <div>
          <div className="eyebrow">{t(locale, "toolkit_cases_eyebrow")}</div>
          <h3 className="h-display" style={{ fontSize: "clamp(24px,2.6vw,34px)", margin: "8px 0 0" }}>
            {t(locale, "toolkit_cases_title")}
          </h3>
        </div>
      </div>
      <div className="cases">
        {PINS.filter((p) => p.narrator !== "—").map((p) => (
          <div className="case-card" key={p.id}>
            <div className="cover phx canopy" style={{ borderRadius: 0 }}>
              <div className="cap">{L(locale, p.name).toUpperCase()}</div>
            </div>
            <div className="body">
              <div className="eyebrow" style={{ color: p.color, fontSize: 11.5, letterSpacing: ".04em" }}>
                {L(locale, p.tag).toUpperCase()}
              </div>
              <h4>{L(locale, p.name)}</h4>
              <p>{L(locale, p.brief)}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 14,
                }}
              >
                <div style={{ fontSize: 11.5, color: "var(--muted)" }}>
                  {t(locale, "toolkit_narrator")} · {p.narrator}
                </div>
                <button className="btn sm ghost" style={{ padding: ".4rem .7rem" }}>
                  {t(locale, "toolkit_open")} <Arrow width={14} height={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIBRARY */}
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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t(locale, "toolkit_search")}
              aria-label={t(locale, "toolkit_search")}
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
            {t(locale, f.labelKey)}
          </button>
        ))}
      </div>
      <div className="lib">
        {visible.map((x, i) => (
          <div className="lib-item" key={i}>
            <div className="ic">{x.ic}</div>
            <div>
              <div className="t">{L(locale, x.t)}</div>
              <div className="s">{L(locale, x.s)}</div>
            </div>
            <button className="btn sm orange" style={{ padding: ".45rem .8rem" }}>
              <Download /> {t(locale, "toolkit_download")}
            </button>
          </div>
        ))}
        {visible.length === 0 && (
          <div style={{ padding: 28, textAlign: "center", color: "var(--muted)", gridColumn: "1/-1" }}>
            {t(locale, "toolkit_no_match")}
          </div>
        )}
      </div>
    </div>
  );
}
