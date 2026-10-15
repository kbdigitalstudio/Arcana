import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { quotes } from "@/data/quotes";
import SectionReveal from "./SectionReveal";

/** Editorial fragments — personal letters, no stars. */
export default function Testimonials({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.testimonials;
  return (
    <section aria-label={t.title} className="relative bg-coal py-32 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="mb-6 flex items-center gap-4 text-[10px] tracking-[0.32em] text-gold uppercase">
            <span aria-hidden="true" className="inline-block h-px w-10 bg-gold/60" />
            {t.eyebrow}
          </p>
          <h2 className="font-display max-w-xl text-4xl leading-tight font-medium text-ivory sm:text-5xl">
            {t.title}
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {quotes.map((q, i) => (
            <SectionReveal key={q.author} delay={i * 0.1}>
              <figure
                className={`relative border-l border-gold/40 pl-7 ${
                  i === 1 ? "md:mt-12" : i === 2 ? "md:mt-24" : ""
                }`}
              >
                <blockquote className="font-display text-xl leading-relaxed text-ivory/85 italic sm:text-[1.35rem]">
                  “{locale === "es" ? q.textEs : q.textEn}”
                </blockquote>
                <figcaption className="mt-5 text-[11px] tracking-[0.28em] text-gold uppercase">
                  — {q.author}
                </figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
