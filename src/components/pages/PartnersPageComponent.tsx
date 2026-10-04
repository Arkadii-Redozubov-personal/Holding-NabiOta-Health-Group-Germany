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
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";

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

  const heroData = {
    title: isRu
      ? "Партнерство и инвестиции"
      : isEn
      ? "Partners & Strategic Alliances"
      : "Partner & Strategische Kooperationen",
    subtitle: isRu
      ? "Надежные модели сотрудничества для врачей, клиник и инвесторов"
      : isEn
      ? "Sustainable Value Creation for Physicians, Clinics, and Healthcare Investors"
      : "Gemeinsam Werte schaffen für das Gesundheitswesen von morgen",
    eyebrow: isRu ? "ПАРТНЕРСКАЯ СЕТЬ" : isEn ? "PARTNERSHIP ECOSYSTEM" : "PARTNER & INVESTOREN",
    desc: isRu
      ? "Холдинг NabiOta® объединяет медицинское превосходство, высокотехнологичную инфраструктуру и инвестиционную надежность. Мы предлагаем врачам, клиникам, муниципалитетам и инвесторам прозрачные юридические модели сотрудничества на равных."
      : isEn
      ? "The NabiOta® Health Group unites medical excellence, advanced clinical infrastructure, and financial resilience. We offer physicians, hospitals, municipalities, and institutional investors transparent, legally robust collaboration models."
      : "Die NabiOta® Health Group Germany GmbH verbindet ärztliche Spitzenmedizin, hochmoderne Infrastruktur und unternehmerische Verlässlichkeit. Wir bieten niedergelassenen Ärzten, Krankenhäusern, Kommunen und institutionellen Partnern rechtssichere Kooperationsmodelle auf Augenhöhe.",
  };

  const heroBadges = [
    {
      icon: <Handshake className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Партнерство" : isEn ? "Reliable" : "Verlässliche",
      sub: isRu ? "на равных" : isEn ? "Partnership" : "Partnerschaft",
    },
    {
      icon: <Scale className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Закон § 95" : isEn ? "Regulatory" : "Rechtssicher",
      sub: isRu ? "SGB V & GewO" : isEn ? "SGB V Compliant" : "nach SGB V",
    },
    {
      icon: <Target className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Устойчивые" : isEn ? "Sustainable" : "Langfristige",
      sub: isRu ? "синергии" : isEn ? "Synergies" : "Synergien",
    },
  ];

  const pillars: PartnershipPillar[] = [
    {
      id: "fachaerzte-nachfolge",
      tag: isRu ? "ДЛЯ ВРАЧЕЙ & ПРАКСИСОВ" : isEn ? "PHYSICIANS & PRACTICES" : "FÜR FACHÄRZTE & PRAXEN",
      image: "/images/areas/medical-departments.webp",
      iconType: "doctor",
      title: isRu
        ? "Преемственность праксисов & Интеграция в MVZ (§ 95 SGB V)"
        : isEn
        ? "Practice Succession & MVZ Integration (§ 95 SGB V)"
        : "Praxisnachfolge & MVZ-Integration (§ 95 SGB V)",
      shortDesc: isRu
        ? "Структурированная передача врачебной практики, сохранение автономии, освобождение от бюрократии и доступ к передовым технологиям."
        : isEn
        ? "Structured practice transition, guaranteed medical autonomy, relief from administration, and access to state-of-the-art facilities."
        : "Rechtssichere Praxisabgabe, volle ärztliche Weisungsfreiheit, Entlastung von bürokratischen Pflichten und Zugang zu moderner Medizintechnik.",
      modal: {
        title: isRu
          ? "Преемственность праксисов & Вхождение в структуру MVZ (§ 95 SGB V)"
          : isEn
          ? "Practice Succession & MVZ Integration Framework (§ 95 SGB V)"
          : "Praxisnachfolge & MVZ-Integration (§ 95 SGB V)",
        subtitle: isRu
          ? "Партнерство для практикующих врачей: справедливая оценка стоимости, сохранение команды и фокус на медицине"
          : isEn
          ? "Structured succession for established practitioners: fair valuation, team continuity, and pure medical focus"
          : "Strukturierte Übergangskonzepte für niedergelassene Haus- und Fachärzte ohne bürokratischen Ballast",
        description: isRu
          ? "Холдинг NabiOta® предлагает опытным и молодым врачам безопасную модель интеграции. При выходе на пенсию или желании избавиться от административного бремени вы можете передать практику в лицензированный центр MVZ холдинга. Доктор Рахимов-Фишер, как лицензированный врач, обеспечивает строгое соблюдение врачебных прав, а управляющая компания берет на себя бухгалтерию, IT, биллинг и юридические вопросы."
          : isEn
          ? "The NabiOta® Group provides a reliable pathway for practicing physicians looking for succession planning or administrative relief. Practices can transition smoothly into our licensed MVZ structures. With physician ownership led by Dr. Fischer-Rahimov, professional autonomy is strictly preserved while centralized holding services manage IT, accounting, billing, and regulatory compliance."
          : "Die NabiOta-Gruppe bietet niedergelassenen Allgemeinmedizinern und Fachärzten maßgeschneiderte Lösungen für die Praxisnachfolge und den Einstieg in moderne MVZ-Strukturen. Unter der ärztlichen Trägerschaft von Dr. Fischer-Rahimov bleibt die volle medizinische Therapiefreiheit gewahrt. Die Holding entlastet Sie und Ihr Team vollständig von Verwaltung, KV-Abrechnung, Personalmanagement und IT-Infrastruktur.",
        specificationsTitle: isRu ? "Преимущества для врача" : isEn ? "Physician Advantages" : "Vorteile für Praxisinhaber",
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
          : [
              "Transparente und marktgerechte Bewertung des Praxiswertes und der KV-Zulassung (Kassensitz)",
              "Vollständige Übernahmegarantie für eingespielte Praxismitarbeiterinnen (MFA)",
              "Flexible Arbeitszeitmodelle: Weiterbeschäftigung als ärztlicher Leiter oder im Angestelltenverhältnis",
              "Vollständige Entlastung von Bürokratie, Abrechnungsprüfungen, IT-Pflege und Arbeitgeberrisiken",
              "Unmittelbarer Zugriff auf Hochleistungsdiagnostik (3T MRT, Niedrigdosis-CT) und Reha-Zentren",
              "Praxisräumlichkeiten nach modernsten ergonomischen und baulichen Standards",
            ],
        scopeTitle: isRu ? "Процесс передачи практики" : isEn ? "Succession Pathway" : "Ablauf der Praxisabgabe",
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
          : [
              "Abschluss einer Vertraulichkeitsvereinbarung (NDA) und unverbindliches Erstgespräch",
              "Ermittlung des Praxiswertes nach anerkannten Richtlinien der Bundesärztekammer (BÄK)",
              "Rechtssichere Ausarbeitung der Übernahmeverträge und Begleitung des KV-Zulassungsverfahrens",
              "Zwei-Schrank-Modell zur datenschutzkonformen Übergabe der Patientenkartei (§ 203 StGB)",
              "Reibungsloser Übergang und Integration in die zentrale Holding-Infrastruktur",
            ],
        technicalTitle: isRu ? "Правовая гарантия" : isEn ? "Statutory Compliance" : "Rechtliche Sicherheit",
        technicalText: isRu
          ? "Все сделки по слиянию и передаче практик осуществляются в строгом соответствии с § 95 SGB V, Федеральным врачебным положением (BÄO) и профессиональным кодексом палаты врачей Северного Рейна (ÄkNo)."
          : isEn
          ? "All practice integration transactions adhere strictly to § 95 SGB V (Statutory Health Insurance Code), the Federal Medical Code (BÄO), and North Rhine Medical Chamber regulations."
          : "Die Übernahme und MVZ-Eingliederung erfolgt streng nach den Vorgaben des § 95 SGB V, der Bundesärzteordnung (BÄO) sowie den berufsrechtlichen Statuten der Ärztekammer Nordrhein.",
        ctaButtonText: isRu ? "Запросить конфиденциальный диалог" : isEn ? "Request Confidential Dialogue" : "Vertrauliches Erstgespräch vereinbaren",
      },
    },
    {
      id: "kliniken-krankenhaeuser",
      tag: isRu ? "ДЛЯ КЛИНИК & СТАЦИОНАРОВ" : isEn ? "HOSPITALS & CLINICS" : "FÜR KLINIKEN & HOSPITAL-NETZWERKE",
      image: "/images/partners/atrium.webp",
      iconType: "hospital",
      title: isRu
        ? "Межсекторальное партнерство с клиниками (§ 115b SGB V / AOP)"
        : isEn
        ? "Cross-Sector Hospital Partnerships (§ 115b SGB V / AOP)"
        : "Sektorenübergreifende Klinikallianzen (§ 115b SGB V / AOP)",
      shortDesc: isRu
        ? "Разгрузка стационарных отделений: амбулаторные операции, непрерывная ранняя реабилитация и патронажный уход на дому."
        : isEn
        ? "Inpatient relief: outpatient surgical suites, continuous rehabilitation transitions, and home care discharge pathways."
        : "Entlastung von Bettenstationen durch ambulantes Operieren, lückenlose ambulante Reha-Ketten und HomeCare-Überleitung.",
      modal: {
        title: isRu
          ? "Межсекторальное партнерство со стационарными клиниками"
          : isEn
          ? "Cross-Sector Clinical Alliances for Hospitals"
          : "Sektorenübergreifende Kooperationen für Krankenhäuser & Kliniken",
        subtitle: isRu
          ? "Реализация реформы стационаров: амбулаторизация (§ 115b SGB V), до- и послебольничная реабилитация"
          : isEn
          ? "Adapting to hospital reforms: outpatient surgery expansion, pre/post-acute rehab and discharge care"
          : "Ambulantisierung nach § 115b SGB V, poststationäre Versorgung und lückenloses Entlassmanagement",
        description: isRu
          ? "В условиях масштабной реформы больничной системы Германии клиникам необходимы надежные амбулаторные партнеры. Холдинг NabiOta® выступает стратегическим интегратором: мы принимаем пациентов на амбулаторные операции (AOP), организуем курсы ранней физиотерапии в лечебном бассейне 32°C и обеспечиваем профессиональный уход на дому (HomeCare GmbH) сразу после выписки."
          : isEn
          ? "In the wake of Germany's hospital reform, acute care hospitals require certified outpatient integration partners. The NabiOta® Group acts as a seamless extension: managing outpatient surgeries in cleanroom theaters (DIN 1946-4), initiating targeted physical rehabilitation with 32°C aquatic therapy, and deploying specialized home care nurses upon discharge."
          : "Die Krankenhausreform erfordert eine enge Verzahnung zwischen stationärem und ambulantem Sektor. Als integrierter Gesundheitsverbund entlastet NabiOta Partnerkliniken: Wir übernehmen ambulante Operationen nach § 115b SGB V in modernsten Reinraum-OPs, sichern eine unmittelbare ambulante Anschlussrehabilitation (AHB) und garantieren ein lückenloses Entlassmanagement über unseren HomeCare-Pflegedienst.",
        specificationsTitle: isRu ? "Форматы сотрудничества" : isEn ? "Cooperation Domains" : "Kooperationsfelder mit Kliniken",
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
          : [
              "Verlagerung ambulanter Eingriffe in moderne Reinraum-OP-Zentren nach § 115b SGB V",
              "Nahtlose Übernahme postoperativer Patienten in die ambulante Rehabilitation & Physiotherapie",
              "Fachgerechte häusliche Krankenpflege und ICW-Wundversorgung durch NabiOta HomeCare",
              "Krankenhausversorgung mit Arzneimitteln und Zytostatika-Herstellung (§ 14 ApoG)",
              "Teleradiologische Befundungsunterstützung und Kapazitätsübernahme bei 3T MRT und CT",
              "Flexible Personalgestellung ärztlicher und pflegerischer Fachkräfte in Engpasssituationen",
            ],
        scopeTitle: isRu ? "Экономический эффект" : isEn ? "Clinical & Economic Impact" : "Klinische & ökonomische Vorteile",
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
          : [
              "Spürbare Verweildauerverkürzung auf Bettenstationen bei durchgängiger Versorgungsqualität",
              "Vermeidung von MD-Prüfungsabschlägen durch sachgerechte Ambulantisierung",
              "Höchste Patientenzufriedenheit durch einheitliche Ansprechpartner vor und nach dem Eingriff",
              "Fokussierung der internen Klinik-OP-Kapazitäten auf hochkomplexe stationäre Fälle",
              "Teilnahme an Selektivverträgen und integrierter Versorgung nach § 140a SGB V",
            ],
        technicalTitle: isRu ? "Нормативная база" : isEn ? "Legal Framework" : "Rechtsgrundlagen",
        technicalText: isRu
          ? "Сотрудничество базируется на нормах § 115b SGB V (амбулаторные операции), § 39 Abs. 1a SGB V (менеджмент выписки) и законе о реформе стационаров (Krankenhausversorgungsverbesserungsgesetz - KHVVG)."
          : isEn
          ? "Clinical partnerships operate under § 115b SGB V (Outpatient surgery), § 39(1a) SGB V (Discharge management), and the Hospital Care Improvement Act (KHVVG)."
          : "Die Zusammenarbeit stützt sich auf § 115b SGB V (AOP-Vertrag), § 39 Abs. 1a SGB V (Entlassmanagement) sowie die Leitplanken des Krankenhausversorgungsverbesserungsgesetzes (KHVVG).",
        ctaButtonText: isRu ? "Обсудить клиническое партнерство" : isEn ? "Inquire Hospital Partnership" : "Klinikkooperation anfragen",
      },
    },
    {
      id: "investoren-capital",
      tag: isRu ? "ДЛЯ ИНВЕСТОРОВ & FAMILY OFFICES" : isEn ? "HEALTHCARE INVESTORS" : "FÜR INVESTOREN & FAMILY OFFICES",
      image: "/images/beratung/project-mvz.webp",
      iconType: "investor",
      title: isRu
        ? "Инвестиции в медицинскую недвижимость & 2-фазная модель"
        : isEn
        ? "Healthcare Real Estate Investments & 2-Phase Equity Model"
        : "Gesundheitsimmobilien & 2-Phasen-Beteiligungsmodell",
      shortDesc: isRu
        ? "Стабильные инвестиции в специализированную недвижимость здравоохранения: долгосрочные договоры аренды, стандарты ESG и защита капитала."
        : isEn
        ? "Resilient healthcare real estate investments: long-term commercial leases, ESG compliance, and structural capital preservation."
        : "Kauf und Entwicklung hochmoderner Gesundheitsimmobilien, langfristige Gewerbemietverträge, ESG-Standards und solide Renditen.",
      modal: {
        title: isRu
          ? "Инвестиции в медицинскую недвижимость & 2-фазная модель холдинга"
          : isEn
          ? "Healthcare Real Estate Investment & 2-Phase Holding Model"
          : "Gesundheitsimmobilien & 2-Phasen-Beteiligungsmodell",
        subtitle: isRu
          ? "Прозрачное разделение недвижимости и медицинской деятельности с защитой прав инвесторов"
          : isEn
          ? "Clear structural separation between physical real estate assets and medical operations"
          : "Rechtssichere Entflechtung von Immobilieneigentum und ärztlicher Leistungserbringung",
        description: isRu
          ? "Рынок здравоохранения Германии демонстрирует высокую устойчивость к кризисам и инфляции. Холдинг NabiOta® (HRB 16787, уставный капитал 50.000 EUR) предлагает институциональным инвесторам и Family Offices участие в девелопменте медицинских центров, операционных блоков и объектов персонала через NabiOta Real Estate GmbH с долгосрочными индексированными договорами аренды (15–20 лет)."
          : isEn
          ? "German healthcare real estate offers defensive growth resilient to macroeconomic turbulence. NabiOta® Health Group Germany GmbH (HRB 16787, EUR 50,000 capital) invites institutional partners to co-invest in ambulatory surgery centers, medical centers, and healthcare quarters via NabiOta Real Estate GmbH, backed by indexed long-term leases (15–20 years)."
          : "Der Gesundheitssektor ist eine der krisenresistentesten Anlageklassen Europas. Über die NabiOta Real Estate GmbH investieren Partner in erstklassige Gesundheitszentren, ambulante OP-Kliniken und Ärztehäuser. Langfristige, indexierte Gewerbemietverträge (15 bis 20 Jahre) mit bonitätsstarken medizinischen Betreibergesellschaften garantieren planbare Cashflows und Werterhalt.",
        specificationsTitle: isRu ? "Параметры инвестиций" : isEn ? "Investment Metrics" : "Investitionsprofil & Parameter",
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
          : [
              "Fokus auf Ärztehäuser, ambulante OP-Zentren, diagnostische Institute und Reha-Kliniken",
              "Langfristige, indexierte Mietverträge (Triple-Net / Double-Net) mit 15 bis 20 Jahren Laufzeit",
              "Erfüllung anspruchsvoller ESG-Nachhaltigkeitskriterien und KfW-40-Effizienzstandards",
              "Defensive, konjunkturunabhängige Erträge durch demografisch gesicherte Nachfrage",
              "Rechtssichere Entflechtung zwischen Immobilienträger und ärztlicher MVZ-Gesellschaft",
              "Zentrales technisches und medizintechnisches Gebäudemanagement durch die Holding",
            ],
        scopeTitle: isRu ? "Фазы масштабирования холдинга" : isEn ? "Holding Scaling Architecture" : "Phasenstruktur des Holdings",
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
          : [
              "Phase 1: Gründung der MVZ-Betreibergesellschaften auf Basis des ärztlichen Privilegs nach § 95 SGB V",
              "Holding erbringt zentrale Management-, IT-, Einkaufs- und Abrechnungsdienstleistungen",
              "Phase 2: Aufbau der Krankenhausträgergesellschaft (NabiOta Clinics Germany GmbH nach § 30 GewO)",
              "Mit Erhalt der Krankenhauskonzession entsteht die direkte Gründungs- und Erwerbsberechtigung für MVZ",
              "Skalierbare Plattform für den weiteren regionalen Rollout in Nordrhein-Westfalen",
            ],
        technicalTitle: isRu ? "Корпоративные реквизиты" : isEn ? "Corporate Registry" : "Register- & Gesellschaftsdaten",
        technicalText: isRu
          ? "NabiOta® Health Group Germany GmbH зарегистрирована в торговом реестре участкового суда Мёнхенгладбаха (HRB 16787) с уставным капиталом 50.000 EUR. Юридический адрес: Aachener Straße 114, 41061 Mönchengladbach."
          : isEn
          ? "NabiOta® Health Group Germany GmbH is registered with the commercial register of Amtsgericht Mönchengladbach (HRB 16787) with a share capital of EUR 50,000. Headquarters: Aachener Straße 114, 41061 Mönchengladbach."
          : "NabiOta® Health Group Germany GmbH, HRB 16787 beim Amtsgericht Mönchengladbach. Stammkapital: 50.000 EUR. Geschäftsanschrift: Aachener Straße 114, 41061 Mönchengladbach.",
        ctaButtonText: isRu ? "Запросить инвестиционный меморандум" : isEn ? "Request Investment Briefing" : "Investment-Exposé anfordern",
      },
    },
    {
      id: "kommunen-landkreise",
      tag: isRu ? "ДЛЯ МУНИЦИПАЛИТЕТОВ & KV" : isEn ? "MUNICIPALITIES & HEALTH BOARDS" : "FÜR KOMMUNEN & LANDKREISE",
      image: "/images/areas/consulting.webp",
      iconType: "municipality",
      title: isRu
        ? "Обеспечение региональной медицинской инфраструктуры (IGZ)"
        : isEn
        ? "Regional Healthcare Infrastructure & Integrated Care (IGZ)"
        : "Regionale Grundversorgung & Gesundheitszentren (IGZ)",
      shortDesc: isRu
        ? "Создание междисциплинарных центров здоровья в малых и средних городах, устранение дефицита врачей и безбарьерная среда."
        : isEn
        ? "Establishing integrated healthcare centers in regional municipalities, closing physician deficits, and barrier-free care."
        : "Schaffung integrierter Gesundheitszentren in Städten und Landkreisen, Behebung ärztlicher Unterversorgung und Barrierefreiheit.",
      modal: {
        title: isRu
          ? "Обеспечение региональной медицинской помощи & Центры IGZ"
          : isEn
          ? "Regional Healthcare Security & Integrated Medical Centers"
          : "Kommunale Versorgungsinitiativen & Integrierte Gesundheitszentren (IGZ)",
        subtitle: isRu
          ? "Партнерство с городами, бургомистрами и KV для сохранения доступной медицины в регионах"
          : isEn
          ? "Public-private partnerships with cities and regional health authorities to secure clinical coverage"
          : "Zusammenarbeit mit Städten, Landkreisen und Kassenärztlichen Vereinigungen zur Sicherung der Grundversorgung",
        description: isRu
          ? "Многие регионы сталкиваются с дефицитом врачей первичного звена и закрытием локальных практик. Холдинг NabiOta® сотрудничает с муниципалитетами и окружными властями для создания современных междисциплинарных медицинских центров (IGZ). Мы объединяем врачей общей практики, кардиологов, хирургов, диагностику, физиотерапию и аптеку в едином многофункциональном квартале."
          : isEn
          ? "Demographic shifts and physician retirements pose acute challenges to regional healthcare delivery. NabiOta® partners with municipal administrations and health boards to plan and operate Integrated Healthcare Centers (IGZ). Under one accessible roof, we co-locate primary care doctors, diagnostic radiology, rehabilitation facilities, and home care coordination."
          : "Die drohende Unterversorgung im ländlichen und suburbanen Raum erfordert neue, kooperative Lösungsmodelle. Die NabiOta-Gruppe unterstützt Kommunen, Landkreise und Wirtschaftsförderungen bei der Konzeption und Realisierung Integrierter Gesundheitszentren (IGZ). Wir bündeln haus- und fachärztliche Versorgung, Diagnostik, Therapie und Pflege unter einem Dach.",
        specificationsTitle: isRu ? "Муниципальные решения" : isEn ? "Municipal Solutions" : "Lösungsbausteine für Kommunen",
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
          : [
              "Bedarfs- und Versorgungsanalysen in enger Abstimmung mit den Bedarfsplänen der KV",
              "Gezielte Ansiedlung und Rekrutierung qualifizierter Ärzte für unterversorgte Planungsbereiche",
              "Schlüsselfertige Errichtung barrierefreier Ärzte- und Gesundheitszentren (DIN 18040-1)",
              "Bündelung von Facharztpraxen, Sanitätshaus, Apotheke und ambulanter Pflege an einem Standort",
              "Entwicklung von Fahrdienst- und Shuttleservices für immobilen Senioren im ländlichen Raum",
              "Begleitung kommunaler Förderanträge (z.B. Strukturfördermittel des Landes NRW)",
            ],
        scopeTitle: isRu ? "Форматы взаимодействия" : isEn ? "Cooperation Modes" : "Modelle der Zusammenarbeit",
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
          : [
              "Öffentlich-Private Partnerschaften (ÖPP) oder Erbpachtmodelle auf kommunalen Liegenschaften",
              "Beratung von Kommunen bei Förderprogrammen zur Ärzteansiedlung",
              "Regelmäßige Bürgerforen, Präventionstage und Gesundheitsvorträge vor Ort",
              "Entlastung der Notaufnahmen umliegender Krankenhäuser durch starke ambulante Strukturen",
              "Einrichtung digitaler Telemedizin-Sprechstunden für abgelegene Ortsteile",
            ],
        technicalTitle: isRu ? "Координация с KV" : isEn ? "KV Coordination" : "Abstimmung mit Zulassungsgremien",
        technicalText: isRu
          ? "Все проекты развертывания медицинских мощностей согласуются с планами обеспечения Kassenärztliche Vereinigung Nordrhein (KVNO) и ведомствами здравоохранения земли."
          : isEn
          ? "All medical deployment initiatives are closely coordinated with the regional allocation plans of Kassenärztliche Vereinigung Nordrhein (KVNO) and state health authorities."
          : "Sämtliche Vorhaben werden im Vorfeld detailliert mit den Bedarfsplänen und Zulassungsausschüssen der Kassenärztlichen Vereinigung Nordrhein (KVNO) abgestimmt.",
        ctaButtonText: isRu ? "Инициировать проект для муниципалитета" : isEn ? "Initiate Municipal Project" : "Kommunales Konzept anfragen",
      },
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: isRu ? "Конфиденциальный диалог & NDA" : isEn ? "Confidential Dialogue & NDA" : "Erstkontakt & Geheimhaltung",
      desc: isRu
        ? "Первая встреча и подписание взаимного соглашения о неразглашении. Мы уважаем тайну вашего бизнеса и врачебную практику."
        : isEn
        ? "Initial consultation and execution of a bilateral Non-Disclosure Agreement (NDA). We strictly protect your confidential data."
        : "Unverbindliches Vorgespräch und Abschluss einer beidseitigen Geheimhaltungsvereinbarung (NDA) zum Schutz Ihrer Daten.",
    },
    {
      num: "02",
      title: isRu ? "Структурный аудит & Оценка" : isEn ? "Structural Audit & Valuation" : "Analyse & Wertermittlung",
      desc: isRu
        ? "Глубокий анализ материальных активов, показателей практики, кадрового потенциала и градостроительных параметров объекта."
        : isEn
        ? "In-depth due diligence covering operational goodwill, patient demographics, staff structure, and asset valuation."
        : "Detaillierte Analyse der Praxisdaten, Bausubstanz, KV-Zulassungen sowie fundierte Wertermittlung nach IDW- und BÄK-Standards.",
    },
    {
      num: "03",
      title: isRu ? "Договорная архитектура" : isEn ? "Contractual Structuring" : "Maßgeschneiderte Verträge",
      desc: isRu
        ? "Разработка прозрачной модели сделки: согласование договоров аренды, трудовых контрактов и подача документов в комитеты KV."
        : isEn
        ? "Structuring tailored contracts: drafting commercial leases, physician employment terms, and official licensing filings."
        : "Entwurf transparenter Kauf-, Miet- und Anstellungsverträge sowie vollständige Begleitung des KV-Zulassungsausschusses.",
    },
    {
      num: "04",
      title: isRu ? "Интеграция & Синергия" : isEn ? "Integration & Growth" : "Integration & Skalierung",
      desc: isRu
        ? "Плавный переход под крыло холдинга: подключение IT, поддержка HR, маркетинговое сопровождение и стабильное развитие."
        : isEn
        ? "Smooth onboarding into the holding: IT connectivity, HR support, marketing launch, and long-term collaborative growth."
        : "Reibungsloser Übergang: IT-Migration, Einbindung in zentrale Einkaufsvorteile und langfristige partnerschaftliche Weiterentwicklung.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF6] text-[#142318] selection:bg-[#EBDDC0] selection:text-[#142318]">
      <Header currentLocale={locale} />

      <main className="flex-1 pb-16 sm:pb-20">
        {/* 1. PageHero */}
        <PageHero
          breadcrumb={
            <Breadcrumb
              items={[
                { label: isRu ? "Главная" : isEn ? "Home" : "Startseite", href: `/${locale}` },
                { label: isRu ? "Партнеры и инвестиции" : isEn ? "Partners & Alliances" : "Partner & Investoren" },
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
                  {isRu ? "МОДЕЛИ СОТРУДНИЧЕСТВА" : isEn ? "COOPERATION FRAMEWORK" : "PARTNERSCHAFTSMODELLE"}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
                  {isRu
                    ? "Целевые решения для ключевых участников здравоохранения"
                    : isEn
                    ? "Tailored Solutions for Healthcare Stakeholders"
                    : "Passgenaue Lösungen für Ärzte, Kliniken und Partner"}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                  {isRu
                    ? "Четыре специализированные модели сотрудничества, разработанные в строгом соответствии с немецким законодательством (SGB V, GewO, ApoG)."
                    : isEn
                    ? "Four specialized collaboration tracks engineered under rigorous German healthcare legislation (SGB V, GewO, ApoG)."
                    : "Vier spezialisierte Kooperationsmodelle, abgestimmt auf die regulatorischen Anforderungen des deutschen Gesundheitsmarktes."}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B8934A] hover:text-[#0B2516] transition-colors group"
                >
                  <span>{isRu ? "Записаться на консультацию" : isEn ? "Schedule consultation" : "Kooperationsgespräch vereinbaren"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 4 Pillars Grid in authentic clean card style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
              {pillars.map((pillar) => {
                return (
                  <div
                    key={pillar.id}
                    onClick={() => setSelectedPillar(pillar)}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E8E2D6] shadow-xs hover:shadow-xl hover:border-[#D5B878] transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {/* Top Photo with Pill Tag */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                      {/* Tag Pill in top left */}
                      <div className="absolute top-3 left-3 bg-[#0B2516]/85 backdrop-blur-sm text-[#ECCF96] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded shadow-sm">
                        {pillar.tag}
                      </div>

                      {/* Icon Circle in bottom right of image */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/80 flex items-center justify-center text-[#8C6D37] shadow-sm">
                        {pillar.iconType === "doctor" && <Stethoscope className="w-5 h-5 stroke-[1.8]" />}
                        {pillar.iconType === "hospital" && <Building2 className="w-5 h-5 stroke-[1.8]" />}
                        {pillar.iconType === "investor" && <TrendingUp className="w-5 h-5 stroke-[1.8]" />}
                        {pillar.iconType === "municipality" && <Landmark className="w-5 h-5 stroke-[1.8]" />}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B2516] leading-snug group-hover:text-[#8D6B27] transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[#4A5D52] leading-relaxed">
                          {pillar.shortDesc}
                        </p>
                      </div>

                      {/* Bottom Action Area */}
                      <div className="pt-3 flex items-center justify-between border-t border-[#F2ECE1]">
                        <span className="text-xs font-semibold text-[#8C6D37] group-hover:text-[#0B2516] transition-colors">
                          {isRu ? "Подробнее о модели" : isEn ? "Explore cooperation model" : "Details & Modell ansehen"}
                        </span>
                        <div className="w-8 h-8 rounded-full border border-[#D8C7A5] flex items-center justify-center text-[#B8934A] group-hover:bg-[#0B2516] group-hover:text-[#ECCF96] group-hover:border-[#0B2516] transition-all">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
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
        <section className="py-14 sm:py-18 bg-white border-t border-[#EBE6DC]">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-14">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#B8934A] uppercase font-sans block">
                {isRu ? "СТРУКТУРА ХОЛДИНГА" : isEn ? "LEGAL ARCHITECTURE" : "RECHTLICHE ARCHITEKTUR"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
                {isRu
                  ? "Двухфазная модель владения и управления холдингом"
                  : isEn
                  ? "Two-Phase Corporate Governance & Ownership Architecture"
                  : "Das Zwei-Phasen-Beteiligungsmodell der NabiOta-Gruppe"}
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                {isRu
                  ? "Соблюдение жестких регуляторных требований Федерального кодекса (§ 95 SGB V) и закона о промысле (§ 30 GewO) обеспечивает абсолютную юридическую безопасность для инвесторов и партнеров."
                  : isEn
                  ? "Full compliance with statutory healthcare legislation (§ 95 SGB V) and clinic regulation (§ 30 GewO) ensures watertight legal protection for partners and investors."
                  : "Strikte Trennung von ärztlicher Weisungsfreiheit, Managementdienstleistungen und Immobilienwerten zur Gewährleistung maximaler Rechts- und Zulassungssicherheit."}
              </p>
            </div>

            {/* 2 Phases Cards Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 items-stretch max-w-5xl mx-auto">
              {/* Phase 1 Box */}
              <div className="bg-[#FAF8F5] rounded-3xl p-7 sm:p-9 border border-[#E2DBD0] shadow-xs flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DEC8] text-[#0B2516] text-xs font-bold uppercase tracking-wider">
                    <span>{isRu ? "ФАЗА 1" : isEn ? "PHASE 1" : "PHASE 1"}</span>
                    <span className="text-[#8D6B27]">•</span>
                    <span>{isRu ? "Текущий этап" : isEn ? "Active Establishment" : "Status Quo"}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B2516] leading-tight">
                    {isRu
                      ? "Врачебное участие (§ 95 SGB V) & Сервисы холдинга"
                      : isEn
                      ? "Physician Equity (§ 95 SGB V) & Central Management Services"
                      : "Ärztliche MVZ-Gründung & Managementverträge"}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#4A5D52] leading-relaxed">
                    {isRu
                      ? "Доктор Рахимов-Фишер как лицензированный врач владеет долями в компаниях MVZ на основании установленного законом врачебного права. Холдинг NabiOta® Health Group Germany GmbH оказывает централизованные услуги управления (биллинг, IT, закупки, кадры) на основе договоров о сервисном обслуживании."
                      : isEn
                      ? "Dr. Fischer-Rahimov holds MVZ equity based on statutory physician entitlement. NabiOta® Health Group Germany GmbH delivers centralized administrative, billing, purchasing, HR, and marketing management via customized commercial service agreements."
                      : "Dr. Fischer-Rahimov hält die MVZ-Anteile direkt auf Basis seiner berufsrechtlichen Vertragsarzt-Eigenschaft (§ 95 SGB V). Die Holding NabiOta® Health Group Germany GmbH erbringt zentrale Management-, Abrechnungs-, IT- und Einkaufsdienstleistungen über individuelle Servicevereinbarungen."}
                  </p>

                  <ul className="space-y-2.5 pt-2 text-xs sm:text-[13px] text-[#2C4436]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E6845] shrink-0 mt-0.5" />
                      <span>{isRu ? "Полная защита врачебного суверенитета и независимости решений" : isEn ? "Full protection of clinical independence and diagnostic autonomy" : "Volle Unabhängigkeit und ärztliche Weisungsfreiheit"}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E6845] shrink-0 mt-0.5" />
                      <span>{isRu ? "Централизованный IT-контур и биллинг с гарантией защиты данных" : isEn ? "Centralized GDPR-compliant IT, billing, and accounting systems" : "Zentralisiertes Controlling, KV-Abrechnung und QM-System"}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E6845] shrink-0 mt-0.5" />
                      <span>{isRu ? "Правовая чистота согласований с Kassenärztliche Vereinigung" : isEn ? "Clean regulatory approval process with the KV licensing board" : "Lückenlose Konformität mit Vorgaben der KV Nordrhein"}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E8DEC8]">
                  <span className="text-[11px] text-[#7A694A] font-semibold block">
                    {isRu ? "Юридическая основа: § 95 Abs. 1a SGB V" : isEn ? "Legal Basis: § 95(1a) SGB V" : "Rechtsgrundlage: § 95 Abs. 1a SGB V"}
                  </span>
                </div>
              </div>

              {/* Phase 2 Box */}
              <div className="bg-[#0B2516] text-white rounded-3xl p-7 sm:p-9 border border-[#D5B878]/40 shadow-lg flex flex-col justify-between space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#D5B878]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163D29] text-[#ECCF96] text-xs font-bold uppercase tracking-wider border border-[#D5B878]/30">
                    <span>{isRu ? "ФАЗА 2" : isEn ? "PHASE 2" : "PHASE 2"}</span>
                    <span className="text-[#ECCF96]">•</span>
                    <span>{isRu ? "Больничная лицензия" : isEn ? "Hospital Licensing" : "Krankenhausträgergesellschaft"}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                    {isRu
                      ? "NabiOta Clinics Germany GmbH (§ 30 GewO) & Прямое владение"
                      : isEn
                      ? "NabiOta Clinics Germany GmbH (§ 30 GewO) & Direct Equity"
                      : "Klinikzulassung (§ 30 GewO) & Direktes Halten"}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed">
                    {isRu
                      ? "Холдинг учреждает компанию управления клиникой (NabiOta Clinics Germany GmbH nach § 30 GewO). После получения лицензии стационарной больницы (§ 108/109 SGB V) компания становится полноправным учредителем MVZ без необходимости личного врачебного участия, открывая путь для прямого институционального инвестирования."
                      : isEn
                      ? "The holding establishes the hospital operating company (NabiOta Clinics Germany GmbH § 30 GewO). Upon hospital licensing (§ 108/109 SGB V), the company acquires statutory entitlement to directly own and operate MVZ centers, enabling streamlined institutional equity expansion."
                      : "Die Holding baut die stationäre Betreibergesellschaft (NabiOta Clinics Germany GmbH nach § 30 GewO) auf. Mit Erhalt der Zulassung als Plankrankenhaus (§ 108/109 SGB V) erwirbt die Gesellschaft die unmittelbare gesetzliche Gründungsberechtigung für MVZ. Anteile können sodann direkt und ohne persönliche Arztbindung gehalten werden."}
                  </p>

                  <ul className="space-y-2.5 pt-2 text-xs sm:text-[13px] text-[#D1DDD5]">
                    <li className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#ECCF96] shrink-0 mt-0.5" />
                      <span>{isRu ? "Прямое владение долями центров MVZ компанией стационарной клиники" : isEn ? "Direct corporate ownership of MVZ subsidiaries by hospital operating company" : "Direkte Beteiligung der Krankenhausträgergesellschaft an MVZ"}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#ECCF96] shrink-0 mt-0.5" />
                      <span>{isRu ? "Институциональная масштабируемость и высокая инвестиционная емкость" : isEn ? "Institutional scalability and readiness for major equity syndication" : "Uneingeschränkte Skalierbarkeit für institutionelle Eigenkapitalpartner"}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#ECCF96] shrink-0 mt-0.5" />
                      <span>{isRu ? "Создание замкнутого континуума стационарной и амбулаторной помощи" : isEn ? "Unbroken continuum between acute hospital wards and outpatient centers" : "Vollständige sektorübergreifende Versorgungskette unter einem Dach"}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/15 relative z-10">
                  <span className="text-[11px] text-[#ECCF96] font-semibold block">
                    {isRu ? "Юридическая основа: § 30 GewO / § 108 SGB V / § 95 Abs. 1a SGB V" : isEn ? "Legal Basis: § 30 GewO / § 108 SGB V / § 95(1a) SGB V" : "Rechtsgrundlage: § 30 GewO / § 108 SGB V / § 95 Abs. 1a SGB V"}
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

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
                  {isRu ? "Уставный капитал" : isEn ? "Registered Capital" : "Stammkapital"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isRu ? "HRB 16787 Мёнхенгладбах" : isEn ? "HRB 16787 Mönchengladbach" : "HRB 16787 Mönchengladbach"}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECCF96]">
                  6
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {isRu ? "Бизнес-направлений" : isEn ? "Core Business Divisions" : "Unternehmensbereiche"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isRu ? "От MVZ до девелопмента" : isEn ? "From primary care to real estate" : "Integrierte Wertschöpfung"}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECCF96]">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {isRu ? "Правовая чистота" : isEn ? "Regulatory Compliance" : "Rechtssicherheit"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isRu ? "KV, SGB V & Berufsordnung" : isEn ? "German healthcare standards" : "KV- & berufsrechtskonform"}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECCF96]">
                  32°C & 3T
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {isRu ? "Инфраструктура High-End" : isEn ? "High-End Technology" : "Spitzentechnologie"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isRu ? "Бассейн, 3T MRT, чистые OP" : isEn ? "Aquatic rehab & 3T MRI" : "Bewegungsbad & Reinraum-OP"}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: DER STRUKTURIERTE PARTNERSCHAFTSPROZESS (4 SCHRITTE)           */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-18 bg-[#FAF8F5] border-t border-[#EBE6DC]">
          <Container>
            <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#B8934A] uppercase font-sans block">
                {isRu ? "ПОШАГОВЫЙ ПУТЬ" : isEn ? "STRUCTURED ROADMAP" : "DER PARTNERSCHAFTSPROZESS"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
                {isRu
                  ? "Четыре шага к успешному совместному будущему"
                  : isEn
                  ? "Four Milestones to a Successful Partnership"
                  : "In 4 strukturierten Schritten zur Partnerschaft"}
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                {isRu
                  ? "Прозрачный, конфиденциальный и юридически выверенный процесс: от первого контакта до интеграции."
                  : isEn
                  ? "A discreet, transparent, and legally guided pathway from initial dialogue to operational integration."
                  : "Diskretion, Verlässlichkeit und zügige Umsetzung kennzeichnen unseren partnerschaftlichen Onboarding-Prozess."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#E8E2D6] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#D5B878] transition-colors"
                >
                  <div className="space-y-3">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#ECCF96] block leading-none">
                      {step.num}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#0B2516] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#526359] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F2ECE1] flex items-center justify-between text-[#8C6D37] text-xs font-medium">
                    <span>{isRu ? `Этап ${idx + 1}` : isEn ? `Phase ${idx + 1}` : `Schritt ${idx + 1}`}</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A56A]" />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

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
                  {isRu ? "Давайте обсудим" : isEn ? "Let's Shape the" : "Gemeinsam Zukunft"}
                  <br />
                  {isRu ? "ваше партнерство." : isEn ? "Future Together." : "gestalten. ♡"}
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
                  {isRu ? "КОНФИДЕНЦИАЛЬНЫЙ КОНТАКТ" : isEn ? "CONFIDENTIAL DIALOGUE" : "VERTRAULICHER DIALOG"}
                </span>

                <h2 className="font-serif text-2xl sm:text-[28px] lg:text-[30px] xl:text-[32px] text-[#0F2A1D] font-normal leading-[1.2]">
                  {isRu ? "Свяжитесь с нами" : isEn ? "Initiate Your Partnership" : "Wir freuen uns auf den Dialog."}
                </h2>

                <p className="text-xs sm:text-[13px] text-[#4A5D52] leading-relaxed max-w-sm font-sans">
                  {isRu
                    ? "Будь то преемственность праксиса, межсекторальное партнерство с клиникой или инвестиции — мы гарантируем полную конфиденциальность."
                    : isEn
                    ? "Whether practice succession, clinical hospital networks, or healthcare equity — we ensure maximum confidentiality."
                    : "Ob Praxisabgabe, Kliniknetzwerk oder Immobilieninvestment: Unser Vorstand berät Sie gerne diskret und unverbindlich."}
                </p>

                <div className="pt-1.5">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-[48px] sm:h-[50px] rounded-full bg-gradient-to-r from-[#ECCF96] via-[#DFBF76] to-[#C8A050] hover:from-[#F4DCAC] hover:to-[#D4AC5B] text-[#08170D] text-xs sm:text-[13.5px] font-semibold transition-all duration-300 shadow-sm group hover:scale-[1.02]"
                  >
                    <span>{isRu ? "Записаться на встречу" : isEn ? "Request appointment" : "Gespräch vereinbaren"}</span>
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
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border border-[#E8DEC8] shadow-2xl p-6 sm:p-8 md:p-10 animate-in zoom-in-95 duration-200"
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2516] text-[#ECCF96] text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                  <Handshake className="w-3.5 h-3.5" />
                  <span>{selectedPillar.tag}</span>
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
                  {isRu ? "Закрыть окно" : isEn ? "Close window" : "Schließen"}
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
