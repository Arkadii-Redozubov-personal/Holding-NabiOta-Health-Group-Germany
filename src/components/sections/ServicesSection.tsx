"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Check,
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  Network,
  Globe,
} from "lucide-react";
import { getDictionary, getLocalePath, SupportedLocale } from "@/lib/i18n";

interface ServicesSectionProps {
  currentLocale?: SupportedLocale;
}

export function ServicesSection({ currentLocale = "de" }: ServicesSectionProps) {
  const dict = getDictionary(currentLocale);
  const lang = (currentLocale as "de" | "en" | "ru" | "tr" | "ar" | "uz") || "de";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const areas = [
    {
      slug: "medizinische-fachbereiche",
      icon: Stethoscope,
      image: "/images/areas/medical-departments.webp",
      title: {
        de: "Medizinische Fachbereiche",
        ru: "Медицинские направления",
        en: "Medical Departments",
        tr: "Tıbbi Uzmanlık Alanları",
        ar: "الأقسام والتخصصات الطبية",
        uz: "Tibbiyot yo'nalishlari",
      },
      subtitle: {
        de: "Ambulante Spitzenmedizin (§ 95 SGB V), zwei MVZ-Zentren & Klinikaufbau.",
        ru: "Амбулаторная помощь (§ 95 SGB V), два центра MVZ и подготовка клиники.",
        en: "Outpatient medicine (§ 95 SGB V), two dedicated MVZ centers & clinic development.",
        tr: "Ayakta uzman hekim tedavisi (§ 95 SGB V), 2 MVZ merkezi ve klinik hazırlığı.",
        ar: "طب العيادات الخارجية التخصصي (§ 95 SGB V)، مركزا MVZ وبناء المستشفى الطبي.",
        uz: "Ambulator yordam (§ 95 SGB V), ikkita MVZ markazi va klinika tayyorlash.",
      },
      highlights: {
        de: [
          "Interdisziplinäre Versorgung",
          "Moderne medizinische Standards",
          "Nahtlose Patientenbetreuung",
        ],
        ru: [
          "Междисциплинарный подход",
          "Современные медицинские стандарты",
          "Непрерывное ведение пациентов",
        ],
        en: [
          "Interdisciplinary care",
          "Modern medical standards",
          "Seamless patient management",
        ],
        tr: [
          "Disiplinlerarası uzmanlık",
          "Modern tıbbi standartlar",
          "Kesintisiz hasta takibi",
        ],
        ar: [
          "رعاية متعددة التخصصات",
          "معايير طبية متقدمة",
          "متابعة متكاملة للمرضى",
        ],
        uz: [
          "Fanlararo kompleks yondashuv",
          "Zamonaviy tibbiy standartlar",
          "Uzluksiz bemor parvarishi",
        ],
      },
    },
    {
      slug: "diagnostik",
      icon: Microscope,
      image: "/images/areas/diagnostics.webp",
      title: {
        de: "Diagnostik",
        ru: "Диагностика",
        en: "Diagnostics",
        tr: "Tanı ve Radyoloji",
        ar: "التشخيص الطبي والتصوير",
        uz: "Diagnostika",
      },
      subtitle: {
        de: "Niedrigdosis-CT, 3T MRT, digitales Röntgen & Neurophysiologie.",
        ru: "3T МРТ, низкодозовая КТ, цифровой рентген и нейрофизиология.",
        en: "Low-dose CT, 3T MRI, digital radiography & neurophysiology.",
        tr: "3T MR, düşük dozlu BT, dijital röntgen ve klinik nörofizyoloji.",
        ar: "رنين مغناطيسي 3T، أشعة مقطعية بجرعات منخفضة، أشعة رقمية وتخطيط أعصاب.",
        uz: "3T MRT, past dozali KT, raqamli rentgen va neyrofiziologiya.",
      },
      highlights: {
        de: [
          "3T MRT & Niedrigdosis-CT",
          "Präzise radiologische Befundung",
          "Schonende ambulante Diagnostik",
        ],
        ru: [
          "3T МРТ и низкодозовая КТ",
          "Высокоточная радиология",
          "Щадящая амбулаторная диагностика",
        ],
        en: [
          "3T MRI & low-dose CT",
          "Precise radiological reporting",
          "Gentle outpatient diagnostics",
        ],
        tr: [
          "3T MR ve düşük doz BT",
          "Hassas radyolojik değerlendirme",
          "Konforlu ayakta tanı",
        ],
        ar: [
          "رنين مغناطيسي 3T وأشعة منخفضة الجرعة",
          "تقارير إشعاعية فائقة الدقة",
          "تشخيص عيادي مريح",
        ],
        uz: [
          "3T MRT va past dozali KT",
          "Yuqori aniqlikdagi radiologiya",
          "Xavfsiz ambulator diagnostika",
        ],
      },
    },
    {
      slug: "rehabilitation",
      icon: HeartPulse,
      image: "/images/areas/rehabilitation.webp",
      title: {
        de: "Rehabilitation",
        ru: "Реабилитация",
        en: "Rehabilitation",
        tr: "Rehabilitasyon",
        ar: "التأهيل الطبي المتكامل",
        uz: "Reabilitatsiya",
      },
      subtitle: {
        de: "Ganzheitliche Reha, Physio-, Ergo-, Logopädie & Bewegungsbad 32°C.",
        ru: "Амбулаторная реабилитация, физио-, эрго-, логопедия и бассейн 32°C.",
        en: "Outpatient rehab, physiotherapy, speech therapy & 32°C hydrotherapy pool.",
        tr: "Kapsamlı ayakta rehabilitasyon, fizyo-, ergo-, konuşma terapisi ve 32°C hidroterapi.",
        ar: "تأهيل طبي شامل للعيادات الخارجية، علاج طبيعي ووظيفي ونطق ومسبح علاجي 32°م.",
        uz: "Ambulator reabilitatsiya, fizio-, ergo-, logopediya va 32°C davolash havzasi.",
      },
      highlights: {
        de: [
          "Ganzheitliche Physio- & Ergotherapie",
          "Eigenes Bewegungsbad (32°C)",
          "Individuelle Therapiepläne",
        ],
        ru: [
          "Комплексная физио- и эрготерапия",
          "Лечебный бассейн (32°C)",
          "Индивидуальные планы реабилитации",
        ],
        en: [
          "Holistic physio & occupational therapy",
          "Hydrotherapy pool (32°C)",
          "Individual rehabilitation plans",
        ],
        tr: [
          "Kapsamlı fizyo ve ergoterapi",
          "32°C hidroterapi havuzu",
          "Kişiye özel terapi planları",
        ],
        ar: [
          "علاج طبيعي ووظيفي متكامل",
          "مسبح علاجي مائي (32°م)",
          "برامج تأهيل مخصصة",
        ],
        uz: [
          "Kompleks fizio- va ergoterapiya",
          "32°C davolash havzasi",
          "Shaxsiy reabilitatsiya rejalari",
        ],
      },
    },
    {
      slug: "pflege",
      icon: Users,
      image: "/images/areas/pflege.webp",
      title: {
        de: "Pflege & HomeCare",
        ru: "Патронаж и уход",
        en: "Nursing & HomeCare",
        tr: "Bakım & HomeCare",
        ar: "التمريض والرعاية المنزلية",
        uz: "Parvarish va HomeCare",
      },
      subtitle: {
        de: "Ambulante Pflege nach SGB V/XI & zertifizierte ICW-Wundversorgung.",
        ru: "Квалифицированный уход по SGB V/XI и сертифицированное лечение ран ICW.",
        en: "Qualified home care under SGB V/XI and certified ICW wound management.",
        tr: "SGB V/XI kapsamında evde bakım & ICW sertifikalı yara tedavisi yönetimi.",
        ar: "رعاية تمريضية متخصصة (SGB V/XI) وإدارة علاج الجروح المعتمدة (ICW).",
        uz: "SGB V/XI bo'yicha malakali parvarish va sertifikatlangan ICW jarohat davolash.",
      },
      highlights: {
        de: [
          "Zertifizierte ICW-Wundversorgung",
          "Qualifizierte Pflege SGB V / XI",
          "24/7 ambulante Betreuung",
        ],
        ru: [
          "Сертифицированное лечение ран ICW",
          "Квалифицированный уход по SGB V / XI",
          "Круглосуточная поддержка",
        ],
        en: [
          "Certified ICW wound management",
          "Qualified care under SGB V / XI",
          "24/7 outpatient assistance",
        ],
        tr: [
          "ICW sertifikalı yara yönetimi",
          "SGB V / XI kapsamında profesyonel bakım",
          "7/24 ayakta hasta desteği",
        ],
        ar: [
          "علاج الجروح المعتمد (ICW)",
          "تمريض متخصص وفق SGB V / XI",
          "رعاية مستمرة على مدار الساعة",
        ],
        uz: [
          "Sertifikatlangan ICW jarohat parvarishi",
          "SGB V / XI bo'yicha malakali parvarish",
          "24/7 uzluksiz qo'llab-quvvatlash",
        ],
      },
    },
    {
      slug: "beratung-projektentwicklung",
      icon: Network,
      image: "/images/areas/consulting.webp",
      title: {
        de: "Beratung & Projektentwicklung",
        ru: "Консалтинг и девелопмент",
        en: "Consulting & Real Estate",
        tr: "Danışmanlık & Gayrimenkul Geliştirme",
        ar: "الاستشارات وتطوير المرافق الصحية",
        uz: "Konsalting va developpent",
      },
      subtitle: {
        de: "Gesundheitsimmobilien, OP-Zentren nach DIN 1946-4 & MVZ-Strukturen.",
        ru: "Медицинская недвижимость, чистые операционные DIN 1946-4 и структуры MVZ.",
        en: "Healthcare facilities, DIN 1946-4 cleanroom suites & MVZ structures.",
        tr: "Sağlık yapıları, DIN 1946-4 standartlarında ameliyathaneler ve MVZ yapıları.",
        ar: "عقارات الرعاية الصحية، مجمعات جراحية وفق معايير DIN 1946-4 وتطوير مراكز MVZ.",
        uz: "Tibbiy ko'chmas mulk, DIN 1946-4 operatsiya xonalari va MVZ tuzilmalari.",
      },
      highlights: {
        de: [
          "Moderne OP-Zentren (DIN 1946-4)",
          "Strukturierte MVZ-Konzepte",
          "Rechtssichere Nachfolgemodelle",
        ],
        ru: [
          "Чистые операционные DIN 1946-4",
          "Структурированные решения MVZ",
          "Правовая безопасность преемственности",
        ],
        en: [
          "Modern DIN 1946-4 surgical suites",
          "Structured MVZ development",
          "Legally compliant succession",
        ],
        tr: [
          "DIN 1946-4 ameliyathane standartları",
          "Yapılandırılmış MVZ geliştirme",
          "Hukuki güvenceli devir modelleri",
        ],
        ar: [
          "أجنحة جراحية وفق معايير DIN 1946-4",
          "تطوير هياكل المراكز الطبية MVZ",
          "حلول تعاقب موثوقة قانونياً",
        ],
        uz: [
          "DIN 1946-4 operatsiya xonalari",
          "Tizimli MVZ rivojlantirish",
          "Qonuniy himoyalangan vorislik",
        ],
      },
    },
    {
      slug: "internationale-kooperationen",
      icon: Globe,
      image: "/images/areas/international.webp",
      title: {
        de: "Internationale Kooperationen",
        ru: "Международное сотрудничество",
        en: "International Cooperations",
        tr: "Uluslararası İş Birlikleri",
        ar: "التعاون والشراكات الدولية",
        uz: "Xalqaro hamkorlik",
      },
      subtitle: {
        de: "Fachkräftegewinnung, Approbationsbegleitung & Klinikpartnerschaften.",
        ru: "Рекрутинг медиков, нострификация и Approbation, партнерство с клиниками.",
        en: "Healthcare recruitment, medical degree licensing (Approbation) & clinic partnerships.",
        tr: "Medikal istihdam, hekim denklik desteği (Approbation) ve klinik ortaklıkları.",
        ar: "استقطاب الكوادر الطبية، معادلة الشهادات الألمانية (Approbation) وشراكات المشافي.",
        uz: "Tibbiy kadrlar jalb qilish, Approbation va diplom tan olinishi, klinik hamkorlik.",
      },
      highlights: {
        de: [
          "Approbations- & Anerkennungsbegleitung",
          "Gezielte Fachkräftegewinnung",
          "Akademische Klinikpartnerschaften",
        ],
        ru: [
          "Сопровождение Approbation и нострификации",
          "Целевой подбор врачей",
          "Партнерство с клиниками",
        ],
        en: [
          "Medical license (Approbation) support",
          "Targeted professional recruitment",
          "Academic hospital partnerships",
        ],
        tr: [
          "Approbation ve denklik süreç desteği",
          "Hedefe yönelik hekim istihdamı",
          "Akademik klinik ortaklıkları",
        ],
        ar: [
          "مرافقة ترخيص مزاولة المهنة (Approbation)",
          "استقطاب الكوادر الطبية المتخصصة",
          "شراكات المشافي الأكاديمية",
        ],
        uz: [
          "Approbation va diplom tan olish ko'magi",
          "Shifokorlar maqsadli rekrutingi",
          "Akademik klinik hamkorlik",
        ],
      },
    },
  ];

  const total = areas.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const goToSlide = (targetIndex: number, dir?: "next" | "prev") => {
    if (animating || targetIndex === currentIndex) return;
    const chosenDir = dir || (targetIndex > currentIndex ? "next" : "prev");
    setDirection(chosenDir);
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setTimeout(() => {
        setAnimating(false);
      }, 50);
    }, 200);
  };

  const handlePrev = () => {
    goToSlide(prevIndex, "prev");
  };

  const handleNext = () => {
    goToSlide(nextIndex, "next");
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    setTouchStartX(null);
  };

  const currentArea = areas[currentIndex];
  const prevArea = areas[prevIndex];
  const nextArea = areas[nextIndex];

  const CurrentIcon = currentArea.icon;
  const PrevIcon = prevArea.icon;
  const NextIcon = nextArea.icon;

  const sectionSubtitles = {
    de: "Moderne Medizin, menschliche Betreuung und innovative Konzepte - in allen Bereichen unserer Versorgung.",
    ru: "Современная медицина, забота о пациентах и инновационные концепции во всех сферах нашей помощи.",
    en: "Modern medicine, empathetic care, and innovative concepts across all areas of our provision.",
    tr: "Modern tıp, insani ilgi ve yenilikçi yaklaşımlar - tüm sağlık alanlarımızda.",
    ar: "طب حديث، رعاية إنسانية ومفاهيم مبتكرة في جميع مجالات الرعاية الصحية لدينا.",
    uz: "Zamonaviy tibbiyot, insoniy g'amxo'rlik va innovatsion yondashuvlar barcha xizmatlarimizda.",
  };

  const sectionTitles = {
    de: "Ganzheitliche Versorgung über alle Lebensphasen",
    ru: "Комплексная забота о здоровье на всех этапах жизни",
    en: "Comprehensive care across all life stages",
    tr: "Hayatın her aşamasında bütüncül sağlık hizmeti",
    ar: "رعاية صحية شاملة ومتكاملة عبر جميع مراحل الحياة",
    uz: "Hayotning barcha bosqichlarida kompleks salomatlik g'amxo'rligi",
  };

  const ctaLabels = {
    de: "Mehr erfahren",
    ru: "Узнать больше",
    en: "Learn more",
    tr: "Daha fazla bilgi",
    ar: "معرفة المزيد",
    uz: "Batafsil ma'lumot",
  };

  return (
    <section className="relative bg-[#FAF8F5] pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-[#EAE5DA] overflow-hidden select-none">
      {/* ── Soft Ambient Botanical Foliage Watermarks ── */}
      <div className="absolute top-0 left-0 w-56 h-56 pointer-events-none opacity-40 select-none hidden lg:block">
        <Image
          src="/images/areas/botanical-branch-clean.webp"
          alt=""
          fill
          className="object-contain object-top-left -scale-x-100"
          unoptimized
        />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-40 select-none hidden lg:block">
        <Image
          src="/images/areas/botanical-branch-clean.webp"
          alt=""
          fill
          className="object-contain object-bottom-right"
          unoptimized
        />
      </div>

      <div className="relative z-10 w-full max-w-[1540px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── Section Header ───────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <h2 className="font-serif text-[26px] sm:text-[32px] lg:text-[36px] font-normal text-[#112318] tracking-tight leading-[1.15]">
              {sectionTitles[lang]}
            </h2>
            <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#556358] mt-1.5 max-w-2xl font-light">
              {sectionSubtitles[lang]}
            </p>
          </div>

          <Link
            href={getLocalePath(currentLocale, "areas")}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#9C8145] hover:text-[#7D6532] transition-colors self-start md:self-end whitespace-nowrap mb-1"
          >
            <span>{dict.areas.cta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── Carousel Stage with Central Active Card + Left/Right Peek Cards ── */}
        <div
          className="relative w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* ── Desktop/Tablet Layout: Centered Active Card with Left & Right Peeks ── */}
          <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[410px] lg:min-h-[420px]">
            {/* ── LEFT PEEK CARD (Previous Slide - Wider & Visible) ── */}
            <div
              onClick={handlePrev}
              className="hidden lg:flex flex-col absolute left-[-40px] xl:left-[10px] 2xl:left-[40px] top-1/2 -translate-y-1/2 w-[260px] xl:w-[290px] 2xl:w-[320px] h-[340px] sm:h-[355px] rounded-[22px] bg-white border border-[#EBE5D8] shadow-xs overflow-hidden opacity-75 hover:opacity-100 transition-all duration-400 cursor-pointer z-10 hover:shadow-md"
            >
              <div className="relative w-full h-[175px] overflow-hidden bg-[#07170E]/5">
                <Image
                  src={prevArea.image}
                  alt={prevArea.title[lang]}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <div className="w-6.5 h-6.5 text-[#B89650] mb-1.5 flex items-center">
                    <PrevIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                  </div>
                  <h4 className="font-serif font-bold text-[#142318] text-[14.5px] leading-snug line-clamp-2">
                    {prevArea.title[lang]}
                  </h4>
                  <p className="text-[11px] text-[#636861] mt-1 line-clamp-2 font-sans leading-relaxed">
                    {prevArea.subtitle[lang]}
                  </p>
                </div>
                <div className="flex justify-end pt-1">
                  <div className="w-7 h-7 rounded-full border border-[#EDE8DE] text-[#B89650] flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── LEFT FLOATING CIRCLE ARROW BUTTON ── */}
            <button
              onClick={handlePrev}
              disabled={animating}
              aria-label="Previous slide"
              className="absolute left-2 sm:left-4 lg:left-[170px] xl:left-[210px] 2xl:left-[250px] top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-[#EDE8DE] text-[#142318] flex items-center justify-center hover:bg-[#FAF8F4] hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2] text-[#142318]" />
            </button>

            {/* ── CENTER ACTIVE HERO CARD (Slightly Smaller Width with Smooth Animation, No Number Badge) ── */}
            <div className="relative z-20 w-full max-w-[780px] lg:max-w-[820px] xl:max-w-[850px] rounded-[24px] sm:rounded-[28px] bg-white border border-[#EDE8DE] shadow-[0_6px_28px_rgba(20,35,24,0.06)] overflow-hidden transition-all duration-400">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[360px] sm:min-h-[380px] lg:min-h-[395px]">
                {/* Left Column: Photo with Smooth Animation (Badge removed as requested) */}
                <div className="relative lg:col-span-6 h-[220px] sm:h-[260px] lg:h-full min-h-[220px] lg:min-h-[385px] overflow-hidden bg-[#07170E]/5">
                  <div
                    className="relative w-full h-full transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                    style={{
                      transform: animating
                        ? direction === "next"
                          ? "scale(1.06) translateX(-14px)"
                          : "scale(1.06) translateX(14px)"
                        : "scale(1) translateX(0)",
                      opacity: animating ? 0.3 : 1,
                    }}
                  >
                    <Image
                      key={currentArea.image}
                      src={currentArea.image}
                      alt={currentArea.title[lang]}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Right Column: Editorial Details with Smooth Directional Fade */}
                <div
                  className="relative lg:col-span-6 p-5 sm:p-6 lg:p-7 flex flex-col justify-between bg-white transition-all duration-350 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                  style={{
                    transform: animating
                      ? direction === "next"
                        ? "translateX(18px)"
                        : "translateX(-18px)"
                      : "translateX(0)",
                    opacity: animating ? 0 : 1,
                  }}
                >
                  {/* Subtle botanical branch watermark in corner */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 pointer-events-none opacity-25 select-none hidden sm:block">
                    <Image
                      src="/images/areas/botanical-branch-clean.webp"
                      alt=""
                      fill
                      className="object-contain object-bottom-right"
                      unoptimized
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Gold Icon */}
                    <div className="text-[#B89650] mb-2">
                      <CurrentIcon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.6]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[20px] sm:text-[23px] lg:text-[25px] font-normal text-[#112318] leading-[1.18] tracking-[-0.01em] mb-2">
                      {currentArea.title[lang]}
                    </h3>

                    {/* Subtitle */}
                    <p className="font-sans text-[12px] sm:text-[12.5px] text-[#556358] leading-relaxed mb-4 font-light">
                      {currentArea.subtitle[lang]}
                    </p>

                    {/* 3 Bespoke Checkmark Highlights */}
                    <ul className="space-y-1.5 sm:space-y-2 mb-5 font-sans text-[11.5px] sm:text-[12px] text-[#2C3B30]">
                      {currentArea.highlights[lang].map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border border-[#C5A56A] text-[#B89650] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Golden Pill CTA Button */}
                  <div className="relative z-10 pt-1">
                    <Link
                      href={getLocalePath(currentLocale, `areas/${currentArea.slug}`)}
                      className="inline-flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-full bg-[#D4B574] hover:bg-[#C8A45C] text-[#142318] font-sans font-semibold text-[12.5px] sm:text-[13px] transition-all shadow-xs hover:shadow-sm"
                    >
                      <span>{ctaLabels[lang]}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT FLOATING CIRCLE ARROW BUTTON ── */}
            <button
              onClick={handleNext}
              disabled={animating}
              aria-label="Next slide"
              className="absolute right-2 sm:right-4 lg:right-[170px] xl:right-[210px] 2xl:right-[250px] top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-[#EDE8DE] text-[#142318] flex items-center justify-center hover:bg-[#FAF8F4] hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5 stroke-[2] text-[#142318]" />
            </button>

            {/* ── RIGHT PEEK CARD (Next Slide - Wider & Visible) ── */}
            <div
              onClick={handleNext}
              className="hidden lg:flex flex-col absolute right-[-40px] xl:right-[10px] 2xl:right-[40px] top-1/2 -translate-y-1/2 w-[260px] xl:w-[290px] 2xl:w-[320px] h-[340px] sm:h-[355px] rounded-[22px] bg-white border border-[#EBE5D8] shadow-xs overflow-hidden opacity-75 hover:opacity-100 transition-all duration-400 cursor-pointer z-10 hover:shadow-md"
            >
              <div className="relative w-full h-[175px] overflow-hidden bg-[#07170E]/5">
                <Image
                  src={nextArea.image}
                  alt={nextArea.title[lang]}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <div className="w-6.5 h-6.5 text-[#B89650] mb-1.5 flex items-center">
                    <NextIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                  </div>
                  <h4 className="font-serif font-bold text-[#142318] text-[14.5px] leading-snug line-clamp-2">
                    {nextArea.title[lang]}
                  </h4>
                  <p className="text-[11px] text-[#636861] mt-1 line-clamp-2 font-sans leading-relaxed">
                    {nextArea.subtitle[lang]}
                  </p>
                </div>
                <div className="flex justify-end pt-1">
                  <div className="w-7 h-7 rounded-full border border-[#EDE8DE] text-[#B89650] flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Controls Matching Reference Image Exactly: [ ← ] ▬ - - - - - [ → ] ── */}
          <div className="flex items-center justify-center gap-4 sm:gap-5 mt-7 sm:mt-9 select-none">
            {/* Left Circle Arrow Button */}
            <button
              onClick={handlePrev}
              disabled={animating}
              aria-label="Previous slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#E7DFD2] bg-white text-[#B89650] hover:border-[#B89650] hover:text-[#7A6129] hover:bg-[#FAF8F5] active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-xs disabled:opacity-50"
            >
              <ArrowLeft className="w-4.5 h-4.5 stroke-[1.8]" />
            </button>

            {/* Pill Indicators: Active is elongated gold pill ▬, inactive are smaller rounded pills - */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {areas.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx, idx > currentIndex ? "next" : "prev")}
                  disabled={animating}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-7 sm:w-8 bg-[#B89650] shadow-xs"
                      : "w-3 sm:w-3.5 bg-[#E2DBD0] hover:bg-[#B89650]/60"
                  }`}
                />
              ))}
            </div>

            {/* Right Circle Arrow Button */}
            <button
              onClick={handleNext}
              disabled={animating}
              aria-label="Next slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#E7DFD2] bg-white text-[#B89650] hover:border-[#B89650] hover:text-[#7A6129] hover:bg-[#FAF8F5] active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-xs disabled:opacity-50"
            >
              <ArrowRight className="w-4.5 h-4.5 stroke-[1.8]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
