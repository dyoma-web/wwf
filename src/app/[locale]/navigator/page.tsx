import { isLocale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { notFound } from "next/navigation";

export default async function NavigatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="wrap py-16">
      <div className="eyebrow">FINANCING NAVIGATOR</div>
      <h1 className="h-display text-[clamp(30px,4vw,50px)] mt-2">
        {t(locale, "nav_finance")}
      </h1>
      <p className="lede mt-3">
        Four questions. A clear starting point. (Próxima iteración.)
      </p>
    </div>
  );
}
