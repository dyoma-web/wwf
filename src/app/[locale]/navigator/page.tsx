import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { NavigatorClient } from "@/components/NavigatorClient";

export default async function NavigatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <NavigatorClient locale={locale} />;
}
