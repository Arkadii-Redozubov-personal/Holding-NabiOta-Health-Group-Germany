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
      : "Pflege & HomeCare",
    subtitle: isRu
      ? "NabiOta HomeCare GmbH – Забота и лечение на дому"
      : isEn
      ? "NabiOta HomeCare GmbH – Compassionate Care at Home"
      : "NabiOta HomeCare GmbH – Würdevolle Fürsorge im vertrauten Umfeld",
    eyebrow: isRu
      ? "NABIOTA HOMECARE GMBH • SGB V & SGB XI"
      : isEn
      ? "NABIOTA HOMECARE GMBH • SGB V & SGB XI"
      : "NABIOTA HOMECARE GMBH • SGB V & SGB XI",
    desc: isRu
      ? "NabiOta HomeCare GmbH обеспечивает квалифицированный амбулаторный сестринский уход, медицинскую помощь по назначению врачей (SGB V), сертифицированное ведение ран (ICW®) и базовый уход (SGB XI) в привычном домашнем окружении — с высочайшим уважением к достоинству человека и поддержкой его близких."
      : isEn
      ? "NabiOta HomeCare GmbH provides accredited outpatient nursing care, prescribed medical treatment nursing (SGB V), certified wound care (ICW®), and personal care support (SGB XI) at home — preserving personal independence, dignity, and active relief for family caregivers."
      : "Die NabiOta HomeCare GmbH gewährleistet eine verlässliche, bedarfsgerechte Pflege im häuslichen Umfeld. Unser Spektrum umfasst die ärztlich verordnete Behandlungspflege (SGB V), zertifiziertes Wundmanagement (ICW®), körperbezogene Grundpflege (SGB XI) sowie eine nahtlose Überleitung nach Klinikaufenthalten – getragen von Respekt, Zuwendung und Fachkompetenz.",
  };

  const heroBadges = [
    {
      icon: <Award className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Wundexperten ICW®" : isEn ? "ICW® Wound Care" : "Wundexperten ICW®",
      sub: isRu ? "Сертификация" : isEn ? "Certified Care" : "Zertifiziertes Management",
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "SGB V & SGB XI" : isEn ? "SGB V & SGB XI" : "SGB V & SGB XI",
      sub: isRu ? "Все кассы Германии" : isEn ? "Statutory & Private" : "Zugelassener Partner",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "24/7 Забота" : isEn ? "24/7 Care" : "24/7 Rufbereitschaft",
      sub: isRu ? "Экстренная связь" : isEn ? "Emergency On-Call" : "Rund-um-die-Uhr",
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
        : "SGB V • ÄRZTLICHE VERORDNUNG",
      image: "/images/services/homecare.webp",
      iconType: "stethoscope",
      title: isRu
        ? "Медицинский уход & процедуры (SGB V)"
        : isEn
        ? "Clinical Treatment Nursing (SGB V)"
        : "Behandlungspflege & Med. Versorgung (SGB V)",
      shortDesc: isRu
        ? "Квалифицированное выполнение медицинских назначений врача: инъекции, инфузии, выдача лекарств, компрессионная терапия и контроль показателей."
        : isEn
        ? "Professional clinical nursing according to physician orders: injections, infusions, medication administration, compression therapy, and vital monitoring."
        : "Fachgerechte Durchführung verordneter medizinischer Maßnahmen wie Injektionen, Infusionen, Medikamentengabe, Kompressionstherapie und Vitalzeichenkontrollen.",
      modal: {
        title: isRu
          ? "Медицинская помощь и лечение на дому (SGB V)"
          : isEn
          ? "Home Treatment Nursing & Clinical Procedures (SGB V)"
          : "Häusliche Krankenpflege & Behandlungspflege (SGB V)",
        subtitle: isRu
          ? "Врачебные назначения под контролем дипломированных медсестер"
          : isEn
          ? "Physician-prescribed home nursing under certified clinical oversight"
          : "Fachpflegerische Durchführung ärztlicher Anordnungen im vertrauten Zuhause",
        description: isRu
          ? "Лечебный уход по § 37 SGB V включает все медицинские процедуры, назначенные лечащим врачом или специалистом MVZ для ускорения выздоровления, предотвращения осложнений или сокращения пребывания в стационаре. Наши специалисты строго соблюдают протоколы безопасности и поддерживают постоянный контакт с лечащим доктором."
          : isEn
          ? "Treatment nursing under § 37 SGB V encompasses all clinical interventions prescribed by attending general practitioners or hospital specialists to support recovery, prevent complications, or shorten inpatient hospital stays. Our certified nurses maintain strict aseptic protocols and direct communication with physicians."
          : "Die Behandlungspflege nach § 37 SGB V umfasst alle vom Haus- oder Facharzt verordneten medizinischen Maßnahmen, die der Sicherung der ambulanten ärztlichen Behandlung dienen oder einen Krankenhausaufenthalt verkürzen bzw. vermeiden. Unsere examinierten Pflegefachkräfte führen alle Verordnungen nach strengsten Qualitäts- und Hygienestandards durch und stehen im direkten Austausch mit den behandelnden Ärzten.",
        indicationsTitle: isRu ? "Медицинские показания" : isEn ? "Clinical Indications" : "Typische Indikationen",
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
          : [
              "Insulinpflichtiger Diabetes mellitus Typ 1 und 2 mit Blutzuckermessung",
              "Kardiovaskuläre Erkrankungen mit engmaschiger Blutdruck- und Pulskontrolle",
              "Antikoagulationstherapie und subkutane Heparininjektionen (s.c. / i.m.)",
              "Komplexe medikamentöse Therapien und kontrolliertes Richten / Verabreichen",
              "Chronische venöse Insuffizienz mit Kompressionstherapie (Klasse I–IV)",
              "Postoperative Überwachung nach ambulanten und stationären Eingriffen",
            ],
        scopeTitle: isRu ? "Спектр медицинских услуг" : isEn ? "Scope of Interventions" : "Leistungsspektrum",
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
          : [
              "Injektionen (s.c. und i.m.) sowie Überwachung ärztlich angeordneter Infusionen",
              "Richten, Dosieren und Verabreichen von verordneten Arzneimitteln",
              "Blutzuckerkontrollen und bedarfsgerechte Insulininjektion",
              "Anlegen und Wechseln von Kompressionsverbänden sowie An-/Ausziehen von Kompressionsstrümpfen",
              "Kontinuierliche Vitalzeichenkontrolle (Blutdruck, Puls, Sauerstoffsättigung)",
              "Überwachung von Drainagen und lückenlose Verlaufsdokumentation im Pflegebericht",
            ],
        billingTitle: isRu ? "Финансирование и кассы" : isEn ? "Insurance & Coverage" : "Kostenübernahme & Verordnung",
        billingText: isRu
          ? "Все услуги медицинской помощи (SGB V) на 100% покрываются государственными (GKV) и частными (PKV) страховыми кассами Германии при наличии рецепта врача (Muster 12). Мы берем на себя полное согласование с вашей страховой компанией."
          : isEn
          ? "All prescribed clinical services under SGB V are covered by statutory (GKV) and private (PKV) health insurance funds with a valid physician prescription (Muster 12). We handle all administrative clearance with your insurance provider."
          : "Die Kosten der Behandlungspflege werden bei Vorliegen einer ärztlichen Verordnung häuslicher Krankenpflege (Muster 12) nach Genehmigung vollständig von den gesetzlichen (GKV) und privaten (PKV) Krankenkassen übernommen. NabiOta HomeCare übernimmt für Sie die gesamte Einreichung und Genehmigungsabstimmung.",
        qualityTitle: isRu ? "Стандарты безопасности" : isEn ? "Quality & Safety" : "Qualitäts- & Sicherheitsstandards",
        qualityText: isRu
          ? "Процедуры проводятся исключительно государственно экзаменованными медицинскими сестрами в строгом соответствии с санитарно-эпидемиологическими стандартами Института Роберта Коха (RKI)."
          : isEn
          ? "Procedures are delivered exclusively by licensed, state-certified registered nurses strictly adhering to the infection control guidelines of the Robert Koch Institute (RKI)."
          : "Die Leistungen werden ausnahmslos durch staatlich examinierte Pflegefachkräfte erbracht. Strenge Einhaltung der Hygiene-Richtlinien des Robert Koch-Instituts (RKI) und regelmäßige Fortbildungen garantieren maximale Behandlungssicherheit.",
        ctaButtonText: isRu ? "Запросить организацию ухода" : isEn ? "Request Nursing Consultation" : "Behandlungspflege anfragen",
      },
    },
    {
      id: "wundversorgung",
      badge: isRu
        ? "ICW® • ВЕДЕНИЕ РАН"
        : isEn
        ? "ICW® • WOUND MANAGEMENT"
        : "ICW® • ZERTIFIZIERTES MANAGEMENT",
      image: "/images/services/wundversorgung.webp",
      iconType: "award",
      title: isRu
        ? "Сертифицированное лечение ран (ICW®)"
        : isEn
        ? "Certified Wound Management (ICW®)"
        : "Zertifiziertes Wundmanagement (ICW®)",
      shortDesc: isRu
        ? "Профессиональный уход за хроническими, послеоперационными и труднозаживающими ранами с применением влажного заживления и фотодокументации."
        : isEn
        ? "Specialized management of chronic, postoperative, and non-healing wounds utilizing modern moist wound therapy and digital photo documentation."
        : "Spezialisierte Versorgung chronischer, postoperativer und sekundär heilender Wunden mit moderner Feuchtwundbehandlung und Fotodokumentation.",
      modal: {
        title: isRu
          ? "Zertifiziertes Wundmanagement nach ICW®"
          : isEn
          ? "Certified Wound Management according to ICW®"
          : "Zertifiziertes Wundmanagement (ICW®-Standard)",
        subtitle: isRu
          ? "Современное влажное заживление ран и экспертная фотодокументация"
          : isEn
          ? "Modern moist wound therapy and digital clinical progress documentation"
          : "Moderne phasengerechte Wundtherapie und lückenlose Verlaufsdokumentation",
        description: isRu
          ? "Хронические и вторично заживающие раны требуют глубоких специализированных знаний и терпеливого подхода. Сертифицированные эксперты по ранам ICW® (Initiative Chronische Wunden) компании NabiOta HomeCare применяют доказательные методики влажного заживления, снижая болевой синдром и стимулируя естественную регенерацию тканей."
          : isEn
          ? "Chronic and non-healing wounds demand specialized clinical expertise and structured care protocols. NabiOta HomeCare's certified ICW® wound care specialists employ modern evidence-based moist healing principles that alleviate pain, accelerate tissue granulation, and prevent infections."
          : "Chronische, postoperative und schwer heilende Wunden erfordern fundierte Fachkompetenz und strukturierte Betreuung. Unsere nach den Standards der Initiative Chronische Wunden e.V. (ICW®) zertifizierten Wundexperten setzen moderne, phasengerechte Wundtherapeutika ein. Durch das Prinzip der feuchten Wundbehandlung werden Wundschmerzen gelindert, Granulation gefördert und Infektionen wirksam verhindert.",
        indicationsTitle: isRu ? "Виды ран и диагнозы" : isEn ? "Treated Wound Types" : "Behandlungsspektrum",
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
          : [
              "Ulcus cruris venosum, arteriosum oder mixtum (Offenes Bein)",
              "Dekubitalulzera aller Schweregrade (Druckgeschwüre Grad 1 bis 4)",
              "Diabetisches Fußsyndrom (DFS) mit neuropathischen oder ischämischen Läsionen",
              "Sekundär heilende oder infizierte Operationswunden und Nahtdehiszenzen",
              "Wundheilungsstörungen nach orthopädischen und viszeralchirurgischen Eingriffen",
              "Thermische Wunden, Verbrennungen und traumatische Hautdefekte",
            ],
        scopeTitle: isRu ? "План лечения и процедуры" : isEn ? "Clinical Protocol" : "Therapeutische Maßnahmen",
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
          : [
              "Schonender, schmerzarmer Verbandwechsel unter sterilen Kautelen",
              "Phasengerechte Auswahl moderner Wundauflagen (Alginate, Hydrokolloide, Schaumverbände, Silber)",
              "Antiseptische Wundspülung und Reduktion der Keimbelastung",
              "Hochauflösende digitale Fotodokumentation und exakte Vermessung des Wundverlaufs",
              "Entstauende Kompressionstherapie bei venöser Wundgenese",
              "Direkte Fallabstimmung mit behandelnden Chirurgen, Gefäßmedizinern und MVZ-Ärzten",
            ],
        billingTitle: isRu ? "Оплата и рецепты" : isEn ? "Insurance & Reimbursement" : "Verordnung & Kostenträger",
        billingText: isRu
          ? "Уход за ранами и перевязочные материалы оплачиваются медицинскими страховками по SGB V на основании врачебного назначения. NabiOta HomeCare координирует доставку стерильных материалов через партнерские аптеки и Sanitätshaus."
          : isEn
          ? "Wound management and advanced dressing supplies are covered under SGB V statutory and private health insurance. NabiOta HomeCare coordinates the swift delivery of sterile dressings via our affiliated pharmacy and medical supply store."
          : "Die Wundversorgung ist eine anerkannte Leistung der häuslichen Krankenpflege nach SGB V. Die Kosten für Verbandwechsel und moderne Wundauflagen werden von den gesetzlichen und privaten Krankenkassen übernommen. Wir koordinieren die reibungslose Belieferung über die NabiOta Apotheke und das Sanitätshaus.",
        qualityTitle: isRu ? "Квалификация ICW®" : isEn ? "ICW® Quality Certification" : "ICW®-Zertifizierung",
        qualityText: isRu
          ? "Наши специалисты имеют действующие сертификаты Wundexperte ICW® и ежегодно проходят курсы повышения квалификации в соответствии с национальными экспертными стандартами DNQP."
          : isEn
          ? "Our wound coordinators hold accredited ICW® certifications and complete annual clinical training adhering to German National Expert Standards (DNQP)."
          : "Unsere Wundmanager verfügen über anerkannte ICW®-Zertifikate (Initiative Chronische Wunden e.V.) und bilden sich fortlaufend nach den nationalen Expertenstandards des DNQP weiter.",
        ctaButtonText: isRu ? "Записаться на осмотр раны" : isEn ? "Request Wound Assessment" : "Wundvisite vereinbaren",
      },
    },
    {
      id: "grundpflege",
      badge: isRu
        ? "SGB XI • СТЕПЕНИ УХОДА 1–5"
        : isEn
        ? "SGB XI • CARE LEVELS 1–5"
        : "SGB XI • PFLEGEGRADE 1–5",
      image: "/images/nursing/stage-senior.webp",
      iconType: "heart",
      title: isRu
        ? "Базовый уход & помощь в быту (SGB XI)"
        : isEn
        ? "Personal Care & Daily Living (SGB XI)"
        : "Körperbezogene Pflege & Grundpflege (SGB XI)",
      shortDesc: isRu
        ? "Бережная помощь в гигиене, одевании, приеме пищи и мобилизации для сохранения личной автономии и комфорта."
        : isEn
        ? "Dignified assistance with personal hygiene, dressing, nutrition, and mobilization to foster autonomy and comfort at home."
        : "Respektvolle Unterstützung bei der Körperpflege, Ernährung und Mobilität zur Erhaltung und Förderung der persönlichen Selbstständigkeit.",
      modal: {
        title: isRu
          ? "Базовый сестринский уход и помощь в быту (SGB XI)"
          : isEn
          ? "Personal Care & Activities of Daily Living (SGB XI)"
          : "Körperbezogene Grundpflege & Alltagshilfe (SGB XI)",
        subtitle: isRu
          ? "Уважительная поддержка для сохранения самостоятельности в родных стенах"
          : isEn
          ? "Respectful, empowering assistance preserving independence at home"
          : "Würdevolle, aktivierende Unterstützung für ein selbstbestimmtes Leben zu Hause",
        description: isRu
          ? "Каждый человек заслуживает уважительного и бережного отношения. Базовый уход по SGB XI строится на принципе активирующего ухода: мы помогаем в том, что вызывает затруднения, но бережно сохраняем и стимулируем те навыки, которые пациент может выполнять сам."
          : isEn
          ? "Every person deserves dignified and compassionate care. Personal care under SGB XI is centered around restorative, activating nursing: we assist where help is needed while encouraging and maintaining existing capabilities so clients remain self-determined in their own home."
          : "Die körperbezogene Pflege nach SGB XI basiert auf dem Leitgedanken der aktivierenden Pflege: Wir unterstützen dort, wo Hilfe benötigt wird, fördern aber gleichzeitig gezielt vorhandene Ressourcen und Fähigkeiten, damit unsere Klienten ihre Eigenständigkeit und Lebensfreude im vertrauten Zuhause bewahren.",
        indicationsTitle: isRu ? "Для кого предназначен уход" : isEn ? "Target Audience" : "Zielgruppe & Voraussetzungen",
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
          : [
              "Pflegebedürftige Menschen mit anerkanntem Pflegegrad (Pflegegrad 1 bis 5)",
              "Senioren mit altersbedingten Einschränkungen der Mobilität und Motorik",
              "Patienten nach schweren Erkrankungen, Schlaganfall oder Gelenkersatz",
              "Menschen mit chronischen neurologischen Erkrankungen (z.B. Morbus Parkinson)",
              "Klienten mit dementiellen Veränderungen oder kognitiven Einschränkungen",
              "Personen in vorübergehenden Rekonvaleszenz- und Erholungsphasen",
            ],
        scopeTitle: isRu ? "Что входит в базовый уход" : isEn ? "Scope of Services" : "Modulare Pflegeleistungen",
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
          : [
              "Ganz- und Teilkörperwäsche, Baden, Duschen sowie Mund-, Haar- und Zahnpflege",
              "Hilfe beim An- und Auskleiden inklusive Anlegen von Prothesen/Orthesen",
              "Mundgerechte Zubereitung und Unterstützung bei der Nahrungs- und Flüssigkeitsaufnahme",
              "Hilfe bei der Ausscheidung und diskrete, würdevolle Inkontinenzversorgung",
              "Aktivierende Mobilisation: Transfer vom Bett in den Rollstuhl, Geh- und Stehübungen",
              "Fachgerechte Lagerung im Pflegebett zur Dekubitus- und Kontrakturvermeidung",
            ],
        billingTitle: isRu ? "Оплата через кассу ухода" : isEn ? "Care Fund Billing" : "Finanzierung & Sachleistungen",
        billingText: isRu
          ? "Услуги оплачиваются кассой по уходу (Pflegekasse) в виде натуральных пособий (Pflegesachleistungen) в соответствии с присвоенным Pflegegrad (1–5) либо в комбинации с Pflegegeld. Мы рассчитываем оптимальный индивидуальный тариф без скрытых затрат."
          : isEn
          ? "Services are billed directly to statutory and private long-term care insurance funds (Pflegekassen) via care in-kind benefits (Pflegesachleistungen) based on Pflegegrad 1–5, or as a combination with monetary care allowances."
          : "Die Kosten werden bis zum gesetzlichen Höchstbetrag des jeweiligen Pflegegrads (1 bis 5) direkt als Pflegesachleistung mit der Pflegekasse abgerechnet. Auch Kombinationsleistungen (Pflegegeld + Pflegedienst) sind möglich. Wir erstellen transparente, verständliche Kostenvoranschläge.",
        qualityTitle: isRu ? "Система закрепленной медсестры" : isEn ? "Primary Nursing Model" : "Bezugspflegesystem",
        qualityText: isRu
          ? "Мы внедряем систему постоянных кураторов (Bezugspflege): за вами закрепляется небольшая команда медсестер, знающая ваши индивидуальные привычки и пожелания."
          : isEn
          ? "We implement a dedicated primary nursing system ensuring consistent, familiar caregivers who know your daily routines and preferences intimately."
          : "Unser Bezugspflegesystem stellt sicher, dass feste und vertraute Pflegekräfte zu Ihnen kommen. Das schafft eine vertrauensvolle Bindung und gibt den Klienten sowie ihren Angehörigen ein beruhigendes Gefühl von Sicherheit.",
        ctaButtonText: isRu ? "Рассчитать план ухода" : isEn ? "Calculate Care Plan" : "Pflegeberatung anfordern",
      },
    },
    {
      id: "postoperativ",
      badge: isRu
        ? "ПЕРЕВОД ИЗ КЛИНИКИ"
        : isEn
        ? "DISCHARGE TRANSITION"
        : "KLINIK- & MVZ-ÜBERLEITUNG",
      image: "/images/nursing/stage-postsurgical.webp",
      iconType: "shield",
      title: isRu
        ? "Послеоперационный патронаж & переливание"
        : isEn
        ? "Postoperative Care & Discharge Management"
        : "Postoperative Nachsorge & Entlassmanagement",
      shortDesc: isRu
        ? "Бесшовный перевод из стационара домой после хирургических операций для безопасного и спокойного восстановления в домашнем уюте."
        : isEn
        ? "Seamless hospital discharge transition following surgical procedures ensuring guided and complication-free recovery at home."
        : "Nahtlose medizinisch-pflegerische Überleitung nach Klinikaufenthalten oder ambulanten Operationen für eine sichere Genesung zu Hause.",
      modal: {
        title: isRu
          ? "Послеоперационный патронаж и ведение после выписки"
          : isEn
          ? "Postoperative Transitional Care & Discharge Management"
          : "Postoperative Nachsorge & Entlassmanagement",
        subtitle: isRu
          ? "Безопасный мост между больницей и домашним уютом"
          : isEn
          ? "Safe continuity of clinical care from hospital bedside to home"
          : "Die sichere Brücke zwischen Klinikaufenthalt und Genesung zu Hause",
        description: isRu
          ? "Первые дни после выписки из больницы критически важны для успешного выздоровления. NabiOta HomeCare координирует переход из клиники (NabiOta Clinics Germany GmbH или других стационаров) прямо в домашнюю обстановку. Мы следим за заживлением швов, дренажами, снимаем болевой синдром и предотвращаем опасные осложнения."
          : isEn
          ? "The initial days following surgical discharge are critical for complication-free recovery. NabiOta HomeCare establishes an uninterrupted care continuum from the hospital ward (NabiOta Clinics or regional partner hospitals) to the client's home. We monitor healing, drainage, manage medications, and prevent unplanned rehospitalizations."
          : "Die ersten Tage nach einem operativen Eingriff sind entscheidend für den Heilungserfolg. NabiOta HomeCare übernimmt das koordinierte Entlassmanagement direkt aus dem Krankenhaus (z.B. NabiOta Clinics Germany GmbH oder anderen Akutkliniken) in die häusliche Umgebung. Wir überwachen Wundheilung, Drainagen und Vitalwerte, organisieren Hilfsmittel und verhindern Komplikationen.",
        indicationsTitle: isRu ? "Кому необходима помощь" : isEn ? "Common Surgeries" : "Häufige Einsatzbereiche",
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
          : [
              "Zustand nach endoprothetischem Gelenkersatz (Hüft- und Knie-TEP)",
              "Eingriffe der Viszeral- und Abdominalchirurgie",
              "Neurochirurgische Operationen an Wirbelsäule und Bandscheiben",
              "Gefäßchirurgische und kardiologische Eingriffe",
              "Komplexe onkologische Operationen mit erhöhtem Pflegebedarf",
              "Entlassung mit chirurgischen Drainagen, Portkathetern oder Wundnähten",
            ],
        scopeTitle: isRu ? "Послеоперационные мероприятия" : isEn ? "Clinical Care Protocol" : "Pflegerische Leistungen",
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
          : "Die Kosten werden über die Krankenhausnachsorge gemäß § 37 Abs. 1 oder Abs. 2 SGB V sowie bei Bedarf über Haushaltshilfe nach § 38 SGB V abgedeckt. Die Verordnung wird bereits im Rahmen des Entlassmanagements im Krankenhaus ausgestellt.",
        qualityTitle: isRu ? "Координация с хирургами" : isEn ? "Surgical Coordination" : "Nahtlose Verbundkette",
        qualityText: isRu
          ? "Благодаря единой экосистеме NabiOta информация о ходе операции и рекомендациях хирурга передается патронажной сестре мгновенно и безопасно."
          : isEn
          ? "Within the NabiOta Health Group ecosystem, surgical discharge summaries and surgeon instructions are transferred directly and securely to the visiting nurse."
          : "Die enge Verzahnung mit den operativen Einheiten der NabiOta-Gruppe stellt sicher, dass postoperative Besonderheiten und OP-Berichte ohne Informationsverlust in den häuslichen Pflegeplan einfließen.",
        ctaButtonText: isRu ? "Заказать послеоперационный уход" : isEn ? "Arrange Post-Op Care" : "Nachsorge organisieren",
      },
    },
    {
      id: "spezialpflege",
      badge: isRu
        ? "СПЕЦИАЛЬНЫЙ УХОД"
        : isEn
        ? "SPECIALIZED NURSING"
        : "SPEZIALISIERTE BEHANDLUNG",
      image: "/images/nursing/why-choose-nurse.webp",
      iconType: "pill",
      title: isRu
        ? "Стомы, катетеры & порт-системы"
        : isEn
        ? "Stoma, Catheter & Port Management"
        : "Stoma-, Katheter- & Portversorgung",
      shortDesc: isRu
        ? "Квалифицированный уход за стомами, катетерами, порт-системами, а также энтеральным и парентеральным питанием в стерильных условиях."
        : isEn
        ? "Expert management of artificial access routes, enteral and parenteral nutrition, and sterile port flushing routines."
        : "Qualifizierte Versorgung ableitender und künstlicher Zugänge, enterale/parenterale Ernährung und Portspülungen unter sterilen Bedingungen.",
      modal: {
        title: isRu
          ? "Уход за стомами, катетерами и порт-системами"
          : isEn
          ? "Specialized Stoma, Catheter & Port System Care"
          : "Stoma-, Katheter- & Portversorgung",
        subtitle: isRu
          ? "Максимальная стерильность, надежность и предотвращение инфекций"
          : isEn
          ? "Maximum asepsis, skin protection, and catheter infection prevention"
          : "Höchste Asepsis, Hautschutz und zuverlässige Infektionsprävention",
        description: isRu
          ? "Специальные инвазивные системы (катетеры, кало- и уростомы, инфузионные порты, зонды PEG) требуют строжайшего соблюдения правил асептики. Наши медсестры прошли углубленную подготовку по специализированному уходу, что позволяет предотвратить инфекции кровотока, раздражения кожи и поломку оборудования."
          : isEn
          ? "Invasive clinical access devices such as urinary catheters, enterostomies, urostomies, subcutaneous infusion ports, and PEG feeding tubes require rigorous aseptic protocols. Our specialized nurses possess advanced training to protect delicate peristomal skin, prevent bloodstream infections, and ensure smooth therapy delivery."
          : "Invasive Zugangs- und Ableitungssysteme – wie suprapubische Katheter, Enterostomata, Portkatheter oder PEG-Ernährungssonden – verlangen äußerste Sorgfalt und strikte Asepsis. Unsere speziell geschulten Pflegefachkräfte beherrschen die sterile Non-Touch-Technik, um lebensbedrohliche Infektionen zu vermeiden und die Lebensqualität der Betroffenen zu sichern.",
        indicationsTitle: isRu ? "Области применения" : isEn ? "Clinical Devices & Systems" : "Versorgungsschwerpunkte",
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
          : [
              "Colostomie, Ileostomie und Urostomie (einteilige und zweiteilige Systeme)",
              "Suprapubische (Bauchdecken-) und transurethrale Blasenverweilkatheter",
              "Vollständig implantierte Port-Systeme für Chemotherapie oder Schmerztherapie",
              "Enterale Ernährung über perkutane endoskopische Gastrostomie (PEG / PEJ)",
              "Parenterale Ernährung und intravenöse Flüssigkeitssubstitution",
              "Tracheostoma-Versorgung und fachgerechte endotracheale Absaugung",
            ],
        scopeTitle: isRu ? "План ухода и процедуры" : isEn ? "Care Interventions" : "Pflegerische Leistungen",
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
          : [
              "Fachgerechter, atraumatischer Wechsel von Stomaplatten und Beutelsystemen inklusive Hautschutz",
              "Steriler Wechsel und Spülung von Blasenkathetern nach ärztlichem Intervall",
              "Aseptische Punktion von Portsystemen mit Huber-Sicherheitsnadeln und steriler Verbandwechsel",
              "Anschluss, Spülung und sachgemäße Bedienung von Ernährungspumpen (PEG / TPN)",
              "Strikte Einhaltung der RKI-Präventionsempfehlungen gegen Katheter-assoziierte Infektionen",
              "Einfühlsame Anleitung und Schulung von Angehörigen für mehr Sicherheit im Alltag",
            ],
        billingTitle: isRu ? "Страховое финансирование" : isEn ? "Reimbursement" : "Kostenträger & Hilfsmittel",
        billingText: isRu
          ? "Все манипуляции покрываются больничной кассой (SGB V) по рецепту врача. Необходимые расходные материалы и аппараты поставляются через санитарный дом NabiOta Sanitätshaus GmbH с прямым расчетом с кассой."
          : isEn
          ? "Nursing interventions are covered by health insurance under SGB V. Associated consumables and equipment are supplied directly via our NabiOta Sanitätshaus GmbH medical supply unit."
          : "Die pflegerischen Maßnahmen werden vollumfänglich nach SGB V von den Krankenkassen vergütet. Die erforderlichen Hilfsmittel, Kathetersets, Stomaartikel und Ernährungsprodukte werden direkt über das NabiOta Sanitätshaus bezogen.",
        qualityTitle: isRu ? "Инфекционный контроль" : isEn ? "Infection Control" : "Höchste Hygienesicherheit",
        qualityText: isRu
          ? "Мы используем исключительно одноразовые стерильные наборы и сертифицированные антисептики, соблюдая протоколы госпитальной гигиены."
          : isEn
          ? "We utilize strictly sterile disposable procedural packs and hospital-grade antiseptics, adhering to high-standard clinical hygiene guidelines."
          : "Die Durchführung erfolgt ausnahmslos mit zertifizierten sterilen Einmal-Sets unter strikter Beachtung unserer klinikkonformen Hygienepläne.",
        ctaButtonText: isRu ? "Консультация по катетерам и стомам" : isEn ? "Request Specialist Nursing" : "Spezialpflege anfordern",
      },
    },
    {
      id: "beratung-entlastung",
      badge: isRu
        ? "§ 37.3 SGB XI • РАЗГРУЗКА"
        : isEn
        ? "§ 37.3 SGB XI • COUNSELING"
        : "§ 37.3 SGB XI & ENTLASTUNG",
      image: "/images/nursing/hero-nurse.webp",
      iconType: "users",
      title: isRu
        ? "Консультации, профилактика & разгрузка близких"
        : isEn
        ? "Care Counseling, Prophylaxis & Respite"
        : "Pflegeberatung, Prophylaxen & Angehörigenentlastung",
      shortDesc: isRu
        ? "Обязательные консультации по § 37.3 SGB XI, профилактика пролежней и падений, обучение родственников и временный замещающий уход."
        : isEn
        ? "Mandatory § 37.3 SGB XI counseling visits, fall and pressure injury prevention, caregiver coaching, and hourly respite care."
        : "Gesetzliche Beratungseinsätze (§ 37 Abs. 3 SGB XI), Sturz- und Dekubitusprophylaxe, Anleitung Angehöriger sowie stundenweise Entlastung.",
      modal: {
        title: isRu
          ? "Консультации, профилактика и поддержка родственников"
          : isEn
          ? "Care Counseling (§ 37.3 SGB XI), Prevention & Respite Care"
          : "Pflegeberatung (§ 37 Abs. 3 SGB XI), Prophylaxen & Entlastung",
        subtitle: isRu
          ? "Защита близких от выгорания и официальные отчеты для больничных касс"
          : isEn
          ? "Preventing caregiver burnout and official statutory counseling for insurance funds"
          : "Spürbare Entlastung für Angehörige und verlässliche Begleitung im Sozialrecht",
        description: isRu
          ? "Уход за близким человеком требует колоссальных душевных и физических сил. NabiOta HomeCare не только оформляет обязательные для кассы подтверждения по § 37.3 SGB XI, но и практически обучает родственников правильным приемам ухода, помогает получить более высокий Pflegegrad и организует временную замену (Verhinderungspflege), когда вам нужен отдых."
          : isEn
          ? "Caring for a loved one is emotionally and physically demanding. NabiOta HomeCare not only conducts mandatory statutory counseling visits under § 37.3 SGB XI to preserve cash benefits, but also trains family members in ergonomic techniques, helps adjust Pflegegrad ratings, and provides respite care (§ 39/45b SGB XI) when caregivers need a well-deserved break."
          : "Die Pflege eines Angehörigen erfordert enorme körperliche und seelische Kraft. Die NabiOta HomeCare führt die gesetzlich vorgeschriebenen Beratungseinsätze nach § 37 Abs. 3 SGB XI durch, sichert Ihren Anspruch auf Pflegegeld und unterstützt bei Höherstufungsanträgen. Zudem entlasten wir pflegende Angehörige durch stundenweise Verhinderungspflege (§ 39 SGB XI) und gezielte Entlastungsangebote (§ 45b SGB XI).",
        indicationsTitle: isRu ? "Кому адресована программа" : isEn ? "Who Needs This" : "Wann diese Unterstützung greift",
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
          : [
              "Bezieher von Pflegegeld zur Sicherung des Anspruchs (§ 37 Abs. 3 SGB XI)",
              "Pflegende Angehörige bei Urlaub, eigener Erkrankung oder Terminen (§ 39 SGB XI)",
              "Familien vor der MDK/MD-Begutachtung zur Erlangung eines gerechten Pflegegrads",
              "Gefährdete Klienten mit erhöhtem Sturzrisiko oder drohenden Druckgeschwüren",
              "Bedarf an praktischer Anleitung ergonomischer Hebetechniken im Alltag",
              "Beratung zu wohnumfeldverbessernden Maßnahmen und Pflegehilfsmitteln",
            ],
        scopeTitle: isRu ? "Наши услуги и помощь" : isEn ? "Services Included" : "Leistungsumfang & Entlastung",
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
          : [
              "Durchführung der gesetzlichen Beratungseinsätze nach § 37 Abs. 3 SGB XI mit Nachweis an die Kasse",
              "Professionelle Vorbereitung und persönliche Begleitung bei der MD-Pflegegradbegutachtung",
              "Praktische Pflegeschulungen vor Ort: rückenschonende Transfertechniken und Prophylaxen",
              "Stunden- oder tageweise Verhinderungspflege (§ 39 SGB XI) bei Abwesenheit der Pflegeperson",
              "Zusätzliche Betreuungs- und Entlastungsleistungen nach § 45b SGB XI (z.B. Begleitung, Haushalt)",
              "Sturz- und Dekubitus-Screening sowie Bereitstellung von Spezialhilfsmitteln via Sanitätshaus",
            ],
        billingTitle: isRu ? "100% оплата кассой" : isEn ? "No Out-of-Pocket Cost" : "Kostenübernahme & Budgets",
        billingText: isRu
          ? "Визиты по § 37.3 SGB XI на 100% оплачиваются кассой по уходу без каких-либо доплат со стороны пациента. Бюджеты на замещающий уход (§ 39: до 1.612 €) и разгрузку (§ 45b: 131 €/мес) финансируются государством."
          : isEn
          ? "Statutory § 37.3 SGB XI counseling visits are 100% covered by long-term care insurance with zero out-of-pocket costs. Annual respite budgets (§ 39) and monthly relief allowances (§ 45b) can be fully utilized."
          : "Die gesetzlichen Beratungseinsätze nach § 37 Abs. 3 SGB XI sind für Sie kostenfrei und werden direkt mit der Pflegekasse abgerechnet. Auch die Budgets für Verhinderungspflege (bis zu 1.612 €/Jahr) und der Entlastungsbetrag (131 €/Monat) stehen Ihnen gesetzlich zu.",
        qualityTitle: isRu ? "Сертифицированные консультанты" : isEn ? "Licensed Care Advisors" : "Zertifizierte Pflegeberater",
        qualityText: isRu
          ? "Консультации проводят дипломированные эксперты по уходу с глубоким знанием немецкого социального права и богатым практическим опытом."
          : isEn
          ? "Counseling is conducted by accredited eldercare specialists with comprehensive mastery of German social insurance regulations."
          : "Unsere Pflegeberater verfügen über anerkannte Zusatzqualifikationen nach § 7a SGB XI und beraten Sie empathisch, kompetent und lösungsorientiert.",
        ctaButtonText: isRu ? "Записаться на консультацию (§ 37.3)" : isEn ? "Schedule § 37.3 Visit" : "Beratungseinsatz anfordern",
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
        : "§§ 126, 127 SGB V • HANDWERKSROLLE",
      image: "/images/nursing/stage-postsurgical.webp",
      iconType: "accessibility",
      title: isRu
        ? "Ортопедическое обеспечение и бандажи"
        : isEn
        ? "Orthopedic Braces & Custom Bandages"
        : "Orthopädische Hilfsmittel & Bandagen",
      shortDesc: isRu
        ? "Индивидуальный подбор и изготовление ортезов, суставных бандажей, поддерживающих корсетов и компрессионного трикотажа (I–IV класс)."
        : isEn
        ? "Custom-fitted orthoses, dynamic joint braces, spinal support corsets, and medical compression garments (classes I–IV)."
        : "Maßgefertigte Orthesen, funktionelle Gelenkbandagen, Stützkorsetts und medizinische Kompressionsversorgung (Klassen I–IV).",
      modal: {
        title: isRu
          ? "NabiOta Sanitätshaus: Ортопедическое обеспечение"
          : isEn
          ? "NabiOta Medical Supplies: Orthopedic Appliances"
          : "NabiOta Sanitätshaus: Orthopädische Versorgung",
        subtitle: isRu
          ? "Точная биомеханическая стабилизация и восстановление функций"
          : isEn
          ? "Precision Biomechanical Stabilization & Functional Recovery"
          : "Präzise biomechanische Stabilisierung und Funktionssicherung",
        description: isRu
          ? "Ортопедическая мастерская NabiOta Sanitätshaus GmbH сочетает передовое ремесленное мастерство с медицинскими стандартами. Мы производим и индивидуально подгоняем ортопедические изделия для разгрузки суставов, коррекции осанки и постоперационной защиты."
          : isEn
          ? "The certified orthopedic workshop of NabiOta Sanitätshaus GmbH unites traditional master craftsmanship with clinical precision. We configure and customize orthopedic appliances to relieve joint stress, correct alignment, and ensure safe postoperative recovery."
          : "Die zertifizierte orthopädietechnische Werkstatt der NabiOta Sanitätshaus GmbH verbindet handwerkliche Präzision mit modernster medizinischer Versorgung. Gemäß Handwerksordnung und §§ 126, 127 SGB V fertigen und adaptieren wir orthopädische Hilfsmittel zur gezielten Entlastung, Führung und Stabilisierung des Bewegungsapparats.",
        indicationsTitle: isRu ? "Медицинские показания" : isEn ? "Clinical Indications" : "Medizinische Indikationen",
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
          : [
              "Postoperative Stabilisierung nach Kreuzband-, Meniskus- oder Gelenkoperationen",
              "Fortgeschrittene Gonarthrose, Koxarthrose und chronische Bandinstabilitäten",
              "Degenerative Wirbelsäulenerkrankungen, Bandscheibenvorfälle und Skoliosen",
              "Chronisch-venöse Insuffizienz, Lymphödeme und postoperative Thromboseprophylaxe",
            ],
        scopeTitle: isRu ? "Спектр изделий и услуг" : isEn ? "Product & Service Scope" : "Leistungsumfang & Versorgung",
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
          : [
              "Anatomisch gestrickte Gelenkbandagen für Knie, Sprunggelenk, Schulter und Hand",
              "Hartrahmen- und Funktionsorthesen mit definierter Flexions-/Extensionsbegrenzung",
              "Stabilisierende Wirbelsäulenorthesen, Rumpfkorsetts und Entlastungsbandagen",
              "Zertifizierte Maßabnahme für medizinische Rund- und Flachstrickkompression",
            ],
        billingTitle: isRu ? "Финансирование и рецепты" : isEn ? "Statutory Reimbursement" : "Verordnungs- und Abrechnungswege",
        billingText: isRu
          ? "Все изделия поставляются по врачебному рецепту (Muster 16) с прямым расчетом со всеми государственными (GKV) и частными (PKV) страховыми кассами Германии в соответствии с §§ 126, 127 SGB V."
          : isEn
          ? "Reimbursed under statutory physician prescription (Muster 16) with direct settlement across all German public (GKV) and private (PKV) health insurers pursuant to §§ 126, 127 SGB V."
          : "Die Versorgung erfolgt auf Grundlage einer vertragsärztlichen Hilfsmittelverordnung (Muster 16). Als präqualifizierter Leistungserbringer nach §§ 126, 127 SGB V rechnen wir direkt mit allen gesetzlichen und privaten Krankenkassen ab.",
        qualityTitle: isRu ? "Стандарты качества" : isEn ? "Quality Standards" : "Qualitätsstandards",
        qualityText: isRu
          ? "Запись в ремесленной палате (Handwerksrolle), сертификация EU-MDR и персональная примерка опытными мастерами-ортопедами."
          : isEn
          ? "Registered with the German Crafts Guild (Handwerksrolle), EU-MDR compliant, and fitted by master orthopedic technicians."
          : "Eintragung in die Handwerksrolle für Orthopädietechnik, Einhaltung der EU-Medizinprodukteverordnung (MDR) und individuelle Fachberatung durch Meister.",
        ctaButtonText: isRu ? "Запросить ортопедическую помощь" : isEn ? "Request Orthopedic Consultation" : "Hilfsmittel anfragen",
      },
    },
    {
      id: "mobilitaet-rehatechnik",
      badge: isRu
        ? "МОБИЛЬНОСТЬ • СВОБОДА ДВИЖЕНИЯ"
        : isEn
        ? "MOBILITY • INDEPENDENCE"
        : "MOBILITÄT • SELBSTSTÄNDIGKEIT",
      image: "/images/nursing/stage-senior.webp",
      iconType: "accessibility",
      title: isRu
        ? "Мобильность и реабилитационная техника"
        : isEn
        ? "Mobility & Rehabilitation Technology"
        : "Mobilitäts- & Rehabilitationstechnik",
      shortDesc: isRu
        ? "Активные и паллиативные инвалидные коляски, легкие роллаторы, костыли и электрические подъемники для безопасного передвижения."
        : isEn
        ? "Active and multi-position wheelchairs, lightweight rollators, crutches, and patient transfer lifters for safe mobility."
        : "Aktiv- und Pflegerollstühle, ergonomische Leichtgewicht-Rollatoren, Gehhilfen und elektrische Patientenlifter.",
      modal: {
        title: isRu
          ? "NabiOta Sanitätshaus: Мобильность и реабилитационная техника"
          : isEn
          ? "NabiOta Medical Supplies: Mobility & Rehabilitation"
          : "NabiOta Sanitätshaus: Mobilitäts- & Rehatechnik",
        subtitle: isRu
          ? "Сохранение активности, предотвращение падений и облегчение ухода"
          : isEn
          ? "Preserving Independence, Fall Prevention & Transfer Assistance"
          : "Erhalt der Mobilität, Sturzprävention und Unterstützung im Alltag",
        description: isRu
          ? "Потеря подвижности не должна ограничивать жизнь. NabiOta Sanitätshaus GmbH подбирает, доставляет и настраивает средства передвижения под индивидуальные анатомические и физические особенности каждого пациента."
          : isEn
          ? "Mobility restrictions should never diminish quality of life. NabiOta Sanitätshaus GmbH configures, delivers, and ergonomically adapts mobility equipment to each patient's individual biomechanical requirements."
          : "Eingeschränkte Mobilität bedeutet Verlust an Lebensqualität. Die NabiOta Sanitätshaus GmbH versorgt Patienten mit modernsten Mobilitätshilfen, die exakt auf die körperliche Verfassung, die häusliche Umgebung und den individuellen Aktivitätsgrad abgestimmt werden.",
        indicationsTitle: isRu ? "Медицинские показания" : isEn ? "Clinical Indications" : "Medizinische Indikationen",
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
          : [
              "Rehabilitation nach Hüft- oder Knie-Totalendoprothesen (TEP)",
              "Paresen und Gangunsicherheiten nach Apoplex oder Schädel-Hirn-Trauma",
              "Alterstraumatologie, Gangataxie und signifikant erhöhtes Sturzrisiko",
              "Fortgeschrittene neurologische Erkrankungen (Morbus Parkinson, Multiple Sklerose)",
            ],
        scopeTitle: isRu ? "Спектр реабилитационной техники" : isEn ? "Equipment Continuum" : "Hilfsmittelspektrum",
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
          : [
              "Leichtgewicht- und Adaptivrollstühle für Innen- und Außenbereich",
              "Multifunktionale Pflegerollstühle mit Kantelung und Liegefunktion",
              "Ergonomische Leichtgewicht-Rollatoren mit Sitznetz, Tasche und Doppelfeststellbremse",
              "Unterarmgehstützen, Vierfuß-Gehhilfen, Drehscheiben und elektrische Patientenlifter",
            ],
        billingTitle: isRu ? "Оплата кассами и доставка" : isEn ? "Insurance Settlement" : "Kostenübernahme & Lieferung",
        billingText: isRu
          ? "Финансируется медицинскими кассами (SGB V). Мы берем на себя оформление согласований (Kostenvoranschlag), бесплатную доставку на дом и практический инструктаж по безопасности."
          : isEn
          ? "Covered under German statutory health insurance (SGB V). We handle all pre-authorizations (Kostenvoranschlag), home delivery, and safe usage training."
          : "Die Kosten werden nach Bewilligung des Kostenvoranschlags durch die gesetzliche oder private Krankenversicherung getragen. Wir übernehmen die gesamte Einreichung, die kostenfreie Anlieferung nach Hause und die ergonomische Einweisung.",
        qualityTitle: isRu ? "Сервис и безопасность" : isEn ? "Safety & Maintenance" : "Sicherheit & Wartung",
        qualityText: isRu
          ? "Регулярный технический осмотр (STK), ремонт, замена быстроизнашивающихся деталей и санитарная обработка оборудования."
          : isEn
          ? "Safety inspections (STK), technical servicing, spare parts warranty, and certified hygienic preparation."
          : "Regelmäßige sicherheitstechnische Kontrollen (STK), mobiler Reparaturservice und zertifizierte hygienische Wiederaufbereitung.",
        ctaButtonText: isRu ? "Подобрать коляску или роллатор" : isEn ? "Inquire Mobility Aid" : "Mobilitätshilfe anfragen",
      },
    },
    {
      id: "haeusliche-betten",
      badge: isRu
        ? "SGB XI & SGB V • УХОД НА ДОМУ"
        : isEn
        ? "SGB XI & SGB V • HOME CARE BEDS"
        : "SGB XI & SGB V • PFLEGEBETTEN",
      image: "/images/nursing/stage-rehab.webp",
      iconType: "home",
      title: isRu
        ? "Функциональные кровати и оснащение для ухода"
        : isEn
        ? "Medical Care Beds & Home Ergonomics"
        : "Häusliche Pflege- & Bettenausstattung",
      shortDesc: isRu
        ? "Медицинские функциональные кровати с электроприводом, противопролежневые матрасы, подъемники и оснащение санузлов."
        : isEn
        ? "Electric profiling medical care beds, dynamic pressure-relieving mattresses, bathroom lifters, and safety rails."
        : "Elektrisch verstellbare Pflegebetten, Antidekubitus-Matratzen, Patientenaufrichter und barrierefreie Hygienehilfen.",
      modal: {
        title: isRu
          ? "NabiOta Sanitätshaus: Функциональные кровати и уход на дому"
          : isEn
          ? "NabiOta Medical Supplies: Specialized Care Beds"
          : "NabiOta Sanitätshaus: Pflegebetten & Wohnraumanpassung",
        subtitle: isRu
          ? "Эргономика, безопасность и защита от пролежней в домашних условиях"
          : isEn
          ? "Clinical Ergonomics, Safety, and Advanced Pressure Injury Prevention"
          : "Ergonomische Arbeitsbedingungen und maximaler Liegekomfort",
        description: isRu
          ? "Качественный уход невозможен без правильного оборудования. NabiOta Sanitätshaus оперативно устанавливает электрические многофункциональные кровати, подбирает матрасы под степень риска пролежней и оснащает санузлы для максимальной безопасности."
          : isEn
          ? "Dignified home care requires ergonomic medical infrastructure. NabiOta Sanitätshaus swiftly installs electric care beds, determines pressure mattress requirements to prevent ulcers, and adapts bathroom facilities for patient safety."
          : "Ein bedarfsgerechtes Pflegebett entlastet pflegende Angehörige und ambulante Pflegekräfte gleichermaßen. Wir liefern und montieren elektrisch verstellbare Pflegebetten, innovative Antidekubitus-Systeme sowie barrierefreie Sanitärhilfen direkt vor Ort.",
        indicationsTitle: isRu ? "Медицинские показания" : isEn ? "Clinical Indications" : "Medizinische Indikationen",
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
          : [
              "Dauerhafte oder vorübergehende Bettlägerigkeit bei schwerer Pflegebedürftigkeit",
              "Hohes Dekubitusrisiko oder bestehende Druckulzera der Grade I bis IV",
              "Erschwerter selbstständiger Positionswechsel und Notwendigkeit stürzverhindernder Seitengitter",
              "Vorliegen eines Pflegegrads (PG 1–5) zur Sicherstellung der häuslichen Pflege",
            ],
        scopeTitle: isRu ? "Комплектация оборудования" : isEn ? "Equipment Continuum" : "Ausstattungsspektrum",
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
          : [
              "4-motorig verstellbare Pflegebetten mit Niedrigst-Einstieg und geteilten Holzseitengittern",
              "Patientenaufrichter mit Triangelgriff, Bettleuchten und Infusionshaltern",
              "Dynamische Wechseldrucksysteme mit digitaler Druckanpassung sowie Weichlagerungsmatratzen",
              "Badewannenlifter, Dusch- und Toilettenstühle, Sitzerhöhungen und modulare Haltegriffe",
            ],
        billingTitle: isRu ? "Оплата страховой кассой" : isEn ? "Insurance Coverage" : "Kostenübernahme nach SGB XI / SGB V",
        billingText: isRu
          ? "При наличии степени ухода (Pflegegrad) функциональная кровать предоставляется бесплатно кассой ухода (Pflegekasse) с символической доплатой до 10 € (от которой можно освободиться)."
          : isEn
          ? "Funded by statutory long-term care insurance (Pflegekasse) upon approved care grade with minimal statutory co-pay (capped at 10 € unless exempt)."
          : "Bei Vorliegen eines Pflegegrads übernimmt die Pflegekasse (SGB XI) die Kosten für ein Pflegebett als technisches Pflegehilfsmittel. Der gesetzliche Eigenanteil beträgt maximal 10 EUR, sofern keine Zuzahlungsbefreiung vorliegt.",
        qualityTitle: isRu ? "Монтаж и гарантия" : isEn ? "Installation & Warranty" : "Montage & Express-Service",
        qualityText: isRu
          ? "Экспресс-доставка, профессиональная сборка на месте квалифицированными техниками и вывоз старой мебели при необходимости."
          : isEn
          ? "Express delivery, full on-site mechanical assembly by certified technicians, and removal service."
          : "Fachgerechte Montage vor Ort, elektrische Prüfung nach DGUV Vorschrift 3 und prompte Störungsbeseitigung im Rahmen unseres Notdienstes.",
        ctaButtonText: isRu ? "Заказать установку кровати" : isEn ? "Request Care Bed Setup" : "Pflegebett anfragen",
      },
    },
    {
      id: "wund-verbrauchsmaterial",
      badge: isRu
        ? "СТЕРИЛЬНО • 40 € В МЕСЯЦ БЕСПЛАТНО"
        : isEn
        ? "STERILE LOGISTICS • €40 MONTHLY ALLOWANCE"
        : "STERILE LOGISTIK • 40 € PFLEGEPAUSCHALE",
      image: "/images/services/wundversorgung.webp",
      iconType: "pill",
      title: isRu
        ? "Расходные материалы, раны и стомы"
        : isEn
        ? "Wound Consumables & Ostomy Supplies"
        : "Wund- & Verbrauchsmaterialversorgung",
      shortDesc: isRu
        ? "Современные раневые повязки, урологические и стомические катетеры, дезинфекция и ежемесячный набор для ухода на 40 €."
        : isEn
        ? "Advanced wound dressings, ostomy and urological supplies, disinfectants, and the free €40 monthly caregiver consumable box."
        : "Phasengerechte Wundauflagen, Stoma-, Katheter- und Inkontinenzartikel sowie die monatliche 40-EUR-Pflegehilfsmittelbox.",
      modal: {
        title: isRu
          ? "NabiOta Sanitätshaus: Раневые и расходные материалы"
          : isEn
          ? "NabiOta Medical Supplies: Wound & Medical Consumables"
          : "NabiOta Sanitätshaus: Wund- & Verbrauchsmaterialien",
        subtitle: isRu
          ? "Бесперебойное снабжение стерильными материалами без очередей и рецептурных задержек"
          : isEn
          ? "Uninterrupted Supply of Sterile Consumables and Specialized Dressing Protocols"
          : "Kontinuierliche, rezeptgestützte Belieferung mit modernen Verbandstoffen",
        description: isRu
          ? "Хронические раны и потребности в уходе требуют постоянного наличия качественных стерильных средств. Мы берем на себя регулярное согласование рецептов с врачами и доставляем необходимые раневые покрытия, перчатки и средства гигиены прямо на дом."
          : isEn
          ? "Chronic wounds and daily nursing demand dependable sterile supplies. We coordinate recurring prescriptions directly with treating physicians and deliver specialized dressings, protective gloves, and disinfectants straight to your door."
          : "Eine phasengerechte Wundversorgung und hygienische Krankenpflege erfordern spezialisierte Produkte. Die NabiOta Sanitätshaus GmbH übernimmt die lückenlose Rezeptanforderung, Abstimmung mit behandelnden Ärzten und monatliche Direktbelieferung frei Haus.",
        indicationsTitle: isRu ? "Медицинские показания" : isEn ? "Clinical Indications" : "Medizinische Indikationen",
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
          : [
              "Chronische und schwer heilende Wunden (Ulcus cruris, Dekubitus, Diabetisches Fußsyndrom)",
              "Enterostomale und urostomale Versorgung (Kolo-, Ileo-, Urostomie)",
              "Transurethrale und suprapubische Katheterableitung sowie intermittierender Selbstkatheterismus",
              "Häusliche Pflegebedürftigkeit mit täglichem Desinfektions- und Schutzbedarf",
            ],
        scopeTitle: isRu ? "Номенклатура поставок" : isEn ? "Supply Continuum" : "Versorgungssortiment",
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
          : [
              "Hydroaktive Wundauflagen (Schaumstoffe, Alginate, Hydrogele, Silberwundauflagen)",
              "Sterile Verbandwechselsets, Wundspüllösungen und hypoallergene Fixiervliese",
              "Moderne ein- und zweiteilige Stomasysteme, Hautschutzplatten und Stomapflegeartikel",
              "Monatliche Pflegebox (§ 40 SGB XI) mit Einweghandschuhen, Bettschutzeinlagen und Desinfektionsmitteln",
            ],
        billingTitle: isRu ? "Оплата кассой и льготы" : isEn ? "Billing & Care Box Allowance" : "Abrechnung & 40-EUR-Pflegekassenpauschale",
        billingText: isRu
          ? "Раневые материалы оплачиваются больничными кассами по рецепту (SGB V). Набор гигиенических расходников до 40 € в месяц оплачивается кассой ухода (SGB XI) на 100% бесплатно."
          : isEn
          ? "Specialized dressings are covered via health insurance prescription (SGB V). The €40 monthly caregiver hygiene box is 100% reimbursed by the nursing care fund (SGB XI)."
          : "Verbandmittel und Stomaartikel werden als ärztlich verordnete Leistungen nach SGB V von den Krankenkassen getragen. Pflegebedürftige mit Pflegegrad haben zudem gesetzlichen Anspruch auf Pflegehilfsmittel zum Verbrauch im Wert von bis zu 40 EUR monatlich (§ 40 Abs. 2 SGB XI), die wir direkt abrechnen.",
        qualityTitle: isRu ? "Контроль качества" : isEn ? "Clinical Quality" : "Qualitäts- & Fotodokumentation",
        qualityText: isRu
          ? "Тесная координация с врачами и экспертами ICW® по ранам NabiOta HomeCare с цифровой фотофиксацией процесса заживления."
          : isEn
          ? "Tight alignment with NabiOta HomeCare ICW® wound nurses including digital photographic healing tracking."
          : "Enge Abstimmung mit den zertifizierten ICW®-Wundexperten von NabiOta HomeCare und lückenlose Verlaufsdokumentation.",
        ctaButtonText: isRu ? "Заказать материалы / Pflegebox" : isEn ? "Order Consumables / Care Box" : "Pflegebox / Wundartikel anfordern",
      },
    },
  ];

  const t = {
    servicesSection: {
      eyebrow: isRu ? "NABIOTA HOMECARE GMBH" : isEn ? "NABIOTA HOMECARE GMBH" : "NABIOTA HOMECARE GMBH",
      title: isRu
        ? "Комплексные амбулаторные и патронажные услуги"
        : isEn
        ? "Comprehensive Home Nursing & Care Services"
        : "Leistungsspektrum der NabiOta HomeCare GmbH",
      desc: isRu
        ? "Мы предлагаем полный спектр лицензированных сестринских услуг по SGB V и SGB XI: от медицинских процедур и лечения ран до заботливого ухода и юридической поддержки близких."
        : isEn
        ? "We provide an exhaustive continuum of accredited home care services under SGB V and SGB XI: from complex clinical procedures and wound healing to personal hygiene and caregiver respite."
        : "Entdecken Sie die sechs tragenden Säulen unserer ambulanten Versorgung: Von ärztlich verordneter Behandlungspflege (SGB V) über zertifiziertes Wundmanagement (ICW®) bis hin zu körperbezogener Pflege (SGB XI) und spürbarer Entlastung der Angehörigen.",
      openModalBtn: isRu ? "Подробнее о процедурах" : isEn ? "View Details" : "Details & Indikationen",
    },
    sanitaetshausSection: {
      eyebrow: isRu ? "NABIOTA SANITÄTSHAUS GMBH" : isEn ? "NABIOTA SANITÄTSHAUS GMBH" : "NABIOTA SANITÄTSHAUS GMBH",
      title: isRu
        ? "Ортопедия, реабилитация и медицинские изделия"
        : isEn
        ? "Medical Supplies, Orthopedics & Rehabilitation Technology"
        : "Sanitätshaus & Medizinische Hilfsmittelversorgung",
      desc: isRu
        ? "NabiOta Sanitätshaus GmbH обеспечивает пациентов современными ортопедическими изделиями, инвалидными колясками, функциональными кроватями и стерильными перевязочными материалами по §§ 126, 127 SGB V с прямым расчетом со всеми страховыми кассами Германии."
        : isEn
        ? "NabiOta Sanitätshaus GmbH provides high-grade orthopedic appliances, rehabilitation wheelchairs, specialized care beds, and sterile wound supplies pursuant to §§ 126, 127 SGB V, settling directly with all statutory and private health funds."
        : "Die NabiOta Sanitätshaus GmbH garantiert eine verlässliche und schnelle Versorgung mit medizinischen Hilfsmitteln, Pflegehilfsmitteln und Verbrauchsartikeln gemäß §§ 126, 127 SGB V. Wir verbinden meisterhafte Orthopädietechnik mit patientenfreundlicher Logistik und direkter Kassenabrechnung.",
      openModalBtn: isRu ? "Характеристики и рецепт" : isEn ? "Specs & Prescription" : "Details & Verordnung",
    },
    pharmacySection: {
      eyebrow: isRu ? "NABIOTA PHARMACY & КЛИНИКИ" : isEn ? "NABIOTA PHARMACY & CLINIC SUPPLY" : "NABIOTA PHARMACY & KLINIKVERSORGUNG",
      title: isRu
        ? "Концепция лекарственного обеспечения по закону об аптеках (§ 14 ApoG)"
        : isEn
        ? "Dedicated Hospital Medication Logistics pursuant to § 14 Apothekengesetz"
        : "Arzneimittelversorgung der Kliniken & NabiOta Pharmacy (§ 14 ApoG)",
      desc: isRu
        ? "В соответствии с законодательством Германии снабжение стационаров медикаментами осуществляется через уполномоченную аптеку на основании официальных договоров снабжения с государственным разрешением (§ 14 ApoG). Общественная аптека NabiOta Pharmacy функционирует под независимым руководством провизора в полном соответствии с фармацевтическим правом."
        : isEn
        ? "Pursuant to German pharmaceutical legislation, inpatient medication supply is delivered via an accredited pharmacy holding statutory supply agreements approved by regional health authorities (§ 14 ApoG). NabiOta Pharmacy operates under independent licensed pharmacist directorship, ensuring strictly segregated pharmaceutical oversight."
        : "Die Arzneimittelversorgung der verbundenen Kliniken und OP-Zentren wird durch ein gesondertes, auf den jeweiligen Klinikbetrieb abgestimmtes Versorgungskonzept sichergestellt. Sie erfolgt über eine berechtigte Apotheke auf Grundlage schriftlicher Versorgungsverträge nach § 14 Apothekengesetz (ApoG) mit behördlicher Genehmigung. Die NabiOta Pharmacy agiert mit eigenverantwortlicher fachlicher Leitung.",
      points: [
        {
          title: isRu ? "Независимое руководство" : isEn ? "Independent Pharmacy Leadership" : "Eigenverantwortliche Apothekenleitung",
          desc: isRu
            ? "Аптека не подчинена коммерческой GmbH-структуре: руководство осуществляется аккредитованным провизором согласно Apothekengesetz."
            : isEn
            ? "Legally independent operations under a licensed supervising pharmacist, safeguarding strict clinical autonomy."
            : "Betrieb ausschließlich durch einen nach dem Apothekengesetz berechtigten Erlaubnisinhaber in gesetzlich vorgeschriebener Unabhängigkeit.",
        },
        {
          title: isRu ? "Снабжение клиник (§ 14 ApoG)" : isEn ? "Statutory Hospital Supply (§ 14 ApoG)" : "Genehmigte Klinikbelieferung (§ 14 ApoG)",
          desc: isRu
            ? "Прямые утвержденные регулятором договоры снабжения стационаров, операционных блоков и MVZ необходимыми медикаментами."
            : isEn
            ? "Officially approved supply covenants covering inpatient hospital wards, surgical suites, and ambulatory surgery centers."
            : "Schriftliche Versorgungsverträge mit behördlicher Genehmigung zur lückenlosen Versorgung stationärer Fachabteilungen und OP-Säle.",
        },
        {
          title: isRu ? "Безопасность терапии (AMTS)" : isEn ? "Medication Safety (AMTS)" : "Patientenindividuelle AMTS",
          desc: isRu
            ? "Индивидуальный контроль взаимодействий лекарств, персональная фасовка (блистеризация) и круглосуточный резервный склад."
            : isEn
            ? "Pharmacological interaction screening, unit-dose pouch packaging, and 24/7 emergency clinical drug depots."
            : "Arzneimitteltherapiesicherheit, unit-dose Verblisterung, Notfalldepot-Vorhaltung und direkte Abstimmung mit den behandelnden Ärzten.",
        },
      ],
      complianceBadges: [
        isRu ? "§ 14 Apothekengesetz (ApoG)" : isEn ? "§ 14 Apothekengesetz (ApoG)" : "§ 14 Apothekengesetz (ApoG)",
        isRu ? "§§ 126, 127 SGB V Преквалификация" : isEn ? "§§ 126, 127 SGB V Pre-qualification" : "§§ 126, 127 SGB V Präqualifizierung",
        isRu ? "Ремесленная палата (Handwerksrolle)" : isEn ? "Crafts Guild Registration" : "Handwerksrolle Orthopädietechnik",
        isRu ? "Регламент EU-MDR & MPDG" : isEn ? "EU-MDR & MPDG Compliant" : "EU-MDR & MPDG Konformität",
        isRu ? "Защищенный обмен данными DSGVO" : isEn ? "GDPR Medical Data Segregation" : "DSGVO-konforme Schnittstellen",
      ],
    },
    verbund: {
      eyebrow: isRu ? "ИНТЕГРИРОВАННАЯ ЭКОСИСТЕМА" : isEn ? "INTEGRATED HEALTHCARE NETWORK" : "INTEGRIERTER VERSORGUNGSVERBUND",
      title: isRu
        ? "Бесшовная забота: Холдинг NabiOta®"
        : isEn
        ? "Seamless Continuity: The NabiOta® Healthcare Network"
        : "Nahtlose Betreuung im Verbund der NabiOta® Gruppe",
      desc: isRu
        ? "NabiOta HomeCare GmbH тесно связана со всеми звеньями нашего медицинского холдинга — обеспечивая непрерывную цепочку от поликлиники и стационара до домашней постели."
        : isEn
        ? "NabiOta HomeCare GmbH collaborates seamlessly with all specialized entities across the NabiOta Group — delivering uninterrupted continuity from clinic to bedside."
        : "Als Teil der NabiOta-Unternehmensgruppe kooperiert die NabiOta HomeCare GmbH eng mit den weiteren medizinischen Einrichtungen des Verbunds. Für Patienten und Angehörige bedeutet dies: keine Versorgungslücken, rasche Hilfsmittelversorgung und verlässliche Kommunikation zwischen Arzt und Pflege.",
      pillars: [
        {
          title: isRu ? "NabiOta MVZ & Kliniken" : isEn ? "NabiOta MVZ & Clinics" : "NabiOta MVZ & Clinics",
          desc: isRu
            ? "Прямой контакт с оперирующими и лечащими врачами, быстрое оформление рецептов и корректировка назначений."
            : isEn
            ? "Direct coordination with attending physicians and surgeons, swift prescription processing, and clinical oversight."
            : "Direkte Abstimmung mit behandelnden Fachärzten, schnelle Verordnungswege und abgestimmte Entlassplanung.",
          icon: Building2,
        },
        {
          title: isRu ? "NabiOta Sanitätshaus GmbH" : isEn ? "NabiOta Medical Supplies" : "NabiOta Sanitätshaus GmbH",
          desc: isRu
            ? "Экспресс-доставка кроватей с электроприводом, противопролежневых матрасов, ходунков, катетеров и повязок."
            : isEn
            ? "Rapid home delivery of electric care beds, anti-decubitus mattresses, walkers, wheelchairs, and dressings."
            : "Verlässliche, kurzfristige Bereitstellung von Pflegebetten, Antidekubitus-Systemen, Rollatoren und Hilfsmitteln.",
          icon: Accessibility,
        },
        {
          title: isRu ? "NabiOta Apotheke" : isEn ? "NabiOta Pharmacy" : "NabiOta Apotheke",
          desc: isRu
            ? "Бесперебойное снабжение жизненно важными лекарствами, инсулином, энтеральным питанием и стерильными материалами."
            : isEn
            ? "Uninterrupted logistics for prescription medications, insulin, enteral nutrition, and sterile medical disposables."
            : "Zuverlässige Belieferung mit verordneten Arzneimitteln, moderner Wundauflagen-Logistik und Sondennahrung.",
          icon: Pill,
        },
        {
          title: isRu ? "NabiOta Rehabilitation" : isEn ? "NabiOta Rehabilitation" : "NabiOta Rehabilitation & Therapy",
          desc: isRu
            ? "Продолжение восстановления дома: согласованные программы ЛФК, эрготерапии и возвращения к активной жизни."
            : isEn
            ? "Restorative continuation at home: coordinated physiotherapy, occupational therapy, and regaining mobility."
            : "Verzahnung von Pflege und ambulanter Therapie: Physiotherapie, Ergotherapie und Mobilisation im Einklang.",
          icon: HeartHandshake,
        },
      ],
    },
    whyChoose: {
      eyebrow: isRu ? "ПОЧЕМУ NABIOTA HOMECARE" : isEn ? "WHY CHOOSE US" : "WARUM NABIOTA HOMECARE",
      title: isRu
        ? "Индивидуальная забота. Профессиональная поддержка."
        : isEn
        ? "Personalized Care. Professional Support."
        : "Persönliche Fürsorge. Professionelle Expertise.",
      desc: isRu
        ? "Мы убеждены, что каждый человек заслуживает уважительного, чуткого ухода, разработанного с учетом его личных потребностей. Наша опытная команда дипломированных медсестер стремится повысить качество вашей жизни и помочь вам чувствовать себя комфортно, безопасно и независимо."
        : isEn
        ? "We believe that every person deserves care that is respectful, compassionate and tailored to their individual needs. Our experienced nursing team is dedicated to improving your quality of life and helping you live with greater comfort, safety, and independence."
        : "Wir sind überzeugt, dass jeder Mensch eine respektvolle, einfühlsame und maßgeschneiderte Pflege verdient. Unser erfahrenes Pflegeteam setzt sich dafür ein, Ihre Lebensqualität spürbar zu verbessern und Ihnen mehr Komfort sowie Unabhängigkeit zu ermöglichen.",
      checks: [
        isRu ? "100% дипломированные медицинские сестры и эксперты ICW®" : isEn ? "100% licensed nurses and certified ICW® wound experts" : "100% staatlich examinierte Pflegefachkräfte & ICW®-Wundexperten",
        isRu ? "Индивидуальные планы ухода и закрепленная медсестра" : isEn ? "Individualized care plans and dedicated primary nursing model" : "Individuell abgestimmte Pflegepläne mit festen Bezugspflegekräften",
        isRu ? "Прямой расчет со всеми страховыми кассами Германии (SGB V & XI)" : isEn ? "Direct billing with all German statutory and private health insurances" : "Direkte Abrechnung mit allen gesetzlichen und privaten Kassen (SGB V & XI)",
        isRu ? "Круглосуточная дежурная связь 24/7 для экстренных ситуаций" : isEn ? "24/7 emergency telephone response for acute medical concerns" : "Verlässliche 24/7 Rufbereitschaft bei akuten gesundheitlichen Veränderungen",
      ],
    },
    commitment: {
      eyebrow: isRu ? "НАШЕ ОБЯЗАТЕЛЬСТВО" : isEn ? "OUR COMMITMENT" : "UNSER VERSPRECHEN",
      title: isRu
        ? "Больше чем уход — искренняя человечность"
        : isEn
        ? "More Than Just Care — Human Dignity & Warmth"
        : "Mehr als nur Pflege – Respekt, Würde und Menschlichkeit",
      desc: isRu
        ? "Мы строим долгосрочные доверительные отношения с клиентами и их семьями, обеспечивая не только квалифицированную медицинскую помощь, но и искреннее эмоциональное спокойствие. Ваше благополучие — наш главный приоритет."
        : isEn
        ? "We build lasting relationships with our clients and their families, providing not just medical excellence, but emotional support and peace of mind. Your well-being is our top priority."
        : "Wir bauen dauerhafte, vertrauensvolle Beziehungen zu unseren Klienten und ihren Familien auf. Dabei bieten wir nicht nur fachärztlich verordnete Spitzenpflege, sondern auch emotionalen Halt und Sicherheit. Ihr Wohlbefinden steht an erster Stelle.",
      badges: [
        {
          title: isRu ? "Чуткая команда" : isEn ? "Compassionate Team" : "Einfühlsames Team",
          icon: Heart,
        },
        {
          title: isRu ? "Безопасность и доверие" : isEn ? "Safety & Trust" : "Sicherheit & Vertrauen",
          icon: ShieldCheck,
        },
        {
          title: isRu ? "Семейный подход" : isEn ? "Family Centered" : "Familienzentriert",
          icon: Users,
        },
        {
          title: isRu ? "Высокое качество" : isEn ? "Excellence in Care" : "Exzellente Qualität",
          icon: Star,
        },
      ],
    },
    approach: {
      eyebrow: isRu ? "НАШ ПОДХОД" : isEn ? "OUR APPROACH" : "UNSER PFLEGEANSATZ",
      title: isRu
        ? "Комплексный уход на каждом этапе жизни"
        : isEn
        ? "Holistic Care for Every Stage of Life"
        : "Ganzheitliche Pflege für jede Lebensphase",
      desc: isRu
        ? "От выздоровления после операции до долгосрочной поддержки в пожилом возрасте — наш сестринский уход гибко подстраивается под ваши потребности, неизменно с теплом и профессионализмом."
        : isEn
        ? "From recovery and rehabilitation to long-term elderly support, our nursing care adapts to your needs — always with compassion and professionalism."
        : "Von der Genesung nach Operationen bis zur verlässlichen Langzeitbetreuung passt sich unsere Pflege flexibel Ihren Bedürfnissen an – stets mit Mitgefühl und höchster Fachkompetenz.",
      btn: isRu ? "Узнать больше об услугах" : isEn ? "Explore Our Services" : "Leistungen entdecken",
      stages: [
        {
          title: isRu ? "Пожилой возраст" : isEn ? "Senior Care" : "Seniorenpflege",
          desc: isRu
            ? "Поддержание независимости и благополучия."
            : isEn
            ? "Promoting independence and well-being."
            : "Förderung von Selbstständigkeit & Wohlbefinden.",
          image: "/images/nursing/stage-senior.webp",
        },
        {
          title: isRu ? "После операций" : isEn ? "Post-Surgical Care" : "Postoperative Pflege",
          desc: isRu
            ? "Безопасное и надежное восстановление дома."
            : isEn
            ? "Safe and effective recovery at home."
            : "Sichere und wirksame Erholung zu Hause.",
          image: "/images/nursing/stage-postsurgical.webp",
        },
        {
          title: isRu ? "Реабилитация" : isEn ? "Rehabilitation Care" : "Rehabilitationspflege",
          desc: isRu
            ? "Помощь в восстановлении и подвижности."
            : isEn
            ? "Support for recovery and mobility."
            : "Unterstützung für Genesung und Mobilität.",
          image: "/images/nursing/stage-rehab.webp",
        },
        {
          title: isRu ? "Хронические раны" : isEn ? "Wound Recovery" : "Wundversorgung",
          desc: isRu
            ? "Бережное заживление и перевязки."
            : isEn
            ? "Accelerated tissue repair and healing."
            : "Moderne phasengerechte Wundheilung.",
          image: "/images/services/wundversorgung.webp",
        },
      ],
    },
    testimonials: {
      eyebrow: isRu ? "ОТЗЫВЫ ПАЦИЕНТОВ" : isEn ? "PATIENT TESTIMONIALS" : "ERFAHRUNGSBERICHTE",
      title: isRu
        ? "Реальные истории. Реальная помощь."
        : isEn
        ? "Real Stories. Real Impact."
        : "Echte Geschichten. Echte Hilfe.",
      desc: isRu
        ? "Узнайте от пациентов и их близких, как забота нашей команды изменила их жизнь к лучшему."
        : isEn
        ? "Hear from families who have experienced the difference our nursing care makes."
        : "Erfahren Sie von Familien, welchen spürbaren Unterschied unsere Pflege im Alltag macht.",
      btnMore: isRu ? "Все отзывы +" : isEn ? "Read More Reviews +" : "Weitere Bewertungen +",
      cards: [
        {
          quote: isRu
            ? "«Медсёстры NabiOta HomeCare невероятно чуткие, пунктуальные и профессиональные. Они взяли на себя обработку сложной раны после операции на стопе, и за месяц всё идеально зажило!»"
            : isEn
            ? "“The nurses from NabiOta HomeCare are kind, punctual, and remarkably skilled. They treated a complicated postoperative wound, and it healed completely within four weeks!”"
            : "„Die Pflegekräfte von NabiOta HomeCare sind herzlich, pünktlich und hochkompetent. Dank des zertifizierten Wundmanagements ist meine postoperative Wunde nach wochenlangem Stillstand endlich vollkommen verheilt!“",
          name: "Sarah L.",
          role: isRu ? "Пациентка, Мёнхенгладбах" : isEn ? "Patient, Mönchengladbach" : "Patientin, Mönchengladbach",
          avatar: "/images/nursing/avatar-sarah.webp",
        },
        {
          quote: isRu
            ? "«Благодаря закрепленной медсестре моя мама чувствует себя в полной безопасности. Они помогли оформить повышение степени ухода и взяли на себя выдачу лекарств.»"
            : isEn
            ? "“Thanks to the primary nurse system, my mother feels completely secure at home. They guided us through the Pflegegrad upgrade and handle all medications flawlessly.”"
            : "„Dank der festen Bezugspflegekraft fühlt sich meine Mutter zu Hause rundum geborgen. Das Team hat uns auch beim Antrag auf Höherstufung des Pflegegrads optimal zur Seite gestanden.“",
          name: "James T.",
          role: isRu ? "Сын пациентки (Pflegegrad 3)" : isEn ? "Son of Patient (Care Level 3)" : "Sohn einer Klientin (Pflegegrad 3)",
          avatar: "/images/nursing/avatar-james.webp",
        },
        {
          quote: isRu
            ? "«Отношение как к члену семьи. Когда после больницы папе требовался зонд и инъекции, специалисты NabiOta приезжали дважды в день точно по графику. Огромное спасибо!»"
            : isEn
            ? "“They treat you like family. When my father required tube feeding and injections after hospital discharge, NabiOta nurses were there reliably twice a day. True lifesavers.”"
            : "„Hier wird man mit echter Herzenswärme betreut. Als mein Vater nach der Klinik Sondenernährung und Injektionen brauchte, war NabiOta HomeCare sofort zur Stelle. Höchste Verlässlichkeit!“",
          name: "Linda M.",
          role: isRu ? "Дочь пациента" : isEn ? "Daughter of Patient" : "Angehörige eines Patienten",
          avatar: "/images/nursing/avatar-linda.webp",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: isRu ? "Часто задаваемые вопросы" : isEn ? "Frequently Asked Questions" : "Häufig gestellte Fragen",
      items: [
        {
          q: isRu
            ? "В чем разница между Behandlungspflege (SGB V) и Grundpflege (SGB XI)?"
            : isEn
            ? "What is the difference between Clinical Care (SGB V) and Basic Care (SGB XI)?"
            : "Was ist der Unterschied zwischen Behandlungspflege (SGB V) und Grundpflege (SGB XI)?",
          a: isRu
            ? "Behandlungspflege (SGB V) — это медицинские процедуры, назначенные врачом (уколы, перевязки, капельницы, таблетки). Они на 100% оплачиваются медицинской страховкой. Grundpflege (SGB XI) — это помощь в гигиене, питании и одевании, которая финансируется кассой по уходу в соответствии с присвоенным Pflegegrad."
            : isEn
            ? "Treatment care (SGB V) consists of clinical interventions prescribed by a doctor (injections, wound dressings, IVs, medications) and is 100% paid by health insurance. Basic care (SGB XI) covers personal hygiene, mobilization, and nutrition, funded by the long-term care insurance according to your Pflegegrad (1–5)."
            : "Die Behandlungspflege nach SGB V umfasst ärztlich verordnete medizinische Maßnahmen (z.B. Injektionen, Wundverbände, Medikamentengabe) und wird vollständig von der Krankenkasse bezahlt. Die Grundpflege nach SGB XI umfasst körperbezogene Hilfen (Waschen, Kleiden, Ernährung) und wird über das Sachleistungsbudget des jeweiligen Pflegegrads finanziert.",
        },
        {
          q: isRu
            ? "Как быстро NabiOta HomeCare может приступить к уходу?"
            : isEn
            ? "How quickly can NabiOta HomeCare initiate services?"
            : "Wie schnell kann die NabiOta HomeCare die Versorgung aufnehmen?",
          a: isRu
            ? "В срочных случаях (например, при выписке из стационара или острой ране) мы начинаем уход в течение 24–48 часов после первого звонка или передачи рецепта."
            : isEn
            ? "In urgent cases, such as immediate hospital discharge or acute wound treatment, we can initiate care within 24 to 48 hours following an initial phone consultation or recipe transfer."
            : "In dringlichen Fällen – insbesondere bei kurzfristiger Krankenhausentlassung oder frischen Operationswunden – können wir die Versorgung in der Regel innerhalb von 24 bis 48 Stunden nach Kontaktaufnahme starten.",
        },
        {
          q: isRu
            ? "Проводите ли вы обязательные консультации по § 37 Abs. 3 SGB XI?"
            : isEn
            ? "Do you conduct mandatory counseling visits under § 37.3 SGB XI?"
            : "Führen Sie gesetzliche Beratungseinsätze nach § 37 Abs. 3 SGB XI durch?",
          a: isRu
            ? "Да, наши сертифицированные консультанты проводят обязательные визиты на дому для получателей Pflegegeld (раз в полгода для Pflegegrad 2–3, раз в квартал для Pflegegrad 4–5) и сразу направляют отчет в вашу страховую кассу."
            : isEn
            ? "Yes, our certified care advisors conduct official home visits for recipients of statutory care allowances (semi-annually for Pflegegrad 2–3, quarterly for Pflegegrad 4–5) and submit documentation directly to your insurer."
            : "Ja, unsere examinierten Pflegeberater führen die gesetzlich vorgeschriebenen Beratungseinsätze bei Ihnen zu Hause durch und leiten den Nachweis direkt an Ihre Pflegekasse weiter, damit Ihr Pflegegeldanspruch gesichert bleibt.",
        },
        {
          q: isRu
            ? "Как организована дежурная служба и вызов в нерабочее время?"
            : isEn
            ? "How is out-of-hours on-call availability handled?"
            : "Wie ist die Erreichbarkeit außerhalb der regulären Zeiten geregelt?",
          a: isRu
            ? "Для всех наших постоянных пациентов действует круглосуточная телефонная линия 24/7. В случае внезапного ухудшения состояния дежурная медсестра проконсультирует или оперативно приедет на дом."
            : isEn
            ? "For registered clients, we provide a dedicated 24/7 emergency telephone hotline. In case of acute health changes or complications, our on-call nursing supervisor responds immediately."
            : "Für unsere betreuten Klienten besteht eine 24-stündige Rufbereitschaft an 365 Tagen im Jahr. Bei unvorhergesehenen gesundheitlichen Verschlechterungen oder Notfällen ist jederzeit eine examinierte Fachkraft erreichbar.",
        },
        {
          q: isRu
            ? "Имеют ли медсёстры государственную квалификацию?"
            : isEn
            ? "Is all nursing staff fully certified and insured?"
            : "Sind alle Pflegekräfte examiniert und geschult?",
          a: isRu
            ? "Все наши сотрудники — это дипломированные медицинские сестры государственного образца (Pflegefachkräfte / Krankenschwester) с сертификатами Wundexperte ICW® и регулярными курсами повышения квалификации."
            : isEn
            ? "All our caregivers are state-certified registered nurses with specialized training in ICW® wound care and continuous professional development adhering to German medical standards."
            : "Unser Team besteht ausnahmslos aus staatlich examinierten Pflegefachkräften. Viele verfügen über anerkannte Zusatzqualifikationen wie Wundexperte ICW®, Palliativpflege oder Hygienebeauftragte.",
        },
      ],
    },
    cta: {
      eyebrow: isRu ? "СВЯЖИТЕСЬ С НАМИ" : isEn ? "GET IN TOUCH" : "JETZT KONTAKT AUFNEHMEN",
      title: isRu
        ? "Ваше здоровье и покой — в надежных руках"
        : isEn
        ? "Your Well-Being. Our Dedicated Mission."
        : "Ihre Gesundheit. In besten pflegerischen Händen.",
      desc: isRu
        ? "Позвоните нам или оставьте заявку, чтобы согласовать первичный бесплатный визит и составить индивидуальный план ухода."
        : isEn
        ? "Call us or submit an inquiry to schedule a complimentary initial assessment and tailored home nursing plan."
        : "Kontaktieren Sie uns noch heute für ein kostenfreies, unverbindliches Erstgespräch bei Ihnen zu Hause oder in der Klinik vor der Entlassung.",
      btn: isRu ? "Записаться на консультацию" : isEn ? "Contact HomeCare Team" : "Kostenlose Erstberatung vereinbaren",
      phone: "+49 2161 4794560",
      email: "info@nabiota-health-group.de",
      location: isRu ? "Мёнхенгладбах, Германия" : isEn ? "Mönchengladbach, Germany" : "Mönchengladbach, Deutschland",
      stamp1: isRu ? "Забота сегодня" : isEn ? "Caring Today" : "Fürsorge heute",
      stamp2: isRu ? "для здорового" : isEn ? "for a Healthier" : "für ein gesünderes",
      stamp3: isRu ? "завтра ~" : isEn ? "Tomorrow ~" : "Morgen ~",
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
              { label: isRu ? "Главная" : isEn ? "Home" : "Startseite", href: `/${locale}` },
              {
                label: isRu ? "Направления холдинга" : isEn ? "Divisions" : "Unternehmensbereiche",
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
                    aria-label="Modal schließen"
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
                      {isRu ? "Закрыть" : isEn ? "Close" : "Schließen"}
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
