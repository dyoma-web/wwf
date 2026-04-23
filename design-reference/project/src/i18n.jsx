// i18n dictionary — refreshed to match new layout
const DICT = {
  en: {
    nav_home: "Home", nav_learn: "Learning", nav_finance: "Navigator", nav_toolkit: "Toolkit",
    lang_en: "EN", lang_es: "ES", lang_fr: "FR",
    hero_eyebrow: "A single entry point to learn",
    hero_title: "explore and apply Landscape Finance",
    hero_sub: "A plain-language platform for conservation practitioners, finance teams, policy makers and researchers.",
    hero_cta1: "Start learning",
    hero_cta2: "Find my path",
    about_eyebrow: "ABOUT US",
    about_title: "By objective",
    about_body: "Whether you are working on restoration, protected areas, or regenerative food systems, this platform reorganises everything by what you are trying to achieve — not by institutional silos. Pick your objective and we show you the modules, pathways, templates and cases that map to it.",
    about_cta: "Show me",
    tile1: "Start learning",
    tile2: "Finance options",
    tile3: "Apply in your landscape",
    stats_t: "A programme in numbers",
    stats_sub: "Drawn from the 2026 Landscape Finance programme and partner landscapes.",
    people_t: "Meet the guides",
    people_s: "Every module is narrated by a specialist or a landscape-case narrator — so you hear the approach in their own voice.",
  },
  es: {
    nav_home: "Inicio", nav_learn: "Aprende", nav_finance: "Navegador", nav_toolkit: "Herramientas",
    lang_en: "EN", lang_es: "ES", lang_fr: "FR",
    hero_eyebrow: "Un solo punto de entrada para aprender",
    hero_title: "explorar y aplicar Finanzas del Paisaje",
    hero_sub: "Una plataforma en lenguaje sencillo para profesionales de la conservación, equipos financieros, tomadores de decisión e investigadores.",
    hero_cta1: "Empezar a aprender",
    hero_cta2: "Encontrar mi ruta",
    about_eyebrow: "ACERCA DE",
    about_title: "Por objetivo",
    about_body: "Ya sea que trabajes en restauración, áreas protegidas o sistemas alimentarios regenerativos, esta plataforma reorganiza todo por lo que quieres lograr — no por silos institucionales. Elige tu objetivo y te mostramos los módulos, rutas, plantillas y casos que le corresponden.",
    about_cta: "Ver más",
    tile1: "Empezar a aprender",
    tile2: "Opciones financieras",
    tile3: "Aplicar en tu paisaje",
    stats_t: "El programa en cifras",
    stats_sub: "Datos del programa de Finanzas del Paisaje 2026 y paisajes socios.",
    people_t: "Conoce a las guías",
    people_s: "Cada módulo está narrado por una especialista o narradora de un caso — así oyes el enfoque en su propia voz.",
  },
  fr: {
    nav_home: "Accueil", nav_learn: "Se former", nav_finance: "Navigateur", nav_toolkit: "Outils",
    lang_en: "EN", lang_es: "ES", lang_fr: "FR",
    hero_eyebrow: "Un point d'entrée unique pour apprendre",
    hero_title: "explorer et appliquer la Finance Paysagère",
    hero_sub: "Une plateforme en langage clair pour les professionnels de la conservation, les équipes financières, les décideurs et les chercheurs.",
    hero_cta1: "Commencer",
    hero_cta2: "Trouver ma voie",
    about_eyebrow: "À PROPOS",
    about_title: "Par objectif",
    about_body: "Que vous travailliez sur la restauration, les aires protégées ou les systèmes alimentaires régénératifs, cette plateforme réorganise tout par ce que vous cherchez à accomplir — pas par silos institutionnels.",
    about_cta: "Voir plus",
    tile1: "Se former",
    tile2: "Options financières",
    tile3: "Appliquer au paysage",
    stats_t: "Le programme en chiffres",
    stats_sub: "Données du programme Finance Paysagère 2026 et des paysages partenaires.",
    people_t: "Les guides",
    people_s: "Chaque module est narré par une spécialiste ou une narratrice de cas.",
  },
};

const I18nCtx = React.createContext({t: k => DICT.en[k] || k, lang: "en", setLang: ()=>{}});

function I18nProvider({children}) {
  const [lang, setLang] = React.useState("en");
  const t = React.useCallback(k => (DICT[lang] && DICT[lang][k]) || DICT.en[k] || k, [lang]);
  return <I18nCtx.Provider value={{t, lang, setLang}}>{children}</I18nCtx.Provider>;
}
function useI18n(){ return React.useContext(I18nCtx); }

Object.assign(window, { I18nProvider, useI18n, DICT });
