"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Lightbulb,
  Users,
  Leaf,
  Building2,
  HardHat,
  Network,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  Flag,
  Award,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Heart,
  Briefcase,
  Stethoscope,
  Activity,
  HeartPulse,
  Home,
  Check,
  X,
  FileText,
  Info,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";
import { RealEstateCompanySection } from "@/components/sections/RealEstateCompanySection";

interface Props {
  locale?: SupportedLocale;
}

export interface RealEstateDomain {
  id: string;
  badge: string;
  image: string;
  iconType: "building" | "stethoscope" | "activity" | "heartpulse" | "heart" | "home";
  title: string;
  shortDesc: string;
  modal: {
    title: string;
    subtitle: string;
    description: string;
    specificationsTitle: string;
    specifications: string[];
    scopeTitle: string;
    scopeItems: string[];
    technicalTitle: string;
    technicalText: string;
    legalTitle: string;
    legalText: string;
    ctaButtonText: string;
  };
}

export function BeratungPageComponent({ locale = "de" }: Props) {
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const [selectedDomain, setSelectedDomain] = useState<RealEstateDomain | null>(null);

  // Lock body scroll and handle Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDomain(null);
      }
    };

    if (selectedDomain) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDomain]);

  // Standard Site PageHero Data
  const heroData = {
    title: isUz
      ? "Ko'chmas mulk va loyihalarni rivojlantirish"
      : isRu
      ? "Недвижимость & Девелопмент"
      : isEn
      ? "Real Estate & Project Development"
      : isTr
      ? "Danışmanlık ve Gayrimenkul Geliştirme"
      : isAr
      ? "الاستشارات والتطوير العقاري الطبي"
      : "Beratung & Immobilienentwicklung",
    subtitle: isUz
      ? "NabiOta Real Estate GmbH – Kalit ostida tibbiy ko'chmas mulk"
      : isRu
      ? "NabiOta Real Estate GmbH – Медицинская недвижимость под ключ"
      : isEn
      ? "NabiOta Real Estate GmbH – Healthcare Real Estate & Medical Infrastructure"
      : isTr
      ? "NabiOta Real Estate GmbH – Sağlık Sektörü İçin Özel Gayrimenkuller"
      : isAr
      ? "NabiOta Real Estate GmbH – عقارات وبنية تحتية متخصصة للرعاية الصحية"
      : "NabiOta Real Estate GmbH – Spezialimmobilien für das Gesundheitswesen",
    eyebrow: isUz
      ? "NABIOTA REAL ESTATE GMBH • TIBBIY INFRATUZILMA"
      : isRu
      ? "NABIOTA REAL ESTATE GMBH • МЕДИЦИНСКАЯ ИНФРАСТРУКТУРА"
      : isEn
      ? "NABIOTA REAL ESTATE GMBH • HEALTHCARE INFRASTRUCTURE"
      : isTr
      ? "NABIOTA REAL ESTATE GMBH • SAĞLIK VE TIP ALTYAPISI"
      : isAr
      ? "NABIOTA REAL ESTATE GMBH • البنية التحتية والعقارات الطبية"
      : "NABIOTA REAL ESTATE GMBH • MEDIZINISCHE IMMOBILIEN",
    desc: isUz
      ? "NabiOta Real Estate GmbH sog'liqni saqlash sohasi bo'yicha ixtisoslashtirilgan ko'chmas mulkni sotib oladi, loyihalashtiradi, rivojlantiradi va boshqaradi: zamonaviy klinika va ambulator jarrohlik markazlaridan (OP) tortib, diagnostika majmualari, reabilitatsiya klinikalari, parvarishlash maskanlari va tibbiyot xodimlari uchun qulay turar joylargacha."
      : isRu
      ? "NabiOta Real Estate GmbH приобретает, проектирует, развивает и управляет специализированной недвижимостью сферы здравоохранения: от современных клиник и амбулаторных хирургических центров (OP) до диагностических комплексов, реабилитационных клиник, домов ухода и комфортного жилья для медперсонала."
      : isEn
      ? "NabiOta Real Estate GmbH acquires, designs, develops, and manages specialized healthcare real estate across Germany: from modern hospital wings and outpatient surgery centers (OP) to diagnostic suites, rehab clinics, nursing homes, and residential accommodation for medical staff."
      : isTr
      ? "NabiOta Real Estate GmbH, sağlık kurumları için geleceğe dönük gayrimenkuller edinir, geliştirir, yönetir ve kiralar. Portföyümüz en modern klinik binalarından ve ayaktan ameliyat merkezlerinden, MVZ alanları ve radyoloji tesislerinden terapi merkezlerine, bakım evlerine ve personel konutlarına kadar uzanır."
      : isAr
      ? "تتولى شركة NabiOta Real Estate GmbH تملك وتطوير وإدارة وتأجير عقارات حديثة ومستدامة مخصصة لمؤسسات الرعاية الصحية. يشمل ملف أعمالنا مباني المستشفيات الحديثة، مراكز الجراحة اليومية، مجمعات المراكز الطبية (MVZ)، مباني الأشعة المحمية، مراكز التأهيل، دور الرعاية السكنية ومساكن الكوادر الطبية."
      : "Die NabiOta Real Estate GmbH erwirbt, entwickelt, verwaltet und vermietet zukunftssichere Immobilien für Einrichtungen des Gesundheitswesens. Unser Portfolio reicht von hochmodernen Klinikbauten und ambulanten OP-Zentren über MVZ-Flächen und Radiologie-Sonderbauten bis hin zu Therapiezentren, Pflegeeinrichtungen und Mitarbeiterwohnungen.",
  };

  const heroBadges = [
    {
      icon: <Building2 className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "Kalit ostida topshirish" : isRu ? "Turnkey Realisierung" : isEn ? "Turnkey Delivery" : isTr ? "Anahtar Teslim Proje" : isAr ? "تنفيذ تسليم مفتاح" : "Turnkey Realisierung",
      sub: isUz ? "A dan Z gacha kalit ostida" : isRu ? "Под ключ от А до Я" : isEn ? "Concept to Handover" : isTr ? "Fikirden Teslime Eksiksiz" : isAr ? "من المخطط حتى التسليم" : "Schlüsselfertig",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "DIN 18040 & RLT" : isRu ? "DIN 18040 & RLT" : isEn ? "DIN & Cleanroom" : isTr ? "DIN 18040 & RLT" : isAr ? "DIN 18040 & RLT" : "DIN 18040 & RLT",
      sub: isUz ? "Tibbiy standartlar" : isRu ? "Медицинские стандарты" : isEn ? "Medical Standards" : isTr ? "Tıbbi Özel Yapı Standartları" : isAr ? "معايير المنشآت الطبية" : "Sonderbau-Standards",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "Rentabellik" : isRu ? "Рентабельность" : isEn ? "ESG & Feasibility" : isTr ? "Karlılık ve Sürdürülebilirlik" : isAr ? "جدوى وقيمة مستدامة" : "Wirtschaftlich & Tragfähig",
      sub: isUz ? "Barqaror qiymat" : isRu ? "Устойчивая ценность" : isEn ? "Sustainable Value" : isTr ? "Uzun Vadeli Değer Koruma" : isAr ? "حفظ القيمة على المدى البعيد" : "Langfristiger Werterhalt",
    },
  ];

  // 6 Core Healthcare Real Estate Pillars matching PDF Section 7 and User-Approved Card Styling
  const realEstateDomains: RealEstateDomain[] = [
    {
      id: "kliniken-op",
      badge: isUz
        ? "KLINIKALAR VA OPERATSIYA XONALARI"
        : isRu
        ? "КЛИНИКИ И ОПЕРАЦИОННЫЕ"
        : isEn
        ? "CLINICS & SURGERY"
        : isTr
        ? "KLİNİKLER & AMELİYAT MERKEZLERİ"
        : isAr
        ? "المستشفيات والمراكز الجراحية"
        : "KLINIKEN & OP-ZENTREN",
      image: "/images/areas/surgical-center.webp",
      iconType: "building",
      title: isUz
        ? "Klinika binolari va ambulator jarrohlik markazlari"
        : isRu
        ? "Клинические корпуса & Амбулаторные OP-центры"
        : isEn
        ? "Clinic Buildings & Outpatient Surgery Centers"
        : isTr
        ? "Klinik Binaları & Ayaktan Ameliyat Merkezleri"
        : isAr
        ? "مباني المستشفيات ومراكز الجراحة اليومية"
        : "Klinikgebäude & Ambulante OP-Zentren",
      shortDesc: isUz
        ? "Steril operatsiya zallarini (DIN 1946-4), uyg'onish palatalarini va § 30 GewO / § 115b SGB V bo'yicha statsionar bo'limlarni loyihalash va kalit ostida amalga oshirish."
        : isRu
        ? "Проектирование и реализация стерильных операционных залов (DIN 1946-4), палат пробуждения и стационарных отделений по § 30 GewO / § 115b SGB V."
        : isEn
        ? "Planning and construction of certified cleanroom operating theaters (DIN 1946-4), PACU recovery suites, and surgical clinic wards."
        : isTr
        ? "En yüksek cerrahi standartlar için ameliyathanelerin (DIN 1946-4), uyandırma ünitelerinin ve günübirlik hasta yataklı servislerinin planlanması ve anahtar teslim inşası."
        : isAr
        ? "تخطيط وبناء متكامل لتسليم غرف العمليات المعقمة (DIN 1946-4)، أجنحة الإفاقة، وأقسام التنويم اليومي وفق أعلى المعايير الجراحية."
        : "Planung und schlüsselfertige Realisierung von OP-Sälen (DIN 1946-4), Aufwachbereichen und tagesklinischen Bettenstationen für höchste chirurgische Standards.",
      modal: {
        title: isUz
          ? "Klinika binolari va ambulator jarrohlik markazlari"
          : isRu
          ? "Клинические корпуса & Амбулаторные хирургические центры"
          : isEn
          ? "Hospital Buildings & Ambulatory Surgery Centers"
          : isTr
          ? "Klinik Binaları & Ayaktan Cerrahi Merkezleri (§ 115b SGB V / § 30 GewO)"
          : isAr
          ? "مباني المستشفيات ومراكز الجراحة اليومية (§ 115b SGB V / § 30 GewO)"
          : "Klinikgebäude & Ambulante OP-Zentren (§ 115b SGB V / § 30 GewO)",
        subtitle: isUz
          ? "Murakkab operatsiyalar uchun ixtisoslashgan toza shamollatish va infratuzilma"
          : isRu
          ? "Специализированная чистая вентиляция и инфраструктура для сложных операций"
          : isEn
          ? "Advanced laminar cleanroom ventilation and surgical suite infrastructure"
          : isTr
          ? "Steril cerrahi müdahaleler için temiz oda ve iklimlendirme mühendisliği"
          : isAr
          ? "تقنيات هندسية متخصصة للغرف المعقمة وتكييف الهواء للجراحات الدقيقة"
          : "Spezialisierte bauliche Reinraum- und Klimatechnik für sterile operative Eingriffe",
        description: isUz
          ? "Jarrohlik statsionarlarini qurish va qayta jihozlash mutlaq aniqlikni talab qiladi: 1a va 1b toifadagi toza hududlar, operatsiya stoli ustidagi laminar havo oqimi, mustaqil avariya elektr ta'minoti hamda xodimlar va bemorlar uchun germetik shlyuzlar."
          : isRu
          ? "Строительство и переоборудование хирургических стационаров требует абсолютной точности: чистые зоны классов 1a и 1b, ламинарный поток воздуха над операционным столом, независимое аварийное электроснабжение и бесшовные шлюзы для персонала и пациентов."
          : isEn
          ? "Designing and building modern surgical inpatient and outpatient facilities requires uncompromising engineering precision: cleanroom classification 1a/1b, laminar airflow ceilings, isolated electrical safety systems, and strict aseptic airlocks."
          : isTr
          ? "Klinik binaları ve ayaktan ameliyat merkezlerinin inşası, derin bir yapı ve medikal arayüz uzmanlığı gerektirir. NabiOta Real Estate GmbH, cerrahların ve anestezi uzmanlarının iş akışlarına kusursuz şekilde uyarlanmış 1a ve 1b temiz oda sınıflarında ameliyathaneler, steril hava kilitleri, uyandırma alanları ve modern hasta servisleri geliştirir."
          : isAr
          ? "يتطلب تشييد المستشفيات والمراكز الجراحية اليومية خبرة هندسية وطبية عميقة. تطور NabiOta Real Estate GmbH غرف عمليات مخصصة من فئتي الغرف المعقمة 1a و 1b، وأنظمة عزل هوائي معقمة، وغرف إفاقة، وأقسام تنويم حديثة مصممة لتيسير تدفق عمل الجراحين وأطباء التخدير."
          : "Die Realisierung von Klinikbauten und ambulanten Operationszentren verlangt fundiertes bauliches und medizinisches Schnittstellenwissen. NabiOta Real Estate GmbH entwickelt maßgeschneiderte Operationssäle der Reinraumklassen 1a und 1b, sterile Schleusensysteme, Aufwachbereiche sowie moderne Patientenstationen, die optimal auf die Arbeitsabläufe von Chirurgen und Anästhesisten abgestimmt sind.",
        specificationsTitle: isUz
          ? "Texnik parametrlar"
          : isRu
          ? "Технические параметры"
          : isEn
          ? "Technical Specifications"
          : isTr
          ? "Yapısal ve Teknik Özellikler"
          : isAr
          ? "المواصفات الهندسية والتقنية"
          : "Bauliche & technische Spezifikationen",
        specifications: isUz
          ? [
              "1a/1b toifadagi laminar shift maydonlariga (TAV) ega operatsiya zallari",
              "DIN 1946-4 standarti bo'yicha oqimli-tortuvchi shamollatish (RLT) tizimlari",
              "Tibbiy gazlarning (O2, azot oksidi, siqilgan havo, vakuum) markazlashtirilgan tarmoqlari",
              "DIN VDE 0100-710 standarti bo'yicha avariya elektr ta'minoti (ZSV/SV)",
              "Kechayu kunduz asbob-uskunali monitoringga ega uyg'onish palatalari (PACU)",
              "Antistatik choksiz polimer pol qoplamalari va germetik eshiklar",
            ]
          : isRu
          ? [
              "Операционные залы с ламинарными потолочными полями (TAV) класса 1a/1b",
              "Системы приточно-вытяжной вентиляции (RLT) по стандарту DIN 1946-4",
              "Централизованная разводка медицинских газов (O2, закись азота, сжатый воздух, вакуум)",
              "Аварийное электроснабжение (ZSV/SV) согласно стандарту DIN VDE 0100-710",
              "Палаты пробуждения (PACU) с круглосуточным приборным мониторингом",
              "Антистатические бесшовные полимерные покрытия пола и герметичные двери",
            ]
          : isEn
          ? [
              "Cleanroom surgical suites with laminar airflow (TAV) ceiling filters class 1a/1b",
              "Dedicated hospital HVAC air handling systems meeting DIN 1946-4",
              "Central medical gas pipelines (oxygen, nitrous oxide, medical air, vacuum)",
              "Isolated power supplies (IPS/UPS) compliant with DIN VDE 0100-710 Group 2",
              "Post-anesthesia care units (PACU) with multi-parameter telemetry monitoring",
              "Seamless, anti-microbial conductive floor coatings and hermetic sliding doors",
            ]
          : isTr
          ? [
              "1a ve 1b oda sınıfında TAV tavanlı (laminer hava akışlı) ameliyathaneler",
              "DIN 1946-4 standardına uygun HEPA filtreli ve basınç kademeli yüksek verimli RLT santralleri",
              "Medikal gazlar için entegre merkezi tesisat altyapısı (O2, basınçlı hava, vakum)",
              "DIN VDE 0100-710 (Grup 2) standardına uygun kesintisiz güvenlik güç kaynağı (ZSV/SV)",
              "Kesintisiz monitörizasyon takipli tam donanımlı ameliyat sonrası uyandırma odaları (PACU)",
              "Antistatik, eksiz iletken zemin kaplamaları ve otomatik hava sızdırmaz cerrahi kayar kapılar",
            ]
          : isAr
          ? [
              "غرف عمليات بأسقف تدفق هوائي صفيحي رقائقي (TAV) من فئة الغرف المعقمة 1a/1b",
              "محطات معالجة هواء وتكييف متطورة وفق DIN 1946-4 مع فلاتر HEPA والتحكم بفرق الضغط",
              "شبكات إمداد مركزية متكاملة للغازات الطبية (أكسجين، هواء طبي، شفط مفرغ)",
              "أنظمة تغذية كهربائية احتياطية معزولة للحالات الحرجة (ZSV/SV) وفق DIN VDE 0100-710",
              "غرف إفاقة متكاملة (PACU) مجهزة بنظم مراقبة حيوية عن بُعد على مدار الساعة",
              "أرضيات موصلة غير ملحومة مضادة للبكتيريا والكهرباء الساكنة وأبواب سحب محكمة الإغلاق",
            ]
          : [
              "OP-Säle mit TAV-Decken (Turbulenzarme Verdrängungsströmung) der Raumklasse 1a/1b",
              "Hocheffiziente RLT-Anlagen nach DIN 1946-4 mit HEPA-Filterung und Druckstufenregelung",
              "Integrierte Medienversorgungsanlagen für medizinische Gase (O2, DL, Vakuum)",
              "Zusätzliche Sicherheitsstromversorgung (ZSV/SV) nach DIN VDE 0100-710 (Gruppe 2)",
              "Voll ausgestattete Aufwachräume (PACU) mit lückenloser Monitorüberwachung",
              "Antistatische, fugenlose ableitfähige Bodenbeläge und automatische OP-Schiebetüren",
            ],
        scopeTitle: isUz
          ? "NabiOta Real Estate xizmatlar portfeli"
          : isRu
          ? "Услуги девелопера"
          : isEn
          ? "Developer Scope"
          : isTr
          ? "NabiOta Real Estate Hizmet Yelpazesi"
          : isAr
          ? "نطاق خدمات NabiOta Real Estate"
          : "Leistungsportfolio NabiOta Real Estate",
        scopeItems: isUz
          ? [
              "Joylashuvni tanlash, transport qulayligini tahlil qilish va shaharsozlik auditi",
              "Funksional tibbiy-texnologik topshiriqni (MTZ) ishlab chiqish",
              "Sog'liqni saqlash va yong'in xavfsizligi idoralari bilan kelishishni to'liq qo'llab-quvvatlash",
              "Bosh pudrat, qurilish nazorati va kalit ostida foydalanishga topshirish",
              "Uzoq muddatli ijara shartnomalari va muhandislik tizimlariga texnik xizmat ko'rsatish",
            ]
          : isRu
          ? [
              "Поиск локации, анализ транспортной доступности и градостроительный аудит",
              "Разработка функционального медико-технологического задания (МТЗ)",
              "Полное сопровождение согласований с ведомствами здравоохранения и пожарной охраной",
              "Генеральный подряд, строительный контроль и ввод в эксплуатацию под ключ",
              "Долгосрочные договоры аренды и техническое обслуживание инженерных систем",
            ]
          : isEn
          ? [
              "Location scouting, accessibility analysis, and municipal zoning clearance",
              "Development of medical-technological room programs and equipment layouts",
              "Comprehensive authority management (health authorities, fire marshals, TÜV)",
              "General contracting, site management, commissioning, and turnkey delivery",
              "Long-term commercial lease agreements and specialized technical facility management",
            ]
          : isTr
          ? [
              "Lokasyon analizi, ihtiyaç tespiti, ulaşım bağlantıları ve imar hukuku ön incelemesi",
              "Özel medikal teknoloji oda programları ve hijyen bölgeleme planlarının hazırlanması",
              "§ 30 GewO ve Hastane Kanunu kapsamındaki resmi ruhsatlandırma süreçlerinin eksiksiz yürütülmesi",
              "Genel yüklenicilik, inşaat denetimi, kalite kontrol ve anahtar teslim teslimat",
              "Özel ticari kira sözleşmelerinin akdedilmesi ve teknik tesis yönetimi (Facility Management)",
            ]
          : isAr
          ? [
              "دراسة الموقع، تقييم الاحتياج السريري، شبكات المواصلات والتراخيص العمرانية الأولية",
              "إعداد المخططات المعمارية الوظيفية للأقسام وتوزيع مناطق التعقيم والنظافة",
              "إدارة متكاملة لإجراءات الترخيص الحكومي وفق § 30 GewO وقوانين المستشفيات",
              "المقاولات العامة، الإشراف الهندسي، ضبط الجودة والتسليم الجاهز للتشغيل فوراً",
              "صياغة عقود إيجار تجارية مخصصة وإدارة المرافق والصيانة الفنية المستمرة",
            ]
          : [
              "Standortanalyse, Bedarfsprüfung, Verkehrsanbindung und baurechtliche Vorprüfung",
              "Erstellung spezialisierter medizintechnischer Raumprogramme und Hygienezonierungen",
              "Komplette Begleitung der behördlichen Genehmigungsverfahren nach § 30 GewO / KHG",
              "Generalübernahme, Baubegleitung, Qualitätskontrolle und schlüsselfertige Übergabe",
              "Abschluss maßgeschneiderter Gewerbemietverträge und technisches Facility Management",
            ],
        technicalTitle: isUz
          ? "Me'yoriy baza"
          : isRu
          ? "Нормативная база"
          : isEn
          ? "Regulatory Standards"
          : isTr
          ? "Standartlar ve Yönetmelikler"
          : isAr
          ? "المعايير واللوائح المنظمة"
          : "Normen & Richtlinien",
        technicalText: isUz
          ? "Barcha obyektlar Sonderbauverordnung, DIN 1946-4, DIN EN ISO 14644 (toza xonalar) va Robert Koch Instituti (RKI) talablariga to'liq javob beradi."
          : isRu
          ? "Все объекты соответствуют требованиям Sonderbauverordnung, DIN 1946-4, DIN EN ISO 14644 (чистые помещения) и директивам Института Роберта Коха (RKI)."
          : isEn
          ? "All clinic facilities strictly conform to hospital codes, DIN 1946-4, DIN EN ISO 14644 (cleanrooms), and Robert Koch Institute (RKI) hygiene directives."
          : isTr
          ? "Planlama ve inşaat, Hastane Özel Yapı Yönetmeliği, DIN 1946-4, DIN EN ISO 14644 (temiz oda teknolojisi) ve Robert Koch Enstitüsü (RKI) hijyen kılavuzlarına harfiyen uygun olarak gerçekleştirilir."
          : isAr
          ? "تتم أعمال التخطيط والتشييد بالتوافق الصارم مع لوائح المنشآت الطبية الخاصة، ومعيار DIN 1946-4، ومعيار DIN EN ISO 14644 للغرف المعقمة، وتوجيهات معهد روبرت كوخ (RKI)."
          : "Planung und Bau erfolgen streng nach den Krankenhaus-Sonderbauverordnungen, DIN 1946-4, DIN EN ISO 14644 (Reinraumtechnik) und den Hygieneempfehlungen der KRINKO am RKI.",
        legalTitle: isUz
          ? "Yuridik ajratish"
          : isRu
          ? "Юридическое разделение"
          : isEn
          ? "Legal Framework"
          : isTr
          ? "Hukuki Yapılandırma"
          : isAr
          ? "الفصل الهيكلي والقانوني"
          : "Rechtliche Entflechtung",
        legalText: isUz
          ? "Aniq taqsimot: NabiOta Real Estate GmbH binolarning dasturchisi va ijaraga beruvchisi hisoblanadi, tibbiy faoliyat va litsenziyalar esa klinika operatorlariga tegishlidir."
          : isRu
          ? "Четкое разграничение: NabiOta Real Estate GmbH выступает девелопером и арендодателем помещений, а медицинская деятельность и лицензии принадлежат операторам клиник."
          : isEn
          ? "Clear structural separation: NabiOta Real Estate GmbH acts solely as property owner, developer, and lessor; clinical responsibility remains with licensed operating clinics."
          : isTr
          ? "Gayrimenkul şirketi tıbbi tedavi görevleri üstlenmez. Bina, bina tekniği ve medikal işletme sorumlulukları sözleşmelerle birbirinden net olarak ayrılmıştır."
          : isAr
          ? "لا تمارس الشركة العقارية أي نشاط علاجي طبي. يتم الفصل التعاقدي والقانوني الدقيق بين ملكية المبنى والمرافق الهندسية وبين التشغيل الطبي والسريري."
          : "Die Immobiliengesellschaft übernimmt keine medizinischen Behandlungsaufgaben. Die Verantwortlichkeiten für Gebäude, Haustechnik und den medizinischen Betrieb werden vertraglich eindeutig voneinander abgegrenzt.",
        ctaButtonText: isUz
          ? "Klinika konsepsiyasini so'rash"
          : isRu
          ? "Запросить концепцию клиники"
          : isEn
          ? "Inquire Clinic Project"
          : isTr
          ? "Klinik Konsepti Talep Et"
          : isAr
          ? "طلب استشارة لتطوير مستشفى"
          : "Klinikkonzept anfragen",
      },
    },
    {
      id: "mvz-praxen",
      badge: isUz
        ? "MVZ VA TIBBIYOT MARKAZLARI"
        : isRu
        ? "MVZ И МЕДЦЕНТРЫ"
        : isEn
        ? "MVZ & MEDICAL CENTERS"
        : isTr
        ? "MVZ & SAĞLIK MERKEZLERİ"
        : isAr
        ? "المراكز الطبية ومجمعات العيادات"
        : "MVZ & ÄRZTEHÄUSER",
      image: "/images/beratung/project-mvz.webp",
      iconType: "stethoscope",
      title: isUz
        ? "Tibbiyot markazlari (MVZ) va shifokor praksislari"
        : isRu
        ? "Медицинские центры (MVZ) & Врачебные праксисы"
        : isEn
        ? "Medical Centers (MVZ) & Practice Spaces"
        : isTr
        ? "Tıbbi Hizmet Merkezleri (MVZ) & Hekim Muayenehaneleri"
        : isAr
        ? "المراكز الطبية المجمعة (MVZ) ومباني العيادات"
        : "Medizinische Versorgungszentren (MVZ) & Ärztehäuser",
      shortDesc: isUz
        ? "KV Nordrhein standartlari bo'yicha zamonaviy praksislar: to'siqsiz muhit (DIN 18040-1), modulli xonalar va moslashuvchan rejalashtirish."
        : isRu
        ? "Современные праксисы по стандартам KV Nordrhein: безбарьерная среда (DIN 18040-1), модульные кабинеты и гибкие планировки."
        : isEn
        ? "Accredited outpatient clinic spaces adhering to KV guidelines: barrier-free access (DIN 18040-1), modular consultation rooms, and efficient layouts."
        : isTr
        ? "Engelsiz mekan konseptleri, KV onaylanabilirliği ve modüler üniteleriyle § 95 SGB V uyarınca ruhsata tam uyumlu muayenehane alanları."
        : isAr
        ? "مساحات عيادات معتمدة وفق § 95 SGB V بتصاميم خالية من العوائق ومطابقة لاشتراطات اتحاد أطباء التأمين ووحدات معيارية مرنة."
        : "Zulassungskonforme Praxisflächen nach § 95 SGB V mit barrierefreien Raumkonzepten, KV-Genehmigungsfähigkeit und modularen Einheiten.",
      modal: {
        title: isUz
          ? "Tibbiyot markazlari (MVZ) va shifokor praksislari"
          : isRu
          ? "Медицинские центры (MVZ) & Врачебные праксисы"
          : isEn
          ? "Medical Versorgungszentren (MVZ) & Healthcare Hubs"
          : isTr
          ? "Tıbbi Hizmet Merkezleri (MVZ) & Uzman Hekim Muayenehaneleri"
          : isAr
          ? "المراكز الطبية المجمعة (MVZ) وعيادات الأطباء الاستشاريين"
          : "Medizinische Versorgungszentren (MVZ) & Facharztpraxen",
        subtitle: isUz
          ? "Turli mutaxassislikdagi shifokorlar uchun funksional maydonlar"
          : isRu
          ? "Функциональные пространства для врачей различных специальностей"
          : isEn
          ? "Compliant, patient-friendly outpatient spaces tailored for physician practices"
          : isTr
          ? "KV ve meslek hukukuna uygun, geleceğe hazır muayenehane mekanları"
          : isAr
          ? "مساحات عيادات مستقبلية مصممة وفق لوائح نقابات الأطباء والتأمين القانوني"
          : "Zukunftssichere Praxisflächen nach KV- und Berufsrecht",
        description: isUz
          ? "Yakka shifokor praksisidan tortib ko'p tarmoqli ambulator MVZ kampusigacha: biz mintaqaviy sog'liqni saqlash ehtiyojlarini tahlil qilamiz, Kassenärztliche Vereinigung (KV Nordrhein) me'yorlarini muvofiqlashtiramiz va bemorlar hamda shifokorlar uchun eng qulay harakatlanish logistikasiga ega funksional maydonlarni loyihalashtiramiz."
          : isRu
          ? "От одиночного врачебного кабинета до крупного многопрофильного амбулаторного кампуса: мы анализируем потребности региона, согласуем проект с Ассоциацией врачей больничных касс (KV Nordrhein) и создаем пространства, где удобно и врачам, и пациентам."
          : isEn
          ? "From single specialist practices to interdisciplinary MVZ hubs: we analyze regional medical demographics, ensure KV Nordrhein licensing alignment, and construct clinic environments engineered for optimal patient flow and confidentiality."
          : isTr
          ? "Tek hekim muayenehanelerinden çok branşlı MVZ kampüslerine kadar: Bölgesel sağlık ihtiyaçlarını analiz ediyor, Kassenärztliche Vereinigung (KV Nordrhein) sözleşmeli hekimlik gereksinimlerini inceliyor ve hem hastalar hem hekimler için hızlı, konforlu erişim sağlayan fonksiyonel alanlar tasarlıyoruz."
          : isAr
          ? "من عيادة استشارية فردية إلى مجمع طبي متعدد التخصصات: ندرس احتياجات الرعاية الإقليمية، ونتحقق من معايير ترخيص اتحاد أطباء التأمين (KV Nordrhein)، ونبتكر مخططات وظيفية توفر مسارات سلسة للمرضى والأطباء."
          : "Vom Einzelpraxissitz bis zum fachübergreifenden MVZ-Campus: Wir analysieren den lokalen Versorgungsbedarf, prüfen Kassenarztsitz-Vorgaben der Kassenärztlichen Vereinigung (KV Nordrhein) und entwickeln funktionale Raumprogramme, die kurze Wege für Patienten und Ärzte schaffen.",
        specificationsTitle: isUz
          ? "Me'moriy standartlar va jihozlanish"
          : isRu
          ? "Архитектурные стандарты"
          : isEn
          ? "Facility Features"
          : isTr
          ? "Mekan Programı ve Donanım"
          : isAr
          ? "المخطط المعماري والتجهيزات"
          : "Raumprogramm & Ausstattung",
        specifications: isUz
          ? [
              "DIN 18040-1 bo'yicha to'liq to'siqsizlik (keng eshiklar, zambillar uchun liftlar)",
              "Modulli qabul xonalari, muolaja xonalari va kichik operatsiya xonalari",
              "Suhbatlar maxfiyligi uchun SSK 3 toifasidagi to'siqlar va eshiklar tovush izolyatsiyasi",
              "Tabiiy yorug'likka ega kutish zonalari va bemorlar oqimining puxta taqsimlanishi",
              "Strukturalangan Cat.7 kabel tarmog'i va himoyalangan server tugunlari",
              "ASR me'yorlari bo'yicha xodimlar uchun qulay dam olish va kiyinish xonalari",
            ]
          : isRu
          ? [
              "Полная безбарьерность по DIN 18040-1 (широкие проемы, лифты для каталок)",
              "Модульные кабинеты приема, процедурные и малые операционные",
              "Звукоизоляция перегородок и дверей класса SSK 3 для конфиденциальности бесед",
              "Зоны ожидания с естественным освещением и продуманным разделением потоков",
              "Структурированная кабельная сеть Cat.7 и защищенные серверные узлы",
              "Комфортные комнаты отдыха и раздевалки для персонала по нормам ASR",
            ]
          : isEn
          ? [
              "Comprehensive barrier-free architecture per DIN 18040-1 (stretcher elevators, wide doors)",
              "Modular consultation rooms, examination suites, and minor intervention rooms",
              "Acoustic partition walls and doors (SSK 3) safeguarding physician-patient confidentiality",
              "Daylit reception areas with modern patient paging systems and intuitive navigation",
              "High-bandwidth Cat.7 structured cabling and isolated climate-controlled server rooms",
              "Staff break rooms and changing facilities fully compliant with German ASR regulations",
            ]
          : isTr
          ? [
              "Tekerlekli sandalyeye uygun kapılar ve sedye asansörleriyle DIN 18040-1 uyumlu tam erişilebilirlik",
              "Standart tesisat bağlantılarına sahip modüler muayene ve danışma odaları",
              "Hekimlik meslek sırrını korumak için DIN 4109 (SSK 3) standartlarında yüksek ses yalıtımı",
              "Hasta yönlendirme sistemine sahip ferah merkezi karşılama ve ayrılmış bekleme alanları",
              "Cat.7 kablolama ve iklimlendirmeli sunucu odalarıyla geleceğe dönük güvenli BT altyapısı",
              "İşyeri Yönetmeliği'ne (ASR) tam uygun çalışan dinlenme ve sosyal mekanları",
            ]
          : isAr
          ? [
              "تصميم خالٍ تماماً من العوائق وفق DIN 18040-1 مع أبواب ومصاعد مهيأة للكراسي والنقالات",
              "غرف فحص واستشارات معيارية ذات توصيلات قياسية موحدة لتسهيل إعادة التهيئة",
              "عزل صوتي فائق وفق DIN 4109 (فئة SSK 3) لحماية خصوصية وسرية الطبيب والمريض",
              "استقبال مركزي بأنظمة إرشاد للمرضى ومناطق انتظار رحبة مضاءة طبيعياً",
              "بنية تحتية رقمية مستقبلية بكابلات Cat.7 وغرف خوادم مكيفة ومحمية",
              "مساحات استراحة وغرف تبديل للكوادر الطبية مطابقة تماماً للوائح أماكن العمل الألمانية (ASR)",
            ]
          : [
              "Konsequente Barrierefreiheit nach DIN 18040-1 mit rollstuhlgerechten Türen und Aufzügen",
              "Modulare Behandlungs- und Sprechzimmer mit standardisierten Anschlüssen",
              "Schallschutz nach DIN 4109 (SSK 3) zur Wahrung der ärztlichen Schweigepflicht",
              "Zentraler Empfang mit Patientenleitsystem und getrennten Wartebereichen",
              "Zukunftssichere IT-Infrastruktur mit Cat.7-Verkabelung und klimatisierten Serverräumen",
              "Mitarbeiter- und Sozialräume gemäß Arbeitsstättenverordnung (ASR)",
            ],
        scopeTitle: isUz
          ? "Bizning xizmatlar ko'lami"
          : isRu
          ? "Что мы берем на себя"
          : isEn
          ? "Our Turnkey Services"
          : isTr
          ? "Muayenehane Sahipleri & MVZ İçin Hizmetler"
          : isAr
          ? "الخدمات المقدمة لأصحاب العيادات ومراكز MVZ"
          : "Leistungen für Praxisinhaber & MVZ",
        scopeItems: isUz
          ? [
              "Istiqbolli yer uchastkalari va obyektlarni tanlash hamda sotib olish",
              "Muayyan tibbiy ixtisosliklar talablari asosida rejalashtirish yechimlarini ishlab chiqish",
              "KV, shahar hokimiyati va kommunal xizmatlar bilan hamkorlik",
              "Qurilish ishlarini moliyalashtirish va binolarni ijarachiga moslashtirish",
              "Obyekt ekspluatatsiyasini uzoq muddatli boshqarish (Facility Management)",
            ]
          : isRu
          ? [
              "Подбор и выкуп перспективных земельных участков и объектов",
              "Разработка планировочных решений под требования конкретных медицинских специализаций",
              "Взаимодействие с KV, городскими властями и коммунальными службами",
              "Финансирование строительных работ и адаптация помещений под арендатора",
              "Долгосрочное управление эксплуатацией объекта (Facility Management)",
            ]
          : isEn
          ? [
              "Identification and acquisition of prime healthcare real estate parcels",
              "Bespoke architectural layout tailored to specific medical disciplines",
              "Coordination with KV licensing boards, municipal planners, and utility companies",
              "Capital project financing and customized tenant fit-out delivery",
              "Ongoing comprehensive facility management and technical maintenance",
            ]
          : isTr
          ? [
              "Stratejik merkezi konumlarda uygun arsa veya mevcut mülklerin tespiti ve satın alımı",
              "KV uzmanlık alanlarına (kardiyoloji, cerrahi vb.) özel profesyonel mekan planlaması",
              "Kullanım amacı değişikliği başvuruları ve imar makamlarıyla müzakerelerin yürütülmesi",
              "Finansman yapılandırması, anahtar teslim iç mekan tadilatı ve sabit donanımların montajı",
              "Şirket içi Tesis Yönetimi ile uzun vadeli işletme ve aidat/gider takibi",
            ]
          : isAr
          ? [
              "البحث عن أراضٍ أو مبانٍ متميزة في مواقع استراتيجية وشرائها",
              "تخطيط معماري هندسي دقيق يتناسب مع التخصصات الطبية (مثل القلب، الجراحة)",
              "استخراج تصاريح تغيير الاستخدام والتنسيق مع البلديات وهيئات البناء",
              "هيكلة التمويل الاستثماري، تجهيز المقرات تسليم مفتاح، وتركيب التجهيزات الثابتة",
              "إدارة مستمرة للمرافق عبر فريق الصيانة الداخلي وإدارة التكاليف التشغيلية",
            ]
          : [
              "Suche und Ankauf geeigneter Grundstücke oder Bestandsimmobilien in Top-Lagen",
              "Fachgerechte Raumplanung abgestimmt auf KV-Fachgruppen (z.B. Kardiologie, Chirurgie)",
              "Begleitung bei Nutzungsänderungsanträgen und Abstimmung mit Baubehörden",
              "Finanzierungsstrukturierung, schlüsselfertiger Mieterausbau und Einbau fester Einbauten",
              "Langfristige Betreuung durch hauseigenes Facility Management und Nebenkostenabrechnung",
            ],
        technicalTitle: isUz
          ? "Qurilish me'yorlari"
          : isRu
          ? "Строительные нормы"
          : isEn
          ? "Applicable Codes"
          : isTr
          ? "Standartlar"
          : isAr
          ? "المعايير المعتمدة"
          : "Standards",
        technicalText: isUz
          ? "DIN 18040-1, DIN 4109 (tovush izolyatsiyasi), KV Nordrhein qoidalari va ASR A1.2 ish joylari talablari."
          : isRu
          ? "DIN 18040-1, DIN 4109 (звукоизоляция), правила KV Nordrhein и требования рабочих мест ASR A1.2."
          : isEn
          ? "DIN 18040-1 accessibility, DIN 4109 acoustic privacy, KV physician facility guidelines, and ASR workplace codes."
          : isTr
          ? "DIN 18040-1 (Kamusal Binalarda Engelsiz Yaşam), DIN 4109 (Binalarda Ses Yalıtımı), KV Kılavuzları ve ASR İşyeri Standartları."
          : isAr
          ? "معيار DIN 18040-1 للمباني العامة الخالية من العوائق، DIN 4109 للعزل الصوتي، إرشادات KV، ومعايير ASR."
          : "DIN 18040-1 (Barrierefreiheit öffentlich zugänglicher Gebäude), DIN 4109 (Schallschutz im Hochbau), KV-Richtlinien und ASR.",
        legalTitle: isUz
          ? "Ijara modellari"
          : isRu
          ? "Арендные модели"
          : isEn
          ? "Contractual Setup"
          : isTr
          ? "Hukuka Uygun Kira Modelleri"
          : isAr
          ? "عقود الإيجار المتوافقة قانونياً"
          : "Rechtskonforme Mietverträge",
        legalText: isUz
          ? "Tibbiy amaliyotning barqarorligini va shifokor qarorlarining to'liq mustaqilligini kafolatlaydigan uzoq muddatli tijorat ijara shartnomalari."
          : isRu
          ? "Долгосрочные договоры коммерческой аренды, гарантирующие стабильность медицинской практики и полную независимость врачебных решений."
          : isEn
          ? "Long-term commercial healthcare leases ensuring practice longevity while preserving total medical autonomy."
          : isTr
          ? "Hekimlerin bağımsızlığını ve uzun vadeli ekonomik güvenliğini teminat altına alan, planlanabilir vadeli ticari kira sözleşmeleri."
          : isAr
          ? "عقود إيجار تجارية طويلة الأجل تمنح أصحاب العيادات استقراراً اقتصادياً واستقلالية مهنية كاملة."
          : "Gewerbemietverträge mit planungssicheren Laufzeiten, die den Praxisinhabern Unabhängigkeit und langfristige wirtschaftliche Stabilität sichern.",
        ctaButtonText: isUz
          ? "MVZ uchun xona tanlash"
          : isRu
          ? "Подобрать помещение для MVZ"
          : isEn
          ? "Find Practice Location"
          : isTr
          ? "MVZ Alanları İçin Danışın"
          : isAr
          ? "طلب مساحات عيادات ومراكز MVZ"
          : "MVZ-Flächen anfragen",
      },
    },
    {
      id: "diagnostik-infra",
      badge: isUz
        ? "RADIOLOGIYA VA MRT"
        : isRu
        ? "РАДИОЛОГИЯ И МРТ"
        : isEn
        ? "RADIOLOGY & MRI"
        : isTr
        ? "YÜKSEK TEKNOLOJİ RADYOLOJİ"
        : isAr
        ? "الأشعة المتقدمة والرنين المغناطيسي"
        : "HIGH-END RADIOLOGIE",
      image: "/images/areas/diagnostics.webp",
      iconType: "activity",
      title: isUz
        ? "Diagnostika markazlari va radiatsion himoya"
        : isRu
        ? "Диагностические центры & Радиационная защита"
        : isEn
        ? "Diagnostic Centers & Radiation Shielding"
        : isTr
        ? "Tanı Merkezleri & Radyasyondan Korunma Altyapısı"
        : isAr
        ? "مراكز التشخيص وبنية الوقاية من الإشعاع"
        : "Diagnostikzentren & Strahlenschutz-Infrastruktur",
      shortDesc: isUz
        ? "3T MRT, KT va rentgen apparatlari uchun konstruktiv va statik yechimlar: Faradey kataklari, qo'rg'oshinli himoya va tebranishni so'ndirish."
        : isRu
        ? "Конструктивные и статические решения для томографов 3T МРТ, КТ и рентгена: клетки Фарадея, свинцовая защита и гашение вибраций."
        : isEn
        ? "Structural and shielding engineering for 3T MRI, CT, and X-ray modalities: Faraday RF cages, lead lining, and vibration isolation."
        : isTr
        ? "Kurşun zırhlama, RF kabinleri ve quench boruları dahil olmak üzere 3T MRG, BT ve dijital röntgen için yapısal ve statik özel çözümler."
        : isAr
        ? "حلول إنشائية وهندسية متخصصة لأجهزة 3T MRI، الأشعة المقطعية، والرقمية تشمل التدريع الرصاصي، أقفاص فاراداي، وأنابيب تفريغ الهيليوم."
        : "Bauliche und statische Sonderlösungen für 3T MRT, CT und digitales Röntgen inklusive Bleischirmung, HF-Kabinen und Quenchrohren.",
      modal: {
        title: isUz
          ? "Diagnostika markazlari va nur diagnostikasi infratuzilmasi"
          : isRu
          ? "Диагностические центры и инфраструктура лучевой диагностики"
          : isEn
          ? "Advanced Imaging Centers & Radiation Protection Infrastructure"
          : isTr
          ? "Tanı Merkezleri & Radyasyondan Korunma Altyapısı (3T MRG, BT, Röntgen)"
          : isAr
          ? "مراكز التشخيص وبنية الحماية الإشعاعية (3T MRI, CT, Röntgen)"
          : "Diagnostikzentren & Strahlenschutz-Infrastruktur (3T MRT, CT, Röntgen)",
        subtitle: isUz
          ? "Og'ir va yuqori texnologiyali uskunalar uchun muhandislik yechimlari"
          : isRu
          ? "Инженерные решения для тяжелого высокотехнологичного оборудования"
          : isEn
          ? "Heavy structural engineering and electromagnetic shielding for high-end radiology"
          : isTr
          ? "Görüntüleme cihazları için statik, yüksek frekans ekranlama ve radyasyon koruması"
          : isAr
          ? "هندسة إنشائية، حجب الترددات اللاسلكية، وتدريع إشعاعي للمعدات الطبية الثقيلة"
          : "Statik, HF-Abschirmung und baulicher Strahlenschutz für bildgebende Großgeräte",
        description: isUz
          ? "Zamonaviy diagnostika uskunalarini (3 Tesla MRT, past dozali kompyuter tomograflari, raqamli rentgen) joylashtirish noyob qurilish yechimlarini talab qiladi: 15 tonnagacha bo'lgan tebranishdan yalıtılmış poydevor plitalari, radiochastotalardan himoyalovchi mis Faradey kataklari, qo'rg'oshinli devor himoyasi va geliyning favqulodda chiqarish quvurlari (kvench liniyalari)."
          : isRu
          ? "Размещение современного диагностического оборудования (МРТ 3 Тесла, низкодозные компьютерные томографы, цифровой рентген) требует уникальных строительных решений: виброизолированных плит весом до 15 тонн, медных клеток Фарадея для защиты от радиопомех, свинцовой защиты стен и труб экстренного сброса гелия (квенч-линии)."
          : isEn
          ? "Installing cutting-edge imaging modalities such as 3-Tesla MRI and multi-slice CT scanners involves complex architectural engineering: vibration-isolated foundations supporting up to 15 tons, copper Faraday RF shielding, lead radiation barriers, and exterior quench ventilation."
          : isTr
          ? "Yüksek alanlı MRG (3 Tesla) ve bilgisayarlı tomografi gibi büyük görüntüleme cihazlarının kurulumu, kaba inşaat aşamasından itibaren en yüksek mühendislik hassasiyetini gerektirir. Titreşimden yalıtılmış temeller, yüksek frekans ekranlaması için Faraday kafesleri ve Radyasyondan Korunma Kanunu'nun (StrlSchG) en katı kurallarına göre yapısal radyasyon koruması uyguluyoruz."
          : isAr
          ? "يتطلب تركيب معدات التصوير التشخيصي الكبرى مثل أجهزة الرنين المغناطيسي عالية المجال (3 تسلا) والأشعة المقطعية دقة هندسية متناهية منذ مرحلة الهيكل الإنشائي. نقوم بتنفيذ قواعد معزولة عن الاهتزاز، أقفاص فاراداي لحجب الترددات، وتدابير الحماية الإشعاعية طبقاً لقانون الوقاية من الإشعاع (StrlSchG)."
          : "Die Installation modernster bildgebender Großgeräte wie High-Field-MRT (3 Tesla) und Computertomographen erfordert bereits in der Rohbauphase höchste ingenieurtechnische Präzision. Wir realisieren schwingungsentkoppelte Fundamente, Faraday-Käfige zur Hochfrequenzabschirmung und bauliche Strahlenschutzmaßnahmen nach den strengsten Vorgaben des Strahlenschutzgesetzes (StrlSchG).",
        specificationsTitle: isUz
          ? "Muhandislik komponentlari va texnik infratuzilma"
          : isRu
          ? "Инженерные компоненты"
          : isEn
          ? "Engineering Solutions"
          : isTr
          ? "Teknik Özel Gereksinimler"
          : isAr
          ? "المتطلبات التقنية الخاصة"
          : "Technische Sonderanforderungen",
        specifications: isUz
          ? [
              "10 tonnadan ortiq yuk ko'tarish qobiliyatiga ega vibroizolyatsiyalangan monolit poydevorlar",
              "3T MRT uchun mis radiochastota ekranlovchi kabinalari (Faraday-Käfig)",
              "Po'lat plitalar bilan magnit ekranlash (5 Gauss chizig'ini cheklash)",
              "Geliyni favqulodda chiqarib yuborish uchun katta diametrli zanglamaydigan kvanch quvurlari",
              "KT va rentgen uchun devorlar, eshiklar va kuzatuv oynalarining qo'rg'oshinli himoyasi (DIN 6812)",
              "Avtonom aniq sovitish va uzluksiz elektr ta'minoti (UPS) tizimlari",
            ]
          : isRu
          ? [
              "Виброизолированные монолитные фундаменты с несущей способностью свыше 10 т",
              "Медные радиочастотные экранирующие кабины (Faraday-Käfig) для МРТ 3T",
              "Магнитная экранировка стальными листами (ограничение линии 5 Гаусс)",
              "Нержавеющие квенч-трубы большого диаметра для аварийного отвода гелия",
              "Свинцовая защита стен, дверей и смотровых стекол для КТ и рентгена (DIN 6812)",
              "Автономные системы прецизионного охлаждения и бесперебойного питания (ИБП)",
            ]
          : isEn
          ? [
              "Vibration-decoupled reinforced concrete foundations supporting 10–15 ton static loads",
              "High-attenuation copper Faraday RF shielding enclosures for 3T MRI",
              "Silicon steel flux magnetic shielding containing the 5-Gauss exclusion zone",
              "Stainless steel emergency helium quench conduits routed safely above roof level",
              "Lead-lined partition walls, leaded doors, and lead glass windows (DIN 6812)",
              "Dedicated chilled water loops and redundant uninterruptible power supplies (UPS)",
            ]
          : isTr
          ? [
              "MRG görüntülerinde paraziti önleyen harici sarsıntılardan arındırılmış titreşim yalıtımlı temeller",
              "Tam HF sönümlemesi sağlayan yüksek saflıkta bakırdan imal edilmiş Faraday kafesleri",
              "5 Gauss güvenlik sınırına uyumu sağlayan manyetik kaçak akı ekranlama levhaları",
              "Acil durumda helyumun güvenle atmosfere tahliyesi için paslanmaz çelik gaz sızdırmaz quench boruları",
              "BT ve röntgen odaları için DIN 6812 standardında kurşun eşdeğerli yapısal radyasyon kalkanları",
              "Helyum kompresörleri için yedekli soğutma suyu hatları ve %100 kesintisiz güç kaynağı (UPS)",
            ]
          : isAr
          ? [
              "قواعد خرسانية مسلحة معزولة عن الاهتزازات الخارجية لمنع التشويش على صور الرنين",
              "أقفاص فاراداي نحاسية عالية التخميد لحجب الترددات اللاسلكية بالكامل لأجهزة 3T",
              "تدريع صفائح فولاذية مغناطيسية لحصر خط الأمان المغناطيسي 5 غاوس",
              "أنابيب تفريغ الهيليوم الطارئ محكمة الغاز من الفولاذ المقاوم للصدأ لسطح المبنى",
              "تدريع إشعاعي رصاصي مكافئ لمعايير DIN 6812 لجدران وأبواب وزجاج الأشعة المقطعية",
              "دوائر مياه مبردة احتياطية لضواغط الهيليوم وتغذية كهربائية غير منقطعة 100% (UPS)",
            ]
          : [
              "Schwingungsentkoppelte Fundamente zur Vermeidung externer Erschütterungen auf MRT-Bilder",
              "Hochfrequenz-Schirmkabinen (Faraday-Käfige) aus Kupfer zur vollständigen HF-Dämpfung",
              "Magnetische Streufeldabschirmung zur Einhaltung der 5-Gauss-Sicherheitsgrenze",
              "Gasdichte Quenchrohrleitungen aus Edelstahl zur sicheren Heliumableitung ins Freie",
              "Baulicher Strahlenschutz mit Bleigleichwerten nach DIN 6812 für CT und Röntgenräume",
              "Redundante Kaltwasserversorgungen für die Heliumkompressoren und 100% USV-Pufferung",
            ],
        scopeTitle: isUz
          ? "To'liq amalga oshirish majmuasi"
          : isRu
          ? "Комплекс работ"
          : isEn
          ? "Turnkey Execution"
          : isTr
          ? "Proje Yürütme Kapsamı"
          : isAr
          ? "مراحل تنفيذ المشروع"
          : "Projektabwicklung",
        scopeItems: isUz
          ? [
              "Loyihalashdan oldin uchastkada tebranish va elektromagnit o'lchovlar o'tkazish",
              "Konstruktiv yechimlarni tomograf ishlab chiqaruvchilari (Siemens, GE, Philips) bilan kelishish",
              "Tibbiy fiziklar bilan birgalikda radiatsion himoyani hisoblash va loyihalash",
              "Ekranlashni o'rnatish va qabul sinovlarini o'tkazish (TÜV)",
              "Magnit va uskunalarni olib kirish uchun montaj tuynuklarini ta'minlash",
            ]
          : isRu
          ? [
              "Вибрационные и электромагнитные замеры на участке перед началом проектирования",
              "Согласование конструктивных решений с производителями томографов (Siemens, GE, Philips)",
              "Расчет и проектирование радиационной защиты совместно с медицинскими физиками",
              "Монтаж экранирования и проведение приемочных испытаний (TÜV)",
              "Обеспечение монтажных проемов для заноса магнита и оборудования",
            ]
          : isEn
          ? [
              "Pre-construction vibration and ambient electromagnetic site surveys",
              "Direct design alignment with imaging equipment manufacturers (Siemens, GE, Philips)",
              "Radiation shielding calculations verified by licensed medical physicists",
              "Precision shielding construction, installation of RF doors, and TÜV certification",
              "Planning heavy equipment delivery paths and facade knock-out access openings",
            ]
          : isTr
          ? [
              "Saha ölçümü: Çevresel manyetik alan ölçümleri ve titreşim analizlerinin yapılması",
              "Bina planlarının tıbbi cihaz üreticileriyle (Siemens, GE, Philips) koordinasyonu",
              "Sertifikalı Medikal Fizik Uzmanları tarafından radyasyondan korunma hesaplamaları",
              "HF kabininin anahtar teslim montajı ve resmi TÜV bina kabulünün sağlanması",
              "Büyük mıknatısların binaya alınması için cephe ve çatıda geçici montaj boşluklarının planlanması",
            ]
          : isAr
          ? [
              "مسوحات الموقع الإنشائية: قياس المجالات الكهرومغناطيسية والاهتزازات البيئية",
              "التنسيق المباشر لمخططات المبنى مع كبرى الشركات المصنعة (Siemens, GE, Philips)",
              "حسابات التدريع الإشعاعي المعتمدة من خبراء الفيزياء الطبية المرخصين",
              "تركيب أقفاص الترددات اللاسلكية تسليم مفتاح ومرافقة الفحص النهائي المعتمد (TÜV)",
              "تخطيط مسارات الإدخال وفتحات واجهات المبنى المؤقتة لإدخال المغانط الضخمة بأمان",
            ]
          : [
              "Standortvermessung: Umgebungs-Magnetfeldmessungen und Erschütterungsanalysen",
              "Abstimmung der Gebäudepläne mit Geräteherstellern (Siemens, GE, Philips)",
              "Strahlenschutzberechnungen durch zertifizierte Medizinphysik-Experten",
              "Schlüsselfertige Montage der HF-Kabine und Begleitung der TÜV-Bauabnahme",
              "Planung temporärer Einbringöffnungen in Fassade und Dach für Großmagneten",
            ],
        technicalTitle: isUz
          ? "Xavfsizlik standartlari"
          : isRu
          ? "Стандарты безопасности"
          : isEn
          ? "Safety Codes"
          : isTr
          ? "Yasal Yönergeler"
          : isAr
          ? "الأطر واللوائح القانونية"
          : "Gesetzliche Vorgaben",
        technicalText: isUz
          ? "Strahlenschutzgesetz (StrlSchG), Strahlenschutzverordnung (StrlSchV) va DIN 6812 standarti."
          : isRu
          ? "Strahlenschutzgesetz (StrlSchG), Strahlenschutzverordnung (StrlSchV) и стандарт DIN 6812."
          : isEn
          ? "German Radiation Protection Act (StrlSchG), Radiation Ordinance (StrlSchV), and DIN 6812."
          : isTr
          ? "Radyasyondan Korunma Kanunu (StrlSchG), Radyasyondan Korunma Yönetmeliği (StrlSchV) ve DIN 6812 (Tıbbi Röntgen Tesisleri)."
          : isAr
          ? "قانون الوقاية من الإشعاع الألماني (StrlSchG)، ولائحة الحماية الإشعاعية (StrlSchV)، ومعيار DIN 6812."
          : "Strahlenschutzgesetz (StrlSchG), Strahlenschutzverordnung (StrlSchV) sowie DIN 6812 (Medizinische Röntgenanlagen).",
        legalTitle: isUz
          ? "Foydalanish tartibi"
          : isRu
          ? "Эксплуатация"
          : isEn
          ? "Operational Model"
          : isTr
          ? "İşletmeci Anlaşması"
          : isAr
          ? "نموذج التشغيل والتعاقد"
          : "Betreibervereinbarung",
        legalText: isUz
          ? "NabiOta Real Estate barcha ruxsatnomalarga ega to'liq tayyor xonalarni taqdim etadi, asbob-uskunalar operatori esa NabiOta Diagnostics GmbH hisoblanadi."
          : isRu
          ? "NabiOta Real Estate сдает полностью подготовленные помещения с допусками, а оператором оборудования выступает NabiOta Diagnostics GmbH."
          : isEn
          ? "NabiOta Real Estate provides turnkey, pre-certified infrastructure leased to NabiOta Diagnostics GmbH."
          : isTr
          ? "Anahtar teslim mekanların tahsisi, NabiOta Diagnostics GmbH veya harici radyoloji ortaklıklarına uzun vadeli kira sözleşmeleri kapsamında yapılır."
          : isAr
          ? "يتم تسليم المساحات المجهزة تسليم مفتاح عبر عقود إيجار طويلة الأجل لشركة NabiOta Diagnostics GmbH أو الشركاء المستقلين."
          : "Die Bereitstellung der schlüsselfertigen Räume erfolgt im Rahmen langfristiger Mietverträge an die NabiOta Diagnostics GmbH oder externe radiologische Gemeinschaftspraxen.",
        ctaButtonText: isUz
          ? "Radiologiya bo'yicha maslahat"
          : isRu
          ? "Консультация по радиологии"
          : isEn
          ? "Inquire Radiology Facility"
          : isTr
          ? "Tanı Alanları İçin Danışın"
          : isAr
          ? "طلب مساحات لمراكز الأشعة والتشخيص"
          : "Diagnostikflächen anfragen",
      },
    },
    {
      id: "reha-therapie",
      badge: isUz
        ? "REABILITATSIYA VA SPORT"
        : isRu
        ? "РЕАБИЛИТАЦИЯ И СПОРТ"
        : isEn
        ? "REHABILITATION"
        : isTr
        ? "REHABİLİTASYON VE SPOR"
        : isAr
        ? "التأهيل والعلاج الرياضي"
        : "REHA & SPORTTHERAPIE",
      image: "/images/beratung/project-reha.webp",
      iconType: "heartpulse",
      title: isUz
        ? "Reabilitatsiya va terapiya markazlari"
        : isRu
        ? "Реабилитационные & Терапевтические центры"
        : isEn
        ? "Rehabilitation & Physical Therapy Centers"
        : isTr
        ? "Rehabilitasyon & Terapi Tesisleri"
        : isAr
        ? "مراكز التأهيل والعلاج الطبيعي"
        : "Rehabilitations- & Therapieeinrichtungen",
      shortDesc: isUz
        ? "Davolovchi jismoniy tarbiya zallari, trenajyor parklari (MTT), gidroterapiya havzalari va ergoterapiya xonalari."
        : isRu
        ? "Специализированные залы лечебной физкультуры, тренажерные парки (MTT), гидротерапевтические бассейны и кабинеты эрготерапии."
        : isEn
        ? "Specialized physical therapy suites, Medical Training Therapy (MTT) gym floors, hydrotherapy pools, and occupational rooms."
        : isTr
        ? "Fizyoterapi, MTT tıbbi antrenman alanları, hidroterapi havuzları ve engelsiz terapi odaları için özel tasarlanmış alanlar."
        : isAr
        ? "مساحات متخصصة للعلاج الطبيعي، صالات التدريب الطبي (MTT)، أحواض العلاج المائي، وغرف علاج مهيأة بالكامل."
        : "Spezialflächen für Krankengymnastik, MTT-Geräteparks, Bewegungsbäder und barrierefreie Behandlungsräume.",
      modal: {
        title: isUz
          ? "Reabilitatsiya va terapiya markazlari"
          : isRu
          ? "Реабилитационные & Терапевтические центры"
          : isEn
          ? "Outpatient Rehabilitation & Therapy Infrastructure"
          : isTr
          ? "Rehabilitasyon ve Terapi Merkezleri (§ 125 SGB V Uyumlu)"
          : isAr
          ? "مراكز التأهيل والعلاج الطبيعي (وفق § 125 SGB V)"
          : "Rehabilitations- & Therapieeinrichtungen (nach § 125 SGB V)",
        subtitle: isUz
          ? "Harakatlanish, kuchni tiklash va faol hayotga qaytish uchun maydonlar"
          : isRu
          ? "Пространства для движения, восстановления сил и возвращения к активной жизни"
          : isEn
          ? "Specialized spaces engineered for functional movement, aquatic therapy, and restorative care"
          : isTr
          ? "Bütüncül tıbbi tedavi ve mobilizasyon için fonksiyonel sağlık mimarisi"
          : isAr
          ? "عمارة وظيفية للعلاج الشامل واستعادة القدرة الحركية"
          : "Funktionale Architektur für ganzheitliche Heilmitteltherapie und Mobilisation",
        description: isUz
          ? "Ambulator reabilitatsiya tibbiy muolaja xonalari, keng tibbiy mashg'ulot maydonlari (MTT) va gidroterapiya zonalari o'rtasidagi uyg'unlikni talab qiladi. Biz davlat tibbiy sug'urtasi (GKV) va Germaniya pensiya sug'urtasi (DRV) litsenziyalash mezonlariga to'liq javob beradigan terapevtik maydonlarni loyihalashtiramiz va quramiz."
          : isRu
          ? "Амбулаторная реабилитация требует баланса между медицинскими процедурными кабинетами, просторными тренировочными залами и зонами водной терапии. Мы создаем терапевтические пространства, строго соответствующие критериям допуска больничных касс (GKV) и пенсионного страхования (DRV)."
          : isEn
          ? "Outpatient rehabilitation centers combine private clinical therapy rooms with expansive training gym floors and aquatic hydrotherapy facilities. We engineer spaces meeting the exacting licensing specifications of German statutory insurers (GKV) and pension funds (DRV)."
          : isTr
          ? "Ayakta rehabilitasyon merkezleri; bireysel fizyoterapi kabinlerini, Tıbbi Antrenman Terapisi (MTT) alanlarını ve hidroterapi uygulamalarını bir araya getirir. Yasal sağlık sigortaları (GKV) ve Alman Emeklilik Sigortası (DRV) ruhsatlandırma standartlarına tam uyumlu alanlar planlıyoruz."
          : isAr
          ? "تجمع مراكز التأهيل الخارجية بين غرف العلاج الطبيعي الفردي، صالات التدريب العلاجي الطبي (MTT)، وتطبيقات العلاج المائي. نخطط مساحات تتطابق بدقة مع متطلبات الترخيص لصناديق التأمين الصحي القانوني (GKV) وهيئة التأمين التقاعدي الألمانية (DRV)."
          : "Ambulante Rehabilitationszentren verbinden physiotherapeutische Einzelbehandlung, Medizinische Trainingstherapie (MTT) und hydrotherapeutische Anwendungen. Wir planen Flächen, die den Anforderungen der gesetzlichen Krankenkassen (GKV-Spitzenverband) und der Deutschen Rentenversicherung (DRV) exakt entsprechen.",
        specificationsTitle: isUz
          ? "Jihozlanish va funksional zonalar"
          : isRu
          ? "Оснащение и зоны"
          : isEn
          ? "Facility Scope"
          : isTr
          ? "Mekan Programı ve Yapı Standartları"
          : isAr
          ? "المخطط المساحي والمتطلبات الإنشائية"
          : "Raumprogramm & Bauanforderungen",
        specifications: isUz
          ? [
              "Elastik amortizatsiyalovchi pol qoplamasiga ega keng MTT mashg'ulot zallari",
              "32–34°C gacha isitiladigan va ko'targichlar bilan jihozlangan gidroterapiya havzalari",
              "Fizio-, ergo- va logopediya uchun individual tovush o'tkazmaydigan xonalar",
              "Nogironlar aravachalari uchun to'siqsiz yechinish xonalari, dushlar va sanuzellar",
              "Basseyn zonasida issiqlik rekuperatsiyasi va havoni quritishga ega ventilatsiya qurilmalari",
              "Bemorlarning xavfsiz yurishi uchun keng yo'laklar va devor tutqichlari",
            ]
          : isRu
          ? [
              "Просторные тренировочные залы MTT с упругими амортизирующими полами",
              "Гидротерапевтические бассейны с подогревом до 32–34°C и подъемниками",
              "Индивидуальные звукоизолированные кабинеты для физио-, эрго- и логопедии",
              "Безбарьерные раздевалки, душевые и санитарные узлы для инвалидных колясок",
              "Вентиляционные установки с рекуперацией тепла и осушением воздуха в зоне бассейна",
              "Широкие коридоры и поручни для безопасного передвижения пациентов",
            ]
          : isEn
          ? [
              "Column-free MTT medical training gym floors with point-elastic sports flooring",
              "Hydrotherapy exercise pools heated to 32–34°C featuring disabled hoist lifters",
              "Acoustically isolated private suites for physiotherapy, occupational therapy, and speech therapy",
              "Spacious, barrier-free locker rooms, accessible roll-in showers, and ADA restrooms",
              "Specialized humidity-controlled HVAC systems with heat recovery for pool halls",
              "Continuous corridor handrails and tactile guides for safe post-surgical walking",
            ]
          : isTr
          ? [
              "MTT için nokta elastik spor zemin kaplamalı, kolonsuz ferah antrenman salonları",
              "32–34°C su sıcaklığına ve tavan vinçlerine sahip hidroterapi egzersiz havuzları",
              "Manuel terapi, ergoterapi ve konuşma terapisi için ses yalıtımlı bağımsız tedavi kabinleri",
              "Tekerlekli sandalyeye uygun duşlar, kilitli dolaplar ve engelsiz WC'lere sahip geniş soyunma alanları",
              "Islak hacimler için ısı geri kazanımlı ve nem alıcılı özel havalandırma sistemleri (VDI 2089)",
              "Yürüme güçlüğü çeken hastalar için geniş sirkülasyon koridorları ve kesintisiz tutunma barları",
            ]
          : isAr
          ? [
              "صالات تدريب رحبة خالية من الأعمدة بأرضيات رياضية مرنة لتمارين العلاج الطبي (MTT)",
              "أحواض علاج مائي بدرجات حرارة 32-34 درجة مئوية مزودة برافعات سقفية للمرضى",
              "كبائن علاج فردية معزولة صوتياً للعلاج اليدوي، العلاج الوظيفي، وعلاج النطق",
              "غرف تبديل واسعة مزودة بحمامات مهيأة بالكامل لكراسي المقعدين وخزائن مدمجة",
              "أنظمة تهوية متخصصة لاسترداد الحرارة وسحب الرطوبة للمناطق الرطبة (VDI 2089)",
              "مسارات حركة واسعة مع مقابض استناد جدارية متواصلة للمرضى ذوي الصعوبات الحركية",
            ]
          : [
              "Großzügige, stützenarme Trainingslandschaften mit punktelastischen Sportböden für MTT",
              "Hydrotherapeutische Therapiebecken mit Wassertemperaturen bis 32–34°C und Deckenliftern",
              "Akustisch gedämpfte Einzelbehandlungskabinen für Manuelle Therapie, Ergotherapie und Logopädie",
              "Großraumumkleiden mit rollstuhlgerechten Duschen, Spindsystemen und Pflege-WCs",
              "Spezielle Lüftungsanlagen mit Wärmerückgewinnung und Entfeuchtung für Nassbereiche (VDI 2089)",
              "Breite Verkehrswege und durchgehende Handläufe für gehbehinderte Patienten",
            ],
        scopeTitle: isUz
          ? "Ob'ektni to'liq ishlab chiqish"
          : isRu
          ? "Девелопмент объекта"
          : isEn
          ? "Development Phase"
          : isTr
          ? "NabiOta Real Estate Hizmet Kapsamı"
          : isAr
          ? "نطاق خدمات NabiOta Real Estate"
          : "Leistungen von NabiOta Real Estate",
        scopeItems: isUz
          ? [
              "NabiOta Reha reabilitologlari bilan birgalikda konsepsiyani ishlab chiqish",
              "Basseyn kosasi, suvni filtrlash va dezinfeksiya qilish tizimlarini loyihalash",
              "Sport trenajyorlarining qo'shni xonalardan shovqin va tebranish izolyatsiyasini ta'minlash",
              "Xonalarni tibbiy sug'urtaga ruxsat berish komissiyalari bilan muvofiqlashtirish",
              "Obyekt ekspluatatsiyasini boshqarish va energiya sarfini nazorat qilish",
            ]
          : isRu
          ? [
              "Разработка концепции совместно с реабилитологами NabiOta Reha",
              "Проектирование чаши бассейна, систем фильтрации и дезинфекции воды",
              "Обеспечение шумо- и виброизоляции спортивных тренажеров от соседних помещений",
              "Согласование помещений с комиссиями по допуску к медицинскому страхованию",
              "Управление эксплуатацией и контроль энергопотребления объекта",
            ]
          : isEn
          ? [
              "Concept design in close partnership with NabiOta Rehabilitation clinicians",
              "Structural design of in-ground pool basins, water treatment, and disinfection filtration",
              "Acoustic impact noise isolation decoupling heavy weight machines from building frame",
              "Official licensing inspections with statutory health insurance carrier associations",
              "Energy-efficient facility management reducing heating costs in high-consumption wet areas",
            ]
          : isTr
          ? [
              "NabiOta Reha terapistleri ve uzmanlarıyla yakın koordinasyon içinde konsept geliştirme",
              "Havuz teknolojisi, su arıtma ve taşma savaklarının mühendislik planlaması",
              "Antrenman alanlarının komşu mekanlara karşı darbe ve yapı sesi yalıtımı",
              "§ 125 SGB V uyarınca yasal sağlık sigortası ruhsatlandırma kabulünün hazırlanması",
              "Sürdürülebilir teknik tesis yönetimi ve enerji tüketim optimizasyonu",
            ]
          : isAr
          ? [
              "تطوير المفهوم بالتنسيق الوثيق مع معالجي وأخصائيي NabiOta Reha",
              "التخطيط الهندسي المتخصص لتقنيات المسابح ومعالجة المياه وقنوات الفائض",
              "عزل صوت الارتطام والاهتزازات الهيكلية لصالات التدريب عن المساحات المجاورة",
              "إعداد وإنجاز إجراءات الترخيص والاعتماد التأميني وفق § 125 SGB V",
              "إدارة تشغيلية وفنية مستدامة للمرافق وتحسين استهلاك الطاقة",
            ]
          : [
              "Konzeptentwicklung in enger Abstimmung mit den Therapeuten der NabiOta Reha",
              "Fachplanung der Schwimmbadtechnik, Wasseraufbereitung und Überlaufrinnen",
              "Trittschall- und Körperschallentkopplung der Trainingsflächen gegenüber Nachbarn",
              "Vorbereitung der Kassenzulassungsabnahme nach § 125 SGB V",
              "Nachhaltiges technisches Facility Management und energetische Optimierung",
            ],
        technicalTitle: isUz
          ? "Me'yorlar"
          : isRu
          ? "Нормативы"
          : isEn
          ? "Codes & Guidelines"
          : isTr
          ? "Standartlar ve Normlar"
          : isAr
          ? "المعايير المعتمدة"
          : "Standards",
        technicalText: isUz
          ? "Davolash muassasalariga GKV-Spitzenverband talablari, VDI 2089 (basseynlar) va DIN 18040-1."
          : isRu
          ? "Требования GKV-Spitzenverband к лечебным учреждениям, VDI 2089 (бассейны) и DIN 18040-1."
          : isEn
          ? "GKV outpatient rehabilitation guidelines, VDI 2089 (pool ventilation), and DIN 18040-1."
          : isTr
          ? "Tedavi sağlayıcıları için GKV ruhsat kılavuzları, VDI 2089 (Yüzme Havuzları) ve DIN 18040-1."
          : isAr
          ? "إرشادات GKV لاعتماد مقدمي العلاج، معيار VDI 2089 (أحواض السباحة) وDIN 18040-1."
          : "GKV-Zulassungsempfehlungen für Heilmittelerbringer, VDI 2089 (Schwimmbäder) und DIN 18040-1.",
        legalTitle: isUz
          ? "Hamkorlik shakli"
          : isRu
          ? "Форма сотрудничества"
          : isEn
          ? "Leasing Structure"
          : isTr
          ? "İşletmeci Ortaklığı Modeli"
          : isAr
          ? "شراكة التشغيل ونموذج التأجير"
          : "Betreiberpartnerschaft",
        legalText: isUz
          ? "Ijarachi sifatida NabiOta Rehabilitation & Therapy GmbH yoki hamkor reabilitatsiya klinikalari ishtirok etadi."
          : isRu
          ? "Арендаторами выступают NabiOta Rehabilitation & Therapy GmbH либо партнерские реабилитационные клиники."
          : isEn
          ? "Facilities are leased to NabiOta Rehabilitation & Therapy GmbH or accredited partner therapy clinics."
          : isTr
          ? "Kiralama, NabiOta Rehabilitation & Therapy GmbH'ye veya akredite ortak rehabilitasyon işletmecilerine yapılır."
          : isAr
          ? "يتم تأجير المرافق لشركة NabiOta Rehabilitation & Therapy GmbH أو لمشغلي مراكز التأهيل الشركاء."
          : "Die Vermietung erfolgt an die NabiOta Rehabilitation & Therapy GmbH oder kooperierende Reha-Betreiber.",
        ctaButtonText: isUz
          ? "Reabilitatsiya loyihasini so'rash"
          : isRu
          ? "Запросить проект реабилитации"
          : isEn
          ? "Inquire Rehab Project"
          : isTr
          ? "Rehabilitasyon Alanları İçin Danışın"
          : isAr
          ? "طلب مساحات لمراكز التأهيل والعلاج"
          : "Rehaflächen anfragen",
      },
    },
    {
      id: "pflege-wohnen",
      badge: isUz
        ? "PARVARISH VA KEKSALAR"
        : isRu
        ? "УХОД И СЕНИОРЫ"
        : isEn
        ? "SENIOR LIVING"
        : isTr
        ? "BAKIM VE YAŞLI YAŞAMI"
        : isAr
        ? "الرعاية السكنية ومساكن كبار السن"
        : "PFLEGE & SENIORENRESIDENZEN",
      image: "/images/beratung/project-pflege.webp",
      iconType: "heart",
      title: isUz
        ? "Parvarish uylari va to'siqsiz qarorgohlar"
        : isRu
        ? "Дома ухода & Безбарьерные резиденции"
        : isEn
        ? "Nursing Homes & Barrier-Free Senior Living"
        : isTr
        ? "Bakım Tesisleri & Engelsiz Konut Formları"
        : isAr
        ? "دور الرعاية ومجمعات السكن المهيأة للمسنين"
        : "Pflegeeinrichtungen & Barrierefreie Wohnformen",
      shortDesc: isUz
        ? "DIN 18040-2 standarti bo'yicha yashash va patronaj majmualari: oilaviy guruhlar formati, sensor bog'lar va qulay muhit."
        : isRu
        ? "Жилые и патронажные комплексы по стандарту DIN 18040-2: формат семейных групп, сенсорные сады и уютная среда для пожилых."
        : isEn
        ? "Senior residential care complexes per DIN 18040-2: family-style care communities, memory gardens, and supportive elderly environments."
        : isTr
        ? "Aile topluluğu konseptleri, demans bahçeleri ve engelsiz dairelerle DIN 18040-2 standardında konut ve bakım mülkleri."
        : isAr
        ? "عقارات سكنية ورعائية وفق DIN 18040-2 بمفاهيم المجموعات العائلية وحدائق رعاية الخرف وشقق خالية تماماً من العوائق."
        : "Wohn- und Pflegeimmobilien nach DIN 18040-2 mit Hausgemeinschaftskonzepten, Demenzgärten und barrierefreien Appartements.",
      modal: {
        title: isUz
          ? "Parvarish uylari, kunduzgi statsionarlar va keksalar uchun servisli turar joylar"
          : isRu
          ? "Дома ухода, дневные стационары и сервисное жилье для пожилых"
          : isEn
          ? "Nursing Homes, Day-Care Centers & Assisted Living Residences"
          : isTr
          ? "Bakım Merkezleri, Gündüz Bakımı & Destekli Yaşam (WTG Uyumlu)"
          : isAr
          ? "مؤسسات الرعاية التمريضية والرعاية النهارية والسكن المدعوم (متوافقة مع WTG)"
          : "Pflegeeinrichtungen, Tagespflegen & Servicewohnen (WTG-konform)",
        subtitle: isUz
          ? "Uy sharoitidagi qulaylik, xavfsizlik va funksional patronaj infratuzilmasi"
          : isRu
          ? "Домашний уют, безопасность и функциональная патронажная инфраструктура"
          : isEn
          ? "Homelike warmth, safety, and specialized ergonomic infrastructure for seniors"
          : isTr
          ? "Yaşlılıkta ev sıcaklığında huzur ve işlevsel bakım altyapısı"
          : isAr
          ? "أجواء أسرية دافئة وبنية تحتية وظيفية متطورة لرعاية كبار السن"
          : "Wohnliche Geborgenheit und funktionale Pflegeinfrastruktur im Alter",
        description: isUz
          ? "Keksa yoshdagi insonlar uchun zamonaviy arxitektura uy sharoitidagi qulaylikni eng qat'iy sanitariya-gigiyena me'yorlari, yiqilishdan himoyalanish va xodimlar uchun ergonomik qulaylik bilan birlashtiradi. Biz WTG NRW qonuniga muvofiq kunduzgi parvarish rezidentsiyalari, ko'maklashuvchi xonadonlar va ixtisoslashtirilgan statsionar muassasalarni barpo etamiz."
          : isRu
          ? "Современная архитектура для пожилых людей сочетает домашний уют с самыми строгими санитарно-гигиеническими нормами, защитой от падений и удобством для персонала. Мы проектируем резиденции для дневного пребывания, квартиры с уходом и стационарные дома престарелых по закону WTG NRW."
          : isEn
          ? "Modern architecture for senior living blends residential comfort with clinical infection prevention, fall prevention technologies, and ergonomic caregiver workspaces. We develop day-care hubs, assisted living communities, and specialized memory care facilities."
          : isTr
          ? "Modern bakım mimarisi; konforlu ve sıcak bir aile ortamını hijyen, yangın koruması ve personeli rahatlatan ergonomik çözümlerle harmanlar. Müstakil gündüz bakımevleri, ayakta bakım ortak yaşam grupları ve eyalet huzurevi kanunlarına (WTG NRW) uygun yatarak bakım tesisleri geliştiriyoruz."
          : isAr
          ? "تجمع عمارة الرعاية الحديثة بين الدفء الأسري والمتطلبات الصارمة لنظافة الرعاية التمريضية والحماية من الحرائق وتخفيف العبء عن الطواقم. نطور مراكز رعاية نهارية مستقلة، ومجموعات سكنية تمريضية، ودور رعاية إيوائية مطابقة لقوانين دور الرعاية الولائية (WTG NRW)."
          : "Moderne Pflegearchitektur verbindet ein behagliches, familiäres Wohnambiente mit den hochkomplexen Anforderungen an Pflegehygiene, Brandschutz und Entlastung des Personals. Wir entwickeln Einrichtungen für solitäre Tagespflegen, ambulante Wohngemeinschaften und stationäre Pflege nach Landesheimgesetz.",
        specificationsTitle: isUz
          ? "Rejalashtirish xususiyatlari va xavfsizlik"
          : isRu
          ? "Особенности планировки"
          : isEn
          ? "Design Elements"
          : isTr
          ? "Mimari ve Yaşam Konforu Konseptleri"
          : isAr
          ? "المفاهيم المعمارية ومعايير الراحة"
          : "Architektur & Wohlfühlkonzepte",
        specifications: isUz
          ? [
              "Individual vanna xonalariga ega 100% bir kishilik xonalar (DIN 18040-2 R)",
              "Ochiq oshxona-mehmonxonalarga ega kichik oilaviy guruhlar formati",
              "Demensiyali bemorlar uchun o'ralgan sensor bog'lar va aylanma sayr yo'laklari",
              "Navbatchi hamshiralar postlari, toza va ishlatilgan asboblar muolaja xonalari",
              "Tungi vaqtda xavfsiz harakatlanish uchun polning avtomatik yoritilishi",
              "DIN VDE 0834 standarti bo'yicha tibbiy xodimlarni chaqirishning integratsiyalashgan tizimi",
            ]
          : isRu
          ? [
              "100% одноместные комнаты с индивидуальными ванными комнатами (DIN 18040-2 R)",
              "Формат малых домашних групп с открытыми кухнями-гостиными",
              "Огороженные сенсорные сады и кольцевые маршруты прогулок для пациентов с деменцией",
              "Посты дежурных медсестер, чистые и грязные процедурные комнаты",
              "Автоматическая подсветка пола для безопасного передвижения в ночное время",
              "Интегрированная система вызова медперсонала по стандарту DIN VDE 0834",
            ]
          : isEn
          ? [
              "100% single resident suites with private roll-in ADA bathrooms (DIN 18040-2 R)",
              "Small domestic cluster model with communal open kitchens and living lounges",
              "Secure sensory memory gardens with circular loop pathways for residents with dementia",
              "Ergonomic nurse stations, separate clean and soiled utility utility rooms",
              "Automated floor-level night lights reducing nocturnal disorientation and fall risks",
              "Full integration of digital emergency nurse-call systems per DIN VDE 0834",
            ]
          : isTr
          ? [
              "DIN 18040-2 R standardında tekerlekli sandalyeye uygun özel banyolu engelsiz tek kişilik odalar",
              "Günlük ortak aktiviteler için açık mutfaklı oturma ve yemek alanları",
              "Demans hastaları için özel korumalı duyu bahçeleri ve dairesel yürüyüş konseptleri",
              "İşlevsel bakım istasyonları, temiz/kirli ayrılmış çalışma odaları ve çamaşır depoları",
              "Gece düşmelerini önlemek amacıyla otomatik ışıklı zemin yönlendirme sistemleri",
              "DIN VDE 0834 standardında entegre Wi-Fi ve dijital hemşire çağrı sistemleri ağı",
            ]
          : isAr
          ? [
              "غرف فردية مهيأة بالكامل خالية من العوائق بحمام خاص للكراسي المتحركة وفق DIN 18040-2 R",
              "مساحات معيشة وطعام مفتوحة بمطابخ عائلية للأنشطة والروتين اليومي المنظم",
              "حدائق حسية محمية ومسارات دائرية مغلقة مخصصة لمرضى الزهايمر والخرف",
              "نقاط تمريض وظيفية، غرف عمل مخصصة (نظيفة/غير نظيفة) ومستودعات بياضات",
              "أنظمة إضاءة أرضية إرشادية تلقائية للوقاية من السقوط أثناء الليل",
              "شبكة اتصالات متكاملة للنداء التمريض والـ Wi-Fi وفق معيار DIN VDE 0834",
            ]
          : [
              "Barrierefreie Einzelzimmer mit eigenem rollstuhlgerechtem Bad nach DIN 18040-2 R",
              "Offene Wohn- und Essbereiche mit Wohnküchen für tagesstrukturierende Aktivitäten",
              "Geschützte Sinnesgärten und Rundlauf-Konzepte für Menschen mit Demenz",
              "Funktionale Pflegestützpunkte, Pflegearbeitsräume (unrein/rein) und Wäschedepots",
              "Automatische Lichtleitsysteme zur Sturzprophylaxe in der Nacht",
              "Vollständige WLAN- und Schwesternrufanlagenvernetzung nach DIN VDE 0834",
            ],
        scopeTitle: isUz
          ? "Loyiha amalga oshirish ko'lami"
          : isRu
          ? "Объем реализации"
          : isEn
          ? "Project Scope"
          : isTr
          ? "NabiOta Real Estate Hizmet Kapsamı"
          : isAr
          ? "نطاق خدمات NabiOta Real Estate"
          : "Leistungsumfang NabiOta Real Estate",
        scopeItems: isUz
          ? [
              "Tanlangan hududda demografiya va parvarish o'rinlari taqchilligini tahlil qilish",
              "WTG NRW me'yorlariga muvofiq obyekt konsepsiyasini ishlab chiqish",
              "Rivojlanish banklari (KfW, NRW.BANK) orqali subsidiyalar va imtiyozli kreditlarni kelishish",
              "To'liq pardozlash va o'rnatma mebellar yetkazib berish bilan kalit ostida qurish",
              "NabiOta HomeCare GmbH yoki mintaqaviy operatorlar bilan hamkorlikni tashkil etish",
            ]
          : isRu
          ? [
              "Анализ демографии и дефицита мест ухода в выбранном районе",
              "Разработка концепции объекта в соответствии с нормами WTG NRW",
              "Согласование субсидий и льготного кредитования через банки развития (KfW, NRW.BANK)",
              "Строительство под ключ с чистовой отделкой и поставкой встроенной мебели",
              "Организация партнерства с NabiOta HomeCare GmbH или региональными операторами",
            ]
          : isEn
          ? [
              "Demographic analysis and local care bed supply-demand assessments",
              "Architectural concept design fully compliant with regional WTG care home statutes",
              "Procurement of public green development subsidies and low-interest loans (KfW, NRW.BANK)",
              "Turnkey general construction including full interior fitting and built-in joinery",
              "Structuring long-term operational partnerships with NabiOta HomeCare or third-party operators",
            ]
          : isTr
          ? [
              "Demografik konum analizi ve bölgesel bakım yeri ihtiyacının belirlenmesi",
              "Huzurevi denetim makamlarıyla WTG uyumlu mimari proje ve ruhsatlandırma planlaması",
              "Sürdürülebilir yapılar için kamu teşviklerinin ve avantajlı KfW kredilerinin entegrasyonu",
              "Sabit donanımlar, bakım banyoları ve peyzaj dahil anahtar teslim inşaat",
              "NabiOta HomeCare GmbH veya saygın sosyal yardım kuruluşlarıyla işletme işbirliği",
            ]
          : isAr
          ? [
              "تحليل ديموغرافي للموقع وتحديد الاحتياج الفعلي لأسِرّة الرعاية التمريضية",
              "تصاميم معمارية وترخيصية مطابقة تماماً لقوانين هيئة الرقابة على دور الرعاية (WTG)",
              "توفير الدعم المالي الحكومي وقروض بنك التنمية الألماني (KfW) الميسرة للأبنية المستدامة",
              "تنفيذ إنشائي تسليم مفتاح يشمل التجهيزات الثابتة وحمامات الرعاية والحدائق الخارجية",
              "شراكات تشغيلية مع NabiOta HomeCare GmbH أو كبرى الهيئات الخيرية الرعائية",
            ]
          : [
              "Demografische Standortanalyse und Ermittlung des Pflegeplatzbedarfs",
              "WTG-konforme Entwurfs- und Genehmigungsplanung mit den Heimaufsichtsbehörden",
              "Einbindung öffentlicher Fördermittel und zinsgünstiger KfW-Kredite für nachhaltige Bauten",
              "Schlüsselfertige Erstellung inklusive fester Einbauten, Pflegebäder und Außenanlagen",
              "Kooperation mit der NabiOta HomeCare GmbH oder renommierten Wohlfahrtsverbänden",
            ],
        technicalTitle: isUz
          ? "Qonunchilik"
          : isRu
          ? "Законодательство"
          : isEn
          ? "Governing Statutes"
          : isTr
          ? "Bakım Evi Mevzuatı"
          : isAr
          ? "التشريعات المنظمة لدور الرعاية"
          : "Heimrechtliche Vorgaben",
        technicalText: isUz
          ? "Wohn- und Teilhabegesetz (WTG NRW), DIN 18040-2 R (to'siqsizlik) va Sonderbau yong'in xavfsizligi me'yorlari."
          : isRu
          ? "Wohn- und Teilhabegesetz (WTG NRW), DIN 18040-2 R (безбарьерность) и противопожарные нормы Sonderbau."
          : isEn
          ? "Regional Residential and Participation Act (WTG NRW), DIN 18040-2 R, and specialized healthcare fire codes."
          : isTr
          ? "Konut ve Katılım Yasası (WTG NRW), Uygulama Yönetmeliği (WTG DVO), DIN 18040-2 R ve Özel Yapı Yönetmeliği."
          : isAr
          ? "قانون الإقامة والمشاركة (WTG NRW)، ولائحته التنفيذية (WTG DVO)، معيار DIN 18040-2 R ولائحة الأبنية الخاصة."
          : "Wohn- und Teilhabegesetz (WTG NRW), Durchführungsverordnung (WTG DVO), DIN 18040-2 R und Sonderbauverordnung.",
        legalTitle: isUz
          ? "Investitsiya modeli"
          : isRu
          ? "Инвестиционная модель"
          : isEn
          ? "Investment Structure"
          : isTr
          ? "Kira ve İşletme Modelleri"
          : isAr
          ? "نماذج الإيجار والتشغيل الاستثماري"
          : "Pacht- & Betreibermodelle",
        legalText: isUz
          ? "Investorlar uchun barqaror ijtimoiy daromadni va parvarish xizmatining uzluksiz faoliyatini ta'minlovchi 20–25 yillik uzoq muddatli ijara shartnomalari."
          : isRu
          ? "Долгосрочные договоры аренды на 20–25 лет, обеспечивающие надежный социальный доход инвесторам и стабильную работу службы ухода."
          : isEn
          ? "Long-term institutional 20 to 25-year lease structures delivering dependable, socially responsible returns."
          : isTr
          ? "Finansal gücü yüksek işletmecilerle yapılan uzun vadeli kira sözleşmeleri (20-25 yıl) sürdürülebilir değer koruması sağlar."
          : isAr
          ? "عقود إيجار وتشغيل طويلة الأجل (من 20 إلى 25 عاماً) مع مشغلين ذوي ملاءة مالية عالية تضمن استقرار القيمة الاستثمارية."
          : "Langfristige Pachtverträge (20 bis 25 Jahre) mit bonitätsstarken Betreibern sichern nachhaltigen Werterhalt.",
        ctaButtonText: isUz
          ? "Parvarish uyi loyihasini so'rash"
          : isRu
          ? "Запросить проект дома ухода"
          : isEn
          ? "Inquire Senior Care Facility"
          : isTr
          ? "Bakım Mülkü İçin Danışın"
          : isAr
          ? "طلب عقارات ومشاريع دور الرعاية"
          : "Pflegeimmobilie anfragen",
      },
    },
    {
      id: "mitarbeiterwohnen",
      badge: isUz
        ? "KAMPUS VA TURAR JOY"
        : isRu
        ? "КАМПУС И ЖИЛЬЕ"
        : isEn
        ? "CAMPUS & HOUSING"
        : isTr
        ? "KAMPÜS VE PERSONEL KONUTU"
        : isAr
        ? "مجمع السكن وإقامة الكوادر الطبية"
        : "CAMPUS & MITARBEITERWOHNEN",
      image: "/images/beratung/project-building.webp",
      iconType: "home",
      title: isUz
        ? "Tibbiyot shaharchasi va tibbiy xodimlar uchun turar joy"
        : isRu
        ? "Медицинский кампус & Жилье для медперсонала"
        : isEn
        ? "Healthcare Campus & Staff Housing"
        : isTr
        ? "Kampüs Altyapısı & Personel Konutları"
        : isAr
        ? "بنية المجمع الطبي وإسكان الكوادر الصحية"
        : "Campus-Infrastruktur & Mitarbeiterwohnen",
      shortDesc: isUz
        ? "Shifokorlar va hamshiralarni jalb qilish uchun zamonaviy apartamentlar va apart-otellar (Boardinghouses), fotoelektr stansiyalari va elektromobillar infratuzilmasi."
        : isRu
        ? "Современные апартаменты и апарт-отели (Boardinghouses) для привлечения врачей и медсестер, фотовольтаика и инфраструктура для электромобилей."
        : isEn
        ? "Modern residential boardinghouses and apartments supporting healthcare staff onboarding, campus solar arrays, and EV charging hubs."
        : isTr
        ? "Uluslararası uzmanların entegrasyonu için modern pansiyonlar (Boardinghouses), personel daireleri ve kampüs geneli enerji çözümleri."
        : isAr
        ? "مجمعات شقق فندقية وشقق سكنية للموظفين لدمج الكفاءات الطبية الدولية وحلول طاقة مستدامة للمجمع بأكمله."
        : "Boardinghouses und Personalappartements zur nachhaltigen Integration von Fachkräften sowie campusweite Energielösungen.",
      modal: {
        title: isUz
          ? "Tibbiyot shaharchasi, apart-otellar va tibbiy xodimlar uchun turar joy"
          : isRu
          ? "Медицинский кампус, апарт-отели & Жилье для медперсонала"
          : isEn
          ? "Medical Campus Infrastructure & Healthcare Staff Residences"
          : isTr
          ? "Sağlık Kampüsü, Rezidanslar & Personel Konutları"
          : isAr
          ? "المجمع الصحي وشقق الإقامة وسكن الموظفين"
          : "Gesundheitscampus, Boardinghouses & Mitarbeiterwohnen",
        subtitle: isUz
          ? "Mutaxassislar yashashi, ishlashi va integratsiyalashuvi uchun qulay sharoitlar yaratish"
          : isRu
          ? "Создание комфортных условий для жизни, работы и интеграции специалистов"
          : isEn
          ? "Holistic campus ecosystems uniting clinical excellence, sustainability, and staff living"
          : isTr
          ? "Yaşam, çalışma ve şifa için bütüncül yerleşke gelişimi"
          : isAr
          ? "تطوير بيئة متكاملة للمعيشة والعمل والاستشفاء"
          : "Ganzheitliche Standortentwicklung für Leben, Arbeiten und Heilen",
        description: isUz
          ? "Shifokorlar va malakali hamshiralar uchun kuchli raqobat sharoitida ish joyi yonida sifatli hamyonbop uy-joy mavjudligi muvaffaqiyatning hal qiluvchi omilidir. NabiOta Real Estate GmbH Medical Recruitment Services GmbH orqali jalb qilinayotgan mutaxassislarning qulay moslashuvi uchun zamonaviy apart-otellar va mikro-kvartiralarni quradi."
          : isRu
          ? "В условиях острой конкуренции за врачей и квалифицированных медсестер наличие доступного качественного жилья рядом с местом работы — решающий фактор успеха. NabiOta Real Estate GmbH строит стильные апарт-отели и микро-квартиры для комфортной адаптации специалистов, привлекаемых через Medical Recruitment Services GmbH."
          : isEn
          ? "In the competitive landscape for certified physicians and international nursing talent, immediate access to quality housing near the hospital campus is an invaluable differentiator. NabiOta Real Estate develops boutique boardinghouses and serviced micro-apartments that make relocation and onboarding seamless."
          : isTr
          ? "Nitelikli hekimler ve hemşireler için yaşanan yoğun rekabette, çalışma alanının hemen yanında cazip yaşam alanlarına sahip olmak belirleyici bir başarı faktörüdür. NabiOta Real Estate GmbH, Medical Recruitment Services GmbH bünyesinde gelen uluslararası uzmanların entegrasyonu için modern konutlar ve personel daireleri inşa eder."
          : isAr
          ? "في ظل التنافس المحموم على استقطاب الأطباء والكوادر التمريضية المؤهلة، يُعد توفير سكن جذاب بجوار موقع العمل مباشرة عامل نجاح حاسم. تطور NabiOta Real Estate GmbH شققاً فندقية وسكنية حديثة لتسهيل استقرار ودمج الكوادر الدولية المستقطبة عبر Medical Recruitment Services GmbH."
          : "Im Wettbewerb um hochqualifizierte Ärzte und Pflegefachkräfte ist attraktiver Wohnraum direkt am Standort ein entscheidender Erfolgsfaktor. NabiOta Real Estate GmbH realisiert moderne Boardinghouses und Mitarbeiterwohnungen für die internationale Fachkräfteintegration der Medical Recruitment Services GmbH.",
        specificationsTitle: isUz
          ? "Kampus infratuzilmasi va xonadonlar"
          : isRu
          ? "Инфраструктура кампуса"
          : isEn
          ? "Campus Amenities"
          : isTr
          ? "Konut Konsepti ve Kampüs Altyapısı"
          : isAr
          ? "مفهوم السكن والبنية التحتية للمجمع"
          : "Wohnkonzept & Campus-Infrastruktur",
        specifications: isUz
          ? [
              "Oshxonasi bilan to'liq jihozlangan 1 va 2 xonali mikro-kvartiralar",
              "Yuqori tezlikdagi internet, kovorking zonalari va o'qish uchun anjuman zallari",
              "O'z-o'ziga xizmat ko'rsatish kirxonalari, fitnes burchaklari va toza havodagi dam olish maskanlari",
              "Tomdagi quyosh panellari (PV) va nol uglerod izi uchun issiqlik nasoslari",
              "Elektromobillar uchun quvvatlash stansiyalari (Wallbox) va himoyalangan veloboxlar",
              "Klinika, MVZ va jamoat transporti bekatlariga piyoda masofada joylashuv",
            ]
          : isRu
          ? [
              "Полностью меблированные 1- и 2-комнатные микро-апартаменты с кухнями",
              "Высокоскоростной интернет, коворкинг-зоны и конференц-залы для учебы",
              "Прачечные самообслуживания, фитнес-уголки и зоны отдыха на свежем воздухе",
              "Солнечные батареи на крышах (PV-Anlagen) и тепловые насосы для нулевого углеродного следа",
              "Зарядные станции для электромобилей (Wallbox) и защищенные велобоксы",
              "Шаговая доступность до клиники, MVZ и остановок общественного транспорта",
            ]
          : isEn
          ? [
              "Turnkey fully furnished 1- and 2-room micro-apartments with private kitchenettes",
              "High-speed fiber connectivity, study lounges, and collaborative co-working suites",
              "On-site communal laundry lounges, mini fitness studios, and landscaped outdoor patios",
              "Rooftop solar photovoltaic arrays and geothermal heat pumps minimizing operational carbon",
              "Smart EV charging stations, e-bike lockers, and immediate public transit connectivity",
              "Direct pedestrian connection to hospital wings, medical centers, and pharmacy services",
            ]
          : isTr
          ? [
              "Entegre mini mutfak ve yüksek hızlı internete sahip tam mobilyalı mikro daireler",
              "Uluslararası ekip için ortak kullanım salonları, ortak çalışma (co-working) alanları ve çamaşırhaneler",
              "Hekim kafeteryası, konferans ve sürekli eğitim salonlarına sahip merkezi kampüs altyapısı",
              "Sürdürülebilir enerji: Çatı üzeri fotovoltaik sistemler, ısı pompaları ve jeotermal enerji",
              "Elektrikli araç şarj altyapısı, güvenli bisiklet parkları ve toplu taşımaya doğrudan bağlantı",
              "Dijital arıza kaydı ve bakım sistemine sahip merkezi teknik tesis yönetimi",
            ]
          : isAr
          ? [
              "شقق صغيرة مفروشة بالكامل بمطابخ صغيرة مدمجة وإنترنت فائق السرعة",
              "مساحات مجتمعية مشتركة، مناطق عمل ومطالعة ومغاسل مركزية للفرق الدولية",
              "بنية تحتية مركزية للمجمع تشمل مقهى الأطباء وقاعات المؤتمرات والتعليم الطبي المستمر",
              "مفاهيم طاقة مستدامة: أنظمة طاقة شمسية كهروضوئية، مضخات حرارية، وطاقة جوفية",
              "محطات تنقل مزودة بنقاط شحن للسيارات الكهربائية ومواقف دراجات وارتباط مباشر بالمواصلات العامة",
              "إدارة فنية مركزية للمرافق بنظام إلكتروني لإدارة الطلبات والصيانة الدورية",
            ]
          : [
              "Voll möblierte Micro-Appartements mit integrierter Kitchenette und Highspeed-Internet",
              "Gemeinschaftsräume, Co-Working-Zonen und Waschsalons für das internationale Team",
              "Zentrale Campus-Infrastruktur mit Ärzte-Cafeteria, Konferenz- und Fortbildungsräumen",
              "Nachhaltige Energiekonzepte: Photovoltaik-Dachanlagen, Wärmepumpen und Geothermie",
              "Mobilitätsstationen mit E-Auto-Ladeinfrastruktur, Fahrradboxen und Anbindung an den ÖPNV",
              "Zentrales technisches Facility Management mit digitalem Ticket- und Wartungssystem",
            ],
        scopeTitle: isUz
          ? "Loyihaga kiritilgan xizmatlar"
          : isRu
          ? "Что входит в проект"
          : isEn
          ? "Turnkey Execution"
          : isTr
          ? "Geliştirme ve İnşaat Hizmetleri"
          : isAr
          ? "خدمات التطوير والإنشاء"
          : "Entwicklungs- und Bauleistungen",
        scopeItems: isUz
          ? [
              "Tibbiyot shaharchasi hududini master-rejalashtirish va kompleks o'zlashtirish",
              "KfW 40 QNG standarti bo'yicha energiya tejamkor binolarni loyihalash",
              "Kvartiralarni mebel, maishiy texnika va aqlli kirish tizimlari bilan jihozlash",
              "NabiOta Medical Recruitment dasturlari bilan to'liq integratsiya",
              "Ijarani raqamli boshqarish va kommunal xizmatlarning avtomatlashtirilgan hisobi",
            ]
          : isRu
          ? [
              "Мастер-планирование и комплексное освоение территории медицинского городка",
              "Проектирование энергоэффективных зданий по стандарту KfW 40 QNG",
              "Оснащение апартаментов мебелью, бытовой техникой и системами умного доступа",
              "Интеграция с рекрутинговыми программами NabiOta Medical Recruitment",
              "Цифровое управление арендой и автоматизированный учет коммунальных услуг",
            ]
          : isEn
          ? [
              "Master planning and comprehensive zoning optimization for multi-use healthcare campuses",
              "High-efficiency building design certified to German KfW 40 QNG sustainable benchmarks",
              "Turnkey interior FF&E procurement, smart access control, and electronic lock systems",
              "Seamless operational alignment with NabiOta Medical Recruitment relocation schedules",
              "Digital tenant management, automated utility metering, and 24/7 facility caretaker response",
            ]
          : isTr
          ? [
              "Karma kullanımlı sağlık yerleşkeleri için master planlama ve kentsel optimizasyon",
              "En yüksek enerji standartlarında planlama (QNG sürdürülebilirlik mühürlü KfW 40)",
              "Anahtar teslim iç mekan donanımı, mobilyalandırma ve dijital geçiş kontrol sistemleri",
              "NabiOta Medical Recruitment Services varış ve istihdam planlarıyla tam entegrasyon",
              "Kiracı mobil uygulaması ve otomatik alt sayaç okuma sistemine sahip dijital yönetim",
            ]
          : isAr
          ? [
              "مخطط عام وتطوير عمراني متكامل للمجمعات الطبية متعددة الاستخدامات",
              "تخطيط وفق أعلى معايير كفاءة الطاقة (KfW 40 مع ختم الاستدامة QNG)",
              "تجهيز داخلي متكامل تسليم مفتاح مع الأثاث وأنظمة التحكم الإلكتروني في الدخول",
              "توافق وثيق مع جداول وصول الكوادر عبر NabiOta Medical Recruitment Services",
              "إدارة تشغيلية رقمية مع تطبيق مخصص للمستأجرين وقراءات إلكترونية لاستهلاك الطاقة",
            ]
          : [
              "Masterplanung und städtebauliche Optimierung für medizinische Mischquartiere",
              "Planung nach höchsten energetischen Standards (KfW 40 mit QNG-Nachhaltigkeitssiegel)",
              "Schlüsselfertige Innenausstattung, Möblierung und digitale Zutrittskontrollsysteme",
              "Enge Verzahnung mit den Ankunftsplänen der NabiOta Medical Recruitment Services",
              "Digitales Bewirtschaftungskonzept mit Mieter-App und automatisiertem Submetering",
            ],
        technicalTitle: isUz
          ? "Energiya samaradorligi"
          : isRu
          ? "Энергоэффективность"
          : isEn
          ? "Energy Standards"
          : isTr
          ? "Enerji Standartları ve ESG"
          : isAr
          ? "معايير الطاقة والاستدامة البيئية (ESG)"
          : "Energiestandards & ESG",
        technicalText: isUz
          ? "KfW 40 standartlari, barqaror qurilish QNG sertifikati va ESG talablari."
          : isRu
          ? "Стандарты KfW 40, сертификат устойчивого строительства QNG и требования ESG."
          : isEn
          ? "German KfW 40 efficiency standards, QNG sustainability seal, and strict ESG compliance."
          : isTr
          ? "KfW Verimli Bina Standardı 40, Sürdürülebilir Bina Kalite Mührü (QNG) ve ESG uyumluluğu."
          : isAr
          ? "معيار KfW 40 للأبنية الموفرة للطاقة، وختم جودة الأبنية المستدامة (QNG)، ومعايير ESG."
          : "KfW-Effizienzhaus-Standard 40, Qualitätssiegel Nachhaltiges Gebäude (QNG) und ESG-Konformität.",
        legalTitle: isUz
          ? "Turar joyni boshqarish"
          : isRu
          ? "Управление жильем"
          : isEn
          ? "Housing Management"
          : isTr
          ? "Kira Hukuku Düzenlemesi"
          : isAr
          ? "الصياغة القانونية لعقود الإسكان"
          : "Mietrechtliche Gestaltung",
        legalText: isUz
          ? "Yangi xodimlardan byurokratik yukni olib tashlaydigan xizmat turar joyining moslashuvchan ijara shartnomalari."
          : isRu
          ? "Гибкие договоры аренды служебного жилья, снимающие бюрократическую нагрузку с новых сотрудников."
          : isEn
          ? "Flexible corporate lease structures designed to facilitate stress-free settling in for healthcare workers."
          : isTr
          ? "Almanya'daki kiracı koruma kanunlarına tam uygun, çalışanların işe başlama sürecini kolaylaştıran esnek personel kira sözleşmeleri."
          : isAr
          ? "عقود إيجار وظيفية مرنة لتيسير بدء العمل في ألمانيا مع الامتثال لكافة تشريعات حماية المستأجرين."
          : "Flexible Mitarbeiter-Mietverträge zur Erleichterung des Arbeitsbeginns in Deutschland unter Beachtung aller mietrechtlichen Schutzvorschriften.",
        ctaButtonText: isUz
          ? "Kampusdagi turar joy haqida bilish"
          : isRu
          ? "Узнать о жилье на кампусе"
          : isEn
          ? "Inquire Campus Housing"
          : isTr
          ? "Personel Konutları İçin Danışın"
          : isAr
          ? "طلب معلومات سكن الكوادر الطبية"
          : "Mitarbeiterwohnen anfragen",
      },
    },
  ];

  const t = {
    s1: {
      eyebrow: isUz
        ? "BIZNING KONSALTING XIZMATLARIMIZ"
        : isRu
        ? "НАШИ КОНСАЛТИНГОВЫЕ УСЛУГИ"
        : isEn
        ? "OUR CONSULTING SERVICES"
        : isTr
        ? "DANIŞMANLIK HİZMETLERİMİZ"
        : isAr
        ? "خدماتنا الاستشارية"
        : "UNSERE BERATUNGSLEISTUNGEN",
      title: isUz
        ? "Barqaror yechimlar uchun kompleks konsalting."
        : isRu
        ? "Комплексный консалтинг для устойчивых решений."
        : isEn
        ? "Holistic Consulting for Sustainable Solutions."
        : isTr
        ? "Sürdürülebilir Çözümler İçin Bütüncül Danışmanlık."
        : isAr
        ? "استشارات شاملة لحلول صحية مستدامة."
        : "Ganzheitliche Beratung für nachhaltige Lösungen.",
      desc: isUz
        ? "Biz siz bilan birgalikda kelajakka mos konsepsiyalarni tahlil qilamiz, maslahat beramiz va ishlab chiqamiz — individual, amaliy hamda sifat, samaradorlik va insonparvarlikka aniq e'tibor qaratgan holda."
        : isRu
        ? "Мы анализируем, консультируем и разрабатываем вместе с вами перспективные концепции — индивидуально, практично и с четким фокусом на качестве, эффективности и человечности."
        : isEn
        ? "We analyze, advise, and develop future-proof concepts together with you — personalized, hands-on, and with a clear focus on quality, efficiency, and human-centric care."
        : isTr
        ? "Geleceğe hazır konseptleri sizinle birlikte analiz ediyor, danışmanlık yapıyor ve geliştiriyoruz; bireysel, uygulamaya dönük ve kalite, verimlilik ile insani değerlere net bir odaklanmayla."
        : isAr
        ? "نحلل ونقدم المشورة ونطور معكم مفاهيم مستقبلية مستدامة؛ فردية وعملية مع تركيز واضح على الجودة والكفاءة والإنسانية."
        : "Wir analysieren, beraten und entwickeln gemeinsam mit Ihnen zukunftsfähige Konzepte – individuell, praxisnah und mit einem klaren Fokus auf Qualität, Effizienz und Menschlichkeit.",
      btn: isUz
        ? "Xizmatlar haqida batafsil"
        : isRu
        ? "Подробнее об услугах"
        : isEn
        ? "Explore Our Services"
        : isTr
        ? "Hizmetlerimiz Hakkında Daha Fazla"
        : isAr
        ? "المزيد عن خدماتنا"
        : "Mehr zu unseren Leistungen",
      cardTitle: isUz
        ? "Konsaltingga bizning yondashuvimiz"
        : isRu
        ? "Наш подход к консалтингу"
        : isEn
        ? "Our Consulting Approach"
        : isTr
        ? "Danışmanlık Yaklaşımımız"
        : isAr
        ? "نهجنا الاستشاري"
        : "Unser Beratungsansatz",
      items: [
        {
          icon: Search,
          text: isUz
            ? "Ehtiyojlar tahlili va joriy holatni baholash"
            : isRu
            ? "Анализ потребностей и оценка текущего состояния"
            : isEn
            ? "Needs analysis & current-state evaluation"
            : isTr
            ? "İhtiyaç analizi ve mevcut durum değerlendirmesi"
            : isAr
            ? "تحليل الاحتياجات وتقييم الوضع الراهن"
            : "Bedarfsanalyse und Ist-Stand-Bewertung",
        },
        {
          icon: Lightbulb,
          text: isUz
            ? "Moslashtirilgan individual yechimlar strategiyasini ishlab chiqish"
            : isRu
            ? "Разработка индивидуальных решений"
            : isEn
            ? "Development of tailored solution strategies"
            : isTr
            ? "Özelleştirilmiş çözüm yaklaşımlarının geliştirilmesi"
            : isAr
            ? "تطوير حلول واستراتيجيات مصممة خصيصاً"
            : "Entwicklung individueller Lösungsansätze",
        },
        {
          icon: Users,
          text: isUz
            ? "Loyiha bosqichlarining barchasida doimiy hamrohlik"
            : isRu
            ? "Сопровождение на всех этапах проекта"
            : isEn
            ? "End-to-end guidance across all project phases"
            : isTr
            ? "Tüm proje aşamalarında sürekli rehberlik ve refakat"
            : isAr
            ? "المرافقة والدعم في جميع مراحل المشروع"
            : "Begleitung in allen Projektphasen",
        },
        {
          icon: Leaf,
          text: isUz
            ? "Barqaror va uzoq muddatli mustahkam natijalar"
            : isRu
            ? "Устойчивые и долгосрочные результаты"
            : isEn
            ? "Sustainable, future-proof, long-term results"
            : isTr
            ? "Sürdürülebilir ve uzun vadeli sonuçlar"
            : isAr
            ? "نتائج مستدامة وراسخة طويلة الأمد"
            : "Nachhaltige und langfristige Ergebnisse",
        },
      ],
    },
    s2: {
      eyebrow: isUz
        ? "LOYIHALARNI ISHLAB CHIQISH VA DEVELOPTMENT"
        : isRu
        ? "ДЕВЕЛОПМЕНТ ПРОЕКТОВ"
        : isEn
        ? "PROJECT DEVELOPMENT"
        : isTr
        ? "PROJE GELİŞTİRME"
        : isAr
        ? "تطوير المشاريع"
        : "PROJEKTENTWICKLUNG",
      title: isUz
        ? "G'oyadan to'liq amalga oshirishgacha."
        : isRu
        ? "От идеи к реализации."
        : isEn
        ? "From Concept to Completion."
        : isTr
        ? "Fikirden Uygulamaya."
        : isAr
        ? "من الفكرة إلى التنفيذ."
        : "Von der Idee zur Umsetzung.",
      desc: isUz
        ? "Biz sog'liqni saqlash sohasida yangi tibbiyot markazlari va klinikalardan tortib mavjud ob'ektlarni kengaytirish hamda qayta tuzilishigacha bo'lgan loyihalarni ishlab chiqamiz va amalga oshiramiz. Bunda biz iqtisodiy rentabellikni ijtimoiy mas'uliyat va eng yuqori sifat bilan uyg'unlashtiramiz."
        : isRu
        ? "Мы разрабатываем и реализуем проекты в сфере здравоохранения — от новых медицинских центров и клиник до расширения и реструктуризации существующих объектов. При этом мы сочетаем экономическую рентабельность с социальной ответственностью и высочайшим качеством."
        : isEn
        ? "We develop and implement healthcare infrastructure projects — whether new medical facilities, expansions, or restructuring programs. We combine economic viability with social responsibility and top-tier quality."
        : isTr
        ? "Sağlık sektöründe projeler geliştiriyor ve hayata geçiriyoruz: Yeni tesisler, kapasite artırımları veya yeniden yapılandırmalar. Bu süreçte ekonomik sürdürülebilirliği sosyal sorumluluk ve en yüksek kaliteyle birleştiriyoruz."
        : isAr
        ? "نطور وننفذ مشاريع في قطاع الرعاية الصحية؛ سواء كانت منشآت جديدة أو توسعات أو إعادة هيكلة. نجمع بين الجدوى الاقتصادية والمسؤولية الاجتماعية وأعلى معايير الجودة."
        : "Wir entwickeln und realisieren Projekte im Gesundheitswesen – ob neue Einrichtungen, Erweiterungen oder Umstrukturierungen. Dabei verbinden wir wirtschaftliche Tragfähigkeit mit sozialer Verantwortung und höchster Qualität.",
      btn: isUz
        ? "Loyihalar bilan tanishish"
        : isRu
        ? "Ознакомиться с проектами"
        : isEn
        ? "Discover Our Projects"
        : isTr
        ? "Projelerimizi Keşfedin"
        : isAr
        ? "استكشاف مشاريعنا"
        : "Unsere Projekte entdecken",
      stamp: isUz
        ? "Kelajak salomatlik maydonlari."
        : isRu
        ? "Пространства здоровья будущего."
        : isEn
        ? "Sustainable Healthcare Spaces."
        : isTr
        ? "Geleceğin Sürdürülebilir Sağlık Mekanları."
        : isAr
        ? "مساحات صحية مستدامة للمستقبل."
        : "Nachhaltige Gesundheitsräume.",
      features: [
        {
          icon: Building2,
          text: isUz
            ? "Texnik-iqtisodiy asoslash va kontseptsiyalarni ishlab chiqish"
            : isRu
            ? "ТЭО и разработка концепций"
            : isEn
            ? "Feasibility studies & concept development"
            : isTr
            ? "Fizibilite çalışmaları ve konsept geliştirme"
            : isAr
            ? "دراسات الجدوى وتطوير المفاهيم"
            : "Machbarkeitsstudien und Konzeptentwicklung",
        },
        {
          icon: HardHat,
          text: isUz
            ? "Qurilish loyihalarini loyihalash va amalga oshirish"
            : isRu
            ? "Проектирование и реализация строительных проектов"
            : isEn
            ? "Planning & execution of capital construction"
            : isTr
            ? "İnşaat ve yatırım projelerinin planlanması ve yürütülmesi"
            : isAr
            ? "تخطيط وتنفيذ مشاريع البناء والاستثمار"
            : "Planung und Umsetzung von Bau- und Investitionsprojekten",
        },
        {
          icon: Network,
          text: isUz
            ? "Barcha ishtirokchilar va rasmiy idoralarni muvofiqlashtirish"
            : isRu
            ? "Координация участников и ведомств"
            : isEn
            ? "Coordination of all stakeholders & authorities"
            : isTr
            ? "Tüm paydaşların ve resmi makamların koordinasyonu"
            : isAr
            ? "التنسيق بين جميع الأطراف المعنية والجهات الرسمية"
            : "Koordination aller Beteiligten und Behörden",
        },
        {
          icon: ShieldCheck,
          text: isUz
            ? "Sifatni boshqarish va xatarlarni minimallashtirish"
            : isRu
            ? "Управление качеством и рисками"
            : isEn
            ? "Comprehensive quality & risk management"
            : isTr
            ? "Kapsamlı kalite ve risk yönetimi"
            : isAr
            ? "إدارة الجودة والمخاطر الشاملة"
            : "Qualitäts- und Risikomanagement",
        },
      ],
    },
    s3: {
      eyebrow: isUz
        ? "BIZNING JARAYON"
        : isRu
        ? "НАШ ПРОЦЕСС"
        : isEn
        ? "OUR PROCESS"
        : isTr
        ? "SÜRECİMİZ"
        : isAr
        ? "مراحل عملنا"
        : "UNSER PROZESS",
      title: isUz
        ? "Loyihangiz muvaffaqiyati sari 5 qadam."
        : isRu
        ? "5 шагов к успеху вашего проекта."
        : isEn
        ? "In 5 Steps to Project Success."
        : isTr
        ? "Projenizin Başarısına 5 Adımda Ulaşın."
        : isAr
        ? "5 خطوات لتحقيق نجاح مشروعك."
        : "In 5 Schritten zu Ihrem Projekterfolg.",
      desc: isUz
        ? "Shaffof jarayonlar, yaqin hamkorlik va tajribali ekspertlar jamoasi — biz loyihangizni maqsadga ishonchli va xavfsiz yetkazamiz."
        : isRu
        ? "Прозрачные процессы, тесное взаимодействие и опытная команда экспертов — так мы надежно доводим ваш проект до цели."
        : isEn
        ? "Transparent workflows, close collaboration, and an experienced interdisciplinary team — ensuring your healthcare project reaches its goals safely."
        : isTr
        ? "Şeffaf süreçler, yakın işbirliği ve deneyimli bir uzman ekip ile projenizi hedefe güvenle ulaştırıyoruz."
        : isAr
        ? "إجراءات شفافة، تعاون وثيق، وفريق خبراء متمرس؛ هكذا نقود مشروعك بأمان نحو النجاح."
        : "Transparente Abläufe, enge Zusammenarbeit und ein erfahrenes Team – so bringen wir Ihr Projekt sicher ans Ziel.",
      steps: [
        {
          num: "1",
          icon: MessageSquare,
          title: isUz
            ? "Dastlabki suhbat va tahlil"
            : isRu
            ? "Первичная беседа и анализ"
            : isEn
            ? "Initial Consultation & Analysis"
            : isTr
            ? "İlk Görüşme & Analiz"
            : isAr
            ? "المشورة الأولية والتحليل"
            : "Erstgespräch & Analyse",
          desc: isUz
            ? "Biz boshlang'ich vaziyat, maqsadlar va o'ziga xos talablarni chuqur o'rganamiz."
            : isRu
            ? "Мы внимательно изучаем исходную ситуацию, цели и требования."
            : isEn
            ? "We listen carefully, analyze your current situation, and define shared goals."
            : isTr
            ? "Sizi dinliyor, durumunuzu analiz ediyor ve hedefleri birlikte belirliyoruz."
            : isAr
            ? "نستمع إليكم باهتمام، ونحلل الوضع الراهن، ونحدد الأهداف المشتركة."
            : "Wir hören zu, analysieren Ihre Situation und definieren gemeinsam die Ziele.",
        },
        {
          num: "2",
          icon: Lightbulb,
          title: isUz
            ? "Kontseptsiya va rejalashtirish"
            : isRu
            ? "Концепция и планирование"
            : isEn
            ? "Concept & Planning"
            : isTr
            ? "Konsept & Planlama"
            : isAr
            ? "المفهوم والتخطيط"
            : "Konzept & Planung",
          desc: isUz
            ? "Individual yechimlarni va loyihaning batafsil rejasini ishlab chiqamiz."
            : isRu
            ? "Разрабатываем индивидуальные решения и детальный план проекта."
            : isEn
            ? "We create tailored solutions and establish rigorous project blueprints."
            : isTr
            ? "Özelleştirilmiş çözümler üretiyor ve sağlam temellere dayanan bir proje planı hazırlıyoruz."
            : isAr
            ? "نبتكر حلولاً مخصصة ونضع تخطيطاً هندسياً وتنفيذياً متيناً للمشروع."
            : "Wir entwickeln maßgeschneiderte Lösungen und erstellen eine fundierte Projektplanung.",
        },
        {
          num: "3",
          icon: Users,
          title: isUz
            ? "Amalga oshirish"
            : isRu
            ? "Реализация"
            : isEn
            ? "Execution & Coordination"
            : isTr
            ? "Uygulama"
            : isAr
            ? "التنفيذ"
            : "Umsetzung",
          desc: isUz
            ? "Barcha pudratchilar va ishtirokchilarni muvofiqlashtiramiz hamda muddatlarni nazorat qilamiz."
            : isRu
            ? "Координируем всех подрядчиков и контролируем сроки."
            : isEn
            ? "We coordinate all parties involved and ensure efficient implementation."
            : isTr
            ? "Tüm paydaşları koordine ediyor ve verimli bir uygulama sağlıyoruz."
            : isAr
            ? "ننسق مع جميع الأطراف المعنية ونضمن التنفيذ الفعال والمنضبط."
            : "Wir koordinieren alle Beteiligten und sorgen für eine effiziente Realisierung.",
        },
        {
          num: "4",
          icon: CheckCircle2,
          title: isUz
            ? "Kuzatuv va nazorat"
            : isRu
            ? "Сопровождение и контроль"
            : isEn
            ? "Supervision & Quality Control"
            : isTr
            ? "Refakat & Denetim"
            : isAr
            ? "المتابعة والمراقبة"
            : "Begleitung & Kontrolle",
          desc: isUz
            ? "Xarajatlar, jadval va sifat standartlarini doimiy qat'iy nazoratda ushlab turamiz."
            : isRu
            ? "Держим на постоянном контроле расходы, график и качество."
            : isEn
            ? "We maintain rigorous oversight of costs, timelines, and construction quality."
            : isTr
            ? "Güvenli bir sonuç için maliyetleri, takvimi ve kaliteyi sürekli kontrol altında tutuyoruz."
            : isAr
            ? "نراقب التكاليف والجداول الزمنية والجودة بدقة لتحقيق نتائج موثوقة."
            : "Wir behalten Kosten, Zeit und Qualität im Blick – für ein sicheres Ergebnis.",
        },
        {
          num: "5",
          icon: Flag,
          title: isUz
            ? "Muvaffaqiyatli topshirish va rivojlanish"
            : isRu
            ? "Успешный ввод и развитие"
            : isEn
            ? "Launch & Future Growth"
            : isTr
            ? "Başarı & Gelişim"
            : isAr
            ? "النجاح والتطوير المستمر"
            : "Erfolg & Weiterentwicklung",
          desc: isUz
            ? "Ob'ektni foydalanishga topshirish jarayonida hamrohlik qilamiz va uning keyingi barqaror rivojlanishini qo'llab-quvvatlaymiz."
            : isRu
            ? "Сопровождаем ввод в эксплуатацию и поддерживаем развитие объекта."
            : isEn
            ? "We oversee commissioning and remain your trusted strategic partner."
            : isTr
            ? "İşletmeye alma sürecine eşlik ediyor ve sonrasında da yanınızda olmaya devam ediyoruz."
            : isAr
            ? "نواكب بدء التشغيل ونبقى إلى جانبكم كشريك استراتيجي للمستقبل."
            : "Wir begleiten die Inbetriebnahme und stehen Ihnen auch danach zur Seite.",
        },
      ],
    },
    s4: {
      eyebrow: "NABIOTA REAL ESTATE GMBH",
      title: isUz
        ? "Kalit ostida ixtisoslashtirilgan tibbiy ko'chmas mulk"
        : isRu
        ? "Специализированная медицинская недвижимость под ключ"
        : isEn
        ? "Specialized Healthcare Real Estate Portfolio"
        : isTr
        ? "NabiOta Grubu Sağlık Gayrimenkulleri & Özel Alanları"
        : isAr
        ? "العقارات الصحية والمساحات التخصصية لمجموعة NabiOta"
        : "Gesundheitsimmobilien & Spezialflächen der NabiOta Gruppe",
      desc: isUz
        ? "Tibbiy ko'chmas mulkni rivojlantirishning oltita asosiy yo'nalishi bilan tanishing: yuqori texnologiyali klinika va operatsiya zallaridan tortib, radiatsiyadan himoyalangan diagnostika markazlari, reabilitatsiya majmualari va xodimlar turar joylarigacha."
        : isRu
        ? "Ознакомьтесь с шестью направлениями девелопмента медицинской недвижимости: от клиник и операционных залов до центров лучевой диагностики, реабилитационных комплексов и жилья для персонала."
        : isEn
        ? "Explore the six core pillars of our healthcare real estate development: from surgical clinic buildings to diagnostic suites, rehabilitation campuses, and modern staff housing."
        : isTr
        ? "Gayrimenkul geliştirmemizin altı temel sütununu keşfedin: Yüksek teknolojili klinik binalarından radyasyon korumalı tanı merkezlerine, bakım mülklerinden kampüs personel konutlarına kadar."
        : isAr
        ? "استكشف الركائز الست لتطويرنا العقاري الصحي: من مباني المشافي الجراحية فائقة التطور ومراكز التشخيص المحمية من الإشعاع إلى دور الرعاية وإسكان الكوادر الطبية."
        : "Erkunden Sie die sechs tragenden Säulen unserer Immobilienentwicklung: Vom hochmodernen Klinikbau über strahlengeschützte Diagnostikzentren bis hin zu Pflegeimmobilien und campusweitem Mitarbeiterwohnen.",
      openModalBtn: isUz
        ? "Tafsilotlar va xonalar kontseptsiyasi"
        : isRu
        ? "Детали и концепция"
        : isEn
        ? "Details & Room Program"
        : isTr
        ? "Detaylar & Mekan Konsepti"
        : isAr
        ? "التفاصيل والمخطط المعماري"
        : "Details & Raumkonzept",
    },
    s5: {
      eyebrow: isUz
        ? "HAMKORLARIMIZ FIKRLARI"
        : isRu
        ? "ОТЗЫВЫ ПАРТНЕРОВ"
        : isEn
        ? "PARTNER VOICES"
        : isTr
        ? "ORTAKLARIMIZIN GÖRÜŞLERİ"
        : isAr
        ? "آراء شركائنا"
        : "STIMMEN UNSERER PARTNER",
      title: isUz
        ? "Ishonch taraqqiyot yaratadi."
        : isRu
        ? "Доверие создает прогресс."
        : isEn
        ? "Trust Drives Progress."
        : isTr
        ? "Güven İlerleme Yaratır."
        : isAr
        ? "الثقة تصنع التقدم."
        : "Vertrauen schafft Fortschritt.",
      desc: isUz
        ? "Tibbiyot sohasi rahbarlari va mutaxassislar konsalting hamda infratuzilma loyihalaridagi hamkorligimiz haqida nimalarni aytishadi."
        : isRu
        ? "Что говорят наши партнеры и заказчики о совместной работе над проектами развития инфраструктуры."
        : isEn
        ? "What healthcare leaders and executives say about partnering with us on consulting and development projects."
        : isTr
        ? "Danışmanlık ve proje geliştirme projelerindeki işbirliğimiz hakkında müşterilerimiz ve ortaklarımız neler söylüyor."
        : isAr
        ? "ما يقوله عملاؤنا وشركاؤنا عن التعاون معنا في مشاريع الاستشارات والتطوير."
        : "Das sagen unsere Kundinnen und Kunden über die Zusammenarbeit in Beratungs- und Projektentwicklungsprojekten.",
      btn: isUz
        ? "Jamoamiz bilan bog'lanish"
        : isRu
        ? "Связаться с нами"
        : isEn
        ? "Contact Our Team"
        : isTr
        ? "İletişime Geçin"
        : isAr
        ? "التواصل معنا"
        : "Kontakt ansehen",
      testimonials: [
        {
          name: "Dr. Thomas Berger",
          role: isUz
            ? "Boshqaruvchi direktor, Tibbiyot markazi (MVZ)"
            : isRu
            ? "Управляющий директор, MVZ"
            : isEn
            ? "Managing Director, Medical Center"
            : isTr
            ? "Genel Müdür, MVZ"
            : isAr
            ? "المدير التنفيذي، مركز MVZ"
            : "Geschäftsführer, MVZ",
          avatar: "/images/beratung/avatar-berger.webp",
          quote: isUz
            ? "«Hamkorlik ilk kundan boshlab yuqori professional, natijaga yo'naltirilgan va juda samimiy tarzda kechdi. Chuqur texnik ekspertiza va insoniy yondashuvning uyg'unligi bizda alohida taassurot qoldirdi.»"
            : isRu
            ? "«Сотрудничество с самого начала было высокопрофессиональным, ориентированным на решение задач и невероятно комфортным. Нас впечатлил баланс глубоких экспертных знаний и человеческого подхода.»"
            : isEn
            ? "“The collaboration was professional, solution-oriented, and remarkably pleasant right from day one. We were particularly impressed by the blend of deep technical expertise and genuine humanity.”"
            : isTr
            ? "“İşbirliği başından itibaren profesyonel, çözüm odaklı ve son derece verimliydi. Uzmanlık ve insani yaklaşımın birleşimi bizi özellikle etkiledi.”"
            : isAr
            ? "“كان التعاون منذ البداية احترافياً وموجهاً نحو الحلول ومريحاً للغاية. لقد أثار إعجابنا بشكل خاص الجمع بين الخبرة العميقة والتعامل الإنساني الراقي.”"
            : "„Die Zusammenarbeit war von Anfang an professionell, lösungsorientiert und äußerst angenehm. Besonders beeindruckt hat uns die Kombination aus Fachwissen und Menschlichkeit.“",
        },
        {
          name: "Sabine Keller",
          role: isUz
            ? "Qurilish infratuzilmasi rahbari"
            : isRu
            ? "Руководитель строительной инфраструктуры"
            : isEn
            ? "Head of Construction & Infrastructure"
            : isTr
            ? "İnşaat ve Altyapı Direktörü"
            : isAr
            ? "مديرة الإنشاءات والبنية التحتية"
            : "Leiterin Bau & Infrastruktur",
          avatar: "/images/beratung/avatar-keller.webp",
          quote: isUz
            ? "«Tizimli metodologiya va doimiy nazorat tufayli biz sog'liqni saqlash ob'ektimizni belgilangan muddatda va qat'iy tasdiqlangan byudjet doirasida muvaffaqiyatli yakunlay oldik.»"
            : isRu
            ? "«Благодаря структурированному подходу и постоянному сопровождению мы смогли завершить проект точно в срок и строго в рамках утвержденного бюджета.»"
            : isEn
            ? "“Thanks to their structured methodology and continuous oversight, we were able to deliver our healthcare facility strictly on schedule and within budget.”"
            : isTr
            ? "“Yapılandırılmış metodoloji ve yakın refakat sayesinde projemizi zamanında ve bütçe dahilinde başarıyla tamamlayabildik.”"
            : isAr
            ? "“بفضل النهج المنظم والمرافقة الدقيقة تمكنا من إنجاز مشروعنا في الموعد المحدد وضمن الميزانية المعتمدة تماماً.”"
            : "„Dank der strukturierten Vorgehensweise und der engen Begleitung konnten wir unser Projekt termingerecht und budgetgerecht realisieren.“",
        },
        {
          name: "Prof. Dr. Markus Weber",
          role: isUz
            ? "Tibbiyot kampusi bosh shifokori / direktori"
            : isRu
            ? "Главный врач медицинского центра"
            : isEn
            ? "Medical Director, Healthcare Campus"
            : isTr
            ? "Sağlık Merkezi Başhekimi / Direktörü"
            : isAr
            ? "مدير المركز الصحي والرئيس الطبي"
            : "Leitung Gesundheitszentrum",
          avatar: "/images/beratung/avatar-weber.webp",
          quote: isUz
            ? "«Murosasiz malaka, fidoyilik va klinik jarayonlarimizni chuqur tushunish — NABIOTA'ni haqiqatan ham qadrli va ishonchli hamkorga aylantiradigan asosiy jihatlardir.»"
            : isRu
            ? "«Компетентность, вовлеченность и глубокое понимание клинических потребностей — именно это делает NABIOTA по-настоящему ценным партнером.»"
            : isEn
            ? "“Uncompromising competence, commitment, and a deep understanding of our clinical workflows — that is what makes NABIOTA an invaluable partner.”"
            : isTr
            ? "“Yetkinlik, adanmışlık ve klinik ihtiyaçlarımızı derinlemesine anlama; NABIOTA'yı gerçekten değerli bir ortak yapan özellikler bunlardır.”"
            : isAr
            ? "“الكفاءة والالتزام والفهم العميق لاحتياجاتنا السريرية؛ هذا هو ما يجعل NABIOTA شريكاً لا يُقدّر بثمن.”"
            : "„Kompetenz, Engagement und ein tiefes Verständnis für unsere Bedürfnisse – das macht NABIOTA zu einem wertvollen Partner.“",
        },
      ],
    },
    s6: {
      eyebrow: isUz
        ? "BOG'LANISH"
        : isRu
        ? "КОНТАКТ"
        : isEn
        ? "CONTACT"
        : isTr
        ? "İLETİŞİM"
        : isAr
        ? "اتصل بنا"
        : "KONTAKT",
      title: isUz
        ? "Murojaatingizni kutib qolamiz."
        : isRu
        ? "Будем рады вашему обращению."
        : isEn
        ? "We Look Forward to Your Inquiry."
        : isTr
        ? "Talebinizi Memnuniyetle Bekliyoruz."
        : isAr
        ? "نسعد بتواصلكم واستفساراتكم."
        : "Wir freuen uns auf Ihre Anfrage.",
      desc: isUz
        ? "Dastlabki g'oya bo'ladimi yoki aniq kengaytirish loyihasi — jamoamiz sizga shaxsan va hech qanday majburiyatlarsiz maslahat berishdan mamnun bo'ladi."
        : isRu
        ? "Будь то первая идея или конкретный проект расширения — наша команда с удовольствием проконсультирует вас лично и без обязательств."
        : isEn
        ? "Whether an initial concept or an imminent development project — our team will be delighted to advise you personally."
        : isTr
        ? "İster ilk fikir ister somut bir proje olsun; ekibimiz olanaklar hakkında sizi kişisel ve bağlayıcı olmayan bir şekilde bilgilendirmekten mutluluk duyar."
        : isAr
        ? "سواء كانت فكرة أولية أو مشروعاً محدداً؛ يسعد فريقنا بتقديم المشورة لكم شخصياً وبشكل غير ملزم حول أفضل الإمكانيات."
        : "Ob erste Idee oder konkretes Vorhaben – unser Team berät Sie gerne persönlich und unverbindlich zu Ihren Möglichkeiten.",
      btn: isUz
        ? "Biz bilan bog'lanish"
        : isRu
        ? "Связаться с нами"
        : isEn
        ? "Contact Us"
        : isTr
        ? "İletişime Geçin"
        : isAr
        ? "تواصل معنا"
        : "Kontakt aufnehmen",
      stamp1: isUz
        ? "Keling,"
        : isRu
        ? "Давайте поговорим"
        : isEn
        ? "Let's talk about"
        : isTr
        ? "Gelin,"
        : isAr
        ? "دعنا نتحدث"
        : "Lassen Sie uns",
      stamp2: isUz
        ? "loyihangiz haqida gaplashamiz."
        : isRu
        ? "о вашем проекте."
        : isEn
        ? "your project."
        : isTr
        ? "projeniz hakkında konuşalım."
        : isAr
        ? "عن مشروعكم الطبي."
        : "über Ihr Projekt sprechen.",
      phone: "+49 2161 4794000",
      email: "info@nabiota-health-group.de",
      location: isUz
        ? "Myonxengladbax, Germaniya"
        : isRu
        ? "Мёнхенгладбах, Германия"
        : isEn
        ? "Mönchengladbach, Germany"
        : isTr
        ? "Mönchengladbach, Almanya"
        : isAr
        ? "مونشنغلادباخ، ألمانيا"
        : "Mönchengladbach, Deutschland",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-forest-950 font-sans selection:bg-gold-500/20">
      {/* ── 1. GLOBAL SITE NAVIGATION HEADER ── */}
      <Header currentLocale={locale} />

      {/* ── 2. SITE STANDARD PAGE HERO ── */}
      <PageHero
          locale={locale}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: isUz ? "Bosh sahifa" : isRu ? "Главная" : isEn ? "Home" : isTr ? "Ana Sayfa" : isAr ? "الرئيسية" : "Startseite", href: `/${locale}` },
              {
                label: isUz ? "Xolding yo'nalishlari" : isRu ? "Направления холдинга" : isEn ? "Divisions" : isTr ? "Şirket Alanları" : isAr ? "قطاعات المجموعة" : "Unternehmensbereiche",
                href: `/${locale}/areas`,
              },
              { label: heroData.title },
            ]}
          />
        }
        title={heroData.title}
        eyebrow={heroData.eyebrow}
        description={heroData.desc}
        imageSrc="/images/areas/consulting.webp"
        imageAlt="NabiOta Health Group Beratung & Projektentwicklung"
        badges={heroBadges}
      />

      <main className="flex-1 bg-[#FAF9F5]">
        {/* ========================================================================= */}
        {/* SECTION 1: UNSERE BERATUNGSLEISTUNGEN (Holding Management & Projektierung)*/}
        {/* ========================================================================= */}
        <section className="py-8 sm:py-10 lg:py-11 bg-[#FAF9F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Left Column (Copy + Button) */}
              <div className="lg:col-span-4 space-y-3.5 sm:space-y-4 flex flex-col justify-center">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] text-[#0F2A1D] font-normal leading-[1.18] tracking-tight">
                  {t.s1.title}
                </h2>

                <p className="text-xs sm:text-[13px] text-[#4A5D52] font-normal leading-relaxed">
                  {t.s1.desc}
                </p>

                <div className="pt-1.5 sm:pt-2">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-3 px-6 sm:px-7 py-3 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D2619] border border-[#BFA87E] hover:border-[#9B7C38] text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm hover:shadow group hover:scale-[1.01]"
                  >
                    <span>{t.s1.btn}</span>
                    <ArrowRight className="w-4 h-4 text-[#0D2619] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Center Column: Meeting Photo */}
              <div className="lg:col-span-5 relative min-h-[290px] lg:min-h-0 h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-[#EAE5DC]">
                <Image
                  src="/images/beratung/consulting-meeting.webp"
                  alt={t.s1.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column: Consulting Approach Box */}
              <div className="lg:col-span-3 bg-[#EEF4EE] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#DFE8DF] shadow-xs flex flex-col justify-between h-full">
                <h3 className="font-serif text-base sm:text-lg font-medium text-[#0F2A1D]">
                  {t.s1.cardTitle}
                </h3>

                <div className="space-y-3 sm:space-y-3.5 my-auto py-2">
                  {t.s1.items.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 sm:gap-3.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5B878]/70 bg-white/90 text-[#1E3E2B] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
                        </div>
                        <span className="text-xs sm:text-[12.5px] text-[#2C4737] font-medium leading-snug pt-1">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: PROJEKTENTWICKLUNG - VON DER IDEE ZUR UMSETZUNG               */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#08170D] text-white relative overflow-hidden border-y border-[#D5B878]/30 my-8 sm:my-12">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/botanical-gold-bg.webp"
              alt="Botanical Gold Texture"
              fill
              className="object-cover object-left opacity-35 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08170D]/95 via-[#08170D]/85 to-[#08170D]/40" />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[300px] lg:min-h-[340px] relative z-10">
            {/* Left: Text & CTA */}
            <div className="w-full lg:w-[40%] xl:w-[38%] p-6 sm:p-8 lg:p-10 lg:pl-14 xl:pl-20 flex flex-col justify-center space-y-3.5 sm:space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] text-white font-normal leading-[1.15]">
                {t.s2.title}
              </h2>

              <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed max-w-lg font-sans">
                {t.s2.desc}
              </p>

              <div className="pt-1.5 sm:pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#ECCF96] via-[#DFBF76] to-[#C8A050] hover:from-[#F4DCAC] hover:to-[#D4AC5B] text-[#08170D] text-xs sm:text-[13px] font-semibold transition-all duration-300 shadow-md group hover:scale-[1.02]"
                >
                  <span>{t.s2.btn}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Center: 4 Gold Circular Features */}
            <div className="w-full lg:w-[28%] xl:w-[27%] px-6 sm:px-8 lg:px-4 py-4 sm:py-6 lg:py-0 flex flex-col justify-center space-y-3.5 sm:space-y-4">
              {t.s2.features.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5B878]/80 bg-[#08170D] flex items-center justify-center text-[#ECCF96] flex-shrink-0 shadow-[0_0_12px_rgba(213,184,120,0.15)]">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                    </div>
                    <span className="text-[12.5px] sm:text-[13.5px] font-medium text-white/95 leading-snug">
                      {feat.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right: Modern Building Photo with smooth fade */}
            <div className="w-full lg:w-[32%] xl:w-[35%] relative min-h-[220px] sm:min-h-[260px] lg:min-h-full shrink-0 overflow-hidden">
              <Image
                src="/images/beratung/project-building.webp"
                alt={t.s2.title}
                fill
                className="object-cover object-center"
              />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-36 sm:w-48 bg-gradient-to-r from-[#08170D] via-[#08170D]/80 via-[#08170D]/40 to-transparent pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#08170D] via-[#08170D]/80 to-transparent pointer-events-none z-10" />

              <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-6 pointer-events-none select-none z-20 text-right">
                <p className="font-serif italic text-white/95 text-base sm:text-lg md:text-xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                  {t.s2.stamp}
                </p>
                <div className="flex justify-end pt-1">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white/95 fill-transparent stroke-[1.5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: UNSER PROZESS (In 5 Schritten zum Projekterfolg)               */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            <div className="max-w-2xl mb-10 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0F2A1D] font-normal leading-tight mb-3">
                {t.s3.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#4A5D52] leading-relaxed">
                {t.s3.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
              {t.s3.steps.map((st, idx) => {
                const IconComp = st.icon;
                return (
                  <div key={idx} className="relative flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0D2619] text-white flex items-center justify-center text-xs sm:text-sm font-bold font-serif shrink-0 shadow-xs">
                          {st.num}
                        </div>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5B878]/80 bg-white flex items-center justify-center text-[#0D2619] shrink-0 shadow-2xs">
                          <IconComp className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.8]" />
                        </div>
                      </div>

                      {idx < 4 && (
                        <div className="hidden md:flex items-center text-[#C5A56A] pl-2 pr-1">
                          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />
                        </div>
                      )}
                    </div>

                    <div className="pt-1">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#0F2A1D] mb-1.5 leading-snug">
                        {st.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#4A5D52] leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: NABIOTA REAL ESTATE GMBH - 6 HEALTHCARE FACILITY PILLARS       */}
        {/* ========================================================================= */}
        <section id="immobilien" className="py-14 sm:py-20 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight mb-4">
                {t.s4.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed max-w-2xl">
                {t.s4.desc}
              </p>
            </div>

            {/* 6 Cards Grid: 3 cols x 2 rows with User-Approved Styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {realEstateDomains.map((domain) => (
                <div
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain)}
                  className="rounded-3xl bg-white border border-[#EAE4D7] shadow-sm hover:shadow-xl hover:border-[#C5A56A] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                >
                  {/* Photo without pill badge */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#07150C]">
                    <Image
                      src={domain.image}
                      alt={domain.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content with circular icon overlapping the image & gentle wave */}
                  <div className="relative bg-white pt-2 pb-6 px-6 sm:px-7 flex-1 flex flex-col justify-between">
                    {/* Curved wave transition at top */}
                    <div className="absolute -top-6 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                      <svg
                        viewBox="0 0 400 32"
                        preserveAspectRatio="none"
                        className="w-full h-7 fill-white"
                      >
                        <path d="M 0,16 C 18,5 34,0 64,0 C 98,0 118,13 145,17 C 225,27 325,16 400,13 L 400,32 L 0,32 Z" />
                      </svg>
                    </div>

                    {/* Circular Icon with light green background overlapping photo */}
                    <div className="relative -mt-9 mb-3.5 z-10">
                      <div className="w-12 h-12 rounded-full bg-[#E5F0E8] border border-[#CCE0D2] flex items-center justify-center text-[#1C3E2A] shadow-xs group-hover:scale-105 transition-transform">
                        {domain.iconType === "building" && <Building2 className="w-6 h-6 stroke-[1.8]" />}
                        {domain.iconType === "stethoscope" && <Stethoscope className="w-6 h-6 stroke-[1.8]" />}
                        {domain.iconType === "activity" && <Activity className="w-6 h-6 stroke-[1.8]" />}
                        {domain.iconType === "heartpulse" && <HeartPulse className="w-6 h-6 stroke-[1.8]" />}
                        {domain.iconType === "heart" && <Heart className="w-6 h-6 stroke-[1.8]" />}
                        {domain.iconType === "home" && <Home className="w-6 h-6 stroke-[1.8]" />}
                      </div>
                    </div>

                    {/* Title & Description on white background */}
                    <div className="space-y-2 mb-4">
                      <h3 className="font-serif text-xl sm:text-[21px] font-bold text-[#142318] leading-tight group-hover:text-[#8D6B27] transition-colors">
                        {domain.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#55695C] leading-relaxed">
                        {domain.shortDesc}
                      </p>
                    </div>

                    {/* Bottom Action Area: Pill Button + Circle Arrow Button */}
                    <div className="pt-4 mt-auto border-t border-[#F2ECE1] flex items-center justify-between">
                      <span className="px-4 py-2 rounded-full bg-[#FAF3E7] text-[#93712C] text-xs font-semibold group-hover:bg-[#F5EAD4] transition-colors">
                        {t.s4.openModalBtn}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#FAF3E7] border border-[#EADBBE] flex items-center justify-center text-[#93712C] group-hover:bg-[#C5A56A] group-hover:text-white group-hover:border-[#C5A56A] transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4B: NABIOTA REAL ESTATE GMBH – PDF SECTION IV.7                   */}
        {/* ========================================================================= */}
        <RealEstateCompanySection locale={locale} />

        {/* ========================================================================= */}
        {/* SECTION 5: STIMMEN UNSERER PARTNER (COMPACT RIBBON)                       */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#08170D] text-white relative overflow-hidden border-t border-[#D5B878]/30 py-4 sm:py-5 lg:py-5.5 mb-0">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/botanical-gold-bg.webp"
              alt="Botanical Gold Texture"
              fill
              className="object-cover object-left opacity-75 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08170D]/90 via-[#08170D]/75 to-[#08170D]/60" />
          </div>

          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-6 xl:gap-8">
              <div className="w-full lg:w-[35%] xl:w-[36%] shrink-0 space-y-2 lg:pl-6 xl:pl-10">
                <h2 className="font-serif text-2xl sm:text-[26px] lg:text-[28px] text-white font-normal leading-[1.15]">
                  {t.s5.title}
                </h2>

                <p className="text-white/80 text-[11px] sm:text-xs leading-relaxed max-w-md">
                  {t.s5.desc}
                </p>

                <div className="pt-1">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D5B878]/70 hover:border-[#D5B878] bg-white/5 hover:bg-white/10 text-white text-[11px] sm:text-xs font-medium transition-all duration-300"
                  >
                    <span>{t.s5.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ECCF96]" />
                  </Link>
                </div>
              </div>

              {/* 3 Compact Testimonial Cards on White rounded cards matching reference photo */}
              <div className="w-full lg:w-[61%] xl:w-[59%] lg:ml-auto grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-4 xl:gap-4.5 items-stretch">
                {t.s5.testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-[18px] sm:p-5 xl:p-[20px_22px] text-[#0F2A1D] shadow-sm flex flex-col justify-between border border-[#E8E2D6] min-h-[195px] max-h-[225px]"
                  >
                    <div className="flex items-start gap-3 sm:gap-3.5">
                      <div className="relative w-[50px] h-[50px] sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden shrink-0 border border-[#E2DBD0] shadow-2xs">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11.5px] sm:text-[12px] xl:text-[12.5px] text-[#2C4436] leading-[1.38] font-sans">
                          {item.quote}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-2.5">
                      <h4 className="font-sans text-[12.5px] sm:text-[13px] font-bold text-[#0F2A1D] leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[10px] sm:text-[10.5px] text-[#6E8177] leading-tight mt-0.5 font-sans">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: BOTTOM CONTACT BANNER (3-COLUMN DESK LAYOUT)                    */}
        {/* ========================================================================= */}
        <section className="w-full relative overflow-hidden bg-[#FAF7F2] border-t border-[#DECDB5]/60 py-8 sm:py-9 lg:py-10 mt-0">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/beratung/cta-desk-clean.webp"
              alt="Desk notebook background"
              fill
              className="object-cover object-center opacity-85"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/50 to-white/20 backdrop-blur-[0.5px]" />
          </div>

          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Italic statement stamp with subtle heart */}
              <div className="lg:col-span-4 flex flex-col justify-center py-2 lg:py-4">
                <p className="font-serif italic text-2xl sm:text-[28px] lg:text-[32px] text-[#2F4F3E] leading-[1.18] select-none">
                  {t.s6.stamp1}
                  <br />
                  {t.s6.stamp2}
                </p>
                <div className="flex items-center gap-2 pt-2.5">
                  <div className="w-8 h-[1px] bg-[#2F4F3E]/60" />
                  <Heart className="w-3.5 h-3.5 text-[#2F4F3E] fill-transparent stroke-[1.8]" />
                  <div className="w-8 h-[1px] bg-[#2F4F3E]/60" />
                </div>
              </div>

              {/* Center Column: Heading, Desc, Gold Button */}
              <div className="lg:col-span-4 space-y-3 sm:space-y-3.5">
                <h2 className="font-serif text-2xl sm:text-[28px] lg:text-[30px] xl:text-[32px] text-[#0F2A1D] font-normal leading-[1.2]">
                  {t.s6.title}
                </h2>

                <p className="text-xs sm:text-[13px] text-[#4A5D52] leading-relaxed max-w-sm font-sans">
                  {t.s6.desc}
                </p>

                <div className="pt-1.5">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-[48px] sm:h-[50px] rounded-full bg-gradient-to-r from-[#ECCF96] via-[#DFBF76] to-[#C8A050] hover:from-[#F4DCAC] hover:to-[#D4AC5B] text-[#08170D] text-xs sm:text-[13.5px] font-semibold transition-all duration-300 shadow-sm group hover:scale-[1.02]"
                  >
                    <span>{t.s6.btn}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 3 Contact entries with round icons */}
              <div className="lg:col-span-4 flex justify-start lg:justify-start lg:pl-4 xl:pl-6">
                <div className="w-full max-w-[340px] space-y-3.5 sm:space-y-4">
                  <a
                    href={`tel:${t.s6.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3.5 text-xs sm:text-[13.5px] text-[#1B3A29] hover:text-[#0D2619] transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#DFCDBA] flex items-center justify-center text-[#8C6D37] shrink-0 shadow-2xs group-hover:bg-[#E5DFC9] transition-colors">
                      <Phone className="w-4 h-4 fill-[#8C6D37] text-[#8C6D37]" />
                    </div>
                    <span className="font-medium font-sans">{t.s6.phone}</span>
                  </a>

                  <a
                    href={`mailto:${t.s6.email}`}
                    className="flex items-center gap-3.5 text-xs sm:text-[13.5px] text-[#1B3A29] hover:text-[#0D2619] transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#DFCDBA] flex items-center justify-center text-[#0F2A1D] shrink-0 shadow-2xs group-hover:bg-[#E5DFC9] transition-colors">
                      <Mail className="w-4 h-4 fill-[#0F2A1D] text-[#0F2A1D]" />
                    </div>
                    <span className="font-medium font-sans">{t.s6.email}</span>
                  </a>

                  <div className="flex items-center gap-3.5 text-xs sm:text-[13.5px] text-[#1B3A29]">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#DFCDBA] flex items-center justify-center text-[#0F2A1D] shrink-0 shadow-2xs">
                      <MapPin className="w-4 h-4 fill-[#0F2A1D] text-[#0F2A1D]" />
                    </div>
                    <span className="font-medium font-sans">{t.s6.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE MODAL DIALOG FOR REAL ESTATE & INFRASTRUCTURE DOMAINS         */}
        {/* ========================================================================= */}
        {selectedDomain && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedDomain(null)}
          >
            <div
              className="relative w-full max-w-5xl xl:max-w-[1100px] max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border border-[#E8DEC8] shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDomain(null)}
                aria-label={isUz ? "Oynani yopish" : isRu ? "Закрыть окно" : isEn ? "Close modal" : isTr ? "Pencereyi kapat" : isAr ? "إغلاق النافذة" : "Modal schließen"}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 border border-[#DECDB5] flex items-center justify-center text-[#1C261E] hover:bg-[#ECCF93]/30 transition-colors z-20 shadow-xs"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 leading-tight">
                  {selectedDomain.modal.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#8D6B27] font-medium mt-1">
                  {selectedDomain.modal.subtitle}
                </p>
              </div>

              {/* Hero Image in Modal */}
              <div className="relative h-48 sm:h-60 md:h-72 w-full rounded-2xl overflow-hidden mb-6 shadow-inner border border-[#E8DEC8]">
                <Image
                  src={selectedDomain.image}
                  alt={selectedDomain.modal.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main Description */}
              <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#EAE4D7] text-xs sm:text-[13.5px] text-[#334237] leading-relaxed shadow-2xs">
                {selectedDomain.modal.description}
              </div>

              {/* 2-Column Grid: Specifications and Developer Scope */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-[#8D6B27]">
                    <Building2 className="w-4 h-4 stroke-[2]" />
                    <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                      {selectedDomain.modal.specificationsTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedDomain.modal.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                        <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-[#8D6B27]">
                    <HardHat className="w-4 h-4 stroke-[2]" />
                    <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                      {selectedDomain.modal.scopeTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedDomain.modal.scopeItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                        <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Norms & Legal Notice */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#F8F5EE] border border-[#E5D7B7] text-xs text-[#556358] leading-relaxed">
                  <div className="flex items-center gap-1.5 text-[#8D6B27] font-bold mb-1">
                    <FileText className="w-3.5 h-3.5" />
                    <span>{selectedDomain.modal.technicalTitle}</span>
                  </div>
                  <p className="text-[#3A4A3E]">{selectedDomain.modal.technicalText}</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#EAE4D7] text-xs text-[#556358] leading-relaxed">
                  <div className="flex items-center gap-1.5 text-[#8D6B27] font-bold mb-1">
                    <Info className="w-3.5 h-3.5" />
                    <span>{selectedDomain.modal.legalTitle}</span>
                  </div>
                  <p className="text-[#3A4A3E]">{selectedDomain.modal.legalText}</p>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#EAE4D7]">
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="px-5 py-2.5 rounded-full border border-[#D5B878] text-xs font-semibold text-[#142318] hover:bg-[#FAF5EE] transition-colors"
                >
                  {isUz ? "Yopish" : isRu ? "Закрыть" : isEn ? "Close" : isTr ? "Kapat" : isAr ? "إغلاق" : "Schließen"}
                </button>
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setSelectedDomain(null)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF96] to-[#D4AF67] hover:from-[#F2DAB0] hover:to-[#DEBD7A] text-[#142217] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.01]"
                >
                  <span>{selectedDomain.modal.ctaButtonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
