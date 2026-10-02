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
      icon: Activity,
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

      <main className="flex-1 py-10 sm:py-16 space-y-16 sm:space-y-20 lg:space-y-24 bg-[#FAF8F5]">
        
        {/* ══════════════════════════════════════════════════════════
            SECTION 1 (PHOTO 2 TOP): UNSERE DIAGNOSTIKVERFAHREN
            - Left: Eyebrow, Title, Description, Button
            - Right: 6 Modality Cards (MRT, CT, Ultraschall, Röntgen, Labor, Kardio)
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-4 space-y-4 pt-2">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                {isRu ? "НАШИ МЕТОДЫ ДИАГНОСТИКИ" : isEn ? "OUR DIAGNOSTIC PROCEDURES" : "UNSERE DIAGNOSTIKVERFAHREN"}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#132218] font-normal leading-[1.18]">
                {isRu
                  ? "Современные методы для точных результатов"
                  : isEn
                  ? "Advanced Methods for Accurate Results"
                  : "Moderne Verfahren für genaue Ergebnisse"}
              </h2>

              <p className="text-xs sm:text-[13.5px] text-[#556358] leading-relaxed font-sans max-w-md">
                {isRu
                  ? "Наша диагностика объединяет передовую медицинскую технику с многолетним клиническим опытом. Это позволяет распознавать заболевания на ранних стадиях и назначать оптимальную терапию."
                  : isEn
                  ? "Our diagnostic division unites cutting-edge medical technology with decades of clinical experience. We detect conditions early, evaluate them accurately, and establish the best possible treatment."
                  : "Unsere Diagnostik vereint modernste Medizintechnik mit langjähriger Erfahrung. So können wir Erkrankungen frühzeitig erkennen, präzise beurteilen und die bestmögliche Therapie für Sie einleiten."}
              </p>

              <div className="pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D5B878] text-[#142318] hover:bg-[#D5B878] hover:text-[#0C1C11] font-semibold text-xs tracking-wide transition-all shadow-sm group bg-white/60"
                >
                  <span>{isRu ? "Все процедуры →" : isEn ? "View all procedures →" : "Alle Verfahren ansehen →"}</span>
                </Link>
              </div>
            </div>

            {/* Right 6 Cards Grid (2 rows x 3 columns) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {procedures.map((proc) => {
                const ProcIcon = proc.icon;
                return (
                  <div
                    key={proc.id}
                    className="bg-white rounded-2xl border border-[#EDE8DE] shadow-[0_2px_14px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-0.5"
                  >
                    <div>
                      {/* Card Image */}
                      <div className="relative aspect-[16/8.5] w-full overflow-hidden bg-neutral-900">
                        <Image
                          src={proc.image}
                          alt={proc.title}
                          fill
                          className="object-cover group-hover:scale-104 transition-transform duration-500"
                        />
                      </div>

                      {/* Card Body */}
                      <div className="p-4 sm:p-4.5">
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#08170D] border border-[#D5B878]/60 flex items-center justify-center text-[#ECCF96] shrink-0 shadow-sm">
                            <ProcIcon className="w-4 h-4 stroke-[1.6]" />
                          </div>
                          <h3 className="font-serif text-base sm:text-[17px] text-[#142318] font-medium leading-snug group-hover:text-[#B89650] transition-colors">
                            {proc.title}
                          </h3>
                        </div>

                        <p className="text-[11.5px] text-[#556358] leading-relaxed font-sans line-clamp-2">
                          {proc.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action: Arrow Button */}
                    <div className="px-4 sm:px-4.5 pb-3.5 pt-1 flex justify-end">
                      <Link
                        href={`/${locale}/contact`}
                        aria-label={proc.title}
                        className="w-7 h-7 rounded-full border border-[#EDE8DE] bg-[#FAF8F5] group-hover:bg-[#D5B878] group-hover:border-[#D5B878] flex items-center justify-center text-[#6E756D] group-hover:text-[#0C1C11] transition-all"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
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
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
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
            SECTION 3 (PHOTO 2): UNSER DIAGNOSTIK-PROZESS (4 STEPS)
            - Left: Eyebrow, Title, Description, Button
            - Right: 4 horizontal numbered process cards
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
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

              <p className="text-xs sm:text-[13.5px] text-[#556358] leading-relaxed font-sans max-w-sm">
                {isRu
                  ? "От первого обращения до получения заключения — мы бережно сопровождаем вас на каждом этапе."
                  : isEn
                  ? "From initial inquiry to diagnostic report—we guide you through every single step."
                  : "Von der ersten Untersuchung bis zum Befund – wir begleiten Sie auf jedem Schritt."}
              </p>

              <div className="pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D5B878] text-[#142318] hover:bg-[#D5B878] hover:text-[#0C1C11] font-semibold text-xs tracking-wide transition-all shadow-sm bg-white"
                >
                  <span>{isRu ? "Как это работает →" : isEn ? "How it works →" : "So funktioniert es →"}</span>
                </Link>
              </div>
            </div>

            {/* Right 4 Horizontal Process Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4.5">
              {processSteps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="bg-white rounded-2xl border border-[#EDE8DE] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Icon inside gold/beige circle + Number */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#FAF5EB] border border-[#D5B878]/60 flex items-center justify-center text-[#B89650] shrink-0">
                          <StepIcon className="w-5 h-5 stroke-[1.6]" />
                        </div>
                        <span className="font-serif text-lg font-normal text-[#B89650]">
                          {step.num}
                        </span>
                      </div>

                      <h3 className="font-serif text-base sm:text-[17px] text-[#142318] font-medium leading-snug mb-1.5">
                        {step.title}
                      </h3>

                      <p className="text-xs text-[#556358] leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4 (PHOTO 2): 2-COLUMN SECTION
            - Left: "Fragen zur Diagnostik?" Dark Green Card + Consultation photo + Button
            - Right: "Was wir für Sie untersuchen können" White card with 2-col checklist
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Card: Fragen zur Diagnostik? */}
            <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-[#08170D] text-white overflow-hidden border border-[#D5B878]/30 shadow-lg flex flex-col justify-between">
              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                  {isRu
                    ? "Вопросы по диагностике?"
                    : isEn
                    ? "Questions About Diagnostics?"
                    : "Fragen zur Diagnostik?"}
                </h3>
                <p className="text-white/80 text-xs sm:text-[13px] font-sans leading-relaxed">
                  {isRu
                    ? "Наша команда всегда к вашим услугам и с радостью проконсультирует вас обо всех обследованиях и возможностях."
                    : isEn
                    ? "Our team is always at your disposal and happy to advise you on all examinations and modalities."
                    : "Unser Team steht Ihnen jederzeit zur Verfügung und berät Sie gerne zu allen Untersuchungen und Möglichkeiten."}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs tracking-wide shadow-md transition-all hover:scale-102"
                  >
                    <span>{isRu ? "Связаться с нами →" : isEn ? "Get in touch →" : "Kontakt aufnehmen →"}</span>
                  </Link>
                </div>
              </div>

              {/* Consultation Photo inside card */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/images/diagnostik/consultation.jpg"
                  alt="Doctor consultation with patient"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#08170D] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Card: Was wir für Sie untersuchen können */}
            <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-[#EDE8DE] p-6 sm:p-8 lg:p-9 shadow-[0_2px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block mb-1">
                  {isRu ? "ЧАСТЫЕ ДИАГНОЗЫ И ОБСЛЕДОВАНИЯ" : isEn ? "FREQUENT DIAGNOSES & EXAMINATIONS" : "HÄUFIGE DIAGNOSEN & UNTERSUCHUNGEN"}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#132218] font-normal leading-tight mb-6">
                  {isRu
                    ? "Что мы можем исследовать для вас"
                    : isEn
                    ? "What We Can Examine for You"
                    : "Was wir für Sie untersuchen können"}
                </h3>

                {/* 2-Column Checklist with Gold Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  <div className="space-y-3.5">
                    {indicationsCol1.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#B89650] shrink-0" />
                        <span className="text-xs sm:text-[13px] text-[#2C3B30] font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3.5">
                    {indicationsCol2.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#B89650] shrink-0" />
                        <span className="text-xs sm:text-[13px] text-[#2C3B30] font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EDE8DE] flex items-center justify-between text-xs text-[#6E756D] font-sans">
                <span>{isRu ? "Все виды медицинских страховок и частный прием" : isEn ? "All insurance classes and private consultations" : "Alle Kassen, Privatversicherte & Selbstzahler"}</span>
                <span className="font-semibold text-[#142318]">NabiOta® Diagnostics</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5 (PHOTO 2): PATIENTENSTIMMEN (TESTIMONIAL BANNER)
            - Dark forest green banner
            - Left: Patient portrait
            - Center: Eyebrow, Heading, Quote, Author, Carousel controls
            - Right: Scan review photo
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#08170D] text-white overflow-hidden border border-[#D5B878]/30 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Left Column: Patient Portrait */}
              <div className="lg:col-span-3 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[220px] overflow-hidden">
                <Image
                  src={currentTestimonial.patientImage}
                  alt={currentTestimonial.author}
                  fill
                  className="object-cover object-center"
                />
                <div className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#08170D] to-transparent pointer-events-none" />
                <div className="lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#08170D] to-transparent pointer-events-none" />
              </div>

              {/* Center Column: Quote, Author, Controls */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 text-center space-y-3.5">
                <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {isRu ? "ОТЗЫВЫ ПАЦИЕНТОВ" : isEn ? "PATIENT VOICES" : "PATIENTENSTIMMEN"}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                  {isRu
                    ? "Доверие, основанное на опыте."
                    : isEn
                    ? "Trust Built on Experience."
                    : "Vertrauen durch Erfahrung."}
                </h3>

                <blockquote className="text-white/85 text-xs sm:text-[13.5px] italic leading-relaxed font-sans max-w-lg mx-auto">
                  „{currentTestimonial.quote}“
                </blockquote>

                <div className="pt-1">
                  <span className="text-xs font-semibold text-[#ECCF96] block">
                    {currentTestimonial.author}, {currentTestimonial.role}
                  </span>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev === 0 ? testimonials.length - 1 : prev - 1
                      )
                    }
                    aria-label="Previous testimonial"
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D5B878] bg-white/5 hover:bg-[#D5B878] hover:text-[#08170D] text-white flex items-center justify-center transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1.5 px-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonial(idx)}
                        aria-label={`Slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          activeTestimonial === idx
                            ? "w-5 bg-[#ECCF96]"
                            : "w-1.5 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev === testimonials.length - 1 ? 0 : prev + 1
                      )
                    }
                    aria-label="Next testimonial"
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D5B878] bg-white/5 hover:bg-[#D5B878] hover:text-[#08170D] text-white flex items-center justify-center transition-all"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Scan Review Image */}
              <div className="hidden lg:block lg:col-span-3 relative h-full min-h-[260px] overflow-hidden">
                <Image
                  src={currentTestimonial.scanImage}
                  alt="Specialist reviewing MRI scan"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#08170D] to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 6: SIGNATURE PANORAMIC MOUNTAIN CTA BANNER
            - Background mountain image with dark overlay
            - Gold borders, Eyebrow, Title, Appointment CTA buttons
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden border-y border-[#D5B878]/60">
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
