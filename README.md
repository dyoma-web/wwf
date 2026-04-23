# Sustainable Finance for Conservation — WWF LFA

Plataforma web de acceso abierto para el programa **Landscape Finance Approach (LFA)** de WWF. Un único punto de entrada para aprender, explorar y aplicar finanzas sostenibles para la conservación, dirigido a profesionales de conservación, equipos financieros, tomadores de decisión e investigadores.

## Stack

- **Next.js 16** (App Router, React Server Components) + TypeScript
- **Tailwind CSS v4** con design tokens en `src/app/globals.css`
- **i18n** propio con enrutado `/[locale]` para EN / ES / FR y middleware de detección por `Accept-Language`
- **Fuentes**: Noto Sans + JetBrains Mono (self-hosted vía `next/font`)

## Estructura

```
src/
  app/
    [locale]/
      layout.tsx        Header + Footer + asistente flotante
      page.tsx          Home (hero, tiles, stats, library, guides, contact)
      learning/         Módulo de aprendizaje (placeholder)
      navigator/        Navegador de financiamiento (placeholder)
      toolkit/          Toolkit con biblioteca y mapa (placeholder)
    globals.css         Design tokens + utilidades base
    layout.tsx          Root layout (fuentes, metadata)
  components/           Header, Footer, Assistant, ContactForm, Icons
  i18n/
    config.ts           Locales soportados
    dict.ts             Diccionario de traducciones
middleware.ts           Redirección de `/` → `/<locale>`
design-reference/       Insumos originales (prototipo, Word, referente gráfico)
```

## Scripts

```bash
npm run dev     # Servidor de desarrollo en http://localhost:3000
npm run build   # Build de producción
npm run start   # Servir build de producción
npm run lint    # ESLint
```

## Roadmap

- [x] Scaffolding, design tokens, i18n y Home
- [ ] Página de Learning con listado de unidades
- [ ] Financing Navigator (Q&A de 4 pasos + resultados dinámicos)
- [ ] Toolkit: biblioteca filtrable + mapa interactivo + casos
- [ ] Backend del asistente virtual con Claude API
- [ ] Integración con CMS headless
- [ ] Traducciones completas EN / ES / FR con contenido real
- [ ] Auditoría WCAG AA + optimización Lighthouse

## Referente de diseño

En [`design-reference/`](design-reference/) están los insumos originales:
- `HANDOFF-README.md` — notas del bundle de Claude Design
- `project/` — prototipo React interactivo
- `Referente/` — documento Word con arquitectura y JPG con guía gráfica
