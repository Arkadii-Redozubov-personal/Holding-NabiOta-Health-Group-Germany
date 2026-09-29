import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { businessAreas } from "@/data/areas";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  const paths: { locale: SupportedLocale; slug: string }[] = [];
  for (const locale of locales) {
    for (const area of businessAreas) {
      paths.push({ locale, slug: area.slug });
    }
  }
  return paths;
}

interface LocalizedAreaDetailProps {
  params: Promise<{ locale: SupportedLocale; slug: string }>;
}

export async function generateMetadata({ params }: LocalizedAreaDetailProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const area = businessAreas.find((a) => a.slug === slug);
  if (!area) return { title: "Bereich nicht gefunden" };

  return {
    title: `${area.title} | NabiOta® Health Group`,
    description: area.description,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/areas/${slug}`,
      languages: {
        de: `https://www.nabiota-health-group.de/de/areas/${slug}`,
        en: `https://www.nabiota-health-group.de/en/areas/${slug}`,
        ru: `https://www.nabiota-health-group.de/ru/areas/${slug}`,
        "x-default": `https://www.nabiota-health-group.de/de/areas/${slug}`,
      },
    },
  };
}

export default async function LocalizedAreaDetailPage({ params }: LocalizedAreaDetailProps) {
  const { locale, slug } = await params;
  const area = businessAreas.find((a) => a.slug === slug);
  const dict = getDictionary(locale);

  if (!area) {
    notFound();
  }

  const relatedAreas = businessAreas.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#FAF8F5] border-b border-forest-900/10 py-3">
          <Container size="wide">
            <nav className="flex items-center gap-2 text-xs text-text-secondary" aria-label="Breadcrumb">
              <Link href={`/${locale}`} className="hover:text-gold-600 transition-colors">
                {dict.nav.home}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-secondary/50" />
              <Link href={`/${locale}/areas`} className="hover:text-gold-600 transition-colors">
                {dict.nav.areas}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-secondary/50" />
              <span className="text-forest-950 font-medium">{area.title}</span>
            </nav>
          </Container>
        </div>

        {/* Hero Section */}
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">
                {locale === "ru" ? "ПОДРАЗДЕЛЕНИЕ ХОЛДИНГА" : locale === "en" ? "BUSINESS DIVISION" : "UNTERNEHMENSBEREICH"}
              </Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight mb-4 text-ivory-50">
                {area.title}
              </h1>
              {area.subtitle && (
                <p className="text-lg sm:text-xl text-gold-300 font-light mb-6 font-display">
                  {area.subtitle}
                </p>
              )}
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light font-sans max-w-2xl">
                {area.description}
              </p>
            </div>
          </Container>
        </section>

        {/* Overview & Image Section */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-forest-900/10">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <Eyebrow variant="forest">
                  {locale === "ru" ? "КОМПЕТЕНЦИИ И СТАНДАРТЫ" : locale === "en" ? "COMPETENCE & QUALITY" : "KOMPETENZ & ANSPRUCH"}
                </Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-950 leading-tight">
                  {locale === "ru"
                    ? "Высокотехнологичная медицинская помощь немецкого качества"
                    : locale === "en"
                    ? "Structured Healthcare Excellence according to German Standards"
                    : "Strukturierte Spitzenversorgung nach deutschen Standards"}
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  {area.fullDescription || area.description}
                </p>

                {area.stats && (
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-forest-900/10">
                    {area.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-display text-2xl sm:text-3xl text-gold-600 font-semibold">
                          {stat.value}
                        </span>
                        <span className="text-xs text-text-secondary font-medium mt-0.5">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Key Services & Advantages */}
        <section className="py-16 sm:py-20 bg-white border-y border-forest-900/10">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {area.keyServices && (
                <div>
                  <h3 className="font-display text-2xl text-forest-950 mb-6">
                    {locale === "ru" ? "Ключевые направления" : locale === "en" ? "Core Capabilities" : "Leistungsschwerpunkte"}
                  </h3>
                  <div className="space-y-3.5">
                    {area.keyServices.map((svc, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-forest-950">
                          {svc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {area.advantages && (
                <div>
                  <h3 className="font-display text-2xl text-forest-950 mb-6">
                    {locale === "ru" ? "Преимущества в составе холдинга" : locale === "en" ? "Group Advantages" : "Ihre Vorteile im Verbund"}
                  </h3>
                  <div className="space-y-3.5">
                    {area.advantages.map((adv, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-text-secondary">
                          {adv}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Banner */}
            <div className="mt-16 p-8 rounded-xl bg-forest-900 text-ivory-50 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-display text-2xl mb-1">
                  {locale === "ru"
                    ? `Хотите узнать больше о направлении «${area.title}»?`
                    : locale === "en"
                    ? `Would you like to learn more about ${area.title}?`
                    : `Möchten Sie mehr über ${area.title} erfahren?`}
                </h4>
                <p className="text-xs sm:text-sm text-ivory-200/80">
                  {locale === "ru"
                    ? "Наша команда с радостью ответит на ваши индивидуальные вопросы и обсудит возможности сотрудничества."
                    : locale === "en"
                    ? "Our team is at your disposal to answer questions and discuss partnership options."
                    : "Unser Team beantwortet gerne Ihre individuellen Fragen und Kooperationsanfragen."}
                </p>
              </div>
              <Button variant="gold-solid" size="md" href={`/${locale}/contact`}>
                {dict.nav.contactCta}
              </Button>
            </div>
          </Container>
        </section>

        {/* Related Areas */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <h3 className="font-display text-2xl sm:text-3xl text-forest-950 mb-8">
              {locale === "ru" ? "Другие направления холдинга" : locale === "en" ? "Related Divisions" : "Weitere Unternehmensbereiche"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedAreas.map((rel) => (
                <BusinessCard key={rel.id} area={rel} currentLocale={locale} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
