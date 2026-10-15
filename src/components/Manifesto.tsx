import type { Dictionary } from "@/i18n/dictionaries";
import SectionReveal from "./SectionReveal";

export default function Manifesto({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="manifiesto"
      aria-label={dict.manifesto.eyebrow}
      className="relative bg-obsidian py-32 sm:py-44 lg:py-56"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <SectionReveal>
          <p className="mb-10 flex items-center gap-4 text-[10px] tracking-[0.32em] text-gold uppercase">
            <span aria-hidden="true" className="inline-block h-px w-10 bg-gold/60" />
            {dict.manifesto.eyebrow}
          </p>
        </SectionReveal>
        <h2 className="font-display text-4xl leading-[1.12] font-medium text-ivory sm:text-6xl lg:text-7xl">
          <SectionReveal delay={0.05}>
            <span className="block">{dict.manifesto.titleA}</span>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <span className="block text-gold-soft italic">
              {dict.manifesto.titleB}
            </span>
          </SectionReveal>
        </h2>
        <SectionReveal delay={0.25}>
          <p className="mt-12 max-w-xl text-[15px] leading-relaxed text-ivory/65">
            {dict.manifesto.body}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
