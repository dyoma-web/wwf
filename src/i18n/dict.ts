import type { Locale } from "./config";

type Dict = Record<string, string>;

const en: Dict = {
  // Navegación
  nav_home: "Home",
  nav_learn: "Learning",
  nav_finance: "Navigator",
  nav_toolkit: "Toolkit",
  nav_contact: "Contact Us",

  // Marca
  brand_name: "SUSTAINABLE FINANCE",
  brand_sub: "FOR CONSERVATION",

  // Hero
  hero_eyebrow: "A single entry point to learn",
  hero_title: "explore and apply Landscape Finance",
  hero_sub:
    "A plain-language platform for conservation practitioners, finance teams, policy makers and researchers.",
  hero_cta1: "Start learning",
  hero_cta2: "Find my path",
  hero_cap: "LANDSCAPE PHOTO · FARMER AT SUNRISE [ placeholder ]",

  // About / By objective
  about_eyebrow: "ABOUT US",
  about_title: "By objective",
  about_body:
    "Whether you are working on restoration, protected areas, or regenerative food systems, this platform reorganises everything by what you are trying to achieve — not by institutional silos. Pick your objective and we show you the modules, pathways, templates and cases that map to it.",
  about_cta: "Show me",

  // Tiles
  tile1: "Start learning",
  tile2: "Finance options",
  tile3: "Apply in your landscape",

  // Stats
  stats_eyebrow: "BY THE NUMBERS",
  stats_t: "A programme in numbers",
  stats_sub: "Drawn from the 2026 Landscape Finance programme and partner landscapes.",
  stat1_n: "68%",
  stat1_t: "Of conservation financing needs in surveyed landscapes remain unmet.",
  stat2_n: "3",
  stat2_t: "Landscapes with live case studies: Madagascar, the Cerrado, KAZA.",
  stat3_n: "12",
  stat3_t: "Learning units across Greening Finance, Financing Green, and Food & Agriculture.",
  stat4_n: "EN·ES·FR",
  stat4_t: "Fully translated. Continuously updated. Screen-reader friendly.",

  // Resource library
  lib_eyebrow: "RESOURCES",
  lib_title: "Resource library",
  lib_sub:
    "The Playbook, the LFA framework, ready-to-use templates and a plain-language glossary — versioned, dated, open.",
  lib_pill1: "Landscape Finance Approach",
  lib_pill2: "Sustainable Finance Playbook for Conservation",
  lib_pill3: "Templates & self-assessment",

  // People
  people_eyebrow: "MEET THE GUIDES",
  people_t: "Meet the guides",
  people_s:
    "Every module is narrated by a specialist or a landscape-case narrator — so you hear the approach in their own voice.",

  // Contact
  contact_eyebrow: "CONTACT & INFO",
  contact_title: "Contact Us",
  contact_body:
    "Have a question, a landscape to contribute, or a partner to connect? We read every message.",
  contact_loc: "Gland, Switzerland · remote contributors",
  contact_phone: "+41 00 000 00 00",
  contact_mail: "hello@example.org",
  contact_name: "Name",
  contact_email: "Email",
  contact_message: "Message",
  contact_name_ph: "Your name",
  contact_email_ph: "you@org.com",
  contact_message_ph: "How can we help?",
  contact_send: "Send message",

  // Footer
  footer_rights: "© 2026 · Open resource · CC BY-NC-SA",
  footer_tech: "EN · ES · FR · WCAG AA · mobile-first",

  // Navigator page (chrome)
  navigator_eyebrow: "FINANCING NAVIGATOR",
  navigator_title: "Four questions. A clear starting point.",
  navigator_subtitle:
    "We won't give you a dashboard. We'll point you to the right pathways, templates and cases — then step out of your way.",
  navigator_inputs: "YOUR INPUTS",
  navigator_not_set: "Not set",
  navigator_complete: "Complete",
  navigator_step: "Step",
  navigator_of: "of",
  navigator_start_over: "Start over",
  navigator_question: "QUESTION",
  navigator_back: "Back",
  navigator_next: "Next",
  navigator_see_pathways: "See my pathways",
  navigator_result_eyebrow: "YOUR STARTING POINT",
  navigator_result_in: "in",
  navigator_result_landscapes: "landscapes, facing",
  navigator_result_pursuing: ", pursuing",
  navigator_result_prefix: "A",
  navigator_rec_pathways: "RECOMMENDED PATHWAYS",
  navigator_3_of_12: "3 of 12",
  navigator_start_here: "Start here",
  navigator_similar: "SIMILAR CASES",
  navigator_seen_work: "Seen it work here",
  navigator_relevant: "RELEVANT TOOLS",
  navigator_templates_path: "Templates for this path",
  navigator_get: "Get",
  navigator_open_lms: "Open matching LMS unit",
  navigator_try_diff: "Try different answers",
  fit_strong: "Strong fit",
  fit_good: "Good fit",
  fit_explore: "Explore",

  // Toolkit page (chrome)
  toolkit_eyebrow: "TOOLKIT · RESOURCES & LIBRARY",
  toolkit_title: "Everything, ready to take.",
  toolkit_subtitle:
    "The Playbook, the LFA framework, ready-to-use templates, a plain-language glossary, and a map of landscapes where the approach is being applied.",
  toolkit_map: "INTERACTIVE MAP",
  toolkit_landscapes: "landscapes",
  toolkit_read_case: "Read case",
  toolkit_1pager: "1-pager",
  toolkit_cases_eyebrow: "CASE STUDIES",
  toolkit_cases_title: "Where the approach is being applied",
  toolkit_narrator: "Narrator",
  toolkit_open: "Open",
  toolkit_library: "LIBRARY",
  toolkit_library_title: "Downloadable documents",
  toolkit_library_sub:
    "All practical tools, versioned and dated. Everything here is made to be edited and used with partners.",
  toolkit_search: "Search",
  toolkit_download: "Download",
  toolkit_no_match: "No documents match.",
  filter_all: "All",
  filter_playbook: "Playbook",
  filter_framework: "Framework",
  filter_templates: "Templates",
  filter_glossary: "Glossary",

  // Learning page (chrome)
  learning_eyebrow: "START LEARNING",
  learning_title: "The curriculum",
  learning_subtitle:
    "Twelve units across three lenses. Preview here — then continue in the LMS for progress tracking and certificates.",
  learning_duration: "Duration",
  learning_format: "Format",
  learning_level: "Level",
  learning_narrator: "Narrator",
  learning_preview: "Preview",
  learning_continue: "Continue in the LMS",
  learning_continue_tail: "to track progress, take assessments and earn a certificate.",
  learning_open_lms: "Open in LMS",

  // Lenses temáticas (compartido entre páginas)
  lens_greening: "Greening finance",
  lens_financing: "Financing Green",
  lens_food: "Food & Agriculture",
  lens_food_short: "Food & agriculture",

  // Navigator — preguntas reformuladas para el catálogo real de docs
  q_role_label: "Your role",
  q_role_q: "What is your role?",
  q_role_hint: "We use this to surface the most useful resources for you.",
  q_region_label: "Region of interest",
  q_region_q: "Which region matters most to you?",
  q_region_hint: "Global resources are always shown when you pick a specific region.",
  q_topic_label: "Topic",
  q_topic_q: "What do you want to dive into?",
  q_topic_hint: "The four buckets the WWF programme is organised around.",
  q_format_label: "Format",
  q_format_q: "What format works best today?",
  q_format_hint: "Skip if you don't have a preference — we score it lightly.",

  // Audience labels (facets)
  aud_investor: "Investor or fund manager",
  aud_investor_s: "Banks, DFIs, foundations, fund managers",
  aud_practitioner: "Conservation practitioner",
  aud_practitioner_s: "Project developer, NGO field team, landscape manager",
  aud_corporate: "Corporate / supply chain",
  aud_corporate_s: "Sustainability, sourcing, scope-3 strategy",
  aud_policymaker: "Policy maker",
  aud_policymaker_s: "Government, regulator, agency",
  aud_ngo_research: "NGO / researcher",
  aud_ngo_research_s: "Internal team, academic, think tank",
  aud_community: "Community / smallholder",
  aud_community_short: "Community",
  aud_ngo: "NGO",
  aud_researcher: "Researcher",

  // Region labels (facets)
  region_global: "Global",
  region_global_s: "Resources applicable anywhere",
  region_africa: "Africa",
  region_africa_s: "Sub-Saharan & coastal Africa",
  region_asia: "Asia",
  region_asia_s: "Southeast & South Asia",
  region_latam: "Latin America",
  region_latam_s: "South & Central America",
  region_europe: "Europe",

  // Topic labels (facets)
  topic_basics: "Landscape Finance basics",
  topic_basics_s: "Frameworks, intro guides",
  topic_mechanisms: "Financial mechanisms & pipeline",
  topic_mechanisms_s: "Instruments, case studies, deal structures",
  topic_implementation: "Implementation & tools",
  topic_implementation_s: "How to put it into practice",
  topic_strategy: "Conservation strategy & mapping",
  topic_strategy_s: "Defining boundaries, prioritisation",

  // Document type labels (facets)
  type_brief: "Brief",
  type_brief_s: "1–2 pages, short read",
  type_briefing_paper: "Briefing paper",
  type_guide: "Guide",
  type_guide_s: "Comprehensive how-to",
  type_guidance_note: "Guidance note",
  type_case_study: "Case study",
  type_case_study_s: "Real-world example",
  type_playbook: "Playbook",
  type_playbook_s: "Step-by-step instrument",
  type_report: "Report",
  type_presentation: "Presentation",

  // Finance bucket labels (facets) — used in doc cards
  fin_debt: "Debt",
  fin_equity: "Equity",
  fin_grants: "Grants",
  fin_blended: "Blended finance",
  fin_outcome: "Outcome-based",
  fin_pes: "PES",
  fin_carbon: "Carbon",
  fin_guarantees: "Guarantees",
  fin_microfinance: "Microfinance",
  fin_private: "Private investment",

  // Navigator — results section
  nav_result_count_pre: "Out of 27 resources in the library, ",
  nav_result_count_post: " match your selection.",
  nav_top_picks: "Top picks for you",
  nav_browse_all: "Browse all matches in the Toolkit",
  nav_no_results: "No exact matches.",
  nav_no_results_hint: "Try widening your filters or browse the full library.",
  nav_open_doc: "Open document",

  // Toolkit — multi-facet filtering
  toolkit_filter_topic: "Topic",
  toolkit_filter_audience: "Audience",
  toolkit_filter_region: "Region",
  toolkit_filter_type: "Type",
  toolkit_filter_clear: "Clear filters",
  toolkit_filter_any: "Any",
  toolkit_results_count: "documents",
  toolkit_disclaimer:
    "All documents open in Google Drive (external links). Links may break or become outdated. Catalogue last updated on",
  toolkit_external: "External link",
  toolkit_browse_library: "Browse library",

  // About this site (DRAFT — pending brand team review)
  about_site_eyebrow: "ABOUT THIS SITE",
  about_site_title: "Where this microsite sits",
  about_site_body:
    "Sustainable Finance for Conservation is a WWF microsite that connects conservation practitioners, finance teams and policy makers with the funding pathways that match their landscape work. It sits within WWF's Conservation Finance programme and consolidates learning units, ready-to-use templates and real landscape cases into one entry point. [DRAFT — placeholder copy, pending review for accuracy on ownership, scope and the specific problem statement.]",

  // Proposal Builder — nav + page chrome
  nav_builder: "Builder",
  pb_page_eyebrow: "PROPOSAL BUILDER",
  pb_page_title: "Turn an idea into a fundable proposal",
  pb_page_subtitle:
    "A guided builder grounded in Theory of Change and LogFrame — the language conservation donors actually use. Answer 7 short steps and download a polished PDF you can take to any funder.",
  pb_eyebrow: "BUILDER STEPS",
  pb_step: "Step",
  pb_saved_locally: "Saved locally on this device",
  pb_loading: "Loading…",
  pb_prev: "Previous",
  pb_next: "Next step",
  pb_refs_eyebrow: "REFERENCES",
  pb_refs_hint:
    "These documents from the catalogue go deeper on what this step asks. Open them in a new tab while you fill the form.",

  // Step titles + eyebrows
  pb_step_intro_title: "Tell us about your project",
  pb_step_intro_eyebrow: "GETTING STARTED",
  pb_step_impact_title: "Define your impact",
  pb_step_impact_eyebrow: "THEORY OF CHANGE",
  pb_step_landscape_title: "Where will it happen?",
  pb_step_landscape_eyebrow: "LANDSCAPE",
  pb_step_activities_title: "Activities & deliverables",
  pb_step_activities_eyebrow: "LOGFRAME",
  pb_step_stakeholders_title: "People who benefit, decide, or watch",
  pb_step_stakeholders_eyebrow: "STAKEHOLDERS",
  pb_step_budget_title: "Budget",
  pb_step_budget_eyebrow: "GUIDED PRESETS",
  pb_step_risks_title: "Risks & safeguards",
  pb_step_risks_eyebrow: "DUE DILIGENCE",
  pb_step_review_title: "Review and export",
  pb_step_review_eyebrow: "OUTPUT",

  // Intro step
  pb_intro_lede:
    "Start with the basics. Funders want to know who is behind the proposal and how to reach you. You can edit any of this later.",
  pb_field_project_name: "Project name",
  pb_field_project_name_hint: "Short, evocative, scannable. Avoid jargon.",
  pb_field_project_name_ph: "e.g. Cerrado Riparian Restoration Programme",
  pb_field_lead_org: "Lead organization",
  pb_field_lead_org_hint: "Who is accountable for delivery? Use the legal name.",
  pb_field_lead_org_ph: "e.g. WWF Brasil — Cerrado Programme",
  pb_field_contact_name: "Contact name",
  pb_field_contact_name_ph: "Your name",
  pb_field_contact_email: "Contact email",

  // Impact step
  pb_impact_lede:
    "What does the landscape look like if this project succeeds? Write the outcome you want, not the activity you'll run. This becomes the apex of your Theory of Change.",
  pb_field_impact: "Impact statement",
  pb_field_impact_hint:
    "1–2 paragraphs. Describe the *change* in the landscape, people, or systems by the end of the project.",
  pb_field_impact_ph:
    "e.g. By 2030, 25,000 ha of degraded riparian zones in the Cerrado biome are under active restoration, secured through land tenure, financed by 4 blended-finance vehicles, and managed by farmer cooperatives generating year-round livelihoods…",
  pb_field_sdgs: "Aligned SDGs (optional)",
  pb_field_sdgs_hint:
    "Pick the Sustainable Development Goals this project directly contributes to. Less is more — 3–5 max.",
  pb_field_ndc: "Aligned with country NDC",
  pb_field_nbsap: "Aligned with country NBSAP",

  // Landscape step
  pb_landscape_lede:
    "Funders want to know what they're funding and where. Use the WWF biome taxonomy — it maps cleanly to most multilateral funding criteria.",
  pb_field_biome: "Primary biome",
  pb_field_biome_hint: "Pick the dominant one. If it's mixed, choose the one with the largest area.",
  pb_field_country: "Country (or countries)",
  pb_field_country_ph: "e.g. Brazil, or Brazil + Paraguay",
  pb_field_duration: "Duration",
  pb_field_duration_hint: "Most landscape projects are 3–5 years.",
  pb_field_scale: "Scale",
  pb_field_scale_hint:
    "Site = single project area. Landscape = multiple sites under one strategy. Jurisdiction = at municipal/state level. National = country-wide.",
  pb_year: "year",
  pb_years: "years",
  pb_year_lower: "year",
  pb_years_lower: "years",

  // Biomes
  biome_forest: "Forest",
  biome_savanna: "Savanna",
  biome_grassland: "Grassland",
  biome_drylands: "Drylands",
  biome_wetland: "Wetland",
  biome_freshwater: "Freshwater",
  biome_marine: "Marine / coastal",
  biome_mountain: "Mountain",
  biome_agricultural: "Agricultural landscape",
  biome_urban: "Urban / peri-urban",

  // Scales
  scale_site: "Site",
  scale_landscape: "Landscape",
  scale_jurisdiction: "Jurisdiction",
  scale_national: "National",

  // Activities step
  pb_activities_lede:
    "List the activities that will produce the change. Each one needs a deliverable (something you can point to and say 'this is done') and a year range.",
  pb_activities_empty: "No activities yet. Click the button below to add the first one.",
  pb_activity: "Activity",
  pb_remove: "Remove",
  pb_field_activity_name: "Activity",
  pb_field_activity_name_ph: "e.g. Train 200 cooperative members on agroforestry",
  pb_field_deliverable: "Deliverable",
  pb_field_deliverable_ph: "e.g. Training curriculum + certified cohort of 200",
  pb_field_year_start: "Starts in",
  pb_field_year_end: "Ends in",
  pb_add_activity: "Add activity",

  // Stakeholders step
  pb_stakeholders_lede:
    "Funders read this section closely. If you can't name who benefits and who decides, the proposal won't make it past initial screening.",
  pb_field_beneficiaries: "Primary beneficiaries",
  pb_field_beneficiaries_hint:
    "Who is better off because of this project? Be specific about gender, age, livelihood.",
  pb_field_beneficiaries_ph:
    "e.g. 1,200 smallholder farming households in the upper Tocantins basin, with 40% female-led cooperatives…",
  pb_field_beneficiary_count: "Estimated beneficiaries (people)",
  pb_stakeholder_list: "Stakeholder map",
  pb_stakeholder_list_hint:
    "List anyone who needs to be informed, consulted, or whose buy-in you need. Engagement level matters for safeguards.",
  pb_stakeholders_empty: "No stakeholders mapped yet.",
  pb_field_stakeholder_name_ph: "Name or group",
  pb_add_stakeholder: "Add stakeholder",
  shr_community: "Local community",
  shr_government: "Government",
  shr_ngo: "NGO partner",
  shr_private: "Private sector",
  shr_academia: "Academia / research",
  shr_donor: "Donor / investor",
  eng_inform: "Inform",
  eng_consult: "Consult",
  eng_collaborate: "Collaborate",
  eng_decide: "Decide",

  // Budget step
  pb_budget_lede:
    "Pick a project archetype and we'll preload the line items typical for that type. Edit freely, add or remove rows, fill in amounts per year.",
  pb_field_project_type: "Project archetype",
  pb_field_project_type_hint:
    "Determines the budget preset. You can still customise after.",
  ptype_restoration: "Ecosystem restoration",
  ptype_protected_area: "Protected area management",
  ptype_sustainable_ag: "Sustainable agriculture / agroforestry",
  ptype_marine_coastal: "Marine / coastal management",
  ptype_livelihoods: "Community livelihoods",
  ptype_bankable_nbs: "Bankable Nature Solution",
  pb_budget_table: "Line-item budget",
  pb_budget_category: "Category",
  pb_budget_category_ph: "Category name",
  pb_budget_subtotal: "Subtotal",
  pb_budget_subtotals: "Year subtotals",
  pb_add_budget_line: "Add line",
  pb_field_overhead: "Overhead (% on direct costs)",
  pb_budget_direct: "Direct costs",
  pb_budget_overhead: "Overhead",
  pb_budget_total: "TOTAL",

  // Risks step
  pb_risks_lede:
    "Donors expect a clear-eyed view of what could go wrong and how you'll handle it. WWF safeguards below are a baseline due-diligence checklist.",
  pb_risk_register: "Risk register",
  pb_risk_register_hint:
    "Top 3–5 risks. Be honest. 'Everything's fine' kills credibility.",
  pb_risks_empty: "No risks logged yet.",
  pb_risk: "Risk",
  pb_field_risk_desc: "Risk description",
  pb_field_risk_desc_ph: "e.g. Land tenure dispute delays site access in Year 2",
  pb_field_likelihood: "Likelihood",
  pb_field_impact_lvl: "Impact",
  pb_low: "Low",
  pb_medium: "Medium",
  pb_high: "High",
  pb_field_mitigation: "Mitigation",
  pb_field_mitigation_ph: "e.g. Pre-engagement with cadastral office; alternate site identified",
  pb_add_risk: "Add risk",
  pb_safeguards_title: "Safeguards checklist",
  pb_safeguards_hint:
    "These are based on WWF's Environmental & Social Safeguards Framework and IFC Performance Standards. Check what applies — and be ready to back each one up.",
  sg_fpic: "Free, Prior & Informed Consent (FPIC)",
  sg_fpic_desc:
    "Indigenous and local communities have been consulted, with consent documented before any intervention.",
  sg_esia: "Environmental & Social Impact Assessment",
  sg_esia_desc:
    "A proportionate ESIA has been or will be conducted, with mitigation measures identified.",
  sg_gender: "Gender mainstreaming",
  sg_gender_desc: "Gender impact analysis, equal participation, and women-led activities included.",
  sg_indigenous: "Indigenous Peoples engagement",
  sg_indigenous_desc:
    "If IPs are affected, a specific engagement plan and benefit-sharing arrangement is in place.",
  sg_child: "Child protection",
  sg_child_desc: "Project activities exclude child labour and follow safeguarding standards.",
  sg_grievance: "Grievance mechanism",
  sg_grievance_desc: "A documented, accessible mechanism exists for affected parties to raise issues.",
  sg_biodiversity: "Biodiversity safeguards",
  sg_biodiversity_desc:
    "No-go zones for critical habitat; species-level mitigation; net-positive biodiversity outcome.",
  sg_stakeholder: "Stakeholder engagement plan",
  sg_stakeholder_desc: "A written plan covers who is engaged, how, when, and with what frequency.",

  // Review step
  pb_review_lede:
    "Quick look before you export. Any field marked '—' is empty in your PDF too — feel free to jump back via the stepper on the left.",
  pb_review_untitled: "Untitled proposal",
  pb_review_impact: "Impact",
  pb_review_landscape: "Landscape",
  pb_review_activities: "Activities",
  pb_review_activities_count: "logged",
  pb_review_stakeholders: "Stakeholders",
  pb_review_stakeholders_count: "mapped",
  pb_review_budget: "Budget",
  pb_review_no_budget: "Not configured",
  pb_review_safeguards: "Safeguards",
  pb_review_export_title: "Download your proposal",
  pb_review_export_body:
    "Generates a polished PDF with cover page, summary, full budget tables, risk register, and safeguards. Everything you typed stays on this device — nothing is sent anywhere.",
  pb_review_download: "Download PDF",
  pb_review_generating: "Generating…",
  pb_review_reset: "Start a new proposal",
  pb_review_reset_confirm: "This will erase the current proposal. Continue?",
  pb_review_need_name: "Add a project name in step 1 before exporting.",

  // PDF
  pb_pdf_eyebrow: "PROJECT PROPOSAL",
  pb_pdf_generated: "Generated",
  pb_pdf_powered: "Built with WWF Sustainable Finance for Conservation",
  pb_pdf_section_summary: "Project at a glance",
  pb_pdf_section_impact: "Impact & alignment",
  pb_pdf_section_activities: "Activities & deliverables",
  pb_pdf_section_stakeholders: "Beneficiaries & stakeholders",
  pb_pdf_section_budget: "Budget",
  pb_pdf_section_risks: "Risks & mitigation",
  pb_pdf_section_safeguards: "Safeguards commitments",
  pb_pdf_alignment: "ALIGNMENT",
  pb_pdf_total_label: "Total budget",
  pb_pdf_years: "Years",
  pb_pdf_beneficiaries_word: "estimated beneficiaries",
  pb_pdf_name: "Name",
  pb_pdf_role: "Role",
  pb_pdf_engagement: "Engagement",

  // Constructor — coming soon placeholder
  coming_eyebrow: "COMING SOON",
  coming_title: "A guided builder for proposals and financing — landing here soon",
  coming_body:
    "We're preparing a hands-on workspace that helps you structure a project idea, build a budget, map stakeholders and download a polished proposal ready to take to funders. It's almost ready — check back soon.",
  coming_cta_toolkit: "Browse the resource library",
  coming_cta_learning: "Start learning",
};

const es: Dict = {
  nav_home: "Inicio",
  nav_learn: "Aprende",
  nav_finance: "Navegador",
  nav_toolkit: "Herramientas",
  nav_contact: "Contáctanos",

  brand_name: "FINANZAS SOSTENIBLES",
  brand_sub: "PARA LA CONSERVACIÓN",

  hero_eyebrow: "Un solo punto de entrada para aprender",
  hero_title: "explorar y aplicar Finanzas del Paisaje",
  hero_sub:
    "Una plataforma en lenguaje sencillo para profesionales de la conservación, equipos financieros, tomadores de decisión e investigadores.",
  hero_cta1: "Empezar a aprender",
  hero_cta2: "Encontrar mi ruta",
  hero_cap: "PAISAJE · AGRICULTOR AL AMANECER [ placeholder ]",

  about_eyebrow: "ACERCA DE",
  about_title: "Por objetivo",
  about_body:
    "Ya sea que trabajes en restauración, áreas protegidas o sistemas alimentarios regenerativos, esta plataforma reorganiza todo por lo que quieres lograr — no por silos institucionales. Elige tu objetivo y te mostramos los módulos, rutas, plantillas y casos que le corresponden.",
  about_cta: "Ver más",

  tile1: "Empezar a aprender",
  tile2: "Opciones financieras",
  tile3: "Aplicar en tu paisaje",

  stats_eyebrow: "EN CIFRAS",
  stats_t: "El programa en cifras",
  stats_sub: "Datos del programa de Finanzas del Paisaje 2026 y paisajes socios.",
  stat1_n: "68%",
  stat1_t: "De las necesidades de financiamiento conservacionista siguen sin cubrir.",
  stat2_n: "3",
  stat2_t: "Paisajes con casos de estudio activos: Madagascar, el Cerrado, KAZA.",
  stat3_n: "12",
  stat3_t: "Unidades de aprendizaje en tres lentes temáticas.",
  stat4_n: "EN·ES·FR",
  stat4_t: "Totalmente traducido. Actualizado continuamente. Accesible.",

  lib_eyebrow: "RECURSOS",
  lib_title: "Biblioteca",
  lib_sub:
    "El Playbook, el marco LFA, plantillas listas para usar y un glosario en lenguaje sencillo — versionados, fechados, abiertos.",
  lib_pill1: "Enfoque de Finanzas del Paisaje",
  lib_pill2: "Playbook de Finanzas Sostenibles para la Conservación",
  lib_pill3: "Plantillas y autoevaluación",

  people_eyebrow: "CONOCE A LAS GUÍAS",
  people_t: "Conoce a las guías",
  people_s:
    "Cada módulo está narrado por una especialista o narradora de un caso — así oyes el enfoque en su propia voz.",

  contact_eyebrow: "CONTACTO E INFO",
  contact_title: "Contáctanos",
  contact_body:
    "¿Tienes una pregunta, un paisaje que aportar o un socio al que conectar? Leemos todos los mensajes.",
  contact_loc: "Gland, Suiza · colaboradores remotos",
  contact_phone: "+41 00 000 00 00",
  contact_mail: "hola@example.org",
  contact_name: "Nombre",
  contact_email: "Correo",
  contact_message: "Mensaje",
  contact_name_ph: "Tu nombre",
  contact_email_ph: "tu@org.com",
  contact_message_ph: "¿Cómo podemos ayudarte?",
  contact_send: "Enviar mensaje",

  footer_rights: "© 2026 · Recurso abierto · CC BY-NC-SA",
  footer_tech: "EN · ES · FR · WCAG AA · mobile-first",

  // Navigator
  navigator_eyebrow: "NAVEGADOR DE FINANCIAMIENTO",
  navigator_title: "Cuatro preguntas. Un punto de partida claro.",
  navigator_subtitle:
    "No te daremos un panel lleno de datos. Te orientamos hacia las rutas, plantillas y casos adecuados — y te dejamos avanzar.",
  navigator_inputs: "TUS RESPUESTAS",
  navigator_not_set: "Sin definir",
  navigator_complete: "Completado",
  navigator_step: "Paso",
  navigator_of: "de",
  navigator_start_over: "Empezar de nuevo",
  navigator_question: "PREGUNTA",
  navigator_back: "Atrás",
  navigator_next: "Siguiente",
  navigator_see_pathways: "Ver mis rutas",
  navigator_result_eyebrow: "TU PUNTO DE PARTIDA",
  navigator_result_in: "en paisajes",
  navigator_result_landscapes: ", enfrentando",
  navigator_result_pursuing: ", buscando",
  navigator_result_prefix: "Un/una",
  navigator_rec_pathways: "RUTAS RECOMENDADAS",
  navigator_3_of_12: "3 de 12",
  navigator_start_here: "Empieza por aquí",
  navigator_similar: "CASOS SIMILARES",
  navigator_seen_work: "Lo hemos visto funcionar aquí",
  navigator_relevant: "HERRAMIENTAS RELEVANTES",
  navigator_templates_path: "Plantillas para esta ruta",
  navigator_get: "Descargar",
  navigator_open_lms: "Abrir unidad del LMS correspondiente",
  navigator_try_diff: "Probar otras respuestas",
  fit_strong: "Encaje fuerte",
  fit_good: "Buen encaje",
  fit_explore: "Explorar",

  // Toolkit
  toolkit_eyebrow: "HERRAMIENTAS · RECURSOS Y BIBLIOTECA",
  toolkit_title: "Todo, listo para usar.",
  toolkit_subtitle:
    "El Playbook, el marco LFA, plantillas listas para usar, un glosario en lenguaje sencillo y un mapa de paisajes donde se aplica el enfoque.",
  toolkit_map: "MAPA INTERACTIVO",
  toolkit_landscapes: "paisajes",
  toolkit_read_case: "Leer caso",
  toolkit_1pager: "Resumen de 1 página",
  toolkit_cases_eyebrow: "CASOS DE ESTUDIO",
  toolkit_cases_title: "Donde se está aplicando el enfoque",
  toolkit_narrator: "Narrador/a",
  toolkit_open: "Abrir",
  toolkit_library: "BIBLIOTECA",
  toolkit_library_title: "Documentos descargables",
  toolkit_library_sub:
    "Todas las herramientas prácticas, versionadas y fechadas. Todo está pensado para editarse y usarse con socios.",
  toolkit_search: "Buscar",
  toolkit_download: "Descargar",
  toolkit_no_match: "No hay documentos que coincidan.",
  filter_all: "Todos",
  filter_playbook: "Playbook",
  filter_framework: "Marco",
  filter_templates: "Plantillas",
  filter_glossary: "Glosario",

  // Learning
  learning_eyebrow: "EMPIEZA A APRENDER",
  learning_title: "El currículo",
  learning_subtitle:
    "Doce unidades en tres lentes temáticas. Vista previa aquí — luego continúa en el LMS para seguir tu progreso y obtener certificados.",
  learning_duration: "Duración",
  learning_format: "Formato",
  learning_level: "Nivel",
  learning_narrator: "Narrador/a",
  learning_preview: "Vista previa",
  learning_continue: "Continúa en el LMS",
  learning_continue_tail: "para seguir tu progreso, hacer evaluaciones y obtener un certificado.",
  learning_open_lms: "Abrir en LMS",

  // Lentes temáticas
  lens_greening: "Finanzas verdes",
  lens_financing: "Financiamiento verde",
  lens_food: "Alimentación y agricultura",
  lens_food_short: "Alimentación y agricultura",

  // Navigator — preguntas
  q_role_label: "Tu rol",
  q_role_q: "¿Cuál es tu rol?",
  q_role_hint: "Lo usamos para destacar los recursos más útiles para ti.",
  q_region_label: "Región de interés",
  q_region_q: "¿Qué región te interesa más?",
  q_region_hint: "Los recursos globales se muestran siempre, incluso al elegir una región.",
  q_topic_label: "Tema",
  q_topic_q: "¿En qué quieres profundizar?",
  q_topic_hint: "Las cuatro categorías sobre las que se organiza el programa de WWF.",
  q_format_label: "Formato",
  q_format_q: "¿Qué formato te sirve hoy?",
  q_format_hint: "Sáltalo si no tienes preferencia — pesa poco en el resultado.",

  // Audiencias
  aud_investor: "Inversor o gestor de fondos",
  aud_investor_s: "Bancos, DFI, fundaciones, fondos",
  aud_practitioner: "Profesional de conservación",
  aud_practitioner_s: "Desarrollador de proyectos, equipo ONG, gestor de paisaje",
  aud_corporate: "Corporativo / cadena de suministro",
  aud_corporate_s: "Sostenibilidad, abastecimiento, estrategia scope 3",
  aud_policymaker: "Formulador de políticas",
  aud_policymaker_s: "Gobierno, regulador, agencia",
  aud_ngo_research: "ONG / investigador",
  aud_ngo_research_s: "Equipo interno, académico, think tank",
  aud_community: "Comunidad / pequeño productor",
  aud_community_short: "Comunidad",
  aud_ngo: "ONG",
  aud_researcher: "Investigador",

  // Regiones
  region_global: "Global",
  region_global_s: "Recursos aplicables en cualquier lugar",
  region_africa: "África",
  region_africa_s: "África subsahariana y costera",
  region_asia: "Asia",
  region_asia_s: "Sur y sudeste asiático",
  region_latam: "América Latina",
  region_latam_s: "Sur y Centroamérica",
  region_europe: "Europa",

  // Temas
  topic_basics: "Fundamentos de Finanzas del Paisaje",
  topic_basics_s: "Marcos, guías introductorias",
  topic_mechanisms: "Mecanismos financieros y pipeline",
  topic_mechanisms_s: "Instrumentos, casos, estructuración",
  topic_implementation: "Implementación y herramientas",
  topic_implementation_s: "Cómo aplicarlo en la práctica",
  topic_strategy: "Estrategia y mapeo de conservación",
  topic_strategy_s: "Definición de límites, priorización",

  // Tipos de documento
  type_brief: "Resumen",
  type_brief_s: "1–2 páginas, lectura corta",
  type_briefing_paper: "Documento informativo",
  type_guide: "Guía",
  type_guide_s: "Manual completo",
  type_guidance_note: "Nota de orientación",
  type_case_study: "Caso de estudio",
  type_case_study_s: "Ejemplo del mundo real",
  type_playbook: "Playbook",
  type_playbook_s: "Instrumento paso a paso",
  type_report: "Informe",
  type_presentation: "Presentación",

  // Finanzas
  fin_debt: "Deuda",
  fin_equity: "Capital",
  fin_grants: "Subvenciones",
  fin_blended: "Finanzas mixtas",
  fin_outcome: "Basado en resultados",
  fin_pes: "PSE",
  fin_carbon: "Carbono",
  fin_guarantees: "Garantías",
  fin_microfinance: "Microfinanzas",
  fin_private: "Inversión privada",

  // Navigator — resultados
  nav_result_count_pre: "De los 27 recursos de la biblioteca, ",
  nav_result_count_post: " coinciden con tu selección.",
  nav_top_picks: "Mejores opciones para ti",
  nav_browse_all: "Ver todos los resultados en la biblioteca",
  nav_no_results: "No hay coincidencias exactas.",
  nav_no_results_hint: "Prueba ampliando los filtros o explora la biblioteca completa.",
  nav_open_doc: "Abrir documento",

  // Toolkit — filtros
  toolkit_filter_topic: "Tema",
  toolkit_filter_audience: "Audiencia",
  toolkit_filter_region: "Región",
  toolkit_filter_type: "Tipo",
  toolkit_filter_clear: "Limpiar filtros",
  toolkit_filter_any: "Cualquiera",
  toolkit_results_count: "documentos",
  toolkit_disclaimer:
    "Todos los documentos se abren en Google Drive (enlaces externos). Los enlaces pueden romperse o desactualizarse. Catálogo actualizado por última vez el",
  toolkit_external: "Enlace externo",
  toolkit_browse_library: "Ver biblioteca",

  // Acerca de este sitio (BORRADOR — pendiente de revisión del equipo de marca)
  about_site_eyebrow: "ACERCA DE ESTE SITIO",
  about_site_title: "Dónde se ubica este micrositio",
  about_site_body:
    "Finanzas Sostenibles para la Conservación es un micrositio de WWF que conecta a profesionales de la conservación, equipos financieros y tomadores de decisión con las rutas de financiamiento que corresponden a su trabajo en el paisaje. Forma parte del programa de Finanzas para la Conservación de WWF y reúne unidades de aprendizaje, plantillas listas para usar y casos reales de paisajes en un solo punto de entrada. [BORRADOR — copy provisional, pendiente de revisión para confirmar la propiedad, el alcance y el planteamiento específico del problema.]",

  // Proposal Builder — nav + chrome de la página
  nav_builder: "Constructor",
  pb_page_eyebrow: "CONSTRUCTOR DE PROPUESTAS",
  pb_page_title: "Convierte una idea en una propuesta financiable",
  pb_page_subtitle:
    "Un constructor guiado anclado en Theory of Change y Marco Lógico — el lenguaje que realmente usan los donantes de conservación. Responde 7 pasos cortos y descarga un PDF pulido que puedes llevar a cualquier financiador.",
  pb_eyebrow: "PASOS DEL CONSTRUCTOR",
  pb_step: "Paso",
  pb_saved_locally: "Guardado localmente en este dispositivo",
  pb_loading: "Cargando…",
  pb_prev: "Anterior",
  pb_next: "Siguiente paso",
  pb_refs_eyebrow: "REFERENCIAS",
  pb_refs_hint:
    "Estos documentos del catálogo profundizan en lo que este paso te pide. Ábrelos en otra pestaña mientras llenas el formulario.",

  // Títulos + eyebrows de los pasos
  pb_step_intro_title: "Cuéntanos sobre tu proyecto",
  pb_step_intro_eyebrow: "EMPEZANDO",
  pb_step_impact_title: "Define tu impacto",
  pb_step_impact_eyebrow: "TEORÍA DEL CAMBIO",
  pb_step_landscape_title: "¿Dónde se va a ejecutar?",
  pb_step_landscape_eyebrow: "PAISAJE",
  pb_step_activities_title: "Actividades y entregables",
  pb_step_activities_eyebrow: "MARCO LÓGICO",
  pb_step_stakeholders_title: "Quiénes se benefician, deciden o vigilan",
  pb_step_stakeholders_eyebrow: "PARTES INTERESADAS",
  pb_step_budget_title: "Presupuesto",
  pb_step_budget_eyebrow: "PLANTILLAS GUIADAS",
  pb_step_risks_title: "Riesgos y salvaguardas",
  pb_step_risks_eyebrow: "DUE DILIGENCE",
  pb_step_review_title: "Revisar y exportar",
  pb_step_review_eyebrow: "RESULTADO",

  // Paso Intro
  pb_intro_lede:
    "Empieza por lo básico. Los financiadores quieren saber quién está detrás de la propuesta y cómo contactarte. Puedes editar todo esto después.",
  pb_field_project_name: "Nombre del proyecto",
  pb_field_project_name_hint: "Corto, evocador, fácil de leer. Evita jerga técnica.",
  pb_field_project_name_ph: "p. ej. Restauración Ribereña del Cerrado",
  pb_field_lead_org: "Organización líder",
  pb_field_lead_org_hint: "¿Quién responde por la ejecución? Usa el nombre legal.",
  pb_field_lead_org_ph: "p. ej. WWF Colombia — Programa Orinoquía",
  pb_field_contact_name: "Nombre de contacto",
  pb_field_contact_name_ph: "Tu nombre",
  pb_field_contact_email: "Correo de contacto",

  // Paso Impacto
  pb_impact_lede:
    "¿Cómo se ve el paisaje si el proyecto tiene éxito? Describe el resultado que quieres, no la actividad que vas a ejecutar. Esto se convierte en el ápice de tu Teoría del Cambio.",
  pb_field_impact: "Declaración de impacto",
  pb_field_impact_hint:
    "1–2 párrafos. Describe el *cambio* en el paisaje, las personas o los sistemas al final del proyecto.",
  pb_field_impact_ph:
    "p. ej. Para 2030, 25.000 ha de zonas ribereñas degradadas en el Cerrado están bajo restauración activa, con tenencia asegurada, financiadas por 4 vehículos de finanzas combinadas, y gestionadas por cooperativas campesinas que generan medios de vida durante todo el año…",
  pb_field_sdgs: "ODS alineados (opcional)",
  pb_field_sdgs_hint:
    "Marca los Objetivos de Desarrollo Sostenible a los que el proyecto contribuye directamente. Menos es más — máx. 3–5.",
  pb_field_ndc: "Alineado con la NDC del país",
  pb_field_nbsap: "Alineado con la NBSAP del país",

  // Paso Paisaje
  pb_landscape_lede:
    "Los financiadores necesitan saber qué están financiando y dónde. Usa la taxonomía de biomas de WWF — se alinea fácil con los criterios de la mayoría de los fondos multilaterales.",
  pb_field_biome: "Bioma principal",
  pb_field_biome_hint: "Elige el dominante. Si es mixto, escoge el de mayor área.",
  pb_field_country: "País (o países)",
  pb_field_country_ph: "p. ej. Colombia, o Colombia + Ecuador",
  pb_field_duration: "Duración",
  pb_field_duration_hint: "La mayoría de proyectos de paisaje son de 3–5 años.",
  pb_field_scale: "Escala",
  pb_field_scale_hint:
    "Sitio = una sola zona. Paisaje = varios sitios bajo una misma estrategia. Jurisdicción = a nivel municipal/departamental. Nacional = país entero.",
  pb_year: "año",
  pb_years: "años",
  pb_year_lower: "año",
  pb_years_lower: "años",

  biome_forest: "Bosque",
  biome_savanna: "Sabana",
  biome_grassland: "Pastizal",
  biome_drylands: "Tierras áridas",
  biome_wetland: "Humedal",
  biome_freshwater: "Agua dulce",
  biome_marine: "Marino / costero",
  biome_mountain: "Montaña",
  biome_agricultural: "Paisaje agrícola",
  biome_urban: "Urbano / periurbano",

  scale_site: "Sitio",
  scale_landscape: "Paisaje",
  scale_jurisdiction: "Jurisdicción",
  scale_national: "Nacional",

  // Paso Actividades
  pb_activities_lede:
    "Lista las actividades que producirán el cambio. Cada una necesita un entregable (algo que se pueda señalar y decir 'esto está hecho') y un rango de años.",
  pb_activities_empty: "Todavía no hay actividades. Haz clic en el botón de abajo para agregar la primera.",
  pb_activity: "Actividad",
  pb_remove: "Quitar",
  pb_field_activity_name: "Actividad",
  pb_field_activity_name_ph: "p. ej. Capacitar a 200 miembros de cooperativas en agroforestería",
  pb_field_deliverable: "Entregable",
  pb_field_deliverable_ph: "p. ej. Currículo de capacitación + cohorte certificada de 200 personas",
  pb_field_year_start: "Empieza en",
  pb_field_year_end: "Termina en",
  pb_add_activity: "Agregar actividad",

  // Paso Stakeholders
  pb_stakeholders_lede:
    "Los financiadores leen esta sección con lupa. Si no puedes nombrar a quiénes se benefician y a quiénes deciden, la propuesta no pasa el filtro inicial.",
  pb_field_beneficiaries: "Beneficiarios primarios",
  pb_field_beneficiaries_hint:
    "¿Quién queda mejor gracias a este proyecto? Sé específico con género, edad y medio de vida.",
  pb_field_beneficiaries_ph:
    "p. ej. 1.200 hogares de pequeños productores en la cuenca alta del Magdalena, con 40% de cooperativas lideradas por mujeres…",
  pb_field_beneficiary_count: "Beneficiarios estimados (personas)",
  pb_stakeholder_list: "Mapa de actores",
  pb_stakeholder_list_hint:
    "Lista a quienes deben ser informados, consultados o cuya aprobación necesitas. El nivel de involucramiento importa para las salvaguardas.",
  pb_stakeholders_empty: "Todavía no hay actores mapeados.",
  pb_field_stakeholder_name_ph: "Nombre o grupo",
  pb_add_stakeholder: "Agregar actor",
  shr_community: "Comunidad local",
  shr_government: "Gobierno",
  shr_ngo: "ONG aliada",
  shr_private: "Sector privado",
  shr_academia: "Academia / investigación",
  shr_donor: "Donante / inversionista",
  eng_inform: "Informar",
  eng_consult: "Consultar",
  eng_collaborate: "Colaborar",
  eng_decide: "Decidir",

  // Paso Presupuesto
  pb_budget_lede:
    "Elige un arquetipo de proyecto y precargamos las líneas presupuestales típicas de ese tipo. Edita libremente: agrega, quita filas y completa los montos por año.",
  pb_field_project_type: "Arquetipo del proyecto",
  pb_field_project_type_hint: "Define las líneas presupuestales precargadas. Puedes personalizar después.",
  ptype_restoration: "Restauración de ecosistemas",
  ptype_protected_area: "Gestión de áreas protegidas",
  ptype_sustainable_ag: "Agricultura sostenible / agroforestería",
  ptype_marine_coastal: "Gestión marino-costera",
  ptype_livelihoods: "Medios de vida comunitarios",
  ptype_bankable_nbs: "Solución basada en la naturaleza bancarizable",
  pb_budget_table: "Presupuesto por líneas",
  pb_budget_category: "Categoría",
  pb_budget_category_ph: "Nombre de la categoría",
  pb_budget_subtotal: "Subtotal",
  pb_budget_subtotals: "Subtotales por año",
  pb_add_budget_line: "Agregar línea",
  pb_field_overhead: "Indirectos (% sobre costos directos)",
  pb_budget_direct: "Costos directos",
  pb_budget_overhead: "Indirectos",
  pb_budget_total: "TOTAL",

  // Paso Riesgos
  pb_risks_lede:
    "Los donantes esperan una mirada lúcida de qué puede salir mal y cómo lo vas a manejar. Las salvaguardas WWF de abajo son una checklist de due diligence básica.",
  pb_risk_register: "Registro de riesgos",
  pb_risk_register_hint:
    "Los 3–5 riesgos principales. Sé honesto. 'Todo está bien' destruye la credibilidad.",
  pb_risks_empty: "Todavía no hay riesgos registrados.",
  pb_risk: "Riesgo",
  pb_field_risk_desc: "Descripción del riesgo",
  pb_field_risk_desc_ph: "p. ej. Disputa de tenencia retrasa el acceso al sitio en el año 2",
  pb_field_likelihood: "Probabilidad",
  pb_field_impact_lvl: "Impacto",
  pb_low: "Baja",
  pb_medium: "Media",
  pb_high: "Alta",
  pb_field_mitigation: "Mitigación",
  pb_field_mitigation_ph: "p. ej. Pre-engagement con la oficina catastral; sitio alterno identificado",
  pb_add_risk: "Agregar riesgo",
  pb_safeguards_title: "Checklist de salvaguardas",
  pb_safeguards_hint:
    "Basadas en el Marco de Salvaguardas Ambientales y Sociales de WWF y los IFC Performance Standards. Marca lo que aplica — y prepárate para sustentar cada una.",
  sg_fpic: "Consentimiento Libre, Previo e Informado (CLPI)",
  sg_fpic_desc:
    "Las comunidades indígenas y locales han sido consultadas, con consentimiento documentado antes de cualquier intervención.",
  sg_esia: "Evaluación de Impacto Ambiental y Social",
  sg_esia_desc: "Se ha hecho (o se hará) una EIAS proporcional, con medidas de mitigación identificadas.",
  sg_gender: "Enfoque de género",
  sg_gender_desc: "Análisis de impacto de género, participación equitativa y actividades lideradas por mujeres.",
  sg_indigenous: "Involucramiento de Pueblos Indígenas",
  sg_indigenous_desc:
    "Si hay PI afectados, existe un plan específico de involucramiento y un acuerdo de distribución de beneficios.",
  sg_child: "Protección de la niñez",
  sg_child_desc: "Las actividades excluyen trabajo infantil y siguen estándares de protección.",
  sg_grievance: "Mecanismo de quejas",
  sg_grievance_desc:
    "Existe un mecanismo documentado y accesible para que las partes afectadas presenten reclamos.",
  sg_biodiversity: "Salvaguardas de biodiversidad",
  sg_biodiversity_desc:
    "Zonas no-go para hábitat crítico; mitigación a nivel de especie; resultado neto positivo en biodiversidad.",
  sg_stakeholder: "Plan de involucramiento de actores",
  sg_stakeholder_desc: "Plan escrito que cubre quiénes, cómo, cuándo y con qué frecuencia se involucra a cada actor.",

  // Paso Review
  pb_review_lede:
    "Vistazo rápido antes de exportar. Cualquier campo marcado '—' va vacío en el PDF — usa el navegador izquierdo para volver a cualquier paso.",
  pb_review_untitled: "Propuesta sin título",
  pb_review_impact: "Impacto",
  pb_review_landscape: "Paisaje",
  pb_review_activities: "Actividades",
  pb_review_activities_count: "registradas",
  pb_review_stakeholders: "Actores",
  pb_review_stakeholders_count: "mapeados",
  pb_review_budget: "Presupuesto",
  pb_review_no_budget: "Sin configurar",
  pb_review_safeguards: "Salvaguardas",
  pb_review_export_title: "Descarga tu propuesta",
  pb_review_export_body:
    "Genera un PDF pulido con portada, resumen, tablas presupuestales completas, registro de riesgos y salvaguardas. Todo lo que escribiste se queda en este dispositivo — no se envía a ningún lado.",
  pb_review_download: "Descargar PDF",
  pb_review_generating: "Generando…",
  pb_review_reset: "Iniciar una nueva propuesta",
  pb_review_reset_confirm: "Esto borra la propuesta actual. ¿Continuar?",
  pb_review_need_name: "Agrega un nombre de proyecto en el paso 1 antes de exportar.",

  // PDF
  pb_pdf_eyebrow: "PROPUESTA DE PROYECTO",
  pb_pdf_generated: "Generado",
  pb_pdf_powered: "Construido con WWF Finanzas Sostenibles para la Conservación",
  pb_pdf_section_summary: "Resumen del proyecto",
  pb_pdf_section_impact: "Impacto y alineación",
  pb_pdf_section_activities: "Actividades y entregables",
  pb_pdf_section_stakeholders: "Beneficiarios y actores",
  pb_pdf_section_budget: "Presupuesto",
  pb_pdf_section_risks: "Riesgos y mitigación",
  pb_pdf_section_safeguards: "Compromisos de salvaguardas",
  pb_pdf_alignment: "ALINEACIÓN",
  pb_pdf_total_label: "Presupuesto total",
  pb_pdf_years: "Años",
  pb_pdf_beneficiaries_word: "beneficiarios estimados",
  pb_pdf_name: "Nombre",
  pb_pdf_role: "Rol",
  pb_pdf_engagement: "Involucramiento",

  // Constructor — placeholder próximamente
  coming_eyebrow: "PRÓXIMAMENTE",
  coming_title: "Un constructor guiado para propuestas y financiamiento — aterriza pronto aquí",
  coming_body:
    "Estamos preparando un espacio de trabajo guiado que te ayuda a estructurar una idea de proyecto, armar el presupuesto, mapear a los actores y descargar una propuesta pulida lista para presentar a financiadores. Está a punto — vuelve pronto.",
  coming_cta_toolkit: "Explorar la biblioteca de recursos",
  coming_cta_learning: "Empezar a aprender",
};

const fr: Dict = {
  nav_home: "Accueil",
  nav_learn: "Se former",
  nav_finance: "Navigateur",
  nav_toolkit: "Outils",
  nav_contact: "Contact",

  brand_name: "FINANCE DURABLE",
  brand_sub: "POUR LA CONSERVATION",

  hero_eyebrow: "Un point d'entrée unique pour apprendre",
  hero_title: "explorer et appliquer la Finance Paysagère",
  hero_sub:
    "Une plateforme en langage clair pour les professionnels de la conservation, les équipes financières, les décideurs et les chercheurs.",
  hero_cta1: "Commencer",
  hero_cta2: "Trouver ma voie",
  hero_cap: "PAYSAGE · AGRICULTEUR AU LEVER DU SOLEIL [ placeholder ]",

  about_eyebrow: "À PROPOS",
  about_title: "Par objectif",
  about_body:
    "Que vous travailliez sur la restauration, les aires protégées ou les systèmes alimentaires régénératifs, cette plateforme réorganise tout par ce que vous cherchez à accomplir — pas par silos institutionnels.",
  about_cta: "Voir plus",

  tile1: "Se former",
  tile2: "Options financières",
  tile3: "Appliquer au paysage",

  stats_eyebrow: "EN CHIFFRES",
  stats_t: "Le programme en chiffres",
  stats_sub: "Données du programme Finance Paysagère 2026 et des paysages partenaires.",
  stat1_n: "68%",
  stat1_t: "Des besoins de financement conservationniste restent non couverts.",
  stat2_n: "3",
  stat2_t: "Paysages avec études de cas : Madagascar, le Cerrado, KAZA.",
  stat3_n: "12",
  stat3_t: "Unités d'apprentissage réparties sur trois axes.",
  stat4_n: "EN·ES·FR",
  stat4_t: "Entièrement traduit. Mis à jour en continu. Accessible.",

  lib_eyebrow: "RESSOURCES",
  lib_title: "Bibliothèque",
  lib_sub:
    "Le Playbook, le cadre LFA, des modèles prêts à l'emploi et un glossaire en langage clair — versionnés, datés, ouverts.",
  lib_pill1: "Approche Finance Paysagère",
  lib_pill2: "Playbook Finance Durable pour la Conservation",
  lib_pill3: "Modèles et auto-évaluation",

  people_eyebrow: "LES GUIDES",
  people_t: "Les guides",
  people_s:
    "Chaque module est narré par une spécialiste ou une narratrice de cas — vous entendez l'approche dans leur propre voix.",

  contact_eyebrow: "CONTACT & INFOS",
  contact_title: "Contactez-nous",
  contact_body:
    "Une question, un paysage à proposer, un partenaire à connecter ? Nous lisons chaque message.",
  contact_loc: "Gland, Suisse · contributeurs à distance",
  contact_phone: "+41 00 000 00 00",
  contact_mail: "bonjour@example.org",
  contact_name: "Nom",
  contact_email: "E-mail",
  contact_message: "Message",
  contact_name_ph: "Votre nom",
  contact_email_ph: "vous@org.com",
  contact_message_ph: "Comment pouvons-nous aider ?",
  contact_send: "Envoyer",

  footer_rights: "© 2026 · Ressource ouverte · CC BY-NC-SA",
  footer_tech: "EN · ES · FR · WCAG AA · mobile-first",

  // Navigator
  navigator_eyebrow: "NAVIGATEUR DE FINANCEMENT",
  navigator_title: "Quatre questions. Un point de départ clair.",
  navigator_subtitle:
    "Nous ne vous donnerons pas un tableau de bord. Nous vous orientons vers les bonnes voies, modèles et études de cas — puis nous vous laissons avancer.",
  navigator_inputs: "VOS RÉPONSES",
  navigator_not_set: "Non défini",
  navigator_complete: "Terminé",
  navigator_step: "Étape",
  navigator_of: "sur",
  navigator_start_over: "Recommencer",
  navigator_question: "QUESTION",
  navigator_back: "Retour",
  navigator_next: "Suivant",
  navigator_see_pathways: "Voir mes voies",
  navigator_result_eyebrow: "VOTRE POINT DE DÉPART",
  navigator_result_in: "dans des paysages",
  navigator_result_landscapes: ", face à",
  navigator_result_pursuing: ", recherchant",
  navigator_result_prefix: "Un/une",
  navigator_rec_pathways: "VOIES RECOMMANDÉES",
  navigator_3_of_12: "3 sur 12",
  navigator_start_here: "Commencez par ici",
  navigator_similar: "CAS SIMILAIRES",
  navigator_seen_work: "Nous l'avons vu fonctionner ici",
  navigator_relevant: "OUTILS PERTINENTS",
  navigator_templates_path: "Modèles pour cette voie",
  navigator_get: "Obtenir",
  navigator_open_lms: "Ouvrir l'unité LMS correspondante",
  navigator_try_diff: "Essayer d'autres réponses",
  fit_strong: "Très adapté",
  fit_good: "Bon match",
  fit_explore: "À explorer",

  // Toolkit
  toolkit_eyebrow: "OUTILS · RESSOURCES & BIBLIOTHÈQUE",
  toolkit_title: "Tout, prêt à l'emploi.",
  toolkit_subtitle:
    "Le Playbook, le cadre LFA, des modèles prêts à l'emploi, un glossaire en langage clair et une carte des paysages où l'approche est appliquée.",
  toolkit_map: "CARTE INTERACTIVE",
  toolkit_landscapes: "paysages",
  toolkit_read_case: "Lire l'étude",
  toolkit_1pager: "Fiche 1 page",
  toolkit_cases_eyebrow: "ÉTUDES DE CAS",
  toolkit_cases_title: "Où l'approche est appliquée",
  toolkit_narrator: "Narratrice",
  toolkit_open: "Ouvrir",
  toolkit_library: "BIBLIOTHÈQUE",
  toolkit_library_title: "Documents téléchargeables",
  toolkit_library_sub:
    "Tous les outils pratiques, versionnés et datés. Tout est conçu pour être édité et utilisé avec des partenaires.",
  toolkit_search: "Rechercher",
  toolkit_download: "Télécharger",
  toolkit_no_match: "Aucun document ne correspond.",
  filter_all: "Tous",
  filter_playbook: "Playbook",
  filter_framework: "Cadre",
  filter_templates: "Modèles",
  filter_glossary: "Glossaire",

  // Learning
  learning_eyebrow: "COMMENCER À APPRENDRE",
  learning_title: "Le programme",
  learning_subtitle:
    "Douze unités réparties sur trois axes. Aperçu ici — poursuivez dans le LMS pour le suivi et les certificats.",
  learning_duration: "Durée",
  learning_format: "Format",
  learning_level: "Niveau",
  learning_narrator: "Narratrice",
  learning_preview: "Aperçu",
  learning_continue: "Continuez dans le LMS",
  learning_continue_tail: "pour suivre votre progression, passer les évaluations et obtenir un certificat.",
  learning_open_lms: "Ouvrir dans le LMS",

  // Axes thématiques
  lens_greening: "Finance verte",
  lens_financing: "Financement vert",
  lens_food: "Alimentation & agriculture",
  lens_food_short: "Alim. & agriculture",

  // Navigator — questions
  q_role_label: "Votre rôle",
  q_role_q: "Quel est votre rôle ?",
  q_role_hint: "Cela nous aide à mettre en avant les ressources les plus utiles.",
  q_region_label: "Région d'intérêt",
  q_region_q: "Quelle région vous intéresse le plus ?",
  q_region_hint: "Les ressources globales s'affichent toujours en complément.",
  q_topic_label: "Thème",
  q_topic_q: "Sur quoi voulez-vous approfondir ?",
  q_topic_hint: "Les quatre piliers du programme WWF.",
  q_format_label: "Format",
  q_format_q: "Quel format vous convient aujourd'hui ?",
  q_format_hint: "Passez si vous n'avez pas de préférence — il pèse peu.",

  // Audiences
  aud_investor: "Investisseur ou gestionnaire de fonds",
  aud_investor_s: "Banques, IFD, fondations, fonds",
  aud_practitioner: "Praticien de la conservation",
  aud_practitioner_s: "Développeur de projet, équipe ONG, gestionnaire",
  aud_corporate: "Entreprise / chaîne d'approvisionnement",
  aud_corporate_s: "Durabilité, sourcing, stratégie scope 3",
  aud_policymaker: "Décideur politique",
  aud_policymaker_s: "Gouvernement, régulateur, agence",
  aud_ngo_research: "ONG / chercheur",
  aud_ngo_research_s: "Équipe interne, universitaire, think tank",
  aud_community: "Communauté / petit producteur",
  aud_community_short: "Communauté",
  aud_ngo: "ONG",
  aud_researcher: "Chercheur",

  // Régions
  region_global: "Global",
  region_global_s: "Ressources applicables partout",
  region_africa: "Afrique",
  region_africa_s: "Afrique subsaharienne et côtière",
  region_asia: "Asie",
  region_asia_s: "Asie du Sud et du Sud-Est",
  region_latam: "Amérique latine",
  region_latam_s: "Amérique du Sud et centrale",
  region_europe: "Europe",

  // Thèmes
  topic_basics: "Fondamentaux de la Finance Paysagère",
  topic_basics_s: "Cadres, guides d'introduction",
  topic_mechanisms: "Mécanismes financiers & pipeline",
  topic_mechanisms_s: "Instruments, cas, structuration",
  topic_implementation: "Mise en œuvre & outils",
  topic_implementation_s: "Comment passer à la pratique",
  topic_strategy: "Stratégie & cartographie de conservation",
  topic_strategy_s: "Définir les limites, prioriser",

  // Types de documents
  type_brief: "Synthèse",
  type_brief_s: "1–2 pages, lecture courte",
  type_briefing_paper: "Note d'information",
  type_guide: "Guide",
  type_guide_s: "Manuel complet",
  type_guidance_note: "Note d'orientation",
  type_case_study: "Étude de cas",
  type_case_study_s: "Exemple concret",
  type_playbook: "Playbook",
  type_playbook_s: "Instrument étape par étape",
  type_report: "Rapport",
  type_presentation: "Présentation",

  // Finance
  fin_debt: "Dette",
  fin_equity: "Capital",
  fin_grants: "Subventions",
  fin_blended: "Finance mixte",
  fin_outcome: "Axé sur les résultats",
  fin_pes: "PSE",
  fin_carbon: "Carbone",
  fin_guarantees: "Garanties",
  fin_microfinance: "Microfinance",
  fin_private: "Investissement privé",

  // Navigator — résultats
  nav_result_count_pre: "Sur les 27 ressources de la bibliothèque, ",
  nav_result_count_post: " correspondent à votre sélection.",
  nav_top_picks: "Meilleurs choix pour vous",
  nav_browse_all: "Voir toutes les correspondances dans la bibliothèque",
  nav_no_results: "Aucune correspondance exacte.",
  nav_no_results_hint: "Élargissez les filtres ou parcourez la bibliothèque complète.",
  nav_open_doc: "Ouvrir le document",

  // Toolkit — filtres
  toolkit_filter_topic: "Thème",
  toolkit_filter_audience: "Audience",
  toolkit_filter_region: "Région",
  toolkit_filter_type: "Type",
  toolkit_filter_clear: "Réinitialiser",
  toolkit_filter_any: "Tous",
  toolkit_results_count: "documents",
  toolkit_disclaimer:
    "Tous les documents s'ouvrent dans Google Drive (liens externes). Les liens peuvent être rompus ou obsolètes. Catalogue mis à jour pour la dernière fois le",
  toolkit_external: "Lien externe",
  toolkit_browse_library: "Voir la bibliothèque",

  // À propos de ce site (BROUILLON — en attente de révision par l'équipe de marque)
  about_site_eyebrow: "À PROPOS DE CE SITE",
  about_site_title: "Où se situe ce microsite",
  about_site_body:
    "Finance Durable pour la Conservation est un microsite WWF qui met en relation les professionnels de la conservation, les équipes financières et les décideurs avec les voies de financement adaptées à leur travail paysager. Il fait partie du programme Finance pour la Conservation de WWF et rassemble en un seul point d'entrée des unités d'apprentissage, des modèles prêts à l'emploi et des cas paysagers réels. [BROUILLON — texte provisoire, en attente de révision pour confirmer la propriété, la portée et l'énoncé spécifique du problème.]",

  // Proposal Builder
  nav_builder: "Constructeur",
  pb_page_eyebrow: "CONSTRUCTEUR DE PROPOSITIONS",
  pb_page_title: "Transformez une idée en proposition finançable",
  pb_page_subtitle:
    "Un constructeur guidé ancré dans la Théorie du Changement et le Cadre Logique — le langage qu'utilisent réellement les bailleurs de la conservation. Répondez à 7 étapes courtes et téléchargez un PDF soigné prêt à être envoyé à n'importe quel financeur.",
  pb_eyebrow: "ÉTAPES DU CONSTRUCTEUR",
  pb_step: "Étape",
  pb_saved_locally: "Enregistré localement sur cet appareil",
  pb_loading: "Chargement…",
  pb_prev: "Précédent",
  pb_next: "Étape suivante",
  pb_refs_eyebrow: "RÉFÉRENCES",
  pb_refs_hint:
    "Ces documents du catalogue approfondissent cette étape. Ouvrez-les dans un nouvel onglet pendant que vous remplissez le formulaire.",

  pb_step_intro_title: "Parlez-nous de votre projet",
  pb_step_intro_eyebrow: "POUR COMMENCER",
  pb_step_impact_title: "Définissez votre impact",
  pb_step_impact_eyebrow: "THÉORIE DU CHANGEMENT",
  pb_step_landscape_title: "Où cela aura-t-il lieu ?",
  pb_step_landscape_eyebrow: "PAYSAGE",
  pb_step_activities_title: "Activités et livrables",
  pb_step_activities_eyebrow: "CADRE LOGIQUE",
  pb_step_stakeholders_title: "Qui bénéficie, décide ou observe",
  pb_step_stakeholders_eyebrow: "PARTIES PRENANTES",
  pb_step_budget_title: "Budget",
  pb_step_budget_eyebrow: "GABARITS GUIDÉS",
  pb_step_risks_title: "Risques et garanties",
  pb_step_risks_eyebrow: "DUE DILIGENCE",
  pb_step_review_title: "Revoir et exporter",
  pb_step_review_eyebrow: "RÉSULTAT",

  pb_intro_lede:
    "Commencez par les bases. Les financeurs veulent savoir qui porte la proposition et comment vous contacter. Vous pourrez tout modifier plus tard.",
  pb_field_project_name: "Nom du projet",
  pb_field_project_name_hint: "Court, évocateur, lisible. Évitez le jargon.",
  pb_field_project_name_ph: "p. ex. Programme de restauration ripariale du Cerrado",
  pb_field_lead_org: "Organisation pilote",
  pb_field_lead_org_hint: "Qui est responsable de la mise en œuvre ? Utilisez le nom légal.",
  pb_field_lead_org_ph: "p. ex. WWF France — Programme Méditerranée",
  pb_field_contact_name: "Nom du contact",
  pb_field_contact_name_ph: "Votre nom",
  pb_field_contact_email: "E-mail de contact",

  pb_impact_lede:
    "À quoi ressemble le paysage si le projet réussit ? Décrivez le résultat que vous voulez, pas l'activité que vous allez mener. Cela devient le sommet de votre Théorie du Changement.",
  pb_field_impact: "Énoncé d'impact",
  pb_field_impact_hint:
    "1 à 2 paragraphes. Décrivez le *changement* dans le paysage, les populations ou les systèmes à la fin du projet.",
  pb_field_impact_ph:
    "p. ex. D'ici 2030, 25 000 ha de zones ripariales dégradées du Cerrado sont en restauration active, avec un foncier sécurisé, financés par 4 véhicules de finance mixte, et gérés par des coopératives paysannes…",
  pb_field_sdgs: "ODD alignés (facultatif)",
  pb_field_sdgs_hint:
    "Sélectionnez les Objectifs de Développement Durable auxquels le projet contribue directement. Moins c'est mieux — 3 à 5 max.",
  pb_field_ndc: "Aligné avec la CDN du pays",
  pb_field_nbsap: "Aligné avec la SPANB du pays",

  pb_landscape_lede:
    "Les financeurs veulent savoir ce qu'ils financent et où. Utilisez la taxonomie des biomes WWF — elle s'aligne facilement avec les critères de la plupart des fonds multilatéraux.",
  pb_field_biome: "Biome principal",
  pb_field_biome_hint: "Choisissez le biome dominant. Si c'est mixte, prenez celui à plus grande surface.",
  pb_field_country: "Pays (ou pays)",
  pb_field_country_ph: "p. ex. Brésil, ou Brésil + Paraguay",
  pb_field_duration: "Durée",
  pb_field_duration_hint: "La plupart des projets paysagers durent 3 à 5 ans.",
  pb_field_scale: "Échelle",
  pb_field_scale_hint:
    "Site = une seule zone. Paysage = plusieurs sites sous une même stratégie. Juridiction = niveau municipal/régional. National = pays entier.",
  pb_year: "an",
  pb_years: "ans",
  pb_year_lower: "an",
  pb_years_lower: "ans",

  biome_forest: "Forêt",
  biome_savanna: "Savane",
  biome_grassland: "Prairie",
  biome_drylands: "Zones arides",
  biome_wetland: "Zone humide",
  biome_freshwater: "Eau douce",
  biome_marine: "Marin / côtier",
  biome_mountain: "Montagne",
  biome_agricultural: "Paysage agricole",
  biome_urban: "Urbain / périurbain",

  scale_site: "Site",
  scale_landscape: "Paysage",
  scale_jurisdiction: "Juridiction",
  scale_national: "National",

  pb_activities_lede:
    "Listez les activités qui produiront le changement. Chacune a besoin d'un livrable (quelque chose qu'on peut pointer du doigt) et d'une plage d'années.",
  pb_activities_empty: "Aucune activité pour le moment. Cliquez sur le bouton ci-dessous pour ajouter la première.",
  pb_activity: "Activité",
  pb_remove: "Retirer",
  pb_field_activity_name: "Activité",
  pb_field_activity_name_ph: "p. ex. Former 200 membres de coopératives à l'agroforesterie",
  pb_field_deliverable: "Livrable",
  pb_field_deliverable_ph: "p. ex. Curriculum de formation + cohorte certifiée de 200 personnes",
  pb_field_year_start: "Démarre en",
  pb_field_year_end: "Termine en",
  pb_add_activity: "Ajouter une activité",

  pb_stakeholders_lede:
    "Les financeurs lisent cette section attentivement. Si vous ne pouvez pas nommer qui bénéficie et qui décide, la proposition ne passera pas le premier filtre.",
  pb_field_beneficiaries: "Bénéficiaires principaux",
  pb_field_beneficiaries_hint:
    "Qui se porte mieux grâce à ce projet ? Soyez spécifique sur le genre, l'âge, les moyens de subsistance.",
  pb_field_beneficiaries_ph:
    "p. ex. 1 200 ménages de petits producteurs du haut bassin du Tocantins, dont 40% de coopératives dirigées par des femmes…",
  pb_field_beneficiary_count: "Bénéficiaires estimés (personnes)",
  pb_stakeholder_list: "Cartographie des parties prenantes",
  pb_stakeholder_list_hint:
    "Listez ceux qui doivent être informés, consultés, ou dont vous avez besoin de l'adhésion. Le niveau d'engagement compte pour les garanties.",
  pb_stakeholders_empty: "Aucune partie prenante cartographiée pour le moment.",
  pb_field_stakeholder_name_ph: "Nom ou groupe",
  pb_add_stakeholder: "Ajouter une partie prenante",
  shr_community: "Communauté locale",
  shr_government: "Gouvernement",
  shr_ngo: "ONG partenaire",
  shr_private: "Secteur privé",
  shr_academia: "Académie / recherche",
  shr_donor: "Bailleur / investisseur",
  eng_inform: "Informer",
  eng_consult: "Consulter",
  eng_collaborate: "Collaborer",
  eng_decide: "Décider",

  pb_budget_lede:
    "Choisissez un archétype de projet et nous préchargeons les lignes budgétaires typiques. Modifiez librement : ajoutez, retirez des lignes, remplissez les montants annuels.",
  pb_field_project_type: "Archétype du projet",
  pb_field_project_type_hint: "Détermine le gabarit budgétaire. Vous pouvez personnaliser après.",
  ptype_restoration: "Restauration d'écosystèmes",
  ptype_protected_area: "Gestion d'aires protégées",
  ptype_sustainable_ag: "Agriculture durable / agroforesterie",
  ptype_marine_coastal: "Gestion marin-côtière",
  ptype_livelihoods: "Moyens de subsistance communautaires",
  ptype_bankable_nbs: "Solution Fondée sur la Nature bancable",
  pb_budget_table: "Budget par ligne",
  pb_budget_category: "Catégorie",
  pb_budget_category_ph: "Nom de la catégorie",
  pb_budget_subtotal: "Sous-total",
  pb_budget_subtotals: "Sous-totaux par an",
  pb_add_budget_line: "Ajouter une ligne",
  pb_field_overhead: "Frais généraux (% sur coûts directs)",
  pb_budget_direct: "Coûts directs",
  pb_budget_overhead: "Frais généraux",
  pb_budget_total: "TOTAL",

  pb_risks_lede:
    "Les bailleurs attendent un regard lucide sur ce qui peut mal tourner et comment vous allez le gérer. Les garanties WWF ci-dessous sont une checklist de due diligence de base.",
  pb_risk_register: "Registre des risques",
  pb_risk_register_hint: "Top 3 à 5 risques. Soyez honnête. « Tout va bien » tue la crédibilité.",
  pb_risks_empty: "Aucun risque enregistré pour le moment.",
  pb_risk: "Risque",
  pb_field_risk_desc: "Description du risque",
  pb_field_risk_desc_ph: "p. ex. Conflit foncier retarde l'accès au site en année 2",
  pb_field_likelihood: "Probabilité",
  pb_field_impact_lvl: "Impact",
  pb_low: "Faible",
  pb_medium: "Moyen",
  pb_high: "Élevé",
  pb_field_mitigation: "Mitigation",
  pb_field_mitigation_ph: "p. ex. Pré-engagement avec le cadastre ; site alternatif identifié",
  pb_add_risk: "Ajouter un risque",
  pb_safeguards_title: "Checklist des garanties",
  pb_safeguards_hint:
    "Basées sur le Cadre des Garanties Environnementales et Sociales de WWF et les IFC Performance Standards. Cochez ce qui s'applique — et soyez prêt à le justifier.",
  sg_fpic: "Consentement Libre, Préalable et Éclairé (CLPE)",
  sg_fpic_desc:
    "Les communautés autochtones et locales ont été consultées, avec un consentement documenté avant toute intervention.",
  sg_esia: "Évaluation d'Impact Environnemental et Social",
  sg_esia_desc: "Une EIES proportionnée a été ou sera menée, avec des mesures d'atténuation identifiées.",
  sg_gender: "Approche genre",
  sg_gender_desc: "Analyse d'impact genre, participation équitable et activités menées par des femmes.",
  sg_indigenous: "Engagement des Peuples Autochtones",
  sg_indigenous_desc:
    "Si des PA sont concernés, un plan d'engagement spécifique et un accord de partage des bénéfices sont en place.",
  sg_child: "Protection de l'enfance",
  sg_child_desc: "Les activités excluent le travail des enfants et suivent les normes de protection.",
  sg_grievance: "Mécanisme de plainte",
  sg_grievance_desc: "Un mécanisme documenté et accessible permet aux parties affectées de soulever des problèmes.",
  sg_biodiversity: "Garanties biodiversité",
  sg_biodiversity_desc:
    "Zones interdites pour l'habitat critique ; mitigation au niveau des espèces ; résultat net positif sur la biodiversité.",
  sg_stakeholder: "Plan d'engagement des parties prenantes",
  sg_stakeholder_desc: "Plan écrit couvrant qui, comment, quand, et à quelle fréquence chaque partie est engagée.",

  pb_review_lede:
    "Aperçu rapide avant l'export. Tout champ marqué « — » sera vide dans le PDF aussi — utilisez le navigateur de gauche pour revenir à n'importe quelle étape.",
  pb_review_untitled: "Proposition sans titre",
  pb_review_impact: "Impact",
  pb_review_landscape: "Paysage",
  pb_review_activities: "Activités",
  pb_review_activities_count: "enregistrées",
  pb_review_stakeholders: "Parties prenantes",
  pb_review_stakeholders_count: "cartographiées",
  pb_review_budget: "Budget",
  pb_review_no_budget: "Non configuré",
  pb_review_safeguards: "Garanties",
  pb_review_export_title: "Téléchargez votre proposition",
  pb_review_export_body:
    "Génère un PDF soigné avec page de couverture, résumé, tableaux budgétaires complets, registre des risques et garanties. Tout ce que vous avez saisi reste sur cet appareil — rien n'est envoyé ailleurs.",
  pb_review_download: "Télécharger le PDF",
  pb_review_generating: "Génération…",
  pb_review_reset: "Démarrer une nouvelle proposition",
  pb_review_reset_confirm: "Cela efface la proposition actuelle. Continuer ?",
  pb_review_need_name: "Ajoutez un nom de projet à l'étape 1 avant d'exporter.",

  pb_pdf_eyebrow: "PROPOSITION DE PROJET",
  pb_pdf_generated: "Généré",
  pb_pdf_powered: "Construit avec WWF Finance Durable pour la Conservation",
  pb_pdf_section_summary: "Vue d'ensemble du projet",
  pb_pdf_section_impact: "Impact et alignement",
  pb_pdf_section_activities: "Activités et livrables",
  pb_pdf_section_stakeholders: "Bénéficiaires et parties prenantes",
  pb_pdf_section_budget: "Budget",
  pb_pdf_section_risks: "Risques et mitigation",
  pb_pdf_section_safeguards: "Engagements de garanties",
  pb_pdf_alignment: "ALIGNEMENT",
  pb_pdf_total_label: "Budget total",
  pb_pdf_years: "Années",
  pb_pdf_beneficiaries_word: "bénéficiaires estimés",
  pb_pdf_name: "Nom",
  pb_pdf_role: "Rôle",
  pb_pdf_engagement: "Engagement",

  // Constructeur — placeholder bientôt
  coming_eyebrow: "BIENTÔT",
  coming_title: "Un constructeur guidé pour propositions et financement — atterrit bientôt ici",
  coming_body:
    "Nous préparons un espace de travail guidé qui vous aide à structurer une idée de projet, construire le budget, cartographier les parties prenantes et télécharger une proposition soignée prête à présenter aux financeurs. C'est presque prêt — revenez bientôt.",
  coming_cta_toolkit: "Explorer la bibliothèque",
  coming_cta_learning: "Commencer à apprendre",
};

const dicts: Record<Locale, Dict> = { en, es, fr };

export function getDict(locale: Locale): Dict {
  return dicts[locale] ?? en;
}

export function t(locale: Locale, key: string): string {
  return dicts[locale]?.[key] ?? en[key] ?? key;
}

/**
 * Helper para localizar strings inline dentro de arrays de datos
 * (p. ej. preguntas del Navigator, items de la biblioteca). Se usa
 * con objetos literales como { en, es, fr }.
 */
export type Localized = Record<Locale, string>;

export function L(locale: Locale, val: Localized): string {
  return val[locale] ?? val.en;
}
