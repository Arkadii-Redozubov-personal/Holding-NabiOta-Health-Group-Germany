import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ChevronRight, ArrowRight, Users, Building2, CheckCircle2 } from "lucide-react";
import { SupportedLocale } from "@/lib/i18n";

interface AboutPageComponentProps {
  locale?: SupportedLocale;
}

/* ── Custom SVGs matching Reference Photo 1:1 ────────────────────────── */

// 1. Hero Icons
function PeopleCenterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="7" r="3" />
      <path d="M7 20v-1a5 5 0 0 1 10 0v1" />
      <circle cx="5" cy="9" r="2" />
      <path d="M2 19v-1a3.5 3.5 0 0 1 3.5-3.5" />
      <circle cx="19" cy="9" r="2" />
      <path d="M22 19v-1a3.5 3.5 0 0 0-3.5-3.5" />
    </svg>
  );
}

function LeafIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 20A7 7 0 0 1 4 13C4 7 11 3 20 3c0 9-4 16-10 16" />
      <path d="M4 20l7-7" />
    </svg>
  );
}

function ShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function FoliageCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="foliageGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0) rotate(45) scale(280)">
          <stop stopColor="#1B3822" stopOpacity="0.85" />
          <stop offset="0.6" stopColor="#122A1A" stopOpacity="0.4" />
          <stop offset="1" stopColor="#0B1A10" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="340" height="340" fill="url(#foliageGlow)" />
      <g opacity="0.78" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.45))">
        <path d="M-10,-10 C40,40 90,70 140,85 C190,100 230,95 270,110" stroke="#1F4229" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M60,50 C75,90 95,120 120,150" stroke="#1F4229" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M130,80 C140,120 165,150 190,170" stroke="#1F4229" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M35,25 C45,15 65,15 75,30 C65,45 45,45 35,25 Z" fill="#2E5A39" opacity="0.9" />
        <path d="M70,45 C85,30 110,35 115,55 C100,70 75,65 70,45 Z" fill="#3D734C" opacity="0.95" />
        <path d="M100,65 C120,50 145,60 145,80 C125,95 105,85 100,65 Z" fill="#2B5636" opacity="0.85" />
        <path d="M140,80 C160,65 185,75 190,95 C170,110 145,100 140,80 Z" fill="#3D734C" opacity="0.95" />
        <path d="M185,90 C210,75 235,90 235,110 C210,125 190,110 185,90 Z" fill="#285232" opacity="0.9" />
        <path d="M230,100 C250,90 275,105 270,125 C250,135 230,120 230,100 Z" fill="#34633F" opacity="0.85" />
        <path d="M70,75 C65,95 75,115 95,115 C105,95 95,75 70,75 Z" fill="#3A6C46" opacity="0.9" />
        <path d="M90,115 C85,135 100,155 120,150 C125,130 110,110 90,115 Z" fill="#2D5837" opacity="0.85" />
        <path d="M115,145 C110,165 125,185 145,180 C150,160 135,140 115,145 Z" fill="#467E54" opacity="0.9" />
        <path d="M140,110 C135,130 150,150 170,145 C175,125 160,105 140,110 Z" fill="#366640" opacity="0.85" />
        <path d="M165,140 C160,160 175,180 195,175 C200,155 185,135 165,140 Z" fill="#2B5636" opacity="0.8" />
        <path d="M15,65 C5,85 15,110 35,110 C45,90 35,70 15,65 Z" fill="#1E4527" opacity="0.75" />
        <path d="M40,100 C30,120 40,145 60,145 C70,125 60,105 40,100 Z" fill="#275031" opacity="0.7" />
        <path d="M5,130 C-5,150 5,175 25,175 C35,155 25,135 5,130 Z" fill="#183B20" opacity="0.65" />
      </g>
    </svg>
  );
}

// 2. Mission & Vision Icons
function TargetIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function VisionEyeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

// 3. Stats Icons
function TeamStatsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="7" r="3" />
      <path d="M8.5 20c0-2.5 1.5-4.5 3.5-4.5s3.5 2 3.5 4.5" />
      <circle cx="6" cy="9" r="2" />
      <path d="M2.5 20c0-1.8 1.2-3.3 2.8-3.6" />
      <circle cx="18" cy="9" r="2" />
      <path d="M21.5 20c0-1.8-1.2-3.3-2.8-3.6" />
    </svg>
  );
}

function BuildingStatsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  );
}

function HandshakeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.4-2.4a1 1 0 0 0-1.4 0L13 13" />
      <path d="m13 13-3-3a1 1 0 0 0-1.4 0L4.3 14.3a1 1 0 0 0 0 1.4l2.4 2.4a1 1 0 0 0 1.4 0L11 15" />
      <path d="m7 7 3-3a1 1 0 0 1 1.4 0l8.9 8.9a1 1 0 0 1 0 1.4l-1.6 1.6" />
      <path d="M2 12l2.6-2.6a1 1 0 0 1 1.4 0L9 12" />
    </svg>
  );
}

function HeartStatsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

// 4. Entities Icons
function StethoscopeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 3v6a6 6 0 0 0 12 0V3" />
      <path d="M5 3h2M17 3h2" />
      <path d="M12 15v2a3.5 3.5 0 0 0 7 0v-1" />
      <circle cx="19" cy="16" r="1.5" />
    </svg>
  );
}

function ScalpelIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m14 4 6 6-9 9-6-6Z" />
      <path d="m11 7 6 6" />
      <path d="M3 21l3-3" />
    </svg>
  );
}

function ScannerMriIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M6 16h12" />
    </svg>
  );
}

function RealEstateIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 10h1M14 10h1M9 14h1M14 14h1" />
    </svg>
  );
}

function ActivityRehabIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="5" r="2" />
      <path d="m10 9 4 2-2 4 4 6" />
      <path d="m6 13 4-2-1-4" />
      <path d="M12 15l-3 6" />
    </svg>
  );
}

function HomeCareIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 10.5 12 3l9 7.5v9.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function CrossPharmacyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
    </svg>
  );
}

function LightbulbValuesIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6M10 22h4" />
    </svg>
  );
}

export function AboutPageComponent({ locale = "de" }: AboutPageComponentProps) {
  // Multilingual content dictionary
  const isEn = locale === "en";
  const isRu = locale === "ru";

  const t = {
    breadcrumbHome: isRu ? "Главная" : isEn ? "Home" : "Startseite",
    breadcrumbAbout: isRu ? "О холдинге" : isEn ? "About Us" : "Über uns",
    heroEyebrow: isRu ? "О ХОЛДИНГЕ" : isEn ? "ABOUT THE HOLDING" : "ÜBER DIE UNTERNEHMENSGRUPPE",
    heroTitlePart1: isRu ? "Сильная группа" : isEn ? "A strong group" : "Eine starke Gruppe",
    heroTitlePart2: isRu ? "для здорового будущего." : isEn ? "for a healthier future." : "für eine gesündere Zukunft.",
    heroDesc: isRu
      ? "NabiOta® Health Group Germany GmbH с головным офисом в Мёнхенгладбахе объединяет первичную медицинскую помощь, диагностику, реабилитацию, уход и сопутствующие медицинские услуги под единым брендом, создавая долгосрочную ценность для пациентов, сотрудников и партнеров."
      : isEn
      ? "NabiOta® Health Group Germany GmbH based in Mönchengladbach unites primary medical care, diagnostics, rehabilitation, home care, and related healthcare services under one cohesive brand, creating long-term value for patients, staff, and partners."
      : "Die NabiOta® Health Group Germany GmbH mit Sitz in Mönchengladbach vereint medizinische Grundversorgung, Diagnostik, Rehabilitation, Pflege und angrenzende Gesundheitsleistungen unter einer gemeinsamen Marke – für nachhaltige Werte für Patienten, Mitarbeitende und Partner.",
    badge1Title: isRu ? "Человек" : isEn ? "People" : "Mensch",
    badge1Sub: isRu ? "в центре внимания" : isEn ? "at the center" : "im Mittelpunkt",
    badge2Title: isRu ? "Устойчивый" : isEn ? "Sustainable" : "Nachhaltiges",
    badge2Sub: isRu ? "рост" : isEn ? "growth" : "Wachstum",
    badge3Title: isRu ? "Здоровое" : isEn ? "A healthier" : "Gesünderes",
    badge3Sub: isRu ? "завтра" : isEn ? "tomorrow" : "Morgen",

    rootsEyebrow: isRu ? "ИСТОРИЯ И КОРНИ" : isEn ? "OUR ROOTS & HISTORY" : "UNSERE WURZELN & GESCHICHTE",
    rootsTitle1: isRu ? "Опыт десятилетий." : isEn ? "Rooted in Experience." : "Aus Erfahrung gewachsen.",
    rootsTitle2: isRu ? "Направленность в будущее." : isEn ? "Built for the Future." : "Für die Zukunft aufgestellt.",
    rootsP1: isRu ? (
      <>
        NabiOta® Health Group Germany GmbH (HRB 16787, Amtsgericht Mönchengladbach) зарегистрирована с уставным капиталом 50.000 EUR по адресу: Aachener Straße 114, 41061 Mönchengladbach. Корни группы восходят к стратегическому развитию медицинской экспертизы и{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong>. Благодаря расширению корпоративной структуры и привлечению лицензированных специалистов был заложен фундамент долгосрочной медицинской группы.
      </>
    ) : isEn ? (
      <>
        NabiOta® Health Group Germany GmbH (HRB 16787, Amtsgericht Mönchengladbach) was incorporated with a share capital of EUR 50,000 at Aachener Straße 114, 41061 Mönchengladbach. Tracing its origins back to{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong>, the group has evolved through structured corporate development and specialist medical participation into a future-ready healthcare group.
      </>
    ) : (
      <>
        Die NabiOta® Health Group Germany GmbH ist unter HRB 16787 beim Amtsgericht Mönchengladbach eingetragen (Stammkapital: 50.000 EUR, Geschäftsanschrift: Aachener Straße 114, 41061 Mönchengladbach). Ausgehend von den Wurzeln der{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong> wurde durch organisatorische Weiterentwicklung und den Ausbau gesellschaftsrechtlicher Strukturen die Grundlage für einen integrierten Verbund ambulanter und stationärer medizinischer Einrichtungen geschaffen.
      </>
    ),
    rootsP2: isRu
      ? "Цель развития — объединить терапевтическую, хирургическую, диагностическую помощь, реабилитацию и уход под единым брендом. Структура холдинга обеспечивает централизованное экономическое и административное управление, гарантируя при этом 100% независимость врачебных решений."
      : isEn
      ? "The goal is an integrated network uniting primary care, surgical specialties, diagnostics, rehabilitation, and home care under one brand. The holding provides centralized administrative and economic management while strictly upholding clinical independence."
      : "Ziel ist ein Verbund aus hausärztlicher und internistischer Versorgung, neurologischer und chirurgischer Versorgung sowie einer zunächst nach § 30 GewO betriebenen Privatklinik. Die Holding übernimmt zentrale Managementleistungen, während ärztliche Verantwortung und Leistungserbringung bei den berechtigten Betreibern verbleiben.",

    missionEyebrow: isRu ? "МИССИЯ И ВИДЕНИЕ" : isEn ? "OUR MISSION & GOALS" : "UNSER AUFTRAG & ZIELE",
    missionHeading: isRu ? "Что нами движет" : isEn ? "What Drives Us" : "Was uns antreibt",
    missionLead: isRu
      ? "Мы понимаем здоровье не только как лечение заболеваний, но и как целостную задачу: всесторонняя поддержка человека в различных жизненных ситуациях и долгосрочное повышение качества жизни."
      : isEn
      ? "We understand health not merely as the treatment of illnesses, but as a holistic mission: supporting people in diverse life situations and sustainably enhancing their quality of life."
      : "Wir verstehen Gesundheit nicht nur als Behandlung von Krankheiten, sondern als ganzheitliche Aufgabe. Deshalb setzen wir uns dafür ein, Menschen in unterschiedlichen Lebenssituationen bestmöglich zu unterstützen und ihre Lebensqualität langfristig zu fördern.",
    cardMissionTitle: isRu ? "Наш заказ (Миссия)" : isEn ? "Our Mission" : "Unser Auftrag",
    cardMissionText: isRu
      ? "Оказывать людям наилучшую поддержку посредством высококачественной медицинской помощи, современной диагностики, индивидуального ухода и инновационных услуг — надежно сопровождая пациентов на всем пути лечения."
      : isEn
      ? "To provide people with the best possible support through high-quality medical care, modern diagnostics, personalized attention, and innovative healthcare services throughout their entire treatment journey."
      : "Unser Auftrag ist es, Menschen durch hochwertige medizinische Versorgung, moderne Diagnostik, individuelle Betreuung und innovative Gesundheitsdienstleistungen bestmöglich zu unterstützen und Patienten auf ihrem gesamten Behandlungsweg verlässlich zu begleiten.",
    cardVisionTitle: isRu ? "Наши цели" : isEn ? "Our Goals" : "Unsere Ziele",
    cardVisionText: isRu
      ? "Здравоохранение, в котором медицинская компетентность, передовые технологии и человеческая забота идут рука об руку: объединение медицинских услуг, облегчение доступа к лечению и создание устойчивых структур."
      : isEn
      ? "Healthcare in which medical competence, modern technologies, and human compassion go hand in hand: connecting care services, easing access to treatments, and creating sustainable structures for the future."
      : "Unser Ziel ist eine Gesundheitsversorgung, in der medizinische Kompetenz, moderne Technologien und menschliche Zuwendung Hand in Hand gehen. Wir vernetzen Versorgungsangebote, erleichtern den Zugang und schaffen nachhaltige Versorgungsstrukturen.",

    stat1Num: "3,000+",
    stat1Label: isRu ? "Преданных специалистов" : isEn ? "Dedicated professionals" : "Engagierte Fachkräfte",
    stat2Num: "10",
    stat2Label: isRu ? "Подразделений и предприятий" : isEn ? "Divisions & operating entities" : "Unternehmensbereiche & Einheiten",
    stat3Num: "100+",
    stat3Label: isRu ? "Партнерская сеть" : isEn ? "Partner network" : "Partner im Netzwerk",
    stat4Num: isRu ? "Одна" : isEn ? "One" : "Eine",
    stat4Label: isRu ? "Общая миссия во имя здорового будущего" : isEn ? "Shared mission for a healthier tomorrow" : "Gemeinsame Mission für eine gesündere Zukunft",

    orgEyebrow: isRu ? "ОРГАНИЗАЦИОННАЯ СТРУКТУРА" : isEn ? "ORGANIZATIONAL STRUCTURE" : "ORGANISATION & STRUKTUR",
    orgHeading: isRu ? "Структура холдинга и дочерние общества" : isEn ? "Holding & Subsidiary Entities" : "Unternehmensstruktur – Holding & Tochtergesellschaften",
    holdingBadge: isRu ? "ХОЛДИНГ / КОНЦЕРН" : isEn ? "HOLDING / KONZERN" : "HOLDING / KONZERN",

    twoPhaseEyebrow: isRu ? "СТРАТЕГИЯ РАЗВИТИЯ" : isEn ? "DEVELOPMENT STRATEGY" : "STRATEGISCHE ENTWICKLUNG",
    twoPhaseTitle: isRu ? "Структура участия в две фазы" : isEn ? "Two-Phase Corporate Evolution" : "Beteiligungsstruktur in zwei Phasen",
    twoPhaseDesc: isRu
      ? "Развитие холдинга строится последовательно для обеспечения юридической безупречности и устойчивого масштабирования."
      : isEn
      ? "The group's corporate expansion is engineered systematically to ensure full regulatory compliance and sustainable scaling."
      : "Der Aufbau der NabiOta-Gruppe erfolgt in zwei klar definierten Phasen zur Sicherstellung voller berufs- und zulassungsrechtlicher Konformität.",
    phase1Title: isRu ? "Фаза 1: Этап становления с участием врача" : isEn ? "Phase 1: Foundation Phase with Physician" : "Phase 1: Aufbauphase mit ärztlicher Beteiligung",
    phase1Desc: isRu
      ? "Dr. Fischer-Rahimov как лицензированный врач-контрактник владеет долями MVZ на основе права учредителя. Холдинг берет на себя центральные сервисные и управляющие функции через индивидуальные договоры услуг."
      : isEn
      ? "Dr. Fischer-Rahimov holds MVZ shares directly on the basis of his statutory physician entitlement. The holding company provides centralized management services via individually defined service agreements."
      : "Dr. Fischer-Rahimov hält MVZ-Anteile unmittelbar auf Grundlage seiner Gründungsberechtigung. Die Holding verbindet sich mit den MVZ durch einzeln vereinbarte Dienstleistungen. Weitere zulässige Beteiligungen werden separat aufgebaut.",
    phase2Title: isRu ? "Фаза 2: Стационарная больничная структура" : isEn ? "Phase 2: Hospital Corporation Structure" : "Phase 2: Spätere Krankenhausstruktur",
    phase2Desc: isRu
      ? "Холдинг учреждает компанию управления клиникой (NabiOta Clinics Germany GmbH nach § 30 GewO). После получения лицензии больницы (§ 108/109 SGB V) компания сможет напрямую участвовать в долях MVZ."
      : isEn
      ? "The holding operates the hospital operating entity (under § 30 GewO). Upon obtaining official hospital accreditation (§ 108/109 SGB V), it can hold MVZ shares directly."
      : "Die Holding hält die Krankenhaus-Betriebsgesellschaft. Erst bei deren erforderlicher Krankenhauszulassung (§ 108/109 SGB V) und nach Prüfung der Anteilsübertragung kann diese unmittelbar MVZ-Anteile halten.",

    independenceTitle: isRu ? "Полная независимость врачебных решений" : isEn ? "Guaranteed Medical Independence" : "Garantierte ärztliche Weisungsfreiheit",
    independenceDesc: isRu
      ? "Холдинг обеспечивает экономическое, IT- и инфраструктурное сопровождение, но не имеет полномочий влиять на индивидуальные медицинские решения. Врачебное руководство каждого центра действует абсолютно автономно в соответствии с § 95 SGB V."
      : isEn
      ? "The holding handles administrative, IT, and facility management without interfering in clinical care. The medical directorship of each facility remains completely autonomous in all healthcare matters."
      : "Die medizinischen Einrichtungen bleiben für Behandlungsentscheidungen, Diagnostik und ärztliche Organisation eigenverantwortlich. Die medizinische Weisungsfreiheit der ärztlichen Leitung eines MVZ bleibt uneingeschränkt gewahrt (§ 95 SGB V).",

    valuesEyebrow: isRu ? "НАШИ ЦЕННОСТИ" : isEn ? "UNSERE WERTE" : "UNSERE WERTE",
    valuesHeading: isRu ? "Что делает нас особенными." : isEn ? "Das macht uns besonders." : "Das macht uns besonders.",

    val1Title: isRu ? "Надежный партнер" : isEn ? "Reliable Partner" : "Verlässlicher Partner",
    val1Desc: isRu ? "Долгосрочное партнерство, основанное на взаимном доверии и уважении." : isEn ? "Long-term partnership built on mutual trust and respect." : "Langfristige Partnerschaft auf Augenhöhe und gegenseitigem Vertrauen.",
    val2Title: isRu ? "Инновационные решения" : isEn ? "Innovative Solutions" : "Innovative Lösungen",
    val2Desc: isRu ? "Продвижение современного, устойчивого и дальновидного здравоохранения." : isEn ? "Advancing modern, resilient, and forward-looking healthcare." : "Moderne, zukunftsfähige und vorausschauende Gesundheitsversorgung.",
    val3Title: isRu ? "Живая ответственность" : isEn ? "Living Responsibility" : "Gelebte Verantwortung",
    val3Desc: isRu ? "Качество, прозрачность и человечность во всем, что мы делаем." : isEn ? "Quality, transparency, and humanity in everything we do." : "Qualität, Transparenz und Menschlichkeit in unserem gesamten Handeln.",
    val4Title: isRu ? "Развитие людей" : isEn ? "People Development" : "Mitarbeiterförderung",
    val4Desc: isRu ? "Поддержка наших сотрудников и взращивание талантов для сильного будущего." : isEn ? "Empowering our staff and fostering talent for a strong tomorrow." : "Gezielte Förderung von Fachkräften und Potenzialen für eine starke Zukunft.",

    ctaEyebrow: isRu ? "СОЗИДАЕМ ЗДОРОВОЕ БУДУЩЕЕ" : isEn ? "LET'S BUILD A HEALTHIER TOMORROW" : "GEMEINSAM GESUNDHEIT GESTALTEN",
    ctaHeading: isRu ? "Станьте нашим партнером во имя здорового будущего." : isEn ? "Partner with us for a healthier future." : "Gestalten Sie mit uns eine gesündere Zukunft.",
    ctaBtn: isRu ? "Связаться с нами →" : isEn ? "Get in Touch →" : "Kontakt aufnehmen →",
  };

  const organigramColumns = [
    {
      colTitle: isRu ? "Амбулаторная и стационарная медицина" : isEn ? "Primary & Inpatient Medicine" : "Ambulante & Stationäre Medizin",
      items: [
        {
          name: "“NabiOta” MVZ",
          sub: isRu
            ? "Центр терапевтической и специализированной помощи (терапия, кардиология, гастроэнтерология, пульмонология, неврология, эндокринология)"
            : isEn
            ? "Center for Primary & Specialist Care (General Practice, Cardiology, Gastroenterology, Pulmonology, Neurology, Endocrinology)"
            : "Zentrum für hausärztliche und fachärztliche Versorgung (Hausarzt, Kardiologie, Gastroenterologe, Pulmonologie, Neurologie, Endokrinologie)",
          badge: "§ 95 SGB V",
          href: `/${locale}/areas/medizinische-fachbereiche`,
          icon: StethoscopeIcon,
        },
        {
          name: "“NabiOta” Klinik Germany GmbH",
          sub: isRu
            ? "Медицинская клиника (по § 30 GewO) — стационарные, дневные и операционные центры"
            : isEn
            ? "Inpatient & Specialty Clinic (acc. to § 30 GewO) — Inpatient surgery & recovery"
            : "Klinik Germany GmbH (n. § 30 KH / GewO) — Stationäre, teilstationäre & operative Versorgung",
          badge: "§ 30 GewO",
          href: `/${locale}/areas/medizinische-fachbereiche`,
          icon: BuildingStatsIcon,
        },
        {
          name: "“NabiOta” Rehabilitation Center",
          sub: isRu
            ? "Центр реабилитации и терапии (Rehabilitation & Therapy GmbH) — физиотерапия, эрготерапия, логопедия"
            : isEn
            ? "Rehabilitation & Therapy Center — Physiotherapy, Occupational & Speech therapy"
            : "Rehabilitation & Therapy Center (GmbH) — Physiotherapie, Ergotherapie, Logopädie & MTT",
          badge: "Ambulante Reha",
          href: `/${locale}/areas/rehabilitation`,
          icon: ActivityRehabIcon,
        },
      ],
    },
    {
      colTitle: isRu ? "Хирургия, диагностика и уход" : isEn ? "Surgery, Diagnostics & Care" : "Chirurgie, Diagnostik & Pflege",
      items: [
        {
          name: "“NabiOta” MVZ",
          sub: isRu
            ? "Хирургия и анестезиология (ортопедия/травматология, нейрохирургия, абдоминальная и пластическая хирургия, противоболевая терапия)"
            : isEn
            ? "Surgery & Anesthesiology (Orthopedics, Neurosurgery, Visceral & Plastic Surgery, Pain therapy)"
            : "Chirurgie und Anästhesiologie (Orthopädie, Unfallchirurgie, Neurochirurgie, Allgemein-/Viszeral-, Plastische Chirurgie, Anästhesie)",
          badge: "Ambulante OP",
          href: `/${locale}/areas/medizinische-fachbereiche`,
          icon: ScalpelIcon,
        },
        {
          name: "“NabiOta” Diagnostics GmbH",
          sub: isRu
            ? "Высокотехнологичная диагностика: МРТ 3T, КТ Low-Dose, цифровой рентген, нейрофизиология (ЭМГ/ЭЭГ) и лабораторная логистика"
            : isEn
            ? "Advanced Diagnostics: 3T MRI, Low-Dose CT, X-ray, Neurophysiology (EMG/EEG) & Lab logistics"
            : "Diagnostics GmbH (CT + MRT 3T + Rö + Neurophysiologie & Labor-Probenmanagement)",
          badge: "3T MRT / CT",
          href: `/${locale}/areas/diagnostik`,
          icon: ScannerMriIcon,
        },
        {
          name: "“NabiOta” HomeCare GmbH",
          sub: isRu
            ? "Патронаж и уход на дому: квалифицированная сестринская помощь и специализированное лечение ран (Wundversorgung)"
            : isEn
            ? "In-Home Nursing Care: Qualified outpatient nursing & specialized wound care"
            : "HomeCare GmbH (Qualifizierte Pflege / spezialisierte Wundversorgung nach SGB V & XI)",
          badge: "HomeCare",
          href: `/${locale}/areas/pflege`,
          icon: HomeCareIcon,
        },
      ],
    },
    {
      colTitle: isRu ? "Кадры, недвижимость и снабжение" : isEn ? "Recruitment, Real Estate & Supplies" : "Personal, Immobilien & Versorgung",
      items: [
        {
          name: "“NabiOta” Medical Recruitment",
          sub: isRu
            ? "Служба медицинского рекрутинга (GmbH) — привлечение врачей и медперсонала, нострификация и Approbation"
            : isEn
            ? "Medical Recruitment Services GmbH — Healthcare staffing & degree recognition (Approbation)"
            : "Medical Recruitment Services GmbH (Med. Vermittlungsservice & Approbationsbegleitung)",
          badge: "Recruitment",
          href: `/${locale}/areas/internationale-kooperationen`,
          icon: TeamStatsIcon,
        },
        {
          name: "“NabiOta” Real Estate GmbH",
          sub: isRu
            ? "Медицинская недвижимость — девелопмент, перепланировка и управление специализированными зданиями клиник и MVZ"
            : isEn
            ? "Medical Real Estate GmbH — Acquisition, clinic construction & medical facility management"
            : "Real Estate GmbH (Med. Immobilien, Praxisentwicklung & Betreiberkonzepte)",
          badge: "Real Estate",
          href: `/${locale}/areas/beratung-projektentwicklung`,
          icon: RealEstateIcon,
        },
        {
          name: "“NabiOta” Sanitätshaus & Apotheke",
          sub: isRu
            ? "Ортопедические салоны (Sanitätshaus GmbH), обеспечение медикаментами клиник и NabiOta Pharmacy"
            : isEn
            ? "Medical Supplies & NabiOta Pharmacy — Orthopedic aids, rehab products & clinical pharmacy"
            : "Arzneimittelversorgung & Sanitätshaus GmbH (Med. Hilfsmittel & NabiOta Pharmacy)",
          badge: "Supplies & Pharmacy",
          href: `/${locale}/areas/medizinische-fachbereiche`,
          icon: CrossPharmacyIcon,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF6] text-[#142318] selection:bg-[#EBDDC0] selection:text-[#142318]">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: HERO HEADER (Matching Reference 1:1)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full min-h-[480px] sm:min-h-[520px] lg:h-[600px] lg:min-h-[600px] pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 overflow-hidden flex items-center bg-[#07150C] text-[#FAF8F5] border-b border-[#D5B878]/25">
          {/* Background: Modern Medical Doctors Team on the right - focused on doctors on mobile */}
          <div className="absolute inset-0 sm:left-[18%] sm:w-[82%] z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/about/hero-doctors.webp"
              alt="NabiOta Health Group Germany Team"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 82vw"
              className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-[center_22%]"
            />
            {/* Desktop right-side subtle blend */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r sm:from-[#07150C]/25 sm:via-transparent sm:to-black/10" />
          </div>

          {/* Desktop/Tablet SVG with Deep Forest Green Shape & Dual Glowing Golden Arcs */}
          <svg
            className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Clip path for the narrower left wing (620 at top to 800 at bottom) */}
              <clipPath id="aboutLeftWingClip">
                <path d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z" />
              </clipPath>

              <linearGradient id="aboutGoldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFC894" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#D4B06A" stopOpacity="1" />
                <stop offset="75%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="aboutGoldGradLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ECCF93" stopOpacity="0.08" />
                <stop offset="35%" stopColor="#ECCF93" stopOpacity="0.45" />
                <stop offset="75%" stopColor="#DFC894" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.08" />
              </linearGradient>
              <filter id="aboutGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="aboutDarkGreenFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#040F07" stopOpacity="0.15" />
                <stop offset="40%" stopColor="#040F07" stopOpacity="0.32" />
                <stop offset="70%" stopColor="#07180D" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0A1E13" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Botanical Gold Background Image inside the Left Wing (xMin anchored for lush left leaves) */}
            <image
              href="/images/botanical-gold-bg.webp"
              x="0"
              y="0"
              width="1440"
              height="600"
              preserveAspectRatio="xMinYMid slice"
              clipPath="url(#aboutLeftWingClip)"
              opacity="1"
            />

            {/* Subtle Dark Green shading overlay inside the Left Wing for crisp text contrast */}
            <path
              d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z"
              fill="url(#aboutDarkGreenFill)"
            />

            {/* Primary Glowing Golden Separator Arc Line (Narrower position) */}
            <path
              d="M 620,0 C 710,180 680,420 800,600"
              stroke="url(#aboutGoldGrad)"
              strokeWidth="2"
              fill="none"
              filter="url(#aboutGoldGlow)"
            />

            {/* Secondary Fine Golden Accent Curve */}
            <path
              d="M 645,0 C 735,185 705,430 825,600"
              stroke="url(#aboutGoldGradLight)"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* Mobile Background: Botanical texture + light transparent gradient */}
          <div className="sm:hidden absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/botanical-gold-bg.webp"
              alt=""
              fill
              className="object-cover object-left"
              priority
            />
            <div className="absolute inset-0 bg-[#07150C]/65" />
          </div>

          {/* Top subtle vignette for seamless fixed header blend */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#051208]/85 to-transparent pointer-events-none z-10" />

          <Container size="wide" className="relative z-20">
            <div className="max-w-xl lg:max-w-[520px] xl:max-w-[600px]">
              {/* Breadcrumb matching Photo 2 */}
              <nav className="flex items-center gap-2 text-xs sm:text-[12.5px] text-[#A2ADA4] mb-3.5 font-sans" aria-label="Breadcrumb">
                <Link href={`/${locale}`} className="hover:text-[#D5B878] transition-colors">
                  {t.breadcrumbHome}
                </Link>
                <span className="text-[#A2ADA4]/70 text-[10px] font-bold">›</span>
                <span className="text-white/95 font-medium">{t.breadcrumbAbout}</span>
              </nav>

              {/* Main Heading */}
              <h1 className="page-hero-title font-serif text-[32px] sm:text-[40px] lg:text-[44px] xl:text-[50px] font-normal leading-[1.12] tracking-[-0.01em] text-white mb-5 sm:mb-6 break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.heroTitlePart1}
                <br />
                {t.heroTitlePart2}
              </h1>

              {/* Description */}
              <p className="hero-text-wrap text-[13.5px] sm:text-[14.5px] text-[#D2DED5] leading-[1.72] font-sans max-w-xl mb-9 sm:mb-11 font-normal break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.heroDesc}
              </p>

              {/* 3 Circular Feature Badges matching reference photo */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10 pt-1">
                {/* Badge 1: People at the center */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D5B878]/60 bg-[#07170E]/40 backdrop-blur-xs shadow-[0_0_10px_rgba(213,184,120,0.15)] flex items-center justify-center text-[#ECCF96] flex-shrink-0">
                    <PeopleCenterIcon className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[13px] sm:text-[13.5px] font-medium text-white tracking-wide leading-tight">
                      {t.badge1Title}
                    </span>
                    <span className="text-[11.5px] sm:text-[12px] font-normal text-[#9FB3A5] tracking-normal leading-tight mt-0.5">
                      {t.badge1Sub}
                    </span>
                  </div>
                </div>

                {/* Badge 2: Sustainable growth */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D5B878]/60 bg-[#07170E]/40 backdrop-blur-xs shadow-[0_0_10px_rgba(213,184,120,0.15)] flex items-center justify-center text-[#ECCF96] flex-shrink-0">
                    <ShieldIcon className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[13px] sm:text-[13.5px] font-medium text-white tracking-wide leading-tight">
                      {t.badge2Title}
                    </span>
                    <span className="text-[11.5px] sm:text-[12px] font-normal text-[#9FB3A5] tracking-normal leading-tight mt-0.5">
                      {t.badge2Sub}
                    </span>
                  </div>
                </div>

                {/* Badge 3: A healthier tomorrow */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D5B878]/60 bg-[#07170E]/40 backdrop-blur-xs shadow-[0_0_10px_rgba(213,184,120,0.15)] flex items-center justify-center text-[#ECCF96] flex-shrink-0">
                    <LeafIcon className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[13px] sm:text-[13.5px] font-medium text-white tracking-wide leading-tight">
                      {t.badge3Title}
                    </span>
                    <span className="text-[11.5px] sm:text-[12px] font-normal text-[#9FB3A5] tracking-normal leading-tight mt-0.5">
                      {t.badge3Sub}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: ORGANIZATIONAL STRUCTURE (NabiOta® Health Group Germany GmbH)
            - Background: photo1.webp
            - Design strictly matching Photo 3
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-14 sm:py-18 lg:py-22 border-b border-[#ECE7DC] overflow-hidden bg-[#FAF8F4]">
          {/* Background: photo1.webp with full framing */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/photo1.webp"
              alt="Organizational background"
              fill
              priority
              sizes="100vw"
              className="w-full h-full object-fill object-center"
            />
          </div>

          <Container size="wide" className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-7">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-1.5 font-sans">
                {t.orgEyebrow}
              </span>
              <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal text-[#142318] leading-[1.15]">
                {t.orgHeading}
              </h2>
            </div>

            {/* Holding Top Badge matching Photo 3 */}
            <div className="flex justify-center mb-0">
              <div className="inline-flex items-center gap-4 bg-[#0B1E13] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl border border-[#D5B878]/70 shadow-xl text-left">
                <div className="w-12 h-12 rounded-full border border-[#D5B878] bg-[#142A1D]/60 flex items-center justify-center text-[#ECCF96] flex-shrink-0 shadow-[0_0_12px_rgba(213,184,120,0.25)]">
                  <BuildingStatsIcon className="w-6 h-6 stroke-[1.6]" />
                </div>
                <div>
                  <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.24em] text-[#DEC085] uppercase block mb-0.5 font-sans">
                    {t.holdingBadge}
                  </span>
                  <h3 className="font-serif text-[17px] sm:text-[19px] font-medium text-white tracking-wide">
                    “NabiOta” Health Group Germany GmbH
                  </h3>
                  <p className="text-[11px] sm:text-[11.5px] text-[#A7B8AD] mt-0.5 font-sans">
                    {isRu ? "Холдинг / Концерн • Мёнхенгладбах" : isEn ? "Holding / Group • Mönchengladbach" : "Holding / Konzern • Mönchengladbach"}
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting Tree SVG from Holding into 3 Pillars */}
            <div className="hidden lg:block w-full max-w-6xl mx-auto pointer-events-none">
              <svg className="w-full h-12" viewBox="0 0 1000 48" fill="none" preserveAspectRatio="none">
                {/* Central drop stem */}
                <line x1="500" y1="0" x2="500" y2="24" stroke="#C5A56A" strokeWidth="1.8" />
                {/* Horizontal distribution bar */}
                <line x1="167" y1="24" x2="833" y2="24" stroke="#C5A56A" strokeWidth="1.8" />
                {/* Drop lines into 3 columns */}
                <line x1="167" y1="24" x2="167" y2="48" stroke="#C5A56A" strokeWidth="1.8" />
                <line x1="500" y1="24" x2="500" y2="48" stroke="#C5A56A" strokeWidth="1.8" />
                <line x1="833" y1="24" x2="833" y2="48" stroke="#C5A56A" strokeWidth="1.8" />
              </svg>
            </div>

            {/* 3 Pillars Grid with 3 vertically stacked connected cards each */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto mt-6 lg:mt-0">
              {organigramColumns.map((col, cIdx) => (
                <div key={cIdx} className="flex flex-col space-y-4 relative">
                  {/* Pillar Column Header matching Photo 3 */}
                  <div className="text-center pb-1">
                    <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#A07D3E] font-sans whitespace-nowrap inline-flex items-center justify-center gap-1.5">
                      <span>—</span>
                      <span>{col.colTitle}</span>
                      <span>—</span>
                    </span>
                  </div>

                  {col.items.map((item, rIdx) => {
                    const IconComp = item.icon;
                    return (
                      <Link
                        key={rIdx}
                        href={item.href}
                        className="group bg-white/95 backdrop-blur-xs rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878] p-4 sm:p-5 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        <div>
                          {/* Top row: Icon on left, Badge on right */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="w-10 h-10 rounded-full bg-[#EBF1ED] border border-[#DCE6E0] flex items-center justify-center text-[#1E3B29] shrink-0 group-hover:bg-[#D5B878]/15 group-hover:border-[#D5B878] group-hover:text-[#8C6D2B] transition-colors">
                              <IconComp className="w-5 h-5 stroke-[1.6]" />
                            </div>
                            <span className="inline-block text-[9.5px] font-bold uppercase tracking-wider text-[#8C6D2B] bg-[#FAF5EB] px-2.5 py-0.5 rounded-full border border-[#EADBBD]">
                              {item.badge}
                            </span>
                          </div>

                          {/* Title */}
                          <h4 className="font-serif font-bold text-[15px] sm:text-[16px] text-[#142318] leading-snug group-hover:text-[#B89650] transition-colors mb-2">
                            {item.name}
                          </h4>

                          {/* Description */}
                          <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-relaxed font-sans">
                            {item.sub}
                          </p>
                        </div>

                        {/* Bottom-right corner arrow button matching Photo 3 */}
                        <div className="pt-2 mt-2 flex justify-end">
                          <div className="w-7 h-7 rounded-full border border-[#DCD5C6] bg-[#FAF8F5] group-hover:border-[#C5A56A] group-hover:bg-[#C5A56A] group-hover:text-white text-[#B89650] flex items-center justify-center transition-all shadow-xs">
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: STRATEGIC DEVELOPMENT (Two-Phase Structure)
            - Background: photo2.webp
            - Design strictly matching Photo 4
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-14 sm:py-18 lg:py-22 border-b border-[#ECE7DC] overflow-hidden bg-[#FAF6EE]">
          {/* Background: photo2.webp with full framing */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/photo2.webp"
              alt="Two-Phase Strategy Background"
              fill
              priority
              sizes="100vw"
              className="w-full h-full object-fill object-center"
            />
          </div>

          <Container size="wide" className="relative z-10">
            {/* Header matching Photo 4 */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-1.5 font-sans">
                {t.twoPhaseEyebrow}
              </span>
              <h3 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#142318] leading-[1.18]">
                {t.twoPhaseTitle}
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#556057] mt-2.5 leading-relaxed font-sans max-w-xl mx-auto">
                {t.twoPhaseDesc}
              </p>
            </div>

            {/* 2 Big Cards side by side matching Photo 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* Card 1: Phase 1 */}
              <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-[#EAE4D7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  {/* Top row: Number circle + Title + Icon circle */}
                  <div className="flex items-center gap-3.5 sm:gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#0E2718] text-white font-serif text-2xl font-normal flex items-center justify-center shrink-0 shadow-sm">
                      1
                    </div>
                    <h4 className="font-serif text-[17px] sm:text-[19px] font-bold text-[#142318] leading-snug">
                      {t.phase1Title}
                    </h4>
                    <div className="w-12 h-12 rounded-full bg-[#EBF1ED] border border-[#DCE6E0] flex items-center justify-center text-[#1E3B29] shrink-0 ml-auto">
                      <Users className="w-6 h-6 stroke-[1.6]" />
                    </div>
                  </div>

                  {/* Paragraph */}
                  <p className="text-xs sm:text-[13px] text-[#4E5650] leading-relaxed font-sans mb-5">
                    {t.phase1Desc}
                  </p>
                </div>

                {/* Inner Panel */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F2EA]/90 border border-[#EAE4D7] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#B89650] shrink-0" />
                      <span className="text-xs sm:text-[13px] font-bold text-[#142318]">
                        {isRu ? "Ключевые активности в Фазе 1" : isEn ? "Key Activities in Phase 1" : "Zentrale Aktivitäten in Phase 1"}
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-[12.5px] text-[#4E5650] font-sans pl-1">
                      <li className="flex items-start gap-2">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>{isRu ? "Формирование и запуск структуры MVZ" : isEn ? "Establishment of the MVZ structure" : "Aufbau der MVZ-Struktur"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>{isRu ? "Участие д-ра Фишер-Рахимова как врача-учредителя" : isEn ? "Founding equity of Dr. Fischer-Rahimov" : "Beteiligung von Dr. Fischer-Rahimov"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>{isRu ? "Подготовка дальнейших дочерних обществ" : isEn ? "Preparation of additional subsidiaries" : "Vorbereitung weiterer Beteiligungen"}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-end pt-3">
                    <Link
                      href={`/${locale}/contact`}
                      aria-label="Phase 1 details"
                      className="w-7 h-7 rounded-full border border-[#D1C9B8] bg-white text-[#7A6843] hover:border-[#D5B878] hover:bg-[#D5B878] hover:text-[#0C1C11] flex items-center justify-center transition-all shadow-xs"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Phase 2 */}
              <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-[#EAE4D7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  {/* Top row: Number circle + Title + Icon circle */}
                  <div className="flex items-center gap-3.5 sm:gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#0E2718] text-white font-serif text-2xl font-normal flex items-center justify-center shrink-0 shadow-sm">
                      2
                    </div>
                    <h4 className="font-serif text-[17px] sm:text-[19px] font-bold text-[#142318] leading-snug">
                      {t.phase2Title}
                    </h4>
                    <div className="w-12 h-12 rounded-full bg-[#EBF1ED] border border-[#DCE6E0] flex items-center justify-center text-[#1E3B29] shrink-0 ml-auto">
                      <Building2 className="w-6 h-6 stroke-[1.6]" />
                    </div>
                  </div>

                  {/* Paragraph */}
                  <p className="text-xs sm:text-[13px] text-[#4E5650] leading-relaxed font-sans mb-5">
                    {t.phase2Desc}
                  </p>
                </div>

                {/* Inner Panel */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F2EA]/90 border border-[#EAE4D7] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#B89650] shrink-0" />
                      <span className="text-xs sm:text-[13px] font-bold text-[#142318]">
                        {isRu ? "Ключевые принципы управления" : isEn ? "Central Governance Principles" : "Zentrale Governance-Prinzipien"}
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-[12.5px] text-[#4E5650] font-sans pl-1">
                      <li className="flex items-start gap-2">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>{isRu ? "Врачебная тайна и строгая защита данных (DSGVO)" : isEn ? "Medical confidentiality & strict data protection" : "Ärztliche Schweigepflicht & strenger Datenschutz (DSGVO)"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>{isRu ? "Центральное управление: IT, финансы, закупки и маркетинг" : isEn ? "Central management: IT, Finance, Purchasing & Marketing" : "Zentrales Management: IT, Finanzen, Einkauf & Marketing"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>{isRu ? "Менеджмент качества DIN EN ISO и безопасность пациентов" : isEn ? "DIN EN ISO quality management & patient safety" : "Qualitätsmanagement nach DIN EN ISO & Patientensicherheit"}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-end pt-3">
                    <Link
                      href={`/${locale}/contact`}
                      aria-label="Phase 2 details"
                      className="w-7 h-7 rounded-full border border-[#D1C9B8] bg-white text-[#7A6843] hover:border-[#D5B878] hover:bg-[#D5B878] hover:text-[#0C1C11] flex items-center justify-center transition-all shadow-xs"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Footnote */}
            <p className="text-center text-[11px] text-[#78857C] mt-8 font-sans">
              {isRu
                ? "Сведения в соответствии с нотариальным проектом устава и положениями § 95 SGB V."
                : isEn
                ? "In accordance with notarized corporate filings and statutory § 95 SGB V regulations."
                : "Gemäß notarieller Gründungsdokumentation und den Vorgaben des § 95 SGB V."}
            </p>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: OUR ROOTS & HISTORY ("Опыт десятилетий.")
        ══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-14 sm:py-18 lg:py-20 border-b border-[#ECE7DC] relative">
          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left: Doctor-Patient Photo */}
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#EDE7D9] bg-white">
                <Image
                  src="/images/about/doctor-patient.webp"
                  alt="Ärztliche Betreuung bei NabiOta Health Group"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Right: History Text */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase mb-2">
                  {t.rootsEyebrow}
                </span>

                <h2 className="font-serif text-[32px] sm:text-[38px] xl:text-[44px] font-normal leading-[1.14] text-[#142318] mb-5">
                  {t.rootsTitle1}
                  <br />
                  {t.rootsTitle2}
                </h2>

                <div className="space-y-4 text-[13.5px] sm:text-[14.5px] text-[#4E5650] leading-[1.72] font-sans">
                  <p>{t.rootsP1}</p>
                  <p>{t.rootsP2}</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4: MISSION & VISION ("Что нами движет") + 4 STATS BAR
        ══════════════════════════════════════════════════════════ */}
        <section className="bg-[#FAF8F5] py-14 sm:py-18 lg:py-20 border-b border-[#ECE7DC]">
          <Container size="wide">
            {/* Top: Left Header + Right 2 Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12 sm:mb-16">
              {/* Left: Mission & Vision Heading */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase mb-2">
                  {t.missionEyebrow}
                </span>
                <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal text-[#142318] leading-[1.15] mb-4">
                  {t.missionHeading}
                </h2>
                <p className="text-[13.5px] sm:text-[14px] text-[#5A635B] leading-[1.7] font-sans max-w-md">
                  {t.missionLead}
                </p>
              </div>

              {/* Right: 2 Distinct White Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Card 1: Our Mission */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EDE8DE] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#D5B878] hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-full bg-[#FAF5EB] text-[#B89650] flex items-center justify-center mb-3">
                      <TargetIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-sans text-[16px] font-bold text-[#142318] mb-2">
                      {t.cardMissionTitle}
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] text-[#5A635B] leading-relaxed">
                      {t.cardMissionText}
                    </p>
                  </div>
                </div>

                {/* Card 2: Our Vision */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EDE8DE] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#D5B878] hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-full bg-[#FAF5EB] text-[#B89650] flex items-center justify-center mb-3">
                      <VisionEyeIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-sans text-[16px] font-bold text-[#142318] mb-2">
                      {t.cardVisionTitle}
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] text-[#5A635B] leading-relaxed">
                      {t.cardVisionText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: 4 Key Stats Bar in single horizontal row with vertical dividers */}
            <div className="bg-white rounded-2xl border border-[#EDE8DE] shadow-[0_2px_8px_rgba(0,0,0,0.02)] py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-[#EDE7DC]">
                {/* Stat 1 */}
                <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6">
                  <div className="w-12 h-12 rounded-full border border-[#D5B878] bg-[#FCFAF6] flex items-center justify-center text-[#B89650] flex-shrink-0 shadow-[0_0_8px_rgba(213,184,120,0.15)]">
                    <TeamStatsIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                  </div>
                  <div>
                    <span className="block font-serif text-[28px] sm:text-[32px] font-bold text-[#142318] leading-none mb-1">
                      {t.stat1Num}
                    </span>
                    <span className="block text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                      {t.stat1Label}
                    </span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6">
                  <div className="w-12 h-12 rounded-full border border-[#D5B878] bg-[#FCFAF6] flex items-center justify-center text-[#B89650] flex-shrink-0 shadow-[0_0_8px_rgba(213,184,120,0.15)]">
                    <BuildingStatsIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                  </div>
                  <div>
                    <span className="block font-serif text-[28px] sm:text-[32px] font-bold text-[#142318] leading-none mb-1">
                      {t.stat2Num}
                    </span>
                    <span className="block text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                      {t.stat2Label}
                    </span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6">
                  <div className="w-12 h-12 rounded-full border border-[#D5B878] bg-[#FCFAF6] flex items-center justify-center text-[#B89650] flex-shrink-0 shadow-[0_0_8px_rgba(213,184,120,0.15)]">
                    <HandshakeIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                  </div>
                  <div>
                    <span className="block font-serif text-[28px] sm:text-[32px] font-bold text-[#142318] leading-none mb-1">
                      {t.stat3Num}
                    </span>
                    <span className="block text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                      {t.stat3Label}
                    </span>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6">
                  <div className="w-12 h-12 rounded-full border border-[#D5B878] bg-[#FCFAF6] flex items-center justify-center text-[#B89650] flex-shrink-0 shadow-[0_0_8px_rgba(213,184,120,0.15)]">
                    <HeartStatsIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                  </div>
                  <div>
                    <span className="block font-serif text-[28px] sm:text-[32px] font-bold text-[#142318] leading-none mb-1">
                      {t.stat4Num}
                    </span>
                    <span className="block text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                      {t.stat4Label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5: UNSERE WERTE ("Das macht uns besonders.")
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-14 sm:py-18 lg:py-20 border-b border-[#ECE7DC] overflow-hidden bg-[#FAF8F5]">
          {/* Background: photo2.png from public/images/about/ */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/photo2.webp"
              alt="Values background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <Container size="wide" className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-1.5">
                {t.valuesEyebrow}
              </span>
              <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal text-[#142318] leading-[1.15]">
                {t.valuesHeading}
              </h2>
            </div>

            {/* 4 Value Cards in a single row - horizontal layout matching screenshot 1:1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878] p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full border border-[#D5B878] bg-[#FCFAF6] flex items-center justify-center text-[#B89650] flex-shrink-0 shadow-[0_0_8px_rgba(213,184,120,0.12)] group-hover:scale-105 group-hover:border-[#B89650] group-hover:bg-[#B89650]/10 transition-all">
                  <HandshakeIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-[#142318] mb-0.5 group-hover:text-[#BFA267] transition-colors leading-snug">
                    {t.val1Title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                    {t.val1Desc}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878] p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full border border-[#D5B878] bg-[#FCFAF6] flex items-center justify-center text-[#B89650] flex-shrink-0 shadow-[0_0_8px_rgba(213,184,120,0.12)] group-hover:scale-105 group-hover:border-[#B89650] group-hover:bg-[#B89650]/10 transition-all">
                  <LightbulbValuesIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-[#142318] mb-0.5 group-hover:text-[#BFA267] transition-colors leading-snug">
                    {t.val2Title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                    {t.val2Desc}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878] p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full border border-[#D5B878] bg-[#FCFAF6] flex items-center justify-center text-[#B89650] flex-shrink-0 shadow-[0_0_8px_rgba(213,184,120,0.12)] group-hover:scale-105 group-hover:border-[#B89650] group-hover:bg-[#B89650]/10 transition-all">
                  <LeafIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-[#142318] mb-0.5 group-hover:text-[#BFA267] transition-colors leading-snug">
                    {t.val3Title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                    {t.val3Desc}
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878] p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full border border-[#D5B878] bg-[#FCFAF6] flex items-center justify-center text-[#B89650] flex-shrink-0 shadow-[0_0_8px_rgba(213,184,120,0.12)] group-hover:scale-105 group-hover:border-[#B89650] group-hover:bg-[#B89650]/10 transition-all">
                  <TeamStatsIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-[#142318] mb-0.5 group-hover:text-[#BFA267] transition-colors leading-snug">
                    {t.val4Title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                    {t.val4Desc}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 6: DARK CALL-TO-ACTION PRE-FOOTER BANNER
        ══════════════════════════════════════════════════════════ */}
        <section className="bg-[#07160D] text-white py-12 sm:py-14 relative overflow-hidden">
          {/* Botanical leaf silhouette watermark accents */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
            <Image
              src="/images/bacground.webp"
              alt="Watermark"
              fill
              className="object-cover object-center"
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
              <div>
                <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.22em] text-[#C5A56A] uppercase block mb-1.5">
                  {t.ctaEyebrow}
                </span>
                <h2 className="font-serif text-[24px] sm:text-[30px] lg:text-[34px] font-normal text-white leading-tight">
                  {t.ctaHeading}
                </h2>
              </div>

              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF96] to-[#D8B772] text-[#142217] font-sans font-semibold text-xs sm:text-sm tracking-wide shadow-lg hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all duration-300 flex-shrink-0"
              >
                <span>{t.ctaBtn}</span>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
