"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { readings } from "@/data/readings";
import ReadingCard from "./ReadingCard";
import SectionReveal from "./SectionReveal";

interface Props {
  locale: Locale;
  dict: Dictionary;
  compact?: boolean;
}

/** Expandable reading selector — one open at a time. */
export default function ReadingSelector({ locale, dict, compact = false }: Props) {
  const [active, setActive] = useState<string | null>(readings[3].id);
  const t = dict.readings;

  return (
    <section aria-label={t.title} className="relative bg-obsidian py-32 sm:py-40">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <SectionReveal className="text-center">
          <p className="mb-6 text-[10px] tracking-[0.32em] text-gold uppercase">{t.eyebrow}</p>
          <h2 className="font-display text-4xl font-medium text-ivory sm:text-6xl">{t.title}</h2>
          {!compact && (
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ivory/65">
              {t.subtitle}
            </p>
          )}
        </SectionReveal>

        <div className="mt-16 border-t border-ivory/10" role="list">
          {readings.map((r, i) => (
            <ReadingCard
              key={r.id}
              reading={r}
              index={i}
              locale={locale}
              dict={dict}
              open={active === r.id}
              onToggle={() => setActive(active === r.id ? null : r.id)}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-smoke">{t.note}</p>
      </div>
    </section>
  );
}
