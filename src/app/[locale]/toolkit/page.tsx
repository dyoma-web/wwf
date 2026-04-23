import { isLocale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { notFound } from "next/navigation";

export default async function ToolkitPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="wrap py-16">
      <div className="eyebrow">TOOLKIT · RESOURCES & LIBRARY</div>
      <h1 className="h-display text-[clamp(30px,4vw,50px)] mt-2">
        {t(locale, "nav_toolkit")}
      </h1>
      <p className="lede mt-3">
        Interactive map, case studies, downloadable documents. (Próxima iteración.)
      </p>
    </div>
  );
}
