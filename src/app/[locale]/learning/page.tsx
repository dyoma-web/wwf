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
    <div className="wrap py-16">
      <div className="eyebrow">START LEARNING</div>
      <h1 className="h-display text-[clamp(30px,4vw,50px)] mt-2">
        {t(locale, "nav_learn")}
      </h1>
      <p className="lede mt-3">
        Twelve units across three lenses. Preview here — then continue in the LMS
        for progress tracking and certificates. (Próxima iteración.)
      </p>
    </div>
  );
}
