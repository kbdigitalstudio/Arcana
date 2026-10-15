import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { canonical } from "@/lib/site";
import PageHero from "@/components/PageHero";
import AstrologySection, { AstralChart } from "@/components/AstrologySection";
import EditorialSection from "@/components/EditorialSection";
import FinalCTA from "@/components/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "es";
  const title = locale === "es" ? "La Astrología" : "Astrology";
  const path = locale === "es" ? "/astrologia" : "/astrology";
  return {
    title,
    alternates: { canonical: canonical(locale, path) },
  };
}

export function AstrologyContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        eyebrow={dict.nav.astrology}
        title={dict.pages.astrologyTitle}
        intro={dict.pages.astrologyIntro}
      />
      <AstrologySection locale={locale} dict={dict} />
      <EditorialSection
        flip
        eyebrow={dict.nav.astrology}
        title={
          <>
            {locale === "es" ? "Tu cielo," : "Your sky,"}{" "}
            <span className="text-gold-soft italic">
              {locale === "es" ? "leído con calma." : "read calmly."}
            </span>
          </>
        }
        body={
          locale === "es"
            ? "Trabajamos con tu fecha, hora y lugar de nacimiento. La carta se prepara antes de la sesión y se interpreta contigo, sin jerga innecesaria y sin fatalismos."
            : "We work with your date, time and place of birth. The chart is prepared before the session and interpreted with you — no unnecessary jargon, no fatalism."
        }
        visual={
          <div className="mx-auto w-full max-w-[380px]">
            <AstralChart />
          </div>
        }
      />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}

export default async function AstrologiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return <AstrologyContent locale={raw} />;
}
