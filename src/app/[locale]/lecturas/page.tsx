import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { canonical } from "@/lib/site";
import PageHero from "@/components/PageHero";
import ReadingSelector from "@/components/ReadingSelector";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "es";
  const title = locale === "es" ? "Las Lecturas" : "The Readings";
  const path = locale === "es" ? "/lecturas" : "/readings";
  return {
    title,
    alternates: { canonical: canonical(locale, path) },
  };
}

export function ReadingsContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        eyebrow={dict.nav.readings}
        title={dict.pages.readingsTitle}
        intro={dict.pages.readingsIntro}
      />
      <ReadingSelector locale={locale} dict={dict} />
      <Testimonials locale={locale} dict={dict} />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}

export default async function LecturasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return <ReadingsContent locale={raw} />;
}
