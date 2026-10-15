import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import SectionReveal from "./SectionReveal";

export default function FinalCTA({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.finalCta;
  return (
    <section
      aria-label={`${t.titleA} ${t.titleB}`}
      className="vignette relative flex min-h-[92svh] items-center justify-center overflow-hidden bg-obsidian"
    >
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(53,26,32,0.7) 0%, transparent 65%)",
        }}
      />
      <div className="relative px-5 py-32 text-center sm:px-8">
        <SectionReveal>
          <h2 className="font-display text-[13vw] leading-[1.02] font-medium text-ivory sm:text-7xl lg:text-8xl">
            {t.titleA}
            <span className="block text-gold-soft italic">{t.titleB}</span>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.15}>
          <Link
            href={localizedPath(locale, "readings")}
            className="group mt-12 inline-flex items-center gap-3 border border-gold/60 px-10 py-4 text-[12px] tracking-[0.28em] text-ivory uppercase transition-all duration-500 hover:bg-gold hover:text-obsidian"
          >
            {t.cta}
            <ArrowRight className="h-4 w-4 text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:text-obsidian" aria-hidden="true" />
          </Link>
          <p className="mt-8 text-[11px] tracking-[0.24em] text-smoke uppercase">
            {t.note}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
