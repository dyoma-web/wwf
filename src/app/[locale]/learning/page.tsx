import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { LearningClient } from "@/components/LearningClient";

export default async function LearningPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LearningClient locale={locale} />;
}
