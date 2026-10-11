import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { siteUrl } from "@/lib/seo";
import type { SupportedLocale } from "@/lib/i18n";

const openGraphLocales: Record<SupportedLocale, string> = {
  de: "de_DE",
  en: "en_US",
  ru: "ru_RU",
  tr: "tr_TR",
  ar: "ar_SA",
  uz: "uz_UZ",
};

export function getSiteMetadata(locale: SupportedLocale): Metadata {
  return {
    title: {
      template: `%s | ${companyInfo.name}`,
      default: `${companyInfo.name} | ${companyInfo.slogan}`,
    },
    description:
      "NabiOta® Health Group Germany GmbH – Eine zukunftsweisende Unternehmensgruppe im Gesundheitswesen. Medizinische Fachbereiche, Diagnostik, Rehabilitation, Pflege und zukunftsfähige Gesundheitsprojekte.",
    keywords: [
      "NabiOta",
      "Health Group Germany",
      "Medizinisches Versorgungszentrum",
      "MVZ",
      "Diagnostik",
      "Rehabilitation",
      "Pflege",
      "Mönchengladbach",
      "Gesundheitswesen",
    ],
    authors: [{ name: companyInfo.name }],
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: `${companyInfo.name} – ${companyInfo.slogan}`,
      description: companyInfo.mission,
      url: siteUrl,
      siteName: companyInfo.name,
      locale: openGraphLocales[locale],
      type: "website",
      images: [
        {
          url: "/images/hero/campus.webp",
          width: 1200,
          height: 630,
          alt: companyInfo.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: companyInfo.name,
      description: companyInfo.slogan,
      images: ["/images/hero/campus.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const siteMetadata = getSiteMetadata("de");
