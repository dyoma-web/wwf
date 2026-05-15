/**
 * Tipos del Proposal Builder.
 *
 * El estado completo del wizard es una única estructura `Proposal` que se
 * serializa a localStorage y se entrega al renderer del PDF.
 *
 * Decisiones de diseño:
 * - Anclado en Theory of Change + LogFrame, no PMI. Cada paso linkea a un
 *   documento del catálogo en src/data/documents.ts para que el usuario
 *   entienda *por qué* se le pregunta cada cosa.
 * - Sin backend: todo client-side. El PDF es el output final.
 * - Los textos visibles en la UI van por dict.ts (i18n). Los `id` de
 *   biome/projectType/stakeholderRole/safeguard son códigos estables que
 *   no se traducen.
 */

export type Biome =
  | "forest"
  | "savanna"
  | "grassland"
  | "drylands"
  | "wetland"
  | "freshwater"
  | "marine"
  | "mountain"
  | "agricultural"
  | "urban";

export type Scale = "site" | "landscape" | "jurisdiction" | "national";

export type ProjectType =
  | "ecosystem-restoration"
  | "protected-area"
  | "sustainable-agriculture"
  | "marine-coastal"
  | "community-livelihoods"
  | "bankable-nbs";

export type StakeholderRole =
  | "community"
  | "government"
  | "ngo"
  | "private-sector"
  | "academia"
  | "donor";

export type EngagementLevel = "consult" | "inform" | "collaborate" | "decide";

export type SafeguardId =
  | "fpic"
  | "esia"
  | "gender"
  | "indigenous"
  | "child"
  | "grievance"
  | "biodiversity"
  | "stakeholder-plan";

export type Activity = {
  id: string;
  name: string;
  deliverable: string;
  yearStart: number; // 1..N (relativo a duration)
  yearEnd: number;
};

export type Stakeholder = {
  id: string;
  name: string;
  role: StakeholderRole;
  engagement: EngagementLevel;
};

export type BudgetLine = {
  id: string;
  category: string; // del preset por projectType, pero editable
  description: string;
  /** Monto por año, indexado desde 0 (año 1). Si dur=3, length=3. */
  amounts: number[];
};

export type Risk = {
  id: string;
  description: string;
  likelihood: "low" | "medium" | "high";
  impact: "low" | "medium" | "high";
  mitigation: string;
};

export type Proposal = {
  /** Schema version — bump cuando cambie la forma del Proposal. */
  version: 1;
  /** Timestamp ISO de último cambio. */
  updatedAt: string;

  // Paso 0 — Intro
  projectName: string;
  leadOrganization: string;
  contactName: string;
  contactEmail: string;

  // Paso 1 — Impacto
  impactStatement: string;
  /** SDGs (1..17) marcados como prioritarios. */
  sdgs: number[];
  /** ¿Se alinea con NDCs / NBSAPs del país? Opcional, sirve para auto-flag
   *  en el PDF "Climate-aligned" o "Biodiversity-aligned". */
  alignedNDC: boolean;
  alignedNBSAP: boolean;

  // Paso 2 — Paisaje
  biome: Biome | "";
  country: string;
  scale: Scale | "";
  durationYears: number; // 1..10

  // Paso 3 — Actividades
  activities: Activity[];

  // Paso 4 — Beneficiarios + Stakeholders
  primaryBeneficiaries: string;
  beneficiaryCount: number;
  stakeholders: Stakeholder[];

  // Paso 5 — Presupuesto
  projectType: ProjectType | "";
  budgetLines: BudgetLine[];
  /** Tasa de overhead (% sobre directos). Usual 7-15% en cooperación. */
  overheadPct: number;

  // Paso 6 — Riesgos + Safeguards
  risks: Risk[];
  safeguards: Record<SafeguardId, boolean>;
};

export const STEP_IDS = [
  "intro",
  "impact",
  "landscape",
  "activities",
  "stakeholders",
  "budget",
  "risks",
  "review",
] as const;

export type StepId = (typeof STEP_IDS)[number];

export function emptyProposal(): Proposal {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    projectName: "",
    leadOrganization: "",
    contactName: "",
    contactEmail: "",
    impactStatement: "",
    sdgs: [],
    alignedNDC: false,
    alignedNBSAP: false,
    biome: "",
    country: "",
    scale: "",
    durationYears: 3,
    activities: [],
    primaryBeneficiaries: "",
    beneficiaryCount: 0,
    stakeholders: [],
    projectType: "",
    budgetLines: [],
    overheadPct: 10,
    risks: [],
    safeguards: {
      fpic: false,
      esia: false,
      gender: false,
      indigenous: false,
      child: false,
      grievance: false,
      biodiversity: false,
      "stakeholder-plan": false,
    },
  };
}
