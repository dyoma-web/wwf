import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Arrow } from "@/components/Icons";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function FoodAgriculturePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="page">
      <section className="wrap hero" style={{ paddingTop: 28 }}>
        <div className="hero-frame" style={{ height: 420 }}>
          <Image
            src={asset("/images/food-agriculture.jpg")}
            alt="Agricultural landscape"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 1200px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="hero-overlay-card">
            <div className="kicker">{t(locale, "fa_eyebrow")}</div>
            <h1>{t(locale, "fa_title")}</h1>
            <p>{t(locale, "fa_intro")}</p>
          </div>
        </div>
      </section>

      <section className="wrap sec-sm" style={{ paddingTop: 48, paddingBottom: 120 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div className="eyebrow">{t(locale, "coming_eyebrow")}</div>
          <h2 className="h-display h2" style={{ margin: "10px 0 16px" }}>
            {t(locale, "fa_soon_title")}
          </h2>
          <p className="lede" style={{ marginInline: "auto", marginBottom: 30 }}>
            {t(locale, "fa_soon_body")}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={`/${locale}/toolkit`} className="btn ghost">
              {t(locale, "coming_cta_toolkit")} <Arrow width={14} height={14} />
            </Link>
            <Link href={`/${locale}/navigator`} className="btn ghost">
              {t(locale, "fa_cta_navigator")} <Arrow width={14} height={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
