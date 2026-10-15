import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import SectionReveal from "./SectionReveal";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

/** Editorial portrait section — pure-CSS portrait placeholder, replaceable. */
export default function LunaSection({ locale, dict }: Props) {
  const t = dict.luna;
  return (
    <section
      aria-label={t.name}
      className="relative overflow-hidden bg-obsidian py-32 sm:py-44"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Portrait — elegant placeholder, easily replaceable with /images/luna.jpg */}
        <SectionReveal>
          <figure className="relative mx-auto max-w-[440px]">
            <div
              role="img"
              aria-label={t.portraitAlt}
              className="relative aspect-[4/5] overflow-hidden bg-[#141114]"
            >
              {/* Replace this block with: <Image src="/images/luna.jpg" alt={t.portraitAlt} fill ... /> */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(115deg, #050505 0%, #1c1216 45%, #3a2b22 62%, #0a0a0a 100%)",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 45% 60% at 38% 40%, rgba(232,225,214,0.28), transparent 65%)",
                }}
              />
              {/* Silhouette abstraction */}
              <svg viewBox="0 0 200 250" aria-hidden="true" className="absolute inset-0 h-full w-full">
                <ellipse cx="100" cy="105" rx="34" ry="44" fill="#0b0b0c" opacity="0.92" />
                <path d="M100 150 C70 150 52 175 48 250 L152 250 C148 175 130 150 100 150 Z" fill="#0b0b0c" opacity="0.92" />
                <path d="M78 90 Q100 70 124 92" stroke="#B59A68" strokeWidth="0.7" fill="none" opacity="0.5" />
              </svg>
              <div
                aria-hidden="true"
                className="absolute inset-3 border border-gold/25"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(9,9,9,0.75), transparent 45%)",
                }}
              />
              <figcaption className="absolute bottom-6 left-0 right-0 text-center">
                <span className="font-display text-lg tracking-[0.25em] text-ivory uppercase">
                  {t.name}
                </span>
                <span className="mt-1 block text-[9px] tracking-[0.25em] text-gold uppercase">
                  {t.role}
                </span>
              </figcaption>
            </div>
            <div aria-hidden="true" className="absolute -inset-4 -z-10 border border-ivory/10" />
          </figure>
        </SectionReveal>

        <div>
          <SectionReveal>
            <p className="mb-8 flex items-center gap-4 text-[10px] tracking-[0.32em] text-gold uppercase">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-gold/60" />
              {t.eyebrow}
            </p>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <h2 className="font-display text-4xl leading-[1.1] font-medium text-ivory sm:text-5xl lg:text-6xl">
              {t.headlineA}
              <span className="block text-gold-soft italic">{t.headlineB}</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.16}>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ivory/70">
              {t.body}
            </p>
          </SectionReveal>
          <SectionReveal delay={0.22}>
            <Link
              href={localizedPath(locale, "about")}
              className="group mt-10 inline-flex items-center gap-3 text-[12px] tracking-[0.24em] text-ivory uppercase"
            >
              <span className="border-b border-gold/60 pb-1 transition-colors duration-300 group-hover:text-gold-soft">
                {t.cta}
              </span>
              <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
