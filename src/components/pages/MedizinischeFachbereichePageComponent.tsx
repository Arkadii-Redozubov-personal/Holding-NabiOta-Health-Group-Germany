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
  Clock,
  Users,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { MvzPrimaryCareSection } from "@/components/sections/MvzPrimaryCareSection";
import { MvzSurgeryCareSection } from "@/components/sections/MvzSurgeryCareSection";
import { ClinicsGermanySection } from "@/components/sections/ClinicsGermanySection";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";
import { businessAreas } from "@/data/areas";

// ── Custom SVG Icons Matching User Design ──
function ScalpelIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m18 2-4 4-9.5 9.5a1 1 0 0 0 0 1.4l2.1 2.1a1 1 0 0 0 1.4 0L17.5 9.5 22 5Z" />
      <path d="m14 6 4 4" />
    </svg>
  );
}

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
      ? "Медицинские направления группы NabiOta® объединяют первичную терапевтическую помощь с высокоспециализированными хирургическими центрами и стационарной клиникой. В наших специализированных центрах (MVZ) и планируемой клинике представлены терапия, кардиология, ортопедия, нейрохирургия, пластическая хирургия и анестезиология по высшим немецким стандартам качества."
      : isEn
      ? "The medical divisions of the NabiOta® Group combine primary general medical care with highly specialized surgical centers and inpatient facilities. Across our outpatient medical centers (MVZ) and upcoming clinic, we cover general medicine, cardiology, orthopedics, neurosurgery, plastic surgery, and anesthesiology according to highest German standards."
      : "Die medizinischen Fachbereiche der NabiOta® Gruppe verbinden hausärztliche Grundversorgung mit hochspezialisierten operativen Zentren und stationärer Klinikversorgung. In unseren Facharztzentren (MVZ) und der geplanten Fachklinik decken wir Allgemeinmedizin, Kardiologie, Orthopädie, Neurochirurgie, plastische Chirurgie sowie Anästhesiologie nach höchsten deutschen Qualitätsstandards ab.",
    capabilitiesTitle: isRu ? "Структура медицинских подразделений" : isEn ? "Clinical Divisions & Entities" : "Struktur der Fachbereiche & Zentren",
    capabilities: [
      isRu
        ? "MVZ Терапии: семейная медицина, общая терапия, кардиология и диабетология"
        : isEn
        ? "Primary Care MVZ: General practice, internal medicine, cardiology & diabetology"
        : "MVZ Hausärztlich / Internistisch: Allgemeinmedizin, Innere Medizin, Kardiologie & Diabetologie",
      isRu
        ? "MVZ Хирургии: ортопедия, травматология, нейрохирургия позвоночника и пластическая хирургия"
        : isEn
        ? "Surgical MVZ: Orthopedics, traumatology, spinal neurosurgery & plastic surgery"
        : "MVZ Chirurgie & Anästhesiologie: Orthopädie, Unfallchirurgie, Neurochirurgie & Plastische Chirurgie",
      isRu
        ? "Амбулаторный операционный центр (AOP) и специализированное отделение анестезиологии"
        : isEn
        ? "Outpatient Surgical Center (AOP) & specialized department for anesthesiology"
        : "Ambulantes Operieren (AOP) & modernes Anästhesiezentrum",
      isRu
        ? "NabiOta® Clinics Germany GmbH: стационарная клиника по § 30 GewO с коечным фондом"
        : isEn
        ? "NabiOta® Clinics Germany GmbH: Inpatient surgical clinic under § 30 GewO with ward beds"
        : "NabiOta® Clinics Germany GmbH: Stationäre Fachklinik nach § 30 GewO mit Bettenstationen",
      isRu
        ? "Полная врачебная независимость клинических решений (§ 95 SGB V)"
        : isEn
        ? "Guaranteed clinical autonomy and freedom of medical decisions (§ 95 SGB V)"
        : "Volle ärztliche Weisungsfreiheit nach § 95 SGB V für alle Behandelnden",
    ],
    advantagesTitle: isRu ? "Преимущества в составе холдинга" : isEn ? "Group Advantages" : "Ihre Vorteile im Verbund",
    advantages: [
      isRu
        ? "Междисциплинарное сотрудничество всех специалистов под одной крышей"
        : isEn
        ? "Interdisciplinary collaboration of all specialists under one roof"
        : "Interdisziplinäre Zusammenarbeit aller Fachärzte unter einem Dach",
      isRu
        ? "Прямой переход от амбулаторного приема к хирургии и реабилитации"
        : isEn
        ? "Seamless transition from outpatient diagnosis to surgery and rehabilitation"
        : "Nahtloser Übergang von Diagnostik zu OP, Reha und ambulanter Pflege",
      isRu
        ? "Быстрая запись на прием и цифровая передача медицинских заключений"
        : isEn
        ? "Rapid appointment scheduling and digital report transfer"
        : "Schnelle Terminvergabe und digitale Befundübermittlung",
      isRu
        ? "Строгое соблюдение немецких клинических рекомендаций и стандартов безопасности"
        : isEn
        ? "Strict compliance with German clinical guidelines and patient safety standards"
        : "Strenge Einhaltung deutscher Leitlinien und höchste Patientensicherheit",
    ],
    stats: [
      {
        value: "2 MVZ",
        label: isRu ? "Специализированных центра" : isEn ? "Specialist MVZs" : "MVZ Facharztzentren",
      },
      {
        value: "§ 30",
        label: isRu ? "Клиника (GewO)" : isEn ? "Inpatient Clinic (GewO)" : "Klinikzulassung (GewO)",
      },
      {
        value: "§ 95",
        label: isRu ? "Врачебная автономия (SGB V)" : isEn ? "Clinical Autonomy (SGB V)" : "Ärztl. Unabhängigkeit (SGB V)",
      },
    ],
    entitiesTitle: isRu ? "Медицинские структуры холдинга" : isEn ? "Medical Group Entities" : "Medizinische Gesellschaften des Holdings",
    entities: [
      {
        tag: "MVZ 1",
        title: isRu ? "MVZ Терапии и семейной медицины" : isEn ? "MVZ Primary Care & Internal Medicine" : "MVZ Hausärztlich / Internistisch",
        sub: isRu ? "Амбулаторная помощь" : isEn ? "Outpatient Primary Care" : "Ambulante Grund- & Schwerpunktversorgung",
        items: [
          isRu ? "Семейная медицина и первичная помощь" : isEn ? "General Practice & Family Medicine" : "Allgemeinmedizin & Hausärztliche Versorgung",
          isRu ? "Внутренние болезни, кардиология и диабет" : isEn ? "Internal Medicine, Cardiology & Diabetes" : "Innere Medizin, Kardiologie & Diabetologie",
          isRu ? "Профилактические чекапы и программы DMP" : isEn ? "Check-ups & Chronic Disease Programs (DMP)" : "Präventionsmedizin, Check-ups & DMP-Programme",
        ],
      },
      {
        tag: "MVZ 2",
        title: isRu ? "MVZ Хирургии и анестезиологии" : isEn ? "MVZ Surgery & Anesthesiology" : "MVZ Chirurgie & Anästhesiologie",
        sub: isRu ? "Специализированная хирургия" : isEn ? "Specialized Surgical Care" : "Operative Spezialdisziplinen",
        items: [
          isRu ? "Ортопедия и травматологическая хирургия" : isEn ? "Orthopedics & Trauma Surgery" : "Orthopädie & Unfallchirurgie",
          isRu ? "Нейрохирургия (позвоночник и боль)" : isEn ? "Neurosurgery (Spine & Pain Therapy)" : "Neurochirurgie (Wirbelsäule & Schmerztherapie)",
          isRu ? "Пластическая и амбулаторные операции (AOP)" : isEn ? "Plastic Surgery & Outpatient ORs (AOP)" : "Plastische Chirurgie & Ambulantes Operieren (AOP)",
        ],
      },
      {
        tag: "Klinik",
        title: "NabiOta® Clinics Germany GmbH",
        sub: isRu ? "Стационарная клиника (§ 30 GewO)" : isEn ? "Inpatient Clinic (§ 30 GewO)" : "Stationäre Versorgung (§ 30 GewO)",
        items: [
          isRu ? "Операционные блоки и коечные палаты" : isEn ? "Inpatient Operating Suites & Ward Beds" : "Stationäre OP-Säle & bettenführende Stationen",
          isRu ? "Круглосуточный послеоперационный мониторинг" : isEn ? "24/7 Post-Surgical Clinical Monitoring" : "Postoperative Überwachung & Schmerztherapie",
          isRu ? "Интеграция с больничным планом (§ 108/109 SGB V)" : isEn ? "Hospital Plan Integration (§ 108/109 SGB V)" : "Kooperationen & Versorgungsverträge (§ 108/109 SGB V)",
        ],
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
          locale={locale}
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
            - Redesigned into premium editorial corporate layout matching reference photos
            - Left: Struktur der Fachbereiche & Zentren with enlarged emblem, thin green curved arc, soft blur & stethoscope photo
            - Right: Ihre Vorteile im Verbund with enlarged advantage icons/text & prominent stats
            - Middle: Centered group heading
            - Bottom: 3 company cards with enlarged icons and compact height
        ══════════════════════════════════════════════════════════ */}
        <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 bg-[#FAF8F5] border-t border-[#EDE8DE]/60">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Two Feature Cards (Left wider, Right narrower with lower height) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
              {/* Card 1: Core Capabilities (Wider ~58% width: lg:col-span-7) */}
              <div className="lg:col-span-7 bg-white rounded-[22px] sm:rounded-[24px] border border-[#EDE8DE] shadow-[0_2px_14px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between p-5 sm:p-6 lg:p-6.5 h-full">
                {/* Right Side: Organic Stethoscope Photo with soft blur and thin green arc */}
                <div className="absolute -top-3 right-0 -bottom-3 w-[42%] sm:w-[44%] lg:w-[44%] pointer-events-none select-none">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/areas/stethoscope-clinic.webp"
                      alt="Klinische Umgebung und Stethoskop"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    {/* Soft gradient fade into white card background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
                    {/* Delicate blur transition on the left edge of photo */}
                    <div className="absolute inset-y-0 left-0 w-20 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent backdrop-blur-[2px]" />

                    {/* Thin delicate green curved outline/arc seamlessly framing the photo from top to bottom edge */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
                      viewBox="0 0 300 600"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <path
                        d="M 45 -20 C -5 170, 25 380, 195 650"
                        stroke="#1C452F"
                        strokeWidth="1.3"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Light Holding Emblem */}
                  <div className="absolute top-8 left-2 sm:left-3 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF3E8] border border-[#D5B878] flex items-center justify-center text-[#9E7D3B] shadow-md z-20">
                    <Building2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.6]" />
                  </div>
                </div>

                {/* Content Layer (Left ~60%) */}
                <div className="relative z-10 max-w-[62%] sm:max-w-[60%] flex flex-col justify-between h-full">
                  <div>
                    {/* Eyebrow with gold line */}
                    <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                      <span className="w-5 h-[1.5px] bg-[#C5A56A]" />
                      <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#C5A56A] font-sans">
                        {isRu ? "МЕДИЦИНСКАЯ ПОМОЩЬ" : isEn ? "MEDICAL CARE" : "MEDIZINISCHE VERSORGUNG"}
                      </span>
                    </div>

                    {/* Main Heading */}
                    <h3 className="font-serif text-[22px] sm:text-[25px] lg:text-[27px] text-[#142318] font-normal leading-[1.18] mb-3">
                      {overviewData.capabilitiesTitle}
                    </h3>

                    {/* 5 Bullet Points (Compact & readable) */}
                    <div className="space-y-2 sm:space-y-2.5 mb-4">
                      {overviewData.capabilities.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#B89650] shrink-0 mt-0.5" />
                          <span className="text-[11px] sm:text-[11.5px] text-[#2C3B30] font-normal leading-snug font-sans">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom-left CTA Button */}
                  <div className="pt-2">
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#EED4A2] via-[#E4C58B] to-[#D5B878] text-[#142318] hover:brightness-105 font-semibold text-[12px] sm:text-[12.5px] shadow-sm transition-all"
                    >
                      <span>{isRu ? "Записаться на прием" : isEn ? "Book an Appointment" : "Termin vereinbaren"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Group Advantages (Narrower ~42% width: lg:col-span-5) */}
              <div className="lg:col-span-5 bg-white rounded-[22px] sm:rounded-[24px] border border-[#EDE8DE] shadow-[0_2px_14px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between p-5 sm:p-6 lg:p-6 h-full">
                {/* Subtle botanical branch on right edge */}
                <div className="absolute top-0 right-0 w-32 sm:w-36 lg:w-40 pointer-events-none opacity-80 z-0 select-none">
                  <Image
                    src="/images/areas/botanical-branch-clean.webp"
                    alt="Botanical detail"
                    width={160}
                    height={220}
                    className="object-contain object-top-right ml-auto"
                  />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Eyebrow with gold line */}
                    <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                      <span className="w-5 h-[1.5px] bg-[#C5A56A]" />
                      <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#C5A56A] font-sans">
                        {isRu ? "ВАШИ ПРЕИМУЩЕСТВА" : isEn ? "YOUR ADVANTAGES" : "IHRE VORTEILE"}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3 className="font-serif text-[21px] sm:text-[24px] lg:text-[26px] text-[#142318] font-normal leading-[1.18] mb-3">
                      {overviewData.advantagesTitle}
                    </h3>

                    {/* 4 Advantages with elegant circular icons & compact text */}
                    <div className="space-y-2 sm:space-y-2.5">
                      {overviewData.advantages.map((item, idx) => {
                        const AdvantageIcon = [Users, Heart, Clock, ShieldCheck][idx] || ShieldCheck;
                        return (
                          <div key={idx} className="flex items-center gap-2.5">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EBF1ED] border border-[#DCE6E0] flex items-center justify-center text-[#1E3B29] shrink-0 shadow-xs">
                              <AdvantageIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
                            </div>
                            <span className="text-[11.5px] sm:text-[12px] text-[#334237] font-normal leading-snug font-sans">
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Editorial Statistics Row */}
                  <div className="grid grid-cols-3 gap-2 pt-3 sm:pt-3.5 mt-3.5 border-t border-[#EAE3D5]">
                    {overviewData.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${idx < 2 ? "border-r border-[#EAE3D5] pr-2" : "pl-1"}`}
                      >
                        <span className="font-serif text-[22px] sm:text-[25px] text-[#B89650] font-normal leading-none mb-1">
                          {stat.value}
                        </span>
                        <span className="text-[9.5px] sm:text-[10px] text-[#6E756D] font-sans leading-tight">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section Divider & Centered Company Entities Header */}
            <div className="my-12 sm:my-16">
              <div className="relative flex items-center justify-center mb-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#EDE8DE]"></div>
                </div>
                <div className="relative bg-[#FAF8F5] px-6 text-center">
                  <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#B89650] uppercase font-sans">
                    {overviewData.entitiesTitle}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-[30px] lg:text-[32px] text-[#142318] font-normal text-center leading-[1.25] max-w-3xl mx-auto mt-4">
                {isRu
                  ? "Специализированные подразделения группы для амбулаторной и стационарной медицины высшего уровня"
                  : isEn
                  ? "Specialized group entities for outpatient and inpatient medicine of excellence"
                  : "Spezialisierte Gesellschaften der Gruppe für ambulante und stationäre Spitzenmedizin"}
              </h3>
            </div>

            {/* 3 Medical Entities Grid matching corporate structure (compact height, larger icons) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {overviewData.entities.map((entity, eIdx) => {
                const EntityIcon = [Stethoscope, ScalpelIcon, Building2][eIdx] || Building2;
                return (
                  <div
                    key={eIdx}
                    className="bg-white rounded-[20px] sm:rounded-[22px] p-5 sm:p-5.5 border border-[#EDE8DE] hover:border-[#D5B878] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top row: Eyebrow with gold line left, secondary descriptor right */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-[1.5px] bg-[#C5A56A]" />
                          <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] text-[#C5A56A] uppercase">
                            {entity.tag}
                          </span>
                        </div>
                        <span className="text-[11px] sm:text-[11.5px] text-[#7A857D] font-sans truncate ml-2 text-right">
                          {entity.sub}
                        </span>
                      </div>

                      {/* Icon & Title Row (Larger Circular Icon) */}
                      <div className="flex items-center gap-3.5 mb-2.5">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E8F1EC] border border-[#D4E3D8] flex items-center justify-center text-[#183B26] shrink-0 group-hover:bg-[#D5B878]/15 group-hover:border-[#D5B878] group-hover:text-[#8C6D2B] transition-colors shadow-xs">
                          <EntityIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.6]" />
                        </div>
                        <h4 className="font-serif text-[15.5px] sm:text-[16.5px] text-[#142318] font-bold leading-snug group-hover:text-[#B89650] transition-colors">
                          {entity.title}
                        </h4>
                      </div>

                      {/* Bullet points (Compact & Readable) */}
                      <div className="space-y-1.5 mt-2">
                        {entity.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B89650] shrink-0 mt-0.5" />
                            <span className="text-[11px] sm:text-[11.5px] text-[#556358] leading-relaxed font-sans">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom-right corner arrow button */}
                    <div className="pt-2.5 flex justify-end">
                      <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full border border-[#DCD5C6] bg-[#FAF8F5] group-hover:border-[#C5A56A] group-hover:bg-[#C5A56A] group-hover:text-white text-[#B89650] flex items-center justify-center transition-all shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3B: MVZ HAUSÄRZTLICH / FACHÄRZTLICH – PDF IV.1 */}
        <MvzPrimaryCareSection locale={locale} />

        {/* SECTION 3C: MVZ CHIRURGIE & ANÄSTHESIOLOGIE – PDF IV.2 */}
        <MvzSurgeryCareSection locale={locale} />

        {/* SECTION 3D: NABIOTA CLINICS GERMANY – PDF IV.3 */}
        <ClinicsGermanySection locale={locale} />



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
