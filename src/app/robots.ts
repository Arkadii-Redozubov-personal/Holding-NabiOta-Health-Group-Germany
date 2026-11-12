import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/admin"],
    },
    sitemap: "https://www.nabiota-health-group-germany.de/sitemap.xml",
  };
}
