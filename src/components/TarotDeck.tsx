"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Shuffle } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import { cards, type ArcanaCard } from "@/data/cards";
import TarotCard, { CardBack } from "./TarotCard";
import SectionReveal from "./SectionReveal";
import Link from "next/link";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

function drawThree(excludeId?: string): ArcanaCard[] {
  const pool = [...cards].sort(() => Math.random() - 0.5);
  const picked = pool.slice(0, 3);
  if (excludeId && picked.some((c) => c.id === excludeId)) return drawThree(excludeId);
  return picked;
}

export default function TarotDeck({ locale, dict }: Props) {
  const reduce = useReducedMotion();
  const [trio, setTrio] = useState<ArcanaCard[]>(() => [cards[0], cards[1], cards[2]]);
  const [selected, setSelected] = useState<ArcanaCard | null>(null);
  const [shuffling, setShuffling] = useState(false);

  const t = dict.tarotInteractive;

  const shuffle = useCallback(() => {
    setShuffling(true);
    setSelected(null);
    window.setTimeout(() => {
      setTrio(drawThree());
      setShuffling(false);
    }, reduce ? 0 : 450);
  }, [reduce]);

  const revealedName = useMemo(
    () => (selected ? (locale === "es" ? selected.nameEs : selected.nameEn) : ""),
    [selected, locale],
  );

  return (
    <section
      aria-label={t.title}
      className="relative overflow-hidden bg-coal py-32 sm:py-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-px w-[80%] -translate-x-1/2 hairline"
      />
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <SectionReveal className="text-center">
          <p className="mb-6 text-[10px] tracking-[0.32em] text-gold uppercase">
            {t.eyebrow}
          </p>
          <h2 className="font-display mx-auto max-w-2xl text-4xl leading-tight font-medium text-ivory sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-sm tracking-wide text-smoke">{t.hint}</p>
        </SectionReveal>

        {/* Trio */}
        <div
          role="group"
          aria-label={t.title}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 sm:gap-8"
        >
          {trio.map((card, i) => {
            const isSelected = selected?.id === card.id;
            const dimmed = selected !== null && !isSelected;
            return (
              <motion.button
                key={`${card.id}-${i}`}
                type="button"
                onClick={() => setSelected(card)}
                aria-pressed={isSelected}
                aria-label={`${t.choose}: ${card.number}`}
                disabled={shuffling}
                initial={{ opacity: 0, y: reduce ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                whileHover={reduce ? {} : { y: -10, rotate: i === 1 ? 0 : i === 0 ? -1.5 : 1.5 }}
                className={`group relative aspect-[5/8] text-left transition-opacity duration-500 focus-visible:outline-gold ${
                  dimmed ? "opacity-30 saturate-50" : "opacity-100"
                } ${isSelected ? "drop-shadow-[0_0_28px_rgba(181,154,104,0.25)]" : ""}`}
              >
                <span className="block h-full w-full">
                  {isSelected ? (
                    <TarotCard card={card} locale={locale} faceUp />
                  ) : (
                    <span className="block h-full w-full transition-shadow duration-300 group-hover:drop-shadow-[0_0_20px_rgba(181,154,104,0.3)]">
                      <CardBack label={t.choose} />
                    </span>
                  )}
                </span>
                {!isSelected && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 -bottom-8 text-center text-[10px] tracking-[0.3em] text-gold uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    {t.choose}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={shuffle}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] text-smoke uppercase transition-colors hover:text-gold"
          >
            <Shuffle className="h-3.5 w-3.5" aria-hidden="true" />
            {t.shuffle}
          </button>
        </div>

        {/* Interpretation */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -12 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-12 max-w-2xl text-center"
              aria-live="polite"
            >
              <p className="font-display text-sm tracking-[0.4em] text-gold">
                {selected.number}
              </p>
              <h3 className="font-display mt-2 text-3xl tracking-[0.12em] text-ivory uppercase sm:text-4xl">
                {revealedName}
              </h3>
              <p className="font-display mx-auto mt-6 max-w-xl text-xl leading-relaxed text-ivory/85 italic sm:text-2xl">
                “{locale === "es" ? selected.interpretationEs : selected.interpretationEn}”
              </p>
              <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-smoke">
                {t.note}
              </p>
              <Link
                href={localizedPath(locale, "readings")}
                className="group mt-8 inline-flex items-center gap-3 border border-gold/50 px-7 py-3.5 text-[11px] tracking-[0.24em] text-ivory uppercase transition-all duration-300 hover:bg-gold hover:text-obsidian"
              >
                {t.continueCta}
                <ArrowRight className="h-4 w-4 text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:text-obsidian" aria-hidden="true" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
