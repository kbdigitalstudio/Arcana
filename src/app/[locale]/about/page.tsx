import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { canonical } from "@/lib/site";
import { AboutContent } from "../sobre/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "es";
  return {
    title: locale === "es" ? "Sobre Luna" : "About Luna",
    alternates: { canonical: canonical(locale, "/about") },
  };
}

/** English alias of /[locale]/sobre */
export default async function AboutAliasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return <AboutContent locale={raw} />;
}
