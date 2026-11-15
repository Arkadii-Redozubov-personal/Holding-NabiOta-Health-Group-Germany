import { MetadataRoute } from "next";

export const dynamic = "force-static";

import { businessAreas } from "@/data/areas";
import { companyPlaceholders } from "@/data/company-placeholders";
import { locales, defaultLocale } from "@/lib/i18n";
import { getLocaleUrl, getLocaleAlternates } from "@/lib/seo";
import { staticLocalizedRoutes } from "@/lib/routes";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function buildLocalizedEntries(
  routes: readonly string[],
  changeFrequency: ChangeFrequency,
  getPriority: (route: string) => number,
): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const languages = getLocaleAlternates(defaultLocale, route).languages as Record<string, string>;
    const priority = getPriority(route);
    for (const locale of locales) {
      entries.push({
        url: getLocaleUrl(locale, route),
        changeFrequency,
        priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedStatic = buildLocalizedEntries(
    staticLocalizedRoutes,
    "weekly",
    (route) => (route === "" ? 1.0 : 0.8),
  );
  const localizedAreas = buildLocalizedEntries(
    businessAreas.map((area) => `/areas/${area.slug}`),
    "monthly",
    () => 0.7,
  );
  const localizedCompanies = buildLocalizedEntries(
    Object.keys(companyPlaceholders).map((slug) => `/${slug}`),
    "monthly",
    () => 0.5,
  );

  return [...localizedStatic, ...localizedAreas, ...localizedCompanies];
}

