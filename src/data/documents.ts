/**
 * Catálogo de documentos del programa WWF Landscape Finance Approach.
 * Fuente: Docs/Document Mapping for Filter System.xlsx (snapshot 2026-05-06).
 *
 * Los títulos y descripciones se mantienen en inglés (contenido editorial
 * oficial de WWF). Las facetas (type/topic/audience/region/finance) se
 * traducen vía dict.ts en los componentes que las muestran.
 *
 * Cuando WWF actualice el Excel, regenerar este archivo manteniendo los
 * mismos `id` para no romper enlaces compartidos al Toolkit.
 */

export const DOCS_LAST_UPDATED = "2026-05-06";

export type DocType =
  | "case-study"
  | "report"
  | "guide"
  | "playbook"
  | "brief"
  | "briefing-paper"
  | "guidance-note"
  | "presentation";

export type DocTopic = "basics" | "mechanisms" | "implementation" | "strategy";

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

export const DOCS: Doc[] = [
  {
    id: "lfx-insight-1pager",
    title: "Landscape Finance Exchange — Insight 1-Pager",
    fileName: "Landscape Finance Exchange Session_Insight 1Pager_20.02.2025.pdf",
    description:
      "Summary of insights on scaling private finance into impactful landscape programmes, focusing on investor readiness, pipelines, and multi-stakeholder partnerships.",
    url: "https://drive.google.com/file/d/1QaRKrlPYwrVT06l_jQSR0du-kfDqCwGx/view?usp=sharing",
    type: "brief",
    topic: "mechanisms",
    audiences: ["investor", "corporate", "ngo"],
    regions: ["global"],
    financeTypes: ["grants", "guarantees", "pes"],
    tags: ["scaling finance", "investor readiness", "MSPs", "trade finance", "pipeline"],
  },
  {
    id: "landscapes-guidance-note",
    title: "Landscapes Guidance Note",
    fileName: "Landscapes Guidance Note - Dec 2020.pdf",
    description:
      "Internal WWF guidance on identifying and defining boundaries of Umbrella and Operational landscapes for conservation programming.",
    url: "https://drive.google.com/file/d/1npRMHWev_voEOvINfVIwdB13Cd4Rv6Kf/view?usp=sharing",
    type: "guidance-note",
    topic: "strategy",
    audiences: ["ngo", "practitioner"],
    regions: ["global"],
    financeTypes: [],
    tags: ["operational landscapes", "umbrella landscapes", "boundary definition", "mapping"],
  },
  {
    id: "lfa-guide",
    title: "Landscape Finance Approach — Guide",
    fileName: "lfa-guide.pdf",
    description:
      "Comprehensive introductory guide to the Landscape Finance Approach (LFA), detailing financial instruments and their relevance to conservation outcomes.",
    url: "https://drive.google.com/file/d/1RDQ7-yIw71N00TrdulM-AhobvSWiz8cM/view?usp=sharing",
    type: "guide",
    topic: "basics",
    audiences: ["investor", "corporate", "policymaker", "ngo", "practitioner"],
    regions: ["global"],
    financeTypes: ["blended", "outcome-based", "carbon", "debt", "private-investment"],
    tags: ["LFA framework", "biodiversity finance gap", "greening finance", "financing green"],
    featured: true,
  },
  {
    id: "lfa-practitioner-playbook",
    title: "LFA Practitioner Playbook",
    fileName: "lfa-practitioner-playbook (1).pdf",
    description:
      "Step-by-step playbook to help conservation practitioners select and implement specific financial interventions across different landscape contexts.",
    url: "https://drive.google.com/file/d/1OLHpFT2MDvm1xJmD5WZPW69_2ZhdERKJ/view?usp=sharing",
    type: "playbook",
    topic: "implementation",
    audiences: ["practitioner", "investor", "ngo"],
    regions: ["global"],
    financeTypes: ["grants", "debt", "microfinance", "pes"],
    tags: ["step-by-step guide", "implementation", "financial interventions", "landscape toolkit"],
    featured: true,
  },
  {
    id: "lfa-supplement",
    title: "LFA Supplement — Deep Dives",
    fileName: "lfa-supplement.pdf",
    description:
      "Supplementary document providing deep dives into specific financial mechanisms and worked examples from Brazil, Kenya, Bhutan, South Africa, and Australia.",
    url: "https://drive.google.com/file/d/15SD0i4ETpTqkBI_zLG5Oq2zDDVDI0g-9/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "practitioner", "ngo"],
    regions: ["global"],
    countries: ["Brazil", "Kenya", "Bhutan", "South Africa", "Australia"],
    financeTypes: ["debt", "outcome-based"],
    tags: ["real-world examples", "financial deep dives", "lessons learned", "rhino bond"],
  },
  {
    id: "mtb-madagascar-seascape",
    title: "Seascape Financing Approach — MTB Madagascar",
    fileName: "A Seascape Financing Approach for MTB Madagascar vFinal.pdf",
    description:
      "Pre-feasibility report outlining a seascape portfolio financing approach for blue economy and marine protection in northern Madagascar.",
    url: "https://drive.google.com/file/d/1lg03VprRwhLT28okdFYeQGRfp0jFXiV7/view?usp=sharing",
    type: "report",
    topic: "mechanisms",
    audiences: ["investor", "practitioner", "ngo", "community"],
    regions: ["africa"],
    countries: ["Madagascar"],
    financeTypes: ["grants", "blended", "microfinance", "pes"],
    tags: ["blue economy", "seascape", "pre-feasibility", "portfolio approach", "Madagascar"],
    map: { position: [-13.5, 49.6], label: "MTB Madagascar" },
    featured: true,
  },
  {
    id: "balancing-bankability-integrity",
    title: "Balancing Bankability and Integrity",
    fileName: "Balancing-Bankability-and-Integrity-report.pdf",
    description:
      "Guidance on fostering investment-ready nature-based solutions while mitigating social and environmental safeguard risks.",
    url: "https://drive.google.com/file/d/14AN4X2jsqaFOBwm0XOwp1NyIqn6H2yDF/view?usp=sharing",
    type: "report",
    topic: "implementation",
    audiences: ["investor", "practitioner", "policymaker"],
    regions: ["global"],
    financeTypes: ["private-investment", "carbon"],
    tags: ["bankability", "risk management", "social safeguards", "benefit-sharing", "integrity"],
  },
  {
    id: "corporate-insetting-nbs",
    title: "Delivering More by Insetting Through NbS",
    fileName: "For_Corporates_Delivering-more-by-insetting-through-nature-based-solutions.pdf",
    description:
      "Briefing paper exploring how corporates can integrate nature-based solutions insetting strategies into Scope 3 climate plans and supply chain transformation.",
    url: "https://drive.google.com/file/d/1YT8Eth0842kE2MiMT7gEWLKBzHXipVo9/view?usp=sharing",
    type: "briefing-paper",
    topic: "basics",
    audiences: ["corporate", "investor"],
    regions: ["global"],
    financeTypes: ["private-investment"],
    tags: ["insetting", "supply chain", "corporate sustainability", "scope 3", "TNFD"],
  },
  {
    id: "common-success-factors-bankable-nbs",
    title: "Common Success Factors for Bankable NbS",
    fileName: "For_project_developers_Common-success-factors-for-bankable-NbS-report.pdf",
    description:
      "Analysis of common success factors for making nature-based solutions bankable, backed by global case studies of project developers.",
    url: "https://drive.google.com/file/d/1TmGyaaCC1WbhCguPaES47U2bzXSZ0BC-/view?usp=sharing",
    type: "report",
    topic: "mechanisms",
    audiences: ["practitioner", "investor"],
    regions: ["global"],
    financeTypes: ["blended", "debt", "guarantees", "grants"],
    tags: ["success factors", "bankability", "blended finance", "case studies", "project development"],
  },
  {
    id: "sintang-indonesia",
    title: "Sintang Landscape Initiative",
    fileName: "Landscape Finance Case Study_Sintang.pdf",
    description:
      "Visual case study mapping WWF Sintang Landscape Initiative activities across natural capital and the 4-Returns framework in West Kalimantan.",
    url: "https://drive.google.com/file/d/10qV4zv2SnqJkuSNsiVtVryHmaOfuFGMX/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["practitioner", "ngo", "investor"],
    regions: ["asia"],
    countries: ["Indonesia"],
    financeTypes: ["grants", "private-investment", "microfinance"],
    tags: ["Sintang", "Indonesia", "spatial mapping", "4 returns", "activity financing"],
    map: { position: [0.07, 111.5], label: "Sintang, Indonesia" },
    featured: true,
  },
  {
    id: "lfx-feb2025-presentation",
    title: "Landscape Finance Exchange — Feb 2025 Session",
    fileName: "Landscape Finance Exchange Session_Feb2025_Proforest_WWF_UNEP.pdf",
    description:
      "High-level presentation explaining landscape and jurisdictional initiatives, linking spatial zoning to funding timelines.",
    url: "https://drive.google.com/file/d/1RH6lXc2fP8H_SnJu7zYhAL3pl13FF54T/view?usp=sharing",
    type: "presentation",
    topic: "basics",
    audiences: ["practitioner", "ngo"],
    regions: ["global"],
    financeTypes: ["grants", "debt"],
    tags: ["exchange session", "jurisdictional initiatives", "spatial zoning", "funding timeline"],
  },
  {
    id: "tnfd-attracting-investment-nbs",
    title: "Attracting Investment in NbS — TNFD Workbook",
    fileName: "TNFD_Attracting-Investment-in-Nature-Based-Solutions-Report.pdf",
    description:
      "Practical guide and workbook for nature-based solutions developers to apply the TNFD reporting framework, including the LEAP approach and metrics.",
    url: "https://drive.google.com/file/d/1DdUlBKVzD7aCoPngJTO5KE2fwyAB0dkL/view?usp=sharing",
    type: "guide",
    topic: "implementation",
    audiences: ["practitioner", "investor", "corporate"],
    regions: ["global"],
    financeTypes: ["private-investment"],
    tags: ["TNFD", "LEAP approach", "reporting framework", "metrics", "financial disclosures"],
  },
  {
    id: "fao-local-financing-flr",
    title: "Local Financing Mechanisms for Community FLR",
    fileName: "local financing mechanism for community FLR.pdf",
    description:
      "FAO review of local-level financing mechanisms for Forest and Landscape Restoration, including microloans, PES, out-grower schemes and fiscal transfers.",
    url: "https://drive.google.com/file/d/1ipF1ojJNYv_E6Gha1draB4egFGNUxwfX/view?usp=sharing",
    type: "report",
    topic: "mechanisms",
    audiences: ["policymaker", "practitioner", "investor", "community"],
    regions: ["global"],
    financeTypes: ["microfinance", "pes", "grants", "guarantees", "debt"],
    tags: ["FLR", "microloans", "PES", "out-grower schemes", "public finance", "FAO"],
  },
  {
    id: "bns-guide",
    title: "Bankable Nature Solutions — Blueprint Guide",
    fileName: "BNS Guide_bankable_nature_solutions_2__1.pdf",
    description:
      "Comprehensive blueprint book presenting 13 global case studies on Bankable Nature Solutions, with financial structuring patterns and risk-sharing mechanisms.",
    url: "https://drive.google.com/file/d/15CNmGwOR5BWsKPsO8rRhz6439r-WfVbK/view?usp=sharing",
    type: "guide",
    topic: "mechanisms",
    audiences: ["investor", "practitioner"],
    regions: ["global"],
    financeTypes: ["debt", "equity", "grants", "blended", "carbon"],
    tags: ["bankable nature solutions", "blueprints", "case studies", "financial structuring", "risk-sharing"],
    featured: true,
  },
  {
    id: "regenerative-agri-aesco",
    title: "Accelerating Regenerative Agriculture — AESCo",
    fileName: "Accelerating the transition to regenerative agri_AESCo-report-June-2024.pdf",
    description:
      "Report proposing an Agro-Ecological Service Company (AESCo) model to accelerate the transition to regenerative agriculture, drawing parallels with energy services companies.",
    url: "https://drive.google.com/file/d/1oSchOcmo_GxivAD8jxVbxDmMe3x_2Ubq/view?usp=sharing",
    type: "report",
    topic: "implementation",
    audiences: ["policymaker", "practitioner", "investor", "corporate", "community"],
    regions: ["global"],
    financeTypes: ["blended", "private-investment", "grants"],
    tags: ["regenerative agriculture", "AESCo", "energy services analogy", "transition financing"],
  },
  {
    id: "wwf-idh-toolkit",
    title: "Attracting Private Investment for Sustainable Landscapes — WWF/IDH Toolkit",
    fileName: "Attracting Private Investment for Sustainable Landscapes wwf_idh_toolkit_final.pdf",
    description:
      "Comprehensive step-by-step toolkit developed by WWF and IDH to help project originators attract private investment for sustainable landscapes.",
    url: "https://drive.google.com/file/d/1cQ_oTm24hiwCQl_U4h8pyV0_O8YzTwAC/view?usp=sharing",
    type: "guide",
    topic: "implementation",
    audiences: ["practitioner", "ngo", "investor", "community"],
    regions: ["global"],
    financeTypes: ["debt", "equity", "grants", "blended", "guarantees"],
    tags: ["landscape finance toolkit", "bankability", "project origination", "investment readiness"],
  },
  {
    id: "bns-chanzi-tanzania",
    title: "Chanzi — Black Soldier Fly Animal Feed",
    fileName: "wwf_bns_case-study_chanzi_sep-2023.pdf",
    description:
      "Bankable Nature Solutions case study of Chanzi, a Tanzanian enterprise converting organic waste into animal feed via black soldier fly farming.",
    url: "https://drive.google.com/file/d/11MkC90jiPpsl6JP66yK__meOQ_EullWE/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "practitioner", "corporate"],
    regions: ["africa"],
    countries: ["Tanzania", "Kenya", "Zambia", "South Africa"],
    financeTypes: ["debt", "equity", "grants"],
    tags: ["alternative protein", "black soldier fly", "waste to value", "animal feed", "circular economy"],
    map: { position: [-6.8, 39.3], label: "Chanzi (Tanzania)" },
  },
  {
    id: "bns-cinch-kenya",
    title: "Cinch — Land-Leasing Horticulture",
    fileName: "wwf_bns_case-study_cinch_apr-2024.pdf",
    description:
      "BNS case study of Cinch in Kenya, an innovative land-leasing and aggregation model for smallholder export horticulture.",
    url: "https://drive.google.com/file/d/1CKOi_tqufxTlyoIc4yYr38WxCifKVa0D/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "practitioner", "community"],
    regions: ["africa"],
    countries: ["Kenya"],
    financeTypes: ["debt", "equity", "grants"],
    tags: ["land lease model", "smallholder aggregation", "export horticulture", "DFCD"],
    map: { position: [-1.0, 37.0], label: "Cinch (Kenya)" },
  },
  {
    id: "bns-colorquimica-colombia",
    title: "Colorquimica — Natural Dyes & Achiote",
    fileName: "wwf_bns_case-study_colorquimica_spe-2023.pdf",
    description:
      "BNS case study of Colorquimica in Colombia, sourcing natural dyes (achiote) from smallholder agroforestry as alternative livelihoods.",
    url: "https://drive.google.com/file/d/1r9vLTo_WMF30nNF5Psum22LMQNOlo0tp/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "corporate", "practitioner"],
    regions: ["latam"],
    countries: ["Colombia"],
    financeTypes: ["debt", "grants"],
    tags: ["natural colourants", "achiote", "alternative livelihoods", "agroforestry"],
    map: { position: [4.5, -74.0], label: "Colorquimica (Colombia)" },
  },
  {
    id: "bns-concepta-brazil",
    title: "Concepta Ingredients — Superfoods Supply Chain",
    fileName: "wwf_bns_case-study_concepta_oct-2024.pdf",
    description:
      "BNS case study of Concepta Ingredients in Brazil, a superfoods processor engaging non-timber forest products from the Amazon and Cerrado.",
    url: "https://drive.google.com/file/d/1cyNWqZIRcL5BML8MoJl6K9JzBy-mUTw7/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "corporate", "practitioner"],
    regions: ["latam"],
    countries: ["Brazil"],
    financeTypes: ["debt", "equity", "grants"],
    tags: ["superfoods", "non-timber forest products", "supply chain resilience", "Amazon", "Cerrado"],
    map: { position: [-15.0, -55.0], label: "Concepta (Brazil)" },
    featured: true,
  },
  {
    id: "bns-financoop",
    title: "Financoop — Climate-Linked Microfinance",
    fileName: "wwf_bns_case-study_financoop_apr-2024.pdf",
    description:
      "BNS case study outlining Financoop's model for offering mitigation and adaptation credit to smallholder cooperatives.",
    url: "https://drive.google.com/file/d/1wl2UPGsm0R75K8rIspgBnFrUBr7jic8V/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "practitioner", "community"],
    regions: ["global"],
    financeTypes: ["debt", "grants", "microfinance"],
    tags: ["microfinance", "climate adaptation credit", "sustainable agriculture", "cooperative lending"],
  },
  {
    id: "bns-forest-africa-zambia",
    title: "Forest Africa — Wild Fruits & Baobab",
    fileName: "wwf_bns_case-study_forest-africa-zambia_sep-2023.pdf",
    description:
      "BNS case study of Forest Africa in Zambia, processing indigenous wild fruits (e.g. baobab) with a zero-waste model and non-timber forest product value chains.",
    url: "https://drive.google.com/file/d/154WFeMJGIgDSzZNVWQqUE-09mS8TcEV6/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "practitioner", "community"],
    regions: ["africa"],
    countries: ["Zambia"],
    financeTypes: ["debt", "equity", "grants"],
    tags: ["wild fruits", "baobab", "zero-waste", "MoMo4C", "non-timber forest products"],
    map: { position: [-13.5, 27.5], label: "Forest Africa (Zambia)" },
  },
  {
    id: "bns-koa-ghana",
    title: "Koa — Cocoa Pulp Decentralized Value Chain",
    fileName: "wwf_bns_case-study_koa_sep-2023.pdf",
    description:
      "BNS case study of Koa, a social enterprise creating a decentralized value chain for cocoa pulp upcycling, increasing smallholder farmer income in Ghana.",
    url: "https://drive.google.com/file/d/1wnKQ2CqlB5V9ctfgo-p3ns_CRUj8D1c4/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "practitioner", "community"],
    regions: ["africa"],
    countries: ["Ghana"],
    financeTypes: ["debt"],
    tags: ["cocoa pulp", "decentralized processing", "smallholder income", "LRF", "upcycling"],
    map: { position: [7.0, -1.0], label: "Koa (Ghana)" },
  },
  {
    id: "bns-minh-phu-vietnam",
    title: "Minh Phu — Organic Rice–Shrimp Aquaculture",
    fileName: "wwf_bns_case-study_minh_phu_apr-2024.pdf",
    description:
      "BNS case study of Minh Phu in Vietnam, implementing a mixed organic rice and shrimp rotation in the Mekong delta with ASC certification.",
    url: "https://drive.google.com/file/d/1LASlcGIczoaBv_Ioibl0sjE0ijurAXCY/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "practitioner", "community"],
    regions: ["asia"],
    countries: ["Vietnam"],
    financeTypes: ["debt", "grants"],
    tags: ["aquaculture", "rice-shrimp rotation", "Mekong delta", "subsidence", "ASC-certified"],
    map: { position: [9.7, 105.5], label: "Minh Phu (Vietnam)" },
  },
  {
    id: "bns-slow-coffee",
    title: "Slow — Agroforestry Coffee Value Chain",
    fileName: "wwf_bns_case-study_slow_oct-2024.pdf",
    description:
      "BNS case study of Slow, developing an integrated agroforestry coffee value chain with direct trade and corporate offtake structures.",
    url: "https://drive.google.com/file/d/1yH-ZTExe_Kivp654Rg__l2MtJoG88DK6/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "corporate", "practitioner"],
    regions: ["global"],
    financeTypes: ["debt"],
    tags: ["agroforestry coffee", "direct trade", "corporate offtake", "LRF", "supply chain integration"],
  },
  {
    id: "bns-sococam-cameroon",
    title: "Sococam — Agroforestry Cocoa",
    fileName: "wwf_bns_case-study_sococam_oct-2024.pdf",
    description:
      "BNS case study of Sococam, aggregating communal farmers in Cameroon to produce high-quality agroforestry-based fine-flavour cocoa with organic certification.",
    url: "https://drive.google.com/file/d/1y7-RSSRuYyg9NhVKOVi_vMfRhOS-CIh2/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "practitioner", "community"],
    regions: ["africa"],
    countries: ["Cameroon"],
    financeTypes: ["debt", "equity", "grants"],
    tags: ["agroforestry cocoa", "organic certification", "MoMo4C", "fine-flavour chocolate"],
    map: { position: [4.7, 12.5], label: "Sococam (Cameroon)" },
  },
  {
    id: "bns-wuchi-wami-zambia",
    title: "Wuchi Wami — Organic Honey & Miombo",
    fileName: "wwf_bns_case-study_wuchi_wami_apr-2024.pdf",
    description:
      "BNS case study of Wuchi Wami in Zambia, producing organic honey using sustainable beekeeping practices that protect miombo woodlands.",
    url: "https://drive.google.com/file/d/1mwuOCxcXAIJsGlVUkVY27PhOoCZstXbY/view?usp=sharing",
    type: "case-study",
    topic: "mechanisms",
    audiences: ["investor", "practitioner", "community"],
    regions: ["africa"],
    countries: ["Zambia"],
    financeTypes: ["debt", "equity", "grants"],
    tags: ["organic honey", "sustainable beekeeping", "miombo woodland", "MoMo4C"],
    map: { position: [-15.4, 28.3], label: "Wuchi Wami (Zambia)" },
  },
];

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
