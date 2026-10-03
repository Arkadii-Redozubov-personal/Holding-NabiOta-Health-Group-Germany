"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  Heart,
  Activity,
  FileText,
  User,
  Phone,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Microscope,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";
import { businessAreas } from "@/data/areas";

// ── Custom SVG Modality Icons ──
function MriScannerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M4 14h6M14 14h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function CtScannerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M9.5 9.5l5 5" />
    </svg>
  );
}

function UltrasoundWaveIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <path d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M10 12c0-1.1.9-2 2-2s2 .9 2 2" />
      <circle cx="12" cy="12" r="1" />
      <path d="M12 13v7M9 20h6" />
    </svg>
  );
}

function XrayPulseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 7v10M9 9h6M8 12h8M10 15h4" />
    </svg>
  );
}

function TestTubesIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 3h6M10 3v12a2 2 0 0 0 4 0V3M14 9h-4" />
      <path d="M5 6h4M7 6v9a2 2 0 0 0 4 0V6" />
      <path d="M15 6h4M17 6v9a2 2 0 0 0 4 0V6" />
    </svg>
  );
}

function HeartCardioIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M7 12h2l1.5-3 2 6 1.5-3H17" />
    </svg>
  );
}

function ScannerArchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V11a8 8 0 0 1 16 0v9" />
      <path d="M8 20v-9a4 4 0 0 1 8 0v9" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

function GoldCircleCheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" stroke="#B89650" strokeWidth="1.2" />
      <path d="M6.5 10.2L8.8 12.5L13.5 7.8" stroke="#B89650" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface Props {
  locale?: SupportedLocale;
}

export function DiagnostikPageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const area = businessAreas.find((a) => a.slug === "diagnostik") || {
    id: "diagnostik",
    slug: "diagnostik",
    title: "Diagnostik",
    subtitle: "Präzisionstechnologie für fundierte Befunde",
    description:
      "Hochmoderne bildgebende Diagnostik mit CT, MRT und digitalem Röntgen für frühzeitige und exakte therapeutische Entscheidungen.",
    image: "/images/services/diagnostik.jpg",
  };

  // ── Hero Content ──
  const heroData = {
    title: isRu ? "Диагностика" : isEn ? "Diagnostics" : "Diagnostik",
    subtitle: isRu
      ? "Высокотехнологичная визуализация экспертного уровня"
      : isEn
      ? "High-Precision Diagnostic Imaging"
      : "Präzisionstechnologie für fundierte Befunde",
    description: isRu
      ? "NabiOta® Diagnostics GmbH предоставляет полный спектр высокоточной лучевой и функциональной диагностики: 3-Тесла МРТ с широким туннелем, низкодозовая КТ, цифровой рентген и экспертное УЗИ по немецким стандартам."
      : isEn
      ? "NabiOta® Diagnostics GmbH delivers university-grade medical imaging: 3-Tesla wide-bore MRI, low-dose CT, direct digital radiography, and high-end ultrasound according to rigorous German clinical standards."
      : "Die NabiOta® Diagnostics GmbH bietet modernste Bildgebung auf universitärem Niveau. Mit Niedrigdosis-CT, High-Field 3-Tesla-MRT und volldigitalem Röntgen liefern wir präzise Schnittbilder für fundierte Diagnosen und gezielte Therapien.",
    badges: [
      {
        icon: <MriScannerIcon className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "3-Тесла МРТ" : isEn ? "3-Tesla MRI" : "3-Tesla-MRT",
        sub: isRu ? "Макс. детализация" : isEn ? "High-Field Precision" : "High-Field Präzision",
      },
      {
        icon: <Clock className="w-5 h-5 text-[#ECCF96]" />,
        title: "< 24h",
        sub: isRu ? "Сроки заключения" : isEn ? "Report Turnaround" : "Befunderstellung",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
        title: "Low-Dose",
        sub: isRu ? "Бережная КТ" : isEn ? "Minimal Dose CT" : "Schonende CT",
      },
    ],
  };

  // ── Section 1: 6 Modality Cards matching Photo 2 ──
  const procedures = [
    {
      id: "mrt",
      title: "MRT",
      desc: isRu
        ? "Снимки высокого разрешения для точной диагностики."
        : isEn
        ? "High-resolution imaging for detailed diagnosis."
        : "Hochauflösende Bilder für eine detaillierte Diagnose.",
      image: "/images/diagnostik/modality-mrt.jpg",
      icon: MriScannerIcon,
    },
    {
      id: "ct",
      title: "CT",
      desc: isRu
        ? "Быстрые и точные послойные 3D-сканы."
        : isEn
        ? "Fast and precise cross-sectional imaging."
        : "Schnelle und präzise Querschnittsbilder.",
      image: "/images/diagnostik/modality-ct.jpg",
      icon: CtScannerIcon,
    },
    {
      id: "ultraschall",
      title: isRu ? "УЗИ" : isEn ? "Ultrasound" : "Ultraschall",
      desc: isRu
        ? "Бережно, надежно и универсально в применении."
        : isEn
        ? "Gentle, reliable, and versatile application."
        : "Schonend, zuverlässig und vielseitig einsetzbar.",
      image: "/images/diagnostik/modality-ultraschall.jpg",
      icon: UltrasoundWaveIcon,
    },
    {
      id: "roentgen",
      title: isRu ? "Цифровой рентген" : isEn ? "Digital X-Ray" : "Digitales Röntgen",
      desc: isRu
        ? "Быстрое обследование с минимальной лучевой нагрузкой."
        : isEn
        ? "Rapid examination with minimal radiation exposure."
        : "Schnelle Untersuchung mit geringer Strahlenbelastung.",
      image: "/images/diagnostik/modality-roentgen.jpg",
      icon: XrayPulseIcon,
    },
    {
      id: "labor",
      title: isRu ? "Лабораторные исследования" : isEn ? "Laboratory Diagnostics" : "Laboruntersuchungen",
      desc: isRu
        ? "Точные лабораторные показатели для верного диагноза."
        : isEn
        ? "Crucial biomarker values for exact diagnosis."
        : "Wichtige Werte für eine exakte Diagnose.",
      image: "/images/diagnostik/modality-labor.jpg",
      icon: TestTubesIcon,
    },
    {
      id: "kardio",
      title: isRu ? "Кардиологическая диагностика" : isEn ? "Cardiological Diagnostics" : "Kardiologische Diagnostik",
      desc: isRu
        ? "Для здорового сердца и крепкой сосудистой системы."
        : isEn
        ? "For a healthy heart and strong circulation."
        : "Für ein gesundes Herz und einen starken Kreislauf.",
      image: "/images/diagnostik/modality-kardio.jpg",
      icon: HeartCardioIcon,
    },
  ];

  // ── Section 3: 4 Process Steps matching Photo 2 ──
  const processSteps = [
    {
      num: "01",
      icon: Calendar,
      title: isRu ? "Запись на прием" : isEn ? "Appointment Booking" : "Terminvereinbarung",
      desc: isRu
        ? "Быстро и удобно онлайн или по телефону."
        : isEn
        ? "Fast and uncomplicated online or by phone."
        : "Schnell und unkompliziert online oder telefonisch.",
    },
    {
      num: "02",
      icon: ScannerArchIcon,
      title: isRu ? "Обследование" : isEn ? "Examination" : "Untersuchung",
      desc: isRu
        ? "Передовые технологии, бережное проведение."
        : isEn
        ? "Modern technology, professionally conducted."
        : "Moderne Technik, professionell durchgeführt.",
    },
    {
      num: "03",
      icon: FileText,
      title: isRu ? "Анализ и заключение" : isEn ? "Evaluation" : "Auswertung",
      desc: isRu
        ? "Экспертное заключение нашими специалистами."
        : isEn
        ? "Diagnostic reporting by fellowship specialists."
        : "Befundung durch unsere Spezialisten.",
    },
    {
      num: "04",
      icon: User,
      title: isRu ? "Личная консультация" : isEn ? "Personal Consultation" : "Persönliches Gespräch",
      desc: isRu
        ? "Понятные результаты и индивидуальные рекомендации."
        : isEn
        ? "Clear results and tailored recommendations."
        : "Klare Ergebnisse und individuelle Empfehlungen.",
    },
  ];

  // ── Section 4: Indications List matching Photo 2 ──
  const indicationsCol1 = isRu
    ? [
        "Головной мозг и нервная система",
        "Позвоночник и суставы",
        "Сердце и кровообращение",
        "Легкие и дыхательные пути",
        "Органы брюшной полости и пищеварение",
      ]
    : isEn
    ? [
        "Brain and nervous system",
        "Spine and musculoskeletal joints",
        "Heart and cardiovascular system",
        "Lungs and respiratory tract",
        "Abdominal organs and digestion",
      ]
    : [
        "Gehirn und Nervensystem",
        "Wirbelsäule und Gelenke",
        "Herz und Kreislauf",
        "Lunge und Atemwege",
        "Bauchorgane und Verdauung",
      ];

  const indicationsCol2 = isRu
    ? [
        "Ранняя диагностика онкологии",
        "Воспалительные процессы и инфекции",
        "Гормональные и метаболические нарушения",
        "Сосуды и кровоснабжение",
        "Спортивно-медицинские обследования",
      ]
    : isEn
    ? [
        "Early cancer detection screening",
        "Inflammatory conditions and infections",
        "Hormonal and metabolic disorders",
        "Vascular health and blood circulation",
        "Sports medicine evaluations",
      ]
    : [
        "Krebsfrüherkennung",
        "Entzündungen und Infektionen",
        "Hormon- und Stoffwechselerkrankungen",
        "Gefäße und Durchblutung",
        "Sportmedizinische Untersuchungen",
      ];

  // ── Section 5: Testimonials Carousel matching Photo 2 ──
  const testimonials = [
    {
      quote: isRu
        ? "Профессиональная и чуткая забота мне очень помогла. Благодаря быстрой и точной диагностике верное лечение было начато без промедления."
        : isEn
        ? "The professional and empathetic care helped me tremendously. Thanks to rapid, high-precision diagnostics, the right therapy was initiated immediately."
        : "Die professionelle und einfühlsame Betreuung hat mir sehr geholfen. Dank der schnellen und präzisen Diagnostik konnte die richtige Therapie rasch eingeleitet werden.",
      author: "Anna Müller",
      role: isRu ? "Пациентка" : isEn ? "Patient" : "Patientin",
      patientImage: "/images/diagnostik/patient-anna.jpg",
      scanImage: "/images/diagnostik/scan-review.jpg",
    },
    {
      quote: isRu
        ? "Впечатляющее качество томографии 3 Тесла и подробное разъяснение каждого снимка врачом-рентгенологом. Полное чувство уверенности."
        : isEn
        ? "Impressive 3-Tesla image resolution and clear explanation of every slice by the radiologist. Total clinical confidence."
        : "Beeindruckende Bildauflösung des 3-Tesla-MRT und verständliche Erläuterung aller Befunde durch den Radiologen. Höchste Sicherheit.",
      author: "Thomas Becker",
      role: isRu ? "Пациент" : isEn ? "Patient" : "Patient",
      patientImage: "/images/testimonials/thomas-becker.jpg",
      scanImage: "/images/services/diagnostik.jpg",
    },
    {
      quote: isRu
        ? "Очень быстрое получение заключения в течение суток. Мой хирург смог моментально спланировать операцию благодаря цифровому доступу."
        : isEn
        ? "Report ready in less than 24 hours. My orthopedist accessed the full digital scans immediately to plan targeted therapy."
        : "Befundbereitstellung in unter 24 Stunden. Mein Orthopäde konnte dank digitalem Bildzugang direkt die gezielte Therapie planen.",
      author: "Elena Fischer",
      role: isRu ? "Пациентка" : isEn ? "Patient" : "Patientin",
      patientImage: "/images/testimonials/elena-fischer.jpg",
      scanImage: "/images/diagnostik/scan-review.jpg",
    },
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      <Header currentLocale={locale} />

      {/* ── Page Hero with integrated breadcrumb ── */}
      <PageHero
        breadcrumb={
          <Breadcrumb
            items={[
              { label: isRu ? "Главная" : isEn ? "Home" : "Startseite", href: `/${locale}` },
              {
                label: isRu ? "Направления холдинга" : isEn ? "Divisions" : "Unternehmensbereiche",
                href: `/${locale}/areas`,
              },
              { label: heroData.title },
            ]}
          />
        }
        title={
          <>
            {heroData.title}
            <span className="block text-xl sm:text-2xl text-[#ECCF93] font-light mt-1 font-serif">
              {heroData.subtitle}
            </span>
          </>
        }
        description={heroData.description}
        imageSrc={area.image || "/images/services/diagnostik.jpg"}
        imageAlt="NabiOta Diagnostics High-End Medical Imaging"
        badges={heroData.badges}
      />

      <main className="flex-1 bg-[#FAF8F5]">
        
        {/* ══════════════════════════════════════════════════════════
            SECTION 1 (PHOTO 2 TOP): UNSERE DIAGNOSTIKVERFAHREN
            - Left: Eyebrow, Title, Description, Button
            - Right: 6 Modality Cards (MRT, CT, Ultraschall, Röntgen, Labor, Kardio)
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-4 space-y-4 pt-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                {isRu ? "НАШИ МЕТОДЫ ДИАГНОСТИКИ" : isEn ? "OUR DIAGNOSTIC PROCEDURES" : "UNSERE DIAGNOSTIKVERFAHREN"}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] text-[#132218] font-normal leading-[1.18]">
                {isRu
                  ? "Современные методы для точных результатов"
                  : isEn
                  ? "Advanced Methods for Accurate Results"
                  : "Moderne Verfahren für genaue Ergebnisse"}
              </h2>

              <p className="text-xs sm:text-[13px] text-[#556358] leading-relaxed font-sans max-w-md">
                {isRu
                  ? "Наша диагностика объединяет передовую медицинскую технику с многолетним клиническим опытом. Это позволяет распознавать заболевания на ранних стадиях и назначать оптимальную терапию."
                  : isEn
                  ? "Our diagnostic division unites cutting-edge medical technology with decades of clinical experience. We detect conditions early, evaluate them accurately, and establish the best possible treatment."
                  : "Unsere Diagnostik vereint modernste Medizintechnik mit langjähriger Erfahrung. So können wir Erkrankungen frühzeitig erkennen, präzise beurteilen und die bestmögliche Therapie für Sie einleiten."}
              </p>

              <div className="pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5B878] text-[#142318] hover:bg-[#D5B878] hover:text-[#0C1C11] font-semibold text-xs tracking-wide transition-all shadow-sm group bg-white/70"
                >
                  <span>{isRu ? "Все процедуры →" : isEn ? "View all procedures →" : "Alle Verfahren ansehen →"}</span>
                </Link>
              </div>
            </div>

            {/* Right 6 Cards Grid (2 rows x 3 columns) - Compact height matching Photo 1 */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
              {procedures.map((proc) => {
                const ProcIcon = proc.icon;
                return (
                  <div
                    key={proc.id}
                    className="bg-white rounded-2xl border border-[#EDE8DE] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all duration-300 p-2 sm:p-2.5 flex flex-col justify-between group hover:-translate-y-0.5"
                  >
                    <div>
                      {/* Compact Inset Image */}
                      <div className="relative aspect-[16/7.8] w-full rounded-xl overflow-hidden bg-neutral-900">
                        <Image
                          src={proc.image}
                          alt={proc.title}
                          fill
                          className="object-cover group-hover:scale-104 transition-transform duration-500"
                        />
                      </div>

                      {/* Compact Bottom Content Row (Icon + Title/Desc + Arrow) */}
                      <div className="flex items-center gap-2.5 pt-2.5 pb-0.5 px-1">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#08170D] border border-[#D5B878]/60 flex items-center justify-center text-[#ECCF96] shrink-0 shadow-xs">
                          <ProcIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.6]" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif text-[13.5px] sm:text-[14.5px] text-[#142318] font-medium leading-tight group-hover:text-[#B89650] transition-colors truncate">
                            {proc.title}
                          </h3>
                          <p className="text-[10px] sm:text-[10.5px] text-[#556358] leading-tight line-clamp-1 mt-0.5 font-sans">
                            {proc.desc}
                          </p>
                        </div>

                        <Link
                          href={`/${locale}/contact`}
                          aria-label={proc.title}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#EDE8DE] bg-[#FAF8F5] group-hover:bg-[#D5B878] group-hover:border-[#D5B878] flex items-center justify-center text-[#6E756D] group-hover:text-[#0C1C11] shrink-0 transition-all"
                        >
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2 (PHOTO 2 MIDDLE BANNER):
            "MODERNE TECHNOLOGIE - Mehr als nur Bilder – klare Antworten."
            - Dark forest green banner with botanical line art
            - Left: Scanner room image
            - Center: Heading & Description
            - Right: 3 Stats (3T, <24h, 99%)
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#08170D] text-white overflow-hidden border border-[#D5B878]/30 shadow-xl">
            {/* Subtle Gold Botanical Line Art on Far Right */}
            <div className="absolute right-0 top-0 w-80 h-full pointer-events-none opacity-25 z-0 select-none">
              <Image
                src="/images/areas/botanical-branch-clean.png"
                alt="Botanical Accent"
                fill
                className="object-contain object-right"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Column: Scanner Image */}
              <div className="lg:col-span-4 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[220px] sm:min-h-[260px] overflow-hidden">
                <Image
                  src="/images/diagnostik/scanner-suite.jpg"
                  alt="NabiOta CT Scanner Suite"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Seamless gradient fade into dark forest green */}
                <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#08170D] to-transparent pointer-events-none z-10" />
                <div className="lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#08170D] to-transparent pointer-events-none z-10" />
              </div>

              {/* Middle Column: Heading & Description */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-2.5">
                <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {isRu ? "ПЕРЕДОВЫЕ ТЕХНОЛОГИИ" : isEn ? "MODERN TECHNOLOGY" : "MODERNE TECHNOLOGIE"}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                  {isRu
                    ? "Больше чем снимки — ясные ответы."
                    : isEn
                    ? "More than Images – Clear Answers."
                    : "Mehr als nur Bilder – klare Antworten."}
                </h3>

                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed font-sans max-w-md">
                  {isRu
                    ? "Наше высокотехнологичное оборудование обеспечивает исключительно точную и щадящую диагностику — для максимальной уверенности, правильных решений и эффективного лечения."
                    : isEn
                    ? "Our cutting-edge equipment enables exceptionally precise and gentle diagnostics—for greater security, informed clinical decisions, and targeted therapy."
                    : "Unsere hochmodernen Geräte ermöglichen eine besonders präzise und schonende Diagnostik – für mehr Sicherheit, bessere Entscheidungen und eine gezielte Behandlung."}
                </p>
              </div>

              {/* Right Column: 3 Stats separated by dividers */}
              <div className="lg:col-span-3 p-6 sm:p-8 lg:p-6 lg:border-l lg:border-white/15 grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-5">
                <div className="space-y-0.5">
                  <span className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-[#ECCF96] font-normal leading-none block">
                    3T
                  </span>
                  <span className="text-[10.5px] sm:text-[11.5px] text-white/70 font-sans leading-tight block">
                    {isRu ? "Мощность поля МРТ" : isEn ? "MRI Magnet Strength" : "MRT-Magnetfeldstärke"}
                  </span>
                </div>

                <div className="space-y-0.5 pt-0 lg:pt-3 lg:border-t lg:border-white/10">
                  <span className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-[#ECCF96] font-normal leading-none block">
                    &lt;24h
                  </span>
                  <span className="text-[10.5px] sm:text-[11.5px] text-white/70 font-sans leading-tight block">
                    {isRu ? "Готовность заключения" : isEn ? "Report Turnaround" : "Befunderstellung"}
                  </span>
                </div>

                <div className="space-y-0.5 pt-0 lg:pt-3 lg:border-t lg:border-white/10">
                  <span className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-[#ECCF96] font-normal leading-none block">
                    99%
                  </span>
                  <span className="text-[10.5px] sm:text-[11.5px] text-white/70 font-sans leading-tight block">
                    {isRu ? "Удовлетворенность пациентов" : isEn ? "Patient Satisfaction" : "Patientenzufriedenheit"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3 (PHOTO 2): UNSER DIAGNOSTIK-PROZESS (1-IN-1 DESIGN)
            - Left: Eyebrow, Title, Description, Button
            - Right: 4 Connected steps directly on background with connecting line
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Header Area */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                {isRu ? "НАШ ПРОЦЕСС ДИАГНОСТИКИ" : isEn ? "OUR DIAGNOSTIC PROCESS" : "UNSER DIAGNOSTIK-PROZESS"}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
                {isRu
                  ? "В 4 шага к ясным результатам"
                  : isEn
                  ? "In 4 Steps to Clear Results"
                  : "In 4 Schritten zu klaren Ergebnissen"}
              </h2>

              <p className="text-xs sm:text-[13px] text-[#556358] leading-relaxed font-sans max-w-sm">
                {isRu
                  ? "От первого обращения до получения заключения — мы бережно сопровождаем вас на каждом этапе."
                  : isEn
                  ? "From initial inquiry to diagnostic report—we guide you through every single step."
                  : "Von der ersten Untersuchung bis zum Befund – wir begleiten Sie auf jedem Schritt."}
              </p>

              <div className="pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5B878] text-[#142318] hover:bg-[#D5B878] hover:text-[#0C1C11] font-semibold text-xs tracking-wide transition-all shadow-sm bg-transparent"
                >
                  <span>{isRu ? "Как это работает →" : isEn ? "How it works →" : "So funktioniert es →"}</span>
                </Link>
              </div>
            </div>

            {/* Right Area: 4 Connected Steps directly on the warm cream background (Photo 2) */}
            <div className="lg:col-span-8 relative">
              {/* Subtle decorative leaf on the right edge */}
              <div className="hidden xl:block absolute -right-6 top-1/2 -translate-y-1/2 w-24 h-36 pointer-events-none opacity-20 select-none z-0">
                <svg viewBox="0 0 100 160" fill="none" className="w-full h-full text-[#2C4A34]">
                  <path d="M20 150 C 40 100, 60 60, 90 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M40 100 C 25 85, 20 70, 35 65 C 50 60, 48 85, 40 100 Z" fill="currentColor" opacity="0.6" />
                  <path d="M60 65 C 75 50, 85 45, 80 35 C 75 25, 60 45, 60 65 Z" fill="currentColor" opacity="0.6" />
                  <path d="M75 35 C 90 20, 98 15, 95 8 C 90 2, 75 18, 75 35 Z" fill="currentColor" opacity="0.6" />
                </svg>
              </div>

              {/* Thin horizontal connecting line between step headers on desktop */}
              <div className="hidden md:block absolute top-[21px] left-[35px] right-[45px] h-[1px] bg-[#E2DDD2] z-0" />

              {/* 4 Process Step Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6 relative z-10">
                {processSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.num} className="flex flex-col">
                      {/* Header Row: Beige Circle Badge with Icon + Step Number */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-11 h-11 rounded-full bg-[#F3EDE2] border border-[#E5DECF] shadow-xs flex items-center justify-center text-[#142318] shrink-0">
                          <StepIcon className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <span className="font-serif text-[17px] text-[#B89650] font-normal tracking-wide">
                          {step.num}
                        </span>
                      </div>

                      {/* Title & Description directly on background */}
                      <div className="mt-3.5">
                        <h3 className="font-serif text-[16px] sm:text-[17px] text-[#142318] font-medium leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-[12.5px] text-[#556358] leading-relaxed font-sans mt-1.5">
                          {step.desc}
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
            SECTION 4 (PHOTO 3): UNIFIED 2-COLUMN SECTION
            - Compact height matching Photo 3
            - Left (Deep Forest Green): "Fragen zur Diagnostik?" + consultation photo on right + button
            - Right (Pure White): "Was wir für Sie untersuchen können" + 2-col checklist with gold checkmarks
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-14 sm:pb-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EDE8DE] shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Part: Deep Forest Green with consultation photo on right */}
            <div className="lg:col-span-5 relative bg-[#08170D] text-white p-6 sm:p-7 flex flex-col justify-between overflow-hidden min-h-[260px] sm:min-h-[280px]">
              {/* Background Image on Right side of the dark card */}
              <div className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[50%] overflow-hidden pointer-events-none">
                <Image
                  src="/images/diagnostik/consultation.jpg"
                  alt="Doctor consultation with patient"
                  fill
                  className="object-cover object-center"
                />
                {/* Smooth horizontal gradient into dark green on left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#08170D] via-[#08170D]/75 to-transparent" />
              </div>

              {/* Content over background on left */}
              <div className="relative z-10 max-w-[230px] sm:max-w-[250px] space-y-2">
                <h3 className="font-serif text-2xl sm:text-[27px] text-white font-normal leading-tight">
                  {isRu
                    ? "Вопросы по диагностике?"
                    : isEn
                    ? "Questions about Diagnostics?"
                    : "Fragen zur Diagnostik?"}
                </h3>
                <p className="text-white/80 text-[11.5px] sm:text-xs font-sans leading-relaxed">
                  {isRu
                    ? "Наша команда всегда к вашим услугам и с радостью проконсультирует вас обо всех обследованиях и возможностях."
                    : isEn
                    ? "Our team is always at your service and will gladly advise you on all examinations and modalities."
                    : "Unser Team steht Ihnen jederzeit zur Verfügung und berät Sie gerne zu allen Untersuchungen und Möglichkeiten."}
                </p>
              </div>

              <div className="relative z-10 pt-3">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#ECCF96] hover:bg-[#D5B878] text-[#0C1C11] font-semibold text-xs tracking-wide transition-all shadow-sm"
                >
                  <span>{isRu ? "Связаться с нами →" : isEn ? "Contact us →" : "Kontakt aufnehmen →"}</span>
                </Link>
              </div>
            </div>

            {/* Right Part: Pure White with Checklist */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-7 lg:p-8 flex flex-col justify-center">
              <span className="text-[9.5px] font-bold tracking-[0.22em] text-[#8C948D] uppercase block mb-1">
                {isRu ? "ЧАСТЫЕ ДИАГНОЗЫ И ОБСЛЕДОВАНИЯ" : isEn ? "FREQUENT DIAGNOSES & EXAMINATIONS" : "HÄUFIGE DIAGNOSEN & UNTERSUCHUNGEN"}
              </span>

              <h3 className="font-serif text-xl sm:text-[23px] text-[#142318] font-normal leading-tight mb-4 sm:mb-5">
                {isRu
                  ? "Что мы можем исследовать для вас"
                  : isEn
                  ? "What We Can Examine for You"
                  : "Was wir für Sie untersuchen können"}
              </h3>

              {/* 2-Column Checklist with Gold Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-y-2.5">
                <div className="space-y-2 sm:space-y-2.5">
                  {indicationsCol1.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <GoldCircleCheckIcon className="w-3.5 h-3.5 text-[#B89650] shrink-0" />
                      <span className="text-xs sm:text-[12.5px] text-[#2C3B30] font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 sm:space-y-2.5">
                  {indicationsCol2.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <GoldCircleCheckIcon className="w-3.5 h-3.5 text-[#B89650] shrink-0" />
                      <span className="text-xs sm:text-[12.5px] text-[#2C3B30] font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5 (PHOTO 4): PATIENTENSTIMMEN (FULL-WIDTH EDGE-TO-EDGE)
            - Seamlessly connected to Section 6 with NO white gap!
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#08170D] text-white overflow-hidden border-t border-[#D5B878]/30 relative">
          <div className="w-full flex items-center justify-between min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]">
            
            {/* Left Column: Patient Portrait fading towards center */}
            <div className="relative hidden md:block w-[24%] lg:w-[26%] h-[240px] sm:h-[260px] lg:h-[280px] overflow-hidden shrink-0">
              <Image
                src={currentTestimonial.patientImage}
                alt={currentTestimonial.author}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#08170D] to-transparent pointer-events-none" />
            </div>

            {/* Center Column: Quote, Author, Carousel Flanked by Arrows */}
            <div className="flex-1 py-7 sm:py-8 px-4 sm:px-6 lg:px-10 text-center flex flex-col items-center justify-center relative z-10 max-w-2xl mx-auto">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-1.5">
                {isRu ? "ОТЗЫВЫ ПАЦИЕНТОВ" : isEn ? "PATIENT VOICES" : "PATIENTENSTIMMEN"}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight mb-2.5">
                {isRu
                  ? "Доверие, основанное на опыте."
                  : isEn
                  ? "Trust Built on Experience."
                  : "Vertrauen durch Erfahrung."}
              </h3>

              {/* Quote row flanked by Left & Right Arrows (Photo 4) */}
              <div className="w-full flex items-center justify-between gap-3 sm:gap-5 my-1.5">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous testimonial"
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D5B878] bg-white/5 hover:bg-[#D5B878] hover:text-[#08170D] text-white flex items-center justify-center shrink-0 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>

                <blockquote className="text-white/90 text-xs sm:text-[13px] italic leading-relaxed font-sans flex-1 text-center max-w-lg mx-auto">
                  „{currentTestimonial.quote}“
                </blockquote>

                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1
                    )
                  }
                  aria-label="Next testimonial"
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D5B878] bg-white/5 hover:bg-[#D5B878] hover:text-[#08170D] text-white flex items-center justify-center shrink-0 transition-all cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Author in Gold */}
              <span className="text-xs text-[#ECCF96] font-medium block mt-1.5">
                {currentTestimonial.author}, {currentTestimonial.role}
              </span>

              {/* Dots Indicator: Active Gold Pill + Inactive Circular Dots */}
              <div className="flex items-center gap-1.5 mt-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`transition-all ${
                      activeTestimonial === idx
                        ? "w-5 h-1.5 rounded-full bg-[#ECCF96]"
                        : "w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Scan Review Image fading towards center */}
            <div className="relative hidden md:block w-[24%] lg:w-[26%] h-[240px] sm:h-[260px] lg:h-[280px] overflow-hidden shrink-0">
              <Image
                src={currentTestimonial.scanImage}
                alt="Specialist reviewing MRI scan"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#08170D] to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 6: SIGNATURE PANORAMIC MOUNTAIN CTA BANNER
            - "фото 5 лищние белые пробелы снизу и сверху"
            - Directly adjacent to Section 5 with only a gold divider border
            - Directly adjacent to Footer with NO bottom margin or padding!
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#D5B878]/30">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/values/mountains-bg.jpg"
              alt="Alps panoramic background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08170D]/94 via-[#08170D]/88 to-[#08170D]/94" />
          </div>

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 text-center">
            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.26em] text-[#C5A56A] uppercase block">
                {isRu ? "ЗДОРОВЬЕ НАЧИНАЕТСЯ С ТОЧНОСТИ" : isEn ? "PRECISION FOR YOUR HEALTH" : "GESUNDHEIT BEGINNT MIT PRÄZISION"}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white font-normal leading-[1.18]">
                {isRu
                  ? "Нужна своевременная и точная диагностика?"
                  : isEn
                  ? "Require Timely & Precise Diagnostics?"
                  : "Benötigen Sie eine zeitnahe Diagnostik?"}
              </h2>

              <p className="text-white/85 text-xs sm:text-[14px] leading-relaxed font-sans max-w-xl mx-auto">
                {isRu
                  ? "Запишитесь на МРТ 3 Тесла, низкодозовую КТ или цифровой рентген в центрах NabiOta®. Мы гарантируем бережное отношение, минимальные сроки ожидания и исчерпывающее врачебное заключение."
                  : isEn
                  ? "Schedule your 3-Tesla MRI, low-dose CT, or digital X-ray at NabiOta® diagnostics centers. Fast appointments, maximum patient comfort, and reliable reports for you and your physicians."
                  : "Vereinbaren Sie Ihren Untersuchungstermin für 3T-MRT, Niedrigdosis-CT oder volldigitales Röntgen – schnell, digital und mit höchster radiologischer Fachexpertise."}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href={`/${locale}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-[13.5px] tracking-wide shadow-lg transition-all duration-200 hover:scale-102"
                >
                  <span>{isRu ? "Записаться на прием" : isEn ? "Book an Appointment" : "Termin vereinbaren"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/${locale}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/30 hover:border-[#D5B878] text-white hover:text-[#ECCF96] font-medium text-xs sm:text-[13px] transition-all bg-white/5 backdrop-blur-sm"
                >
                  <span>{isRu ? "Связаться с центром" : isEn ? "Direct Contact" : "Direkter Kontakt"}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
