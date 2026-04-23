# Sustainable Finance for Conservation — WWF LFA

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-dyoma--web.github.io%2Fwwf-f07d00?style=for-the-badge&logo=githubpages&logoColor=white)](https://dyoma-web.github.io/wwf/)
[![Deploy](https://github.com/dyoma-web/wwf/actions/workflows/deploy.yml/badge.svg)](https://github.com/dyoma-web/wwf/actions/workflows/deploy.yml)

> 🌍 **Preview en vivo → [https://dyoma-web.github.io/wwf/](https://dyoma-web.github.io/wwf/)**
> Se actualiza automáticamente en cada `git push` a `main` (≈ 2 min).

---

Plataforma web de acceso abierto para el programa **Landscape Finance Approach (LFA)** de WWF. Un único punto de entrada para aprender, explorar y aplicar finanzas sostenibles para la conservación, dirigido a profesionales de conservación, equipos financieros, tomadores de decisión e investigadores.

| Entorno | URL |
|---|---|
| 🌐 **GitHub Pages (producción)** | **https://dyoma-web.github.io/wwf/** |
| 💻 Preview local (WAMP) | http://localhost/wwf/ |
| 🛠️ Dev con hot reload | http://localhost:3000/ |

## Stack

- **Next.js 16** con App Router y TypeScript
- **Static export** (`output: "export"`) para servir desde Apache/WAMP y GitHub Pages sin backend
- **Tailwind CSS v4** con design tokens en `src/app/globals.css`
- **i18n propio** con rutas `/[locale]` para EN / ES / FR
- **Fuentes**: Noto Sans + JetBrains Mono vía `next/font`

## Workflows

### 1. Desarrollo con hot reload — `npm run dev`

```bash
npm install
npm run dev
# → http://localhost:3000/
```

En modo dev **no se usa basePath**, así que el sitio vive en la raíz. Al guardar un archivo, se recarga solo.

### 2. Preview local vía WAMP — `npm run build`

```bash
npm run build
# → genera la carpeta out/ con HTML estático
```

Abrir **`http://localhost/wwf/`**. El archivo [`.htaccess`](.htaccess) en la raíz del proyecto redirige todas las peticiones al contenido de `out/`, así que Apache las sirve sin que tengas que mover nada ni tocar `httpd.conf`.

> Requisito: WAMP con `mod_rewrite` activo y `AllowOverride All` sobre `c:\wamp_3\www\` (estado por defecto).

### 3. Deploy público — `git push`

Cada push a `main` dispara el workflow en [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) que:
1. Instala dependencias
2. Corre `npm run build` con `BASE_PATH=/wwf`
3. Publica el contenido de `out/` en GitHub Pages

**Configuración inicial única** (en `github.com/dyoma-web/wwf`):
1. Ve a **Settings → Pages**
2. En **Source**, elige **GitHub Actions**
3. Guarda y haz un `git push` cualquiera para disparar el primer deploy

La URL pública queda en `https://dyoma-web.github.io/wwf/`.

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
    page.tsx            Redirect por JS al locale preferido del navegador
  components/           Header, Footer, Assistant, ContactForm, Icons
  i18n/
    config.ts           Locales soportados
    dict.ts             Diccionario de traducciones
.github/workflows/
  deploy.yml            CI que publica a GitHub Pages
.htaccess               Rewrite para servir out/ bajo localhost/wwf/
next.config.ts          Static export + basePath /wwf en producción
design-reference/       Insumos originales (prototipo, Word, referente gráfico)
```

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload en :3000 |
| `npm run build` | Build estático → `out/` |
| `npm run start` | Servir build de producción (rara vez necesario con `output: export`) |
| `npm run lint` | ESLint |

## Limitaciones del static export

Por servir desde Apache/GitHub Pages sin Node.js detrás, estas piezas no funcionan directamente y necesitan solución alternativa cuando toque:

- ❌ Proxy/middleware de Next (redirect `/` → `/<locale>`) → reemplazado por JS en la página raíz
- ❌ API routes → el asistente virtual queda **mockeado** hasta conectar un backend externo (ej. Cloudflare Worker con Claude API)
- ❌ `next/image` con optimización on-demand → imágenes se sirven tal cual
- ❌ Server components con datos dinámicos → todo el contenido es estático al momento del build

Si más adelante se necesitan estas capacidades, el camino natural es mover el deploy a **Vercel** (mismo repo, cero cambios de código) y mantener WAMP solo para preview del build estático.

## Roadmap

- [x] Scaffolding, design tokens, i18n y Home
- [x] Static export + deploy a GitHub Pages
- [x] Preview local bajo WAMP
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
