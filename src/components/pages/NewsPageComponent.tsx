"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Building2,
  Lightbulb,
  Briefcase,
  FileText,
  ChevronDown,
  Check,
  Bookmark,
  ShieldCheck,
  LayoutGrid,
  Newspaper,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SupportedLocale } from "@/lib/i18n";
import { newsArticles } from "@/data/news";

interface Props {
  locale?: SupportedLocale;
}

export function NewsPageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"recent" | "oldest">("recent");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sidebarEmail, setSidebarEmail] = useState("");
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);
  const [bannerEmail, setBannerEmail] = useState("");
  const [bannerSubscribed, setBannerSubscribed] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  // Reset page when category or sorting changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, sortOrder]);

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

  // ── Categories List matching Mockup (Photo 2) ──
  const categories = [
    {
      id: "all",
      label: isRu ? "Все новости" : isEn ? "All News" : "Alle Nachrichten",
      count: newsArticles.length,
      icon: LayoutGrid,
    },
    {
      id: "Company Updates",
      label: isRu ? "Новости компании" : isEn ? "Company Updates" : "Unternehmensmeldungen",
      count: newsArticles.filter((a) => a.category.toLowerCase() === "company updates").length,
      icon: Building2,
    },
    {
      id: "Medical Innovation",
      label: isRu ? "Медицинские инновации" : isEn ? "Medical Innovation" : "Medizinische Innovation",
      count: newsArticles.filter((a) => a.category.toLowerCase() === "medical innovation").length,
      icon: Lightbulb,
    },
    {
      id: "Events",
      label: isRu ? "Мероприятия" : isEn ? "Events" : "Veranstaltungen",
      count: newsArticles.filter((a) => a.category.toLowerCase() === "events").length,
      icon: Calendar,
    },
    {
      id: "Careers",
      label: isRu ? "Карьера" : isEn ? "Careers" : "Karriere",
      count: newsArticles.filter((a) => a.category.toLowerCase() === "careers").length,
      icon: Briefcase,
    },
    {
      id: "Press Releases",
      label: isRu ? "Пресс-релизы" : isEn ? "Press Releases" : "Pressemitteilungen",
      count: newsArticles.filter((a) => a.category.toLowerCase() === "press releases").length,
      icon: FileText,
    },
  ];

  // ── Filter & Sort Articles ──
  const filteredArticles = useMemo(() => {
    let list = [...newsArticles];

    if (activeCategory !== "all") {
      list = list.filter(
        (a) => a.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (sortOrder === "oldest") {
      return [...list].reverse();
    }
    return list;
  }, [activeCategory, sortOrder]);

  // ── Pagination Configuration (Exactly 3 Rows = 2 cols × 3 rows = 6 items, Photo 3) ──
  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ITEMS_PER_PAGE));
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

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
          HERO SECTION (PHOTO 4: BOTANICAL GOLD BG + CRISP VISIBILITY)
          - Left Wing: Botanical Gold Background + Reduced blur overlay
          - Champagne Gold Arcs
          - Right Side: Doctor Team Photo
      ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#08170D] text-white overflow-hidden min-h-[480px] sm:min-h-[520px] lg:h-[600px] lg:min-h-[600px] pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 flex items-center border-b border-[#D5B878]/25">
        {/* Right side: High-Res Clean Doctor Photo */}
        <div className="absolute top-0 right-0 w-full sm:w-[62%] lg:w-[58%] h-full z-0">
          <Image
            src="/images/news/hero-doctor-clean.webp"
            alt="NabiOta Health Group Medical Team"
            fill
            className="object-cover object-[center_20%] sm:object-center"
            priority
          />
          {/* Subtle mobile overlay so text remains razor-sharp */}
          <div className="sm:hidden absolute inset-0 bg-[#08170D]/80" />
        </div>

        {/* Mobile botanical texture */}
        <div className="sm:hidden absolute inset-0 z-0 pointer-events-none opacity-40">
          <Image
            src="/images/botanical-gold-bg.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Desktop Elegant Sweeping Curved Mask with Botanical Gold Background (Photo 4) */}
        <div className="hidden sm:block absolute inset-0 z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <clipPath id="newsHeroLeftWingClip">
                <path d="M 0 0 L 620 0 C 710 180, 680 420, 800 600 L 0 600 Z" />
              </clipPath>

              <linearGradient id="newsGoldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFC894" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#D4B06A" stopOpacity="1" />
                <stop offset="75%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.4" />
              </linearGradient>

              <linearGradient id="newsGoldGradLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ECCF93" stopOpacity="0.08" />
                <stop offset="35%" stopColor="#ECCF93" stopOpacity="0.45" />
                <stop offset="75%" stopColor="#DFC894" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.08" />
              </linearGradient>

              <filter id="newsGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Subtle shading overlay that keeps botanical foliage crisp while ensuring high text contrast */}
              <linearGradient id="newsHeroDarkFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#040F07" stopOpacity="0.15" />
                <stop offset="40%" stopColor="#040F07" stopOpacity="0.32" />
                <stop offset="70%" stopColor="#07180D" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0A1E13" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Botanical Gold Background in the Left Wing (xMin anchored for lush left leaves) */}
            <image
              href="/images/botanical-gold-bg.webp"
              x="0"
              y="0"
              width="1440"
              height="600"
              preserveAspectRatio="xMinYMid slice"
              clipPath="url(#newsHeroLeftWingClip)"
              opacity="1"
            />

            {/* Shading overlay for high-contrast text readability */}
            <path
              d="M 0 0 L 620 0 C 710 180, 680 420, 800 600 L 0 600 Z"
              fill="url(#newsHeroDarkFill)"
            />

            {/* Primary Glowing Golden Separator Arc Line */}
            <path
              d="M 620 0 C 710 180, 680 420, 800 600"
              stroke="url(#newsGoldGrad)"
              strokeWidth="2"
              fill="none"
              filter="url(#newsGoldGlow)"
            />

            {/* Secondary Fine Golden Accent Curve */}
            <path
              d="M 645 0 C 735 185, 705 430, 825 600"
              stroke="url(#newsGoldGradLight)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        {/* Content container on left */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-[500px] xl:max-w-[580px] space-y-3">
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
            <h1 className="page-hero-title font-serif text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-white font-normal leading-[1.15] break-words [overflow-wrap:anywhere] hyphens-auto">
              {heroData.title}
            </h1>

            {/* Description */}
            <p className="hero-text-wrap text-white/80 text-xs sm:text-[13.5px] leading-relaxed font-sans max-w-md pt-0.5 break-words [overflow-wrap:anywhere] hyphens-auto">
              {heroData.desc}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MAIN CONTENT AREA (PHOTO 1, 2, 3: 1-IN-1 DESIGN)
          - Header row: "— ALL NEWS / Latest Articles" + Sort dropdown
          - Grid: Left (2-col compact articles, 3 rows max) + Right (Sidebar with Photo 2 Categories)
          - Bottom: Pagination (Photo 3)
      ══════════════════════════════════════════════════════════ */}
      <main id="articles-grid-top" className="flex-1 py-10 sm:py-14 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row (Photo 1) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#EDE8DE]">
            <div>
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                {isRu ? "— ВСЕ СТАТЬИ" : isEn ? "— ALL ARTICLES" : "— ALLE ARTIKEL"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight mt-1">
                {isRu ? "Последние публикации" : isEn ? "Latest Articles" : "Neueste Publikationen"}
              </h2>
            </div>

            {/* Sort by dropdown (Photo 1) */}
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
            
            {/* ── LEFT COLUMN (~67% width): 2-COLUMN COMPACT ARTICLES GRID (3 ROWS MAX) ── */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {paginatedArticles.map((art) => {
                  const isBookmarked = bookmarkedIds.includes(art.id);
                  return (
                    <article
                      key={art.id}
                      className="bg-white rounded-2xl border border-[#EDE8DE] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.05)] transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-0.5"
                    >
                      <div>
                        {/* Article Image - Compact height for sleek card proportion */}
                        <Link href={`/${locale}/news/${art.slug}`} className="block relative h-40 sm:h-44 w-full overflow-hidden bg-neutral-100">
                          <Image
                            src={art.image}
                            alt={art.title}
                            fill
                            className="object-cover group-hover:scale-104 transition-transform duration-500"
                          />
                        </Link>

                        {/* Article Body - Compact padding & line clamping */}
                        <div className="p-3.5 sm:p-4">
                          {/* Row: Category Pill + Date + Bookmark Icon (Photo 1) */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-[#8C6D2B] bg-[#FAF5EC] border border-[#EADBBD] px-2 py-0.5 rounded">
                              {art.category}
                            </span>
                            
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] text-[#6E756D] font-sans">
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

                          {/* Title - 2 lines max */}
                          <Link href={`/${locale}/news/${art.slug}`}>
                            <h3 className="font-serif text-[16px] sm:text-[17px] text-[#132218] font-normal leading-[1.26] hover:text-[#B89650] transition-colors mb-1.5 line-clamp-2">
                              {art.title}
                            </h3>
                          </Link>

                          {/* Excerpt - 2 lines max */}
                          <p className="text-xs text-[#556358] leading-relaxed font-sans line-clamp-2">
                            {art.summary}
                          </p>
                        </div>
                      </div>

                      {/* Read more → (Photo 1) */}
                      <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-0">
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

              {/* ── PAGINATION CONTROLS (ALIGNED TO THE LEFT, PHOTO 3) ── */}
              {totalPages > 1 && (
                <div className="flex items-center justify-start gap-2 pt-8 sm:pt-10">
                  {/* Previous Button (Photo 3) */}
                  <button
                    onClick={() => {
                      setCurrentPage((p) => Math.max(1, p - 1));
                      document.getElementById("articles-grid-top")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="w-10 h-10 rounded-full border border-[#D5DDD6] bg-white flex items-center justify-center text-[#556358] hover:border-[#0D2214] hover:text-[#0D2214] transition-colors disabled:opacity-35 disabled:cursor-not-allowed shadow-xs"
                  >
                    <ArrowLeft className="w-4 h-4 stroke-[1.8]" />
                  </button>

                  {/* Page Numbers (Photo 3: Active filled dark circle, inactive clean numbers) */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const isActive = pageNum === currentPage;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => {
                          setCurrentPage(pageNum);
                          document.getElementById("articles-grid-top")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        aria-current={isActive ? "page" : undefined}
                        className={`w-10 h-10 rounded-full text-xs sm:text-sm transition-all flex items-center justify-center ${
                          isActive
                            ? "bg-[#0D2214] text-white shadow-sm font-semibold scale-100"
                            : "text-[#556358] hover:text-[#0D2214] hover:bg-[#EDE8DE]/40 font-medium"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {/* Next Button (Photo 3) */}
                  <button
                    onClick={() => {
                      setCurrentPage((p) => Math.min(totalPages, p + 1));
                      document.getElementById("articles-grid-top")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className="w-10 h-10 rounded-full border border-[#D5DDD6] bg-white flex items-center justify-center text-[#556358] hover:border-[#0D2214] hover:text-[#0D2214] transition-colors disabled:opacity-35 disabled:cursor-not-allowed shadow-xs"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[1.8]" />
                  </button>
                </div>
              )}
            </div>

            {/* ── RIGHT COLUMN (~33% width): SIDEBAR CARDS (PHOTO 2 CATEGORIES) ── */}
            <aside className="lg:col-span-4 space-y-6 sm:space-y-7">
              
              {/* ── Card 1: News Categories (1-in-1 Match of Photo 2) ── */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EDE8DE] shadow-[0_2px_16px_rgba(0,0,0,0.02)] overflow-hidden">
                {/* Dark Forest Green Header Bar with Circular Gold Badge & Playfair Title (Photo 2) */}
                <div className="relative bg-[#08170D] text-white px-5 py-4 border-b border-[#08170D] flex items-center gap-3.5 overflow-hidden">
                  {/* Botanical leaf silhouette watermark in top-right */}
                  <div className="absolute -top-1 -right-1 w-24 h-24 pointer-events-none opacity-20 select-none">
                    <Image
                      src="/images/areas/botanical-branch-clean.webp"
                      alt=""
                      fill
                      className="object-contain object-top-right"
                    />
                  </div>

                  {/* Circular Gold Badge with Newspaper Icon (Photo 2) */}
                  <div className="relative z-10 w-10 h-10 rounded-full border border-[#D5B878] p-0.5 flex items-center justify-center bg-[#08170D] shadow-sm shrink-0">
                    <div className="w-full h-full rounded-full border border-[#D5B878]/60 flex items-center justify-center text-[#ECCF96]">
                      <Newspaper className="w-4.5 h-4.5 stroke-[1.6]" />
                    </div>
                  </div>

                  <h3 className="relative z-10 font-serif text-[17.5px] sm:text-[18.5px] text-white font-normal tracking-wide">
                    {isRu ? "Категории новостей" : isEn ? "News Categories" : "Nachrichten-Kategorien"}
                  </h3>
                </div>

                {/* Categories List (Photo 2) */}
                <div className="p-3 sm:p-3.5 space-y-1">
                  {categories.map((cat) => {
                    const CatIcon = cat.icon;
                    const isActive =
                      activeCategory.toLowerCase() === cat.id.toLowerCase();
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setCurrentPage(1);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                          isActive
                            ? "bg-[#F3EAD8] text-[#132218] font-bold shadow-xs"
                            : "text-[#425046] hover:bg-[#FAF8F5] hover:text-[#132218] font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <CatIcon
                            className={`w-4 h-4 stroke-[1.7] ${
                              isActive ? "text-[#132218]" : "text-[#7C887E]"
                            }`}
                          />
                          <span>{cat.label}</span>
                        </div>
                        <span
                          className={`text-[11.5px] font-sans ${
                            isActive
                              ? "text-[#9E7A37] font-bold"
                              : "text-[#7C887E]"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── Card 2: Get the latest updates (Newsletter with Botanical Watermark, Photo 1) ── */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EDE8DE] shadow-[0_2px_16px_rgba(0,0,0,0.02)] p-5 sm:p-6 relative overflow-hidden">
                {/* Botanical leaf branch watermark on top-right */}
                <div className="absolute -top-2 -right-2 w-28 h-28 pointer-events-none opacity-25 select-none">
                  <Image
                    src="/images/areas/botanical-branch-clean.webp"
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

              {/* ── Card 3: Featured Innovation with Microscope Image (Photo 1) ── */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-[#08170D] text-white p-5 sm:p-6 overflow-hidden border border-[#D5B878]/30 shadow-lg">
                {/* Microscope Background Photo */}
                <div className="absolute inset-0 pointer-events-none">
                  <Image
                    src="/images/news/cancer-research.webp"
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
                    src="/images/areas/botanical-branch-clean.webp"
                    alt="Botanical Foliage"
                    fill
                    className="object-contain object-bottom-right"
                  />
                </div>

                <div className="relative z-10">
                  {/* Top Round Button with Arrow pointing top-right ↗ (Photo 1) */}
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
              NEWSLETTER FULL-WIDTH BANNER (ABOVE FOOTER)
              - Dark forest green background
              - Left: STAY INFORMED, Subscribe to Our Newsletter, desc
              - Right: Pill input with gold round button
              - Botanical foliage branch on the far right
          ══════════════════════════════════════════════════════════ */}
          <div className="mt-14 sm:mt-18 relative rounded-2xl sm:rounded-3xl bg-[#08170D] text-white overflow-hidden p-6 sm:p-10 lg:p-12 border border-[#D5B878]/30 shadow-lg">
            {/* Botanical Foliage on Far Right */}
            <div className="absolute -right-4 -bottom-6 w-56 sm:w-72 h-56 sm:h-72 pointer-events-none opacity-30 select-none">
              <Image
                src="/images/areas/botanical-branch-clean.webp"
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
