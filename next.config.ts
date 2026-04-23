import type { NextConfig } from "next";

// En producción (build estático para WAMP y GitHub Pages) servimos bajo /wwf.
// En dev (npm run dev) el sitio vive en la raíz para no tener que escribir
// localhost:3000/wwf/ a mano.
const basePath =
  process.env.BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/wwf" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
