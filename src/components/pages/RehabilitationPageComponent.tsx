"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
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
import { Container } from "@/components/layout/Container";
import { SupportedLocale } from "@/lib/i18n";
import { businessAreas } from "@/data/areas";

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

function HeartRateRehabIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      <path d="M9 12h2l1 -2l1.5 4l1 -2h2" />
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

interface Props {
  locale?: SupportedLocale;
}

export function RehabilitationPageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
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

  // ── Key Metrics Strip ──
  const metrics = [
    {
      value: "1.400 m²",
      label: isRu ? "Современное пространство терапии" : isEn ? "Advanced Therapy Facility" : "Moderne Therapiefläche",
      sub: isRu ? "Залы ЛФК, гидротерапия, тренажеры" : isEn ? "Gym, hydrotherapy, robotics" : "Trainingshallen & Bewegungsbad",
    },
    {
      value: "15+",
      label: isRu ? "Специализированных терапевтов" : isEn ? "Specialized Therapists" : "Spezialisierte Fachkräfte",
      sub: isRu ? "Врачи, физио-, эрго- и спорт-эксперты" : isEn ? "Physicians, PTs, sports scientists" : "Physio-, Ergo- & Sportwissenschaftler",
    },
    {
      value: "98.4%",
      label: isRu ? "Пациентов восстановили мобильность" : isEn ? "Patient Mobility Recovery Rate" : "Erfolgreiche Mobilisation",
      sub: isRu ? "По объективным функциональным тестам" : isEn ? "Measured via functional assessments" : "Gemäß funktionellen Abschlussbefunden",
    },
    {
      value: "< 48h",
      label: isRu ? "Быстрый старт программы" : isEn ? "Rapid Therapy Start" : "Schneller Therapiebeginn",
      sub: isRu ? "После выписки из стационара" : isEn ? "Post-hospital admission" : "Nach Klinikentlassung oder OP",
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

  // ── Section 2: High-Tech Rehabilitation Equipment ──
  const techEquipment = [
    {
      name: "AlterG® Anti-Gravity Treadmill",
      category: isRu ? "Антигравитационная дорожка" : isEn ? "Anti-Gravity Treadmill" : "Anti-Schwerkraft-Laufband",
      tech: isRu ? "Технология дифференциального давления воздуха NASA" : isEn ? "NASA Differential Air Pressure Technology" : "NASA-Differenzdruck-Technologie",
      desc: isRu
        ? "Позволяет плавно снижать нагрузку собственного веса пациента с шагом в 1% (вплоть до 20% от реального веса). Пациент может начать ходить и бегать уже через несколько дней после операции без боли и риска травмирования имплантата."
        : isEn
        ? "Enables precise body-weight unloading in 1% increments (down to 20% of body weight). Patients resume walking and running days after surgery with zero impact pain and full joint protection."
        : "Ermöglicht eine stufenlose Entlastung des Körpergewichts in 1-%-Schritten auf bis zu 20 % des Eigengewichts. Patienten können bereits kurz nach Operationen schmerzfrei gehen und das physiologische Gangbild trainieren.",
      features: isRu
        ? ["Снижение веса до 80%", "Защита суставов и связок", "Видеоконтроль постановки стопы в реальном времени"]
        : isEn
        ? ["Weight reduction up to 80%", "Full implant & joint protection", "Live video gait feedback system"]
        : ["Entlastung um bis zu 80 %", "Schutz frisch operierter Strukturen", "Echtzeit-Videofeedback zur Schrittanalyse"],
      image: "/images/rehabilitation/equipment-gait.webp",
    },
    {
      name: "Diers 4D Motion® Wirbelsäulenanalyse",
      category: isRu ? "Биомеханический 4D-анализ" : isEn ? "Dynamic 4D Spine & Posture Analysis" : "Dynamische 4D-Wirbelsäulenanalyse",
      tech: isRu ? "Оптическая видеорастрография без рентгеновского облучения" : isEn ? "Radiation-free optical video rasterstereography" : "Strahlungsfreie Lichtrasterstereographie",
      desc: isRu
        ? "Компьютерная система фиксирует трехмерное движение позвоночника и таза в динамике шага с частотой 50 кадров в секунду. Выявляет малейшие мышечные дисбалансы, перекосы таза и функциональные блоки."
        : isEn
        ? "Captures three-dimensional spine and pelvic kinematics in motion at 50 frames per second with zero radiation. Detects subtle muscular imbalances, pelvic tilts, and rotational asymmetries."
        : "Erfasst die dreidimensionale Bewegung von Wirbelsäule, Becken und Beinen während des Gehens. Vollkommen strahlungsfrei liefert das System objektive Daten zu funktionellen Fehlstellungen.",
      features: isRu
        ? ["100% без лучевой нагрузки", "Точность измерений до миллиметра", "Объективный контроль прогресса"]
        : isEn
        ? ["100% radiation-free scanning", "Millimeter-precise motion capture", "Objective before-and-after progress tracking"]
        : ["100 % strahlungsfrei", "Millimetergenaue Funktionsmessung", "Objektive Vorher-Nachher-Vergleiche"],
      image: "/images/diagnostik/scanner-suite.webp",
    },
    {
      name: "Biodex Multi-Joint Isokinetik",
      category: isRu ? "Изокинетический динамометр" : isEn ? "Isokinetic Multi-Joint Dynamometer" : "Isokinetisches Dynamometersystem",
      tech: isRu ? "Компьютеризированное измерение силы и мышечного баланса" : isEn ? "Computer-controlled torque and neuromuscular testing" : "Computergesteuerte Drehmomentmessung",
      desc: isRu
        ? "Золотой стандарт спортивной ортопедии. Обеспечивает безопасное измерение пикового крутящего момента мышц-антагонистов (сгибателей/разгибателей) с адаптивным сопротивлением, исключающим перегрузку связок."
        : isEn
        ? "The clinical gold standard in orthopedic testing. Delivers objective data on quadriceps-to-hamstring ratios and agonist-antagonist balance with adaptive resistance preventing overload."
        : "Der Goldstandard in der muskuloskelettalen Leistungsdiagnostik. Erfasst exakte Kraftverhältnisse zwischen Muskelgruppen und schützt überlastete Sehnen durch computeradaptiven Widerstand.",
      features: isRu
        ? ["Адаптивное сопротивление", "Исключение травмы при тесте", "Официальный допуск к спорту (Return-to-Play)"]
        : isEn
        ? ["Accommodating biofeedback resistance", "Safe testing without overload", "Clear Return-to-Play criteria validation"]
        : ["Adaptiver Widerstand nach Belastung", "Maximale Sicherheit für Gelenke", "Präzise Return-to-Competition-Profile"],
      image: "/images/areas/research-innovation.webp",
    },
  ];

  // ── Section 3: The 4-Phase Recovery Pathway ──
  const pathwaySteps = [
    {
      step: "01",
      title: isRu ? "Диагностика и план" : isEn ? "Initial Assessment & Goal Setting" : "Eingangsdiagnostik & Zielsetzung",
      duration: isRu ? "День 1" : isEn ? "Day 1" : "Tag 1",
      desc: isRu
        ? "Врачебный осмотр, функциональные двигательные тесты, анализ выписок и формулирование конкретных целей реабилитации (SMART-цели)."
        : isEn
        ? "Comprehensive medical intake, joint range-of-motion metrics, pain assessment, and formulation of personalized clinical SMART targets."
        : "Ausführliche fachärztliche Untersuchung, biomechanische Funktionsanalyse und Definition Ihrer persönlichen Mobilitätsziele.",
    },
    {
      step: "02",
      title: isRu ? "Интенсивная терапия" : isEn ? "Intensive Multimodal Therapy" : "Intensive Multimodale Phase",
      duration: isRu ? "Недели 1–3" : isEn ? "Weeks 1–3" : "Wochen 1–3",
      desc: isRu
        ? "Ежедневные индивидуальные занятия с физиотерапевтом, мануальная терапия, лимфодренаж, гидротерапия в бассейне и антигравитационная ходьба."
        : isEn
        ? "Daily one-on-one physiotherapy, joint mobilization, lymphatic drainage, warm-water pool therapy, and unweighted treadmill training."
        : "Tägliche 1-zu-1-Physiotherapie, manuelle Gelenkmobilisation, medizinisches Bewegungsbad und AlterG®-Entlastungstraining.",
    },
    {
      step: "03",
      title: isRu ? "Сила и выносливость" : isEn ? "Functional Reconditioning" : "Kraft- & Belastungsaufbau",
      duration: isRu ? "Недели 3–6" : isEn ? "Weeks 3–6" : "Wochen 3–6",
      desc: isRu
        ? "Медицинский тренинг на современных силовых тренажерах (MTT/KGG), функциональные упражнения на равновесие и адаптация к повседневным нагрузкам."
        : isEn
        ? "Medical training therapy (MTT), progressive resistance conditioning, neuromuscular balance coordination, and occupational ergonomics."
        : "Gerätegestützte Krankengymnastik (KGG), medizinisches Aufbautraining, Propriozeptionstraining und Alltagssimulationen.",
    },
    {
      step: "04",
      title: isRu ? "Устойчивый результат" : isEn ? "Long-Term Prevention & Follow-Up" : "Nachhaltige Prävention (T-RENA)",
      duration: isRu ? "После 6 недель" : isEn ? "Week 6+" : "Ab Woche 6",
      desc: isRu
        ? "Заключительное тестирование с выдачей паспорта подвижности, рекомендации для домашних тренировок и программы поддерживающей терапии (IRENA / T-RENA)."
        : isEn
        ? "Objective completion assessment, personalized home exercise digital plan, and subsidized aftercare programs (T-RENA / IRENA)."
        : "Abschlussdiagnostik mit Mobilitätspass, individualisiertes Heimübungsprogramm und berufsbegleitende Nachsorgeprogramme (T-RENA / IRENA).",
    },
  ];

  // ── Section 4: Indications List ──
  const indicationsCol1 = isRu
    ? [
        "Эндопротезы тазобедренного и коленного суставов",
        "Состояния после операций на межпозвонковых дисках",
        "Пластика крестообразных связок и менисков",
        "Переломы костей и сложные травмы суставов",
        "Хронические боли в спине и шее (дорсопатии)",
        "Артрозы крупных и мелких суставов",
      ]
    : isEn
    ? [
        "Total hip, knee and shoulder joint replacements",
        "Post-operative spinal disc & fusion surgeries",
        "Cruciate ligament (ACL/PCL) and meniscus repairs",
        "Bone fractures, polytrauma and joint luxations",
        "Chronic spinal pain syndromes & disc degeneration",
        "Advanced osteoarthritis and cartilage damage",
      ]
    : [
        "Zustand nach Hüft-, Knie- oder Schulter-TEP",
        "Postoperative Wirbelsäuleneingriffe & Bandscheiben-OPs",
        "Kreuzband-, Meniskus- und Sehnenrekonstruktionen",
        "Komplexe Frakturen und Sportverletzungen",
        "Chronische Wirbelsäulen- und Rückenschmerzen",
        "Fortgeschrittene Arthrose und Gelenkdegeneration",
      ];

  const indicationsCol2 = isRu
    ? [
        "Реабилитация после перенесенного инсульта",
        "Болезнь Паркинсона и рассеянный склероз",
        "Восстановление после инфаркта миокарда и стентирования",
        "Парезы периферических нервов и невриты",
        "Посттравматические лимфостазы и отеки",
        "Постковидный синдром и синдром хронической усталости",
      ]
    : isEn
    ? [
        "Stroke recovery and hemiparesis rehabilitation",
        "Parkinson's disease and multiple sclerosis mobility",
        "Post-myocardial infarction & cardiac surgery conditioning",
        "Peripheral nerve lesions and neuromuscular deficits",
        "Post-traumatic and post-surgical lymphedema",
        "Post-viral fatigue and cardiopulmonary reconditioning",
      ]
    : [
        "Rehabilitation nach ischämischem Schlaganfall",
        "Morbus Parkinson und Multiple Sklerose",
        "Nachsorge nach Herzinfarkt und Bypass-Eingriffen",
        "Periphere Nervenläsionen und Paresen",
        "Posttraumatische und postoperative Lymphödeme",
        "Konditionierung bei Long-Covid und Erschöpfungssyndromen",
      ];

  // ── Section 5: Interdisciplinary Medical Team ──
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

  // ── Section 6: Patient Testimonials ──
  const testimonials = [
    {
      quote: isRu
        ? "После сложной операции по замене тазобедренного сустава я очень боялся нагружать ногу. Благодаря антигравитационной дорожке AlterG я уже на третьей неделе ходил без костылей! Огромная благодарность доктору Веберу и команде физиотерапевтов."
        : isEn
        ? "Following complex hip replacement surgery, I was hesitant to bear weight. The AlterG anti-gravity treadmill allowed me to walk effortlessly without crutches by week three! Exceptional care from Dr. Weber and the therapy team."
        : "Nach meiner Hüft-OP hatte ich große Angst vor Schmerzen beim Auftreten. Auf dem AlterG-Laufband konnte ich federleicht gehen und nach nur 3 Wochen die Gehhilfen ablegen. Ein riesiger Gewinn an Lebensqualität!",
      name: "Thomas Becker, 56",
      case: isRu ? "Замена тазобедренного сустава (Hüft-TEP)" : isEn ? "Total Hip Arthroplasty" : "Hüft-Endoprothese",
      image: "/images/testimonials/thomas-becker.webp",
    },
    {
      quote: isRu
        ? "Как профессиональная теннисистка после разрыва передней крестообразной связки, я нуждалась в бескомпромиссном подходе. Биомеханические тесты Biodex и гидротерапия вернули меня на корт быстрее прогнозов врачей."
        : isEn
        ? "As a competitive athlete recovering from an ACL tear, I required sports-science precision. Biodex isokinetics and hydrotherapy accelerated my return to the court months ahead of schedule."
        : "Nach meinem Kreuzbandriss war die sportphysiotherapeutische Betreuung absolute Spitzenklasse. Die Kraftmessungen auf dem Biodex gaben mir die Sicherheit, wieder schmerzfrei Vollgas zu geben.",
      name: "Anna Müller, 28",
      case: isRu ? "Разрыв передней крестообразной связки (П blow)" : isEn ? "ACL Reconstruction Recovery" : "Vordere Kreuzbandplastik",
      image: "/images/testimonials/anna-mueller.webp",
    },
    {
      quote: isRu
        ? "После ишемического инсульта рука практически не двигалась. За 8 недель эрготерапии и роботизированных занятий в NabiOta я снова могу самостоятельно держать столовые приборы и печатать на компьютере."
        : isEn
        ? "Following an ischemic stroke, my fine motor control was severely limited. Through 8 weeks of intensive occupational therapy and gait training at NabiOta, I have regained my daily independence."
        : "Nach meinem leichten Schlaganfall war meine rechte Hand fast gelähmt. Die gezielte Ergotherapie und robotische Bewegungsübungen haben mir meine Selbstständigkeit im Alltag zurückgegeben.",
      name: "Elena Fischer, 63",
      case: isRu ? "Неврологическая реабилитация после инсульта" : isEn ? "Post-Stroke Neurological Recovery" : "Neuro-Reha nach Schlaganfall",
      image: "/images/testimonials/elena-fischer.webp",
    },
  ];

  // ── Section 7: Insurance & Referral FAQ ──
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
          METRICS STRIP (4 HIGHLIGHT CARDS)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EDE8DE] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_26px_rgba(0,0,0,0.06)] transition-all duration-300 group"
            >
              <span className="font-serif text-2xl sm:text-3xl text-[#142318] group-hover:text-[#B89650] transition-colors font-medium">
                {m.value}
              </span>
              <h4 className="font-sans text-xs sm:text-[13px] font-bold text-[#142318] mt-1 leading-snug">
                {m.label}
              </h4>
              <p className="font-sans text-[11px] text-[#6E756D] mt-0.5 leading-relaxed">
                {m.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

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
          SECTION 2: HIGH-TECH REHABILITATION & ROBOTICS (DARK LUXURY)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-18 sm:py-24 bg-[#07150C] text-white relative overflow-hidden border-y border-[#D5B878]/25">
        {/* Botanical leaf watermark */}
        <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-20 select-none">
          <Image
            src="/images/areas/botanical-branch-clean.webp"
            alt=""
            fill
            className="object-contain object-top-right"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-2">
              {isRu ? "ИННОВАЦИИ В РЕАБИЛИТАЦИИ" : isEn ? "ROBOTICS & ADVANCED TECHNOLOGY" : "SPITZENTECHNOLOGIE & ROBOTIK"}
            </span>
            <h2 className="page-hero-title font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
              {isRu
                ? "Высокие технологии для бережного и быстрого восстановления"
                : isEn
                ? "Next-Generation Rehabilitation Equipment"
                : "Innovative Gerätetechnik für maximalen Therapieerfolg"}
            </h2>
            <p className="hero-text-wrap text-xs sm:text-sm text-white/75 mt-3 max-w-2xl mx-auto leading-relaxed">
              {isRu
                ? "Мы инвестируем в передовые медицинские тренажеры с биологической обратной связью, используемые в ведущих университетских центрах Европы."
                : isEn
                ? "We integrate world-renowned robotic rehabilitation devices and NASA-engineered anti-gravity treadmills for pain-free early weight-bearing."
                : "Durch den Einsatz robotikgestützter Gangsysteme und computerisierter Biofeedback-Technologie beschleunigen wir den Heilungsverlauf spürbar."}
            </p>
          </div>

          {/* Interactive Equipment Showcase */}
          <div className="bg-[#0C1F13] border border-[#D5B878]/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
            {/* Tabs Selector */}
            <div className="flex flex-wrap gap-2.5 pb-6 border-b border-white/10 mb-8">
              {techEquipment.map((eq, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === idx
                      ? "bg-[#E5D2A4] text-[#07150C] font-semibold shadow-md"
                      : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {eq.name}
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Descriptions */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D5B878]">
                  {techEquipment[activeTab].category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                  {techEquipment[activeTab].name}
                </h3>
                <p className="text-xs text-[#ECCF96] font-medium tracking-wide">
                  {techEquipment[activeTab].tech}
                </p>
                <p className="text-xs sm:text-[13.5px] text-white/80 leading-relaxed font-sans pt-1">
                  {techEquipment[activeTab].desc}
                </p>

                <div className="space-y-2.5 pt-3">
                  {techEquipment[activeTab].features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#E5D2A4]/20 border border-[#E5D2A4]/60 flex items-center justify-center text-[#E5D2A4] shrink-0">
                        <Check className="w-3 h-3 stroke-[2.2]" />
                      </div>
                      <span className="text-xs text-white/90 font-sans">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: High-Res Image */}
              <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src={techEquipment[activeTab].image}
                  alt={techEquipment[activeTab].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07150C]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: HYDROTHERAPY & MEDICAL POOL (WARM WATER RECOVERY)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-22 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Pool Image with Botanical Badge */}
            <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-[#EDE8DE] shadow-xl group">
              <Image
                src="/images/rehabilitation/hydrotherapy-pool.webp"
                alt="NabiOta Hydrotherapy Pool"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF5EC] border border-[#EADBBD] flex items-center justify-center text-[#B89650] shrink-0">
                    <Waves className="w-5 h-5 stroke-[1.7]" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm text-[#142318] font-medium leading-tight">
                      {isRu ? "Терапевтический бассейн 32°C" : isEn ? "32°C Therapeutic Pool" : "Therapie-Bewegungsbad 32°C"}
                    </h5>
                    <p className="font-sans text-[11px] text-[#6E756D] mt-0.5">
                      {isRu ? "Безбарьерный вход, противоток и подводный массаж" : isEn ? "Accessible ramp & counter-current jets" : "Barrierefreier Einstieg & Gegenstromdüsen"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hydrotherapy Information */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                {isRu ? "ГИДРОТЕРАПИЯ И БАЛЬНЕОЛОГИЯ" : isEn ? "AQUATIC THERAPY & REHAB" : "MEDIZINISCHE HYDROTHERAPIE"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
                {isRu
                  ? "Сила воды для безболезненного восстановления суставов"
                  : isEn
                  ? "Gentle Weightless Recovery in Thermal Water"
                  : "Schwerelose Mobilisation im temperierten Bewegungsbad"}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#556358] leading-relaxed">
                {isRu
                  ? "Вода снимает гравитационную нагрузку с опорно-двигательного аппарата, позволяя безопасно разрабатывать суставы уже на самых ранних этапах после хирургических операций."
                  : isEn
                  ? "Buoyancy relieves mechanical pressure from newly operated joints, enabling patients to re-learn natural gait patterns weeks ahead of land-based therapy."
                  : "Durch den natürlichen Auftrieb des Wassers wird das Körpergewicht um bis zu 90 % reduziert. Dies ermöglicht eine schmerzfreie Frühmobilisation frisch operierter Gelenke unter idealen physiologischen Bedingungen."}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <GoldCircleCheckIcon className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-sans text-xs sm:text-[13px] font-bold text-[#142318]">
                      {isRu ? "Термический эффект и мышечная релаксация" : isEn ? "Thermal relaxation & pain modulation" : "Wärmeinduzierte Muskelrelaxation"}
                    </h5>
                    <p className="font-sans text-[11.5px] text-[#6E756D]">
                      {isRu ? "Постоянная температура 32°C снимает рефлекторные спазмы и улучшает микроциркуляцию." : isEn ? "Constant 32°C warmth diminishes chronic spasticity and stimulates blood flow." : "Konstant 32 °C Wassertemperatur lindert Schmerzen und senkt reflektorische Muskelspannung."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GoldCircleCheckIcon className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-sans text-xs sm:text-[13px] font-bold text-[#142318]">
                      {isRu ? "Гидростатическое давление против отеков" : isEn ? "Hydrostatic pressure for edema reduction" : "Hydrostatischer Druck gegen Schwellungen"}
                    </h5>
                    <p className="font-sans text-[11.5px] text-[#6E756D]">
                      {isRu ? "Ускоряет лимфодренаж и рассасывание послеоперационных гематом." : isEn ? "Promotes natural venous and lymphatic drainage of post-surgical swelling." : "Fördert den venösen und lymphatischen Rückfluss bei postoperativen Schwellungen."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: 4-PHASE REHABILITATION PATHWAY
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-22 bg-white border-y border-[#EDE8DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block mb-2">
              {isRu ? "СТРУКТУРА ЛЕЧЕНИЯ" : isEn ? "THE REHABILITATION PATHWAY" : "DER NABITA-REHABILITATIONSPFAD"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
              {isRu
                ? "Четыре этапа на пути к полной независимости"
                : isEn
                ? "Four Structured Phases to Sustained Mobility"
                : "Ihr Weg zu nachhaltiger Mobilität in 4 Phasen"}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#556358] mt-3 leading-relaxed">
              {isRu
                ? "Прозрачный процесс лечения с объективным контролем промежуточных результатов на каждом шаге."
                : isEn
                ? "A clinically standardized pathway engineered to ensure measurable progress from intake to long-term prevention."
                : "Ein strukturierter, evidenzbasierter Behandlungsablauf mit kontinuierlicher Qualitäts- und Erfolgskontrolle."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathwaySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#EDE8DE] hover:border-[#D5B878] transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-medium text-[#B89650] group-hover:scale-105 transition-transform">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#8C6D2B] bg-white border border-[#EADBBD] px-2.5 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-[#132218] font-normal leading-snug mb-2">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-[#556358] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: COMPREHENSIVE INDICATIONS CHECKLIST
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-22 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#EDE8DE] p-7 sm:p-10 lg:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block mb-1.5">
                {isRu ? "ПОКАЗАНИЯ К ЛЕЧЕНИЮ" : isEn ? "CLINICAL INDICATIONS" : "BEHANDLUNGSSPEKTRUM"}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#132218] font-normal leading-tight">
                {isRu
                  ? "Для кого подходит наша программа реабилитации"
                  : isEn
                  ? "Who Benefits from Our Specialized Care"
                  : "Welche Beschwerdebilder wir behandeln"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3.5">
              <div className="space-y-3.5">
                <h4 className="font-serif text-base text-[#142318] font-medium pb-2 border-b border-[#EDE8DE]">
                  {isRu ? "Ортопедия, травматология и спорт" : isEn ? "Orthopedics & Sports Medicine" : "Orthopädie, Unfallchirurgie & Sport"}
                </h4>
                {indicationsCol1.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <GoldCircleCheckIcon className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="font-sans text-xs sm:text-[13px] text-[#3D4B40] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3.5 mt-6 md:mt-0">
                <h4 className="font-serif text-base text-[#142318] font-medium pb-2 border-b border-[#EDE8DE]">
                  {isRu ? "Неврология, кардиология и общая медицина" : isEn ? "Neurology & Internal Medicine" : "Neurologie, Kardiologie & Innere Medizin"}
                </h4>
                {indicationsCol2.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <GoldCircleCheckIcon className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="font-sans text-xs sm:text-[13px] text-[#3D4B40] leading-snug">
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
          SECTION 6: INTERDISCIPLINARY MEDICAL LEADERSHIP
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
          SECTION 7: PATIENT SUCCESS STORIES & RECOVERY OUTCOMES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-22 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block mb-2">
              {isRu ? "ИСТОРИИ ВЫЗДОРОВЛЕНИЯ" : isEn ? "PATIENT TESTIMONIALS" : "PATIENTENBERICHTE & ERFOLGE"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
              {isRu
                ? "Реальные результаты наших пациентов"
                : isEn
                ? "Real Patient Recovery Journeys"
                : "Erfolgreiche Schritte zurück ins aktive Leben"}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#EDE8DE] p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="md:col-span-4 relative aspect-square w-full rounded-2xl overflow-hidden border border-[#EDE8DE]">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-8 space-y-4">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#8C6D2B] bg-[#FAF5EC] border border-[#EADBBD] px-2.5 py-0.5 rounded">
                  {testimonials[activeTestimonial].case}
                </span>
                <p className="font-serif italic text-base sm:text-lg text-[#132218] leading-relaxed">
                  “{testimonials[activeTestimonial].quote}”
                </p>
                <div>
                  <h4 className="font-sans text-sm font-bold text-[#142318]">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="font-sans text-xs text-[#6E756D]">
                    {isRu ? "Пациент реабилитационного центра" : isEn ? "Rehabilitation Patient" : "Rehabilitationspatient"}
                  </p>
                </div>

                {/* Switcher Dots */}
                <div className="flex items-center gap-2 pt-2">
                  {testimonials.map((_, tIdx) => (
                    <button
                      key={tIdx}
                      onClick={() => setActiveTestimonial(tIdx)}
                      aria-label={`Testimonial ${tIdx + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        activeTestimonial === tIdx
                          ? "w-8 bg-[#0D2214]"
                          : "w-2.5 bg-[#D5DDD6] hover:bg-[#A2ADA4]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 8: INSURANCE & REFERRAL ACCORDION
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
          SECTION 9: CONTACT & BOOKING BANNER (BOTANICAL GOLD CTA)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-18 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#08170D] text-white overflow-hidden p-7 sm:p-12 lg:p-14 border border-[#D5B878]/30 shadow-2xl">
            {/* Botanical foliage watermark */}
            <div className="absolute -right-6 -bottom-6 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-25 select-none">
              <Image
                src="/images/areas/botanical-branch-clean.webp"
                alt=""
                fill
                className="object-contain object-bottom-right"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
        </div>
      </section>

      <Footer currentLocale={locale} />
    </div>
  );
}
