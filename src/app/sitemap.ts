import { MetadataRoute } from "next";
import { businessAreas } from "@/data/areas";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nabiota-health-group.de";

  const staticRoutes = [
    "",
    "/about",
    "/areas",
    "/values",
    "/partners",
    "/career",
    "/contact",
    "/imprint",
    "/privacy",
  ];

  const localizedStatic: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      localizedStatic.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            de: `${baseUrl}/de${route}`,
            en: `${baseUrl}/en${route}`,
            ru: `${baseUrl}/ru${route}`,
            tr: `${baseUrl}/tr${route}`,
            ar: `${baseUrl}/ar${route}`,
            "x-default": `${baseUrl}/de${route}`,
          },
        },
      });
    }
  }

  const localizedAreas: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const area of businessAreas) {
      localizedAreas.push({
        url: `${baseUrl}/${locale}/areas/${area.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            de: `${baseUrl}/de/areas/${area.slug}`,
            en: `${baseUrl}/en/areas/${area.slug}`,
            ru: `${baseUrl}/ru/areas/${area.slug}`,
            tr: `${baseUrl}/tr/areas/${area.slug}`,
            ar: `${baseUrl}/ar/areas/${area.slug}`,
            "x-default": `${baseUrl}/de/areas/${area.slug}`,
          },
        },
      });
    }
  }

  return [...localizedStatic, ...localizedAreas];
}

