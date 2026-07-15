import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Assistant } from "@/components/Assistant";
import { isLocale, locales } from "@/i18n/config";
import { t } from "@/i18n/dict";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const OG_LOCALES: Record<string, string> = { en: "en_US", es: "es_CO", fr: "fr_FR" };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const title = `${t(locale, "brand_name")} — ${t(locale, "brand_sub")}`;
  const description = t(locale, "hero_sub");
  return {
    title: { default: title, template: `%s · ${t(locale, "brand_name")}` },
    description,
    alternates: {
      languages: {
        en: "/en/",
        es: "/es/",
        fr: "/fr/",
        "x-default": "/en/",
      },
    },
    openGraph: {
      title,
      description,
      locale: OG_LOCALES[locale],
      type: "website",
      siteName: t(locale, "brand_name"),
      // Redeclarado aquí porque el openGraph del segmento reemplaza por
      // completo al del layout raíz (merge superficial de Next).
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      <Assistant />
    </>
  );
}
