import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { canonical } from "@/lib/site";
import { AstrologyContent } from "../astrologia/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "es";
  return {
    title: locale === "es" ? "La Astrología" : "Astrology",
    alternates: { canonical: canonical(locale, "/astrology") },
  };
}

/** English alias of /[locale]/astrologia */
export default async function AstrologyAliasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return <AstrologyContent locale={raw} />;
}
