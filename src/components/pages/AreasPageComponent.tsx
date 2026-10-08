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

// ── Decorative SVG Icons for Photo 1 ──
function CloverIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function QualityHeartIcon({ className = "w-5 h-5" }: { className?: string }) {
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

function CollaborationIcon({ className = "w-5 h-5" }: { className?: string }) {
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

function TechnologyIcon({ className = "w-5 h-5" }: { className?: string }) {
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

function CarePeopleIcon({ className = "w-5 h-5" }: { className?: string }) {
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

interface AreasPageComponentProps {
  locale: SupportedLocale;
}

export function AreasPageComponent({ locale }: AreasPageComponentProps) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  // ── Hero Translations ──
  const heroData = {
    breadcrumbHome: isRu ? "Главная" : isEn ? "Home" : isTr ? "Ana Sayfa" : isAr ? "الرئيسية" : "Startseite",
    breadcrumbAreas: isRu ? "Направления" : isEn ? "Our Divisions" : isTr ? "Faaliyet Alanları" : isAr ? "قطاعات الأعمال" : "Unternehmensbereiche",
    eyebrow: isRu ? "НАПРАВЛЕНИЯ ХОЛДИНГА" : isEn ? "OUR DIVISIONS" : isTr ? "HOLDİNG FAALİYET ALANLARI" : isAr ? "قطاعات أعمال المجموعة" : "UNTERNEHMENSBEREICHE",
    title: isRu
      ? "Разносторонние компетенции. Единое видение."
      : isEn
      ? "Diverse Competencies. One Shared Vision."
      : isTr
      ? "Çok Yönlü Yetkinlikler. Ortak Bir Vizyon."
      : isAr
      ? "كفاءات متنوعة ورؤية موحدة."
      : "Vielfältige Kompetenzen. Eine gemeinsame Vision.",
    description: isRu
      ? "От передовой диагностики до специализированного лечения — наши направления работают в синергии, обеспечивая пациентоориентированную помощь высшего качества."
      : isEn
      ? "From advanced diagnostics to specialized treatment, our divisions work together to provide comprehensive, patient-centered care. Each area brings unique expertise — united by a common goal: better health, brighter futures."
      : isTr
      ? "İleri tanı yöntemlerinden uzmanlaşmış tedaviye kadar, faaliyet alanlarımız en üst düzeyde hasta odaklı bakım sunmak için uyum içinde çalışmaktadır."
      : isAr
      ? "من التشخيص المتقدم إلى العلاج التخصصي، تعمل قطاعاتنا في تكامل تام لتقديم رعاية صحية شاملة محورها المريض بأعلى معايير الجودة."
      : "Von hochmoderner Diagnostik bis hin zu spezialisierten Therapien arbeiten unsere Unternehmensbereiche vernetzt zusammen, um eine ganzheitliche Versorgung auf höchstem Niveau zu garantieren.",
    badges: [
      {
        icon: <Users className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "6 Ключевых" : isEn ? "6 Core" : isTr ? "6 Temel" : isAr ? "6 مجالات" : "6 Starke",
        sub: isRu ? "направлений" : isEn ? "Divisions" : isTr ? "Faaliyet Alanı" : isAr ? "رئيسية" : "Bereiche",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "100+ Врачей" : isEn ? "100+ Top" : isTr ? "100+ Hekim" : isAr ? "+100 طبيب" : "100+ Ärzte",
        sub: isRu ? "и специалистов" : isEn ? "Specialists" : isTr ? "ve Uzman" : isAr ? "واستشاري" : "& Spezialisten",
      },
      {
        icon: <Lightbulb className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "Передовые" : isEn ? "State-of-the-Art" : isTr ? "En Son" : isAr ? "أحدث" : "Modernste",
        sub: isRu ? "технологии" : isEn ? "Technology" : isTr ? "Teknoloji" : isAr ? "التقنيات" : "Technologie",
      },
    ],
  };

  // ── Photo 1: Top 3-Column Intro Section (Spezialisierte Versorgung für jeden Bedarf) ──
  const introData = {
    eyebrow: isRu ? "НАШИ НАПРАВЛЕНИЯ" : isEn ? "OUR SPECIALTIES" : isTr ? "UZMANLIK ALANLARIMIZ" : isAr ? "تخصصاتنا الطبية" : "UNSERE FACHBEREICHE",
    title: isRu
      ? "Специализированная помощь\nдля каждого пациента"
      : isEn
      ? "Specialized Care\nfor Every Need"
      : isTr
      ? "Her İhtiyaç İçin\nUzmanlaşmış Bakım"
      : isAr
      ? "رعاية تخصصية\nلكل احتياج"
      : "Spezialisierte Versorgung\nfür jeden Bedarf",
    description: isRu
      ? "Наши медицинские направления охватывают широкий спектр услуг — от профилактики до высокотехнологичной хирургии. Благодаря передовому оснащению и междисциплинарному взаимодействию вы получаете индивидуально подобранную и комплексную помощь."
      : isEn
      ? "Our medical departments cover a broad spectrum – from prevention to highly specialized surgery. Thanks to state-of-the-art technology and interdisciplinary collaboration, you receive individually tailored and holistic care."
      : isTr
      ? "Tıbbi uzmanlık alanlarımız, önleyici hekimlikten yüksek teknolojili cerrahiye kadar geniş bir yelpazeyi kapsar. En modern teknoloji ve disiplinler arası iş birliği sayesinde bireysel ve bütüncül bir bakım alırsınız."
      : isAr
      ? "تغطي أقسامنا الطبية نطاقاً واسعاً من الخدمات – بدءاً من الطب الوقائي وحتى الجراحات الدقيقة عالية التخصص. بفضل أحدث التقنيات والتعاون بين مختلف التخصصات، نوفر لكم رعاية فردية متكاملة."
      : "Unsere medizinischen Fachbereiche decken ein breites Spektrum ab – von der Prävention bis zur hochspezialisierten Chirurgie. Dank modernster Technologie und interdisziplinärer Zusammenarbeit erhalten Sie eine individuell abgestimmte und ganzheitliche Betreuung.",
    btn: isRu ? "Все направления" : isEn ? "Explore All Divisions" : isTr ? "Tüm Alanları Keşfedin" : isAr ? "استكشف كافة القطاعات" : "Alle Bereiche entdecken",
    cardTitle: isRu
      ? "От диагностики до реабилитации"
      : isEn
      ? "From Diagnosis to Aftercare"
      : isTr
      ? "Tanıdan Rehabilitasyona"
      : isAr
      ? "من التشخيص إلى الرعاية اللاحقة"
      : "Von der Diagnose bis zur Nachsorge",
    cardDescription: isRu
      ? "Наши отделения работают в тесном сотрудничестве, чтобы предоставить вам наилучшее лечение — современное, щадящее и ориентированное на ваши индивидуальные потребности."
      : isEn
      ? "Our departments work closely together to provide you with the best possible treatment – modern, gentle, and tailored to your individual needs."
      : isTr
      ? "Bölümlerimiz, size mümkün olan en iyi tedaviyi sunmak için yakın iş birliği içinde çalışır; modern, koruyucu ve kişisel ihtiyaçlarınıza göre uyarlanmış."
      : isAr
      ? "تعمل أقسامنا بتنسيق وثيق لتقديم أفضل علاج ممكن – عصري، آمن، ومصمم خصيصاً لتلبية احتياجاتكم الفردية."
      : "Unsere Fachbereiche arbeiten eng zusammen, um Ihnen die bestmögliche Behandlung zu bieten – modern, schonend und auf Ihre individuellen Bedürfnisse abgestimmt.",
    features: [
      {
        icon: QualityHeartIcon,
        label: isRu
          ? "Высочайшие медицинские стандарты качества"
          : isEn
          ? "Highest Medical Quality Standards"
          : isTr
          ? "En Yüksek Tıbbi Kalite Standartları"
          : isAr
          ? "أعلى معايير الجودة الطبية"
          : "Höchste medizinische Qualitätsstandards",
      },
      {
        icon: CollaborationIcon,
        label: isRu
          ? "Междисциплинарное сотрудничество"
          : isEn
          ? "Interdisciplinary Collaboration"
          : isTr
          ? "Disiplinler Arası İş Birliği"
          : isAr
          ? "التعاون متعدد التخصصات"
          : "Interdisziplinäre Zusammenarbeit",
      },
      {
        icon: TechnologyIcon,
        label: isRu
          ? "Передовые технологии и инновации"
          : isEn
          ? "State-of-the-Art Technology & Innovation"
          : isTr
          ? "En Yeni Teknoloji ve İnovasyon"
          : isAr
          ? "أحدث التقنيات والابتكارات"
          : "Modernste Technik und Innovation",
      },
      {
        icon: CarePeopleIcon,
        label: isRu
          ? "Индивидуальная забота и человечность"
          : isEn
          ? "Personal Care & Human Touch"
          : isTr
          ? "Bireysel İlgi ve İnsani Yaklaşım"
          : isAr
          ? "رعاية شخصية ولمسة إنسانية"
          : "Individuelle Betreuung und Menschlichkeit",
      },
    ],
  };

  const divisions = [
    {
      id: "med-departments",
      icon: Stethoscope,
      image: "/images/areas/medical-departments.webp",
      href: `/${locale}/areas/medizinische-fachbereiche`,
      title: isRu ? "Медицинские отделения" : isEn ? "Medical Departments" : isTr ? "Tıbbi Uzmanlık Bölümleri" : isAr ? "الأقسام الطبية التخصصية" : "Medizinische Fachbereiche",
      desc: isRu
        ? "Комплексная амбулаторная помощь по широкому спектру врачебных специальностей."
        : isEn
        ? "Comprehensive care across a wide range of medical specialties."
        : isTr
        ? "Geniş bir tıbbi uzmanlık yelpazesinde kapsamlı ayakta tedavi ve bakım."
        : isAr
        ? "رعاية شاملة عبر مجموعة واسعة من التخصصات الطبية للعيادات الخارجية."
        : "Umfassende Versorgung über ein breites Spektrum medizinischer Fachdisziplinen.",
    },
    {
      id: "diagnostics",
      icon: Microscope,
      image: "/images/areas/diagnostics.webp",
      href: `/${locale}/areas/diagnostik`,
      title: isRu ? "Диагностика" : isEn ? "Diagnostics" : isTr ? "Tanı ve Teşhis" : isAr ? "التشخيص الطبي" : "Diagnostik",
      desc: isRu
        ? "Передовая визуализация и лаборатория для точного и раннего выявления."
        : isEn
        ? "Advanced imaging and laboratory for accurate and early detection."
        : isTr
        ? "Hassas ve erken teşhis için en son görüntüleme ve laboratuvar analizleri."
        : isAr
        ? "أحدث تقنيات التصوير الشعاعي والتحاليل المخبرية للتشخيص الدقيق والمبكر."
        : "Modernste Bildgebung und Laboranalytik für präzise und frühe Diagnosen.",
    },
    {
      id: "rehabilitation",
      icon: HeartPulse,
      image: "/images/areas/rehabilitation.webp",
      href: `/${locale}/areas/rehabilitation`,
      title: isRu ? "Реабилитация" : isEn ? "Rehabilitation" : isTr ? "Rehabilitasyon" : isAr ? "إعادة التأهيل الطبي" : "Rehabilitation",
      desc: isRu
        ? "Восстановление подвижности, сил и независимости в повседневной жизни."
        : isEn
        ? "Helping you regain strength, mobility and independence."
        : isTr
        ? "Hareket kabiliyetini, fiziksel gücü ve bağımsızlığı yeniden kazanma."
        : isAr
        ? "استعادة الحركة والقوة البدنية والاعتماد على الذات في الحياة اليومية."
        : "Wiederherstellung von Mobilität, körperlicher Kraft und Selbstständigkeit.",
    },
    {
      id: "pflege",
      icon: Users,
      image: "/images/areas/pflege.webp",
      href: `/${locale}/areas/pflege`,
      title: isRu ? "Уход и патронаж" : isEn ? "Care for Seniors" : isTr ? "Evde Bakım ve Hemşirelik" : isAr ? "التمريض والرعاية المنزلية" : "Pflege",
      desc: isRu
        ? "Квалифицированный амбулаторный уход и забота в привычной домашней обстановке."
        : isEn
        ? "Compassionate, personalized care and home care for a better quality of life."
        : isTr
        ? "Alışılmış ev ortamında nitelikli ayakta bakım ve HomeCare hizmetleri."
        : isAr
        ? "خدمات تمريضية متخصصة ورعاية منزلية متكاملة في المحيط الأسري المألوف."
        : "Qualifizierte ambulante Pflege und HomeCare im vertrauten häuslichen Umfeld.",
    },
    {
      id: "consulting",
      icon: Briefcase,
      image: "/images/areas/consulting.webp",
      href: `/${locale}/areas/beratung-projektentwicklung`,
      title: isRu ? "Консалтинг и девелопмент" : isEn ? "Consulting & Project Development" : isTr ? "Danışmanlık ve Proje Geliştirme" : isAr ? "الاستشارات وتطوير المشاريع" : "Beratung & Projektentwicklung",
      desc: isRu
        ? "Проектирование, развитие и управление современными медицинскими центрами."
        : isEn
        ? "Strategic development, planning and management of modern healthcare facilities."
        : isTr
        ? "Modern sağlık gayrimenkullerinin ve MVZ'lerin tasarımı, inşası ve yönetimi."
        : isAr
        ? "تخطيط وبناء وإدارة العقارات والمراكز الصحية المتطورة."
        : "Konzeption, Bau und Management moderner Gesundheitsimmobilien und MVZ.",
    },
    {
      id: "international",
      icon: Globe,
      image: "/images/areas/international.webp",
      href: `/${locale}/areas/internationale-kooperationen`,
      title: isRu ? "Международное сотрудничество" : isEn ? "International Cooperation" : isTr ? "Uluslararası İş Birlikleri" : isAr ? "التعاون الدولي" : "Internationale Kooperationen",
      desc: isRu
        ? "Трансграничные партнерства, телемедицина и глобальный обмен опытом."
        : isEn
        ? "Cross-border medical partnerships, telemedicine and global healthcare network."
        : isTr
        ? "Sınır ötesi ortaklıklar, teletıp ve küresel bilgi/deneyim transferi."
        : isAr
        ? "شراكات عابرة للحدود، طب اتصالي، وتبادل معرفي عالمي في المجال الصحي."
        : "Grenzüberschreitende Partnerschaften, Telemedizin und weltweiter Wissenstransfer.",
    },
  ];

  // ── Section 2: Why NabiOta ──
  const whyNabiota = {
    eyebrow: isRu ? "ПОЧЕМУ НАБИОТА" : isEn ? "WHY NABIOTA" : isTr ? "NEDEN NABIOTA" : isAr ? "لماذا نابي أوتا" : "WARUM NABIOTA",
    title: isRu
      ? "Больше чем отделения.\nСильная команда."
      : isEn
      ? "More than Departments.\nA Stronger Team."
      : isTr
      ? "Bölümlerden Daha Fazlası.\nGüçlü Bir Ekip."
      : isAr
      ? "أكثر من مجرد أقسام.\nفريق متكامل وقوي."
      : "Mehr als Fachbereiche.\nEin starkes Team.",
    description: isRu
      ? "Наши направления узкоспециализированы, но мы никогда не работаем изолированно. Благодаря тесному взаимодействию, обмену знаниями и культуре ориентации на пациента мы обеспечиваем медицину, превосходящую ожидания."
      : isEn
      ? "Our divisions may be specialized, but we never work in isolation. Through close collaboration, shared knowledge and a patient-first mindset, we deliver healthcare that goes beyond expectations."
      : isTr
      ? "Uzmanlık alanlarımız son derece odaklıdır ancak hiçbir zaman izole çalışmayız. Yakın iş birliği, paylaşılan bilgi ve hasta odaklı yaklaşım sayesinde standartları aşan bir sağlık hizmeti sunuyoruz."
      : isAr
      ? "تتميز قطاعاتنا بتخصصها الدقيق، لكننا لا نعمل في معزل أبداً. بفضل التعاون الوثيق، وتبادل الخبرات، والتركيز على المريض، نقدم رعاية صحية ترتقي فوق التوقعات."
      : "Unsere Fachbereiche sind hochspezialisiert, arbeiten jedoch niemals isoliert. Durch enge Zusammenarbeit, geteiltes Wissen und einen konsequent patientenzentrierten Ansatz ermöglichen wir eine Versorgung, die Maßstäbe setzt.",
    btn: isRu ? "О наших ценностях" : isEn ? "About Our Values" : isTr ? "Değerlerimiz Hakkında" : isAr ? "حول قيمنا المؤسسية" : "Über unsere Werte",
    pillars: [
      {
        icon: Users,
        title: isRu ? "Коллаборация" : isEn ? "Collaboration" : isTr ? "İş Birliği" : isAr ? "التعاون المشترك" : "Collaboration",
        desc: isRu ? "Разные компетенции. Одна команда." : isEn ? "Different expertise. One team." : isTr ? "Farklı uzmanlıklar. Tek bir ekip." : isAr ? "خبرات متنوعة، وفريق واحد." : "Different expertise. One team.",
      },
      {
        icon: ShieldCheck,
        title: isRu ? "Качество" : isEn ? "Quality" : isTr ? "Kalite" : isAr ? "الجودة" : "Quality",
        desc: isRu ? "Высочайшие стандарты во всем." : isEn ? "Highest standards in everything we do." : isTr ? "Yaptığımız her şeyde en yüksek standartlar." : isAr ? "أعلى المعايير في كل ما نقوم به." : "Highest standards in everything we do.",
      },
      {
        icon: Lightbulb,
        title: isRu ? "Инновации" : isEn ? "Innovation" : isTr ? "İnovasyon" : isAr ? "الابتكار" : "Innovation",
        desc: isRu ? "Современные технологии. Лучшие результаты." : isEn ? "Modern technology. Better outcomes." : isTr ? "Modern teknoloji. Daha iyi sonuçlar." : isAr ? "تقنيات متقدمة لنتائج أفضل." : "Modern technology. Better outcomes.",
      },
      {
        icon: Heart,
        title: isRu ? "Люди" : isEn ? "People" : isTr ? "İnsan Odaklılık" : isAr ? "الإنسان أولاً" : "People",
        desc: isRu ? "Наши пациенты — наш главный приоритет." : isEn ? "Our patients, our priority." : isTr ? "Hastalarımız, bizim önceliğimiz." : isAr ? "مرضانا هم أولويتنا القصوى." : "Our patients, our priority.",
      },
    ],
  };

  // ── Section 3: Patient Stories ──
  const patientStories = {
    eyebrow: isRu ? "ИСТОРИИ ПАЦИЕНТОВ" : isEn ? "PATIENT STORIES" : isTr ? "HASTA HİKAYELERİ" : isAr ? "قصص وتجارب المرضى" : "PATIENT STORIES",
    title: isRu ? "Реальные люди.\nРеальные истории." : isEn ? "Real People.\nReal Impact." : isTr ? "Gerçek İnsanlar.\nGerçek Deneyimler." : isAr ? "تجارب واقعية.\nوأثر ملموس." : "Real People.\nReal Impact.",
    desc: isRu
      ? "Узнайте от наших пациентов об их опыте лечения в NabiOta Health Group и качестве заботы в наших отделениях."
      : isEn
      ? "Hear from our patients about their experience with NabiOta Health Group and the care they received across our divisions."
      : isTr
      ? "Hastalarımızdan NabiOta Health Group bünyesindeki deneyimlerini ve bölümlerimizde aldıkları bakım kalitesini dinleyin."
      : isAr
      ? "استمع إلى تجارب مرضانا في مجموعة نابي أوتا الصحية ومستوى الرعاية التي تلقوها في مختلف أقسامنا."
      : "Hear from our patients about their experience with NabiOta Health Group and the care they received across our divisions.",
    stories: [
      {
        id: 1,
        name: "Anna Müller",
        role: isRu ? "Пациентка, Ортопедия" : isEn ? "Patient, Orthopedics" : isTr ? "Hasta, Ortopedi" : isAr ? "مريضة، جراحة العظام" : "Patient, Orthopedics",
        photo: "/images/testimonials/anna-mueller.webp",
        quote: isRu
          ? "Врачи и медицинский персонал были невероятно профессиональны и заботливы. Я чувствовала искреннюю поддержку на каждом этапе — от первой диагностики до полного выздоровления. Безмерно благодарна за их чуткость и экспертность."
          : isEn
          ? "The doctors and staff were incredibly professional and caring. I felt supported at every step, from diagnosis to recovery. I'm truly grateful for their expertise and kindness."
          : isTr
          ? "Doktorlar ve personel son derece profesyonel ve ilgiliydi. Tanıdan iyileşmeye kadar her adımda desteklendiğimi hissettim. Uzmanlıkları ve nezaketleri için minnettarım."
          : isAr
          ? "كان الأطباء وفريق التمريض على أعلى مستوى من الاحترافية والاهتمام. شعرت بالدعم الكامل في كل خطوة، من التشخيص وحتى التعافي. أنا ممتنة للغاية لخبرتهم وإنسانيتهم."
          : "The doctors and staff were incredibly professional and caring. I felt supported at every step, from diagnosis to recovery. I'm truly grateful for their expertise and kindness.",
      },
      {
        id: 2,
        name: "Thomas Becker",
        role: isRu ? "Пациент, Кардиология" : isEn ? "Patient, Cardiology" : isTr ? "Hasta, Kardiyoloji" : isAr ? "مريض، طب القلب" : "Patient, Cardiology",
        photo: "/images/testimonials/thomas-becker.webp",
        quote: isRu
          ? "Уровень медицинской помощи превзошел все ожидания. Особенно ценю четкий, структурированный и по-настоящему человечный подход команды к лечению."
          : isEn
          ? "The level of care was outstanding. I especially appreciate the structured and personalized approach of the team."
          : isTr
          ? "Bakım seviyesi olağanüstüydü. Özellikle ekibin yapılandırılmış ve kişiye özel yaklaşımını takdir ediyorum."
          : isAr
          ? "كان مستوى الرعاية الطبية استثنائياً. وأثمن بشكل خاص النهج المنظم والمصمم بدقة بما يلائم حالتي من قبل الفريق الطبي."
          : "The level of care was outstanding. I especially appreciate the structured and personalized approach of the team.",
      },
      {
        id: 3,
        name: "Elena Fischer",
        role: isRu ? "Пациентка, Реабилитация" : isEn ? "Patient, Rehabilitation" : isTr ? "Hasta, Rehabilitasyon" : isAr ? "مريضة، إعادة التأهيل" : "Patient, Rehabilitation",
        photo: "/images/testimonials/elena-fischer.webp",
        quote: isRu
          ? "После операции восстановительный процесс прошел быстро и без осложнений. Индивидуальный план тренировок и поддержка физиотерапевтов вернули мне радость активной жизни."
          : isEn
          ? "After surgery, my rehabilitation was rapid and seamless. The dedicated therapy plan and personal attention gave me my active lifestyle back completely."
          : isTr
          ? "Ameliyat sonrasında rehabilitasyon sürecim hızlı ve sorunsuz geçti. Özel terapi planı ve yakın ilgi bana aktif yaşam tarzımı tamamen geri kazandırdı."
          : isAr
          ? "بعد الجراحة، كانت مرحلة إعادة التأهيل سريعة وسلسة للغاية. الخطة العلاجية المخصصة والاهتمام الشخصي أعادا إلي نمط حياتي النشط تماماً."
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

  // ── Section 4: Pre-footer CTA with Mountains Background (Photo 2) ──
  const ctaData = {
    eyebrow: isRu ? "СВЯЖИТЕСЬ С НАМИ" : isEn ? "GET IN TOUCH" : isTr ? "İLETİŞİME GEÇİN" : isAr ? "تواصل معنا" : "GET IN TOUCH",
    title: isRu
      ? "Ваше здоровье —\nнаша миссия."
      : isEn
      ? "Your Health is\nOur Mission."
      : isTr
      ? "Sağlığınız,\nBizim Misyonumuz."
      : isAr
      ? "صحتكم هي\nرسالتنا الأسمى."
      : "Ihre Gesundheit ist\nunsere Mission.",
    desc: isRu
      ? "У вас есть вопросы о наших направлениях или вы хотите записаться на прием? Мы всегда готовы помочь вам."
      : isEn
      ? "Do you have questions about our specialties or would you like to schedule an appointment? We are here for you."
      : isTr
      ? "Uzmanlık alanlarımız hakkında sorularınız mı var veya randevu almak mı istiyorsunuz? Size yardımcı olmaktan memnuniyet duyarız."
      : isAr
      ? "هل لديك استفسارات حول أقسامنا الطبية أو ترغب في حجز موعد؟ نحن دائماً في خدمتكم."
      : "Haben Sie Fragen zu unseren Fachbereichen oder möchten Sie einen Termin vereinbaren? Wir sind gerne für Sie da.",
    btn: isRu ? "Связаться с нами" : isEn ? "Contact Us" : isTr ? "İletişime Geçin" : isAr ? "تواصل معنا" : "Kontakt aufnehmen",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />

      {/* ── Page Hero with Badges ── */}
      <PageHero
          locale={locale}
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
        imageSrc="/images/heroes/hero-areas.webp"
        imageAlt="NabiOta Health Group Germany Unternehmensbereiche"
      />

      <main className="flex-1 bg-[#FAF8F5]">
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: SPECIALIZED CARE FOR EVERY NEED + 6 CARDS GRID
            (Top Intro in Full-Width Facilities & Cooperations Style)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden bg-[#FAF8F5]">
          {/* ── Top Part: Facilities & Cooperations Panoramic Full-Width Banner ── */}
          <div className="w-full relative overflow-hidden py-12 sm:py-16 lg:py-20 border-b border-[#EDE8DE]/70">
            {/* Full-bleed background image across 100% of the screen */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/areas/facilities-cooperation-bg.webp"
                alt="Our Specialties"
                fill
                className="object-cover object-bottom sm:object-center"
                priority
                unoptimized
              />
            </div>

            {/* Inner Content Area: aligns with page container, completely open without borders or frames */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Eyebrow, Serif Title, Description, Pill Button */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                    <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                      {introData.eyebrow}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#142318] font-normal leading-[1.16] whitespace-pre-line">
                    {introData.title}
                  </h2>

                  <p className="text-xs sm:text-[13.5px] text-[#4E5650] leading-relaxed font-sans max-w-md">
                    {introData.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href="#divisions-grid"
                      className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#8C9886] bg-white/75 hover:bg-[#142318] hover:text-white hover:border-[#142318] text-[#2C3B2E] font-medium text-xs sm:text-[13px] tracking-wide shadow-xs transition-all duration-200"
                    >
                      <span>{introData.btn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Column: 4 Circular Medal Features */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {introData.features.map((item, idx) => {
                      const FeatureIcon = item.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/75 backdrop-blur-xs border border-[#EDE8DE] hover:border-[#D5B878]/60 hover:bg-white/95 transition-all shadow-xs"
                        >
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D5B878]/60 bg-white/95 flex items-center justify-center text-[#9E7D3B] shrink-0 shadow-2xs">
                            <FeatureIcon className="w-5 h-5 stroke-[1.6]" />
                          </div>
                          <span className="text-[12px] sm:text-[13px] font-medium text-[#2C3B2E] leading-snug">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 6 Cards Grid (with Larger Light-Colored Icons) ── */}
          <Container size="wide" className="py-12 sm:py-16">
            {/* Anchor for smooth scroll */}
            <div id="divisions-grid" className="scroll-mt-24 mb-6 sm:mb-8" />

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
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* Circular Light Emblem Icon Badge (larger & light-colored) */}
                        <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FAF3E8] border border-[#E8DFC8] flex items-center justify-center text-[#9E7D3B] shadow-2xs shrink-0 group-hover:bg-[#F0E5CD] group-hover:border-[#D5B878] group-hover:scale-105 transition-all">
                          <IconComponent className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.6]" />
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
            SECTION 2: WHY NABIOTA (MORE THAN DEPARTMENTS. A STRONGER TEAM.)
            (Full-Width Facilities & Cooperations Panoramic Style)
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full relative overflow-hidden py-14 sm:py-18 lg:py-22 my-4 sm:my-6 border-t border-b border-[#EDE8DE]/70">
          {/* Full-bleed background image across 100% of the screen */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/areas/facilities-cooperation-bg.webp"
              alt="Facilities & Cooperations"
              fill
              className="object-cover object-bottom sm:object-center"
              priority
              unoptimized
            />
          </div>

          {/* Inner Content Area: aligns with page container, completely open without borders or frames */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-14 w-full">
              {/* Left Column: Eyebrow, Title, Description, Button */}
              <div className="w-full lg:w-[48%] xl:w-[44%]">
                <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                  <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                  <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                    {whyNabiota.eyebrow}
                  </span>
                </div>

                <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#142318] leading-[1.18] mb-3.5 sm:mb-4 whitespace-pre-line">
                  {whyNabiota.title}
                </h2>

                <p className="text-[13px] sm:text-[13.5px] text-[#4E5650] leading-relaxed max-w-xl mb-6 font-sans">
                  {whyNabiota.description}
                </p>

                <div>
                  <Link
                    href={`/${locale}/values`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#8C9886] bg-white/75 hover:bg-[#142318] hover:text-white hover:border-[#142318] text-[#2C3B2E] text-[12.5px] font-medium tracking-wide transition-all shadow-xs"
                  >
                    <span>{whyNabiota.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 4 Pillars with gold emblem icons (Facilities & Cooperations style) */}
              <div className="w-full lg:w-[52%] xl:w-[56%] flex justify-center lg:justify-end">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-xl lg:max-w-none pt-2 lg:pt-0">
                  {whyNabiota.pillars.map((pillar, pIdx) => {
                    const PillarIcon = pillar.icon;
                    return (
                      <div
                        key={pIdx}
                        className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/75 backdrop-blur-xs border border-[#EAE4D7] hover:border-[#D5B878]/70 hover:bg-white transition-all shadow-2xs"
                      >
                        <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full border border-[#D5B878]/60 bg-[#FAF3E8] flex items-center justify-center text-[#9E7D3B] shrink-0 shadow-2xs hover:bg-[#F0E5CD] transition-colors">
                          <PillarIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.6]" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-serif text-[15px] sm:text-[16px] font-medium text-[#142318] leading-tight mb-1">
                            {pillar.title}
                          </h3>
                          <p className="text-[12px] sm:text-[12.5px] text-[#4E5650] leading-snug font-sans">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
            SECTION 4: PRE-FOOTER CTA BANNER WITH MOUNTAINS (PHOTO 2)
            - Full-width panoramic container
            - Mountains landscape background (/images/values/mountains-bg.webp)
            - Gold top & bottom accent borders (border-y border-[#D5B878]/60)
            - Left: GET IN TOUCH + Ihre Gesundheit ist unsere Mission.
            - Center: Haben Sie Fragen zu unseren Fachbereichen...
            - Right: Gold pill button Kontakt aufnehmen →
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
            {/* Dark green overlay matching Photo 2 */}
            <div className="absolute inset-0 bg-[#06140B]/55 backdrop-blur-[0.5px]" />
          </div>

          <Container size="wide" className="relative z-10 py-10 sm:py-12 lg:py-14">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
              {/* Left: Eyebrow + Title */}
              <div className="space-y-1.5 lg:max-w-xs shrink-0">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {ctaData.eyebrow}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-[1.2] whitespace-pre-line">
                  {ctaData.title}
                </h2>
              </div>

              {/* Middle: Text */}
              <div className="max-w-md lg:max-w-lg">
                <p className="text-xs sm:text-[13.5px] text-white/85 leading-relaxed font-sans">
                  {ctaData.desc}
                </p>
              </div>

              {/* Right: Gold Pill Button */}
              <div className="shrink-0">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.03]"
                >
                  <span>{ctaData.btn}</span>
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
