import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { newsArticles } from "@/data/news";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedNewsProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedNewsProps): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    de: "News & Insights | NabiOta® Health Group Germany",
    en: "News & Insights | NabiOta® Health Group Germany",
    ru: "Новости и статьи | NabiOta® Health Group Germany",
  };
  return {
    title: titles[locale] || titles.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/news`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/news",
        en: "https://www.nabiota-health-group.de/en/news",
        ru: "https://www.nabiota-health-group.de/ru/news",
        "x-default": "https://www.nabiota-health-group.de/de/news",
      },
    },
  };
}

export default async function LocalizedNewsPage({ params }: LocalizedNewsProps) {
  const { locale } = await params;
  const featured = newsArticles[0];
  const rest = newsArticles.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pb-20">
        <PageHero
          breadcrumb={
            <Breadcrumb
              items={[
                { label: locale === "ru" ? "Главная" : locale === "en" ? "Home" : "Startseite", href: `/${locale}` },
                { label: locale === "ru" ? "Новости" : locale === "en" ? "News" : "Aktuelles" },
              ]}
            />
          }
          title={
            locale === "ru"
              ? "Новости и события."
              : locale === "en"
              ? "News & Developments."
              : "News & Entwicklungen."
          }
          description={
            locale === "ru"
              ? "Узнайте больше о наших текущих проектах, технологических инновациях и расширении центров холдинга."
              : locale === "en"
              ? "Learn more about our clinical initiatives, medical technology investments, and strategic growth."
              : "Erfahren Sie mehr über unsere aktuellen Projekte, medizinische Innovationen und den strategischen Ausbau unserer Standorte."
          }
          imageSrc="/images/heroes/hero-news.jpg"
          imageAlt="NabiOta Health Group Germany Aktuelles"
        />

        {/* Featured Story */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="mb-14">
              <Link
                href={`/${locale}/news/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl overflow-hidden border border-forest-900/10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-text-secondary">
                    <span className="px-2.5 py-1 rounded bg-gold-400/15 text-gold-700 font-semibold uppercase tracking-wider text-[11px]">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readingTime}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl text-forest-950 group-hover:text-gold-600 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans line-clamp-3">
                    {featured.summary}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 pt-2">
                    <span>{locale === "ru" ? "Читать статью" : locale === "en" ? "Read Article" : "Artikel lesen"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rest.map((art) => (
                <Link
                  key={art.id}
                  href={`/${locale}/news/${art.slug}`}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden border border-forest-900/10 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-text-secondary mb-2">
                        <span className="text-gold-700 font-semibold uppercase tracking-wider text-[11px]">
                          {art.category}
                        </span>
                        <span>•</span>
                        <span>{art.date}</span>
                      </div>
                      <h3 className="font-display text-xl text-forest-950 group-hover:text-gold-600 transition-colors leading-snug mb-2">
                        {art.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2">
                        {art.summary}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-600 pt-2">
                      <span>{locale === "ru" ? "Подробнее" : locale === "en" ? "Read More" : "Weiterlesen"}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
