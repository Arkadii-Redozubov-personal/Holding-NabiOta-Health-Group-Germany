import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { newsArticles } from "@/data/news";

export const metadata = {
  title: "News & Insights | NabiOta® Health Group Germany",
  description:
    "Aktuelle Meldungen, Entwicklungen und Fachbeiträge aus der NabiOta® Health Group Germany.",
};

export default function NewsPage() {
  const featured = newsArticles[0];
  const rest = newsArticles.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        {/* Banner */}
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">AKTUELLES & EINBLICKE</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                News & Entwicklungen.
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                Erfahren Sie mehr über unsere aktuellen Projekte, medizinische
                Innovationen und den strategischen Ausbau unserer Standorte.
              </p>
            </div>
          </Container>
        </section>

        {/* Featured Story */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="mb-14">
              <Link
                href={`/news/${featured.slug}`}
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
                    <span>Artikel lesen</span>
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
                  href={`/news/${art.slug}`}
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
                      <span>Weiterlesen</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
