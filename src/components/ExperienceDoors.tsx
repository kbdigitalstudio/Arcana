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

function DoorVisual({ variant }: { variant: "tarot" | "astro" | "reading" }) {
  if (variant === "tarot") {
    return (
      <div
        aria-hidden="true"
        className="card-grain relative aspect-[4/5] overflow-hidden bg-[#151012]"
      >
        <div className="absolute inset-4 border border-gold/30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 50% 38%, rgba(181,154,104,0.22), transparent 70%)",
          }}
        />
        <div className="absolute top-[16%] right-0 left-0 text-center">
          <span className="font-display text-sm tracking-[0.4em] text-gold">XVII</span>
        </div>
        <svg viewBox="0 0 100 100" className="absolute inset-0 m-auto h-1/2 w-1/2" aria-hidden="true">
          <circle cx="50" cy="42" r="10" fill="none" stroke="#B59A68" strokeWidth="1" />
          <circle cx="50" cy="42" r="3" fill="#B59A68" />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <line
              key={a}
              x1="50" y1="42"
              x2={50 + 22 * Math.cos((a * Math.PI) / 180)}
              y2={42 + 22 * Math.sin((a * Math.PI) / 180)}
              stroke="#B59A68" strokeWidth="0.8" opacity="0.7"
            />
          ))}
          <path d="M28 78 Q50 70 72 78" fill="none" stroke="#B59A68" strokeWidth="0.8" />
        </svg>
        <div className="absolute bottom-[12%] right-0 left-0 text-center">
          <span className="text-[9px] tracking-[0.3em] text-ivory/60 uppercase">La Estrella</span>
        </div>
      </div>
    );
  }
  if (variant === "astro") {
    return (
      <div aria-hidden="true" className="relative aspect-[4/5] overflow-hidden bg-[#0e0e10]">
        <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <circle cx="100" cy="115" r="78" fill="none" stroke="#B59A68" strokeWidth="0.8" opacity="0.8" />
          <circle cx="100" cy="115" r="58" fill="none" stroke="#B59A68" strokeWidth="0.6" opacity="0.5" />
          <circle cx="100" cy="115" r="30" fill="none" stroke="#B59A68" strokeWidth="0.6" opacity="0.4" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={100 + 58 * Math.cos(a)} y1={115 + 58 * Math.sin(a)}
                x2={100 + 78 * Math.cos(a)} y2={115 + 78 * Math.sin(a)}
                stroke="#B59A68" strokeWidth="0.6" opacity="0.6"
              />
            );
          })}
          <circle cx={100 + 58 * Math.cos(0.5)} cy={115 + 58 * Math.sin(0.5)} r="2.4" fill="#E8E1D6" />
          <circle cx={100 + 58 * Math.cos(2.4)} cy={115 + 58 * Math.sin(2.4)} r="1.8" fill="#B59A68" />
          <circle cx={100 + 58 * Math.cos(4.4)} cy={115 + 58 * Math.sin(4.4)} r="2" fill="#E8E1D6" opacity="0.8" />
        </svg>
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="relative aspect-[4/5] overflow-hidden bg-[#121010]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(53,26,32,0.9) 0%, rgba(9,9,9,0.4) 55%, rgba(9,9,9,0.9) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 55% 35% at 50% 60%, rgba(232,225,214,0.14), transparent 70%)",
        }}
      />
      {/* Candle abstraction */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2">
        <div className="mx-auto h-1.5 w-1.5 rounded-full bg-gold-soft blur-[1px]" />
        <div className="mx-auto mt-1 h-16 w-px bg-ivory/40" />
        <div className="mx-auto mt-0 h-6 w-8 rounded-b-sm bg-ivory/15 blur-[0.5px]" />
      </div>
      <div className="absolute inset-x-8 bottom-8 h-px bg-gold/30" />
    </div>
  );
}

/** Three asymmetric editorial doors — not a card grid. */
export default function ExperienceDoors({ locale, dict }: Props) {
  return (
    <section aria-label={dict.doors.eyebrow} className="relative bg-obsidian pb-32 sm:pb-44">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="mb-6 flex items-center gap-4 text-[10px] tracking-[0.32em] text-gold uppercase">
            <span aria-hidden="true" className="inline-block h-px w-10 bg-gold/60" />
            {dict.doors.eyebrow}
          </p>
          <h2 className="font-display max-w-2xl text-4xl leading-tight font-medium text-ivory sm:text-6xl">
            {dict.doors.title}
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Tarot — tall, offset top */}
          <SectionReveal className="lg:col-span-4">
            <Link
              href={localizedPath(locale, "tarot")}
              className="group block"
              aria-label={dict.doors.tarotCta}
            >
              <div className="overflow-hidden">
                <div className="transition-transform duration-700 ease-out group-hover:scale-[1.025]">
                  <DoorVisual variant="tarot" />
                </div>
              </div>
              <p className="mt-6 text-[10px] tracking-[0.3em] text-gold uppercase">01 — {dict.doors.tarotTitle}</p>
              <p className="font-display mt-2 text-2xl text-ivory">{dict.doors.tarotText}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-ivory/70 uppercase transition-colors group-hover:text-gold">
                {dict.doors.tarotCta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </SectionReveal>

          {/* Astrology — pushed down */}
          <SectionReveal delay={0.12} className="lg:col-span-4 lg:mt-24">
            <Link
              href={localizedPath(locale, "astrology")}
              className="group block"
              aria-label={dict.doors.astrologyCta}
            >
              <div className="overflow-hidden">
                <div className="transition-transform duration-700 ease-out group-hover:scale-[1.025]">
                  <DoorVisual variant="astro" />
                </div>
              </div>
              <p className="mt-6 text-[10px] tracking-[0.3em] text-gold uppercase">02 — {dict.doors.astrologyTitle}</p>
              <p className="font-display mt-2 text-2xl text-ivory">{dict.doors.astrologyText}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-ivory/70 uppercase transition-colors group-hover:text-gold">
                {dict.doors.astrologyCta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </SectionReveal>

          {/* Readings — tall again, more offset */}
          <SectionReveal delay={0.2} className="lg:col-span-4 lg:mt-48">
            <Link
              href={localizedPath(locale, "readings")}
              className="group block"
              aria-label={dict.doors.readingsCta}
            >
              <div className="overflow-hidden">
                <div className="transition-transform duration-700 ease-out group-hover:scale-[1.025]">
                  <DoorVisual variant="reading" />
                </div>
              </div>
              <p className="mt-6 text-[10px] tracking-[0.3em] text-gold uppercase">03 — {dict.doors.readingsTitle}</p>
              <p className="font-display mt-2 text-2xl text-ivory">{dict.doors.readingsText}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-ivory/70 uppercase transition-colors group-hover:text-gold">
                {dict.doors.readingsCta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
