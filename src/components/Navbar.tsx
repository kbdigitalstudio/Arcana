"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { navItems } from "@/data/navigation";
import { whatsappLink } from "@/lib/whatsapp";
import MobileMenu from "./MobileMenu";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

function Wordmark({ descriptor }: { descriptor: string }) {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-display text-[22px] tracking-[0.32em] text-ivory">
        ARCANA
      </span>
      <span className="mt-1 hidden text-[8px] tracking-[0.28em] text-smoke uppercase sm:block">
        {descriptor}
      </span>
    </span>
  );
}

export default function Navbar({ locale, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? "border-b border-ivory/10 bg-obsidian/85 backdrop-blur-[8px]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label={locale === "es" ? "Navegación principal" : "Primary"}
          className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 sm:px-8"
        >
          <Link
            href={`/${locale}`}
            aria-label="ARCANA — inicio"
            className="shrink-0"
          >
            <Wordmark descriptor={dict.brand.descriptor} />
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => {
              const href = item.href(locale);
              const active = pathname === href;
              const label = locale === "es" ? item.labelEs : item.labelEn;
              return (
                <li key={item.key}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative text-[11px] tracking-[0.24em] uppercase transition-colors duration-300 ${
                      active ? "text-gold" : "text-ivory/75 hover:text-ivory"
                    }`}
                  >
                    {label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 border border-gold/50 px-5 py-2.5 text-[11px] tracking-[0.22em] text-ivory uppercase transition-all duration-300 hover:border-gold hover:bg-gold hover:text-obsidian sm:inline-flex"
            >
              {dict.nav.book}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? dict.nav.close : dict.nav.menu}
              className="inline-flex h-10 w-10 items-center justify-center text-ivory lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && <MobileMenu locale={locale} dict={dict} onNavigate={close} />}
      </AnimatePresence>
    </>
  );
}
