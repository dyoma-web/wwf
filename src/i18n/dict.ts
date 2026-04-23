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
};

const dicts: Record<Locale, Dict> = { en, es, fr };

export function getDict(locale: Locale): Dict {
  return dicts[locale] ?? en;
}

export function t(locale: Locale, key: string): string {
  return dicts[locale]?.[key] ?? en[key] ?? key;
}
