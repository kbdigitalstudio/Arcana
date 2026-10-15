import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import { whatsappLink } from "@/lib/whatsapp";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: Props) {
  const t = dict.footer;
  const exploreLinks = [
    { label: dict.nav.tarot, href: localizedPath(locale, "tarot") },
    { label: dict.nav.astrology, href: localizedPath(locale, "astrology") },
    { label: dict.nav.readings, href: localizedPath(locale, "readings") },
    { label: dict.nav.oracle, href: localizedPath(locale, "oracle") },
    { label: dict.nav.about, href: localizedPath(locale, "about") },
  ];
  return (
    <footer className="border-t border-ivory/10 bg-obsidian">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.3em] text-ivory">ARCANA</p>
            <p className="font-display mt-3 text-sm tracking-[0.15em] text-smoke italic">
              {t.tagline}
            </p>
          </div>
          <nav aria-label={t.explore}>
            <p className="mb-5 text-[10px] tracking-[0.3em] text-gold uppercase">{t.explore}</p>
            <ul className="space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-5 text-[10px] tracking-[0.3em] text-gold uppercase">{t.connect}</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {t.instagram}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {t.contact}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4 text-[11px] tracking-[0.2em] uppercase">
              <Link
                href="/es"
                hrefLang="es"
                className={locale === "es" ? "text-gold" : "text-smoke hover:text-ivory"}
              >
                ES
              </Link>
              <span aria-hidden="true" className="text-smoke">·</span>
              <Link
                href="/en"
                hrefLang="en"
                className={locale === "en" ? "text-gold" : "text-smoke hover:text-ivory"}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-ivory/10 pt-8 text-xs text-smoke sm:flex-row sm:items-center sm:justify-between">
          <p>{t.rights}</p>
          <p className="font-display tracking-[0.15em] italic">{t.tagline}</p>
          <p>{t.studio}</p>
        </div>
      </div>
    </footer>
  );
}
