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
  const isRu = locale === "ru";
  const isEn = locale === "en";

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
    title: isRu
      ? "Недвижимость & Девелопмент"
      : isEn
      ? "Real Estate & Project Development"
      : "Beratung & Immobilienentwicklung",
    subtitle: isRu
      ? "NabiOta Real Estate GmbH – Медицинская недвижимость под ключ"
      : isEn
      ? "NabiOta Real Estate GmbH – Healthcare Real Estate & Medical Infrastructure"
      : "NabiOta Real Estate GmbH – Spezialimmobilien für das Gesundheitswesen",
    eyebrow: isRu
      ? "NABIOTA REAL ESTATE GMBH • МЕДИЦИНСКАЯ ИНФРАСТРУКТУРА"
      : isEn
      ? "NABIOTA REAL ESTATE GMBH • HEALTHCARE INFRASTRUCTURE"
      : "NABIOTA REAL ESTATE GMBH • MEDIZINISCHE IMMOBILIEN",
    desc: isRu
      ? "NabiOta Real Estate GmbH приобретает, проектирует, развивает и управляет специализированной недвижимостью сферы здравоохранения: от современных клиник и амбулаторных хирургических центров (OP) до диагностических комплексов, реабилитационных клиник, домов ухода и комфортного жилья для медперсонала."
      : isEn
      ? "NabiOta Real Estate GmbH acquires, designs, develops, and manages specialized healthcare real estate across Germany: from modern hospital wings and outpatient surgery centers (OP) to diagnostic suites, rehab clinics, nursing homes, and residential accommodation for medical staff."
      : "Die NabiOta Real Estate GmbH erwirbt, entwickelt, verwaltet und vermietet zukunftssichere Immobilien für Einrichtungen des Gesundheitswesens. Unser Portfolio reicht von hochmodernen Klinikbauten und ambulanten OP-Zentren über MVZ-Flächen und Radiologie-Sonderbauten bis hin zu Therapiezentren, Pflegeeinrichtungen und Mitarbeiterwohnungen.",
  };

  const heroBadges = [
    {
      icon: <Building2 className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Turnkey Realisierung" : isEn ? "Turnkey Delivery" : "Turnkey Realisierung",
      sub: isRu ? "Под ключ от А до Я" : isEn ? "Concept to Handover" : "Schlüsselfertig",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "DIN 18040 & RLT" : isEn ? "DIN & Cleanroom" : "DIN 18040 & RLT",
      sub: isRu ? "Медицинские стандарты" : isEn ? "Medical Standards" : "Sonderbau-Standards",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Рентабельность" : isEn ? "ESG & Feasibility" : "Wirtschaftlich & Tragfähig",
      sub: isRu ? "Устойчивая ценность" : isEn ? "Sustainable Value" : "Langfristiger Werterhalt",
    },
  ];

  // 6 Core Healthcare Real Estate Pillars matching PDF Section 7 and User-Approved Card Styling
  const realEstateDomains: RealEstateDomain[] = [
    {
      id: "kliniken-op",
      badge: isRu ? "КЛИНИКИ И ОПЕРАЦИОННЫЕ" : isEn ? "CLINICS & SURGERY" : "KLINIKEN & OP-ZENTREN",
      image: "/images/areas/surgical-center.webp",
      iconType: "building",
      title: isRu
        ? "Клинические корпуса & Амбулаторные OP-центры"
        : isEn
        ? "Clinic Buildings & Outpatient Surgery Centers"
        : "Klinikgebäude & Ambulante OP-Zentren",
      shortDesc: isRu
        ? "Проектирование и реализация стерильных операционных залов (DIN 1946-4), палат пробуждения и стационарных отделений по § 30 GewO / § 115b SGB V."
        : isEn
        ? "Planning and construction of certified cleanroom operating theaters (DIN 1946-4), PACU recovery suites, and surgical clinic wards."
        : "Planung und schlüsselfertige Realisierung von OP-Sälen (DIN 1946-4), Aufwachbereichen und tagesklinischen Bettenstationen für höchste chirurgische Standards.",
      modal: {
        title: isRu
          ? "Клинические корпуса & Амбулаторные хирургические центры"
          : isEn
          ? "Hospital Buildings & Ambulatory Surgery Centers"
          : "Klinikgebäude & Ambulante OP-Zentren (§ 115b SGB V / § 30 GewO)",
        subtitle: isRu
          ? "Специализированная чистая вентиляция и инфраструктура для сложных операций"
          : isEn
          ? "Advanced laminar cleanroom ventilation and surgical suite infrastructure"
          : "Spezialisierte bauliche Reinraum- und Klimatechnik für sterile operative Eingriffe",
        description: isRu
          ? "Строительство и переоборудование хирургических стационаров требует абсолютной точности: чистые зоны классов 1a и 1b, ламинарный поток воздуха над операционным столом, независимое аварийное электроснабжение и бесшовные шлюзы для персонала и пациентов."
          : isEn
          ? "Designing and building modern surgical inpatient and outpatient facilities requires uncompromising engineering precision: cleanroom classification 1a/1b, laminar airflow ceilings, isolated electrical safety systems, and strict aseptic airlocks."
          : "Die Realisierung von Klinikbauten und ambulanten Operationszentren verlangt fundiertes bauliches und medizinisches Schnittstellenwissen. NabiOta Real Estate GmbH entwickelt maßgeschneiderte Operationssäle der Reinraumklassen 1a und 1b, sterile Schleusensysteme, Aufwachbereiche sowie moderne Patientenstationen, die optimal auf die Arbeitsabläufe von Chirurgen und Anästhesisten abgestimmt sind.",
        specificationsTitle: isRu ? "Технические параметры" : isEn ? "Technical Specifications" : "Bauliche & technische Spezifikationen",
        specifications: isRu
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
          : [
              "OP-Säle mit TAV-Decken (Turbulenzarme Verdrängungsströmung) der Raumklasse 1a/1b",
              "Hocheffiziente RLT-Anlagen nach DIN 1946-4 mit HEPA-Filterung und Druckstufenregelung",
              "Integrierte Medienversorgungsanlagen für medizinische Gase (O2, DL, Vakuum)",
              "Zusätzliche Sicherheitsstromversorgung (ZSV/SV) nach DIN VDE 0100-710 (Gruppe 2)",
              "Voll ausgestattete Aufwachräume (PACU) mit lückenloser Monitorüberwachung",
              "Antistatische, fugenlose ableitfähige Bodenbeläge und automatische OP-Schiebetüren",
            ],
        scopeTitle: isRu ? "Услуги девелопера" : isEn ? "Developer Scope" : "Leistungsportfolio NabiOta Real Estate",
        scopeItems: isRu
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
          : [
              "Standortanalyse, Bedarfsprüfung, Verkehrsanbindung und baurechtliche Vorprüfung",
              "Erstellung spezialisierter medizintechnischer Raumprogramme und Hygienezonierungen",
              "Komplette Begleitung der behördlichen Genehmigungsverfahren nach § 30 GewO / KHG",
              "Generalübernahme, Baubegleitung, Qualitätskontrolle und schlüsselfertige Übergabe",
              "Abschluss maßgeschneiderter Gewerbemietverträge und technisches Facility Management",
            ],
        technicalTitle: isRu ? "Нормативная база" : isEn ? "Regulatory Standards" : "Normen & Richtlinien",
        technicalText: isRu
          ? "Все объекты соответствуют требованиям Sonderbauverordnung, DIN 1946-4, DIN EN ISO 14644 (чистые помещения) и директивам Института Роберта Коха (RKI)."
          : isEn
          ? "All clinic facilities strictly conform to hospital codes, DIN 1946-4, DIN EN ISO 14644 (cleanrooms), and Robert Koch Institute (RKI) hygiene directives."
          : "Planung und Bau erfolgen streng nach den Krankenhaus-Sonderbauverordnungen, DIN 1946-4, DIN EN ISO 14644 (Reinraumtechnik) und den Hygieneempfehlungen der KRINKO am RKI.",
        legalTitle: isRu ? "Юридическое разделение" : isEn ? "Legal Framework" : "Rechtliche Entflechtung",
        legalText: isRu
          ? "Четкое разграничение: NabiOta Real Estate GmbH выступает девелопером и арендодателем помещений, а медицинская деятельность и лицензии принадлежат операторам клиник."
          : isEn
          ? "Clear structural separation: NabiOta Real Estate GmbH acts solely as property owner, developer, and lessor; clinical responsibility remains with licensed operating clinics."
          : "Die Immobiliengesellschaft übernimmt keine medizinischen Behandlungsaufgaben. Die Verantwortlichkeiten für Gebäude, Haustechnik und den medizinischen Betrieb werden vertraglich eindeutig voneinander abgegrenzt.",
        ctaButtonText: isRu ? "Запросить концепцию клиники" : isEn ? "Inquire Clinic Project" : "Klinikkonzept anfragen",
      },
    },
    {
      id: "mvz-praxen",
      badge: isRu ? "MVZ И МЕДЦЕНТРЫ" : isEn ? "MVZ & MEDICAL CENTERS" : "MVZ & ÄRZTEHÄUSER",
      image: "/images/beratung/project-mvz.webp",
      iconType: "stethoscope",
      title: isRu
        ? "Медицинские центры (MVZ) & Врачебные праксисы"
        : isEn
        ? "Medical Centers (MVZ) & Practice Spaces"
        : "Medizinische Versorgungszentren (MVZ) & Ärztehäuser",
      shortDesc: isRu
        ? "Современные праксисы по стандартам KV Nordrhein: безбарьерная среда (DIN 18040-1), модульные кабинеты и гибкие планировки."
        : isEn
        ? "Accredited outpatient clinic spaces adhering to KV guidelines: barrier-free access (DIN 18040-1), modular consultation rooms, and efficient layouts."
        : "Zulassungskonforme Praxisflächen nach § 95 SGB V mit barrierefreien Raumkonzepten, KV-Genehmigungsfähigkeit und modularen Einheiten.",
      modal: {
        title: isRu
          ? "Медицинские центры (MVZ) & Врачебные праксисы"
          : isEn
          ? "Medical Versorgungszentren (MVZ) & Healthcare Hubs"
          : "Medizinische Versorgungszentren (MVZ) & Facharztpraxen",
        subtitle: isRu
          ? "Функциональные пространства для врачей различных специальностей"
          : isEn
          ? "Compliant, patient-friendly outpatient spaces tailored for physician practices"
          : "Zukunftssichere Praxisflächen nach KV- und Berufsrecht",
        description: isRu
          ? "От одиночного врачебного кабинета до крупного многопрофильного амбулаторного кампуса: мы анализируем потребности региона, согласуем проект с Ассоциацией врачей больничных касс (KV Nordrhein) и создаем пространства, где удобно и врачам, и пациентам."
          : isEn
          ? "From single specialist practices to interdisciplinary MVZ hubs: we analyze regional medical demographics, ensure KV Nordrhein licensing alignment, and construct clinic environments engineered for optimal patient flow and confidentiality."
          : "Vom Einzelpraxissitz bis zum fachübergreifenden MVZ-Campus: Wir analysieren den lokalen Versorgungsbedarf, prüfen Kassenarztsitz-Vorgaben der Kassenärztlichen Vereinigung (KV Nordrhein) und entwickeln funktionale Raumprogramme, die kurze Wege für Patienten und Ärzte schaffen.",
        specificationsTitle: isRu ? "Архитектурные стандарты" : isEn ? "Facility Features" : "Raumprogramm & Ausstattung",
        specifications: isRu
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
          : [
              "Konsequente Barrierefreiheit nach DIN 18040-1 mit rollstuhlgerechten Türen und Aufzügen",
              "Modulare Behandlungs- und Sprechzimmer mit standardisierten Anschlüssen",
              "Schallschutz nach DIN 4109 (SSK 3) zur Wahrung der ärztlichen Schweigepflicht",
              "Zentraler Empfang mit Patientenleitsystem und getrennten Wartebereichen",
              "Zukunftssichere IT-Infrastruktur mit Cat.7-Verkabelung und klimatisierten Serverräumen",
              "Mitarbeiter- und Sozialräume gemäß Arbeitsstättenverordnung (ASR)",
            ],
        scopeTitle: isRu ? "Что мы берем на себя" : isEn ? "Our Turnkey Services" : "Leistungen für Praxisinhaber & MVZ",
        scopeItems: isRu
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
          : [
              "Suche und Ankauf geeigneter Grundstücke oder Bestandsimmobilien in Top-Lagen",
              "Fachgerechte Raumplanung abgestimmt auf KV-Fachgruppen (z.B. Kardiologie, Chirurgie)",
              "Begleitung bei Nutzungsänderungsanträgen und Abstimmung mit Baubehörden",
              "Finanzierungsstrukturierung, schlüsselfertiger Mieterausbau und Einbau fester Einbauten",
              "Langfristige Betreuung durch hauseigenes Facility Management und Nebenkostenabrechnung",
            ],
        technicalTitle: isRu ? "Строительные нормы" : isEn ? "Applicable Codes" : "Standards",
        technicalText: isRu
          ? "DIN 18040-1, DIN 4109 (звукоизоляция), правила KV Nordrhein и требования рабочих мест ASR A1.2."
          : isEn
          ? "DIN 18040-1 accessibility, DIN 4109 acoustic privacy, KV physician facility guidelines, and ASR workplace codes."
          : "DIN 18040-1 (Barrierefreiheit öffentlich zugänglicher Gebäude), DIN 4109 (Schallschutz im Hochbau), KV-Richtlinien und ASR.",
        legalTitle: isRu ? "Арендные модели" : isEn ? "Contractual Setup" : "Rechtskonforme Mietverträge",
        legalText: isRu
          ? "Долгосрочные договоры коммерческой аренды, гарантирующие стабильность медицинской практики и полную независимость врачебных решений."
          : isEn
          ? "Long-term commercial healthcare leases ensuring practice longevity while preserving total medical autonomy."
          : "Gewerbemietverträge mit planungssicheren Laufzeiten, die den Praxisinhabern Unabhängigkeit und langfristige wirtschaftliche Stabilität sichern.",
        ctaButtonText: isRu ? "Подобрать помещение для MVZ" : isEn ? "Find Practice Location" : "MVZ-Flächen anfragen",
      },
    },
    {
      id: "diagnostik-infra",
      badge: isRu ? "РАДИОЛОГИЯ И МРТ" : isEn ? "RADIOLOGY & MRI" : "HIGH-END RADIOLOGIE",
      image: "/images/areas/diagnostics.webp",
      iconType: "activity",
      title: isRu
        ? "Диагностические центры & Радиационная защита"
        : isEn
        ? "Diagnostic Centers & Radiation Shielding"
        : "Diagnostikzentren & Strahlenschutz-Infrastruktur",
      shortDesc: isRu
        ? "Конструктивные и статические решения для томографов 3T МРТ, КТ и рентгена: клетки Фарадея, свинцовая защита и гашение вибраций."
        : isEn
        ? "Structural and shielding engineering for 3T MRI, CT, and X-ray modalities: Faraday RF cages, lead lining, and vibration isolation."
        : "Bauliche und statische Sonderlösungen für 3T MRT, CT und digitales Röntgen inklusive Bleischirmung, HF-Kabinen und Quenchrohren.",
      modal: {
        title: isRu
          ? "Диагностические центры и инфраструктура лучевой диагностики"
          : isEn
          ? "Advanced Imaging Centers & Radiation Protection Infrastructure"
          : "Diagnostikzentren & Strahlenschutz-Infrastruktur (3T MRT, CT, Röntgen)",
        subtitle: isRu
          ? "Инженерные решения для тяжелого высокотехнологичного оборудования"
          : isEn
          ? "Heavy structural engineering and electromagnetic shielding for high-end radiology"
          : "Statik, HF-Abschirmung und baulicher Strahlenschutz für bildgebende Großgeräte",
        description: isRu
          ? "Размещение современного диагностического оборудования (МРТ 3 Тесла, низкодозные компьютерные томографы, цифровой рентген) требует уникальных строительных решений: виброизолированных плит весом до 15 тонн, медных клеток Фарадея для защиты от радиопомех, свинцовой защиты стен и труб экстренного сброса гелия (квенч-линии)."
          : isEn
          ? "Installing cutting-edge imaging modalities such as 3-Tesla MRI and multi-slice CT scanners involves complex architectural engineering: vibration-isolated foundations supporting up to 15 tons, copper Faraday RF shielding, lead radiation barriers, and exterior quench ventilation."
          : "Die Installation modernster bildgebender Großgeräte wie High-Field-MRT (3 Tesla) und Computertomographen erfordert bereits in der Rohbauphase höchste ingenieurtechnische Präzision. Wir realisieren schwingungsentkoppelte Fundamente, Faraday-Käfige zur Hochfrequenzabschirmung und bauliche Strahlenschutzmaßnahmen nach den strengsten Vorgaben des Strahlenschutzgesetzes (StrlSchG).",
        specificationsTitle: isRu ? "Инженерные компоненты" : isEn ? "Engineering Solutions" : "Technische Sonderanforderungen",
        specifications: isRu
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
          : [
              "Schwingungsentkoppelte Fundamente zur Vermeidung externer Erschütterungen auf MRT-Bilder",
              "Hochfrequenz-Schirmkabinen (Faraday-Käfige) aus Kupfer zur vollständigen HF-Dämpfung",
              "Magnetische Streufeldabschirmung zur Einhaltung der 5-Gauss-Sicherheitsgrenze",
              "Gasdichte Quenchrohrleitungen aus Edelstahl zur sicheren Heliumableitung ins Freie",
              "Baulicher Strahlenschutz mit Bleigleichwerten nach DIN 6812 für CT und Röntgenräume",
              "Redundante Kaltwasserversorgungen für die Heliumkompressoren und 100% USV-Pufferung",
            ],
        scopeTitle: isRu ? "Комплекс работ" : isEn ? "Turnkey Execution" : "Projektabwicklung",
        scopeItems: isRu
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
          : [
              "Standortvermessung: Umgebungs-Magnetfeldmessungen und Erschütterungsanalysen",
              "Abstimmung der Gebäudepläne mit Geräteherstellern (Siemens, GE, Philips)",
              "Strahlenschutzberechnungen durch zertifizierte Medizinphysik-Experten",
              "Schlüsselfertige Montage der HF-Kabine und Begleitung der TÜV-Bauabnahme",
              "Planung temporärer Einbringöffnungen in Fassade und Dach für Großmagneten",
            ],
        technicalTitle: isRu ? "Стандарты безопасности" : isEn ? "Safety Codes" : "Gesetzliche Vorgaben",
        technicalText: isRu
          ? "Strahlenschutzgesetz (StrlSchG), Strahlenschutzverordnung (StrlSchV) и стандарт DIN 6812."
          : isEn
          ? "German Radiation Protection Act (StrlSchG), Radiation Ordinance (StrlSchV), and DIN 6812."
          : "Strahlenschutzgesetz (StrlSchG), Strahlenschutzverordnung (StrlSchV) sowie DIN 6812 (Medizinische Röntgenanlagen).",
        legalTitle: isRu ? "Эксплуатация" : isEn ? "Operational Model" : "Betreibervereinbarung",
        legalText: isRu
          ? "NabiOta Real Estate сдает полностью подготовленные помещения с допусками, а оператором оборудования выступает NabiOta Diagnostics GmbH."
          : isEn
          ? "NabiOta Real Estate provides turnkey, pre-certified infrastructure leased to NabiOta Diagnostics GmbH."
          : "Die Bereitstellung der schlüsselfertigen Räume erfolgt im Rahmen langfristiger Mietverträge an die NabiOta Diagnostics GmbH oder externe radiologische Gemeinschaftspraxen.",
        ctaButtonText: isRu ? "Консультация по радиологии" : isEn ? "Inquire Radiology Facility" : "Diagnostikflächen anfragen",
      },
    },
    {
      id: "reha-therapie",
      badge: isRu ? "РЕАБИЛИТАЦИЯ И СПОРТ" : isEn ? "REHABILITATION" : "REHA & SPORTTHERAPIE",
      image: "/images/beratung/project-reha.webp",
      iconType: "heartpulse",
      title: isRu
        ? "Реабилитационные & Терапевтические центры"
        : isEn
        ? "Rehabilitation & Physical Therapy Centers"
        : "Rehabilitations- & Therapieeinrichtungen",
      shortDesc: isRu
        ? "Специализированные залы лечебной физкультуры, тренажерные парки (MTT), гидротерапевтические бассейны и кабинеты эрготерапии."
        : isEn
        ? "Specialized physical therapy suites, Medical Training Therapy (MTT) gym floors, hydrotherapy pools, and occupational rooms."
        : "Spezialflächen für Krankengymnastik, MTT-Geräteparks, Bewegungsbäder und barrierefreie Behandlungsräume.",
      modal: {
        title: isRu
          ? "Реабилитационные & Терапевтические центры"
          : isEn
          ? "Outpatient Rehabilitation & Therapy Infrastructure"
          : "Rehabilitations- & Therapieeinrichtungen (nach § 125 SGB V)",
        subtitle: isRu
          ? "Пространства для движения, восстановления сил и возвращения к активной жизни"
          : isEn
          ? "Specialized spaces engineered for functional movement, aquatic therapy, and restorative care"
          : "Funktionale Architektur für ganzheitliche Heilmitteltherapie und Mobilisation",
        description: isRu
          ? "Амбулаторная реабилитация требует баланса между медицинскими процедурными кабинетами, просторными тренировочными залами и зонами водной терапии. Мы создаем терапевтические пространства, строго соответствующие критериям допуска больничных касс (GKV) и пенсионного страхования (DRV)."
          : isEn
          ? "Outpatient rehabilitation centers combine private clinical therapy rooms with expansive training gym floors and aquatic hydrotherapy facilities. We engineer spaces meeting the exacting licensing specifications of German statutory insurers (GKV) and pension funds (DRV)."
          : "Ambulante Rehabilitationszentren verbinden physiotherapeutische Einzelbehandlung, Medizinische Trainingstherapie (MTT) und hydrotherapeutische Anwendungen. Wir planen Flächen, die den Anforderungen der gesetzlichen Krankenkassen (GKV-Spitzenverband) und der Deutschen Rentenversicherung (DRV) exakt entsprechen.",
        specificationsTitle: isRu ? "Оснащение и зоны" : isEn ? "Facility Scope" : "Raumprogramm & Bauanforderungen",
        specifications: isRu
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
          : [
              "Großzügige, stützenarme Trainingslandschaften mit punktelastischen Sportböden für MTT",
              "Hydrotherapeutische Therapiebecken mit Wassertemperaturen bis 32–34°C und Deckenliftern",
              "Akustisch gedämpfte Einzelbehandlungskabinen für Manuelle Therapie, Ergotherapie und Logopädie",
              "Großraumumkleiden mit rollstuhlgerechten Duschen, Spindsystemen und Pflege-WCs",
              "Spezielle Lüftungsanlagen mit Wärmerückgewinnung und Entfeuchtung für Nassbereiche (VDI 2089)",
              "Breite Verkehrswege und durchgehende Handläufe für gehbehinderte Patienten",
            ],
        scopeTitle: isRu ? "Девелопмент объекта" : isEn ? "Development Phase" : "Leistungen von NabiOta Real Estate",
        scopeItems: isRu
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
          : [
              "Konzeptentwicklung in enger Abstimmung mit den Therapeuten der NabiOta Reha",
              "Fachplanung der Schwimmbadtechnik, Wasseraufbereitung und Überlaufrinnen",
              "Trittschall- und Körperschallentkopplung der Trainingsflächen gegenüber Nachbarn",
              "Vorbereitung der Kassenzulassungsabnahme nach § 125 SGB V",
              "Nachhaltiges technisches Facility Management und energetische Optimierung",
            ],
        technicalTitle: isRu ? "Нормативы" : isEn ? "Codes & Guidelines" : "Standards",
        technicalText: isRu
          ? "Требования GKV-Spitzenverband к лечебным учреждениям, VDI 2089 (бассейны) и DIN 18040-1."
          : isEn
          ? "GKV outpatient rehabilitation guidelines, VDI 2089 (pool ventilation), and DIN 18040-1."
          : "GKV-Zulassungsempfehlungen für Heilmittelerbringer, VDI 2089 (Schwimmbäder) und DIN 18040-1.",
        legalTitle: isRu ? "Форма сотрудничества" : isEn ? "Leasing Structure" : "Betreiberpartnerschaft",
        legalText: isRu
          ? "Арендаторами выступают NabiOta Rehabilitation & Therapy GmbH либо партнерские реабилитационные клиники."
          : isEn
          ? "Facilities are leased to NabiOta Rehabilitation & Therapy GmbH or accredited partner therapy clinics."
          : "Die Vermietung erfolgt an die NabiOta Rehabilitation & Therapy GmbH oder kooperierende Reha-Betreiber.",
        ctaButtonText: isRu ? "Запросить проект реабилитации" : isEn ? "Inquire Rehab Project" : "Rehaflächen anfragen",
      },
    },
    {
      id: "pflege-wohnen",
      badge: isRu ? "УХОД И СЕНИОРЫ" : isEn ? "SENIOR LIVING" : "PFLEGE & SENIORENRESIDENZEN",
      image: "/images/beratung/project-pflege.webp",
      iconType: "heart",
      title: isRu
        ? "Дома ухода & Безбарьерные резиденции"
        : isEn
        ? "Nursing Homes & Barrier-Free Senior Living"
        : "Pflegeeinrichtungen & Barrierefreie Wohnformen",
      shortDesc: isRu
        ? "Жилые и патронажные комплексы по стандарту DIN 18040-2: формат семейных групп, сенсорные сады и уютная среда для пожилых."
        : isEn
        ? "Senior residential care complexes per DIN 18040-2: family-style care communities, memory gardens, and supportive elderly environments."
        : "Wohn- und Pflegeimmobilien nach DIN 18040-2 mit Hausgemeinschaftskonzepten, Demenzgärten und barrierefreien Appartements.",
      modal: {
        title: isRu
          ? "Дома ухода, дневные стационары и сервисное жилье для пожилых"
          : isEn
          ? "Nursing Homes, Day-Care Centers & Assisted Living Residences"
          : "Pflegeeinrichtungen, Tagespflegen & Servicewohnen (WTG-konform)",
        subtitle: isRu
          ? "Домашний уют, безопасность и функциональная патронажная инфраструктура"
          : isEn
          ? "Homelike warmth, safety, and specialized ergonomic infrastructure for seniors"
          : "Wohnliche Geborgenheit und funktionale Pflegeinfrastruktur im Alter",
        description: isRu
          ? "Современная архитектура для пожилых людей сочетает домашний уют с самыми строгими санитарно-гигиеническими нормами, защитой от падений и удобством для персонала. Мы проектируем резиденции для дневного пребывания, квартиры с уходом и стационарные дома престарелых по закону WTG NRW."
          : isEn
          ? "Modern architecture for senior living blends residential comfort with clinical infection prevention, fall prevention technologies, and ergonomic caregiver workspaces. We develop day-care hubs, assisted living communities, and specialized memory care facilities."
          : "Moderne Pflegearchitektur verbindet ein behagliches, familiäres Wohnambiente mit den hochkomplexen Anforderungen an Pflegehygiene, Brandschutz und Entlastung des Personals. Wir entwickeln Einrichtungen für solitäre Tagespflegen, ambulante Wohngemeinschaften und stationäre Pflege nach Landesheimgesetz.",
        specificationsTitle: isRu ? "Особенности планировки" : isEn ? "Design Elements" : "Architektur & Wohlfühlkonzepte",
        specifications: isRu
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
          : [
              "Barrierefreie Einzelzimmer mit eigenem rollstuhlgerechtem Bad nach DIN 18040-2 R",
              "Offene Wohn- und Essbereiche mit Wohnküchen für tagesstrukturierende Aktivitäten",
              "Geschützte Sinnesgärten und Rundlauf-Konzepte für Menschen mit Demenz",
              "Funktionale Pflegestützpunkte, Pflegearbeitsräume (unrein/rein) und Wäschedepots",
              "Automatische Lichtleitsysteme zur Sturzprophylaxe in der Nacht",
              "Vollständige WLAN- und Schwesternrufanlagenvernetzung nach DIN VDE 0834",
            ],
        scopeTitle: isRu ? "Объем реализации" : isEn ? "Project Scope" : "Leistungsumfang NabiOta Real Estate",
        scopeItems: isRu
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
          : [
              "Demografische Standortanalyse und Ermittlung des Pflegeplatzbedarfs",
              "WTG-konforme Entwurfs- und Genehmigungsplanung mit den Heimaufsichtsbehörden",
              "Einbindung öffentlicher Fördermittel und zinsgünstiger KfW-Kredite für nachhaltige Bauten",
              "Schlüsselfertige Erstellung inklusive fester Einbauten, Pflegebäder und Außenanlagen",
              "Kooperation mit der NabiOta HomeCare GmbH oder renommierten Wohlfahrtsverbänden",
            ],
        technicalTitle: isRu ? "Законодательство" : isEn ? "Governing Statutes" : "Heimrechtliche Vorgaben",
        technicalText: isRu
          ? "Wohn- und Teilhabegesetz (WTG NRW), DIN 18040-2 R (безбарьерность) и противопожарные нормы Sonderbau."
          : isEn
          ? "Regional Residential and Participation Act (WTG NRW), DIN 18040-2 R, and specialized healthcare fire codes."
          : "Wohn- und Teilhabegesetz (WTG NRW), Durchführungsverordnung (WTG DVO), DIN 18040-2 R und Sonderbauverordnung.",
        legalTitle: isRu ? "Инвестиционная модель" : isEn ? "Investment Structure" : "Pacht- & Betreibermodelle",
        legalText: isRu
          ? "Долгосрочные договоры аренды на 20–25 лет, обеспечивающие надежный социальный доход инвесторам и стабильную работу службы ухода."
          : isEn
          ? "Long-term institutional 20 to 25-year lease structures delivering dependable, socially responsible returns."
          : "Langfristige Pachtverträge (20 bis 25 Jahre) mit bonitätsstarken Betreibern sichern nachhaltigen Werterhalt.",
        ctaButtonText: isRu ? "Запросить проект дома ухода" : isEn ? "Inquire Senior Care Facility" : "Pflegeimmobilie anfragen",
      },
    },
    {
      id: "mitarbeiterwohnen",
      badge: isRu ? "КАМПУС И ЖИЛЬЕ" : isEn ? "CAMPUS & HOUSING" : "CAMPUS & MITARBEITERWOHNEN",
      image: "/images/beratung/project-building.webp",
      iconType: "home",
      title: isRu
        ? "Медицинский кампус & Жилье для медперсонала"
        : isEn
        ? "Healthcare Campus & Staff Housing"
        : "Campus-Infrastruktur & Mitarbeiterwohnen",
      shortDesc: isRu
        ? "Современные апартаменты и апарт-отели (Boardinghouses) для привлечения врачей и медсестер, фотовольтаика и инфраструктура для электромобилей."
        : isEn
        ? "Modern residential boardinghouses and apartments supporting healthcare staff onboarding, campus solar arrays, and EV charging hubs."
        : "Boardinghouses und Personalappartements zur nachhaltigen Integration von Fachkräften sowie campusweite Energielösungen.",
      modal: {
        title: isRu
          ? "Медицинский кампус, апарт-отели & Жилье для медперсонала"
          : isEn
          ? "Medical Campus Infrastructure & Healthcare Staff Residences"
          : "Gesundheitscampus, Boardinghouses & Mitarbeiterwohnen",
        subtitle: isRu
          ? "Создание комфортных условий для жизни, работы и интеграции специалистов"
          : isEn
          ? "Holistic campus ecosystems uniting clinical excellence, sustainability, and staff living"
          : "Ganzheitliche Standortentwicklung für Leben, Arbeiten und Heilen",
        description: isRu
          ? "В условиях острой конкуренции за врачей и квалифицированных медсестер наличие доступного качественного жилья рядом с местом работы — решающий фактор успеха. NabiOta Real Estate GmbH строит стильные апарт-отели и микро-квартиры для комфортной адаптации специалистов, привлекаемых через Medical Recruitment Services GmbH."
          : isEn
          ? "In the competitive landscape for certified physicians and international nursing talent, immediate access to quality housing near the hospital campus is an invaluable differentiator. NabiOta Real Estate develops boutique boardinghouses and serviced micro-apartments that make relocation and onboarding seamless."
          : "Im Wettbewerb um hochqualifizierte Ärzte und Pflegefachkräfte ist attraktiver Wohnraum direkt am Standort ein entscheidender Erfolgsfaktor. NabiOta Real Estate GmbH realisiert moderne Boardinghouses und Mitarbeiterwohnungen für die internationale Fachkräfteintegration der Medical Recruitment Services GmbH.",
        specificationsTitle: isRu ? "Инфраструктура кампуса" : isEn ? "Campus Amenities" : "Wohnkonzept & Campus-Infrastruktur",
        specifications: isRu
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
          : [
              "Voll möblierte Micro-Appartements mit integrierter Kitchenette und Highspeed-Internet",
              "Gemeinschaftsräume, Co-Working-Zonen und Waschsalons für das internationale Team",
              "Zentrale Campus-Infrastruktur mit Ärzte-Cafeteria, Konferenz- und Fortbildungsräumen",
              "Nachhaltige Energiekonzepte: Photovoltaik-Dachanlagen, Wärmepumpen und Geothermie",
              "Mobilitätsstationen mit E-Auto-Ladeinfrastruktur, Fahrradboxen und Anbindung an den ÖPNV",
              "Zentrales technisches Facility Management mit digitalem Ticket- und Wartungssystem",
            ],
        scopeTitle: isRu ? "Что входит в проект" : isEn ? "Turnkey Execution" : "Entwicklungs- und Bauleistungen",
        scopeItems: isRu
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
          : [
              "Masterplanung und städtebauliche Optimierung für medizinische Mischquartiere",
              "Planung nach höchsten energetischen Standards (KfW 40 mit QNG-Nachhaltigkeitssiegel)",
              "Schlüsselfertige Innenausstattung, Möblierung und digitale Zutrittskontrollsysteme",
              "Enge Verzahnung mit den Ankunftsplänen der NabiOta Medical Recruitment Services",
              "Digitales Bewirtschaftungskonzept mit Mieter-App und automatisiertem Submetering",
            ],
        technicalTitle: isRu ? "Энергоэффективность" : isEn ? "Energy Standards" : "Energiestandards & ESG",
        technicalText: isRu
          ? "Стандарты KfW 40, сертификат устойчивого строительства QNG и требования ESG."
          : isEn
          ? "German KfW 40 efficiency standards, QNG sustainability seal, and strict ESG compliance."
          : "KfW-Effizienzhaus-Standard 40, Qualitätssiegel Nachhaltiges Gebäude (QNG) und ESG-Konformität.",
        legalTitle: isRu ? "Управление жильем" : isEn ? "Housing Management" : "Mietrechtliche Gestaltung",
        legalText: isRu
          ? "Гибкие договоры аренды служебного жилья, снимающие бюрократическую нагрузку с новых сотрудников."
          : isEn
          ? "Flexible corporate lease structures designed to facilitate stress-free settling in for healthcare workers."
          : "Flexible Mitarbeiter-Mietverträge zur Erleichterung des Arbeitsbeginns in Deutschland unter Beachtung aller mietrechtlichen Schutzvorschriften.",
        ctaButtonText: isRu ? "Узнать о жилье на кампусе" : isEn ? "Inquire Campus Housing" : "Mitarbeiterwohnen anfragen",
      },
    },
  ];

  const t = {
    s1: {
      eyebrow: isRu ? "НАШИ КОНСАЛТИНГОВЫЕ УСЛУГИ" : isEn ? "OUR CONSULTING SERVICES" : "UNSERE BERATUNGSLEISTUNGEN",
      title: isRu
        ? "Комплексный консалтинг для устойчивых решений."
        : isEn
        ? "Holistic Consulting for Sustainable Solutions."
        : "Ganzheitliche Beratung für nachhaltige Lösungen.",
      desc: isRu
        ? "Мы анализируем, консультируем и разрабатываем вместе с вами перспективные концепции — индивидуально, практично и с четким фокусом на качестве, эффективности и человечности."
        : isEn
        ? "We analyze, advise, and develop future-proof concepts together with you — personalized, hands-on, and with a clear focus on quality, efficiency, and human-centric care."
        : "Wir analysieren, beraten und entwickeln gemeinsam mit Ihnen zukunftsfähige Konzepte – individuell, praxisnah und mit einem klaren Fokus auf Qualität, Effizienz und Menschlichkeit.",
      btn: isRu ? "Подробнее об услугах" : isEn ? "Explore Our Services" : "Mehr zu unseren Leistungen",
      cardTitle: isRu ? "Наш подход к консалтингу" : isEn ? "Our Consulting Approach" : "Unser Beratungsansatz",
      items: [
        {
          icon: Search,
          text: isRu ? "Анализ потребностей и оценка текущего состояния" : isEn ? "Needs analysis & current-state evaluation" : "Bedarfsanalyse und Ist-Stand-Bewertung",
        },
        {
          icon: Lightbulb,
          text: isRu ? "Разработка индивидуальных решений" : isEn ? "Development of tailored solution strategies" : "Entwicklung individueller Lösungsansätze",
        },
        {
          icon: Users,
          text: isRu ? "Сопровождение на всех этапах проекта" : isEn ? "End-to-end guidance across all project phases" : "Begleitung in allen Projektphasen",
        },
        {
          icon: Leaf,
          text: isRu ? "Устойчивые и долгосрочные результаты" : isEn ? "Sustainable, future-proof, long-term results" : "Nachhaltige und langfristige Ergebnisse",
        },
      ],
    },
    s2: {
      eyebrow: isRu ? "ДЕВЕЛОПМЕНТ ПРОЕКТОВ" : isEn ? "PROJECT DEVELOPMENT" : "PROJEKTENTWICKLUNG",
      title: isRu ? "От идеи к реализации." : isEn ? "From Concept to Completion." : "Von der Idee zur Umsetzung.",
      desc: isRu
        ? "Мы разрабатываем и реализуем проекты в сфере здравоохранения — от новых медицинских центров и клиник до расширения и реструктуризации существующих объектов. При этом мы сочетаем экономическую рентабельность с социальной ответственностью и высочайшим качеством."
        : isEn
        ? "We develop and implement healthcare infrastructure projects — whether new medical facilities, expansions, or restructuring programs. We combine economic viability with social responsibility and top-tier quality."
        : "Wir entwickeln und realisieren Projekte im Gesundheitswesen – ob neue Einrichtungen, Erweiterungen oder Umstrukturierungen. Dabei verbinden wir wirtschaftliche Tragfähigkeit mit sozialer Verantwortung und höchster Qualität.",
      btn: isRu ? "Ознакомиться с проектами" : isEn ? "Discover Our Projects" : "Unsere Projekte entdecken",
      stamp: isRu ? "Пространства здоровья будущего." : isEn ? "Sustainable Healthcare Spaces." : "Nachhaltige Gesundheitsräume.",
      features: [
        {
          icon: Building2,
          text: isRu ? "ТЭО и разработка концепций" : isEn ? "Feasibility studies & concept development" : "Machbarkeitsstudien und Konzeptentwicklung",
        },
        {
          icon: HardHat,
          text: isRu ? "Проектирование и реализация строительных проектов" : isEn ? "Planning & execution of capital construction" : "Planung und Umsetzung von Bau- und Investitionsprojekten",
        },
        {
          icon: Network,
          text: isRu ? "Координация участников и ведомств" : isEn ? "Coordination of all stakeholders & authorities" : "Koordination aller Beteiligten und Behörden",
        },
        {
          icon: ShieldCheck,
          text: isRu ? "Управление качеством и рисками" : isEn ? "Comprehensive quality & risk management" : "Qualitäts- und Risikomanagement",
        },
      ],
    },
    s3: {
      eyebrow: isRu ? "НАШ ПРОЦЕСС" : isEn ? "OUR PROCESS" : "UNSER PROZESS",
      title: isRu ? "5 шагов к успеху вашего проекта." : isEn ? "In 5 Steps to Project Success." : "In 5 Schritten zu Ihrem Projekterfolg.",
      desc: isRu
        ? "Прозрачные процессы, тесное взаимодействие и опытная команда экспертов — так мы надежно доводим ваш проект до цели."
        : isEn
        ? "Transparent workflows, close collaboration, and an experienced interdisciplinary team — ensuring your healthcare project reaches its goals safely."
        : "Transparente Abläufe, enge Zusammenarbeit und ein erfahrenes Team – so bringen wir Ihr Projekt sicher ans Ziel.",
      steps: [
        {
          num: "1",
          icon: MessageSquare,
          title: isRu ? "Первичная беседа и анализ" : isEn ? "Initial Consultation & Analysis" : "Erstgespräch & Analyse",
          desc: isRu
            ? "Мы внимательно изучаем исходную ситуацию, цели и требования."
            : isEn
            ? "We listen carefully, analyze your current situation, and define shared goals."
            : "Wir hören zu, analysieren Ihre Situation und definieren gemeinsam die Ziele.",
        },
        {
          num: "2",
          icon: Lightbulb,
          title: isRu ? "Концепция и планирование" : isEn ? "Concept & Planning" : "Konzept & Planung",
          desc: isRu
            ? "Разрабатываем индивидуальные решения и детальный план проекта."
            : isEn
            ? "We create tailored solutions and establish rigorous project blueprints."
            : "Wir entwickeln maßgeschneiderte Lösungen und erstellen eine fundierte Projektplanung.",
        },
        {
          num: "3",
          icon: Users,
          title: isRu ? "Реализация" : isEn ? "Execution & Coordination" : "Umsetzung",
          desc: isRu
            ? "Координируем всех подрядчиков и контролируем сроки."
            : isEn
            ? "We coordinate all parties involved and ensure efficient implementation."
            : "Wir koordinieren alle Beteiligten und sorgen für eine effiziente Realisierung.",
        },
        {
          num: "4",
          icon: CheckCircle2,
          title: isRu ? "Сопровождение и контроль" : isEn ? "Supervision & Quality Control" : "Begleitung & Kontrolle",
          desc: isRu
            ? "Держим на постоянном контроле расходы, график и качество."
            : isEn
            ? "We maintain rigorous oversight of costs, timelines, and construction quality."
            : "Wir behalten Kosten, Zeit und Qualität im Blick – für ein sicheres Ergebnis.",
        },
        {
          num: "5",
          icon: Flag,
          title: isRu ? "Успешный ввод и развитие" : isEn ? "Launch & Future Growth" : "Erfolg & Weiterentwicklung",
          desc: isRu
            ? "Сопровождаем ввод в эксплуатацию и поддерживаем развитие объекта."
            : isEn
            ? "We oversee commissioning and remain your trusted strategic partner."
            : "Wir begleiten die Inbetriebnahme und stehen Ihnen auch danach zur Seite.",
        },
      ],
    },
    s4: {
      eyebrow: isRu ? "NABIOTA REAL ESTATE GMBH" : isEn ? "NABIOTA REAL ESTATE GMBH" : "NABIOTA REAL ESTATE GMBH",
      title: isRu
        ? "Специализированная медицинская недвижимость под ключ"
        : isEn
        ? "Specialized Healthcare Real Estate Portfolio"
        : "Gesundheitsimmobilien & Spezialflächen der NabiOta Gruppe",
      desc: isRu
        ? "Ознакомьтесь с шестью направлениями девелопмента медицинской недвижимости: от клиник и операционных залов до центров лучевой диагностики, реабилитационных комплексов и жилья для персонала."
        : isEn
        ? "Explore the six core pillars of our healthcare real estate development: from surgical clinic buildings to diagnostic suites, rehabilitation campuses, and modern staff housing."
        : "Erkunden Sie die sechs tragenden Säulen unserer Immobilienentwicklung: Vom hochmodernen Klinikbau über strahlengeschützte Diagnostikzentren bis hin zu Pflegeimmobilien und campusweitem Mitarbeiterwohnen.",
      openModalBtn: isRu ? "Детали и концепция" : isEn ? "Details & Room Program" : "Details & Raumkonzept",
    },
    s5: {
      eyebrow: isRu ? "ОТЗЫВЫ ПАРТНЕРОВ" : isEn ? "PARTNER VOICES" : "STIMMEN UNSERER PARTNER",
      title: isRu ? "Доверие создает прогресс." : isEn ? "Trust Drives Progress." : "Vertrauen schafft Fortschritt.",
      desc: isRu
        ? "Что говорят наши партнеры и заказчики о совместной работе над проектами развития инфраструктуры."
        : isEn
        ? "What healthcare leaders and executives say about partnering with us on consulting and development projects."
        : "Das sagen unsere Kundinnen und Kunden über die Zusammenarbeit in Beratungs- und Projektentwicklungsprojekten.",
      btn: isRu ? "Связаться с нами" : isEn ? "Contact Our Team" : "Kontakt ansehen",
      testimonials: [
        {
          name: "Dr. Thomas Berger",
          role: isRu ? "Управляющий директор, MVZ" : isEn ? "Managing Director, Medical Center" : "Geschäftsführer, MVZ",
          avatar: "/images/beratung/avatar-berger.webp",
          quote: isRu
            ? "«Сотрудничество с самого начала было высокопрофессиональным, ориентированным на решение задач и невероятно комфортным. Нас впечатлил баланс глубоких экспертных знаний и человеческого подхода.»"
            : isEn
            ? "“The collaboration was professional, solution-oriented, and remarkably pleasant right from day one. We were particularly impressed by the blend of deep technical expertise and genuine humanity.”"
            : "„Die Zusammenarbeit war von Anfang an professionell, lösungsorientiert und äußerst angenehm. Besonders beeindruckt hat uns die Kombination aus Fachwissen und Menschlichkeit.“",
        },
        {
          name: "Sabine Keller",
          role: isRu ? "Руководитель строительной инфраструктуры" : isEn ? "Head of Construction & Infrastructure" : "Leiterin Bau & Infrastruktur",
          avatar: "/images/beratung/avatar-keller.webp",
          quote: isRu
            ? "«Благодаря структурированному подходу и постоянному сопровождению мы смогли завершить проект точно в срок и строго в рамках утвержденного бюджета.»"
            : isEn
            ? "“Thanks to their structured methodology and continuous oversight, we were able to deliver our healthcare facility strictly on schedule and within budget.”"
            : "„Dank der strukturierten Vorgehensweise und der engen Begleitung konnten wir unser Projekt termingerecht und budgetgerecht realisieren.“",
        },
        {
          name: "Prof. Dr. Markus Weber",
          role: isRu ? "Главный врач медицинского центра" : isEn ? "Medical Director, Healthcare Campus" : "Leitung Gesundheitszentrum",
          avatar: "/images/beratung/avatar-weber.webp",
          quote: isRu
            ? "«Компетентность, вовлеченность и глубокое понимание клинических потребностей — именно это делает NABIOTA по-настоящему ценным партнером.»"
            : isEn
            ? "“Uncompromising competence, commitment, and a deep understanding of our clinical workflows — that is what makes NABIOTA an invaluable partner.”"
            : "„Kompetenz, Engagement und ein tiefes Verständnis für unsere Bedürfnisse – das macht NABIOTA zu einem wertvollen Partner.“",
        },
      ],
    },
    s6: {
      eyebrow: isRu ? "КОНТАКТ" : isEn ? "CONTACT" : "KONTAKT",
      title: isRu ? "Будем рады вашему обращению." : isEn ? "We Look Forward to Your Inquiry." : "Wir freuen uns auf Ihre Anfrage.",
      desc: isRu
        ? "Будь то первая идея или конкретный проект расширения — наша команда с удовольствием проконсультирует вас лично и без обязательств."
        : isEn
        ? "Whether an initial concept or an imminent development project — our team will be delighted to advise you personally."
        : "Ob erste Idee oder konkretes Vorhaben – unser Team berät Sie gerne persönlich und unverbindlich zu Ihren Möglichkeiten.",
      btn: isRu ? "Связаться с нами" : isEn ? "Contact Us" : "Kontakt aufnehmen",
      stamp1: isRu ? "Давайте поговорим" : isEn ? "Let's talk about" : "Lassen Sie uns",
      stamp2: isRu ? "о вашем проекте." : isEn ? "your project." : "über Ihr Projekt sprechen.",
      phone: "+49 2161 4794000",
      email: "info@nabiota-health-group.de",
      location: isRu ? "Мёнхенгладбах, Германия" : isEn ? "Mönchengladbach, Germany" : "Mönchengladbach, Deutschland",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-forest-950 font-sans selection:bg-gold-500/20">
      {/* ── 1. GLOBAL SITE NAVIGATION HEADER ── */}
      <Header currentLocale={locale} />

      {/* ── 2. SITE STANDARD PAGE HERO ── */}
      <PageHero
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
                <span className="text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                  {t.s1.eyebrow}
                </span>

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
              <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.24em] text-[#C5A56A] block font-sans">
                {t.s2.eyebrow}
              </span>

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
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans mb-2">
                {t.s3.eyebrow}
              </span>
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
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-3 font-sans">
                {t.s4.eyebrow}
              </span>
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
                  {/* Photo with pill badge at top left */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#07150C]">
                    <Image
                      src={domain.image}
                      alt={domain.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-[#0C2917] text-white px-3.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-xs border border-white/10 z-10">
                      {domain.badge}
                    </div>
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
                <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#C5A56A] block font-sans">
                  {t.s5.eyebrow}
                </span>

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

              {/* 3 Compact Testimonial Cards */}
              <div className="w-full lg:w-[65%] xl:w-[64%] grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                {t.s5.testimonials.map((testi, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-4.5 rounded-2xl bg-[#0F2618]/90 border border-[#D5B878]/35 backdrop-blur-md flex flex-col justify-between hover:border-[#D5B878] transition-all duration-300 shadow-md group"
                  >
                    <p className="font-serif italic text-white/95 text-xs sm:text-[12.5px] leading-relaxed mb-3 group-hover:text-white transition-colors">
                      {testi.quote}
                    </p>

                    <div className="flex items-center gap-2.5 pt-2 border-t border-white/10">
                      <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#D5B878]/70 shrink-0">
                        <Image
                          src={testi.avatar}
                          alt={testi.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-serif text-xs font-bold text-white leading-tight truncate">
                          {testi.name}
                        </h4>
                        <p className="text-[10px] text-[#A6BAAD] truncate mt-0.5">
                          {testi.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: BOTTOM CONTACT BANNER                                          */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#FAF9F5] border-t border-[#EAE3D5] relative overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row items-stretch">
            {/* Left Photo */}
            <div className="w-full lg:w-[48%] xl:w-[46%] relative min-h-[300px] sm:min-h-[360px] lg:min-h-[440px] shrink-0 overflow-hidden">
              <Image
                src="/images/beratung/cta-desk-clean.webp"
                alt="Consulting Desk"
                fill
                className="object-cover object-left"
              />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-36 xl:w-52 bg-gradient-to-r from-transparent via-[#FAF9F5]/70 to-[#FAF9F5] pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent pointer-events-none z-10" />

              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-white/85 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-md border border-white/80 rotate-[-2deg] flex flex-col items-center">
                <p className="font-serif italic text-xs sm:text-sm font-semibold text-[#0E281C] text-center leading-tight">
                  {t.s6.stamp1}
                  <br />
                  {t.s6.stamp2}
                </p>
                <Heart className="w-3.5 h-3.5 text-[#0E281C] fill-[#0E281C]/20 mt-1" />
              </div>
            </div>

            {/* Right: Content & Contact Details */}
            <div className="w-full lg:w-[52%] xl:w-[54%] py-10 sm:py-12 lg:py-14 px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col justify-center">
              <div className="max-w-xl space-y-4 sm:space-y-5">
                <span className="text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                  {t.s6.eyebrow}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] text-[#0F2A1D] font-normal leading-[1.18]">
                  {t.s6.title}
                </h2>

                <p className="text-xs sm:text-[13px] md:text-sm text-[#4A5D52] leading-relaxed">
                  {t.s6.desc}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#0D2619] hover:bg-[#163D29] text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-md group"
                  >
                    <span>{t.s6.btn}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="pt-6 border-t border-[#DECDB5]/60 flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#1B3A29] font-medium">
                  <a
                    href={`tel:${t.s6.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 hover:text-[#0D2619] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#2D5A3E]" />
                    <span>{t.s6.phone}</span>
                  </a>

                  <a
                    href={`mailto:${t.s6.email}`}
                    className="flex items-center gap-2 hover:text-[#0D2619] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#2D5A3E]" />
                    <span>{t.s6.email}</span>
                  </a>

                  <div className="flex items-center gap-2 text-[#2C4C39]">
                    <MapPin className="w-4 h-4 text-[#2D5A3E]" />
                    <span>{t.s6.location}</span>
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
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border border-[#E8DEC8] shadow-2xl p-6 sm:p-8 md:p-10 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDomain(null)}
                aria-label="Modal schließen"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 border border-[#DECDB5] flex items-center justify-center text-[#1C261E] hover:bg-[#ECCF93]/30 transition-colors z-20 shadow-xs"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">
                <div className="inline-block px-3 py-1 rounded-full bg-[#C5A56A]/15 border border-[#C5A56A]/30 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#8D6B27] uppercase mb-2">
                  {selectedDomain.badge}
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 leading-tight">
                  {selectedDomain.modal.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#8D6B27] font-medium mt-1">
                  {selectedDomain.modal.subtitle}
                </p>
              </div>

              {/* Hero Image in Modal */}
              <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden mb-6 shadow-inner border border-[#E8DEC8]">
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
                  {isRu ? "Закрыть" : isEn ? "Close" : "Schließen"}
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
