import { isLocale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { notFound } from "next/navigation";

export default async function LearningPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="page wrap sec-sm">
      <div className="eyebrow">START LEARNING</div>
      <h1 className="h-display" style={{ fontSize: "clamp(30px,4vw,50px)", margin: "8px 0 0" }}>
        {t(locale, "nav_learn")}
      </h1>
      <p className="lede" style={{ marginTop: 10 }}>
        Twelve units across three lenses. Preview here — then continue in the LMS
        for progress tracking and certificates. (Próxima iteración.)
      </p>
    </div>
  );
}
