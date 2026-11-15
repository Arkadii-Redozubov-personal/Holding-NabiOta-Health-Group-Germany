import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { siteUrl, getLocaleUrl } from "@/lib/seo";
import { getBaseDictionary, type SupportedLocale } from "@/lib/i18n";

const openGraphLocales: Record<SupportedLocale, string> = {
  de: "de_DE",
  en: "en_US",
  ru: "ru_RU",
  tr: "tr_TR",
  ar: "ar_SA",
  uz: "uz_UZ",
};

export function getSiteMetadata(locale: SupportedLocale): Metadata {
  const dict = getBaseDictionary(locale);
  const localizedTitle = dict.meta?.title || `${companyInfo.name} | ${companyInfo.slogan}`;
  const localizedDescription = dict.meta?.description || companyInfo.mission;
  const localizedUrl = getLocaleUrl(locale, "", true);

  return {
    title: {
      template: `%s | ${companyInfo.name}`,
      default: localizedTitle,
    },
    description: localizedDescription,
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
      title: localizedTitle,
      description: localizedDescription,
      url: localizedUrl,
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
      title: localizedTitle,
      description: localizedDescription,
      images: ["/images/hero/campus.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const siteMetadata = getSiteMetadata("de");
