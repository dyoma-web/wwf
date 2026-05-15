import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, locales } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Arrow } from "@/components/Icons";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ConstructorComingSoonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="page">
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 120 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div className="eyebrow">{t(locale, "coming_eyebrow")}</div>
          <h1 className="h-display h1" style={{ margin: "12px 0 18px" }}>
            {t(locale, "coming_title")}
          </h1>
          <p className="lede" style={{ marginInline: "auto", marginBottom: 32 }}>
            {t(locale, "coming_body")}
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href={`/${locale}/toolkit`} className="btn ghost">
              {t(locale, "coming_cta_toolkit")} <Arrow width={14} height={14} />
            </Link>
            <Link href={`/${locale}/learning`} className="btn ghost">
              {t(locale, "coming_cta_learning")} <Arrow width={14} height={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
