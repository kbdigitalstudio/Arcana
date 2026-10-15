import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { canonical } from "@/lib/site";
import { ReadingsContent } from "../lecturas/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "es";
  return {
    title: locale === "es" ? "Las Lecturas" : "The Readings",
    alternates: { canonical: canonical(locale, "/readings") },
  };
}

/** English alias of /[locale]/lecturas */
export default async function ReadingsAliasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return <ReadingsContent locale={raw} />;
}
