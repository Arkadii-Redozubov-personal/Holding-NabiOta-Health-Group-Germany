import { MetadataRoute } from "next";
import { businessAreas } from "@/data/areas";
import { locales, defaultLocale } from "@/lib/i18n";
import { getLocaleUrl, getLocaleAlternates } from "@/lib/seo";
import { staticLocalizedRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedStatic: MetadataRoute.Sitemap = [];

  for (const route of staticLocalizedRoutes) {
    const languages = getLocaleAlternates(defaultLocale, route).languages as Record<string, string>;
    for (const locale of locales) {
      localizedStatic.push({
        url: getLocaleUrl(locale, route),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1.0 : 0.8,
        alternates: { languages },
      });
    }
  }

  const localizedAreas: MetadataRoute.Sitemap = [];
  for (const area of businessAreas) {
    const route = `/areas/${area.slug}`;
    const languages = getLocaleAlternates(defaultLocale, route).languages as Record<string, string>;
    for (const locale of locales) {
      localizedAreas.push({
        url: getLocaleUrl(locale, route),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return [...localizedStatic, ...localizedAreas];
}

