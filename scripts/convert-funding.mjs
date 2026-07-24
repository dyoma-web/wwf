/**
 * Convierte los Excel de mapeo de financiación (Climate Focus) al JSON
 * estático que consume el explorador del Knowledge Hub.
 *
 * Uso:  node scripts/convert-funding.mjs
 *
 * Lee desde ./Excel (carpeta local, fuera de git) y escribe en public/data/.
 * Cuando Climate Focus publique una versión nueva: reemplazar los .xlsx en
 * ./Excel, correr este script, verificar con `npm run build` y hacer push.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import * as XLSX from "xlsx";

const EXCEL_DIR = "Excel";
const OUT_DIR = join("public", "data");

const GLOBAL_FILE = "20260707 Global Mapping of Funders for Agrifood Systems_updated.xlsx";
const COUNTY_FILE = "20260703 County-level mapping of funding opportunities.xlsx";

mkdirSync(OUT_DIR, { recursive: true });

const clean = (v) =>
  v == null
    ? ""
    : String(v)
        .replace(/\r\n/g, "\n")
        .replace(/[ \t]+\n/g, "\n")
        .trim();

/** Lee una hoja como matriz de filas (A=0, B=1, ...), saltando N filas de encabezado. */
function rows(wb, sheetName, skip) {
  const ws = wb.Sheets[sheetName];
  if (!ws) throw new Error(`hoja no encontrada: ${sheetName}`);
  const all = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });
  return all.slice(skip).filter((r) => clean(r[0]) !== "");
}

const norm = (v) => {
  const s = clean(v).toLowerCase();
  if (s.startsWith("yes")) return "Yes";
  if (s.startsWith("no")) return "No";
  if (s.startsWith("maybe") || s.startsWith("unclear")) return "Maybe";
  return "";
};

/* ---- Global Mapping ---- */
const gwb = XLSX.read(readFileSync(join(EXCEL_DIR, GLOBAL_FILE)));

/* Las entidades con varios programas usan celdas combinadas: el nombre (A),
   el resumen (B) y la fuente (C) solo existen en la primera fila del grupo.
   Se heredan hacia abajo mientras la fila tenga contenido en otras columnas. */
const gws = gwb.Sheets["Global Funding Opportunities"];
const grows = XLSX.utils
  .sheet_to_json(gws, { header: 1, defval: "" })
  .slice(2)
  .filter((r) => r.some((c) => clean(c) !== ""));
let lastIdentity = ["", "", ""];
for (const r of grows) {
  if (clean(r[0]) !== "") lastIdentity = [clean(r[0]), clean(r[1]), clean(r[2])];
  else [r[0], r[1], r[2]] = lastIdentity;
}

const global = grows.map((r) => ({
  name: clean(r[0]),
  summary: clean(r[1]),
  source: clean(r[2]),
  programme: clean(r[3]),
  programmeSummary: clean(r[4]),
  entityType: clean(r[5]),
  intermediaries: clean(r[6]),
  implementers: clean(r[7]),
  capital: clean(r[8]),
  instruments: clean(r[9]),
  scale: clean(r[10]),
  countries: clean(r[11]),
  frequency: clean(r[12]),
  size: clean(r[13]),
  initiative: clean(r[14]),
  thematic: clean(r[15]),
  targetGroups: clean(r[16]),
  activities: clean(r[17]),
  smallholder: norm(r[18]),
  keywords: clean(r[19]),
  whoCanApply: clean(r[20]),
  farmerAccess: norm(r[21]),
}));

const platforms = rows(gwb, "Other Relevant Platforms", 2).map((r) => ({

  name: clean(r[0]),
  source: clean(r[1]),
  summary: clean(r[2]),
  relevance: clean(r[3]),
  notes: clean(r[4]),
}));

/* ---- County-level Mapping ---- */
const cwb = XLSX.read(readFileSync(join(EXCEL_DIR, COUNTY_FILE)));

const countrySheet = (sheetName) =>
  rows(cwb, sheetName, 2).map((r) => ({
    name: clean(r[0]),
    summary: clean(r[1]),
    geo: clean(r[2]),
    source: clean(r[3]),
    entityType: clean(r[4]),
    intermediaries: clean(r[6]),
    implementers: clean(r[7]),
    capital: clean(r[8]),
    instruments: [clean(r[9]), clean(r[10])].filter(Boolean).join(" · "),
    scale: clean(r[11]),
    thematic: clean(r[12]),
    size: clean(r[13]),
    frequency: clean(r[14]),
    targetGroups: [clean(r[15]), clean(r[16])].filter(Boolean).join(" · "),
    activities: clean(r[17]),
    requirements: clean(r[19]),
    whoCanApply: clean(r[20]),
    farmerAccess: norm(r[21]),
    enablingEnv: clean(r[22]),
    notes: clean(r[23]),
  }));

const datasets = {
  "funding-global.json": global,
  "funding-platforms.json": platforms,
  "funding-cambodia.json": countrySheet("Opportunities in Cambodia"),
  "funding-indonesia.json": countrySheet("Opportunities in Indonesia"),
  "funding-peru.json": countrySheet("Opportunities in Peru"),
  "funding-zambia.json": countrySheet("Opportunities in Zambia"),
};

for (const [file, records] of Object.entries(datasets)) {
  writeFileSync(join(OUT_DIR, file), JSON.stringify({ records }), "utf8");
  console.log(`${file}: ${records.length} registros`);
}
