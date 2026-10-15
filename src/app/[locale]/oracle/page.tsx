import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { canonical } from "@/lib/site";
import { OracleContent } from "../oraculo/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "es";
  return {
    title: locale === "es" ? "El Oráculo" : "The Oracle",
    alternates: { canonical: canonical(locale, "/oracle") },
  };
}

/** English alias of /[locale]/oraculo */
export default async function OracleAliasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return <OracleContent locale={raw} />;
}
