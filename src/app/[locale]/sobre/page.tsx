import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { canonical } from "@/lib/site";
import PageHero from "@/components/PageHero";
import LunaSection from "@/components/LunaSection";
import EditorialSection from "@/components/EditorialSection";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import SectionReveal from "@/components/SectionReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "es";
  const title = locale === "es" ? "Sobre Luna" : "About Luna";
  const path = locale === "es" ? "/sobre" : "/about";
  return {
    title,
    alternates: { canonical: canonical(locale, path) },
  };
}

const principlesEs = [
  { n: "01", t: "Escucha antes que sentencia", d: "Toda sesión empieza con tu pregunta, no con mis cartas." },
  { n: "02", t: "Símbolos, no fatalismos", d: "Nada está escrito. Todo puede leerse desde más de un lugar." },
  { n: "03", t: "Calma como método", d: "Sin prisa, sin artificios, sin promesas absolutas." },
];

const principlesEn = [
  { n: "01", t: "Listening before sentencing", d: "Every session begins with your question, not my cards." },
  { n: "02", t: "Symbols, not fatalism", d: "Nothing is written. Everything can be read from more than one place." },
  { n: "03", t: "Calm as method", d: "Unhurried, without artifice, without absolute promises." },
];

export function AboutContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const principles = locale === "es" ? principlesEs : principlesEn;
  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        eyebrow={dict.nav.about}
        title={dict.pages.aboutTitle}
        intro={dict.pages.aboutIntro}
      />
      <LunaSection locale={locale} dict={dict} />
      <EditorialSection
        eyebrow={dict.nav.about}
        title={
          <>
            {locale === "es" ? "Cómo trabajo," : "How I work,"}{" "}
            <span className="text-gold-soft italic">
              {locale === "es" ? "en tres gestos." : "in three gestures."}
            </span>
          </>
        }
        visual={
          <div className="space-y-0 border-t border-ivory/10">
            {principles.map((p, i) => (
              <SectionReveal key={p.n} delay={i * 0.08}>
                <div className="grid grid-cols-[auto_1fr] gap-6 border-b border-ivory/10 py-6">
                  <span className="font-display text-sm text-gold">{p.n}</span>
                  <div>
                    <h3 className="font-display text-2xl text-ivory">{p.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ivory/60">{p.d}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        }
      />
      <Testimonials locale={locale} dict={dict} />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}

export default async function SobrePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return <AboutContent locale={raw} />;
}
