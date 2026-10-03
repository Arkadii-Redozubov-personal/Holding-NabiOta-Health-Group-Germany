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

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Artikel nicht gefunden" };

  return {
    title: `${article.title} | News`,
    description: article.summary,
  };
}

const newsBadges = [
  {
    icon: <Newspaper className="w-5 h-5 text-[#ECCF96]" />,
    title: "Aktueller",
    sub: "Beitrag",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#ECCF96]" />,
    title: "Holding",
    sub: "Einblick",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#ECCF96]" />,
    title: "Zukunft",
    sub: "Gestalten",
  },
];

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = newsArticles.filter((a) => a.slug !== slug);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Header matching all subpages with Breadcrumb */}
        <PageHero
          breadcrumb={
            <Breadcrumb
              items={[
                { label: "Startseite", href: "/" },
                { label: "News", href: "/news" },
                { label: article.title },
              ]}
            />
          }
          title={article.title}
          description={article.summary}
          imageSrc={article.image || "/images/heroes/hero-news.webp"}
          badges={newsBadges}
        />

        {/* Article Header & Body (max-w-[740px] for editorial excellence) */}
        <article className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="narrow" className="max-w-[760px]">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-gold-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Zurück zur Übersicht</span>
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

        {/* Related News */}
        {related.length > 0 && (
          <section className="py-16 bg-white border-t border-forest-900/10">
            <Container size="wide">
              <Eyebrow variant="forest">WEITERE BEITRÄGE</Eyebrow>
              <h2 className="font-display text-2xl sm:text-3xl text-forest-950 mb-8">
                Das könnte Sie auch interessieren
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/news/${rel.slug}`}
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
      <Footer />
    </div>
  );
}
