import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { SearchClient } from "@/components/SearchClient";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function SearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <Suspense fallback={null}>
      <SearchClient locale={locale} />
    </Suspense>
  );
}
