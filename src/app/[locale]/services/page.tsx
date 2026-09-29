import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { holdingServices } from "@/data/services";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedServicesProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedServicesProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: `${dict.services.heading} | NabiOta® Health Group`,
    description: dict.meta.description,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/services`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/services",
        en: "https://www.nabiota-health-group.de/en/services",
        ru: "https://www.nabiota-health-group.de/ru/services",
        "x-default": "https://www.nabiota-health-group.de/de/services",
      },
    },
  };
}

export default async function LocalizedServicesPage({ params }: LocalizedServicesProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">{dict.services.eyebrow}</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                {dict.services.heading}
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                {locale === "ru"
                  ? "От амбулаторной практики и диагностики до специализированных терапевтических концепций и комплексных программ реабилитации."
                  : locale === "en"
                  ? "From outpatient clinical care and high-end imaging to specialized rehabilitation and integrated care networks."
                  : "Von ambulanter Diagnostik über spezialisierte Therapiekonzepte bis hin zu integrierten Versorgungsstrukturen begleiten wir Patienten und Partner verlässlich auf jedem Schritt."}
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {holdingServices.map((service) => (
                <ServiceCard key={service.id} service={service} currentLocale={locale} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
