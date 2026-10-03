import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, Clock, ArrowLeft, Newspaper, Sparkles, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { newsArticles } from "@/data/news";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  const paths: { locale: SupportedLocale; slug: string }[] = [];
  for (const locale of locales) {
    for (const art of newsArticles) {
      paths.push({ locale, slug: art.slug });
    }
  }
  return paths;
}

interface LocalizedArticleDetailProps {
  params: Promise<{ locale: SupportedLocale; slug: string }>;
}

export async function generateMetadata({ params }: LocalizedArticleDetailProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Artikel nicht gefunden" };

  return {
    title: `${article.title} | News`,
    description: article.summary,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/news/${slug}`,
      languages: {
        de: `https://www.nabiota-health-group.de/de/news/${slug}`,
        en: `https://www.nabiota-health-group.de/en/news/${slug}`,
        ru: `https://www.nabiota-health-group.de/ru/news/${slug}`,
        "x-default": `https://www.nabiota-health-group.de/de/news/${slug}`,
      },
    },
  };
}

export default async function LocalizedArticleDetailPage({ params }: LocalizedArticleDetailProps) {
  const { locale, slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = newsArticles.filter((a) => a.slug !== slug);

  const newsBadges = [
    {
      icon: <Newspaper className="w-5 h-5 text-[#ECCF96]" />,
      title: locale === "ru" ? "Актуальная" : locale === "en" ? "Latest" : "Aktueller",
      sub: locale === "ru" ? "Публикация" : locale === "en" ? "Article" : "Beitrag",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#ECCF96]" />,
      title: locale === "ru" ? "Новости" : locale === "en" ? "Group" : "Holding",
      sub: locale === "ru" ? "Холдинга" : locale === "en" ? "Insights" : "Einblick",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#ECCF96]" />,
      title: locale === "ru" ? "Развитие" : locale === "en" ? "Future" : "Zukunft",
      sub: locale === "ru" ? "И Рост" : locale === "en" ? "Growth" : "Gestalten",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1">
        {/* Hero Header with Breadcrumb */}
        <PageHero
          breadcrumb={
            <Breadcrumb
              items={[
                { label: locale === "ru" ? "Главная" : locale === "en" ? "Home" : "Startseite", href: `/${locale}` },
                { label: locale === "ru" ? "Новости" : locale === "en" ? "News" : "News", href: `/${locale}/news` },
                { label: article.title },
              ]}
            />
          }
          title={article.title}
          description={article.summary}
          imageSrc={article.image || "/images/heroes/hero-news.webp"}
          badges={newsBadges}
        />

        {/* Article Header & Body */}
        <article className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="narrow" className="max-w-[760px]">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-gold-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{locale === "ru" ? "Назад ко всем новостям" : locale === "en" ? "Back to Overview" : "Zurück zur Übersicht"}</span>
            </Link>

            <div className="flex items-center gap-4 text-xs text-text-secondary mb-4">
              <span className="px-2.5 py-1 rounded bg-gold-400/15 text-gold-700 font-semibold uppercase tracking-wider text-[11px]">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-normal leading-[1.12] mb-6">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-forest-900 font-medium leading-relaxed mb-8">
              {article.summary}
            </p>

            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-10 shadow-md border border-forest-900/10">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6 text-base sm:text-lg text-text-secondary leading-relaxed font-sans border-t border-forest-900/10 pt-8">
              {article.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </article>

        {related.length > 0 && (
          <section className="py-16 bg-white border-t border-forest-900/10">
            <Container size="wide">
              <Eyebrow variant="forest">
                {locale === "ru" ? "ДРУГИЕ ПУБЛИКАЦИИ" : locale === "en" ? "MORE ARTICLES" : "WEITERE BEITRÄGE"}
              </Eyebrow>
              <h2 className="font-display text-2xl sm:text-3xl text-forest-950 mb-8">
                {locale === "ru" ? "Рекомендуем прочитать" : locale === "en" ? "You might also be interested in" : "Das könnte Sie auch interessieren"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/${locale}/news/${rel.slug}`}
                    className="p-6 rounded-xl bg-[#FAF8F5] border border-forest-900/10 hover:border-gold-400/50 transition-colors"
                  >
                    <span className="text-xs text-gold-700 font-semibold uppercase tracking-wider block mb-2">
                      {rel.category}
                    </span>
                    <h3 className="font-display text-xl text-forest-950 mb-2 leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary line-clamp-2">
                      {rel.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
