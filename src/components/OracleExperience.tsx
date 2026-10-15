"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, RotateCcw } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import { cards, type ArcanaCard } from "@/data/cards";
import TarotCard from "./TarotCard";
import SectionReveal from "./SectionReveal";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

/** The Oracle — immersive single-card reveal. */
export default function OracleExperience({ locale, dict }: Props) {
  const reduce = useReducedMotion();
  const [card, setCard] = useState<ArcanaCard | null>(null);
  const [revealed, setRevealed] = useState(false);
  const t = dict.oracle;

  const reveal = () => {
    setRevealed(false);
    setCard(null);
    const pick = cards[Math.floor(Math.random() * cards.length)];
    window.setTimeout(() => {
      setCard(pick);
      setRevealed(true);
    }, reduce ? 0 : 350);
  };

  const reset = () => {
    setRevealed(false);
    setCard(null);
  };

  const name = card ? (locale === "es" ? card.nameEs : card.nameEn) : "";
  const interpretation = card
    ? locale === "es"
      ? card.interpretationEs
      : card.interpretationEn
    : "";

  return (
    <section
      aria-label={t.title}
      className={`relative overflow-hidden py-32 transition-colors duration-1000 sm:py-44 ${
        revealed ? "bg-[#050505]" : "bg-obsidian"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-1000"
        style={{
          background:
            "radial-gradient(circle, rgba(53,26,32,0.55) 0%, transparent 65%)",
          opacity: revealed ? 1 : 0.5,
        }}
      />
      <div className="relative mx-auto max-w-[760px] px-5 text-center sm:px-8">
        <SectionReveal>
          <p className="mb-6 text-[10px] tracking-[0.4em] text-gold uppercase">{t.eyebrow}</p>
          <h2 className="font-display text-5xl tracking-[0.14em] text-ivory sm:text-7xl">
            {t.title}
          </h2>
          <p className="font-display mt-8 text-2xl leading-snug text-ivory/85 italic sm:text-3xl">
            {t.bodyA}
            <span className="block">{t.bodyB}</span>
          </p>
        </SectionReveal>

        <div className="mx-auto mt-14 h-[300px] w-[190px] sm:h-[340px] sm:w-[215px]" aria-live="polite">
          {card ? (
            <TarotCard card={card} locale={locale} faceUp={revealed} />
          ) : (
            <div
              role="img"
              aria-label={t.title}
              className="card-grain relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-[4px] border border-gold/40 bg-coal p-5"
            >
              <div className="pointer-events-none absolute inset-2 rounded-[2px] border border-gold/25" />
              <span className="relative text-[9px] tracking-[0.35em] text-gold/70 uppercase">Arcana</span>
              <span className="font-display relative text-5xl text-gold/80">?</span>
              <span className="relative text-[9px] tracking-[0.25em] text-smoke uppercase">{t.note}</span>
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {revealed && card && (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10"
            >
              <p className="font-display text-sm tracking-[0.4em] text-gold">{card.number}</p>
              <h3 className="font-display mt-2 text-3xl tracking-[0.14em] text-ivory uppercase sm:text-4xl">
                {name}
              </h3>
              <p className="font-display mx-auto mt-6 max-w-xl text-xl leading-relaxed text-ivory/85 italic sm:text-2xl">
                “{interpretation}”
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex flex-col items-center gap-5">
          {!revealed ? (
            <button
              type="button"
              onClick={reveal}
              className="group relative overflow-hidden border border-gold/60 px-12 py-4 text-[12px] tracking-[0.3em] text-ivory uppercase transition-all duration-500 hover:border-gold hover:bg-gold hover:text-obsidian"
            >
              {t.reveal}
            </button>
          ) : (
            <>
              <Link
                href={localizedPath(locale, "readings")}
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[12px] tracking-[0.24em] text-obsidian uppercase transition-colors duration-300 hover:bg-gold-soft"
              >
                {t.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] text-smoke uppercase transition-colors hover:text-gold"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                {t.again}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
