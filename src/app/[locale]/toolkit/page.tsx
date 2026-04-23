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
    <div className="page wrap sec-sm">
      <div className="eyebrow">TOOLKIT · RESOURCES & LIBRARY</div>
      <h1 className="h-display" style={{ fontSize: "clamp(30px,4vw,50px)", margin: "8px 0 0" }}>
        {t(locale, "nav_toolkit")}
      </h1>
      <p className="lede" style={{ marginTop: 10 }}>
        Interactive map, case studies, downloadable documents. (Próxima iteración.)
      </p>
    </div>
  );
}
