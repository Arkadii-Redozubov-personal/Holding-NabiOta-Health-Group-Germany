import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ChevronRight, ArrowRight } from "lucide-react";
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
        NabiOta® Health Group Germany GmbH возникла из стратегического развития существующей корпоративной структуры в здравоохранении. Корни сегодняшней группы компаний восходят к{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong>. Благодаря организационному развитию, расширению профиля деятельности и укреплению корпоративной структуры был заложен фундамент долгосрочной медицинской группы с национальной и международной перспективой.
      </>
    ) : isEn ? (
      <>
        NabiOta® Health Group Germany GmbH arose from the strategic advancement of an existing corporate structure in healthcare. The roots of today&apos;s corporate group trace back to{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong>. Through organizational evolution, expansion of corporate scope, and expansion of legal structures, the foundation was established for a long-term healthcare group with national and international reach.
      </>
    ) : (
      <>
        Die NabiOta® Health Group Germany GmbH entstand aus der strategischen Weiterentwicklung einer bestehenden Unternehmensstruktur im Gesundheitswesen. Die Wurzeln der heutigen Unternehmensgruppe reichen auf die{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong> zurück. Durch organisatorische Weiterentwicklung, Erweiterung des Unternehmensgegenstandes und den Ausbau der gesellschaftsrechtlichen Strukturen wurde die Grundlage für eine langfristig ausgerichtete Gesundheitsgruppe mit nationaler und internationaler Perspektive geschaffen.
      </>
    ),
    rootsP2: isRu
      ? "Цель этого развития — объединить различные направления здравоохранения под единым брендом и создать устойчивые структуры на будущее. Сегодня это служит основой для дальнейшего расширения NabiOta® Health Group Germany GmbH. NabiOta® является защищенной торговой маркой, олицетворяющей надежность, ответственное ведение дел и непрерывное развитие медицинских услуг и проектов."
      : isEn
      ? "The goal of this development is to bring together different areas of healthcare under a unified brand and build sustainable structures for the future. Today, this forms the foundation for the continued expansion of NabiOta® Health Group Germany GmbH and its activities. NabiOta® is a protected trademark standing for reliability, conscientious conduct, and continuous advancement of health-related services and projects."
      : "Ziel dieser Entwicklung ist es, unterschiedliche Bereiche des Gesundheitswesens unter einer gemeinsamen Marke zusammenzuführen und nachhaltige Strukturen für die Zukunft aufzubauen. Heute bildet diese Entwicklung die Grundlage für den weiteren Ausbau der NabiOta® Health Group Germany GmbH und ihrer Aktivitäten. NabiOta® ist eine geschützte Marke der NabiOta® Health Group Germany GmbH, die für Verlässlichkeit, verantwortungsbewusstes Handeln und die kontinuierliche Weiterentwicklung gesundheitsbezogener Dienstleistungen und Projekte steht.",

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
    stat2Num: "9",
    stat2Label: isRu ? "Подразделений и предприятий" : isEn ? "Divisions & operating entities" : "Unternehmensbereiche & Einheiten",
    stat3Num: "100+",
    stat3Label: isRu ? "Партнерская сеть" : isEn ? "Partner network" : "Partner im Netzwerk",
    stat4Num: isRu ? "Одна" : isEn ? "One" : "Eine",
    stat4Label: isRu ? "Общая миссия во имя здорового будущего" : isEn ? "Shared mission for a healthier tomorrow" : "Gemeinsame Mission für eine gesündere Zukunft",

    orgEyebrow: isRu ? "ОРГАНИЗАЦИОННАЯ СТРУКТУРА" : isEn ? "ORGANIZATIONAL STRUCTURE" : "ORGANISATION & STRUKTUR",
    orgHeading: isRu ? "Подразделения и структуры группы" : isEn ? "Divisions & Operating Entities" : "Bereiche & Gesellschaften im Verbund",
    holdingBadge: isRu ? "ХОЛДИНГ / КОНЦЕРН" : isEn ? "HOLDING / KONZERN" : "HOLDING / KONZERN",

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

  const entities = [
    {
      icon: StethoscopeIcon,
      name: "NabiOta® MVZ",
      sub: "Hausärztliches Facharztzentrum",
      href: `/${locale}/areas/medizinische-fachbereiche`,
    },
    {
      icon: ScalpelIcon,
      name: "NabiOta® MVZ",
      sub: "Chirurgisches Facharztzentrum (Orthopädie, Neurochirurgie, Plastische & Allgemeinchirurgie)",
      href: `/${locale}/areas/medizinische-fachbereiche`,
    },
    {
      icon: TeamStatsIcon,
      name: "NabiOta® Personalvermittlung",
      sub: "Fachkräfteakquise & International Recruiting",
      href: `/${locale}/areas/beratung-projektentwicklung`,
    },
    {
      icon: BuildingStatsIcon,
      name: "NabiOta® Klinik Germany GmbH",
      sub: "z. B. 30 KV / Diagnostics GmbH",
      href: `/${locale}/areas/medizinische-fachbereiche`,
    },
    {
      icon: ScannerMriIcon,
      name: "NabiOta® Diagnostics GmbH",
      sub: "High-End CT- MRT- Digitales Röntgen",
      href: `/${locale}/areas/diagnostik`,
    },
    {
      icon: RealEstateIcon,
      name: "NabiOta® Real Estate GmbH",
      sub: "Gesundheitsimmobilien & Praxisentwicklung",
      href: `/${locale}/areas/beratung-projektentwicklung`,
    },
    {
      icon: ActivityRehabIcon,
      name: "NabiOta® Rehabilitation Center",
      sub: "Therapie & Präventionszentrum",
      href: `/${locale}/areas/rehabilitation`,
    },
    {
      icon: HomeCareIcon,
      name: "NabiOta® HomeCare GmbH",
      sub: "Ambulante Pflege & Wundversorgung",
      href: `/${locale}/areas/pflege`,
    },
    {
      icon: CrossPharmacyIcon,
      name: "NabiOta® Apotheke",
      sub: "Pharmazeutische Vollversorgung",
      href: `/${locale}/areas/medizinische-fachbereiche`,
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
          <div className="absolute inset-0 lg:left-[18%] lg:w-[82%] z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/about/hero-doctors.jpg"
              alt="NabiOta Health Group Germany Team"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 82vw"
              className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-[center_22%]"
            />
            {/* Desktop right-side subtle blend */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r lg:from-[#07150C]/25 lg:via-transparent lg:to-black/10" />
          </div>

          {/* Desktop SVG with Deep Forest Green Shape & Dual Glowing Golden Arcs */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
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
                <stop offset="0%" stopColor="#051208" stopOpacity="0.80" />
                <stop offset="65%" stopColor="#07170E" stopOpacity="0.75" />
                <stop offset="85%" stopColor="#081A10" stopOpacity="0.68" />
                <stop offset="100%" stopColor="#0A1E13" stopOpacity="0.58" />
              </linearGradient>
            </defs>

            {/* Botanical Gold Background Image inside the Left Wing */}
            <image
              href="/images/botanical-gold-bg.jpg"
              width="1440"
              height="600"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#aboutLeftWingClip)"
              opacity="0.75"
            />

            {/* Deep Dark Green shading overlay inside the Left Wing for crisp text contrast */}
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

          {/* Mobile/Tablet: Light transparent gradient that keeps the photo vividly visible with crisp text readability */}
          <div className="lg:hidden absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#051208]/95 via-[#051208]/60 to-[#051208]/25" />

          {/* Top subtle vignette for seamless fixed header blend */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#051208]/85 to-transparent pointer-events-none z-10" />

          <Container size="wide" className="relative z-20">
            <div className="max-w-xl lg:max-w-[560px]">
              {/* Breadcrumb matching Photo 2 */}
              <nav className="flex items-center gap-2 text-xs sm:text-[12.5px] text-[#A2ADA4] mb-3.5 font-sans" aria-label="Breadcrumb">
                <Link href={`/${locale}`} className="hover:text-[#D5B878] transition-colors">
                  {t.breadcrumbHome}
                </Link>
                <span className="text-[#A2ADA4]/70 text-[10px] font-bold">›</span>
                <span className="text-white/95 font-medium">{t.breadcrumbAbout}</span>
              </nav>

              {/* Main Heading */}
              <h1 className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] xl:text-[54px] font-normal leading-[1.12] tracking-[-0.01em] text-white mb-5 sm:mb-6">
                {t.heroTitlePart1}
                <br />
                {t.heroTitlePart2}
              </h1>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14.5px] text-[#D2DED5] leading-[1.72] font-sans max-w-xl mb-9 sm:mb-11 font-normal">
                {t.heroDesc}
              </p>

              {/* 3 Circular Feature Badges matching reference photo */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10 pt-1">
                {/* Badge 1: People at the center */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D5B878]/65 bg-[#0C1C11]/70 backdrop-blur-md shadow-[0_0_12px_rgba(213,184,120,0.18)] flex items-center justify-center text-[#ECCF96] flex-shrink-0">
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
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D5B878]/65 bg-[#0C1C11]/70 backdrop-blur-md shadow-[0_0_12px_rgba(213,184,120,0.18)] flex items-center justify-center text-[#ECCF96] flex-shrink-0">
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
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D5B878]/65 bg-[#0C1C11]/70 backdrop-blur-md shadow-[0_0_12px_rgba(213,184,120,0.18)] flex items-center justify-center text-[#ECCF96] flex-shrink-0">
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
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-14 sm:py-18 lg:py-20 border-b border-[#ECE7DC] overflow-hidden bg-[#FAF8F4]">
          {/* Background: photo1.png from public/images/about/ */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/photo1.png"
              alt="Organizational background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <Container size="wide" className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-7">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-1.5">
                {t.orgEyebrow}
              </span>
              <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal text-[#142318] leading-[1.15]">
                {t.orgHeading}
              </h2>
            </div>

            {/* Holding Top Badge matching screenshot with gold circular icon */}
            <div className="flex justify-center mb-0">
              <div className="inline-flex items-center gap-4 bg-[#0B1E13] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl border border-[#D5B878]/70 shadow-lg text-left">
                <div className="w-12 h-12 rounded-full border border-[#D5B878] bg-[#142A1D]/60 flex items-center justify-center text-[#ECCF96] flex-shrink-0 shadow-[0_0_8px_rgba(213,184,120,0.2)]">
                  <BuildingStatsIcon className="w-6 h-6 stroke-[1.6]" />
                </div>
                <div>
                  <span className="text-[9.5px] font-bold tracking-[0.24em] text-[#DEC085] uppercase block mb-0.5">
                    {t.holdingBadge}
                  </span>
                  <h3 className="font-serif text-[17px] sm:text-[19px] font-medium text-white tracking-wide">
                    NabiOta® Health Group Germany GmbH
                  </h3>
                </div>
              </div>
            </div>

            {/* ── Connecting Hierarchical Tree Lines matching reference photo ── */}
            <div className="hidden lg:block w-full max-w-6xl mx-auto pointer-events-none">
              <svg className="w-full h-11" viewBox="0 0 1000 44" fill="none" preserveAspectRatio="none">
                {/* Vertical stem line dropping from Holding badge */}
                <line x1="500" y1="0" x2="500" y2="22" stroke="#C5A56A" strokeWidth="1.5" />
                {/* Horizontal branch line spanning across the 3 columns */}
                <line x1="167" y1="22" x2="833" y2="22" stroke="#C5A56A" strokeWidth="1.5" />
                {/* Drop line into Column 1 */}
                <line x1="167" y1="22" x2="167" y2="44" stroke="#C5A56A" strokeWidth="1.5" />
                {/* Drop line into Column 2 */}
                <line x1="500" y1="22" x2="500" y2="44" stroke="#C5A56A" strokeWidth="1.5" />
                {/* Drop line into Column 3 */}
                <line x1="833" y1="22" x2="833" y2="44" stroke="#C5A56A" strokeWidth="1.5" />
              </svg>
            </div>

            {/* 9 Operating Entities (3x3 Grid) with full descriptions & round icon badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 max-w-6xl mx-auto mt-4 lg:mt-0">
              {entities.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group bg-white rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878] p-4 sm:p-5 flex items-center shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    {/* Gold round circle icon badge matching screenshot */}
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full border border-[#D5B878] bg-[#FCFAF6] flex items-center justify-center text-[#B89650] flex-shrink-0 mr-4 shadow-[0_0_8px_rgba(213,184,120,0.12)] group-hover:scale-105 group-hover:border-[#B89650] group-hover:bg-[#B89650]/10 transition-all">
                      <IconComp className="w-6 h-6 stroke-[1.6]" />
                    </div>

                    {/* Text content with full descriptions fitting naturally without truncation */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-[14px] sm:text-[14.5px] text-[#142318] leading-tight group-hover:text-[#BFA267] transition-colors mb-1">
                        {item.name}
                      </h4>
                      <p className="text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                        {item.sub}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
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
                  src="/images/about/doctor-patient.jpg"
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
              src="/images/about/photo2.png"
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
              src="/images/bacground.png"
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
