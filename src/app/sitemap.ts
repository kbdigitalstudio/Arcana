import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { locales, routeSlugs, type RouteKey } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const keys: RouteKey[] = ["tarot", "astrology", "readings", "oracle", "about"];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date("2026-10-08"),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          es: `${SITE_URL}/es`,
          en: `${SITE_URL}/en`,
        },
      },
    });
    for (const key of keys) {
      const slug = routeSlugs[key][locale];
      entries.push({
        url: `${SITE_URL}/${locale}/${slug}`,
        lastModified: new Date("2026-10-08"),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }
  return entries;
}
