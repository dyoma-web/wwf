/**
 * URL canónica del sitio para metadatos, sitemap y robots.
 *
 * - Producción (Cloudflare Pages): https://landscapefinancehub.org (default).
 * - Staging (GitHub Pages): el workflow define SITE_URL=https://dyoma-web.github.io
 *   y BASE_PATH=/wwf, de modo que las URLs absolutas queden coherentes.
 *
 * NEXT_PUBLIC_BASE_PATH la expone next.config.ts en todos los builds.
 */
export const SITE_URL = process.env.SITE_URL ?? "https://landscapefinancehub.org";

export const SITE_BASE = `${SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}`;
