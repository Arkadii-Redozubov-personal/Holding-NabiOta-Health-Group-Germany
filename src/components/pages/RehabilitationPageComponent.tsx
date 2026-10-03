"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Heart,
  Activity,
  FileText,
  User,
  Phone,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Dumbbell,
  Waves,
  Award,
  Zap,
  Check,
  Building2,
  MapPin,
  ChevronDown,
  Layers,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";

// ── Custom SVG Icons for Rehabilitation Modalities ──
function WalkingExoskeletonIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="4" r="2" />
      <path d="M9 20l3-6 3 6" />
      <path d="M6 12l6-4 6 4" />
      <path d="M12 8v6" />
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
    </svg>
  );
}

function SpineMobilityIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2v20" />
      <path d="M8 5c2-1 6-1 8 0" />
      <path d="M7 9c3-1.2 7-1.2 10 0" />
      <path d="M6 13c4-1.5 8-1.5 12 0" />
      <path d="M7 17c3-1.2 7-1.2 10 0" />
      <path d="M8 21c2-1 6-1 8 0" />
    </svg>
  );
}

function GoldCircleCheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" stroke="#B89650" strokeWidth="1.2" />
      <path d="M6.5 10.2L8.8 12.5L13.5 7.8" stroke="#B89650" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Icons for Skrin 2 stats ──
function RehabCloverIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="9" cy="9" r="3.5" />
      <circle cx="15" cy="9" r="3.5" />
      <circle cx="9" cy="15" r="3.5" />
      <circle cx="15" cy="15" r="3.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function SatisfactionBadgeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5c1 1 2.2 1.5 3.5 1.5s2.5-.5 3.5-1.5" />
      <circle cx="9" cy="9.5" r="1" fill="currentColor" />
      <circle cx="15" cy="9.5" r="1" fill="currentColor" />
    </svg>
  );
}

function SupportShieldIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ExperienceAwardIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" />
      <path d="M12 6.5v4" />
    </svg>
  );
}

interface Props {
  locale?: SupportedLocale;
}

export function RehabilitationPageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const heroData = {
    title: isRu ? "Реабилитация" : isEn ? "Rehabilitation" : "Rehabilitation",
    eyebrow: isRu ? "ВОССТАНОВЛЕНИЕ И ТЕРАПИЯ" : isEn ? "REHABILITATION & MOBILITY" : "REHABILITATION & THERAPIE",
    desc: isRu
      ? "NabiOta® Rehabilitation & Therapy Center объединяет доказательную физиотерапию, роботизированную тренировку ходьбы, гидротерапию и индивидуальные протоколы восстановления для быстрого и безопасного возвращения к полноценной жизни."
      : isEn
      ? "NabiOta® Rehabilitation & Therapy Center combines evidence-based physiotherapy, robotic gait training, hydrotherapy, and personalized reconditioning programs for a rapid, sustainable return to mobility and independence."
      : "Das NabiOta® Rehabilitations- und Therapiezentrum begleitet Patienten nach operativen Eingriffen, Sportverletzungen und bei neurologischen Leiden. Mit evidenzbasierten Methoden, robotischer Gerätetechnik und persönlicher Betreuung stellen wir Ihre Mobilität nachhaltig wieder her.",
  };

  const heroBadges = [
    {
      icon: <SpineMobilityIcon className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Мультидисциплинарно" : isEn ? "Multidisciplinary" : "Interdisziplinär",
      sub: isRu ? "Врачи, ЛФК, эрготерапия" : isEn ? "Physio, Sports, Ergo" : "Ärzte, Physio, Ergo",
    },
    {
      icon: <WalkingExoskeletonIcon className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Роботизированная" : isEn ? "Robotic-Assisted" : "Robotik-Assistiert",
      sub: isRu ? "Технология ходьбы" : isEn ? "Gait & Anti-Gravity" : "AlterG® & Gangtrainer",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Все кассы" : isEn ? "Insurance Covered" : "Alle Kassen",
      sub: isRu ? "GKV, PKV, BG & DRV" : isEn ? "GKV, PKV, BG & DRV" : "GKV, PKV, BG & DRV",
    },
  ];

  // ── Section 1: 6 Specialized Rehabilitation Areas ──
  const specializations = [
    {
      id: "ortho",
      title: isRu ? "Ортопедическая реабилитация" : isEn ? "Orthopedic Rehabilitation" : "Orthopädische Rehabilitation",
      badge: isRu ? "Суставы & Позвоночник" : isEn ? "Joints & Spine" : "Gelenke & Wirbelsäule",
      desc: isRu
        ? "Комплексное восстановление после эндопротезирования тазобедренного и коленного суставов, операций на позвоночнике, артроскопии связок и переломов."
        : isEn
        ? "Specialized rehabilitation following total hip/knee replacement, spine stabilization, ligament reconstructions, and traumatic fractures."
        : "Gezielte Rehabilitation nach Gelenkersatz (Hüft-/Knie-TEP), Wirbelsäulenoperationen, Kreuzbandplastiken und komplexen Frakturen.",
      image: "/images/areas/rehabilitation.webp",
      features: isRu
        ? ["Ранняя безболезненная мобилизация", "Восстановление биомеханики сустава", "Укрепление мышечного корсета"]
        : isEn
        ? ["Early pain-free joint mobilization", "Restoration of natural gait mechanics", "Stabilizing deep musculature"]
        : ["Frühfunktionelle Mobilisation", "Wiederherstellung des Gangbilds", "Gezielter Muskelaufbau & Kräftigung"],
    },
    {
      id: "neuro",
      title: isRu ? "Неврологическая реабилитация" : isEn ? "Neurological Rehabilitation" : "Neurologische Rehabilitation",
      badge: isRu ? "ЦНС & Нейропластичность" : isEn ? "Neuroplasticity" : "Neuroplastizität",
      desc: isRu
        ? "Восстановление двигательных и координационных функций после инсульта, черепно-мозговых травм, при болезни Паркинсона и полинейропатии."
        : isEn
        ? "Re-education of motor skills, coordination, and independence after stroke, brain injury, Parkinson's disease, and neuropathies."
        : "Wiedererlangung von Bewegung, Gleichgewicht und Selbstständigkeit nach Schlaganfall, Schädel-Hirn-Trauma oder bei Parkinson.",
      image: "/images/services/therapie.webp",
      features: isRu
        ? ["Методики Бобат и PNF", "Роботизированный тренажер ходьбы", "Тренировка координации и равновесия"]
        : isEn
        ? ["Bobath & PNF therapy concepts", "Robotic exoskeleton gait recovery", "Postural balance and fall prevention"]
        : ["Therapie nach Bobath & PNF", "Robotische Gangrehabilitation", "Gleichgewichts- & Koordinationstraining"],
    },
    {
      id: "sport",
      title: isRu ? "Спортивная физиотерапия" : isEn ? "Sports Physiotherapy & Return-to-Play" : "Sportphysiotherapie & Return-to-Play",
      badge: isRu ? "Спорт высших достижений" : isEn ? "Athletic Excellence" : "Leistungssport",
      desc: isRu
        ? "Индивидуальные программы для профессиональных спортсменов и любителей: изокинетическое тестирование, функциональный тренинг и безопасный возврат в спорт."
        : isEn
        ? "Evidence-based rehabilitation for competitive and recreational athletes: isokinetic testing, agility drills, and return-to-competition clearance."
        : "Wissenschaftlich fundiertes Aufbautraining für Leistungs- und Freizeitsportler mit Isokinetik, Schnelligkeit und sportspezifischen Belastungstests.",
      image: "/images/rehabilitation/equipment-gait.webp",
      features: isRu
        ? ["Изокинетика Biodex", "Плиометрический тренинг", "Критерии Return-to-Activity"]
        : isEn
        ? ["Biodex isokinetic strength testing", "Agility and plyometric training", "Structured Return-to-Play milestones"]
        : ["Biodex-Kraftdiagnostik", "Pliometrisches Funktionstraining", "Strukturierte Return-to-Activity-Tests"],
    },
    {
      id: "cardio",
      title: isRu ? "Кардиологическая реабилитация" : isEn ? "Cardiological Rehabilitation" : "Kardiologische Rehabilitation",
      badge: isRu ? "Сердце & Выносливость" : isEn ? "Cardiovascular" : "Herz-Kreislauf",
      desc: isRu
        ? "Дозированные аэробные тренировки под непрерывным ЭКГ-мониторингом после инфаркта миокарда, стентирования и кардиохирургических вмешательств."
        : isEn
        ? "Monitored aerobic reconditioning under continuous telemetry following myocardial infarction, stent placement, and bypass surgery."
        : "Kontrolliertes Ausdauertraining unter kontinuierlicher EKG-Telemetrie nach Herzinfarkt, Stent-Implantation oder Bypass-Operationen.",
      image: "/images/areas/cardiology-focus.webp",
      features: isRu
        ? ["Непрерывная телеметрия пульса и ЭКГ", "Обучение безопасному пульсовому режиму", "Контроль кардиолога"]
        : isEn
        ? ["Continuous telemetry monitoring", "Target heart-rate zone management", "Supervising cardiologist guidance"]
        : ["Telemetrisches Belastungs-EKG", "Gezieltes Ausdauertraining", "Regelmäßige kardiologische Kontrolle"],
    },
    {
      id: "hydro",
      title: isRu ? "Гидрокинезотерапия в бассейне" : isEn ? "Medical Hydrotherapy & Aquatic Rehab" : "Medizinische Hydrotherapie",
      badge: isRu ? "Теплая вода 32°C" : isEn ? "Warm Water 32°C" : "Bewegungsbad 32°C",
      desc: isRu
        ? "Щадящая разгрузка веса тела до 90% в специализированном терапевтическом бассейне с теплой водой для пациентов с выраженным болевым синдромом."
        : isEn
        ? "Buoyancy unloading of up to 90% body weight in a therapeutic warm-water pool, ideal for severe arthritis, early post-op, and chronic back pain."
        : "Schonende Entlastung von Gelenken und Wirbelsäule im warmen Bewegungsbad. Bis zu 90 % Gewichtsreduktion für schmerzfreie Frühmobilisation.",
      image: "/images/rehabilitation/hydrotherapy-pool.webp",
      features: isRu
        ? ["Снижение нагрузки на суставы", "Улучшение лимфооттока", "Релаксация спазмированных мышц"]
        : isEn
        ? ["Zero-gravity joint decompression", "Enhanced lymphatic drainage", "Spasm relief and mobility gains"]
        : ["Gelenkschonende Schwerelosigkeit", "Anregung des Lymphflusses", "Lösung chronischer Muskelverspannungen"],
    },
    {
      id: "ergo",
      title: isRu ? "Эрготерапия и терапия кисти" : isEn ? "Ergotherapy & Hand Therapy" : "Ergotherapie & Handtherapie",
      badge: isRu ? "Моторика & Быт" : isEn ? "Fine Motor Skills" : "Feinmotorik & Alltag",
      desc: isRu
        ? "Восстановление мелкой моторики, чувствительности кисти и пальцев, адаптация к бытовой и профессиональной деятельности после травм и инсультов."
        : isEn
        ? "Rebuilding fine motor dexterity, hand sensitivity, and ergonomic workplace adaptations following trauma, nerve injuries, and surgery."
        : "Wiederherstellung von Feinmotorik, Greiffunktion und Alltagsfähigkeiten nach Sehnen- und Nervenverletzungen oder neurologischen Einschränkungen.",
      image: "/images/contact/clinic-reception.webp",
      features: isRu
        ? ["Индивидуальное ортезирование", "Тренировка бытовых навыков", "Сенсорная интеграция"]
        : isEn
        ? ["Customized splint adaptation", "Daily life activity training (ADL)", "Sensory and cognitive stimulation"]
        : ["Individuelle Schienenanpassung", "Alltagstraining (ADL-Schulung)", "Sensibilitäts- und Krafttraining"],
    },
  ];

  // ── Skrin 2 Data: Unser Ansatz ──
  const approachData = {
    eyebrow: isRu ? "НАШ ПОДХОД" : isEn ? "OUR APPROACH" : "UNSER ANSATZ",
    title: isRu ? "Комплексная забота. По высшим стандартам." : isEn ? "Holistic Care. To the Highest Standards." : "Ganzheitliche Betreuung. Nach höchsten Standards.",
    desc: isRu
      ? "Мы объединяем передовую медицинскую экспертизу, современную терапию и индивидуальный уход для вашего долгосрочного успеха."
      : isEn
      ? "We combine medical expertise with state-of-the-art therapy and personal care – for your long-term recovery."
      : "Wir kombinieren medizinische Expertise mit modernster Therapie und persönlicher Betreuung – für Ihren langfristigen Erfolg.",
    stats: [
      {
        val: "100+",
        label: isRu ? "Пациентов в месяц" : isEn ? "Patients per month" : "Rehabilitationspatienten pro Monat",
        icon: <RehabCloverIcon className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        val: "95%",
        label: isRu ? "Удовлетворенность пациентов" : isEn ? "Patient satisfaction" : "Zufriedenheit unserer Patienten",
        icon: <SatisfactionBadgeIcon className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        val: "24/7",
        label: isRu ? "Забота и поддержка" : isEn ? "Care & support" : "Betreuung und Support",
        icon: <SupportShieldIcon className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        val: ">10",
        label: isRu ? "Лет опыта в реабилитации" : isEn ? "Years of experience" : "Jahre Erfahrung in der Rehabilitation",
        icon: <ExperienceAwardIcon className="w-5 h-5 text-[#ECCF96]" />,
      },
    ],
  };

  // ── Skrin 3 Data: 2-Card Grid (Facilities + Innovation) ──
  const facilitiesCard = {
    badge: isRu ? "СОВРЕМЕННЫЕ УСЛОВИЯ" : isEn ? "MODERN FACILITIES" : "MODERNE EINRICHTUNGEN",
    title: isRu ? "Терапия в особой атмосфере" : isEn ? "Therapy in an Exceptional Setting" : "Therapie in einer besonderen Umgebung",
    desc: isRu
      ? "Наши современные реабилитационные пространства создают идеальные условия для успешного восстановления."
      : isEn
      ? "Our state-of-the-art facilities provide the ideal environment for successful rehabilitation."
      : "Unsere modernen Einrichtungen bieten Ihnen den idealen Rahmen für eine erfolgreiche Rehabilitation.",
    btn: isRu ? "Наше оснащение" : isEn ? "Our Facilities" : "Unsere Ausstattung",
  };

  const innovationCard = {
    eyebrow: isRu ? "ИННОВАЦИИ И ЭКСПЕРТИЗА" : isEn ? "INNOVATION & EXPERTISE" : "INNOVATION & EXPERTISE",
    title: isRu ? "Передовая терапия для вашего здоровья." : isEn ? "Cutting-Edge Therapy for Your Health." : "Modernste Therapie für Ihre Gesundheit.",
    desc: isRu
      ? "С помощью инновационных методик и высокотехнологичного оборудования мы помогаем вам вернуться к активной и независимой жизни."
      : isEn
      ? "With innovative procedures and advanced equipment, we empower you on your journey back to an active and self-determined life."
      : "Mit innovativen Verfahren und modernster Ausstattung unterstützen wir Sie auf Ihrem Weg zurück in ein aktives und selbstbestimmtes Leben.",
    items: isRu
      ? [
          "Высокотехнологичные тренажеры",
          "Цифровой биомеханический анализ",
          "Междисциплинарная команда терапевтов",
          "Индивидуальный контроль прогресса",
        ]
      : isEn
      ? [
          "State-of-the-art exercise equipment",
          "Digital motion & gait analysis",
          "Interdisciplinary therapy team",
          "Individualized progress monitoring",
        ]
      : [
          "Hochmoderne Trainingsgeräte",
          "Digitale Bewegungsanalyse",
          "Interdisziplinäres Therapeutenteam",
          "Individuelle Fortschrittskontrolle",
        ],
  };

  // ── Skrin 4 Data: Process ──
  const processData = {
    eyebrow: isRu ? "НАШ ПРОЦЕСС" : isEn ? "OUR PROCESS" : "UNSER PROZESS",
    title: isRu ? "Ваш путь к возвращению качества жизни." : isEn ? "Your Pathway Back to Greater Quality of Life." : "Ihr Weg zurück zu mehr Lebensqualität.",
    steps: [
      {
        step: "01",
        title: isRu ? "Первичная консультация и диагностика" : isEn ? "Initial Consultation & Diagnostics" : "Erstgespräch & Diagnostik",
        desc: isRu
          ? "Мы анализируем вашу клиническую ситуацию и вместе определяем цели."
          : isEn
          ? "We analyze your condition and jointly establish your personal recovery milestones."
          : "Wir analysieren Ihre Situation und definieren gemeinsam Ihre Ziele.",
        icon: <Stethoscope className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        step: "02",
        title: isRu ? "Индивидуальный план терапии" : isEn ? "Personalized Therapy Plan" : "Individuelle Therapieplanung",
        desc: isRu
          ? "Индивидуальный план с учетом ваших физиологических возможностей."
          : isEn
          ? "A tailored roadmap calibrated to your physiological capabilities and targets."
          : "Ein maßgeschneiderter Plan auf Basis Ihrer Bedürfnisse und Möglichkeiten.",
        icon: <FileText className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        step: "03",
        title: isRu ? "Проведение и сопровождение" : isEn ? "Execution & Guidance" : "Durchführung & Begleitung",
        desc: isRu
          ? "Наши эксперты непрерывно сопровождают вас на всем пути реабилитации."
          : isEn
          ? "Our specialists closely guide and assist you across every phase of rehabilitation."
          : "Unsere Experten begleiten Sie engmaschig durch den gesamten Rehabilitationsprozess.",
        icon: <Activity className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        step: "04",
        title: isRu ? "Долгосрочная забота" : isEn ? "Long-Term Care" : "Langfristige Betreuung",
        desc: isRu
          ? "Мы остаемся рядом и после завершения курса – для вашего устойчивого здоровья."
          : isEn
          ? "We continue by your side even after graduation for enduring mobility and health."
          : "Auch nach der Reha bleiben wir an Ihrer Seite – für Ihre nachhaltige Gesundheit.",
        icon: <Heart className="w-5 h-5 text-[#ECCF96]" />,
      },
    ],
  };

  // ── Team Doctors ──
  const teamDoctors = [
    {
      name: "Dr. med. Michael Weber",
      role: isRu ? "Главный врач отделения реабилитации" : isEn ? "Chief Physician Rehabilitation & Sports Medicine" : "Chefarzt Physikalische & Rehabilitative Medizin",
      spec: isRu ? "Ортопедия, мануальная терапия, спортивная медицина" : isEn ? "Orthopedics, Manual Medicine, Sports Science" : "Orthopädie, Chirotherapie, Sportmedizin",
      image: "/images/areas/doc-michael-weber.webp",
      quote: isRu
        ? "„Наша цель — не просто устранить боль, а полностью восстановить биомеханику и уверенность пациента в каждом движении.“"
        : isEn
        ? "“Our mission is not merely pain relief, but restoring complete biomechanical freedom and confidence in every step.”"
        : "„Unser Ziel ist nicht nur Schmerzfreiheit, sondern die vollständige Wiedererlangung Ihrer Mobilität und Lebensfreude im Alltag.“",
    },
    {
      name: "Julia Keller, M.Sc.",
      role: isRu ? "Ведущий физиотерапевт и координатор программ" : isEn ? "Lead Physical Therapist & Rehabilitation Coordinator" : "Leitende Physiotherapeutin & Reha-Koordinatorin",
      spec: isRu ? "Специалист по AlterG, OMT и реабилитации коленного сустава" : isEn ? "OMT Certified, AlterG Specialist, Knee & Hip Rehab" : "Manuelle Therapie (OMT), AlterG®-Trainerin, Knie- & Hüftreha",
      image: "/images/areas/doc-anna-keller.webp",
      quote: isRu
        ? "„Каждый пациент получает персонализированный план с точно дозированным шагом нагрузки.“"
        : isEn
        ? "“Every recovery plan is engineered like high-performance athletic coaching, calibrated to individual limits.”"
        : "„Mit Empathie, modernster Technik und exakt dosierter Belastung erreichen wir Meilensteine Schritt für Schritt.“",
    },
    {
      name: "Dr. med. Sarah Hoffmann",
      role: isRu ? "Врач-невролог, специалист по нейрореабилитации" : isEn ? "Specialist in Neurological Rehabilitation" : "Fachärztin für Neurologie & Neurorehabilitation",
      spec: isRu ? "Инсульты, болезнь Паркинсона, роботизированная ходьба" : isEn ? "Neuroplasticity, Stroke Recovery, Robotic Locomotion" : "Schlaganfallnachsorge, Parkinson-Therapie, Gangrehabilitation",
      image: "/images/areas/doc-sarah-hoffmann.webp",
      quote: isRu
        ? "„Мозг способен к восстановлению в любом возрасте благодаря регулярному нейропластическому тренингу.“"
        : isEn
        ? "“The nervous system possesses remarkable plasticity when stimulated with structured, repetitive movement.”"
        : "„Das Nervensystem verfügt über enorme Regenerationspotenziale, wenn es gezielt und repetitiv gefördert wird.“",
    },
  ];

  // ── Skrin 5 Data: Testimonials (Patientenstimmen) ──
  const testimonialsData = {
    eyebrow: isRu ? "ОТЗЫВЫ ПАЦИЕНТОВ" : isEn ? "PATIENT VOICES" : "PATIENTENSTIMMEN",
    title: isRu ? "Реальные люди. Реальные успехи." : isEn ? "Real People. Real Successes." : "Echte Menschen. Echte Erfolge.",
    desc: isRu
      ? "Наши пациенты рассказывают о своем опыте, прогрессе и новых перспективах жизни."
      : isEn
      ? "Our patients share their experiences, measurable progress, and restored independence."
      : "Unsere Patienten berichten von ihren Erfahrungen, Fortschritten und neuen Lebensperspektiven.",
    btn: isRu ? "Все отзывы смотреть" : isEn ? "View all reviews" : "Alle Bewertungen ansehen",
    cards: [
      {
        name: "Sabine M.",
        role: isRu ? "Ортопедическая реабилитация" : isEn ? "Orthopedic Rehabilitation" : "Orthopädische Rehabilitation",
        quote: isRu
          ? "„Благодаря профессиональной заботе после операции на колене я смогла ходить быстрее, чем ожидалось. Очень благодарна всей команде.“"
          : isEn
          ? "“Thanks to the professional support, I was able to walk again faster than expected after knee surgery. Deeply grateful to the team.”"
          : "„Dank der professionellen Betreuung konnte ich nach meiner Knie-OP schneller als erwartet wieder laufen. Ich bin dem ganzen Team sehr dankbar.“",
        image: "/images/testimonials/anna-mueller.webp",
      },
      {
        name: "Thomas K.",
        role: isRu ? "Неврологическая реабилитация" : isEn ? "Neurological Rehabilitation" : "Neurologische Rehabilitation",
        quote: isRu
          ? "„Индивидуальная терапия и современные тренажеры очень помогли мне вернуть подвижность и координацию.“"
          : isEn
          ? "“The personalized therapy and modern robotic devices were instrumental in regaining my mobility.”"
          : "„Die individuelle Therapie und die modernen Geräte haben mir sehr geholfen, meine Beweglichkeit zurückzugewinnen.“",
        image: "/images/testimonials/thomas-becker.webp",
      },
      {
        name: "Julia R.",
        role: isRu ? "Кардиологическая реабилитация" : isEn ? "Cardiological Rehabilitation" : "Kardiologische Rehabilitation",
        quote: isRu
          ? "„С самого начала чувствовала себя в надежных руках. Сочетание экспертных знаний и человечности здесь действительно чувствуется.“"
          : isEn
          ? "“I felt warmly supported from day one. The synergy of clinical precision and genuine humanity is truly palpable here.”"
          : "„Ich habe mich von Anfang an gut aufgehoben gefühlt. Die Kombination aus Fachwissen und Menschlichkeit ist hier wirklich spürbar.“",
        image: "/images/testimonials/elena-fischer.webp",
      },
    ],
  };

  // ── FAQs ──
  const faqs = [
    {
      q: isRu ? "Кто оплачивает амбулаторную реабилитацию?" : isEn ? "Who covers the cost of outpatient rehabilitation?" : "Wer übernimmt die Kosten für eine ambulante Rehabilitation?",
      a: isRu
        ? "Амбулаторная реабилитация покрывается всеми государственными больничными кассами (GKV), частными медицинскими страховками (PKV), профсоюзами от несчастных случаев (BG) и пенсионным страхованием (Deutsche Rentenversicherung) при наличии врачебного направления."
        : isEn
        ? "Outpatient rehabilitation is fully recognized and funded by statutory health insurances (GKV), private insurers (PKV), workers' compensation boards (Berufsgenossenschaften), and the German Pension Insurance (DRV) upon physician referral."
        : "Ambulante Reha-Maßnahmen sowie Rezepte für Physiotherapie und Ergotherapie werden von allen gesetzlichen Krankenkassen (GKV), privaten Krankenversicherungen (PKV), Berufsgenossenschaften (BG) und der Deutschen Rentenversicherung (DRV) übernommen.",
    },
    {
      q: isRu ? "В чем преимущество амбулаторной реабилитации перед стационаром?" : isEn ? "What are the advantages of outpatient over inpatient rehabilitation?" : "Welche Vorteile bietet die ambulante Reha im Vergleich zur stationären?",
      a: isRu
        ? "Пациент ежедневно проходит полный спектр высокоинтенсивных процедур в нашей клинике, но вечера и выходные проводит дома в привычной комфортной семейной обстановке, сохраняя социальные связи."
        : isEn
        ? "Patients receive university-grade, high-intensity daily clinical treatments while sleeping and recovering at home in their familiar domestic environment, maintaining social and family balance."
        : "Sie erhalten die gleiche hochintensive medizinische und therapeutische Versorgung wie in einer Kurklinik, schlafen jedoch in Ihrem eigenen Bett und bleiben in Ihrem gewohnten familiären Umfeld.",
    },
    {
      q: isRu ? "Как получить направление в ваш центр?" : isEn ? "How do I get a prescription or referral to NabiOta?" : "Wie erhalte ich eine Verordnung für das NabiOta Rehazentrum?",
      a: isRu
        ? "Направление оформляется лечащим хирургом в стационаре перед выпиской (AHB — Anschlussheilbehandlung) либо вашим участковым ортопедом/неврологом через стандартную форму направления (Muster 61 или рецепт на физиотерапию)."
        : isEn
        ? "Referrals can be initiated directly by your hospital surgeon prior to discharge (Anschlussheilbehandlung - AHB) or prescribed by your resident orthopedic specialist or neurologist."
        : "Entweder veranlasst der Sozialdienst des Akutkrankenhauses direkt nach Ihrer OP eine Anschlussheilbehandlung (AHB), oder Ihr behandelnder Facharzt (Orthopäde, Neurologe, Hausarzt) stellt eine Verordnung aus.",
    },
    {
      q: isRu ? "Есть ли возможность продолжать тренировки после завершения курса?" : isEn ? "Can I continue therapy after completing the primary program?" : "Gibt es Nachsorgeprogramme wie T-RENA oder IRENA?",
      a: isRu
        ? "Да, мы аккредитованы для проведения программ долгосрочной поддерживающей терапии T-RENA и IRENA от пенсионного фонда, а также предлагаем медицинский абонемент для самостоятельных тренировок."
        : isEn
        ? "Yes, our centers are accredited for official DRV aftercare programs (T-RENA and IRENA), as well as ongoing medical health club memberships supervised by our exercise physiologists."
        : "Ja, wir sind anerkannte Einrichtung für T-RENA und IRENA der Deutschen Rentenversicherung. Zudem können Sie auf unserer medizinischen Trainingsfläche im Rahmen von Präventionskursen weiter trainieren.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      <Header currentLocale={locale} />

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION (UNIFIED PHOTO 4 FORMAT WITH BOTANICAL GOLD)
      ══════════════════════════════════════════════════════════ */}
      <PageHero
        breadcrumb={
          <Breadcrumb
            items={[
              { label: isRu ? "Главная" : isEn ? "Home" : "Startseite", href: `/${locale}` },
              { label: isRu ? "Направления" : isEn ? "Divisions" : "Unternehmensbereiche", href: `/${locale}/areas` },
              { label: heroData.title },
            ]}
          />
        }
        eyebrow={heroData.eyebrow}
        title={heroData.title}
        description={heroData.desc}
        badges={heroBadges}
        imageSrc="/images/areas/rehabilitation.webp"
        imageAlt="NabiOta Health Group Rehabilitation"
      />

      {/* ══════════════════════════════════════════════════════════
          SECTION 1: SPECIALIZED REHABILITATION SPECIALIZATIONS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block mb-2">
              {isRu ? "СПЕЦИАЛИЗИРОВАННЫЕ НАПРАВЛЕНИЯ" : isEn ? "SPECIALIZED DISCIPLINES" : "FACHBEREICHE DER REHABILITATION"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
              {isRu
                ? "Индивидуальные программы для каждой клинической цели"
                : isEn
                ? "Targeted Rehabilitation for Every Clinical Indication"
                : "Individuelle Therapiekonzepte für nachhaltige Genesung"}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#556358] mt-3 leading-relaxed">
              {isRu
                ? "От ортопедического восстановления после эндопротезирования до тонкой нейрореабилитации и возвращения в спорт — мы объединяем врачебную экспертизу и современные методики."
                : isEn
                ? "From orthopedic post-operative recovery to neurological re-education and competitive athletic return-to-play — our certified specialists guide every milestone."
                : "Von der Wiedererlangung der Gehfähigkeit nach Gelenkersatz bis hin zur neurologischen Frühreha bündeln wir medizinisches Fachwissen mit modernster Bewegungstherapie."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {specializations.map((spec) => (
              <div
                key={spec.id}
                className="bg-white rounded-2xl border border-[#EDE8DE] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with Tag */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={spec.image}
                      alt={spec.title}
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[9.5px] font-bold tracking-wider uppercase text-[#8C6D2B] bg-[#FAF5EC]/95 backdrop-blur-xs border border-[#EADBBD] px-2.5 py-1 rounded-md shadow-xs">
                      {spec.badge}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-lg sm:text-[19px] text-[#132218] font-normal leading-snug mb-2 group-hover:text-[#B89650] transition-colors">
                      {spec.title}
                    </h3>
                    <p className="font-sans text-xs text-[#556358] leading-relaxed mb-4">
                      {spec.desc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2 border-t border-[#F0ECE1]">
                      {spec.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <GoldCircleCheckIcon className="w-3.5 h-3.5 shrink-0" />
                          <span className="font-sans text-[11.5px] text-[#3D4B40] font-medium">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142318] group-hover:text-[#B89650] transition-colors"
                  >
                    <span>{isRu ? "Записаться на курс" : isEn ? "Consult with specialist" : "Therapie anfragen"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: UNSER ANSATZ (MATCHING SKRIN 2 WITH LEAVES-BG)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#0B2516] text-white shadow-xl border border-[#D5B878]/30 min-h-[460px] flex flex-col lg:flex-row">
            {/* Left side: Parallel bars image with subtle fade */}
            <div className="relative w-full lg:w-[46%] min-h-[340px] lg:min-h-full shrink-0">
              <Image
                src="/images/rehabilitation/parallel-bars.webp"
                alt="Unser Ansatz Rehabilitation"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B2516]/40 hidden lg:block" />
            </div>

            {/* Middle botanical leaves transition overlay (matching Skrin 2 leaves-bg) */}
            <div className="hidden lg:block absolute left-[38%] xl:left-[41%] top-0 bottom-0 w-44 pointer-events-none z-10 overflow-hidden">
              <Image
                src="/images/values/leaves-bg.webp"
                alt=""
                fill
                className="object-cover object-left opacity-90 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B2516]/50 to-[#0B2516]" />
            </div>

            {/* Right side: Dark green card with leaves texture and 4 stats */}
            <div className="relative w-full lg:w-[54%] p-7 sm:p-10 lg:p-12 flex flex-col justify-between z-10">
              {/* Subtle background foliage texture */}
              <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
                <Image
                  src="/images/values/leaves-bg.webp"
                  alt=""
                  fill
                  className="object-cover object-right"
                />
              </div>

              <div className="relative z-10 space-y-3.5 max-w-xl">
                <span className="text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {approachData.eyebrow}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-[1.18]">
                  {approachData.title}
                </h2>

                <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed pt-1">
                  {approachData.desc}
                </p>
              </div>

              {/* 4 Stats in a row with gold outlined icons & dividers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 mt-6 border-t border-white/15 relative z-10">
                {approachData.stats.map((s, idx) => (
                  <div
                    key={idx}
                    className={`space-y-2 ${
                      idx < 3 ? "sm:border-r sm:border-white/15 sm:pr-4" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full border border-[#D5B878] bg-[#0B2516] flex items-center justify-center text-[#ECCF96] shadow-sm">
                      {s.icon}
                    </div>

                    <span className="font-serif text-2xl sm:text-3xl text-white font-normal block leading-tight pt-1">
                      {s.val}
                    </span>

                    <span className="font-sans text-[11px] sm:text-xs text-white/75 block leading-snug">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: 2-CARD GRID (MATCHING SKRIN 3)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Left Card: Pool Photo with Tag & Button */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#EDE8DE] min-h-[380px] sm:min-h-[420px] flex flex-col justify-between p-7 sm:p-9 group">
              <Image
                src="/images/rehabilitation/facility-pool.webp"
                alt="Moderne Einrichtungen"
                fill
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

              {/* Top Badge */}
              <div className="relative z-10">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E5D2A4] text-[#132218] text-[10.5px] font-bold uppercase tracking-wider shadow-sm">
                  {facilitiesCard.badge}
                </span>
              </div>

              {/* Bottom Info */}
              <div className="relative z-10 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                  {facilitiesCard.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed max-w-md">
                  {facilitiesCard.desc}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/${locale}/services/therapie-rehabilitation`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#132218] font-semibold text-xs tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span>{facilitiesCard.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Card: Innovation & Checklist */}
            <div className="relative rounded-3xl bg-[#EEF4EE] border border-[#DEE7DE] shadow-xs p-7 sm:p-9 lg:p-10 flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[420px]">
              {/* Botanical foliage watermark on right edge */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 sm:w-80 h-72 sm:h-96 pointer-events-none opacity-40 select-none">
                <Image
                  src="/images/areas/botanical-branch-clean.webp"
                  alt=""
                  fill
                  className="object-contain object-right"
                />
              </div>

              <div className="relative z-10 space-y-3 max-w-xl">
                <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#2C5238] uppercase block">
                  {innovationCard.eyebrow}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-[#0B2516] font-normal leading-snug">
                  {innovationCard.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4B5E50] leading-relaxed pt-1">
                  {innovationCard.desc}
                </p>
              </div>

              {/* Checklist with gold circular checkmarks */}
              <div className="relative z-10 space-y-3 pt-6">
                {innovationCard.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#C5A56A] flex items-center justify-center text-[#8C6D2B] shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[2.4]" />
                    </div>
                    <span className="font-sans text-xs sm:text-[13px] text-[#1A2E20] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: REHABILITATION PROCESS (MATCHING SKRIN 4)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#FAF8F5] relative overflow-hidden border-t border-[#EDE8DE]">
        {/* Botanical leaves watermark on the left edge */}
        <div className="absolute -left-12 top-0 bottom-0 w-64 sm:w-80 pointer-events-none opacity-40 select-none">
          <Image
            src="/images/areas/botanical-branch-clean.webp"
            alt=""
            fill
            className="object-contain object-left -scale-x-100"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left title */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10.5px] font-bold tracking-[0.24em] text-[#8C733E] uppercase block">
                {processData.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0B2516] font-normal leading-tight">
                {processData.title}
              </h2>
            </div>

            {/* Right 4-step cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 pt-4 sm:pt-0 relative">
              {processData.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 pt-8 sm:pt-9 border border-[#E5ECE3] shadow-xs relative flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group mt-4 sm:mt-0"
                >
                  {/* Top round green badge overlapping top edge */}
                  <div className="absolute -top-5 left-5 w-11 h-11 rounded-full bg-[#0B2516] border-2 border-white flex items-center justify-center text-[#ECCF96] shadow-md group-hover:scale-105 transition-transform z-10">
                    {st.icon}
                  </div>

                  <div>
                    <span className="font-sans text-xs font-bold text-[#B89650] block mb-1.5 tracking-wider">
                      {st.step}
                    </span>

                    <h4 className="font-serif text-base text-[#0B2516] font-medium leading-snug mb-2">
                      {st.title}
                    </h4>

                    <p className="font-sans text-[11.5px] text-[#526356] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  {/* Connecting subtle arrow on desktop */}
                  {idx < 3 && (
                    <span className="hidden lg:block absolute -right-3 top-8 text-[#C5A56A] text-sm z-20 pointer-events-none">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: INTERDISCIPLINARY MEDICAL LEADERSHIP
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-22 bg-white border-t border-[#EDE8DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block mb-2">
              {isRu ? "НАША КОМАНДА ЭКСПЕРТОВ" : isEn ? "EXPERT MEDICAL LEADERSHIP" : "UNSERE ÄRZTE & THERAPEUTEN"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
              {isRu
                ? "Высокая врачебная квалификация и чуткая забота"
                : isEn
                ? "Dedicated Physicians & Master Clinicians"
                : "Fachärztliche Leitung & erfahrene Therapeuten"}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#556358] mt-3 leading-relaxed">
              {isRu
                ? "Реабилитация под постоянным наблюдением профильных врачей высшей категории и сертифицированных терапевтов."
                : isEn
                ? "Your recovery is orchestrated by board-certified physiatrists, physical therapists, and sports medicine directors."
                : "Unter ständiger fachärztlicher Aufsicht stimmen unsere Therapeuten jeden Behandlungsschritt eng mit Ihnen ab."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teamDoctors.map((doc, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-2xl border border-[#EDE8DE] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold tracking-wider uppercase text-white bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded">
                      {doc.spec}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-xl text-[#132218] font-normal mb-1">
                      {doc.name}
                    </h3>
                    <p className="font-sans text-xs text-[#B89650] font-semibold mb-3">
                      {doc.role}
                    </p>
                    <p className="font-serif italic text-xs text-[#556358] leading-relaxed">
                      {doc.quote}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142318] group-hover:text-[#B89650] transition-colors"
                  >
                    <span>{isRu ? "Консультация с врачом" : isEn ? "Book appointment" : "Termin anfragen"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 6: PATIENT TESTIMONIALS (MATCHING SKRIN 5)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-22 bg-[#0B2516] text-white relative overflow-hidden border-t border-[#D5B878]/25">
        {/* Botanical Gold Background Texture */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/botanical-gold-bg.webp"
            alt="Botanical Texture"
            fill
            className="object-cover object-center opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2516]/95 via-[#0B2516]/85 to-[#0B2516]/90" />
        </div>

        {/* Decorative corner leaves */}
        <div className="absolute -left-10 -bottom-10 w-72 h-72 pointer-events-none opacity-30 select-none z-0">
          <Image
            src="/images/areas/botanical-branch-clean.webp"
            alt=""
            fill
            className="object-contain object-bottom-left"
          />
        </div>
        <div className="absolute -right-10 -bottom-10 w-72 h-72 pointer-events-none opacity-30 select-none z-0">
          <Image
            src="/images/areas/botanical-branch-clean.webp"
            alt=""
            fill
            className="object-contain object-bottom-right"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Eyebrow, Title, Description, Button */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                {testimonialsData.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                {testimonialsData.title}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm">
                {testimonialsData.desc}
              </p>
              <div className="pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>{testimonialsData.btn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 White Cards */}
            <div className="lg:col-span-8 flex flex-col items-center">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
                {testimonialsData.cards.map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between text-[#132218] border border-[#EDE8DE] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      {/* Avatar */}
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-xs mb-3 bg-neutral-100">
                        <Image
                          src={c.image}
                          alt={c.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>

                      {/* Gold Quotes */}
                      <span className="text-[#C5A56A] text-2xl font-serif leading-none block mb-1">
                        “
                      </span>

                      {/* Quote Text */}
                      <p className="font-sans italic text-xs sm:text-[12.5px] text-[#3D4B40] leading-relaxed">
                        {c.quote}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#F0ECE1] mt-4">
                      <h4 className="font-sans text-xs sm:text-[13px] font-bold text-[#0B2516]">
                        {c.name}
                      </h4>
                      <p className="font-sans text-[11px] text-[#6E7B71]">
                        {c.role}
                      </p>
                      {/* 5 Gold Stars */}
                      <div className="flex items-center gap-1 mt-1 text-[#D4AF67] text-xs">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Navigation Buttons Below (Matching Skrin 5) */}
              <div className="flex items-center justify-center gap-2 pt-6">
                <button
                  type="button"
                  aria-label="Previous"
                  className="w-8 h-8 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] flex items-center justify-center transition-colors shadow-xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  className="w-8 h-8 rounded-full border border-white/30 hover:border-white text-white flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7: INSURANCE & REFERRAL ACCORDION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#EDE8DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block mb-1.5">
              {isRu ? "ВОПРОСЫ И ОТВЕТЫ" : isEn ? "FREQUENTLY ASKED QUESTIONS" : "KOSTENÜBERNAHME & ABLAUF"}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#132218] font-normal">
              {isRu
                ? "Часто задаваемые вопросы о реабилитации"
                : isEn
                ? "Insurance & Referral Questions"
                : "Wichtige Fragen zur Reha-Verordnung"}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#EDE8DE] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="font-serif text-sm sm:text-base text-[#142318] font-normal pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#B89650] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 bg-white border-t border-[#F0ECE1]">
                    <p className="font-sans text-xs sm:text-[13px] text-[#556358] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 8: CONTACT & BOOKING BANNER (FULL-WIDTH BOTANICAL GOLD CTA)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full relative overflow-hidden bg-[#07150C] text-white py-16 sm:py-20 border-t border-[#D5B878]/30">
        {/* Full bleed leaf background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/values/leaves-bg.webp"
            alt="Leaves Background"
            fill
            className="object-cover object-center opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07150C]/95 via-[#07150C]/85 to-[#07150C]/75" />
        </div>

        {/* Botanical leaf watermark */}
        <div className="absolute -right-6 -bottom-6 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-25 select-none z-0">
          <Image
            src="/images/areas/botanical-branch-clean.webp"
            alt=""
            fill
            className="object-contain object-bottom-right"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                {isRu ? "СВЯЖИТЕСЬ С НАМИ" : isEn ? "START YOUR RECOVERY" : "STARTEN SIE IHRE GENESUNG"}
              </span>
              <h3 className="page-hero-title font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                {isRu
                  ? "Готовы вернуться к активной и полноценной жизни?"
                  : isEn
                  ? "Ready to Regain Your Mobility and Independence?"
                  : "Bereit für den nächsten Schritt zurück in Ihre Mobilität?"}
              </h3>
              <p className="hero-text-wrap text-white/75 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
                {isRu
                  ? "Свяжитесь с нами для первичной консультации или быстрой записи на амбулаторную реабилитацию в NabiOta Health Group Germany."
                  : isEn
                  ? "Contact our admissions team directly to discuss your referral, insurance authorization, and therapy scheduling."
                  : "Vereinbaren Sie jetzt einen Termin für Ihre Eingangsuntersuchung oder lassen Sie sich unverbindlich zu Verordnung und Kostenübernahme beraten."}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-[#ECCF96]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D5B878]" />
                  <span>+49 (0) 2161 / 9988-77</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D5B878]" />
                  <span>Mönchengladbach & Partner-Kliniken NRW</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href={`/${locale}/contact`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-lg transition-all duration-200 hover:scale-[1.02] text-center"
              >
                <span>{isRu ? "Записаться на прием" : isEn ? "Request appointment" : "Termin online anfragen"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`/${locale}/services/therapie-rehabilitation`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/30 hover:border-[#D5B878] text-white hover:text-[#ECCF96] font-medium text-xs sm:text-sm transition-all bg-white/5 text-center"
              >
                <span>{isRu ? "Все терапевтические услуги" : isEn ? "View all therapy services" : "Therapieleistungen Übersicht"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer currentLocale={locale} />
    </div>
  );
}
