import { MetadataRoute } from "next";
import { businessAreas } from "@/data/areas";
import { holdingServices } from "@/data/services";
import { newsArticles } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nabiota-health-group.de";

  const staticPages = [
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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const areaPages = businessAreas.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicePages = holdingServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const newsPages = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...areaPages, ...servicePages, ...newsPages];
}
