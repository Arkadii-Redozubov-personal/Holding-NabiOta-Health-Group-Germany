import { MetadataRoute } from "next";
import { businessAreas } from "@/data/areas";
import { holdingServices } from "@/data/services";
import { newsArticles } from "@/data/news";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nabiota-health-group.de";

  const staticRoutes = [
    "",
    "/about",
    "/areas",
    "/services",
    "/values",
    "/partners",
    "/career",
    "/news",
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
            "x-default": `${baseUrl}/de/areas/${area.slug}`,
          },
        },
      });
    }
  }

  const localizedServices: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const service of holdingServices) {
      localizedServices.push({
        url: `${baseUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            de: `${baseUrl}/de/services/${service.slug}`,
            en: `${baseUrl}/en/services/${service.slug}`,
            ru: `${baseUrl}/ru/services/${service.slug}`,
            "x-default": `${baseUrl}/de/services/${service.slug}`,
          },
        },
      });
    }
  }

  const localizedNews: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const article of newsArticles) {
      localizedNews.push({
        url: `${baseUrl}/${locale}/news/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: {
          languages: {
            de: `${baseUrl}/de/news/${article.slug}`,
            en: `${baseUrl}/en/news/${article.slug}`,
            ru: `${baseUrl}/ru/news/${article.slug}`,
            "x-default": `${baseUrl}/de/news/${article.slug}`,
          },
        },
      });
    }
  }

  return [...localizedStatic, ...localizedAreas, ...localizedServices, ...localizedNews];
}
