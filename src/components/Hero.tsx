"use client";

import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import { cards } from "@/data/cards";
import { CardFace } from "./TarotCard";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

/** Full-viewport asymmetric editorial hero with tilt-on-cursor card. */
export default function Hero({ locale, dict }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 50]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const featured = cards[0];

  const onCardMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-4px)`;
  };
  const onCardLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(1100px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <section
      ref={ref}
      aria-label="ARCANA — presentación"
      className="vignette relative flex min-h-svh items-center overflow-hidden bg-obsidian"
    >
      {/* Ambient shapes — restrained */}
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(53,26,32,0.85) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[480px] w-[480px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(181,154,104,0.14) 0%, transparent 65%)",
        }}
      />
      {/* Hairline grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-ivory/[0.05] lg:block"
      />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto grid w-full max-w-[1400px] gap-14 px-5 pt-32 pb-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8 lg:pt-36"
      >
        <motion.div style={{ y: textY }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-8 flex items-center gap-4 text-[10px] tracking-[0.32em] text-gold uppercase"
          >
            <span aria-hidden="true" className="inline-block h-px w-10 bg-gold/60" />
            {dict.hero.eyebrow}
          </motion.p>

          <h1 className="font-display text-[13vw] leading-[0.95] font-medium text-ivory sm:text-7xl lg:text-[6.2rem]">
            <motion.span
              className="block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                className="block"
                initial={{ y: reduce ? 0 : "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {dict.hero.line1}
              </motion.span>
            </motion.span>
            <motion.span
              className="block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                className="block text-gold-soft italic"
                initial={{ y: reduce ? 0 : "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                {dict.hero.line2}
              </motion.span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-8 max-w-md text-[15px] leading-relaxed text-ivory/70"
          >
            {dict.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-10"
          >
            <Link
              href={localizedPath(locale, "tarot")}
              className="group inline-flex items-center gap-3 text-[12px] tracking-[0.24em] text-ivory uppercase"
            >
              <span className="border-b border-gold/60 pb-1 transition-colors duration-300 group-hover:border-gold group-hover:text-gold-soft">
                {dict.hero.cta}
              </span>
              <ArrowRight
                className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Protagonist card — entrance on outer, scroll parallax on inner */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-[240px] sm:w-[300px] lg:w-[330px]"
        >
          <motion.div style={{ y: cardY }}>
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-full opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(181,154,104,0.18), transparent 70%)",
            }}
          />
          <div
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
            className="relative aspect-[5/8] transition-transform duration-300 ease-out will-change-transform"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[4px] border border-gold/20" aria-hidden="true" />
            <CardFace card={featured} locale={locale} />
          </div>
          <p className="mt-6 text-center text-[10px] tracking-[0.28em] text-smoke uppercase">
            {featured.number} —{" "}
            {locale === "es" ? featured.nameEs : featured.nameEn}
          </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#manifiesto"
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[9px] tracking-[0.34em] text-smoke uppercase transition-colors hover:text-gold sm:flex"
        aria-label={dict.hero.scroll}
      >
        {dict.hero.scroll}
        <span aria-hidden="true" className="block h-10 w-px overflow-hidden bg-ivory/15">
          <motion.span
            className="block h-1/2 w-px bg-gold"
            animate={reduce ? {} : { y: [0, 20, 20, 0], opacity: [1, 1, 0, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
