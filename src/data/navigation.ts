import type { Locale, RouteKey } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";

export interface NavItem {
  key: RouteKey;
  labelEs: string;
  labelEn: string;
  href: (locale: Locale) => string;
}

export const navItems: NavItem[] = [
  {
    key: "tarot",
    labelEs: "Tarot",
    labelEn: "Tarot",
    href: (locale) => localizedPath(locale, "tarot"),
  },
  {
    key: "astrology",
    labelEs: "Astrología",
    labelEn: "Astrology",
    href: (locale) => localizedPath(locale, "astrology"),
  },
  {
    key: "readings",
    labelEs: "Lecturas",
    labelEn: "Readings",
    href: (locale) => localizedPath(locale, "readings"),
  },
  {
    key: "oracle",
    labelEs: "El Oráculo",
    labelEn: "The Oracle",
    href: (locale) => localizedPath(locale, "oracle"),
  },
];
