import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ExperienceDoors from "@/components/ExperienceDoors";
import TarotDeck from "@/components/TarotDeck";
import LunaSection from "@/components/LunaSection";
import ReadingSelector from "@/components/ReadingSelector";
import AstrologySection from "@/components/AstrologySection";
import OracleExperience from "@/components/OracleExperience";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Manifesto dict={dict} />
      <ExperienceDoors locale={locale} dict={dict} />
      <TarotDeck locale={locale} dict={dict} />
      <LunaSection locale={locale} dict={dict} />
      <ReadingSelector locale={locale} dict={dict} />
      <AstrologySection locale={locale} dict={dict} />
      <OracleExperience locale={locale} dict={dict} />
      <Testimonials locale={locale} dict={dict} />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}
