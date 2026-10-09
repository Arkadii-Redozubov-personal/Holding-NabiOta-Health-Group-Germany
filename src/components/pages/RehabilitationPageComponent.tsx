"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Heart,
  Activity,
  FileText,
  Phone,
  ShieldCheck,
  Stethoscope,
  Check,
  MapPin,
  ChevronDown,
  X,
  Info,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";
import { RehabilitationCompanySection } from "@/components/sections/RehabilitationCompanySection";

export interface SpecializationModalData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  fullDesc: string;
  indicationsTitle: string;
  indications: string[];
  standards: string;
  image: string;
  features: string[];
}

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
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedSpecialization, setSelectedSpecialization] = useState<SpecializationModalData | null>(null);

  // Keyboard escape listener and body scroll lock for modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedSpecialization(null);
      }
    }
    if (selectedSpecialization) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedSpecialization]);

  const heroData = {
    title: isUz ? "Reabilitatsiya" : isRu ? "Реабилитация" : isEn ? "Rehabilitation" : isTr ? "Rehabilitasyon ve Terapi" : isAr ? "إعادة التأهيل والعلاج الطبيعي" : "Rehabilitation",
    eyebrow: isUz ? "TIKLANISH VA TERAPIYA" : isRu ? "ВОССТАНОВЛЕНИЕ И ТЕРАПИЯ" : isEn ? "REHABILITATION & MOBILITY" : isTr ? "İYİLEŞME VE TERAPİ" : isAr ? "التعافي والعلاج المتخصص" : "REHABILITATION & THERAPIE",
    desc: isUz
      ? "NabiOta® Reabilitatsiya va Terapiya Markazi to'laqonli hayotga tez va xavfsiz qaytish uchun dalillarga asoslangan fizioterapiya, robotlashtirilgan yurish mashqlari, gidroterapiya va individual tiklanish protokollarini birlashtiradi."
      : isRu
      ? "NabiOta® Rehabilitation & Therapy Center объединяет доказательную физиотерапию, роботизированную тренировку ходьбы, гидротерапию и индивидуальные протоколы восстановления для быстрого и безопасного возвращения к полноценной жизни."
      : isEn
      ? "NabiOta® Rehabilitation & Therapy Center combines evidence-based physiotherapy, robotic gait training, hydrotherapy, and personalized reconditioning programs for a rapid, sustainable return to mobility and independence."
      : isTr
      ? "NabiOta® Rehabilitasyon ve Terapi Merkezi; ameliyatlar, spor yaralanmaları ve nörolojik rahatsızlıklar sonrasında hastalarımıza eşlik eder. Kanıta dayalı fizyoterapi, robotik yürüme sistemleri, AlterG® ve kişiselleştirilmiş programlarla hareket kabiliyetinizi kalıcı olarak yeniden kazandırıyoruz."
      : isAr
      ? "يرافق مركز NabiOta® لإعادة التأهيل والعلاج الطبيعي المرضى بعد التدخلات الجراحية، الإصابات الرياضية والحالات العصبية. من خلال العلاج الطبيعي القائم على الأدلة، التدريب الروبوتي على المشي (AlterG®)، والبرامج التأهيلية الفردية، نستعيد حركتكم واستقلاليتكم البدنية بشكل مستدام."
      : "Das NabiOta® Rehabilitations- und Therapiezentrum begleitet Patienten nach operativen Eingriffen, Sportverletzungen und bei neurologischen Leiden. Mit evidenzbasierten Methoden, robotischer Gerätetechnik und persönlicher Betreuung stellen wir Ihre Mobilität nachhaltig wieder her.",
  };

  const heroBadges = [
    {
      icon: <SpineMobilityIcon className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "Multidisiplinar" : isRu ? "Мультидисциплинарно" : isEn ? "Multidisciplinary" : isTr ? "Disiplinlerarası" : isAr ? "متعدد التخصصات" : "Interdisziplinär",
      sub: isUz ? "Fizioterapiya, Ergo va Logo" : isRu ? "ЛФК, Эрго & Логопедия" : isEn ? "Physio, Ergo & Speech" : isTr ? "Fizyo, Ergo & Logopedi" : isAr ? "علاج طبيعي، وظيفي ونطق" : "Physio, Ergo & Logopädie",
    },
    {
      icon: <WalkingExoskeletonIcon className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "Robotlashtirilgan" : isRu ? "Роботизированная" : isEn ? "Robotic-Assisted" : isTr ? "Robotik Destekli" : isAr ? "مدعوم بالروبوتات" : "Robotik-Assistiert",
      sub: isUz ? "Yurish mashqlari va AlterG®" : isRu ? "Технология ходьбы" : isEn ? "Gait & Anti-Gravity" : isTr ? "AlterG® & Yürüme Eğitimi" : isAr ? "جهاز AlterG® وتدريب المشي" : "AlterG® & Gangtrainer",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "Barcha sug'urtalar" : isRu ? "Все кассы" : isEn ? "Insurance Covered" : isTr ? "Tüm Sigortalar" : isAr ? "جميع جهات التأمين" : "Alle Kassen",
      sub: "GKV, PKV, BG & DRV",
    },
  ];

  // ── Section 1: 6 Specialized Rehabilitation Areas (PDF Section 5) ──
  const specializations: SpecializationModalData[] = [
    {
      id: "ortho",
      title: isUz ? "Ortopedik reabilitatsiya" : isRu ? "Ортопедическая реабилитация" : isEn ? "Orthopedic Rehabilitation" : isTr ? "Ortopedik Rehabilitasyon" : isAr ? "إعادة التأهيل العظمي وتقويم المفاصل" : "Orthopädische Rehabilitation",
      badge: isUz ? "Endoprotezlash va Umurtqa" : isRu ? "Эндопротезирование & Позвоночник" : isEn ? "Joint Replacement & Spine" : isTr ? "Eklem Protezi & Omurga" : isAr ? "استبدال المفاصل والعمود الفقري" : "Gelenkersatz & Wirbelsäule",
      subtitle: isUz
        ? "Ambulator tiklanish terapiyasi (AHB) va jarohatdan keyingi hamrohlik"
        : isRu
        ? "Амбулаторная восстановительная терапия (AHB) и посттравматическое сопровождение"
        : isEn
        ? "Outpatient Post-Acute Rehabilitation (AHB) & Musculoskeletal Aftercare"
        : isTr
        ? "Ayakta devam tedavisi (AHB) ve ortopedik-travmatolojik takip"
        : isAr
        ? "علاج ما بعد الجراحة للمرضى الخارجيين (AHB) والرعاية التلطيفية للعظام"
        : "Ambulante Anschlussheilbehandlung (AHB) & orthopädisch-traumatologische Nachsorge",
      desc: isUz
        ? "Bo'g'imlarni endoprotezlash (TEP), umurtqa operatsiyalari va murakkab sinishlardan keyin kompleks tiklanish."
        : isRu
        ? "Комплексное восстановление после эндопротезирования суставов (TEP), операций на позвоночнике и сложных переломов."
        : isEn
        ? "Specialized rehabilitation following total hip/knee arthroplasty, spine surgery, and complex fractures."
        : isTr
        ? "Eklem protezi (kalça/diz TEP), omurga ameliyatları, çapraz bağ rekonstrüksiyonu ve kırıklar sonrası hedefe yönelik rehabilitasyon."
        : isAr
        ? "إعادة تأهيل مستهدفة بعد استبدال المفاصل (الورك والركبة TEP)، جراحات العمود الفقري، وترميم الأربطة والكسور المعقدة."
        : "Gezielte Rehabilitation nach Gelenkersatz (Hüft-/Knie-TEP), Wirbelsäulenoperationen, Kreuzbandplastiken und komplexen Frakturen.",
      fullDesc: isUz
        ? "NabiOta Rehabilitation & Therapy GmbH ustavining 5-bandiga muvofiq, bo'lim chanoq-son va tizza bo'g'imlarini to'liq endoprotezlash, spondilodez, xochsimon boylamlar plastikasi va tayanch-harakat a'zolari jarohatlaridan keyingi operatsiyadan keyingi parvarishga ixtisoslashgan. Erta og'riqsiz harakatlanish, davolash gimnastikasi (KG), apparatli LFK (KGG) va mushaklarni bosqichma-bosqich mustahkamlash qo'llaniladi."
        : isRu
        ? "Согласно пункту 5 NabiOta Rehabilitation & Therapy GmbH, отделение специализируется на постоперационном ведении пациентов после тотального эндопротезирования тазобедренных и коленных суставов, спондилодеза, реконструкций крестообразных связок и травм опорно-двигательного аппарата. Применяются раннее безболезненное восстановление биомеханики, лечебная гимнастика (KG), аппаратная ЛФК (KGG) и прогрессивное укрепление мышечного корсета."
        : isEn
        ? "Under Section 5 of NabiOta Rehabilitation & Therapy GmbH, this department provides comprehensive post-surgical recovery following total joint arthroplasty (hip, knee, shoulder), spinal fusion, ligament reconstructions, and traumatic fractures. We emphasize early pain-free joint mobilization, physical therapy (KG), device-assisted physiotherapy (KGG), and individualized muscle strengthening."
        : isTr
        ? "NabiOta Rehabilitation & Therapy GmbH Kısım 5 yönergeleri uyarınca bölümümüz; kalça, diz ve omuz protezleri, omurga dekompresyonu, bağ ve tendon yaralanmaları sonrası postoperatif iyileşmeye odaklanır. Erken fonksiyonel mobilizasyon, ağrının dindirilmesi, fizyoterapi (KG), cihaz destekli egzersiz (KGG) ve kas güçlendirme uygulanır."
        : isAr
        ? "وفقاً للبند 5 لشركة NabiOta Rehabilitation & Therapy GmbH، يركز القسم على رعاية ما بعد الجراحة لاستبدال مفاصل الورك والركبة والكتف، جراحات دمج الفقرات، وترميم الأربطة الصليبية والكسور المعقدة. نعتمد على استعادة الحركة المبكرة الخالية من الألم، العلاج الطبيعي (KG)، التمارين الموجهة بالأجهزة (KGG)، وبناء القوة العضلية."
        : "Gemäß Punkt 5 der NabiOta Rehabilitation & Therapy GmbH richtet sich das Leistungsspektrum an postoperative Patienten nach Gelenkersatz (Hüft-, Knie- und Schulter-TEP), Wirbelsäulenoperationen sowie komplexen Unfall- und Bandverletzungen. Im Zentrum stehen frühfunktionelle Mobilisation, Schmerzreduktion, Krankengymnastik (KG), gerätegestützte Krankengymnastik (KGG) und gezielter Muskelaufbau.",
      indicationsTitle: isUz ? "Klinik ko'rsatmalar va usullar" : isRu ? "Клинические показания & методы (по PDF)" : isEn ? "Clinical Indications & Protocols (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي العلاج والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isUz
        ? [
            "Chanoq-son, tizza va yelka bo'g'imlarini endoprotezlash (TEP)",
            "Umurtqa pog'onasi va disklaridagi operatsiyadan keyingi davr",
            "Xochsimon boylamlar, menisklar va bo'g'im apparatini tiklash",
            "Osteosintez va murakkab travmadan keyingi suyak sinishlari",
            "Surunkali degenerativ kasalliklar (og'ir osteoartroz, osteoporoz)",
          ]
        : isRu
        ? [
            "Эндопротезирование тазобедренного, коленного и плечевого суставов (TEP)",
            "Постоперационные вмешательства на позвоночнике и межпозвонковых дисках",
            "Реконструкции крестообразных связок, менисков и капсульно-связочного аппарата",
            "Остеосинтез и комплексные посттравматические переломы костей",
            "Хронические дегенеративные заболевания (тяжелый остеоартроз, остеопороз)",
          ]
        : isEn
        ? [
            "Total hip, knee, and shoulder joint replacement (TEP / Arthroplasty)",
            "Post-operative spinal fusion, disc decompression & corrective procedures",
            "Anterior cruciate ligament (ACL), meniscal & tendon reconstructions",
            "Complex traumatic fractures and multi-fragment osteosynthesis aftercare",
            "Chronic degenerative conditions (advanced osteoarthritis, osteoporosis)",
          ]
        : isTr
        ? [
            "Endoprotez uygulamaları (Kalça, diz ve omuz TEP)",
            "Ameliyat sonrası omurga ve bel fıtığı cerrahisi takibi",
            "Çapraz bağ, menisküs ve tendon rekonstrüksiyonları",
            "Osteosentez sonrası karmaşık kırık ve eklem travmaları",
            "Kronik dejeneratif eklem hastalıkları (ileri osteoartrit, osteoporoz)",
          ]
        : isAr
        ? [
            "تركيب المفاصل الاصطناعية (مفاصل الورك، الركبة، والكتف TEP)",
            "متابعة ما بعد جراحات العمود الفقري والانزلاق الغضروفي",
            "ترميم الرباط الصليبي، الغضاريف الهلالية والأوتار",
            "إعادة تأهيل الكسور المعقدة بعد التثبيت الجراحي (Osteosynthesis)",
            "أمراض المفاصل التنكسية المزمنة (خشونة المفاصل المتقدمة وهشاشة العظام)",
          ]
        : [
            "Endoprothetische Versorgung (Hüft-, Knie- und Schulter-TEP)",
            "Postoperative Wirbelsäuleneingriffe & Bandscheibenoperationen",
            "Kreuzband-, Meniskus- und Sehnenrekonstruktionen",
            "Komplexe Fraktur- und Gelenkverletzungen nach Osteosynthese",
            "Chronisch-degenerative Erkrankungen (schwere Arthrose, Osteoporose)",
          ],
      standards: isUz
        ? "Barcha kasallik kassalari: GKV, PKV, Berufsgenossenschaften (BG) va Deutsche Rentenversicherung (DRV)"
        : isRu
        ? "Все больничные кассы: GKV, PKV, Berufsgenossenschaften (BG) & Deutsche Rentenversicherung (DRV)"
        : isEn
        ? "Covered by all payers: Statutory (GKV), Private (PKV), Workers' Comp (BG) & German Pension Fund (DRV)"
        : isTr
        ? "Tüm sigorta kurumları için onaylı: GKV, PKV, Meslek Birlikleri (BG) & Alman Emeklilik Sigortası (DRV)"
        : isAr
        ? "معتمد لدى جميع جهات التأمين: الحكومي (GKV)، الخاص (PKV)، نقابات الحوادث (BG) وصندوق التقاعد الألماني (DRV)"
        : "Zulassung für alle Kostenträger: GKV, PKV, Berufsgenossenschaften (BG) & Deutsche Rentenversicherung (DRV)",
      image: "/images/areas/rehabilitation.webp",
      features: isUz
        ? ["Erta og'riqsiz harakatlanish", "Bo'g'im biomexanikasini tiklash", "Mushak korsetini mustahkamlash"]
        : isRu
        ? ["Ранняя безболезненная мобилизация", "Восстановление биомеханики сустава", "Укрепление мышечного корсета"]
        : isEn
        ? ["Early pain-free joint mobilization", "Restoration of natural gait mechanics", "Stabilizing deep musculature"]
        : isTr
        ? ["Erken Fonksiyonel Mobilizasyon", "Yürüme Düzeninin Yeniden Kazanılması", "Hedefe Yönelik Kas Güçlendirme"]
        : isAr
        ? ["استعادة الحركة الوظيفية المبكرة", "تصحيح نمط المشي الطبيعي", "تقوية عضلية مستهدفة"]
        : ["Frühfunktionelle Mobilisation", "Wiederherstellung des Gangbilds", "Gezielter Muskelaufbau & Kräftigung"],
    },
    {
      id: "neuro",
      title: isUz ? "Nevrologik reabilitatsiya" : isRu ? "Неврологическая реабилитация" : isEn ? "Neurological Rehabilitation" : isTr ? "Nörolojik Rehabilitasyon" : isAr ? "إعادة التأهيل العصبي" : "Neurologische Rehabilitation",
      badge: isRu ? "ЦНС & Нейропластичность" : isEn ? "Neuroplasticity" : isTr ? "Nöroplastisite & MSS" : isAr ? "المرونة العصبية والجهاز المركزي" : "Neuroplastizität",
      subtitle: isRu
        ? "Восстановление моторики, походки и независимости после поражений нервной системы"
        : isEn
        ? "Re-education of motor control, balance, and independence in neurological conditions"
        : isTr
        ? "Merkezi sinir sistemi lezyonları sonrası hareket, denge ve bağımsızlığın yeniden kazanılması"
        : isAr
        ? "استعادة الحركة، التوازن والاستقلالية الذاتية بعد إصابات الجهاز العصبي"
        : "Wiedererlangung von Bewegung, Gleichgewicht und Selbstständigkeit nach ZNS-Läsionen",
      desc: isRu
        ? "Восстановление двигательных и координационных функций после инсульта, травм, при болезни Паркинсона и полинейропатии."
        : isEn
        ? "Re-education of motor skills, coordination, and independence after stroke, brain injury, Parkinson's disease, and neuropathies."
        : isTr
        ? "İnme (felç), travmatik beyin hasarı veya Parkinson sonrası hareket, denge ve günlük bağımsızlığın yeniden inşası."
        : isAr
        ? "إعادة تدريب المهارات الحركية والتوازن والاستقلالية بعد السكتة الدماغية، إصابات الدماغ ومرض باركنسون."
        : "Wiedererlangung von Bewegung, Gleichgewicht und Selbstständigkeit nach Schlaganfall, Schädel-Hirn-Trauma oder bei Parkinson.",
      fullDesc: isRu
        ? "Неврологическое направление холдинга реализует современные концепции нейропластичности для пациентов, перенесших инсульт (ишемический или геморрагический), черепно-мозговую травму или страдающих болезнью Паркинсона, рассеянным склерозом и полинейропатией. Сертифицированные терапевты проводят занятия по методам Бобат и PNF, тренировку ходьбы и профилактику падений."
        : isEn
        ? "Our neurological rehabilitation utilizes evidence-based neuroplasticity concepts for individuals recovering from ischemic stroke, cerebral hemorrhage, traumatic brain injuries, or managing Parkinson's disease, MS, and neuropathies. Certified therapists apply Bobath, PNF protocols, robotic locomotor assistance, and balance re-training to promote lasting functional neural reorganization."
        : isTr
        ? "NabiOta Rehabilitation & Therapy GmbH bünyesindeki nörolojik rehabilitasyon, merkezi ve periferik sinir sisteminin nöroplastisite ilkeleriyle reaktivasyonuna odaklanır. İnme, kranioserebral travma veya nörodejeneratif hastalıklarda (Parkinson, MS, polinöropati) uzman terapistlerimiz Bobath, PNF ve robotik yürüme eğitimini kullanır."
        : isAr
        ? "تركز إعادة التأهيل العصبي في مجموعة NabiOta على إعادة تنشيط الجهاز العصبي اعتماداً على مفاهيم المرونة العصبية المثبتة علمياً. بعد السكتات الدماغية، إصابات الرأس، أو الأمراض التنكسية (باركنسون، التصلب اللويحي، اعتلال الأعصاب)، يطبق معالجونا أساليب Bobath وPNF والتدريب الروبوتي على المشي."
        : "Die neurologische Rehabilitation der NabiOta Rehabilitation & Therapy GmbH konzentriert sich auf die gezielte Reaktivierung des zentralen und peripheren Nervensystems. Nach Schlaganfall, Schädel-Hirn-Trauma oder bei neurodegenerativen Erkrankungen (Morbus Parkinson, Multiple Sklerose, Polyneuropathie) nutzen unsere Therapeuten evidenzbasierte neurophysiologische Verfahren wie Bobath, PNF und robotisch unterstütztes Gangtraining.",
      indicationsTitle: isUz ? "Klinik ko'rsatmalar va usullar" : isRu ? "Клинические показания & методы (по PDF)" : isEn ? "Clinical Indications & Protocols (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي العلاج والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isRu
        ? [
            "Постинсультные состояния (ишемия, кровоизлияния) и гемипарезы",
            "Последствия черепно-мозговых травм и нейрохирургических операций",
            "Болезнь Паркинсона и экстрапирамидные расстройства движения",
            "Полинейропатии различного генеза и периферические парезы",
            "Тренировка равновесия, координации и устойчивости походки",
          ]
        : isEn
        ? [
            "Post-stroke recovery (ischemic infarct, cerebral hemorrhage) & hemiparesis",
            "Traumatic brain injuries & post-neurosurgical operative rehabilitation",
            "Parkinson's disease & extrapyramidal movement disorders",
            "Polyneuropathies (diabetic, toxic, autoimmune) & peripheral nerve paresis",
            "Postural balance retraining, ataxia management & fall prevention",
          ]
        : isTr
        ? [
            "İnme sonrası bakım (iskemi, beyin kanaması) ve hemipareziler",
            "Kranioserebral travmalar ve beyin cerrahisi sonrası durumlar",
            "Parkinson hastalığı ve ekstrapiramidal hareket bozuklukları",
            "Polinöropatiler ve periferik sinir lezyonları",
            "Denge, ataksi ve düşmeyi önleme antrenmanları",
          ]
        : isAr
        ? [
            "رعاية ما بعد السكتة الدماغية (الاحتشاء والنزيف الدماغي) والشلل النصفي",
            "إصابات الرأس والتعافي بعد الجراحات العصبية الدقيقة",
            "مرض باركنسون واضطرابات الحركة خارج الهرمية",
            "اعتلال الأعصاب المتعدد وتلف الأعصاب المحيطية",
            "تدريب التوازن، علاج الرنح والوقاية من السقوط",
          ]
        : [
            "Schlaganfallnachsorge (Ischämie, Hirnblutung) & Hemiparesen",
            "Schädel-Hirn-Traumata & postoperative ZNS-Eingriffe",
            "Morbus Parkinson & extrapyramidale Bewegungsstörungen",
            "Polyneuropathien & periphere Nervenläsionen",
            "Gleichgewichts-, Ataxie- und Sturzpräventionstraining",
          ],
      standards: isUz
        ? "Bobath & PNF sertifikatsiyasi • Robotlashtirilgan lokomotsiya ko'magi • Nevrologik konsilium"
        : isRu
        ? "Сертификация Bobath & PNF • Роботизированная поддержка локомоции • Неврологический консилиум"
        : isEn
        ? "Certified Bobath & PNF clinicians • Robotic gait rehabilitation • Interdisciplinary neurology lead"
        : isTr
        ? "Uzman Terapist Sertifikaları (Bobath, PNF) • Robotik Destekli Lokomosyon • Disiplinlerarası Hekim Yönetimi"
        : isAr
        ? "معالجون معتمدون في Bobath وPNF • دعم روبوتي للحركة • إشراف طبي عصبي متكامل"
        : "Fachtherapeutische Zertifizierungen (Bobath, PNF) • Robotik-unterstützte Lokomotion • Interdisziplinäre ärztliche Leitung",
      image: "/images/rehabilitation/parallel-bars.webp",
      features: isRu
        ? ["Методики Бобат и PNF", "Роботизированный тренажер ходьбы", "Тренировка координации и равновесия"]
        : isEn
        ? ["Bobath & PNF therapy concepts", "Robotic exoskeleton gait recovery", "Postural balance and fall prevention"]
        : isTr
        ? ["Bobath & PNF Yöntemleri", "Robotik Yürüme Rehabilitasyonu", "Denge & Koordinasyon Eğitimi"]
        : isAr
        ? ["علاج وفق أساليب Bobath وPNF", "إعادة تأهيل المشي بالروبوت", "تدريب التوازن والتناسق الحركي"]
        : ["Therapie nach Bobath & PNF", "Robotische Gangrehabilitation", "Gleichgewichts- & Koordinationstraining"],
    },
    {
      id: "sport",
      title: isRu ? "Спортивная физиотерапия" : isEn ? "Sports Physiotherapy & Return-to-Play" : isTr ? "Spor Fizyoterapisi & Return-to-Play" : isAr ? "العلاج الطبيعي الرياضي والعودة للمنافسة" : "Sportphysiotherapie & Return-to-Play",
      badge: isRu ? "KGG, MTT & Спорт" : isEn ? "KGG, MTT & Athletic Return" : isTr ? "KGG, MTT & Performans Sporu" : isAr ? "KGG وMTT والرياضة التنافسية" : "KGG, MTT & Leistungssport",
      subtitle: isUz
        ? "Apparatli LFK (KGG), tibbiy mashg'ulot terapiyasi (MTT) va sportga qaytish (Return-to-Activity)"
        : isRu
        ? "Аппаратная ЛФК (KGG), медицинская тренировочная терапия (MTT) и Return-to-Activity"
        : isEn
        ? "Device-assisted physiotherapy (KGG), Medical Training Therapy (MTT) & Return-to-Play"
        : isTr
        ? "Cihaz destekli fizyoterapi (KGG), Tıbbi Antrenman Terapisi (MTT) ve spora dönüş"
        : isAr
        ? "العلاج الطبيعي بالأجهزة (KGG)، التدريب الطبي الرياضي (MTT) وبرامج العودة للملاعب"
        : "Gerätegestützte Krankengymnastik (KGG) & Medizinische Trainingstherapie (MTT)",
      desc: isRu
        ? "Индивидуальные программы для спортсменов и активных людей: биомеханический анализ, функциональный тренинг и безопасный возврат в спорт."
        : isEn
        ? "Evidence-based rehabilitation for athletes: isokinetic testing, agility drills, and return-to-competition clearance."
        : isTr
        ? "Sporcular ve aktif bireyler için izokinetik kuvvet analizi, çeviklik ve spora özgü fonksiyonel yüklenme testleri."
        : isAr
        ? "برامج تدريبية متطورة للرياضيين تشمل الاختبارات متساوية القوة، تدريبات الرشاقة ومعايير العودة الآمنة للرياضة."
        : "Wissenschaftlich fundiertes Aufbautraining für Leistungs- und Freizeitsportler mit Isokinetik, Schnelligkeit und sportspezifischen Belastungstests.",
      fullDesc: isRu
        ? "В полном соответствии с предметом деятельности NabiOta Rehabilitation & Therapy GmbH, данное направление включает аппаратную лечебную гимнастику (KGG), медицинскую тренировочную терапию (MTT), изокинетическую динамометрию и функциональный биомеханический скрининг. Спортсмены и активные пациенты после пластики связок или мышечных травм проходят структурированные фазы восстановления вплоть до полного допуска к спортивным нагрузкам."
        : isEn
        ? "In direct alignment with Section 5 of NabiOta Rehabilitation & Therapy GmbH, this department unites device-based physiotherapy (KGG), Medical Exercise Therapy (MTT), isokinetic dynamometry, and functional movement screening. Athletes recovering from ligament tears, tendinopathies, or muscle ruptures are guided through objective Return-to-Activity criteria to safely achieve pre-injury performance."
        : isTr
        ? "NabiOta Rehabilitation & Therapy GmbH faaliyet alanı doğrultusunda bu birim; cihaz destekli fizyoterapi (KGG), tıbbi antrenman terapisi (MTT) ve biyomekanik fonksiyonel analizleri bir araya getirir. Bağ kopmaları, kas yırtıkları veya tendon cerrahileri sonrası sporcular, objektif Return-to-Activity kriterleri ile güvenle sahalara döner."
        : isAr
        ? "وفقاً لأهداف NabiOta Rehabilitation & Therapy GmbH، يدمج هذا القسم العلاج بالأجهزة (KGG)، التدريب الطبي (MTT)، والتحليل الحركي البايوميكانيكي. يتم توجيه الرياضيين بعد تمزق الأربطة أو العمليات الجراحية عبر معايير علمية دقيقة للعودة للمنافسة (Return-to-Play)."
        : "In Übereinstimmung mit dem Unternehmensgegenstand der NabiOta Rehabilitation & Therapy GmbH umfasst dieser Bereich gerätegestützte Krankengymnastik (KGG), medizinische Trainingstherapie (MTT) sowie biomechanische Funktionsanalysen. Leistungs- und Freizeitsportler werden nach Rupturen, Muskelverletzungen oder Sehnenoperationen anhand objektivierter Return-to-Activity-Kriterien sicher zurück auf ihr Leistungsniveau geführt.",
      indicationsTitle: isUz ? "Klinik ko'rsatmalar va usullar" : isRu ? "Клинические показания & методы (по PDF)" : isEn ? "Clinical Indications & Protocols (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي العلاج والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isRu
        ? [
            "Разрывы передней/задней крестообразных связок и повреждения менисков",
            "Травмы и воспаления сухожилий (ахиллово сухожилие, ротаторная манжета)",
            "Мышечные повреждения (надрывы волокон, миофасциальные синдромы)",
            "Изокинетическое измерение мышечного баланса и дефицита силы",
            "Плиометрический тренинг, ловкость и функциональный возврат в спорт",
          ]
        : isEn
        ? [
            "Anterior/posterior cruciate ligament ruptures & meniscal pathology",
            "Tendon lesions (Achilles tendon, rotator cuff tears, patellar tendinopathy)",
            "Muscle strains, myofascial tears & post-traumatic scar remodeling",
            "Isokinetic dynamometry testing for bilateral symmetry & strength deficits",
            "Plyometric power, speed agility drills & structured Return-to-Sport clearance",
          ]
        : isTr
        ? [
            "Ön ve arka çapraz bağ rüptürleri, menisküs hasarları",
            "Tendon lezyonları (Aşil tendonu, rotator manşet, patellar tendon)",
            "Her dereceden kas ve bağ yaralanmaları",
            "İzokinetik kuvvet tanılaması ve kuvvet açığı analizi",
            "Özel çeviklik, koordinasyon ve sıçrama kuvveti antrenmanı",
          ]
        : isAr
        ? [
            "تمزقات الرباط الصليبي الأمامي والخلفي وإصابات الغضروف الهلالي",
            "إصابات الأوتار (وتر أخيل، الكفة المدورة، والوتر الرضفي)",
            "إصابات وتمزقات العضلات والأربطة بمختلف درجاتها",
            "التشخيص الديناميكي متساوي القوة (Isokinetics) وتحليل عجز القوة",
            "تدريبات الرشاقة والتناسق والقدرة الانفجارية الخاصة بالرياضات",
          ]
        : [
            "Vordere und hintere Kreuzbandrupturen, Meniskusschäden",
            "Sehnenläsionen (Achillessehne, Rotatorenmanschette, Patellarsehne)",
            "Muskel- und Bänderverletzungen aller Schweregrade",
            "Isokinetische Kraftdiagnostik und Kraftdefizitanalyse",
            "Spezifisches Agility-, Koordinations- und Sprungkrafttraining",
          ],
      standards: isUz
        ? "VBG / Berufsgenossenschaften e'tirofi • MPG bo'yicha tibbiy kuch trenajyorlari • Sertifikatlangan sport fizioterapevtlari"
        : isRu
        ? "Признание VBG / Berufsgenossenschaften • Медицинские силовые тренажеры по MPG • Сертифицированные спорт-физиотерапевты"
        : isEn
        ? "Accredited for professional athletic injury care • MPG-certified medical training floor • Certified sports physios"
        : isTr
        ? "VBG / BG Akreditasyonu • Sertifikalı Spor Fizyoterapistleri • MPG Standardında Medikal Antrenman Alanı"
        : isAr
        ? "اعتماد اتحادات التأمين الرياضي VBG/BG • أخصائيو علاج طبيعي رياضي معتمدون • صالة تدريب طبية معتمدة وفق MPG"
        : "VBG- / BG-Anerkennung • Zertifizierte Sportphysiotherapeuten • Medizinische Trainingsfläche nach MPG",
      image: "/images/rehabilitation/equipment-gait.webp",
      features: isRu
        ? ["Изокинетика Biodex", "Плиометрический тренинг", "Критерии Return-to-Activity"]
        : isEn
        ? ["Biodex isokinetic strength testing", "Agility and plyometric training", "Structured Return-to-Play milestones"]
        : isTr
        ? ["Biodex Kuvvet Tanılaması", "Pliyometrik Fonksiyonel Antrenman", "Yapılandırılmış Return-to-Activity Testleri"]
        : isAr
        ? ["قياس القوة العضلية بجهاز Biodex", "تدريبات وظيفية بليومترية", "اختبارات معيارية للعودة للنشاط الرياضي"]
        : ["Biodex-Kraftdiagnostik", "Pliometrisches Funktionstraining", "Strukturierte Return-to-Activity-Tests"],
    },
    {
      id: "cardio",
      title: isUz ? "Kardiologik va pulmonologik reabilitatsiya" : isRu ? "Кардиологическая & пульмонологическая реха" : isEn ? "Cardiopulmonary Rehabilitation" : isTr ? "Kardiyolojik ve Pulmoner Rehabilitasyon" : isAr ? "إعادة التأهيل القلبي والرئوي" : "Kardiologische Rehabilitation",
      badge: isUz ? "Yurak, nafas va chidamlilik" : isRu ? "Сердце, дыхание & выносливость" : isEn ? "Cardiovascular & Pulmonary" : isTr ? "Kalp-Dolaşım & Akciğer" : isAr ? "القلب والدورة الدموية والرئتان" : "Herz-Kreislauf & Lunge",
      subtitle: isUz
        ? "Doimiy telemetrik EKG monitoringi ostida dozalangan aerobik kardio-mashg'ulotlar"
        : isRu
        ? "Дозированные аэробные кардиотренировки под непрерывным телеметрическим ЭКГ-мониторингом"
        : isEn
        ? "Monitored aerobic endurance reconditioning under continuous ECG telemetry supervision"
        : isTr
        ? "Sürekli telemetrik EKG gözetiminde kontrollü aerobik kondisyon antrenmanı"
        : isAr
        ? "تدريب لياقة هوائي خاضع للرقابة تحت المراقبة التخطيطية اللاسلكية المستمرة للقلب"
        : "Kontrolliertes aerobes Konditionstraining unter kontinuierlicher Telemetrie-Überwachung",
      desc: isUz
        ? "Miokard infarkti, stentlash va kardiojarrohlikdan so'ng uzluksiz EKG monitoringi ostida dozalangan aerobik mashqlar."
        : isRu
        ? "Дозированные аэробные тренировки под непрерывным ЭКГ-мониторингом после инфаркта миокарда, стентирования и кардиохирургии."
        : isEn
        ? "Monitored aerobic reconditioning under continuous telemetry following myocardial infarction, stent placement, and bypass surgery."
        : isTr
        ? "Kalp krizi, stent veya bypass operasyonları sonrası sürekli EKG telemetrisi altında kontrollü dayanıklılık antrenmanı."
        : isAr
        ? "تدريب هوائي موجه بمراقبة التخطيط القلبي المستمر بعد النوبات القلبية، القسطرة والدعامات، وجراحات مجازة الشريان التاجي."
        : "Kontrolliertes Ausdauertraining unter kontinuierlicher EKG-Telemetrie nach Herzinfarkt, Stent-Implantation oder Bypass-Operationen.",
      fullDesc: isUz
        ? "Yurak-qon tomir va o'pka kasalliklariga ega bemorlar uchun xolding chidamlilik va o'pka hajmini xavfsiz tiklash dasturlarini taqdim etadi. Miokard infarkti, shuntlash, koronar tomirlarni stentlash yoki O'SOK va postkovid sindromida kardio-mashqlar shifokor-kardiolog nazorati va doimiy telemetriya ostida o'tkaziladi."
        : isRu
        ? "Для пациентов с сердечно-сосудистыми и бронхолегочными заболеваниями холдинг реализует контролируемые программы восстановления выносливости и функционального объема легких. После инфаркта миокарда, АКШ, стентирования коронарных артерий или при ХОБЛ и постковидном синдроме кардиологические тренировки и дыхательная гимнастика проходят под контролем врача-кардиолога и непрерывной телеметрии."
        : isEn
        ? "For patients recovering from cardiac or pulmonary events, our centers deliver medically safe aerobic reconditioning. Following myocardial infarction, bypass surgery, coronary stenting, or for chronic pulmonary disorders (COPD, pulmonary emphysema, post-COVID dyspnea), heart-rate-guided exercise and respiratory therapy are administered under continuous multi-lead telemetry."
        : isTr
        ? "Kardiyovasküler veya solunum yolu hastalıkları olan hastalarımız için merkezimiz yapılandırılmış dayanıklılık ve kuvvet programları sunar. Kalp krizi, bypass cerrahisi, stent uygulaması veya KOAH ve Post-COVID durumlarında dayanıklılık ve akciğer kapasitesi uzman hekim gözetiminde güvenle artırılır."
        : isAr
        ? "يوفر المركز برامج مصممة لمرضى القلب والجهاز التنفسي. بعد احتشاء عضلة القلب، جراحات المجازة، زراعة الدعامات، أو في حالات الانسداد الرئوي المزمن (COPD) ومتلازمة ما بعد كوفيد، تتم زيادة القدرة البدنية وسعة الرئتين تحت إشراف أطباء القلب وبأمان تام."
        : "Für Patienten mit kardiovaskulären oder pneumologischen Erkrankungen bietet die Gesellschaft strukturierte Ausdauer- und Kraftprogramme. Nach Myokardinfarkt, Bypass-Operation, Stent-Implantation oder bei chronisch obstruktiven Lungenerkrankungen (COPD, Asthma, Post-COVID) werden Belastbarkeit und Lungenvolumen unter fachärztlicher Supervision schrittweise und sicher gesteigert.",
      indicationsTitle: isUz ? "Klinik ko'rsatmalar va usullar" : isRu ? "Клинические показания & методы (по PDF)" : isEn ? "Clinical Indications & Protocols (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي العلاج والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isUz
        ? [
            "O'tkir miokard infarkti va koronar qon tomirlarni stentlashdan keyingi holat",
            "Aortokoronar shuntlash (AKSh) va yurak qopqoqlari operatsiyasidan keyingi davr",
            "Kompensatsiyalangan bosqichdagi surunkali yurak yetishmovchiligi",
            "O'pka surunkali obstruktiv kasalligi (O'SOK) va emfizema",
            "Ixtisoslashtirilgan nafas terapiyasi, balg'am drenaji va ko'krak qafasini mobilizatsiya qilish",
          ]
        : isRu
        ? [
            "Состояние после острого инфаркта миокарда и стентирования коронарных сосудов",
            "Постоперационный период после аортокоронарного шунтирования (АКШ) и клапанной коррекции",
            "Хроническая сердечная недостаточность в компенсированной стадии",
            "ХОБЛ (хроническая обструктивная болезнь легких) и эмфизема",
            "Специализированная дыхательная терапия, дренаж секрета и мобилизация грудной клетки",
          ]
        : isEn
        ? [
            "Post-acute myocardial infarction recovery & coronary stent intervention",
            "Post-surgical bypass grafting (CABG) & structural heart valve repair/replacement",
            "Compensated chronic heart failure with functional capacity optimization",
            "Chronic obstructive pulmonary disease (COPD) & pulmonary emphysema",
            "Targeted respiratory muscle therapy, airway secretion clearance & chest expansion",
          ]
        : isTr
        ? [
            "Akut miyokard enfarktüsü ve koroner stentleme sonrası durum",
            "Bypass veya kalp kapağı ameliyatları sonrası postoperatif takip",
            "Stabil evrede kronik kalp yetmezliği",
            "Kronik obstrüktif akciğer hastalığı (KOAH) ve akciğer amfizemi",
            "Hedefe yönelik solunum terapisi, sekresyon atımı ve toraks mobilizasyonu",
          ]
        : isAr
        ? [
            "مرحلة ما بعد احتشاء عضلة القلب الحاد وتركيب دعامات الشرايين التاجية",
            "متابعة ما بعد جراحات القلب المفتوح وترميم الصمامات",
            "القصور القلبي المزمن في مراحله المستقرة",
            "مرض الانسداد الرئوي المزمن (COPD) وانتفاخ الرئة",
            "العلاج التنفسي الموجه، تصريف الإفرازات وتحريك القفص الصدري",
          ]
        : [
            "Zustand nach akutem Myokardinfarkt & Koronarstenting",
            "Postoperativ nach Bypass- oder Herzklappenoperationen",
            "Chronische Herzinsuffizienz im stabilen Stadium",
            "Chronisch obstruktive Lungenerkrankung (COPD) & Lungenemphysem",
            "Gezielte Atemtherapie, Sekretlösung & Thoraxmobilisation",
          ],
      standards: isUz
        ? "Doimiy 12 kanalli telemetrik monitoring • Kardiologik konsilium • Reanimatsion jihozlar"
        : isRu
        ? "Непрерывный 12-канальный телеметрический мониторинг • Кардиологический консилиум • Реанимационное оснащение"
        : isEn
        ? "Continuous 12-channel telemetry monitoring • Supervising cardiologist oversight • Immediate resuscitation backup"
        : isTr
        ? "Kesintisiz 12 Kanallı Telemetri İzlemi • Yerinde Acil Müdahale Donanımı • Kardiyolojik Uzman Hekim Desteği"
        : isAr
        ? "مراقبة لاسلكية مستمرة بـ 12 مسرى للقلب • تجهيزات إنعاش فورية • إشراف استشاري لأمراض القلب"
        : "Kontinuierliches 12-Kanal-Telemetrie-Monitoring • Notfall-Equipment vor Ort • Kardiologische ärztliche Betreuung",
      image: "/images/areas/cardiology-focus.webp",
      features: isUz
        ? ["Doimiy puls va EKG telemetriyasi", "Xavfsiz puls rejimiga o'rgatish", "Kardiolog nazorati"]
        : isRu
        ? ["Непрерывная телеметрия пульса и ЭКГ", "Обучение безопасному пульсовому режиму", "Контроль кардиолога"]
        : isEn
        ? ["Continuous telemetry monitoring", "Target heart-rate zone management", "Supervising cardiologist guidance"]
        : isTr
        ? ["Telemetrik Efor EKG'si", "Hedefe Yönelik Dayanıklılık Eğitimi", "Düzenli Kardiyolojik Kontroller"]
        : isAr
        ? ["تخطيط القلب الترددي اللاسلكي مع الجهد", "تدريب مستهدف لرفع اللياقة الهوائية", "فحوصات قلبية دورية منتظمة"]
        : ["Telemetrisches Belastungs-EKG", "Gezieltes Ausdauertraining", "Regelmäßige kardiologische Kontrolle"],
    },
    {
      id: "hydro",
      title: isUz ? "Gidrokinezoterapiya va limfologiya" : isRu ? "Гидрокинезотерапия & лимфология" : isEn ? "Medical Hydrotherapy & Aquatic Rehab" : isTr ? "Tıbbi Hidroterapi & Lenfoloji" : isAr ? "العلاج المائي الطبي وتصريف اللمف" : "Medizinische Hydrotherapie",
      badge: isUz ? "32°C basseyn va Limfodrenaj" : isRu ? "Бассейн 32°C & Лимфодренаж" : isEn ? "Warm Water 32°C & MLD" : isTr ? "32°C Termal Havuz & MLD" : isAr ? "حوض مائي 32°C وتصريف لمفاوي" : "Bewegungsbad 32°C & MLD",
      subtitle: isUz
        ? "Iliq suvda bo'g'imlarni xavfsiz yengillashtirish va manual limfodrenaj (MLD)"
        : isRu
        ? "Щадящая разгрузка суставов в теплой воде и мануальный лимфодренаж (MLD)"
        : isEn
        ? "Buoyancy joint decompression in warm thermal pool & Manual Lymphatic Drainage (MLD)"
        : isTr
        ? "Termal suda eklemleri koruyan yerçekimsiz hareket ve hedefe yönelik ödem tedavisi"
        : isAr
        ? "انعدام وزن مريح للمفاصل في المياه الحرارية وعلاج متخصص لتصريف الوذمات"
        : "Gelenkschonende Schwerelosigkeit im Thermalwasser und gezielte Entstauungstherapie",
      desc: isRu
        ? "Щадящая разгрузка веса тела до 90% в специализированном терапевтическом бассейне с теплой водой для пациентов с выраженным болевым синдромом."
        : isEn
        ? "Buoyancy unloading of up to 90% body weight in a therapeutic warm-water pool, ideal for severe arthritis, early post-op, and chronic back pain."
        : isTr
        ? "Sıcak hidroterapi havuzunda eklem ve omurgayı koruyan ağırlıksız egzersiz. Ağrısız erken mobilizasyon için %90'a varan ağırlık azalması."
        : isAr
        ? "تخفيف العبء عن المفاصل والعمود الفقري بنسبة تصل إلى 90% في حوض العلاج المائي الدافئ لتمكين الحركة المبكرة دون ألم."
        : "Schonende Entlastung von Gelenken und Wirbelsäule im warmen Bewegungsbad. Bis zu 90 % Gewichtsreduktion für schmerzfreie Frühmobilisation.",
      fullDesc: isRu
        ? "В качестве физикальных методов терапии (согласно пункту 5 PDF) в холдинге оборудован специализированный лечебный бассейн с постоянной температурой 32°C. Гидростатическая подъемная сила снижает осевую нагрузку на суставы и позвоночник на 90%, снимая болевые спазмы. Комплекс дополняется мануальным лимфодренажем (MLD), выполняемым сертифицированными лимфологами для снятия постоперационных и лимфатических отеков."
        : isEn
        ? "As part of physical modalities stipulated in Section 5 of the PDF, our facility features a specialized 32°C therapeutic motion pool. Buoyant water unloading reduces axial joint load by up to 90%, enabling immediate, pain-free mobility retraining. In addition, certified lymphedema therapists perform Manual Lymph Drainage (MLD) for rapid post-operative hematoma and swelling resolution."
        : isTr
        ? "NabiOta grubu, PDF Kısım 5'teki fiziksel tedavi ilkelerine uygun olarak 32°C sıcaklıkta medikal bir egzersiz havuzuna sahiptir. Suyun kaldırma kuvveti vücut ağırlığının %90'ını kaldırarak ağrısız erken hareket imkanı sunar. Sertifikalı terapistlerimiz ayrıca ödem ve hematomların giderilmesi için Manuel Lenfatik Drenaj (MLD) uygular."
        : isAr
        ? "كجزء من العلاجات الفيزيائية وفق البند 5، تضم مجموعة NabiOta حوضاً علاجياً بدرجة حرارة 32 مئوية. يقلل طفو الماء وزن الجسم الفعال بنسبة 90%، مما يسمح بحركة مبكرة خالية من الألم. إضافة إلى ذلك، ينفذ أخصائيونا التصريف اللمفاوي اليدوي (MLD) لعلاج التورمات والتجمعات الدموية بعد العمليات."
        : "Als integraler Bestandteil der physikalischen Anwendungen gemäß Punkt 5 des PDF bietet die NabiOta-Gruppe ein 32°C warmes medizinisches Bewegungsbad. Die hydrostatische Entlastung reduziert das wirksame Körpergewicht um bis zu 90%, was schmerzfreie frühe Bewegungsmuster ermöglicht. Ergänzend führen zertifizierte Lymphtherapeuten die Manuelle Lymphdrainage (MLD) zur postoperativen und chronischen Ödemreduktion durch.",
      indicationsTitle: isUz ? "Klinik ko'rsatmalar va usullar" : isRu ? "Клинические показания & методы (по PDF)" : isEn ? "Clinical Indications & Protocols (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي العلاج والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isRu
        ? [
            "Ранняя послеоперационная мобилизация суставов при разгрузке веса тела",
            "Выраженный гонартроз и коксартроз со стартовыми болями",
            "Постоперационные отеки, гематомы и застойные явления мягких тканей",
            "Первичные и вторичные лимфедемы (включая онкологический профиль)",
            "Хронический вертеброгенный болевой синдром и фибромиалгия",
          ]
        : isEn
        ? [
            "Early post-surgical aquatic gait mobilization with bodyweight buoyancy unloading",
            "Severe knee and hip osteoarthritis with weight-bearing pain",
            "Post-operative lymphatic stasis, extensive hematomas & tissue edema",
            "Primary and secondary lymphedema (including post-oncological surgery care)",
            "Chronic axial back pain syndromes, fibromyalgia & complex regional pain",
          ]
        : isTr
        ? [
            "Tam ağırlık kaldırma ile ameliyat sonrası erken mobilizasyon",
            "Yüklenme ağrısı olan ileri evre diz ve kalça artrozu (kireçlenme)",
            "Ameliyat ve travma sonrası doku şişlikleri ve hematomlar",
            "Primer ve sekonder lenfödemler (onkolojik cerrahiler sonrası dahil)",
            "Kronik omurga ağrısı sendromları ve fibromiyalji",
          ]
        : isAr
        ? [
            "الاستعادة المبكرة للحركة بعد الجراحة مع انعدام وزن الجسم",
            "خشونة المفاصل المتقدمة في الركبة والورك مع آلام التحميل",
            "التورمات والتجمعات الدموية التالية للجراحة والإصابات",
            "الوذمات اللمفية الأولية والثانوية (بما فيها رعاية ما بعد جراحات الأورام)",
            "متلازمات آلام الظهر المزمنة والفيبروميالغيا",
          ]
        : [
            "Postoperative Frühmobilisation bei voller Gewichtsentlastung",
            "Schwere Gon- und Koxarthrose mit Belastungsschmerz",
            "Postoperative und posttraumatische Schwellungen und Hämatome",
            "Primäre und sekundäre Lymphödeme (nach onkologischen Eingriffen)",
            "Chronische Schmerzsyndrome und Fibromyalgie",
          ],
      standards: isUz
        ? "Sertifikatlangan limfoterapevtlar • DIN 19643 bo'yicha tibbiy suv tozaligi • To'siqsiz basseyn ko'targichi"
        : isRu
        ? "Сертифицированные лимфотерапевты • Водоподготовка по DIN 19643 • Безбарьерный подъемник в бассейн"
        : isEn
        ? "Certified manual lymphology therapists • Water hygiene per DIN 19643 • Barrier-free pool hoists"
        : isTr
        ? "Sertifikalı Lenf Terapistleri • DIN 19643 Su Hijyen Standardı • Engelsiz Havuz Asansörü"
        : isAr
        ? "معالجون معتمدون في تصريف اللمف • معايير نقاء المياه الطبية DIN 19643 • رافعة مخصصة لذوي الاحتياجات"
        : "Zertifizierte Lymphtherapeuten • Medizinische Wasserhygiene nach DIN 19643 • Barrierefreier Hebelift",
      image: "/images/rehabilitation/hydrotherapy-pool.webp",
      features: isRu
        ? ["Снижение нагрузки на суставы", "Улучшение лимфооттока", "Релаксация спазмированных мышц"]
        : isEn
        ? ["Zero-gravity joint decompression", "Enhanced lymphatic drainage", "Spasm relief and mobility gains"]
        : isTr
        ? ["Eklemleri Koruyan Yerçekimsiz Hareket", "Lenf Akışının Canlandırılması", "Kronik Kas Spazmlarının Giderilmesi"]
        : isAr
        ? ["تخفيف الأحمال المفصلية بانعدام الوزن", "تنشيط التدفق اللمفاوي الطبيعي", "إرخاء التشنجات العضلية المزمنة"]
        : ["Gelenkschonende Schwerelosigkeit", "Anregung des Lymphflusses", "Lösung chronischer Muskelverspannungen"],
    },
    {
      id: "ergo",
      title: isRu ? "Эрготерапия, логопедия & боли" : isEn ? "Ergotherapy, Speech & Pain Care" : isTr ? "Ergoterapi, Logopedi ve Ağrı Tedavisi" : isAr ? "العلاج الوظيفي، علاج النطق والتحكم بالألم" : "Ergotherapie & Logopädie",
      badge: isRu ? "Быт, речь, глотание & боль" : isEn ? "ADL, Speech & Pain Therapy" : isTr ? "İnce Motor, Dil & Ağrı" : isAr ? "المهارات الحركية الدقيقة، النطق والألم" : "Feinmotorik, Sprache & Schmerz",
      subtitle: isUz
        ? "Kundalik mustaqillikni mashq qilish (ADL), logopedik yordam va multimodal og'riq terapiyasi"
        : isRu
        ? "Тренировка бытовой независимости (ADL), логопедическая помощь и мультимодальная терапия боли"
        : isEn
        ? "Activities of daily living (ADL), speech-swallowing rehabilitation & multimodal pain relief"
        : isTr
        ? "Günlük yaşam bağımsızlığı (ADL), konuşma ve yutma terapisi ile multimodal ağrı tedavisi"
        : isAr
        ? "استعادة استقلالية الحياة اليومية (ADL)، علاج النطق والبلع، وعلاج الألم المتعدد"
        : "Wiedererlangung von Alltagsautonomie (ADL), Sprach-/Schlucktherapie & Schmerztherapie",
      desc: isRu
        ? "Восстановление мелкой моторики, речи, глотания и когнитивных функций после неврологических и ортопедических нарушений."
        : isEn
        ? "Rebuilding fine motor dexterity, speech, swallowing, and cognitive independence after stroke or surgical interventions."
        : isTr
        ? "Nörolojik veya cerrahi kısıtlamalar sonrası ince motor becerilerin, konuşma, lisan ve yutma fonksiyonlarının yeniden inşası."
        : isAr
        ? "إعادة بناء المهارات الحركية الدقيقة، النطق، البلع والقدرات الإدراكية بعد الاضطرابات العصبية والجراحية."
        : "Wiedererlangung von Feinmotorik, Sprach-, Sprech- und Schluckfunktionen sowie Alltagsfähigkeiten nach neurologischen oder operativen Einschränkungen.",
      fullDesc: isRu
        ? "Согласно прямому положению пункта 5 устава NabiOta Rehabilitation & Therapy GmbH, медицинская помощь холдинга включает эрготерапевтические меры для развития моторики и познавательных способностей, тренировку навыков повседневной жизни (ADL), логопедическую терапию нарушений речи, голоса и глотания (дисфагии), а также междисциплинарную терапию хронической боли."
        : isEn
        ? "In rigorous accordance with Section 5 of NabiOta Rehabilitation & Therapy GmbH, our clinical mandate encompasses occupational therapy to restore fine motor and cognitive faculties, activities of daily living (ADL) independence training, specialized speech and swallowing therapy (dysphagia management), and interdisciplinary multimodal chronic pain management."
        : isTr
        ? "NabiOta Rehabilitation & Therapy GmbH tüzüğünün 5. maddesi uyarınca hizmetlerimiz; motor ve bilişsel yetileri geliştiren ergoterapi uygulamalarını, günlük yaşam aktiviteleri (ADL) bağımsızlık eğitimini, dil, konuşma ve yutma bozuklukları (disfaji) logopedik tedavisini ve multimodal kronik ağrı tedavisini kapsar."
        : isAr
        ? "وفقاً للتفويض السريري للبند 5 لشركة NabiOta Rehabilitation & Therapy GmbH، تشمل الرعاية تدابير العلاج الوظيفي لتنمية المهارات الحركية والإدراكية، التدريب على استقلالية الحياة اليومية (ADL)، علاج اضطرابات النطق والصوت والبلع (عسر البلع)، بالإضافة إلى العلاج متعدد التخصصات للآلام المزمنة."
        : "Gemäß den ausdrücklichen Vorgaben von Punkt 5 der NabiOta Rehabilitation & Therapy GmbH umfasst der Versorgungsauftrag ergotherapeutische Maßnahmen zur Förderung motorischer und kognitiver Fähigkeiten, Selbstständigkeitstraining im Alltag (ADL), logopädische Behandlungen bei Sprach-, Sprech-, Stimm- und Schluckstörungen (Dysphagie) sowie interdisziplinäre multimodale Schmerztherapie.",
      indicationsTitle: isUz ? "Klinik ko'rsatmalar va usullar" : isRu ? "Клинические показания & методы (по PDF)" : isEn ? "Clinical Indications & Protocols (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي العلاج والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isRu
        ? [
            "Тренировка мелкой моторики кисти, захвата предметов и координации пальцев",
            "Обучение повседневным навыкам (одевание, гигиена, кулинария - ADL)",
            "Логопедическое восстановление речи и голоса (афазия, дизартрия после инсульта)",
            "Терапия нарушений глотания (дисфагия с подбором безопасного питания)",
            "Интердисциплинарная мультимодальная терапия при упорных болевых синдромах",
          ]
        : isEn
        ? [
            "Fine motor dexterity, finger opposition, sensory re-education & splinting",
            "Activities of daily living training (ADL - dressing, self-care, domestic skills)",
            "Speech and language rehabilitation (aphasia, dysarthria post-stroke)",
            "Swallowing therapy & aspiration-preventative dysphagia management",
            "Interdisciplinary multimodal chronic pain treatment programs",
          ]
        : isTr
        ? [
            "El ince motorik, duyu ve kavrama fonksiyonu antrenmanı",
            "Günlük yaşamda bağımsızlık eğitimi (ADL - Giyinme, kişisel bakım, ev işleri)",
            "Konuşma ve lisan bozuklukları (İnme sonrası afazi ve dizartri)",
            "Yutma terapisi (Aspirasyon riskine karşı beslenme yönetimi - Disfaji)",
            "Kronik ağrı sendromlarında multimodal ağrı terapisi",
          ]
        : isAr
        ? [
            "تدريب المهارات الحركية الدقيقة، الإحساس وقبضة اليد",
            "التدريب على استقلالية الحياة اليومية (ADL - ارتداء الملابس، النظافة الشخصية)",
            "اضطرابات النطق واللغة (الحبسة الكلامية وعسر التلفظ بعد الجلطات)",
            "علاج اضطرابات البلع وتغذية آمنة لمنع الاستنشاق (عسر البلع)",
            "العلاج متعدد الأنماط لمتلازمات الألم المزمن",
          ]
        : [
            "Feinmotorik-, Sensibilitäts- und Greiffunktionstraining der Hand",
            "Selbstständigkeitstraining im Alltag (ADL - Activities of Daily Living)",
            "Sprach- und Sprechstörungen (Aphasie, Dysarthrie nach Schlaganfall)",
            "Schlucktherapie (Dysphagie-Management mit aspirationsgeschützter Kost)",
            "Multimodale Schmerztherapie bei chronischen Schmerzsyndromen",
          ],
      standards: isUz
        ? "Heilmittelkatalog (GKV/PKV) bo'yicha hisob-kitob • Uyga tashrif buyurish ruxsatnomasi • Ko'p tarmoqli og'riq konsiliumlari"
        : isRu
        ? "Направление по каталогу Heilmittelkatalog (GKV/PKV) • Возможность выезда на дом • Междисциплинарные консилиумы"
        : isEn
        ? "Reimbursed under German Heilmittel catalog • Outpatient home visits available • Pain conferences"
        : isTr
        ? "Heilmittelkatalog (GKV/PKV) Kapsamında Geri Ödeme • Ev Ziyaretleri İzni • Disiplinlerarası Ağrı Konseyleri"
        : isAr
        ? "مغطى بلائحة العلاجات الطبية الألمانية • ترخيص للزيارات المنزلية • مؤتمرات طبية متعددة التخصصات لعلاج الألم"
        : "Abrechnung nach Heilmittelkatalog (GKV/PKV) • Zulassung für Hausbesuche • Interdisziplinäre Schmerzkonferenzen",
      image: "/images/services/therapie.webp",
      features: isRu
        ? ["Эрготерапия и тренировка быта (ADL)", "Логопедия: речь, голос и глотание", "Когнитивный тренинг и ортезирование"]
        : isEn
        ? ["Ergotherapy & daily life skills (ADL)", "Speech, voice & swallowing therapy", "Cognitive training & custom splints"]
        : isTr
        ? ["Ergoterapi & Günlük Yaşam Becerileri (ADL)", "Logopedi: Konuşma, Ses & Yutma Terapisi", "Bilişsel Beyin Eğitimi & Özel Ateller"]
        : isAr
        ? ["علاج وظيفي واستقلالية يومية (ADL)", "علاج نطق وتخاطب وصوت وبلع", "تدريب القدرات الإدراكية وتفصيل الجبائر"]
        : ["Ergotherapie & Alltagsfähigkeiten (ADL)", "Logopädie: Sprach-, Sprech- & Schlucktherapie", "Kognitives Hirnleistungstraining & Schienen"],
    },
  ];

  // ── Skrin 2 Data: Unser Ansatz (PDF Section 5) ──
  const approachData = {
    eyebrow: isUz ? "BIZNING YONDASHUV" : isRu ? "НАШ ПОДХОД" : isEn ? "OUR APPROACH" : isTr ? "YAKLAŞIMIMIZ" : isAr ? "منهجنا العلاجي" : "UNSER ANSATZ",
    title: isUz ? "Kompleks g'amxo'rlik. Eng yuqori standartlar asosida." : isRu ? "Комплексная забота. По высшим стандартам." : isEn ? "Holistic Care. To the Highest Standards." : isTr ? "Bütüncül Bakım. En Yüksek Standartlarda." : isAr ? "رعاية شاملة بأعلى المعايير الطبية." : "Ganzheitliche Betreuung. Nach höchsten Standards.",
    desc: isUz
      ? "Uzoq muddatli shifo topishingiz uchun biz tibbiy ekspertizani ilg'or terapiya texnologiyalari va individual g'amxo'rlik bilan birlashtiramiz."
      : isRu
      ? "Мы объединяем медицинскую экспертизу с передовыми технологиями терапии и персонализированным вниманием — для вашего долгосрочного выздоровления."
      : isEn
      ? "We combine clinical excellence with state-of-the-art physical therapy and compassionate support for lasting mobility."
      : isTr
      ? "Kalıcı iyileşmeniz ve hareketliliğiniz için tıbbi uzmanlığı en modern terapi teknolojileri ve birebir ilgiyle birleştiriyoruz."
      : isAr
      ? "نجمع بين الخبرة الطبية المرموقة وأحدث تقنيات العلاج والرعاية الفردية الدافئة لتحقيق تعافيكم المستدام."
      : "Wir kombinieren medizinische Expertise mit modernster Therapie und persönlicher Betreuung – für Ihren langfristigen Erfolg.",
    stats: [
      {
        val: "100+",
        label: isUz ? "Oyiga reabilitatsiya bemorlari" : isRu ? "Пациентов реабилитации в месяц" : isEn ? "Rehabilitation patients per month" : isTr ? "Aylık rehabilitasyon hastası" : isAr ? "مريض تأهيل شهرياً" : "Rehabilitationspatienten pro Monat",
        icon: <RehabCloverIcon className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        val: "95%",
        label: isUz ? "Bemorlarimiz mamnunligi" : isRu ? "Удовлетворенность наших пациентов" : isEn ? "Patient satisfaction rate" : isTr ? "Hastalarımızın memnuniyet oranı" : isAr ? "نسبة رضا مرضانا" : "Zufriedenheit unserer Patienten",
        icon: <SatisfactionBadgeIcon className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        val: "24/7",
        label: isUz ? "Doimiy klinik hamrohlik" : isRu ? "Непрерывное сопровождение" : isEn ? "Dedicated clinical support" : isTr ? "Kesintisiz klinik destek" : isAr ? "رعاية ومتابعة سريرية مستمرة" : "Betreuung und Support",
        icon: <SupportShieldIcon className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        val: ">10",
        label: isUz ? "Reabilitatsiyadagi yillik klinik tajriba" : isRu ? "Лет клинического опыта в реабилитации" : isEn ? "Years of rehabilitation experience" : isTr ? "Rehabilitasyonda klinik tecrübe yılı" : isAr ? "سنوات من الخبرة التأهيلية" : "Jahre Erfahrung in der Rehabilitation",
        icon: <ExperienceAwardIcon className="w-5 h-5 text-[#ECCF96]" />,
      },
    ],
  };

  // ── Skrin 4 Data: Process (Your Pathway Back to Greater Quality of Life) ──
  const processData = {
    eyebrow: isUz ? "BIZNING JARAYON" : isRu ? "НАШ ПРОЦЕСС" : isEn ? "OUR PROCESS" : isTr ? "SÜRECİMİZ" : isAr ? "مراحل رحلة العلاج" : "UNSER PROZESS",
    title: isUz ? "Hayot sifatini oshirish sari sizning yo'lingiz." : isRu ? "Ваш путь к возвращению качества жизни." : isEn ? "Your Pathway Back to Greater Quality of Life." : isTr ? "Daha Yüksek Yaşam Kalitesine Giden Yolunuz." : isAr ? "طريقكم نحو استعادة جودة الحياة والحركة." : "Ihr Weg zurück zu mehr Lebensqualität.",
    steps: [
      {
        step: "01",
        title: isUz ? "Birlamchi maslahat va diagnostika" : isRu ? "Первичная консультация и диагностика" : isEn ? "Initial Consultation & Diagnostics" : isTr ? "İlk Görüşme ve Tanı" : isAr ? "الاستشارة الأولية والتشخيص" : "Erstgespräch & Diagnostik",
        desc: isUz
          ? "Biz sizning klinik holatingizni tahlil qilamiz va maqsadlarni birgalikda belgilaymiz."
          : isRu
          ? "Мы анализируем вашу клиническую ситуацию и вместе определяем цели."
          : isEn
          ? "We analyze your condition and jointly establish your personal recovery milestones."
          : isTr
          ? "Klinik durumunuzu titizlikle analiz eder ve hedeflerinizi birlikte belirleriz."
          : isAr
          ? "نحلل حالتكم الصحية بدقة ونحدد أهداف التعافي المشتركة."
          : "Wir analysieren Ihre Situation und definieren gemeinsam Ihre Ziele.",
        icon: <Stethoscope className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        step: "02",
        title: isUz ? "Individual terapiya rejasi" : isRu ? "Индивидуальный план терапии" : isEn ? "Personalized Therapy Plan" : isTr ? "Kişiye Özel Terapi Planı" : isAr ? "خطة علاجية مخصصة" : "Individuelle Therapieplanung",
        desc: isUz
          ? "Sizning ehtiyojlaringiz va fiziologik imkoniyatlaringizga moslashtirilgan reja."
          : isRu
          ? "Индивидуальный план с учетом ваших физиологических возможностей."
          : isEn
          ? "A tailored roadmap calibrated to your physiological capabilities and targets."
          : isTr
          ? "Fizyolojik ihtiyaç ve kapasitenize göre adım adım yapılandırılmış özel program."
          : isAr
          ? "برنامج تأهيلي مفصل بدقة وفق قدراتكم الجسدية واحتياجاتكم."
          : "Ein maßgeschneiderter Plan auf Basis Ihrer Bedürfnisse und Möglichkeiten.",
        icon: <FileText className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        step: "03",
        title: isUz ? "Amalga oshirish va hamrohlik" : isRu ? "Проведение и сопровождение" : isEn ? "Execution & Guidance" : isTr ? "Uygulama ve Yakın Takip" : isAr ? "التنفيذ والمرافقة اللصيقة" : "Durchführung & Begleitung",
        desc: isUz
          ? "Mutaxassislarimiz butun reabilitatsiya jarayonida sizga yaqindan hamrohlik qiladi."
          : isRu
          ? "Наши эксперты непрерывно сопровождают вас на всем пути реабилитации."
          : isEn
          ? "Our specialists closely guide and assist you across every phase of rehabilitation."
          : isTr
          ? "Uzman terapistlerimiz tüm rehabilitasyon süreci boyunca size rehberlik eder."
          : isAr
          ? "يرافقكم خبراؤنا واختصاصيونا خطوة بخطوة خلال مسار التأهيل بأكمله."
          : "Unsere Experten begleiten Sie engmaschig durch den gesamten Rehabilitationsprozess.",
        icon: <Activity className="w-5 h-5 text-[#ECCF96]" />,
      },
      {
        step: "04",
        title: isUz ? "Uzoq muddatli g'amxo'rlik" : isRu ? "Долгосрочная забота" : isEn ? "Long-Term Care" : isTr ? "Uzun Vadeli Destek" : isAr ? "الرعاية اللاحقة المستدامة" : "Langfristige Betreuung",
        desc: isUz
          ? "Reabilitatsiyadan keyin ham barqaror salomatligingiz uchun yoningizda qolamiz."
          : isRu
          ? "Мы остаемся рядом и после завершения курса – для вашего устойчивого здоровья."
          : isEn
          ? "We continue by your side even after graduation for enduring mobility and health."
          : isTr
          ? "Rehabilitasyon sonrasında da kalıcı sağlığınız ve hareketliliğiniz için yanınızdayız."
          : isAr
          ? "نبقى بجانبكم حتى بعد انتهاء البرنامج للحفاظ على حركتكم وصحتكم المستدامة."
          : "Auch nach der Reha bleiben wir an Ihrer Seite – für Ihre nachhaltige Gesundheit.",
        icon: <Heart className="w-5 h-5 text-[#ECCF96]" />,
      },
    ],
  };

  // ── Skrin 3 Data: 2-Card Grid (Facilities + Innovation) ──
  const facilitiesCard = {
    badge: isUz ? "ZAMONAVIY SHAROITLAR" : isRu ? "СОВРЕМЕННЫЕ УСЛОВИЯ" : isEn ? "MODERN FACILITIES" : isTr ? "MODERN TESİSLER" : isAr ? "مرافق حديثة" : "MODERNE EINRICHTUNGEN",
    title: isUz ? "O'zgacha muhitdagi terapiya" : isRu ? "Терапия в особой атмосфере" : isEn ? "Therapy in an Exceptional Setting" : isTr ? "Ayrıcalıklı Bir Atmosferde Terapi" : isAr ? "العلاج في بيئة استشفائية استثنائية" : "Therapie in einer besonderen Umgebung",
    desc: isUz
      ? "Bizning zamonaviy reabilitatsiya maskanlarimiz muvaffaqiyatli tiklanish uchun ideal sharoitlarni taqdim etadi."
      : isRu
      ? "Наши современные реабилитационные пространства создают идеальные условия для успешного восстановления."
      : isEn
      ? "Our state-of-the-art facilities provide the ideal environment for successful rehabilitation."
      : isTr
      ? "Modern rehabilitasyon alanlarımız başarılı bir iyileşme süreci için ideal koşulları sağlar."
      : isAr
      ? "توفر مرافقنا التأهيلية المتطورة البيئة المثالية لتحقيق أقصى درجات النجاح العلاجي."
      : "Unsere modernen Einrichtungen bieten Ihnen den idealen Rahmen für eine erfolgreiche Rehabilitation.",
    btn: isUz ? "Bizning jihozlarimiz" : isRu ? "Наше оснащение" : isEn ? "Our Facilities" : isTr ? "Donanımlarımız" : isAr ? "تجهيزاتنا ومرافقنا" : "Unsere Ausstattung",
  };

  const innovationCard = {
    eyebrow: isUz ? "INNOVATSIYALAR VA EKSPERTIZA" : isRu ? "ИННОВАЦИИ И ЭКСПЕРТИЗА" : isEn ? "INNOVATION & EXPERTISE" : isTr ? "İNOVASYON VE UZMANLIK" : isAr ? "الابتكار والخبرة السريرية" : "INNOVATION & EXPERTISE",
    title: isUz ? "Salomatligingiz uchun ilg'or terapiya." : isRu ? "Передовая терапия для вашего здоровья." : isEn ? "Cutting-Edge Therapy for Your Health." : isTr ? "Sağlığınız İçin En Son Teknoloji Terapi." : isAr ? "أحدث التقنيات العلاجية من أجل صحتكم." : "Modernste Therapie für Ihre Gesundheit.",
    desc: isUz
      ? "Innovatsion usullar va zamonaviy uskunalar yordamida biz sizga faol va mustaqil hayotga qaytishingizga ko'maklashamiz."
      : isRu
      ? "С помощью инновационных методик и высокотехнологичного оборудования мы помогаем вам вернуться к активной и независимой жизни."
      : isEn
      ? "With innovative procedures and advanced equipment, we empower you on your journey back to an active and self-determined life."
      : isTr
      ? "Yenilikçi yöntemler ve son teknoloji ekipmanlarla aktif ve bağımsız bir yaşama dönüşünüzü destekliyoruz."
      : isAr
      ? "من خلال التقنيات المبتكرة والأجهزة فائقة التطور، نمكّنكم في طريق العودة إلى حياة مفعمة بالحيوية والاستقلالية."
      : "Mit innovativen Verfahren und modernster Ausstattung unterstützen wir Sie auf Ihrem Weg zurück in ein aktives und selbstbestimmtes Leben.",
    items: isUz
      ? [
          "Yuqori texnologiyali trenajyorlar",
          "Raqamli biomexanik tahlil",
          "Ko'p tarmoqli terapevtlar jamoasi",
          "Shaxsiy natijalar nazorati",
        ]
      : isRu
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
      : isTr
      ? [
          "En son teknoloji egzersiz cihazları",
          "Dijital hareket ve yürüme analizi",
          "Disiplinlerarası uzman terapist ekibi",
          "Bireysel gelişim ve ilerleme takibi",
        ]
      : isAr
      ? [
          "أجهزة تدريب علاجية فائقة الحداثة",
          "تحليل رقمي للحركة والمشي",
          "فريق متعدد التخصصات من خيرة المعالجين",
          "متابعة دورية مستمرة لتقدم الحالة",
        ]
      : [
          "Hochmoderne Trainingsgeräte",
          "Digitale Bewegungsanalyse",
          "Interdisziplinäres Therapeutenteam",
          "Individuelle Fortschrittskontrolle",
        ],
  };

  // ── Team Doctors ──
  const teamDoctors = [
    {
      name: "Dr. med. Michael Weber",
      role: isUz ? "Reabilitatsiya bo'limi bosh shifokori" : isRu ? "Главный врач отделения реабилитации" : isEn ? "Chief Physician Rehabilitation & Sports Medicine" : isTr ? "Fiziksel ve Rehabilitatif Tıp Bölüm Başkanı" : isAr ? "رئيس قسم الطب الطبيعي والتأهيلي" : "Chefarzt Physikalische & Rehabilitative Medizin",
      spec: isUz ? "Ortopediya, manual terapiya, sport tibbiyoti" : isRu ? "Ортопедия, мануальная терапия, спортивная медицина" : isEn ? "Orthopedics, Manual Medicine, Sports Science" : isTr ? "Ortopedi, Kiropraktik, Spor Hekimliği" : isAr ? "طب العظام، العلاج اليدوي والطب الرياضي" : "Orthopädie, Chirotherapie, Sportmedizin",
      image: "/images/areas/doc-michael-weber.webp",
      quote: isUz
        ? "„Bizning maqsadimiz faqat og'riqni yo'qotish emas, balki bemorning to'liq harakat erkinligi va har bir qadamiga ishonchini qaytarishdir.“"
        : isRu
        ? "„Наша цель — не просто устранить боль, а полностью восстановить биомеханику и уверенность пациента в каждом движении.“"
        : isEn
        ? "“Our mission is not merely pain relief, but restoring complete biomechanical freedom and confidence in every step.”"
        : isTr
        ? "„Hedefimiz sadece ağrıyı dindirmek değil, hastamızın hareket kabiliyetini ve yaşam sevincini bütünüyle yeniden kazandırmaktır.“"
        : isAr
        ? "«هدفنا لا يقتصر على تسكين الألم فحسب، بل استعادة كامل الحركة وثقة المريض في كل خطوة بحياته اليومية.»"
        : "„Unser Ziel ist nicht nur Schmerzfreiheit, sondern die vollständige Wiedererlangung Ihrer Mobilität und Lebensfreude im Alltag.“",
    },
    {
      name: "Julia Keller, M.Sc.",
      role: isUz ? "Yetakchi fizioterapevt va dasturlar koordinatori" : isRu ? "Ведущий физиотерапевт и координатор программ" : isEn ? "Lead Physical Therapist & Rehabilitation Coordinator" : isTr ? "Baş Fizyoterapist & Reha Koordinatörü" : isAr ? "كبير أخصائيي العلاج الطبيعي ومنسق البرامج" : "Leitende Physiotherapeutin & Reha-Koordinatorin",
      spec: isUz ? "AlterG, OMT va tizza bo'g'imi reabilitatsiyasi mutaxassisi" : isRu ? "Специалист по AlterG, OMT и реабилитации коленного сустава" : isEn ? "OMT Certified, AlterG Specialist, Knee & Hip Rehab" : isTr ? "Manuel Terapi (OMT), AlterG® Uzmanı, Diz & Kalça Reha" : isAr ? "العلاج اليدوي المعتمد (OMT)، أخصائية AlterG®، وتأهيل الركبة والورك" : "Manuelle Therapie (OMT), AlterG®-Trainerin, Knie- & Hüftreha",
      image: "/images/areas/doc-anna-keller.webp",
      quote: isUz
        ? "„Har bir bemor aniq hisoblangan yuklama darajasi bilan individual rejaga ega bo'ladi.“"
        : isRu
        ? "„Каждый пациент получает персонализированный план с точно дозированным шагом нагрузки.“"
        : isEn
        ? "“Every recovery plan is engineered like high-performance athletic coaching, calibrated to individual limits.”"
        : isTr
        ? "„Empati, son teknoloji cihazlar ve hassas dozlanmış yüklenmeyle hedeflere adım adım ulaşıyoruz.“"
        : isAr
        ? "«بالتعاطف الإنساني وأحدث الأجهزة الطبية وتدرج الأحمال، نصل إلى أهداف التعافي خطوة بخطوة.»"
        : "„Mit Empathie, modernster Technik und exakt dosierter Belastung erreichen wir Meilensteine Schritt für Schritt.“",
    },
    {
      name: "Dr. med. Sarah Hoffmann",
      role: isUz ? "Nevrolog shifokor, neyroreabilitatsiya mutaxassisi" : isRu ? "Врач-невролог, специалист по нейрореабилитации" : isEn ? "Specialist in Neurological Rehabilitation" : isTr ? "Nöroloji & Nörorehabilitasyon Uzmanı" : isAr ? "استشارية طب الأعصاب وإعادة التأهيل العصبي" : "Fachärztin für Neurologie & Neurorehabilitation",
      spec: isUz ? "Insult oqibatlari, Parkinson kasalligi, robotlashtirilgan yurish" : isRu ? "Инсульты, болезнь Паркинсона, роботизированная ходьба" : isEn ? "Neuroplasticity, Stroke Recovery, Robotic Locomotion" : isTr ? "İnme Takibi, Parkinson Terapisi, Yürüme Rehabilitasyonu" : isAr ? "رعاية السكتة الدماغية، علاج باركنسون وإعادة تأهيل المشي" : "Schlaganfallnachsorge, Parkinson-Therapie, Gangrehabilitation",
      image: "/images/areas/doc-sarah-hoffmann.webp",
      quote: isUz
        ? "„Miya muntazam neyroplastik mashg'ulotlar orqali har qanday yoshda ham tiklanish salohiyatiga ega.“"
        : isRu
        ? "„Мозг способен к восстановлению в любом возрасте благодаря регулярному нейропластическому тренингу.“"
        : isEn
        ? "“The nervous system possesses remarkable plasticity when stimulated with structured, repetitive movement.”"
        : isTr
        ? "„Sinir sistemi, hedefe yönelik ve düzenli uyarıldığında olağanüstü bir yenilenme potansiyeline sahiptir.“"
        : isAr
        ? "«يمتلك الجهاز العصبي قدرات مذهلة على التجدد والترميم الذاتي عند تحفيزه بحركات موجهة ومتكررة.»"
        : "„Das Nervensystem verfügt über enorme Regenerationspotenziale, wenn es gezielt und repetitiv gefördert wird.“",
    },
  ];

  // ── Skrin 5 Data: Testimonials (Patientenstimmen with exact cropped avatars) ──
  const testimonialsData = {
    eyebrow: isUz ? "BEMORLAR FIKRLARI" : isRu ? "ОТЗЫВЫ ПАЦИЕНТОВ" : isEn ? "PATIENT STORIES" : isTr ? "HASTA GÖRÜŞLERİ" : isAr ? "آراء وتجارب المرضى" : "PATIENTENSTIMMEN",
    title: isUz ? "Haqiqiy insonlar.\nHaqiqiy yutuqlar." : isRu ? "Реальные истории.\nНастоящие успехи." : isEn ? "Real People.\nReal Success." : isTr ? "Gerçek İnsanlar.\nGerçek Başarılar." : isAr ? "تجارب حقيقية.\nنجاحات ملموسة." : "Echte Menschen.\nEchte Erfolge.",
    desc: isUz
      ? "Bemorlarimiz tiklanish tajribasi, erishgan natijalari va hayot sifatining yaxshilanishi bilan o'rtoqlashadilar."
      : isRu
      ? "Наши пациенты делятся своим опытом восстановления, достигнутыми результатами и новым качеством активной жизни."
      : isEn
      ? "Our patients share their rehabilitation milestones, recovery journeys, and renewed quality of life."
      : isTr
      ? "Hastalarımız deneyimlerini, kaydettikleri ilerlemeleri ve yeniden kazandıkları hareket kabiliyetini paylaşıyor."
      : isAr
      ? "مرضانا يشاركونكم تجاربهم العلاجية، مراحل تقدمهم، واستعادتهم لجودة حياتهم وحركتهم."
      : "Unsere Patienten berichten von ihren Erfahrungen, Fortschritten und neuen Lebensperspektiven.",
    btn: isUz ? "Barcha sharhlar" : isRu ? "Все отзывы пациентов" : isEn ? "View all reviews" : isTr ? "Tüm Değerlendirmeleri Gör" : isAr ? "عرض جميع تقييمات المرضى" : "Alle Bewertungen ansehen",
    cards: [
      {
        name: "Sabine M.",
        role: isUz ? "Ortopedik reabilitatsiya" : isRu ? "Ортопедическая реабилитация" : isEn ? "Orthopedic Rehabilitation" : isTr ? "Ortopedik Rehabilitasyon" : isAr ? "إعادة التأهيل العظمي" : "Orthopädische Rehabilitation",
        quote: isUz
          ? "„Professional g'amxo'rlik tufayli tizzamdagi operatsiyadan so'ng kutilganidan ancha tez yura boshladim. Butun jamoaga samimiy minnatdorchilik bildiraman!“"
          : isRu
          ? "„Благодаря профессиональной заботе и тренировкам я смогла уверенно ходить после операции на колене гораздо быстрее, чем ожидала. Огромное спасибо всей команде!“"
          : isEn
          ? "“Thanks to professional care and progressive rehabilitation, I was able to walk smoothly after my knee replacement much faster than expected. Heartfelt thanks to the team!”"
          : isTr
          ? "„Profesyonel bakım sayesinde diz ameliyatımdan sonra beklediğimden çok daha hızlı yürümeye başladım. Tüm ekibe yürekten teşekkür ederim.“"
          : isAr
          ? "«بفضل الرعاية المتخصصة وبرامج التأهيل، تمكنت من المشي بسلاسة بعد جراحة الركبة في وقت أسرع بكثير مما توقعت. شكراً جزيلاً للفريق!»"
          : "„Dank der professionellen Betreuung konnte ich nach meiner Knie-OP schneller als erwartet wieder laufen. Ich bin dem ganzen Team sehr dankbar.“",
        image: "/images/testimonials/sabine-m.webp",
      },
      {
        name: "Thomas K.",
        role: isUz ? "Nevrologik reabilitatsiya" : isRu ? "Неврологическая реабилитация" : isEn ? "Neurological Rehabilitation" : isTr ? "Nörolojik Rehabilitasyon" : isAr ? "إعادة التأهيل العصبي" : "Neurologische Rehabilitation",
        quote: isUz
          ? "„Menga moslashtirilgan terapiya va zamonaviy apparatlar harakatlanish erkinligimni qaytarishga juda katta yordam berdi.“"
          : isRu
          ? "„Индивидуальная терапия и современные реабилитационные аппараты очень помогли мне вернуть подвижность и уверенность в каждом движении.“"
          : isEn
          ? "“The tailored therapy regimen and state-of-the-art assistive devices greatly helped me regain movement and functional independence.”"
          : isTr
          ? "„Bana özel hazırlanan terapi ve modern cihazlar hareket kabiliyetimi yeniden kazanmamda çok büyük rol oynadı.“"
          : isAr
          ? "«الخطة العلاجية الفردية والأجهزة المتطورة ساعدتني للغاية في استعادة حركتي وثقتي بنفسي.»"
          : "„Die individuelle Therapie und die modernen Geräte haben mir sehr geholfen, meine Beweglichkeit zurückzugewinnen.“",
        image: "/images/testimonials/thomas-k.webp",
      },
      {
        name: "Julia R.",
        role: isUz ? "Kardiologik reabilitatsiya" : isRu ? "Кардиологическая реабилитация" : isEn ? "Cardiological Rehabilitation" : isTr ? "Kardiyolojik Rehabilitasyon" : isAr ? "إعادة التأهيل القلبي" : "Kardiologische Rehabilitation",
        quote: isUz
          ? "„Birinchi kundanoq ishonchli qo'llarda ekanligimni his qildim. Tibbiy ekspertiza va insoniy samimiylik bu yerda har bir detalda sezilib turadi.“"
          : isRu
          ? "„С самого первого дня я чувствовала чуткую поддержку. Сочетание высокой врачебной компетентности и теплого человеческого отношения здесь чувствуется в каждой детали.“"
          : isEn
          ? "“From day one, I felt in the best possible hands. The combination of medical expertise and genuine empathy is truly felt here.”"
          : isTr
          ? "„İlk günden itibaren emin ellerde olduğumu hissettim. Buradaki yüksek tıbbi uzmanlık ile insani yaklaşımın birleşimi gerçekten hissediliyor.“"
          : isAr
          ? "«منذ اليوم الأول شعرت بأنني في أيدٍ أمينة تماماً. المزج بين الكفاءة الطبية الرفيعة والتعامل الإنساني الراقي ملموس في كل تفصيل.»"
          : "„Ich habe mich von Anfang an gut aufgehoben gefühlt. Die Kombination aus Fachwissen und Menschlichkeit ist hier wirklich spürbar.“",
        image: "/images/testimonials/julia-r.webp",
      },
    ],
  };

  // ── FAQs ──
  const faqs = [
    {
      q: isUz ? "Ambulator reabilitatsiya xarajatlarini kim qoplaydi?" : isRu ? "Кто оплачивает амбулаторную реабилитацию?" : isEn ? "Who covers the cost of outpatient rehabilitation?" : isTr ? "Ayakta rehabilitasyon masraflarını kim karşılar?" : isAr ? "من يغطي تكاليف إعادة التأهيل للمرضى الخارجيين؟" : "Wer übernimmt die Kosten für eine ambulante Rehabilitation?",
      a: isUz
        ? "Shifokor yo'llanmasi mavjud bo'lganda, ambulator reabilitatsiya barcha davlat tibbiy sug'urtalari (GKV), xususiy sug'urtalar (PKV), kasaba uyushmalari (BG) hamda Pensiya sug'urtasi (DRV) tomonidan to'liq qoplanadi."
        : isRu
        ? "Амбулаторная реабилитация покрывается всеми государственными больничными кассами (GKV), частными медицинскими страховками (PKV), профсоюзами от несчастных случаев (BG) и пенсионным страхованием (Deutsche Rentenversicherung) при наличии врачебного направления."
        : isEn
        ? "Outpatient rehabilitation is fully recognized and funded by statutory health insurances (GKV), private insurers (PKV), workers' compensation boards (Berufsgenossenschaften), and the German Pension Insurance (DRV) upon physician referral."
        : isTr
        ? "Ayakta reha ve fizyoterapi/ergoterapi reçeteleri; hekim sevki ile tüm yasal sağlık sigortaları (GKV), özel sigortalar (PKV), Meslek Birlikleri (BG) ve Alman Emeklilik Sigortası (DRV) tarafından karşılanır."
        : isAr
        ? "تُغطى برامج إعادة التأهيل للمرضى الخارجيين ووصفات العلاج الطبيعي والوظيفي بالكامل من قبل التأمين الصحي الحكومي (GKV)، الخاص (PKV)، نقابات الحوادث المهنية (BG) وصندوق التقاعد الألماني (DRV) بناءً على تحويل الطبيب."
        : "Ambulante Reha-Maßnahmen sowie Rezepte für Physiotherapie und Ergotherapie werden von allen gesetzlichen Krankenkassen (GKV), privaten Krankenversicherungen (PKV), Berufsgenossenschaften (BG) und der Deutschen Rentenversicherung (DRV) übernommen.",
    },
    {
      q: isUz ? "Ambulator reabilitatsiyaning statsionarga nisbatan afzalliklari nimada?" : isRu ? "В чем преимущество амбулаторной реабилитации перед стационаром?" : isEn ? "What are the advantages of outpatient over inpatient rehabilitation?" : isTr ? "Ayakta rehabilitasyonun yatarak tedaviye göre avantajları nelerdir?" : isAr ? "ما هي مزايا التأهيل الخارجي مقارنة بالإقامة في المصحة؟" : "Welche Vorteile bietet die ambulante Reha im Vergleich zur stationären?",
      a: isUz
        ? "Bemor klinikada xuddi shifoxonadagidek yuqori intensivlikdagi tibbiy muolajalarni oladi, ammo kechalari va dam olish kunlarini o'z uyida, odatiy oilaviy muhitda o'tkazadi."
        : isRu
        ? "Пациент ежедневно проходит полный спектр высокоинтенсивных процедур в нашей клинике, но вечера и выходные проводит дома в привычной комфортной семейной обстановке, сохраняя социальные связи."
        : isEn
        ? "Patients receive university-grade, high-intensity daily clinical treatments while sleeping and recovering at home in their familiar domestic environment, maintaining social and family balance."
        : isTr
        ? "Bir kliniktekiyle aynı yoğunlukta medikal ve terapötik bakımı alırsınız, ancak geceleri kendi evinizde uyur ve alıştığınız aile ortamınızda kalırsınız."
        : isAr
        ? "يحصل المريض على نفس مستوى الرعاية الطبية والعلاجية المكثفة المتاحة في المصحات، مع ميزة النوم في منزله والبقاء ضمن محيطه الأسري والاجتماعي المألوف."
        : "Sie erhalten die gleiche hochintensive medizinische und therapeutische Versorgung wie in einer Kurklinik, schlafen jedoch in Ihrem eigenen Bett und bleiben in Ihrem gewohnten familiären Umfeld.",
    },
    {
      q: isUz ? "NabiOta reabilitatsiya markaziga qanday qilib yo'llanma olish mumkin?" : isRu ? "Как получить направление в ваш центр?" : isEn ? "How do I get a prescription or referral to NabiOta?" : isTr ? "NabiOta Reha Merkezi için nasıl sevk/reçete alabilirim?" : isAr ? "كيف أحصل على تحويل أو وصفة طبية لمركز NabiOta؟" : "Wie erhalte ich eine Verordnung für das NabiOta Rehazentrum?",
      a: isUz
        ? "Yo'llanma operatsiyadan so'ng statsionar ijtimoiy xizmati orqali (AHB – Anschlussheilbehandlung) yoki sizni davolovchi mutaxassis shifokor (ortoped, nevrolog, terapevt) tomonidan rasmiylashtiriladi."
        : isRu
        ? "Направление оформляется лечащим хирургом в стационаре перед выпиской (AHB — Anschlussheilbehandlung) либо вашим участковым ортопедом/неврологом через стандартную форму направления (Muster 61 или рецепт на физиотерапию)."
        : isEn
        ? "Referrals can be initiated directly by your hospital surgeon prior to discharge (Anschlussheilbehandlung - AHB) or prescribed by your resident orthopedic specialist or neurologist."
        : isTr
        ? "Ameliyat sonrası doğrudan hastane sosyal servisi tarafından takip tedavisi (AHB) düzenlenebilir veya tedavinizi yürüten uzman hekim (ortopedist, nörolog, aile hekimi) sevk yazabilir."
        : isAr
        ? "يمكن للخدمة الاجتماعية بالمستشفى ترتيب علاج ما بعد الجراحة (AHB) مباشرة قبل الخروج، أو يمكن لطبيبكم المعالج (طبيب العظام، الأعصاب، أو طبيب الأسرة) إصدار وصفة تحويل رسمية."
        : "Entweder veranlasst der Sozialdienst des Akutkrankenhauses direkt nach Ihrer OP eine Anschlussheilbehandlung (AHB), oder Ihr behandelnder Facharzt (Orthopäde, Neurologe, Hausarzt) stellt eine Verordnung aus.",
    },
    {
      q: isUz ? "Asosiy dastur tugaganidan so'ng mashg'ulotlarni davom ettirish mumkinmi?" : isRu ? "Есть ли возможность продолжать тренировки после завершения курса?" : isEn ? "Can I continue therapy after completing the primary program?" : isTr ? "T-RENA veya IRENA gibi takip programları mevcut mu?" : isAr ? "هل تتوفر برامج متابعة لاحقة مثل T-RENA أو IRENA؟" : "Gibt es Nachsorgeprogramme wie T-RENA oder IRENA?",
      a: isUz
        ? "Ha, markazimiz Germaniya pensiya sug'urtasining (DRV) T-RENA va IRENA qo'llab-quvvatlovchi dasturlari uchun akkreditatsiyadan o'tgan, shuningdek tibbiy nazorat ostidagi mashg'ulotlarni davom ettirish imkoniyati mavjud."
        : isRu
        ? "Да, мы аккредитованы для проведения программ долгосрочной поддерживающей терапии T-RENA и IRENA от пенсионного фонда, а также предлагаем медицинский абонемент для самостоятельных тренировок."
        : isEn
        ? "Yes, our centers are accredited for official DRV aftercare programs (T-RENA and IRENA), as well as ongoing medical health club memberships supervised by our exercise physiologists."
        : isTr
        ? "Evet, Alman Emeklilik Sigortası'nın (DRV) T-RENA ve IRENA programları için yetkili kuruluşuz. Ayrıca medikal antrenman alanımızda koruyucu kurslar kapsamında antrenmanlarınıza devam edebilirsiniz."
        : isAr
        ? "نعم، مركزنا معتمد رسمياً لبرامج الرعاية اللاحقة التابعة لصندوق التقاعد الألماني (T-RENA وIRENA). كما يمكنكم مواصلة التمارين في الصالة الطبية بإشراف أخصائيينا."
        : "Ja, wir sind anerkannte Einrichtung für T-RENA und IRENA der Deutschen Rentenversicherung. Zudem können Sie auf unserer medizinischen Trainingsfläche im Rahmen von Präventionskursen weiter trainieren.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      <Header currentLocale={locale} />

      <main className="flex-1">

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION (UNIFIED PHOTO 4 FORMAT WITH BOTANICAL GOLD)
      ══════════════════════════════════════════════════════════ */}
      <PageHero
          locale={locale}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: isUz ? "Bosh sahifa" : isRu ? "Главная" : isEn ? "Home" : isTr ? "Ana Sayfa" : isAr ? "الرئيسية" : "Startseite", href: `/${locale}` },
              { label: isUz ? "Yo'nalishlar" : isRu ? "Направления" : isEn ? "Divisions" : isTr ? "Şirket Alanları" : isAr ? "قطاعات المجموعة" : "Unternehmensbereiche", href: `/${locale}/areas` },
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
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block mb-2">
              {isUz ? "IXTISOSLASHGAN YO'NALISHLAR" : isRu ? "СПЕЦИАЛИЗИРОВАННЫЕ НАПРАВЛЕНИЯ" : isEn ? "SPECIALIZED DISCIPLINES" : isTr ? "UZMANLIK ALANLARI" : isAr ? "التخصصات التأهيلية الدقيقة" : "FACHBEREICHE DER REHABILITATION"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
              {isUz
                ? "Har bir klinik maqsad uchun individual dasturlar"
                : isRu
                ? "Индивидуальные программы для каждой клинической цели"
                : isEn
                ? "Targeted Rehabilitation for Every Clinical Indication"
                : isTr
                ? "Kalıcı İyileşme İçin Bireysel Terapi Konseptleri"
                : isAr
                ? "مفاهيم علاجية مخصصة لتحقيق تعافٍ مستدام"
                : "Individuelle Therapiekonzepte für nachhaltige Genesung"}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#556358] mt-3 leading-relaxed">
              {isUz
                ? "Endoprotezlashdan keyin yurish qobiliyatini tiklashdan erta nevrologik reabilitatsiyagacha — biz tibbiy bilim va zamonaviy harakat terapiyasini birlashtiramiz."
                : isRu
                ? "От ортопедического восстановления после эндопротезирования до тонкой нейрореабилитации и возвращения в спорт — мы объединяем врачебную экспертизу и современные методики."
                : isEn
                ? "From orthopedic post-operative recovery to neurological re-education and competitive athletic return-to-play — our certified specialists guide every milestone."
                : isTr
                ? "Eklem protezi sonrası yürüme kabiliyetinin yeniden kazanılmasından erken nörolojik rehabilitasyona kadar tıbbi uzmanlığı modern hareket terapisiyle birleştiriyoruz."
                : isAr
                ? "من استعادة القدرة على المشي بعد استبدال المفاصل وحتى التأهيل العصبي المبكر، ندمج الخبرة الطبية المرموقة مع أحدث تقنيات العلاج الحركي."
                : "Von der Wiedererlangung der Gehfähigkeit nach Gelenkersatz bis hin zur neurologischen Frühreha bündeln wir medizinisches Fachwissen mit modernster Bewegungstherapie."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {specializations.map((spec) => (
              <div
                key={spec.id}
                onClick={() => setSelectedSpecialization(spec)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedSpecialization(spec);
                  }
                }}
                className="bg-white rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878]/80 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(12,43,27,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#D5B878]"
              >
                <div>
                  {/* Photo without Tag */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={spec.image}
                      alt={spec.title}
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
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
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSpecialization(spec);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142318] group-hover:text-[#B89650] transition-colors cursor-pointer"
                  >
                    <span>{isUz ? "Dastur haqida batafsil →" : isRu ? "Подробнее о программе →" : isEn ? "View Program Details →" : isTr ? "Program Detayları →" : isAr ? "تفاصيل البرنامج ←" : "Details zum Programm →"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: UNSER ANSATZ (FULL WIDTH WITH CURVED GOLDEN SEAM & LEAVES-BG ON RIGHT ONLY)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full relative overflow-hidden bg-[#07190F] text-white border-y border-[#D5B878]/30">
        {/* SVG Definitions for Normalized Curved Clips and Golden Stroke */}
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <defs>
            {/* Left Photo Clip: clean photo on the left, cut shifted slightly more to the left */}
            <clipPath id="approachCurveClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 L 0.36 0 C 0.305 0.32, 0.245 0.68, 0.18 1 L 0 1 Z" />
            </clipPath>

            {/* Right Leaves Background Clip: leaves strictly on the right of the curved seam */}
            <clipPath id="approachLeavesClip" clipPathUnits="objectBoundingBox">
              <path d="M 0.36 0 L 1 0 L 1 1 L 0.18 1 C 0.245 0.68, 0.305 0.32, 0.36 0 Z" />
            </clipPath>

            <linearGradient id="approachGoldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DFCA98" stopOpacity="0.4" />
              <stop offset="25%" stopColor="#D4B06A" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#ECCF93" stopOpacity="1" />
              <stop offset="75%" stopColor="#C9A257" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#DFCA98" stopOpacity="0.4" />
            </linearGradient>

            <filter id="approachGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Desktop: Parallel Bars Image on the left ONLY (clean, no leaves on top) */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 w-full h-full pointer-events-none z-10"
          style={{
            clipPath: "url(#approachCurveClip)",
            WebkitClipPath: "url(#approachCurveClip)",
          }}
        >
          <Image
            src="/images/rehabilitation/parallel-bars.webp"
            alt="Unser Ansatz Rehabilitation"
            fill
            className="object-cover object-[20%_center]"
            priority
          />
        </div>

        {/* Desktop: Botanical Leaves Background for the right green part */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none z-10 overflow-hidden"
          style={{
            clipPath: "url(#approachLeavesClip)",
            WebkitClipPath: "url(#approachLeavesClip)",
          }}
        >
          <div className="absolute inset-0 bg-[#07190F]" />
          <Image
            src="/images/values/leaves-bg.webp"
            alt="Leaves Background"
            fill
            className="object-cover object-right opacity-70 scale-x-[-1]"
            priority
          />
          {/* Subtle soft dark gradient overlay to ensure perfect text readability while leaves remain distinctly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07190F]/75 via-[#07190F]/30 to-transparent" />
        </div>

        {/* Desktop: Glowing Golden Arc Running from Top (36%) to Bottom (18%) */}
        <svg
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M 360 0 C 305 320, 245 680, 180 1000"
            fill="none"
            stroke="url(#approachGoldGrad)"
            strokeWidth="3.2"
            filter="url(#approachGlow)"
          />
        </svg>

        {/* Mobile: Clean stacked fallback */}
        <div className="lg:hidden relative w-full h-72 sm:h-84">
          <Image
            src="/images/rehabilitation/parallel-bars.webp"
            alt="Unser Ansatz Rehabilitation"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07190F] via-transparent to-transparent" />
        </div>
        <div className="lg:hidden absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/values/leaves-bg.webp"
            alt=""
            fill
            className="object-cover object-right opacity-40 mix-blend-screen scale-x-[-1]"
          />
        </div>

        {/* Right Content Area */}
        <div className="w-full flex justify-end relative z-30 py-12 sm:py-16 lg:py-20">
          <div className="w-full lg:w-[68%] xl:w-[66%] px-6 sm:px-10 lg:pl-10 lg:pr-12 xl:pr-20 space-y-5">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                {approachData.eyebrow}
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] text-white font-normal leading-[1.16]">
                {approachData.title}
              </h2>

              <p className="font-sans text-xs sm:text-[13px] text-white/85 leading-relaxed pt-1">
                {approachData.desc}
              </p>
            </div>

            {/* 4 Stats in a row with gold outlined icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 mt-4 border-t border-white/15">
              {approachData.stats.map((s, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="w-10 h-10 rounded-full border border-[#D5B878]/60 bg-[#0A2316]/90 flex items-center justify-center text-[#ECCF96] shadow-sm">
                    {s.icon}
                  </div>

                  <span className="font-serif text-2xl sm:text-[28px] text-white font-normal block leading-tight pt-1">
                    {s.val}
                  </span>

                  <span className="font-sans text-[10.5px] sm:text-[11.5px] text-white/80 block leading-snug">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: REHABILITATION PROCESS (YOUR PATHWAY BACK TO GREATER QUALITY OF LIFE)
          - Placed directly after Unser Ansatz
          - Background: /images/about/photo2.webp
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full relative py-16 sm:py-22 overflow-hidden bg-[#FAF6EE] border-t border-[#EDE8DE]">
        {/* Full-bleed background: photo2.webp */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/about/photo2.webp"
            alt="Process Background"
            fill
            className="object-cover object-center opacity-95"
            priority
          />
        </div>

        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left title */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10.5px] font-bold tracking-[0.24em] text-[#8C733E] uppercase block">
                {processData.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#0B2516] font-normal leading-[1.18]">
                {processData.title}
              </h2>
            </div>

            {/* Right 4-step cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 pt-4 sm:pt-0 relative">
              {processData.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-6 pt-8 sm:pt-9 border border-[#E5ECE3] shadow-md relative flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group mt-4 sm:mt-0"
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
          SECTION 4: 2-CARD GRID (MATCHING SKRIN 3)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-18 bg-[#FAF8F5]">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Left Card: Pool Photo with Button */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#EDE8DE] min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-7 sm:p-9 group">
              <Image
                src="/images/rehabilitation/facility-pool.webp"
                alt="Moderne Einrichtungen"
                fill
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

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
                    href={`/${locale}/contact`}
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
          SECTION 5: INTERDISCIPLINARY MEDICAL LEADERSHIP
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-22 bg-white border-t border-[#EDE8DE]">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block mb-2">
              {isUz ? "SHIFOKORLAR VA TERAPEVTLARIMIZ" : isRu ? "НАША КОМАНДА ЭКСПЕРТОВ" : isEn ? "EXPERT MEDICAL LEADERSHIP" : isTr ? "HEKİMLERİMİZ VE TERAPİSTLERİMİZ" : isAr ? "أطباؤنا وأطقم المعالجين" : "UNSERE ÄRZTE & THERAPEUTEN"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
              {isUz
                ? "Malakali shifokorlar nazorati va tajribali terapevtlar"
                : isRu
                ? "Высокая врачебная квалификация и чуткая забота"
                : isEn
                ? "Dedicated Physicians & Master Clinicians"
                : isTr
                ? "Uzman Hekim Yönetimi ve Deneyimli Terapistler"
                : isAr
                ? "إشراف طبي استشاري وخبرات علاجية رفيعة"
                : "Fachärztliche Leitung & erfahrene Therapeuten"}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#556358] mt-3 leading-relaxed">
              {isUz
                ? "Doimiy mutaxassis shifokorlar nazorati ostida terapevtlarimiz har bir davolash qadamini siz bilan yaqindan muvofiqlashtiradi."
                : isRu
                ? "Реабилитация под постоянным наблюдением профильных врачей высшей категории и сертифицированных терапевтов."
                : isEn
                ? "Your recovery is orchestrated by board-certified physiatrists, physical therapists, and sports medicine directors."
                : isTr
                ? "Sürekli uzman hekim gözetimi altında terapistlerimiz her tedavi adımını sizinle yakın iş birliği içinde koordine eder."
                : isAr
                ? "تحت إشراف طبي متخصص ومستمر، ينسق معالجونا كل خطوة علاجية بعناية فائقة معكم."
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
                    <span>{isUz ? "Qabulga yozilish" : isRu ? "Консультация с врачом" : isEn ? "Book appointment" : isTr ? "Randevu Talebi" : isAr ? "طلب موعد واستشارة" : "Termin anfragen"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5B: NABIOTA REHABILITATION & THERAPY GMBH – PDF IV.5
          - Corporate purpose, 4 pillars, goals & payer framework
      ══════════════════════════════════════════════════════════ */}
      <RehabilitationCompanySection locale={locale} />

      {/* ══════════════════════════════════════════════════════════
          SECTION 6: PATIENT TESTIMONIALS (EXACTLY MATCHING TARGET LAYOUT)
          - Compact vertical height (py-8 sm:py-10 lg:py-12)
          - Left block aligned and vertically centered with cards
          - 3 wider, shorter cards with avatars at top-left
          - Carousel navigation buttons centered closely under cards
          - Full-bleed photo2.webp background
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full py-8 sm:py-10 lg:py-12 bg-[#091E13] text-white relative overflow-hidden border-t border-[#D5B878]/30">
        {/* Full-bleed background: photo2.webp */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/about/photo2.webp"
            alt="Patient Testimonials Background"
            fill
            className="object-cover object-center opacity-95"
            priority
          />
        </div>

        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Left Column: Eyebrow, Title, Description, Button */}
            <div className="w-full lg:w-[28%] xl:w-[27%] shrink-0 space-y-3">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                {testimonialsData.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-[1.14] whitespace-pre-line">
                {testimonialsData.title}
              </h2>
              <p className="font-sans text-[11px] sm:text-[12px] text-white/80 leading-relaxed max-w-xs pt-0.5">
                {testimonialsData.desc}
              </p>
              <div className="pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs tracking-wide shadow-sm transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>{testimonialsData.btn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 Wider, Shorter Cards in a Compact Row + Centered Arrows */}
            <div className="w-full lg:w-[70%] xl:w-[71%] flex flex-col items-center">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                {testimonialsData.cards.map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FAF8F5] rounded-[24px] p-5 sm:p-5.5 shadow-md flex flex-col justify-between text-[#132218] border border-[#EBE6DC] hover:-translate-y-1 transition-all duration-300 min-h-[235px] sm:min-h-[250px]"
                  >
                    <div>
                      {/* Top-left Avatar */}
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 bg-neutral-100 shadow-sm border-2 border-white">
                        <Image
                          src={c.image}
                          alt={c.name}
                          fill
                          className="object-cover object-top"
                          priority
                        />
                      </div>

                      {/* Quote Text with Gold Quote mark */}
                      <div className="flex items-start gap-1">
                        <span className="text-[#C5A56A] text-base font-serif font-bold leading-none select-none shrink-0 mt-0.5">
                          “
                        </span>
                        <p className="font-sans text-[11px] sm:text-[11.5px] text-[#334237] leading-[1.5]">
                          {c.quote}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer: Author, Role & 5 Gold Stars (no divider line matching reference) */}
                    <div className="mt-3.5 pt-0">
                      <h4 className="font-sans text-xs sm:text-[12.5px] font-bold text-[#0B2516] leading-tight">
                        {c.name}
                      </h4>
                      <p className="font-sans text-[10px] sm:text-[10.5px] text-[#69796C] mt-0.5 leading-tight">
                        {c.role}
                      </p>
                      <div className="flex items-center gap-0.5 mt-1 text-[#E5B338] text-[11px]">
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

              {/* Carousel Navigation Buttons Below (Close to Cards, centered) */}
              <div className="flex items-center justify-center gap-2 pt-3.5">
                <button
                  type="button"
                  aria-label="Previous"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] flex items-center justify-center transition-colors shadow-xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 bg-black/20 hover:border-white/40 text-white/70 flex items-center justify-center transition-colors"
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
              {isUz ? "XARAJATLARNI QOPLASH VA JARAYON" : isRu ? "ВОПРОСЫ И ОТВЕТЫ" : isEn ? "FREQUENTLY ASKED QUESTIONS" : isTr ? "MASRAFLAR VE İŞLEYİŞ" : isAr ? "تغطية التكاليف والإجراءات" : "KOSTENÜBERNAHME & ABLAUF"}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#132218] font-normal">
              {isUz
                ? "Reabilitatsiya va yo'llanma bo'yicha muhim savollar"
                : isRu
                ? "Часто задаваемые вопросы о реабилитации"
                : isEn
                ? "Insurance & Referral Questions"
                : isTr
                ? "Rehabilitasyon ve Sevk Hakkında Önemli Sorular"
                : isAr
                ? "أسئلة شائعة حول وصفات وبرامج التأهيل"
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
          SECTION 8: CONTACT & BOOKING BANNER (FULL-WIDTH WITH BACGROUND.WEBP)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full relative overflow-hidden bg-[#07150C] text-white py-16 sm:py-24 border-t border-[#D5B878]/30">
        {/* Full bleed leaf background: /images/bacground.webp */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/bacground.webp"
            alt="Botanical Leaf Background"
            fill
            className="object-cover object-center opacity-40 mix-blend-screen"
            priority
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

        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                {isUz ? "TIKLANISHNI BOSHLANG" : isRu ? "СВЯЖИТЕСЬ С НАМИ" : isEn ? "START YOUR RECOVERY" : isTr ? "İYİLEŞME SÜRECİNİZİ BAŞLATIN" : isAr ? "ابدأوا رحلة تعافيكم الآن" : "STARTEN SIE IHRE GENESUNG"}
              </span>
              <h3 className="page-hero-title font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                {isUz
                  ? "Harakatlanishingizni tiklash sari keyingi qadamga tayyormisiz?"
                  : isRu
                  ? "Готовы вернуться к активной и полноценной жизни?"
                  : isEn
                  ? "Ready to Regain Your Mobility and Independence?"
                  : isTr
                  ? "Hareketliliğinize ve Sağlığınıza Yeniden Kavuşmaya Hazır mısınız?"
                  : isAr
                  ? "هل أنتم مستعدون للخطوة التالية نحو استعادة حركتكم ونشاطكم؟"
                  : "Bereit für den nächsten Schritt zurück in Ihre Mobilität?"}
              </h3>
              <p className="hero-text-wrap text-white/75 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
                {isUz
                  ? "Birlamchi ko'rik uchun hoziroq qabulga yoziling yoki yo'llanma va xarajatlarni qoplash shartlari bo'yicha bepul maslahat oling."
                  : isRu
                  ? "Свяжитесь с нами для первичной консультации или быстрой записи на амбулаторную реабилитацию в NabiOta Health Group Germany."
                  : isEn
                  ? "Contact our admissions team directly to discuss your referral, insurance authorization, and therapy scheduling."
                  : isTr
                  ? "İlk muayeneniz için hemen randevu alın veya sevk süreci ve sigorta karşılama koşulları hakkında ücretsiz danışmanlık talep edin."
                  : isAr
                  ? "احجزوا موعدكم الآن للفحص الأولي أو استشيرونا دون التزام بشأن الوصفات الطبية وتحمل التكاليف التأمينية."
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
                <span>{isUz ? "Onlayn qabulga yozilish" : isRu ? "Записаться на прием" : isEn ? "Request appointment" : isTr ? "Online Randevu Alın" : isAr ? "طلب موعد عبر الإنترنت" : "Termin online anfragen"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`/${locale}/areas`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/30 hover:border-[#D5B878] text-white hover:text-[#ECCF96] font-medium text-xs sm:text-sm transition-all bg-white/5 text-center"
              >
                <span>{isUz ? "Xolding yo'nalishlari sharhi" : isRu ? "Все направления холдинга" : isEn ? "All corporate divisions" : isTr ? "Tüm Şirket Alanları" : isAr ? "نظرة عامة على قطاعات المجموعة" : "Unternehmensbereiche Übersicht"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MODAL DIALOG: SPECIALIZED REHABILITATION PROGRAM (PDF SECTION 5)
      ══════════════════════════════════════════════════════════ */}
      {selectedSpecialization && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#08170D]/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedSpecialization(null)}
        >
          <div
            className="relative w-full max-w-4xl xl:max-w-5xl bg-white rounded-2xl sm:rounded-3xl border border-[#D5B878]/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="rehab-modal-title"
          >
            {/* Modal Top Header Image & Badges */}
            <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden shrink-0 bg-[#08170D]">
              <Image
                src={selectedSpecialization.image}
                alt={selectedSpecialization.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08170D] via-[#08170D]/40 to-black/30" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedSpecialization(null)}
                aria-label={isUz ? "Yopish" : isRu ? "Закрыть" : isEn ? "Close" : isTr ? "Kapat" : isAr ? "إغلاق" : "Schließen"}
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#08170D]/80 hover:bg-[#D5B878] text-white hover:text-[#08170D] border border-white/20 hover:border-[#D5B878] flex items-center justify-center transition-all duration-200 shadow-md z-10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Badge & Title */}
              <div className="absolute bottom-3 left-4 sm:left-6 right-4 sm:right-6">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D5B878]/90 text-[#08170D] text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider mb-1">
                  {selectedSpecialization.badge}
                </span>
                <h2 id="rehab-modal-title" className="font-serif text-xl sm:text-2xl text-white font-normal leading-tight drop-shadow-sm">
                  {selectedSpecialization.title}
                </h2>
              </div>
            </div>

            {/* Modal Scrollable Content Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 text-left font-sans">
              {/* Subtitle / Focus Callout */}
              <div className="bg-[#FAF8F5] border-l-3 border-[#D5B878] px-3.5 py-2.5 rounded-r-lg">
                <p className="text-[12px] sm:text-[13px] font-medium text-[#142318] leading-snug">
                  {selectedSpecialization.subtitle}
                </p>
              </div>

              {/* Full Description from PDF Section 5 */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8C948D]">
                  {isUz ? "TERAPEVTIK PROFIL VA USULLAR" : isRu ? "ТЕРАПЕВТИЧЕСКИЙ ПРОФИЛЬ & МЕТОДЫ" : isEn ? "CLINICAL PROFILE & THERAPY METHODS" : isTr ? "TERAPÖTİK PROFİL VE YÖNTEMLER" : isAr ? "الملف العلاجي والأساليب المتبعة" : "THERAPEUTISCHES PROFIL & METHODEN"}
                </h4>
                <p className="text-xs sm:text-[13px] text-[#425246] leading-relaxed">
                  {selectedSpecialization.fullDesc}
                </p>
              </div>

              {/* Key Indications Checklist */}
              <div className="space-y-2.5 pt-1">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8C948D]">
                  {selectedSpecialization.indicationsTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSpecialization.indications.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2 bg-[#FAF8F5] p-2.5 rounded-xl border border-[#EDE8DE]">
                      <GoldCircleCheckIcon className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span className="text-[11.5px] sm:text-xs text-[#1F2E24] leading-snug font-normal">
                        {ind}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regulatory & Safety Standards Bar (PDF Section 5 Requirements) */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#08170D]/5 border border-[#D5B878]/30 text-[#142318]">
                <ShieldCheck className="w-5 h-5 text-[#B89650] shrink-0" />
                <p className="text-[11px] sm:text-[11.5px] leading-tight text-[#3A4A3E]">
                  <strong className="font-semibold text-[#142318]">{isUz ? "Xarajatlarni qoplash: " : isRu ? "Покрытие расходов: " : isEn ? "Insurance & Coverage: " : isTr ? "Maliyet Karşılama ve Esaslar: " : isAr ? "الجهات الضامنة والمعايير: " : "Kostenträger & Richtlinien: "}</strong>
                  {selectedSpecialization.standards}
                </p>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#EDE8DE] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedSpecialization(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#D0C8B8] hover:bg-white text-[#556358] text-xs font-medium transition-colors cursor-pointer"
              >
                {isUz ? "Oynani yopish" : isRu ? "Закрыть окно" : isEn ? "Close window" : isTr ? "Pencereyi Kapat" : isAr ? "إغلاق النافذة" : "Fenster schließen"}
              </button>

              <Link
                href={`/${locale}/contact`}
                onClick={() => setSelectedSpecialization(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#08170D] hover:bg-[#0C2B1B] text-[#ECCF96] border border-[#D5B878] text-xs font-semibold tracking-wide transition-all shadow-sm"
              >
                <span>{isUz ? "Kursga yozilish" : isRu ? "Записаться на курс" : isEn ? "Request Therapy Consultation" : isTr ? "Terapi / Danışmanlık Talebi" : isAr ? "طلب استشارة / علاج" : "Therapie / Beratung anfragen"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
