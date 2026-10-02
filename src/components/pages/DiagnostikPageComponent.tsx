"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Stethoscope,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Layers,
  Clock,
  Sparkles,
  ChevronRight,
  FileText,
  UserCheck,
  Radio,
  Eye,
  Info,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";
import { businessAreas } from "@/data/areas";

// ── Custom Medical Technology SVG Icons ──
function MriScannerIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M4 14h6M14 14h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function CtScannerIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M9.5 9.5l5 5" />
    </svg>
  );
}

function XrayPulseIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 7v10M9 9h6M8 12h8M10 15h4" />
    </svg>
  );
}

function UltrasoundWaveIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <path d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M10 12c0-1.1.9-2 2-2s2 .9 2 2" />
      <circle cx="12" cy="12" r="1" />
      <path d="M12 13v7M9 20h6" />
    </svg>
  );
}

function PacsNetworkIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7 20h10M12 16v4" />
      <circle cx="9" cy="10" r="1.5" />
      <circle cx="15" cy="10" r="1.5" />
      <path d="M9 10h6" />
    </svg>
  );
}

function CloverEmblemIcon({ className = "w-5 h-5" }: { className?: string }) {
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

interface Props {
  locale?: SupportedLocale;
}

export function DiagnostikPageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  const area = businessAreas.find((a) => a.slug === "diagnostik") || {
    id: "diagnostik",
    slug: "diagnostik",
    title: "Diagnostik",
    subtitle: "Präzisionstechnologie für fundierte Befunde",
    description:
      "Hochmoderne bildgebende Diagnostik mit CT, MRT und digitalem Röntgen für frühzeitige und exakte therapeutische Entscheidungen.",
    image: "/images/services/diagnostik.jpg",
  };

  // ── Hero Content ──
  const heroData = {
    title: isRu ? "Диагностика" : isEn ? "Diagnostics" : "Diagnostik",
    subtitle: isRu
      ? "Высокотехнологичная визуализация экспертного уровня"
      : isEn
      ? "High-Precision Diagnostic Imaging"
      : "Präzisionstechnologie für fundierte Befunde",
    description: isRu
      ? "NabiOta® Diagnostics GmbH предоставляет полный спектр высокоточной лучевой и функциональной диагностики: 3-Тесла МРТ с широким туннелем, низкодозовая КТ, цифровой рентген и экспертное УЗИ по немецким стандартам."
      : isEn
      ? "NabiOta® Diagnostics GmbH delivers university-grade medical imaging: 3-Tesla wide-bore MRI, low-dose CT, direct digital radiography, and high-end ultrasound according to rigorous German clinical standards."
      : "Die NabiOta® Diagnostics GmbH bietet modernste Bildgebung auf universitärem Niveau. Mit Niedrigdosis-CT, High-Field 3-Tesla-MRT und volldigitalem Röntgen liefern wir präzise Schnittbilder für fundierte Diagnosen und gezielte Therapien.",
    badges: [
      {
        icon: <MriScannerIcon className="w-5 h-5 text-[#ECCF96]" />,
        title: isRu ? "3-Тесла МРТ" : isEn ? "3-Tesla MRI" : "3-Tesla-MRT",
        sub: isRu ? "Макс. детализация" : isEn ? "High-Field Precision" : "High-Field Präzision",
      },
      {
        icon: <Clock className="w-5 h-5 text-[#ECCF96]" />,
        title: "< 24h",
        sub: isRu ? "Сроки заключения" : isEn ? "Report Turnaround" : "Befunderstellung",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
        title: "Low-Dose",
        sub: isRu ? "Бережная КТ" : isEn ? "Minimal Dose CT" : "Schonende CT",
      },
    ],
  };

  // ── Modality Cards Data ──
  const modalities = [
    {
      id: "mrt",
      tag: isRu ? "3.0 ТЕСЛА • БЕЗ ОБЛУЧЕНИЯ" : isEn ? "3.0 TESLA • RADIATION-FREE" : "3.0 TESLA • STRAHLENFREI",
      title: isRu ? "3-Тесла Высокопольный МРТ" : isEn ? "3-Tesla High-Field MRI" : "3-Tesla-High-Field-MRT",
      subtitle: isRu
        ? "Максимальное пространственное разрешение мягких тканей, сосудов и суставов"
        : isEn
        ? "Ultra-high soft tissue resolution for neurology, joints, and internal organs"
        : "Höchste Weichteilauflösung für Neurologie, Gelenke und innere Organe",
      desc: isRu
        ? "Широкий 70-сантиметровый туннель и технологии акустического шумоподавления обеспечивают комфортное обследование даже для пациентов с клаустрофобией."
        : isEn
        ? "Our 70 cm open-bore design and acoustic noise reduction create an anxiety-free scan environment for claustrophobic patients and children."
        : "Der 70 cm breite Tunnel und akustische Geräuschunterdrückung ermöglichen eine angstfreie Untersuchung mit höchstem Patientenkomfort.",
      icon: MriScannerIcon,
      points: isRu
        ? [
            "Головной мозг, церебральные сосуды и гипофиз",
            "Все отделы позвоночника и межпозвоночные диски",
            "Крупные и мелкие суставы (колено, плечо, тазобедренный)",
            "Мультипараметрическая МРТ простаты и органов малого таза",
          ]
        : isEn
        ? [
            "Brain, cerebral vessels, and pituitary diagnostics",
            "Full spine analysis and intervertebral disc imaging",
            "Joint pathology (knee, shoulder, hip, ankle cartilage)",
            "Multiparametric prostate and pelvic MRI protocols",
          ]
        : [
            "Gehirn, Schädelbasis und Hirngefäßdarstellung (Angio)",
            "Gesamte Wirbelsäule und Bandscheibendiagnostik",
            "Gelenkdiagnostik (Knie, Schulter, Hüfte, Knorpelanalyse)",
            "Multiparametrische MRT von Prostata und Beckenorganen",
          ],
    },
    {
      id: "ct",
      tag: isRu ? "НИЗКОДОЗОВАЯ ТЕХНОЛОГИЯ" : isEn ? "ULTRA-LOW DOSE" : "LOW-DOSE-SPEKTRAL-CT",
      title: isRu ? "Мультиспиральная Компьютерная Томография" : isEn ? "Multislice Low-Dose CT" : "Low-Dose-Computertomographie",
      subtitle: isRu
        ? "Сверхбыстрое 3D-сканирование с минимальной лучевой нагрузкой"
        : isEn
        ? "Sub-second 3D volume imaging with iterative radiation reduction algorithms"
        : "Sekundenschnelle 3D-Volumenscans mit adaptiver Dosisreduktion",
      desc: isRu
        ? "Интеллектуальные итеративные алгоритмы реконструкции снижают дозу облучения до 80% при сохранении безупречной микроструктурной детализации."
        : isEn
        ? "Intelligent iterative reconstruction algorithms reduce radiation exposure by up to 80% while preserving microscopic anatomical detail."
        : "Moderne iterative Rekonstruktionsalgorithmen senken die Strahlenexposition um bis zu 80 % bei unverminderter Detailschärfe.",
      icon: CtScannerIcon,
      points: isRu
        ? [
            "Кардио-КТ: оценка кальциевого индекса и коронарных артерий",
            "Низкодозовый скрининг легких и органов грудной клетки",
            "Костная система, сложные переломы и предоперационное планирование",
            "Брюшная полость, забрюшинное пространство и ангиография",
          ]
        : isEn
        ? [
            "Cardio-CT: calcium scoring and non-invasive coronary angiography",
            "Low-dose pulmonary screening and thoracic diagnostics",
            "Bone micro-architecture, complex trauma and surgical planning",
            "Abdominal, retroperitoneal and vascular CT angiography",
          ]
        : [
            "Kardio-CT: Calcium-Scoring und Koronarangiographie",
            "Niedrigdosis-Screening der Lunge und Thoraxorgane",
            "Knöcherne Strukturen, Frakturabklärung und OP-Planung",
            "Abdomen, Retroperitoneum und CT-Gefäßdarstellungen",
          ],
    },
    {
      id: "xray",
      tag: isRu ? "ЦИФРОВЫЕ ДЕТЕКТОРЫ" : isEn ? "DIRECT DIGITAL FPD" : "VOLLDIGITAL (FLAT-PANEL)",
      title: isRu ? "Цифровой Рентген и Функциональная Графика" : isEn ? "Digital Radiography & Fluoroscopy" : "Digitales Röntgen & Funktionsdiagnostik",
      subtitle: isRu
        ? "Мгновенное получение снимков высочайшей четкости при минимальной дозе"
        : isEn
        ? "Instant digital radiograms with high contrast and minimal exposure"
        : "Sofortige Bildverfügbarkeit mit maximalem Kontrastumfang",
      desc: isRu
        ? "Прямые цифровые плоскопанельные детекторы последнего поколения позволяют выполнять панорамные снимки всей длины позвоночника и конечностей."
        : isEn
        ? "Latest-generation flat-panel detectors allow full-length spine and lower extremity stitching with zero geometric distortion."
        : "Hochpräzise Flachdetektoren ermöglichen Ganzwirbelsäulen- und Ganzbeinaufnahmen ohne geometrische Verzerrungen.",
      icon: XrayPulseIcon,
      points: isRu
        ? [
            "Ортопедическая диагностика суставов и костной ткани",
            "Панорамные снимки позвоночника и оси нижних конечностей",
            "Функциональные снимки шейного и поясничного отделов",
            "Обзорная рентгенография органов грудной клетки",
          ]
        : isEn
        ? [
            "Orthopedic skeletal and degenerative joint diagnostics",
            "Full-length spine alignment and leg axis stitching",
            "Functional movement radiography of cervical/lumbar spine",
            "Thoracic radiography for pulmonary and cardiac assessment",
          ]
        : [
            "Orthopädische Skelett- und Gelenkdiagnostik",
            "Ganzwirbelsäulen- und Ganzbein-Achsenvermessung",
            "Funktionsaufnahmen der Hals- und Lendenwirbelsäule",
            "Übersichtsaufnahmen des Thorax und knöchernen Skeletts",
          ],
    },
    {
      id: "sonography",
      tag: isRu ? "В РЕАЛЬНОМ ВРЕМЕНИ" : isEn ? "REAL-TIME DUPLEX" : "HIGH-END FARBDOPPLER",
      title: isRu ? "Экспертное УЗИ и Цветовой Допплер" : isEn ? "High-End Sonography & Color Doppler" : "Ultraschall & Gefäßdoppler",
      subtitle: isRu
        ? "Неинвазивная оценка сосудистого русла и мягких тканей в реальном времени"
        : isEn
        ? "Non-invasive hemodynamic and soft-tissue evaluation in real-time"
        : "Strahlenfreie Gefäß- und Weichteildiagnostik in Echtzeit",
      desc: isRu
        ? "Цветовое дуплексное сканирование с тканевой гармоникой и эластографией дает точную оценку кровотока, структуры щитовидной железы и внутренних органов."
        : isEn
        ? "Color duplex ultrasonography with elastography and tissue harmonics provides precise hemodynamics and organ parenchymal analysis."
        : "Farbduplex-Sonographie mit Gewebeelastographie ermöglicht die exakte Flussmessung von Gefäßen und Organparenchym.",
      icon: UltrasoundWaveIcon,
      points: isRu
        ? [
            "Брахиоцефальные сосуды (сонные и позвоночные артерии)",
            "Вены и артерии верхних и нижних конечностей (тромбозы, ХВН)",
            "Органы брюшной полости, забрюшинного пространства и почки",
            "Щитовидная железа с эластографией узловых образований",
          ]
        : isEn
        ? [
            "Extracranial carotid and vertebral artery duplex",
            "Peripheral arterial and venous duplex for DVT/insufficiency",
            "Abdominal, retroperitoneal, and kidney sonography",
            "High-resolution thyroid imaging with elastography",
          ]
        : [
            "Extrakranielle Karotis- und Vertebralarterien-Doppler",
            "Venöse und arterielle Gefäßdiagnostik der Extremitäten",
            "Abdomen- und Nierensonographie auf High-End-Niveau",
            "Schilddrüsendiagnostik inklusive Elastographie",
          ],
    },
  ];

  // ── Spotlight 3T MRI Showcase Data ──
  const spotlightMri = {
    eyebrow: isRu ? "ТЕХНОЛОГИИ И КОМФОРТ ПАЦИЕНТА" : isEn ? "HIGH-END TECHNOLOGY & PATIENT CARE" : "TECHNOLOGIE & PATIENTENKOMFORT",
    title: isRu
      ? "3-Тесла МРТ:\nТочность без тревоги и клаустрофобии"
      : isEn
      ? "3-Tesla MRI:\nClinical Precision with Zero Anxiety"
      : "3-Tesla-MRT:\nPräzision ohne Angst & Beklemmung",
    desc: isRu
      ? "Широкий туннель диаметром 70 см, мягкое фоновое освещение и запатентованное снижение акустического шума (Silent Scan) превращают исследование в спокойный и предсказуемый процесс даже для детей и тревожных пациентов. При этом магнитное поле 3 Тесла гарантирует субмиллиметровую четкость срезов."
      : isEn
      ? "Our 70 cm open-bore design, ambient daylight illumination, and proprietary acoustic noise dampening (Silent Scan) transform magnetic resonance imaging into a calm, reassuring experience—even for claustrophobic individuals. Meanwhile, 3.0 Tesla magnet strength delivers sub-millimeter anatomical detail."
      : "Der 70 cm weite Magnet-Tunnel, stimmungsvolles Tageslichtdesign und flüsterleise Sequenzen (Silent Scan) verwandeln die Untersuchung in ein entspanntes Erlebnis – selbst für angstsensible Patienten. Das 3-Tesla-Hochfeld garantiert dabei mikrometergenaue Schnittbilder.",
    pillTitle: isRu ? "Siemens & Philips 3T MRT Suite" : isEn ? "Siemens & Philips 3T MRI Suite" : "Siemens & Philips 3T MRT Suite",
    pillSubtitle: isRu ? "70 см туннель • Бесшумные режимы • Без клаустрофобии" : isEn ? "70 cm Bore • Silent Scan • Anxiety-Free" : "70 cm Tunnel • Silent Scan • Angstfrei",
    features: [
      {
        icon: MriScannerIcon,
        label: isRu ? "70 см открытый туннель" : isEn ? "70 cm Open Bore" : "70 cm offener Tunnel",
      },
      {
        icon: ShieldCheck,
        label: isRu ? "100% без облучения" : isEn ? "Zero Radiation" : "100% strahlenfrei",
      },
      {
        icon: Activity,
        label: isRu ? "Субмиллиметровые срезы" : isEn ? "Sub-mm Precision" : "Sub-mm Auflösung",
      },
    ],
    linkText: isRu ? "Записаться на 3T МРТ исследование" : isEn ? "Request 3T MRI Appointment" : "Termin für 3T-MRT anfragen",
  };

  // ── Edge-to-Edge Dark Forest Green Section (Photo 2 Style) ──
  const whySection = {
    eyebrow: isRu ? "СТАНДАРТЫ НАДЕЖНОСТИ" : isEn ? "CLINICAL EXCELLENCE" : "QUALITÄTSSTANDARD",
    title: isRu ? "Почему диагностика в NabiOta®?" : isEn ? "Why NabiOta® Diagnostics?" : "Warum NabiOta® Diagnostik?",
    desc: isRu
      ? "Современные аппараты — это только половина успеха. Главное преимущество NabiOta® — опытные врачи-рентгенологи, протоколы двойной верификации (четыре глаза) и прямая связь с хирургами и клиниками нашего холдинга. Вы получаете исчерпывающий результат без задержек."
      : isEn
      ? "Cutting-edge hardware is only one half of precision medicine. The decisive advantage of NabiOta® is our fellowship-trained radiologists, mandatory dual-reading protocols, and instant digital integration with our surgical and orthopedic centers."
      : "Hochmoderne Geräte sind nur die Basis. Der entscheidende Vorteil von NabiOta® liegt in der radiologischen Fachexpertise, standardisierter Doppelbefundung und der nahtlosen Integration mit unseren Facharztzentren und OP-Kliniken.",
    btn: isRu ? "Записаться на обследование" : isEn ? "Schedule Diagnostic Scan" : "Diagnostik-Termin vereinbaren",
    stats: [
      {
        icon: Clock,
        title: "< 24h",
        label: isRu ? "Готовность заключения и снимков" : isEn ? "Report & image delivery turnaround" : "Digitaler Befund innerhalb von 24h",
      },
      {
        icon: Eye,
        title: isRu ? "Двойное чтение" : isEn ? "Dual Reading" : "Vier-Augen-Prinzip",
        label: isRu ? "Обязательная проверка сложных случаев" : isEn ? "Dual specialist review on complex cases" : "Fachärztliche Doppelbefundung",
      },
      {
        icon: PacsNetworkIcon,
        title: "PACS Portal",
        label: isRu ? "Защищенный онлайн-доступ к DICOM" : isEn ? "Secure cloud access to full DICOM scans" : "Sicherer digitaler Bildabruf für Zuweiser",
      },
      {
        icon: Award,
        title: isRu ? "Стандарты РФК" : isEn ? "University Level" : "Universitäre Standards",
        label: isRu ? "Стандартизированные немецкие протоколы" : isEn ? "Certified German diagnostic standards" : "Standardisierte Untersuchungsprotokolle",
      },
    ],
  };

  // ── Step-by-Step Patient Pathway ──
  const workflowSteps = [
    {
      step: "01",
      title: isRu ? "Быстрая запись и подготовка" : isEn ? "Rapid Booking & Preparation" : "Terminvergabe & Vorbereitung",
      desc: isRu
        ? "Короткие сроки ожидания. Четкие инструкции по подготовке к контрастированию или исследованию без очередей."
        : isEn
        ? "Immediate appointments without months of waiting. Clear preparation instructions for contrast and fasting if needed."
        : "Zeitnahe Terminvergabe ohne monatelange Wartezeiten. Verständliche Aufklärung über Vorbereitung und Kontrastmittel.",
    },
    {
      step: "02",
      title: isRu ? "Комфортное обследование" : isEn ? "Comfortable Patient Scan" : "Schonende Untersuchung",
      desc: isRu
        ? "Заботливая поддержка ассистентов, удобное позиционирование, музыкальные наушники и связь с оператором."
        : isEn
        ? "Attentive care by certified technicians, ergonomic cushions, acoustic headphones, and continuous communication."
        : "Einfühlsame Betreuung durch erfahrene MTRAs, bequeme Lagerung, Musikkopfhörer und ständiger Sprechkontakt.",
    },
    {
      step: "03",
      title: isRu ? "Анализ и двойная верификация" : isEn ? "AI-Assisted Dual Analysis" : "KI-unterstützte Doppelbefundung",
      desc: isRu
        ? "Высокоточные 3D-реконструкции, цифровая обработка и оценка профильным врачом-рентгенологом."
        : isEn
        ? "High-resolution 3D reconstructions, algorithmic noise reduction, and evaluation by specialized radiologists."
        : "Modernste 3D-Rekonstruktionen, KI-gestützte Detailerkennung und Zweitbefundung durch Fachradiologen.",
    },
    {
      step: "04",
      title: isRu ? "Быстрое получение и консультация" : isEn ? "Instant Report Delivery" : "Befundbesprechung & Weiterleitung",
      desc: isRu
        ? "Заключение в течение 24 часов в цифровом виде и на защищенном носителе для вашего лечащего врача."
        : isEn
        ? "Written diagnostic report and high-res images delivered in under 24 hours directly to you and your referring doctor."
        : "Detaillierter Befundbericht und digitale Bilddaten in unter 24h direkt für Sie und Ihren überweisenden Facharzt.",
    },
  ];

  // ── Clinical Indications Grid ──
  const indications = [
    {
      category: isRu ? "Неврология и Позвоночник" : isEn ? "Neurology & Spine" : "Neurologie & Wirbelsäule",
      items: isRu
        ? ["Грыжи и протрузии дисков", "Хронические головные боли и мигрень", "Подозрение на рассеянный склероз", "Сосудистые аневризмы и инсульты"]
        : isEn
        ? ["Disc herniation and spinal stenosis", "Chronic headache and migraine", "Multiple sclerosis monitoring", "Cerebral vascular aneurysms and stroke"]
        : ["Bandscheibenvorfälle & Spinalkanalstenosen", "Chronische Kopfschmerzen & Migräne", "Verdacht auf Multiple Sklerose", "Aneurysmen & zerebrovaskuläre Abklärung"],
    },
    {
      category: isRu ? "Ортопедия и Спортивная Травма" : isEn ? "Orthopedics & Sports Medicine" : "Orthopädie & Sporttraumatologie",
      items: isRu
        ? ["Разрывы менисков и связок колена", "Повреждения ротаторной манжеты плеча", "Артроз тазобедренного и коленного суставов", "Стрессовые и скрытые микропереломы"]
        : isEn
        ? ["Meniscus and cruciate ligament tears", "Rotator cuff tears and shoulder impingement", "Hip and knee osteoarthritis", "Stress and occult microfractures"]
        : ["Meniskus- & Kreuzbandrupturen", "Rotatorenmanschettenläsionen der Schulter", "Arthrose von Hüfte, Knie und Sprunggelenk", "Stress- und okkulte Knochenfrakturen"],
    },
    {
      category: isRu ? "Кардиология и Сосуды" : isEn ? "Cardiology & Vascular Medicine" : "Kardiologie & Gefäßmedizin",
      items: isRu
        ? ["Кальциноз коронарных артерий (Calcium Scoring)", "Стенозы сонных артерий и риск инсульта", "Тромбозы глубоких вен и флебиты", "Облитерирующий атеросклероз артерий ног"]
        : isEn
        ? ["Coronary calcium scoring & plaque analysis", "Carotid artery stenosis & stroke prevention", "Deep vein thrombosis (DVT)", "Peripheral arterial occlusive disease"]
        : ["Kardio-CT: Calcium-Score & Plaque-Analyse", "Karotisstenosen & Schlaganfallvorsorge", "Tiefe Beinvenenthrombosen (TVT)", "Periphere arterielle Verschlusskrankheit (pAVK)"],
    },
    {
      category: isRu ? "Онкопоиск и Профилактика" : isEn ? "Oncology & Preventive Care" : "Onkologische Vorsorge & Check-up",
      items: isRu
        ? ["Низкодозовый скрининг легких у курильщиков", "Мультипараметрическая МРТ простаты (PI-RADS)", "УЗИ брюшной полости и щитовидной железы", "Комплексные чек-ап программы холдинга"]
        : isEn
        ? ["Low-dose lung cancer screening", "Multiparametric prostate MRI (PI-RADS)", "Abdominal and thyroid ultrasound", "Comprehensive health check-up protocols"]
        : ["Low-Dose-Lungenkrebs-Früherkennung", "Multiparametrische Prostata-MRT (PI-RADS)", "Abdomen- und Schilddrüsen-Screening", "Ganzheitliche Vorsorgeprogramme des Verbunds"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      <Header currentLocale={locale} />

      {/* ── Page Hero with integrated breadcrumb ── */}
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
            <span className="block text-xl sm:text-2xl text-[#ECCF93] font-light mt-1 font-serif">
              {heroData.subtitle}
            </span>
          </>
        }
        description={heroData.description}
        imageSrc={area.image || "/images/services/diagnostik.jpg"}
        imageAlt="NabiOta Diagnostics High-End Medical Imaging"
        badges={heroData.badges}
      />

      <main className="flex-1">
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: SPOTLIGHT 3T MRT (PHOTO 1 STYLE)
            - Left: Large MRI scanner suite photo with floating badge
            - Right: Technical specs, 3 circular gold badges, link
        ══════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] relative overflow-hidden">
          {/* Subtle Scanner Waves Vector Accent in Top-Right */}
          <div className="absolute top-4 sm:top-8 right-6 sm:right-16 w-60 sm:w-80 h-60 sm:h-80 pointer-events-none opacity-40 z-0">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              className="w-full h-full text-[#D5B878]"
            >
              <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="100" cy="100" r="35" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M15 100h170M100 15v170" stroke="#C5A56A" strokeWidth="0.6" opacity="0.6" />
            </svg>
          </div>

          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: MRI Suite Photo + Floating Bottom Pill Badge */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#EDE8DE]">
                  <Image
                    src="/images/services/diagnostik.jpg"
                    alt={spotlightMri.title}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Subtle vignette on bottom for card contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

                  {/* Floating Pill Overlay Card */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full px-4 sm:px-5 py-2.5 sm:py-3 shadow-lg flex items-center justify-between gap-3 border border-white/60">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0C1C11] border border-[#D5B878]/60 flex items-center justify-center text-[#ECCF96] shadow-sm shrink-0">
                        <CloverEmblemIcon className="w-4.5 h-4.5 stroke-[1.6]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[13.5px] sm:text-[14px] font-bold text-[#142318] truncate leading-tight">
                          {spotlightMri.pillTitle}
                        </h4>
                        <p className="text-[11px] text-[#6E756D] truncate font-sans mt-0.5">
                          {spotlightMri.pillSubtitle}
                        </p>
                      </div>
                    </div>

                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#142318]/15 bg-white flex items-center justify-center text-[#142318] hover:bg-[#D5B878] hover:border-[#D5B878] hover:text-[#0C1C11] transition-all shrink-0 ml-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Title, Description, 3 Badges, Link */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-5 lg:pl-2">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                  {spotlightMri.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#132218] font-normal leading-[1.18] whitespace-pre-line">
                  {spotlightMri.title}
                </h2>

                <p className="text-xs sm:text-[13.5px] text-[#556358] leading-relaxed font-sans max-w-lg">
                  {spotlightMri.desc}
                </p>

                {/* 3 Horizontal Badges with Gold Outline Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 sm:pt-3">
                  {spotlightMri.features.map((feat, idx) => {
                    const FeatureIcon = feat.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5B878] bg-[#FAF8F5] flex items-center justify-center text-[#B89650] shrink-0 shadow-sm">
                          <FeatureIcon className="w-4 h-4 stroke-[1.6]" />
                        </div>
                        <span className="text-[11.5px] sm:text-xs font-medium text-[#425046] leading-snug">
                          {feat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Link with underline and arrow */}
                <div className="pt-2 sm:pt-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#142318] hover:text-[#B89650] underline decoration-[#D5B878] underline-offset-4 transition-colors"
                  >
                    <span>{spotlightMri.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: CORE MODALITIES GRID (4 HIGH-END CARDS)
            - 3T MRT, Low-Dose CT, Digitales Röntgen, Farbduplex
        ══════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] border-t border-[#EDE8DE]/70">
          <Container size="wide">
            {/* Header row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10 sm:mb-12">
              <div className="lg:col-span-6 space-y-2">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                  {isRu ? "СПЕКТР ОБОРУДОВАНИЯ" : isEn ? "ADVANCED MODALITIES" : "MODERNE VERFAHREN"}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
                  {isRu
                    ? "С Schnittbilddiagnostik экспертного уровня"
                    : isEn
                    ? "Diagnostic Imaging on University Standards"
                    : "Schnittbilddiagnostik auf universitärem Niveau"}
                </h2>
              </div>
              <div className="lg:col-span-6 border-l-2 border-[#D5B878]/60 pl-5 sm:pl-7">
                <p className="text-xs sm:text-[13.5px] text-[#556358] leading-relaxed font-sans">
                  {isRu
                    ? "Каждый метод решает конкретную клиническую задачу: МРТ для идеальной детализации мягких тканей и нервов, КТ для сверхбыстрого костного и сосудистого 3D-анализа, рентген и сонография для мгновенного функционального контроля."
                    : isEn
                    ? "Each modality serves targeted diagnostic accuracy: high-field MRI for unrivaled soft tissue and neuro detail, low-dose CT for rapid 3D bone and vascular imaging, and digital radiography for immediate functional evaluation."
                    : "Jede Modalität erfüllt eine gezielte klinische Aufgabe: High-Field-MRT für unübertroffene Weichteil- und Nervendarstellung, Niedrigdosis-CT für sekundenschnelle 3D-Knochen- und Gefäßanalysen sowie volldigitales Röntgen."}
                </p>
              </div>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {modalities.map((mod) => {
                const IconComponent = mod.icon;
                return (
                  <div
                    key={mod.id}
                    className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#EDE8DE] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Row: Icon + Badge Tag */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="w-11 h-11 rounded-full border border-[#D5B878] bg-[#FAF8F5] flex items-center justify-center text-[#B89650] group-hover:bg-[#0C1C11] group-hover:text-[#ECCF96] transition-colors">
                          <IconComponent className="w-5 h-5 stroke-[1.6]" />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full bg-[#FAF8F5] text-[#8C6D2B] border border-[#D5B878]/50">
                          {mod.tag}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl text-[#142318] font-normal leading-snug">
                        {mod.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] font-medium text-[#B89650] mt-1 mb-3">
                        {mod.subtitle}
                      </p>

                      <p className="text-xs sm:text-[13px] text-[#556358] leading-relaxed font-sans mb-5">
                        {mod.desc}
                      </p>

                      {/* Diagnostic Points */}
                      <div className="space-y-2.5 pt-4 border-t border-[#EDE8DE]">
                        {mod.points.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#B89650] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-[12.5px] text-[#2C3B30] font-medium leading-snug">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#EDE8DE] flex items-center justify-between">
                      <Link
                        href={`/${locale}/contact`}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#142318] hover:text-[#B89650] transition-colors"
                      >
                        <span>{isRu ? "Записаться на процедуру" : isEn ? "Book Examination" : "Termin anfragen"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[11px] text-[#8C938D] font-mono">NabiOta® Standards</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: EDGE-TO-EDGE PANORAMIC DARK GREEN (PHOTO 2 STYLE)
            - "фото 2 до краев доходит"
            - Left: Dark forest green with eyebrow, title, desc, gold button
            - Middle: 4 points with circular gold icons
            - Right: High-tech diagnostics clinic photo flush to screen edge
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#08170D] text-white relative overflow-hidden border-y border-[#D5B878]/30">
          <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[400px] lg:min-h-[460px]">
            {/* Left Content Area */}
            <div className="w-full lg:w-[45%] xl:w-[42%] p-6 sm:p-10 lg:p-14 lg:pl-16 xl:pl-24 flex flex-col justify-center relative z-20">
              <div className="max-w-md space-y-3">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {whySection.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-white font-normal leading-[1.15]">
                  {whySection.title}
                </h2>

                <p className="text-white/80 text-xs sm:text-[13.5px] leading-relaxed font-sans">
                  {whySection.desc}
                </p>

                <div className="pt-3">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-[13px] tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span>{whySection.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Middle Column: 4 Vertical Points with Circular Gold Icons */}
            <div className="w-full lg:w-[27%] xl:w-[25%] px-6 sm:px-10 lg:px-4 py-6 sm:py-8 lg:py-0 flex flex-col justify-center space-y-4 sm:space-y-5 relative z-20">
              {whySection.stats.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full border border-[#D5B878]/70 bg-[#08170D] flex items-center justify-center text-[#ECCF96] shrink-0 shadow-sm mt-0.5">
                      <ItemIcon className="w-4.5 h-4.5 stroke-[1.6]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-[13.5px] font-semibold text-[#ECCF96] leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] text-white/80 leading-snug mt-0.5 font-sans">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side: Campus & Lab Architecture Photo extending to the far right edge */}
            <div className="w-full lg:w-[28%] xl:w-[33%] relative min-h-[260px] sm:min-h-[320px] lg:min-h-full shrink-0">
              <Image
                src="/images/areas/diagnostics.jpg"
                alt="NabiOta Diagnostics Excellence"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Seamless gradient fade from left dark forest green into photo */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#08170D] to-transparent pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#08170D] to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4: THE 4-STEP DIAGNOSTIC JOURNEY (UNTERSUCHUNGSWEG)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] relative overflow-hidden">
          {/* Subtle Botanical Watermark Accent in Top-Left */}
          <div className="absolute -top-6 -left-6 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 pointer-events-none opacity-70 z-0 select-none">
            <Image
              src="/images/areas/botanical-branch-clean.png"
              alt="Botanical Foliage"
              fill
              className="object-contain object-top-left -scale-x-100"
              priority
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="max-w-2xl mb-12 sm:mb-14">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#B89650] uppercase block mb-2">
                {isRu ? "СТРУКТУРИРОВАННЫЙ ПРОЦЕСС" : isEn ? "PATIENT JOURNEY" : "DER UNTERSUCHUNGSABLAUF"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
                {isRu
                  ? "4 шага к точному и безопасному диагнозу"
                  : isEn
                  ? "4 Steps to Precise Diagnostic Clarity"
                  : "In 4 Schritten zu Ihrem präzisen Befund"}
              </h2>
              <p className="text-xs sm:text-[13.5px] text-[#556358] mt-2 font-sans">
                {isRu
                  ? "От первого звонка до передачи цифровых данных вашему врачу — прозрачный, комфортный и быстрый маршрут."
                  : isEn
                  ? "From your first appointment inquiry to seamless digital image transfer—structured, reassuring, and swift."
                  : "Von der schnellen Terminvereinbarung bis zur sicheren Befundübermittlung an Ihren behandelnden Arzt."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((ws, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EDE8DE] shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl sm:text-3xl text-[#B89650] font-normal">
                        {ws.step}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#D5B878]/50 flex items-center justify-center text-[#B89650]">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#142318] font-normal mb-2 leading-snug">
                      {ws.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#556358] leading-relaxed font-sans">
                      {ws.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#EDE8DE]/60 text-[11px] text-[#B89650] font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89650]" />
                    <span>NabiOta® Service</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5: CLINICAL INDICATIONS OVERVIEW
        ══════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 bg-[#FAF8F5] border-t border-[#EDE8DE]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                  {isRu ? "ПОКАЗАНИЯ К ИССЛЕДОВАНИЯМ" : isEn ? "INDICATIONS SPECTRUM" : "INDIKATIONSSPEKTRUM"}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
                  {isRu
                    ? "Когда необходима специализированная диагностика?"
                    : isEn
                    ? "When is High-End Imaging Indicated?"
                    : "Wann ist bildgebende Diagnostik indiziert?"}
                </h2>
                <p className="text-xs sm:text-[13.5px] text-[#556358] leading-relaxed font-sans">
                  {isRu
                    ? "Своевременная визуализация позволяет обнаружить патологии на ранних бессимптомных стадиях, предотвратить осложнения и составить точный план консервативного или хирургического лечения."
                    : isEn
                    ? "Early imaging detects pathologies before symptoms escalate, preventing complications and guiding targeted surgical or conservative clinical care."
                    : "Frühzeitige Schnittbildgebung erkennt Veränderungen vor Symptomverschärfungen und ermöglicht die exakte Planung konservativer oder operativer Therapien."}
                </p>

                <div className="pt-2">
                  <div className="p-4 rounded-xl bg-white border border-[#D5B878]/40 shadow-sm flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#B89650] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#556358] leading-snug">
                      {isRu
                        ? "Мы принимаем пациентов по направлениям всех страховых касс, частных страховок, а также по самообращению."
                        : isEn
                        ? "We serve privately insured, statutory health insured (with referral), and self-paying patients."
                        : "Wir betreuen Privatversicherte, Selbstzahler sowie gesetzlich versicherte Patienten nach fachärztlicher Überweisung."}
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Indication Categories */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {indications.map((ind, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EDE8DE] shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
                  >
                    <h4 className="font-serif text-base sm:text-lg text-[#142318] font-normal pb-2.5 mb-3 border-b border-[#EDE8DE] flex items-center justify-between">
                      <span>{ind.category}</span>
                      <span className="w-2 h-2 rounded-full bg-[#B89650]" />
                    </h4>
                    <ul className="space-y-2">
                      {ind.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-xs text-[#425046] font-medium leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B89650] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 6: SIGNATURE PANORAMIC MOUNTAIN CTA BANNER
            - Mountain background photo with dark forest green overlay
            - Gold border lines top and bottom
            - Eyebrow, Title, Description, Gold Button
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden border-y border-[#D5B878]/60">
          {/* Background Mountain Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/values/mountains-bg.jpg"
              alt="Alps panoramic background"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark Forest Green gradient overlay for luxury contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#08170D]/94 via-[#08170D]/88 to-[#08170D]/94" />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="max-w-2xl mx-auto text-center space-y-4 sm:space-y-5">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.26em] text-[#C5A56A] uppercase block">
                {isRu ? "ЗДОРОВЬЕ НАЧИНАЕТСЯ С ТОЧНОСТИ" : isEn ? "PRECISION FOR YOUR HEALTH" : "GESUNDHEIT BEGINNT MIT PRÄZISION"}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white font-normal leading-[1.18]">
                {isRu
                  ? "Нужна своевременная и точная диагностика?"
                  : isEn
                  ? "Require Timely & Precise Diagnostics?"
                  : "Benötigen Sie eine zeitnahe Diagnostik?"}
              </h2>

              <p className="text-white/85 text-xs sm:text-[14px] leading-relaxed font-sans max-w-xl mx-auto">
                {isRu
                  ? "Запишитесь на МРТ 3 Тесла, низкодозовую КТ или рентген в центрах NabiOta®. Мы гарантируем бережное отношение, минимальные сроки ожидания и исчерпывающее врачебное заключение."
                  : isEn
                  ? "Schedule your 3-Tesla MRI, low-dose CT, or digital X-ray at NabiOta® diagnostics centers. Fast appointments, maximum patient comfort, and reliable reports for you and your physicians."
                  : "Vereinbaren Sie Ihren Untersuchungstermin für 3T-MRT, Niedrigdosis-CT oder volldigitales Röntgen – schnell, digital und mit höchster radiologischer Fachexpertise."}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href={`/${locale}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-[13.5px] tracking-wide shadow-lg transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>{isRu ? "Записаться на прием" : isEn ? "Book an Appointment" : "Termin vereinbaren"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/${locale}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/30 hover:border-[#D5B878] text-white hover:text-[#ECCF96] font-medium text-xs sm:text-[13px] transition-all bg-white/5 backdrop-blur-sm"
                >
                  <span>{isRu ? "Связаться с центром" : isEn ? "Direct Contact" : "Direkter Kontakt"}</span>
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
