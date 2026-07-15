import type { MetadataRoute } from "next";
import { SITE_BASE } from "@/lib/site";
import { locales } from "@/i18n/config";

const ROUTES = ["", "learning", "navigator", "toolkit", "search", "proposal-builder", "constructor"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    ROUTES.map((route) => ({
      url: `${SITE_BASE}/${locale}/${route ? `${route}/` : ""}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
  );
}
