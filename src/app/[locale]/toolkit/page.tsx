import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { ToolkitClient } from "@/components/ToolkitClient";

export default async function ToolkitPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ToolkitClient locale={locale} />;
}
