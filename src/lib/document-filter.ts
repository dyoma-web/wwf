import {
  DOCS,
  type Audience,
  type Doc,
  type DocTopic,
  type DocType,
  type Region,
} from "@/data/documents";

export type Facets = {
  type?: DocType;
  topic?: DocTopic;
  audience?: Audience;
  region?: Region;
  query?: string;
};

/** Filtra el catálogo por facetas combinadas. Vacío = todos. */
export function filterDocs(facets: Facets, all: Doc[] = DOCS): Doc[] {
  const q = (facets.query ?? "").trim().toLowerCase();
  return all.filter((d) => {
    if (facets.type && d.type !== facets.type) return false;
    if (facets.topic && d.topic !== facets.topic) return false;
    if (facets.audience && !d.audiences.includes(facets.audience)) return false;
    if (facets.region) {
      // Para region: 'global' siempre debe matchear (porque es relevante en todas
      // las regiones); las regionales solo cuando coinciden. Si filtran por
      // "global" mostramos solo los globales.
      if (facets.region === "global") {
        if (!d.regions.includes("global")) return false;
      } else {
        if (!d.regions.includes(facets.region) && !d.regions.includes("global")) return false;
      }
    }
    if (q) {
      const haystack = [
        d.title,
        d.description,
        d.fileName,
        ...d.tags,
        ...(d.countries ?? []),
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

/**
 * Score de relevancia para los resultados del Navigator. Cada match con
 * la respuesta del usuario suma; los empates se desempatan por número
 * de tags y por si es featured.
 */
export function rankByAnswers(answers: Facets, all: Doc[] = DOCS): Doc[] {
  const scored = all.map((d) => {
    let score = 0;
    if (answers.audience && d.audiences.includes(answers.audience)) score += 4;
    if (answers.topic && d.topic === answers.topic) score += 3;
    if (answers.type && d.type === answers.type) score += 3;
    if (answers.region) {
      if (d.regions.includes(answers.region)) score += 2;
      else if (d.regions.includes("global")) score += 1;
    }
    if (d.featured) score += 0.5;
    return { d, score };
  });
  scored.sort((a, b) => b.score - a.score || b.d.tags.length - a.d.tags.length);
  return scored.filter((s) => s.score > 0).map((s) => s.d);
}

/** Convierte facetas a query string para enlaces compartibles. */
export function facetsToQuery(facets: Facets): string {
  const params = new URLSearchParams();
  if (facets.type) params.set("type", facets.type);
  if (facets.topic) params.set("topic", facets.topic);
  if (facets.audience) params.set("audience", facets.audience);
  if (facets.region) params.set("region", facets.region);
  if (facets.query) params.set("q", facets.query);
  const s = params.toString();
  return s ? `?${s}` : "";
}
