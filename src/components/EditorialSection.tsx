import type { ReactNode } from "react";
import SectionReveal from "./SectionReveal";

interface Props {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  visual: ReactNode;
  flip?: boolean;
  id?: string;
}

/** Reusable asymmetric editorial split — visual + text. */
export default function EditorialSection({
  eyebrow,
  title,
  body,
  visual,
  flip = false,
  id,
}: Props) {
  return (
    <section id={id} className="relative bg-obsidian py-24 sm:py-32">
      <div
        className={`mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20`}
      >
        <SectionReveal className={flip ? "lg:order-2" : ""}>
          {visual}
        </SectionReveal>
        <div className={flip ? "lg:order-1" : ""}>
          <SectionReveal>
            <p className="mb-6 flex items-center gap-4 text-[10px] tracking-[0.32em] text-gold uppercase">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-gold/60" />
              {eyebrow}
            </p>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <h2 className="font-display text-4xl leading-[1.1] font-medium text-ivory sm:text-5xl">
              {title}
            </h2>
          </SectionReveal>
          {body && (
            <SectionReveal delay={0.16}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ivory/70">
                {body}
              </p>
            </SectionReveal>
          )}
        </div>
      </div>
    </section>
  );
}
