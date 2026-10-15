import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import SectionReveal from "./SectionReveal";

/** Elegant symbolic natal-chart figure (decorative, not a real tool). */
export function AstralChart() {
  const signs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="Representación simbólica de una carta natal"
      className="h-auto w-full"
    >
      <circle cx="160" cy="160" r="148" fill="none" stroke="#B59A68" strokeWidth="1" opacity="0.7" />
      <circle cx="160" cy="160" r="112" fill="none" stroke="#B59A68" strokeWidth="0.7" opacity="0.45" />
      <circle cx="160" cy="160" r="62" fill="none" stroke="#B59A68" strokeWidth="0.7" opacity="0.35" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180 - Math.PI / 2;
        const x1 = 160 + 112 * Math.cos(a);
        const y1 = 160 + 112 * Math.sin(a);
        const x2 = 160 + 148 * Math.cos(a);
        const y2 = 160 + 148 * Math.sin(a);
        const lx = 160 + 130 * Math.cos(a);
        const ly = 160 + 130 * Math.sin(a);
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#B59A68" strokeWidth="0.7" opacity="0.6" />
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#77716B">
              {signs[i]}
            </text>
          </g>
        );
      })}
      {/* Houses */}
      {[
        [160, 48, 96, 200],
        [48, 160, 250, 130],
        [110, 250, 200, 70],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E8E1D6" strokeWidth="0.5" opacity="0.3" />
      ))}
      {/* Planets */}
      {[
        [208, 128, 3.4, "#E8E1D6"],
        [128, 190, 2.6, "#B59A68"],
        [180, 210, 2.2, "#E8E1D6"],
        [120, 120, 2, "#B59A68"],
      ].map(([cx, cy, r, fill], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={fill as string} opacity="0.9" />
      ))}
      <circle cx="160" cy="160" r="3" fill="#B59A68" />
    </svg>
  );
}

interface Props {
  locale: Locale;
  dict: Dictionary;
}

/** Visually distinct astrology band — deep burgundy. */
export default function AstrologySection({ locale, dict }: Props) {
  const t = dict.astrology;
  return (
    <section
      aria-label={t.title}
      className="relative overflow-hidden py-32 sm:py-44"
      style={{ background: "linear-gradient(180deg, #0b0b0c 0%, #1d0f13 50%, #0b0b0c 100%)" }}
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionReveal>
            <p className="mb-8 flex items-center gap-4 text-[10px] tracking-[0.32em] text-gold uppercase">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-gold/60" />
              {t.eyebrow}
            </p>
            <h2 className="font-display text-4xl leading-tight font-medium text-ivory sm:text-6xl">
              {t.title}
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/70">
              {t.body}
            </p>
          </SectionReveal>

          <div className="mt-12 space-y-0 border-t border-ivory/10">
            {t.options.map((opt, i) => (
              <SectionReveal key={opt.title} delay={i * 0.08}>
                <div className="grid grid-cols-[auto_1fr] gap-6 border-b border-ivory/10 py-6">
                  <span className="font-display text-sm text-gold">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl text-ivory">{opt.title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-ivory/60">{opt.text}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.2}>
            <Link
              href={localizedPath(locale, "astrology")}
              className="group mt-10 inline-flex items-center gap-3 text-[12px] tracking-[0.24em] text-ivory uppercase"
            >
              <span className="border-b border-gold/60 pb-1 transition-colors duration-300 group-hover:text-gold-soft">
                {t.cta}
              </span>
              <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.1} className="mx-auto w-full max-w-[440px]">
          <figure>
            <AstralChart />
            <figcaption className="mt-6 text-center text-[11px] tracking-[0.2em] text-smoke uppercase">
              {t.chartNote}
            </figcaption>
          </figure>
        </SectionReveal>
      </div>
    </section>
  );
}
