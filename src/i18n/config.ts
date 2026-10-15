export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Route slugs per locale — same order, translated segment. */
export const routeSlugs = {
  tarot: { es: "tarot", en: "tarot" },
  astrology: { es: "astrologia", en: "astrology" },
  readings: { es: "lecturas", en: "readings" },
  oracle: { es: "oraculo", en: "oracle" },
  about: { es: "sobre", en: "about" },
} as const;

export type RouteKey = keyof typeof routeSlugs;

export function localizedPath(
  locale: Locale,
  key: RouteKey | "home",
): string {
  if (key === "home") return `/${locale}`;
  return `/${locale}/${routeSlugs[key][locale]}`;
}
