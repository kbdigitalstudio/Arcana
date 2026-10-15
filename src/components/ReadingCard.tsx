"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Reading } from "@/data/readings";
import { whatsappLink } from "@/lib/whatsapp";

interface Props {
  reading: Reading;
  index: number;
  open: boolean;
  onToggle: () => void;
  locale: Locale;
  dict: Dictionary;
}

/** One expandable reading row. */
export default function ReadingCard({
  reading: r,
  index,
  open,
  onToggle,
  locale,
  dict,
}: Props) {
  const reduce = useReducedMotion();
  const t = dict.readings;
  const numerals = ["I", "II", "III", "IV"];
  const name = locale === "es" ? r.nameEs : r.nameEn;
  const desc = locale === "es" ? r.descriptionEs : r.descriptionEn;
  const format = locale === "es" ? r.formatEs : r.formatEn;
  const lines = locale === "es" ? r.linesEs : r.linesEn;

  return (
    <div role="listitem" className="border-b border-ivory/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`reading-panel-${r.id}`}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 py-7 text-left sm:gap-10 sm:py-8"
      >
        <span className={`font-display text-sm tracking-widest transition-colors ${open ? "text-gold" : "text-smoke group-hover:text-gold"}`}>
          {numerals[index]}
        </span>
        <span>
          <span className="font-display block text-3xl transition-colors duration-300 group-hover:text-ivory sm:text-5xl text-ivory/85">
            {name}
          </span>
          <span className="mt-1 block text-[11px] tracking-[0.2em] text-smoke uppercase">
            {lines.join(" · ")}
          </span>
        </span>
        <span
          aria-hidden="true"
          className={`flex h-11 w-11 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
            open
              ? "rotate-45 border-gold bg-gold text-obsidian"
              : "border-ivory/25 text-ivory/70 group-hover:border-gold group-hover:text-gold"
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`reading-panel-${r.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-10 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="max-w-xl">
                <p className="text-[15px] leading-relaxed text-ivory/75">{desc}</p>
                <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-[13px]">
                  <div className="flex items-center gap-2 text-ivory/70">
                    <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    <dt className="sr-only">{t.duration}</dt>
                    <dd>{r.duration}</dd>
                  </div>
                  <div className="flex items-center gap-2 text-ivory/70">
                    <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    <dt className="sr-only">{t.format}</dt>
                    <dd>{format}</dd>
                  </div>
                  <div className="text-gold-soft">
                    <dt className="sr-only">{t.price}</dt>
                    <dd>{r.price}</dd>
                  </div>
                </dl>
              </div>
              <a
                href={whatsappLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 bg-gold px-6 py-3.5 text-[11px] tracking-[0.22em] text-obsidian uppercase transition-colors duration-300 hover:bg-gold-soft"
              >
                {t.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
