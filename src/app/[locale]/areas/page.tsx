import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { businessAreas } from "@/data/areas";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedAreasProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedAreasProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: `${dict.areas.heading} | NabiOta® Health Group Germany`,
    description: dict.areas.description,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/areas`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/areas",
        en: "https://www.nabiota-health-group.de/en/areas",
        ru: "https://www.nabiota-health-group.de/ru/areas",
        "x-default": "https://www.nabiota-health-group.de/de/areas",
      },
    },
  };
}

export default async function LocalizedAreasPage({ params }: LocalizedAreasProps) {
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
                { label: dict.nav.areas },
              ]}
            />
          }
          title={dict.areas.heading}
          description={dict.areas.description}
          imageSrc="/images/heroes/hero-areas.jpg"
          imageAlt="NabiOta Health Group Germany Unternehmensbereiche"
        />

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessAreas.map((area) => (
                <BusinessCard key={area.id} area={area} currentLocale={locale} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
