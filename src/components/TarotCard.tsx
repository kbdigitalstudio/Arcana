"use client";

import { motion } from "motion/react";
import type { Locale } from "@/i18n/config";
import type { ArcanaCard } from "@/data/cards";
import ArcanaSymbol from "./ArcanaSymbol";

interface Props {
  card: ArcanaCard;
  locale: Locale;
  faceUp: boolean;
}

function Motif({ id }: { id: string }) {
  const stroke = "#B59A68";
  const common = {
    fill: "none" as const,
    stroke,
    strokeWidth: 1.1,
    strokeLinecap: "round" as const,
  };
  switch (id) {
    case "la-estrella":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
          <circle cx="60" cy="52" r="14" {...common} />
          <circle cx="60" cy="52" r="4" fill={stroke} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line
              key={a}
              x1="60"
              y1="52"
              x2={60 + 30 * Math.cos((a * Math.PI) / 180)}
              y2={52 + 30 * Math.sin((a * Math.PI) / 180)}
              {...common}
              opacity="0.7"
            />
          ))}
          <path d="M30 96 Q60 84 90 96" {...common} />
          <path d="M36 102 Q60 92 84 102" {...common} opacity="0.6" />
        </svg>
      );
    case "la-luna":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
          <path
            d="M72 24 A30 30 0 1 0 72 96 A24 24 0 1 1 72 24 Z"
            fill={stroke}
            opacity="0.9"
          />
          <path d="M34 104 H86" {...common} opacity="0.7" />
          <circle cx="46" cy="104" r="1.6" fill={stroke} />
          <circle cx="74" cy="104" r="1.6" fill={stroke} />
        </svg>
      );
    case "el-ermitano":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
          <line x1="60" y1="22" x2="60" y2="60" {...common} />
          <circle cx="60" cy="70" r="9" {...common} />
          <circle cx="60" cy="70" r="2.4" fill={stroke} />
          <path d="M40 100 Q60 90 80 100" {...common} />
        </svg>
      );
    case "la-templanza":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
          <path d="M48 26 H72 V58 H48 Z" {...common} />
          <path d="M54 58 C54 74 66 74 66 90" {...common} />
          <path d="M66 90 H54" {...common} />
          <circle cx="60" cy="102" r="2" fill={stroke} />
        </svg>
      );
    case "la-fuerza":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
          <circle cx="60" cy="58" r="22" {...common} />
          <path d="M60 36 C60 52 60 64 60 80" {...common} />
          <path d="M44 100 Q60 92 76 100" {...common} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
          <circle cx="60" cy="58" r="26" {...common} />
          <circle cx="60" cy="58" r="18" {...common} opacity="0.6" />
          <circle cx="60" cy="58" r="3" fill={stroke} />
          <path d="M40 100 Q60 90 80 100" {...common} />
        </svg>
      );
  }
}

export function CardBack({ label }: { label?: string }) {
  return (
    <div className="card-grain relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-[4px] border border-gold/40 bg-coal p-5">
      <div className="pointer-events-none absolute inset-2 rounded-[2px] border border-gold/25" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(53,26,32,0.9), transparent 70%)",
        }}
      />
      <span className="relative text-[9px] tracking-[0.35em] text-gold/70 uppercase">
        Arcana
      </span>
      <span className="relative text-gold">
        <ArcanaSymbol className="h-10 w-10" />
      </span>
      <span className="relative text-center text-[9px] tracking-[0.25em] text-smoke uppercase">
        {label ?? "Misterio sin cliché"}
      </span>
    </div>
  );
}

export function CardFace({
  card,
  locale,
}: {
  card: ArcanaCard;
  locale: Locale;
}) {
  const name = locale === "es" ? card.nameEs : card.nameEn;
  return (
    <div className="card-grain relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-[4px] border border-gold/50 bg-[#141010] p-5">
      <div className="pointer-events-none absolute inset-2 rounded-[2px] border border-gold/30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 32%, rgba(181,154,104,0.16), transparent 70%)",
        }}
      />
      <span className="font-display relative text-sm tracking-[0.3em] text-gold">
        {card.number}
      </span>
      <span className="relative h-28 w-28 sm:h-32 sm:w-32">
        <Motif id={card.id} />
      </span>
      <span className="relative text-center">
        <span className="font-display block text-lg leading-tight tracking-[0.18em] text-ivory uppercase">
          {name}
        </span>
        <span className="mt-1 block text-[8px] tracking-[0.3em] text-smoke uppercase">
          Arcana · {card.number}
        </span>
      </span>
    </div>
  );
}

/**
 * Flippable tarot card. Parent controls `faceUp`.
 */
export default function TarotCard({ card, locale, faceUp }: Props) {
  const name = locale === "es" ? card.nameEs : card.nameEn;
  return (
    <div
      role="img"
      aria-label={faceUp ? `${card.number} — ${name}` : "Carta boca abajo"}
      className="relative h-full w-full"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
        animate={{ rotateY: faceUp ? 180 : 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <CardBack />
        </div>
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <CardFace card={card} locale={locale} />
        </div>
      </motion.div>
    </div>
  );
}
