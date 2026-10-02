"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  Briefcase,
  Globe,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Heart,
  Lightbulb,
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
        icon: <Lightbulb className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "Передовые" : isEn ? "State-of-the-Art" : "Modernste",
        sub: isRu ? "технологии" : isEn ? "Technology" : "Technologie",
      },
    ],
  };

  // ── Section 1: 6 Division Cards (Restoring Original Cards 4, 5, 6 from Photo 2) ──
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
        ? "Комплексная амбулаторная помощь по широкому спектру врачебных специальностей."
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
      id: "pflege",
      icon: Users,
      image: "/images/areas/pflege.jpg",
      href: `/${locale}/areas/pflege`,
      title: isRu ? "Уход и патронаж" : isEn ? "Care for Seniors" : "Pflege",
      desc: isRu
        ? "Квалифицированный амбулаторный уход и забота в привычной домашней обстановке."
        : isEn
        ? "Compassionate, personalized care and home care for a better quality of life."
        : "Qualifizierte ambulante Pflege und HomeCare im vertrauten häuslichen Umfeld.",
    },
    {
      id: "consulting",
      icon: Briefcase,
      image: "/images/areas/consulting.jpg",
      href: `/${locale}/areas/beratung-projektentwicklung`,
      title: isRu ? "Консалтинг и девелопмент" : isEn ? "Consulting & Project Development" : "Beratung & Projektentwicklung",
      desc: isRu
        ? "Проектирование, развитие и управление современными медицинскими центрами."
        : isEn
        ? "Strategic development, planning and management of modern healthcare facilities."
        : "Konzeption, Bau und Management moderner Gesundheitsimmobilien und MVZ.",
    },
    {
      id: "international",
      icon: Globe,
      image: "/images/areas/international.jpg",
      href: `/${locale}/areas/internationale-kooperationen`,
      title: isRu ? "Международное сотрудничество" : isEn ? "International Cooperation" : "Internationale Kooperationen",
      desc: isRu
        ? "Трансграничные партнерства, телемедицина и глобальный обмен опытом."
        : isEn
        ? "Cross-border medical partnerships, telemedicine and global healthcare network."
        : "Grenzüberschreitende Partnerschaften, Telemedizin und weltweiter Wissenstransfer.",
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
      ? "Наши направления узкоспециализированы, но мы никогда не работаем изолированно. Благодаря тесному взаимодействию, обмену знаниями и культуре ориентации на пациента мы обеспечиваем медицину, превосходящую ожидания."
      : isEn
      ? "Our divisions may be specialized, but we never work in isolation. Through close collaboration, shared knowledge and a patient-first mindset, we deliver healthcare that goes beyond expectations."
      : "Unsere Fachbereiche sind hochspezialisiert, arbeiten jedoch niemals isoliert. Durch enge Zusammenarbeit, geteiltes Wissen und einen konsequent patientenzentrierten Ansatz ermöglichen wir eine Versorgung, die Maßstäbe setzt.",
    btn: isRu ? "О наших ценностях" : isEn ? "About Our Values" : "Über unsere Werte",
    pillars: [
      {
        icon: Users,
        title: isRu ? "Коллаборация" : isEn ? "Collaboration" : "Collaboration",
        desc: isRu ? "Разные компетенции. Одна команда." : isEn ? "Different expertise. One team." : "Different expertise. One team.",
      },
      {
        icon: ShieldCheck,
        title: isRu ? "Качество" : isEn ? "Quality" : "Quality",
        desc: isRu ? "Высочайшие стандарты во всем." : isEn ? "Highest standards in everything we do." : "Highest standards in everything we do.",
      },
      {
        icon: Lightbulb,
        title: isRu ? "Инновации" : isEn ? "Innovation" : "Innovation",
        desc: isRu ? "Современные технологии. Лучшие результаты." : isEn ? "Modern technology. Better outcomes." : "Modern technology. Better outcomes.",
      },
      {
        icon: Heart,
        title: isRu ? "Люди" : isEn ? "People" : "People",
        desc: isRu ? "Наши пациенты — наш главный приоритет." : isEn ? "Our patients, our priority." : "Our patients, our priority.",
      },
    ],
  };

  // ── Section 3: Patient Stories ──
  const patientStories = {
    eyebrow: isRu ? "ИСТОРИИ ПАЦИЕНТОВ" : isEn ? "PATIENT STORIES" : "PATIENT STORIES",
    title: isRu ? "Реальные люди.\nРеальные истории." : isEn ? "Real People.\nReal Impact." : "Real People.\nReal Impact.",
    desc: isRu
      ? "Узнайте от наших пациентов об их опыте лечения в NabiOta Health Group и качестве заботы в наших отделениях."
      : isEn
      ? "Hear from our patients about their experience with NabiOta Health Group and the care they received across our divisions."
      : "Hear from our patients about their experience with NabiOta Health Group and the care they received across our divisions.",
    stories: [
      {
        id: 1,
        name: "Anna Müller",
        role: isRu ? "Пациентка, Ортопедия" : isEn ? "Patient, Orthopedics" : "Patient, Orthopedics",
        photo: "/images/testimonials/anna-mueller.jpg",
        quote: isRu
          ? "Врачи и медицинский персонал были невероятно профессиональны и заботливы. Я чувствовала искреннюю поддержку на каждом этапе — от первой диагностики до полного выздоровления. Безмерно благодарна за их чуткость и экспертность."
          : isEn
          ? "The doctors and staff were incredibly professional and caring. I felt supported at every step, from diagnosis to recovery. I'm truly grateful for their expertise and kindness."
          : "The doctors and staff were incredibly professional and caring. I felt supported at every step, from diagnosis to recovery. I'm truly grateful for their expertise and kindness.",
      },
      {
        id: 2,
        name: "Thomas Becker",
        role: isRu ? "Пациент, Кардиология" : isEn ? "Patient, Cardiology" : "Patient, Cardiology",
        photo: "/images/testimonials/thomas-becker.jpg",
        quote: isRu
          ? "Уровень медицинской помощи превзошел все ожидания. Особенно ценю четкий, структурированный и по-настоящему человечный подход команды к лечению."
          : isEn
          ? "The level of care was outstanding. I especially appreciate the structured and personalized approach of the team."
          : "The level of care was outstanding. I especially appreciate the structured and personalized approach of the team.",
      },
      {
        id: 3,
        name: "Elena Fischer",
        role: isRu ? "Пациентка, Реабилитация" : isEn ? "Patient, Rehabilitation" : "Patient, Rehabilitation",
        photo: "/images/testimonials/elena-fischer.jpg",
        quote: isRu
          ? "После операции восстановительный процесс прошел быстро и без осложнений. Индивидуальный план тренировок и поддержка физиотерапевтов вернули мне радость активной жизни."
          : isEn
          ? "After surgery, my rehabilitation was rapid and seamless. The dedicated therapy plan and personal attention gave me my active lifestyle back completely."
          : "After surgery, my rehabilitation was rapid and seamless. The dedicated therapy plan and personal attention gave me my active lifestyle back completely.",
      },
    ],
  };

  const totalStories = patientStories.stories.length;

  const handleNextStory = () => {
    setActiveStoryIndex((prev) => (prev + 1) % totalStories);
  };

  const handlePrevStory = () => {
    setActiveStoryIndex((prev) => (prev - 1 + totalStories) % totalStories);
  };

  // Get current pair of visible stories for desktop view
  const currentFirstStory = patientStories.stories[activeStoryIndex];
  const currentSecondStory = patientStories.stories[(activeStoryIndex + 1) % totalStories];

  // ── Section 4: Pre-footer CTA ──
  const ctaData = {
    eyebrow: isRu ? "СВЯЖИТЕСЬ С НАМИ" : isEn ? "GET IN TOUCH" : "GET IN TOUCH",
    title: isRu ? "Ваше здоровье. Наша миссия." : isEn ? "Your Health. Our Mission." : "Your Health. Our Mission.",
    desc: isRu
      ? "Есть вопросы или требуется помощь?\nНаша команда готова помочь вам выбрать нужное направление."
      : isEn
      ? "Have questions or need assistance?\nOur team is here to help you find the right care."
      : "Have questions or need assistance?\nOur team is here to help you find the right care.",
    btn: isRu ? "Связаться с нами" : isEn ? "Contact Us" : "Contact Us",
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

      <main className="flex-1 bg-[#FAF8F5]">
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: SPECIALIZED CARE FOR EVERY NEED (6 CARDS)
            Reduced vertical padding as requested
        ══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
          <Container size="wide">
            {/* Header row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-8 sm:mb-10">
              <div className="lg:col-span-5 space-y-1.5">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                  {divisionsHeading.eyebrow}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#132218] font-normal leading-tight">
                  {divisionsHeading.title}
                </h2>
              </div>

              <div className="lg:col-span-5 border-l-2 border-[#D5B878]/60 pl-5 sm:pl-7">
                <p className="text-xs sm:text-sm text-[#556358] leading-relaxed font-sans">
                  {divisionsHeading.description}
                </p>
              </div>

              <div className="lg:col-span-2 lg:text-right">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#142318] hover:text-[#B89650] transition-colors group"
                >
                  <span>{divisionsHeading.viewAll}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 6 Cards Grid (3 cols x 2 rows, matching exact layout & restored original cards 4, 5, 6) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {divisions.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group bg-white rounded-2xl p-3 sm:p-3.5 border border-[#EDE8DE] hover:border-[#D5B878] shadow-[0_3px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(213,184,120,0.14)] transition-all duration-300 flex flex-col"
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
                    <div className="pt-3.5 pb-1.5 px-1 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Circular Dark Disc Icon Badge */}
                        <div className="w-10 h-10 rounded-full bg-[#0C1C11] border border-[#D5B878]/60 flex items-center justify-center text-[#ECCF96] shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-4.5 h-4.5 stroke-[1.6]" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-[14.5px] sm:text-[15px] font-bold text-[#142318] group-hover:text-[#B89650] transition-colors truncate">
                            {item.title}
                          </h3>
                          <p className="text-[11.5px] text-[#6E756D] leading-snug line-clamp-2 mt-0.5 font-sans">
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
            SECTION 2: WHY NABIOTA (PANORAMIC FULL-WIDTH AS IN PHOTO 3)
            - Completely flush to the edges (container прилегает к краям)
            - Left: Clear building photo
            - Middle: Dark green block with smooth convex curve & gold rim
            - Right: 4 pillars on ivory + lush botanical leaves on far right
            - Reduced vertical height
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#FAF8F5] py-4 sm:py-6 overflow-hidden">
          <div className="w-full relative flex flex-col lg:flex-row items-stretch min-h-[360px] lg:min-h-[400px] bg-[#FAF8F5]">
            {/* 1. Left Hospital Campus Photo (Clear, crisp, full color) */}
            <div className="relative w-full lg:w-[30%] xl:w-[32%] min-h-[260px] lg:min-h-[400px] shrink-0 overflow-hidden">
              <Image
                src="/images/hero/campus.jpg"
                alt="NabiOta Healthcare Campus"
                fill
                className="object-cover object-left"
                priority
              />
            </div>

            {/* 2. Middle Dark Forest Block with Convex Arc Curve & Gold Border Rim */}
            <div className="relative flex-1 z-10 bg-[#08170D] text-white p-7 sm:p-9 lg:p-11 flex flex-col justify-center lg:rounded-r-[100px] xl:rounded-r-[120px] border-r-2 border-[#D5B878]/70 shadow-[8px_0_30px_rgba(0,0,0,0.18)]">
              <div className="max-w-xl space-y-3">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {whyNabiota.eyebrow}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] text-white font-normal leading-[1.15] whitespace-pre-line">
                  {whyNabiota.title}
                </h2>

                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed font-sans max-w-lg">
                  {whyNabiota.description}
                </p>

                <div className="pt-2 sm:pt-3">
                  <Link
                    href={`/${locale}/values`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span>{whyNabiota.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Right Ivory Block with 4 Core Pillars & Botanical Leaves Background */}
            <div className="relative w-full lg:w-[40%] xl:w-[38%] bg-[#FAF8F5] p-6 sm:p-8 lg:p-10 flex items-center shrink-0 overflow-hidden">
              {/* Botanical leaves coming in from the right edge (as in Photo 3) */}
              <div className="absolute right-0 top-0 bottom-0 w-44 sm:w-56 pointer-events-none opacity-85 overflow-hidden flex items-center justify-end">
                <svg
                  viewBox="0 0 200 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-auto text-[#7D9981]"
                >
                  <path
                    d="M190 20C170 80 150 140 160 220C170 300 190 350 200 360"
                    stroke="#5A775E"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  {/* Leaf 1 */}
                  <path
                    d="M175 60C140 50 110 65 95 90C115 105 145 105 170 80Z"
                    fill="#8BA88F"
                    fillOpacity="0.75"
                  />
                  <path d="M172 75C145 78 120 83 105 88" stroke="#5A775E" strokeWidth="1.5" />
                  {/* Leaf 2 */}
                  <path
                    d="M165 110C130 115 105 140 95 170C120 175 150 165 165 130Z"
                    fill="#759379"
                    fillOpacity="0.8"
                  />
                  <path d="M162 125C138 138 120 150 102 165" stroke="#48634C" strokeWidth="1.5" />
                  {/* Leaf 3 */}
                  <path
                    d="M160 180C125 175 95 195 80 230C105 240 140 235 158 200Z"
                    fill="#92AF96"
                    fillOpacity="0.75"
                  />
                  {/* Leaf 4 */}
                  <path
                    d="M162 250C130 260 110 290 105 325C130 330 155 315 168 275Z"
                    fill="#7A987E"
                    fillOpacity="0.85"
                  />
                  {/* Leaf 5 */}
                  <path
                    d="M170 290C145 305 130 335 130 360C155 365 175 345 180 315Z"
                    fill="#85A289"
                    fillOpacity="0.7"
                  />
                </svg>
              </div>

              {/* 2x2 Grid Pillars */}
              <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:gap-x-8 sm:gap-y-6 w-full max-w-sm">
                {whyNabiota.pillars.map((pillar, idx) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div key={idx} className="space-y-1.5">
                      <div className="w-10 h-10 rounded-full border border-[#142318]/15 bg-white shadow-sm flex items-center justify-center text-[#142318]">
                        <PillarIcon className="w-4.5 h-4.5 stroke-[1.6]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#142318] text-sm sm:text-[14.5px]">
                          {pillar.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#6E756D] leading-snug font-sans mt-0.5">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: PATIENT STORIES (AS IN PHOTO 4)
            - Large photos occupying almost half of the card
            - Switchable interactive review carousel with smooth transition
            - Floating navigation arrow between cards
            - Reduced vertical height
        ══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column (Title & Controls) */}
              <div className="lg:col-span-4 space-y-3">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                  {patientStories.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#132218] font-normal leading-tight whitespace-pre-line">
                  {patientStories.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#556358] leading-relaxed font-sans max-w-sm">
                  {patientStories.desc}
                </p>

                {/* Slider Navigation Controls */}
                <div className="flex items-center gap-3 pt-4 sm:pt-6">
                  <button
                    onClick={handlePrevStory}
                    aria-label="Previous patient story"
                    className="w-8 h-8 rounded-full border border-[#142318]/25 hover:border-[#142318] hover:bg-[#142318] hover:text-white flex items-center justify-center text-[#142318] transition-all cursor-pointer shadow-sm"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNextStory}
                    aria-label="Next patient story"
                    className="w-8 h-8 rounded-full border border-[#142318]/25 hover:border-[#142318] hover:bg-[#142318] hover:text-white flex items-center justify-center text-[#142318] transition-all cursor-pointer shadow-sm"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2.5 pl-3 text-xs font-mono font-medium text-[#7C857E]">
                    {patientStories.stories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveStoryIndex(idx)}
                        className={`transition-all cursor-pointer ${
                          activeStoryIndex === idx
                            ? "text-[#142318] font-bold text-sm underline decoration-[#D5B878] underline-offset-4"
                            : "hover:text-[#142318]"
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Cards with LARGE photos as in Photo 4 */}
              <div className="lg:col-span-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* First Active Story Card */}
                  <div className="bg-white rounded-2xl border border-[#EDE8DE] p-4 sm:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch transition-all duration-300">
                    {/* Large Photo filling significant card height (as in Photo 4) */}
                    <div className="relative w-full sm:w-44 md:w-48 h-52 sm:h-60 rounded-xl overflow-hidden shrink-0 shadow-sm border border-[#EDE8DE]">
                      <Image
                        src={currentFirstStory.photo}
                        alt={currentFirstStory.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 240px"
                      />
                    </div>

                    {/* Story Content */}
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <span className="font-serif text-3xl sm:text-4xl text-[#D5B878] leading-none block select-none mb-1">
                          “
                        </span>
                        <p className="text-xs sm:text-[12.5px] text-[#556358] leading-relaxed font-sans italic">
                          "{currentFirstStory.quote}"
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#EDE8DE]/60 mt-2">
                        <h4 className="font-bold text-sm text-[#142318]">
                          {currentFirstStory.name}
                        </h4>
                        <span className="text-[11px] text-[#869088] font-sans block">
                          {currentFirstStory.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Second Story Card */}
                  <div className="bg-white rounded-2xl border border-[#EDE8DE] p-4 sm:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch transition-all duration-300 relative">
                    {/* Large Photo */}
                    <div className="relative w-full sm:w-44 md:w-48 h-52 sm:h-60 rounded-xl overflow-hidden shrink-0 shadow-sm border border-[#EDE8DE]">
                      <Image
                        src={currentSecondStory.photo}
                        alt={currentSecondStory.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 240px"
                      />
                    </div>

                    {/* Story Content */}
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <span className="font-serif text-3xl sm:text-4xl text-[#D5B878] leading-none block select-none mb-1">
                          “
                        </span>
                        <p className="text-xs sm:text-[12.5px] text-[#556358] leading-relaxed font-sans italic">
                          "{currentSecondStory.quote}"
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#EDE8DE]/60 mt-2">
                        <h4 className="font-bold text-sm text-[#142318]">
                          {currentSecondStory.name}
                        </h4>
                        <span className="text-[11px] text-[#869088] font-sans block">
                          {currentSecondStory.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating round next arrow button (as in Photo 4 between/next to the cards) */}
                <button
                  onClick={handleNextStory}
                  aria-label="Next story"
                  className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-[#142318]/20 shadow-md items-center justify-center text-[#142318] hover:bg-[#D5B878] hover:border-[#D5B878] hover:text-[#0C1C11] transition-all cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4: PRE-FOOTER CTA RIBBON (GET IN TOUCH)
            Reduced vertical padding
        ══════════════════════════════════════════════════════════ */}
        <section className="pb-10 sm:pb-14 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="bg-[#07160D] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 relative overflow-hidden shadow-xl border border-[#D5B878]/30">
              {/* Botanical Leaf Silhouettes on Left & Right */}
              <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden mix-blend-screen">
                <Image
                  src="/images/bacground.png"
                  alt="Watermark"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left/Middle Title and Subtitle */}
                <div className="space-y-1.5">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                    {ctaData.eyebrow}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                    {ctaData.title}
                  </h2>
                </div>

                <div className="max-w-md">
                  <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-light whitespace-pre-line font-sans">
                    {ctaData.desc}
                  </p>
                </div>

                {/* Right Button */}
                <div className="flex-shrink-0">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
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
