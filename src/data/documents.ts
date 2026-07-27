/**
 * Catálogo de documentos del programa WWF Landscape Finance Approach.
 *
 * ⚠️ El contenido YA NO vive en este archivo: se administra en
 * content/documents.json — editable desde /admin (Sveltia CMS) o a mano.
 * Este módulo solo define los tipos y expone helpers de consulta.
 *
 * Los títulos y descripciones se mantienen en inglés (contenido editorial
 * oficial de WWF). Las facetas (type/topic/audience/region/finance) se
 * traducen vía dict.ts en los componentes que las muestran.
 */

import catalog from "../../content/documents.json";

export const DOCS_LAST_UPDATED: string = catalog.lastUpdated;

export type DocType =
  | "case-study"
  | "report"
  | "guide"
  | "playbook"
  | "brief"
  | "briefing-paper"
  | "guidance-note"
  | "presentation";

export type DocTopic = "basics" | "mechanisms" | "implementation" | "strategy" | "food-agriculture";

export type Audience =
  | "investor"
  | "practitioner"
  | "corporate"
  | "policymaker"
  | "community"
  | "ngo"
  | "researcher";

export type Region = "global" | "africa" | "asia" | "latam" | "europe";

export type FinanceBucket =
  | "debt"
  | "equity"
  | "grants"
  | "blended"
  | "outcome-based"
  | "pes"
  | "carbon"
  | "guarantees"
  | "microfinance"
  | "private-investment";

export type Doc = {
  id: string;
  title: string;
  fileName: string;
  description: string;
  url: string;
  type: DocType;
  topic: DocTopic;
  audiences: Audience[];
  regions: Region[];
  countries?: string[];
  financeTypes: FinanceBucket[];
  tags: string[];
  /** Si está presente, el doc aparece como pin en el mapa del Toolkit. */
  map?: { position: [number, number]; label: string };
  /** Aparece destacado en la parrilla "Case Studies" del Toolkit. */
  featured?: boolean;
};

export const DOCS: Doc[] = catalog.docs as Doc[];

/* Pequeños helpers de catálogo */

export function getDocById(id: string): Doc | undefined {
  return DOCS.find((d) => d.id === id);
}

export function getMappedDocs(): Doc[] {
  return DOCS.filter((d) => d.map);
}

export function getFeaturedDocs(): Doc[] {
  return DOCS.filter((d) => d.featured);
}
