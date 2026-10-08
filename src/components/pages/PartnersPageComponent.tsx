"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  Target,
  ShieldCheck,
  Stethoscope,
  Building2,
  TrendingUp,
  Landmark,
  ArrowRight,
  CheckCircle2,
  FileText,
  Lock,
  X,
  Phone,
  Mail,
  MapPin,
  Heart,
  Scale,
  Sparkles,
  ChevronRight,
  Award,
  Briefcase,
  Users,
  GitFork,
  Link2,
  FileSearch,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";
import { MvzContractSection } from "@/components/sections/MvzContractSection";

interface PartnershipPillar {
  id: string;
  tag: string;
  image: string;
  iconType: "doctor" | "hospital" | "investor" | "municipality";
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
    ctaButtonText: string;
  };
}

interface PartnersPageComponentProps {
  locale?: SupportedLocale;
}

export function PartnersPageComponent({ locale = "de" }: PartnersPageComponentProps) {
  const [selectedPillar, setSelectedPillar] = useState<PartnershipPillar | null>(null);

  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const heroData = {
    title: isRu
      ? "Партнерство и инвестиции"
      : isEn
      ? "Partners & Strategic Alliances"
      : isTr
      ? "Ortaklık ve Yatırımlar"
      : isAr
      ? "الشركاء والتحالفات الاستراتيجية"
      : "Partner & Strategische Kooperationen",
    subtitle: isRu
      ? "Надежные модели сотрудничества для врачей, клиник и инвесторов"
      : isEn
      ? "Sustainable Value Creation for Physicians, Clinics, and Healthcare Investors"
      : isTr
      ? "Hekimler, klinikler ve yatırımcılar için güvenilir iş birliği modelleri"
      : isAr
      ? "خلق قيمة مستدامة للأطباء والمستشفيات والمستثمرين الصحيين"
      : "Gemeinsam Werte schaffen für das Gesundheitswesen von morgen",
    eyebrow: isRu ? "ПАРТНЕРСКАЯ СЕТЬ" : isEn ? "PARTNERSHIP ECOSYSTEM" : isTr ? "ORTAKLIK EKOSİSTEMİ" : isAr ? "منظومة الشركاء والاستثمار" : "PARTNER & INVESTOREN",
    desc: isRu
      ? "Холдинг NabiOta® объединяет медицинское превосходство, высокотехнологичную инфраструктуру и инвестиционную надежность. Мы предлагаем врачам, клиникам, муниципалитетам и инвесторам прозрачные юридические модели сотрудничества на равных."
      : isEn
      ? "The NabiOta® Health Group unites medical excellence, advanced clinical infrastructure, and financial resilience. We offer physicians, hospitals, municipalities, and institutional investors transparent, legally robust collaboration models."
      : isTr
      ? "NabiOta® Health Group Germany GmbH, üstün tıbbi uzmanlığı, ileri klinik altyapıyı ve kurumsal güvenilirliği birleştirir. Serbest çalışan hekimlere, hastanelere, belediyelere ve kurumsal ortaklara eşit düzeyde, yasal güvenceli iş birliği modelleri sunuyoruz."
      : isAr
      ? "تجمع مجموعة NabiOta® Health Group Germany GmbH بين التميز الطبي السريري، والبنية التحتية المتطورة، والنزاهة المؤسسية. نقدم للأطباء المستقلين والمستشفيات والبلديات والمستثمرين نماذج تعاون متوافقة قانونياً على قدم المساواة."
      : "Die NabiOta® Health Group Germany GmbH verbindet ärztliche Spitzenmedizin, hochmoderne Infrastruktur und unternehmerische Verlässlichkeit. Wir bieten niedergelassenen Ärzten, Krankenhäusern, Kommunen und institutionellen Partnern rechtssichere Kooperationsmodelle auf Augenhöhe.",
  };

  const heroBadges = [
    {
      icon: <Handshake className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Партнерство" : isEn ? "Reliable" : isTr ? "Güvenilir" : isAr ? "شراكة" : "Verlässliche",
      sub: isRu ? "на равных" : isEn ? "Partnership" : isTr ? "Ortaklık" : isAr ? "موثوقة" : "Partnerschaft",
    },
    {
      icon: <Scale className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Закон § 95" : isEn ? "Regulatory" : isTr ? "Yasal Uyum" : isAr ? "امتثال قانوني" : "Rechtssicher",
      sub: isRu ? "SGB V & GewO" : isEn ? "SGB V Compliant" : isTr ? "§ 95 SGB V" : isAr ? "§ 95 SGB V" : "nach SGB V",
    },
    {
      icon: <Target className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Устойчивые" : isEn ? "Sustainable" : isTr ? "Sürdürülebilir" : isAr ? "تكامل" : "Langfristige",
      sub: isRu ? "синергии" : isEn ? "Synergies" : isTr ? "Sinerjiler" : isAr ? "مستدام" : "Synergien",
    },
  ];

  const pillars: PartnershipPillar[] = [
    {
      id: "fachaerzte-nachfolge",
      tag: isRu ? "ДЛЯ ВРАЧЕЙ & ПРАКСИСОВ" : isEn ? "PHYSICIANS & PRACTICES" : isTr ? "UZMAN HEKİMLER VE MUAYENEHANELER İÇİN" : isAr ? "للأطباء والعيادات التخصصية" : "FÜR FACHÄRZTE & PRAXEN",
      image: "/images/areas/medical-departments.webp",
      iconType: "doctor",
      title: isRu
        ? "Преемственность праксисов & Интеграция в MVZ (§ 95 SGB V)"
        : isEn
        ? "Practice Succession & MVZ Integration (§ 95 SGB V)"
        : isTr
        ? "Muayenehane Devri ve MVZ Entegrasyonu (§ 95 SGB V)"
        : isAr
        ? "خلافة العيادات الطبية والاندماج في مراكز MVZ (§ 95 SGB V)"
        : "Praxisnachfolge & MVZ-Integration (§ 95 SGB V)",
      shortDesc: isRu
        ? "Структурированная передача врачебной практики, сохранение автономии, освобождение от бюрократии и доступ к передовым технологиям."
        : isEn
        ? "Structured practice transition, guaranteed medical autonomy, relief from administration, and access to state-of-the-art facilities."
        : isTr
        ? "Yasal güvenceli muayenehane devri, tam tıbbi bağımsızlık, bürokratik yükten kurtulma ve modern tıp teknolojisine erişim."
        : isAr
        ? "انتقال قانوني منظم للعيادة، حرية قرار طبي كاملة، تخفيف الأعباء الإدارية والوصول لأحدث التقنيات."
        : "Rechtssichere Praxisabgabe, volle ärztliche Weisungsfreiheit, Entlastung von bürokratischen Pflichten und Zugang zu moderner Medizintechnik.",
      modal: {
        title: isRu
          ? "Преемственность праксисов & Вхождение в структуру MVZ (§ 95 SGB V)"
          : isEn
          ? "Practice Succession & MVZ Integration Framework (§ 95 SGB V)"
          : isTr
          ? "Muayenehane Devri ve MVZ Entegrasyon Modeli (§ 95 SGB V)"
          : isAr
          ? "إطار خلافة العيادات والاندماج في مراكز الرعاية MVZ (§ 95 SGB V)"
          : "Praxisnachfolge & MVZ-Integration (§ 95 SGB V)",
        subtitle: isRu
          ? "Партнерство для практикующих врачей: справедливая оценка стоимости, сохранение команды и фокус на медицине"
          : isEn
          ? "Structured succession for established practitioners: fair valuation, team continuity, and pure medical focus"
          : isTr
          ? "Yerleşik hekimler için yapılandırılmış geçiş modelleri: adil değerleme, ekip sürekliliği ve bürokrasisiz tıp"
          : isAr
          ? "حلول انتقال مخصصة للأطباء العامين والمتخصصين: تقييم عادل، استمرار الكادر والتركيز الطبي الخالص"
          : "Strukturierte Übergangskonzepte für niedergelassene Haus- und Fachärzte ohne bürokratischen Ballast",
        description: isRu
          ? "Холдинг NabiOta® предлагает опытным и молодым врачам безопасную модель интеграции. При выходе на пенсию или желании избавиться от административного бремени вы можете передать практику в лицензированный центр MVZ холдинга. Доктор Рахимов-Фишер, как лицензированный врач, обеспечивает строгое соблюдение врачебных прав, а управляющая компания берет на себя бухгалтерию, IT, биллинг и юридические вопросы."
          : isEn
          ? "The NabiOta® Group provides a reliable pathway for practicing physicians looking for succession planning or administrative relief. Practices can transition smoothly into our licensed MVZ structures. With physician ownership led by Dr. Fischer-Rahimov, professional autonomy is strictly preserved while centralized holding services manage IT, accounting, billing, and regulatory compliance."
          : isTr
          ? "NabiOta® Grubu, muayenehane devri veya idari yükten kurtulmak isteyen genel pratisyenler ve uzman hekimler için güvenilir entegrasyon çözümleri sunar. Dr. Fischer-Rahimov'un hekim sahipliği ve liderliğinde tıbbi terapi özgürlüğü bütünüyle korunur. Holding, sizi ve ekibinizi yönetim, KV faturalandırması, personel yönetimi ve BT altyapısı yüklerinden tamamen kurtarır."
          : isAr
          ? "توفر مجموعة NabiOta® حلولاً مصممة خصيصاً لأطباء الرعاية العامة والمتخصصين المستقلين للتقاعد أو الاندماج في مراكز MVZ الحديثة. تحت الإشراف الطبي للدكتور فيشر-رحيموف، يتم الحفاظ بالكامل على حرية اتخاذ القرارات العلاجية، بينما تتولى المجموعة الإدارة العامة، ومحاسبة التأمين KV، وإدارة الموارد البشرية، والبنية التحتية لتكنولوجيا المعلومات."
          : "Die NabiOta-Gruppe bietet niedergelassenen Allgemeinmedizinern und Fachärzten maßgeschneiderte Lösungen für die Praxisnachfolge und den Einstieg in moderne MVZ-Strukturen. Unter der ärztlichen Trägerschaft von Dr. Fischer-Rahimov bleibt die volle medizinische Therapiefreiheit gewahrt. Die Holding entlastet Sie und Ihr Team vollständig von Verwaltung, KV-Abrechnung, Personalmanagement und IT-Infrastruktur.",
        specificationsTitle: isRu ? "Преимущества для врача" : isEn ? "Physician Advantages" : isTr ? "Muayenehane Sahibi İçin Avantajlar" : isAr ? "مزايا لأصحاب العيادات" : "Vorteile für Praxisinhaber",
        specifications: isRu
          ? [
              "Справедливая рыночная оценка стоимости практики и бессрочного врачебного места (Kassensitz)",
              "Полное сохранение сформированного коллектива медицинских ассистентов (MFA)",
              "Гибкие форматы дальнейшей работы: от полного руководства до частичной занятости",
              "100% освобождение от административной рутины, бухгалтерского учета и проверок KV",
              "Доступ пациентов к аппаратам 3T MRT, Low-Dose CT и реабилитационному комплексу холдинга",
              "Современные безбарьерные кабинеты и новейшее оборудование за счет холдинга",
            ]
          : isEn
          ? [
              "Fair independent valuation of practice goodwill and statutory health insurance license (Kassensitz)",
              "Full continuity of employment for existing medical assistants (MFA) and clinical staff",
              "Flexible post-transition employment models: from medical directorship to part-time clinical practice",
              "Complete relief from administrative paperwork, KV billing audits, and facility liabilities",
              "Direct patient access to university-grade 3T MRI, low-dose CT, and dedicated rehabilitation centers",
              "Modernized, barrier-free practice rooms equipped with premium diagnostic systems",
            ]
          : isTr
          ? [
              "Muayenehane değeri ve KV anlaşmalı hekim kadrosunun (Kassensitz) şeffaf ve piyasaya uygun değerlemesi",
              "Uyumlu çalışan muayenehane asistanları (MFA) için eksiksiz istihdam garantisi",
              "Esnek çalışma modelleri: Tıbbi direktörlük veya sözleşmeli hekimlik statüsünde devam",
              "Bürokrasi, KV denetimleri, BT bakımı ve işveren risklerinden %100 arınma",
              "İleri düzey teşhis cihazlarına (3T MR, Düşük Dozlu BT) ve rehabilitasyon merkezlerine doğrudan erişim",
              "En modern ergonomik ve mimari standartlara göre donatılmış muayenehane alanları",
            ]
          : isAr
          ? [
              "تقييم مالي شفاف ومستقل لقيمة العيادة ورخصة التأمين الصحي العام (Kassensitz)",
              "ضمان استمرار توظيف الكوادر التمريضية والإدارية الحالية بالعيادة (MFA)",
              "نماذج عمل مرنة بعد الانتقال: من الإدارة الطبية إلى العمل السريري الجزئي",
              "تخفيف كامل من المعاملات الورقية وتدقيق حسابات KV ومخاطر التشغيل",
              "وصول فوري ومباشر إلى أجهزة الرنين 3T والتصوير المقطعي ومراكز التأهيل التابعة للمجموعة",
              "تحديث وتجهيز غرف العيادات بأحدث المعايير الطبية والمعمارية الخالية من العوائق",
            ]
          : [
              "Transparente und marktgerechte Bewertung des Praxiswertes und der KV-Zulassung (Kassensitz)",
              "Vollständige Übernahmegarantie für eingespielte Praxismitarbeiterinnen (MFA)",
              "Flexible Arbeitszeitmodelle: Weiterbeschäftigung als ärztlicher Leiter oder im Angestelltenverhältnis",
              "Vollständige Entlastung von Bürokratie, Abrechnungsprüfungen, IT-Pflege und Arbeitgeberrisiken",
              "Unmittelbarer Zugriff auf Hochleistungsdiagnostik (3T MRT, Niedrigdosis-CT) und Reha-Zentren",
              "Praxisräumlichkeiten nach modernsten ergonomischen und baulichen Standards",
            ],
        scopeTitle: isRu ? "Процесс передачи практики" : isEn ? "Succession Pathway" : isTr ? "Muayenehane Devir Süreci" : isAr ? "خطوات انتقال العيادة" : "Ablauf der Praxisabgabe",
        scopeItems: isRu
          ? [
              "Подписание соглашения о конфиденциальности (NDA) и предварительный аудит показателей",
              "Оценка материальных и нематериальных активов по признанным стандартам (BÄK / IDW)",
              "Юридическое структурирование договора купли-продажи с согласованием в KV Nordrhein",
              "Бесшовная передача базы пациентов с соблюдением требований врачебной тайны (§ 203 StGB)",
              "Торжественный запуск обновленного праксиса в составе сети NabiOta®",
            ]
          : isEn
          ? [
              "Execution of strict Non-Disclosure Agreement (NDA) and confidential operational assessment",
              "Financial and operational appraisal using recognized medical chamber guidelines (BÄK / IDW S1)",
              "Legally certified contract drafting in direct coordination with the regional KV licensing board",
              "Compliant patient file succession under strict medical secrecy guidelines (§ 203 StGB)",
              "Seamless relaunch of the modernized practice within the NabiOta® clinical brand",
            ]
          : isTr
          ? [
              "Gizlilik anlaşmasının (NDA) imzalanması ve bağlayıcı olmayan ilk değerlendirme",
              "Federal Tabipler Birliği (BÄK) kurallarına göre muayenehane değerinin tespiti",
              "Devir sözleşmelerinin hukuki olarak hazırlanması ve KV ruhsat sürecine eşlik edilmesi",
              "Hasta kayıtlarının veri koruma mevzuatına (§ 203 StGB) uygun iki dolaplı modelle devri",
              "Merkezi holding altyapısına sorunsuz geçiş ve kurumsal entegrasyon",
            ]
          : isAr
          ? [
              "توقيع اتفاقية السرية التامة (NDA) وجلسة مشاورات أولية سرية",
              "تقييم قيمة العيادة وفقاً للإرشادات المعتمدة من نقابة الأطباء الفيدرالية (BÄK)",
              "صياغة عقود الاستحواذ المعتمدة قانونياً ومرافقة إجراءات ترخيص KV الرسمية",
              "نقل سجلات المرضى وفق ضوابط السرية الطبية وقوانين حماية البيانات (§ 203 StGB)",
              "الانتقال السلس والاندماج الكامل في البنية التحتية المركزية للمجموعة",
            ]
          : [
              "Abschluss einer Vertraulichkeitsvereinbarung (NDA) und unverbindliches Erstgespräch",
              "Ermittlung des Praxiswertes nach anerkannten Richtlinien der Bundesärztekammer (BÄK)",
              "Rechtssichere Ausarbeitung der Übernahmeverträge und Begleitung des KV-Zulassungsverfahrens",
              "Zwei-Schrank-Modell zur datenschutzkonformen Übergabe der Patientenkartei (§ 203 StGB)",
              "Reibungsloser Übergang und Integration in die zentrale Holding-Infrastruktur",
            ],
        technicalTitle: isRu ? "Правовая гарантия" : isEn ? "Statutory Compliance" : isTr ? "Yasal Güvence" : isAr ? "الضمان والامتثال القانوني" : "Rechtliche Sicherheit",
        technicalText: isRu
          ? "Все сделки по слиянию и передаче практик осуществляются в строгом соответствии с § 95 SGB V, Федеральным врачебным положением (BÄO) и профессиональным кодексом палаты врачей Северного Рейна (ÄkNo)."
          : isEn
          ? "All practice integration transactions adhere strictly to § 95 SGB V (Statutory Health Insurance Code), the Federal Medical Code (BÄO), and North Rhine Medical Chamber regulations."
          : isTr
          ? "Tüm devir ve MVZ entegrasyon işlemleri; § 95 SGB V, Federal Hekimler Yönetmeliği (BÄO) ve Kuzey Ren Tabipler Odası meslek kurallarına tam uyum içinde gerçekleştirilir."
          : isAr
          ? "تتم كافة عمليات الاستحواذ والاندماج في مراكز MVZ بما يتوافق تماماً مع المادة § 95 SGB V والنظام الطبي الفيدرالي (BÄO) ولوائح نقابة أطباء شمال الراين."
          : "Die Übernahme und MVZ-Eingliederung erfolgt streng nach den Vorgaben des § 95 SGB V, der Bundesärzteordnung (BÄO) sowie den berufsrechtlichen Statuten der Ärztekammer Nordrhein.",
        ctaButtonText: isRu ? "Запросить конфиденциальный диалог" : isEn ? "Request Confidential Dialogue" : isTr ? "Gizli İlk Görüşme Talep Edin" : isAr ? "طلب مشاورات أولية سرية" : "Vertrauliches Erstgespräch vereinbaren",
      },
    },
    {
      id: "kliniken-krankenhaeuser",
      tag: isRu ? "ДЛЯ КЛИНИК & СТАЦИОНАРОВ" : isEn ? "HOSPITALS & CLINICS" : isTr ? "KLİNİKLER VE HASTANE AĞLARI İÇİN" : isAr ? "للمستشفيات وشبكات الرعاية السريرية" : "FÜR KLINIKEN & HOSPITAL-NETZWERKE",
      image: "/images/partners/artium.webp",
      iconType: "hospital",
      title: isRu
        ? "Межсекторальное партнерство с клиниками (§ 115b SGB V / AOP)"
        : isEn
        ? "Cross-Sector Hospital Partnerships (§ 115b SGB V / AOP)"
        : isTr
        ? "Sektörler Arası Klinik İş Birlikleri (§ 115b SGB V / AOP)"
        : isAr
        ? "التحالفات السريرية المشتركة للمستشفيات (§ 115b SGB V / AOP)"
        : "Sektorenübergreifende Klinikallianzen (§ 115b SGB V / AOP)",
      shortDesc: isRu
        ? "Разгрузка стационарных отделений: амбулаторные операции, непрерывная ранняя реабилитация и патронажный уход на дому."
        : isEn
        ? "Inpatient relief: outpatient surgical suites, continuous rehabilitation transitions, and home care discharge pathways."
        : isTr
        ? "Yataklı servislerin yükünü hafifletme: ayakta cerrahi operasyonlar, kesintisiz ayakta rehabilitasyon ve evde bakım geçişi."
        : isAr
        ? "تخفيف العبء عن أجنحة التنويم: جراحات اليوم الواحد، مسارات تأهيل مستمرة ورعاية منزلية فورية."
        : "Entlastung von Bettenstationen durch ambulantes Operieren, lückenlose ambulante Reha-Ketten und HomeCare-Überleitung.",
      modal: {
        title: isRu
          ? "Межсекторальное партнерство со стационарными клиниками"
          : isEn
          ? "Cross-Sector Clinical Alliances for Hospitals"
          : isTr
          ? "Hastaneler İçin Sektörler Arası Klinik İş Birlikleri"
          : isAr
          ? "شراكات سريرية متكاملة عبر القطاعات للمستشفيات"
          : "Sektorenübergreifende Kooperationen für Krankenhäuser & Kliniken",
        subtitle: isRu
          ? "Реализация реформы стационаров: амбулаторизация (§ 115b SGB V), до- и послебольничная реабилитация"
          : isEn
          ? "Adapting to hospital reforms: outpatient surgery expansion, pre/post-acute rehab and discharge care"
          : isTr
          ? "§ 115b SGB V uyarınca ayakta tedaviye geçiş, yatarak tedavi sonrası takip ve kesintisiz taburculuk yönetimi"
          : isAr
          ? "التكيف مع إصلاحات المستشفيات: جراحة اليوم الواحد (§ 115b SGB V)، والتأهيل والمتابعة بعد الخروج"
          : "Ambulantisierung nach § 115b SGB V, poststationäre Versorgung und lückenloses Entlassmanagement",
        description: isRu
          ? "В условиях масштабной реформы больничной системы Германии клиникам необходимы надежные амбулаторные партнеры. Холдинг NabiOta® выступает стратегическим интегратором: мы принимаем пациентов на амбулаторные операции (AOP), организуем курсы ранней физиотерапии в лечебном бассейне 32°C и обеспечиваем профессиональный уход на дому (HomeCare GmbH) сразу после выписки."
          : isEn
          ? "In the wake of Germany's hospital reform, acute care hospitals require certified outpatient integration partners. The NabiOta® Group acts as a seamless extension: managing outpatient surgeries in cleanroom theaters (DIN 1946-4), initiating targeted physical rehabilitation with 32°C aquatic therapy, and deploying specialized home care nurses upon discharge."
          : isTr
          ? "Almanya'daki hastane reformu, yataklı ve ayakta tedavi sektörleri arasında yakın entegrasyon gerektirir. Entegre bir sağlık grubu olarak NabiOta, ortak hastanelerin yükünü hafifletir: En modern temiz oda ameliyathanelerinde § 115b SGB V kapsamında ayakta cerrahi operasyonları üstleniyor, doğrudan ayakta takip rehabilitasyonu (AHB) sağlıyor ve HomeCare hemşirelik servisimizle kesintisiz taburculuk yönetimi garanti ediyoruz."
          : isAr
          ? "تتطلب إصلاحات المستشفيات في ألمانيا تكاملاً وثيقاً بين القطاعين الداخلي والخارجي. وبصفتها شبكة رعاية صحية متكاملة، تخفف NabiOta العبء عن المستشفيات الشريكة: نتولى جراحات اليوم الواحد بموجب § 115b SGB V في غرف عمليات نظيفة متطورة (DIN 1946-4)، ونضمن التأهيل الطبي المباشر بعد العمليات، وندير الخروج برعاية تمريضية منزلية متخصصة."
          : "Die Krankenhausreform erfordert eine enge Verzahnung zwischen stationärem und ambulantem Sektor. Als integrierter Gesundheitsverbund entlastet NabiOta Partnerkliniken: Wir übernehmen ambulante Operationen nach § 115b SGB V in modernsten Reinraum-OPs, sichern eine unmittelbare ambulante Anschlussrehabilitation (AHB) und garantieren ein lückenloses Entlassmanagement über unseren HomeCare-Pflegedienst.",
        specificationsTitle: isRu ? "Форматы сотрудничества" : isEn ? "Cooperation Domains" : isTr ? "Hastanelerle İş Birliği Alanları" : isAr ? "مجالات التعاون مع المستشفيات" : "Kooperationsfelder mit Kliniken",
        specifications: isRu
          ? [
              "Проведение амбулаторных хирургических вмешательств по каталогу AOP (§ 115b SGB V)",
              "Прямой перевод пациентов в амбулаторный реабилитационный центр (Physio, Ergo, Logo, MTT)",
              "Квалифицированный домашний патронаж и сертифицированное ICW лечение ран после выписки",
              "Больничное лекарственное обеспечение и индивидуальное блистерирование (§ 14 ApoG)",
              "Срочный радиологический аудит и телерадиологические дежурства на базе 3T MRT / CT",
              "Предоставление временного врачебного персонала через NabiOta Medical Recruitment Services",
            ]
          : isEn
          ? [
              "Execution of cataloged outpatient procedures under § 115b SGB V in certified surgical cleanrooms",
              "Direct patient transfer into specialized outpatient rehabilitation (physiotherapy, hydrotherapy, MTT)",
              "Post-discharge HomeCare nursing and certified ICW wound management directly at patients' homes",
              "Hospital pharmacy drug supply and individual automated blister packaging under § 14 ApoG",
              "Teleradiology emergency reading and off-site cross-sectional imaging audits (3T MRI / CT)",
              "Temporary healthcare staffing support via NabiOta Medical Recruitment Services GmbH",
            ]
          : isTr
          ? [
              "Ayakta cerrahi müdahalelerin § 115b SGB V uyarınca modern temiz oda ameliyathanelerine aktarılması",
              "Ameliyat sonrası hastaların doğrudan ayakta rehabilitasyon ve fizyoterapiye sorunsuz kabulü",
              "NabiOta HomeCare tarafından uzman evde hasta bakımı ve sertifikalı ICW yara tedavisi",
              "Hastanelerin ilaç tedariği ve sitostatik hazırlama desteği (§ 14 ApoG)",
              "3T MR ve BT için teleradyolojik raporlama desteği ve kapasite tamamlama",
              "Kritik personel yetersizliklerinde esnek hekim ve hemşirelik iş gücü temini",
            ]
          : isAr
          ? [
              "نقل الجراحات الصغرى والمتوسطة إلى مراكز عمليات نظيفة متطورة وفق المادة § 115b SGB V",
              "استقبال فوري وسلس للمرضى بعد الجراحة في مراكز التأهيل والعلاج الطبيعي التابعة للمجموعة",
              "رعاية تمريضية منزلية متخصصة وعلاج معتمد للجروح (ICW) عبر NabiOta HomeCare",
              "إمداد صيدلاني للمستشفيات وتحضير الأدوية التخصصية بموجب المادة § 14 ApoG",
              "دعم تخصصي في قراءة الأشعة عن بُعد وتغطية الفحوصات المقطعية والرنين المغناطيسي 3T",
              "توفير كوادر طبية وتمريضية مؤهلة لتغطية النقص الطارئ في الكوادر",
            ]
          : [
              "Verlagerung ambulanter Eingriffe in moderne Reinraum-OP-Zentren nach § 115b SGB V",
              "Nahtlose Übernahme postoperativer Patienten in die ambulante Rehabilitation & Physiotherapie",
              "Fachgerechte häusliche Krankenpflege und ICW-Wundversorgung durch NabiOta HomeCare",
              "Krankenhausversorgung mit Arzneimitteln und Zytostatika-Herstellung (§ 14 ApoG)",
              "Teleradiologische Befundungsunterstützung und Kapazitätsübernahme bei 3T MRT und CT",
              "Flexible Personalgestellung ärztlicher und pflegerischer Fachkräfte in Engpasssituationen",
            ],
        scopeTitle: isRu ? "Экономический эффект" : isEn ? "Clinical & Economic Impact" : isTr ? "Klinik ve Ekonomik Faydalar" : isAr ? "الفوائد السريرية والاقتصادية" : "Klinische & ökonomische Vorteile",
        scopeItems: isRu
          ? [
              "Сокращение средней продолжительности пребывания на койке без потери качества лечения",
              "Снижение штрафных санкций больничных касс за превышение сроков госпитализации",
              "Высокая удовлетворенность пациентов за счет непрерывной цепочки наблюдения",
              "Оптимизация использования собственных операционных залов больницы под сложные вмешательства",
              "Совместное участие в интегрированных контрактах оказания помощи (§ 140a SGB V)",
            ]
          : isEn
          ? [
              "Significant reduction in average length of stay (ALOS) while maintaining clinical excellence",
              "Minimization of health insurance audit penalties for unnecessary inpatient hospitalization",
              "Superior patient satisfaction scores through an unbroken chain of post-discharge recovery",
              "Freeing hospital high-dependency theaters for complex tertiary inpatient cases",
              "Joint participation in integrated healthcare delivery contracts (§ 140a SGB V)",
            ]
          : isTr
          ? [
              "Tedavi kalitesinden ödün vermeden yataklı servislerde ortalama yatış süresinin belirgin kısalması",
              "Doğru ayakta tedavi yönlendirmesiyle sağlık sigortası denetim (MD) kesintilerinin önlenmesi",
              "Müdahale öncesi ve sonrasında tek muhatap sayesinde en üst düzeyde hasta memnuniyeti",
              "Hastane içi ameliyathanelerin yüksek karmaşıklıktaki yataklı vakalara odaklanabilmesi",
              "§ 140a SGB V kapsamında entegre bakım ve seçici sözleşmelere ortak katılım",
            ]
          : isAr
          ? [
              "تقليص ملموس في متوسط مدة إقامة المرضى في الأجنحة مع الحفاظ على أعلى معايير الجودة",
              "تجنب غرامات واقتطاعات تدقيق التأمين الصحي عبر توجيه الحالات للعيادات الخارجية بشكل ملائم",
              "أعلى درجات رضا المرضى بفضل وجود جهة اتصال متناسقة ومستمرة قبل الجراحة وبعدها",
              "تفريغ غرف عمليات المستشفى للحالات الجراحية الكبرى شديدة التعقيد",
              "المشاركة في عقود الرعاية المتكاملة والانتقائية بموجب المادة § 140a SGB V",
            ]
          : [
              "Spürbare Verweildauerverkürzung auf Bettenstationen bei durchgängiger Versorgungsqualität",
              "Vermeidung von MD-Prüfungsabschlägen durch sachgerechte Ambulantisierung",
              "Höchste Patientenzufriedenheit durch einheitliche Ansprechpartner vor und nach dem Eingriff",
              "Fokussierung der internen Klinik-OP-Kapazitäten auf hochkomplexe stationäre Fälle",
              "Teilnahme an Selektivverträgen und integrierter Versorgung nach § 140a SGB V",
            ],
        technicalTitle: isRu ? "Нормативная база" : isEn ? "Legal Framework" : isTr ? "Yasal Dayanaklar" : isAr ? "الأطر التشريعية المنظمة" : "Rechtsgrundlagen",
        technicalText: isRu
          ? "Сотрудничество базируется на нормах § 115b SGB V (амбулаторные операции), § 39 Abs. 1a SGB V (менеджмент выписки) и законе о реформе стационаров (Krankenhausversorgungsverbesserungsgesetz - KHVVG)."
          : isEn
          ? "Clinical partnerships operate under § 115b SGB V (Outpatient surgery), § 39(1a) SGB V (Discharge management), and the Hospital Care Improvement Act (KHVVG)."
          : isTr
          ? "İş birliği; § 115b SGB V (AOP sözleşmesi), § 39 Fıkra 1a SGB V (taburculuk yönetimi) ve Hastane Bakımını İyileştirme Yasası (KHVVG) esaslarına dayanmaktadır."
          : isAr
          ? "يرتكز التعاون على المادة § 115b SGB V (جراحات اليوم الواحد) والمادة § 39(1a) SGB V (إدارة الخروج) وقانون تحسين رعاية المستشفيات (KHVVG)."
          : "Die Zusammenarbeit stützt sich auf § 115b SGB V (AOP-Vertrag), § 39 Abs. 1a SGB V (Entlassmanagement) sowie die Leitplanken des Krankenhausversorgungsverbesserungsgesetzes (KHVVG).",
        ctaButtonText: isRu ? "Обсудить клиническое партнерство" : isEn ? "Inquire Hospital Partnership" : isTr ? "Klinik İş Birliği Talep Edin" : isAr ? "طلب استشارة شراكة سريرية" : "Klinikkooperation anfragen",
      },
    },
    {
      id: "investoren-capital",
      tag: isRu ? "ДЛЯ ИНВЕСТОРОВ & FAMILY OFFICES" : isEn ? "HEALTHCARE INVESTORS" : isTr ? "YATIRIMCILAR VE FAMILY OFFICES İÇİN" : isAr ? "للمستثمرين والمكاتب العائلية" : "FÜR INVESTOREN & FAMILY OFFICES",
      image: "/images/beratung/project-mvz.webp",
      iconType: "investor",
      title: isRu
        ? "Инвестиции в медицинскую недвижимость & 2-фазная модель"
        : isEn
        ? "Healthcare Real Estate Investments & 2-Phase Equity Model"
        : isTr
        ? "Sağlık Gayrimenkulleri ve 2 Aşamalı Ortaklık Modeli"
        : isAr
        ? "استثمارات العقارات الصحية ونموذج المساهمة ثنائي المراحل"
        : "Gesundheitsimmobilien & 2-Phasen-Beteiligungsmodell",
      shortDesc: isRu
        ? "Стабильные инвестиции в специализированную недвижимость здравоохранения: долгосрочные договоры аренды, стандарты ESG и защита капитала."
        : isEn
        ? "Resilient healthcare real estate investments: long-term commercial leases, ESG compliance, and structural capital preservation."
        : isTr
        ? "Yüksek standartlı sağlık gayrimenkullerinin alımı ve geliştirilmesi, uzun vadeli ticari kira sözleşmeleri, ESG standartları ve sağlam getiriler."
        : isAr
        ? "تطوير عقارات صحية متقدمة، عقود إيجار تجارية طويلة الأجل، معايير ESG وعوائد استثمارية متينة."
        : "Kauf und Entwicklung hochmoderner Gesundheitsimmobilien, langfristige Gewerbemietverträge, ESG-Standards und solide Renditen.",
      modal: {
        title: isRu
          ? "Инвестиции в медицинскую недвижимость & 2-фазная модель холдинга"
          : isEn
          ? "Healthcare Real Estate Investment & 2-Phase Holding Model"
          : isTr
          ? "Sağlık Gayrimenkulleri ve 2 Aşamalı Ortaklık Modeli"
          : isAr
          ? "الاستثمار في العقارات الصحية ونموذج المجموعة ذو المرحلتين"
          : "Gesundheitsimmobilien & 2-Phasen-Beteiligungsmodell",
        subtitle: isRu
          ? "Прозрачное разделение недвижимости и медицинской деятельности с защитой прав инвесторов"
          : isEn
          ? "Clear structural separation between physical real estate assets and medical operations"
          : isTr
          ? "Mülk sahipliği ile tıbbi hizmet sunumu arasında yasal güvenceli net ayrım"
          : isAr
          ? "فصل هيكلي وقانوني واضح بين ملكية الأصول العقارية والتشغيل الطبي السريري"
          : "Rechtssichere Entflechtung von Immobilieneigentum und ärztlicher Leistungserbringung",
        description: isRu
          ? "Рынок здравоохранения Германии демонстрирует высокую устойчивость к кризисам и инфляции. Холдинг NabiOta® (HRB 16787, уставный капитал 50.000 EUR) предлагает институциональным инвесторам и Family Offices участие в девелопменте медицинских центров, операционных блоков и объектов персонала через NabiOta Real Estate GmbH с долгосрочными индексированными договорами аренды (15–20 лет)."
          : isEn
          ? "German healthcare real estate offers defensive growth resilient to macroeconomic turbulence. NabiOta® Health Group Germany GmbH (HRB 16787, EUR 50,000 capital) invites institutional partners to co-invest in ambulatory surgery centers, medical centers, and healthcare quarters via NabiOta Real Estate GmbH, backed by indexed long-term leases (15–20 years)."
          : isTr
          ? "Sağlık sektörü, Avrupa'nın krizlere en dayanıklı yatırım sınıflarından biridir. NabiOta Real Estate GmbH aracılığıyla ortaklar; birinci sınıf sağlık merkezlerine, ayakta cerrahi kliniklerine ve hekim binalarına yatırım yapar. Güçlü mali yapıya sahip tıbbi işletme şirketleriyle yapılan uzun vadeli, endeksli ticari kira sözleşmeleri (15-20 yıl) öngörülebilir nakit akışı ve değer koruması sağlar."
          : isAr
          ? "يعد قطاع الرعاية الصحية من أكثر فئات الأصول مقاومة للأزمات والتقلبات الاقتصادية في أوروبا. عبر شركة NabiOta Real Estate GmbH، يستثمر الشركاء في مراكز طبية متميزة وعيادات جراحية ومبانٍ تخصصية. وتضمن عقود الإيجار التجارية طويلة الأجل والمرتبطة بالتضخم (15 إلى 20 عاماً) تدفقات نقدية مستقرة ومحمية."
          : "Der Gesundheitssektor ist eine der krisenresistentesten Anlageklassen Europas. Über die NabiOta Real Estate GmbH investieren Partner in erstklassige Gesundheitszentren, ambulante OP-Kliniken und Ärztehäuser. Langfristige, indexierte Gewerbemietverträge (15 bis 20 Jahre) mit bonitätsstarken medizinischen Betreibergesellschaften garantieren planbare Cashflows und Werterhalt.",
        specificationsTitle: isRu ? "Параметры инвестиций" : isEn ? "Investment Metrics" : isTr ? "Yatırım Profili ve Parametreleri" : isAr ? "ملف ومعايير الاستثمار" : "Investitionsprofil & Parameter",
        specifications: isRu
          ? [
              "Специализированные объекты: амбулаторные центры (MVZ), хирургические комплексы, радиология",
              "Долгосрочные индексированные договоры аренды (Triple-Net / Double-Net) сроком 15–20 лет",
              "Полное соответствие стандартам зеленого строительства и ESG (энергоэффективность KfW 40)",
              "Стабильная доходность за счет гарантированного спроса на медицинские услуги населения",
              "Четкое юридическое разделение владения зданиями и врачебных лицензий",
              "Профессиональное техническое и медицинское управление объектом (Medical Facility Management)",
            ]
          : isEn
          ? [
              "Asset class: ambulatory surgery centers, medical office buildings (MVZ), and imaging clinics",
              "Long-term inflation-indexed commercial lease agreements (Triple-Net / Double-Net) of 15–20 years",
              "Full compliance with sustainable building criteria and ESG governance (KfW 40 efficiency)",
              "Defensive yields underpinned by non-cyclical, demographic-driven healthcare demand",
              "Strict statutory demarcation between property ownership and clinical licensing",
              "End-to-end specialized technical and medical facility management by NabiOta",
            ]
          : isTr
          ? [
              "Hekim merkezleri, ayakta ameliyathaneler, tanı enstitüleri ve rehabilitasyon kliniklerine odaklanma",
              "15 ila 20 yıl vadeli uzun süreli, endeksli kira sözleşmeleri (Triple-Net / Double-Net)",
              "İleri düzey ESG sürdürülebilirlik kriterleri ve KfW 40 enerji verimliliği standartları",
              "Demografik olarak güvence altına alınmış talep sayesinde konjonktürden bağımsız savunmacı getiriler",
              "Gayrimenkul şirketi ile tıbbi MVZ şirketi arasında kesin yasal ayrım",
              "Holding tarafından sağlanan merkezi teknik ve tıbbi tesis yönetimi",
            ]
          : isAr
          ? [
              "التركيز على مجمعات الأطباء، ومراكز جراحة اليوم الواحد، ومراكز التشخيص الإشعاعي والتأهيل",
              "عقود إيجار تجارية طويلة الأجل مرتبطة بمؤشر التضخم (Triple-Net / Double-Net) لمدة 15 إلى 20 عاماً",
              "استيفاء معايير الاستدامة البيئية والاجتماعية (ESG) وكفاءة الطاقة العالية بموجب KfW 40",
              "عوائد دفاعية غير مرتبطة بتقلبات السوق مدعومة بالطلب الديمغرافي المتزايد على الصحة",
              "فصل قانوني واضح بين الكيان المالك للعقار والشركة الطبية المشغلة لمركز MVZ",
              "إدارة فنية وهندسية متخصصة للأصول والمرافق الطبية من قبل إدارة المجموعة",
            ]
          : [
              "Fokus auf Ärztehäuser, ambulante OP-Zentren, diagnostische Institute und Reha-Kliniken",
              "Langfristige, indexierte Mietverträge (Triple-Net / Double-Net) mit 15 bis 20 Jahren Laufzeit",
              "Erfüllung anspruchsvoller ESG-Nachhaltigkeitskriterien und KfW-40-Effizienzstandards",
              "Defensive, konjunkturunabhängige Erträge durch demografisch gesicherte Nachfrage",
              "Rechtssichere Entflechtung zwischen Immobilienträger und ärztlicher MVZ-Gesellschaft",
              "Zentrales technisches und medizintechnisches Gebäudemanagement durch die Holding",
            ],
        scopeTitle: isRu ? "Фазы масштабирования холдинга" : isEn ? "Holding Scaling Architecture" : isTr ? "Holdingin Aşama Yapısı" : isAr ? "هيكل مراحل التوسع المؤسسي" : "Phasenstruktur des Holdings",
        scopeItems: isRu
          ? [
              "Фаза 1: Учреждение сети MVZ под врачебным руководством доктора Рахимова-Фишера (§ 95 SGB V)",
              "Управляющая компания холдинга предоставляет централизованный сервис (биллинг, IT, маркетинг, HR)",
              "Фаза 2: Основание больничной компании (NabiOta Clinics Germany GmbH по § 30 GewO)",
              "После получения лицензии больницы (§ 108/109 SGB V) холдинг получает право прямого участия в MVZ",
              "Открытая архитектура для масштабирования платформы по всей земле Северный Рейн-Вестфалия",
            ]
          : isEn
          ? [
              "Phase 1: Establishment of outpatient MVZ centers under statutory physician entitlement of Dr. Fischer-Rahimov",
              "Holding management company delivers centralized management services via service contracts",
              "Phase 2: Establishment of inpatient clinic operating company (NabiOta Clinics Germany GmbH § 30 GewO)",
              "Upon full hospital licensure (§ 108/109 SGB V), holding directly acquires majority MVZ shares",
              "Scalable buy-and-build platform framework ready for expansion across North Rhine-Westphalia",
            ]
          : isTr
          ? [
              "Aşama 1: § 95 SGB V uyarınca hekim ayrıcalığı temelinde MVZ işletme şirketlerinin kuruluşu",
              "Holding; merkezi yönetim, BT, satın alma ve faturalandırma hizmetleri sunar",
              "Aşama 2: Hastane işletme şirketinin kurulması (NabiOta Clinics Germany GmbH, § 30 GewO)",
              "Hastane ruhsatının alınmasıyla birlikte MVZ'lerin doğrudan kurulması ve edinilmesi hakkı doğar",
              "Kuzey Ren-Vestfalya genelinde bölgesel genişleme için ölçeklenebilir platform",
            ]
          : isAr
          ? [
              "المرحلة 1: تأسيس شركات تشغيل مراكز MVZ استناداً إلى الامتياز الطبي بموجب المادة § 95 SGB V",
              "تقدم الشركة القابضة خدمات مركزية للإدارة، وتقنية المعلومات، والمشتريات، والفواتير",
              "المرحلة 2: تأسيس الشركة المشغلة للمستشفى (NabiOta Clinics Germany GmbH بموجب § 30 GewO)",
              "مع الحصول على رخصة المستشفى الرسمية، تكتسب الشركة حق التملك المباشر لمراكز MVZ",
              "منصة نمو مؤسسية جاهزة وقابلة للتوسع والتكرار عبر ولاية شمال الراين-وستفاليا",
            ]
          : [
              "Phase 1: Gründung der MVZ-Betreibergesellschaften auf Basis des ärztlichen Privilegs nach § 95 SGB V",
              "Holding erbringt zentrale Management-, IT-, Einkaufs- und Abrechnungsdienstleistungen",
              "Phase 2: Aufbau der Krankenhausträgergesellschaft (NabiOta Clinics Germany GmbH nach § 30 GewO)",
              "Mit Erhalt der Krankenhauskonzession entsteht die direkte Gründungs- und Erwerbsberechtigung für MVZ",
              "Skalierbare Plattform für den weiteren regionalen Rollout in Nordrhein-Westfalen",
            ],
        technicalTitle: isRu ? "Корпоративные реквизиты" : isEn ? "Corporate Registry" : isTr ? "Sicil ve Şirket Bilgileri" : isAr ? "البيانات المسجلة والشركة" : "Register- & Gesellschaftsdaten",
        technicalText: isRu
          ? "NabiOta® Health Group Germany GmbH зарегистрирована в торговом реестре участкового суда Мёнхенгладбаха (HRB 16787) с уставным капиталом 50.000 EUR. Юридический адрес: Aachener Straße 114, 41061 Mönchengladbach."
          : isEn
          ? "NabiOta® Health Group Germany GmbH is registered with the commercial register of Amtsgericht Mönchengladbach (HRB 16787) with a share capital of EUR 50,000. Headquarters: Aachener Straße 114, 41061 Mönchengladbach."
          : isTr
          ? "NabiOta® Health Group Germany GmbH, Mönchengladbach Sulh Mahkemesi HRB 16787 sicil numarasıyla kayıtlıdır. Esas sermaye: 50.000 EUR. Şirket adresi: Aachener Straße 114, 41061 Mönchengladbach."
          : isAr
          ? "مجموعة NabiOta® Health Group Germany GmbH مسجلة في السجل التجاري بمحكمة مونشنغلادباخ تحت رقم HRB 16787. رأس المال الأساسي: 50,000 يورو. العنوان التجاري: Aachener Straße 114, 41061 Mönchengladbach."
          : "NabiOta® Health Group Germany GmbH, HRB 16787 beim Amtsgericht Mönchengladbach. Stammkapital: 50.000 EUR. Geschäftsanschrift: Aachener Straße 114, 41061 Mönchengladbach.",
        ctaButtonText: isRu ? "Запросить инвестиционный меморандум" : isEn ? "Request Investment Briefing" : isTr ? "Yatırım Bilgi Dosyasını İsteyin" : isAr ? "طلب مذكرة الاستثمار التمهيدية" : "Investment-Exposé anfordern",
      },
    },
    {
      id: "kommunen-landkreise",
      tag: isRu ? "ДЛЯ МУНИЦИПАЛИТЕТОВ & KV" : isEn ? "MUNICIPALITIES & HEALTH BOARDS" : isTr ? "BELEDİYELER VE BÖLGE YÖNETİMLERİ İÇİN" : isAr ? "للبلديات والدوائر الحكومية الصحية" : "FÜR KOMMUNEN & LANDKREISE",
      image: "/images/areas/consulting.webp",
      iconType: "municipality",
      title: isRu
        ? "Обеспечение региональной медицинской инфраструктуры (IGZ)"
        : isEn
        ? "Regional Healthcare Infrastructure & Integrated Care (IGZ)"
        : isTr
        ? "Bölgesel Temel Sağlık Hizmetleri ve Sağlık Merkezleri (IGZ)"
        : isAr
        ? "الرعاية الصحية الإقليمية ومراكز الصحة المتكاملة (IGZ)"
        : "Regionale Grundversorgung & Gesundheitszentren (IGZ)",
      shortDesc: isRu
        ? "Создание междисциплинарных центров здоровья в малых и средних городах, устранение дефицита врачей и безбарьерная среда."
        : isEn
        ? "Establishing integrated healthcare centers in regional municipalities, closing physician deficits, and barrier-free care."
        : isTr
        ? "Şehir ve ilçelerde entegre sağlık merkezlerinin kurulması, hekim açığının giderilmesi ve engelsiz erişim."
        : isAr
        ? "إنشاء مراكز صحية متكاملة في المدن والمناطق، سد نقص الأطباء وتوفير بنية خالية من العوائق."
        : "Schaffung integrierter Gesundheitszentren in Städten und Landkreisen, Behebung ärztlicher Unterversorgung und Barrierefreiheit.",
      modal: {
        title: isRu
          ? "Обеспечение региональной медицинской помощи & Центры IGZ"
          : isEn
          ? "Regional Healthcare Security & Integrated Medical Centers"
          : isTr
          ? "Belediye Sağlık Girişimleri ve Entegre Sağlık Merkezleri (IGZ)"
          : isAr
          ? "مبادرات الرعاية البلدية ومراكز الصحة المتكاملة (IGZ)"
          : "Kommunale Versorgungsinitiativen & Integrierte Gesundheitszentren (IGZ)",
        subtitle: isRu
          ? "Партнерство с городами, бургомистрами и KV для сохранения доступной медицины в регионах"
          : isEn
          ? "Public-private partnerships with cities and regional health authorities to secure clinical coverage"
          : isTr
          ? "Temel sağlık hizmetlerini güvence altına almak için şehirler, ilçeler ve Tabipler Birlikleri ile iş birliği"
          : isAr
          ? "التعاون مع المدن والبلديات وهيئات التأمين الصحي لضمان استدامة الرعاية الطبية الأساسية"
          : "Zusammenarbeit mit Städten, Landkreisen und Kassenärztlichen Vereinigungen zur Sicherung der Grundversorgung",
        description: isRu
          ? "Многие регионы сталкиваются с дефицитом врачей первичного звена и закрытием локальных практик. Холдинг NabiOta® сотрудничает с муниципалитетами и окружными властями для создания современных междисциплинарных медицинских центров (IGZ). Мы объединяем врачей общей практики, кардиологов, хирургов, диагностику, физиотерапию и аптеку в едином многофункциональном квартале."
          : isEn
          ? "Demographic shifts and physician retirements pose acute challenges to regional healthcare delivery. NabiOta® partners with municipal administrations and health boards to plan and operate Integrated Healthcare Centers (IGZ). Under one accessible roof, we co-locate primary care doctors, diagnostic radiology, rehabilitation facilities, and home care coordination."
          : isTr
          ? "Kırsal ve banliyö bölgelerinde baş gösteren yetersiz sağlık hizmeti riski yeni ve iş birliğine dayalı çözümler gerektirmektedir. NabiOta Grubu; Entegre Sağlık Merkezleri'nin (IGZ) planlanması ve hayata geçirilmesinde belediyeleri, ilçe yönetimlerini ve kalkınma ajanslarını destekler. Aile hekimliği, uzman poliklinikler, tanı, terapi ve bakımı tek bir çatı altında topluyoruz."
          : isAr
          ? "تتطلب تحديات التغطية الصحية في المناطق الريفية وشبه الحضرية نماذج تعاونية مبتكرة. تدعم مجموعة NabiOta البلديات وإدارات المدن في تخطيط وإنشاء مراكز الصحة المتكاملة (IGZ)، حيث نجمع بين الرعاية العامة والتخصصية والتشخيص والتأهيل والتمريض تحت سقف واحد متكامل."
          : "Die drohende Unterversorgung im ländlichen und suburbanen Raum erfordert neue, kooperative Lösungsmodelle. Die NabiOta-Gruppe unterstützt Kommunen, Landkreise und Wirtschaftsförderungen bei der Konzeption und Realisierung Integrierter Gesundheitszentren (IGZ). Wir bündeln haus- und fachärztliche Versorgung, Diagnostik, Therapie und Pflege unter einem Dach.",
        specificationsTitle: isRu ? "Муниципальные решения" : isEn ? "Municipal Solutions" : isTr ? "Belediyeler İçin Çözüm Bileşenleri" : isAr ? "حلول متكاملة للبلديات" : "Lösungsbausteine für Kommunen",
        specifications: isRu
          ? [
              "Анализ потребностей населения и плотности покрытия врачебными участками",
              "Привлечение квалифицированных врачей и молодых специалистов на работу в регионе",
              "Проектирование и строительство безбарьерных медицинских центров по DIN 18040-1",
              "Интеграция амбулаторной помощи, аптеки, ортопедического салона и патронажа",
              "Организация мобильных медицинских шаттлов для маломобильных граждан преклонного возраста",
              "Совместное участие в программах региональных субсидий и инфраструктурных грантов",
            ]
          : isEn
          ? [
              "Comprehensive regional healthcare need assessments and demographic coverage analytics",
              "Recruitment and sustainable placement of certified physicians and allied health staff",
              "Architecture and turnkey delivery of barrier-free medical facilities adhering to DIN 18040-1",
              "Synergistic co-location of outpatient doctors, clinical pharmacy, medical supplies, and nursing",
              "Senior mobility support programs and patient transport coordination for rural districts",
              "Co-development within state regional development funds and municipal healthcare grants",
            ]
          : isTr
          ? [
              "KV bölgesel ihtiyaç planlarıyla yakın koordinasyon içinde ihtiyaç ve kapasite analizleri",
              "Hekim eksiği olan planlama alanları için nitelikli doktorların hedefli istihdamı ve yerleşimi",
              "DIN 18040-1 standardına uygun engelsiz sağlık merkezlerinin anahtar teslim inşası",
              "Uzman muayenehaneler, medikal malzeme merkezi, eczane ve ayakta bakımın tek çatı altında birleşimi",
              "Kırsal alandaki hareketi kısıtlı yaşlılar için hasta servis ve ulaşım hizmetlerinin geliştirilmesi",
              "Belediye hibe ve teşvik başvurularına danışmanlık ve rehberlik",
            ]
          : isAr
          ? [
              "تحليلات دقيقة للاحتياجات الصحية والتغطية الديمغرافية بالتنسيق مع خطط KV المعتمدة",
              "استقطاب وتوظيف مستدام للأطباء المؤهلين والكوادر الصحية للمناطق التي تعاني من نقص",
              "بناء وتجهيز مراكز طبية نموذجية خالية تماماً من العوائق وفق معيار DIN 18040-1",
              "تجميع العيادات التخصصية، ومستلزمات التأهيل، والصيدلية، والتمريض المنزلي في موقع واحد",
              "تطوير خدمات نقل ومساعدة لكبار السن ومحدودي الحركة في المناطق الإقليمية",
              "المرافقة والدعم في طلبات المنح الحكومية وتطوير البنية التحتية الصحية الإقليمية",
            ]
          : [
              "Bedarfs- und Versorgungsanalysen in enger Abstimmung mit den Bedarfsplänen der KV",
              "Gezielte Ansiedlung und Rekrutierung qualifizierter Ärzte für unterversorgte Planungsbereiche",
              "Schlüsselfertige Errichtung barrierefreier Ärzte- und Gesundheitszentren (DIN 18040-1)",
              "Bündelung von Facharztpraxen, Sanitätshaus, Apotheke und ambulanter Pflege an einem Standort",
              "Entwicklung von Fahrdienst- und Shuttleservices für immobilen Senioren im ländlichen Raum",
              "Begleitung kommunaler Förderanträge (z.B. Strukturfördermittel des Landes NRW)",
            ],
        scopeTitle: isRu ? "Форматы взаимодействия" : isEn ? "Cooperation Modes" : isTr ? "İş Birliği Modelleri" : isAr ? "نماذج العمل والتعاون" : "Modelle der Zusammenarbeit",
        scopeItems: isRu
          ? [
              "Муниципальное концессионное партнерство или долгосрочный договор аренды городских площадей",
              "Консультирование администраций по вопросам привлечения врачей и удержания кадров",
              "Организация дней открытых дверей, профилактических скринингов и лекций для жителей",
              "Сотрудничество с местными больницами для создания единого терапевтического континуума",
              "Развитие цифровых телемедицинских консультаций для удаленных поселений",
            ]
          : isEn
          ? [
              "Public-Private Partnerships (PPP) or long-term lease structures on municipal property",
              "Advising city councils on healthcare workforce attraction and physician retention packages",
              "Community health screening days, prevention lectures, and senior care information sessions",
              "Close operational dovetailing with local municipal clinics to prevent emergency room overcrowding",
              "Deployment of regional telemedicine stations connecting rural outposts to city medical specialists",
            ]
          : isTr
          ? [
              "Kamu-Özel İş Birlikleri (KÖİ) veya belediye arazilerinde uzun süreli üst hakkı modelleri",
              "Doktor yerleşimini teşvik programlarında belediyelere stratejik danışmanlık",
              "Yerel halk için düzenli sağlık forumları, koruyucu hekimlik günleri ve seminerler",
              "Güçlü ayakta yapılarla çevre hastanelerin acil servislerinin yükünü hafifletme",
              "Uzak yerleşim yerleri için dijital teletıp muayene istasyonlarının kurulması",
            ]
          : isAr
          ? [
              "الشراكات بين القطاعين العام والخاص (PPP) أو عقود الإيجار طويلة الأجل على أراضي البلديات",
              "تقديم المشورة لإدارات المدن حول برامج جذب الأطباء وتوطين الكفاءات الصحية",
              "تنظيم منتديات مجتمعية وأيام توعية وقائية وفحوصات دورية للسكان المحليين",
              "تخفيف الضغط على أقسام الطوارئ في المستشفيات المحيطة بفضل العيادات القوية",
              "إنشاء محطات استشارات طبية رقمية عن بُعد لربط القرى بالمراكز التخصصية",
            ]
          : [
              "Öffentlich-Private Partnerschaften (ÖPP) oder Erbpachtmodelle auf kommunalen Liegenschaften",
              "Beratung von Kommunen bei Förderprogrammen zur Ärzteansiedlung",
              "Regelmäßige Bürgerforen, Präventionstage und Gesundheitsvorträge vor Ort",
              "Entlastung der Notaufnahmen umliegender Krankenhäuser durch starke ambulante Strukturen",
              "Einrichtung digitaler Telemedizin-Sprechstunden für abgelegene Ortsteile",
            ],
        technicalTitle: isRu ? "Координация с KV" : isEn ? "KV Coordination" : isTr ? "Ruhsat Kurullarıyla Koordinasyon" : isAr ? "التنسيق مع لجان التراخيص الصحية" : "Abstimmung mit Zulassungsgremien",
        technicalText: isRu
          ? "Все проекты развертывания медицинских мощностей согласуются с планами обеспечения Kassenärztliche Vereinigung Nordrhein (KVNO) и ведомствами здравоохранения земли."
          : isEn
          ? "All medical deployment initiatives are closely coordinated with the regional allocation plans of Kassenärztliche Vereinigung Nordrhein (KVNO) and state health authorities."
          : isTr
          ? "Tüm projeler önceden Kuzey Ren Hekimler Birliği'nin (KVNO) ihtiyaç planları ve ruhsat kurullarıyla ayrıntılı olarak koordine edilir."
          : isAr
          ? "يتم تنسيق كافة الخطط والمشاريع مسبقاً بشكل تفصيلي مع خطط التوزيع ولجان التراخيص التابعة لجمعية أطباء التأمين الصحي (KVNO)."
          : "Sämtliche Vorhaben werden im Vorfeld detailliert mit den Bedarfsplänen und Zulassungsausschüssen der Kassenärztlichen Vereinigung Nordrhein (KVNO) abgestimmt.",
        ctaButtonText: isRu ? "Инициировать проект для муниципалитета" : isEn ? "Initiate Municipal Project" : isTr ? "Belediye Proje Konsepti İsteyin" : isAr ? "طلب تصور مشروع للبلديات" : "Kommunales Konzept anfragen",
      },
    },
  ];

  const processSteps = [
    {
      num: "01",
      icon: Users,
      image: "/images/partners/milestone-1-nda-clean.webp",
      title: isRu ? "Конфиденциальный диалог & NDA" : isEn ? "Confidential Dialogue & NDA" : isTr ? "İlk Temas ve Gizlilik (NDA)" : isAr ? "التواصل الأولي واتفاقية السرية (NDA)" : "Erstkontakt & Geheimhaltung",
      desc: isRu
        ? "Первая встреча и подписание взаимного соглашения о неразглашении. Мы строго защищаем ваши конфиденциальные данные."
        : isEn
        ? "Initial consultation and execution of a bilateral Non-Disclosure Agreement (NDA). We strictly protect your confidential data."
        : isTr
        ? "Verilerinizin korunması için bağlayıcı olmayan ön görüşme ve karşılıklı gizlilik anlaşması (NDA) imzalanması."
        : isAr
        ? "مشاورات تمهيدية وتوقيع اتفاقية سرية متبادلة (NDA) لضمان حماية بياناتكم ومعلوماتكم."
        : "Unverbindliches Vorgespräch und Abschluss einer beidseitigen Geheimhaltungsvereinbarung (NDA) zum Schutz Ihrer Daten.",
    },
    {
      num: "02",
      icon: FileSearch,
      image: "/images/partners/milestone-2-audit-clean.webp",
      title: isRu ? "Структурный аудит & Оценка" : isEn ? "Structural Audit & Valuation" : isTr ? "Analiz ve Değer Tespiti" : isAr ? "التحليل الشامل والتقييم المالي" : "Analyse & Wertermittlung",
      desc: isRu
        ? "Глубокий анализ материальных активов, показателей практики, кадрового потенциала и градостроительных параметров объекта."
        : isEn
        ? "In-depth due diligence covering operational goodwill, patient demographics, staff structure, and asset valuation."
        : isTr
        ? "Muayenehane verilerinin, bina durumunun, KV ruhsatlarının ayrıntılı analizi ve IDW ile BÄK standartlarına uygun değer tespiti."
        : isAr
        ? "تحليل دقيق للبيانات السريرية، والتراخيص، وتقييم شامل وفق معايير نقابة الأطباء (BÄK) ومعهد (IDW)."
        : "Detaillierte Analyse der Praxisdaten, Bausubstanz, KV-Zulassungen sowie fundierte Wertermittlung nach IDW- und BÄK-Standards.",
    },
    {
      num: "03",
      icon: ShieldCheck,
      image: "/images/partners/milestone-3-stethoscope-clean.webp",
      title: isRu ? "Договорная архитектура" : isEn ? "Contractual Structuring" : isTr ? "Kişiye Özel Sözleşmeler" : isAr ? "الصياغة والاتفاقيات المخصصة" : "Maßgeschneiderte Verträge",
      desc: isRu
        ? "Разработка прозрачной модели сделки: согласование договоров аренды, трудовых контрактов и подача документов в комитеты KV."
        : isEn
        ? "Structuring tailored contracts: drafting commercial leases, physician employment terms, and official licensing filings."
        : isTr
        ? "Şeffaf devir, kira ve iş sözleşmelerinin hazırlanması ile KV ruhsat kurulundaki sürecin eksiksiz takibi."
        : isAr
        ? "صياغة عقود استحواذ وتوظيف وإيجار شفافة ومرافقة كاملة أمام لجنة تراخيص أطباء التأمين KV."
        : "Entwurf transparenter Kauf-, Miet- und Anstellungsverträge sowie vollständige Begleitung des KV-Zulassungsausschusses.",
    },
    {
      num: "04",
      icon: TrendingUp,
      image: "/images/partners/milestone-4-integration-clean.webp",
      title: isRu ? "Интеграция & Развитие" : isEn ? "Integration & Growth" : isTr ? "Entegrasyon ve Büyüme" : isAr ? "الاندماج والنمو المستدام" : "Integration & Skalierung",
      desc: isRu
        ? "Плавный переход под крыло холдинга: подключение IT, поддержка HR, маркетинговое сопровождение и стабильное развитие."
        : isEn
        ? "Smooth onboarding into the holding: IT connectivity, HR support, marketing launch, and long-term collaborative growth."
        : isTr
        ? "Sorunsuz geçiş: BT entegrasyonu, merkezi satın alma avantajları ve uzun vadeli ortak gelişim."
        : isAr
        ? "انتقال سلس: دمج تقنية المعلومات، الاستفادة من مزايا المشتريات المركزية، ونمو استراتيجي مستمر."
        : "Reibungsloser Übergang: IT-Migration, Einbindung in zentrale Einkaufsvorteile und langfristige partnerschaftliche Weiterentwicklung.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF6] text-[#142318] selection:bg-[#EBDDC0] selection:text-[#142318]">
      <Header currentLocale={locale} />

      <main className="flex-1 pb-0">
        {/* 1. PageHero */}
        <PageHero
          locale={locale}
          breadcrumb={
            <Breadcrumb
              items={[
                { label: isRu ? "Главная" : isEn ? "Home" : isTr ? "Ana Sayfa" : isAr ? "الرئيسية" : "Startseite", href: `/${locale}` },
                { label: isRu ? "Партнеры и инвестиции" : isEn ? "Partners & Alliances" : isTr ? "Ortaklar ve Yatırımlar" : isAr ? "الشركاء والاستثمار" : "Partner & Investoren" },
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
          eyebrow={heroData.eyebrow}
          description={heroData.desc}
          badges={heroBadges}
          imageSrc="/images/heroes/hero-partners.webp"
          imagePosition="object-[center_20%]"
        />

        {/* ========================================================================= */}
        {/* SECTION 2: DIE 4 PARTNERSCHAFTSMODELLE (INTERACTIVE CARDS WITH MODALS)    */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-18 bg-[#FAF8F4] border-t border-[#F0ECE1]">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div className="space-y-2.5 max-w-2xl">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B8934A] uppercase font-sans block">
                  {isRu ? "МОДЕЛИ СОТРУДНИЧЕСТВА" : isEn ? "COOPERATION FRAMEWORK" : isTr ? "ORTAKLIK MODELLERİ" : isAr ? "أطر التعاون والشراكة" : "PARTNERSCHAFTSMODELLE"}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
                  {isRu
                    ? "Целевые решения для ключевых участников здравоохранения"
                    : isEn
                    ? "Tailored Solutions for Healthcare Stakeholders"
                    : isTr
                    ? "Sağlık Paydaşları İçin Özel Çözümler"
                    : isAr
                    ? "حلول مخصصة للجهات الفاعلة في الرعاية الصحية"
                    : "Passgenaue Lösungen für Ärzte, Kliniken und Partner"}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                  {isRu
                    ? "Четыре специализированные модели сотрудничества, разработанные в строгом соответствии с немецким законодательством (SGB V, GewO, ApoG)."
                    : isEn
                    ? "Four specialized collaboration tracks engineered under rigorous German healthcare legislation (SGB V, GewO, ApoG)."
                    : isTr
                    ? "Alman sağlık pazarının yasal ve düzenleyici gereksinimlerine göre uyarlanmış dört özel iş birliği modeli."
                    : isAr
                    ? "أربعة مسارات تعاون متخصصة مصممة وفقاً للمتطلبات التشريعية والتنظيمية للرعاية الصحية في ألمانيا."
                    : "Vier spezialisierte Kooperationsmodelle, abgestimmt auf die regulatorischen Anforderungen des deutschen Gesundheitsmarktes."}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B8934A] hover:text-[#0B2516] transition-colors group"
                >
                  <span>
                    {isRu
                      ? "Записаться на консультацию"
                      : isEn
                      ? "Schedule consultation"
                      : isTr
                      ? "İş Birliği Görüşmesi Ayarlayın"
                      : isAr
                      ? "حجز موعد لبحث التعاون"
                      : "Kooperationsgespräch vereinbaren"}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 4 Pillars Grid in all divisions card style (Photo 2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {pillars.map((pillar) => {
                const IconComponent =
                  pillar.iconType === "doctor"
                    ? Stethoscope
                    : pillar.iconType === "hospital"
                    ? Building2
                    : pillar.iconType === "investor"
                    ? TrendingUp
                    : Landmark;

                return (
                  <div
                    key={pillar.id}
                    onClick={() => setSelectedPillar(pillar)}
                    className="group bg-white rounded-2xl p-3 sm:p-3.5 border border-[#EDE8DE] hover:border-[#D5B878] shadow-[0_3px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(213,184,120,0.14)] transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {/* Top Photo */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0C1C11]/5">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Card Content Row */}
                    <div className="pt-3.5 pb-1.5 px-1 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5 min-w-0 flex-1">
                        {/* Circular Light Emblem Icon Badge */}
                        <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FAF3E8] border border-[#E8DFC8] flex items-center justify-center text-[#9E7D3B] shadow-2xs shrink-0 group-hover:bg-[#F0E5CD] group-hover:border-[#D5B878] group-hover:scale-105 transition-all">
                          <IconComponent className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.6]" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#142318] group-hover:text-[#B89650] transition-colors leading-snug line-clamp-2">
                            {pillar.title}
                          </h3>
                          <p className="text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug line-clamp-2 mt-0.5 font-sans">
                            {pillar.shortDesc}
                          </p>
                        </div>
                      </div>

                      {/* Right Round Arrow Button */}
                      <div className="w-8 h-8 rounded-full border border-[#142318]/15 group-hover:border-[#D5B878] group-hover:bg-[#D5B878] group-hover:text-[#0C1C11] flex items-center justify-center text-[#142318] transition-all shrink-0 ml-1">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: RECHTSSICHERHEIT & 2-PHASEN-ARCHITEKTUR (FROM PDF)             */}
        {/* ========================================================================= */}
        <section id="two-phase-governance" className="relative pt-0 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF7F2] border-t border-[#EDE8DE]/70 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D5B878]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#0B2516]/5 blur-3xl pointer-events-none" />

          {/* ── Full-Width Hero Banner (In True MVZ Style - Full-bleed, no card borders - Photo 1) ── */}
          <div className="relative z-10 w-full overflow-hidden pb-8 sm:pb-12 lg:pb-14 border-b border-[#EDE8DE]/70">
            {/* Soft Background Photo with smooth horizontal fade (full bleed to right screen edge) */}
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-[54%] lg:w-[50%] pointer-events-none overflow-hidden select-none">
              <Image
                src="/images/areas/atrium-lounge.webp"
                alt="Two-Phase Corporate Governance & Ownership Architecture"
                fill
                className="object-cover object-center lg:object-right"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Horizontal gradient fade into page background #FAF7F2 */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] from-0% via-[#FAF7F2]/85 via-20% via-[#FAF7F2]/30 via-45% to-transparent to-75%" />
              {/* Mobile vertical gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/60 via-20% to-transparent md:hidden" />
            </div>

            {/* Botanical foliage branch overlay (matching Photo 1 MVZ reference) */}
            <div className="absolute top-0 right-[35%] lg:right-[42%] xl:right-[44%] w-40 sm:w-52 h-72 pointer-events-none opacity-65 select-none z-10 hidden md:block">
              <Image
                src="/images/areas/botanical-branch-clean.webp"
                alt=""
                fill
                className="object-contain object-top"
                unoptimized
              />
            </div>

            {/* Hero Content Container */}
            <Container size="wide" className="relative z-10 pt-8 sm:pt-12 lg:pt-16">
              <div className="max-w-6xl mx-auto">
                <div className="max-w-xl lg:max-w-2xl">
                  {/* Eyebrow with gold lines on both sides (Photo 1) */}
                  <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                    <span className="w-6 sm:w-8 h-[1.5px] bg-[#C5A56A]" />
                    <span className="text-[10.5px] sm:text-[11.5px] font-semibold tracking-[0.24em] text-[#C5A56A] uppercase font-sans">
                      {isRu
                        ? "РЕГУЛЯТОРНАЯ АРХИТЕКТУРА И ПРАВОВОЙ КОНТРОЛЬ"
                        : isEn
                        ? "STATUTORY ARCHITECTURE & LEGAL GOVERNANCE"
                        : isTr
                        ? "YASAL MİMARİ VE ORTAKLIK YAPISI"
                        : isAr
                        ? "الهندسة القانونية وهيكل الملكية المؤسسية"
                        : "RECHTLICHE ARCHITEKTUR & BETEILIGUNGSSTRUKTUR"}
                    </span>
                    <span className="w-6 sm:w-8 h-[1.5px] bg-[#C5A56A]" />
                  </div>

                  {/* Title with styled italic phrase */}
                  <h2 className="font-serif text-[28px] sm:text-[38px] lg:text-[44px] text-[#142318] font-normal leading-[1.18] mb-3 sm:mb-3.5">
                    {isRu ? (
                      <>
                        Двухфазная модель владения и{" "}
                        <span className="font-serif italic text-[#C5A56A]">корпоративного управления</span>
                      </>
                    ) : isEn ? (
                      <>
                        Two-Phase Corporate Governance &{" "}
                        <span className="font-serif italic text-[#C5A56A]">Ownership Architecture</span>
                      </>
                    ) : isTr ? (
                      <>
                        İki Aşamalı Kurumsal Yönetim ve{" "}
                        <span className="font-serif italic text-[#C5A56A]">Ortaklık Mimarisi</span>
                      </>
                    ) : isAr ? (
                      <>
                        نموذج المرحلتين للحوكمة المؤسسية و{" "}
                        <span className="font-serif italic text-[#C5A56A]">هيكل الملكية والمساهمة</span>
                      </>
                    ) : (
                      <>
                        Zwei-Phasen-Modell der Corporate Governance &{" "}
                        <span className="font-serif italic text-[#C5A56A]">Beteiligungsarchitektur</span>
                      </>
                    )}
                  </h2>

                  {/* Supplementary gold text underneath the title (matching MVZ Photo 1 style) */}
                  <div className="mb-3.5 sm:mb-4">
                    <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.22em] text-[#C5A56A] uppercase font-sans">
                      {isRu
                        ? "ФАЗА 1 (УЧРЕЖДЕНИЕ) · ФАЗА 2 (СТАЦИОНАРНАЯ ЛИЦЕНЗИЯ § 30 GEWO)"
                        : isEn
                        ? "PHASE 1 (ESTABLISHMENT) · PHASE 2 (HOSPITAL LICENSING § 30 GEWO)"
                        : isTr
                        ? "AŞAMA 1 (KURULUŞ) · AŞAMA 2 (HASTANE RUHSATI § 30 GEWO)"
                        : isAr
                        ? "المرحلة 1 (التأسيس) · المرحلة 2 (ترخيص المستشفى § 30 GEWO)"
                        : "PHASE 1 (GRÜNDUNG) · PHASE 2 (KLINIKTRÄGERSCHAFT § 30 GEWO)"}
                    </span>
                  </div>

                  <p className="text-[13px] sm:text-[14px] text-[#556057] leading-relaxed max-w-xl">
                    {isRu
                      ? "Соблюдение жестких регуляторных требований Федерального кодекса (§ 95 SGB V) и закона о промысле (§ 30 GewO) обеспечивает абсолютную юридическую безопасность для партнеров и инвесторов."
                      : isEn
                      ? "Full compliance with statutory healthcare legislation (§ 95 SGB V) and clinic regulation (§ 30 GewO) ensures watertight legal protection for partners and investors."
                      : isTr
                      ? "Tıbbi tedavi özgürlüğü, yönetim hizmetleri ve hastane işletmeciliğinin kesin ayrımı; ortaklar ve yatırımcılar için azami yasal ve ruhsat güvencesi sağlar."
                      : isAr
                      ? "الفصل الصارم بين الاستقلالية الطبية، والخدمات الإدارية، وإدارة المستشفيات يضمن أقصى درجات الأمان القانوني والتنظيمي للشركاء والمستثمرين."
                      : "Strikte Trennung von ärztlicher Weisungsfreiheit, Managementdienstleistungen und Krankenhausträgerschaft gewährleistet maximale Rechts- und Zulassungssicherheit für Partner und Investoren."}
                  </p>
                </div>
              </div>
            </Container>
          </div>

          {/* ── 2 Phases Comparison Cards Container ── */}
          <Container size="wide" className="relative z-10 pt-8 sm:pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 items-stretch max-w-7xl mx-auto">
              {/* ============================================================= */}
              {/* CARD 1: PHASE 1 (Light Luxury Medical Interior)              */}
              {/* ============================================================= */}
              <div className="group relative overflow-hidden rounded-[26px] sm:rounded-[30px] bg-white border border-[#E2DBD0] shadow-[0_8px_30px_rgba(20,35,24,0.04)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(20,35,24,0.08)]">
                {/* Right Photo Column with organic curve and golden ribbons */}
                <div className="absolute right-0 top-0 bottom-0 w-[42%] lg:w-[44%] overflow-hidden pointer-events-none select-none hidden md:block">
                  <Image
                    src="/images/partners/phase1-office.jpg"
                    alt="Phase 1 - Active Establishment"
                    fill
                    className="object-cover object-[center_right] scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 50vw, 40vw"
                  />
                  {/* Organic wave mask transition with gold rim */}
                  <svg
                    viewBox="0 0 100 600"
                    preserveAspectRatio="none"
                    className="absolute left-0 top-0 bottom-0 h-full w-20 sm:w-24 text-white fill-current pointer-events-none z-10"
                  >
                    <path d="M0,0 L60,0 C20,160 15,280 50,420 C70,500 85,550 95,600 L0,600 Z" />
                    <path
                      d="M60,0 C20,160 15,280 50,420 C70,500 85,550 95,600"
                      fill="none"
                      stroke="#D5B878"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M63,0 C23,160 18,280 53,420 C73,500 88,550 98,600"
                      fill="none"
                      stroke="#ECCF96"
                      strokeWidth="1.2"
                      strokeOpacity="0.8"
                    />
                  </svg>
                  {/* Top golden ribbon flourish */}
                  <svg
                    viewBox="0 0 200 120"
                    className="absolute -top-1 -right-1 w-44 h-28 pointer-events-none z-10 opacity-75"
                  >
                    <path d="M200,0 Q120,20 40,0" fill="none" stroke="#D5B878" strokeWidth="2.5" />
                    <path d="M200,10 Q130,35 60,10" fill="none" stroke="#ECCF96" strokeWidth="1.5" opacity="0.6" />
                  </svg>
                  {/* Bottom golden ribbon flourish */}
                  <svg
                    viewBox="0 0 200 140"
                    className="absolute -bottom-1 -right-1 w-52 h-36 pointer-events-none z-10"
                  >
                    <path d="M0,140 Q100,70 200,90" fill="none" stroke="#C5A56A" strokeWidth="3" opacity="0.9" />
                    <path d="M15,140 Q115,85 200,105" fill="none" stroke="#ECCF96" strokeWidth="1.5" opacity="0.7" />
                    <path d="M35,140 Q130,100 200,120" fill="none" stroke="#D5B878" strokeWidth="1" opacity="0.5" />
                  </svg>
                </div>

                {/* Mobile top photo banner */}
                <div className="relative w-full h-44 sm:h-52 md:hidden overflow-hidden">
                  <Image
                    src="/images/partners/phase1-office.jpg"
                    alt="Phase 1 - Active Establishment"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                </div>

                {/* Left Content Area */}
                <div className="relative z-10 w-full md:w-[60%] lg:w-[58%] p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4 sm:space-y-4.5">
                    {/* Integrated Card Title: Numeral + Phase in Title */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="font-serif text-[40px] sm:text-[46px] lg:text-[52px] text-[#C5A56A] font-light leading-none shrink-0 tracking-tight select-none pt-0.5">
                        01
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-[18px] sm:text-[21px] lg:text-[23px] font-medium text-[#142318] leading-[1.28]">
                          <span className="text-[#C5A56A] font-sans font-bold text-xs sm:text-[13px] uppercase tracking-wider block mb-1">
                            {isRu
                              ? "Фаза 1 · Активное учреждение"
                              : isEn
                              ? "Phase 1 · Active Establishment"
                              : isTr
                              ? "Aşama 1 · Mevcut Durum ve Kuruluş"
                              : isAr
                              ? "المرحلة 1 · التأسيس النشط"
                              : "Phase 1 · Status Quo & Gründung"}
                          </span>
                          {isRu
                            ? "Врачебное участие в MVZ (§ 95 SGB V) & Централизованное управление"
                            : isEn
                            ? "Physician MVZ Equity (§ 95 SGB V) & Central Management Services"
                            : isTr
                            ? "Hekim MVZ Kuruluşu (§ 95 SGB V) ve Yönetim Sözleşmeleri"
                            : isAr
                            ? "مساهمة الأطباء في MVZ (§ 95 SGB V) وعقود الإدارة المركزية"
                            : "Ärztliche MVZ-Gründung (§ 95 SGB V) & Managementverträge"}
                        </h3>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed">
                      {isRu
                        ? "Доктор Рахимов-Фишер как лицензированный врач владеет долями в компаниях MVZ на основании установленного законом врачебного права. Холдинг NabiOta® Health Group Germany GmbH оказывает централизованные услуги управления (биллинг, IT, закупки, кадры) на основе договоров о сервисном обслуживании."
                        : isEn
                        ? "Dr. Fischer-Rahimov holds MVZ equity based on statutory physician entitlement. NabiOta® Health Group Germany GmbH delivers centralized administrative, billing, purchasing, HR, and marketing management via customized commercial service agreements."
                        : isTr
                        ? "Dr. Fischer-Rahimov, MVZ paylarını doğrudan sözleşmeli hekim sıfatı (§ 95 SGB V) kapsamında elinde tutar. NabiOta® Health Group Germany GmbH holdingi, özel hizmet sözleşmeleri aracılığıyla merkezi yönetim, faturalandırma, BT ve satın alma hizmetleri sağlar."
                        : isAr
                        ? "يمتلك الدكتور فيشر-رحيموف حصص مراكز MVZ مباشرة استناداً إلى صفته كطبيب معتمد (§ 95 SGB V). وتقدم الشركة القابضة خدمات مركزية للإدارة، والفوترة، وتكنولوجيا المعلومات، والمشتريات عبر عقود خدمات متخصصة."
                        : "Dr. Fischer-Rahimov hält die MVZ-Anteile direkt auf Basis seiner berufsrechtlichen Vertragsarzt-Eigenschaft (§ 95 SGB V). Die Holding NabiOta® Health Group Germany GmbH erbringt zentrale Management-, Abrechnungs-, IT- und Einkaufsdienstleistungen über individuelle Servicevereinbarungen."}
                    </p>

                    {/* 3 Circular Medal Items */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-[#FAF6EE] border border-[#E8DEC8] text-[#8C6D37] flex items-center justify-center shrink-0 shadow-2xs">
                          <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-[#2C3E32] font-normal leading-snug">
                          {isRu
                            ? "Полная защита врачебного суверенитета и независимости решений"
                            : isEn
                            ? "Full protection of clinical independence and diagnostic autonomy"
                            : isTr
                            ? "Tam bağımsızlık ve tıbbi tedavi özgürlüğü"
                            : isAr
                            ? "استقلالية تامة وحرية كاملة للقرار الطبي"
                            : "Volle Unabhängigkeit und ärztliche Weisungsfreiheit"}
                        </span>
                      </div>

                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-[#FAF6EE] border border-[#E8DEC8] text-[#8C6D37] flex items-center justify-center shrink-0 shadow-2xs">
                          <FileText className="w-4 h-4 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-[#2C3E32] font-normal leading-snug">
                          {isRu
                            ? "Централизованный IT-контур и биллинг с гарантией защиты данных (GDPR)"
                            : isEn
                            ? "Centralized GDPR-compliant IT, billing, and accounting systems"
                            : isTr
                            ? "Merkezi, GDPR uyumlu BT kontrol ve faturalandırma sistemi"
                            : isAr
                            ? "أنظمة مراقبة وتقنية معلومات وفوترة مركزية متوافقة تماماً مع معايير GDPR"
                            : "Zentralisiertes, DSGVO-konformes IT-Controlling & Abrechnungssystem"}
                        </span>
                      </div>

                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-[#FAF6EE] border border-[#E8DEC8] text-[#8C6D37] flex items-center justify-center shrink-0 shadow-2xs">
                          <Users className="w-4 h-4 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-[#2C3E32] font-normal leading-snug">
                          {isRu
                            ? "Правовая чистота согласований с комитетом лицензирования KV"
                            : isEn
                            ? "Clean regulatory approval process with the KV licensing board"
                            : isTr
                            ? "KV ruhsat kurulu gereksinimleriyle eksiksiz yasal uyum"
                            : isAr
                            ? "امتثال تنظيمي دقيق مع قرارات لجنة تراخيص أطباء التأمين KV"
                            : "Lückenlose Genehmigungskonformität mit dem KV-Zulassungsausschuss"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer with Gold Rule */}
                  <div className="flex items-center gap-2.5 pt-4 border-t border-[#EAE3D5]">
                    <span className="w-6 h-[1.5px] bg-[#C5A56A] shrink-0" />
                    <span className="text-[11px] sm:text-[11.5px] text-[#7A694A] font-medium tracking-wide">
                      {isRu
                        ? "Юридическая основа: § 95(1a) SGB V"
                        : isEn
                        ? "Legal Basis: § 95(1a) SGB V"
                        : isTr
                        ? "Yasal Dayanak: § 95 Fıkra 1a SGB V"
                        : isAr
                        ? "الأساس القانوني: § 95(1a) SGB V"
                        : "Rechtsgrundlage: § 95 Abs. 1a SGB V"}
                    </span>
                  </div>
                </div>
              </div>

              {/* ============================================================= */}
              {/* CARD 2: PHASE 2 (Deep Emerald Luxury Hospital Exterior)      */}
              {/* ============================================================= */}
              <div className="group relative overflow-hidden rounded-[26px] sm:rounded-[30px] bg-[#0B2116] border border-[#D5B878]/35 shadow-[0_8px_30px_rgba(20,35,24,0.12)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(20,35,24,0.18)]">
                {/* Right Photo Column with organic curve and golden ribbons */}
                <div className="absolute right-0 top-0 bottom-0 w-[42%] lg:w-[44%] overflow-hidden pointer-events-none select-none hidden md:block">
                  <Image
                    src="/images/partners/phase2-clinic.jpg"
                    alt="Phase 2 - Hospital Licensing"
                    fill
                    className="object-cover object-[center_right] scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 50vw, 40vw"
                  />
                  {/* Organic wave mask transition with gold rim */}
                  <svg
                    viewBox="0 0 100 600"
                    preserveAspectRatio="none"
                    className="absolute left-0 top-0 bottom-0 h-full w-20 sm:w-24 text-[#0B2116] fill-current pointer-events-none z-10"
                  >
                    <path d="M0,0 L35,0 C65,140 10,290 40,430 C60,510 75,560 90,600 L0,600 Z" />
                    <path
                      d="M35,0 C65,140 10,290 40,430 C60,510 75,560 90,600"
                      fill="none"
                      stroke="#ECCF96"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M38,0 C68,140 13,290 43,430 C63,510 78,560 93,600"
                      fill="none"
                      stroke="#D5B878"
                      strokeWidth="1.2"
                      strokeOpacity="0.8"
                    />
                  </svg>
                  {/* Top golden ribbon flourish */}
                  <svg
                    viewBox="0 0 200 120"
                    className="absolute -top-1 -right-1 w-44 h-28 pointer-events-none z-10 opacity-75"
                  >
                    <path d="M200,0 Q120,20 40,0" fill="none" stroke="#D5B878" strokeWidth="2.5" />
                    <path d="M200,10 Q130,35 60,10" fill="none" stroke="#ECCF96" strokeWidth="1.5" opacity="0.6" />
                  </svg>
                  {/* Bottom golden ribbon flourish */}
                  <svg
                    viewBox="0 0 200 140"
                    className="absolute -bottom-1 -right-1 w-52 h-36 pointer-events-none z-10"
                  >
                    <path d="M0,140 Q100,70 200,90" fill="none" stroke="#C5A56A" strokeWidth="3" opacity="0.9" />
                    <path d="M15,140 Q115,85 200,105" fill="none" stroke="#ECCF96" strokeWidth="1.5" opacity="0.7" />
                    <path d="M35,140 Q130,100 200,120" fill="none" stroke="#D5B878" strokeWidth="1" opacity="0.5" />
                  </svg>
                </div>

                {/* Mobile top photo banner */}
                <div className="relative w-full h-44 sm:h-52 md:hidden overflow-hidden">
                  <Image
                    src="/images/partners/phase2-clinic.jpg"
                    alt="Phase 2 - Hospital Licensing"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2116] via-[#0B2116]/40 to-transparent" />
                </div>

                {/* Left Content Area */}
                <div className="relative z-10 w-full md:w-[60%] lg:w-[58%] p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4 sm:space-y-4.5">
                    {/* Integrated Card Title: Numeral + Phase in Title */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="font-serif text-[40px] sm:text-[46px] lg:text-[52px] text-[#C5A56A] font-light leading-none shrink-0 tracking-tight select-none pt-0.5">
                        02
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-[18px] sm:text-[21px] lg:text-[23px] font-medium text-white leading-[1.28]">
                          <span className="text-[#ECCF96] font-sans font-bold text-xs sm:text-[13px] uppercase tracking-wider block mb-1">
                            {isRu
                              ? "Фаза 2 · Больничная лицензия"
                              : isEn
                              ? "Phase 2 · Hospital Licensing"
                              : isTr
                              ? "Aşama 2 · Hastane Ruhsatı"
                              : isAr
                              ? "المرحلة 2 · ترخيص المستشفى"
                              : "Phase 2 · Krankenhauszulassung"}
                          </span>
                          {isRu
                            ? "NabiOta Clinics Germany GmbH (§ 30 GewO) & Прямое владение"
                            : isEn
                            ? "NabiOta Clinics Germany GmbH (§ 30 GewO) & Direct Equity"
                            : isTr
                            ? "NabiOta Clinics Germany GmbH (§ 30 GewO) ve Doğrudan Sahiplik"
                            : isAr
                            ? "NabiOta Clinics Germany GmbH (§ 30 GewO) والملكية المباشرة"
                            : "NabiOta Clinics Germany GmbH (§ 30 GewO) & Direktes Halten"}
                        </h3>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[12.5px] sm:text-[13px] text-white/80 leading-relaxed">
                      {isRu
                        ? "Холдинг учреждает компанию управления клиникой (NabiOta Clinics Germany GmbH nach § 30 GewO). После получения лицензии стационарной больницы (§ 108/109 SGB V) компания становится полноправным учредителем MVZ без необходимости личного врачебного участия, открывая путь для прямого институционального инвестирования."
                        : isEn
                        ? "The holding establishes the hospital operating company (NabiOta Clinics Germany GmbH § 30 GewO). Upon hospital licensing (§ 108/109 SGB V), the company acquires statutory entitlement to directly own and operate MVZ centers, enabling streamlined institutional equity expansion."
                        : isTr
                        ? "Holding, yataklı tedavi işletme şirketini (NabiOta Clinics Germany GmbH nach § 30 GewO) kurar. Resmi planlama hastanesi (§ 108/109 SGB V) ruhsatının alınmasıyla birlikte şirket, MVZ'lerin doğrudan kurucusu olma hakkını kazanır. Hisseler artık şahsi hekim bağlılığı olmaksızın doğrudan tutulabilir."
                        : isAr
                        ? "تؤسس المجموعة الشركة المشغلة للمستشفى (NabiOta Clinics Germany GmbH بموجب § 30 GewO). ومع الحصول على اعتماد المستشفى الرسمي (§ 108/109 SGB V)، تكتسب الشركة الأهلية القانونية المباشرة لتملك مراكز MVZ دون الحاجة لصفة الطبيب الفردية، مما يمهد الطريق لضخ استثمارات مؤسسية مباشرة."
                        : "Die Holding baut die stationäre Betreibergesellschaft (NabiOta Clinics Germany GmbH nach § 30 GewO) auf. Mit Erhalt der Zulassung als Plankrankenhaus (§ 108/109 SGB V) erwirbt die Gesellschaft die unmittelbare gesetzliche Gründungsberechtigung für MVZ. Anteile können sodann direkt und ohne persönliche Arztbindung gehalten werden."}
                    </p>

                    {/* 3 Circular Medal Items */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-[#132E1E] border border-[#D5B878]/40 text-[#ECCF96] flex items-center justify-center shrink-0 shadow-2xs">
                          <GitFork className="w-4 h-4 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-white/90 font-normal leading-snug">
                          {isRu
                            ? "Прямое корпоративное владение долями MVZ клинической компанией"
                            : isEn
                            ? "Direct corporate ownership of MVZ subsidiaries by hospital operating company"
                            : isTr
                            ? "MVZ iştiraklerinin doğrudan hastane işletme şirketi tarafından sahiplenilmesi"
                            : isAr
                            ? "ملكية مؤسسية مباشرة لمراكز MVZ التابعة عبر الشركة المشغلة للمستشفى"
                            : "Direkte Trägerschaft der MVZ-Töchter durch die Krankenhausträgergesellschaft"}
                        </span>
                      </div>

                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-[#132E1E] border border-[#D5B878]/40 text-[#ECCF96] flex items-center justify-center shrink-0 shadow-2xs">
                          <TrendingUp className="w-4 h-4 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-white/90 font-normal leading-snug">
                          {isRu
                            ? "Институциональная масштабируемость и готовность к синдикации капитала"
                            : isEn
                            ? "Institutional scalability and readiness for major equity syndication"
                            : isTr
                            ? "Büyük ölçekli özkaynak sendikasyonları için kurumsal ölçeklenebilirlik"
                            : isAr
                            ? "قابلية توسع مؤسسية عالية للتحالفات الاستثمارية وضخ رؤوس الأموال الكبرى"
                            : "Institutionelle Skalierbarkeit für größere Eigenkapitalsyndizierungen"}
                        </span>
                      </div>

                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-[#132E1E] border border-[#D5B878]/40 text-[#ECCF96] flex items-center justify-center shrink-0 shadow-2xs">
                          <Link2 className="w-4 h-4 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-white/90 font-normal leading-snug">
                          {isRu
                            ? "Непрерывный континуум между стационаром и амбулаторными центрами"
                            : isEn
                            ? "Unbroken continuum between acute hospital wards and outpatient centers"
                            : isTr
                            ? "Akut klinik ile MVZ merkezleri arasında kesintisiz bakım zinciri"
                            : isAr
                            ? "سلسلة رعاية متصلة وبلا انقطاع بين المستشفى الحاد ومراكز MVZ التابعة"
                            : "Lückenloser Versorgungskontinuum zwischen Akutklinik und MVZ-Zentren"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer with Gold Rule */}
                  <div className="flex items-center gap-2.5 pt-4 border-t border-white/10">
                    <span className="w-6 h-[1.5px] bg-[#C5A56A] shrink-0" />
                    <span className="text-[11px] sm:text-[11.5px] text-[#ECCF96] font-medium tracking-wide">
                      {isRu
                        ? "Юридическая основа: § 30 GewO / § 108 SGB V / § 95(1a) SGB V"
                        : isEn
                        ? "Legal Basis: § 30 GewO / § 108 SGB V / § 95(1a) SGB V"
                        : isTr
                        ? "Yasal Dayanak: § 30 GewO / § 108 SGB V / § 95 Fıkra 1a SGB V"
                        : isAr
                        ? "الأساس القانوني: § 30 GewO / § 108 SGB V / § 95(1a) SGB V"
                        : "Rechtsgrundlage: § 30 GewO / § 108 SGB V / § 95 Abs. 1a SGB V"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 3B: VERTRAGLICHE VERBINDUNG ZWISCHEN HOLDING UND MVZ (PDF III) */}
        <MvzContractSection locale={locale} />

        {/* ========================================================================= */}
        {/* SECTION 4: KENNZAHLEN & HOLDING-STÄRKE (METRICS RIBBON)                   */}
        {/* ========================================================================= */}
        <section className="relative bg-[#07190F] text-white py-12 sm:py-16 overflow-hidden border-y border-[#D5B878]/30">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/botanical-gold-bg.webp"
              alt="Botanical Texture"
              fill
              className="object-cover object-center opacity-85 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07190F]/90 via-[#07190F]/80 to-[#07190F]/90" />
          </div>

          <Container className="relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECCF96]">
                  50.000 €
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {isRu
                    ? "Уставный капитал"
                    : isEn
                    ? "Registered Capital"
                    : isTr
                    ? "Esas Sermaye"
                    : isAr
                    ? "رأس المال المسجل"
                    : "Stammkapital"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isRu
                    ? "HRB 16787 Мёнхенгладбах"
                    : isEn
                    ? "HRB 16787 Mönchengladbach"
                    : isTr
                    ? "HRB 16787 Mönchengladbach"
                    : isAr
                    ? "HRB 16787 مونشنغلادباخ"
                    : "HRB 16787 Mönchengladbach"}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECCF96]">
                  10
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {isRu
                    ? "Дочерних обществ"
                    : isEn
                    ? "Group Subsidiaries"
                    : isTr
                    ? "Grup İştiraki"
                    : isAr
                    ? "شركات تابعة للمجموعة"
                    : "Tochtergesellschaften"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isRu
                    ? "3 стратегические ветви"
                    : isEn
                    ? "3 strategic branches"
                    : isTr
                    ? "3 stratejik sütun"
                    : isAr
                    ? "3 قطاعات استراتيجية"
                    : "3 strategische Säulen"}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECCF96]">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {isRu
                    ? "Правовая чистота"
                    : isEn
                    ? "Regulatory Compliance"
                    : isTr
                    ? "Yasal Güvence"
                    : isAr
                    ? "امتثال قانوني كامل"
                    : "Rechtssicherheit"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isRu
                    ? "KV, SGB V & Berufsordnung"
                    : isEn
                    ? "German healthcare standards"
                    : isTr
                    ? "KV ve meslek mevzuatına uygun"
                    : isAr
                    ? "متوافق مع لوائح KV وقوانين الصحة"
                    : "KV- & berufsrechtskonform"}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECCF96]">
                  32°C & 3T
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {isRu
                    ? "Инфраструктура High-End"
                    : isEn
                    ? "High-End Technology"
                    : isTr
                    ? "İleri Teknoloji"
                    : isAr
                    ? "تقنيات وبنية سريرية فائقة"
                    : "Spitzentechnologie"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isRu
                    ? "Бассейн, 3T MRT, чистые OP"
                    : isEn
                    ? "Aquatic rehab & 3T MRI"
                    : isTr
                    ? "Hidroterapi havuzu ve temiz oda OP"
                    : isAr
                    ? "حوض تأهيل مائي وغرف عمليات معقمة"
                    : "Bewegungsbad & Reinraum-OP"}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: DER STRUKTURIERTE PARTNERSCHAFTSPROZESS (4 SCHRITTE)           */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-18 lg:py-20 bg-[#FAF8F4] border-t border-[#EBE6DC]">
          <Container size="wide">
            {/* Section Header */}
            <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
              <div className="flex items-center justify-center gap-2 mb-1.5 sm:mb-2">
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#C5A56A] uppercase font-sans">
                  {isRu
                    ? "СТРУКТУРИРОВАННЫЙ ПРОЦЕСС"
                    : isEn
                    ? "STRUCTURED ROADMAP"
                    : isTr
                    ? "YAPILANDIRILMIŞ SÜREÇ"
                    : isAr
                    ? "خارطة طريق منظمة"
                    : "DER PARTNERSCHAFTSPROZESS"}
                </span>
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#C5A56A]" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0B2516] font-normal leading-tight">
                {isRu ? (
                  <>
                    Четыре шага к{" "}
                    <span className="font-serif italic text-[#C5A56A]">успешному партнерству</span>
                  </>
                ) : isEn ? (
                  <>
                    Four Milestones to a{" "}
                    <span className="font-serif italic text-[#C5A56A]">Successful Partnership</span>
                  </>
                ) : isTr ? (
                  <>
                    4 Yapılandırılmış Adımda{" "}
                    <span className="font-serif italic text-[#C5A56A]">Ortaklığa</span>
                  </>
                ) : isAr ? (
                  <>
                    أربع مراحل منظمة نحو{" "}
                    <span className="font-serif italic text-[#C5A56A]">الشراكة الناجحة</span>
                  </>
                ) : (
                  <>
                    In 4 strukturierten Schritten zur{" "}
                    <span className="font-serif italic text-[#C5A56A]">Partnerschaft</span>
                  </>
                )}
              </h2>
              <p className="text-xs sm:text-[13.5px] text-[#4A5D52] leading-relaxed max-w-xl mx-auto">
                {isRu
                  ? "Прозрачный, конфиденциальный и юридически выверенный процесс: от первого контакта до интеграции."
                  : isEn
                  ? "A discreet, transparent, and legally guided pathway from initial dialogue to operational integration."
                  : isTr
                  ? "Gizlilik, güvenilirlik ve hızlı uygulama, ortaklık sürecimizin temel özellikleridir."
                  : isAr
                  ? "السرية والشفافية والتنفيذ الدقيق تميز مسار انضمام الشركاء إلى شبكتنا."
                  : "Diskretion, Verlässlichkeit und zügige Umsetzung kennzeichnen unseren partnerschaftlichen Onboarding-Prozess."}
              </p>
            </div>

            {/* 4 Photo-Backed Cards Grid Matching Photo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch max-w-7xl mx-auto">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-[22px] sm:rounded-[24px] bg-[#FCFAF7] p-5 sm:p-6 lg:p-6.5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(20,35,24,0.08)] ${
                    idx === 0
                      ? "border-[1.5px] border-[#55755E] shadow-[0_4px_24px_rgba(85,117,94,0.08)]"
                      : "border border-[#E7E1D4] shadow-[0_4px_20px_rgba(20,35,24,0.03)] hover:border-[#8C6D37]/50"
                  }`}
                >
                  {/* Top-right soft photo container with delicate fade */}
                  <div className="absolute right-0 top-0 w-[54%] sm:w-[50%] h-28 sm:h-32 pointer-events-none overflow-hidden select-none z-0">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover object-right-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                    {/* Horizontal fade into card background #FCFAF7 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF7] via-[#FCFAF7]/40 to-transparent" />
                    {/* Bottom fade into card background #FCFAF7 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7] via-[#FCFAF7]/30 to-transparent" />
                  </div>

                  {/* Top Content: Medallion and Numeral, Title, Description */}
                  <div className="relative z-10 space-y-3.5 sm:space-y-4">
                    {/* Medallion + Serif Italic Number */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF5EB] border border-[#E5DAC6] flex items-center justify-center text-[#4A6353] shadow-2xs shrink-0 group-hover:border-[#C5A56A] group-hover:text-[#274632] transition-colors">
                        <step.icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <span className="font-serif italic text-2xl sm:text-[27px] text-[#C5A56A] font-light leading-none select-none pl-0.5">
                        {step.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[18px] sm:text-[19px] lg:text-[20px] font-medium text-[#142318] leading-[1.25]">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}

        {/* ========================================================================= */}
        {/* SECTION 6: VERTRAULICHER KONTAKT (DESK AESTHETIC MATCHING BERATUNG)       */}
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
              {/* Left Column: Statement stamp with subtle heart */}
              <div className="lg:col-span-4 flex flex-col justify-center py-2 lg:py-4">
                <p className="font-serif italic text-2xl sm:text-[28px] lg:text-[32px] text-[#2F4F3E] leading-[1.18] select-none">
                  {isRu
                    ? "Давайте обсудим"
                    : isEn
                    ? "Let's Shape the"
                    : isTr
                    ? "Geleceği Birlikte"
                    : isAr
                    ? "معاً نبني"
                    : "Gemeinsam Zukunft"}
                  <br />
                  {isRu
                    ? "ваше партнерство."
                    : isEn
                    ? "Future Together."
                    : isTr
                    ? "Şekillendirelim. ♡"
                    : isAr
                    ? "مستقبل الرعاية. ♡"
                    : "gestalten. ♡"}
                </p>
                <div className="flex items-center gap-2 pt-2.5">
                  <div className="w-8 h-[1px] bg-[#2F4F3E]/60" />
                  <Heart className="w-3.5 h-3.5 text-[#2F4F3E] fill-transparent stroke-[1.8]" />
                  <div className="w-8 h-[1px] bg-[#2F4F3E]/60" />
                </div>
              </div>

              {/* Center Column: Eyebrow, Heading, Desc, Gold Button */}
              <div className="lg:col-span-4 space-y-3 sm:space-y-3.5">
                <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                  {isRu
                    ? "КОНФИДЕНЦИАЛЬНЫЙ КОНТАКТ"
                    : isEn
                    ? "CONFIDENTIAL DIALOGUE"
                    : isTr
                    ? "GİZLİ GÖRÜŞME"
                    : isAr
                    ? "مشاورات سرية"
                    : "VERTRAULICHER DIALOG"}
                </span>

                <h2 className="font-serif text-2xl sm:text-[28px] lg:text-[30px] xl:text-[32px] text-[#0F2A1D] font-normal leading-[1.2]">
                  {isRu
                    ? "Свяжитесь с нами"
                    : isEn
                    ? "Initiate Your Partnership"
                    : isTr
                    ? "Sizinle görüşmeyi sabırsızlıkla bekliyoruz."
                    : isAr
                    ? "نتطلع إلى بدء المشاورات معكم."
                    : "Wir freuen uns auf den Dialog."}
                </h2>

                <p className="text-xs sm:text-[13px] text-[#4A5D52] leading-relaxed max-w-sm font-sans">
                  {isRu
                    ? "Будь то преемственность праксиса, межсекторальное партнерство с клиникой или инвестиции — мы гарантируем полную конфиденциальность."
                    : isEn
                    ? "Whether practice succession, clinical hospital networks, or healthcare equity — we ensure maximum confidentiality."
                    : isTr
                    ? "İster muayenehane devri, ister klinik ağı, ister gayrimenkul yatırımı olsun: Yönetimimiz size gizlilik içinde ve memnuniyetle danışmanlık sağlar."
                    : isAr
                    ? "سواء كان الأمر يتعلق بخلافة عيادة، أو تحالفات المستشفيات، أو الاستثمار العقاري: يسر إدارتنا تقديم الاستشارة السرية المناسبة دون أي التزامات مسبقة."
                    : "Ob Praxisabgabe, Kliniknetzwerk oder Immobilieninvestment: Unser Vorstand berät Sie gerne diskret und unverbindlich."}
                </p>

                <div className="pt-1.5">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-[48px] sm:h-[50px] rounded-full bg-gradient-to-r from-[#ECCF96] via-[#DFBF76] to-[#C8A050] hover:from-[#F4DCAC] hover:to-[#D4AC5B] text-[#08170D] text-xs sm:text-[13.5px] font-semibold transition-all duration-300 shadow-sm group hover:scale-[1.02]"
                  >
                    <span>
                      {isRu
                        ? "Записаться на встречу"
                        : isEn
                        ? "Request appointment"
                        : isTr
                        ? "Görüşme Ayarlayın"
                        : isAr
                        ? "طلب موعد اجتماع"
                        : "Gespräch vereinbaren"}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 3 Contact entries with round icons */}
              <div className="lg:col-span-4 flex justify-start lg:justify-start lg:pl-4 xl:pl-6">
                <div className="w-full max-w-[340px] space-y-3.5 sm:space-y-4">
                  <a
                    href="tel:+4921614794000"
                    className="flex items-center gap-3.5 text-xs sm:text-[13.5px] text-[#1B3A29] hover:text-[#0D2619] transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#DFCDBA] flex items-center justify-center text-[#8C6D37] shrink-0 shadow-2xs group-hover:bg-[#E5DFC9] transition-colors">
                      <Phone className="w-4 h-4 fill-[#8C6D37] text-[#8C6D37]" />
                    </div>
                    <span className="font-medium font-sans">+49 2161 4794000</span>
                  </a>

                  <a
                    href="mailto:partner@nabiota-health-group.de"
                    className="flex items-center gap-3.5 text-xs sm:text-[13.5px] text-[#1B3A29] hover:text-[#0D2619] transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#DFCDBA] flex items-center justify-center text-[#0F2A1D] shrink-0 shadow-2xs group-hover:bg-[#E5DFC9] transition-colors">
                      <Mail className="w-4 h-4 fill-[#0F2A1D] text-[#0F2A1D]" />
                    </div>
                    <span className="font-medium font-sans">partner@nabiota-health-group.de</span>
                  </a>

                  <div className="flex items-center gap-3.5 text-xs sm:text-[13.5px] text-[#1B3A29]">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#DFCDBA] flex items-center justify-center text-[#0F2A1D] shrink-0 shadow-2xs">
                      <MapPin className="w-4 h-4 fill-[#0F2A1D] text-[#0F2A1D]" />
                    </div>
                    <span className="font-medium font-sans">Mönchengladbach, Germany</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE MODAL DIALOG: PARTNERSHIP PILLARS                             */}
        {/* ========================================================================= */}
        {selectedPillar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedPillar(null)}
          >
            <div
              className="relative w-full max-w-5xl xl:max-w-[1100px] max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border border-[#E8DEC8] shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPillar(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#EFE8D8] hover:bg-[#E2D5BE] text-[#0E281C] flex items-center justify-center transition-colors shadow-2xs z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 mb-6 pr-12">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-[1.5px] bg-[#C5A56A]" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#C5A56A] uppercase font-sans">
                    {selectedPillar.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E281C] leading-tight">
                  {selectedPillar.modal.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#8D6B27]">
                  {selectedPillar.modal.subtitle}
                </p>
              </div>

              {/* Modal Body: Description */}
              <div className="space-y-4 mb-7 text-xs sm:text-sm text-[#405448] leading-relaxed border-t border-[#E8DEC8] pt-5">
                <p>{selectedPillar.modal.description}</p>
              </div>

              {/* Two-Column Grid: Specifications & Scope */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-7">
                {/* Column 1: Advantages & Features */}
                <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E5DAC4] space-y-3">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#0E281C] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E6845] shrink-0" />
                    <span>{selectedPillar.modal.specificationsTitle}</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-[#33473B]">
                    {selectedPillar.modal.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E6845] shrink-0 mt-1.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Scope & Process */}
                <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E5DAC4] space-y-3">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#0E281C] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#8D6B27] shrink-0" />
                    <span>{selectedPillar.modal.scopeTitle}</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-[#33473B]">
                    {selectedPillar.modal.scopeItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8D6B27] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Regulatory & Safety Standards Bar */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF2ED] border border-[#C5DDCB] flex items-start gap-3.5 mb-7">
                <ShieldCheck className="w-5 h-5 text-[#215E39] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="font-sans text-xs sm:text-[13px] font-bold text-[#143B23]">
                    {selectedPillar.modal.technicalTitle}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-[#30533C] leading-relaxed">
                    {selectedPillar.modal.technicalText}
                  </p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E8DEC8]">
                <button
                  type="button"
                  onClick={() => setSelectedPillar(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#D5C7B0] text-xs font-semibold text-[#405448] hover:bg-[#EFE8D8] transition-colors order-2 sm:order-1"
                >
                  {isRu
                    ? "Закрыть окно"
                    : isEn
                    ? "Close window"
                    : isTr
                    ? "Pencereyi Kapat"
                    : isAr
                    ? "إغلاق النافذة"
                    : "Schließen"}
                </button>

                <Link
                  href={`/${locale}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0B2516] hover:bg-[#163D29] text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md group order-1 sm:order-2"
                >
                  <span>{selectedPillar.modal.ctaButtonText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
