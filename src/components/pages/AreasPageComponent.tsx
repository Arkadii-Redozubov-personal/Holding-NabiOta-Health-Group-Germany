"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  ShieldPlus,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Heart,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";

interface AreasPageComponentProps {
  locale: SupportedLocale;
}

export function AreasPageComponent({ locale }: AreasPageComponentProps) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const isRu = locale === "ru";
  const isEn = locale === "en";

  // ── Hero Translations ──
  const heroData = {
    breadcrumbHome: isRu ? "Главная" : isEn ? "Home" : "Startseite",
    breadcrumbAreas: isRu ? "Направления" : isEn ? "Our Divisions" : "Unternehmensbereiche",
    eyebrow: isRu ? "НАПРАВЛЕНИЯ ХОЛДИНГА" : isEn ? "OUR DIVISIONS" : "UNTERNEHMENSBEREICHE",
    title: isRu
      ? "Разносторонние компетенции. Единое видение."
      : isEn
      ? "Diverse Competencies. One Shared Vision."
      : "Vielfältige Kompetenzen. Eine gemeinsame Vision.",
    description: isRu
      ? "От передовой диагностики до специализированного лечения — наши направления работают в синергии, обеспечивая пациентоориентированную помощь высшего качества."
      : isEn
      ? "From advanced diagnostics to specialized treatment, our divisions work together to provide comprehensive, patient-centered care. Each area brings unique expertise — united by a common goal: better health, brighter futures."
      : "Von hochmoderner Diagnostik bis hin zu spezialisierten Therapien arbeiten unsere Unternehmensbereiche vernetzt zusammen, um eine ganzheitliche Versorgung auf höchstem Niveau zu garantieren.",
    badges: [
      {
        icon: <Users className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "6 Ключевых" : isEn ? "6 Core" : "6 Starke",
        sub: isRu ? "направлений" : isEn ? "Divisions" : "Bereiche",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "100+ Врачей" : isEn ? "100+ Top" : "100+ Ärzte",
        sub: isRu ? "и специалистов" : isEn ? "Specialists" : "& Spezialisten",
      },
      {
        icon: <ShieldPlus className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "Передовые" : isEn ? "State-of-the-Art" : "Modernste",
        sub: isRu ? "технологии" : isEn ? "Technology" : "Technologie",
      },
    ],
  };

  // ── Section 1: 6 Division Cards ──
  const divisionsHeading = {
    eyebrow: isRu ? "НАШИ НАПРАВЛЕНИЯ" : isEn ? "OUR DIVISIONS" : "UNTERNEHMENSBEREICHE",
    title: isRu
      ? "Специализированная помощь для каждого пациента"
      : isEn
      ? "Specialized Care for Every Need"
      : "Spezialisierte Versorgung für jeden Bedarf",
    description: isRu
      ? "Наши медицинские направления охватывают широкий спектр специализаций, гарантируя своевременную помощь ведущих экспертов. Узнайте больше о наших услугах, команде и подходах к лечению."
      : isEn
      ? "Our medical divisions cover a wide range of specialties, ensuring you receive the right care, from the right experts. Explore our departments to learn more about our services, team and approach to treatment."
      : "Unsere medizinischen Fachbereiche decken ein breites Spektrum an Spezialisierungen ab und stellen sicher, dass Sie die richtige Versorgung von den richtigen Experten erhalten. Entdecken Sie unsere Bereiche, um mehr über unsere Leistungen, Teams und Behandlungsansätze zu erfahren.",
    viewAll: isRu ? "Все направления" : isEn ? "View All Divisions" : "Alle Bereiche ansehen",
  };

  const divisions = [
    {
      id: "med-departments",
      icon: Stethoscope,
      image: "/images/areas/medical-departments.jpg",
      href: `/${locale}/areas/medizinische-fachbereiche`,
      title: isRu ? "Медицинские отделения" : isEn ? "Medical Departments" : "Medizinische Fachbereiche",
      desc: isRu
        ? "Комплексная помощь по широкому спектру врачебных специальностей."
        : isEn
        ? "Comprehensive care across a wide range of medical specialties."
        : "Umfassende Versorgung über ein breites Spektrum medizinischer Fachdisziplinen.",
    },
    {
      id: "diagnostics",
      icon: Microscope,
      image: "/images/areas/diagnostics.jpg",
      href: `/${locale}/areas/diagnostik`,
      title: isRu ? "Диагностика" : isEn ? "Diagnostics" : "Diagnostik",
      desc: isRu
        ? "Передовая визуализация и лаборатория для точного и раннего выявления."
        : isEn
        ? "Advanced imaging and laboratory for accurate and early detection."
        : "Modernste Bildgebung und Laboranalytik für präzise und frühe Diagnosen.",
    },
    {
      id: "rehabilitation",
      icon: HeartPulse,
      image: "/images/areas/rehabilitation.jpg",
      href: `/${locale}/areas/rehabilitation`,
      title: isRu ? "Реабилитация" : isEn ? "Rehabilitation" : "Rehabilitation",
      desc: isRu
        ? "Восстановление подвижности, сил и независимости в повседневной жизни."
        : isEn
        ? "Helping you regain strength, mobility and independence."
        : "Wiederherstellung von Mobilität, körperlicher Kraft und Selbstständigkeit.",
    },
    {
      id: "care-seniors",
      icon: Users,
      image: "/images/areas/pflege.jpg",
      href: `/${locale}/areas/pflege`,
      title: isRu ? "Забота о пожилых" : isEn ? "Care for Seniors" : "Seniorenpflege & HomeCare",
      desc: isRu
        ? "Чуткий, индивидуальный уход для лучшего качества жизни."
        : isEn
        ? "Compassionate, personalized care for a better quality of life."
        : "Einfühlsame, persönliche Betreuung für eine spürbar bessere Lebensqualität.",
    },
    {
      id: "surgical-center",
      icon: ShieldPlus,
      image: "/images/areas/surgical-center.jpg",
      href: `/${locale}/areas/medizinische-fachbereiche`,
      title: isRu ? "Хирургический центр" : isEn ? "Surgical Center" : "Chirurgisches Zentrum",
      desc: isRu
        ? "Современные хирургические решения по высочайшим стандартам безопасности."
        : isEn
        ? "Modern surgical solutions with the highest standards of safety."
        : "Moderne operative Lösungen nach den höchsten Qualitäts- und Sicherheitsstandards.",
    },
    {
      id: "research-innovation",
      icon: Lightbulb,
      image: "/images/areas/research-innovation.jpg",
      href: `/${locale}/areas/beratung-projektentwicklung`,
      title: isRu ? "Исследования и инновации" : isEn ? "Research & Innovation" : "Forschung & Innovation",
      desc: isRu
        ? "Развитие медицины на основе науки, технологий и партнерства."
        : isEn
        ? "Advancing medicine through science and collaboration."
        : "Medizinischer Fortschritt durch Wissenschaft, Daten und enge Kooperation.",
    },
  ];

  // ── Section 2: Why NabiOta ──
  const whyNabiota = {
    eyebrow: isRu ? "ПОЧЕМУ НАБИОТА" : isEn ? "WHY NABIOTA" : "WARUM NABIOTA",
    title: isRu
      ? "Больше чем отделения.\nСильная команда."
      : isEn
      ? "More than Departments.\nA Stronger Team."
      : "Mehr als Fachbereiche.\nEin starkes Team.",
    description: isRu
      ? "Наши направления могут быть узкоспециализированными, но мы никогда не работаем изолированно. Благодаря тесному взаимодействию, обмену знаниями и культуре ориентации на пациента мы обеспечиваем медицину, превосходящую ожидания."
      : isEn
      ? "Our divisions may be specialized, but we never work in isolation. Through close collaboration, shared knowledge and a patient-first mindset, we deliver healthcare that goes beyond expectations."
      : "Unsere Fachbereiche sind hochspezialisiert, arbeiten jedoch niemals isoliert. Durch enge Zusammenarbeit, geteiltes Wissen und einen konsequent patientenzentrierten Ansatz ermöglichen wir eine Versorgung, die Maßstäbe setzt.",
    btn: isRu ? "О наших ценностях" : isEn ? "About Our Values" : "Über unsere Werte",
    pillars: [
      {
        icon: Users,
        title: isRu ? "Коллаборация" : isEn ? "Collaboration" : "Kollaboration",
        desc: isRu ? "Разные компетенции. Одна команда." : isEn ? "Different expertise. One team." : "Verschiedene Fachgebiete. Ein Team.",
      },
      {
        icon: ShieldCheck,
        title: isRu ? "Качество" : isEn ? "Quality" : "Qualität",
        desc: isRu ? "Высочайшие стандарты во всем." : isEn ? "Highest standards in everything we do." : "Höchste Standards in allem, was wir tun.",
      },
      {
        icon: Lightbulb,
        title: isRu ? "Инновации" : isEn ? "Innovation" : "Innovation",
        desc: isRu ? "Современные технологии. Лучшие результаты." : isEn ? "Modern technology. Better outcomes." : "Moderne Technologie. Bessere Ergebnisse.",
      },
      {
        icon: Heart,
        title: isRu ? "Люди" : isEn ? "People" : "Mensch im Fokus",
        desc: isRu ? "Наши пациенты — наш главный приоритет." : isEn ? "Our patients, our priority." : "Unsere Patienten – unsere oberste Priorität.",
      },
    ],
  };

  // ── Section 3: Patient Stories ──
  const patientStories = {
    eyebrow: isRu ? "ИСТОРИИ ПАЦИЕНТОВ" : isEn ? "PATIENT STORIES" : "PATIENTENSTIMMEN",
    title: isRu ? "Реальные люди.\nРеальные истории." : isEn ? "Real People.\nReal Impact." : "Echte Menschen.\nEchte Wirkung.",
    desc: isRu
      ? "Узнайте от наших пациентов об их опыте лечения в NabiOta Health Group и качестве заботы в наших отделениях."
      : isEn
      ? "Hear from our patients about their experience with NabiOta Health Group and the care they received across our divisions."
      : "Erfahren Sie von unseren Patientinnen und Patienten, wie sie die Behandlung und Betreuung in den verschiedenen Fachbereichen der NabiOta Gruppe erlebt haben.",
    stories: [
      {
        name: "Anna Müller",
        role: isRu ? "Пациентка, Ортопедия" : isEn ? "Patient, Orthopedics" : "Patientin, Orthopädie",
        photo: "/images/testimonials/anna-mueller.jpg",
        quote: isRu
          ? "Врачи и медицинский персонал были невероятно профессиональны и заботливы. Я чувствовала искреннюю поддержку на каждом этапе — от первой диагностики до полного выздоровления. Безмерно благодарна за их чуткость и экспертность."
          : isEn
          ? "The doctors and staff were incredibly professional and caring. I felt supported at every step, from diagnosis to recovery. I'm truly grateful for their expertise and kindness."
          : "Die Ärztinnen, Ärzte und das gesamte Team waren unglaublich professionell und einfühlsam. Ich fühlte mich bei jedem Schritt von der Diagnose bis zur Genesung bestens begleitet. Ein großes Dankeschön für die herausragende Fürsorge.",
      },
      {
        name: "Thomas Becker",
        role: isRu ? "Пациент, Кардиология" : isEn ? "Patient, Cardiology" : "Patient, Kardiologie",
        photo: "/images/testimonials/thomas-becker.jpg",
        quote: isRu
          ? "Уровень медицинской помощи превзошел все ожидания. Особенно ценю четкий, структурированный и по-настоящему человечный подход команды к лечению."
          : isEn
          ? "The level of care was outstanding. I especially appreciate the structured and personalized approach of the team."
          : "Die Behandlungsqualität war absolut herausragend. Ganz besonders habe ich den strukturierten und gleichzeitig sehr herzlichen, individuellen Ansatz des gesamten Teams geschätzt.",
      },
    ],
  };

  // ── Section 4: Pre-footer CTA ──
  const ctaData = {
    eyebrow: isRu ? "СВЯЖИТЕСЬ С НАМИ" : isEn ? "GET IN TOUCH" : "KONTAKT AUFNEHMEN",
    title: isRu ? "Ваше здоровье. Наша миссия." : isEn ? "Your Health. Our Mission." : "Ihre Gesundheit. Unsere Mission.",
    desc: isRu
      ? "Есть вопросы или требуется консультация? Наша команда готова помочь вам выбрать нужное направление."
      : isEn
      ? "Have questions or need assistance?\nOur team is here to help you find the right care."
      : "Haben Sie Fragen oder benötigen Sie Unterstützung?\nUnser Team berät Sie gerne bei der Suche nach der passenden Versorgung.",
    btn: isRu ? "Связаться с нами" : isEn ? "Contact Us" : "Kontakt aufnehmen",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />

      {/* ── Page Hero with Badges ── */}
      <PageHero
        breadcrumb={
          <Breadcrumb
            items={[
              { label: heroData.breadcrumbHome, href: `/${locale}` },
              { label: heroData.breadcrumbAreas },
            ]}
          />
        }
        title={heroData.title}
        description={heroData.description}
        badges={heroData.badges}
        imageSrc="/images/heroes/hero-areas.jpg"
        imageAlt="NabiOta Health Group Germany Unternehmensbereiche"
      />

      <main className="flex-1">
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: SPECIALIZED CARE FOR EVERY NEED (6 CARDS)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-24 bg-[#FAF8F5]">
          <Container size="wide">
            {/* Header row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-16">
              <div className="lg:col-span-5 space-y-2">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                  {divisionsHeading.eyebrow}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#132218] font-normal leading-tight">
                  {divisionsHeading.title}
                </h2>
              </div>

              <div className="lg:col-span-5 border-l-2 border-[#D5B878]/60 pl-6 sm:pl-8">
                <p className="text-sm sm:text-[15px] text-[#556358] leading-relaxed font-sans">
                  {divisionsHeading.description}
                </p>
              </div>

              <div className="lg:col-span-2 lg:text-right">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#142318] hover:text-[#B89650] transition-colors group"
                >
                  <span>{divisionsHeading.viewAll}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 6 Cards Grid (3 cols x 2 rows) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {divisions.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group bg-white rounded-2xl p-3 sm:p-3.5 border border-[#EDE8DE] hover:border-[#D5B878] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(213,184,120,0.14)] transition-all duration-300 flex flex-col"
                  >
                    {/* Image Top */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0C1C11]/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Card Content Row */}
                    <div className="pt-4 pb-2 px-1 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* Circular Dark Disc Icon Badge */}
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0C1C11] border border-[#D5B878]/60 flex items-center justify-center text-[#ECCF96] shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-5 h-5 stroke-[1.6]" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-[15px] sm:text-base font-bold text-[#142318] group-hover:text-[#B89650] transition-colors truncate">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#6E756D] leading-snug line-clamp-2 mt-0.5 font-sans">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Right Round Arrow Button */}
                      <div className="w-8 h-8 rounded-full border border-[#142318]/15 group-hover:border-[#D5B878] group-hover:bg-[#D5B878] group-hover:text-[#0C1C11] flex items-center justify-center text-[#142318] transition-all shrink-0 ml-1">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: WHY NABIOTA (MORE THAN DEPARTMENTS)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-8 sm:py-12 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl border border-[#EDE8DE]">
              {/* Left Dark Forest Overlay with Background Building Photo */}
              <div className="lg:col-span-7 relative bg-[#09170E] text-white p-8 sm:p-12 lg:p-14 overflow-hidden flex flex-col justify-between">
                {/* Background Campus Image with Curved Soft Gradient */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <Image
                    src="/images/hero/campus.jpg"
                    alt="NabiOta Campus"
                    fill
                    className="object-cover object-left"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#09170E]/90 via-[#09170E]/95 to-[#09170E]" />
                </div>

                <div className="relative z-10 max-w-xl space-y-4">
                  <span className="text-[10.5px] sm:text-xs font-bold tracking-[0.24em] text-[#D5B878] uppercase block">
                    {whyNabiota.eyebrow}
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-white font-normal leading-[1.15] whitespace-pre-line">
                    {whyNabiota.title}
                  </h2>

                  <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed font-sans pt-1">
                    {whyNabiota.description}
                  </p>
                </div>

                <div className="relative z-10 pt-8">
                  <Link
                    href={`/${locale}/values`}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span>{whyNabiota.btn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Ivory Block with 4 Core Pillars & Decorative Botanical Branch */}
              <div className="lg:col-span-5 bg-white relative p-8 sm:p-12 lg:p-14 flex flex-col justify-center overflow-hidden">
                {/* Subtle Leaf graphic watermark in bottom right */}
                <div className="absolute -bottom-6 -right-6 w-44 h-44 pointer-events-none opacity-25">
                  <Image
                    src="/images/botanical-gold-bg.png"
                    alt="Botanical"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                  {whyNabiota.pillars.map((pillar, idx) => {
                    const PillarIcon = pillar.icon;
                    return (
                      <div key={idx} className="space-y-2.5">
                        <div className="w-12 h-12 rounded-full border border-[#142318]/15 bg-[#FCFAF6] shadow-sm flex items-center justify-center text-[#142318]">
                          <PillarIcon className="w-5 h-5 stroke-[1.6]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#142318] text-base">
                            {pillar.title}
                          </h4>
                          <p className="text-xs sm:text-[12.5px] text-[#6E756D] leading-snug font-sans mt-0.5">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: PATIENT STORIES (REAL PEOPLE. REAL IMPACT.)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-24 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (Title & Controls) */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                  {patientStories.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#132218] font-normal leading-tight whitespace-pre-line">
                  {patientStories.title}
                </h2>

                <p className="text-sm sm:text-[15px] text-[#556358] leading-relaxed font-sans max-w-sm">
                  {patientStories.desc}
                </p>

                {/* Slider Controls */}
                <div className="flex items-center gap-3 pt-6">
                  <button
                    onClick={() => setActiveStoryIndex(0)}
                    aria-label="Previous slide"
                    className="w-8 h-8 rounded-full border border-[#142318]/25 hover:border-[#142318] hover:bg-[#142318] hover:text-white flex items-center justify-center text-[#142318] transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveStoryIndex(1)}
                    aria-label="Next slide"
                    className="w-8 h-8 rounded-full border border-[#142318]/25 hover:border-[#142318] hover:bg-[#142318] hover:text-white flex items-center justify-center text-[#142318] transition-all"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2 pl-3 text-xs font-mono font-medium text-[#7C857E]">
                    <span className={activeStoryIndex === 0 ? "text-[#142318] font-bold" : ""}>
                      01
                    </span>
                    <span className={activeStoryIndex === 1 ? "text-[#142318] font-bold" : ""}>
                      02
                    </span>
                    <span>03</span>
                  </div>
                </div>
              </div>

              {/* Right Column (2 Side-by-Side Testimonial Cards) */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {patientStories.stories.map((story, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#EDE8DE] p-6 sm:p-7 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between"
                  >
                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                      {/* Patient Portrait */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 shadow-sm border border-[#EDE8DE]">
                        <Image
                          src={story.photo}
                          alt={story.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Quote & Text */}
                      <div className="space-y-2">
                        <span className="font-serif text-3xl sm:text-4xl text-[#D5B878] leading-none block select-none">
                          “
                        </span>
                        <p className="text-xs sm:text-[13px] text-[#556358] leading-relaxed font-sans">
                          {story.quote}
                        </p>
                        <div className="pt-2">
                          <h4 className="font-bold text-sm text-[#142318]">
                            {story.name}
                          </h4>
                          <span className="text-[11px] text-[#869088] font-sans block">
                            {story.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4: PRE-FOOTER CTA RIBBON (GET IN TOUCH)
        ══════════════════════════════════════════════════════════ */}
        <section className="pb-16 sm:pb-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="bg-[#07160D] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl border border-[#D5B878]/30">
              {/* Botanical Leaf Silhouettes on Left & Right */}
              <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden mix-blend-screen">
                <Image
                  src="/images/bacground.png"
                  alt="Watermark"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                {/* Left/Middle Title and Subtitle */}
                <div className="space-y-2">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                    {ctaData.eyebrow}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                    {ctaData.title}
                  </h2>
                </div>

                <div className="max-w-md">
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line font-sans">
                    {ctaData.desc}
                  </p>
                </div>

                {/* Right Button */}
                <div className="flex-shrink-0">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span>{ctaData.btn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
