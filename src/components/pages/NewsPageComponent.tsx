"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Building2,
  Lightbulb,
  Briefcase,
  FileText,
  ChevronDown,
  Check,
  Search,
  Bookmark,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SupportedLocale } from "@/lib/i18n";
import { newsArticles } from "@/data/news";

// ── Custom SVG Icons Matching User Design ──
function CloverEmblemIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 4.5C10.5 4.5 9 5.5 9 7.5c0 2.2 3 4.5 3 4.5s3-2.3 3-4.5c0-2-1.5-3-3-3Z" />
      <path d="M12 19.5c1.5 0 3-1 3-3 0-2.2-3-4.5-3-4.5s-3 2.3-3 4.5c0 2 1.5 3 3 3Z" />
      <path d="M4.5 12C4.5 10.5 5.5 9 7.5 9c2.2 0 4.5 3 4.5 3s-2.3 3-4.5 3c-2 0-3-1.5-3-3Z" />
      <path d="M19.5 12c0 1.5-1 3-3 3-2.2 0-4.5-3-4.5-3s2.3-3 4.5-3c2 0 3 1.5 3 3Z" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function EventsPresentationIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7 20h10M12 16v4" />
      <circle cx="9" cy="9" r="1" />
      <path d="M13 8h4M13 11h2" />
    </svg>
  );
}

interface Props {
  locale?: SupportedLocale;
}

export function NewsPageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"recent" | "oldest">("recent");
  const [sidebarEmail, setSidebarEmail] = useState("");
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);
  const [bannerEmail, setBannerEmail] = useState("");
  const [bannerSubscribed, setBannerSubscribed] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // ── Hero Content ──
  const heroData = {
    breadcrumbHome: isRu ? "Главная" : isEn ? "Home" : "Home",
    breadcrumbNews: isRu ? "Новости" : isEn ? "News" : "News",
    eyebrow: isRu ? "НОВОСТИ И СОБЫТИЯ" : isEn ? "NEWS & UPDATES" : "NEWS & UPDATES",
    title: isRu ? "Новости группы" : isEn ? "Latest News" : "Latest News",
    desc: isRu
      ? "Будьте в курсе наших последних достижений, инноваций, событий и важных объявлений NabiOta Health Group Germany."
      : isEn
      ? "Stay informed about our latest achievements, innovations, events and important updates from NabiOta Health Group Germany."
      : "Bleiben Sie informiert über unsere neuesten Meilensteine, Innovationen, Veranstaltungen und Entwicklungen der NabiOta Health Group Germany.",
  };

  // ── Categories List matching Mockup ──
  const categories = [
    {
      id: "all",
      label: isRu ? "Все новости" : isEn ? "All News" : "All News",
      count: 12,
      icon: CloverEmblemIcon,
    },
    {
      id: "Company Updates",
      label: isRu ? "Новости компании" : isEn ? "Company Updates" : "Company Updates",
      count: 3,
      icon: Building2,
    },
    {
      id: "Medical Innovation",
      label: isRu ? "Медицинские инновации" : isEn ? "Medical Innovation" : "Medical Innovation",
      count: 4,
      icon: Lightbulb,
    },
    {
      id: "Events",
      label: isRu ? "Мероприятия" : isEn ? "Events" : "Events",
      count: 2,
      icon: EventsPresentationIcon,
    },
    {
      id: "Careers",
      label: isRu ? "Карьера" : isEn ? "Careers" : "Careers",
      count: 1,
      icon: Briefcase,
    },
    {
      id: "Press Releases",
      label: isRu ? "Пресс-релизы" : isEn ? "Press Releases" : "Press Releases",
      count: 2,
      icon: FileText,
    },
  ];

  // ── Featured Story ──
  const featuredArticle = newsArticles.find((a) => a.featured) || newsArticles[0];

  // ── Filter & Sort Articles ──
  const filteredArticles = useMemo(() => {
    // Exclude the featured article from the 6 grid cards
    let list = newsArticles.filter((a) => a.id !== featuredArticle.id);

    if (activeCategory !== "all") {
      list = list.filter(
        (a) => a.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (sortOrder === "oldest") {
      return [...list].reverse();
    }
    return list;
  }, [activeCategory, sortOrder, featuredArticle.id]);

  const handleSidebarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sidebarEmail.trim()) {
      setSidebarSubscribed(true);
      setTimeout(() => setSidebarSubscribed(false), 5000);
      setSidebarEmail("");
    }
  };

  const handleBannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bannerEmail.trim()) {
      setBannerSubscribed(true);
      setTimeout(() => setBannerSubscribed(false), 5000);
      setBannerEmail("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      <Header currentLocale={locale} />

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION (1-IN-1 MATCHING USER DESIGN)
          - Left: Dark forest green with botanical leaves watermark,
            Breadcrumbs (Home › News), Eyebrow, Title, Description
          - Divider: Curved convex arc with champagne gold stroke
          - Right: High-resolution doctor portrait with blurred clinic
      ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#08170D] text-white overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[340px] flex items-center">
        {/* Right side: Doctor Photo */}
        <div className="absolute top-0 right-0 w-full sm:w-[62%] lg:w-[58%] h-full z-0">
          <Image
            src="/images/news/doctor-only.jpg"
            alt="NabiOta Health Group Medical Team"
            fill
            className="object-cover object-[center_20%] sm:object-center"
            priority
          />
          {/* Subtle mobile overlay so text remains razor-sharp */}
          <div className="sm:hidden absolute inset-0 bg-[#08170D]/85" />
        </div>

        {/* Desktop Elegant Sweeping Curved Mask with Champagne Gold Border */}
        <div className="hidden sm:block absolute inset-0 z-10 pointer-events-none">
          <svg
            viewBox="0 0 1000 480"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            {/* Dark green filled area covering left half */}
            <path
              d="M 0 0 L 440 0 C 510 130, 560 310, 620 480 L 0 480 Z"
              fill="#08170D"
            />
            {/* Elegant Champagne Gold Border Line */}
            <path
              d="M 440 0 C 510 130, 560 310, 620 480"
              fill="none"
              stroke="#D5B878"
              strokeWidth="2.2"
              opacity="0.85"
            />
          </svg>
        </div>

        {/* Botanical watermark in top-left */}
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none opacity-40 z-10 select-none">
          <Image
            src="/images/areas/botanical-branch-clean.png"
            alt="Botanical Accent"
            fill
            className="object-contain object-top-left -scale-x-100"
            priority
          />
        </div>

        {/* Content container on left */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="max-w-xl space-y-3">
            {/* Breadcrumb: Home › News */}
            <div className="flex items-center gap-1.5 text-xs text-white/70 font-sans tracking-wide">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">
                {heroData.breadcrumbHome}
              </Link>
              <span className="text-[#D5B878]/80 text-[10px]">›</span>
              <span className="text-white/90 font-medium">{heroData.breadcrumbNews}</span>
            </div>

            {/* Eyebrow: NEWS & UPDATES */}
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block pt-1">
              {heroData.eyebrow}
            </span>

            {/* Title: Latest News */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-white font-normal leading-[1.12]">
              {heroData.title}
            </h1>

            {/* Description */}
            <p className="text-white/80 text-xs sm:text-[13.5px] leading-relaxed font-sans max-w-md pt-0.5">
              {heroData.desc}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MAIN CONTENT AREA (PHOTO 3: 1-IN-1 DESIGN)
          - Header row: "— ALL NEWS / Latest Articles" + Sort by dropdown
          - Grid: Left (2-column articles grid) + Right (3-card sidebar)
      ══════════════════════════════════════════════════════════ */}
      <main className="flex-1 py-10 sm:py-14 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row (Photo 3) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#EDE8DE]">
            <div>
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                {isRu ? "— ВСЕ СТАТЬИ" : isEn ? "— ALL NEWS" : "— ALL NEWS"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight mt-1">
                {isRu ? "Последние публикации" : isEn ? "Latest Articles" : "Latest Articles"}
              </h2>
            </div>

            {/* Sort by dropdown (Photo 3) */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs text-[#6E756D] font-sans">
                {isRu ? "Сортировка:" : isEn ? "Sort by:" : "Sortieren:"}
              </span>
              <div className="relative">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as "recent" | "oldest")}
                  className="appearance-none bg-white border border-[#EDE8DE] rounded-full pl-3.5 pr-8 py-1.5 text-xs text-[#142318] font-medium shadow-sm hover:border-[#D5B878] focus:outline-none focus:border-[#D5B878] cursor-pointer"
                >
                  <option value="recent">
                    {isRu ? "Сначала новые" : isEn ? "Newest first" : "Neueste zuerst"}
                  </option>
                  <option value="oldest">
                    {isRu ? "Сначала старые" : isEn ? "Oldest first" : "Älteste zuerst"}
                  </option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#6E756D] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* ── LEFT COLUMN (~67% width): 2-COLUMN ARTICLES GRID (PHOTO 3) ── */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                {filteredArticles.map((art) => {
                  const isBookmarked = bookmarkedIds.includes(art.id);
                  return (
                    <article
                      key={art.id}
                      className="bg-white rounded-2xl border border-[#EDE8DE] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-0.5"
                    >
                      <div>
                        {/* Article Image */}
                        <Link href={`/${locale}/news/${art.slug}`} className="block relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                          <Image
                            src={art.image}
                            alt={art.title}
                            fill
                            className="object-cover group-hover:scale-104 transition-transform duration-500"
                          />
                        </Link>

                        {/* Article Body */}
                        <div className="p-4 sm:p-5">
                          {/* Row: Category Pill + Date + Bookmark Icon (Photo 3) */}
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <span className="text-[9.5px] font-bold tracking-[0.12em] uppercase text-[#8C6D2B] bg-[#FAF5EC] border border-[#EADBBD] px-2.5 py-0.5 rounded">
                              {art.category}
                            </span>
                            
                            <div className="flex items-center gap-2">
                              <span className="text-[11.5px] text-[#6E756D] font-sans">
                                {art.date}
                              </span>
                              <button
                                onClick={(e) => toggleBookmark(art.id, e)}
                                aria-label="Bookmark article"
                                className="p-1 rounded-full text-[#8C938D] hover:text-[#B89650] transition-colors"
                              >
                                <Bookmark
                                  className={`w-3.5 h-3.5 ${
                                    isBookmarked
                                      ? "fill-[#D5B878] text-[#B89650]"
                                      : "stroke-[1.6]"
                                  }`}
                                />
                              </button>
                            </div>
                          </div>

                          {/* Title */}
                          <Link href={`/${locale}/news/${art.slug}`}>
                            <h3 className="font-serif text-[17px] sm:text-[18.5px] text-[#132218] font-normal leading-[1.28] hover:text-[#B89650] transition-colors mb-2 line-clamp-2">
                              {art.title}
                            </h3>
                          </Link>

                          {/* Excerpt */}
                          <p className="text-xs sm:text-[12.5px] text-[#556358] leading-relaxed font-sans line-clamp-3">
                            {art.summary}
                          </p>
                        </div>
                      </div>

                      {/* Read more → (Photo 3) */}
                      <div className="px-4 sm:p-5 pt-0 pb-4 sm:pb-5">
                        <Link
                          href={`/${locale}/news/${art.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142318] group-hover:text-[#B89650] transition-colors"
                        >
                          <span>{isRu ? "Читать далее" : isEn ? "Read more" : "Weiterlesen"}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>

              {filteredArticles.length === 0 && (
                <div className="py-12 text-center bg-white rounded-2xl border border-[#EDE8DE] p-8">
                  <p className="text-sm text-[#556358] font-sans">
                    {isRu
                      ? "В этой категории пока нет новостей."
                      : isEn
                      ? "No articles found in this category."
                      : "Keine Artikel in dieser Kategorie gefunden."}
                  </p>
                  <button
                    onClick={() => setActiveCategory("all")}
                    className="mt-3 text-xs font-semibold text-[#B89650] hover:underline"
                  >
                    {isRu ? "Показать все новости" : isEn ? "Show all news" : "Alle Artikel anzeigen"}
                  </button>
                </div>
              )}
            </div>

            {/* ── RIGHT COLUMN (~33% width): 3 SIDEBAR CARDS (PHOTO 3) ── */}
            <aside className="lg:col-span-4 space-y-6 sm:space-y-7">
              
              {/* ── Card 1: News Categories with Dark Header (Photo 3) ── */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EDE8DE] shadow-[0_2px_16px_rgba(0,0,0,0.02)] overflow-hidden">
                {/* Dark Forest Green Header Bar with Icon & Title */}
                <div className="bg-[#0A180E] text-white px-5 py-4 border-b border-[#0A180E] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-[#D5B878]/60 bg-[#0A180E] flex items-center justify-center text-[#ECCF96] shadow-sm shrink-0">
                    <FileText className="w-4 h-4 stroke-[1.6]" />
                  </div>
                  <h3 className="font-serif text-lg text-white font-normal">
                    {isRu ? "Категории новостей" : isEn ? "News Categories" : "News Categories"}
                  </h3>
                </div>

                {/* Categories List */}
                <div className="p-3 sm:p-4 space-y-1">
                  {categories.map((cat) => {
                    const CatIcon = cat.icon;
                    const isActive =
                      activeCategory.toLowerCase() === cat.id.toLowerCase();
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                          isActive
                            ? "bg-[#F5ECE0] text-[#142318] font-bold shadow-xs"
                            : "text-[#425046] hover:bg-[#FAF8F5] hover:text-[#142318]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <CatIcon
                            className={`w-4 h-4 stroke-[1.6] ${
                              isActive ? "text-[#142318]" : "text-[#8C938D]"
                            }`}
                          />
                          <span>{cat.label}</span>
                        </div>
                        <span
                          className={`text-[11px] font-sans ${
                            isActive
                              ? "text-[#142318] font-bold"
                              : "text-[#8C938D]"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── Card 2: Get the latest updates (Newsletter with Botanical Watermark, Photo 3) ── */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EDE8DE] shadow-[0_2px_16px_rgba(0,0,0,0.02)] p-5 sm:p-6 relative overflow-hidden">
                {/* Botanical leaf branch watermark on top-right */}
                <div className="absolute -top-2 -right-2 w-28 h-28 pointer-events-none opacity-25 select-none">
                  <Image
                    src="/images/areas/botanical-branch-clean.png"
                    alt="Botanical Foliage"
                    fill
                    className="object-contain object-top-right"
                  />
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#B89650] uppercase block mb-1">
                    {isRu ? "БУДЬТЕ В КУРСЕ" : isEn ? "STAY INFORMED" : "STAY INFORMED"}
                  </span>
                  
                  <h3 className="font-serif text-lg sm:text-xl text-[#142318] font-normal mb-1.5 leading-snug">
                    {isRu ? "Будьте в курсе обновлений" : isEn ? "Get the latest updates" : "Get the latest updates"}
                  </h3>
                  
                  <p className="text-xs text-[#556358] leading-relaxed font-sans mb-4">
                    {isRu
                      ? "Подпишитесь на рассылку и первыми узнавайте о новостях, событиях и разработках."
                      : isEn
                      ? "Subscribe to our newsletter and be the first to know about news, events and more."
                      : "Abonnieren Sie unseren Newsletter und erfahren Sie als Erste von Neuigkeiten und Veranstaltungen."}
                  </p>

                  <form onSubmit={handleSidebarSubmit} className="space-y-2">
                    <div className="relative flex items-center bg-[#FAF8F5] border border-[#EDE8DE] rounded-full pl-3.5 pr-1 py-1 focus-within:border-[#D5B878] transition-colors">
                      <input
                        type="email"
                        required
                        value={sidebarEmail}
                        onChange={(e) => setSidebarEmail(e.target.value)}
                        placeholder={
                          isRu ? "Ваш email..." : isEn ? "Your email address" : "Ihre E-Mail-Adresse"
                        }
                        className="w-full bg-transparent text-xs text-[#142318] placeholder-[#9CA3AF] outline-none font-sans py-1"
                      />
                      <button
                        type="submit"
                        aria-label="Subscribe"
                        className="w-7 h-7 rounded-full bg-[#08170D] hover:bg-[#D5B878] hover:text-[#08170D] text-white flex items-center justify-center shrink-0 transition-colors shadow-sm ml-1"
                      >
                        {sidebarSubscribed ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {sidebarSubscribed && (
                      <p className="text-[11px] text-green-700 font-medium">
                        {isRu ? "Спасибо за подписку!" : isEn ? "Thank you for subscribing!" : "Vielen Dank für Ihre Anmeldung!"}
                      </p>
                    )}

                    <div className="flex items-center gap-1.5 pt-1 text-[10px] text-[#8C938D] font-sans">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B89650] shrink-0" />
                      <span>
                        {isRu
                          ? "Мы уважаем конфиденциальность. Отписка в любое время."
                          : isEn
                          ? "We respect your privacy. Unsubscribe anytime."
                          : "Wir respektieren Ihre Privatsphäre. Jederzeit kündbar."}
                      </span>
                    </div>
                  </form>
                </div>
              </div>

              {/* ── Card 3: Featured Innovation with Microscope Image (Photo 3) ── */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-[#08170D] text-white p-5 sm:p-6 overflow-hidden border border-[#D5B878]/30 shadow-lg">
                {/* Microscope Background Photo */}
                <div className="absolute inset-0 pointer-events-none">
                  <Image
                    src="/images/news/cancer-research.jpg"
                    alt="Medical Innovation Research"
                    fill
                    className="object-cover object-center"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08170D] via-[#08170D]/90 to-[#08170D]/75" />
                </div>

                {/* Botanical leaf watermark accent */}
                <div className="absolute -right-4 -bottom-4 w-28 h-28 pointer-events-none opacity-20 select-none">
                  <Image
                    src="/images/areas/botanical-branch-clean.png"
                    alt="Botanical Foliage"
                    fill
                    className="object-contain object-bottom-right"
                  />
                </div>

                <div className="relative z-10">
                  {/* Top Round Button with Arrow pointing top-right ↗ (Photo 3) */}
                  <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white mb-4">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A56A] uppercase block mb-1">
                    {isRu ? "В ЦЕНТРЕ ВНИМАНИЯ" : isEn ? "FEATURED" : "FEATURED"}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl text-white font-normal mb-2 leading-snug">
                    {isRu
                      ? "Откройте наши последние инновации"
                      : isEn
                      ? "Explore Our Latest Innovations"
                      : "Entdecken Sie unsere Innovationen"}
                  </h3>

                  <p className="text-xs text-white/80 leading-relaxed font-sans mb-4">
                    {isRu
                      ? "Узнайте, как наши исследования и технологии формируют будущее здравоохранения."
                      : isEn
                      ? "Discover how our research and technology are shaping the future of healthcare."
                      : "Erfahren Sie, wie unsere Forschung und Medizintechnik die Zukunft gestalten."}
                  </p>

                  <Link
                    href={`/${locale}/services/forschung-und-innovation`}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span>{isRu ? "Узнать больше" : isEn ? "Learn more" : "Mehr erfahren"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </aside>
          </div>

          {/* ══════════════════════════════════════════════════════════
              NEWSLETTER FULL-WIDTH BANNER (ABOVE FOOTER, PHOTO 1-IN-1)
              - Dark forest green background
              - Left: STAY INFORMED, Subscribe to Our Newsletter, desc
              - Right: Pill input with gold round button
              - Botanical foliage branch on the far right
          ══════════════════════════════════════════════════════════ */}
          <div className="mt-14 sm:mt-18 relative rounded-2xl sm:rounded-3xl bg-[#08170D] text-white overflow-hidden p-6 sm:p-10 lg:p-12 border border-[#D5B878]/30 shadow-lg">
            {/* Botanical Foliage on Far Right */}
            <div className="absolute -right-4 -bottom-6 w-56 sm:w-72 h-56 sm:h-72 pointer-events-none opacity-30 select-none">
              <Image
                src="/images/areas/botanical-branch-clean.png"
                alt="Botanical Foliage"
                fill
                className="object-contain object-bottom-right"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Heading & Text */}
              <div className="lg:col-span-7 space-y-1.5">
                <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {isRu ? "БУДЬТЕ В КУРСЕ" : isEn ? "STAY INFORMED" : "STAY INFORMED"}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                  {isRu
                    ? "Подпишитесь на нашу новостную рассылку"
                    : isEn
                    ? "Subscribe to Our Newsletter"
                    : "Subscribe to Our Newsletter"}
                </h3>
                <p className="text-white/75 text-xs sm:text-[13.5px] font-sans leading-relaxed">
                  {isRu
                    ? "Получайте актуальные новости, обновления и аналитику от NabiOta Health Group Germany."
                    : isEn
                    ? "Get the latest news, updates and insights from NabiOta Health Group Germany."
                    : "Erhalten Sie aktuelle Meldungen, Einblicke und Mitteilungen der NabiOta Health Group Germany."}
                </p>
              </div>

              {/* Right Column: Pill Form */}
              <div className="lg:col-span-5">
                <form onSubmit={handleBannerSubmit} className="relative">
                  <div className="flex items-center bg-[#0F2316] border border-white/20 rounded-full pl-4 pr-1.5 py-1.5 focus-within:border-[#D5B878] transition-colors shadow-inner">
                    <input
                      type="email"
                      required
                      value={bannerEmail}
                      onChange={(e) => setBannerEmail(e.target.value)}
                      placeholder={
                        isRu ? "Ваш email..." : isEn ? "Your email address" : "Ihre E-Mail-Adresse"
                      }
                      className="w-full bg-transparent text-xs sm:text-[13px] text-white placeholder-white/45 outline-none font-sans py-1"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="w-8 h-8 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] flex items-center justify-center shrink-0 font-semibold shadow-md transition-all hover:scale-105 ml-1"
                    >
                      {bannerSubscribed ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {bannerSubscribed && (
                    <p className="text-[11px] text-[#ECCF96] font-medium mt-1.5 ml-3">
                      {isRu ? "Спасибо за подписку!" : isEn ? "Thank you for subscribing!" : "Vielen Dank für Ihre Anmeldung!"}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
