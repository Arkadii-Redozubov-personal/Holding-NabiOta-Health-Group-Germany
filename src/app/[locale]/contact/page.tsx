import React from "react";
import { ContactPageComponent } from "@/components/pages/ContactPageComponent";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedContactProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedContactProps): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Kontakt | NabiOta® Health Group Germany",
    en: "Contact | NabiOta® Health Group Germany",
    ru: "Контакты | NabiOta® Health Group Germany",
    tr: "İletişim | NabiOta® Health Group Germany",
    ar: "اتصل بنا | مجموعة نابي أوتا الصحية بألمانيا",
  };
  const descriptions: Record<string, string> = {
    de: "Treten Sie mit der NabiOta® Health Group Germany in Kontakt. Ansprechpartner, Standorte in Mönchengladbach und Kontaktformular.",
    en: "Get in touch with NabiOta® Health Group Germany. Contact persons, Mönchengladbach location, and inquiries.",
    ru: "Свяжитесь с NabiOta® Health Group Germany. Контактные лица, офис в Мёнхенгладбахе и форма обратной связи.",
    tr: "NabiOta® Health Group Germany ile iletişime geçin. İrtibat kişileri, Mönchengladbach yerleşkesi ve iletişim formu.",
    ar: "تواصل مع مجموعة نابي أوتا الصحية بألمانيا. جهات الاتصال ومقر مونشنغلادباخ واستمارة الاستفسارات.",
  };

  return {
    title: titles[locale] || titles.de,
    description: descriptions[locale] || descriptions.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/contact`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/contact",
        en: "https://www.nabiota-health-group.de/en/contact",
        ru: "https://www.nabiota-health-group.de/ru/contact",
        tr: "https://www.nabiota-health-group.de/tr/contact",
        ar: "https://www.nabiota-health-group.de/ar/contact",
        "x-default": "https://www.nabiota-health-group.de/de/contact",
      },
    },
  };
}

export default async function LocalizedContactPage({ params }: LocalizedContactProps) {
  const { locale } = await params;
  return <ContactPageComponent locale={locale} />;
}
