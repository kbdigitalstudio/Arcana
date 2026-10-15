import type { Locale } from "@/i18n/config";

export const SITE_URL = "https://arcana.studio";
export const SITE_NAME = "ARCANA";

const TITLES: Record<Locale, string> = {
  es: "ARCANA — Tarot, Astrología y Lecturas",
  en: "ARCANA — Tarot, Astrology & Readings",
};

const DESCRIPTIONS: Record<Locale, string> = {
  es: "Tarot, astrología y lecturas íntimas con Luna Álvarez. Misterio sin cliché: símbolos para comprender tu presente.",
  en: "Intimate tarot, astrology and readings with Luna Álvarez. Mystery without cliché: symbols to understand your present.",
};

export function siteTitle(locale: Locale): string {
  return TITLES[locale];
}

export function siteDescription(locale: Locale): string {
  return DESCRIPTIONS[locale];
}

export function canonical(locale: Locale, path = ""): string {
  return `${SITE_URL}/${locale}${path}`;
}
