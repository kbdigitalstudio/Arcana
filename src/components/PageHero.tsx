import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import SectionReveal from "./SectionReveal";

interface Props {
  locale: Locale;
  dict: Dictionary;
  eyebrow: string;
  title: string;
  intro: string;
}

/** Quiet interior-page header. */
export default function PageHero({ locale, dict, eyebrow, title, intro }: Props) {
  return (
    <section className="vignette relative overflow-hidden bg-obsidian pt-40 pb-20 sm:pt-48 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(53,26,32,0.7), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8">
        <SectionReveal>
          <Link
            href={`/${locale}`}
            className="group inline-flex items-center gap-2 text-[11px] tracking-[0.24em] text-smoke uppercase transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
            {dict.pages.back}
          </Link>
          <p className="mt-10 mb-6 flex items-center gap-4 text-[10px] tracking-[0.32em] text-gold uppercase">
            <span aria-hidden="true" className="inline-block h-px w-10 bg-gold/60" />
            {eyebrow}
          </p>
          <h1 className="font-display max-w-3xl text-5xl leading-[1.05] font-medium text-ivory sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ivory/70">
            {intro}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
