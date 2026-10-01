import React from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
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
      <main className="flex-1 pb-20">
        <PageHero
          breadcrumb={
            <Breadcrumb
              items={[
                { label: dict.nav.home, href: `/${locale}` },
                { label: locale === "ru" ? "Партнеры" : locale === "en" ? "Partners" : "Partner" },
              ]}
            />
          }
          title={dict.split.partners.heading}
          description={dict.split.partners.description}
          imageSrc="/images/heroes/hero-partners.jpg"
          imageAlt="NabiOta Health Group Germany Partner"
        />

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
                      ? "NabiOta® Health Group Germany GmbH делает ставку на долгосрочное и доверительное сотрудничество с партнерами из сферы здравоохранения. Мы убеждены, что устойчивое развитие и современные концепции оказания помощи возможны только благодаря обмену знаниями, опытом и компетенциями."
                      : locale === "en"
                      ? "NabiOta® Health Group Germany GmbH relies on long-term, trust-based cooperation with healthcare partners. We are convinced that sustainable advancement and modern care models thrive through the exchange of knowledge, experience, and competencies."
                      : "Die NabiOta® Health Group Germany GmbH setzt auf langfristige und vertrauensvolle Zusammenarbeit mit Partnern aus dem Gesundheitswesen. Wir sind überzeugt, dass nachhaltige Entwicklungen und moderne Versorgungskonzepte nur durch den Austausch von Wissen, Erfahrung und Kompetenzen entstehen können."}
                  </p>
                  <p>
                    {locale === "ru"
                      ? "Наша цель — развивать медицинские услуги, учреждения и инновационные проекты в рамках единой стратегической линии, поддерживая высочайшие стандарты качества."
                      : locale === "en"
                      ? "Our goal is to advance health-related services, medical institutions, and innovative initiatives under a shared strategic direction while maintaining the highest quality standards."
                      : "Unser Ziel ist es, gesundheitsbezogene Dienstleistungen, medizinische Einrichtungen und innovative Projekte unter einer gemeinsamen strategischen Ausrichtung weiterzuentwickeln und dabei hohe Qualitätsstandards zu fördern."}
                  </p>
                  <div className="p-4 rounded-xl bg-white border border-[#E8E2D4]">
                    <span className="font-semibold text-forest-950 block mb-2">
                      {locale === "ru" ? "Мы открыты для сотрудничества со следующими институтами:" : "Wir freuen uns über den Austausch und die Zusammenarbeit mit:"}
                    </span>
                    <ul className="list-disc list-inside space-y-1.5 text-forest-950 font-medium text-sm">
                      <li>{locale === "ru" ? "Медицинские центры и узкопрофильные врачебные практики" : "Medizinische Einrichtungen & Facharztpraxen"}</li>
                      <li>{locale === "ru" ? "Клиники и специализированные стационары" : "Kliniken & Schwerpunktkrankenhäuser"}</li>
                      <li>{locale === "ru" ? "Реабилитационные и терапевтические центры" : "Rehabilitations- und Therapiezentren"}</li>
                      <li>{locale === "ru" ? "Учреждения сестринского ухода и патронажа" : "Pflegeeinrichtungen & ambulante Dienste"}</li>
                      <li>{locale === "ru" ? "Образовательные и академические учреждения" : "Bildungsträger & Institutionen des Gesundheitswesens"}</li>
                      <li>{locale === "ru" ? "Национальные и международные партнеры по кооперации" : "Nationale und internationale Kooperationspartner"}</li>
                    </ul>
                  </div>
                  <p>
                    {locale === "ru"
                      ? "Инвесторов и стратегических партнеров мы сопровождаем в разработке долгосрочных проектов и устойчивых структур в здравоохранении. В центре внимания — качество, надежность и равноправное партнерство. Мы рады конструктивному диалогу и новым совместным перспективам."
                      : locale === "en"
                      ? "We accompany investors and strategic partners in the development of long-term projects and resilient structures in healthcare, prioritizing quality, reliability, and collaborative synergy. We look forward to dialogue and joint horizons."
                      : "Investoren und strategische Partner begleiten wir bei der Entwicklung langfristiger Projekte und nachhaltiger Strukturen im Gesundheitswesen. Dabei stehen Qualität, Verlässlichkeit und eine partnerschaftliche Zusammenarbeit im Mittelpunkt. Wir freuen uns auf den Dialog und neue gemeinsame Perspektiven."}
                  </p>
                </div>

                <div className="pt-2">
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
