import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Scale, Building2, FileCheck } from "lucide-react";
import { companyInfo } from "@/data/company";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedImprintProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedImprintProps): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    de: "Impressum | Rechtliche Angaben nach § 5 TMG",
    en: "Imprint | Legal Notice according to § 5 TMG",
    ru: "Выходные данные (Impressum) | Юридическая информация",
  };
  return {
    title: titles[locale] || titles.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/imprint`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/imprint",
        en: "https://www.nabiota-health-group.de/en/imprint",
        ru: "https://www.nabiota-health-group.de/ru/imprint",
        "x-default": "https://www.nabiota-health-group.de/de/imprint",
      },
    },
  };
}

export default async function LocalizedImprintPage({ params }: LocalizedImprintProps) {
  const { locale } = await params;

  const imprintBadges = [
    {
      icon: <Scale className="w-5 h-5 text-[#ECCF96]" />,
      title: locale === "ru" ? "Правовые" : locale === "en" ? "Legal" : "Rechtssicherheit",
      sub: locale === "ru" ? "Нормы (§5 TMG)" : locale === "en" ? "Compliance" : "nach § 5 TMG",
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#ECCF96]" />,
      title: locale === "ru" ? "Структура" : locale === "en" ? "Corporate" : "NabiOta GmbH",
      sub: locale === "ru" ? "Холдинга" : locale === "en" ? "Structure" : "Holding",
    },
    {
      icon: <FileCheck className="w-5 h-5 text-[#ECCF96]" />,
      title: locale === "ru" ? "Прозрачность" : locale === "en" ? "Registry" : "Transparenz",
      sub: locale === "ru" ? "И Реестр" : locale === "en" ? "Transparency" : "& Register",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pb-20">
        <PageHero
          eyebrow={
            locale === "ru"
              ? "ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ"
              : locale === "en"
              ? "LEGAL NOTICE"
              : "RECHTLICHE PFLICHTANGABEN"
          }
          title={
            locale === "ru"
              ? "Выходные данные (Impressum)"
              : locale === "en"
              ? "Imprint & Legal Notice"
              : "Impressum"
          }
          description={
            locale === "ru"
              ? "Сведения в соответствии с § 5 Закона о средствах телекоммуникации Германии (TMG) и § 18 разд. 2 MStV."
              : locale === "en"
              ? "Information pursuant to § 5 Telemedia Act (TMG) and § 18 para. 2 Interstate Media Treaty (MStV)."
              : "Angaben gemäß § 5 Telemediengesetz (TMG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)."
          }
          imageSrc="/images/heroes/hero-campus.webp"
          imageAlt="NabiOta Health Group Germany Impressum"
          badges={imprintBadges}
        />

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="narrow" className="max-w-[800px]">
            <div className="bg-white p-8 sm:p-12 rounded-2xl border border-forest-900/10 shadow-sm space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              <div>
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "Поставщик услуг" : locale === "en" ? "Service Provider" : "Diensteanbieter"}
                </h2>
                <p className="font-semibold text-forest-950">{companyInfo.legalName}</p>
                <p>{companyInfo.street}</p>
                <p>{companyInfo.postalCode} {companyInfo.city}</p>
                <p>{companyInfo.country}</p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "Уполномоченные представители" : locale === "en" ? "Authorized Representatives" : "Vertretungsberechtigte"}
                </h2>
                <p>
                  <strong className="text-forest-950 font-medium">
                    {locale === "ru" ? "В лице руководства:" : locale === "en" ? "Represented by the Management Board:" : "Vertreten durch die Geschäftsführung:"}
                  </strong>
                  <br />
                  {companyInfo.managingDirector}
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "Контакты" : locale === "en" ? "Contact" : "Kontakt"}
                </h2>
                <p>
                  Telefon (Sekretariat): {companyInfo.phones.sekretariat}
                  <br />
                  Telefon (Aufnahme): {companyInfo.phones.aufnahme}
                  <br />
                  Telefon (Geschäftsführung): {companyInfo.phones.geschaeftsfuehrung}
                  <br />
                  Telefax: {companyInfo.phones.fax}
                </p>
                <p className="mt-2">
                  E-Mail:{" "}
                  <a href={`mailto:${companyInfo.email}`} className="text-gold-700 underline">
                    {companyInfo.email}
                  </a>
                  <br />
                  Internet:{" "}
                  <a href={`https://${companyInfo.website}`} className="text-gold-700 underline">
                    {companyInfo.website}
                  </a>
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "Реестровая запись" : locale === "en" ? "Register Entry" : "Registereintrag"}
                </h2>
                <p>
                  Eintragung im Handelsregister.
                  <br />
                  Registergericht: {companyInfo.commercialRegister.court}
                  <br />
                  Handelsregisternummer: {companyInfo.commercialRegister.number}
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "Идентификационный номер налогоплательщика" : locale === "en" ? "VAT Identification Number" : "Umsatzsteuer-Identifikationsnummer"}
                </h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                  <br />
                  <strong className="text-forest-950 font-semibold">
                    {companyInfo.commercialRegister.vatId}
                  </strong>
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "Ответственный за содержание" : locale === "en" ? "Responsible for Editorial Content" : "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV"}
                </h2>
                <p>
                  {companyInfo.commercialRegister.responsiblePerson}
                  <br />
                  {companyInfo.street}, {companyInfo.postalCode} {companyInfo.city}
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "Защита товарного знака и авторское право" : locale === "en" ? "Trademark & Copyright Protection" : "Markenschutz"}
                </h2>
                <p>
                  NabiOta® ist eine eingetragene und geschützte Marke der NabiOta® Health Group Germany GmbH. Die Nutzung der Marke, der Logos, Unternehmenskennzeichen sowie sonstiger geschützter Bestandteile bedarf der vorherigen schriftlichen Zustimmung der Rechteinhaberin.
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "Правовое указание" : locale === "en" ? "Legal Notice" : "Hinweis"}
                </h2>
                <p>
                  Die NabiOta® Health Group Germany GmbH ist eine im Handelsregister eingetragene Gesellschaft mit beschränkter Haftung nach deutschem Recht.
                </p>
                <p className="mt-2">
                  NabiOta® ist eine geschützte Marke der NabiOta® Health Group Germany GmbH. Die Nutzung der Marke, der Logos, Unternehmenskennzeichen oder sonstiger geschützter Bestandteile bedarf der vorherigen schriftlichen Zustimmung der Rechteinhaberin.
                </p>
                <p className="mt-4 text-xs text-text-secondary/80 font-medium">
                  © 2026 NabiOta® Health Group Germany GmbH. Alle Rechte vorbehalten.
                  <br />
                  NabiOta® ist eine eingetragene Marke der NabiOta® Health Group Germany GmbH.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
