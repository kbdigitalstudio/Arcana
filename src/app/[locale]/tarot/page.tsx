import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { canonical } from "@/lib/site";
import PageHero from "@/components/PageHero";
import TarotDeck from "@/components/TarotDeck";
import EditorialSection from "@/components/EditorialSection";
import FinalCTA from "@/components/FinalCTA";
import { CardFace } from "@/components/TarotCard";
import { cards } from "@/data/cards";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "es";
  const title = locale === "es" ? "El Tarot" : "The Tarot";
  const path = locale === "es" ? "/tarot" : "/tarot";
  return {
    title,
    alternates: { canonical: canonical(locale, path) },
  };
}

export default async function TarotPage({
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
      <PageHero
        locale={locale}
        dict={dict}
        eyebrow={dict.nav.tarot}
        title={dict.pages.tarotTitle}
        intro={dict.pages.tarotIntro}
      />
      <TarotDeck locale={locale} dict={dict} />
      <EditorialSection
        eyebrow={dict.nav.tarot}
        title={
          <>
            {locale === "es" ? "Un lenguaje," : "One language,"}{" "}
            <span className="text-gold-soft italic">
              {locale === "es" ? "no una sentencia." : "not a sentence."}
            </span>
          </>
        }
        body={
          locale === "es"
            ? "Cada arcano es una imagen que piensa. En sesión, elegimos juntos las cartas y leemos lo que despiertan: emociones, decisiones, relaciones y caminos desde otra perspectiva."
            : "Each arcana is an image that thinks. In session, we choose the cards together and read what they awaken: emotions, decisions, relationships and paths from another perspective."
        }
        visual={
          <div className="mx-auto grid max-w-[420px] grid-cols-2 gap-5">
            {[cards[4], cards[3]].map((c) => (
              <div key={c.id} className="aspect-[5/8]">
                <CardFace card={c} locale={locale} />
              </div>
            ))}
          </div>
        }
      />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}
