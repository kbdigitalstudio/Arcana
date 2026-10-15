"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import { navItems } from "@/data/navigation";

interface Props {
  locale: Locale;
  dict: Dictionary;
  onNavigate: () => void;
}

/** Full-curtain mobile navigation. */
export default function MobileMenu({ locale, dict, onNavigate }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-40 flex flex-col bg-obsidian/98 pt-[68px] backdrop-blur-xl lg:hidden"
    >
      <nav
        aria-label={dict.nav.menu}
        className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-8"
      >
        {navItems.map((item, i) => {
          const label = locale === "es" ? item.labelEs : item.labelEn;
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * i, duration: 0.5 }}
            >
              <Link
                href={item.href(locale)}
                onClick={onNavigate}
                className="font-display flex items-baseline gap-4 border-b border-ivory/10 py-5 text-4xl text-ivory"
              >
                <span className="text-xs tracking-widest text-gold">0{i + 1}</span>
                {label}
              </Link>
            </motion.div>
          );
        })}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="pt-8 pb-10"
        >
          <Link
            href={localizedPath(locale, "readings")}
            onClick={onNavigate}
            className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-xs tracking-[0.22em] text-obsidian uppercase"
          >
            {dict.nav.book}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <p className="font-display mt-8 text-sm tracking-[0.2em] text-smoke uppercase">
            {dict.brand.concept}
          </p>
        </motion.div>
      </nav>
    </motion.div>
  );
}
