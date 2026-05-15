import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { ProposalBuilderClient } from "@/components/ProposalBuilder/ProposalBuilderClient";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ProposalBuilderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="page">
      <section className="wrap">
        <div style={{ paddingTop: 32, paddingBottom: 8 }}>
          <div className="eyebrow">{t(locale, "pb_page_eyebrow")}</div>
          <h1 className="h-display h1" style={{ margin: "8px 0 14px" }}>
            {t(locale, "pb_page_title")}
          </h1>
          <p className="lede" style={{ maxWidth: 720 }}>
            {t(locale, "pb_page_subtitle")}
          </p>
        </div>
      </section>
      <section className="wrap">
        <ProposalBuilderClient locale={locale} />
      </section>
    </div>
  );
}
