import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { companyInfo } from "@/data/company";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedPrivacyProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedPrivacyProps): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    de: "Datenschutzerklärung | DSGVO Konformität",
    en: "Privacy Policy | GDPR Compliance",
    ru: "Политика конфиденциальности | GDPR",
  };
  return {
    title: titles[locale] || titles.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/privacy`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/privacy",
        en: "https://www.nabiota-health-group.de/en/privacy",
        ru: "https://www.nabiota-health-group.de/ru/privacy",
        "x-default": "https://www.nabiota-health-group.de/de/privacy",
      },
    },
  };
}

export default async function LocalizedPrivacyPage({ params }: LocalizedPrivacyProps) {
  const { locale } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pb-20">
        <PageHero
          eyebrow={
            locale === "ru"
              ? "КОНФИДЕНЦИАЛЬНОСТЬ И ПРОЗРАЧНОСТЬ"
              : locale === "en"
              ? "PRIVACY & TRANSPARENCY"
              : "DATENSCHUTZ & TRANSPARENZ"
          }
          title={
            locale === "ru"
              ? "Политика конфиденциальности"
              : locale === "en"
              ? "Privacy Policy"
              : "Datenschutzerklärung"
          }
          description={
            locale === "ru"
              ? "Информация о характере, объеме и целях обработки персональных данных в соответствии с европейским регламентом GDPR."
              : locale === "en"
              ? "Information on the nature, scope, and purpose of personal data processing under the GDPR."
              : "Informationen über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten gemäß DSGVO."
          }
          imageSrc="/images/heroes/hero-campus.jpg"
          imageAlt="NabiOta Health Group Germany Datenschutz"
        />

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="narrow" className="max-w-[800px]">
            <div className="bg-white p-8 sm:p-12 rounded-2xl border border-forest-900/10 shadow-sm space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              <div>
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "1. Ответственный орган" : locale === "en" ? "1. Data Controller" : "1. Verantwortliche Stelle"}
                </h2>
                <p>
                  {locale === "ru"
                    ? "Контроллером данных в смысле Общего регламента по защите данных (GDPR) является:"
                    : locale === "en"
                    ? "Responsible body within the meaning of the General Data Protection Regulation (GDPR) is:"
                    : "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:"}
                </p>
                <div className="mt-2 text-forest-950 font-medium">
                  <p>{companyInfo.legalName}</p>
                  <p>{companyInfo.street}</p>
                  <p>{companyInfo.postalCode} {companyInfo.city}</p>
                  <p>E-Mail: {companyInfo.email}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "2. Сбор и хранение персональных данных" : locale === "en" ? "2. Collection and Storage of Personal Data" : "2. Erhebung und Speicherung personenbezogener Daten"}
                </h2>
                <p>
                  {locale === "ru"
                    ? "При посещении нашего веб-сайта браузер на вашем устройстве автоматически передает информацию на сервер нашего веб-сайта. Эта информация временно сохраняется в так называемом лог-файле."
                    : locale === "en"
                    ? "When you visit our website, the browser used on your device automatically sends information to the server of our website. This information is temporarily stored in a log file."
                    : "Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert."}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  Hierzu gehören: IP-Adresse, Datum und Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei, Website, von der aus der Zugriff erfolgt (Referrer-URL), verwendeter Browser und ggf. das Betriebssystem Ihres Rechners.
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "3. Ваши права (Права субъекта данных)" : locale === "en" ? "3. Your Rights as a Data Subject" : "3. Betroffenenrechte nach DSGVO"}
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>{locale === "ru" ? "Право на доступ (ст. 15 GDPR)" : locale === "en" ? "Right of Access (Art. 15 GDPR)" : "Auskunftsrecht (Art. 15 DSGVO)"}:</strong>{" "}
                    {locale === "ru" ? "Вы имеете право запросить подтверждение об обработке данных." : "Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen."}
                  </li>
                  <li>
                    <strong>{locale === "ru" ? "Право на исправление (ст. 16 GDPR)" : locale === "en" ? "Right to Rectification (Art. 16 GDPR)" : "Berichtigungsrecht (Art. 16 DSGVO)"}:</strong>{" "}
                    {locale === "ru" ? "Право на исправление неточных данных." : "Sie können unverzüglich die Berichtigung unrichtiger Daten verlangen."}
                  </li>
                  <li>
                    <strong>{locale === "ru" ? "Право на удаление (ст. 17 GDPR)" : locale === "en" ? "Right to Erasure (Art. 17 GDPR)" : "Löschungsrecht (Art. 17 DSGVO)"}:</strong>{" "}
                    {locale === "ru" ? "Право на удаление ваших персональных данных." : "Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen."}
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {locale === "ru" ? "4. Безопасность данных" : locale === "en" ? "4. Data Security" : "4. Datensicherheit"}
                </h2>
                <p>
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
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
