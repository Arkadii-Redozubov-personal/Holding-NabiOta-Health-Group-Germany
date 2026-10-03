"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Clock,
  Phone,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  UserCheck,
  Award,
  Sparkles,
  Users,
  Home,
  FileText,
  Activity,
  ArrowRight,
  ArrowLeft,
  Check,
  MapPin,
  Building2,
  Stethoscope,
  Smile,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { SupportedLocale } from "@/lib/i18n";
import { businessAreas } from "@/data/areas";

// ── Custom SVG Icons for Nursing Care ──
function GentleHandsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

function HeartPulseShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M8.5 11.5c.5-1 1.5-1.5 2.5-.5l1 1 1-1c1-1 2-.5 2.5.5.7 1.4-.4 2.8-3.5 5.5-3.1-2.7-4.2-4.1-3.5-5.5z" />
    </svg>
  );
}

function TabletCheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
      <path d="M9 10l2 2 4-4" />
    </svg>
  );
}

interface Props {
  locale?: SupportedLocale;
}

export function PflegePageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const heroData = {
    title: isRu ? "Патронаж и уход" : isEn ? "Nursing Care & HomeCare" : "Pflege & HomeCare",
    eyebrow: isRu ? "ЧЕЛОВЕЧЕСКОЕ ДОСТОИНСТВО И ПРОФЕССИОНАЛЬНЫЙ УХОД" : isEn ? "DIGNITY & COMPASSIONATE NURSING CARE" : "MENSCHLICHE WÜRDE & PROFESSIONELLE BETREUUNG",
    desc: isRu
      ? "NabiOta® HomeCare обеспечивает квалифицированный медицинский уход и заботливую поддержку в привычной домашней обстановке. От базовой помощи и послеоперационного восстановления до специализированной интенсивной терапии и паллиативной опеки."
      : isEn
      ? "NabiOta® HomeCare delivers licensed medical nursing and empathetic personal assistance in the safety of your home. From daily basic care and post-operative recovery to specialized treatment nursing and dignified palliative support."
      : "Die NabiOta® HomeCare sichert eine verlässliche, herzliche und fachlich exzellente Pflegeversorgung in den eigenen vier Wänden. Von der Grundpflege und postoperativen Wundbehandlung bis zur spezialisierten Behandlungspflege nach SGB V und palliativen Begleitung.",
  };

  const heroBadges = [
    {
      icon: <GentleHandsIcon className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "100% Дипломированные" : isEn ? "100% Certified" : "100% Examinierte",
      sub: isRu ? "Медицинские сестры" : isEn ? "Specialist Nurses" : "Pflegefachkräfte",
    },
    {
      icon: <HeartPulseShieldIcon className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Круглосуточно 24/7" : isEn ? "24/7 Emergency" : "24/7 Rufbereitschaft",
      sub: isRu ? "Экстренная связь" : isEn ? "On-Call Support" : "Ärztliche Rückendeckung",
    },
    {
      icon: <Award className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Оценка MDK 1,0" : isEn ? "Grade 1.0 (Top)" : "MDK-Note 1,0",
      sub: isRu ? "Высший стандарт качества" : isEn ? "German Quality Audit" : "Höchste Pflegequalität",
    },
  ];

  // ── Key Metrics Strip ──
  const metrics = [
    {
      value: "100%",
      label: isRu ? "Дипломированный персонал" : isEn ? "Licensed Professional Staff" : "Examinierte Fachkräfte",
      sub: isRu ? "Медицинские сестры и гериатрические эксперты" : isEn ? "Geriatric & clinical nurse specialists" : "Gesundheits- & Krankenpfleger",
    },
    {
      value: "24/7",
      label: isRu ? "Медицинская служба на связи" : isEn ? "Round-the-Clock Support" : "Medizinische Rufbereitschaft",
      sub: isRu ? "Для пациентов и их родственников" : isEn ? "For patients and caregiving families" : "Für Patienten & Angehörige",
    },
    {
      value: "1,0",
      label: isRu ? "Оценка аудита MDK (Отлично)" : isEn ? "MDK Audit Score (Top Rating)" : "MDK-Prüfnote (Sehr Gut)",
      sub: isRu ? "Независимая проверка качества ФРГ" : isEn ? "Official German health authority rating" : "Offizielle Qualitätsprüfung nach SGB XI",
    },
    {
      value: "< 24h",
      label: isRu ? "Оперативное начало ухода" : isEn ? "Rapid Care Deployment" : "Schneller Versorgungsstart",
      sub: isRu ? "После выписки из стационара" : isEn ? "After clinical hospital discharge" : "Nach Klinikentlassung oder Antrag",
    },
  ];

  // ── Section 1: 6 Core Nursing Disciplines ──
  const disciplines = [
    {
      id: "behandlungspflege",
      title: isRu ? "Медицинский уход (SGB V)" : isEn ? "Medical Treatment Care (SGB V)" : "Behandlungspflege (SGB V)",
      badge: isRu ? "По назначению врача" : isEn ? "Doctor Prescribed" : "Ärztlich verordnet",
      desc: isRu
        ? "Профессиональное выполнение врачебных назначений: инъекции (инсулин, гепарин), внутривенные инфузии, контроль жизненных показателей, катетеризация, смена зондов и медикаментозный контроль."
        : isEn
        ? "Professional execution of clinical physician prescriptions: insulin and heparin injections, IV infusions, blood pressure and glucose monitoring, catheter care, feeding tubes, and medication dosage."
        : "Fachgerechte Ausführung ärztlicher Verordnungen im häuslichen Umfeld: Injektionen, Infusionstherapie, Vitalwert-Monitoring, Katheterversorgung, Sondenernährung und sichere Medikamentengabe.",
      image: "/images/services/homecare.webp",
      features: isRu
        ? ["Подкожные и внутримышечные инъекции", "Контроль АД, пульса и сахара в крови", "Смена повязок и компрессионная терапия", "100% покрытие больничной кассой (Krankenkasse)"]
        : isEn
        ? ["Subcutaneous and IM injections", "Blood pressure & blood sugar monitoring", "Compression therapy & clinical dressings", "Fully covered by health insurance (Krankenkasse)"]
        : ["Subcutane & intramuskuläre Injektionen", "Blutdruck-, Puls- & Blutzuckerkontrollen", "Kompressionsstrümpfe & Wundverbände", "Kostenübernahme durch die Krankenkasse"],
    },
    {
      id: "grundpflege",
      title: isRu ? "Базовый уход и гигиена (SGB XI)" : isEn ? "Personal & Daily Living Care (SGB XI)" : "Körperbezogene Grundpflege (SGB XI)",
      badge: isRu ? "Достоинство & Комфорт" : isEn ? "Dignity & Comfort" : "Würde & Selbstbestimmung",
      desc: isRu
        ? "Деликатная и уважительная помощь в повседневных потребностях: утренний и вечерний туалет, купание, одевание, помощь при приеме пищи, мобилизация и профилактика пролежней."
        : isEn
        ? "Respectful, dignified assistance with fundamental activities of daily living: bathing, dressing, grooming, dietary assistance, posture mobilization, and comprehensive pressure sore prevention."
        : "Einfühlsame Unterstützung bei den täglichen Verrichtungen: Ganz- oder Teilwaschung, Baden, An- und Auskleiden, Nahrungsaufnahme, Mobilisation und sorgsame Dekubitusprophylaxe.",
      image: "/images/areas/pflege.webp",
      features: isRu
        ? ["Индивидуальный график посещений", "Сохранение самостоятельности пациента", "Профилактика тромбозов и пролежней", "Финансирование через Pflegekasse (степени 1–5)"]
        : isEn
        ? ["Personalized home visit schedule", "Promoting independent motor abilities", "Thrombosis and bedsores prophylaxis", "Funded via Care Fund / Pflegekasse (Grades 1–5)"]
        : ["Individuell abgestimmte Einsatzzeiten", "Förderung vorhandener Ressourcen", "Dekubitus- und Kontrakturprophylaxe", "Abrechnung über Pflegekasse (Pflegegrade 1–5)"],
    },
    {
      id: "wundversorgung",
      title: isRu ? "Современное лечение ран" : isEn ? "Advanced Wound Management" : "Zertifizierte Wundversorgung",
      badge: isRu ? "Сертификат ICW®" : isEn ? "ICW® Certified" : "ICW® Wundexperten",
      desc: isRu
        ? "Специализированная терапия труднозаживающих ран (трофические язвы, диабетическая стопа, послеоперационные раны, пролежни) с использованием современных фазовых гидроколлоидных и альгинатных повязок."
        : isEn
        ? "Specialized management of chronic and complex wounds (diabetic foot syndrome, ulcus cruris, post-surgical dehiscence, bedsores) applying sterile hydrocolloid, alginate, and negative-pressure dressings."
        : "Therapie chronischer und schwer heilender Wunden (Ulcus cruris, Diabetisches Fußsyndrom, Dekubitus) durch ausgebildete ICW®-Wundmanager mit modernen phasengerechten Wundauflagen.",
      image: "/images/services/wundversorgung.webp",
      features: isRu
        ? ["Цифровая фотодокументация заживления", "Атравматичные перевязки без боли", "Прямая связь с хирургами холдинга", "Предотвращение повторного инфицирования"]
        : isEn
        ? ["Digital photo progression logging", "Atraumatic, pain-reduced dressings", "Direct link to NabiOta surgeons", "Infection control & antimicrobial barriers"]
        : ["Digitale Fotodokumentation des Heilungsverlaufs", "Schmerzarme, atraumatische Verbandswechsel", "Direkte Vernetzung mit den Holding-Chirurgen", "Infektionsprophylaxe & Keimreduktion"],
    },
    {
      id: "palliative",
      title: isRu ? "Паллиативная опека" : isEn ? "Specialized Palliative Care" : "Palliative Versorgung & Begleitung",
      badge: isRu ? "Забота & Обезболивание" : isEn ? "Compassion & Relief" : "Würdevolle Begleitung",
      desc: isRu
        ? "Окружение неизлечимо больных пациентов теплом, покоем и максимальным комфортом в кругу семьи. Комплексный контроль болевого синдрома, устранение одышки и чуткая психологическая поддержка родных."
        : isEn
        ? "Providing terminally ill patients and their families with warmth, serenity, and dignity at home. Specialized symptom control, high-dose pain therapy pump management, and empathetic psychosocial support."
        : "Ganzheitliche Begleitung schwerkranker Menschen im vertrauten häuslichen Umfeld. Effektive Schmerztherapie, Symptomlinderung (Dyspnoe, Übelkeit) und einfühlsame Entlastung für Angehörige.",
      image: "/images/about/doctor-patient.webp",
      features: isRu
        ? ["Круглосуточное паллиативное дежурство", "Контроль инфузионных помп для обезболивания", "Психологическая поддержка семьи", "Тесное сотрудничество с хосписами и SAPV"]
        : isEn
        ? ["24/7 specialized palliative on-call", "Analgesic pain pump administration", "Psychological family counseling", "Close cooperation with SAPV network"]
        : ["24/7 spezialisierte Palliative-Rufbereitschaft", "Schmerzpumpe & parenterale Ernährung", "Psychosoziale Unterstützung der Angehörigen", "Enge Kooperation mit SAPV-Teams & Hospizen"],
    },
    {
      id: "verhinderungspflege",
      title: isRu ? "Замещающий уход (Respite Care)" : isEn ? "Respite & Family Caregiver Relief" : "Verhinderungspflege & Entlastung",
      badge: isRu ? "Отдых для близких" : isEn ? "Caregiver Relief" : "Angehörigenentlastung",
      desc: isRu
        ? "Временная замена ухаживающего родственника на период его отпуска, болезни или командировки. Семья получает заслуженный отдых, зная, что близкий человек находится в надежных руках профессионалов."
        : isEn
        ? "Temporary professional substitute care during family caregiver vacation, illness, or personal respite. Families enjoy peace of mind knowing their loved one receives continuous high-tier medical support."
        : "Zuverlässige Vertretung der pflegenden Angehörigen bei Urlaub, eigener Krankheit oder Erholungsbedarf. Bis zu 1.612 € pro Jahr werden von der Pflegekasse erstattet.",
      image: "/images/areas/atrium-lounge.webp",
      features: isRu
        ? ["До 1.612 € компенсации от Pflegekasse в год", "Гибкий почасовой или круглосуточный график", "Помощь в оформлении заявления в кассу", "Плавная передача всех привычек и режима"]
        : isEn
        ? ["Up to €1,612 annual Care Fund subsidy", "Flexible hourly or multi-week coverage", "Bureaucracy & application assistance", "Seamless continuation of personal routines"]
        : ["Bis zu 1.612 € jährlicher Pflegekassen-Zuschuss", "Stundenweise oder mehrwöchige Entlastung", "Komplette Übernahme des Antragsverfahrens", "Nahtlose Fortführung gewohnter Tagesabläufe"],
    },
    {
      id: "demenz",
      title: isRu ? "Уход при деменции и когнитивных нарушениях" : isEn ? "Dementia & Cognitive Memory Care" : "Demenzbetreuung & Alltagsbegleitung",
      badge: isRu ? "Терпение & Безопасность" : isEn ? "Patience & Safety" : "Validierende Pflege",
      desc: isRu
        ? "Специально обученные сиделки и медсестры, использующие методику валидации. Создание безопасной среды, тренировка памяти через воспоминания (биографический метод), прогулки и структурирование дня."
        : isEn
        ? "Specially trained nurses using the validation method for Alzheimer's and dementia. Crafting a secure home environment, biographical memory stimulation, gentle walking, and reassuring structured days."
        : "Einfühlsame Begleitung von Menschen mit Demenz nach dem Konzept der Validation. Strukturierte Tagesabläufe, biografieorientierte Aktivierung, Gedächtnisspiele und emotionale Sicherheit.",
      image: "/images/contact/clinic-reception.webp",
      features: isRu
        ? ["Методика валидации и снижение тревожности", "Прогулки и сопровождение к врачу", "Тренировка моторики и воспоминаний", "Разгрузка близких от постоянного напряжения"]
        : isEn
        ? ["Validation therapy to reduce anxiety", "Safe mobility & accompanied doctor visits", "Fine motor & cognitive memory exercises", "Substantial mental relief for families"]
        : ["Validierende Gesprächsführung gegen Unruhe", "Begleitung bei Spaziergängen & Arztterminen", "Gedächtnistraining & Biografiearbeit", "Entlastung von dauerhafter Beaufsichtigung"],
    },
  ];

  // ── Section 2: High-Tech & Quality Framework (Tabs) ──
  const qualityTabs = [
    {
      id: "bezugspflege",
      title: isRu ? "Система первичной медсестры (Bezugspflege)" : isEn ? "Primary Care Nurse System" : "Das Bezugspflege-System",
      subtitle: isRu ? "Постоянные доверенные лица вместо постоянной смены персонала" : isEn ? "Familiar trusted faces rather than rotating stranger nurses" : "Feste Bezugspersonen statt ständiger Personalwechsel",
      desc: isRu
        ? "Мы убеждены: доверие — это основа успешного ухода. В NabiOta HomeCare за каждым подопечным закрепляется постоянная небольшая команда из 2–3 знакомых медсестер. Это гарантирует глубокое понимание привычек, душевное спокойствие пожилого человека и мгновенное выявление малейших изменений в состоянии здоровья."
        : isEn
        ? "We believe true care begins with trust. At NabiOta HomeCare, each patient is assigned a consistent team of 2–3 dedicated primary nurses. This guarantees familiarity with daily habits, emotional security for seniors, and instantaneous detection of subtle medical changes."
        : "Vertrauen ist das Fundament jeder gelungenen Pflege. Bei der NabiOta® HomeCare betreut ein festes, kleines Pflegeteam aus maximal 2 bis 3 vertrauten Pflegekräften Ihren Angehörigen. So entsteht eine echte Bindung, Rituale werden gewahrt und kleinste gesundheitliche Veränderungen sofort erkannt.",
      bullets: isRu
        ? [
            "Фиксированная команда без анонимности",
            "Учет личных привычек, вкусов и биоритмов",
            "Постоянный контактный телефон для семьи",
            "Высочайшая преемственность медицинских назначений",
          ]
        : isEn
        ? [
            "Dedicated small team without impersonal rotations",
            "Tailored to personal biorhythms, habits and preferences",
            "Direct personal contact number for family members",
            "Seamless consistency in complex clinical treatments",
          ]
        : [
            "Feste Bezugspflegekraft als persönlicher Ansprechpartner",
            "Respektierung individueller Lebensgewohnheiten und Vorlieben",
            "Direkte Durchwahl zur zuständigen Teamleitung",
            "Höchste Kontinuität bei komplexen Wund- und Medikamentenregimen",
          ],
      image: "/images/areas/pflege.webp",
    },
    {
      id: "digital",
      title: isRu ? "Цифровая документация и планшетная система" : isEn ? "Digital Real-Time Care Documentation" : "Digitale Pflegedokumentation",
      subtitle: isRu ? "100% прозрачность для родственников и врачей холдинга" : isEn ? "100% Transparency for families and attending physicians" : "Lückenlose Transparenz für Familie & Hausärzte",
      desc: isRu
        ? "Все медицинские данные, прием лекарств, показатели давления, сахара и динамика заживления ран фиксируются нашими сестрами на защищенных планшетах прямо у постели пациента. Родственники через защищенный портал могут видеть, во сколько приходила медсестра и какие процедуры были выполнены."
        : isEn
        ? "All medication administrations, vital signs (blood pressure, oxygen, glucose) and wound healing progress are documented digitally on HIPAA/GDPR-compliant tablets directly at the bedside. Family members can verify visit times and executed procedures via our secure family portal."
        : "Schluss mit unleserlichen Papierkurven: Unsere Pflegekräfte dokumentieren jeden Vitalwert, jede Medikamentengabe und jeden Verbandswechsel digital auf verschlüsselten Tablets vor Ort. Bei Bedarf erhalten Angehörige und behandelnde Hausärzte sofortigen Einblick in den aktuellen Pflegeverlauf.",
      bullets: isRu
        ? [
            "Безошибочный контроль приема медикаментов по штрихкоду",
            "Фотофиксация заживления ран с датой и размерами",
            "Мгновенное оповещение врача при скачках давления или сахара",
            "Полное соответствие стандартам защиты данных DSGVO / GDPR",
          ]
        : isEn
        ? [
            "Barcode-verified zero-error medication management",
            "High-resolution photographic wound progress tracking",
            "Instant alert notification to physicians on abnormal vitals",
            "Strict adherence to German medical privacy laws (DSGVO)",
          ]
        : [
            "Fehlerfreie Barcode-gestützte Medikamentenkontrolle",
            "Hochauflösende Fotoverlaufskontrolle bei Wundheilung",
            "Automatische Benachrichtigung bei Vitalwert-Abweichungen",
            "Vollständig DSGVO- und medizinschutzkonform verschlüsselt",
          ],
      image: "/images/services/homecare.webp",
    },
    {
      id: "entlassmanagement",
      title: isRu ? "Бесшовный переход из клиники домой (Entlassmanagement)" : isEn ? "Hospital-to-Home Discharge Coordination" : "Klinik-Entlassmanagement",
      subtitle: isRu ? "Никаких пробелов в уходе при выписке из больницы" : isEn ? "Zero interruption in medical care after hospital departure" : "Nahtlose Versorgungskette vom Krankenbett nach Hause",
      desc: isRu
        ? "Выписка из стационара часто сопровождается стрессом: нужны рецепты, специальная кровать, инвалидная коляска, кислород или медикаменты. Координаторы NabiOta HomeCare связываются с отделением больницы еще до выписки, организуют доставку всего оборудования и встречают пациента дома в день возвращения."
        : isEn
        ? "Discharge from a surgical or internal ward can be overwhelming: hospital beds, oxygen concentrators, mobility walkers, and specialized prescriptions are required immediately. NabiOta HomeCare coordinators liaise with hospital social workers days prior to ensure everything is set up before the patient arrives home."
        : "Der Wechsel vom Krankenhaus in die eigenen vier Wände erfordert perfekte Logistik: Pflegebett, Rollstuhl, Sauerstoffgeräte, Rezepte und Wundmaterialien müssen bereitstehen. Unsere Entlassmanager stimmen sich schon Tage vor dem Entlasstermin mit der Klinik ab, sodass zu Hause alles lückenlos vorbereitet ist.",
      bullets: isRu
        ? [
            "Организация функциональной кровати и средств ухода за 24 часа",
            "Своевременное получение рецептов и медикаментов из аптеки",
            "Присутствие медсестры в момент прибытия скорой или спецтранспорта",
            "Связь с лечащим хирургом или терапевтом холдинга",
          ]
        : isEn
        ? [
            "Rapid delivery of nursing beds and walkers within 24h",
            "Prescription pickup and pharmacy medication fulfillment",
            "Nurse welcoming the patient upon hospital transport arrival",
            "Direct hotline to discharging hospital surgeon or internist",
          ]
        : [
            "Bereitstellung von Pflegebett, Toilettenstuhl & Hilfsmitteln binnen 24h",
            "Rezeptabholung und Versorgung mit Spezialmedikamenten",
            "Pflegefachkraft empfängt den Patienten direkt bei Heimkehr",
            "Direkter Draht zu den Fachärzten und Operateuren der NabiOta",
          ],
      image: "/images/areas/atrium-lounge.webp",
    },
  ];

  // ── Section 3: Financing & Care Levels Guide (Pflegegrade) ──
  const careLevels = [
    {
      level: "Pflegegrad 1",
      points: "12,5 – 26,9 Punkte",
      amount: "125 €",
      sub: isRu ? "Ежемесячный Entlastungsbetrag" : isEn ? "Monthly Relief Allowance" : "Entlastungsbetrag mtl.",
      desc: isRu
        ? "Незначительные ограничения самостоятельности. Помощь в уборке, покупках, сопровождение на прогулках и адаптация жилья (до 4.000 € субсидии)."
        : isEn
        ? "Minor impairment of independence. Household cleaning support, shopping assistance, walk accompaniment, and living space adaptations (up to €4,000)."
        : "Geringe Beeinträchtigung der Selbstständigkeit. Haushaltshilfe, Begleitdienste, digitale Notrufsysteme sowie bis zu 4.000 € Wohnumfeldverbesserung.",
    },
    {
      level: "Pflegegrad 2",
      points: "27 – 47,4 Punkte",
      amount: "332 € / 761 €",
      sub: isRu ? "Pflegegeld / Сахляйстунг" : isEn ? "Care Allowance / In-Kind" : "Pflegegeld / Sachleistung",
      desc: isRu
        ? "Умеренные ограничения. Ежедневная помощь при умывании, приеме лекарств, поддержка родственников и бесплатная консультация по уходу § 37.3."
        : isEn
        ? "Moderate impairment. Regular help with morning wash, medication adherence, family relief, and mandatory § 37.3 care consultation."
        : "Erhebliche Beeinträchtigung. Tägliche Unterstützung bei der Körperpflege, Medikamenteneinnahme, Entlastungsleistungen und Pflegeberatungseinsatz § 37.3.",
    },
    {
      level: "Pflegegrad 3",
      points: "47,5 – 69,9 Punkte",
      amount: "573 € / 1.432 €",
      sub: isRu ? "Pflegegeld / Сахляйстунг" : isEn ? "Care Allowance / In-Kind" : "Pflegegeld / Sachleistung",
      desc: isRu
        ? "Тяжелые ограничения самостоятельности. Несколько визитов медсестры в день, комплексная гигиена, профилактика пролежней и ведение сложной терапии."
        : isEn
        ? "Severe impairment. Multiple daily nurse visits, comprehensive bathing, mobilization, pressure sore prophylaxis, and medication oversight."
        : "Schwere Beeinträchtigung. Mehrfache tägliche Einsätze, umfassende Körperpflege, Hilfe bei Ernährung und Mobilität sowie Verhinderungspflege.",
    },
    {
      level: "Pflegegrad 4",
      points: "70 – 89,9 Punkte",
      amount: "765 € / 1.778 €",
      sub: isRu ? "Pflegegeld / Сахляйстунг" : isEn ? "Care Allowance / In-Kind" : "Pflegegeld / Sachleistung",
      desc: isRu
        ? "Крайне тяжелые ограничения. Круглосуточное наблюдение, зондовое питание, инфузии, специализированная обработка ран и помощь ночью."
        : isEn
        ? "Very severe impairment. Extensive daytime and nighttime care, enteral tube feeding, IV therapy, complex wound care, and specialized bed transfers."
        : "Schwerste Beeinträchtigung. Rund-um-die-Uhr-Versorgung, Sondenernährung, komplexe Wundverbände, Nachtbereitschaft und intensive Angehörigenbegleitung.",
    },
    {
      level: "Pflegegrad 5",
      points: "90 – 100 Punkte",
      amount: "947 € / 2.200 €",
      sub: isRu ? "Pflegegeld / Сахляйстунг" : isEn ? "Care Allowance / In-Kind" : "Pflegegeld / Sachleistung",
      desc: isRu
        ? "Максимальная потребность в уходе с особыми медицинскими требованиями. Интенсивная сестринская помощь, паллиативная терапия и аппараты жизнеобеспечения."
        : isEn
        ? "Highest care demand with special clinical nursing challenges. Intensive outpatient nursing, palliative syringe pumps, and continuous supervision."
        : "Schwerste Beeinträchtigung mit besonderen Anforderungen an die pflegerische Versorgung. Intensivpflege zu Hause, Schmerzpumpe und Palliative Care.",
    },
  ];

  // ── Section 4: 4-Step Pathway (Pflegeweg) ──
  const carePathway = [
    {
      step: "01",
      title: isRu ? "Первичная бесплатная консультация" : isEn ? "Free Intake Consultation" : "Kostenlose Erstberatung",
      duration: isRu ? "В течение 24 часов" : isEn ? "Within 24 Hours" : "Binnen 24 Stunden",
      desc: isRu
        ? "Телефонная беседа или выезд ведущей медсестры на дом. Мы внимательно выслушиваем ваши пожелания, оцениваем текущую ситуацию и отвечаем на все вопросы."
        : isEn
        ? "Compassionate phone consultation or in-home assessment visit. We listen attentively to family priorities, review current challenges, and explain all care options."
        : "Ausführliches Telefonat oder persönlicher Hausbesuch durch unsere Pflegedienstleitung. Wir ermitteln den tatsächlichen Hilfebedarf und klären alle offenen Fragen.",
    },
    {
      step: "02",
      title: isRu ? "Оценка Pflegegrad и оформление в кассе" : isEn ? "Care Level Assessment & Bureaucracy" : "Pflegegrad & Kostenklärung",
      duration: isRu ? "Сопровождение под ключ" : isEn ? "Turnkey Assistance" : "Vollständige Übernahme",
      desc: isRu
        ? "Мы помогаем правильно составить заявление на получение или повышение степени ухода (Pflegegrad), готовим медицинские заключения и присутствуем при визите эксперта MDK."
        : isEn
        ? "We guide families through the German Care Fund paperwork, submit applications for care grades 1–5, and participate personally during the official MDK home audit."
        : "Wir unterstützen Sie beim Erstantrag oder der Höherstufung des Pflegegrads, bereiten alle Arztberichte vor und begleiten Sie persönlich bei der Begutachtung durch den MDK.",
    },
    {
      step: "03",
      title: isRu ? "Индивидуальный план и закрепление медсестры" : isEn ? "Custom Care Plan & Primary Nurse" : "Versorgungsplan & Bezugspflege",
      duration: isRu ? "Старт за 24–48 часов" : isEn ? "Start in 24–48 Hours" : "Start binnen 24–48h",
      desc: isRu
        ? "Составление прозрачного расписания визитов с учетом привычного распорядка дня пациента. Знакомство подопечного с его персональной медсестрой."
        : isEn
        ? "Formulating a transparent visit schedule aligned with the senior's preferred sleeping and meal times. Warm in-person introduction of the primary nurse."
        : "Erstellung eines transparenten Leistungs- und Zeitplans, abgestimmt auf die Lebensgewohnheiten Ihres Angehörigen. Persönliche Vorstellung der Bezugspflegekraft.",
    },
    {
      step: "04",
      title: isRu ? "Постоянная забота и регулярный аудит качества" : isEn ? "Continuous Nursing & Quality Audits" : "Kontinuierliche Pflege & Visiten",
      duration: isRu ? "Долгосрочно и надежно" : isEn ? "Ongoing Excellence" : "Regelmäßige Qualitätskontrolle",
      desc: isRu
        ? "Стабильное проведение процедур, круглосуточная горячая линия связи и ежеквартальные визиты руководства службы для проверки удовлетворенности семьи."
        : isEn
        ? "Reliable daily care delivery, 24/7 emergency response availability, and quarterly supervisor audits to continuously optimize comfort and safety."
        : "Zuverlässige tägliche Durchführung aller Pflegemaßnahmen, 24/7 Rufbereitschaft bei Notfällen und vierteljährliche Qualitätsvisiten durch die Pflegedienstleitung.",
    },
  ];

  // ── Section 5: Leadership Team ──
  const careLeaders = [
    {
      name: "Sabine Hartmann",
      role: isRu ? "Руководитель службы патронажа (PDL)" : isEn ? "Director of Nursing (PDL)" : "Pflegedienstleitung (PDL)",
      qual: isRu ? "Дипломированная медсестра, менеджер здравоохранения" : isEn ? "Registered Nurse, B.A. Healthcare Management" : "Examinierte Pflegefachkraft, Dipl.-Pflegewirtin",
      desc: isRu
        ? "Более 18 лет в гериатрии и домашнем уходе. Отвечает за соблюдение высочайших стандартов MDK и персональный подбор персонала для каждого подопечного."
        : isEn
        ? "Over 18 years of leadership in home healthcare and geriatrics. Dedicated to zero-compromise care quality and human warmth in daily practice."
        : "Über 18 Jahre Leitungserfahrung in ambulanter Pflege und Geriatrie. Verantwortlich für kompromisslose Qualitätsstandards und die Zufriedenheit unserer Patienten.",
      image: "/images/areas/doc-anna-keller.webp",
    },
    {
      name: "Marcus Lindemann",
      role: isRu ? "Ведущий специалист по лечению ран (ICW®)" : isEn ? "Senior Wound Care Specialist (ICW®)" : "Zertifizierter Wundexperte (ICW®)",
      qual: isRu ? "Эксперт по хроническим ранам и послеоперационной реабилитации" : isEn ? "Specialist in chronic wound & trauma recovery" : "Wundmanager ICW®, Fachkrankenpfleger Anästhesie",
      desc: isRu
        ? "Специализируется на лечении синдрома диабетической стопы, пролежней и сложных послеоперационных дефектов с применением вакуум-терапии и современных атравматичных повязок."
        : isEn
        ? "Specialized in diabetic wound resolution, pressure ulcer healing, and modern atraumatic dressing therapies in continuous coordination with holding surgeons."
        : "Spezialist für komplexe Wundheilungsstörungen, Dekubitusbehandlung und moderne Unterdruck-Wundtherapie (NPWT) im häuslichen Umfeld.",
      image: "/images/areas/doc-michael-weber.webp",
    },
    {
      name: "Elena Vogt",
      role: isRu ? "Координатор паллиативной помощи (Palliative Care)" : isEn ? "Palliative Care Coordinator" : "Fachkraft für Palliative Care",
      qual: isRu ? "Сертифицированная сестра паллиативной медицины и психологии" : isEn ? "Certified Palliative Nurse & Family Counselor" : "Zertifizierte Palliative-Care-Fachkraft",
      desc: isRu
        ? "Помогает тяжелобольным людям прожить каждый день с максимальным комфортом, без боли и страха, поддерживая теплый эмоциональный микроклимат в семье."
        : isEn
        ? "Empowers terminally ill individuals to experience comfort, pain relief, and profound emotional security in the sanctuary of their own home."
        : "Begleitet schwerstkranke Patienten und deren Familien mit Herzenswärme, professionellem Schmerzmanagement und psychosozialer Feinfühligkeit.",
      image: "/images/areas/doc-sarah-hoffmann.webp",
    },
  ];

  // ── Section 6: Testimonials ──
  const testimonials = [
    {
      quote: isRu
        ? "После инсульта моей маме требовался постоянный уход. Команда NabiOta HomeCare не просто взяла на себя медицинские процедуры — они вернули маме улыбку и веру в себя. Медсестра Сабина стала настоящим другом нашей семьи!"
        : isEn
        ? "Following my mother's stroke, our family was completely overwhelmed. NabiOta HomeCare not only handled complex clinical treatments flawlessly — they brought warmth, laughter, and dignity back into our home. Nurse Sabine is like family to us now."
        : "Nach dem Schlaganfall meiner Mutter waren wir als Familie völlig überfordert. Das Team der NabiOta HomeCare hat nicht nur die Medikamente und Wundversorgung perfekt gemanagt, sondern meiner Mutter ihre Lebensfreude zurückgegeben. Ein wahrer Segen!",
      author: "Katharina M.",
      location: "Berlin-Dahlem",
      detail: isRu ? "Уход после инсульта, Pflegegrad 3" : isEn ? "Post-stroke care, Care Grade 3" : "Schlaganfall-Nachsorge, Pflegegrad 3",
      image: "/images/testimonials/anna-mueller.webp",
    },
    {
      quote: isRu
        ? "У отца была тяжелая незаживающая трофическая язва после операции. До этого сменили две службы ухода без результата. Эксперт по ранам Маркус из NabiOta закрыл рану за 7 недель благодаря правильным повязкам и фотоконтролю!"
        : isEn
        ? "My father suffered from a severe chronic ulcer that refused to heal for over six months. Wound manager Marcus from NabiOta solved the problem within 7 weeks using advanced phase dressings. We are infinitely grateful."
        : "Mein Vater litt monatelang an einer offenen Operationswunde. Erst als Wundexperte Marcus von NabiOta die Behandlung übernahm, heilte die Wunde dank moderner phasengerechter Verbände innerhalb von 7 Wochen vollständig ab.",
      author: "Dr. Stefan K.",
      location: "Potsdam",
      detail: isRu ? "Специализированная перевязка ран" : isEn ? "Specialized Wound Therapy" : "Zertifizierte Wundversorgung",
      image: "/images/testimonials/thomas-becker.webp",
    },
    {
      quote: isRu
        ? "Когда дедушке потребовалась паллиативная помощь, мы хотели, чтобы он оставался дома, рядом с нами. Благодаря круглосуточной связи с медсестрами NabiOta он не испытывал боли и ушел из жизни в полном спокойствии и любви."
        : isEn
        ? "When my grandfather reached his final chapter, we wanted him to stay at home surrounded by family. Thanks to NabiOta's compassionate 24/7 palliative nurses, he experienced complete pain relief and passed away peacefully."
        : "In den letzten Wochen meines Großvaters ermöglichte uns NabiOta Palliative Care, ihn zu Hause in vertrauter Umgebung zu begleiten. Schmerzfrei, geborgen und mit unendlicher menschlicher Würde. Danke von ganzem Herzen.",
      author: "Christine W.",
      location: "Berlin-Charlottenburg",
      detail: isRu ? "Паллиативная помощь на дому" : isEn ? "Palliative Home Care" : "Palliative Versorgung zu Hause",
      image: "/images/testimonials/elena-fischer.webp",
    },
  ];

  // ── Section 7: FAQ Accordion ──
  const faqs = [
    {
      q: isRu ? "Как быстро может начаться уход на дому?" : isEn ? "How quickly can home nursing care begin?" : "Wie schnell kann die Pflege zu Hause beginnen?",
      a: isRu
        ? "В экстренных случаях (например, при неожиданной выписке из клиники) мы можем организовать первый визит и доставку необходимого оборудования в течение 24 часов. Плановые консультации и начало ухода обычно согласовываются в течение 1–2 рабочих дней."
        : isEn
        ? "In urgent cases (such as sudden hospital discharges), we can mobilize our primary nurse and arrange essential medical equipment within 24 hours. Standard elective consultations and care schedules typically commence within 1–2 business days."
        : "In dringenden Notfällen — etwa bei überraschender Klinikentlassung — können wir die Versorgung innerhalb von 24 Stunden sicherstellen. Reguläre Beratungen und der geplante Pflegebeginn erfolgen in der Regel innerhalb von 1 bis 2 Werktagen.",
    },
    {
      q: isRu ? "В чем разница между Grundpflege (SGB XI) и Behandlungspflege (SGB V)?" : isEn ? "What is the difference between SGB XI (Basic Care) and SGB V (Treatment)?" : "Was ist der Unterschied zwischen Grundpflege (SGB XI) und Behandlungspflege (SGB V)?",
      a: isRu
        ? "Behandlungspflege (SGB V) — это медицинские процедуры, назначенные врачом (уколы, перевязки, капельницы). Их на 100% оплачивает медицинская страховка (Krankenkasse) независимо от степени ухода. Grundpflege (SGB XI) — это помощь в быту и гигиене (купание, одевание, питание), которая финансируется страховой кассой по уходу (Pflegekasse) в зависимости от Pflegegrad 1–5."
        : isEn
        ? "Behandlungspflege (SGB V) comprises physician-prescribed clinical tasks (injections, wound dressings, IV therapies). These are 100% covered by health insurance (Krankenkasse) regardless of care grade. Grundpflege (SGB XI) covers activities of daily living (bathing, mobility, dressing) and is subsidized by the Care Fund (Pflegekasse) based on Care Grades 1 to 5."
        : "Behandlungspflege nach SGB V umfasst medizinische Leistungen auf ärztliche Verordnung (z. B. Injektionen, Wundverbände, Medikamentengabe). Die Kosten übernimmt zu 100 % Ihre Krankenkasse. Die Grundpflege nach SGB XI umfasst Hilfen bei der Körperpflege, Ernährung und Mobilität und wird über die Pflegekasse (je nach Pflegegrad) finanziert.",
    },
    {
      q: isRu ? "Помогает ли NabiOta с получением или повышением Pflegegrad?" : isEn ? "Does NabiOta assist with Care Grade applications and MDK audits?" : "Hilft NabiOta bei der Beantragung und Einstufung des Pflegegrads?",
      a: isRu
        ? "Да, абсолютно бесплатно для наших клиентов. Мы помогаем заполнить все формуляры, собираем медицинские выписки от врачей и лично присутствуем во время визита эксперта Медицинской службы (MDK / Medicproof) дома у пациента, чтобы гарантировать справедливое присвоение степени ухода."
        : isEn
        ? "Yes, entirely free of charge for our registered patients. We prepare all application documents, compile physician progress reports, and personally accompany the family during the official medical audit (MDK / Medicproof) in the patient's home."
        : "Ja, vollumfänglich und kostenfrei. Wir unterstützen Sie bei der Antragstellung, führen im Vorfeld eine realistische Punktbewertung durch, fordern alle Arztbefunde an und sind bei der Begutachtung durch den Medizinischen Dienst (MDK / Medicproof) persönlich vor Ort an Ihrer Seite.",
    },
    {
      q: isRu ? "Что происходит, если основная медсестра заболеет или уйдет в отпуск?" : isEn ? "What happens if our primary nurse is sick or on vacation?" : "Was passiert bei Urlaub oder Krankheit der festen Pflegekraft?",
      a: isRu
        ? "Благодаря системе малых команд (Bezugspflege) у каждого пациента есть 1–2 постоянные сменные медсестры, которые уже лично знакомы с пациентом, его домом и медицинским планом. Никаких случайных незнакомых людей — непрерывность и комфорт гарантированы."
        : isEn
        ? "Thanks to our primary nursing team model, each patient has 1–2 familiar designated co-nurses who already know the senior personally, understand the home routines, and have access to the digital care plan. Zero disruption, zero unfamiliar strangers."
        : "Durch unser Bezugspflegesystem arbeitet jede feste Pflegekraft in einem festen Tandem- oder Trioteam. Die Vertretungskraft kennt Ihren Angehörigen, die Wohnung und die Gewohnheiten bereits persönlich. Sie müssen sich niemals auf fremde, unbekannte Gesichter einstellen.",
    },
    {
      q: isRu ? "Работаете ли вы с частными страховками и кассами Beihilfe?" : isEn ? "Do you accept private health insurance (PKV) and Beihilfe?" : "Werden private Krankenversicherungen und Beihilfe abgerechnet?",
      a: isRu
        ? "Да, мы работаем со всеми типами страховок в Германии: государственные больничные кассы (GKV), кассы по уходу (Pflegekassen), частные страховки (PKV) и государственные субсидии госслужащих (Beihilfe)."
        : isEn
        ? "Yes, we accept all German statutory health and care insurance funds (GKV / Pflegekassen), private medical insurers (PKV), and civil servant benefit funds (Beihilfe) with seamless transparent billing."
        : "Ja, wir verfügen über Versorgungsverträge mit allen gesetzlichen Kranken- und Pflegekassen (GKV) sowie privaten Krankenversicherungen (PKV) und rechnen direkt mit Beihilfestellen ab.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#07150C] text-stone-100 selection:bg-[#D5B878] selection:text-[#07150C]">
      <Header />

      <main className="flex-1">
        {/* ── Hero Section with Botanical Background & Champagne Arcs ── */}
        <PageHero
          title={heroData.title}
          eyebrow={heroData.eyebrow}
          description={heroData.desc}
          imageSrc="/images/areas/pflege.webp"
          imageAlt="NabiOta Health Group Pflege & HomeCare"
          badges={heroBadges}
          breadcrumb={
            <Breadcrumb
              items={[
                { label: isRu ? "Главная" : isEn ? "Home" : "Startseite", href: `/${locale}` },
                { label: isRu ? "Направления" : isEn ? "Areas" : "Bereiche", href: `/${locale}/areas` },
                { label: isRu ? "Уход и патронаж" : isEn ? "Nursing Care" : "Pflege & HomeCare" },
              ]}
            />
          }
        />

        {/* ── Key Metrics Floating Strip ── */}
        <section className="relative z-20 -mt-10 lg:-mt-14 mb-16 lg:mb-24">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-[#0B2013]/90 backdrop-blur-md p-6 border border-[#D5B878]/25 shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:border-[#D5B878]/60 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D5B878]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D5B878]/15 transition-colors" />
                  <div className="text-3xl lg:text-4xl font-serif font-bold text-[#D5B878] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm lg:text-base font-semibold text-white/95 leading-snug">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-xs text-stone-400 leading-relaxed">
                    {metric.sub}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Section 1: 6 Specialized Nursing Disciplines ── */}
        <section className="py-16 lg:py-24 bg-[#07150C] relative">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D5B878]/10 text-[#D5B878] border border-[#D5B878]/30 mb-4">
                <GentleHandsIcon className="w-3.5 h-3.5" />
                {isRu ? "Спектр медицинского патронажа" : isEn ? "Full Spectrum Home Nursing" : "Umfassende Pflegeleistungen"}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                {isRu ? "Забота, достоинство и безопасность дома" : isEn ? "Compassionate, Certified Nursing at Home" : "Ganzheitliche Pflege für jedes Lebensalter"}
              </h2>
              <p className="mt-4 text-base md:text-lg text-stone-300 leading-relaxed">
                {isRu
                  ? "От ежедневной помощи в гигиене до высокотехнологичной специализированной терапии. Мы берем на себя все заботы, чтобы семья могла наслаждаться общением с близкими."
                  : isEn
                  ? "From daily hygienic personal care to high-tech clinical treatment nursing. We relieve caregiving families so you can cherish peaceful moments with your loved ones."
                  : "Ob tägliche Grundpflege, komplexe Wundversorgung nach einer Operation oder einfühlsame Palliative Care: Wir schaffen Sicherheit und entlasten pflegende Angehörige verlässlich."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {disciplines.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-[#0B2013]/60 backdrop-blur-md border border-[#D5B878]/20 hover:border-[#D5B878]/60 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] transform hover:-translate-y-1.5"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2013] via-[#0B2013]/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#07150C]/90 text-[#D5B878] border border-[#D5B878]/30 backdrop-blur-sm shadow-md">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#D5B878] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-stone-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-stone-800/80">
                      <div className="text-xs uppercase tracking-wider font-semibold text-[#D5B878]/80 mb-3">
                        {isRu ? "Ключевые преимущества:" : isEn ? "Key Services:" : "Leistungsumfang:"}
                      </div>
                      <ul className="space-y-2">
                        {item.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                            <CheckCircle2 className="w-4 h-4 text-[#D5B878] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Section 2: Interactive High-Quality Framework (Tabs) ── */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-[#07150C] via-[#0B2013] to-[#07150C] relative border-y border-[#D5B878]/15">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D5B878]/10 text-[#D5B878] border border-[#D5B878]/30 mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                {isRu ? "Стандарты NabiOta®" : isEn ? "NabiOta® Quality System" : "Der NabiOta® Qualitätsstandard"}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                {isRu ? "Почему семьи доверяют нашему патронажу" : isEn ? "The Pillars of Trusted Home Healthcare" : "Exzellenz im häuslichen Pflegealltag"}
              </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-stone-800/80">
              {qualityTabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    activeTab === idx
                      ? "bg-[#D5B878] text-[#07150C] shadow-[0_4px_16px_rgba(213,184,120,0.3)] font-bold"
                      : "bg-[#0B2013]/80 text-stone-300 hover:text-white hover:bg-[#0B2013] border border-stone-800"
                  }`}
                >
                  {idx === 0 && <Users className="w-4 h-4" />}
                  {idx === 1 && <TabletCheckIcon className="w-4 h-4" />}
                  {idx === 2 && <Home className="w-4 h-4" />}
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Active Tab Content Card */}
            <div className="rounded-3xl bg-[#0B2013]/70 backdrop-blur-xl border border-[#D5B878]/30 p-8 lg:p-12 shadow-[0_24px_50px_rgba(0,0,0,0.6)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <div className="text-xs uppercase font-bold tracking-widest text-[#D5B878]">
                    {qualityTabs[activeTab].subtitle}
                  </div>
                  <h3 className="mt-2 text-2xl lg:text-3xl font-serif font-bold text-white">
                    {qualityTabs[activeTab].title}
                  </h3>
                  <p className="mt-4 text-stone-300 leading-relaxed text-base lg:text-lg">
                    {qualityTabs[activeTab].desc}
                  </p>

                  <div className="mt-8 space-y-3.5">
                    {qualityTabs[activeTab].bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-[#D5B878]/20 text-[#D5B878] mt-0.5">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-sm lg:text-base text-stone-200 font-medium">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D5B878] text-[#07150C] font-bold text-sm hover:bg-[#ECCF96] transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      <span>{isRu ? "Заказать консультацию" : isEn ? "Request Home Consultation" : "Pflegeberatung anfordern"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="tel:+493089001234"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-[#D5B878]/40 text-[#D5B878] font-semibold text-sm hover:bg-[#D5B878]/10 transition-all duration-300 cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      <span>030 8900 1234</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 relative h-80 lg:h-[420px] rounded-2xl overflow-hidden border border-[#D5B878]/30 shadow-2xl">
                  <Image
                    src={qualityTabs[activeTab].image}
                    alt={qualityTabs[activeTab].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07150C]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B2013]/90 backdrop-blur-md border border-[#D5B878]/30 text-xs text-stone-300">
                    <div className="flex items-center gap-2 text-[#D5B878] font-bold mb-1">
                      <Sparkles className="w-4 h-4" />
                      <span>NabiOta® Exzellenz-Garantie</span>
                    </div>
                    {isRu
                      ? "Все медсестры регулярно проходят повышение квалификации в нашей собственной академии."
                      : isEn
                      ? "All nursing staff undergo continuous education through the NabiOta Healthcare Academy."
                      : "Regelmäßige Fortbildungen aller Pflegekräfte an der internen NabiOta® Akademie."}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Section 3: Care Levels (Pflegegrade) & Financing Guide ── */}
        <section className="py-20 lg:py-28 bg-[#07150C] relative">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D5B878]/10 text-[#D5B878] border border-[#D5B878]/30 mb-4">
                <FileText className="w-3.5 h-3.5" />
                {isRu ? "Финансирование и субсидии касс" : isEn ? "German Care Grades & Financing" : "Pflegegrade & Finanzierung"}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                {isRu ? "Степени ухода (Pflegegrade 1–5)" : isEn ? "Understanding Care Levels 1 to 5" : "Transparente Kosten & Pflegekassen-Leistungen"}
              </h2>
              <p className="mt-4 text-base md:text-lg text-stone-300 leading-relaxed">
                {isRu
                  ? "Немецкая система страхования ухода (SGB XI) предоставляет значительные финансовые выплаты. Мы поможем вам получить максимальные положенные средства."
                  : isEn
                  ? "The German Care Insurance fund provides generous monthly allowances for home assistance. We ensure families claim 100% of their statutory entitlements."
                  : "Die gesetzliche und private Pflegeversicherung unterstützt Sie finanziell bei der häuslichen Versorgung. Wir beraten Sie transparent über Sachleistungen und Kombinationspflege."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
              {careLevels.map((lvl, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0B2013]/60 backdrop-blur-md p-6 border border-[#D5B878]/20 hover:border-[#D5B878]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transform hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-bold tracking-wider text-[#D5B878]">
                        {lvl.points}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D5B878]" />
                    </div>
                    <h3 className="mt-3 text-lg font-serif font-bold text-white">
                      {lvl.level}
                    </h3>
                    <div className="mt-4 p-3 rounded-xl bg-[#07150C]/80 border border-stone-800">
                      <div className="text-xs text-stone-400">{lvl.sub}</div>
                      <div className="text-xl font-serif font-bold text-[#D5B878] mt-0.5">
                        {lvl.amount}
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-stone-300 leading-relaxed">
                      {lvl.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-800/80">
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D5B878] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{isRu ? "Проверить право" : isEn ? "Check Eligibility" : "Anspruch prüfen"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-[#0B2013]/80 border border-[#D5B878]/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#D5B878]/15 text-[#D5B878] shrink-0">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-bold text-white">
                    {isRu ? "Обязательная консультация по уходу § 37.3 SGB XI" : isEn ? "Mandatory § 37.3 SGB XI Care Verification Visits" : "Pflegeberatungseinsatz nach § 37.3 SGB XI"}
                  </div>
                  <div className="text-xs text-stone-300 mt-1">
                    {isRu
                      ? "Получаете Pflegegeld на руки? Мы проводим регулярные обязательные визиты и выдаем официальный сертификат для вашей кассы без задержек."
                      : isEn
                      ? "Receiving cash Pflegegeld at home? We perform the mandatory quarterly audits and submit the compliance proof directly to your insurance fund."
                      : "Sie beziehen Pflegegeld? Wir führen die vorgeschriebenen Beratungseinsätze bei Ihnen zu Hause durch und übermitteln den Nachweis direkt an die Kasse."}
                  </div>
                </div>
              </div>
              <Link
                href={`/${locale}/contact`}
                className="whitespace-nowrap px-6 py-3 rounded-xl bg-[#D5B878] text-[#07150C] font-bold text-xs hover:bg-[#ECCF96] transition-all cursor-pointer shadow-md"
              >
                {isRu ? "Записаться на визит § 37.3" : isEn ? "Book § 37.3 Consultation" : "Beratungseinsatz vereinbaren"}
              </Link>
            </div>
          </Container>
        </section>

        {/* ── Section 4: 4-Step Pathway to Care (Pflegeweg) ── */}
        <section className="py-20 lg:py-28 bg-[#0B2013] relative border-y border-[#D5B878]/15">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D5B878]/10 text-[#D5B878] border border-[#D5B878]/30 mb-4">
                <Activity className="w-3.5 h-3.5" />
                {isRu ? "Пошаговый маршрут" : isEn ? "Care Pathway" : "Der NabiOta® Pflegeweg"}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                {isRu ? "Как организовать уход за 4 простых шага" : isEn ? "From First Contact to Reliable Care" : "In 4 Schritten zur verlässlichen Pflege"}
              </h2>
              <p className="mt-4 text-base md:text-lg text-stone-300 leading-relaxed">
                {isRu
                  ? "Мы берем на себя общение с кассами, оформление документов и подбор медсестер, чтобы процесс прошел гладко и без стресса для вашей семьи."
                  : isEn
                  ? "We manage insurance coordination, bureaucratic forms, and staff scheduling so your family experiences immediate peace of mind."
                  : "Wir begleiten Sie von der ersten Anfrage bis zur eingespielten täglichen Betreuung — menschlich, unbürokratisch und transparent."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {carePathway.map((p, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl bg-[#07150C]/70 backdrop-blur-md p-6 border border-[#D5B878]/25 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-serif font-bold text-[#D5B878]/40">
                        {p.step}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#D5B878]/10 text-[#D5B878] border border-[#D5B878]/20">
                        {p.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-xs md:text-sm text-stone-300 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-[#D5B878]">
                    <span>{isRu ? "Шаг процесса" : isEn ? "Phase" : "Phase"} {idx + 1}</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Section 5: Leadership Team ── */}
        <section className="py-20 lg:py-28 bg-[#07150C] relative">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D5B878]/10 text-[#D5B878] border border-[#D5B878]/30 mb-4">
                <Users className="w-3.5 h-3.5" />
                {isRu ? "Руководство службы" : isEn ? "Care Leadership" : "Pflegedienstleitung & Experten"}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                {isRu ? "Опыт, ответственность и сердечность" : isEn ? "Clinical Expertise & Human Warmth" : "Verantwortung für Ihre Angehörigen"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {careLeaders.map((lead, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0B2013]/60 backdrop-blur-md border border-[#D5B878]/20 overflow-hidden flex flex-col hover:border-[#D5B878]/50 transition-all duration-300"
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={lead.image}
                      alt={lead.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2013] via-transparent to-transparent" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-[#D5B878]">
                        {lead.role}
                      </div>
                      <h3 className="mt-1 text-xl font-serif font-bold text-white">
                        {lead.name}
                      </h3>
                      <div className="mt-1 text-xs text-stone-400 font-medium">
                        {lead.qual}
                      </div>
                      <p className="mt-4 text-xs md:text-sm text-stone-300 leading-relaxed">
                        {lead.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone-800">
                      <Link
                        href={`/${locale}/contact`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D5B878] hover:text-white transition-colors cursor-pointer"
                      >
                        <span>{isRu ? "Связаться со специалистом" : isEn ? "Contact Specialist" : "Gespräch anfragen"}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Section 6: Testimonials Carousel ── */}
        <section className="py-20 lg:py-28 bg-[#0B2013] relative border-y border-[#D5B878]/15">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D5B878]/10 text-[#D5B878] border border-[#D5B878]/30 mb-4">
                <Smile className="w-3.5 h-3.5" />
                {isRu ? "Голоса подопечных и их семей" : isEn ? "Patient & Family Stories" : "Erfahrungsberichte von Angehörigen"}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                {isRu ? "Доверие, проверенное временем" : isEn ? "Heartfelt Stories of Care & Recovery" : "Weil Vertrauen das Wichtigste ist"}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl bg-[#07150C]/80 backdrop-blur-xl border border-[#D5B878]/30 p-8 lg:p-12 shadow-2xl relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4 relative h-64 md:h-72 rounded-2xl overflow-hidden border border-[#D5B878]/30">
                    <Image
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-8 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-1 text-[#D5B878] mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-lg">★</span>
                        ))}
                      </div>
                      <blockquote className="text-base md:text-lg text-stone-200 italic leading-relaxed">
                        &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                      </blockquote>
                    </div>

                    <div className="mt-6 pt-5 border-t border-stone-800 flex items-center justify-between">
                      <div>
                        <div className="font-serif font-bold text-white text-base">
                          {testimonials[activeTestimonial].author}
                        </div>
                        <div className="text-xs text-[#D5B878] flex items-center gap-2 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{testimonials[activeTestimonial].location}</span>
                          <span>•</span>
                          <span className="text-stone-400">{testimonials[activeTestimonial].detail}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            setActiveTestimonial((prev) =>
                              prev === 0 ? testimonials.length - 1 : prev - 1
                            )
                          }
                          className="p-2 rounded-full bg-[#0B2013] border border-stone-700 text-stone-300 hover:text-white hover:border-[#D5B878] transition-colors cursor-pointer"
                          aria-label="Previous testimonial"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            setActiveTestimonial((prev) =>
                              prev === testimonials.length - 1 ? 0 : prev + 1
                            )
                          }
                          className="p-2 rounded-full bg-[#0B2013] border border-stone-700 text-stone-300 hover:text-white hover:border-[#D5B878] transition-colors cursor-pointer"
                          aria-label="Next testimonial"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Section 7: FAQ Accordion ── */}
        <section className="py-20 lg:py-28 bg-[#07150C] relative">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D5B878]/10 text-[#D5B878] border border-[#D5B878]/30 mb-4">
                  <HelpCircle className="w-3.5 h-3.5" />
                  {isRu ? "Вопросы и ответы" : isEn ? "Frequently Asked Questions" : "Häufige Fragen (FAQ)"}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                  {isRu ? "Все о финансировании и организации ухода" : isEn ? "Answers for Families & Caregivers" : "Wissenswertes für Angehörige"}
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-[#0B2013]/60 backdrop-blur-md border border-[#D5B878]/20 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#D5B878]/5 transition-colors"
                      >
                        <span className="font-serif font-bold text-white text-base md:text-lg">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#D5B878] shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-stone-300 text-sm md:text-base leading-relaxed border-t border-stone-800/60 pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* ── Section 8: Final Premium Botanical Booking & Contact Banner ── */}
        <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-r from-[#07150C] via-[#0B2013] to-[#07150C] border-t border-[#D5B878]/25">
          <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt="Botanical Background"
              fill
              className="object-cover"
            />
          </div>

          <Container className="relative z-10">
            <div className="rounded-3xl bg-[#0B2013]/80 backdrop-blur-xl border border-[#D5B878]/40 p-8 md:p-14 lg:p-16 shadow-[0_32px_64px_rgba(0,0,0,0.6)] text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D5B878]/15 text-[#D5B878] border border-[#D5B878]/40 mb-6">
                <Heart className="w-3.5 h-3.5" />
                {isRu ? "Мы рядом в любой ситуации" : isEn ? "Always By Your Side" : "Persönlich & Verlässlich an Ihrer Seite"}
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                {isRu ? "Нужна помощь или консультация по уходу?" : isEn ? "Looking for Compassionate Home Care?" : "Suchen Sie verlässliche Pflege für Ihre Angehörigen?"}
              </h2>

              <p className="mt-4 text-stone-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {isRu
                  ? "Свяжитесь с нами сегодня. Наш координатор проконсультирует вас, рассчитает пособие от кассы и организует визит в кратчайшие сроки."
                  : isEn
                  ? "Contact us today. Our care director will provide comprehensive guidance on statutory allowances and arrange prompt in-home assistance."
                  : "Vereinbaren Sie noch heute ein vertrauliches Beratungsgespräch. Wir klären alle Kostenübernahmen mit der Kasse und stehen Ihnen sofort zur Seite."}
              </p>

              <div className="mt-10 flex flex-wrap justify-center items-center gap-5">
                <Link
                  href={`/${locale}/contact`}
                  className="px-8 py-4 rounded-xl bg-[#D5B878] text-[#07150C] font-bold text-base hover:bg-[#ECCF96] transition-all duration-300 shadow-xl cursor-pointer inline-flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{isRu ? "Записаться на консультацию" : isEn ? "Book Free Consultation" : "Kostenlose Erstberatung anfragen"}</span>
                </Link>

                <a
                  href="tel:+493089001234"
                  className="px-8 py-4 rounded-xl bg-[#07150C]/80 border border-[#D5B878]/50 text-white font-bold text-base hover:bg-[#D5B878]/15 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-[#D5B878]" />
                  <span>030 8900 1234</span>
                </a>
              </div>

              <div className="mt-8 text-xs text-stone-400 flex flex-wrap justify-center items-center gap-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D5B878]" />
                  {isRu ? "Бесплатно и без обязательств" : isEn ? "Free & Non-Binding" : "Kostenfrei & unverbindlich"}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D5B878]" />
                  {isRu ? "Все кассы Германии (GKV & PKV)" : isEn ? "All German Insurances" : "Alle Kassen & Privat"}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D5B878]" />
                  {isRu ? "Горячая линия 24/7" : isEn ? "24/7 Hotline" : "24/7 Notfall-Erreichbarkeit"}
                </span>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
