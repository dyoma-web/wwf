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
