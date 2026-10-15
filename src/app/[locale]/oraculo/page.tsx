import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { canonical } from "@/lib/site";
import PageHero from "@/components/PageHero";
import OracleExperience from "@/components/OracleExperience";
import FinalCTA from "@/components/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "es";
  const title = locale === "es" ? "El Oráculo" : "The Oracle";
  const path = locale === "es" ? "/oraculo" : "/oracle";
  return {
    title,
    alternates: { canonical: canonical(locale, path) },
  };
}

export function OracleContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        eyebrow={dict.nav.oracle}
        title={dict.pages.oracleTitle}
        intro={dict.pages.oracleIntro}
      />
      <OracleExperience locale={locale} dict={dict} />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}

export default async function OraculoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return <OracleContent locale={raw} />;
}
