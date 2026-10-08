"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Home,
  Hospital,
  Clock,
  Stethoscope,
  Pill,
  Building2,
  Accessibility,
  HeartHandshake,
  Brain,
  Headset,
  Check,
  Star,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Plus,
  Minus,
  X,
  Activity,
  FileText,
  Sparkles,
  Info,
  Calendar,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";
import { HomeCareCompanySection } from "@/components/sections/HomeCareCompanySection";
import { SanitaetshausCompanySection } from "@/components/sections/SanitaetshausCompanySection";
import { PharmacyCompanySection } from "@/components/sections/PharmacyCompanySection";

interface Props {
  locale?: SupportedLocale;
}

export interface CareServiceModalData {
  id: string;
  badge: string;
  image: string;
  iconType: "stethoscope" | "award" | "heart" | "shield" | "pill" | "users" | "accessibility" | "home";
  title: string;
  shortDesc: string;
  modal: {
    title: string;
    subtitle: string;
    description: string;
    indicationsTitle: string;
    indications: string[];
    scopeTitle: string;
    scopeItems: string[];
    billingTitle: string;
    billingText: string;
    qualityTitle: string;
    qualityText: string;
    ctaButtonText: string;
  };
}

export function PflegePageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedService, setSelectedService] = useState<CareServiceModalData | null>(null);
  const [selectedSupplyModal, setSelectedSupplyModal] = useState<CareServiceModalData | null>(null);

  // Lock body scroll and listen for Escape key on modal open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
        setSelectedSupplyModal(null);
      }
    };

    if (selectedService || selectedSupplyModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService, selectedSupplyModal]);

  // Standard Header/Hero Data
  const heroData = {
    title: isRu
      ? "Сестринский уход & патронаж"
      : isEn
      ? "Nursing Care & HomeCare"
      : isTr
      ? "Evde Bakım & Hemşirelik Hizmetleri"
      : isAr
      ? "التمريض المنزلي والرعاية المتكاملة"
      : "Pflege & HomeCare",
    subtitle: isRu
      ? "NabiOta HomeCare GmbH – Забота и лечение на дому"
      : isEn
      ? "NabiOta HomeCare GmbH – Compassionate Care at Home"
      : isTr
      ? "NabiOta HomeCare GmbH – Alışık Olduğunuz Ev Ortamında Saygın ve Şefkatli Bakım"
      : isAr
      ? "NabiOta HomeCare GmbH – رعاية كريمة ودافئة في محيطكم الأسري المألوف"
      : "NabiOta HomeCare GmbH – Würdevolle Fürsorge im vertrauten Umfeld",
    eyebrow: isRu
      ? "NABIOTA HOMECARE GMBH • SGB V & SGB XI"
      : isEn
      ? "NABIOTA HOMECARE GMBH • SGB V & SGB XI"
      : isTr
      ? "NABIOTA HOMECARE GMBH • SGB V & SGB XI"
      : isAr
      ? "NABIOTA HOMECARE GMBH • SGB V & SGB XI"
      : "NABIOTA HOMECARE GMBH • SGB V & SGB XI",
    desc: isRu
      ? "NabiOta HomeCare GmbH обеспечивает квалифицированный амбулаторный сестринский уход, медицинскую помощь по назначению врачей (SGB V), сертифицированное ведение ран (ICW®) и базовый уход (SGB XI) в привычном домашнем окружении — с высочайшим уважением к достоинству человека и поддержкой его близких."
      : isEn
      ? "NabiOta HomeCare GmbH provides accredited outpatient nursing care, prescribed medical treatment nursing (SGB V), certified wound care (ICW®), and personal care support (SGB XI) at home — preserving personal independence, dignity, and active relief for family caregivers."
      : isTr
      ? "NabiOta HomeCare GmbH, ev ortamında güvenilir ve ihtiyaca uygun bakım sunar. Hizmet yelpazemiz hekim tarafından reçete edilen tedavi bakımını (SGB V), sertifikalı yara yönetimini (ICW®), vücut odaklı temel bakımı (SGB XI) ve hastane taburculuğu sonrası kesintisiz geçiş yönetimini kapsar — saygı, şefkat ve tıbbi uzmanlıkla."
      : isAr
      ? "تضمن شركة NabiOta HomeCare GmbH رعاية تمريضية منزلية موثوقة ومفصلة وفق احتياجاتكم. تشمل خدماتنا الرعاية الطبية والعلاجية الموصوفة من الطبيب (SGB V)، إدارة وعلاج الجروح المعتمدة (ICW®)، الرعاية الشخصية الأساسية (SGB XI)، وإدارة الانتقال السلس بعد الخروج من المستشفى — بروح من الاحترام والاهتمام والخبرة التمريضية المتخصصة."
      : "Die NabiOta HomeCare GmbH gewährleistet eine verlässliche, bedarfsgerechte Pflege im häuslichen Umfeld. Unser Spektrum umfasst die ärztlich verordnete Behandlungspflege (SGB V), zertifiziertes Wundmanagement (ICW®), körperbezogene Grundpflege (SGB XI) sowie eine nahtlose Überleitung nach Klinikaufenthalten – getragen von Respekt, Zuwendung und Fachkompetenz.",
  };

  const heroBadges = [
    {
      icon: <Award className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Wundexperten ICW®" : isEn ? "ICW® Wound Care" : isTr ? "Wundexperten ICW®" : isAr ? "خبراء جروح معتمدون ICW®" : "Wundexperten ICW®",
      sub: isRu ? "Сертификация" : isEn ? "Certified Care" : isTr ? "Sertifikalı Yönetim" : isAr ? "إدارة جروح معتمدة" : "Zertifiziertes Management",
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "SGB V & SGB XI" : isEn ? "SGB V & SGB XI" : isTr ? "SGB V & SGB XI" : isAr ? "SGB V & SGB XI" : "SGB V & SGB XI",
      sub: isRu ? "Все кассы Германии" : isEn ? "Statutory & Private" : isTr ? "Tüm Sağlık ve Bakım Sandıkları" : isAr ? "معتمد لكافة صناديق التأمين" : "Zugelassener Partner",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "24/7 Забота" : isEn ? "24/7 Care" : isTr ? "24/7 Nöbetçi Destek" : isAr ? "مناوبة ورعاية 24/7" : "24/7 Rufbereitschaft",
      sub: isRu ? "Экстренная связь" : isEn ? "Emergency On-Call" : isTr ? "Günün Her Saati" : isAr ? "على مدار الساعة" : "Rund-um-die-Uhr",
    },
  ];

  // 6 Primary Service Pillars matching PDF Section 8 and User-Approved Card Design
  const servicesData: CareServiceModalData[] = [
    {
      id: "behandlungspflege",
      badge: isRu
        ? "SGB V • НАЗНАЧЕНИЕ ВРАЧА"
        : isEn
        ? "SGB V • MEDICAL PRESCRIPTION"
        : isTr
        ? "SGB V • DOKTOR REÇETESİ"
        : isAr
        ? "SGB V • وصفة طبية معتمدة"
        : "SGB V • ÄRZTLICHE VERORDNUNG",
      image: "/images/services/homecare.webp",
      iconType: "stethoscope",
      title: isRu
        ? "Медицинский уход & процедуры (SGB V)"
        : isEn
        ? "Clinical Treatment Nursing (SGB V)"
        : isTr
        ? "Tedavi Bakımı & Tıbbi Uygulamalar (SGB V)"
        : isAr
        ? "الرعاية الطبية والعلاجية الموصوفة (SGB V)"
        : "Behandlungspflege & Med. Versorgung (SGB V)",
      shortDesc: isRu
        ? "Квалифицированное выполнение медицинских назначений врача: инъекции, инфузии, выдача лекарств, компрессионная терапия и контроль показателей."
        : isEn
        ? "Professional clinical nursing according to physician orders: injections, infusions, medication administration, compression therapy, and vital monitoring."
        : isTr
        ? "Reçeteli tıbbi işlemlerin uzman hemşirelerce uygulanması: enjeksiyonlar, infüzyonlar, ilaç dağıtımı, kompresyon tedavisi ve vital bulgu takibi."
        : isAr
        ? "تنفيذ الإجراءات الطبية الموصوفة من قبل ممرضين معتمدين: الحقن، المحاليل الوريدية، إعطاء الأدوية، العلاج بالضغط ومراقبة المؤشرات الحيوية."
        : "Fachgerechte Durchführung verordneter medizinischer Maßnahmen wie Injektionen, Infusionen, Medikamentengabe, Kompressionstherapie und Vitalzeichenkontrollen.",
      modal: {
        title: isRu
          ? "Медицинская помощь и лечение на дому (SGB V)"
          : isEn
          ? "Home Treatment Nursing & Clinical Procedures (SGB V)"
          : isTr
          ? "Evde Tedavi ve Tıbbi Hemşirelik Bakımı (SGB V)"
          : isAr
          ? "التمريض المنزلي والرعاية الطبية العلاجية (SGB V)"
          : "Häusliche Krankenpflege & Behandlungspflege (SGB V)",
        subtitle: isRu
          ? "Врачебные назначения под контролем дипломированных медсестер"
          : isEn
          ? "Physician-prescribed home nursing under certified clinical oversight"
          : isTr
          ? "Diplomalı uzman hemşireler gözetiminde hekim direktiflerinin uygulanması"
          : isAr
          ? "تنفيذ تعليمات الطبيب في المنزل تحت إشراف تمريضي متخصص"
          : "Fachpflegerische Durchführung ärztlicher Anordnungen im vertrauten Zuhause",
        description: isRu
          ? "Лечебный уход по § 37 SGB V включает все медицинские процедуры, назначенные лечащим врачом или специалистом MVZ для ускорения выздоровления, предотвращения осложнений или сокращения пребывания в стационаре. Наши специалисты строго соблюдают протоколы безопасности и поддерживают постоянный контакт с лечащим доктором."
          : isEn
          ? "Treatment nursing under § 37 SGB V encompasses all clinical interventions prescribed by attending general practitioners or hospital specialists to support recovery, prevent complications, or shorten inpatient hospital stays. Our certified nurses maintain strict aseptic protocols and direct communication with physicians."
          : isTr
          ? "SGB V § 37 kapsamındaki tedavi bakımı, hastanede kalış süresini kısaltmak veya evde iyileşmeyi güvenceye almak için hekim tarafından reçete edilen tüm klinik müdahaleleri içerir. Uzman hemşirelerimiz tüm uygulamaları en yüksek hijyen standartlarında ve hekimlerle doğrudan koordinasyon halinde yürütür."
          : isAr
          ? "تشمل الرعاية العلاجية وفق المادة § 37 SGB V جميع الإجراءات الطبية الموصوفة من طبيب الأسرة أو الأخصائي لضمان نجاح العلاج أو تجنب الإقامة في المستشفى. ينفذ كادرنا التمريضي المتخصص كافة التعليمات وفق أعلى معايير الجودة والتعقيم وبالتنسيق المباشر مع الأطباء."
          : "Die Behandlungspflege nach § 37 SGB V umfasst alle vom Haus- oder Facharzt verordneten medizinischen Maßnahmen, die der Sicherung der ambulanten ärztlichen Behandlung dienen oder einen Krankenhausaufenthalt verkürzen bzw. vermeiden. Unsere examinierten Pflegefachkräfte führen alle Verordnungen nach strengsten Qualitäts- und Hygienestandards durch und stehen im direkten Austausch mit den behandelnden Ärzten.",
        indicationsTitle: isRu ? "Медицинские показания" : isEn ? "Clinical Indications" : isTr ? "Tıbbi Endikasyonlar" : isAr ? "دواعي الرعاية النموذجية" : "Typische Indikationen",
        indications: isRu
          ? [
              "Инсулинотерапия и сахарный диабет I и II типа",
              "Артериальная гипертензия и кардиоваскулярные заболевания",
              "Антикоагулянтная терапия и инъекции гепарина",
              "Хронические боли и необходимость регулярного приема препаратов",
              "Хроническая венозная недостаточность и отеки конечностей",
              "Послеоперационный период после выписки из стационара",
            ]
          : isEn
          ? [
              "Insulin-dependent diabetes mellitus type I & II",
              "Arterial hypertension and cardiovascular conditions",
              "Anticoagulation therapy and regular heparin injections",
              "Chronic pain syndromes requiring structured analgesics",
              "Chronic venous insufficiency, lymphoedema, and compression therapy",
              "Post-surgical recovery requiring professional clinical surveillance",
            ]
          : isTr
          ? [
              "İnsülin bağımlı Tip 1 ve 2 Diyabet ve kan şekeri takibi",
              "Düzenli tansiyon ve nabız kontrolü gerektiren kardiyovasküler hastalıklar",
              "Antikoagülasyon tedavisi ve subkutan heparin enjeksiyonları (s.c. / i.m.)",
              "Karmaşık ilaç tedavileri, kontrollü ilaç hazırlama ve verme",
              "Kompresyon tedavisi gerektiren kronik venöz yetmezlik (Sınıf I–IV)",
              "Ayakta veya yatarak ameliyatlar sonrası ameliyat sonrası takip",
            ]
          : isAr
          ? [
              "داء السكري من النوع 1 و2 المعتمد على الأنسولين وقياس السكر",
              "أمراض القلب والأوعية الدموية ومراقبة ضغط الدم والنبض بدقة",
              "علاج تخثر الدم وحقن الهيبارين تحت الجلد (s.c. / i.m.)",
              "العلاجات الدوائية المعقدة وترتيب وتوزيع الجرعات بدقة",
              "القصور الوريدي المزمن والعلاج بالضغط الطبي (الفئات I–IV)",
              "المراقبة الطبية بعد العمليات الجراحية للمرضى الداخليين والخارجيين",
            ]
          : [
              "Insulinpflichtiger Diabetes mellitus Typ 1 und 2 mit Blutzuckermessung",
              "Kardiovaskuläre Erkrankungen mit engmaschiger Blutdruck- und Pulskontrolle",
              "Antikoagulationstherapie und subkutane Heparininjektionen (s.c. / i.m.)",
              "Komplexe medikamentöse Therapien und kontrolliertes Richten / Verabreichen",
              "Chronische venöse Insuffizienz mit Kompressionstherapie (Klasse I–IV)",
              "Postoperative Überwachung nach ambulanten und stationären Eingriffen",
            ],
        scopeTitle: isRu ? "Спектр медицинских услуг" : isEn ? "Scope of Interventions" : isTr ? "Hizmet Yelpazesi" : isAr ? "نطاق الخدمات التمريضية" : "Leistungsspektrum",
        scopeItems: isRu
          ? [
              "Инъекции (подкожные, внутримышечные) и капельные инфузии",
              "Раскладка, контроль и выдача медикаментов по рецепту",
              "Контроль уровня сахара в крови и адаптация дозировок инсулина",
              "Наложение компрессионных бинтов и надевание компрессионного трикотажа",
              "Регулярное измерение артериального давления, пульса и насыщения кислородом",
              "Контроль дренажей, катетеров и ведение карты состояния здоровья",
            ]
          : isEn
          ? [
              "Subcutaneous and intramuscular injections; peripheral infusions",
              "Structured medication preparation, dispensing, and compliance tracking",
              "Capillary blood glucose testing and targeted insulin administration",
              "Application of medical compression wraps and compression stockings",
              "Routine monitoring of vital parameters (BP, heart rate, oxygen saturation)",
              "Drainage surveillance, catheter care, and electronic nursing records",
            ]
          : isTr
          ? [
              "Enjeksiyonlar (s.c. ve i.m.) ve reçeteli infüzyonların takibi",
              "Reçeteli ilaçların hazırlanması, dozajı ve hastaya verilmesi",
              "Kan şekeri ölçümleri ve ihtiyaca göre insülin uygulaması",
              "Kompresyon bandajlarının sarılması/değişimi ve varis çoraplarının giydirilmesi",
              "Sürekli vital bulgu takibi (tansiyon, nabız, oksijen satürasyonu)",
              "Drenaj takibi ve bakım raporunda eksiksiz durum dokümantasyonu",
            ]
          : isAr
          ? [
              "الحقن (تحت الجلد وفي العضل) ومراقبة المحاليل الوريدية الموصوفة",
              "تجهيز الأدوية الموصوفة وتحديد جرعاتها وتقديمها في مواعيدها",
              "مراقبة مستويات السكر بالدم وحقن الأنسولين وفق الحاجة",
              "تطبيق وتغيير الضمادات الضاغطة وارتداء/نزع الجوارب الطبية الضاغطة",
              "مراقبة المؤشرات الحيوية بانتظام (ضغط الدم، النبض، نسبة الأكسجين)",
              "متابعة مصارف السوائل الجراحية (الدِرَن) والتوثيق الدقيق في التقرير التمريضي",
            ]
          : [
              "Injektionen (s.c. und i.m.) sowie Überwachung ärztlich angeordneter Infusionen",
              "Richten, Dosieren und Verabreichen von verordneten Arzneimitteln",
              "Blutzuckerkontrollen und bedarfsgerechte Insulininjektion",
              "Anlegen und Wechseln von Kompressionsverbänden sowie An-/Ausziehen von Kompressionsstrümpfen",
              "Kontinuierliche Vitalzeichenkontrolle (Blutdruck, Puls, Sauerstoffsättigung)",
              "Überwachung von Drainagen und lückenlose Verlaufsdokumentation im Pflegebericht",
            ],
        billingTitle: isRu ? "Финансирование и кассы" : isEn ? "Insurance & Coverage" : isTr ? "Gider Karşılama ve Reçete" : isAr ? "تغطية التكاليف والوصفة الطبية" : "Kostenübernahme & Verordnung",
        billingText: isRu
          ? "Все услуги медицинской помощи (SGB V) на 100% покрываются государственными (GKV) и частными (PKV) страховыми кассами Германии при наличии рецепта врача (Muster 12). Мы берем на себя полное согласование с вашей страховой компанией."
          : isEn
          ? "All prescribed clinical services under SGB V are covered by statutory (GKV) and private (PKV) health insurance funds with a valid physician prescription (Muster 12). We handle all administrative clearance with your insurance provider."
          : isTr
          ? "Tedavi bakımı masrafları, hekim tarafından evde sağlık hizmeti reçetesi (Muster 12) düzenlenmesi halinde tüm yasal (GKV) ve özel (PKV) sağlık sigortaları tarafından %100 karşılanır. NabiOta HomeCare tüm onay ve başvuru sürecini sizin adınıza yürütür."
          : isAr
          ? "تُغطى تكاليف الرعاية العلاجية بنسبة 100% من قبل صناديق التأمين الصحي الحكومية (GKV) والخاصة (PKV) بموجب وصفة طبية (Muster 12). تتولى NabiOta HomeCare إجراءات التقديم والحصول على الموافقات بالكامل نيابة عنكم."
          : "Die Kosten der Behandlungspflege werden bei Vorliegen einer ärztlichen Verordnung häuslicher Krankenpflege (Muster 12) nach Genehmigung vollständig von den gesetzlichen (GKV) und privaten (PKV) Krankenkassen übernommen. NabiOta HomeCare übernimmt für Sie die gesamte Einreichung und Genehmigungsabstimmung.",
        qualityTitle: isRu ? "Стандарты безопасности" : isEn ? "Quality & Safety" : isTr ? "Kalite ve Güvenlik Standartları" : isAr ? "معايير الجودة والسلامة" : "Qualitäts- & Sicherheitsstandards",
        qualityText: isRu
          ? "Процедуры проводятся исключительно государственно экзаменованными медицинскими сестрами в строгом соответствии с санитарно-эпидемиологическими стандартами Института Роберта Коха (RKI)."
          : isEn
          ? "Procedures are delivered exclusively by licensed, state-certified registered nurses strictly adhering to the infection control guidelines of the Robert Koch Institute (RKI)."
          : isTr
          ? "Hizmetler yalnızca diplomalı ve sınavlı hemşireler tarafından Robert Koch Enstitüsü (RKI) hijyen kılavuzlarına sıkı sıkıya bağlı kalınarak sunulur."
          : isAr
          ? "تُقدم الخدمات حصرياً من قبل ممرضين مجازين رسمياً ومعتمدين، مع الالتزام الصارم بإرشادات التعقيم الصادرة عن معهد روبرت كوخ (RKI)."
          : "Die Leistungen werden ausnahmslos durch staatlich examinierte Pflegefachkräfte erbracht. Strenge Einhaltung der Hygiene-Richtlinien des Robert Koch-Instituts (RKI) und regelmäßige Fortbildungen garantieren maximale Behandlungssicherheit.",
        ctaButtonText: isRu ? "Запросить организацию ухода" : isEn ? "Request Nursing Consultation" : isTr ? "Tedavi Bakımı Talebi" : isAr ? "طلب رعاية علاجية منزلية" : "Behandlungspflege anfragen",
      },
    },
    {
      id: "wundversorgung",
      badge: isRu
        ? "ICW® • ВЕДЕНИЕ РАН"
        : isEn
        ? "ICW® • WOUND MANAGEMENT"
        : isTr
        ? "ICW® • YARA YÖNETİMİ"
        : isAr
        ? "ICW® • إدارة وعلاج الجروح"
        : "ICW® • ZERTIFIZIERTES MANAGEMENT",
      image: "/images/services/wundversorgung.webp",
      iconType: "award",
      title: isRu
        ? "Сертифицированное лечение ран (ICW®)"
        : isEn
        ? "Certified Wound Management (ICW®)"
        : isTr
        ? "Sertifikalı Yara Yönetimi (ICW®)"
        : isAr
        ? "إدارة الجروح المعتمدة (معايير ICW®)"
        : "Zertifiziertes Wundmanagement (ICW®)",
      shortDesc: isRu
        ? "Профессиональный уход за хроническими, послеоперационными и труднозаживающими ранами с применением влажного заживления и фотодокументации."
        : isEn
        ? "Specialized management of chronic, postoperative, and non-healing wounds utilizing modern moist wound therapy and digital photo documentation."
        : isTr
        ? "Kronik, ameliyat sonrası ve zor iyileşen yaraların modern nemli yara tedavisi ve dijital fotoğraflı takibi."
        : isAr
        ? "علاج متخصص للجروح المزمنة، ما بعد الجراحة وصعبة الالتئام باستخدام تقنيات الضماد الرطب والتوثيق الرقمي."
        : "Spezialisierte Versorgung chronischer, postoperativer und sekundär heilender Wunden mit moderner Feuchtwundbehandlung und Fotodokumentation.",
      modal: {
        title: isRu
          ? "Zertifiziertes Wundmanagement nach ICW®"
          : isEn
          ? "Certified Wound Management according to ICW®"
          : isTr
          ? "ICW® Sertifikalı Yara Yönetimi"
          : isAr
          ? "إدارة الجروح المعتمدة وفق معايير ICW®"
          : "Zertifiziertes Wundmanagement (ICW®-Standard)",
        subtitle: isRu
          ? "Современное влажное заживление ран и экспертная фотодокументация"
          : isEn
          ? "Modern moist wound therapy and digital clinical progress documentation"
          : isTr
          ? "Modern aşamaya uygun yara tedavisi ve eksiksiz gelişim takibi"
          : isAr
          ? "علاج حديث للجروح وفق مراحل الالتئام وتوثيق سريري رقمي متكامل"
          : "Moderne phasengerechte Wundtherapie und lückenlose Verlaufsdokumentation",
        description: isRu
          ? "Хронические и вторично заживающие раны требуют глубоких специализированных знаний и терпеливого подхода. Сертифицированные эксперты по ранам ICW® (Initiative Chronische Wunden) компании NabiOta HomeCare применяют доказательные методики влажного заживления, снижая болевой синдром и стимулируя естественную регенерацию тканей."
          : isEn
          ? "Chronic and non-healing wounds demand specialized clinical expertise and structured care protocols. NabiOta HomeCare's certified ICW® wound care specialists employ modern evidence-based moist healing principles that alleviate pain, accelerate tissue granulation, and prevent infections."
          : isTr
          ? "Kronik ve zor iyileşen yaralar uzmanlık ve sabır gerektirir. NabiOta HomeCare'in ICW® sertifikalı yara uzmanları, ağrıyı azaltan, granülasyonu hızlandıran ve enfeksiyonları önleyen kanıta dayalı modern nemli yara tedavi ürünlerini uygular."
          : isAr
          ? "تتطلب الجروح المزمنة والمعقدة خبرة سريرية متقدمة ورعاية مستمرة. يطبق أخصائيو الجروح المعتمدون من جمعية (ICW®) لدى NabiOta أحدث أساليب العلاج الرطب للجروح، مما يسكن الألم ويحفز نمو الأنسجة ويقي من العدوى."
          : "Chronische, postoperative und schwer heilende Wunden erfordern fundierte Fachkompetenz und strukturierte Betreuung. Unsere nach den Standards der Initiative Chronische Wunden e.V. (ICW®) zertifizierten Wundexperten setzen moderne, phasengerechte Wundtherapeutika ein. Durch das Prinzip der feuchten Wundbehandlung werden Wundschmerzen gelindert, Granulation gefördert und Infektionen wirksam verhindert.",
        indicationsTitle: isRu ? "Виды ран и диагнозы" : isEn ? "Treated Wound Types" : isTr ? "Tedavi Kapsamı ve Yara Türleri" : isAr ? "نطاق الحالات وأنواع الجروح" : "Behandlungsspektrum",
        indications: isRu
          ? [
              "Трофические язвы голени (Ulcus cruris venosum / arteriosum / mixtum)",
              "Пролежни всех степеней тяжести (Dekubitus Grad I–IV)",
              "Синдром диабетической стопы (DFS) с нейропатическими/ишемическими язвами",
              "Вторично заживающие и инфицированные послеоперационные раны",
              "Раны после онкологических операций или лучевой терапии",
              "Ожоги и длительно незаживающие травматические дефекты кожи",
            ]
          : isEn
          ? [
              "Venous, arterial, and mixed leg ulcers (Ulcus cruris)",
              "Pressure injuries and decubitus ulcers (Stages I through IV)",
              "Diabetic foot syndrome (DFS) neuropathic and ischemic lesions",
              "Secondary healing and infected surgical incisions",
              "Post-surgical wound dehiscence and radiation skin injuries",
              "Thermal burns and traumatic tissue defects with healing delay",
            ]
          : isTr
          ? [
              "Venöz, arteriyel veya mikst bacak ülserleri (Ulcus cruris)",
              "Tüm evrelerde bası yaraları (Dekübitüs Evre I–IV)",
              "Diyabetik ayak sendromu (DFS) ve nöropatik/iskemik lezyonlar",
              "İkincil iyileşen veya enfekte ameliyat yaraları ve dikiş açılmaları",
              "Ortopedik ve cerrahi operasyonlar sonrası yara iyileşme bozuklukları",
              "Termal yaralar, yanıklar ve travmatik cilt doku kayıpları",
            ]
          : isAr
          ? [
              "قرح الساق الوريدية، الشريانية أو المختلطة (Ulcus cruris)",
              "قرح الفراش والضغط بجميع درجاتها (Dekubitus من الدرجة 1 إلى 4)",
              "متلازمة القدم السكرية (DFS) مع الآفات العصبية أو الإقفارية",
              "الجروح الجراحية الملتهبة أو الملتئمة ثانوياً وتفزر الغرز",
              "اضطرابات التئام الجروح بعد جراحات العظام والجراحة العامة",
              "الجروح الحرارية، الحروق وإصابات الجلد الرضية المزمنة",
            ]
          : [
              "Ulcus cruris venosum, arteriosum oder mixtum (Offenes Bein)",
              "Dekubitalulzera aller Schweregrade (Druckgeschwüre Grad 1 bis 4)",
              "Diabetisches Fußsyndrom (DFS) mit neuropathischen oder ischämischen Läsionen",
              "Sekundär heilende oder infizierte Operationswunden und Nahtdehiszenzen",
              "Wundheilungsstörungen nach orthopädischen und viszeralchirurgischen Eingriffen",
              "Thermische Wunden, Verbrennungen und traumatische Hautdefekte",
            ],
        scopeTitle: isRu ? "План лечения и процедуры" : isEn ? "Clinical Protocol" : isTr ? "Terapötik Önlemler" : isAr ? "الإجراءات والتدخلات العلاجية" : "Therapeutische Maßnahmen",
        scopeItems: isRu
          ? [
              "Атравматическая смена повязок с обезболиванием",
              "Фазовое применение современных повязок (гидроколлоиды, альгинаты, пены, серебро)",
              "Антисептическая санация и промывание раневого ложа",
              "Цифровая калиброванная фотодокументация динамики заживления",
              "Компрессионная терапия при венозной этиологии язв",
              "Тесное взаимодействие с оперирующим хирургом и дерматологом",
            ]
          : isEn
          ? [
              "Atraumatic, pain-reduced dressing changes with sterile technique",
              "Phase-adapted dressing selection (hydrocolloids, alginates, foams, silver dressings)",
              "Antiseptic wound cleansing, irrigation, and bacterial burden reduction",
              "Standardized digital photography and computer-assisted wound dimension tracking",
              "Targeted medical compression therapy for venous insufficiency",
              "Direct multidisciplinary dialogue with surgeons, dermatologists, and MVZ clinics",
            ]
          : isTr
          ? [
              "Steril koşullarda hassas ve ağrısız pansuman değişimi",
              "Modern yara örtülerinin (aljinatlar, hidrokolloidler, köpükler, gümüş) aşamaya uygun seçimi",
              "Antiseptik yara yıkama ve mikrop yükünün azaltılması",
              "Yüksek çözünürlüklü dijital fotoğraf dokümantasyonu ve yara ölçümü",
              "Venöz kökenli yaralarda ödem çözücü kompresyon tedavisi",
              "Tedaviyi yürüten cerrahlar ve MVZ hekimleri ile doğrudan vaka koordinasyonu",
            ]
          : isAr
          ? [
              "تغيير لطيف وغير مؤلم للضمادات وفق شروط التعقيم الطبي الصارمة",
              "اختيار الضمادات الحديثة المناسبة لكل مرحلة (ألجينات، هيدروكولويد، رغوية، فضة)",
              "غسيل وتطهير الجروح بمحاليل معقمة للحد من العبء البكتيري",
              "توثيق فوتوغرافي رقمي عالي الدقة وقياس مستمر لأبعاد الجرح وتطوره",
              "علاج بالضغط الطبي لإزالة الوذمات في حالات القصور الوريدي",
              "تنسيق طبي مباشر ومستمر مع الجراحين وأطباء مراكز MVZ",
            ]
          : [
              "Schonender, schmerzarmer Verbandwechsel unter sterilen Kautelen",
              "Phasengerechte Auswahl moderner Wundauflagen (Alginate, Hydrokolloide, Schaumverbände, Silber)",
              "Antiseptische Wundspülung und Reduktion der Keimbelastung",
              "Hochauflösende digitale Fotodokumentation und exakte Vermessung des Wundverlaufs",
              "Entstauende Kompressionstherapie bei venöser Wundgenese",
              "Direkte Fallabstimmung mit behandelnden Chirurgen, Gefäßmedizinern und MVZ-Ärzten",
            ],
        billingTitle: isRu ? "Оплата и рецепты" : isEn ? "Insurance & Reimbursement" : isTr ? "Reçete ve Masraf Karşılama" : isAr ? "الوصفة الطبية والجهات الضامنة" : "Verordnung & Kostenträger",
        billingText: isRu
          ? "Уход за ранами и перевязочные материалы оплачиваются медицинскими страховками по SGB V на основании врачебного назначения. NabiOta HomeCare координирует доставку стерильных материалов через партнерские аптеки и Sanitätshaus."
          : isEn
          ? "Wound management and advanced dressing supplies are covered under SGB V statutory and private health insurance. NabiOta HomeCare coordinates the swift delivery of sterile dressings via our affiliated pharmacy and medical supply store."
          : isTr
          ? "Yara bakımı SGB V kapsamında tanınan bir sağlık hizmetidir. Pansuman değişimi ve modern yara örtülerinin masrafları sağlık sigortaları tarafından karşılanır. NabiOta Eczanesi ve Sanitätshaus üzerinden steril malzeme tedariğini koordine ediyoruz."
          : isAr
          ? "تعتبر رعاية الجروح خدمة معتمدة وممولة ضمن التأمين الصحي (SGB V). تغطي الصناديق تكاليف تغيير الضمادات ومواد العلاج الحديثة بالكامل. ننسق التوريد المباشر عبر صيدلية ومتجر المستلزمات الطبية التابع للمجموعة."
          : "Die Wundversorgung ist eine anerkannte Leistung der häuslichen Krankenpflege nach SGB V. Die Kosten für Verbandwechsel und moderne Wundauflagen werden von den gesetzlichen und privaten Krankenkassen übernommen. Wir koordinieren die reibungslose Belieferung über die NabiOta Apotheke und das Sanitätshaus.",
        qualityTitle: isRu ? "Квалификация ICW®" : isEn ? "ICW® Quality Certification" : isTr ? "ICW® Sertifikasyonu" : isAr ? "اعتماد وجودة ICW®" : "ICW®-Zertifizierung",
        qualityText: isRu
          ? "Наши специалисты имеют действующие сертификаты Wundexperte ICW® и ежегодно проходят курсы повышения квалификации в соответствии с национальными экспертными стандартами DNQP."
          : isEn
          ? "Our wound coordinators hold accredited ICW® certifications and complete annual clinical training adhering to German National Expert Standards (DNQP)."
          : isTr
          ? "Yara yöneticilerimiz tanınmış ICW® (Initiative Chronische Wunden) sertifikalarına sahiptir ve Alman Ulusal Uzman Standartlarına (DNQP) göre düzenli eğitim alır."
          : isAr
          ? "يحمل خبراؤنا شهادات رسمية معتمدة من مبادرة الجروح المزمنة (ICW®) ويخضعون لتدريب مستمر وفق معايير الجودة السريرية الوطنية (DNQP)."
          : "Unsere Wundmanager verfügen über anerkannte ICW®-Zertifikate (Initiative Chronische Wunden e.V.) und bilden sich fortlaufend nach den nationalen Expertenstandards des DNQP weiter.",
        ctaButtonText: isRu ? "Записаться на осмотр раны" : isEn ? "Request Wound Assessment" : isTr ? "Yara Muayenesi Talebi" : isAr ? "حجز فحص ومعاينة للجروح" : "Wundvisite vereinbaren",
      },
    },
    {
      id: "grundpflege",
      badge: isRu
        ? "SGB XI • СТЕПЕНИ УХОДА 1–5"
        : isEn
        ? "SGB XI • CARE LEVELS 1–5"
        : isTr
        ? "SGB XI • BAKIM DERECELERİ 1–5"
        : isAr
        ? "SGB XI • درجات الرعاية 1–5"
        : "SGB XI • PFLEGEGRADE 1–5",
      image: "/images/nursing/stage-senior.webp",
      iconType: "heart",
      title: isRu
        ? "Базовый уход & помощь в быту (SGB XI)"
        : isEn
        ? "Personal Care & Daily Living (SGB XI)"
        : isTr
        ? "Vücut Odaklı Bakım & Temel Bakım (SGB XI)"
        : isAr
        ? "الرعاية الشخصية والأساسية (SGB XI)"
        : "Körperbezogene Pflege & Grundpflege (SGB XI)",
      shortDesc: isRu
        ? "Бережная помощь в гигиене, одевании, приеме пищи и мобилизации для сохранения личной автономии и комфорта."
        : isEn
        ? "Dignified assistance with personal hygiene, dressing, nutrition, and mobilization to foster autonomy and comfort at home."
        : isTr
        ? "Kişisel bağımsızlığı ve konforu korumak için kişisel hijyen, beslenme ve hareketlilikte saygılı ve şefkatli destek."
        : isAr
        ? "دعم كريم ومهني في النظافة الشخصية، التغذية والحركة للحفاظ على الاستقلالية والراحة في المنزل."
        : "Respektvolle Unterstützung bei der Körperpflege, Ernährung und Mobilität zur Erhaltung und Förderung der persönlichen Selbstständigkeit.",
      modal: {
        title: isRu
          ? "Базовый сестринский уход и помощь в быту (SGB XI)"
          : isEn
          ? "Personal Care & Activities of Daily Living (SGB XI)"
          : isTr
          ? "Vücut Odaklı Temel Bakım & Günlük Yaşam Yardımı (SGB XI)"
          : isAr
          ? "الرعاية التمريضية الأساسية والدعم اليومي (SGB XI)"
          : "Körperbezogene Grundpflege & Alltagshilfe (SGB XI)",
        subtitle: isRu
          ? "Уважительная поддержка для сохранения самостоятельности в родных стенах"
          : isEn
          ? "Respectful, empowering assistance preserving independence at home"
          : isTr
          ? "Ev ortamında bağımsız bir yaşam için saygın ve harekete geçirici destek"
          : isAr
          ? "دعم محترم ومحفز للحفاظ على حياة مريحة ومستقلة في المنزل"
          : "Würdevolle, aktivierende Unterstützung für ein selbstbestimmtes Leben zu Hause",
        description: isRu
          ? "Каждый человек заслуживает уважительного и бережного отношения. Базовый уход по SGB XI строится на принципе активирующего ухода: мы помогаем в том, что вызывает затруднения, но бережно сохраняем и стимулируем те навыки, которые пациент может выполнять сам."
          : isEn
          ? "Every person deserves dignified and compassionate care. Personal care under SGB XI is centered around restorative, activating nursing: we assist where help is needed while encouraging and maintaining existing capabilities so clients remain self-determined in their own home."
          : isTr
          ? "SGB XI kapsamındaki vücut odaklı bakım, harekete geçirici bakım ilkesine dayanır: Yardıma ihtiyaç duyulan noktalarda destek olurken, hastalarımızın kendi yapabildikleri becerileri koruyup teşvik ederek ev ortamında bağımsızlıklarını sürdürmelerini sağlarız."
          : isAr
          ? "ترتكز الرعاية الأساسية وفق SGB XI على مبدأ الرعاية التنشيطية: نقدم العون حيث تدعو الحاجة، مع تعزيز القدرات الذاتية المتبقية لتمكين المريض من الحفاظ على استقلاليته وكرامته في بيته."
          : "Die körperbezogene Pflege nach SGB XI basiert auf dem Leitgedanken der aktivierenden Pflege: Wir unterstützen dort, wo Hilfe benötigt wird, fördern aber gleichzeitig gezielt vorhandene Ressourcen und Fähigkeiten, damit unsere Klienten ihre Eigenständigkeit und Lebensfreude im vertrauten Zuhause bewahren.",
        indicationsTitle: isRu ? "Для кого предназначен уход" : isEn ? "Target Audience" : isTr ? "Hedef Kitle ve Koşullar" : isAr ? "الفئات المستهدفة وشروط الاستحقاق" : "Zielgruppe & Voraussetzungen",
        indications: isRu
          ? [
              "Люди пожилого возраста с присвоенной степенью ухода (Pflegegrad 1–5)",
              "Пациенты после тяжелых операций, инсультов или травм",
              "Люди с дегенеративными заболеваниями суставов и позвоночника",
              "Пациенты с болезнью Паркинсона или рассеянным склерозом",
              "Люди с умеренными или выраженными когнитивными нарушениями / деменцией",
              "Лица, временно утратившие способность к самостоятельному самообслуживанию",
            ]
          : isEn
          ? [
              "Elderly individuals with recognized care levels (Pflegegrade 1 to 5)",
              "Post-acute patients recovering from stroke, major surgeries, or joint replacements",
              "Individuals with advanced osteoarthritis or severe mobility impairments",
              "Patients living with Parkinson's, Multiple Sclerosis, or neurological deficits",
              "People experiencing memory impairment, cognitive decline, or dementia",
              "Anyone experiencing temporary loss of independent self-care abilities",
            ]
          : isTr
          ? [
              "Onaylanmış bakım derecesine sahip (Pflegegrad 1–5) bakıma muhtaç bireyler",
              "Yaşa bağlı hareketlilik ve motor beceri kısıtlılığı yaşayan yaşlılar",
              "Ağır hastalıklar, inme veya eklem protezi ameliyatları sonrası hastalar",
              "Kronik nörolojik hastalıkları olanlar (örn. Parkinson veya MS)",
              "Demans veya bilişsel kısıtlılık yaşayan danışanlar",
              "Geçici iyileşme ve toparlanma sürecinde olan kişiler",
            ]
          : isAr
          ? [
              "الأشخاص المصنفون ضمن درجات الرعاية المعتمدة (Pflegegrad من 1 إلى 5)",
              "كبار السن الذين يعانون من قيود الحركة المرتبطة بالتقدم في العمر",
              "المرضى بعد الجراحات الكبرى، السكتات الدماغية أو استبدال المفاصل",
              "المصابون بالأمراض العصبية المزمنة (مثل مرض باركنسون والتصلب المتعدد)",
              "المرضى الذين يعانون من أعراض الخرف أو التراجع المعرفي",
              "الأشخاص في فترات النقاهة المؤقتة لاستعادة القدرة على خدمة الذات"
            ]
          : [
              "Pflegebedürftige Menschen mit anerkanntem Pflegegrad (Pflegegrad 1 bis 5)",
              "Senioren mit altersbedingten Einschränkungen der Mobilität und Motorik",
              "Patienten nach schweren Erkrankungen, Schlaganfall oder Gelenkersatz",
              "Menschen mit chronischen neurologischen Erkrankungen (z.B. Morbus Parkinson)",
              "Klienten mit dementiellen Veränderungen oder kognitiven Einschränkungen",
              "Personen in vorübergehenden Rekonvaleszenz- und Erholungsphasen",
            ],
        scopeTitle: isRu ? "Что входит в базовый уход" : isEn ? "Scope of Services" : isTr ? "Modüler Bakım Hizmetleri" : isAr ? "خدمات الرعاية المعيارية" : "Modulare Pflegeleistungen",
        scopeItems: isRu
          ? [
              "Полное или частичное умывание, душ, купание, гигиена полости рта и волос",
              "Помощь при одевании, раздевании и подборе комфортной одежды",
              "Помощь при приеме пищи, сервировка и контроль питьевого режима",
              "Помощь при посещении туалета и деликатный уход при недержании",
              "Активирующая мобилизация: пересаживание в кресло, помощь при ходьбе",
              "Правильное позиционирование в постели для предотвращения пролежней",
            ]
          : isEn
          ? [
              "Assistance with morning and evening hygiene, shower, bath, and oral care",
              "Support with dressing, undressing, and orthopedic footwear",
              "Nutritional support, meal preparation assistance, and hydration monitoring",
              "Dignified assistance with toileting and discreet continence management",
              "Activating mobilization, bed-to-chair transfers, and supervised walking",
              "Micro-positioning in bed for comfort, contracture, and pressure relief",
            ]
          : isTr
          ? [
              "Tam veya kısmi vücut yıkama, banyo, duş ile ağız, saç ve diş bakımı",
              "Giyinme ve soyunmada yardım, protez/ortez takılması desteği",
              "Gıdaların hazırlanması ve besin/sıvı alımında destek",
              "Tuvalet ihtiyacında yardım ve saygın, gizliliğe uygun inkontinans bakımı",
              "Harekete geçirici mobilizasyon: yataktan tekerlekli sandalyeye transfer, yürüme egzersizleri",
              "Bası yarası ve kontraktürleri önlemek için bakım yatağında ergonomik pozisyonlama",
            ]
          : isAr
          ? [
              "الاستحمام الجزئي أو الكامل، غسيل الشعر، العناية بالفم والأسنان",
              "المساعدة في ارتداء وخلع الملابس وتركيب الأجهزة التعويضية/التقويمية",
              "تحضير الطعام والمساعدة في تناول الوجبات وشرب السوائل الكافية",
              "المساعدة في استخدام المرحاض ورعاية سلس البول بكل خصوصية وكرامة",
              "التنشيط الحركي: الانتقال من السرير للكرسي وتمارين الوقوف والمشي",
              "الوضعية السليمة في السرير الطبي للوقاية من قرح الفراش والتصلب المفصلي",
            ]
          : [
              "Ganz- und Teilkörperwäsche, Baden, Duschen sowie Mund-, Haar- und Zahnpflege",
              "Hilfe beim An- und Auskleiden inklusive Anlegen von Prothesen/Orthesen",
              "Mundgerechte Zubereitung und Unterstützung bei der Nahrungs- und Flüssigkeitsaufnahme",
              "Hilfe bei der Ausscheidung und diskrete, würdevolle Inkontinenzversorgung",
              "Aktivierende Mobilisation: Transfer vom Bett in den Rollstuhl, Geh- und Stehübungen",
              "Fachgerechte Lagerung im Pflegebett zur Dekubitus- und Kontrakturvermeidung",
            ],
        billingTitle: isRu ? "Оплата через кассу ухода" : isEn ? "Care Fund Billing" : isTr ? "Finansman ve Ayni Bakım Yardımları" : isAr ? "التمويل والمزايا العينية لصندوق الرعاية" : "Finanzierung & Sachleistungen",
        billingText: isRu
          ? "Услуги оплачиваются кассой по уходу (Pflegekasse) в виде натуральных пособий (Pflegesachleistungen) в соответствии с присвоенным Pflegegrad (1–5) либо в комбинации с Pflegegeld. Мы рассчитываем оптимальный индивидуальный тариф без скрытых затрат."
          : isEn
          ? "Services are billed directly to statutory and private long-term care insurance funds (Pflegekassen) via care in-kind benefits (Pflegesachleistungen) based on Pflegegrad 1–5, or as a combination with monetary care allowances."
          : isTr
          ? "Masraflar, ilgili bakım derecesinin (1–5) yasal tavanına kadar ayni bakım yardımı (Pflegesachleistung) olarak doğrudan bakım sandığı (Pflegekasse) ile mahsuplaşılır. Nakdi bakım parası ile kombinasyon mümkündür."
          : isAr
          ? "تُسوى التكاليف مباشرة كخدمات عينية (Pflegesachleistung) مع صندوق الرعاية حتى السقف القانوني لدرجة الرعاية (1 إلى 5)، مع إمكانية الجمع بين المساعدة العينية والبدل النقدي."
          : "Die Kosten werden bis zum gesetzlichen Höchstbetrag des jeweiligen Pflegegrads (1 bis 5) direkt als Pflegesachleistung mit der Pflegekasse abgerechnet. Auch Kombinationsleistungen (Pflegegeld + Pflegedienst) sind möglich. Wir erstellen transparente, verständliche Kostenvoranschläge.",
        qualityTitle: isRu ? "Система закрепленной медсестры" : isEn ? "Primary Nursing Model" : isTr ? "Sabit Primer Hemşire Sistemi" : isAr ? "نظام الممرض المرجعي المخصص" : "Bezugspflegesystem",
        qualityText: isRu
          ? "Мы внедряем систему постоянных кураторов (Bezugspflege): за вами закрепляется небольшая команда медсестер, знающая ваши индивидуальные привычки и пожелания."
          : isEn
          ? "We implement a dedicated primary nursing system ensuring consistent, familiar caregivers who know your daily routines and preferences intimately."
          : isTr
          ? "Sabit hemşire modelimiz sayesinde evinize her zaman tanıdığınız ve güvendiğiniz ekip üyeleri gelir; bu da derin bir güven ve huzur ortamı yaratır."
          : isAr
          ? "يضمن نظام الممرض المرجعي قدوم نفس الكوادر التمريضية المألوفة لديكم بانتظام، مما يبني علاقة ثقة راسخة ويمنح العائلة راحة البال."
          : "Unser Bezugspflegesystem stellt sicher, dass feste und vertraute Pflegekräfte zu Ihnen kommen. Das schafft eine vertrauensvolle Bindung und gibt den Klienten sowie ihren Angehörigen ein beruhigendes Gefühl von Sicherheit.",
        ctaButtonText: isRu ? "Рассчитать план ухода" : isEn ? "Calculate Care Plan" : isTr ? "Bakım Danışmanlığı Talebi" : isAr ? "طلب استشارة وحساب خطة الرعاية" : "Pflegeberatung anfordern",
      },
    },
    {
      id: "postoperativ",
      badge: isRu
        ? "ПЕРЕВОД ИЗ КЛИНИКИ"
        : isEn
        ? "DISCHARGE TRANSITION"
        : isTr
        ? "KLİNİK & MVZ GEÇİŞ YÖNETİMİ"
        : isAr
        ? "إدارة الانتقال من المستشفيات ومراكز MVZ"
        : "KLINIK- & MVZ-ÜBERLEITUNG",
      image: "/images/nursing/stage-postsurgical.webp",
      iconType: "shield",
      title: isRu
        ? "Послеоперационный патронаж & переливание"
        : isEn
        ? "Postoperative Care & Discharge Management"
        : isTr
        ? "Ameliyat Sonrası Bakım & Taburculuk Yönetimi"
        : isAr
        ? "الرعاية بعد العمليات وإدارة الخروج من المستشفى"
        : "Postoperative Nachsorge & Entlassmanagement",
      shortDesc: isRu
        ? "Бесшовный перевод из стационара домой после хирургических операций для безопасного и спокойного восстановления в домашнем уюте."
        : isEn
        ? "Seamless hospital discharge transition following surgical procedures ensuring guided and complication-free recovery at home."
        : isTr
        ? "Klinik yatışı veya ayakta operasyonlar sonrasında evde güvenli ve sorunsuz iyileşme için kesintisiz tıbbi ve hemşirelik desteği."
        : isAr
        ? "انتقال طبي وتمريضي سلس بعد الإقامة بالمستشفى أو العمليات الجراحية لضمان تعافٍ منزلي آمن وبدون مضاعفات."
        : "Nahtlose medizinisch-pflegerische Überleitung nach Klinikaufenthalten oder ambulanten Operationen für eine sichere Genesung zu Hause.",
      modal: {
        title: isRu
          ? "Послеоперационный патронаж и ведение после выписки"
          : isEn
          ? "Postoperative Transitional Care & Discharge Management"
          : isTr
          ? "Ameliyat Sonrası Takip ve Taburculuk Yönetimi"
          : isAr
          ? "الرعاية اللاحقة بعد الجراحة وإدارة الخروج"
          : "Postoperative Nachsorge & Entlassmanagement",
        subtitle: isRu
          ? "Безопасный мост между больницей и домашним уютом"
          : isEn
          ? "Safe continuity of clinical care from hospital bedside to home"
          : isTr
          ? "Klinik yatışı ile evdeki iyileşme arasındaki güvenli köprü"
          : isAr
          ? "الجسر الآمن بين الإقامة في المستشفى والتعافي المريح في المنزل"
          : "Die sichere Brücke zwischen Klinikaufenthalt und Genesung zu Hause",
        description: isRu
          ? "Первые дни после выписки из больницы критически важны для успешного выздоровления. NabiOta HomeCare координирует переход из клиники (NabiOta Clinics Germany GmbH или других стационаров) прямо в домашнюю обстановку. Мы следим за заживлением швов, дренажами, снимаем болевой синдром и предотвращаем опасные осложнения."
          : isEn
          ? "The initial days following surgical discharge are critical for complication-free recovery. NabiOta HomeCare establishes an uninterrupted care continuum from the hospital ward (NabiOta Clinics or regional partner hospitals) to the client's home. We monitor healing, drainage, manage medications, and prevent unplanned rehospitalizations."
          : isTr
          ? "Cerrahi müdahale sonrası ilk günler iyileşme başarısı için belirleyicidir. NabiOta HomeCare, klinikten (örn. NabiOta Clinics Germany GmbH veya diğer hastaneler) doğrudan ev ortamına koordineli geçişi sağlar. Yara iyileşmesini, drenajları ve vital bulguları izler, medikal malzeme temin eder ve komplikasyonları önleriz."
          : isAr
          ? "تعد الأيام الأولى بعد الجراحة حاسمة لنجاح العلاج. تتولى NabiOta HomeCare إدارة الخروج المنظم مباشرة من المستشفى (مثل مستشفيات NabiOta الشريكة) إلى المنزل. نراقب التئام الجروح، مصارف السوائل، العلامات الحيوية، وننظم الأجهزة لتجنب أي انتكاسات."
          : "Die ersten Tage nach einem operativen Eingriff sind entscheidend für den Heilungserfolg. NabiOta HomeCare übernimmt das koordinierte Entlassmanagement direkt aus dem Krankenhaus (z.B. NabiOta Clinics Germany GmbH oder anderen Akutkliniken) in die häusliche Umgebung. Wir überwachen Wundheilung, Drainagen und Vitalwerte, organisieren Hilfsmittel und verhindern Komplikationen.",
        indicationsTitle: isRu ? "Кому необходима помощь" : isEn ? "Common Surgeries" : isTr ? "Sık Karşılaşılan Uygulama Alanları" : isAr ? "أبرز الحالات ومجالات التطبيق" : "Häufige Einsatzbereiche",
        indications: isRu
          ? [
              "Состояние после эндопротезирования суставов (тазобедренный, коленный)",
              "После операций на брюшной полости и внутренних органах (висцеральная хирургия)",
              "После нейрохирургических операций на позвоночнике и межпозвоночных дисках",
              "Состояние после сосудистых и кардиохирургических вмешательств",
              "Пациенты после обширных онкологических резекций",
              "Пациенты, выписанные с дренажами, катетерами или швами",
            ]
          : isEn
          ? [
              "Total joint replacement recovery (hip, knee arthroplasty)",
              "Abdominal and visceral surgical interventions",
              "Spinal surgery and neurosurgical disc procedures",
              "Vascular revascularization and cardiovascular surgeries",
              "Complex oncological surgical resections",
              "Patients discharged with surgical drains, catheters, or staple lines",
            ]
          : isTr
          ? [
              "Kalça ve diz protezi (TEP) ameliyatları sonrası durum",
              "Genel cerrahi ve batın ameliyatları sonrası takipler",
              "Omurga ve bel fıtığı beyin cerrahisi operasyonları",
              "Damar cerrahisi ve kardiyolojik girişimler",
              "Yüksek bakım ihtiyacı olan karmaşık onkolojik operasyonlar",
              "Cerrahi drenajlar, port kateterler veya dikişlerle taburculuk",
            ]
          : isAr
          ? [
              "حالات استبدال مفاصل الورك والركبة (TEP)",
              "جراحات البطن والأحشاء الجراحية المعقدة",
              "جراحات العمود الفقري والانزلاق الغضروفي العصبية",
              "جراحات الأوعية الدموية والقلب التداخلية",
              "العمليات الجراحية للأورام ذات متطلبات الرعاية الفائقة",
              "الخروج مع وجود مصارف جراحية، قساطر بورت، أو غرز جراحية",
            ]
          : [
              "Zustand nach endoprothetischem Gelenkersatz (Hüft- und Knie-TEP)",
              "Eingriffe der Viszeral- und Abdominalchirurgie",
              "Neurochirurgische Operationen an Wirbelsäule und Bandscheiben",
              "Gefäßchirurgische und kardiologische Eingriffe",
              "Komplexe onkologische Operationen mit erhöhtem Pflegebedarf",
              "Entlassung mit chirurgischen Drainagen, Portkathetern oder Wundnähten",
            ],
        scopeTitle: isRu ? "Послеоперационные мероприятия" : isEn ? "Clinical Care Protocol" : isTr ? "Hemşirelik ve Bakım Hizmetleri" : isAr ? "الخدمات والتدخلات التمريضية" : "Pflegerische Leistungen",
        scopeItems: isRu
          ? [
              "Контроль хирургических швов, снятие скоб и швов по назначению врача",
              "Мониторинг объема и характера отделяемого по дренажам",
              "Контроль боли и безопасная подача обезболивающих препаратов",
              "Профилактика тромбозов (уколы антикоагулянтов, компрессионные чулки)",
              "Ранняя мобилизация и координация с амбулаторной физиотерапией NabiOta Reha",
              "Круглосуточный контакт с дежурным врачом при признаках воспаления",
            ]
          : isEn
          ? [
              "Surgical incision monitoring, suture/staple removal per physician instruction",
              "Drainage output measurement, sterile care, and scheduled removal support",
              "Postoperative pain assessment and analgesic administration",
              "Thrombosis prophylaxis (anticoagulant injections, graduated stockings)",
              "Early in-home mobilization in coordination with NabiOta Rehabilitation",
              "24/7 escalation protocol and direct reporting back to operating surgeons",
            ]
          : isTr
          ? [
              "Günlük yara ve dikiş kontrolü, hekim talimatıyla dikiş/zımba alma",
              "Yara drenajlarının ve sekresyon akışının titizlikle izlenmesi",
              "Ameliyat sonrası ağrı takibi ve reçeteye uygun analjezik verilmesi",
              "Düzenli tromboz ve pnömoni profilaksisi",
              "NabiOta Rehabilitasyon iş birliğiyle ev ortamında erken mobilizasyon",
              "24/7 nöbetçi destek ve herhangi bir bulguda cerrahlarla anında irtibat",
            ]
          : isAr
          ? [
              "مراقبة يومية للجروح والغرز، وإزالة الغرز والدبابيس الجراحية بأمر الطبيب",
              "متابعة دقيقة ومستمرة لمصارف السوائل الجراحية والإفرازات",
              "مراقبة الألم بعد الجراحة وإعطاء المسكنات الموصوفة بدقة",
              "الوقاية الصارمة من الجلطات والالتهابات الرئوية",
              "التنشيط المبكر في المنزل بالتعاون مع مراكز NabiOta للتأهيل",
              "مناوبة هاتفية 24/7 والتواصل الفوري مع الجراحين عند أي طارئ",
            ]
          : [
              "Tägliche Wund- und Nahtkontrolle sowie Fadenzug/Klammerentfernung nach ärztlicher Anordnung",
              "Sorgfältiges Monitoring von Wunddrainagen und Sekretabfluss",
              "Postoperatives Schmerzmonitoring und verordnungskonforme Analgetikagabe",
              "Konsequente Thrombose- und Pneumonieprophylaxe",
              "Frühmobilisation im häuslichen Umfeld in Kooperation mit der NabiOta Rehabilitation",
              "24/7 Rufbereitschaft und sofortige Rücksprache mit den Operateuren bei Auffälligkeiten",
            ],
        billingTitle: isRu ? "Покрытие расходов" : isEn ? "Billing & Coverage" : "Kostenträger & Anspruch",
        billingText: isRu
          ? "Финансируется кассой медицинского страхования по § 37 Abs. 1 или 2 SGB V (послебольничный уход) либо по § 38 SGB V (помощь по хозяйству при временной нетрудоспособности). Направление оформляет клиника перед выпиской."
          : isEn
          ? "Covered by statutory and private health insurance under § 37 SGB V (transitional hospital care) or § 38 SGB V (household assistance during acute recovery). Hospital social services initiate the prescription prior to discharge."
          : isTr
          ? "Masraflar SGB V § 37 Abs. 1 veya 2 (hastane sonrası bakım) ve gerekirse SGB V § 38 (ev idaresi desteği) kapsamında karşılanır. Reçete doğrudan hastane taburculuk servisi tarafından düzenlenir."
          : isAr
          ? "تُغطى التكاليف عبر رعاية ما بعد المستشفى وفق § 37 SGB V والمساعدة المنزلية وفق § 38 SGB V. تصدر الوصفة مباشرة ضمن خدمة إدارة الخروج من المستشفى."
          : "Die Kosten werden über die Krankenhausnachsorge gemäß § 37 Abs. 1 oder Abs. 2 SGB V sowie bei Bedarf über Haushaltshilfe nach § 38 SGB V abgedeckt. Die Verordnung wird bereits im Rahmen des Entlassmanagements im Krankenhaus ausgestellt.",
        qualityTitle: isRu ? "Координация с хирургами" : isEn ? "Surgical Coordination" : isTr ? "Holding İçi Entegre Ağ" : isAr ? "سلسلة متكاملة داخل منظومة المجموعة" : "Nahtlose Verbundkette",
        qualityText: isRu
          ? "Благодаря единой экосистеме NabiOta информация о ходе операции и рекомендациях хирурга передается патронажной сестре мгновенно и безопасно."
          : isEn
          ? "Within the NabiOta Health Group ecosystem, surgical discharge summaries and surgeon instructions are transferred directly and securely to the visiting nurse."
          : isTr
          ? "NabiOta Grubunun cerrahi birimleriyle yakın koordinasyon, ameliyat detaylarının ve hekim notlarının evde bakım planına eksiksiz aktarılmasını sağlar."
          : isAr
          ? "يضمن التنسيق الوثيق مع الأقسام الجراحية في مجموعة NabiOta انتقال كافة تفاصيل الجراحة وتوصيات الأطباء إلى خطة الرعاية المنزلية دون أي فجوات."
          : "Die enge Verzahnung mit den operativen Einheiten der NabiOta-Gruppe stellt sicher, dass postoperative Besonderheiten und OP-Berichte ohne Informationsverlust in den häuslichen Pflegeplan einfließen.",
        ctaButtonText: isRu ? "Заказать послеоперационный уход" : isEn ? "Arrange Post-Op Care" : isTr ? "Ameliyat Sonrası Bakım Talebi" : isAr ? "ترتيب رعاية ما بعد الجراحة" : "Nachsorge organisieren",
      },
    },
    {
      id: "spezialpflege",
      badge: isRu
        ? "СПЕЦИАЛЬНЫЙ УХОД"
        : isEn
        ? "SPECIALIZED NURSING"
        : isTr
        ? "UZMANLAŞMIŞ TEDAVİ"
        : isAr
        ? "علاج ورعاية متخصصة"
        : "SPEZIALISIERTE BEHANDLUNG",
      image: "/images/nursing/why-choose-nurse.webp",
      iconType: "pill",
      title: isRu
        ? "Стомы, катетеры & порт-системы"
        : isEn
        ? "Stoma, Catheter & Port Management"
        : isTr
        ? "Stoma, Kateter & Port Yönetimi"
        : isAr
        ? "رعاية الفغرات، القساطر وأنظمة البورت"
        : "Stoma-, Katheter- & Portversorgung",
      shortDesc: isRu
        ? "Квалифицированный уход за стомами, катетерами, порт-системами, а также энтеральным и парентеральным питанием в стерильных условиях."
        : isEn
        ? "Expert management of artificial access routes, enteral and parenteral nutrition, and sterile port flushing routines."
        : isTr
        ? "Drenaj ve yapay giriş yollarının nitelikli bakımı, enteral/parenteral beslenme ve steril koşullarda port yıkamaları."
        : isAr
        ? "رعاية فائقة للمنافذ والمصارف الجراحية، التغذية المعوية والوريدية، وغسيل البورت في ظروف معقمة تماماً."
        : "Qualifizierte Versorgung ableitender und künstlicher Zugänge, enterale/parenterale Ernährung und Portspülungen unter sterilen Bedingungen.",
      modal: {
        title: isRu
          ? "Уход за стомами, катетерами и порт-системами"
          : isEn
          ? "Specialized Stoma, Catheter & Port System Care"
          : isTr
          ? "Stoma, Kateter ve Port Bakımı"
          : isAr
          ? "رعاية الفغرات، القساطر وأنظمة البورت الوريدي"
          : "Stoma-, Katheter- & Portversorgung",
        subtitle: isRu
          ? "Максимальная стерильность, надежность и предотвращение инфекций"
          : isEn
          ? "Maximum asepsis, skin protection, and catheter infection prevention"
          : isTr
          ? "En yüksek asepsi, cilt koruması ve güvenilir enfeksiyon önleme"
          : isAr
          ? "أعلى درجات التعقيم وحماية الجلد والوقاية الصارمة من العدوى"
          : "Höchste Asepsis, Hautschutz und zuverlässige Infektionsprävention",
        description: isRu
          ? "Специальные инвазивные системы (катетеры, кало- и уростомы, инфузионные порты, зонды PEG) требуют строжайшего соблюдения правил асептики. Наши медсестры прошли углубленную подготовку по специализированному уходу, что позволяет предотвратить инфекции кровотока, раздражения кожи и поломку оборудования."
          : isEn
          ? "Invasive clinical access devices such as urinary catheters, enterostomies, urostomies, subcutaneous infusion ports, and PEG feeding tubes require rigorous aseptic protocols. Our specialized nurses possess advanced training to protect delicate peristomal skin, prevent bloodstream infections, and ensure smooth therapy delivery."
          : isTr
          ? "Suprapubik kateterler, kolostomiler, port kateterler veya PEG beslenme tüpleri gibi invaziv sistemler azami özen ve mutlak asepsi gerektirir. Özel eğitimli uzman hemşirelerimiz, enfeksiyonları önlemek ve hastaların yaşam kalitesini korumak için steril teknikleri eksiksiz uygular."
          : isAr
          ? "تتطلب الأجهزة التداخلية مثل القساطر البولية، الفغرات، قساطر البورت، أو أنابيب التغذية PEG عناية دقيقة وتعقيماً مطلقاً. يتقن كادرنا التمريضي المتخصص تقنيات اللمس المعقم لمنع العدوى الخطيرة وحماية صحة المريض."
          : "Invasive Zugangs- und Ableitungssysteme – wie suprapubische Katheter, Enterostomata, Portkatheter oder PEG-Ernährungssonden – verlangen äußerste Sorgfalt und strikte Asepsis. Unsere speziell geschulten Pflegefachkräfte beherrschen die sterile Non-Touch-Technik, um lebensbedrohliche Infektionen zu vermeiden und die Lebensqualität der Betroffenen zu sichern.",
        indicationsTitle: isRu ? "Области применения" : isEn ? "Clinical Devices & Systems" : isTr ? "Bakım ve Uygulama Odakları" : isAr ? "محاور الرعاية والتطبيقات" : "Versorgungsschwerpunkte",
        indications: isRu
          ? [
              "Колостомы, илеостомы и уростомы (временные и постоянные)",
              "Трансуретральные и надлобковые (супрапубические) мочевые катетеры",
              "Подкожные венозные порт-системы (химиотерапия, длительные инфузии)",
              "Энтеральное питание через назогастральные зонды и гастростомы (PEG / PEJ)",
              "Парентеральное внутривенное питание на дому",
              "Пациенты с трахеостомами и потребностью в санации",
            ]
          : isEn
          ? [
              "Colostomies, ileostomies, and urostomies (temporary or permanent)",
              "Transurethral and suprapubic urinary bladder catheters",
              "Subcutaneous central venous port systems (oncology, parenteral therapy)",
              "Enteral tube feeding via PEG, PEJ, or nasogastric tubes",
              "Home total parenteral nutrition (TPN) infusion protocols",
              "Tracheostomy care, cannula changes, and endotracheal suctioning",
            ]
          : isTr
          ? [
              "Kolostomi, ileostomi ve ürostomi (tek ve iki parçalı sistemler)",
              "Suprapubik ve transüretral kalıcı mesane kateterleri",
              "Kemoterapi veya ağrı tedavisi için implante port sistemleri",
              "PEG / PEJ üzerinden enteral tüple beslenme",
              "Evde parenteral beslenme ve intravenöz sıvı desteği",
              "Trakeostomi bakımı ve aspirasyon uygulamaları",
            ]
          : isAr
          ? [
              "فغر القولون، فغر اللفائفي وفغر المسالك البولية (أنظمة أحادية وثنائية)",
              "القساطر البولية الدائمة عبر الإحليل وعبر جدار البطن (فوق العانة)",
              "أنظمة البورت المزروعة للعلاج الكيميائي أو المسكنات",
              "التغذية المعوية عبر أنابيب فغر المعدة (PEG / PEJ)",
              "التغذية الوريدية الكاملة وإعطاء السوائل في المنزل",
              "رعاية فغر الرغامي (القصبة الهوائية) والشفط الإفرازي المتخصص",
            ]
          : [
              "Colostomie, Ileostomie und Urostomie (einteilige und zweiteilige Systeme)",
              "Suprapubische (Bauchdecken-) und transurethrale Blasenverweilkatheter",
              "Vollständig implantierte Port-Systeme für Chemotherapie oder Schmerztherapie",
              "Enterale Ernährung über perkutane endoskopische Gastrostomie (PEG / PEJ)",
              "Parenterale Ernährung und intravenöse Flüssigkeitssubstitution",
              "Tracheostoma-Versorgung und fachgerechte endotracheale Absaugung",
            ],
        scopeTitle: isRu ? "План ухода и процедуры" : isEn ? "Care Interventions" : isTr ? "Hemşirelik ve Bakım Hizmetleri" : isAr ? "الخدمات والتدخلات التمريضية" : "Pflegerische Leistungen",
        scopeItems: isRu
          ? [
              "Асептическая смена стомических пластин и калоприемников с защитой кожи",
              "Промывание и смена мочевых катетеров в соответствии с предписанием врача",
              "Пункция и промывание порт-систем специальными иглами Губера в стерильных условиях",
              "Настройка и контроль работы помп для энтерального и парентерального питания",
              "Профилактика катетер-ассоциированных инфекций мочевыводящих путей (CAUTI)",
              "Обучение пациента и его родственников самостоятельным манипуляциям",
            ]
          : isEn
          ? [
              "Aseptic stoma plate & pouch changes with specialized skin barrier care",
              "Urinary catheter flushes, catheter changes, and sterile collection bag management",
              "Sterile port puncture with non-coring Huber needles and scheduled heparin flushes",
              "Programming and maintenance of automated enteral and parenteral feeding pumps",
              "Systematic prevention of catheter-associated infections per RKI recommendations",
              "Sensitive guidance and coaching for patients and family caregivers",
            ]
          : isTr
          ? [
              "Stoma plakalarının ve torba sistemlerinin cilt korumalı steril değişimi",
              "Mesane kateterlerinin hekim aralığına uygun steril değişimi ve yıkanması",
              "Huber iğneleriyle port sistemlerinin aseptik ponksiyonu ve steril pansumanı",
              "Beslenme pompalarının (PEG / TPN) bağlanması ve kontrolü",
              "Kateter ilişkili enfeksiyonlara karşı RKI önerilerine tam uyum",
              "Hasta ve yakınlarına evde güvenlik için rehberlik ve eğitim",
            ]
          : isAr
          ? [
              "تغيير معقم ولطيف لقواعد وأكياس الفغر مع حماية فائقة للجلد",
              "تغيير معقم وغسيل للقساطر البولية وفق الفترات المحددة طبياً",
              "وخز معقم لأنظمة البورت بإبر هوبر الخاصة وتغيير الضمادات المعقمة",
              "توصيل وضبط مضخات التغذية الأنبوبية والوريدية بدقة (PEG / TPN)",
              "الالتزام الصارم بتوصيات معهد RKI للوقاية من عدوى القساطر",
              "تدريب وتوجيه دافئ ومبسط لأفراد الأسرة لتحقيق الأمان اليومي",
            ]
          : [
              "Fachgerechter, atraumatischer Wechsel von Stomaplatten und Beutelsystemen inklusive Hautschutz",
              "Steriler Wechsel und Spülung von Blasenkathetern nach ärztlichem Intervall",
              "Aseptische Punktion von Portsystemen mit Huber-Sicherheitsnadeln und steriler Verbandwechsel",
              "Anschluss, Spülung und sachgemäße Bedienung von Ernährungspumpen (PEG / TPN)",
              "Strikte Einhaltung der RKI-Präventionsempfehlungen gegen Katheter-assoziierte Infektionen",
              "Einfühlsame Anleitung und Schulung von Angehörigen für mehr Sicherheit im Alltag",
            ],
        billingTitle: isRu ? "Страховое финансирование" : isEn ? "Reimbursement" : isTr ? "Masraf Karşılama ve Tıbbi Cihazlar" : isAr ? "الجهات الضامنة والمستلزمات الطبية" : "Kostenträger & Hilfsmittel",
        billingText: isRu
          ? "Все манипуляции покрываются больничной кассой (SGB V) по рецепту врача. Необходимые расходные материалы и аппараты поставляются через санитарный дом NabiOta Sanitätshaus GmbH с прямым расчетом с кассой."
          : isEn
          ? "Nursing interventions are covered by health insurance under SGB V. Associated consumables and equipment are supplied directly via our NabiOta Sanitätshaus GmbH medical supply unit."
          : isTr
          ? "Hemşirelik uygulamaları SGB V kapsamında sağlık sigortaları tarafından karşılanır. Gerekli medikal malzemeler, kateter setleri, stoma ürünleri doğrudan NabiOta Sanitätshaus üzerinden temin edilir."
          : isAr
          ? "تُغطى الإجراءات التمريضية بالكامل وفق SGB V من قبل التأمين الصحي. وتُورد المستلزمات الطبية، مجموعات القساطر، وأدوات الفغر مباشرة عبر متجر Sanitätshaus التابع للمجموعة."
          : "Die pflegerischen Maßnahmen werden vollumfänglich nach SGB V von den Krankenkassen vergütet. Die erforderlichen Hilfsmittel, Kathetersets, Stomaartikel und Ernährungsprodukte werden direkt über das NabiOta Sanitätshaus bezogen.",
        qualityTitle: isRu ? "Инфекционный контроль" : isEn ? "Infection Control" : isTr ? "En Yüksek Hijyen Güvenliği" : isAr ? "أعلى معايير الأمان والتعقيم" : "Höchste Hygienesicherheit",
        qualityText: isRu
          ? "Мы используем исключительно одноразовые стерильные наборы и сертифицированные антисептики, соблюдая протоколы госпитальной гигиены."
          : isEn
          ? "We utilize strictly sterile disposable procedural packs and hospital-grade antiseptics, adhering to high-standard clinical hygiene guidelines."
          : isTr
          ? "Uygulamalar istisnasız sertifikalı steril tek kullanımlık setlerle ve klinik hijyen protokollerimize göre gerçekleştirilir."
          : isAr
          ? "يتم التنفيذ حصرياً باستخدام أطقم معقمة ذات استخدام أحادي ووفق خطط التعقيم المعتمدة بالمستشفيات."
          : "Die Durchführung erfolgt ausnahmslos mit zertifizierten sterilen Einmal-Sets unter strikter Beachtung unserer klinikkonformen Hygienepläne.",
        ctaButtonText: isRu ? "Консультация по катетерам и стомам" : isEn ? "Request Specialist Nursing" : isTr ? "Özel Bakım Hizmeti Talebi" : isAr ? "طلب رعاية تمريضية متخصصة" : "Spezialpflege anfordern",
      },
    },
    {
      id: "beratung-entlastung",
      badge: isRu
        ? "§ 37.3 SGB XI • РАЗГРУЗКА"
        : isEn
        ? "§ 37.3 SGB XI • COUNSELING"
        : isTr
        ? "§ 37.3 SGB XI & AİLEYE DESTEK"
        : isAr
        ? "§ 37.3 SGB XI ودعم أسر المرضى"
        : "§ 37.3 SGB XI & ENTLASTUNG",
      image: "/images/nursing/hero-nurse.webp",
      iconType: "users",
      title: isRu
        ? "Консультации, профилактика & разгрузка близких"
        : isEn
        ? "Care Counseling, Prophylaxis & Respite"
        : isTr
        ? "Bakım Danışmanlığı, Profilaksi & Aile Desteği"
        : isAr
        ? "استشارات الرعاية، الوقاية ودعم وتخفيف العبء عن الأسرة"
        : "Pflegeberatung, Prophylaxen & Angehörigenentlastung",
      shortDesc: isRu
        ? "Обязательные консультации по § 37.3 SGB XI, профилактика пролежней и падений, обучение родственников и временный замещающий уход."
        : isEn
        ? "Mandatory § 37.3 SGB XI counseling visits, fall and pressure injury prevention, caregiver coaching, and hourly respite care."
        : isTr
        ? "Yasal danışmanlık ziyaretleri (§ 37.3 SGB XI), düşme ve bası yarası profilaksisi, hasta yakını eğitimi ve saatlik ikame bakım."
        : isAr
        ? "زيارات الاستشارة القانونية الإلزامية (§ 37.3 SGB XI)، الوقاية من السقوط وقرح الفراش، تدريب الأسرة، والرعاية البديلة بالساعة."
        : "Gesetzliche Beratungseinsätze (§ 37 Abs. 3 SGB XI), Sturz- und Dekubitusprophylaxe, Anleitung Angehöriger sowie stundenweise Entlastung.",
      modal: {
        title: isRu
          ? "Консультации, профилактика и поддержка родственников"
          : isEn
          ? "Care Counseling (§ 37.3 SGB XI), Prevention & Respite Care"
          : isTr
          ? "Bakım Danışmanlığı (§ 37.3 SGB XI), Profilaksi ve Aileye Destek"
          : isAr
          ? "استشارات الرعاية (§ 37.3 SGB XI)، الوقاية وتخفيف العبء الأسري"
          : "Pflegeberatung (§ 37 Abs. 3 SGB XI), Prophylaxen & Entlastung",
        subtitle: isRu
          ? "Защита близких от выгорания и официальные отчеты для больничных касс"
          : isEn
          ? "Preventing caregiver burnout and official statutory counseling for insurance funds"
          : isTr
          ? "Hasta yakınları için somut destek ve sosyal hukukta güvenilir rehberlik"
          : isAr
          ? "تخفيف ملموس للعبء عن كاهل الأسرة ومرافقة قانونية واجتماعية موثوقة"
          : "Spürbare Entlastung für Angehörige und verlässliche Begleitung im Sozialrecht",
        description: isRu
          ? "Уход за близким человеком требует колоссальных душевных и физических сил. NabiOta HomeCare не только оформляет обязательные для кассы подтверждения по § 37.3 SGB XI, но и практически обучает родственников правильным приемам ухода, помогает получить более высокий Pflegegrad и организует временную замену (Verhinderungspflege), когда вам нужен отдых."
          : isEn
          ? "Caring for a loved one is emotionally and physically demanding. NabiOta HomeCare not only conducts mandatory statutory counseling visits under § 37.3 SGB XI to preserve cash benefits, but also trains family members in ergonomic techniques, helps adjust Pflegegrad ratings, and provides respite care (§ 39/45b SGB XI) when caregivers need a well-deserved break."
          : isTr
          ? "Bir yakına bakmak muazzam bir güç gerektirir. NabiOta HomeCare yasal zorunlu § 37.3 SGB XI danışmanlık ziyaretlerini gerçekleştirir, bakım parası hakkınızı korur ve derece yükseltme başvurularında destek olur. Ayrıca ikame bakım (§ 39) ve ek rahatlama hizmetleriyle (§ 45b) ailelerin yükünü hafifletiriz."
          : isAr
          ? "تتطلب رعاية أحد أفراد الأسرة جهداً بدنياً ونفسياً هائلاً. تنفذ NabiOta HomeCare الزيارات الاستشارية الإلزامية وفق § 37.3 SGB XI لضمان استمرار بدل الرعاية، وتساعد في طلبات رفع درجة الرعاية، وتقدم الرعاية البديلة المؤقتة (§ 39) لتوفير قسط من الراحة للأسرة."
          : "Die Pflege eines Angehörigen erfordert enorme körperliche und seelische Kraft. Die NabiOta HomeCare führt die gesetzlich vorgeschriebenen Beratungseinsätze nach § 37 Abs. 3 SGB XI durch, sichert Ihren Anspruch auf Pflegegeld und unterstützt bei Höherstufungsanträgen. Zudem entlasten wir pflegende Angehörige durch stundenweise Verhinderungspflege (§ 39 SGB XI) und gezielte Entlastungsangebote (§ 45b SGB XI).",
        indicationsTitle: isRu ? "Кому адресована программа" : isEn ? "Who Needs This" : isTr ? "Bu Desteğin Devreye Girdiği Durumlar" : isAr ? "متى تحتاج الأسرة إلى هذا الدعم" : "Wann diese Unterstützung greift",
        indications: isRu
          ? [
              "Получатели пособия по уходу (Pflegegeld) для обязательного отчета в кассу",
              "Родственники, испытывающие эмоциональное или физическое истощение",
              "Семьи, готовящиеся к медико-социальной экспертизе (MD / Pflegegrad)",
              "Пациенты с высоким риском падений или появления пролежней",
              "Периоды отпуска, болезни или срочных дел ухаживающего родственника",
              "Необходимость переоборудования квартиры для инвалидной коляски",
            ]
          : isEn
          ? [
              "Recipients of statutory cash care allowances needing mandatory verification",
              "Family caregivers experiencing exhaustion, stress, or requiring holiday coverage",
              "Families preparing for medical assessment (MD) for initial or increased Pflegegrad",
              "Seniors facing high risks of accidental falls or immobility-related skin breakdown",
              "Periods when primary family caregivers fall ill or need personal time off",
              "Homes requiring barrier-free adaptations and technical care aids",
            ]
          : isTr
          ? [
              "Bakım parası alanlar için yasal danışmanlık zorunluluğu (§ 37.3 SGB XI)",
              "Tatil, hastalık veya acil durumlarda hasta yakınlarının dinlenme ihtiyacı (§ 39)",
              "Doğru bakım derecesinin tespiti için MD/MDK bilirkişi incelemesi öncesi aileler",
              "Yüksek düşme veya bası yarası riski taşıyan danışanlar",
              "Günlük yaşamda ergonomik kaldırma ve taşıma teknikleri eğitimi ihtiyacı",
              "Ev ortamını iyileştirici önlemler ve bakım yardımcıları danışmanlığı",
            ]
          : isAr
          ? [
              "الحاصلون على بدل الرعاية النقدي لضمان استحقاقهم القانوني (§ 37.3 SGB XI)",
              "أفراد الأسرة المعيلون في فترات العطلات، المرض أو الحاجة للراحة (§ 39 SGB XI)",
              "الأسر المقبلة على تقييم اللجان الطبية (MD) للحصول على درجة رعاية عادلة",
              "المرضى المعرضون لمخاطر السقوط أو قرح الفراش",
              "الحاجة إلى تدريب عملي على تقنيات حمل ونقل المريض المريحة للظهر",
              "استشارات تكييف بيئة المنزل وتوفير الأجهزة والمستلزمات الطبية المساعدة",
            ]
          : [
              "Bezieher von Pflegegeld zur Sicherung des Anspruchs (§ 37 Abs. 3 SGB XI)",
              "Pflegende Angehörige bei Urlaub, eigener Erkrankung oder Terminen (§ 39 SGB XI)",
              "Familien vor der MDK/MD-Begutachtung zur Erlangung eines gerechten Pflegegrads",
              "Gefährdete Klienten mit erhöhtem Sturzrisiko oder drohenden Druckgeschwüren",
              "Bedarf an praktischer Anleitung ergonomischer Hebetechniken im Alltag",
              "Beratung zu wohnumfeldverbessernden Maßnahmen und Pflegehilfsmitteln",
            ],
        scopeTitle: isRu ? "Наши услуги и помощь" : isEn ? "Services Included" : isTr ? "Hizmet Kapsamı ve Destekler" : isAr ? "نطاق الخدمات والمساندة المقدمة" : "Leistungsumfang & Entlastung",
        scopeItems: isRu
          ? [
              "Проведение официальных визитов по § 37.3 SGB XI с отправкой отчета в кассу",
              "Сопровождение при визите эксперта Медицинской службы (MD/MDK)",
              "Практические уроки для близких: безопасные перемещения, мытье, профилактика травм",
              "Замещающий уход на время вашего отпуска или болезни (§ 39 SGB XI)",
              "Услуги помощи в быту и сопровождения по § 45b SGB XI (131 €/мес от кассы)",
              "Оценка риска падений и подбор противопролежневых систем с NabiOta Sanitätshaus",
            ]
          : isEn
          ? [
              "Conduct of mandatory § 37.3 SGB XI visits with direct electronic notification to insurer",
              "Personal advocacy and representation during statutory medical review (MD)",
              "Hands-on caregiver coaching: ergonomic transfers, gentle skin care, fall prevention",
              "Flexible substitute and respite care during caregiver holidays or illness (§ 39 SGB XI)",
              "Activation and everyday household assistance covered under § 45b SGB XI",
              "Systematic fall-risk screening and anti-decubitus mattress provision with Sanitätshaus",
            ]
          : isTr
          ? [
              "Bakım sandığına bildirimli yasal § 37.3 SGB XI danışmanlık ziyaretleri",
              "MD bakım derecesi incelemesine profesyonel hazırlık ve eşlik",
              "Evde pratik bakım eğitimleri: sırtı koruyan transfer teknikleri ve profilaksiler",
              "Bakıcı yakının yokluğunda saatlik veya günlük ikame bakım (§ 39 SGB XI)",
              "Ek rahatlama ve refakat hizmetleri (§ 45b SGB XI - aylık 131 € bütçe)",
              "Düşme ve bası yarası taraması ile Sanitätshaus üzerinden özel yatak temini",
            ]
          : isAr
          ? [
              "إجراء زيارات الاستشارة الإلزامية (§ 37.3 SGB XI) مع إرسال الإشعار للصندوق",
              "التحضير المهني والمرافقة الشخصية أثناء تقييم درجة الرعاية من قبل أطباء MD",
              "تدريب عملي للأسرة في المنزل: تقنيات نقل آمنة للظهر وطرق الوقاية السليمة",
              "رعاية بديلة بالساعات أو الأيام (§ 39 SGB XI) أثناء غياب المعيل الأساسي",
              "خدمات الرعاية المنزلية والمرافقة الترفيهية وفق § 45b SGB XI (131 € شهرياً)",
              "فحص مخاطر السقوط وقرح الفراش وتوفير مراتب وأنظمة خاصة عبر المتجر الطبي",
            ]
          : [
              "Durchführung der gesetzlichen Beratungseinsätze nach § 37 Abs. 3 SGB XI mit Nachweis an die Kasse",
              "Professionelle Vorbereitung und persönliche Begleitung bei der MD-Pflegegradbegutachtung",
              "Praktische Pflegeschulungen vor Ort: rückenschonende Transfertechniken und Prophylaxen",
              "Stunden- oder tageweise Verhinderungspflege (§ 39 SGB XI) bei Abwesenheit der Pflegeperson",
              "Zusätzliche Betreuungs- und Entlastungsleistungen nach § 45b SGB XI (z.B. Begleitung, Haushalt)",
              "Sturz- und Dekubitus-Screening sowie Bereitstellung von Spezialhilfsmitteln via Sanitätshaus",
            ],
        billingTitle: isRu ? "100% оплата кассой" : isEn ? "No Out-of-Pocket Cost" : isTr ? "Masraf Karşılama ve Yasal Bütçeler" : isAr ? "تغطية التكاليف والميزانيات القانونية" : "Kostenübernahme & Budgets",
        billingText: isRu
          ? "Визиты по § 37.3 SGB XI на 100% оплачиваются кассой по уходу без каких-либо доплат со стороны пациента. Бюджеты на замещающий уход (§ 39: до 1.612 €) и разгрузку (§ 45b: 131 €/мес) финансируются государством."
          : isEn
          ? "Statutory § 37.3 SGB XI counseling visits are 100% covered by long-term care insurance with zero out-of-pocket costs. Annual respite budgets (§ 39) and monthly relief allowances (§ 45b) can be fully utilized."
          : isTr
          ? "Yasal § 37.3 SGB XI danışmanlık ziyaretleri sizin için tamamen ücretsizdir ve doğrudan bakım sandığı ile mahsuplaşılır. İkame bakım bütçesi (yılda 1.612 €'ya kadar) ve ek rahatlama ödeneği (ayda 131 €) yasal hakkınızdır."
          : isAr
          ? "زيارات الاستشارة القانونية وفق § 37.3 SGB XI مجانية تماماً بالنسبة لكم وتُسوى مباشرة مع الصندوق. كما يحق لكم الاستفادة الكاملة من ميزانيات الرعاية البديلة (حتى 1.612 € سنوياً) ومبلغ تخفيف العبء (131 € شهرياً)."
          : "Die gesetzlichen Beratungseinsätze nach § 37 Abs. 3 SGB XI sind für Sie kostenfrei und werden direkt mit der Pflegekasse abgerechnet. Auch die Budgets für Verhinderungspflege (bis zu 1.612 €/Jahr) und der Entlastungsbetrag (131 €/Monat) stehen Ihnen gesetzlich zu.",
        qualityTitle: isRu ? "Сертифицированные консультанты" : isEn ? "Licensed Care Advisors" : isTr ? "Sertifikalı Bakım Danışmanları" : isAr ? "مستشارو رعاية معتمدون" : "Zertifizierte Pflegeberater",
        qualityText: isRu
          ? "Консультации проводят дипломированные эксперты по уходу с глубоким знанием немецкого социального права и богатым практическим опытом."
          : isEn
          ? "Counseling is conducted by accredited eldercare specialists with comprehensive mastery of German social insurance regulations."
          : isTr
          ? "Danışmanlarımız SGB XI § 7a uyarınca resmi ek niteliklere sahiptir ve size empati ve uzmanlıkla rehberlik eder."
          : isAr
          ? "يحمل مستشارونا مؤهلات إضافية معتمدة وفق § 7a SGB XI ويقدمون مشورتهم بأسلوب إنساني رفيع وحلول عملية."
          : "Unsere Pflegeberater verfügen über anerkannte Zusatzqualifikationen nach § 7a SGB XI und beraten Sie empathisch, kompetent und lösungsorientiert.",
        ctaButtonText: isRu ? "Записаться на консультацию (§ 37.3)" : isEn ? "Schedule § 37.3 Visit" : isTr ? "Danışmanlık Ziyareti Talebi (§ 37.3)" : isAr ? "طلب زيارة استشارية (§ 37.3)" : "Beratungseinsatz anfordern",
      },
    },
  ];

  // 4 Core Divisions of NabiOta Sanitätshaus GmbH (Pages 17-18 PDF)
  const sanitaetshausData: CareServiceModalData[] = [
    {
      id: "orthopaedie-bandagen",
      badge: isRu
        ? "§§ 126, 127 SGB V • РЕМЕСЛЕННАЯ ПАЛАТА"
        : isEn
        ? "§§ 126, 127 SGB V • CRAFTS GUILD"
        : isTr
        ? "§§ 126, 127 SGB V • ZANAAT ODASI (HANDWERKSROLLE)"
        : isAr
        ? "§§ 126, 127 SGB V • غرفة الحرف اليدوية"
        : "§§ 126, 127 SGB V • HANDWERKSROLLE",
      image: "/images/nursing/stage-postsurgical.webp",
      iconType: "accessibility",
      title: isRu
        ? "Ортопедическое обеспечение и бандажи"
        : isEn
        ? "Orthopedic Braces & Custom Bandages"
        : isTr
        ? "Ortopedik Yardımcı Cihazlar ve Bandajlar"
        : isAr
        ? "الأجهزة التعويضية والضمادات التقويمية"
        : "Orthopädische Hilfsmittel & Bandagen",
      shortDesc: isRu
        ? "Индивидуальный подбор и изготовление ортезов, суставных бандажей, поддерживающих корсетов и компрессионного трикотажа (I–IV класс)."
        : isEn
        ? "Custom-fitted orthoses, dynamic joint braces, spinal support corsets, and medical compression garments (classes I–IV)."
        : isTr
        ? "Kişiye özel ortezler, fonksiyonel eklem bandajları, destek korseleri ve tıbbi kompresyon çorapları (I–IV. sınıf)."
        : isAr
        ? "جبائر وتقويمات مخصصة، دعامات المفاصل الوظيفية، مشدات الظهر الداعمة، والجوارب الضاغطة الطبية (الفئات I-IV)."
        : "Maßgefertigte Orthesen, funktionelle Gelenkbandagen, Stützkorsetts und medizinische Kompressionsversorgung (Klassen I–IV).",
      modal: {
        title: isRu
          ? "NabiOta Sanitätshaus: Ортопедическое обеспечение"
          : isEn
          ? "NabiOta Medical Supplies: Orthopedic Appliances"
          : isTr
          ? "NabiOta Sanitätshaus: Ortopedik Donanım ve Cihazlar"
          : isAr
          ? "NabiOta Sanitätshaus: الأجهزة التعويضية والتجهيزات التقويمية"
          : "NabiOta Sanitätshaus: Orthopädische Versorgung",
        subtitle: isRu
          ? "Точная биомеханическая стабилизация и восстановление функций"
          : isEn
          ? "Precision Biomechanical Stabilization & Functional Recovery"
          : isTr
          ? "Hassas biyomekanik stabilizasyon ve hareket kabiliyetinin korunması"
          : isAr
          ? "تثبيت ميكانيكي حيوي دقيق واستعادة وظائف الحركة"
          : "Präzise biomechanische Stabilisierung und Funktionssicherung",
        description: isRu
          ? "Ортопедическая мастерская NabiOta Sanitätshaus GmbH сочетает передовое ремесленное мастерство с медицинскими стандартами. Мы производим и индивидуально подгоняем ортопедические изделия для разгрузки суставов, коррекции осанки и постоперационной защиты."
          : isEn
          ? "The certified orthopedic workshop of NabiOta Sanitätshaus GmbH unites traditional master craftsmanship with clinical precision. We configure and customize orthopedic appliances to relieve joint stress, correct alignment, and ensure safe postoperative recovery."
          : isTr
          ? "NabiOta Sanitätshaus GmbH'nin sertifikalı ortopedi atölyesi, geleneksel zanaat ustalığını en modern klinik standartlarla buluşturur. Zanaat Yönetmeliği ve §§ 126, 127 SGB V uyarınca kas-iskelet sistemini rahatlatmak, yönlendirmek ve stabilize etmek amacıyla ortopedik ürünleri kişiye özel uyarlıyor ve üretiyoruz."
          : isAr
          ? "تجمع ورشة الأجهزة التعويضية المعتمدة في NabiOta Sanitätshaus GmbH بين الدقة الحرفية المتوارثة وأحدث المعايير الطبية السريرية. وفقاً للائحة الحرف والفقرات §§ 126, 127 SGB V، نقوم بتصنيع ومواءمة الأجهزة التقويمية لتخفيف الحمل عن الجهاز الحركي وتثبيته بكفاءة."
          : "Die zertifizierte orthopädietechnische Werkstatt der NabiOta Sanitätshaus GmbH verbindet handwerkliche Präzision mit modernster medizinischer Versorgung. Gemäß Handwerksordnung und §§ 126, 127 SGB V fertigen und adaptieren wir orthopädische Hilfsmittel zur gezielten Entlastung, Führung und Stabilisierung des Bewegungsapparats.",
        indicationsTitle: isRu
          ? "Медицинские показания"
          : isEn
          ? "Clinical Indications"
          : isTr
          ? "Tıbbi Endikasyonlar"
          : isAr
          ? "دواعي الاستعمال الطبية"
          : "Medizinische Indikationen",
        indications: isRu
          ? [
              "Состояния после операций на крестообразных связках, менисках и суставах",
              "Выраженный гонартроз, коксартроз и нестабильность голеностопа",
              "Деформации и дегенеративные заболевания позвоночника (грыжи, сколиоз)",
              "Хроническая венозная недостаточность, лимфедема и профилактика тромбоза",
            ]
          : isEn
          ? [
              "Postoperative immobilization following ACL, meniscus, or joint surgeries",
              "Severe gonarthrosis, coxarthrosis, and chronic ligament instability",
              "Spinal degenerative disorders, disc herniations, and scoliosis",
              "Chronic venous insufficiency, lymphedema, and deep vein thrombosis prophylaxis",
            ]
          : isTr
          ? [
              "Çapraz bağ, menisküs veya eklem ameliyatları sonrası postoperatif stabilizasyon",
              "İleri evre gonartroz, koksartroz ve kronik bağ instabiliteleri",
              "Dejeneratif omurga hastalıkları, bel fıtıkları ve skolyoz",
              "Kronik venöz yetmezlik, lenfödem ve postoperatif tromboz profilaksisi",
            ]
          : isAr
          ? [
              "التثبيت بعد جراحات الرباط الصليبي، الغضروف المفصلي أو المفاصل",
              "الفصال العظمي المتقدم في الركبة والورك وعدم استقرار الأربطة المزمن",
              "أمراض العمود الفقري التنكسية، الانزلاق الغضروفي والجنف",
              "القصور الوريدي المزمن، الوذمة اللمفية والوقاية من الجلطات بعد الجراحة",
            ]
          : [
              "Postoperative Stabilisierung nach Kreuzband-, Meniskus- oder Gelenkoperationen",
              "Fortgeschrittene Gonarthrose, Koxarthrose und chronische Bandinstabilitäten",
              "Degenerative Wirbelsäulenerkrankungen, Bandscheibenvorfälle und Skoliosen",
              "Chronisch-venöse Insuffizienz, Lymphödeme und postoperative Thromboseprophylaxe",
            ],
        scopeTitle: isRu
          ? "Спектр изделий и услуг"
          : isEn
          ? "Product & Service Scope"
          : isTr
          ? "Ürün ve Hizmet Kapsamı"
          : isAr
          ? "نطاق المنتجات والخدمات"
          : "Leistungsumfang & Versorgung",
        scopeItems: isRu
          ? [
              "Анатомические бандажи для коленного, плечевого, локтевого и лучезапястного суставов",
              "Шарнирные жесткие и полужесткие ортезы с регулируемым углом сгибания",
              "Специализированные корсеты для поясничного и грудного отделов позвоночника",
              "Индивидуальный замер и подбор медицинского компрессионного трикотажа (RAL-стандарт)",
            ]
          : isEn
          ? [
              "Anatomical braces for knee, shoulder, elbow, and wrist joints",
              "Hinged functional orthoses with adjustable flexion/extension limits",
              "Custom-fitted spinal corsets and supportive lumbar orthoses",
              "Certified measure-taking for medical circular/flat-knit compression stockings",
            ]
          : isTr
          ? [
              "Diz, ayak bileği, omuz ve el bileği için anatomik dokuma eklem bandajları",
              "Belirli fleksiyon/ekstansiyon açılı sert çerçeveli ve fonksiyonel ortezler",
              "Omurgayı stabilize edici ortezler, gövde korseleri ve yük azaltıcı kemerler",
              "Medikal yuvarlak ve düz örgü kompresyon giysileri için sertifikalı ölçü alımı",
            ]
          : isAr
          ? [
              "ضمادات مفاصل تشريحية محبوكة للركبة، الكاحل، الكتف والمعصم",
              "جبائر وظيفية ذات إطار صلب مع تحكم دقيق بزوايا الثني والبسط",
              "تقويمات داعمة للعمود الفقري، مشدات الجذع وأحزمة تفريغ الضغط",
              "أخذ قياسات معتمد للجوارب الضاغطة الطبية المحبوكة الدائرية والمسطحة",
            ]
          : [
              "Anatomisch gestrickte Gelenkbandagen für Knie, Sprunggelenk, Schulter und Hand",
              "Hartrahmen- und Funktionsorthesen mit definierter Flexions-/Extensionsbegrenzung",
              "Stabilisierende Wirbelsäulenorthesen, Rumpfkorsetts und Entlastungsbandagen",
              "Zertifizierte Maßabnahme für medizinische Rund- und Flachstrickkompression",
            ],
        billingTitle: isRu
          ? "Финансирование и рецепты"
          : isEn
          ? "Statutory Reimbursement"
          : isTr
          ? "Reçete ve Masraf Karşılama"
          : isAr
          ? "طرق الوصفة الطبية وتسوية التكاليف"
          : "Verordnungs- und Abrechnungswege",
        billingText: isRu
          ? "Все изделия поставляются по врачебному рецепту (Muster 16) с прямым расчетом со всеми государственными (GKV) и частными (PKV) страховыми кассами Германии в соответствии с §§ 126, 127 SGB V."
          : isEn
          ? "Reimbursed under statutory physician prescription (Muster 16) with direct settlement across all German public (GKV) and private (PKV) health insurers pursuant to §§ 126, 127 SGB V."
          : isTr
          ? "Tedarik, hekim tarafından düzenlenen tıbbi malzeme reçetesine (Muster 16) dayanır. §§ 126, 127 SGB V uyarınca ön yeterlilik (Präqualifizierung) sahibi bir sağlık sağlayıcısı olarak tüm resmi ve özel sağlık kasalarıyla doğrudan mahsuplaşıyoruz."
          : isAr
          ? "يتم التوريد بموجب وصفة المستلزمات الطبية المعتمدة من الطبيب (Muster 16). بصفتنا مزود رعاية معتمد ومؤهل وفق §§ 126, 127 SGB V، نسوي النفقات مباشرة مع كافة صناديق التأمين الصحي القانونية والخاصة."
          : "Die Versorgung erfolgt auf Grundlage einer vertragsärztlichen Hilfsmittelverordnung (Muster 16). Als präqualifizierter Leistungserbringer nach §§ 126, 127 SGB V rechnen wir direkt mit allen gesetzlichen und privaten Krankenkassen ab.",
        qualityTitle: isRu
          ? "Стандарты качества"
          : isEn
          ? "Quality Standards"
          : isTr
          ? "Kalite Standartları"
          : isAr
          ? "معايير الجودة والاعتماد"
          : "Qualitätsstandards",
        qualityText: isRu
          ? "Запись в ремесленной палате (Handwerksrolle), сертификация EU-MDR и персональная примерка опытными мастерами-ортопедами."
          : isEn
          ? "Registered with the German Crafts Guild (Handwerksrolle), EU-MDR compliant, and fitted by master orthopedic technicians."
          : isTr
          ? "Ortopedi tekniği zanaat siciline (Handwerksrolle) kayıt, AB Tıbbi Cihaz Tüzüğü (EU-MDR) uyumu ve uzman ustalar tarafından kişisel danışmanlık."
          : isAr
          ? "قيد رسمي في سجل الحرف اليدوية للأجهزة التقويمية (Handwerksrolle)، الامتثال للائحة الأوروبية للأجهزة الطبية (EU-MDR)، ومتابعة فردية من فنيين وخبراء معتمدين."
          : "Eintragung in die Handwerksrolle für Orthopädietechnik, Einhaltung der EU-Medizinprodukteverordnung (MDR) und individuelle Fachberatung durch Meister.",
        ctaButtonText: isRu
          ? "Запросить ортопедическую помощь"
          : isEn
          ? "Request Orthopedic Consultation"
          : isTr
          ? "Ortopedik Yardımcı Talep Et"
          : isAr
          ? "طلب مستلزمات وأجهزة تقويمية"
          : "Hilfsmittel anfragen",
      },
    },
    {
      id: "mobilitaet-rehatechnik",
      badge: isRu
        ? "МОБИЛЬНОСТЬ • СВОБОДА ДВИЖЕНИЯ"
        : isEn
        ? "MOBILITY • INDEPENDENCE"
        : isTr
        ? "HAREKETLİLİK • BAĞIMSIZ YAŞAM"
        : isAr
        ? "الحركة • الاستقلالية الذاتية"
        : "MOBILITÄT • SELBSTSTÄNDIGKEIT",
      image: "/images/nursing/stage-senior.webp",
      iconType: "accessibility",
      title: isRu
        ? "Мобильность и реабилитационная техника"
        : isEn
        ? "Mobility & Rehabilitation Technology"
        : isTr
        ? "Mobilite ve Rehabilitasyon Teknolojisi"
        : isAr
        ? "تقنيات الحركة والتأهيل الطبي"
        : "Mobilitäts- & Rehabilitationstechnik",
      shortDesc: isRu
        ? "Активные и паллиативные инвалидные коляски, легкие роллаторы, костыли и электрические подъемники для безопасного передвижения."
        : isEn
        ? "Active and multi-position wheelchairs, lightweight rollators, crutches, and patient transfer lifters for safe mobility."
        : isTr
        ? "Aktif ve bakım tipi tekerlekli sandalyeler, ergonomik hafif tekerlekli yürüteçler (rollator), yürüme destekleri ve elektrikli hasta taşıma lifterleri."
        : isAr
        ? "كراسي متحركة نشطة ومخصصة للرعاية، مشايات خفيفة الوزن ومريحة (Rollator)، عكازات ورافعات كهربائية لنقل المرضى بأمان."
        : "Aktiv- und Pflegerollstühle, ergonomische Leichtgewicht-Rollatoren, Gehhilfen und elektrische Patientenlifter.",
      modal: {
        title: isRu
          ? "NabiOta Sanitätshaus: Мобильность и реабилитационная техника"
          : isEn
          ? "NabiOta Medical Supplies: Mobility & Rehabilitation"
          : isTr
          ? "NabiOta Sanitätshaus: Mobilite ve Rehabilitasyon Teknolojisi"
          : isAr
          ? "NabiOta Sanitätshaus: تقنيات الحركة والتأهيل"
          : "NabiOta Sanitätshaus: Mobilitäts- & Rehatechnik",
        subtitle: isRu
          ? "Сохранение активности, предотвращение падений и облегчение ухода"
          : isEn
          ? "Preserving Independence, Fall Prevention & Transfer Assistance"
          : isTr
          ? "Hareketliliğin korunması, düşmelerin önlenmesi ve günlük yaşamda destek"
          : isAr
          ? "الحفاظ على الحركة، الوقاية من السقوط وتيسير الحياة اليومية"
          : "Erhalt der Mobilität, Sturzprävention und Unterstützung im Alltag",
        description: isRu
          ? "Потеря подвижности не должна ограничивать жизнь. NabiOta Sanitätshaus GmbH подбирает, доставляет и настраивает средства передвижения под индивидуальные анатомические и физические особенности каждого пациента."
          : isEn
          ? "Mobility restrictions should never diminish quality of life. NabiOta Sanitätshaus GmbH configures, delivers, and ergonomically adapts mobility equipment to each patient's individual biomechanical requirements."
          : isTr
          ? "Kısıtlı hareketlilik, yaşam kalitesinden ödün vermek anlamına gelmez. NabiOta Sanitätshaus GmbH, danışanların fiziksel durumuna, ev koşullarına ve bireysel aktivite seviyesine tam olarak uyarlanmış en modern mobilite araçlarını sunar."
          : isAr
          ? "محدودية الحركة لا تعني فقدان جودة الحياة. توفر NabiOta Sanitätshaus GmbH أحدث وسائل الحركة المساعدة المصممة بدقة لتناسب البنية الجسدية للمريض وبيئته المنزلية ومستوى نشاطه اليومي."
          : "Eingeschränkte Mobilität bedeutet Verlust an Lebensqualität. Die NabiOta Sanitätshaus GmbH versorgt Patienten mit modernsten Mobilitätshilfen, die exakt auf die körperliche Verfassung, die häusliche Umgebung und den individuellen Aktivitätsgrad abgestimmt werden.",
        indicationsTitle: isRu
          ? "Медицинские показания"
          : isEn
          ? "Clinical Indications"
          : isTr
          ? "Tıbbi Endikasyonlar"
          : isAr
          ? "دواعي الاستعمال الطبية"
          : "Medizinische Indikationen",
        indications: isRu
          ? [
              "Восстановление после эндопротезирования тазобедренного и коленного суставов (TEP)",
              "Парезы и нарушения походки после инсульта или черепно-мозговой травмы",
              "Возрастная слабость, атаксия и повышенный риск падений дома и на улице",
              "Тяжелые формы мышечной дистрофии, рассеянного склероза и болезни Паркинсона",
            ]
          : isEn
          ? [
              "Rehabilitation following total hip or knee replacement (THR/TKR)",
              "Paresis and gait ataxia following stroke or traumatic neurotrauma",
              "Frailty, vestibular balance deficits, and heightened domestic fall risks",
              "Progressive neurological conditions (Multiple Sclerosis, Parkinson's disease)",
            ]
          : isTr
          ? [
              "Kalça veya diz total endoprotez (TEP) ameliyatları sonrası rehabilitasyon",
              "İnme (apopleksi) veya kafa travması sonrası parezi ve yürüme dengesizlikleri",
              "Geriatrik travmatoloji, yürüme ataksisi ve belirgin düşme riski",
              "İlerlemiş nörolojik hastalıklar (Parkinson, Multipl Skleroz)",
            ]
          : isAr
          ? [
              "التأهيل الطبي بعد عمليات استبدال مفصل الورك أو الركبة الكاملة (TEP)",
              "الشلل الجزئي واضطراب المشي بعد الجلطة الدماغية أو إصابات الدماغ الرضية",
              "ضعف الحركة لدى كبار السن، الرنح وازدياد مخاطر السقوط بشكل ملحوظ",
              "الأمراض العصبية المتقدمة (مرض باركنسون، التصلب اللويحي المتعدد)",
            ]
          : [
              "Rehabilitation nach Hüft- oder Knie-Totalendoprothesen (TEP)",
              "Paresen und Gangunsicherheiten nach Apoplex oder Schädel-Hirn-Trauma",
              "Alterstraumatologie, Gangataxie und signifikant erhöhtes Sturzrisiko",
              "Fortgeschrittene neurologische Erkrankungen (Morbus Parkinson, Multiple Sklerose)",
            ],
        scopeTitle: isRu
          ? "Спектр реабилитационной техники"
          : isEn
          ? "Equipment Continuum"
          : isTr
          ? "Yardımcı Cihaz Yelpazesi"
          : isAr
          ? "طيف الأجهزة المساعدة المتاحة"
          : "Hilfsmittelspektrum",
        scopeItems: isRu
          ? [
              "Комнатные и уличные облегченные коляски с индивидуальной регулировкой",
              "Многофункциональные кресла-коляски с функцией наклона спинки и подголовником",
              "Алюминиевые и карбоновые роллаторы с тормозами, сумкой и мягким сиденьем",
              "Подлокотные костыли, ходунки, поворотные подушки и электрические подъемники",
            ]
          : isEn
          ? [
              "Indoor and outdoor lightweight manual wheelchairs with ergonomic adjustments",
              "Multifunctional tilt-in-space comfort wheelchairs for high dependency",
              "Carbon-fiber and aluminum rollators with dual braking and resting seats",
              "Forearm crutches, reciprocal walking frames, and electric patient hoists",
            ]
          : isTr
          ? [
              "İç ve dış mekan için hafif ve adaptif tekerlekli sandalyeler",
              "Tilt ve yatış pozisyonu özellikli çok fonksiyonlu bakım tekerlekli sandalyeleri",
              "Oturma fileli, çantalı ve çift kilit frenli ergonomik hafif rollatorlar",
              "Önkol koltuk değnekleri, dört ayaklı destekler, döner diskler ve elektrikli hasta vinçleri",
            ]
          : isAr
          ? [
              "كراسي متحركة خفيفة وقابلة للتعديل للاستخدام المنزلي والخارجي",
              "كراسي رعاية متعددة الوظائف قابلة للإمالة وتعديل وضعية الاستلقاء",
              "مشايات خفيفة مريحة (Rollator) مزودة بمقعد شبكي، حقيبة وفرامل أمان مزدوجة",
              "عكازات ساندة للساعد، دعامات رباعية الأرجل، أقراص تدوير ورافعات مرضى كهربائية",
            ]
          : [
              "Leichtgewicht- und Adaptivrollstühle für Innen- und Außenbereich",
              "Multifunktionale Pflegerollstühle mit Kantelung und Liegefunktion",
              "Ergonomische Leichtgewicht-Rollatoren mit Sitznetz, Tasche und Doppelfeststellbremse",
              "Unterarmgehstützen, Vierfuß-Gehhilfen, Drehscheiben und elektrische Patientenlifter",
            ],
        billingTitle: isRu
          ? "Оплата кассами и доставка"
          : isEn
          ? "Insurance Settlement"
          : isTr
          ? "Masraf Karşılama ve Teslimat"
          : isAr
          ? "تغطية التكاليف والتوصيل المنزلي"
          : "Kostenübernahme & Lieferung",
        billingText: isRu
          ? "Финансируется медицинскими кассами (SGB V). Мы берем на себя оформление согласований (Kostenvoranschlag), бесплатную доставку на дом и практический инструктаж по безопасности."
          : isEn
          ? "Covered under German statutory health insurance (SGB V). We handle all pre-authorizations (Kostenvoranschlag), home delivery, and safe usage training."
          : isTr
          ? "Masraflar, yasal veya özel sağlık sigortasından maliyet onayı (Kostenvoranschlag) alındıktan sonra karşılanır. Başvuruların tamamını üstleniyor, eve ücretsiz teslimat yapıyor ve ergonomik kullanım eğitimi veriyoruz."
          : isAr
          ? "يتحمل التأمين الصحي القانوني أو الخاص التكاليف بعد الموافقة على عرض السعر (Kostenvoranschlag). نتولى جميع إجراءات التقديم والتسوية، والتوصيل المجاني إلى المنزل مع التدريب العملي على الاستخدام الآمن."
          : "Die Kosten werden nach Bewilligung des Kostenvoranschlags durch die gesetzliche oder private Krankenversicherung getragen. Wir übernehmen die gesamte Einreichung, die kostenfreie Anlieferung nach Hause und die ergonomische Einweisung.",
        qualityTitle: isRu
          ? "Сервис и безопасность"
          : isEn
          ? "Safety & Maintenance"
          : isTr
          ? "Güvenlik ve Bakım Onarım"
          : isAr
          ? "السلامة والصيانة الفنية"
          : "Sicherheit & Wartung",
        qualityText: isRu
          ? "Регулярный технический осмотр (STK), ремонт, замена быстроизнашивающихся деталей и санитарная обработка оборудования."
          : isEn
          ? "Safety inspections (STK), technical servicing, spare parts warranty, and certified hygienic preparation."
          : isTr
          ? "Düzenli güvenlik kontrolleri (STK), mobil onarım servisi ve sertifikalı hijyenik yeniden kullanıma hazırlama."
          : isAr
          ? "فحوصات سلامة دورية معتمدة (STK)، خدمة صيانة وإصلاح متنقلة، وتجهيز صحي وتعقيم معتمد للأجهزة."
          : "Regelmäßige sicherheitstechnische Kontrollen (STK), mobiler Reparaturservice und zertifizierte hygienische Wiederaufbereitung.",
        ctaButtonText: isRu
          ? "Подобрать коляску или роллатор"
          : isEn
          ? "Inquire Mobility Aid"
          : isTr
          ? "Mobilite Yardımcısı Talep Et"
          : isAr
          ? "طلب وسيلة مساعدة على الحركة"
          : "Mobilitätshilfe anfragen",
      },
    },
    {
      id: "haeusliche-betten",
      badge: isRu
        ? "SGB XI & SGB V • УХОД НА ДОМУ"
        : isEn
        ? "SGB XI & SGB V • HOME CARE BEDS"
        : isTr
        ? "SGB XI & SGB V • EVDE BAKIM YATAKLARI"
        : isAr
        ? "SGB XI & SGB V • أسرة الرعاية المنزلية"
        : "SGB XI & SGB V • PFLEGEBETTEN",
      image: "/images/nursing/stage-rehab.webp",
      iconType: "home",
      title: isRu
        ? "Функциональные кровати и оснащение для ухода"
        : isEn
        ? "Medical Care Beds & Home Ergonomics"
        : isTr
        ? "Evde Bakım ve Yatak Donanımı"
        : isAr
        ? "أسرة الرعاية وتجهيزات المنزل الطبية"
        : "Häusliche Pflege- & Bettenausstattung",
      shortDesc: isRu
        ? "Медицинские функциональные кровати с электроприводом, противопролежневые матрасы, подъемники и оснащение санузлов."
        : isEn
        ? "Electric profiling medical care beds, dynamic pressure-relieving mattresses, bathroom lifters, and safety rails."
        : isTr
        ? "Elektrikli ayarlanabilir bakım yatakları, bası yarası önleyici (antidekübit) yataklar, hasta kaldırma barları ve engelsiz hijyen yardımcıları."
        : isAr
        ? "أسرة رعاية كهربائية متعددة الأوضاع، مراتب وقاية وعلاج قرح الفراش، رافعات مساعدة للمريض وتجهيزات حمام خالية من العوائق."
        : "Elektrisch verstellbare Pflegebetten, Antidekubitus-Matratzen, Patientenaufrichter und barrierefreie Hygienehilfen.",
      modal: {
        title: isRu
          ? "NabiOta Sanitätshaus: Функциональные кровати и уход на дому"
          : isEn
          ? "NabiOta Medical Supplies: Specialized Care Beds"
          : isTr
          ? "NabiOta Sanitätshaus: Bakım Yatakları ve Yaşam Alanı Uyarlaması"
          : isAr
          ? "NabiOta Sanitätshaus: أسرة الرعاية وتكييف بيئة المعيشة"
          : "NabiOta Sanitätshaus: Pflegebetten & Wohnraumanpassung",
        subtitle: isRu
          ? "Эргономика, безопасность и защита от пролежней в домашних условиях"
          : isEn
          ? "Clinical Ergonomics, Safety, and Advanced Pressure Injury Prevention"
          : isTr
          ? "Ergonomik bakım koşulları ve azami yatış konforu"
          : isAr
          ? "ظروف عمل مريحة ومريحة وتوفير أقصى درجات الراحة للمريض"
          : "Ergonomische Arbeitsbedingungen und maximaler Liegekomfort",
        description: isRu
          ? "Качественный уход невозможен без правильного оборудования. NabiOta Sanitätshaus оперативно устанавливает электрические многофункциональные кровати, подбирает матрасы под степень риска пролежней и оснащает санузлы для максимальной безопасности."
          : isEn
          ? "Dignified home care requires ergonomic medical infrastructure. NabiOta Sanitätshaus swiftly installs electric care beds, determines pressure mattress requirements to prevent ulcers, and adapts bathroom facilities for patient safety."
          : isTr
          ? "İhtiyaca uygun bir hasta bakım yatağı hem hasta yakınlarının hem de ayakta bakım ekibinin yükünü hafifletir. Elektrikli ayarlanabilir bakım yataklarını, yenilikçi antidekübit sistemlerini ve engelsiz banyo yardımcılarını doğrudan yerinde kuruyoruz."
          : isAr
          ? "يوفر سرير الرعاية المناسب راحة كبرى للمريض والأسرة وفريق التمريض المنزلي على حد سواء. نقوم بتوريد وتركيب أسرة رعاية قابلة للتعديل كهربائياً، وأنظمة متطورة مضادة لقرح الفراش، ومستلزمات صحية خالية من العوائق مباشرة في منزلكم."
          : "Ein bedarfsgerechtes Pflegebett entlastet pflegende Angehörige und ambulante Pflegekräfte gleichermaßen. Wir liefern und montieren elektrisch verstellbare Pflegebetten, innovative Antidekubitus-Systeme sowie barrierefreie Sanitärhilfen direkt vor Ort.",
        indicationsTitle: isRu
          ? "Медицинские показания"
          : isEn
          ? "Clinical Indications"
          : isTr
          ? "Tıbbi Endikasyonlar"
          : isAr
          ? "دواعي الاستعمال الطبية"
          : "Medizinische Indikationen",
        indications: isRu
          ? [
              "Длительный или постоянный постельный режим при тяжелых заболеваниях",
              "Высокий риск образования пролежней или терапия пролежней I–IV степени",
              "Затрудненный самостоятельный подъем с кровати и необходимость в боковых ограждениях",
              "Присвоение степени ухода (Pflegegrad 1–5) для облегчения ежедневных манипуляций",
            ]
          : isEn
          ? [
              "Prolonged or permanent bedridden status due to chronic severe illnesses",
              "High risk of decubitus pressure injuries or existing stage I–IV ulcers",
              "Inability to reposition independently and need for safety side rails",
              "Accredited care level (Pflegegrad 1–5) requiring home nursing equipment",
            ]
          : isTr
          ? [
              "Ağır bakım ihtiyacında geçici veya kalıcı yatalaklık durumu",
              "Yüksek dekübitus riski veya I-IV. derece bası yaraları",
              "Kendi başına pozisyon değiştirmede zorlanma ve düşmeyi önleyici yan korkuluk gereksinimi",
              "Evde bakımı güvenceye almak için onaylı bir bakım derecesi (Pflegegrad 1–5)",
            ]
          : isAr
          ? [
              "ملازمة الفراش المؤقتة أو الدائمة بسبب الحاجة الشديدة للرعاية",
              "ارتفاع مخاطر الإصابة بقرح الفراش أو وجود قرح من الدرجات I إلى IV",
              "صعوبة تغيير الوضعية ذاتياً والحاجة لحواجز حماية جانبية تمنع السقوط",
              "وجود درجة رعاية معتمدة (Pflegegrad 1-5) لضمان توفير الرعاية المنزلية الملائمة",
            ]
          : [
              "Dauerhafte oder vorübergehende Bettlägerigkeit bei schwerer Pflegebedürftigkeit",
              "Hohes Dekubitusrisiko oder bestehende Druckulzera der Grade I bis IV",
              "Erschwerter selbstständiger Positionswechsel und Notwendigkeit stürzverhindernder Seitengitter",
              "Vorliegen eines Pflegegrads (PG 1–5) zur Sicherstellung der häuslichen Pflege",
            ],
        scopeTitle: isRu
          ? "Комплектация оборудования"
          : isEn
          ? "Equipment Continuum"
          : isTr
          ? "Donanım Yelpazesi"
          : isAr
          ? "طيف التجهيزات والمعدات"
          : "Ausstattungsspektrum",
        scopeItems: isRu
          ? [
              "4-секционные кровати с электроприводом регулировки высоты, спинки и изножья",
              "Штанги-подъемники (трапеции/гусаки) и складные защитные боковые решетки",
              "Динамические компрессорные матрасы переменного давления и ортопедическая пена",
              "Подъемники для ванны, кресла-туалеты, душевые табуреты и настенные поручни",
            ]
          : isEn
          ? [
              "4-section electric profiling beds with variable height, head, and knee break adjustments",
              "Patient lifting poles (monkey poles) and integrated split safety rails",
              "Alternating pressure air mattress systems and specialized foam anti-decubitus overlays",
              "Powered bath lifters, commode chairs, shower stools, and ergonomic grab bars",
            ]
          : isTr
          ? [
              "Düşük giriş yüksekliğine ve bölünmüş ahşap yan korkuluklara sahip 4 motorlu ayarlanabilir bakım yatakları",
              "Üçgen tutamaçlı hasta kaldırma aparatı (trapez), yatak lambaları ve serum askıları",
              "Dijital basınç ayarlı dinamik havalı yataklar (dalgalı basınç) ve yumuşak konumlandırma şilteleri",
              "Küvet lifterleri, duş ve tuvalet sandalyeleri, klozet yükselticileri ve modüler tutunma barları",
            ]
          : isAr
          ? [
              "أسرة رعاية قابلة للتعديل بأربعة محركات مع انخفاض سهل وحواجز جانبية خشبية مجزأة",
              "رافع مريض بمقبض مثلثي، إضاءة سرير وحوامل محاليل وريدية",
              "أنظمة مراتب هوائية تفريغية ديناميكية مع ضبط رقمي للضغط ومراتب رغوية للتخفيف",
              "رافعات مغطس الاستحمام، كراسي الاستحمام والمرحاض، رافعات المقاعد ومقابض تثبيت معيارية",
            ]
          : [
              "4-motorig verstellbare Pflegebetten mit Niedrigst-Einstieg und geteilten Holzseitengittern",
              "Patientenaufrichter mit Triangelgriff, Bettleuchten und Infusionshaltern",
              "Dynamische Wechseldrucksysteme mit digitaler Druckanpassung sowie Weichlagerungsmatratzen",
              "Badewannenlifter, Dusch- und Toilettenstühle, Sitzerhöhungen und modulare Haltegriffe",
            ],
        billingTitle: isRu
          ? "Оплата страховой кассой"
          : isEn
          ? "Insurance Coverage"
          : isTr
          ? "SGB XI / SGB V Kapsamında Masraf Karşılama"
          : isAr
          ? "تغطية النفقات وفق SGB XI / SGB V"
          : "Kostenübernahme nach SGB XI / SGB V",
        billingText: isRu
          ? "При наличии степени ухода (Pflegegrad) функциональная кровать предоставляется бесплатно кассой ухода (Pflegekasse) с символической доплатой до 10 € (от которой можно освободиться)."
          : isEn
          ? "Funded by statutory long-term care insurance (Pflegekasse) upon approved care grade with minimal statutory co-pay (capped at 10 € unless exempt)."
          : isTr
          ? "Bir bakım derecesi (Pflegegrad) bulunması durumunda, bakım sandığı (SGB XI) bakım yatağını teknik bakım yardımcısı olarak karşılar. Katkı payı muafiyeti yoksa yasal katkı payı en fazla 10 EUR'dur."
          : isAr
          ? "في حال وجود درجة رعاية (Pflegegrad)، يتكفل صندوق تأمين الرعاية (SGB XI) بتكاليف سرير الرعاية كمستلزم تقني مساعد. وتبلغ المساهمة الشخصية القانونية 10 يورو بحد أقصى ما لم يكن هناك إعفاء من المساهمة."
          : "Bei Vorliegen eines Pflegegrads übernimmt die Pflegekasse (SGB XI) die Kosten für ein Pflegebett als technisches Pflegehilfsmittel. Der gesetzliche Eigenanteil beträgt maximal 10 EUR, sofern keine Zuzahlungsbefreiung vorliegt.",
        qualityTitle: isRu
          ? "Монтаж и гарантия"
          : isEn
          ? "Installation & Warranty"
          : isTr
          ? "Montaj ve Ekspres Servis"
          : isAr
          ? "التركيب وخدمة الصيانة السريعة"
          : "Montage & Express-Service",
        qualityText: isRu
          ? "Экспресс-доставка, профессиональная сборка на месте квалифицированными техниками и вывоз старой мебели при необходимости."
          : isEn
          ? "Express delivery, full on-site mechanical assembly by certified technicians, and removal service."
          : isTr
          ? "Yerinde profesyonel montaj, DGUV Kural 3 uyarınca elektrik güvenliği testi ve acil servisimiz kapsamında hızlı arıza giderme."
          : isAr
          ? "تركيب احترافي في المنزل، فحص أمان كهربائي رسمي وفق لائحة DGUV 3، وإصلاح سريع لأي أعطال من خلال خدمة الطوارئ لدينا."
          : "Fachgerechte Montage vor Ort, elektrische Prüfung nach DGUV Vorschrift 3 und prompte Störungsbeseitigung im Rahmen unseres Notdienstes.",
        ctaButtonText: isRu
          ? "Заказать установку кровати"
          : isEn
          ? "Request Care Bed Setup"
          : isTr
          ? "Bakım Yatağı Talep Et"
          : isAr
          ? "طلب سرير رعاية منزلية"
          : "Pflegebett anfragen",
      },
    },
    {
      id: "wund-verbrauchsmaterial",
      badge: isRu
        ? "СТЕРИЛЬНО • 40 € В МЕСЯЦ БЕСПЛАТНО"
        : isEn
        ? "STERILE LOGISTICS • €40 MONTHLY ALLOWANCE"
        : isTr
        ? "STERİL LOJİSTİK • AYLIK 40 € BAKIM ÖDENEĞİ"
        : isAr
        ? "لوجستيات معقمة • مخصصات رعاية شهرية بقيمة 40 €"
        : "STERILE LOGISTIK • 40 € PFLEGEPAUSCHALE",
      image: "/images/services/wundversorgung.webp",
      iconType: "pill",
      title: isRu
        ? "Расходные материалы, раны и стомы"
        : isEn
        ? "Wound Consumables & Ostomy Supplies"
        : isTr
        ? "Yara Bakımı ve Tüketim Malzemeleri Tedariği"
        : isAr
        ? "مستلزمات علاج الجروح والمواد الاستهلاكية"
        : "Wund- & Verbrauchsmaterialversorgung",
      shortDesc: isRu
        ? "Современные раневые повязки, урологические и стомические катетеры, дезинфекция и ежемесячный набор для ухода на 40 €."
        : isEn
        ? "Advanced wound dressings, ostomy and urological supplies, disinfectants, and the free €40 monthly caregiver consumable box."
        : isTr
        ? "Aşamalara uygun modern yara örtüleri, stoma, kateter ve inkontinans ürünleri ile aylık 40 EUR değerindeki ücretsiz bakım kutusu."
        : isAr
        ? "ضمادات جروح حديثة تواكب مراحل الالتئام، مستلزمات الفغرة والقساطر والسلس البولي، وصندوق مستلزمات الرعاية الشهري المجاني بقيمة 40 يورو."
        : "Phasengerechte Wundauflagen, Stoma-, Katheter- und Inkontinenzartikel sowie die monatliche 40-EUR-Pflegehilfsmittelbox.",
      modal: {
        title: isRu
          ? "NabiOta Sanitätshaus: Раневые и расходные материалы"
          : isEn
          ? "NabiOta Medical Supplies: Wound & Medical Consumables"
          : isTr
          ? "NabiOta Sanitätshaus: Yara ve Tüketim Malzemeleri"
          : isAr
          ? "NabiOta Sanitätshaus: مستلزمات الجروح والمواد المستهلكة"
          : "NabiOta Sanitätshaus: Wund- & Verbrauchsmaterialien",
        subtitle: isRu
          ? "Бесперебойное снабжение стерильными материалами без очередей и рецептурных задержек"
          : isEn
          ? "Uninterrupted Supply of Sterile Consumables and Specialized Dressing Protocols"
          : isTr
          ? "Modern pansuman malzemelerinin reçeteye dayalı, kesintisiz temini"
          : isAr
          ? "توريد منتظم ومستمر لضمادات الجروح الحديثة بموجب الوصفات الطبية"
          : "Kontinuierliche, rezeptgestützte Belieferung mit modernen Verbandstoffen",
        description: isRu
          ? "Хронические раны и потребности в уходе требуют постоянного наличия качественных стерильных средств. Мы берем на себя регулярное согласование рецептов с врачами и доставляем необходимые раневые покрытия, перчатки и средства гигиены прямо на дом."
          : isEn
          ? "Chronic wounds and daily nursing demand dependable sterile supplies. We coordinate recurring prescriptions directly with treating physicians and deliver specialized dressings, protective gloves, and disinfectants straight to your door."
          : isTr
          ? "Aşamalara uygun yara bakımı ve hijyenik hasta bakımı özel ürünler gerektirir. NabiOta Sanitätshaus GmbH, reçete taleplerini, tedaviyi yürüten hekimlerle koordinasyonu ve aylık doğrudan adrese teslimatı eksiksiz üstlenir."
          : isAr
          ? "يتطلب علاج الجروح حسب مراحل الشفاء والرعاية الصحية التمريضية منتجات متخصصة ومعقمة. تتولى NabiOta Sanitätshaus GmbH طلب الوصفات الطبية بانتظام، والتنسيق مع الأطباء المعالجين، والتوصيل الشهري المباشر إلى باب المنزل."
          : "Eine phasengerechte Wundversorgung und hygienische Krankenpflege erfordern spezialisierte Produkte. Die NabiOta Sanitätshaus GmbH übernimmt die lückenlose Rezeptanforderung, Abstimmung mit behandelnden Ärzten und monatliche Direktbelieferung frei Haus.",
        indicationsTitle: isRu
          ? "Медицинские показания"
          : isEn
          ? "Clinical Indications"
          : isTr
          ? "Tıbbi Endikasyonlar"
          : isAr
          ? "دواعي الاستعمال الطبية"
          : "Medizinische Indikationen",
        indications: isRu
          ? [
              "Хронические раны: венозные язвы голени, диабетическая стопа, пролежни",
              "Пациенты со стомой (колостома, илеостома, уростома)",
              "Необходимость в постоянных или периодических мочевых катетерах",
              "Постоянная потребность в дезинфекции и защите при уходе (Pflegegrad 1–5)",
            ]
          : isEn
          ? [
              "Chronic hard-to-heal wounds: venous leg ulcers, diabetic foot syndrome, pressure sores",
              "Ostomy care management (colostomy, ileostomy, urostomy)",
              "Indwelling, suprapubic, or intermittent urological catheterization",
              "Daily infection control and hygienic care (care level Pflegegrad 1–5)",
            ]
          : isTr
          ? [
              "Kronik ve zor iyileşen yaralar (bacak ülseri, dekübit, diyabetik ayak sendromu)",
              "Enterostomal ve ürostomal bakım (kolostomi, ileostomi, ürostomi)",
              "Transüretral ve suprapubik kateter drenajı ile aralıklı kendi kendine kateterizasyon",
              "Günlük dezenfeksiyon ve koruyucu malzeme ihtiyacı olan evde bakım hastaları",
            ]
          : isAr
          ? [
              "الجروح المزمنة وصعبة الالتئام (قرح الساق، قرح الفراش، متلازمة القدم السكرية)",
              "رعاية الفغرات المعوية والبولية (فغر القولون، فغر اللفائفي، فغر البول)",
              "القساطر البولية عبر الإحليل وفوق العانة والقسطرة الذاتية المتقطعة",
              "المرضى في المنزل المحتاجون لمواد التعقيم والوقاية الصحية اليومية",
            ]
          : [
              "Chronische und schwer heilende Wunden (Ulcus cruris, Dekubitus, Diabetisches Fußsyndrom)",
              "Enterostomale und urostomale Versorgung (Kolo-, Ileo-, Urostomie)",
              "Transurethrale und suprapubische Katheterableitung sowie intermittierender Selbstkatheterismus",
              "Häusliche Pflegebedürftigkeit mit täglichem Desinfektions- und Schutzbedarf",
            ],
        scopeTitle: isRu
          ? "Номенклатура поставок"
          : isEn
          ? "Supply Continuum"
          : isTr
          ? "Tedarik Yelpazesi"
          : isAr
          ? "طيف المستلزمات الطبية المتوفرة"
          : "Versorgungssortiment",
        scopeItems: isRu
          ? [
              "Губчатые повязки с полиуретаном, альгинаты, гидроколлоиды и серебросодержащие покрытия",
              "Стерильные наборы для перевязок, растворы для промывания ран (полигексанид/октенидин)",
              "Одно- и двухкомпонентные стомические мешки, пасты, защитные кольца и ремни",
              "Ежемесячный набор (§ 40 SGB XI): нитриловые перчатки, маски, простыни, антисептики",
            ]
          : isEn
          ? [
              "Polyurethane foam dressings, calcium alginates, hydrogels, and antibacterial silver meshes",
              "Sterile dressing sets, wound irrigation solutions (polyhexanide/octenidine)",
              "1- and 2-piece ostomy appliances, skin barrier pastes, hydrocolloid wafer plates",
              "Caregiver consumable box (§ 40 SGB XI): disposable gloves, surface disinfectants, bed pads",
            ]
          : isTr
          ? [
              "Hidroaktif yara örtüleri (köpük pansumanlar, aljinatlar, hidrojeller, gümüşlü pansumanlar)",
              "Steril pansuman setleri, yara yıkama solüsyonları ve hipoalerjenik tespit bantları",
              "Modern tek ve çift parçalı stoma sistemleri, cilt koruyucu plakalar ve stoma bakım ürünleri",
              "Tek kullanımlık eldivenler, yatak koruyucu örtüler ve dezenfektanlar içeren aylık bakım kutusu (§ 40 SGB XI)",
            ]
          : isAr
          ? [
              "ضمادات جروح تفاعلية مائية (رغوية، ألجينات، جل مائي، وضمادات مدعمة بالفضة)",
              "مجموعات تبديل الضمادات المعقمة، محاليل غسيل الجروح وأشرطة التثبيت اللطيفة على الجلد",
              "أنظمة فغرة حديثة ذات قطعة واحدة وقطعتين، ألواح حماية الجلد ومنتجات عناية بالفغرة",
              "صندوق الرعاية الشهري (§ 40 SGB XI) الذي يضم قفازات، مفارش أسرة واقية، ومطهرات معقمة",
            ]
          : [
              "Hydroaktive Wundauflagen (Schaumstoffe, Alginate, Hydrogele, Silberwundauflagen)",
              "Sterile Verbandwechselsets, Wundspüllösungen und hypoallergene Fixiervliese",
              "Moderne ein- und zweiteilige Stomasysteme, Hautschutzplatten und Stomapflegeartikel",
              "Monatliche Pflegebox (§ 40 SGB XI) mit Einweghandschuhen, Bettschutzeinlagen und Desinfektionsmitteln",
            ],
        billingTitle: isRu
          ? "Оплата кассой и льготы"
          : isEn
          ? "Billing & Care Box Allowance"
          : isTr
          ? "Faturalandırma ve Aylık 40 EUR Bakım Sandığı Ödeneği"
          : isAr
          ? "التسوية والمخصصات الشهرية بقيمة 40 يورو من صندوق الرعاية"
          : "Abrechnung & 40-EUR-Pflegekassenpauschale",
        billingText: isRu
          ? "Раневые материалы оплачиваются больничными кассами по рецепту (SGB V). Набор гигиенических расходников до 40 € в месяц оплачивается кассой ухода (SGB XI) на 100% бесплатно."
          : isEn
          ? "Specialized dressings are covered via health insurance prescription (SGB V). The €40 monthly caregiver hygiene box is 100% reimbursed by the nursing care fund (SGB XI)."
          : isTr
          ? "Pansuman malzemeleri ve stoma ürünleri hekim reçetesiyle SGB V kapsamında sağlık sigortalarınca karşılanır. Bakım derecesine sahip bireyler ayrıca aylık 40 EUR değerindeki sarf malzemesi kutusuna yasal olarak hak kazanır (§ 40 Abs. 2 SGB XI); bunu doğrudan sandıkla mahsuplaşıyoruz."
          : isAr
          ? "تغطي صناديق التأمين الصحي مستلزمات الضمادات والفغرة كخدمات موصوفة طبياً بموجب SGB V. كما يحق للمستفيدين من درجات الرعاية الحصول قانونياً على مواد استهلاكية تصل قيمتها إلى 40 يورو شهرياً (§ 40 Abs. 2 SGB XI) نسويها مباشرة دون عناء."
          : "Verbandmittel und Stomaartikel werden als ärztlich verordnete Leistungen nach SGB V von den Krankenkassen getragen. Pflegebedürftige mit Pflegegrad haben zudem gesetzlichen Anspruch auf Pflegehilfsmittel zum Verbrauch im Wert von bis zu 40 EUR monatlich (§ 40 Abs. 2 SGB XI), die wir direkt abrechnen.",
        qualityTitle: isRu
          ? "Контроль качества"
          : isEn
          ? "Clinical Quality"
          : isTr
          ? "Kalite Güvencesi ve Fotoğraflı Takip"
          : isAr
          ? "توثيق الجودة والمتابعة الفوتوغرافية"
          : "Qualitäts- & Fotodokumentation",
        qualityText: isRu
          ? "Тесная координация с врачами и экспертами ICW® по ранам NabiOta HomeCare с цифровой фотофиксацией процесса заживления."
          : isEn
          ? "Tight alignment with NabiOta HomeCare ICW® wound nurses including digital photographic healing tracking."
          : isTr
          ? "NabiOta HomeCare'in sertifikalı ICW® yara uzmanlarıyla yakın koordinasyon ve dijital fotoğraflarla iyileşme sürecinin eksiksiz takibi."
          : isAr
          ? "تنسيق وثيق مع خبراء الجروح المعتمدين (ICW®) من NabiOta HomeCare مع توثيق مسار الشفاء بالصور الرقمية."
          : "Enge Abstimmung mit den zertifizierten ICW®-Wundexperten von NabiOta HomeCare und lückenlose Verlaufsdokumentation.",
        ctaButtonText: isRu
          ? "Заказать материалы / Pflegebox"
          : isEn
          ? "Order Consumables / Care Box"
          : isTr
          ? "Bakım Kutusu / Yara Malzemesi Talep Et"
          : isAr
          ? "طلب صندوق الرعاية / مستلزمات الجروح"
          : "Pflegebox / Wundartikel anfordern",
      },
    },
  ];

  const t = {
    servicesSection: {
      eyebrow: isRu ? "NABIOTA HOMECARE GMBH" : isEn ? "NABIOTA HOMECARE GMBH" : isTr ? "NABIOTA HOMECARE GMBH" : isAr ? "NABIOTA HOMECARE GMBH" : "NABIOTA HOMECARE GMBH",
      title: isRu
        ? "Комплексные амбулаторные и патронажные услуги"
        : isEn
        ? "Comprehensive Home Nursing & Care Services"
        : isTr
        ? "NabiOta HomeCare GmbH Hizmet Yelpazesi"
        : isAr
        ? "نطاق خدمات شركة NabiOta HomeCare GmbH"
        : "Leistungsspektrum der NabiOta HomeCare GmbH",
      desc: isRu
        ? "Мы предлагаем полный спектр лицензированных сестринских услуг по SGB V и SGB XI: от медицинских процедур и лечения ран до заботливого ухода и юридической поддержки близких."
        : isEn
        ? "We provide an exhaustive continuum of accredited home care services under SGB V and SGB XI: from complex clinical procedures and wound healing to personal hygiene and caregiver respite."
        : isTr
        ? "Evde bakım hizmetimizin altı ana sütununu keşfedin: Hekim reçeteli tıbbi tedavi bakımından (SGB V) ve sertifikalı yara yönetiminden (ICW®), vücut bakımına (SGB XI) ve hasta yakınlarının yükünü hafifletmeye kadar."
        : isAr
        ? "اكتشفوا الركائز الست لخدمات الرعاية المنزلية لدينا: من الرعاية الطبية العلاجية الموصوفة من الطبيب (SGB V) والإدارة المعتمدة للجروح (ICW®) إلى الرعاية الجسدية (SGB XI) والتخفيف الملموس عن الأسرة."
        : "Entdecken Sie die sechs tragenden Säulen unserer ambulanten Versorgung: Von ärztlich verordneter Behandlungspflege (SGB V) über zertifiziertes Wundmanagement (ICW®) bis hin zu körperbezogener Pflege (SGB XI) und spürbarer Entlastung der Angehörigen.",
      openModalBtn: isRu ? "Подробнее о процедурах" : isEn ? "View Details" : isTr ? "Detaylar ve Endikasyonlar" : isAr ? "التفاصيل ودواعي الاستعمال" : "Details & Indikationen",
    },
    sanitaetshausSection: {
      eyebrow: isRu ? "NABIOTA SANITÄTSHAUS GMBH" : isEn ? "NABIOTA SANITÄTSHAUS GMBH" : isTr ? "NABIOTA SANITÄTSHAUS GMBH" : isAr ? "NABIOTA SANITÄTSHAUS GMBH" : "NABIOTA SANITÄTSHAUS GMBH",
      title: isRu
        ? "Ортопедия, реабилитация и медицинские изделия"
        : isEn
        ? "Medical Supplies, Orthopedics & Rehabilitation Technology"
        : isTr
        ? "Medikal Malzeme & Tıbbi Cihaz Temini"
        : isAr
        ? "المتجر الطبي وتوفير المستلزمات الطبية والأجهزة المعينة"
        : "Sanitätshaus & Medizinische Hilfsmittelversorgung",
      desc: isRu
        ? "NabiOta Sanitätshaus GmbH обеспечивает пациентов современными ортопедическими изделиями, инвалидными колясками, функциональными кроватями и стерильными перевязочными материалами по §§ 126, 127 SGB V с прямым расчетом со всеми страховыми кассами Германии."
        : isEn
        ? "NabiOta Sanitätshaus GmbH provides high-grade orthopedic appliances, rehabilitation wheelchairs, specialized care beds, and sterile wound supplies pursuant to §§ 126, 127 SGB V, settling directly with all statutory and private health funds."
        : isTr
        ? "NabiOta Sanitätshaus GmbH, §§ 126, 127 SGB V uyarınca tıbbi cihazlar, bakım yardımcıları ve sarf malzemelerinin güvenilir ve hızlı teminini garanti eder. Usta ortopedi teknolojisini hasta dostu lojistik ve doğrudan sandık anlaşmalarıyla birleştiriyoruz."
        : isAr
        ? "تضمن NabiOta Sanitätshaus GmbH التوريد السريع والموثوق للمستلزمات الطبية، أجهزة الرعاية المساعدة والمواد الاستهلاكية وفق §§ 126, 127 SGB V. نجمع بين مهارة الأجهزة التعويضية الحرفية واللوجستيات السريعة والتسوية المباشرة."
        : "Die NabiOta Sanitätshaus GmbH garantiert eine verlässliche und schnelle Versorgung mit medizinischen Hilfsmitteln, Pflegehilfsmitteln und Verbrauchsartikeln gemäß §§ 126, 127 SGB V. Wir verbinden meisterhafte Orthopädietechnik mit patientenfreundlicher Logistik und direkter Kassenabrechnung.",
      openModalBtn: isRu ? "Характеристики и рецепт" : isEn ? "Specs & Prescription" : isTr ? "Detaylar ve Reçete" : isAr ? "التفاصيل وطريقة الوصفة الطبية" : "Details & Verordnung",
    },
    pharmacySection: {
      eyebrow: isRu ? "NABIOTA PHARMACY & КЛИНИКИ" : isEn ? "NABIOTA PHARMACY & CLINIC SUPPLY" : isTr ? "NABIOTA PHARMACY & KLİNİK İLAÇ TEDARİK" : isAr ? "NABIOTA PHARMACY وتوريد الأدوية للمستشفيات" : "NABIOTA PHARMACY & KLINIKVERSORGUNG",
      title: isRu
        ? "Концепция лекарственного обеспечения по закону об аптеках (§ 14 ApoG)"
        : isEn
        ? "Dedicated Hospital Medication Logistics pursuant to § 14 Apothekengesetz"
        : isTr
        ? "Kliniklerin İlaç Temini & NabiOta Pharmacy (§ 14 ApoG)"
        : isAr
        ? "توريد الأدوية للعيادات ومستشفيات المجموعة عبر NabiOta Pharmacy (§ 14 ApoG)"
        : "Arzneimittelversorgung der Kliniken & NabiOta Pharmacy (§ 14 ApoG)",
      desc: isRu
        ? "В соответствии с законодательством Германии снабжение стационаров медикаментами осуществляется через уполномоченную аптеку на основании официальных договоров снабжения с государственным разрешением (§ 14 ApoG). Общественная аптека NabiOta Pharmacy функционирует под независимым руководством провизора в полном соответствии с фармацевтическим правом."
        : isEn
        ? "Pursuant to German pharmaceutical legislation, inpatient medication supply is delivered via an accredited pharmacy holding statutory supply agreements approved by regional health authorities (§ 14 ApoG). NabiOta Pharmacy operates under independent licensed pharmacist directorship, ensuring strictly segregated pharmaceutical oversight."
        : isTr
        ? "Bağlı kliniklerin ve ameliyathanelerin ilaç temini, her kurumun işleyişine özel tedarik konseptiyle sağlanır. Resmi onaylı ve Eczacılık Kanunu § 14 (ApoG) uyarınca yapılan yazılı tedarik sözleşmelerine dayalı yetkili eczane üzerinden yürütülür. NabiOta Pharmacy, bağımsız uzman eczacı yönetimiyle faaliyet gösterir."
        : isAr
        ? "يتم تأمين الإمداد الدوائي للعيادات والمراكز الجراحية التابعة عبر مفهوم توريد مخصص لكل منشأة. ويجري ذلك عبر صيدلية مرخصة وفق عقود توريد خطية بموجب § 14 من قانون الصيدلة الألماني (ApoG) وبموافقة السلطات الصحية الرسمية. وتعمل NabiOta Pharmacy تحت إدارة صيدلانية مستقلة."
        : "Die Arzneimittelversorgung der verbundenen Kliniken und OP-Zentren wird durch ein gesondertes, auf den jeweiligen Klinikbetrieb abgestimmtes Versorgungskonzept sichergestellt. Sie erfolgt über eine berechtigte Apotheke auf Grundlage schriftlicher Versorgungsverträge nach § 14 Apothekengesetz (ApoG) mit behördlicher Genehmigung. Die NabiOta Pharmacy agiert mit eigenverantwortlicher fachlicher Leitung.",
      points: [
        {
          title: isRu ? "Независимое руководство" : isEn ? "Independent Pharmacy Leadership" : isTr ? "Bağımsız Eczane Yönetimi" : isAr ? "إدارة صيدلانية مستقلة" : "Eigenverantwortliche Apothekenleitung",
          desc: isRu
            ? "Аптека не подчинена коммерческой GmbH-структуре: руководство осуществляется аккредитованным провизором согласно Apothekengesetz."
            : isEn
            ? "Legally independent operations under a licensed supervising pharmacist, safeguarding strict clinical autonomy."
            : isTr
            ? "Eczacılık Kanunu uyarınca ruhsat sahibi bağımsız uzman eczacı tarafından, yasanın öngördüğü tarafsızlıkla işletilir."
            : isAr
            ? "تشغيل حصري من قبل صيدلي مرخص بموجب قانون الصيدلة الألماني مع استقلالية مهنية كاملة يفرضها القانون."
            : "Betrieb ausschließlich durch einen nach dem Apothekengesetz berechtigten Erlaubnisinhaber in gesetzlich vorgeschriebener Unabhängigkeit.",
        },
        {
          title: isRu ? "Снабжение клиник (§ 14 ApoG)" : isEn ? "Statutory Hospital Supply (§ 14 ApoG)" : isTr ? "Onaylı Klinik Tedariği (§ 14 ApoG)" : isAr ? "توريد معتمد للمستشفيات (§ 14 ApoG)" : "Genehmigte Klinikbelieferung (§ 14 ApoG)",
          desc: isRu
            ? "Прямые утвержденные регулятором договоры снабжения стационаров, операционных блоков и MVZ необходимыми медикаментами."
            : isEn
            ? "Officially approved supply covenants covering inpatient hospital wards, surgical suites, and ambulatory surgery centers."
            : isTr
            ? "Yatan hasta servisleri ve ameliyathanelerin kesintisiz ilaç tedariki için resmi onaylı yazılı sözleşmeler."
            : isAr
            ? "عقود توريد خطية معتمدة رسمياً لضمان الإمداد الدوائي المستمر للأقسام السريرية وغرف العمليات."
            : "Schriftliche Versorgungsverträge mit behördlicher Genehmigung zur lückenlosen Versorgung stationärer Fachabteilungen und OP-Säle.",
        },
        {
          title: isRu ? "Безопасность терапии (AMTS)" : isEn ? "Medication Safety (AMTS)" : isTr ? "Bireysel İlaç Güvenliği (AMTS)" : isAr ? "أمان العلاج الدوائي للمريض (AMTS)" : "Patientenindividuelle AMTS",
          desc: isRu
            ? "Индивидуальный контроль взаимодействий лекарств, персональная фасовка (блистеризация) и круглосуточный резервный склад."
            : isEn
            ? "Pharmacological interaction screening, unit-dose pouch packaging, and 24/7 emergency clinical drug depots."
            : isTr
            ? "İlaç etkileşim kontrolleri, kişiye özel dozaj paketleme (blisterleme), acil durum ilaç deposu ve hekimlerle doğrudan koordinasyon."
            : isAr
            ? "أمان العلاج الدوائي ومراجعة التفاعلات، تغليف الجرعات الفردية، مستودع أدوية للطوارئ وتنسيق مباشر مع الأطباء."
            : "Arzneimitteltherapiesicherheit, unit-dose Verblisterung, Notfalldepot-Vorhaltung und direkte Abstimmung mit den behandelnden Ärzten.",
        },
      ],
      complianceBadges: [
        isRu ? "§ 14 Apothekengesetz (ApoG)" : isEn ? "§ 14 Apothekengesetz (ApoG)" : isTr ? "§ 14 Eczacılık Kanunu (ApoG)" : isAr ? "§ 14 قانون الصيدلة الألماني (ApoG)" : "§ 14 Apothekengesetz (ApoG)",
        isRu ? "§§ 126, 127 SGB V Преквалификация" : isEn ? "§§ 126, 127 SGB V Pre-qualification" : isTr ? "§§ 126, 127 SGB V Ön Yeterlilik" : isAr ? "§§ 126, 127 SGB V الاعتماد المسبق" : "§§ 126, 127 SGB V Präqualifizierung",
        isRu ? "Ремесленная палата (Handwerksrolle)" : isEn ? "Crafts Guild Registration" : isTr ? "Ortopedi Zanaat Sicili" : isAr ? "سجل الحرف للأجهزة التقويمية" : "Handwerksrolle Orthopädietechnik",
        isRu ? "Регламент EU-MDR & MPDG" : isEn ? "EU-MDR & MPDG Compliant" : isTr ? "EU-MDR & MPDG Uyumu" : isAr ? "مطابقة لوائح EU-MDR و MPDG" : "EU-MDR & MPDG Konformität",
        isRu ? "Защищенный обмен данными DSGVO" : isEn ? "GDPR Medical Data Segregation" : isTr ? "DSGVO Uyumlu Arayüzler" : isAr ? "واجهات رقمية متوافقة مع DSGVO" : "DSGVO-konforme Schnittstellen",
      ],
    },
    verbund: {
      eyebrow: isRu ? "ИНТЕГРИРОВАННАЯ ЭКОСИСТЕМА" : isEn ? "INTEGRATED HEALTHCARE NETWORK" : isTr ? "ENTEGRE SAĞLIK AĞI" : isAr ? "شبكة الرعاية الصحية المتكاملة" : "INTEGRIERTER VERSORGUNGSVERBUND",
      title: isRu
        ? "Бесшовная забота: Холдинг NabiOta®"
        : isEn
        ? "Seamless Continuity: The NabiOta® Healthcare Network"
        : isTr
        ? "NabiOta® Grubu Bünyesinde Kesintisiz Bakım"
        : isAr
        ? "رعاية مستمرة وسلسة ضمن شبكة مجموعة NabiOta®"
        : "Nahtlose Betreuung im Verbund der NabiOta® Gruppe",
      desc: isRu
        ? "NabiOta HomeCare GmbH тесно связана со всеми звеньями нашего медицинского холдинга — обеспечивая непрерывную цепочку от поликлиники и стационара до домашней постели."
        : isEn
        ? "NabiOta HomeCare GmbH collaborates seamlessly with all specialized entities across the NabiOta Group — delivering uninterrupted continuity from clinic to bedside."
        : isTr
        ? "NabiOta şirketler grubunun bir parçası olan NabiOta HomeCare GmbH, ağın diğer tüm tıbbi birimleriyle yakın iş birliği içinde çalışır. Bu sayede hastalar ve yakınları için bakım boşlukları oluşmaz, medikal cihazlara hızlıca ulaşılır ve doktor ile bakım ekibi arasında güvenilir iletişim sağlanır."
        : isAr
        ? "بصفتها جزءاً من مجموعة شركات NabiOta، تتعاون NabiOta HomeCare GmbH بشكل وثيق مع سائر المنشآت الطبية في الشبكة. وهذا يضمن للمرضى وعائلاتهم عدم انقطاع الرعاية، والتوفير الفوري للمستلزمات، وتواصلاً مباشراً بين الأطباء وفرق التمريض."
        : "Als Teil der NabiOta-Unternehmensgruppe kooperiert die NabiOta HomeCare GmbH eng mit den weiteren medizinischen Einrichtungen des Verbunds. Für Patienten und Angehörige bedeutet dies: keine Versorgungslücken, rasche Hilfsmittelversorgung und verlässliche Kommunikation zwischen Arzt und Pflege.",
      pillars: [
        {
          title: isRu ? "NabiOta MVZ & Kliniken" : isEn ? "NabiOta MVZ & Clinics" : isTr ? "NabiOta MVZ & Kliniken" : isAr ? "NabiOta MVZ & العيادات" : "NabiOta MVZ & Clinics",
          desc: isRu
            ? "Прямой контакт с оперирующими и лечащими врачами, быстрое оформление рецептов и корректировка назначений."
            : isEn
            ? "Direct coordination with attending physicians and surgeons, swift prescription processing, and clinical oversight."
            : isTr
            ? "Tedaviyi yürüten uzman hekimlerle doğrudan koordinasyon, hızlı reçete yolları ve planlı taburculuk organizasyonu."
            : isAr
            ? "تنسيق مباشر مع الأطباء المتخصصين، مسارات وصفات طبية سريعة، وتنظيم محكم لخطة الخروج من المستشفى."
            : "Direkte Abstimmung mit behandelnden Fachärzten, schnelle Verordnungswege und abgestimmte Entlassplanung.",
          icon: Building2,
        },
        {
          title: isRu ? "NabiOta Sanitätshaus GmbH" : isEn ? "NabiOta Medical Supplies" : isTr ? "NabiOta Sanitätshaus GmbH" : isAr ? "NabiOta Sanitätshaus GmbH" : "NabiOta Sanitätshaus GmbH",
          desc: isRu
            ? "Экспресс-доставка кроватей с электроприводом, противопролежневых матрасов, ходунков, катетеров и повязок."
            : isEn
            ? "Rapid home delivery of electric care beds, anti-decubitus mattresses, walkers, wheelchairs, and dressings."
            : isTr
            ? "Bakım yatakları, antidekübit sistemleri, rollatorlar ve medikal cihazların kısa sürede güvenilir teslimatı."
            : isAr
            ? "توفير سريع وموثوق لأسرة الرعاية، أنظمة الوقاية من قرح الفراش، المشايات، والأجهزة المساعدة."
            : "Verlässliche, kurzfristige Bereitstellung von Pflegebetten, Antidekubitus-Systemen, Rollatoren und Hilfsmitteln.",
          icon: Accessibility,
        },
        {
          title: isRu ? "NabiOta Apotheke" : isEn ? "NabiOta Pharmacy" : isTr ? "NabiOta Eczanesi" : isAr ? "NabiOta Apotheke" : "NabiOta Apotheke",
          desc: isRu
            ? "Бесперебойное снабжение жизненно важными лекарствами, инсулином, энтеральным питанием и стерильными материалами."
            : isEn
            ? "Uninterrupted logistics for prescription medications, insulin, enteral nutrition, and sterile medical disposables."
            : isTr
            ? "Reçeteli ilaçların, modern yara örtülerinin ve enteral beslenme ürünlerinin güvenilir ve düzenli temini."
            : isAr
            ? "توريد موثوق للأدوية الموصوفة، لوجستيات ضمادات الجروح الحديثة، ومغذيات التغذية الأنبوبية."
            : "Zuverlässige Belieferung mit verordneten Arzneimitteln, moderner Wundauflagen-Logistik und Sondennahrung.",
          icon: Pill,
        },
        {
          title: isRu ? "NabiOta Rehabilitation" : isEn ? "NabiOta Rehabilitation" : isTr ? "NabiOta Rehabilitasyon" : isAr ? "NabiOta Rehabilitation" : "NabiOta Rehabilitation & Therapy",
          desc: isRu
            ? "Продолжение восстановления дома: согласованные программы ЛФК, эрготерапии и возвращения к активной жизни."
            : isEn
            ? "Restorative continuation at home: coordinated physiotherapy, occupational therapy, and regaining mobility."
            : isTr
            ? "Evde bakım ile ayaktan terapinin uyumu: Fizyoterapi, ergoterapi ve mobilizasyonun bir arada yürütülmesi."
            : isAr
            ? "تكامل التمريض مع العلاج الطبيعي والتأهيلي في المنزل: علاج طبيعي، علاج وظيفي واستعادة الحركة بتناغم."
            : "Verzahnung von Pflege und ambulanter Therapie: Physiotherapie, Ergotherapie und Mobilisation im Einklang.",
          icon: HeartHandshake,
        },
      ],
    },
    whyChoose: {
      eyebrow: isRu ? "ПОЧЕМУ NABIOTA HOMECARE" : isEn ? "WHY CHOOSE US" : isTr ? "NEDEN NABIOTA HOMECARE" : isAr ? "لماذا تختار NABIOTA HOMECARE" : "WARUM NABIOTA HOMECARE",
      title: isRu
        ? "Индивидуальная забота. Профессиональная поддержка."
        : isEn
        ? "Personalized Care. Professional Support."
        : isTr
        ? "Kişisel İlgi. Profesyonel Uzmanlık."
        : isAr
        ? "عناية شخصية فائقة. خبرة مهنية موثوقة."
        : "Persönliche Fürsorge. Professionelle Expertise.",
      desc: isRu
        ? "Мы убеждены, что каждый человек заслуживает уважительного, чуткого ухода, разработанного с учетом его личных потребностей. Наша опытная команда дипломированных медсестер стремится повысить качество вашей жизни и помочь вам чувствовать себя комфортно, безопасно и независимо."
        : isEn
        ? "We believe that every person deserves care that is respectful, compassionate and tailored to their individual needs. Our experienced nursing team is dedicated to improving your quality of life and helping you live with greater comfort, safety, and independence."
        : isTr
        ? "Her bireyin saygılı, empatik ve ihtiyaçlarına özel uyarlanmış bir bakımı hak ettiğine inanıyoruz. Deneyimli bakım ekibimiz, yaşam kalitenizi hissedilir şekilde artırmak ve size daha fazla konfor ile bağımsızlık kazandırmak için çalışır."
        : isAr
        ? "نؤمن بأن كل إنسان يستحق رعاية تتسم بالاحترام والتعاطف وتلبي احتياجاته الفردية تماماً. يكرس فريق التمريض الخبير جهوده لتحسين جودة حياتكم وتمكينكم من العيش بمزيد من الراحة والأمان والاستقلالية."
        : "Wir sind überzeugt, dass jeder Mensch eine respektvolle, einfühlsame und maßgeschneiderte Pflege verdient. Unser erfahrenes Pflegeteam setzt sich dafür ein, Ihre Lebensqualität spürbar zu verbessern und Ihnen mehr Komfort sowie Unabhängigkeit zu ermöglichen.",
      checks: [
        isRu
          ? "100% дипломированные медицинские сестры и эксперты ICW®"
          : isEn
          ? "100% licensed nurses and certified ICW® wound experts"
          : isTr
          ? "%100 devlet diplomalı uzman hemşireler ve ICW® sertifikalı yara uzmanları"
          : isAr
          ? "طواقم تمريض حاصلة 100% على شهادات حكومية معتمدة وخبراء جروح مرخصون من ICW®"
          : "100% staatlich examinierte Pflegefachkräfte & ICW®-Wundexperten",
        isRu
          ? "Индивидуальные планы ухода и закрепленная медсестра"
          : isEn
          ? "Individualized care plans and dedicated primary nursing model"
          : isTr
          ? "Sabit primer bakım personeli ile kişiye özel hazırlanmış bakım planları"
          : isAr
          ? "خطط رعاية مصممة فردياً مع تكليف ممرضين معتمدين ثابتين لمتابعة كل حالة"
          : "Individuell abgestimmte Pflegepläne mit festen Bezugspflegekräften",
        isRu
          ? "Прямой расчет со всеми страховыми кассами Германии (SGB V & XI)"
          : isEn
          ? "Direct billing with all German statutory and private health insurances"
          : isTr
          ? "Tüm yasal ve özel sağlık/bakım sandıkları ile doğrudan mahsuplaşma (SGB V & XI)"
          : isAr
          ? "تسوية مباشرة ومريحة مع كافة صناديق التأمين الصحي والرعاية القانونية والخاصة (SGB V & XI)"
          : "Direkte Abrechnung mit allen gesetzlichen und privaten Kassen (SGB V & XI)",
        isRu
          ? "Круглосуточная дежурная связь 24/7 для экстренных ситуаций"
          : isEn
          ? "24/7 emergency telephone response for acute medical concerns"
          : isTr
          ? "Akut sağlık değişimlerinde ve acil durumlarda 7/24 kesintisiz nöbetçi telefon hattı"
          : isAr
          ? "خدمة اتصال وطوارئ هاتفية متاحة على مدار الساعة 24/7 للتعامل مع أي طارئ صحي"
          : "Verlässliche 24/7 Rufbereitschaft bei akuten gesundheitlichen Veränderungen",
      ],
    },
    commitment: {
      eyebrow: isRu ? "НАШЕ ОБЯЗАТЕЛЬСТВО" : isEn ? "OUR COMMITMENT" : isTr ? "SÖZÜMÜZ VE TAAHHÜDÜMÜZ" : isAr ? "عهدنا والتزامنا" : "UNSER VERSPRECHEN",
      title: isRu
        ? "Больше чем уход — искренняя человечность"
        : isEn
        ? "More Than Just Care — Human Dignity & Warmth"
        : isTr
        ? "Bakımdan Daha Fazlası – Saygı, Onur ve İnsan Odaklılık"
        : isAr
        ? "أكثر من مجرد رعاية – احترام وكرامة وإنسانية خالصة"
        : "Mehr als nur Pflege – Respekt, Würde und Menschlichkeit",
      desc: isRu
        ? "Мы строим долгосрочные доверительные отношения с клиентами и их семьями, обеспечивая не только квалифицированную медицинскую помощь, но и искреннее эмоциональное спокойствие. Ваше благополучие — наш главный приоритет."
        : isEn
        ? "We build lasting relationships with our clients and their families, providing not just medical excellence, but emotional support and peace of mind. Your well-being is our top priority."
        : isTr
        ? "Danışanlarımız ve aileleriyle kalıcı, güvene dayalı ilişkiler kuruyoruz. Yalnızca tıbbi standartlarda mükemmel bakım sunmakla kalmıyor, aynı zamanda duygusal destek ve huzur sağlıyoruz. Sağlığınız ve huzurunuz ilk önceliğimizdir."
        : isAr
        ? "نبني علاقات دائمة قائمة على الثقة مع مرضانا وعائلاتهم. لا نقدم رعاية طبية متقدمة فحسب، بل نمنح الأسرة الأمان العاطفي وراحة البال. صحة وسلامة مريضكم هي غايتنا الأولى."
        : "Wir bauen dauerhafte, vertrauensvolle Beziehungen zu unseren Klienten und ihren Familien auf. Dabei bieten wir nicht nur fachärztlich verordnete Spitzenpflege, sondern auch emotionalen Halt und Sicherheit. Ihr Wohlbefinden steht an erster Stelle.",
      badges: [
        {
          title: isRu ? "Чуткая команда" : isEn ? "Compassionate Team" : isTr ? "Empatik Ekip" : isAr ? "فريق متعاطف" : "Einfühlsames Team",
          icon: Heart,
        },
        {
          title: isRu ? "Безопасность и доверие" : isEn ? "Safety & Trust" : isTr ? "Güven ve Emniyet" : isAr ? "أمان وثقة" : "Sicherheit & Vertrauen",
          icon: ShieldCheck,
        },
        {
          title: isRu ? "Семейный подход" : isEn ? "Family Centered" : isTr ? "Aile Odaklı" : isAr ? "محورها الأسرة" : "Familienzentriert",
          icon: Users,
        },
        {
          title: isRu ? "Высокое качество" : isEn ? "Excellence in Care" : isTr ? "Mükemmel Kalite" : isAr ? "جودة استثنائية" : "Exzellente Qualität",
          icon: Star,
        },
      ],
    },
    approach: {
      eyebrow: isRu ? "НАШ ПОДХОД" : isEn ? "OUR APPROACH" : isTr ? "BAKIM YAKLAŞIMIMIZ" : isAr ? "نهجنا في الرعاية" : "UNSER PFLEGEANSATZ",
      title: isRu
        ? "Комплексный уход на каждом этапе жизни"
        : isEn
        ? "Holistic Care for Every Stage of Life"
        : isTr
        ? "Yaşamın Her Dönemi İçin Bütüncül Bakım"
        : isAr
        ? "رعاية شاملة لكل مرحلة من مراحل الحياة"
        : "Ganzheitliche Pflege für jede Lebensphase",
      desc: isRu
        ? "От выздоровления после операции до долгосрочной поддержки в пожилом возрасте — наш сестринский уход гибко подстраивается под ваши потребности, неизменно с теплом и профессионализмом."
        : isEn
        ? "From recovery and rehabilitation to long-term elderly support, our nursing care adapts to your needs — always with compassion and professionalism."
        : isTr
        ? "Ameliyat sonrası iyileşmeden uzun vadeli yaşlı bakımına kadar; bakım hizmetimiz ihtiyaçlarınıza esnek şekilde uyum sağlar – her zaman şefkat ve yüksek uzmanlıkla."
        : isAr
        ? "من التعافي بعد الجراحة وحتى الرعاية طويلة الأمد لكبار السن، تتكيف خدماتنا التمريضية بمرونة مع متطلباتكم – دائماً بإنسانية وكفاءة مهنية راقية."
        : "Von der Genesung nach Operationen bis zur verlässlichen Langzeitbetreuung passt sich unsere Pflege flexibel Ihren Bedürfnissen an – stets mit Mitgefühl und höchster Fachkompetenz.",
      btn: isRu ? "Узнать больше об услугах" : isEn ? "Explore Our Services" : isTr ? "Hizmetlerimizi Keşfedin" : isAr ? "استكشف خدماتنا" : "Leistungen entdecken",
      stages: [
        {
          title: isRu ? "Пожилой возраст" : isEn ? "Senior Care" : isTr ? "Yaşlı Bakımı" : isAr ? "رعاية كبار السن" : "Seniorenpflege",
          desc: isRu
            ? "Поддержание независимости и благополучия."
            : isEn
            ? "Promoting independence and well-being."
            : isTr
            ? "Bağımsızlık ve esenliğin desteklenmesi."
            : isAr
            ? "تعزيز الاستقلالية الذاتية والراحة."
            : "Förderung von Selbstständigkeit & Wohlbefinden.",
          image: "/images/nursing/stage-senior.webp",
        },
        {
          title: isRu ? "После операций" : isEn ? "Post-Surgical Care" : isTr ? "Ameliyat Sonrası Bakım" : isAr ? "الرعاية بعد الجراحة" : "Postoperative Pflege",
          desc: isRu
            ? "Безопасное и надежное восстановление дома."
            : isEn
            ? "Safe and effective recovery at home."
            : isTr
            ? "Ev ortamında güvenli ve etkili iyileşme."
            : isAr
            ? "تعافٍ آمن وفعال في راحة المنزل."
            : "Sichere und wirksame Erholung zu Hause.",
          image: "/images/nursing/stage-postsurgical.webp",
        },
        {
          title: isRu ? "Реабилитация" : isEn ? "Rehabilitation Care" : isTr ? "Rehabilitasyon Bakımı" : isAr ? "رعاية التأهيل الطبي" : "Rehabilitationspflege",
          desc: isRu
            ? "Помощь в восстановлении и подвижности."
            : isEn
            ? "Support for recovery and mobility."
            : isTr
            ? "İyileşme süreci ve hareket kabiliyetine destek."
            : isAr
            ? "دعم الشفاء واستعادة القدرة على الحركة."
            : "Unterstützung für Genesung und Mobilität.",
          image: "/images/nursing/stage-rehab.webp",
        },
        {
          title: isRu ? "Хронические раны" : isEn ? "Wound Recovery" : isTr ? "Yara Tedavisi" : isAr ? "علاج الجروح" : "Wundversorgung",
          desc: isRu
            ? "Бережное заживление и перевязки."
            : isEn
            ? "Accelerated tissue repair and healing."
            : isTr
            ? "Modern, aşamalara uygun yara iyileşmesi."
            : isAr
            ? "التئام حديث للجروح يواكب مراحل الشفاء."
            : "Moderne phasengerechte Wundheilung.",
          image: "/images/services/wundversorgung.webp",
        },
      ],
    },
    testimonials: {
      eyebrow: isRu ? "ОТЗЫВЫ ПАЦИЕНТОВ" : isEn ? "PATIENT TESTIMONIALS" : isTr ? "HASTA DENEYİMLERİ" : isAr ? "آراء المرضى وعائلاتهم" : "ERFAHRUNGSBERICHTE",
      title: isRu
        ? "Реальные истории. Реальная помощь."
        : isEn
        ? "Real Stories. Real Impact."
        : isTr
        ? "Gerçek Hikayeler. Gerçek Destek."
        : isAr
        ? "قصص واقعية. عون حقيقي وملموس."
        : "Echte Geschichten. Echte Hilfe.",
      desc: isRu
        ? "Узнайте от пациентов и их близких, как забота нашей команды изменила их жизнь к лучшему."
        : isEn
        ? "Hear from families who have experienced the difference our nursing care makes."
        : isTr
        ? "Bakımımızın günlük yaşamda yarattığı somut farkı hasta ve ailelerinin deneyimlerinden öğrenin."
        : isAr
        ? "تعرف على الأثر الإيجابي الحقيقي الذي تحدثه رعايتنا التمريضية في الحياة اليومية للعائلات."
        : "Erfahren Sie von Familien, welchen spürbaren Unterschied unsere Pflege im Alltag macht.",
      btnMore: isRu ? "Все отзывы +" : isEn ? "Read More Reviews +" : isTr ? "Diğer Değerlendirmeler +" : isAr ? "المزيد من التقييمات +" : "Weitere Bewertungen +",
      cards: [
        {
          quote: isRu
            ? "«Медсёстры NabiOta HomeCare невероятно чуткие, пунктуальные и профессиональные. Они взяли на себя обработку сложной раны после операции на стопе, и за месяц всё идеально зажило!»"
            : isEn
            ? "“The nurses from NabiOta HomeCare are kind, punctual, and remarkably skilled. They treated a complicated postoperative wound, and it healed completely within four weeks!”"
            : isTr
            ? "“NabiOta HomeCare ekibi son derece sevecen, dakik ve yüksek yetkinliğe sahip. Sertifikalı yara yönetimi sayesinde haftalardır duraksayan ameliyat yaram nihayet tamamen kapandı!”"
            : isAr
            ? "«طواقم NabiOta HomeCare في قمة اللطف والدقة والمهنية العالية. بفضل الإدارة المعتمدة للجروح، التئم جرحي الجراحي تماماً بعد أسابيع من المعاناة!»"
            : "„Die Pflegekräfte von NabiOta HomeCare sind herzlich, pünktlich und hochkompetent. Dank des zertifizierten Wundmanagements ist meine postoperative Wunde nach wochenlangem Stillstand endlich vollkommen verheilt!“",
          name: "Sarah L.",
          role: isRu ? "Пациентка, Мёнхенгладбах" : isEn ? "Patient, Mönchengladbach" : isTr ? "Hasta, Mönchengladbach" : isAr ? "مريضة، مونشنغلادباخ" : "Patientin, Mönchengladbach",
          avatar: "/images/nursing/avatar-sarah.webp",
        },
        {
          quote: isRu
            ? "«Благодаря закрепленной медсестре моя мама чувствует себя в полной безопасности. Они помогли оформить повышение степени ухода и взяли на себя выдачу лекарств.»"
            : isEn
            ? "“Thanks to the primary nurse system, my mother feels completely secure at home. They guided us through the Pflegegrad upgrade and handle all medications flawlessly.”"
            : isTr
            ? "“Sabit primer hemşire sayesinde annem evinde kendini tamamen güvende hissediyor. Ekip ayrıca bakım derecesinin yükseltilmesi başvurusunda da bize mükemmel destek oldu.”"
            : isAr
            ? "«بفضل نظام الممرض المخصص الثابت، تشعر والدتي بالأمان التام في بيتها. كما ساعدنا الفريق باحترافية في إجراءات رفع درجة الرعاية لدى الصندوق.»"
            : "„Dank der festen Bezugspflegekraft fühlt sich meine Mutter zu Hause rundum geborgen. Das Team hat uns auch beim Antrag auf Höherstufung des Pflegegrads optimal zur Seite gestanden.“",
          name: "James T.",
          role: isRu ? "Сын пациентки (Pflegegrad 3)" : isEn ? "Son of Patient (Care Level 3)" : isTr ? "Hasta Yakını (Bakım Derecesi 3)" : isAr ? "ابن مريضة (درجة الرعاية 3)" : "Sohn einer Klientin (Pflegegrad 3)",
          avatar: "/images/nursing/avatar-james.webp",
        },
        {
          quote: isRu
            ? "«Отношение как к члену семьи. Когда после больницы папе требовался зонд и инъекции, специалисты NabiOta приезжали дважды в день точно по графику. Огромное спасибо!»"
            : isEn
            ? "“They treat you like family. When my father required tube feeding and injections after hospital discharge, NabiOta nurses were there reliably twice a day. True lifesavers.”"
            : isTr
            ? "“Burada gerçekten aileden biri gibi ilgi görüyorsunuz. Babam hastaneden çıktıktan sonra tüple beslenme ve iğnelere ihtiyaç duyduğunda NabiOta HomeCare anında imdadımıza yetişti.”"
            : isAr
            ? "«رعاية تتسم بدفء إنساني حقيقي كأنك بين أهلك. عندما احتاج والدي للتغذية بالأنبوب والحقن بعد خروجه من المستشفى، كانت NabiOta HomeCare حاضرة فوراً.»"
            : "„Hier wird man mit echter Herzenswärme betreut. Als mein Vater nach der Klinik Sondenernährung und Injektionen brauchte, war NabiOta HomeCare sofort zur Stelle. Höchste Verlässlichkeit!“",
          name: "Linda M.",
          role: isRu ? "Дочь пациента" : isEn ? "Daughter of Patient" : isTr ? "Hasta Yakını" : isAr ? "ابنة مريض" : "Angehörige eines Patienten",
          avatar: "/images/nursing/avatar-linda.webp",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: isRu ? "Часто задаваемые вопросы" : isEn ? "Frequently Asked Questions" : isTr ? "Sıkça Sorulan Sorular" : isAr ? "الأسئلة الشائعة" : "Häufig gestellte Fragen",
      items: [
        {
          q: isRu
            ? "В чем разница между Behandlungspflege (SGB V) и Grundpflege (SGB XI)?"
            : isEn
            ? "What is the difference between Clinical Care (SGB V) and Basic Care (SGB XI)?"
            : isTr
            ? "Behandlungspflege (SGB V) ile Grundpflege (SGB XI) arasındaki fark nedir?"
            : isAr
            ? "ما الفرق بين الرعاية الطبية العلاجية (SGB V) والرعاية الأساسية (SGB XI)؟"
            : "Was ist der Unterschied zwischen Behandlungspflege (SGB V) und Grundpflege (SGB XI)?",
          a: isRu
            ? "Behandlungspflege (SGB V) — это медицинские процедуры, назначенные врачом (уколы, перевязки, капельницы, таблетки). Они на 100% оплачиваются медицинской страховкой. Grundpflege (SGB XI) — это помощь в гигиене, питании и одевании, которая финансируется кассой по уходу в соответствии с присвоенным Pflegegrad."
            : isEn
            ? "Treatment care (SGB V) consists of clinical interventions prescribed by a doctor (injections, wound dressings, IVs, medications) and is 100% paid by health insurance. Basic care (SGB XI) covers personal hygiene, mobilization, and nutrition, funded by the long-term care insurance according to your Pflegegrad (1–5)."
            : isTr
            ? "SGB V kapsamındaki tedavi bakımı (Behandlungspflege), hekim tarafından reçete edilen tıbbi uygulamaları kapsar (örneğin enjeksiyonlar, yara pansumanları, ilaç verilmesi) ve masrafları tamamen sağlık sigortası tarafından karşılanır. SGB XI kapsamındaki temel bakım (Grundpflege) ise vücut temizliği, giyinme ve beslenme gibi bedensel yardımları içerir ve ilgili bakım derecesinin (Pflegegrad 1–5) ayni yardım bütçesi üzerinden finanse edilir."
            : isAr
            ? "تشمل الرعاية الطبية العلاجية (SGB V) التدابير الطبية الموصوفة من الطبيب (مثل الحقن، تبديل الضمادات، إعطاء الأدوية) ويغطيها التأمين الصحي بالكامل بنسبة 100%. أما الرعاية التمريضية الأساسية (SGB XI) فتشمل المساعدة الجسدية (النظافة، ارتداء الملابس، التغذية) وتُمول عبر ميزانية درجة الرعاية المعتمدة للمريض (Pflegegrad 1-5)."
            : "Die Behandlungspflege nach SGB V umfasst ärztlich verordnete medizinische Maßnahmen (z.B. Injektionen, Wundverbände, Medikamentengabe) und wird vollständig von der Krankenkasse bezahlt. Die Grundpflege nach SGB XI umfasst körperbezogene Hilfen (Waschen, Kleiden, Ernährung) und wird über das Sachleistungsbudget des jeweiligen Pflegegrads finanziert.",
        },
        {
          q: isRu
            ? "Как быстро NabiOta HomeCare может приступить к уходу?"
            : isEn
            ? "How quickly can NabiOta HomeCare initiate services?"
            : isTr
            ? "NabiOta HomeCare bakıma ne kadar sürede başlayabilir?"
            : isAr
            ? "ما مدى سرعة NabiOta HomeCare في بدء تقديم الرعاية؟"
            : "Wie schnell kann die NabiOta HomeCare die Versorgung aufnehmen?",
          a: isRu
            ? "В срочных случаях (например, при выписке из стационара или острой ране) мы начинаем уход в течение 24–48 часов после первого звонка или передачи рецепта."
            : isEn
            ? "In urgent cases, such as immediate hospital discharge or acute wound treatment, we can initiate care within 24 to 48 hours following an initial phone consultation or recipe transfer."
            : isTr
            ? "Acil durumlarda — özellikle kısa süreli hastane taburculuklarında veya taze ameliyat yaralarında — iletişime geçtikten sonra genellikle 24 ila 48 saat içinde bakımı başlatabiliyoruz."
            : isAr
            ? "في الحالات العاجلة – وخاصة عند الخروج السريع من المستشفى أو وجود جروح جراحية طازجة – يمكننا عادةً بدء تقديم الرعاية في غضون 24 إلى 48 ساعة من التواصل معنا."
            : "In dringlichen Fällen – insbesondere bei kurzfristiger Krankenhausentlassung oder frischen Operationswunden – können wir die Versorgung in der Regel innerhalb von 24 bis 48 Stunden nach Kontaktaufnahme starten.",
        },
        {
          q: isRu
            ? "Проводите ли вы обязательные консультации по § 37 Abs. 3 SGB XI?"
            : isEn
            ? "Do you conduct mandatory counseling visits under § 37.3 SGB XI?"
            : isTr
            ? "§ 37 Abs. 3 SGB XI uyarınca yasal zorunlu danışmanlık ziyaretlerini yapıyor musunuz?"
            : isAr
            ? "هل تقومون بإجراء زيارات الاستشارة القانونية الإلزامية وفق § 37 Abs. 3 SGB XI؟"
            : "Führen Sie gesetzliche Beratungseinsätze nach § 37 Abs. 3 SGB XI durch?",
          a: isRu
            ? "Да, наши сертифицированные консультанты проводят обязательные визиты на дому для получателей Pflegegeld (раз в полгода для Pflegegrad 2–3, раз в квартал для Pflegegrad 4–5) и сразу направляют отчет в вашу страховую кассу."
            : isEn
            ? "Yes, our certified care advisors conduct official home visits for recipients of statutory care allowances (semi-annually for Pflegegrad 2–3, quarterly for Pflegegrad 4–5) and submit documentation directly to your insurer."
            : isTr
            ? "Evet, diplomalı bakım danışmanlarımız yasal olarak zorunlu olan danışmanlık ziyaretlerini evinizde gerçekleştirir ve bakım parası (Pflegegeld) hakkınızın kesintisiz devam etmesi için onay belgesini doğrudan bakım sandığınıza iletir."
            : isAr
            ? "نعم، ينفذ مستشارو الرعاية المعتمدون لدينا زيارات الاستشارة الإلزامية في منزلكم، ونرسل التقرير الرسمي مباشرة إلى صندوق الرعاية لضمان استمرار صرف بدل الرعاية النقدي دون أي انقطاع."
            : "Ja, unsere examinierten Pflegeberater führen die gesetzlich vorgeschriebenen Beratungseinsätze bei Ihnen zu Hause durch und leiten den Nachweis direkt an Ihre Pflegekasse weiter, damit Ihr Pflegegeldanspruch gesichert bleibt.",
        },
        {
          q: isRu
            ? "Как организована дежурная служба и вызов в нерабочее время?"
            : isEn
            ? "How is out-of-hours on-call availability handled?"
            : isTr
            ? "Mesai saatleri dışındaki nöbetçi ve acil durum hizmetiniz nasıl düzenleniyor?"
            : isAr
            ? "كيف يتم تنظيم الاستجابة للطوارئ والتواصل خارج أوقات العمل الرسمية؟"
            : "Wie ist die Erreichbarkeit außerhalb der regulären Zeiten geregelt?",
          a: isRu
            ? "Для всех наших постоянных пациентов действует круглосуточная телефонная линия 24/7. В случае внезапного ухудшения состояния дежурная медсестра проконсультирует или оперативно приедет на дом."
            : isEn
            ? "For registered clients, we provide a dedicated 24/7 emergency telephone hotline. In case of acute health changes or complications, our on-call nursing supervisor responds immediately."
            : isTr
            ? "Düzenli hizmet verdiğimiz danışanlarımız için yılın 365 günü 24 saat nöbetçi telefon hattımız mevcuttur. Öngörülemeyen ani sağlık bozulmalarında veya acil durumlarda diplomalı bir uzman personelimize her an ulaşılabilir."
            : isAr
            ? "نوفر لمرضانا المسجلين خط طوارئ ومناوبة هاتفية يعمل على مدار الساعة 24/7 طوال 365 يوماً في السنة. وفي حالات التدهور الصحي المفاجئ، يكون ممرض متخصص متاحاً فوراً لتقديم الدعم أو التدخل."
            : "Für unsere betreuten Klienten besteht eine 24-stündige Rufbereitschaft an 365 Tagen im Jahr. Bei unvorhergesehenen gesundheitlichen Verschlechterungen oder Notfällen ist jederzeit eine examinierte Fachkraft erreichbar.",
        },
        {
          q: isRu
            ? "Имеют ли медсёстры государственную квалификацию?"
            : isEn
            ? "Is all nursing staff fully certified and insured?"
            : isTr
            ? "Tüm bakım personeli diplomalı ve resmi eğitimli mi?"
            : isAr
            ? "هل جميع أفراد طاقم التمريض مؤهلون وحاصلون على شهادات معتمدة؟"
            : "Sind alle Pflegekräfte examiniert und geschult?",
          a: isRu
            ? "Все наши сотрудники — это дипломированные медицинские сестры государственного образца (Pflegefachkräfte / Krankenschwester) с сертификатами Wundexperte ICW® и регулярными курсами повышения квалификации."
            : isEn
            ? "All our caregivers are state-certified registered nurses with specialized training in ICW® wound care and continuous professional development adhering to German medical standards."
            : isTr
            ? "Ekibimiz istisnasız devlet diplomalı uzman hemşirelerden oluşur. Birçoğu ICW® Yara Uzmanı, Palyatif Bakım veya Hijyen Sorumlusu gibi resmi ek uzmanlık niteliklerine sahiptir."
            : isAr
            ? "يتألف فريقنا بالكامل وبلا استثناء من ممرضين مؤهلين رسمياً وحاصلين على شهادات دولة معتمدة، ويحمل الكثير منهم مؤهلات تخصصية عليا كخبراء جروح ICW® ورعاية ملطفة ومسؤولي تعقيم."
            : "Unser Team besteht ausnahmslos aus staatlich examinierten Pflegefachkräften. Viele verfügen über anerkannte Zusatzqualifikationen wie Wundexperte ICW®, Palliativpflege oder Hygienebeauftragte.",
        },
      ],
    },
    cta: {
      eyebrow: isRu ? "СВЯЖИТЕСЬ С НАМИ" : isEn ? "GET IN TOUCH" : isTr ? "BİZİMLE İLETİŞİME GEÇİN" : isAr ? "تواصلوا معنا الآن" : "JETZT KONTAKT AUFNEHMEN",
      title: isRu
        ? "Ваше здоровье и покой — в надежных руках"
        : isEn
        ? "Your Well-Being. Our Dedicated Mission."
        : isTr
        ? "Sağlığınız. En Güvenilir Bakım Ellerinde."
        : isAr
        ? "صحتكم وسلامتكم. في أيدي تمريضية أمينة ومحترفة."
        : "Ihre Gesundheit. In besten pflegerischen Händen.",
      desc: isRu
        ? "Позвоните нам или оставьте заявку, чтобы согласовать первичный бесплатный визит и составить индивидуальный план ухода."
        : isEn
        ? "Call us or submit an inquiry to schedule a complimentary initial assessment and tailored home nursing plan."
        : isTr
        ? "Evinizde veya taburculuk öncesi hastanede ücretsiz, bağlayıcılığı olmayan bir ilk danışmanlık görüşmesi için bugün bize ulaşın."
        : isAr
        ? "تواصلوا معنا اليوم لترتيب استشارة أولية مجانية وغير ملزمة في منزلكم أو في المستشفى قبل موعد الخروج."
        : "Kontaktieren Sie uns noch heute für ein kostenfreies, unverbindliches Erstgespräch bei Ihnen zu Hause oder in der Klinik vor der Entlassung.",
      btn: isRu ? "Записаться на консультацию" : isEn ? "Contact HomeCare Team" : isTr ? "Ücretsiz İlk Danışmanlık Randevusu Alın" : isAr ? "حجز موعد استشارة أولية مجانية" : "Kostenlose Erstberatung vereinbaren",
      phone: "+49 2161 4794560",
      email: "info@nabiota-health-group.de",
      location: isRu ? "Мёнхенгладбах, Германия" : isEn ? "Mönchengladbach, Germany" : isTr ? "Mönchengladbach, Almanya" : isAr ? "مونشنغلادباخ، ألمانيا" : "Mönchengladbach, Deutschland",
      stamp1: isRu ? "Забота сегодня" : isEn ? "Caring Today" : isTr ? "Bugün gösterilen özen" : isAr ? "عناية اليوم" : "Fürsorge heute",
      stamp2: isRu ? "для здорового" : isEn ? "for a Healthier" : isTr ? "daha sağlıklı bir" : isAr ? "من أجل غدٍ أكثر" : "für ein gesünderes",
      stamp3: isRu ? "завтра ~" : isEn ? "Tomorrow ~" : isTr ? "yarın içindir ~" : isAr ? "صحة وعافية ~" : "Morgen ~",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-forest-950 font-sans selection:bg-gold-500/20">
      {/* ── 1. GLOBAL SITE NAVIGATION HEADER ── */}
      <Header currentLocale={locale} />

      {/* ── 2. SITE STANDARD PAGE HERO (Unified Header with botanical gold background) ── */}
      <PageHero
          locale={locale}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: isRu ? "Главная" : isEn ? "Home" : isTr ? "Ana Sayfa" : isAr ? "الرئيسية" : "Startseite", href: `/${locale}` },
              {
                label: isRu ? "Направления холдинга" : isEn ? "Divisions" : isTr ? "Şirket Alanları" : isAr ? "قطاعات المجموعة" : "Unternehmensbereiche",
                href: `/${locale}/areas`,
              },
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
        eyebrow={heroData.eyebrow}
        description={heroData.desc}
        imageSrc="/images/areas/pflege.webp"
        imageAlt="NabiOta Health Group Pflege & HomeCare"
        badges={heroBadges}
      />

      <main className="flex-1 bg-[#FAF9F5]">
        {/* ========================================================================= */}
        {/* SECTION 1: WHY CHOOSE US - Personalized Care                              */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#FAF9F5] relative overflow-hidden border-b border-[#EAE3D5]">
          {/* Botanical green foliage on far right */}
          <div className="absolute right-0 top-0 bottom-0 w-64 sm:w-80 md:w-96 pointer-events-none opacity-85 z-0 select-none overflow-hidden">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt="Botanical Foliage"
              fill
              className="object-contain object-right"
              priority
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Image of Nurse caring for senior */}
              <div className="lg:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-forest-900/10">
                <Image
                  src="/images/nursing/why-choose-nurse.webp"
                  alt={t.whyChoose.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right Column: Copy & Checklist */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                  {t.whyChoose.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-tight">
                  {t.whyChoose.title}
                </h2>

                <p className="text-sm sm:text-base text-[#4A5D52] leading-relaxed max-w-xl">
                  {t.whyChoose.desc}
                </p>

                {/* 4 Checklist Items with Dark Green Badges */}
                <div className="space-y-3.5 pt-2">
                  {t.whyChoose.checks.map((checkText, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#133924] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#1E382A]">
                        {checkText}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: OUR COMMITMENT (FULL-WIDTH EDGE-TO-EDGE)                       */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#0B2516] text-white relative overflow-hidden border-y border-[#D5B878]/30">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/bacground.webp"
              alt="Botanical Texture"
              fill
              className="object-cover object-center opacity-35 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2516]/95 via-[#0B2516]/85 to-[#0B2516]/60" />
          </div>

          <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch">
            {/* Left: Nurse with senior */}
            <div className="w-full lg:w-[36%] xl:w-[38%] relative min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] xl:min-h-[340px] overflow-hidden shrink-0">
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, black 65%, transparent 100%)",
                  maskImage: "linear-gradient(to right, black 65%, transparent 100%)",
                }}
              >
                <Image
                  src="/images/nursing/commitment-nurse.webp"
                  alt={t.commitment.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="hidden lg:block absolute inset-y-0 right-0 w-44 xl:w-56 bg-gradient-to-r from-transparent via-[#0B2516]/70 to-[#0B2516] pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B2516] to-transparent pointer-events-none z-10" />
            </div>

            {/* Right: Copy & 4 Circular Gold Badges */}
            <div className="w-full lg:w-[64%] xl:w-[62%] p-6 sm:p-8 lg:p-8 lg:pl-10 space-y-4 relative z-10">
              <span className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ECCF96] block font-sans">
                {t.commitment.eyebrow}
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] text-white font-normal leading-tight">
                {t.commitment.title}
              </h2>

              <p className="text-xs sm:text-[13px] md:text-[13.5px] text-[#D4E2D8] leading-relaxed max-w-2xl font-light">
                {t.commitment.desc}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10 max-w-2xl">
                {t.commitment.badges.map((b, idx) => {
                  const IconComp = b.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center space-y-1.5 group">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5B878]/70 bg-white/5 flex items-center justify-center text-[#ECCF96] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_12px_rgba(213,184,120,0.12)]">
                        <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                      </div>
                      <span className="text-[11.5px] sm:text-xs font-medium text-[#F4EFE6] leading-tight">
                        {b.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: THE 6 CORE PILLARS OF NABIOTA HOMECARE GMBH (User-Approved Cards) */}
        {/* ========================================================================= */}
        <section id="services" className="py-14 sm:py-20 bg-[#FAF9F5]">
          <Container size="wide">
            {/* Header */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-3">
                {t.servicesSection.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight mb-4">
                {t.servicesSection.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed max-w-2xl">
                {t.servicesSection.desc}
              </p>
            </div>

            {/* 6 Cards Grid: 3 cols x 2 rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {servicesData.map((svc) => (
                <div
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className="rounded-3xl bg-white border border-[#EAE4D7] shadow-sm hover:shadow-xl hover:border-[#C5A56A] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                >
                  {/* Photo without badge */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#07150C]">
                    <Image
                      src={svc.image}
                      alt={svc.title}
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
                        {svc.iconType === "stethoscope" && <Stethoscope className="w-6 h-6 stroke-[1.8]" />}
                        {svc.iconType === "award" && <Award className="w-6 h-6 stroke-[1.8]" />}
                        {svc.iconType === "heart" && <Heart className="w-6 h-6 stroke-[1.8]" />}
                        {svc.iconType === "shield" && <ShieldCheck className="w-6 h-6 stroke-[1.8]" />}
                        {svc.iconType === "pill" && <Pill className="w-6 h-6 stroke-[1.8]" />}
                        {svc.iconType === "users" && <Users className="w-6 h-6 stroke-[1.8]" />}
                      </div>
                    </div>

                    {/* Title & Description on white background */}
                    <div className="space-y-2 mb-4">
                      <h3 className="font-serif text-xl sm:text-[21px] font-bold text-[#142318] leading-tight group-hover:text-[#8D6B27] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#55695C] leading-relaxed">
                        {svc.shortDesc}
                      </p>
                    </div>

                    {/* Bottom Action Area: Pill Button + Circle Arrow Button */}
                    <div className="pt-4 mt-auto border-t border-[#F2ECE1] flex items-center justify-between">
                      <span className="px-4 py-2 rounded-full bg-[#FAF3E7] text-[#93712C] text-xs font-semibold group-hover:bg-[#F5EAD4] transition-colors">
                        {t.servicesSection.openModalBtn}
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
        {/* SECTION 3B: NABIOTA HOMECARE GMBH – PDF SECTION IV.8                      */}
        {/* ========================================================================= */}
        <HomeCareCompanySection locale={locale} />

        {/* ========================================================================= */}
        {/* SECTION 3C: NABIOTA SANITÄTSHAUS GMBH – PDF SECTION IV.9                  */}
        {/* ========================================================================= */}
        <SanitaetshausCompanySection locale={locale} />

        {/* ========================================================================= */}
        {/* SECTION 3D: NABIOTA APOTHEKE MÖNCHENGLADBACH – PDF SECTION IV.10          */}
        {/* ========================================================================= */}
        <PharmacyCompanySection locale={locale} />

        {/* ========================================================================= */}
        {/* SECTION 4: INTEGRATED NETWORK COORDINATION (Holding Verbund)              */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#07160D] text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
            <Image
              src="/images/bacground.webp"
              alt="Watermark"
              fill
              className="object-cover object-center"
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-3 font-sans">
                {t.verbund.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-white font-normal leading-tight mb-4">
                {t.verbund.title}
              </h2>
              <p className="text-sm sm:text-base text-[#C2D1C7] leading-relaxed">
                {t.verbund.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.verbund.pillars.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl bg-[#0D2418]/70 border border-[#D5B878]/30 backdrop-blur-md flex flex-col justify-between hover:border-[#D5B878] transition-all duration-300 group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#D5B878]/15 border border-[#D5B878]/40 flex items-center justify-center text-[#ECCF96] mb-5 group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#A6BAAD] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4B: NABIOTA SANITÄTSHAUS GMBH & NABIOTA PHARMACY (Pages 17-19 PDF)*/}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#FCFAF6] border-t border-[#EAE3D5] relative overflow-hidden">
          <Container size="wide">
            {/* Sanitätshaus Header */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans mb-2">
                {t.sanitaetshausSection.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-tight mb-4">
                {t.sanitaetshausSection.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4A5D52] leading-relaxed">
                {t.sanitaetshausSection.desc}
              </p>
            </div>

            {/* 4 Sanitätshaus Divisions Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sanitaetshausData.map((supply) => (
                <div
                  key={supply.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E6DFD1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Image Header without Badge */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={supply.image}
                        alt={supply.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-2xl bg-[#FAF6EE] border border-[#EADBBE] flex items-center justify-center text-[#93712C] mb-4 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors">
                        {supply.iconType === "accessibility" && <Accessibility className="w-5 h-5 stroke-[1.8]" />}
                        {supply.iconType === "home" && <Home className="w-5 h-5 stroke-[1.8]" />}
                        {supply.iconType === "pill" && <Pill className="w-5 h-5 stroke-[1.8]" />}
                      </div>

                      <h3 className="font-serif text-lg font-bold text-[#0F2A1D] mb-2 leading-snug">
                        {supply.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#556358] leading-relaxed mb-4">
                        {supply.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Card Button */}
                  <div className="px-6 pb-6 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedSupplyModal(supply)}
                      className="w-full py-2.5 px-4 rounded-xl border border-[#D5B878] bg-[#FAF8F3] hover:bg-[#C5A56A] hover:text-white text-forest-950 font-semibold text-xs tracking-wide transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-xs"
                    >
                      <span>{t.sanitaetshausSection.openModalBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* FULL-WIDTH SECTION: NABIOTA PHARMACY & KLINIKVERSORGUNG (§ 14 ApoG)      */}
        {/* ========================================================================= */}
        <section className="relative w-full py-10 sm:py-12 lg:py-14 bg-[#FAF7F2] overflow-hidden border-t border-b border-[#EDE8DE]">
          {/* Right-side pharmacy still life photo with crisp visibility and subtle edge fade */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[56%] pointer-events-none overflow-hidden select-none">
            <Image
              src="/images/areas/pharmacy-clinic-supply.jpg"
              alt="NabiOta Pharmacy & Clinic Supply"
              fill
              className="object-cover object-center lg:object-right"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Subtle left edge gradient fade so photo is clearly visible without heavy blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] from-0% via-[#FAF7F2]/50 via-18% via-[#FAF7F2]/10 via-35% to-transparent to-60%" />
            {/* Soft vertical gradient on small screens only */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent lg:hidden" />
          </div>

          {/* Botanical foliage watermark in bottom-right corner */}
          <div className="absolute -bottom-10 -right-6 w-72 sm:w-88 h-72 sm:h-88 pointer-events-none opacity-35 select-none">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt=""
              fill
              className="object-contain object-bottom-right rotate-[18deg]"
              unoptimized
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="max-w-6xl mx-auto space-y-7 sm:space-y-8">
              {/* Header */}
              <div className="max-w-2xl">
                {/* Gold line + Eyebrow */}
                <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
                  <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                  <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.24em] text-[#C5A56A] uppercase font-sans">
                    {t.pharmacySection.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-[24px] sm:text-[30px] lg:text-[35px] text-[#142318] font-normal leading-[1.2] mb-2.5 sm:mb-3">
                  {t.pharmacySection.title}
                </h2>

                {/* Lead Description */}
                <p className="text-[12px] sm:text-[12.5px] text-[#556057] leading-relaxed font-sans max-w-xl">
                  {t.pharmacySection.desc}
                </p>
              </div>

              {/* 3 Pillars Cards Grid (Compact height, no arrow buttons) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {t.pharmacySection.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-xs border border-[#EAE4D7] p-5 sm:p-5.5 shadow-[0_3px_14px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#D5B878]/60 transition-all duration-300 overflow-hidden"
                  >
                    {/* Leaf watermark in bottom-right corner */}
                    <div className="absolute -bottom-3 -right-3 w-20 h-20 pointer-events-none opacity-15 select-none sepia">
                      <Image
                        src="/images/areas/botanical-branch-clean.webp"
                        alt=""
                        fill
                        className="object-contain object-bottom-right rotate-[25deg]"
                        unoptimized
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Icon badge */}
                      <div className="mb-3 sm:mb-3.5">
                        <div
                          className={`w-10 h-10 sm:w-10.5 sm:h-10.5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                            idx === 0
                              ? "bg-[#F3F7F4] border-[#DCE8DF] text-[#1E3B29] group-hover:bg-[#E5EFE8]"
                              : "bg-[#FAF5EB] border-[#EFE5D5] text-[#9E7D3B] group-hover:bg-[#F3EAD9]"
                          }`}
                        >
                          {idx === 0 && <ShieldCheck className="w-4.5 h-4.5 stroke-[1.8]" />}
                          {idx === 1 && <Hospital className="w-4.5 h-4.5 stroke-[1.8]" />}
                          {idx === 2 && <Pill className="w-4.5 h-4.5 stroke-[1.8]" />}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-[16px] sm:text-[17px] text-[#142318] font-medium leading-snug mb-1.5 sm:mb-2">
                        {pt.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-relaxed font-sans">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: OUR APPROACH (Holistic Care for Every Stage of Life)           */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Column: Heading & CTA */}
              <div className="lg:col-span-5 space-y-5">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                  {t.approach.eyebrow}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0F2A1D] font-normal leading-tight">
                  {t.approach.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#4A5D52] leading-relaxed">
                  {t.approach.desc}
                </p>
                <div className="pt-2">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D2619] border border-[#C8B896] text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm group"
                  >
                    <span>{t.approach.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Right Column: 4 Stages Horizontal Cards */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {t.approach.stages.map((stg, idx) => (
                  <div key={idx} className="flex flex-col space-y-2.5">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-[#E2DBD0]">
                      <Image
                        src={stg.image}
                        alt={stg.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#0F2A1D] leading-tight mb-1">
                        {stg.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#5A6E63] leading-snug">
                        {stg.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: TESTIMONIALS (ENLARGED REVIEWS)                                */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            {/* Header with Read More button on right */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
              <div className="max-w-2xl space-y-2">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                  {t.testimonials.eyebrow}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-tight">
                  {t.testimonials.title}
                </h2>
                <p className="text-sm sm:text-base text-[#4A5D52]">
                  {t.testimonials.desc}
                </p>
              </div>

              <Link
                href={`/${locale}/contact`}
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-white hover:bg-[#FAF9F5] text-[#0D2619] border border-[#C8B896] text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm"
              >
                {t.testimonials.btnMore}
              </Link>
            </div>

            {/* 3 ENLARGED Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonials.cards.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EBE4D8] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  {/* Top: 5 Gold Stars & Quote */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base md:text-[17px] text-[#1E382A] font-serif italic leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  {/* Bottom: Avatar & Name */}
                  <div className="pt-5 border-t border-[#F2ECE1] flex items-center gap-4">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#D5B878]">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#0F2A1D] leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5B6E63] mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: FAQ (EDGE-TO-EDGE)                                             */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#FAF9F5] border-t border-[#EAE3D5] relative overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row items-stretch">
            {/* Left Photo */}
            <div className="w-full lg:w-[40%] xl:w-[38%] relative min-h-[260px] sm:min-h-[300px] lg:min-h-[380px] shrink-0 overflow-hidden">
              <Image
                src="/images/nursing/faq-nurse.webp"
                alt={t.faq.title}
                fill
                className="object-cover object-center"
              />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-32 xl:w-48 bg-gradient-to-r from-transparent via-[#FAF9F5]/70 to-[#FAF9F5] backdrop-blur-[3px] pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent backdrop-blur-[2px] pointer-events-none z-10" />
            </div>

            {/* Right: Accordion content */}
            <div className="w-full lg:w-[60%] xl:w-[62%] py-8 sm:py-10 lg:py-10 px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col justify-center">
              <div className="max-w-2xl">
                <span className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans mb-1.5">
                  {t.faq.eyebrow}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl text-[#0F2A1D] font-normal leading-tight mb-4">
                  {t.faq.title}
                </h2>

                <div className="divide-y divide-[#E6E0D3] border-y border-[#E6E0D3]">
                  {t.faq.items.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="py-2.5 sm:py-3">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between gap-4 text-left group"
                        >
                          <span className="font-serif text-xs sm:text-[13.5px] md:text-sm text-[#153424] font-medium group-hover:text-[#0D2619] transition-colors">
                            {item.q}
                          </span>
                          <span className="w-5 h-5 rounded-full flex items-center justify-center text-[#285038] group-hover:bg-[#EBF0EA] transition-colors flex-shrink-0">
                            {isOpen ? (
                              <Minus className="w-3.5 h-3.5" />
                            ) : (
                              <Plus className="w-3.5 h-3.5" />
                            )}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="pt-2 pr-6 text-xs sm:text-[13px] text-[#4E6256] leading-relaxed">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: BOTTOM CTA BANNER (FULL-WIDTH EDGE-TO-EDGE)                     */}
        {/* ========================================================================= */}
        <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#F6F4ED] via-[#F2EDE2] to-[#EAE3D3] border-t border-[#DECDB5]/60">
          <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 opacity-80 lg:opacity-100 pointer-events-none">
            <Image
              src="/images/nursing/cta-hands-bg.webp"
              alt="Holding hands"
              fill
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F6F4ED] via-[#F6F4ED]/80 to-transparent lg:w-1/2" />
          </div>

          {/* Floating stamp badge top right */}
          <div className="absolute top-5 right-5 sm:top-8 sm:right-10 z-20 bg-white/85 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-3xl shadow-lg border border-white/80 rotate-[-2deg] flex flex-col items-center justify-center">
            <p className="font-serif italic text-xs sm:text-sm font-semibold text-[#0E281C] text-center leading-tight">
              {t.cta.stamp1}
              <br />
              {t.cta.stamp2}
              <br />
              {t.cta.stamp3}
            </p>
            <Heart className="w-3.5 h-3.5 text-[#0E281C] fill-[#0E281C]/20 mt-1" />
          </div>

          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 relative z-10">
            <div className="max-w-xl space-y-5">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                {t.cta.eyebrow}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-tight">
                {t.cta.title}
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-[#4A5D52] leading-relaxed">
                {t.cta.desc}
              </p>

              <div>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0D2619] hover:bg-[#163D29] text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-md group"
                >
                  <span>{t.cta.btn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Bottom Contact Details Bar */}
            <div className="mt-10 pt-5 border-t border-[#DECDB5]/60 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#1B3A29] font-medium">
              <a
                href={`tel:${t.cta.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 hover:text-[#0D2619] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2D5A3E]" />
                <span>{t.cta.phone}</span>
              </a>

              <a
                href={`mailto:${t.cta.email}`}
                className="flex items-center gap-2.5 hover:text-[#0D2619] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2D5A3E]" />
                <span>{t.cta.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-[#2C4C39]">
                <MapPin className="w-4 h-4 text-[#2D5A3E]" />
                <span>{t.cta.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE MODAL DIALOG FOR CARE & SANITÄTSHAUS SPECIFICATIONS          */}
        {/* ========================================================================= */}
        {(selectedService || selectedSupplyModal) && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => {
              setSelectedService(null);
              setSelectedSupplyModal(null);
            }}
          >
            {(() => {
              const activeModal = selectedService || selectedSupplyModal;
              if (!activeModal) return null;

              return (
                <div
                  className="relative w-full max-w-5xl xl:max-w-[1100px] max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border border-[#E8DEC8] shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 animate-in zoom-in-95 duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      setSelectedSupplyModal(null);
                    }}
                    aria-label={isRu ? "Закрыть окно" : isEn ? "Close modal" : isTr ? "Pencereyi kapat" : isAr ? "إغلاق النافذة" : "Modal schließen"}
                    className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 border border-[#DECDB5] flex items-center justify-center text-[#1C261E] hover:bg-[#ECCF93]/30 transition-colors z-20 shadow-xs cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Modal Header */}
                  <div className="mb-6 pr-8">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#C5A56A]/15 border border-[#C5A56A]/30 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#8D6B27] uppercase mb-2">
                      {activeModal.badge}
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 leading-tight">
                      {activeModal.modal.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#8D6B27] font-medium mt-1">
                      {activeModal.modal.subtitle}
                    </p>
                  </div>

                  {/* Hero Image in Modal */}
                  <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden mb-6 shadow-inner border border-[#E8DEC8]">
                    <Image
                      src={activeModal.image}
                      alt={activeModal.modal.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Main Description */}
                  <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#EAE4D7] text-xs sm:text-[13.5px] text-[#334237] leading-relaxed shadow-2xs">
                    {activeModal.modal.description}
                  </div>

                  {/* 2-Column Grid: Indications and Scope */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                      <div className="flex items-center gap-2 text-[#8D6B27]">
                        <Activity className="w-4 h-4 stroke-[2]" />
                        <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                          {activeModal.modal.indicationsTitle}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {activeModal.modal.indications.map((ind, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                            <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                            <span>{ind}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                      <div className="flex items-center gap-2 text-[#8D6B27]">
                        <ShieldCheck className="w-4 h-4 stroke-[2]" />
                        <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                          {activeModal.modal.scopeTitle}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {activeModal.modal.scopeItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                            <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Billing & Regulatory Info */}
                  <div className="p-5 rounded-2xl bg-[#F8F5EE] border border-[#E5D7B7] space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-[#8D6B27]">
                      <FileText className="w-4 h-4 stroke-[2]" />
                      <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                        {activeModal.modal.billingTitle}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#3A4A3E] leading-relaxed">
                      {activeModal.modal.billingText}
                    </p>
                  </div>

                  {/* Quality Standards */}
                  <div className="p-4 rounded-xl bg-white border border-[#EAE4D7] text-xs text-[#556358] leading-relaxed flex items-start gap-3 mb-6">
                    <Info className="w-4 h-4 text-[#C5A56A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#142318] block mb-0.5">
                        {activeModal.modal.qualityTitle}:
                      </span>
                      {activeModal.modal.qualityText}
                    </div>
                  </div>

                  {/* Modal Footer CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#EAE4D7]">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        setSelectedSupplyModal(null);
                      }}
                      className="px-5 py-2.5 rounded-full border border-[#D5B878] text-xs font-semibold text-[#142318] hover:bg-[#FAF5EE] transition-colors cursor-pointer"
                    >
                      {isRu ? "Закрыть" : isEn ? "Close" : isTr ? "Kapat" : isAr ? "إغلاق" : "Schließen"}
                    </button>
                    <Link
                      href={`/${locale}/contact`}
                      onClick={() => {
                        setSelectedService(null);
                        setSelectedSupplyModal(null);
                      }}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] hover:from-[#F2DAB0] hover:to-[#DEBD7A] text-[#142217] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.01]"
                    >
                      <span>{activeModal.modal.ctaButtonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
