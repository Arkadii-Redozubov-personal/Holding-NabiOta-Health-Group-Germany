"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Stethoscope,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Heart,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";
import { businessAreas } from "@/data/areas";

// ── Custom SVG Icons Matching User Design ──
function CloverEmblemIcon({ className = "w-5 h-5" }: { className?: string }) {
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

function TeamSpecialistsIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      <circle cx="12" cy="8" r="2.5" />
      <path d="M7 19v-2a5 5 0 0 1 10 0v2" />
      <circle cx="5" cy="11" r="1.8" />
      <path d="M2.5 19v-1.5a3.5 3.5 0 0 1 3.5-3.5" />
      <circle cx="19" cy="11" r="1.8" />
      <path d="M21.5 19v-1.5a3.5 3.5 0 0 0-3.5-3.5" />
    </svg>
  );
}

function TechNodesIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="16" cy="8" r="2.2" />
      <circle cx="8" cy="16" r="2.2" />
      <circle cx="16" cy="16" r="2.2" />
      <path d="M10.2 8h3.6M8 10.2v3.6M16 10.2v3.6M10.2 16h3.6" />
    </svg>
  );
}

function HeartContourIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function DiagnosticIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function MinimallyInvasiveIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
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
      <path d="m14 4 6 6-9 9-6-6Z" />
      <path d="M4 20h4" />
    </svg>
  );
}

function TherapyPlanIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
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
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="16" cy="8" r="2.2" />
      <circle cx="8" cy="16" r="2.2" />
      <circle cx="16" cy="16" r="2.2" />
    </svg>
  );
}

interface MedizinischeFachbereicheProps {
  locale: SupportedLocale;
}

export function MedizinischeFachbereichePageComponent({ locale }: MedizinischeFachbereicheProps) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  const area = businessAreas.find((a) => a.slug === "medizinische-fachbereiche") || businessAreas[0];

  // ── Hero Data ──
  const heroData = {
    breadcrumbHome: isRu ? "Главная" : isEn ? "Home" : "Startseite",
    breadcrumbAreas: isRu ? "Направления" : isEn ? "Our Divisions" : "Unternehmensbereiche",
    title: isRu ? "Медицинские отделения" : isEn ? "Medical Departments" : "Medizinische Fachbereiche",
    subtitle: isRu
      ? "Амбулаторная и специализированная медицина высшего уровня"
      : isEn
      ? "Outpatient & Specialized Medicine of Excellence"
      : "Ambulante & Fachärztliche Spitzenmedizin",
    description: isRu
      ? "Комплексная амбулаторная помощь от первичного приема до высокотехнологичных хирургических центров. Ведущие врачи-специалисты, передовое оборудование и междисциплинарный подход."
      : isEn
      ? "Comprehensive outpatient care through specialized medical centers, from primary prevention to cutting-edge surgical procedures under highest German quality standards."
      : "Umfassende ambulante Versorgung durch spezialisierte Facharztzentren, von Allgemeinmedizin bis hin zu chirurgischen Spitzenleistungen nach höchsten deutschen Qualitätsstandards.",
    badges: [
      {
        icon: <Award className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "Высокие" : isEn ? "Highest" : "Höchste",
        sub: isRu ? "Стандарты" : isEn ? "Standards" : "Standards",
      },
      {
        icon: <Stethoscope className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "Врачебная" : isEn ? "Medical" : "Fachärztliche",
        sub: isRu ? "Экспертиза" : isEn ? "Expertise" : "Expertise",
      },
      {
        icon: <Building2 className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "В составе" : isEn ? "Group" : "Holding",
        sub: isRu ? "Холдинга" : isEn ? "Network" : "Verbund",
      },
    ],
  };

  // ── Overview & Core Capabilities Section (From PDF & Previous Version) ──
  const overviewData = {
    eyebrow: isRu ? "КОМПЕТЕНЦИИ И СТАНДАРТЫ" : isEn ? "COMPETENCE & QUALITY" : "KOMPETENZ & ANSPRUCH",
    title: isRu
      ? "Высокотехнологичная медицинская помощь немецкого качества"
      : isEn
      ? "Structured Healthcare Excellence according to German Standards"
      : "Strukturierte Spitzenversorgung nach deutschen Standards",
    desc: isRu
      ? "Медицинские направления группы NabiOta® объединяют базовую терапевтическую помощь с высокоспециализированными хирургическими центрами. В наших специализированных центрах (MVZ) представлены ортопедия, нейрохирургия, пластическая хирургия и общая хирургия по высшим немецким стандартам качества."
      : isEn
      ? "The medical divisions of the NabiOta® Group combine primary general medical care with highly specialized surgical centers. In our outpatient medical centers (MVZ), we cover orthopedics, neurosurgery, plastic surgery, and general surgery according to the highest German quality standards."
      : "Die medizinischen Fachbereiche der NabiOta® Gruppe verbinden hausärztliche Grundversorgung mit hochspezialisierten chirurgischen Zentren. In unseren Facharztzentren decken wir Orthopädie, Neurochirurgie, plastische Chirurgie sowie Allgemeinchirurgie nach höchsten deutschen Qualitätsstandards ab.",
    capabilitiesTitle: isRu ? "Ключевые направления" : isEn ? "Core Capabilities" : "Leistungsschwerpunkte",
    capabilities: [
      isRu ? "Терапевтическая помощь и профилактика" : isEn ? "Primary Care & Preventive Medicine" : "Hausärztliche Versorgung & Prävention",
      isRu ? "Ортопедия и травматология" : isEn ? "Orthopedics & Traumatology" : "Orthopädie und Traumatologie",
      isRu ? "Нейрохирургические консультации и операции" : isEn ? "Neurosurgical Consultations & Surgery" : "Neurochirurgische Sprechstunden & Eingriffe",
      isRu ? "Пластическая и реконструктивная хирургия" : isEn ? "Plastic & Reconstructive Surgery" : "Plastische & Rekonstruktive Chirurgie",
      isRu ? "Общая хирургия и амбулаторные операции" : isEn ? "General Surgery & Outpatient Operations" : "Allgemeinchirurgie & ambulantes Operieren",
    ],
    advantagesTitle: isRu ? "Преимущества в составе холдинга" : isEn ? "Group Advantages" : "Ihre Vorteile im Verbund",
    advantages: [
      isRu
        ? "Междисциплинарное сотрудничество всех специалистов под одной крышей"
        : isEn
        ? "Interdisciplinary collaboration of all specialists under one roof"
        : "Interdisziplinäre Zusammenarbeit aller Fachärzte unter einem Dach",
      isRu
        ? "Современные кабинеты с безбарьерной доступной средой"
        : isEn
        ? "Modern medical practice facilities with barrier-free accessibility"
        : "Moderne Praxisräume mit barrierefreiem Zugang",
      isRu
        ? "Быстрая запись на прием и цифровая передача медицинских заключений"
        : isEn
        ? "Rapid appointment scheduling and digital report transfer"
        : "Schnelle Terminvergabe und digitale Befundübermittlung",
      isRu
        ? "Тесная интеграция с центрами диагностики и реабилитации"
        : isEn
        ? "Seamless networking with diagnostics and rehabilitation centers"
        : "Enge Verzahnung mit Diagnostik- und Rehazentren",
    ],
    stats: [
      {
        value: "4+",
        label: isRu ? "Хирургических профиля" : isEn ? "Surgical Specialties" : "Chirurgische Schwerpunkte",
      },
      {
        value: "100%",
        label: isRu ? "Ориентация на пациента" : isEn ? "Patient-Centered" : "Patientenfokussiert",
      },
      {
        value: "MVZ",
        label: isRu ? "Лицензия по стандартам ФРГ" : isEn ? "German Medical Center" : "Zulassung nach dt. Recht",
      },
    ],
  };

  // ── Photo 1: Spotlight Section (Kardiologie) ──
  const spotlight = {
    eyebrow: isRu ? "В ФОКУСЕ" : isEn ? "IN FOCUS" : "IM FOKUS",
    title: isRu
      ? "Кардиология — точность\nдля здорового сердца"
      : isEn
      ? "Cardiology – Precision\nfor a Healthy Heart"
      : "Kardiologie – Präzision\nfür ein gesundes Herz",
    desc: isRu
      ? "Наша кардиологическая команда предлагает комплексную диагностику и персонализированную терапию сердечно-сосудистых заболеваний. Благодаря современным технологиям и многолетнему опыту мы возвращаем пациентам высокое качество жизни."
      : isEn
      ? "Our cardiology team offers comprehensive diagnostics and personalized therapy for cardiovascular conditions. With cutting-edge technology and extensive clinical experience, we ensure you regain your quality of life."
      : "Unser kardiologisches Team bietet Ihnen eine umfassende Diagnostik und individuelle Therapie bei Herz-Kreislauf-Erkrankungen. Mit modernster Technik und langjähriger Erfahrung sorgen wir dafür, dass Sie wieder mehr Lebensqualität gewinnen.",
    pillTitle: isRu ? "Кардиология" : isEn ? "Cardiology" : "Kardiologie",
    pillSubtitle: isRu
      ? "Современная диагностика. Индивидуальная терапия."
      : isEn
      ? "Modern Diagnostics. Personalized Therapy."
      : "Moderne Diagnostik. Individuelle Therapie.",
    features: [
      {
        icon: DiagnosticIcon,
        label: isRu
          ? "Передовые методы диагностики"
          : isEn
          ? "Advanced Diagnostic Methods"
          : "Modernste Diagnostikverfahren",
      },
      {
        icon: MinimallyInvasiveIcon,
        label: isRu
          ? "Малоинвазивные методы лечения"
          : isEn
          ? "Minimally Invasive Treatments"
          : "Minimalinvasive Behandlungsmethoden",
      },
      {
        icon: TherapyPlanIcon,
        label: isRu
          ? "Индивидуальные планы терапии"
          : isEn
          ? "Individual Therapy Plans"
          : "Individuelle Therapiepläne",
      },
    ],
    linkText: isRu
      ? "Узнать больше о кардиологии"
      : isEn
      ? "Learn more about Cardiology"
      : "Mehr über die Kardiologie erfahren",
  };

  // ── Photo 2: Full-Width Edge-to-Edge Section (Warum NabiOta? Mehr als Medizin.) ──
  const whySection = {
    eyebrow: isRu ? "ПОЧЕМУ НАБИОТА?" : isEn ? "WHY NABIOTA?" : "WARUM NABIOTA?",
    title: isRu ? "Больше чем медицина." : isEn ? "More than Medicine." : "Mehr als Medizin.",
    desc: isRu
      ? "Мы объединяем передовую медицину с искренней человечностью. Наша междисциплинарная команда ведущих врачей-специалистов работает сообща — ради вашего здоровья, доверия и уверенного будущего."
      : isEn
      ? "We combine medical excellence with human care. Our interdisciplinary team of renowned medical specialists works hand in hand – for your health, your trust, and your future."
      : "Wir verbinden medizinische Exzellenz mit Menschlichkeit. Unser interdisziplinäres Team aus renommierten Fachärztinnen und Fachärzten arbeitet Hand in Hand – für Ihre Gesundheit, Ihr Vertrauen und Ihre Zukunft.",
    btn: isRu ? "Наши ценности" : isEn ? "Our Values" : "Unsere Werte",
    stats: [
      {
        icon: CloverEmblemIcon,
        label: isRu ? "6+ Направлений" : isEn ? "6+ Departments" : "6+ Fachbereiche",
      },
      {
        icon: TeamSpecialistsIcon,
        label: isRu
          ? "100+ Специалистов"
          : isEn
          ? "100+ Specialists"
          : "100+ Spezialistinnen & Spezialisten",
      },
      {
        icon: TechNodesIcon,
        label: isRu ? "Передовые технологии" : isEn ? "State-of-the-Art Technology" : "Modernste Technologie",
      },
      {
        icon: HeartContourIcon,
        label: isRu ? "Комплексная забота" : isEn ? "Holistic Care" : "Ganzheitliche Betreuung",
      },
    ],
  };

  // ── Photo 3: Team Section (Unser Team - Kompetenz. Empathie. Teamgeist.) ──
  const teamSection = {
    eyebrow: isRu ? "НАША КОМАНДА" : isEn ? "OUR TEAM" : "UNSER TEAM",
    title: isRu
      ? "Компетентность. Эмпатия.\nКомандный дух."
      : isEn
      ? "Competence. Empathy.\nTeam Spirit."
      : "Kompetenz. Empathie.\nTeamgeist.",
    desc: isRu
      ? "Наши врачи-специалисты обеспечивают высочайший уровень медицинской экспертизы, многолетний практический опыт и слаженное междисциплинарное взаимодействие. Вместе ради вашего здоровья."
      : isEn
      ? "Our medical specialists stand for the highest clinical excellence, extensive experience, and seamless interdisciplinary cooperation. Together for your well-being."
      : "Unsere Fachärztinnen und Fachärzte stehen für höchste medizinische Kompetenz, langjährige Erfahrung und eine enge, interdisziplinäre Zusammenarbeit. Gemeinsam für Ihre Gesundheit.",
    btn: isRu ? "Подробнее о команде" : isEn ? "Meet Our Team" : "Mehr über unser Team",
    doctors: [
      {
        name: isRu ? "Д-р мед. Анна Келлер" : "Dr. med. Anna Keller",
        role: isRu ? "Терапия и кардиология" : isEn ? "Internal Medicine & Cardiology" : "Innere Medizin & Kardiologie",
        desc: isRu
          ? "Ведущий специалист по комплексной терапии и неинвазивной кардиодиагностике с более чем 15-летним клиническим стажем."
          : isEn
          ? "Lead specialist in comprehensive internal medicine and non-invasive cardiovascular diagnostics with over 15 years of experience."
          : "Leitende Fachärztin für Innere Medizin und nicht-invasive Kardiologie mit über 15 Jahren fundierter klinischer Erfahrung.",
        image: "/images/areas/doc-anna-keller.webp",
      },
      {
        name: isRu ? "Проф. д-р Михаэль Вебер" : "Prof. Dr. Michael Weber",
        role: isRu ? "Хирургия" : isEn ? "General & Visceral Surgery" : "Chirurgie & Operative Medizin",
        desc: isRu
          ? "Эксперт в области общей и малоинвазивной хирургии, руководитель междисциплинарного хирургического центра NabiOta."
          : isEn
          ? "Renowned specialist in general and minimally invasive surgery, leading our interdisciplinary surgical center."
          : "Renommierter Experte für Allgemein- und minimalinvasive Chirurgie, Leitung unseres operativen Facharztzentrums.",
        image: "/images/areas/doc-michael-weber.webp",
      },
      {
        name: isRu ? "Д-р мед. Сара Хоффманн" : "Dr. med. Sarah Hoffmann",
        role: isRu ? "Неврология" : isEn ? "Neurology & Neurodiagnostics" : "Neurologie & Neurodiagnostik",
        desc: isRu
          ? "Специалист по клинической неврологии и нейродиагностике, эксперт по персонализированным схемам лечения."
          : isEn
          ? "Specialist in clinical neurology, neurodiagnostics, and individual therapy concepts for neurological health."
          : "Fachärztin für Neurologie mit Schwerpunkt auf moderner Neurodiagnostik und ganzheitlichen Therapiekonzepten.",
        image: "/images/areas/doc-sarah-hoffmann.webp",
      },
    ],
  };

  // ── Photo 4: Pre-footer Mountain Banner (Gesundheit beginnt mit Vertrauen) ──
  const ctaSection = {
    eyebrow: isRu
      ? "ЗДОРОВЬЕ НАЧИНАЕТСЯ С ДОВЕРИЯ"
      : isEn
      ? "HEALTH BEGINS WITH TRUST"
      : "GESUNDHEIT BEGINNT MIT VERTRAUEN",
    title: isRu
      ? "У вас есть вопросы о наших\nмедицинских отделениях?"
      : isEn
      ? "Do you have questions about our\nmedical specialties?"
      : "Sie haben Fragen zu unseren\nmedizinischen Fachbereichen?",
    desc: isRu
      ? "Наша команда с радостью проконсультирует вас лично — профессионально, внимательно и с учетом ваших индивидуальных потребностей."
      : isEn
      ? "Our team is happy to advise you personally – competently, empathetically, and tailored to your individual needs."
      : "Unser Team berät Sie gerne persönlich – kompetent, einfühlsam und auf Ihre individuellen Bedürfnisse abgestimmt.",
    btn: isRu ? "Связаться с нами" : isEn ? "Contact Us" : "Kontakt aufnehmen",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />

      {/* ── Page Hero ── */}
      <PageHero
        breadcrumb={
          <Breadcrumb
            items={[
              { label: heroData.breadcrumbHome, href: `/${locale}` },
              { label: heroData.breadcrumbAreas, href: `/${locale}/areas` },
              { label: heroData.title },
            ]}
          />
        }
        title={
          <>
            {heroData.title}
            <span className="block text-xl sm:text-2xl text-[#ECCF93] font-light mt-1 font-serif break-words [overflow-wrap:anywhere] hyphens-auto">
              {heroData.subtitle}
            </span>
          </>
        }
        description={heroData.description}
        imageSrc={area.image || "/images/heroes/hero-areas.webp"}
        imageAlt="Medizinische Fachbereiche NabiOta Health Group"
        badges={heroData.badges}
      />

      <main className="flex-1 bg-[#FAF8F5]">
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: OVERVIEW HEADER (EYEBROW + TITLE + DESCRIPTION)
            - "вот эту часть отсаедеине от контейнера и оставь сверху"
        ══════════════════════════════════════════════════════════ */}
        <section className="pt-10 sm:pt-14 pb-8 sm:pb-10 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
              <div className="lg:col-span-6 space-y-2">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                  {overviewData.eyebrow}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
                  {overviewData.title}
                </h2>
              </div>
              <div className="lg:col-span-6 border-l-2 border-[#D5B878]/60 pl-5 sm:pl-7">
                <p className="text-xs sm:text-[13.5px] text-[#556358] leading-relaxed font-sans">
                  {overviewData.desc}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: SPOTLIGHT KARDIOLOGIE
            - "а под ней должна сразу быть часть Кардиология — точность для здорового сердца"
            - Left: Ultrasound doctor photo with floating card
            - Right: Heart contour background, Eyebrow, Title, Description, 3 feature icons, Link
        ══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-14 lg:py-16 bg-[#FAF8F5] relative overflow-hidden border-t border-[#EDE8DE]/60">
          {/* Subtle Decorative Heart Contour & Wavy Gold Line in Top-Right */}
          <div className="absolute top-4 sm:top-8 right-6 sm:right-16 w-60 sm:w-80 h-60 sm:h-80 pointer-events-none opacity-45 z-0">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              className="w-full h-full text-[#D5B878]"
            >
              {/* Delicate Heart Silhouette */}
              <path
                d="M100 65 C85 30, 42 35, 42 75 C42 115, 100 155, 100 155 C100 155, 158 115, 158 75 C158 35, 115 30, 100 65 Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Smooth Elegant Flow Line */}
              <path
                d="M10 110 Q 60 70, 100 115 T 195 105"
                stroke="#C5A56A"
                strokeWidth="0.8"
                opacity="0.6"
              />
            </svg>
          </div>

          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Ultrasound Photo + Floating Bottom Pill Badge */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#EDE8DE]">
                  <Image
                    src="/images/areas/cardiology-focus.webp"
                    alt={spotlight.title}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Subtle vignette on bottom for card contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                  {/* Floating Pill Overlay Card */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full px-4 sm:px-5 py-2.5 sm:py-3 shadow-lg flex items-center justify-between gap-3 border border-white/60">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0C1C11] border border-[#D5B878]/60 flex items-center justify-center text-[#ECCF96] shadow-sm shrink-0">
                        <CloverEmblemIcon className="w-4.5 h-4.5 stroke-[1.6]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[13.5px] sm:text-[14px] font-bold text-[#142318] truncate leading-tight">
                          {spotlight.pillTitle}
                        </h4>
                        <p className="text-[11px] text-[#6E756D] truncate font-sans mt-0.5">
                          {spotlight.pillSubtitle}
                        </p>
                      </div>
                    </div>

                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#142318]/15 bg-white flex items-center justify-center text-[#142318] hover:bg-[#D5B878] hover:border-[#D5B878] hover:text-[#0C1C11] transition-all shrink-0 ml-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Title, Description, 3 Badges, Link */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-5 lg:pl-2">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                  {spotlight.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#132218] font-normal leading-[1.18] whitespace-pre-line">
                  {spotlight.title}
                </h2>

                <p className="text-xs sm:text-[13.5px] text-[#556358] leading-relaxed font-sans max-w-lg">
                  {spotlight.desc}
                </p>

                {/* 3 Horizontal Badges with Gold Outline Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 sm:pt-3">
                  {spotlight.features.map((feat, idx) => {
                    const FeatureIcon = feat.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5B878] bg-[#FAF8F5] flex items-center justify-center text-[#B89650] shrink-0 shadow-sm">
                          <FeatureIcon className="w-4 h-4 stroke-[1.6]" />
                        </div>
                        <span className="text-[11.5px] sm:text-xs font-medium text-[#425046] leading-snug">
                          {feat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Link with underline and arrow */}
                <div className="pt-2 sm:pt-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#142318] hover:text-[#B89650] underline decoration-[#D5B878] underline-offset-4 transition-colors"
                  >
                    <span>{spotlight.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: CORE CAPABILITIES & GROUP ADVANTAGES CARDS
            - 2-Column Grid: Core Capabilities & Group Advantages
            - Stats Badges
        ══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-14 lg:py-16 bg-[#FAF8F5] border-t border-[#EDE8DE]/60">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Card 1: Core Capabilities */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#EDE8DE] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full border border-[#D5B878] bg-[#FAF8F5] flex items-center justify-center text-[#B89650]">
                      <Stethoscope className="w-5 h-5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#142318] font-normal">
                      {overviewData.capabilitiesTitle}
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {overviewData.capabilities.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#B89650] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-[13.5px] text-[#2C3B30] font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EDE8DE]">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#142318] hover:text-[#B89650] transition-colors"
                  >
                    <span>{isRu ? "Записаться на прием" : isEn ? "Book an Appointment" : "Termin vereinbaren"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Group Advantages & Stats */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#EDE8DE] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full border border-[#D5B878] bg-[#FAF8F5] flex items-center justify-center text-[#B89650]">
                      <ShieldCheck className="w-5 h-5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#142318] font-normal">
                      {overviewData.advantagesTitle}
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {overviewData.advantages.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#3E5643] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-[13.5px] text-[#556358] leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3 Stats Counters */}
                <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-[#EDE8DE]">
                  {overviewData.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-serif text-2xl sm:text-3xl text-[#B89650] font-normal">
                        {stat.value}
                      </span>
                      <span className="text-[11px] text-[#6E756D] font-sans mt-0.5 leading-snug">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4 (PHOTO 1): WARUM NABIOTA? MEHR ALS MEDIZIN.
            - "страница мед направления сделай слева фон листочка возьми из фото сделай больше иконки и приведи этот блок в порядок"
            - Full-width edge-to-edge
            - Left: Delicate botanical branch watermark on left edge + Eyebrow + Title + Desc + Gold button
            - Middle: 4 points with larger circular gold icons (w-13 h-13 / w-14 h-14)
            - Right: Sunny Atrium Lounge photo flush to screen right edge with smooth fade
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#08170D] text-white relative overflow-hidden border-y border-[#D5B878]/30">
          {/* Background: Botanical leaves texture across the dark section */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/values/leaves-bg.webp"
              alt="Leaves Texture"
              fill
              className="object-cover object-left opacity-35 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08170D]/95 via-[#08170D]/80 to-[#08170D]/50" />
          </div>

          {/* Delicate Botanical Leaf Branch on Left Edge (Matching Photo 2) */}
          <div className="absolute -left-4 sm:-left-6 -top-6 sm:-top-8 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 pointer-events-none opacity-60 sm:opacity-70 select-none z-10">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt="Botanical Foliage"
              fill
              className="object-contain object-top-left -scale-x-100"
              priority
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[400px] lg:min-h-[460px] relative z-20">
            {/* Left Content Area: Eyebrow, Title, Description & Values Button */}
            <div className="w-full lg:w-[42%] xl:w-[40%] p-6 sm:p-10 lg:p-14 lg:pl-16 xl:pl-24 flex flex-col justify-center relative z-20">
              <div className="max-w-md space-y-3 sm:space-y-3.5">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {whySection.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-white font-normal leading-[1.15]">
                  {whySection.title}
                </h2>

                <p className="text-white/85 text-xs sm:text-[13.5px] leading-relaxed font-sans">
                  {whySection.desc}
                </p>

                <div className="pt-2 sm:pt-3">
                  <Link
                    href={`/${locale}/values`}
                    className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-[13px] tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span>{whySection.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Middle Column: 4 Vertical Points with LARGER Circular Gold Icons (Photo 2) */}
            <div className="w-full lg:w-[28%] xl:w-[27%] px-6 sm:px-10 lg:px-6 py-6 sm:py-8 lg:py-0 flex flex-col justify-center space-y-5 sm:space-y-6 relative z-20">
              {whySection.stats.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-4">
                    {/* Enlarged Circular Gold Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D5B878]/80 bg-[#08170D] flex items-center justify-center text-[#ECCF96] shrink-0 shadow-[0_0_15px_rgba(213,184,120,0.12)]">
                      <ItemIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
                    </div>
                    <span className="text-[13.5px] sm:text-[14.5px] font-medium text-white/95 leading-snug">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Side: Hospital Atrium Lounge Photo with ULTRA-SMOOTH fade into background */}
            <div className="w-full lg:w-[30%] xl:w-[33%] relative min-h-[260px] sm:min-h-[320px] lg:min-h-full shrink-0">
              <Image
                src="/images/areas/atrium-lounge.webp"
                alt="NabiOta Atrium Lounge"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Ultra-smooth multi-stop gradient fade from left dark forest green into sunny photo */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-48 sm:w-60 lg:w-72 bg-gradient-to-r from-[#08170D] via-[#08170D]/80 via-[#08170D]/40 to-transparent pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#08170D] via-[#08170D]/80 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5 (PHOTO 2): UNSER TEAM
            - "фото 2 сделай карточки докторов больше и с небольшим описанием"
            - Light cream background with botanical watermark in top-left
            - Left: Header content
            - Right: 3 ENLARGED Doctor Profile Cards with Descriptions & Photos
        ══════════════════════════════════════════════════════════ */}
        <section className="py-14 sm:py-18 lg:py-24 bg-[#FAF8F5] relative overflow-hidden">
          {/* Top-Left Botanical Watermark Accent (Photo 2) */}
          <div className="absolute -top-4 -left-4 w-52 sm:w-72 md:w-88 h-52 sm:h-72 md:h-88 pointer-events-none opacity-85 z-0 select-none">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt="Botanical Foliage"
              fill
              className="object-contain object-top-left -scale-x-100"
              priority
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Eyebrow, Title, Description, Button */}
              <div className="lg:col-span-4 space-y-4 pt-2">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                  {teamSection.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#132218] font-normal leading-[1.18] whitespace-pre-line">
                  {teamSection.title}
                </h2>

                <p className="text-xs sm:text-[13.5px] text-[#556358] leading-relaxed font-sans max-w-sm">
                  {teamSection.desc}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/${locale}/about`}
                    className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#132218] font-semibold text-xs sm:text-[13px] tracking-wide shadow-sm hover:shadow transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span>{teamSection.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 3 ENLARGED Doctor Profile Cards with Descriptions (Photo 2) */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                  {teamSection.doctors.map((doc, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#EDE8DE] hover:border-[#D5B878] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(213,184,120,0.16)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div>
                        {/* Doctor Photo - Generous Aspect Ratio */}
                        <div className="relative aspect-[4/3.2] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0C1C11]/5 mb-3.5">
                          <Image
                            src={doc.image}
                            alt={doc.name}
                            fill
                            className="object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                            sizes="(max-width: 768px) 100vw, 320px"
                          />
                        </div>

                        {/* Doctor Info */}
                        <div className="space-y-1 px-0.5">
                          <span className="text-[11px] font-semibold tracking-wide text-[#B89650] uppercase block">
                            {doc.role}
                          </span>
                          <h4 className="text-[15px] sm:text-[16.5px] font-serif font-medium text-[#142318] group-hover:text-[#B89650] transition-colors leading-snug">
                            {doc.name}
                          </h4>
                          {/* Doctor Description */}
                          <p className="text-[11.5px] sm:text-xs text-[#556358] leading-relaxed font-sans line-clamp-3 pt-1">
                            {doc.desc}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Row with Arrow Button */}
                      <div className="pt-3.5 mt-3.5 border-t border-[#EDE8DE]/70 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-[#142318]/70 group-hover:text-[#142318] transition-colors">
                          {isRu ? "Профиль врача" : isEn ? "View Profile" : "Arztprofil"}
                        </span>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#142318]/15 group-hover:border-[#D5B878] group-hover:bg-[#D5B878] group-hover:text-[#0C1C11] flex items-center justify-center text-[#142318] transition-all shrink-0">
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4 (PHOTO 4): PRE-FOOTER MOUNTAIN CTA BANNER
            - Full-width panoramic container with gold borders
            - Mountains landscape background (/images/values/mountains-bg.webp)
            - Right: delicate botanical leaf watermark in gold
            - Left: GESUNDHEIT BEGINNT MIT VERTRAUEN + Sie haben Fragen...
            - Right: Kontakt aufnehmen →
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden border-y border-[#D5B878]/60 bg-[#08170D]">
          {/* Mountains Background Image */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/values/mountains-bg.webp"
              alt="Mountain Forest Landscape"
              fill
              className="object-cover object-[center_60%]"
              priority
            />
            {/* Dark green overlay matching Photo 4 */}
            <div className="absolute inset-0 bg-[#06140B]/55 backdrop-blur-[0.5px]" />
          </div>

          {/* Right Gold Botanical Leaf Silhouette Watermark (Photo 4) */}
          <div className="absolute right-0 top-0 bottom-0 w-64 sm:w-80 pointer-events-none opacity-30 overflow-hidden select-none">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt="Botanical Foliage"
              fill
              className="object-contain object-right"
            />
          </div>

          <Container size="wide" className="relative z-10 py-10 sm:py-12 lg:py-14">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
              {/* Left: Eyebrow + Title */}
              <div className="space-y-1.5 lg:max-w-md shrink-0">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {ctaSection.eyebrow}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-[1.2] whitespace-pre-line">
                  {ctaSection.title}
                </h2>
              </div>

              {/* Middle: Text */}
              <div className="max-w-md lg:max-w-lg">
                <p className="text-xs sm:text-[13.5px] text-white/85 leading-relaxed font-sans">
                  {ctaSection.desc}
                </p>
              </div>

              {/* Right: Gold Pill Button */}
              <div className="shrink-0">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.03]"
                >
                  <span>{ctaSection.btn}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
