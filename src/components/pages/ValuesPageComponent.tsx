import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { HeroBadges } from "@/components/ui/HeroBadges";
import { SupportedLocale } from "@/lib/i18n";
import {
  Stethoscope,
  Microscope,
  Heart,
  HandHeart,
  UserCheck,
  Building2,
  Globe,
  Lightbulb,
  Home,
  ArrowRight,
  Shield,
  ShieldCheck,
  Scale,
  Lock,
  CheckCircle2,
  Users,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

interface ValuesPageComponentProps {
  locale?: SupportedLocale;
}

/* ── Custom SVGs & Signatures matching reference 1:1 ─────────────────── */

function ExecutiveSignature({ className = "w-36 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M18 46 C32 16, 44 12, 50 26 C56 40, 66 46, 76 30 C86 16, 92 22, 102 36 C112 50, 132 16, 148 26 C162 36, 178 30, 192 20"
        stroke="#142318"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 42 C60 48, 120 46, 172 38"
        stroke="#142318"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MarikeSignature({ className = "w-44 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M20 52 C35 18, 48 12, 55 28 C62 44, 75 48, 85 32 C95 16, 102 22, 115 38 C128 54, 150 16, 168 28 C185 40, 205 32, 225 22"
        stroke="#ECCF96"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 50 C75 56, 145 54, 210 44"
        stroke="#ECCF96"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ValuesPageComponent({ locale = "de" }: ValuesPageComponentProps) {
  const isEn = locale === "en";
  const isRu = locale === "ru";

  const t = {
    // Nav & Breadcrumb
    breadcrumbHome: isRu ? "Главная" : isEn ? "Home" : "Startseite",
    breadcrumbValues: isRu ? "Наши ценности" : isEn ? "Our Values" : "Über uns",

    // Section 1: Hero Section
    heroEyebrow: isRu ? "О ХОЛДИНГЕ" : isEn ? "ABOUT US" : "ÜBER UNS",
    heroTitle1: isRu ? "Вместе ради более" : isEn ? "Together for a" : "Gemeinsam für eine",
    heroTitle2: isRu ? "здорового будущего." : isEn ? "healthier future." : "gesündere Zukunft.",
    heroTitle3: "",
    heroDesc: isRu
      ? "NabiOta® Health Group Germany GmbH — интегрированная компания в сфере здравоохранения, объединяющая современную медицину, инновационные решения и человеческую заботу. Наша цель — устойчиво улучшать качество жизни людей сегодня и в будущем."
      : isEn
      ? "NabiOta® Health Group Germany GmbH is an integrated healthcare enterprise uniting modern medicine, innovative solutions, and human compassion. Our goal is to sustainably enhance the quality of life for people – today and in the future."
      : "NabiOta® Health Group Germany GmbH ist ein integriertes Gesundheitsunternehmen, das moderne Medizin, innovative Lösungen und menschliche Fürsorge vereint. Unser Ziel ist es, die Lebensqualität von Menschen nachhaltig zu verbessern – heute und in Zukunft.",
    heroBtn: isRu ? "Наша история" : isEn ? "Our Story" : "Unsere Geschichte",
    badge1Title: isRu ? "Партнерство" : isEn ? "Partnership" : "Partnerschaft",
    badge1Sub: isRu ? "на равных" : isEn ? "on equal footing" : "auf Augenhöhe",
    badge2Title: isRu ? "Ответственность" : isEn ? "Responsibility" : "Verantwortung",
    badge2Sub: isRu ? "перед обществом" : isEn ? "in all we do" : "im Handeln",
    badge3Title: isRu ? "Инновации" : isEn ? "Innovation" : "Innovation",
    badge3Sub: isRu ? "для будущего" : isEn ? "for the future" : "für die Zukunft",

    // Section 2: Mission Section
    missionEyebrow: isRu ? "НАША МИССИЯ" : isEn ? "OUR MISSION" : "UNSERE MISSION",
    missionHeading1: isRu ? "Больше, чем просто" : isEn ? "More than just" : "Mehr als nur",
    missionHeading2: isRu ? "медицинская помощь." : isEn ? "healthcare." : "Gesundheitsversorgung.",
    missionText: isRu
      ? "В NabiOta® мы верим в целостное здравоохранение, в центре которого стоит человек. Наша миссия — создавать высококачественные медицинские услуги, инновационные методы лечения и поддерживающую экосистему, способствующую выздоровлению, профилактике и долгосрочному улучшению качества жизни."
      : isEn
      ? "At NabiOta®, we believe in holistic healthcare that puts people first. Our mission is to provide high-quality medical services, innovative therapies, and a supportive network that sustainably fosters healing, prevention, and quality of life."
      : "Wir bei NabiOta® glauben an eine ganzheitliche Gesundheitsversorgung, die den Menschen in den Mittelpunkt stellt. Unsere Mission ist es, hochwertige medizinische Leistungen, innovative Therapien und ein unterstützendes Netzwerk zu schaffen, das Heilung, Prävention und Lebensqualität nachhaltig fördert.",
    missionQuote: isRu
      ? "„Здоровье — это не всё, но без здоровья всё — ничто.“"
      : isEn
      ? "“Health is not everything, but without health, everything is nothing.”"
      : "„Gesundheit ist nicht alles, aber ohne Gesundheit ist alles nichts.“",
    signatureCompany: "NabiOta® Health Group Germany",
    signatureTitle: isRu ? "Руководство холдинга" : isEn ? "Executive Management" : "Geschäftsführung",

    // Section 3: Values Section (Das macht uns besonders)
    valuesEyebrow: isRu ? "НАШИ ЦЕННОСТИ" : isEn ? "OUR VALUES" : "UNSERE WERTE",
    valuesHeading: isRu ? "Что делает нас особенными." : isEn ? "What makes us distinct." : "Das macht uns besonders.",
    valuesSubtitle: isRu
      ? "Наши ценности образуют фундамент наших действий и определяют сотрудничество во всей группе компаний."
      : isEn
      ? "Our values form the bedrock of our actions and define collaboration across the entire enterprise group."
      : "Unsere Werte bilden das Fundament unseres Handelns und prägen die Zusammenarbeit in der gesamten Unternehmensgruppe.",

    val1Title: isRu ? "Надежный партнер" : isEn ? "Reliable Partner" : "Verlässlicher Partner",
    val1Desc: isRu ? "Долгосрочное партнерство на равных." : isEn ? "Long-term partnership on equal footing." : "Langfristige Partnerschaft auf Augenhöhe.",
    val2Title: isRu ? "Инновационные решения" : isEn ? "Innovative Solutions" : "Innovative Lösungen",
    val2Desc: isRu ? "Современные подходы во имя лучшего будущего." : isEn ? "Modern approaches for a brighter future." : "Moderne Ansätze für eine bessere Zukunft.",
    val3Title: isRu ? "Живая ответственность" : isEn ? "Living Responsibility" : "Living Responsibility",
    val3Desc: isRu ? "Ответственность перед людьми, обществом и природой." : isEn ? "Accountability towards people, society, and the environment." : "Verantwortung für Mensch, Umwelt und Gesellschaft.",
    val4Title: isRu ? "Развитие команды" : isEn ? "People Development" : "People Development",
    val4Desc: isRu ? "Укрепление и поддержка наших специалистов." : isEn ? "Empowerment and advancement of our teams." : "Stärkung und Förderung unserer Teams.",

    // Section 3B: Governance & Medical Ethics (PDF Section II & IV)
    govEyebrow: isRu ? "КОМПЛАЕНС, КАЧЕСТВО И ВРАЧЕБНАЯ ЭТИКА" : isEn ? "COMPLIANCE, QUALITY & MEDICAL ETHICS" : "COMPLIANCE, QUALITÄT & MEDIZINISCHE ETHIK",
    govHeading1: isRu ? "Врачебная независимость" : isEn ? "Physician Independence" : "Ärztliche Unabhängigkeit",
    govHeading2: isRu ? "и ответственное управление." : isEn ? "& Responsible Governance." : "& verantwortungsvolle Governance.",
    govSubtitle: isRu
      ? "Как частный немецкий медицинский холдинг мы гарантируем безусловную врачебную свободу в соответствии с § 95 SGB V и объединяем её с высочайшими стандартами клинического качества, гигиены и защиты данных."
      : isEn
      ? "As an owner-managed German healthcare holding, we guarantee total clinical independence under § 95 SGB V and combine it with the highest standards of medical quality, hygiene, and data protection."
      : "Als inhabergeführte Gesundheitsholding garantieren wir gemäß § 95 SGB V die uneingeschränkte ärztliche Therapiefreiheit unserer Mediziner und verbinden dies mit höchsten Standards für klinische Qualität, Hygiene und Patientensicherheit.",

    govPillar1Tag: "§ 95 Abs. 1 SGB V",
    govPillar1Title: isRu ? "Врачебная независимость и свобода терапии" : isEn ? "Physician Independence & Clinical Autonomy" : "Ärztliche Weisungsfreiheit & Therapiefreiheit",
    govPillar1Desc: isRu
      ? "Медицинское руководство и врачи принимают решения о диагностике, показаниях и лечении исключительно на основе врачебного искусства и блага пациента — без каких-либо коммерческих указаний руководства холдинга."
      : isEn
      ? "Clinical directors and attending physicians determine diagnostics, indications, and therapy solely according to medical expertise and patient welfare – free from economic directives of holding management."
      : "Die medizinische Leitung und alle behandelnden Ärzte entscheiden über Diagnostik, Indikation und Therapie ausschließlich nach den Regeln der ärztlichen Kunst und dem Patientenwohl – frei von wirtschaftlichen Weisungen der Holding-Gesellschafter.",
    govPillar1Points: [
      isRu ? "Свободный выбор методов лечения" : isEn ? "Free choice of medical treatment" : "Freie Methodenwahl nach Berufsordnung",
      isRu ? "Запрет коммерческих квот на процедуры" : isEn ? "No revenue quotas for medical decisions" : "Keine ökonomischen Fallzahl- oder Therapievorgaben",
      isRu ? "Главный приоритет — благополучие пациента" : isEn ? "Absolute focus on patient welfare" : "Bedingungsloses Primat des Patientenwohls",
    ],

    govPillar2Tag: "DIN EN ISO 9001 & G-BA",
    govPillar2Title: isRu ? "Клиническое качество и безопасность пациентов" : isEn ? "Clinical Quality & Patient Safety" : "Klinisches Qualitäts- & Risikomanagement",
    govPillar2Desc: isRu
      ? "Строгое следование директивам G-BA по контролю качества, непрерывная система сообщений об инцидентах CIRS, валидированные протоколы гигиены по институту Роберта Коха (RKI) и постоянный мониторинг оборудования."
      : isEn
      ? "Strict adherence to G-BA quality directives, active CIRS (Critical Incident Reporting), certified RKI-compliant hygiene protocols, and comprehensive radiation safety monitoring across all diagnostic facilities."
      : "Strikte Einhaltung der G-BA-Qualitätsmanagement-Richtlinien, aktives CIRS-Fehlermeldesystem, validierte RKI-Hygienepläne und kontinuierliche Überwachung aller diagnostischen Großgeräte.",
    govPillar2Points: [
      isRu ? "Сертифицированная система менеджмента качества" : isEn ? "Certified clinical QM system" : "Zertifiziertes QM-System nach Bundesvorgaben",
      isRu ? "Многоступенчатый гигиенический контроль RKI" : isEn ? "RKI-compliant multi-stage hygiene management" : "RKI-konformes Hygienemanagement & Begehungen",
      isRu ? "Регулярный аудит и контроль безопасности" : isEn ? "Regular medical device safety inspections" : "Regelmäßige MPG- und Strahlenschutz-Audits",
    ],

    govPillar3Tag: "§ 203 StGB & DSGVO Art. 9",
    govPillar3Title: isRu ? "Врачебная тайна и защита персональных данных" : isEn ? "Medical Confidentiality & Data Privacy" : "Ärztliche Schweigepflicht & Datenschutz",
    govPillar3Desc: isRu
      ? "Бескомпромиссная защита медицинских данных через шифрованную немецкую телематическую инфраструктуру (TI), строгое разделение административной части холдинга и медицинских карт пациентов."
      : isEn
      ? "Uncompromising protection of health data through end-to-end encrypted Telematics Infrastructure (TI), strict physical and digital segregation of holding administration and patient charts."
      : "Strengster Schutz hochsensibler Patientendaten über die zertifizierte Telematikinfrastruktur (TI), strikte Trennung von Holding-Administration und medizinischen Patientenakten sowie bedingungslose Wahrung der Schweigepflicht.",
    govPillar3Points: [
      isRu ? "Полная изоляция клинических карт от холдинга" : isEn ? "Total clinical data isolation from corporate ops" : "Strikte Trennung von Verwaltungs- und Patientendaten",
      isRu ? "Защищенное подключение к Telematikinfrastruktur" : isEn ? "Certified Telematics Infrastructure connection" : "Zertifizierter Konnektor- und TI-Datenschutz",
      isRu ? "100% соответствие европейскому регламенту GDPR" : isEn ? "Full compliance with GDPR Art. 9" : "DSGVO-konforme Patientenportale und Archive",
    ],

    govPillar4Tag: "KV Nordrhein & Kassen",
    govPillar4Title: isRu ? "Партнерство с государственными и частными кассами" : isEn ? "Statutory & Private Healthcare Integration" : "Partnerschaftliche Versorgung im Rheinland",
    govPillar4Desc: isRu
      ? "Надежная интеграция в государственную систему здравоохранения Германии, тесное сотрудничество с Kassenärztliche Vereinigung Nordrhein (KVNO), всеми больничными кассами (GKV/PKV) и региональными клиниками."
      : isEn
      ? "Reliable integration into Germany's public healthcare framework, close coordination with the Association of Statutory Health Insurance Physicians (KVNO), health insurers, and regional hospitals."
      : "Feste Verwurzelung im öffentlichen Gesundheitssystem über die Kassenärztliche Vereinigung Nordrhein (KVNO), kooperative Verträge mit allen gesetzlichen und privaten Kassen sowie regionale Klinikverbünde.",
    govPillar4Points: [
      isRu ? "Прием пациентов всех страховых касс (GKV & PKV)" : isEn ? "Full coverage for all statutory & private patients" : "Volle Kassenzulassung für gesetzlich & privat Versicherte",
      isRu ? "Договоры интегрированной помощи по § 140a SGB V" : isEn ? "Integrated care contracts under § 140a SGB V" : "Integrierte Versorgungskonzepte (§ 140a SGB V)",
      isRu ? "Координация с ведущими клиниками региона" : isEn ? "Close coordination with regional university hospitals" : "Enge Kooperation mit regionalen Schwerpunktkliniken",
    ],

    govBannerTitle: isRu ? "Ответственность перед будущими поколениями" : isEn ? "Responsibility for Future Generations" : "Verantwortung für die Zukunft der Medizin",
    govBannerDesc: isRu
      ? "Мы объединяем медицинские традиции немецкого врачебного сообщества с технологическими инновациями и устойчивым инвестированием в здоровье общества."
      : isEn
      ? "We unite the medical traditions of the German healthcare profession with state-of-the-art clinical innovation and sustainable community investment."
      : "Wir verbinden die bewährten Traditionen des deutschen Berufsbeamtentums und der ärztlichen Standesethik mit modernsten Technologien und nachhaltiger regionaler Wertschöpfung.",

    // Section 4: Areas / Divisions Section
    areasEyebrow: isRu ? "НАШИ НАПРАВЛЕНИЯ" : isEn ? "OUR DIVISIONS" : "UNSERE BEREICHE",
    areasHeading1: isRu ? "Многогранные компетенции" : isEn ? "Diverse Expertise" : "Vielfältige Kompetenzen",
    areasHeading2: isRu ? "для вашего здоровья." : isEn ? "for your health." : "für Ihre Gesundheit.",
    areasText: isRu
      ? "Наш опыт охватывает широкий спектр медицинских и терапевтических направлений — от профилактики до узкоспециализированного лечения."
      : isEn
      ? "Our expertise spans a wide spectrum of medical and therapeutic disciplines – from prevention to specialized clinical care."
      : "Unsere Expertise deckt ein breites Spektrum medizinischer und therapeutischer Bereiche ab – von der Prävention bis zur spezialisierten Behandlung.",
    areasBtn: isRu ? "Все направления" : isEn ? "All Divisions" : "Alle Bereiche",

    // 9 Competencies Grid
    comp1: isRu ? "Медицинские центры и MVZ" : isEn ? "Medical Care Centers" : "Medizinische Versorgungszentren",
    comp2: isRu ? "Диагностика" : isEn ? "Diagnostics" : "Diagnostik",
    comp3: isRu ? "Реабилитация" : isEn ? "Rehabilitation" : "Rehabilitation",
    comp4: isRu ? "Уход и поддержка" : isEn ? "Nursing & Care" : "Pflege",
    comp5: isRu ? "Рекрутинг и персонал" : isEn ? "Recruiting & Care" : "Recruiting & Care",
    comp6: isRu ? "Консалтинг и развитие" : isEn ? "Consulting & Dev" : "Beratung & Entwicklung",
    comp7: isRu ? "Международное сотрудничество" : isEn ? "International Cooperation" : "Internationale Zusammenarbeit",
    comp8: isRu ? "Исследования и инновации" : isEn ? "Research & Innovation" : "Forschung & Innovation",
    comp9: isRu ? "Домашний уход (Home Care)" : isEn ? "Home Care" : "Home Care",

    // Section 5: Stats Section
    statsHeading1: isRu ? "Наши цифры говорят" : isEn ? "Our numbers speak" : "Unsere Zahlen sprechen",
    statsHeading2: isRu ? "сами за себя." : isEn ? "for themselves." : "für sich.",
    stat1Num: "1",
    stat1Label: isRu ? "Сильный бренд" : isEn ? "Strong Brand" : "Starke Marke",
    stat2Num: "6+",
    stat2Label: isRu ? "Направлений бизнеса" : isEn ? "Divisions" : "Unternehmensbereiche",
    stat3Num: "100+",
    stat3Label: isRu ? "Экспертов в сети" : isEn ? "Network Experts" : "Experten im Netzwerk",
    stat4Num: "∞",
    stat4Label: isRu ? "Одна общая миссия" : isEn ? "One Shared Mission" : "Eine Mission",

    // Section 6: Team Section
    teamEyebrow: isRu ? "НАША КОМАНДА" : isEn ? "OUR TEAM" : "UNSER TEAM",
    teamHeading: isRu ? "Вместе достигать большего." : isEn ? "Achieving more together." : "Gemeinsam mehr erreichen.",
    teamText: isRu
      ? "За NabiOta® стоит преданная команда квалифицированных специалистов, экспертов и визионеров. Мы работаем рука об руку, чтобы оказывать людям наилучшую помощь и формировать здравоохранение завтрашнего дня."
      : isEn
      ? "Behind NabiOta® stands a committed team of healthcare professionals, specialists, and visionaries. We work hand-in-hand to deliver optimal patient care and shape the healthcare of tomorrow."
      : "Hinter NabiOta® steht ein engagiertes Team aus Fachkräften, Spezialisten und Visionären. Wir arbeiten Hand in Hand, um Menschen bestmöglich zu helfen und die Gesundheitsversorgung von morgen zu gestalten.",
    teamBtn: isRu ? "Наша карьера" : isEn ? "Our Careers" : "Unsere Karriere",
    teamBadge: isRu ? "Сильные команды. Высокий результат." : isEn ? "Strong teams. Major impact." : "Starke Teams. Große Wirkung.",

    // Section 7: Founder Quote Section
    founderName: "Marike NabiOta®",
    founderQuote: isRu
      ? "„Будущее здравоохранения создают люди, готовые брать на себя ответственность — и обладающие смелостью идти новыми путями.“"
      : isEn
      ? "“The future of healthcare is shaped by people who take responsibility – and who have the courage to break new ground.”"
      : "„Die Zukunft der Gesundheitsversorgung entsteht durch Menschen, die Verantwortung übernehmen – und die den Mut haben, neue Wege zu gehen.“",
    founderRole: isRu ? "Руководство холдинга" : isEn ? "Managing Director" : "Geschäftsführung",
  };

  const divisions = [
    { name: t.comp1, icon: Stethoscope, href: `/${locale}/areas/medizinische-fachbereiche` },
    { name: t.comp2, icon: Microscope, href: `/${locale}/areas/diagnostik` },
    { name: t.comp3, icon: Heart, href: `/${locale}/areas/rehabilitation` },
    { name: t.comp4, icon: HandHeart, href: `/${locale}/areas/pflege` },
    { name: t.comp5, icon: UserCheck, href: `/${locale}/areas/beratung-projektentwicklung` },
    { name: t.comp6, icon: Building2, href: `/${locale}/areas/beratung-projektentwicklung` },
    { name: t.comp7, icon: Globe, href: `/${locale}/areas/internationale-kooperationen` },
    { name: t.comp8, icon: Lightbulb, href: `/${locale}/areas/beratung-projektentwicklung` },
    { name: t.comp9, icon: Home, href: `/${locale}/areas/pflege` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF6] text-[#142318] selection:bg-[#EBDDC0] selection:text-[#142318]">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: HERO (Dark Forest Green + Sunlit Building)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full min-h-[480px] sm:min-h-[520px] lg:h-[600px] lg:min-h-[600px] pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 overflow-hidden flex items-center bg-[#07150C] text-[#FAF8F5] border-b border-[#D5B878]/25">
          {/* Background: Modern Medical Consultation - focused on subjects on mobile, crisp on desktop */}
          <div className="absolute inset-0 sm:left-[18%] sm:w-[82%] z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/heroes/hero-values.webp"
              alt="NabiOta Health Group Germany Werte"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 82vw"
              className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-[center_25%]"
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
              <clipPath id="valuesLeftWingClip">
                <path d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z" />
              </clipPath>

              <linearGradient id="valuesHeroGoldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFC894" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#D4B06A" stopOpacity="1" />
                <stop offset="75%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="valuesHeroGoldGradLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ECCF93" stopOpacity="0.08" />
                <stop offset="35%" stopColor="#ECCF93" stopOpacity="0.45" />
                <stop offset="75%" stopColor="#DFC894" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.08" />
              </linearGradient>
              <filter id="valuesHeroGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="valuesDarkGreenFill" x1="0" y1="0" x2="1" y2="0">
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
              clipPath="url(#valuesLeftWingClip)"
              opacity="1"
            />

            {/* Subtle Dark Green shading overlay inside the Left Wing for crisp text contrast */}
            <path
              d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z"
              fill="url(#valuesDarkGreenFill)"
            />

            {/* Primary Glowing Golden Separator Arc Line (Narrower position) */}
            <path
              d="M 620,0 C 710,180 680,420 800,600"
              stroke="url(#valuesHeroGoldGrad)"
              strokeWidth="2"
              fill="none"
              filter="url(#valuesHeroGoldGlow)"
            />

            {/* Secondary Fine Golden Accent Curve */}
            <path
              d="M 645,0 C 735,185 705,430 825,600"
              stroke="url(#valuesHeroGoldGradLight)"
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
            <div className="max-w-xl lg:max-w-[520px] xl:max-w-[580px]">
              {/* Breadcrumb: Startseite > Über uns */}
              <nav className="flex items-center gap-2 text-xs text-[#A2ADA4] mb-3.5 font-sans" aria-label="Breadcrumb">
                <Link href={`/${locale}`} className="hover:text-[#D5B878] transition-colors">
                  {t.breadcrumbHome}
                </Link>
                <span className="text-[#A2ADA4] text-[10px] font-bold">›</span>
                <span className="text-white/90 font-medium">{t.breadcrumbValues}</span>
              </nav>

              {/* Main Heading */}
              <h1 className="page-hero-title font-serif text-[32px] sm:text-[40px] lg:text-[44px] xl:text-[50px] font-normal leading-[1.12] tracking-[-0.01em] text-white mb-5 sm:mb-6 break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.heroTitle1}
                <br />
                {t.heroTitle2}
              </h1>

              {/* Description */}
              <p className="hero-text-wrap text-[13.5px] sm:text-[14.5px] text-[#D2DED5] leading-[1.72] font-sans max-w-xl mb-6 sm:mb-7 font-normal break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.heroDesc}
              </p>

              {/* 3 Circular Feature Badges matching reference photo */}
              <div className="mb-8">
                <HeroBadges
                  items={[
                    {
                      icon: HeartHandshake,
                      title: t.badge1Title,
                      sub: t.badge1Sub,
                    },
                    {
                      icon: Shield,
                      title: t.badge2Title,
                      sub: t.badge2Sub,
                    },
                    {
                      icon: Sparkles,
                      title: t.badge3Title,
                      sub: t.badge3Sub,
                    },
                  ]}
                />
              </div>

              {/* CTA Button: Unsere Geschichte -> */}
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] text-[#142217] font-sans font-semibold text-[13px] tracking-wide hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all shadow-md group"
              >
                <span>{t.heroBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: UNSERE MISSION (Mehr als nur Gesundheitsversorgung.)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#ECE7DC] relative">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Mission Content & Signature */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase mb-2 block">
                  {t.missionEyebrow}
                </span>

                <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.12] text-[#142318] mb-5">
                  {t.missionHeading1}
                  <br />
                  {t.missionHeading2}
                </h2>

                <p className="text-[14px] sm:text-[14.5px] text-[#4E5650] leading-[1.75] font-sans mb-8">
                  {t.missionText}
                </p>

                {/* Signature block */}
                <div className="pt-2">
                  <div className="flex items-baseline gap-1 select-none mb-2">
                    <span className="font-signature text-4xl sm:text-[46px] text-[#142318] tracking-wide font-normal leading-none">
                      NabiOta
                    </span>
                    <span className="text-xs text-[#C5A56A] font-serif -ml-0.5 -top-3 relative font-bold">®</span>
                  </div>
                  <p className="font-serif text-[14px] font-bold text-[#142318] leading-tight">
                    {t.signatureCompany}
                  </p>
                  <p className="text-[11.5px] text-[#717A73] font-sans">
                    {t.signatureTitle}
                  </p>
                </div>
              </div>

              {/* Right Column: Doctor Patient Photo + Floating Pill Card */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#EDE7D9] bg-[#F7F4EE]">
                  <Image
                    src="/images/about/doctor-patient.webp"
                    alt="Ärztliche Betreuung bei NabiOta Health Group"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[center_25%]"
                  />

                  {/* Floating Pill Card Overlaid at the Bottom of Photo */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md border border-[#E8DFD0] rounded-2xl p-3.5 sm:p-4 shadow-lg flex items-center gap-3 sm:gap-3.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5B878] bg-[#FAF8F4] flex items-center justify-center text-[#B89650] flex-shrink-0 shadow-[0_0_8px_rgba(213,184,120,0.18)]">
                      <Heart className="w-4.5 h-4.5 fill-[#B89650]/20 stroke-[1.8]" />
                    </div>
                    <p className="text-[12px] sm:text-[12.5px] text-[#142318] font-sans italic leading-snug">
                      {t.missionQuote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: UNSERE WERTE (Das macht uns besonders)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-10 sm:py-12 lg:py-14 bg-[#07160D] text-white overflow-hidden border-b border-[#D5B878]/20">
          {/* Background: Botanical leaves illuminated on the left matching Screenshot 2 */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/values/leaves-bg.webp"
              alt="Botanical Background"
              fill
              sizes="100vw"
              priority
              className="object-cover object-[left_center]"
            />
            {/* Smooth gradient from transparent over leaves to rich dark forest green on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#07160D]/80 to-[#07160D] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07160D]/65 via-[#07160D]/90 to-[#07160D] lg:hidden" />
          </div>

          <Container size="wide" className="relative z-10">
            {/* Shift content to the right so left foliage remains unobstructed */}
            <div className="lg:ml-auto lg:w-[78%] xl:w-[75%]">
              {/* Header */}
              <div className="max-w-xl mb-5 sm:mb-6">
                <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#D5B878] uppercase mb-1.5 block">
                  {t.valuesEyebrow}
                </span>
                <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-white mb-2 sm:mb-2.5">
                  {t.valuesHeading}
                </h2>
                <p className="text-[12.5px] sm:text-[13.5px] text-[#C2D2C5] leading-relaxed font-sans max-w-lg">
                  {t.valuesSubtitle}
                </p>
              </div>

              {/* 4 Value Cards in ONE row on desktop matching user request */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                {/* Card 1: Verlässlicher Partner */}
                <div className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5B878] bg-[#122B1B]/80 flex items-center justify-center text-[#ECCF96] mb-2.5 shadow-[0_0_8px_rgba(213,184,120,0.2)] group-hover:scale-105 transition-transform">
                      <HeartHandshake className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-white mb-1 group-hover:text-[#ECCF96] transition-colors leading-snug">
                      {t.val1Title}
                    </h3>
                    <p className="text-[11px] sm:text-[11.5px] text-[#A6B8AA] leading-snug font-sans">
                      {t.val1Desc}
                    </p>
                  </div>
                </div>

                {/* Card 2: Innovative Lösungen */}
                <div className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5B878] bg-[#122B1B]/80 flex items-center justify-center text-[#ECCF96] mb-2.5 shadow-[0_0_8px_rgba(213,184,120,0.2)] group-hover:scale-105 transition-transform">
                      <Lightbulb className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-white mb-1 group-hover:text-[#ECCF96] transition-colors leading-snug">
                      {t.val2Title}
                    </h3>
                    <p className="text-[11px] sm:text-[11.5px] text-[#A6B8AA] leading-snug font-sans">
                      {t.val2Desc}
                    </p>
                  </div>
                </div>

                {/* Card 3: Living Responsibility */}
                <div className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5B878] bg-[#122B1B]/80 flex items-center justify-center text-[#ECCF96] mb-2.5 shadow-[0_0_8px_rgba(213,184,120,0.2)] group-hover:scale-105 transition-transform">
                      <Shield className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-white mb-1 group-hover:text-[#ECCF96] transition-colors leading-snug">
                      {t.val3Title}
                    </h3>
                    <p className="text-[11px] sm:text-[11.5px] text-[#A6B8AA] leading-snug font-sans">
                      {t.val3Desc}
                    </p>
                  </div>
                </div>

                {/* Card 4: People Development */}
                <div className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5B878] bg-[#122B1B]/80 flex items-center justify-center text-[#ECCF96] mb-2.5 shadow-[0_0_8px_rgba(213,184,120,0.2)] group-hover:scale-105 transition-transform">
                      <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-white mb-1 group-hover:text-[#ECCF96] transition-colors leading-snug">
                      {t.val4Title}
                    </h3>
                    <p className="text-[11px] sm:text-[11.5px] text-[#A6B8AA] leading-snug font-sans">
                      {t.val4Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3B: GOVERNANCE & ÄRZTLICHE ETHIK (PDF Section II & IV)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#E8DFD0] relative overflow-hidden">
          {/* Subtle ambient blur */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#EBDDC0]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#D5B878]/15 blur-3xl pointer-events-none" />

          <Container size="wide" className="relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-12 sm:mb-14">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase mb-2 block">
                {t.govEyebrow}
              </span>
              <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-normal leading-[1.15] text-[#142318] mb-4">
                {t.govHeading1}{" "}
                <span className="italic text-[#8B7347]">{t.govHeading2}</span>
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#555E56] leading-relaxed font-sans">
                {t.govSubtitle}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 mb-12">
              {/* Pillar 1: Weisungsfreiheit § 95 SGB V */}
              <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#E7DFD2] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#D5B878]/70 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wider uppercase bg-[#F3EDE2] text-[#8B7347] border border-[#D5B878]/40">
                      {t.govPillar1Tag}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#D5B878]/50 bg-[#FAF7F2] flex items-center justify-center text-[#B89650]">
                      <Scale className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#142318] mb-2 leading-snug">
                    {t.govPillar1Title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#555E56] leading-relaxed mb-4">
                    {t.govPillar1Desc}
                  </p>
                </div>
                <div className="pt-3.5 border-t border-[#F0EBE1] space-y-2">
                  {t.govPillar1Points.map((point: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-[12px] sm:text-[12.5px] text-[#2C3E31] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#8B7347] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar 2: QM & Patientensicherheit */}
              <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#E7DFD2] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#D5B878]/70 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wider uppercase bg-[#F3EDE2] text-[#8B7347] border border-[#D5B878]/40">
                      {t.govPillar2Tag}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#D5B878]/50 bg-[#FAF7F2] flex items-center justify-center text-[#B89650]">
                      <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#142318] mb-2 leading-snug">
                    {t.govPillar2Title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#555E56] leading-relaxed mb-4">
                    {t.govPillar2Desc}
                  </p>
                </div>
                <div className="pt-3.5 border-t border-[#F0EBE1] space-y-2">
                  {t.govPillar2Points.map((point: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-[12px] sm:text-[12.5px] text-[#2C3E31] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#8B7347] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar 3: Schweigepflicht & Datenschutz */}
              <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#E7DFD2] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#D5B878]/70 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wider uppercase bg-[#F3EDE2] text-[#8B7347] border border-[#D5B878]/40">
                      {t.govPillar3Tag}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#D5B878]/50 bg-[#FAF7F2] flex items-center justify-center text-[#B89650]">
                      <Lock className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#142318] mb-2 leading-snug">
                    {t.govPillar3Title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#555E56] leading-relaxed mb-4">
                    {t.govPillar3Desc}
                  </p>
                </div>
                <div className="pt-3.5 border-t border-[#F0EBE1] space-y-2">
                  {t.govPillar3Points.map((point: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-[12px] sm:text-[12.5px] text-[#2C3E31] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#8B7347] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar 4: Kassen & KVNO Partnerschaft */}
              <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#E7DFD2] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#D5B878]/70 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wider uppercase bg-[#F3EDE2] text-[#8B7347] border border-[#D5B878]/40">
                      {t.govPillar4Tag}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#D5B878]/50 bg-[#FAF7F2] flex items-center justify-center text-[#B89650]">
                      <HeartHandshake className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#142318] mb-2 leading-snug">
                    {t.govPillar4Title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#555E56] leading-relaxed mb-4">
                    {t.govPillar4Desc}
                  </p>
                </div>
                <div className="pt-3.5 border-t border-[#F0EBE1] space-y-2">
                  {t.govPillar4Points.map((point: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-[12px] sm:text-[12.5px] text-[#2C3E31] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#8B7347] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Governance Callout Banner */}
            <div className="bg-gradient-to-r from-[#07160D] via-[#0D2618] to-[#07160D] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D5B878]/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-[#ECCF96] text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 stroke-[2]" />
                  <span>NabiOta® Holding Governance Standard</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2 leading-snug">
                  {t.govBannerTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#C2D2C5] leading-relaxed">
                  {t.govBannerDesc}
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ECCF96] text-[#07160D] font-medium text-xs uppercase tracking-wider hover:bg-white transition-colors duration-200 shadow-md"
                >
                  <span>{isRu ? "Связаться с руководством" : isEn ? "Contact Management" : "Kontakt zur Geschäftsführung"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4: UNSERE BEREICHE (Vielfältige Kompetenzen für Ihre Gesundheit)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#ECE7DC]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading, text, and button */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase mb-2 block">
                  {t.areasEyebrow}
                </span>

                <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.12] text-[#142318] mb-4">
                  {t.areasHeading1}
                  <br />
                  {t.areasHeading2}
                </h2>

                <p className="text-[13.5px] sm:text-[14px] text-[#555E56] leading-[1.7] font-sans mb-8">
                  {t.areasText}
                </p>

                <div>
                  <Link
                    href={`/${locale}/areas`}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] text-[#142217] font-sans font-semibold text-[13px] tracking-wide hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all shadow-md group"
                  >
                    <span>{t.areasBtn}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 3x3 Division Cards Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  {divisions.map((divItem, idx) => {
                    const DivIcon = divItem.icon;
                    return (
                      <Link
                        key={idx}
                        href={divItem.href}
                        className="bg-white/90 hover:bg-white border border-[#EAE4D7] hover:border-[#D5B878] rounded-xl p-4 sm:p-5 flex flex-col items-center text-center justify-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group shadow-[0_1px_4px_rgba(0,0,0,0.02)] min-h-[120px]"
                      >
                        <div className="text-[#B89650] mb-2.5 transition-transform duration-200 group-hover:scale-110">
                          <DivIcon className="w-6 h-6 stroke-[1.6]" />
                        </div>
                        <h4 className="font-serif font-medium text-[12.5px] sm:text-[13px] text-[#142318] leading-snug group-hover:text-[#BFA267] transition-colors">
                          {divItem.name}
                        </h4>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5: STATS BAR (Unsere Zahlen sprechen für sich.)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-14 sm:py-18 overflow-hidden bg-[#FAF6EE] border-b border-[#ECE7DC]">
          {/* Panoramic background photo with hands holding heart on the right */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/bacground.webp"
              alt="NabiOta Numbers & Values"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-85"
            />
            {/* Soft cream gradient overlay for readability on left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/80 to-transparent" />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Heading */}
              <div className="lg:col-span-4">
                <h2 className="font-serif text-[30px] sm:text-[36px] font-normal leading-[1.18] text-[#142318]">
                  {t.statsHeading1}
                  <br />
                  {t.statsHeading2}
                </h2>
              </div>

              {/* Right Column: 4 Stats Columns */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {/* Stat 1 */}
                  <div className="border-l border-[#D5B878]/50 pl-4 sm:pl-5">
                    <span className="font-serif text-[36px] sm:text-[44px] font-normal text-[#B89650] leading-none block mb-1">
                      {t.stat1Num}
                    </span>
                    <span className="text-[12px] sm:text-[12.5px] font-medium text-[#4E5650] leading-tight block">
                      {t.stat1Label}
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="border-l border-[#D5B878]/50 pl-4 sm:pl-5">
                    <span className="font-serif text-[36px] sm:text-[44px] font-normal text-[#B89650] leading-none block mb-1">
                      {t.stat2Num}
                    </span>
                    <span className="text-[12px] sm:text-[12.5px] font-medium text-[#4E5650] leading-tight block">
                      {t.stat2Label}
                    </span>
                  </div>

                  {/* Stat 3 */}
                  <div className="border-l border-[#D5B878]/50 pl-4 sm:pl-5">
                    <span className="font-serif text-[36px] sm:text-[44px] font-normal text-[#B89650] leading-none block mb-1">
                      {t.stat3Num}
                    </span>
                    <span className="text-[12px] sm:text-[12.5px] font-medium text-[#4E5650] leading-tight block">
                      {t.stat3Label}
                    </span>
                  </div>

                  {/* Stat 4 */}
                  <div className="border-l border-[#D5B878]/50 pl-4 sm:pl-5">
                    <span className="font-serif text-[36px] sm:text-[44px] font-normal text-[#B89650] leading-none block mb-1">
                      {t.stat4Num}
                    </span>
                    <span className="text-[12px] sm:text-[12.5px] font-medium text-[#4E5650] leading-tight block">
                      {t.stat4Label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 6: UNSER TEAM (Gemeinsam mehr erreichen.)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#ECE7DC] relative">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Team Content & Button */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase mb-2 block">
                  {t.teamEyebrow}
                </span>

                <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.12] text-[#142318] mb-5">
                  {t.teamHeading}
                </h2>

                <p className="text-[14px] sm:text-[14.5px] text-[#4E5650] leading-[1.75] font-sans mb-8">
                  {t.teamText}
                </p>

                <div>
                  <Link
                    href={`/${locale}/career`}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] text-[#142217] font-sans font-semibold text-[13px] tracking-wide hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all shadow-md group"
                  >
                    <span>{t.teamBtn}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Medical Team Photo with Floating Pill */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#EDE7D9] bg-[#F7F4EE]">
                  <Image
                    src="/images/careers/team.webp"
                    alt="NabiOta Health Group Medical Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[center_20%]"
                  />

                  {/* Floating Pill Card Overlaid at the Bottom of Photo */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md border border-[#E8DFD0] rounded-2xl p-3.5 sm:p-4 shadow-lg flex items-center gap-3 sm:gap-3.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5B878] bg-[#FAF8F4] flex items-center justify-center text-[#B89650] flex-shrink-0 shadow-[0_0_8px_rgba(213,184,120,0.18)]">
                      <Users className="w-4.5 h-4.5 stroke-[1.8]" />
                    </div>
                    <p className="text-[12.5px] sm:text-[13px] font-semibold text-[#142318] font-sans leading-snug">
                      {t.teamBadge}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 7: FOUNDER / EXECUTIVE QUOTE BANNER (Marike NabiOta®)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-14 sm:py-18 bg-[#FCFAF6]">
          <Container size="wide">
            <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-[#D5B878]/45 bg-[#09170E] shadow-2xl p-8 sm:p-10 lg:py-14 lg:px-12 min-h-[180px] sm:min-h-[210px] flex items-center">
              {/* Background: Visible Misty Panoramic Green Mountains matching Screenshot 3 */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                  src="/images/values/mountains-bg.webp"
                  alt="Misty Mountains Landscape"
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover object-center opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06140B]/85 via-[#081B10]/65 to-[#06140B]/80" />
              </div>

              {/* Content Layout: Avatar on left, Quote in middle, Cursive Signature on right */}
              <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                {/* Left: Avatar Portrait */}
                <div className="flex items-center gap-4 sm:gap-5 flex-shrink-0">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#D5B878] shadow-[0_0_20px_rgba(213,184,120,0.3)] flex-shrink-0">
                    <Image
                      src="/images/values/marike-nabiota.webp"
                      alt={t.founderName}
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Center: Name & Quote */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#ECCF96] tracking-wide mb-2">
                    {t.founderName}
                  </h3>
                  <blockquote className="font-sans text-[13.5px] sm:text-[14.5px] text-white/95 leading-relaxed max-w-2xl italic">
                    {t.founderQuote}
                  </blockquote>
                </div>

                {/* Right: Golden Handwritten Cursive Script Signature & Role matching Screenshot 3 */}
                <div className="flex flex-col items-center md:items-end flex-shrink-0 text-center md:text-right select-none">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-signature text-4xl sm:text-5xl text-[#ECCF96] tracking-wide font-normal leading-none drop-shadow-sm">
                      NabiOta
                    </span>
                    <span className="text-[11px] text-[#ECCF96] font-serif -ml-0.5 -top-3 relative font-bold">®</span>
                  </div>
                  <span className="text-[11px] font-sans font-medium text-[#C2D2C5] tracking-[0.2em] uppercase">
                    {t.founderRole}
                  </span>
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
