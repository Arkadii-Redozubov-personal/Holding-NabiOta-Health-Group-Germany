import React from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedPartnersProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedPartnersProps): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    de: "Partner & Kooperationen | NabiOta® Health Group Germany",
    en: "Partners & Cooperation | NabiOta® Health Group Germany",
    ru: "Партнёры и сотрудничество | NabiOta® Health Group Germany",
  };
  return {
    title: titles[locale] || titles.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/partners`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/partners",
        en: "https://www.nabiota-health-group.de/en/partners",
        ru: "https://www.nabiota-health-group.de/ru/partners",
        "x-default": "https://www.nabiota-health-group.de/de/partners",
      },
    },
  };
}

export default async function LocalizedPartnersPage({ params }: LocalizedPartnersProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">{dict.split.partners.eyebrow}</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                {dict.split.partners.heading}
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                {dict.split.partners.description}
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-forest-900/10">
                <Image
                  src="/images/partners/atrium.jpg"
                  alt="Partner und Dialog bei NabiOta"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <Eyebrow variant="forest">
                  {locale === "ru" ? "СТРАТЕГИЧЕСКИЙ ДИАЛОГ" : locale === "en" ? "STRATEGIC PARTNERSHIPS" : "STRATEGISCHE PARTNERSCHAFTEN"}
                </Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-950 leading-tight">
                  {locale === "ru"
                    ? "Надежное сотрудничество на равных"
                    : locale === "en"
                    ? "Reliable Cooperation Built on Trust"
                    : "Verlässliche Zusammenarbeit auf Augenhöhe"}
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  <p>
                    {locale === "ru"
                      ? "NabiOta® Health Group Germany GmbH делает ставку на долгосрочное и доверительное взаимодействие с ведущими участниками сферы здравоохранения."
                      : locale === "en"
                      ? "NabiOta® Health Group Germany GmbH is committed to sustainable and trust-based cooperation with leading institutions across the healthcare ecosystem."
                      : "Die NabiOta® Health Group Germany GmbH setzt auf langfristige und vertrauensvolle Zusammenarbeit mit Partnern aus dem Gesundheitswesen."}
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-forest-950 font-medium">
                    <li>{locale === "ru" ? "Медицинские центры и амбулатории" : "Medizinische Einrichtungen & Facharztpraxen"}</li>
                    <li>{locale === "ru" ? "Клинические стационары и больницы" : "Kliniken & Schwerpunktkrankenhäuser"}</li>
                    <li>{locale === "ru" ? "Реабилитационные учреждения" : "Rehabilitations- und Therapiezentren"}</li>
                    <li>{locale === "ru" ? "Службы патронажа и ухода" : "Pflegeeinrichtungen & ambulante Pflegedienste"}</li>
                    <li>{locale === "ru" ? "Академические и образовательные центры" : "Bildungsträger & akademische Institutionen"}</li>
                    <li>{locale === "ru" ? "Международные партнеры и инвесторы" : "Nationale und internationale Kooperationspartner"}</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Button variant="gold-solid" size="lg" href={`/${locale}/contact`}>
                    {locale === "ru" ? "Обсудить сотрудничество" : locale === "en" ? "Schedule a Discussion" : "Kooperationsgespräch vereinbaren"}
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
