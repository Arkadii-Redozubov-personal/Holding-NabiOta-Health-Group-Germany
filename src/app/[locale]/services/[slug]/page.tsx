import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Stethoscope, Activity, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { IconCircle } from "@/components/ui/IconCircle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHero } from "@/components/layout/PageHero";
import { holdingServices } from "@/data/services";
import { DiagnostikPageComponent } from "@/components/pages/DiagnostikPageComponent";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  const paths: { locale: SupportedLocale; slug: string }[] = [];
  for (const locale of locales) {
    for (const service of holdingServices) {
      paths.push({ locale, slug: service.slug });
    }
  }
  return paths;
}

interface LocalizedServiceDetailProps {
  params: Promise<{ locale: SupportedLocale; slug: string }>;
}

export async function generateMetadata({ params }: LocalizedServiceDetailProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = holdingServices.find((s) => s.slug === slug);
  if (!service) return { title: "Leistung nicht gefunden" };

  return {
    title: `${service.title} | NabiOta® Health Group`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/services/${slug}`,
      languages: {
        de: `https://www.nabiota-health-group.de/de/services/${slug}`,
        en: `https://www.nabiota-health-group.de/en/services/${slug}`,
        ru: `https://www.nabiota-health-group.de/ru/services/${slug}`,
        "x-default": `https://www.nabiota-health-group.de/de/services/${slug}`,
      },
    },
  };
}

export default async function LocalizedServiceDetailPage({ params }: LocalizedServiceDetailProps) {
  const { locale, slug } = await params;
  const service = holdingServices.find((s) => s.slug === slug);
  const dict = getDictionary(locale);

  if (!service) {
    notFound();
  }

  if (slug === "diagnostikzentren") {
    return <DiagnostikPageComponent locale={locale} />;
  }

  const relatedServices = holdingServices.filter((s) => s.slug !== slug).slice(0, 3);

  const serviceBadges = [
    {
      icon: <Stethoscope className="w-5 h-5 text-[#ECCF96]" />,
      title: locale === "ru" ? "Врачебное" : locale === "en" ? "Specialist" : "Fachärztlich",
      sub: locale === "ru" ? "Ведение" : locale === "en" ? "Supervised" : "Geleitet",
    },
    {
      icon: <Activity className="w-5 h-5 text-[#ECCF96]" />,
      title: locale === "ru" ? "Современная" : locale === "en" ? "Modern" : "Moderne",
      sub: locale === "ru" ? "Терапия" : locale === "en" ? "Therapy" : "Therapie",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#ECCF96]" />,
      title: locale === "ru" ? "Высокое" : locale === "en" ? "Highest" : "Höchste",
      sub: locale === "ru" ? "Качество" : locale === "en" ? "Quality" : "Qualität",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pb-20">
        {/* Hero Section with Integrated Breadcrumb matching Photo 2 */}
        <PageHero
          breadcrumb={
            <Breadcrumb
              items={[
                { label: dict.nav.home, href: `/${locale}` },
                {
                  label: locale === "ru" ? "Услуги" : locale === "en" ? "Services" : "Leistungen",
                  href: `/${locale}/services`,
                },
                { label: service.title },
              ]}
            />
          }
          title={
            <>
              {service.title}
              {service.subtitle && (
                <span className="block text-xl sm:text-2xl text-[#ECCF93] font-light mt-1 font-serif">
                  {service.subtitle}
                </span>
              )}
            </>
          }
          description={service.shortDescription}
          imageSrc={service.image || "/images/heroes/hero-services.jpg"}
          badges={serviceBadges}
        />

        {/* Overview & Detail Section */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-forest-900/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <Eyebrow variant="forest">
                  {locale === "ru" ? "УСЛУГА В ДЕТАЛЯХ" : locale === "en" ? "SERVICE IN DETAIL" : "LEISTUNG IM DETAIL"}
                </Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-950 leading-tight">
                  {locale === "ru"
                    ? "Индивидуальный подход и безупречные клинические стандарты"
                    : locale === "en"
                    ? "Patient-Centered Clinical Care with Highest Standards"
                    : "Individuelle Versorgung mit höchsten Ansprüchen"}
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  {service.description}
                </p>

                {service.benefits && (
                  <div className="space-y-3 pt-2">
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-forest-950 font-medium">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Process Steps */}
        {service.processSteps && (
          <section className="py-16 sm:py-20 bg-white border-y border-forest-900/10">
            <Container size="wide">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <Eyebrow variant="forest">
                  {locale === "ru" ? "ЭТАПЫ ЛЕЧЕНИЯ" : locale === "en" ? "TREATMENT PROCESS" : "BEHANDLUNGSPFAD & ABLAUF"}
                </Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
                  {locale === "ru"
                    ? "Прозрачные и понятные шаги к выздоровлению"
                    : locale === "en"
                    ? "Clear and Transparent Steps to Recovery"
                    : "Transparente Schritte zu Ihrer Genesung"}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-6 rounded-xl bg-[#FAF8F5] border border-forest-900/10 relative"
                  >
                    <span className="font-display text-4xl text-gold-400 font-semibold mb-3 block">
                      0{step.step}
                    </span>
                    <h3 className="font-sans text-base font-bold text-forest-950 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-14 text-center">
                <Button variant="gold-solid" size="lg" href={`/${locale}/contact`}>
                  {dict.nav.contactCta}
                </Button>
              </div>
            </Container>
          </section>
        )}

        {/* Related Services */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <h3 className="font-display text-2xl sm:text-3xl text-forest-950 mb-8">
              {locale === "ru" ? "Другие услуги группы" : locale === "en" ? "Related Services" : "Weitere Leistungen"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <ServiceCard key={rel.id} service={rel} currentLocale={locale} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
