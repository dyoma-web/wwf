/**
 * Prefija el basePath a rutas de assets en la carpeta `public/`.
 *
 * Necesario porque Next.js no aplica automáticamente el `basePath` al `src`
 * de `<Image>` ni al `href`/`src` de elementos HTML nativos
 * (ver docs: app/api-reference/config/next-config-js/basePath — sección Images).
 *
 * En dev devuelve el path tal cual; en producción devuelve `/wwf/...`.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
