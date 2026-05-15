/**
 * Presets del Proposal Builder.
 *
 * - BIOMES: taxonomía WWF de biomas (no inferida de PDFs, fija).
 * - PROJECT_TYPES: 6 arquetipos que cubren los casos del catálogo
 *   (BNS Guide, MTB Madagascar, Sintang, casos de agroforestería, etc.).
 * - BUDGET_PRESETS: líneas presupuestales típicas por arquetipo.
 *   Derivado del LFA Practitioner Playbook y BNS Guide. El usuario puede
 *   editar libremente; los presets solo evitan que arranque de cero.
 * - SAFEGUARDS: WWF Environmental & Social Safeguards Framework + IFC PS.
 * - SDGS: lista de los 17 ODS con su número.
 */

import type {
  Biome,
  ProjectType,
  SafeguardId,
  StakeholderRole,
  EngagementLevel,
  Scale,
} from "./types";

export const BIOMES: { id: Biome; key: string }[] = [
  { id: "forest", key: "biome_forest" },
  { id: "savanna", key: "biome_savanna" },
  { id: "grassland", key: "biome_grassland" },
  { id: "drylands", key: "biome_drylands" },
  { id: "wetland", key: "biome_wetland" },
  { id: "freshwater", key: "biome_freshwater" },
  { id: "marine", key: "biome_marine" },
  { id: "mountain", key: "biome_mountain" },
  { id: "agricultural", key: "biome_agricultural" },
  { id: "urban", key: "biome_urban" },
];

export const SCALES: { id: Scale; key: string }[] = [
  { id: "site", key: "scale_site" },
  { id: "landscape", key: "scale_landscape" },
  { id: "jurisdiction", key: "scale_jurisdiction" },
  { id: "national", key: "scale_national" },
];

export const PROJECT_TYPES: { id: ProjectType; key: string }[] = [
  { id: "ecosystem-restoration", key: "ptype_restoration" },
  { id: "protected-area", key: "ptype_protected_area" },
  { id: "sustainable-agriculture", key: "ptype_sustainable_ag" },
  { id: "marine-coastal", key: "ptype_marine_coastal" },
  { id: "community-livelihoods", key: "ptype_livelihoods" },
  { id: "bankable-nbs", key: "ptype_bankable_nbs" },
];

export const STAKEHOLDER_ROLES: { id: StakeholderRole; key: string }[] = [
  { id: "community", key: "shr_community" },
  { id: "government", key: "shr_government" },
  { id: "ngo", key: "shr_ngo" },
  { id: "private-sector", key: "shr_private" },
  { id: "academia", key: "shr_academia" },
  { id: "donor", key: "shr_donor" },
];

export const ENGAGEMENT_LEVELS: { id: EngagementLevel; key: string }[] = [
  { id: "inform", key: "eng_inform" },
  { id: "consult", key: "eng_consult" },
  { id: "collaborate", key: "eng_collaborate" },
  { id: "decide", key: "eng_decide" },
];

export const SAFEGUARDS: { id: SafeguardId; key: string; descKey: string }[] = [
  { id: "fpic", key: "sg_fpic", descKey: "sg_fpic_desc" },
  { id: "esia", key: "sg_esia", descKey: "sg_esia_desc" },
  { id: "gender", key: "sg_gender", descKey: "sg_gender_desc" },
  { id: "indigenous", key: "sg_indigenous", descKey: "sg_indigenous_desc" },
  { id: "child", key: "sg_child", descKey: "sg_child_desc" },
  { id: "grievance", key: "sg_grievance", descKey: "sg_grievance_desc" },
  { id: "biodiversity", key: "sg_biodiversity", descKey: "sg_biodiversity_desc" },
  { id: "stakeholder-plan", key: "sg_stakeholder", descKey: "sg_stakeholder_desc" },
];

/** Categorías presupuestales típicas por arquetipo de proyecto.
 *  Se cargan al elegir projectType pero el usuario puede agregar/quitar. */
export const BUDGET_PRESETS: Record<ProjectType, string[]> = {
  "ecosystem-restoration": [
    "Personnel (technical staff, field crews)",
    "Native species nursery & planting materials",
    "Site preparation & land use planning",
    "Community payments / labour incentives",
    "Monitoring (biodiversity, carbon, ecosystem health)",
    "Equipment & transport",
    "Capacity building & training",
    "Travel & per diems",
    "Contingency (5-10%)",
  ],
  "protected-area": [
    "Personnel (rangers, managers, technical advisors)",
    "Ranger equipment, uniforms & patrol logistics",
    "Boundary demarcation & signage",
    "Community livelihood support",
    "Biodiversity monitoring & SMART data systems",
    "Vehicles, boats & maintenance",
    "Infrastructure (visitor centres, ranger posts)",
    "Travel & per diems",
    "Contingency (5-10%)",
  ],
  "sustainable-agriculture": [
    "Personnel (agronomists, extension agents)",
    "Seeds, seedlings & inputs",
    "Technical assistance to producers",
    "Certification (organic, fair-trade, ASC, FSC)",
    "Smallholder credit / revolving fund seed",
    "Monitoring (yield, soil health, biodiversity)",
    "Market linkages & offtake agreements",
    "Travel & per diems",
    "Contingency (5-10%)",
  ],
  "marine-coastal": [
    "Personnel (marine scientists, fisheries officers)",
    "Vessel operations & gear",
    "Community co-management committees",
    "Monitoring (fish stocks, seagrass, mangrove)",
    "Alternative livelihood support (aquaculture, ecotourism)",
    "Enforcement & surveillance (radar, AIS)",
    "Capacity building & training",
    "Travel & per diems",
    "Contingency (5-10%)",
  ],
  "community-livelihoods": [
    "Personnel (community organizers, M&E)",
    "Microfinance / revolving fund seed capital",
    "Training & technical assistance",
    "Equipment & inputs for income activities",
    "Gender-responsive activities",
    "Monitoring (income, food security, gender outcomes)",
    "Travel & per diems",
    "Capacity building",
    "Contingency (5-10%)",
  ],
  "bankable-nbs": [
    "Project development & legal structuring",
    "Pre-feasibility & feasibility studies",
    "Investor readiness (business plan, financial model)",
    "Pilot operations / minimum viable demonstration",
    "Working capital",
    "Technical assistance to operators",
    "Monitoring, reporting & verification (MRV)",
    "Legal, audit & compliance",
    "Contingency (5-10%)",
  ],
};

export const SDGS: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
];

/** Documentos del catálogo más relevantes por paso. Linkeamos a estos para
 *  que el usuario entienda por qué le preguntamos cada cosa y dónde leer más. */
export const STEP_REFERENCES: Record<
  "impact" | "landscape" | "activities" | "stakeholders" | "budget" | "risks",
  string[]
> = {
  // ids del catálogo en src/data/documents.ts
  impact: ["lfa-guide", "tnfd-attracting-investment-nbs"],
  landscape: ["lfa-practitioner-playbook", "landscapes-guidance-note"],
  activities: ["lfa-practitioner-playbook", "wwf-idh-toolkit"],
  stakeholders: ["toolkit-national-action-cbw-agrifood", "lfa-practitioner-playbook"],
  budget: ["bns-guide", "lfa-practitioner-playbook", "common-success-factors-bankable-nbs"],
  risks: ["balancing-bankability-integrity", "tnfd-attracting-investment-nbs"],
};
