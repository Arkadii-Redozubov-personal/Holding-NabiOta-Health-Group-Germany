"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { HoldingPurposeSection } from "@/components/sections/HoldingPurposeSection";
import { SupportedLocale } from "@/lib/i18n";
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Users,
  Building2,
  CheckCircle2,
  Stethoscope,
  Award,
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Scale,
  Briefcase,
  Quote,
} from "lucide-react";

interface AboutPageComponentProps {
  locale?: SupportedLocale;
}

/* ── Custom SVGs matching Reference Photo 1:1 ────────────────────────── */

// 1. Hero Icons
function PeopleCenterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="7" r="3" />
      <path d="M7 20v-1a5 5 0 0 1 10 0v1" />
      <circle cx="5" cy="9" r="2" />
      <path d="M2 19v-1a3.5 3.5 0 0 1 3.5-3.5" />
      <circle cx="19" cy="9" r="2" />
      <path d="M22 19v-1a3.5 3.5 0 0 0-3.5-3.5" />
    </svg>
  );
}

function LeafIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 20A7 7 0 0 1 4 13C4 7 11 3 20 3c0 9-4 16-10 16" />
      <path d="M4 20l7-7" />
    </svg>
  );
}

function ShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function FoliageCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="foliageGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0) rotate(45) scale(280)">
          <stop stopColor="#1B3822" stopOpacity="0.85" />
          <stop offset="0.6" stopColor="#122A1A" stopOpacity="0.4" />
          <stop offset="1" stopColor="#0B1A10" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="340" height="340" fill="url(#foliageGlow)" />
      <g opacity="0.78" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.45))">
        <path d="M-10,-10 C40,40 90,70 140,85 C190,100 230,95 270,110" stroke="#1F4229" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M60,50 C75,90 95,120 120,150" stroke="#1F4229" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M130,80 C140,120 165,150 190,170" stroke="#1F4229" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M35,25 C45,15 65,15 75,30 C65,45 45,45 35,25 Z" fill="#2E5A39" opacity="0.9" />
        <path d="M70,45 C85,30 110,35 115,55 C100,70 75,65 70,45 Z" fill="#3D734C" opacity="0.95" />
        <path d="M100,65 C120,50 145,60 145,80 C125,95 105,85 100,65 Z" fill="#2B5636" opacity="0.85" />
        <path d="M140,80 C160,65 185,75 190,95 C170,110 145,100 140,80 Z" fill="#3D734C" opacity="0.95" />
        <path d="M185,90 C210,75 235,90 235,110 C210,125 190,110 185,90 Z" fill="#285232" opacity="0.9" />
        <path d="M230,100 C250,90 275,105 270,125 C250,135 230,120 230,100 Z" fill="#34633F" opacity="0.85" />
        <path d="M70,75 C65,95 75,115 95,115 C105,95 95,75 70,75 Z" fill="#3A6C46" opacity="0.9" />
        <path d="M90,115 C85,135 100,155 120,150 C125,130 110,110 90,115 Z" fill="#2D5837" opacity="0.85" />
        <path d="M115,145 C110,165 125,185 145,180 C150,160 135,140 115,145 Z" fill="#467E54" opacity="0.9" />
        <path d="M140,110 C135,130 150,150 170,145 C175,125 160,105 140,110 Z" fill="#366640" opacity="0.85" />
        <path d="M165,140 C160,160 175,180 195,175 C200,155 185,135 165,140 Z" fill="#2B5636" opacity="0.8" />
        <path d="M15,65 C5,85 15,110 35,110 C45,90 35,70 15,65 Z" fill="#1E4527" opacity="0.75" />
        <path d="M40,100 C30,120 40,145 60,145 C70,125 60,105 40,100 Z" fill="#275031" opacity="0.7" />
        <path d="M5,130 C-5,150 5,175 25,175 C35,155 25,135 5,130 Z" fill="#183B20" opacity="0.65" />
      </g>
    </svg>
  );
}

// 2. Mission & Vision Icons
function TargetIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function VisionEyeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

// 3. Stats Icons
function TeamStatsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="7" r="3" />
      <path d="M8.5 20c0-2.5 1.5-4.5 3.5-4.5s3.5 2 3.5 4.5" />
      <circle cx="6" cy="9" r="2" />
      <path d="M2.5 20c0-1.8 1.2-3.3 2.8-3.6" />
      <circle cx="18" cy="9" r="2" />
      <path d="M21.5 20c0-1.8-1.2-3.3-2.8-3.6" />
    </svg>
  );
}

function BuildingStatsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  );
}

function HandshakeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.4-2.4a1 1 0 0 0-1.4 0L13 13" />
      <path d="m13 13-3-3a1 1 0 0 0-1.4 0L4.3 14.3a1 1 0 0 0 0 1.4l2.4 2.4a1 1 0 0 0 1.4 0L11 15" />
      <path d="m7 7 3-3a1 1 0 0 1 1.4 0l8.9 8.9a1 1 0 0 1 0 1.4l-1.6 1.6" />
      <path d="M2 12l2.6-2.6a1 1 0 0 1 1.4 0L9 12" />
    </svg>
  );
}

function HeartStatsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

// 4. Entities Icons
function StethoscopeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 3v6a6 6 0 0 0 12 0V3" />
      <path d="M5 3h2M17 3h2" />
      <path d="M12 15v2a3.5 3.5 0 0 0 7 0v-1" />
      <circle cx="19" cy="16" r="1.5" />
    </svg>
  );
}

function ScalpelIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m14 4 6 6-9 9-6-6Z" />
      <path d="m11 7 6 6" />
      <path d="M3 21l3-3" />
    </svg>
  );
}

function ScannerMriIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M6 16h12" />
    </svg>
  );
}

function RealEstateIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 10h1M14 10h1M9 14h1M14 14h1" />
    </svg>
  );
}

function ActivityRehabIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="5" r="2" />
      <path d="m10 9 4 2-2 4 4 6" />
      <path d="m6 13 4-2-1-4" />
      <path d="M12 15l-3 6" />
    </svg>
  );
}

function HomeCareIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 10.5 12 3l9 7.5v9.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function CrossPharmacyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
    </svg>
  );
}

function LightbulbValuesIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6M10 22h4" />
    </svg>
  );
}

export function AboutPageComponent({ locale = "de" }: AboutPageComponentProps) {
  const [isFounderExpanded, setIsFounderExpanded] = useState(false);

  // Multilingual content dictionary
  const isUz = locale === "uz";
  const isEn = locale === "en";
  const isRu = locale === "ru";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const t = {
    heroEyebrow: isUz
      ? "XOLDING HAQIDA"
      : isRu
      ? "О ХОЛДИНГЕ"
      : isEn
      ? "ABOUT THE HOLDING"
      : isTr
      ? "ŞİRKET GRUBU HAKKINDA"
      : isAr
      ? "عن مجموعة الشركات"
      : "ÜBER DIE UNTERNEHMENSGRUPPE",
    heroTitlePart1: isUz
      ? "Kuchli guruh"
      : isRu
      ? "Сильная группа"
      : isEn
      ? "A strong group"
      : isTr
      ? "Güçlü bir grup"
      : isAr
      ? "مجموعة رائدة متكاملة"
      : "Eine starke Gruppe",
    heroTitlePart2: isUz
      ? "sog'lom kelajak yo'lida."
      : isRu
      ? "для здорового будущего."
      : isEn
      ? "for a healthier future."
      : isTr
      ? "daha sağlıklı bir gelecek için."
      : isAr
      ? "من أجل مستقبل صحي مستدام."
      : "für eine gesündere Zukunft.",
    heroDesc: isUz
      ? "Mönchengladbach shahrida joylashgan NabiOta® Health Group Germany GmbH birlamchi tibbiy yordam, diagnostika, reabilitatsiya, parvarishlash va yondosh sog'liqni saqlash xizmatlarini yagona brend ostida birlashtirib, bemorlar, xodimlar va hamkorlar uchun uzoq muddatli barqaror qadriyatlarni yaratadi."
      : isRu
      ? "NabiOta® Health Group Germany GmbH с головным офисом в Мёнхенгладбахе объединяет первичную медицинскую помощь, диагностику, реабилитацию, уход и сопутствующие медицинские услуги под единым брендом, создавая долгосрочную ценность для пациентов, сотрудников и партнеров."
      : isEn
      ? "NabiOta® Health Group Germany GmbH based in Mönchengladbach unites primary medical care, diagnostics, rehabilitation, home care, and related healthcare services under one cohesive brand, creating long-term value for patients, staff, and partners."
      : isTr
      ? "Merkezi Mönchengladbach'ta bulunan NabiOta® Health Group Germany GmbH; birinci basamak sağlık hizmetlerini, ileri tanı merkezlerini, rehabilitasyonu, evde bakım ve entegre klinik servislerini tek bir çatı altında birleştirerek hastalar, çalışanlar ve paydaşlar için kalıcı değerler üretir."
      : isAr
      ? "تجمع شركة NabiOta® Health Group Germany GmbH، ومقرها مونشنغلادباخ، بين الرعاية الطبية الأولية، التشخيص المتقدم، إعادة التأهيل، الرعاية التمريضية المنزلية والخدمات الصحية الشاملة تحت مظلة موحدة — لصناعة قيمة مستدامة للمرضى والكوادر والشركاء."
      : "Die NabiOta® Health Group Germany GmbH mit Sitz in Mönchengladbach vereint medizinische Grundversorgung, Diagnostik, Rehabilitation, Pflege und angrenzende Gesundheitsleistungen unter einer gemeinsamen Marke – für nachhaltige Werte für Patienten, Mitarbeitende und Partner.",
    badge1Title: isUz ? "Inson" : isRu ? "Человек" : isEn ? "People" : isTr ? "İnsan" : isAr ? "الإنسان" : "Mensch",
    badge1Sub: isUz
      ? "diqqat markazida"
      : isRu
      ? "в центре внимания"
      : isEn
      ? "at the center"
      : isTr
      ? "odağımızda"
      : isAr
      ? "في قلب اهتمامنا"
      : "im Mittelpunkt",
    badge2Title: isUz
      ? "Barqaror"
      : isRu
      ? "Устойчивый"
      : isEn
      ? "Sustainable"
      : isTr
      ? "Sürdürülebilir"
      : isAr
      ? "نمو"
      : "Nachhaltiges",
    badge2Sub: isUz ? "o'sish" : isRu ? "рост" : isEn ? "growth" : isTr ? "büyüme" : isAr ? "مستدام" : "Wachstum",
    badge3Title: isUz
      ? "Sog'lom"
      : isRu
      ? "Здоровое"
      : isEn
      ? "A healthier"
      : isTr
      ? "Daha sağlıklı"
      : isAr
      ? "غدٌ أكثر"
      : "Gesünderes",
    badge3Sub: isUz ? "ertangi kun" : isRu ? "завтра" : isEn ? "tomorrow" : isTr ? "bir yarın" : isAr ? "صحة وعافية" : "Morgen",

    rootsEyebrow: isUz
      ? "TARIX VA ILDIZLAR"
      : isRu
      ? "ИСТОРИЯ И КОРНИ"
      : isEn
      ? "OUR ROOTS & HISTORY"
      : isTr
      ? "KÖKLERİMİZ VE TARİHÇEMİZ"
      : isAr
      ? "جذورنا ومسيرتنا"
      : "UNSERE WURZELN & GESCHICHTE",
    rootsTitle1: isUz
      ? "O'n yilliklar tajribasi."
      : isRu
      ? "Опыт десятилетий."
      : isEn
      ? "Rooted in Experience."
      : isTr
      ? "Deneyimle büyüyen güç."
      : isAr
      ? "خبرة متجذرة في التميز."
      : "Aus Erfahrung gewachsen.",
    rootsTitle2: isUz
      ? "Kelajakka intilish."
      : isRu
      ? "Направленность в будущее."
      : isEn
      ? "Built for the Future."
      : isTr
      ? "Geleceğe hazır adımlar."
      : isAr
      ? "رؤية راسخة نحو المستقبل."
      : "Für die Zukunft aufgestellt.",
    rootsP1: isUz ? (
      <>
        NabiOta® Health Group Germany GmbH Mönchengladbach shahar sudida (Amtsgericht) HRB 16787 raqami ostida ro'yxatga olingan. 2026-yil 9-yanvardagi ro'yxatdan o'tkazish bildirishnomasida 50.000 EUR ustav kapitali va rasmiy yuridik manzil ko'rsatilgan: Aachener Straße 114, 41061 Mönchengladbach. Faoliyat maqsadi — sog'liqni saqlash sohasida ulushlarni boshqarish va markazlashtirilgan boshqaruv xizmatlarini ko'rsatishdan iborat. Guruhning ildizlari strategik tibbiy ekspertiza hamda{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong> merosiga borib taqaladi; tuzilmaviy korporativ rivojlanish va litsenziyalangan shifokorlarning ishtiroki tufayli uzoq muddatli integratsiyalashgan tibbiy guruhning mustahkam poydevori yaratildi.
      </>
    ) : isRu ? (
      <>
        NabiOta® Health Group Germany GmbH зарегистрирована в Amtsgericht Mönchengladbach под номером HRB 16787. Уведомление о регистрации от 9 января 2026 года указывает уставный капитал 50.000 EUR и юридический адрес: Aachener Straße 114, 41061 Mönchengladbach. Предмет деятельности — управление участиями и централизованные управленческие услуги в сфере здравоохранения. Корни группы восходят к стратегическому развитию медицинской экспертизы и{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong>. Благодаря расширению корпоративной структуры и привлечению лицензированных специалистов был заложен фундамент долгосрочной медицинской группы.
      </>
    ) : isEn ? (
      <>
        NabiOta® Health Group Germany GmbH is registered under HRB 16787 at the Amtsgericht Mönchengladbach. The registration notice dated 9 January 2026 states a share capital of EUR 50,000 and the business address Aachener Straße 114, 41061 Mönchengladbach. Its corporate purpose comprises investment management and central management services in the healthcare sector. Tracing its origins back to{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong>, the group has evolved through structured corporate development and specialist medical participation into a future-ready healthcare group.
      </>
    ) : isTr ? (
      <>
        NabiOta® Health Group Germany GmbH, Mönchengladbach Asliye Hukuk Mahkemesi (Amtsgericht) nezdinde HRB 16787 tescil numarasıyla kayıtlıdır. 9 Ocak 2026 tarihli sicil tescil bildiriminde 50.000 EUR sermaye ve Aachener Straße 114, 41061 Mönchengladbach şirket adresi yer almaktadır. Faaliyet konusu, sağlık sektöründe iştirak yönetimi ve merkezi yönetim hizmetlerini kapsar. Grubun kökleri, stratejik medikal uzmanlık ve{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong> mirasına dayanır; yapılandırılmış kurumsal gelişim ve uzman tıbbi ortaklıklar sayesinde ayakta ve yatarak tedavi sağlayan entegre bir sağlık grubunun temelleri atılmıştır.
      </>
    ) : isAr ? (
      <>
        تم قيد شركة NabiOta® Health Group Germany GmbH بالسجل التجاري لدى محكمة مونشنغلادباخ الابتدائية برقم HRB 16787. يفيد إخطار القيد الصادر في 9 يناير 2026 برأس مال قدره 50,000 يورو ومقر العمل في Aachener Straße 114, 41061 Mönchengladbach. يشمل غرض الشركة إدارة الحصص الاستثمارية وتقديم الخدمات الإدارية المركزية في قطاع الرعاية الصحية. واستناداً إلى الخبرات الطبية التأسيسية الراسخة لشركة{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong>، تم من خلال التطوير المؤسسي المنظم ومشاركة كبار الأطباء الاستشاريين إرساء القاعدة الصلبة لشبكة متكاملة تجمع بين مرافق الرعاية المتنقلة والسريرية.
      </>
    ) : (
      <>
        Die NabiOta® Health Group Germany GmbH ist unter HRB 16787 beim Amtsgericht Mönchengladbach eingetragen. Die Eintragungsnachricht vom 9. Januar 2026 nennt ein Stammkapital von 50.000 EUR und die Geschäftsanschrift Aachener Straße 114, 41061 Mönchengladbach. Der Unternehmensgegenstand umfasst Beteiligungsverwaltung und zentrale Managementleistungen im Gesundheitswesen. Ausgehend von den Wurzeln der{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong> wurde durch organisatorische Weiterentwicklung und den Ausbau gesellschaftsrechtlicher Strukturen die Grundlage für einen integrierten Verbund ambulanter und stationärer medizinischer Einrichtungen geschaffen.
      </>
    ),
    rootsP2: isUz
      ? "Maqsad — umumiy amaliyot va ichki kasalliklar, nevrologiya va jarrohlik yordamini, shuningdek, dastlabki bosqichda § 30 GewO bo'yicha faoliyat yuritadigan xususiy klinikani yagona tarmoqqa birlashtirishdir. Xolding markaziy iqtisodiy va tashkiliy vazifalarni o'z zimmasiga oladi. Litsenziyalar (Zulassungen), tibbiy mas'uliyat va xizmatlar ko'rsatish tegishli vakolatli operatorlar tasarrufida qoladi. Davlat tibbiy sug'urtasiga ega bemorlarni keyingi statsionar davolash va MVZ ta'sischisi sifatida kasalxona boshqaruv kompaniyasini tashkil etish alohida rivojlanish bosqichlari sifatida tayyorlanmoqda."
      : isRu
      ? "Цель — объединение семейной и терапевтической, неврологической и хирургической помощи, а также частной клиники, которая на первом этапе работает по § 30 GewO. Холдинг берет на себя центральные экономические и организационные задачи. Допуски (Zulassungen), медицинская ответственность и оказание услуг остаются у соответствующих уполномоченных операторов. Последующее стационарное обслуживание пациентов обязательного медицинского страхования и больничное общество как учредитель MVZ готовятся как отдельные этапы развития."
      : isEn
      ? "The goal is a network of general practice and internal medicine, neurological and surgical care, as well as a private clinic initially operated under § 30 GewO. The holding assumes central economic and organizational tasks. Approvals, medical responsibility and service provision remain with the respective authorized operators. Later inpatient care for statutorily insured patients and a hospital company acting as MVZ sponsor are being prepared as separate development steps."
      : isTr
      ? "Hedefimiz; aile hekimliği ve dahiliye, nöroloji ve cerrahi branşlarının yanı sıra başlangıçta § 30 GewO uyarınca işletilen özel bir kliniği kapsayan entegre bir sağlık ağıdır. Holding merkezi ekonomik ve operasyonel görevleri üstlenir. Ruhsatlar, tıbbi sorumluluk ve hasta tedavisi yetkili işleticilerin bünyesinde kalır. Yasal sağlık sigortalı hastaların yatan hasta tedavisi ve MVZ kurucu tüzel kişisi olarak hastane şirketinin yapılandırılması ayrı aşamalar halinde planlanmaktadır."
      : isAr
      ? "الهدف هو تأسيس شبكة رعاية طبية متكاملة تضم طب الأسرة والأمراض الباطنية، طب الأعصاب، الجراحة، بالإضافة إلى مستشفى خاص يعمل مبدئياً وفق § 30 GewO. تتولى القابضة المهام الاقتصادية والتنظيمية المركزية، بينما تظل التراخيص والمسؤولية الطبية وتقديم الرعاية السريرية تحت الإشراف الكامل والمستقل للأطباء المرخصين. ويجري التحضير لتقديم الرعاية السريرية لمرضى التأمين الصحي العام وتأسيس شركة مستشفيات كجهة مشغلة لمراكز MVZ كخطوات تطويرية منفصلة."
      : "Ziel ist ein Verbund aus hausärztlicher und internistischer Versorgung, neurologischer und chirurgischer Versorgung sowie einer zunächst nach § 30 GewO betriebenen Privatklinik. Die Holding übernimmt zentrale wirtschaftliche und organisatorische Aufgaben. Zulassungen, medizinische Verantwortung und Leistungserbringung verbleiben bei den jeweils berechtigten Betreibern. Die spätere stationäre Versorgung gesetzlich Versicherter und eine Krankenhausgesellschaft als MVZ-Trägerin werden als gesonderte Entwicklungsschritte vorbereitet.",

    missionEyebrow: isUz
      ? "MISSIYA VA QARASH"
      : isRu
      ? "МИССИЯ И ВИДЕНИЕ"
      : isEn
      ? "OUR MISSION & GOALS"
      : isTr
      ? "MİSYONUMUZ VE HEDEFLERİMİZ"
      : isAr
      ? "رسالتنا وأهدافنا"
      : "UNSER AUFTRAG & ZIELE",
    missionHeading: isUz
      ? "Bizni nima harakatga keltiradi"
      : isRu
      ? "Что нами движет"
      : isEn
      ? "What Drives Us"
      : isTr
      ? "Bizi harekete geçiren güç"
      : isAr
      ? "ما يلهم مسيرتنا"
      : "Was uns antreibt",
    missionLead: isUz
      ? "Biz salomatlikni nafaqat kasalliklarni davolash, balki yaxlit vazifa deb bilamiz: insonlarga hayotning barcha bosqichlarida hamrohlik qilish, ularning hayot sifatini saqlash va tibbiy tuzilmalarni uzoq muddatli istiqbolda mustahkamlash."
      : isRu
      ? "Мы понимаем здоровье не только как лечение заболеваний, но и как целостную задачу: всесторонняя поддержка человека в различных жизненных ситуациях и долгосрочное повышение качества жизни."
      : isEn
      ? "We understand health not merely as the treatment of illnesses, but as a holistic mission: supporting people in diverse life situations and sustainably enhancing their quality of life."
      : isTr
      ? "Sağlığı yalnızca hastalıkların tedavisi olarak değil, bütüncül bir görev olarak değerlendiriyoruz. Bu nedenle farklı yaşam evrelerindeki insanları en iyi şekilde desteklemeye ve yaşam kalitelerini uzun vadeli artırmaya odaklanıyoruz."
      : isAr
      ? "نحن ننظر إلى الصحة ليس فقط باعتبارها علاجاً للأمراض، بل كرسالة إنسانية شاملة؛ لذا نكرس جهودنا لدعم المرضى في مختلف مراحل حياتهم بأعلى مستويات الرعاية وتعزيز جودة حياتهم بصورة مستدامة."
      : "Wir verstehen Gesundheit nicht nur als Behandlung von Krankheiten, sondern als ganzheitliche Aufgabe. Deshalb setzen wir uns dafür ein, Menschen in unterschiedlichen Lebenssituationen bestmöglich zu unterstützen und ihre Lebensqualität langfristig zu fördern.",
    cardMissionTitle: isUz
      ? "Bizning vazifamiz (Missiya)"
      : isRu
      ? "Наш заказ (Миссия)"
      : isEn
      ? "Our Mission"
      : isTr
      ? "Misyonumuz"
      : isAr
      ? "رسالتنا"
      : "Unser Auftrag",
    cardMissionText: isUz
      ? "Insonlarga yuqori sifatli, mehr-oqibatli va shaxsiylashtirilgan tibbiy xizmat ko'rsatish orqali eng yaxshi yordamni taqdim etish — birlamchi bo'g'indan tortib reabilitatsiyagacha."
      : isRu
      ? "Оказывать людям наилучшую поддержку посредством высококачественной медицинской помощи, современной диагностики, индивидуального ухода и инновационных услуг — надежно сопровождая пациентов на всем пути лечения."
      : isEn
      ? "To provide people with the best possible support through high-quality medical care, modern diagnostics, personalized attention, and innovative healthcare services throughout their entire treatment journey."
      : isTr
      ? "Yüksek kaliteli tıbbi bakım, modern tanı yöntemleri, kişiye özel ilgi ve yenilikçi sağlık hizmetleriyle insanları en iyi şekilde desteklemek ve tedavi süreçlerinin her adımında güvenilir bir rehber olmaktır."
      : isAr
      ? "رسالتنا هي تقديم أفضل دعم ممكن للمرضى من خلال رعاية طبية فائقة الجودة، تقنيات تشخيص حديثة، رعاية شخصية دقيقة، وخدمات صحية مبتكرة ترافق المريض بكل موثوقية عبر مسار علاجه بأكمله."
      : "Unser Auftrag ist es, Menschen durch hochwertige medizinische Versorgung, moderne Diagnostik, individuelle Betreuung und innovative Gesundheitsdienstleistungen bestmöglich zu unterstützen und Patienten auf ihrem gesamten Behandlungsweg verlässlich zu begleiten.",
    cardVisionTitle: isUz
      ? "Bizning maqsadlarimiz (Qarash)"
      : isRu
      ? "Наши цели"
      : isEn
      ? "Our Goals"
      : isTr
      ? "Hedeflerimiz"
      : isAr
      ? "أهدافنا"
      : "Unsere Ziele",
    cardVisionText: isUz
      ? "Tibbiy malaka, shaxsiy g'amxo'rlik va zamonaviy tuzilmalar qo'l berib harakat qiladigan hamda inson doimo diqqat markazida turadigan sog'liqni saqlash tizimi."
      : isRu
      ? "Здравоохранение, в котором медицинская компетентность, передовые технологии и человеческая забота идут рука об руку: объединение медицинских услуг, облегчение доступа к лечению и создание устойчивых структур."
      : isEn
      ? "Healthcare in which medical competence, modern technologies, and human compassion go hand in hand: connecting care services, easing access to treatments, and creating sustainable structures for the future."
      : isTr
      ? "Tıbbi uzmanlığın, ileri teknolojinin ve insani ilginin el ele verdiği bir sağlık ekosistemi hedefliyoruz. Sağlık hizmetlerini ağlar halinde birleştiriyor, erişimi kolaylaştırıyor ve geleceğe hazır yapılar inşa ediyoruz."
      : isAr
      ? "هدفنا هو منظومة رعاية صحية تتكامل فيها الكفاءة الطبية العالية والتقنيات الحديثة مع العناية الإنسانية المخلصة. نربط خدمات الرعاية ببعضها، نسهل وصول المرضى إليها، ونبني هياكل علاجية مستدامة للأجيال القادمة."
      : "Unser Ziel ist eine Gesundheitsversorgung, in der medizinische Kompetenz, moderne Technologien und menschliche Zuwendung Hand in Hand gehen. Wir vernetzen Versorgungsangebote, erleichtern den Zugang und schaffen nachhaltige Versorgungsstrukturen.",

    stat1Num: "3.000+",
    stat1Label: isUz
      ? "Fidoyi mutaxassislar"
      : isRu
      ? "Преданных специалистов"
      : isEn
      ? "Dedicated professionals"
      : isTr
      ? "Özverili Uzman Personel"
      : isAr
      ? "كادراً متخصصاً متفانياً"
      : "Engagierte Fachkräfte",
    stat2Num: "10",
    stat2Label: isUz
      ? "Tarkibiy bo'linmalar va korxonalar"
      : isRu
      ? "Подразделений и предприятий"
      : isEn
      ? "Divisions & operating entities"
      : isTr
      ? "Faaliyet Alanı ve Şirket"
      : isAr
      ? "قطاعات ووحدات تشغيلية"
      : "Unternehmensbereiche & Einheiten",
    stat3Num: "100+",
    stat3Label: isUz
      ? "Hamkorlik tarmog'i"
      : isRu
      ? "Партнерская сеть"
      : isEn
      ? "Partner network"
      : isTr
      ? "Ağ Ortakları"
      : isAr
      ? "شريكاً في الشبكة الطبية"
      : "Partner im Netzwerk",
    stat4Num: isUz ? "Yagona" : isRu ? "Одна" : isEn ? "One" : isTr ? "Tek" : isAr ? "رسالة" : "Eine",
    stat4Label: isUz
      ? "Sog'lom kelajak yo'lidagi umumiy missiya"
      : isRu
      ? "Общая миссия во имя здорового будущего"
      : isEn
      ? "Shared mission for a healthier tomorrow"
      : isTr
      ? "Daha sağlıklı bir gelecek için ortak misyon"
      : isAr
      ? "واحدة مشتركة لمستقبل صحي واعد"
      : "Gemeinsame Mission für eine gesündere Zukunft",

    orgEyebrow: isUz
      ? "TASHKILIY TUZILMA"
      : isRu
      ? "ОРГАНИЗАЦИОННАЯ СТРУКТУРА"
      : isEn
      ? "ORGANIZATIONAL STRUCTURE"
      : isTr
      ? "ORGANİZASYON VE YAPI"
      : isAr
      ? "الهيكل التنظيمي والمؤسسي"
      : "ORGANISATION & STRUKTUR",
    orgHeading: isUz
      ? "Xolding tuzilmasi va sho'ba korxonalar"
      : isRu
      ? "Структура холдинга и дочерние общества"
      : isEn
      ? "Holding & Subsidiary Entities"
      : isTr
      ? "Şirket Yapısı – Holding ve İştirakler"
      : isAr
      ? "الهيكل المؤسسي – القابضة والشركات التابعة"
      : "Unternehmensstruktur – Holding & Tochtergesellschaften",
    holdingBadge: isUz
      ? "XOLDING / KONSERN"
      : isRu
      ? "ХОЛДИНГ / КОНЦЕРН"
      : isEn
      ? "HOLDING / KONZERN"
      : isTr
      ? "HOLDİNG / GRUP"
      : isAr
      ? "الشركة القابضة / المجموعة"
      : "HOLDING / KONZERN",

    twoPhaseEyebrow: isUz
      ? "RIVOJLANISH STRATEGIYASI"
      : isRu
      ? "СТРАТЕГИЯ РАЗВИТИЯ"
      : isEn
      ? "DEVELOPMENT STRATEGY"
      : isTr
      ? "STRATEJİK GELİŞİM"
      : isAr
      ? "التطوير الاستراتيجي"
      : "STRATEGISCHE ENTWICKLUNG",
    twoPhaseTitle: isUz
      ? "Ikki bosqichli ishtirok etish modeli"
      : isRu
      ? "Структура участия в две фазы"
      : isEn
      ? "Two-Phase Corporate Evolution"
      : isTr
      ? "İki Aşamalı İştirak Yapısı"
      : isAr
      ? "هيكل المساهمة والاستثمار عبر مرحلتين"
      : "Beteiligungsstruktur in zwei Phasen",
    twoPhaseDesc: isUz
      ? "Xolding rivojlanishi SGB V bo'yicha qonuniy me'yorlar va KV Nordrhein talablariga to'liq mos kelishini ta'minlash uchun bosqichma-bosqich amalga oshiriladi."
      : isRu
      ? "Развитие холдинга строится последовательно для обеспечения юридической безупречности и устойчивого масштабирования."
      : isEn
      ? "The group's corporate expansion is engineered systematically to ensure full regulatory compliance and sustainable scaling."
      : isTr
      ? "NabiOta Grubu'nun inşası, mesleki ve idari mevzuata tam uyumu sağlamak amacıyla açıkça tanımlanmış iki aşamada gerçekleştirilmektedir."
      : isAr
      ? "يتم بناء وتوسيع مجموعة NabiOta عبر مرحلتين محددتين بدقة لضمان الامتثال التام للأنظمة المهنية وقوانين تراخيص الرعاية الطبية."
      : "Der Aufbau der NabiOta-Gruppe erfolgt in zwei klar definierten Phasen zur Sicherstellung voller berufs- und zulassungsrechtlicher Konformität.",
    phase1Title: isUz
      ? "1-bosqich: Shifokor ishtirokidagi shakllanish bosqichi"
      : isRu
      ? "Фаза 1: Этап становления с участием врача"
      : isEn
      ? "Phase 1: Foundation Phase with Physician"
      : isTr
      ? "Aşama 1: Hekim Katılımlı Kuruluş Evresi"
      : isAr
      ? "المرحلة الأولى: مرحلة التأسيس بمشاركة الأطباء المرخصين"
      : "Phase 1: Aufbauphase mit ärztlicher Beteiligung",
    phase1Desc: isUz
      ? "Dr. Fischer-Rahimov litsenziyalangan shartnoma shifokori sifatida MVZ tuzilmasining asoschisi va tibbiy langari hisoblanadi (§ 95 Abs. 1a SGB V). Xolding 1-bosqichda tibbiy bo'lmagan xizmatlar va infratuzilmani rivojlantirishga e'tibor qaratadi."
      : isRu
      ? "Dr. Fischer-Rahimov как лицензированный врач-контрактник владеет долями MVZ на основе права учредителя. Холдинг берет на себя центральные сервисные и управляющие функции через индивидуальные договоры услуг."
      : isEn
      ? "Dr. Fischer-Rahimov holds MVZ shares directly on the basis of his statutory physician entitlement. The holding company provides centralized management services via individually defined service agreements."
      : isTr
      ? "Dr. Fischer-Rahimov, yasal kurucu hekim hakkı temelinde doğrudan MVZ hisselerini elinde bulundurur. Holding, bireysel olarak kararlaştırılan hizmet sözleşmeleri aracılığıyla MVZ merkezlerine kurumsal destek sunar."
      : isAr
      ? "يمتلك د. فيشر-رحيموف حصص مراكز MVZ مباشرةً استناداً إلى أهليته التأسيسية كطبيب معتمد. وترتبط الشركة القابضة بمراكز MVZ عبر اتفاقيات خدمات إدارية محددة."
      : "Dr. Fischer-Rahimov hält MVZ-Anteile unmittelbar auf Grundlage seiner Gründungsberechtigung. Die Holding verbindet sich mit den MVZ durch einzeln vereinbarte Dienstleistungen. Andere zulässige Beteiligungen werden separat aufgebaut.",
    phase2Title: isUz
      ? "2-bosqich: Statsionar shifoxona tuzilmasi"
      : isRu
      ? "Фаза 2: Стационарная больничная структура"
      : isEn
      ? "Phase 2: Hospital Corporation Structure"
      : isTr
      ? "Aşama 2: Gelecekteki Hastane Yapılanması"
      : isAr
      ? "المرحلة الثانية: هيكل المستشفى المؤسسي اللاحق"
      : "Phase 2: Spätere Krankenhausstruktur",
    phase2Desc: isUz
      ? "Xolding klinikani boshqarish kompaniyasini (NabiOta Clinics Germany GmbH) ta'sis etadi va § 30 GewO litsenziyasiga ega bo'ladi hamda kasalxona rejasiga muvofiq statsionar shifoxona sifatida MVZ ning qonuniy ta'sischisi maqomini oladi."
      : isRu
      ? "Холдинг учреждает компанию управления клиникой (NabiOta Clinics Germany GmbH nach § 30 GewO). После получения лицензии больницы (§ 108/109 SGB V) компания сможет напрямую участвовать в долях MVZ."
      : isEn
      ? "The holding operates the hospital operating entity (under § 30 GewO). Upon obtaining official hospital accreditation (§ 108/109 SGB V), it can hold MVZ shares directly."
      : isTr
      ? "Holding, hastane işletme şirketini (§ 30 GewO) bünyesinde tutar. Yasal hastane ruhsatı (§ 108/109 SGB V) alındıktan sonra ve pay devri incelemesinin ardından bu şirket doğrudan MVZ hisselerini devralabilir."
      : isAr
      ? "تمتلك الشركة القابضة شركة إدارة وتشغيل المستشفى (§ 30 GewO). وفور الحصول على اعتماد المستشفيات المطلوب (§ 108/109 SGB V) وبعد فحص تحويل الحصص، يمكن لهذه الشركة امتلاك حصص MVZ مباشرةً."
      : "Die Holding hält die Krankenhaus-Betriebsgesellschaft. Erst bei deren erforderlicher Krankenhauszulassung (§ 108/109 SGB V) und nach Prüfung der Anteilsübertragung kann diese unmittelbar MVZ-Anteile halten.",

    independenceTitle: isUz
      ? "Tibbiy qarorlarning to'liq mustaqilligi"
      : isRu
      ? "Полная независимость врачебных решений"
      : isEn
      ? "Guaranteed Medical Independence"
      : isTr
      ? "Garantili Tıbbi Bağımsızlık"
      : isAr
      ? "استقلالية كاملة ومضمونة للقرارات الطبية"
      : "Garantierte ärztliche Weisungsfreiheit",
    independenceDesc: isUz
      ? "Xolding iqtisodiy, IT va infratuzilma yordamini ko'rsatadi, ammo shifokorlarning davolash usullari, dori-darmonlar tayinlash va tibbiy erkinligiga hech qanday aralashmaydi."
      : isRu
      ? "Холдинг обеспечивает экономическое, IT- и инфраструктурное сопровождение, но не имеет полномочий влиять на индивидуальные медицинские решения. Врачебное руководство каждого центра действует абсолютно автономно в соответствии с § 95 SGB V."
      : isEn
      ? "The holding handles administrative, IT, and facility management without interfering in clinical care. The medical directorship of each facility remains completely autonomous in all healthcare matters."
      : isTr
      ? "Tıbbi kurumlar; tedavi kararları, tanı ve klinik işleyiş konusunda tamamen bağımsız kalır. Bir MVZ'nin tıbbi direktörlüğünün serbest karar alma hakkı (§ 95 SGB V) hiçbir kısıtlama olmaksızın korunur."
      : isAr
      ? "تتمتع المرافق الطبية بالاستقلالية التامة في القرارات العلاجية والتشخيصية والتنظيم السريري. وتظل الاستقلالية المهنية غير المقيدة للإدارة الطبية في مراكز MVZ مصونة بالكامل (§ 95 SGB V)."
      : "Die medizinischen Einrichtungen bleiben für Behandlungsentscheidungen, Diagnostik und ärztliche Organisation eigenverantwortlich. Die medizinische Weisungsfreiheit der ärztlichen Leitung eines MVZ bleibt uneingeschränkt gewahrt (§ 95 SGB V).",

    // Section 3B: Medical Leadership & Founder (PDF Pages 2-4)
    leadershipEyebrow: isUz
      ? "SHIFOKORLAR RAHBARLIGI VA TA'SISCHI"
      : isRu
      ? "ВРАЧЕБНОЕ РУКОВОДСТВО И ОСНОВАТЕЛЬ"
      : isEn
      ? "MEDICAL LEADERSHIP & FOUNDER"
      : isTr
      ? "TIBBİ LİDERLİK VE KURUCU"
      : isAr
      ? "القيادة الطبية ومؤسس المجموعة"
      : "ÄRZTLICHE FÜHRUNG & GRÜNDER",
    leadershipHeading1: isUz
      ? "Mas'uliyatli tibbiyot"
      : isRu
      ? "Ответственная медицина"
      : isEn
      ? "Responsible Healthcare"
      : isTr
      ? "Sorumlu tıp,"
      : isAr
      ? "طب مسؤول"
      : "Verantwortungsvolle Medizin",
    leadershipHeading2: isUz
      ? "shifokorlar rahbarligida."
      : isRu
      ? "под руководством врачей."
      : isEn
      ? "Led by Physicians."
      : isTr
      ? "hekim liderliğinde."
      : isAr
      ? "بقيادة استشارية طبية رائدة."
      : "durch ärztliche Führung.",
    leadershipSubtitle: isUz
      ? "NabiOta® Health Group Germany poydevori klinik ekspertiza, mustaqil shifokorlik mas'uliyati va nemis tibbiyot an'analariga asoslangan."
      : isRu
      ? "Фундамент NabiOta® Health Group Germany основан на клиническом авторитете и статусе врача-учредителя (Gründungsberechtigter Vertragsarzt). Медицинский совет гарантирует превосходство в лечении, свободное от коммерческого давления."
      : isEn
      ? "The bedrock of NabiOta® Health Group Germany rests upon clinical integrity and the statutory founder status of licensed physicians. Our clinical board guarantees superior standards of care independent of purely commercial return pressures."
      : isTr
      ? "NabiOta® Health Group Germany'nin temeli, köklü klinik mükemmellik ve yerleşik sözleşmeli hekimlerin yasal kuruculuk yetkisine dayanır. Tıbbi yönetim, ticari getiri baskısından uzak, en yüksek tedavi kalitesini garanti eder."
      : isAr
      ? "يرتكز أساس NabiOta® Health Group Germany على التميز السريري الرفيع والحق التأسيسي القانوني للأطباء المعتمدين. تضمن الإدارة الطبية أعلى معايير جودة الرعاية دون أي ضغوط ربحية تجارية بحتة."
      : "Das Fundament der NabiOta® Health Group Germany basiert auf der klinischen Exzellenz und der gesetzlichen Gründungsberechtigung niedergelassener Vertragsärzte. Die medizinische Leitung sichert höchste Behandlungsqualität frei von rein ökonomischem Renditedruck.",

    founderName: isRu
      ? "Доктор медицины К. Фишер-Рахимов"
      : isUz
      ? "Tibbiyot fanlari doktori K. Fisher-Raximov"
      : isTr
      ? "Tıp Doktoru K. Fischer-Rahimov"
      : isAr
      ? "د. ك. فيشر-رحيموف"
      : "Dr. med. K. Fischer-Rahimov",
    founderRole: isUz
      ? "Xoldingning asoschisi, yagona ta'sischisi va bosh direktori · NabiOta Health Group Germany"
      : isRu
      ? "Основатель, единственный участник и генеральный директор холдинга NabiOta Health Group Germany"
      : isEn
      ? "Founder, Sole Shareholder and Managing Director of the Holding NabiOta Health Group Germany"
      : isTr
      ? "NabiOta Health Group Germany Holdingi Kurucusu, Tek Ortağı ve Genel Müdürü"
      : isAr
      ? "المؤسس والمساهم الوحيد والمدير العام لمجموعة NabiOta Health Group Germany القابضة"
      : "Gründer, Alleingesellschafter und Geschäftsführer der Holding NabiOta Health Group Germany",
    founderBadge: isRu ? "§ 95 Abs. 1a SGB V · Врач-учредитель" : "§ 95 Abs. 1a SGB V · Gründungsarzt",

    founderIntroParagraphs: [
      isUz
        ? "Mening turli mamlakatlardagi shifokorlik faoliyatim tibbiy tajribamni kengaytirdi va turli xil sog'liqni saqlash tuzilmalari haqidagi tushunchamni shakllantirdi. Bu jarayonda bemorlarga yuqori sifatli yordam ko'rsatish nafaqat kasbiy malakani, balki tibbiyot yo'nalishlari o'rtasida yaqin hamkorlikni ham talab qilishi haqidagi qat'iy ishonch paydo bo'ldi."
        : isRu
        ? "Моя врачебная деятельность в различных странах расширила мой медицинский опыт и сформировала понимание различных структур здравоохранения. При этом окрепло убеждение, что качественная помощь пациентам, помимо профессиональной компетентности, требует тесного взаимодействия между различными медицинскими дисциплинами."
        : isEn
        ? "My medical practice in various countries has broadened my clinical experience and shaped my understanding of different healthcare delivery structures. Through this, I developed the firm conviction that good patient care requires not only technical expertise, but also close cooperation between medical disciplines."
        : isTr
        ? "Farklı ülkelerdeki hekimlik faaliyetlerim tıbbi deneyimimi genişletti ve farklı sağlık sistemi yapılarına dair anlayışımı şekillendirdi. Bu süreçte, nitelikli bir hasta bakımının yalnızca mesleki yetkinlik değil, aynı zamanda tıbbi disiplinler arasında yakın bir iş birliği gerektirdiği inancı gelişti."
        : isAr
        ? "لقد وسعت ممارستي الطبية في بلدان مختلفة من خبرتي السريرية وصقلت فهمي لهياكل الرعاية الصحية المتنوعة. ومن هنا ترسخت قناعتي بأن الرعاية المثلى للمرضى لا تتطلب الكفاءة المهنية فحسب، بل تستلزم أيضاً تعاوناً وثيقاً بين مختلف التخصصات الطبية."
        : "Meine ärztliche Tätigkeit in verschiedenen Ländern hat meine medizinische Erfahrung erweitert und mein Verständnis für unterschiedliche Versorgungsstrukturen geprägt. Dabei entwickelte sich die Überzeugung, dass eine gute Patientenversorgung neben fachlicher Kompetenz auch eine enge Zusammenarbeit zwischen den medizinischen Disziplinen braucht.",
      isUz
        ? "Ushbu ishonchdan NabiOta Health Group Germany g'oyasi vujudga keldi: umumiy amaliyot va ixtisoslashtirilgan mutaxassislar tajribasini yagona tashkiliy tizim ostida birlashtirish hamda tibbiy xizmatni bemor manfaatlari nuqtai nazaridan tashkil etish."
        : isRu
        ? "Из этого убеждения родилась идея создания NabiOta Health Group Germany: объединить терапевтические и узкопрофильные врачебные компетенции под единой организационной крышей и выстраивать медицинскую помощь с точки зрения интересов пациента."
        : isEn
        ? "From this conviction arose the idea for NabiOta Health Group Germany: bringing primary and specialized clinical competencies together under a shared organizational roof and shaping healthcare from the patient's perspective."
        : isTr
        ? "Bu inanç doğrultusunda NabiOta Health Group Germany fikri doğdu: Aile hekimliği ve uzman hekimlik yetkinliklerini ortak bir kurumsal çatı altında toplamak ve sağlık hizmetlerini hastanın bakış açısıyla şekillendirmek."
        : isAr
        ? "ومن هذه القناعة ولدت فكرة تأسيس NabiOta Health Group Germany: الجمع بين كفاءات طب الأسرة والطب التخصصي تحت مظلة تنظيمية واحدة، وتصميم منظومة الرعاية من منظور المريض واحتياجاته."
        : "Aus dieser Überzeugung entstand die Idee zur NabiOta Health Group Germany: hausärztliche und fachärztliche Kompetenzen unter einem gemeinsamen organisatorischen Dach zusammenzuführen und die Versorgung aus der Perspektive der Patienten zu gestalten.",
    ],

    founderKeyPoints: [
      {
        title: isRu
          ? "Междисциплинарность"
          : isUz
          ? "Ko'p tarmoqli yordam"
          : isEn
          ? "Interdisciplinary"
          : isTr
          ? "Branşlar Arası Uyum"
          : isAr
          ? "تكامل التخصصات"
          : "Fachübergreifend",
        desc: isRu
          ? "Тесное взаимодействие терапевтов и узких специалистов."
          : isUz
          ? "Umumiy va ixtisoslashgan shifokorlar yaqin hamkorligi."
          : isEn
          ? "Primary & specialist care closely united under one roof."
          : isTr
          ? "Aile ve uzman hekimlerin tek çatı altında iş birliği."
          : isAr
          ? "تعاون وثيق بين أطباء الأسرة والأطباء الاختصاصيين."
          : "Haus- & Fachärzte Hand in Hand unter einem Dach.",
      },
      {
        title: isRu
          ? "Забота о пациенте"
          : isUz
          ? "Bemorga yo'naltirilgan"
          : isEn
          ? "Patient-Centered"
          : isTr
          ? "Hasta Odaklı"
          : isAr
          ? "التركيز على المريض"
          : "Patientenorientiert",
        desc: isRu
          ? "Надежная маршрутизация при сложных и хронических случаях."
          : isUz
          ? "Murakkab va surunkali kasalliklarda ishonchli yo'nalish."
          : isEn
          ? "Dependable guidance for complex & chronic conditions."
          : isTr
          ? "Karmaşık ve kronik rahatsızlıklarda güvenilir rehberlik."
          : isAr
          ? "توجيه موثوق للحالات المعقدة والأمراض المزمنة."
          : "Verlässliche Orientierung bei komplexen & chronischen Fällen.",
      },
      {
        title: isRu
          ? "Врачебная автономия"
          : isUz
          ? "Tibbiy mustaqillik"
          : isEn
          ? "Clinical Autonomy"
          : isTr
          ? "Tıbbi Bağımsızlık"
          : isAr
          ? "استقلالية طبية"
          : "Ärztliche Autonomie",
        desc: isRu
          ? "Полная независимость в медицинских решениях."
          : isUz
          ? "Klinik qarorlarda mustaqil va erkin shifokorlik."
          : isEn
          ? "Strictly independent, non-directive medical directorship."
          : isTr
          ? "Klinik kararlarda talimatsız tam hekimlik özerkliği."
          : isAr
          ? "إدارة طبية حرة ومستقلة تماماً في القرارات العلاجية."
          : "Weisungsfreie medizinische Leitung der Einrichtungen.",
      },
    ],

    founderQuote: isRu
      ? "«Наш руководящий принцип: объединять медицинский опыт, укреплять партнерство и ставить человека в центр внимания.»"
      : isUz
      ? "«Bosh tamoyilimiz: tibbiy tajribani jamlash, hamkorlikni mustahkamlash va insonni markaziy o'ringa qo'yish.»"
      : isEn
      ? "“Our guiding principle: uniting clinical experience, strengthening collaboration, and placing people at the center.”"
      : isTr
      ? "“Temel ilkemiz: Tıbbi deneyimi birleştirmek, iş birliğini güçlendirmek ve insanı merkeze koymak.”"
      : isAr
      ? "«مبدؤنا التوجيهي: حشد الخبرة الطبية، تعزيز التعاون، ووضع الإنسان في قلب كل اهتمام.»"
      : "„Unser Leitgedanke: medizinische Erfahrung bündeln, Zusammenarbeit stärken und den Menschen in den Mittelpunkt stellen.“",

    founderExpandBtn: isRu
      ? "Читать полное обращение"
      : isUz
      ? "To'liq murojaatni o'qish"
      : isEn
      ? "Read Full Statement"
      : isTr
      ? "Tam Metni Oku"
      : isAr
      ? "قراءة البيان الكامل"
      : "Vollständiges Leitbild lesen",

    founderCollapseBtn: isRu
      ? "Свернуть обращение"
      : isUz
      ? "Murojaatni yopish"
      : isEn
      ? "Show Less"
      : isTr
      ? "Daha Az Göster"
      : isAr
      ? "طي البيان"
      : "Weniger anzeigen",

    founderExpandedTitle: isRu
      ? "Подробная концепция помощи и структура ответственности"
      : isUz
      ? "Kengaytirilgan yordam konsepsiyasi va mas'uliyat"
      : isEn
      ? "Comprehensive Care Model & Corporate Governance"
      : isTr
      ? "Kapsamlı Sağlık Modeli ve Kurumsal Yönetim"
      : isAr
      ? "نموذج الرعاية الشامل والحوكمة المؤسسية"
      : "Ausführliches Versorgungskonzept & Verantwortung",

    founderExpandedParagraphs: [
      isUz
        ? "Bizning maqsadimiz — shaxsiylashtirilgan, ko'p tarmoqli va muvofiqlashtirilgan tibbiy parvarish. Birlamchi tibbiy yordamdan boshlab ixtisoslashgan diagnostika va keyingi davolanishgacha barcha xizmatlar o'zaro uzviy bog'lanishi kerak."
        : isRu
        ? "Наша цель — персональное, междисциплинарное и четко скоординированное сопровождение. От первичного амбулаторного приема и специализированной диагностики до последующего лечения — все медицинские звенья должны работать слаженно и гармонично."
        : isEn
        ? "Our objective is personalized, cross-disciplinary, and well-coordinated care. From initial primary consultation through specialized diagnostics to continuous treatment, medical services should meaningfully interlock."
        : isTr
        ? "Amacımız kişiye özel, branşlar arası ve iyi koordine edilmiş bir bakımdır. Temel aile hekimliği hizmetinden ileri uzmanlık tanılarına ve müteakip tedaviye kadar tüm tıbbi hizmetlerin anlamlı bir bütünlük içinde işlemesini hedefliyoruz."
        : isAr
        ? "هدفنا هو تقديم رعاية شخصية، متعددة التخصصات ومنسقة بدقة. فمن الرعاية الأولية إلى التشخيص التخصصي الدقيق وحتى مراحل العلاج المتقدمة، يجب أن تتكامل الخدمات الطبية بشكل متناغم."
        : "Unser Ziel ist eine persönliche, fachübergreifende und gut koordinierte Betreuung. Von der hausärztlichen Erstversorgung über die spezialisierte Diagnostik bis zur weiteren Behandlung sollen medizinische Leistungen sinnvoll ineinandergreifen.",
      isUz
        ? "Ayniqsa murakkab yoki surunkali kasalliklarga chalingan insonlarga ishonchli yo'nalish berishga intilamiz. Tushunarli ma'lumotlar, aniq mas'ul shaxslar va o'zaro muvofiqlashtirilgan davolash bosqichlari bizning tibbiy konsepsiyamiz markazida turadi."
        : isRu
        ? "Особое внимание мы уделяем надежной маршрутизации людей со сложными или хроническими заболеваниями. Доступная информация, понятные контактные лица и согласованные этапы лечения находятся в центре нашей концепции медицинской помощи."
        : isEn
        ? "We place particular emphasis on offering dependable guidance to patients with complex or chronic conditions. Understandable medical information, clear contact partners, and coordinated treatment milestones form the core of our healthcare concept."
        : isTr
        ? "Özellikle karmaşık veya kronik rahatsızlıkları olan bireylere güvenilir bir rehberlik sunmayı amaçlıyoruz. Anlaşılır bilgilendirme, net muhataplar ve birbiriyle uyumlu tedavi basamakları hizmet modelimizin merkezindedir."
        : isAr
        ? "نحرص بشكل خاص على توفير مسار موثوق للأشخاص الذين يعانون من أمراض معقدة أو مزمنة. إن المعلومات الواضحة، والتواصل المباشر مع المسؤولين، والخطوات العلاجية المنسقة تمثل جوهر مفهومنا للرعاية."
        : "Dabei möchten wir insbesondere Menschen mit komplexen oder chronischen Erkrankungen eine verlässliche Orientierung bieten. Verständliche Informationen, klare Ansprechpartner und aufeinander abgestimmte Behandlungsschritte stehen im Mittelpunkt unseres Versorgungskonzepts.",
      isUz
        ? "«Bir tom ostidagi tibbiyot» biz uchun muassasalarimiz va filiallarimiz salohiyatini umumiy tarmoqqa jamlashni anglatadi. Ko'rsatiladigan xizmatlar ko'lami har bir hududdagi ixtisosliklar va litsenziyalarga muvofiq belgilanadi."
        : isRu
        ? "«Медицина под одной крышей» означает для нас объединение потенциала наших учреждений и медицинских центров в единую сеть. Конкретный перечень услуг формируется с учетом специализаций и локальных допусков каждого филиала."
        : isEn
        ? "“Medicine under one roof” means uniting the competencies of our facilities and regional sites into an integrated group. The concrete scope of services is oriented toward the respective specialties and accreditations on site."
        : isTr
        ? "Bizim için 'Tek Çatı Altında Tıp', kurumlarımızın ve merkezlerimizin yetkinliklerini ortak bir ağda bir araya getirmek anlamına gelir. Sunulan hizmetler ilgili lokasyondaki uzmanlık alanlarına ve ruhsatlara göre belirlenir."
        : isAr
        ? "«الطب تحت سقف واحد» يعني بالنسبة لنا توحيد إمكانات مؤسساتنا ومواقعنا ضمن شبكة متكاملة. وتتحدد باقة الخدمات المقدمة وفقاً للتخصصات والتراخيص المعتمدة في كل موقع."
        : "„Medizin unter einem Dach“ bedeutet für uns, die Kompetenzen unserer Einrichtungen und Standorte in einem gemeinsamen Verbund zusammenzubringen. Das konkrete Leistungsangebot richtet sich nach den jeweiligen Fachrichtungen und Zulassungen vor Ort.",
      isUz
        ? "Xoldingning yagona ta'sischisi va bosh direktori sifatida guruhning strategik yo'nalishi va tashkiliy rivojlanishi uchun mas'uliyatni o'z zimmamga olaman. Umumiy tuzilma markazlarimizning kundalik faoliyatini qo'llab-quvvatlash va tibbiy ishlar uchun qulay sharoit yaratishga xizmat qiladi."
        : isRu
        ? "Как единственный участник и генеральный директор холдинга я отвечаю за стратегический вектор и организационное развитие группы компаний. Общая структура призвана поддерживать наши центры в повседневной практике и создавать условия для врачебной работы."
        : isEn
        ? "As sole shareholder and managing director of the holding, I oversee the strategic direction and organizational expansion of the corporate group. The common corporate structure is designed to support our clinics in daily operations and preserve dedicated room for medical practice."
        : isTr
        ? "Holdingin tek ortağı ve genel müdürü olarak şirketler grubunun stratejik yöneliminden ve organizasyonel gelişiminden sorumluyum. Ortak yapı, merkezlerimizi günlük pratikte desteklemek ve hekimlik çalışmalarına alan açmak için vardır."
        : isAr
        ? "بصفتي المساهم الوحيد والمدير العام للمجموعة القابضة، أتولى مسؤولية التوجه الاستراتيجي والتطوير المؤسسي للمجموعة. وتهدف هذه الهيكلية المشتركة إلى دعم مراكزنا في العمل اليومي وتوفير البيئة المثلى للممارسة الطبية."
        : "Als Alleingesellschafter und Geschäftsführer der Holding verantworte ich die strategische Ausrichtung und organisatorische Weiterentwicklung der Unternehmensgruppe. Die gemeinsame Struktur soll unsere Einrichtungen im Praxisalltag unterstützen und Raum für die medizinische Arbeit schaffen.",
      isUz
        ? "Bemorlar oldidagi shifokorlik mas'uliyati asosiy mezon bo'lib qoladi. Har bir tibbiyot markazi (MVZ)ning bosh shifokori klinik masalalarda tijoriy ko'rsatmalardan to'liq mustaqildir."
        : isRu
        ? "Определяющей остается врачебная ответственность перед пациентом. Руководство каждого медицинского центра (MVZ) полностью свободно от сторонних указаний в клинических вопросах (weisungsfrei)."
        : isEn
        ? "The decisive factor remains the clinical responsibility toward the patient. The medical directorship of each respective medical center is strictly independent and free from commercial directives in clinical matters."
        : isTr
        ? "Hastalara karşı hekimlik sorumluluğu daima belirleyici kalır. İlgili Tıbbi Bakım Merkezlerinin (MVZ) tıbbi direktörlüğü klinik konularda talimatsız ve tamamen bağımsızdır."
        : isAr
        ? "تبقى المسؤولية الطبية تجاه المرضى هي المعيار الأساسي والمحدد. وتتمتع الإدارة الطبية في مراكز الرعاية الطبية (MVZ) باستقلالية تامة وحرية كاملة دون أي تعليمات تجارية في القرارات العلاجية."
        : "Maßgeblich bleibt dabei die ärztliche Verantwortung gegenüber den Patienten. Die ärztliche Leitung der jeweiligen Medizinischen Versorgungszentren ist in medizinischen Fragen weisungsfrei.",
    ],
    founderParagraphs: [],

    consultantName: isRu
      ? "Азизбек Фишер-Рахимов (Azizbek Fischer-Rahimov)"
      : isUz
      ? "Azizbek Fisher-Raximov"
      : isAr
      ? "عزيز بيك فيشر-رحيموف (Azizbek Fischer-Rahimov)"
      : "Azizbek Fischer-Rahimov",
    consultantRole: isUz
      ? "Menejer va konsultant"
      : isRu
      ? "Менеджер и консультант"
      : isEn
      ? "Manager and Consultant"
      : isTr
      ? "Yönetici ve Danışman"
      : isAr
      ? "مدير واستشاري"
      : "Manager und Consultant",
    consultantParagraphs: [
      isUz
        ? "Azizbek Fisher-Raximov NabiOta Health Group Germany kompaniyasining tashkiliy va strategik rivojlanishini qo'llab-quvvatlaydi. Uning asosiy yo'nalishi operatsion jarayonlarni muvofiqlashtirish, loyihalarni boshqarish hamda rahbariyat va alohida muassasalar o'rtasidagi hamkorlikni ta'minlashdan iborat."
        : isRu
        ? "Азизбек Фишер-Рахимов сопровождает организационное и стратегическое развитие NabiOta Health Group Germany. В фокусе его работы — координация операционных процессов, сопровождение ключевых проектов и взаимодействие между руководством холдинга и отдельными медицинскими подразделениями."
        : isEn
        ? "Azizbek Fischer-Rahimov supports the organizational and strategic expansion of NabiOta Health Group Germany. His focus lies on coordinating operational workflows, overseeing projects, and facilitating cooperation between executive leadership and individual healthcare centers."
        : isTr
        ? "Azizbek Fischer-Rahimov, NabiOta Health Group Germany'nin kurumsal ve stratejik gelişimini desteklemektedir. Odak noktası; operasyonel süreçlerin koordinasyonu, projelerin takibi ile genel yönetim ve münferit sağlık merkezleri arasındaki iş birliğinin sağlanmasıdır."
        : isAr
        ? "يدعم عزيز بيك فيشر-رحيموف التطوير المؤسسي والاستراتيجي لمجموعة NabiOta Health Group Germany. ويتركز نشاطه على تنسيق العمليات التشغيلية، ومتابعة المشاريع، وتعزيز التعاون بين الإدارة التنفيذية ومختلف المنشآت الطبية التابعة للمجموعة."
        : "Azizbek Fischer-Rahimov unterstützt die organisatorische und strategische Weiterentwicklung der NabiOta Health Group Germany. Sein Schwerpunkt liegt auf der Koordination betrieblicher Abläufe, der Begleitung von Projekten und der Zusammenarbeit zwischen Geschäftsführung und den einzelnen Einrichtungen.",
      isUz
        ? "Ushbu faoliyatning maqsadi — aniq tuzilmalarni shakllantirish, jarayonlar samaradorligini oshirish va kundalik amaliyotda jamoalarni tashkiliy jihatdan yengillatishdir. U tadbirkorlik tafakkurini bemorlarga yo'naltirilgan sog'liqni saqlashning o'ziga xos talablarini chuqur tushunish bilan uyg'unlashtiradi."
        : isRu
        ? "Цель его деятельности — содействие прозрачным структурам, повышение эффективности процессов и организационная разгрузка команд на местах в повседневной практике. Он сочетает предпринимательский подход с пониманием особых требований пациент-ориентированного здравоохранения."
        : isEn
        ? "The goal of his work is to promote clear structures, optimize operating processes, and relieve healthcare teams of administrative burdens in daily practice. He unites entrepreneurial thinking with a deep appreciation for the unique requirements of patient-oriented healthcare."
        : isTr
        ? "Çalışmalarının temel hedefi, net kurumsal yapıları teşvik etmek, süreçleri verimli kılmak ve muayenehane ekiplerinin günlük idari yükünü hafifletmektir. Girişimci yaklaşımını hasta odaklı sağlık hizmetlerinin hassas gereksinimleriyle birleştirmektedir."
        : isAr
        ? "يهدف عمله إلى ترسيخ هياكل واضحة، ورفع كفاءة العمليات التشغيلية، وتخفيف الأعباء الإدارية والتنظيمية عن الكوادر الطبية في الممارسة اليومية، جامعاً بين الفكر الريادي والفهم الدقيق لمتطلبات الرعاية الصحية الموجهة نحو خدمة المريض."
        : "Ziel seiner Arbeit ist es, klare Strukturen zu fördern, Prozesse effizient zu gestalten und die Teams im Praxisalltag organisatorisch zu entlasten. Dabei verbindet er unternehmerisches Denken mit einem Verständnis für die besonderen Anforderungen einer patientenorientierten Gesundheitsversorgung.",
    ],

    boardTitle: isUz
      ? "Shifokorlar kengashi va klinik standartlar"
      : isRu
      ? "Врачебный совет и клинические стандарты"
      : isEn
      ? "Medical Advisory Board & Clinical Standards"
      : isTr
      ? "Tıbbi Danışma Kurulu ve Klinik Yönetişim"
      : isAr
      ? "المجلس الاستشاري الطبي والحوكمة السريرية"
      : "Der Ärztliche Beirat & Klinische Governance",
    boardDesc: isUz
      ? "Xoldingning yetakchi amaliyotchi shifokorlaridan iborat kollegial organ barcha sho'ba korxonalarda davolash protokollari (AWMF ko'rsatmalari) va bemorlar xavfsizligini ta'minlaydi."
      : isRu
      ? "Коллегиальный орган из ведущих практикующих врачей холдинга, определяющий клинические протоколы, контролирующий безопасность пациентов и развивающий образовательные программы."
      : isEn
      ? "A collegial board of leading senior clinicians that defines evidence-based pathways, oversees patient safety, and guides residency programs."
      : isTr
      ? "Kıdemli uzman hekimlerden oluşan disiplinler arası kurul; güncel kılavuzlara uygun tek tip tedavi kalitesini denetler ve uzmanlık eğitimlerini yönetir."
      : isAr
      ? "تضمن الهيئة الاستشارية متعددة التخصصات من كبار الأطباء الاستشاريين جودة رعاية موحدة ومبنية على أحدث الأدلة الطبية وتوجه برامج تدريب الأطباء."
      : "Das interdisziplinäre Kollegium aus leitenden Fachärzten sichert die einheitliche Behandlungsqualität nach aktuellen Leitlinien und steuert die Weiterbildung.",

    valuesEyebrow: isUz
      ? "BIZNING QADRIYATLARIMIZ"
      : isRu
      ? "НАШИ ЦЕННОСТИ"
      : isEn
      ? "OUR VALUES"
      : isTr
      ? "DEĞERLERİMİZ"
      : isAr
      ? "قيمنا الجوهرية"
      : "UNSERE WERTE",
    valuesHeading: isUz
      ? "Bizni nima o'ziga xos qiladi."
      : isRu
      ? "Что делает нас особенными."
      : isEn
      ? "What sets us apart."
      : isTr
      ? "Bizi özel kılan nedir?"
      : isAr
      ? "ما يميزنا ويصنع تفردنا"
      : "Das macht uns besonders.",

    val1Title: isUz
      ? "Ishonchli hamkor"
      : isRu
      ? "Надежный партнер"
      : isEn
      ? "Reliable Partner"
      : isTr
      ? "Güvenilir Ortak"
      : isAr
      ? "شريك موثوق"
      : "Verlässlicher Partner",
    val1Desc: isUz
      ? "O'zaro ishonch, ishonchlilik va umumiy maqsadlarga asoslangan uzoq muddatli hamkorlik."
      : isRu
      ? "Долгосрочное партнерство, основанное на взаимном доверии и уважении."
      : isEn
      ? "Long-term partnership built on mutual trust and respect."
      : isTr
      ? "Eşitler arası ve karşılıklı güvene dayalı uzun vadeli ortaklık."
      : isAr
      ? "شراكة استراتيجية طويلة الأمد تقوم على التقدير والثقة المتبادلة."
      : "Langfristige Partnerschaft auf Augenhöhe und gegenseitigem Vertrauen.",
    val2Title: isUz
      ? "Innovatsion yechimlar"
      : isRu
      ? "Инновационные решения"
      : isEn
      ? "Innovative Solutions"
      : isTr
      ? "Yenilikçi Çözümler"
      : isAr
      ? "حلول مبتكرة"
      : "Innovative Lösungen",
    val2Desc: isUz
      ? "Zamonaviy, barqaror va uzoqni ko'zlagan sog'liqni saqlash tizimini rivojlantirish."
      : isRu
      ? "Продвижение современного, устойчивого и дальновидного здравоохранения."
      : isEn
      ? "Advancing modern, resilient, and forward-looking healthcare."
      : isTr
      ? "Modern, sürdürülebilir ve ileriye dönük sağlık hizmetleri."
      : isAr
      ? "منظومة رعاية صحية حديثة ومستدامة واستشرافية للمستقبل."
      : "Moderne, zukunftsfähige und vorausschauende Gesundheitsversorgung.",
    val3Title: isUz
      ? "Jonli mas'uliyat"
      : isRu
      ? "Живая ответственность"
      : isEn
      ? "Living Responsibility"
      : isTr
      ? "Yaşayan Sorumluluk"
      : isAr
      ? "مسؤولية حية"
      : "Gelebte Verantwortung",
    val3Desc: isUz
      ? "Biz qilayotgan barcha ishlarda sifat, shaffoflik va insonparvarlik tamoyillariga sodiqlik."
      : isRu
      ? "Качество, прозрачность и человечность во всем, что мы делаем."
      : isEn
      ? "Quality, transparency, and humanity in everything we do."
      : isTr
      ? "Tüm eylemlerimizde kalite, şeffaflık ve insani duyarlılık."
      : isAr
      ? "جودة، شفافية، وإنسانية متأصلة في كل إجراء نقوم به."
      : "Qualität, Transparenz und Menschlichkeit in unserem gesamten Handeln.",
    val4Title: isUz
      ? "Insonlar kamoloti"
      : isRu
      ? "Развитие людей"
      : isEn
      ? "People Development"
      : isTr
      ? "Çalışan Gelişimi"
      : isAr
      ? "تطوير الكفاءات"
      : "Mitarbeiterförderung",
    val4Desc: isUz
      ? "Kuchli jamoa va sog'lom kelajak uchun xodimlarimizni qo'llab-quvvatlash va iste'dodlarni rivojlantirish."
      : isRu
      ? "Поддержка наших сотрудников и взращивание талантов для сильного будущего."
      : isEn
      ? "Empowering our staff and fostering talent for a strong tomorrow."
      : isTr
      ? "Güçlü bir gelecek için uzmanların ve potansiyellerin hedefe yönelik desteklenmesi."
      : isAr
      ? "تمكين مستمر للكوادر المتخصصة وصقل المواهب لغدٍ واعد."
      : "Gezielte Förderung von Fachkräften und Potenzialen für eine starke Zukunft.",

    ctaEyebrow: isUz
      ? "SOG'LOM KELAJAKNI BIRGALIKDA YARATAMIZ"
      : isRu
      ? "СОЗИДАЕМ ЗДОРОВОЕ БУДУЩЕЕ"
      : isEn
      ? "LET'S BUILD A HEALTHIER TOMORROW"
      : isTr
      ? "BİRLİKTE SAĞLIĞI ŞEKİLLENDİRELİM"
      : isAr
      ? "معاً نصنع مستقبل الصحة"
      : "GEMEINSAM GESUNDHEIT GESTALTEN",
    ctaHeading: isUz
      ? "Sog'lom kelajak yo'lida bizning hamkorimizga aylaning."
      : isRu
      ? "Станьте нашим партнером во имя здорового будущего."
      : isEn
      ? "Partner with us for a healthier future."
      : isTr
      ? "Daha sağlıklı bir geleceği bizimle birlikte inşa edin."
      : isAr
      ? "شاركنا في صياغة مستقبل صحي أكثر أماناً وإشراقاً."
      : "Gestalten Sie mit uns eine gesündere Zukunft.",
    ctaBtn: isUz
      ? "Biz bilan bog'lanish →"
      : isRu
      ? "Связаться с нами →"
      : isEn
      ? "Get in Touch →"
      : isTr
      ? "İletişime Geçin →"
      : isAr
      ? "تواصل معنا ←"
      : "Kontakt aufnehmen →",
  };

  const organigramColumns = [
    {
      colTitle: isUz
        ? "Ambulator va statsionar tibbiyot"
        : isRu
        ? "Амбулаторная и стационарная медицина"
        : isEn
        ? "Primary & Inpatient Medicine"
        : isTr
        ? "Ayakta ve Yatan Hasta Tıbbı"
        : isAr
        ? "الطب المتنقل والسريري"
        : "Ambulante & Stationäre Medizin",
      items: [
        {
          name: "“NabiOta” MVZ Zentrum für hausärztliche und fachärztliche Versorgung",
          sub: isUz
            ? "Oilaviy shifokorlik va ixtisoslashtirilgan tibbiy yordam"
            : isRu
            ? "Первичная и специализированная медицинская помощь"
            : isEn
            ? "Primary and specialist medical care"
            : isTr
            ? "Birinci basamak ve uzman hekimlik hizmetleri"
            : isAr
            ? "الرعاية الطبية الأولية والمتخصصة"
            : "Hausärztliche und fachärztliche Versorgung",
          badge: "§ 95 SGB V",
          href: `/${locale}/mvz-hausarzt-facharzt`,
          icon: StethoscopeIcon,
        },
        {
          name: "“NabiOta” Klinik Germany GmbH",
          sub: isUz
            ? "Tibbiy klinika (§ 30 GewO bo'yicha) — statsionar, kunduzgi va ambulator jarrohlik o'rinlari"
            : isRu
            ? "Медицинская клиника (по § 30 GewO) — стационарные, дневные и операционные центры"
            : isEn
            ? "Inpatient & Specialty Clinic (acc. to § 30 GewO) — Inpatient surgery & recovery"
            : isTr
            ? "Klinik Germany GmbH (§ 30 KH / GewO uyarınca) — Yataklı, günübirlik ve cerrahi tedavi merkezleri"
            : isAr
            ? "Klinik Germany GmbH (وفق § 30 GewO) — رعاية استشفائية سريرية وجراحية متكاملة"
            : "Klinik Germany GmbH (n. § 30 KH / GewO) — Stationäre, teilstationäre & operative Versorgung",
          badge: "§ 30 GewO",
          href: `/${locale}/nabiota-clinics-germany`,
          icon: BuildingStatsIcon,
        },
        {
          name: "“NabiOta” Rehabilitation Center",
          sub: isUz
            ? "Reabilitatsiya va terapiya markazi (Rehabilitation & Therapy GmbH) — ambulator harakat va nevrologik reabilitatsiya"
            : isRu
            ? "Центр реабилитации и терапии (Rehabilitation & Therapy GmbH) — физиотерапия, эрготерапия, логопедия"
            : isEn
            ? "Rehabilitation & Therapy Center — Physiotherapy, Occupational & Speech therapy"
            : isTr
            ? "Rehabilitasyon ve Terapi Merkezi (GmbH) — Fizyoterapi, Ergoterapi, Logopedi ve Medikal Egzersiz Terapisi"
            : isAr
            ? "مركز إعادة التأهيل والعلاج (GmbH) — علاج طبيعي، علاج وظيفي، علاج النطق، وتمارين تأهيلية"
            : "Rehabilitation & Therapy Center (GmbH) — Physiotherapie, Ergotherapie, Logopädie & MTT",
          badge: isTr ? "Ayakta Reha" : isAr ? "تأهيل متنقل" : "Ambulante Reha",
          href: `/${locale}/nabiota-rehabilitation`,
          icon: ActivityRehabIcon,
        },
      ],
    },
    {
      colTitle: isUz
        ? "Jarrohlik, diagnostika va parvarish"
        : isRu
        ? "Хирургия, диагностика и уход"
        : isEn
        ? "Surgery, Diagnostics & Care"
        : isTr
        ? "Cerrahi, Tanı ve Bakım"
        : isAr
        ? "الجراحة، التشخيص، والرعاية"
        : "Chirurgie, Diagnostik & Pflege",
      items: [
        {
          name: "“NabiOta” MVZ Chirurgie und Anästhesiologie",
          sub: isUz
            ? "Jarrohlik va anesteziologiya mutaxassisliklari"
            : isRu
            ? "Хирургические направления и анестезиология"
            : isEn
            ? "Surgical specialties and anesthesiology"
            : isTr
            ? "Cerrahi uzmanlıklar ve anesteziyoloji"
            : isAr
            ? "التخصصات الجراحية والتخدير"
            : "Chirurgische Fachbereiche und Anästhesiologie",
          badge: isTr ? "Ayakta Cerrahi" : isAr ? "جراحة اليوم الواحد" : "Ambulante OP",
          href: "https://my-bandscheibe.de/",
          icon: ScalpelIcon,
        },
        {
          name: "“NabiOta” Diagnostics GmbH",
          sub: isUz
            ? "Yuqori texnologiyali diagnostika: 3T MRT, Low-Dose KT, raqamli rentgen va ultratovush tekshiruvlari"
            : isRu
            ? "Высокотехнологичная диагностика: МРТ 3T, КТ Low-Dose, цифровой рентген, нейрофизиология (ЭМГ/ЭЭГ) и лабораторная логистика"
            : isEn
            ? "Advanced Diagnostics: 3T MRI, Low-Dose CT, X-ray, Neurophysiology (EMG/EEG) & Lab logistics"
            : isTr
            ? "Diagnostics GmbH (3T BT + MRG + Röntgen + Nörofizyoloji & Laboratuvar numune lojistiği)"
            : isAr
            ? "Diagnostics GmbH (أشعة مقطعية + 3T MRI + أشعة سينية + فسيولوجيا عصبية وإدارة العينات المخبرية)"
            : "Diagnostics GmbH (CT + MRT 3T + Rö + Neurophysiologie & Labor-Probenmanagement)",
          badge: "3T MRT / CT",
          href: `/${locale}/nabiota-diagnostics`,
          icon: ScannerMriIcon,
        },
        {
          name: "“NabiOta” HomeCare GmbH",
          sub: isUz
            ? "Patronaj va uyda parvarishlash: malakali hamshiralik yordami, intensiv parvarish va SGB XI bo'yicha kunduzgi parvarish"
            : isRu
            ? "Патронаж и уход на дому: квалифицированная сестринская помощь и специализированное лечение ран (Wundversorgung)"
            : isEn
            ? "In-Home Nursing Care: Qualified outpatient nursing & specialized wound care"
            : isTr
            ? "HomeCare GmbH (SGB V & XI uyarınca nitelikli hasta bakımı / uzmanlaşmış yara tedavisi)"
            : isAr
            ? "HomeCare GmbH (تمريض تخصصي معتمد / علاج متقدم للجروح وفق SGB V & XI)"
            : "HomeCare GmbH (Qualifizierte Pflege / spezialisierte Wundversorgung nach SGB V & XI)",
          badge: "HomeCare",
          href: `/${locale}/nabiota-homecare`,
          icon: HomeCareIcon,
        },
      ],
    },
    {
      colTitle: isUz
        ? "Kadrlar, ko'chmas mulk va ta'minot"
        : isRu
        ? "Кадры, недвижимость и снабжение"
        : isEn
        ? "Recruitment, Real Estate & Supplies"
        : isTr
        ? "İstihdam, Gayrimenkul ve Tedarik"
        : isAr
        ? "الكوادر، العقارات، والإمداد"
        : "Personal, Immobilien & Versorgung",
      items: [
        {
          name: "“NabiOta” Medical Recruitment",
          sub: isUz
            ? "Tibbiy rekruting xizmati (GmbH) — xalqaro shifokorlar va malakali hamshiralarni jalb qilish hamda Approbation dasturi"
            : isRu
            ? "Служба медицинского рекрутинга (GmbH) — привлечение врачей и медперсонала, нострификация и Approbation"
            : isEn
            ? "Medical Recruitment Services GmbH — Healthcare staffing & degree recognition (Approbation)"
            : isTr
            ? "Medical Recruitment Services GmbH (Tıbbi aracılık hizmeti & Approbation ruhsat refakati)"
            : isAr
            ? "Medical Recruitment Services GmbH (استقطاب الكوادر الطبية ومعادلة ترخيص Approbation)"
            : "Medical Recruitment Services GmbH (Med. Vermittlungsservice & Approbationsbegleitung)",
          badge: isTr ? "Uzman İstihdamı" : isAr ? "استقطاب الكوادر" : "Recruitment",
          href: `/${locale}/nabiota-medical-recruitment`,
          icon: TeamStatsIcon,
        },
        {
          name: "“NabiOta” Real Estate GmbH",
          sub: isUz
            ? "Tibbiy ko'chmas mulk — sog'liqni saqlash ob'ektlarini ishlab chiqish, qayta rejalashtirish va boshqarish"
            : isRu
            ? "Медицинская недвижимость — девелопмент, перепланировка и управление специализированными зданиями клиник и MVZ"
            : isEn
            ? "Medical Real Estate GmbH — Acquisition, clinic construction & medical facility management"
            : isTr
            ? "Real Estate GmbH (Medikal gayrimenkul, klinik planlama ve işletme konseptleri)"
            : isAr
            ? "Real Estate GmbH (العقارات الطبية، تطوير العيادات، ومفاهيم التشغيل)"
            : "Real Estate GmbH (Med. Immobilien, Praxisentwicklung & Betreiberkonzepte)",
          badge: isTr ? "Medikal Gayrimenkul" : isAr ? "العقارات الطبية" : "Real Estate",
          href: `/${locale}/nabiota-real-estate`,
          icon: RealEstateIcon,
        },
        {
          name: "“NabiOta” Sanitätshaus & Apotheke",
          sub: isUz
            ? "Ortopediya salonlari (Sanitätshaus GmbH), tibbiy texnika va dori-darmon ta'minoti bilan integratsiya"
            : isRu
            ? "Ортопедические салоны (Sanitätshaus GmbH), обеспечение медикаментами клиник и NabiOta Pharmacy"
            : isEn
            ? "Medical Supplies & NabiOta Pharmacy — Orthopedic aids, rehab products & clinical pharmacy"
            : isTr
            ? "İlaç Tedariki & Sanitätshaus GmbH (Medikal ortopedi araçları & NabiOta Eczanesi)"
            : isAr
            ? "الإمداد الدوائي وSanitätshaus GmbH (المعينات الطبية التعويضية وصيدلية NabiOta)"
            : "Arzneimittelversorgung & Sanitätshaus GmbH (Med. Hilfsmittel & NabiOta Pharmacy)",
          badge: isTr ? "Medikal Malzeme & Eczane" : isAr ? "معينات وصيدلية" : "Supplies & Pharmacy",
          href: `/${locale}/nabiota-sanitaetshaus`,
          icon: CrossPharmacyIcon,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF6] text-[#142318] selection:bg-[#EBDDC0] selection:text-[#142318]">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: HERO HEADER (Matching Reference 1:1)
        ══════════════════════════════════════════════════════════ */}
        <section dir="ltr" className="relative w-full min-h-[420px] sm:min-h-[460px] lg:h-[500px] lg:min-h-[500px] pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 overflow-hidden flex items-center bg-[#07150C] text-[#FAF8F5] border-b border-[#D5B878]/25">
          {/* Background: Modern Medical Doctors Team on the right - pulled back & sharp framing */}
          <div className="absolute inset-y-0 right-0 z-0 pointer-events-none overflow-hidden w-full sm:left-[28%] sm:w-[72%] lg:left-[35%] lg:w-[65%] xl:left-[38%] xl:w-[62%] 2xl:left-[40%] 2xl:w-[60%]">
            <Image
              src="/images/about/hero-doctors.webp"
              alt="NabiOta Health Group Germany Team"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 72vw, 62vw"
              className="object-cover object-center lg:object-center"
            />
            {/* Desktop right-side subtle blend */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r sm:from-[#07150C]/40 sm:via-[#07150C]/10 sm:to-transparent" />
          </div>

          {/* Desktop/Tablet SVG with Deep Forest Green Shape & Dual Glowing Golden Arcs */}
          <svg
            className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Clip path for the narrower left wing (620 at top to 800 at bottom) */}
              <clipPath id="aboutLeftWingClip">
                <path d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z" />
              </clipPath>

              <linearGradient id="aboutGoldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFC894" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#D4B06A" stopOpacity="1" />
                <stop offset="75%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="aboutGoldGradLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ECCF93" stopOpacity="0.08" />
                <stop offset="35%" stopColor="#ECCF93" stopOpacity="0.45" />
                <stop offset="75%" stopColor="#DFC894" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.08" />
              </linearGradient>
              <filter id="aboutGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="aboutDarkGreenFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#040F07" stopOpacity="0.15" />
                <stop offset="40%" stopColor="#040F07" stopOpacity="0.32" />
                <stop offset="70%" stopColor="#07180D" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0A1E13" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Botanical Gold Background Image inside the Left Wing (xMin anchored for lush left leaves) */}
            <image
              href="/images/botanical-gold-bg.webp"
              x="0"
              y="0"
              width="1440"
              height="600"
              preserveAspectRatio="xMinYMid slice"
              clipPath="url(#aboutLeftWingClip)"
              opacity="1"
            />

            {/* Subtle Dark Green shading overlay inside the Left Wing for crisp text contrast */}
            <path
              d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z"
              fill="url(#aboutDarkGreenFill)"
            />

            {/* Primary Glowing Golden Separator Arc Line (Narrower position) */}
            <path
              d="M 620,0 C 710,180 680,420 800,600"
              stroke="url(#aboutGoldGrad)"
              strokeWidth="2"
              fill="none"
              filter="url(#aboutGoldGlow)"
            />

            {/* Secondary Fine Golden Accent Curve */}
            <path
              d="M 645,0 C 735,185 705,430 825,600"
              stroke="url(#aboutGoldGradLight)"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* Mobile Background: Botanical texture + light transparent gradient */}
          <div className="sm:hidden absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/botanical-gold-bg.webp"
              alt=""
              fill
              className="object-cover object-left"
              priority
            />
            <div className="absolute inset-0 bg-[#07150C]/65" />
          </div>

          {/* Top subtle vignette for seamless fixed header blend */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#051208]/85 to-transparent pointer-events-none z-10" />

          <Container size="wide" className="relative z-20">
            <div className="max-w-xl lg:max-w-[520px] xl:max-w-[600px] pl-2 sm:pl-6 lg:pl-8 xl:pl-10">
              {/* Main Heading */}
              <h1 dir="auto" className="page-hero-title text-left font-serif text-[30px] sm:text-[38px] lg:text-[42px] xl:text-[46px] font-normal leading-[1.12] tracking-[-0.01em] text-white mb-4 sm:mb-5 break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.heroTitlePart1}
                <br />
                {t.heroTitlePart2}
              </h1>

              {/* Description */}
              <p dir="auto" className="hero-text-wrap text-left text-[13px] sm:text-[14px] text-[#D2DED5] leading-[1.65] font-sans max-w-xl mb-5 sm:mb-6 font-normal break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.heroDesc}
              </p>

              {/* 3 Feature Badges matching reference photo */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10 pt-1">
                {/* Badge 1: People at the center */}
                <div className="flex items-center gap-3">
                  <div className="text-[#ECCF96] flex items-center justify-center flex-shrink-0">
                    <PeopleCenterIcon className="w-7 h-7 stroke-[1.6]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[13px] sm:text-[13.5px] font-medium text-white tracking-wide leading-tight">
                      {t.badge1Title}
                    </span>
                    <span className="text-[11.5px] sm:text-[12px] font-normal text-[#9FB3A5] tracking-normal leading-tight mt-0.5">
                      {t.badge1Sub}
                    </span>
                  </div>
                </div>

                {/* Badge 2: Sustainable growth */}
                <div className="flex items-center gap-3">
                  <div className="text-[#ECCF96] flex items-center justify-center flex-shrink-0">
                    <ShieldIcon className="w-7 h-7 stroke-[1.6]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[13px] sm:text-[13.5px] font-medium text-white tracking-wide leading-tight">
                      {t.badge2Title}
                    </span>
                    <span className="text-[11.5px] sm:text-[12px] font-normal text-[#9FB3A5] tracking-normal leading-tight mt-0.5">
                      {t.badge2Sub}
                    </span>
                  </div>
                </div>

                {/* Badge 3: A healthier tomorrow */}
                <div className="flex items-center gap-3">
                  <div className="text-[#ECCF96] flex items-center justify-center flex-shrink-0">
                    <LeafIcon className="w-7 h-7 stroke-[1.6]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[13px] sm:text-[13.5px] font-medium text-white tracking-wide leading-tight">
                      {t.badge3Title}
                    </span>
                    <span className="text-[11.5px] sm:text-[12px] font-normal text-[#9FB3A5] tracking-normal leading-tight mt-0.5">
                      {t.badge3Sub}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: OUR ROOTS & HISTORY ("Опыт десятилетий.")
        ══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-14 sm:py-18 lg:py-20 border-b border-[#ECE7DC] relative">
          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left: Doctor-Patient Photo */}
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#EDE7D9] bg-white">
                <Image
                  src="/images/about/doctor-patient.webp"
                  alt="Ärztliche Betreuung bei NabiOta Health Group"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Right: History Text */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="font-serif text-[32px] sm:text-[38px] xl:text-[44px] font-normal leading-[1.14] text-[#142318] mb-5">
                  {t.rootsTitle1}
                  <br />
                  {t.rootsTitle2}
                </h2>

                <div className="space-y-4 text-[13.5px] sm:text-[14.5px] text-[#4E5650] leading-[1.72] font-sans">
                  <p>{t.rootsP1}</p>
                  <p>{t.rootsP2}</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: ÄRZTLICHE FÜHRUNG & GRÜNDERTEAM (PDF Pages 2-4)
            - MVZ Design with full-bleed right-photo fade & botanical watermark
        ══════════════════════════════════════════════════════════ */}
        <section className="relative pt-0 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF7F2] border-b border-[#ECE7DC] overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#EBDDC0]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#D5B878]/15 blur-3xl pointer-events-none" />

          {/* ── Hero Banner: Full-width banner with soft right-photo fade (MVZ Style) ── */}
          <div className="relative z-10 w-full overflow-hidden pb-8 sm:pb-10 lg:pb-12">
            {/* Soft Background Photo with smooth horizontal fade */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[58%] pointer-events-none overflow-hidden select-none">
              <Image
                src="/images/areas/consulting.webp"
                alt="Medical Leadership & Founder"
                fill
                className="object-cover object-center lg:object-right"
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {/* Horizontal gradient fade into page background #FAF7F2 */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] from-0% via-[#FAF7F2]/80 via-20% via-[#FAF7F2]/25 via-42% to-transparent to-75%" />
              {/* Vertical gradient fade for mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 via-15% to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] from-0% via-[#FAF7F2]/20 via-10% to-transparent hidden lg:block" />
            </div>

            {/* Botanical foliage watermark on far left (matching MVZ reference) */}
            <div className="absolute top-2 left-0 w-44 sm:w-56 h-72 pointer-events-none opacity-35 select-none sepia hue-rotate-[15deg]">
              <Image
                src="/images/areas/botanical-branch-clean.webp"
                alt=""
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>

            {/* Hero Content Container */}
            <Container size="wide" className="relative z-10 pt-8 sm:pt-12 lg:pt-14">
              <div className="max-w-6xl mx-auto">
                <div className="max-w-xl lg:max-w-2xl">
                  {/* Title with highlighted word in serif */}
                  <h2 className="font-serif text-[28px] sm:text-[38px] lg:text-[44px] text-[#142318] font-normal leading-[1.18] mb-3 sm:mb-3.5">
                    {t.leadershipHeading1}{" "}
                    <span className="font-serif text-[#C5A56A]">{t.leadershipHeading2}</span>
                  </h2>

                  {/* Lead text */}
                  <p className="text-[13px] sm:text-[14px] text-[#556057] leading-relaxed max-w-xl">
                    {t.leadershipSubtitle}
                  </p>
                </div>
              </div>
            </Container>
          </div>

          <Container size="wide" className="relative z-10 mt-6 sm:mt-8">
            <div className="max-w-6xl mx-auto">
              {/* Main Founder Spotlight Card */}
              <div className="bg-white rounded-[28px] lg:rounded-[32px] border border-[#EDE6D8] shadow-[0_10px_40px_-24px_rgba(20,35,24,0.14)] mb-10 sm:mb-12 relative overflow-hidden transition-all duration-300">
                {/* Upper grid: Portrait + Profile Summary */}
                <div className="grid grid-cols-1 lg:grid-cols-[32%_minmax(0,1fr)]">
                  {/* Left: portrait (fixed/natural, does not stretch) */}
                  <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-full bg-[#0D1D13] overflow-hidden">
                    <Image
                      src="/images/about/dr-kasim-fischer-rahimov.jpg"
                      alt={t.founderName}
                      fill
                      sizes="(min-width: 1024px) 36vw, 100vw"
                      className="object-cover object-[50%_15%]"
                    />
                  </div>

                  {/* Right: doctor information */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="font-serif text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#142318] leading-[1.12]">
                      {t.founderName}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] font-semibold tracking-wide text-[#8B7347] mt-1.5 font-sans">
                      {t.founderRole}
                    </p>

                    {/* Introductory core paragraphs */}
                    <div className="space-y-3.5 text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#4E5650] leading-[1.7] font-sans mt-5">
                      {t.founderIntroParagraphs.map((para: string, idx: number) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>

                    {/* Key Highlights (3 cards) - Compact & Shortened */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3.5">
                      {t.founderKeyPoints.map((point: { title: string; desc: string }, idx: number) => (
                        <div
                          key={idx}
                          className="bg-[#FAF7F0] border border-[#EBE3D3] rounded-xl p-2.5 sm:p-3 flex flex-col justify-start transition-all hover:border-[#D5B878]/70 hover:shadow-xs"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-lg bg-white border border-[#E8DFC8] text-[#1B3D2F] flex items-center justify-center shrink-0 shadow-2xs">
                              {idx === 0 && <Stethoscope className="w-3.5 h-3.5 text-[#1B3D2F]" />}
                              {idx === 1 && <HeartHandshake className="w-3.5 h-3.5 text-[#1B3D2F]" />}
                              {idx === 2 && <ShieldCheck className="w-3.5 h-3.5 text-[#1B3D2F]" />}
                            </div>
                            <h4 className="text-[12px] font-bold text-[#142318] leading-tight">
                              {point.title}
                            </h4>
                          </div>
                          <p className="text-[11px] text-[#5C645E] leading-snug font-sans">
                            {point.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Featured Guiding Principle Quote (Leitgedanke) */}
                    <div className="bg-[#FAF7F0] border border-[#E5DEC9] rounded-2xl p-4 my-2 shadow-xs">
                      <div className="flex items-start gap-3">
                        <Quote className="w-5 h-5 text-[#C5A859] shrink-0 mt-0.5" />
                        <p className="text-[13.5px] sm:text-[14px] font-serif italic text-[#1B3D2F] leading-relaxed">
                          {t.founderQuote}
                        </p>
                      </div>
                    </div>

                    {/* Expand/Collapse Toggle Button - Full Width, Background matches Card */}
                    <div className="mt-3.5 pt-0.5">
                      <button
                        type="button"
                        onClick={() => setIsFounderExpanded(!isFounderExpanded)}
                        className="w-full group inline-flex items-center justify-center gap-2 text-[13px] sm:text-[13.5px] font-semibold text-[#1B3D2F] hover:text-[#8B7347] bg-white hover:bg-[#FAF8F5] active:scale-[0.995] transition-all duration-200 py-3 px-5 rounded-2xl border border-[#EDE6D8] hover:border-[#D5B878] cursor-pointer shadow-xs"
                        aria-expanded={isFounderExpanded}
                      >
                        <span>{isFounderExpanded ? t.founderCollapseBtn : t.founderExpandBtn}</span>
                        {isFounderExpanded ? (
                          <ChevronUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 text-[#8B7347]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5 text-[#8B7347]" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom: FULL-WIDTH Expandable Section across the entire card container */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isFounderExpanded
                      ? "max-h-[2200px] opacity-100 border-t border-[#EDE6D8] bg-white"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-px bg-[#E2D8C3] flex-1" />
                      <h4 className="text-[12.5px] font-bold uppercase tracking-wider text-[#8B7347] font-sans px-2">
                        {t.founderExpandedTitle}
                      </h4>
                      <div className="h-px bg-[#E2D8C3] flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-[13.5px] sm:text-[14px] text-[#4E5650] leading-[1.8] font-sans">
                      <div className="space-y-4">
                        {t.founderExpandedParagraphs.slice(0, 3).map((para: string, idx: number) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                      <div className="space-y-4">
                        {t.founderExpandedParagraphs.slice(3).map((para: string, idx: number) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#EDE6D8]/60 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setIsFounderExpanded(false)}
                        className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#8B7347] hover:text-[#1B3D2F] transition-colors cursor-pointer"
                      >
                        <span>{t.founderCollapseBtn}</span>
                        <ChevronUp className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Azizbek Fischer-Rahimov Card (Son, Manager-Consultant) */}
              <div className="bg-white rounded-[28px] lg:rounded-[32px] border border-[#EDE6D8] shadow-[0_10px_40px_-24px_rgba(20,35,24,0.14)] mb-8 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[32%_minmax(0,1fr)]">
                  {/* Left: portrait */}
                  <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-full">
                    <Image
                      src="/images/about/son-rahimov.png"
                      alt={t.consultantName}
                      fill
                      sizes="(min-width: 1024px) 36vw, 100vw"
                      className="object-cover object-[50%_15%]"
                    />
                  </div>

                  {/* Right: consultant information */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="font-serif text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#142318] leading-[1.12]">
                      {t.consultantName}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] font-semibold tracking-wide text-[#8B7347] mt-1.5 font-sans">
                      {t.consultantRole}
                    </p>

                    <div className="space-y-3.5 text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#4E5650] leading-[1.7] font-sans mt-5">
                      {t.consultantParagraphs.map((para: string, idx: number) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4: MEDICAL ADVISORY BOARD (Values-page background design)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-10 sm:py-12 lg:py-14 bg-[#07160D] text-white overflow-hidden border-b border-[#D5B878]/20">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/values/leaves-bg.webp"
              alt="Botanical Background"
              fill
              sizes="100vw"
              className="object-cover object-[left_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#07160D]/80 to-[#07160D] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07160D]/65 via-[#07160D]/90 to-[#07160D] lg:hidden" />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="lg:ml-auto lg:w-[78%] xl:w-[75%]">
              <div className="max-w-xl mb-5 sm:mb-6">
                <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-white mb-2 sm:mb-2.5">
                  {t.boardTitle}
                </h2>
                <p className="text-[12.5px] sm:text-[13.5px] text-[#C2D2C5] leading-relaxed font-sans max-w-lg">
                  {t.boardDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                {[
                  {
                    Icon: Stethoscope,
                    title: isUz
                      ? "Terapevtik erkinlik"
                      : isRu
                      ? "Терапевтическая свобода"
                      : isEn
                      ? "Clinical Autonomy"
                      : isTr
                      ? "Serbest Tedavi Seçimi"
                      : isAr
                      ? "حرية اختيار العلاج"
                      : "Freie Therapiewahl",
                    desc: isUz
                      ? "Tijoriy rejalarsiz, faqat shifokorlik burchi va bemor manfaatlariga qat'iy rioya qilish."
                      : isRu
                      ? "Строгое следование врачебному долгу без навязанных планов по процедурам."
                      : isEn
                      ? "Strict adherence to medical duty without commercial treatment quotas."
                      : isTr
                      ? "Tedavi eden hekimler için hiçbir ekonomik vaka sayısı veya tedavi kotası dayatılmaz."
                      : isAr
                      ? "لا توجد أي حصص أو أهداف عددية أو علاجية اقتصادية مفروضة على الأطباء المعالجين."
                      : "Keine ökonomischen Fallzahl- oder Therapievorgaben für behandelnde Ärzte.",
                  },
                  {
                    Icon: ShieldCheck,
                    title: isUz
                      ? "AWMF va CIRS sifati"
                      : isRu
                      ? "Качество AWMF & CIRS"
                      : isEn
                      ? "AWMF & CIRS Guidelines"
                      : isTr
                      ? "AWMF Kılavuzları & CIRS"
                      : isAr
                      ? "إرشادات AWMF ونظام CIRS"
                      : "AWMF-Leitlinien & CIRS",
                    desc: isUz
                      ? "Fanlararo konsiliumlar va hodisalar monitoringi (CIRS) orqali xatolarni erta oldini olish tizimi."
                      : isRu
                      ? "Междисциплинарные консилиумы и система контроля инцидентов CIRS."
                      : isEn
                      ? "Regular case conferences and active clinical incident reporting."
                      : isTr
                      ? "Disiplinler arası kalite çemberleri ve sistematik CIRS hata bildirim sistemi."
                      : isAr
                      ? "حلقات جودة متعددة التخصصات ونظام إبلاغ وتحليل للأخطاء الطبية (CIRS)."
                      : "Interdisziplinäre Qualitätszirkel und systematisches CIRS-Fehlermeldesystem.",
                  },
                  {
                    Icon: GraduationCap,
                    title: isUz
                      ? "Ordinatorlarni o'qitish"
                      : isRu
                      ? "Обучение ординаторов"
                      : isEn
                      ? "Residency Training"
                      : isTr
                      ? "Uzman Hekimlik Eğitimi"
                      : isAr
                      ? "التدريب التخصصي للأطباء"
                      : "Facharzt-Weiterbildung",
                    desc: isUz
                      ? "Mintaqada yosh shifokorlar va mutaxassislarni tayyorlash bo'yicha rasmiy vakolatlar."
                      : isRu
                      ? "Официальные полномочия на подготовку молодых специалистов в MVZ."
                      : isEn
                      ? "Accredited residency authorizations for junior doctors across our MVZ network."
                      : isTr
                      ? "Genç hekimlerin uzmanlık eğitimi için akredite resmi eğitim yetkileri."
                      : isAr
                      ? "صلاحيات وتراخيص أكاديمية معتمدة لتدريب وتأهيل الأطباء المقيمين والشباب."
                      : "Akkreditierte Weiterbildungsbefugnisse zur Ausbildung junger Mediziner.",
                  },
                  {
                    Icon: HeartHandshake,
                    title: isUz
                      ? "Yaxlit konsiliumlar"
                      : isRu
                      ? "Сквозные консилиумы"
                      : isEn
                      ? "Interdisciplinary Care"
                      : isTr
                      ? "Sektörler Arası Eşgüdüm"
                      : isAr
                      ? "تنسيق متكامل عابر للقطاعات"
                      : "Sektorübergreifend",
                    desc: isUz
                      ? "Terapevtlar, jarrohlar, diagnostlar va reabilitatsiya xizmati o'rtasida to'g'ridan-to'g'ri muloqot."
                      : isRu
                      ? "Прямой диалог терапевтов, хирургов, диагностов и службы реабилитации."
                      : isEn
                      ? "Direct communication between primary care, surgeons, imaging, and rehab."
                      : isTr
                      ? "Aile hekimleri, cerrahlar, tanı ve rehabilitasyon arasında doğrudan koordinasyon."
                      : isAr
                      ? "تنسيق مباشر ومستمر بين أطباء الأسرة، الجراحين، مراكز التشخيص، والتأهيل."
                      : "Direkte Abstimmung zwischen Hausärzten, Operateuren, Diagnostik und Reha.",
                  },
                ].map(({ Icon, title, desc }, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[#ECCF96] mb-2.5 flex items-center transition-transform group-hover:scale-105">
                        <Icon className="w-7 h-7 stroke-[1.6]" />
                      </div>
                      <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-white mb-1 group-hover:text-[#ECCF96] transition-colors leading-snug">
                        {title}
                      </h3>
                      <p className="text-[11px] sm:text-[11.5px] text-[#A6B8AA] leading-snug font-sans">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5: ORGANIZATIONAL STRUCTURE (NabiOta® Health Group Germany GmbH)
            - Background: photo1.webp
            - Compact, premium corporate organizational hierarchy matching Photo 2
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-8 sm:py-10 lg:py-12 border-b border-[#ECE7DC] overflow-hidden bg-[#FAF8F4]">
          {/* Background: photo1.webp with subtle edge framing */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/photo1.webp"
              alt="Organizational background"
              fill
              priority
              sizes="100vw"
              className="w-full h-full object-fill object-center"
            />
          </div>

          <Container size="wide" className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-5 sm:mb-6">
              <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[40px] font-normal text-[#142318] leading-[1.16]">
                {t.orgHeading}
              </h2>
            </div>

            {/* Holding Top Card: Noticeably larger, lighter vivid forest green, larger icon (matching Photo 2) */}
            <div className="flex justify-center mb-0">
              <div className="w-full max-w-[680px] sm:max-w-[760px] lg:max-w-[800px] bg-gradient-to-r from-[#0C3322] to-[#0A2A1C] text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl border border-[#D5B878]/80 shadow-xl flex items-center gap-4 sm:gap-5 text-left">
                <div className="text-[#DEC085] flex items-center justify-center flex-shrink-0">
                  <BuildingStatsIcon className="w-9 h-9 sm:w-10 sm:h-10 stroke-[1.6]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-[19px] sm:text-[22px] lg:text-[24px] font-normal text-white tracking-wide truncate leading-tight">
                    “NabiOta” Health Group Germany GmbH
                  </h3>
                  <p className="text-[12px] sm:text-[12.5px] text-[#A8C2B1] mt-1 font-sans">
                    {isUz
                      ? "Xolding / Konsern • Mönchengladbach"
                      : isRu
                      ? "Холдинг / Концерн • Мёнхенгладбах"
                      : isEn
                      ? "Holding / Group • Mönchengladbach"
                      : isTr
                      ? "Holding / Grup • Mönchengladbach"
                      : isAr
                      ? "المجموعة القابضة • مونشنغلادباخ"
                      : "Holding / Konzern • Mönchengladbach"}
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting Tree SVG from Holding into 3 Pillars (Compact vertical height) */}
            <div className="hidden lg:block w-full max-w-6xl mx-auto pointer-events-none">
              <svg className="w-full h-8" viewBox="0 0 1000 32" fill="none" preserveAspectRatio="none">
                {/* Central drop stem */}
                <line x1="500" y1="0" x2="500" y2="16" stroke="#C5A56A" strokeWidth="1.5" />
                {/* Horizontal distribution bar */}
                <line x1="167" y1="16" x2="833" y2="16" stroke="#C5A56A" strokeWidth="1.5" />
                {/* Drop lines into 3 columns */}
                <line x1="167" y1="16" x2="167" y2="32" stroke="#C5A56A" strokeWidth="1.5" />
                <line x1="500" y1="16" x2="500" y2="32" stroke="#C5A56A" strokeWidth="1.5" />
                <line x1="833" y1="16" x2="833" y2="32" stroke="#C5A56A" strokeWidth="1.5" />
              </svg>
            </div>

            {/* 3 Pillars Grid with compact, identical-height cards (matching Photo 2) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto mt-4 lg:mt-0">
              {organigramColumns.map((col, cIdx) => (
                <div key={cIdx} className="flex flex-col gap-3 relative h-full">
                  {/* Category Heading with subtle thin horizontal decorative lines */}
                  <div className="flex items-center justify-center gap-2 pb-0.5">
                    <span className="h-[1px] w-5 sm:w-6 bg-[#C5A56A]/50 shrink-0"></span>
                    <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.16em] uppercase text-[#A07D3E] font-sans whitespace-nowrap">
                      {col.colTitle}
                    </span>
                    <span className="h-[1px] w-5 sm:w-6 bg-[#C5A56A]/50 shrink-0"></span>
                  </div>

                  <div className="grid flex-1 grid-rows-3 gap-3">
                  {col.items.map((item, rIdx) => {
                    const IconComp = item.icon;
                    return (
                      <Link
                        key={rIdx}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group h-full min-h-[170px] bg-white/95 backdrop-blur-xs rounded-xl sm:rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878] p-3.5 sm:p-4 flex flex-col justify-between shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:shadow-md transition-all hover:-translate-y-0.5"
                      >
                        <div>
                          {/* Header: icon left, badge + title stacked on the right */}
                          <div className="flex items-center gap-3.5 mb-2">
                            <div className="text-[#173824] group-hover:text-[#8C6D2B] flex items-center justify-center shrink-0 transition-colors">
                              <IconComp className="w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 stroke-[1.6]" />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col items-start gap-1">
                              <h4 className="font-serif font-bold text-[15px] sm:text-[16px] text-[#142318] leading-snug group-hover:text-[#B89650] transition-colors">
                                {item.name}
                              </h4>
                            </div>
                          </div>

                          <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-[1.55] font-sans">
                            {item.sub}
                          </p>
                        </div>

                        {/* Arrow link anchored at bottom-right without circle */}
                        <div className="pt-1 flex justify-end">
                          <div className="text-[#B89650] group-hover:text-[#C5A56A] flex items-center justify-center transition-all shrink-0">
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 6: AUFGABEN UND UNTERNEHMENSGEGENSTAND DER HOLDING (PDF II) */}
        <HoldingPurposeSection locale={locale} />

        {/* ══════════════════════════════════════════════════════════
            SECTION 7: MISSION & VISION ("Что нами движет") + 4 STATS BAR
        ══════════════════════════════════════════════════════════ */}
        <section className="bg-[#FAF8F5] py-14 sm:py-18 lg:py-20 border-b border-[#ECE7DC]">
          <Container size="wide">
            {/* Top: Left Header + Right 2 Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12 sm:mb-16">
              {/* Left: Mission & Vision Heading */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal text-[#142318] leading-[1.15] mb-4">
                  {t.missionHeading}
                </h2>
                <p className="text-[13.5px] sm:text-[14px] text-[#5A635B] leading-[1.7] font-sans max-w-md">
                  {t.missionLead}
                </p>
              </div>

              {/* Right: 2 Distinct White Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Card 1: Our Mission */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EDE8DE] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#D5B878] hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-[#B89650] flex items-center mb-3">
                      <TargetIcon className="w-7.5 h-7.5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-sans text-[16px] font-bold text-[#142318] mb-2">
                      {t.cardMissionTitle}
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] text-[#5A635B] leading-relaxed">
                      {t.cardMissionText}
                    </p>
                  </div>
                </div>

                {/* Card 2: Our Vision */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EDE8DE] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#D5B878] hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-[#B89650] flex items-center mb-3">
                      <VisionEyeIcon className="w-7.5 h-7.5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-sans text-[16px] font-bold text-[#142318] mb-2">
                      {t.cardVisionTitle}
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] text-[#5A635B] leading-relaxed">
                      {t.cardVisionText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: 4 Key Stats Bar in single horizontal row with vertical dividers */}
            <div className="bg-white rounded-2xl border border-[#EDE8DE] shadow-[0_2px_8px_rgba(0,0,0,0.02)] py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-[#EDE7DC]">
                {/* Stat 1 */}
                <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6">
                  <div className="text-[#B89650] flex items-center justify-center flex-shrink-0">
                    <TeamStatsIcon className="w-8 h-8 stroke-[1.6]" />
                  </div>
                  <div>
                    <span className="block font-serif text-[28px] sm:text-[32px] font-bold text-[#142318] leading-none mb-1">
                      {t.stat1Num}
                    </span>
                    <span className="block text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                      {t.stat1Label}
                    </span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6">
                  <div className="text-[#B89650] flex items-center justify-center flex-shrink-0">
                    <BuildingStatsIcon className="w-8 h-8 stroke-[1.6]" />
                  </div>
                  <div>
                    <span className="block font-serif text-[28px] sm:text-[32px] font-bold text-[#142318] leading-none mb-1">
                      {t.stat2Num}
                    </span>
                    <span className="block text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                      {t.stat2Label}
                    </span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6">
                  <div className="text-[#B89650] flex items-center justify-center flex-shrink-0">
                    <HandshakeIcon className="w-8 h-8 stroke-[1.6]" />
                  </div>
                  <div>
                    <span className="block font-serif text-[28px] sm:text-[32px] font-bold text-[#142318] leading-none mb-1">
                      {t.stat3Num}
                    </span>
                    <span className="block text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                      {t.stat3Label}
                    </span>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6">
                  <div className="text-[#B89650] flex items-center justify-center flex-shrink-0">
                    <HeartStatsIcon className="w-8 h-8 stroke-[1.6]" />
                  </div>
                  <div>
                    <span className="block font-serif text-[28px] sm:text-[32px] font-bold text-[#142318] leading-none mb-1">
                      {t.stat4Num}
                    </span>
                    <span className="block text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                      {t.stat4Label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 8: STRATEGIC DEVELOPMENT (Two-Phase Structure)
            - Background: photo2.webp
            - Wider blocks, tighter section height, larger serif numerals, larger right icons (matching Photo 1)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-8 sm:py-10 lg:py-12 border-b border-[#ECE7DC] overflow-hidden bg-[#FAF6EE]">
          {/* Background: photo2.webp with subtle edge framing */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/photo2.webp"
              alt="Two-Phase Strategy Background"
              fill
              priority
              sizes="100vw"
              className="w-full h-full object-fill object-center"
            />
          </div>

          <Container size="wide" className="relative z-10">
            {/* Header: Kept exactly unchanged in wording and style */}
            <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
              <h3 className="font-serif text-[26px] sm:text-[32px] lg:text-[36px] font-normal text-[#142318] leading-[1.2]">
                {t.twoPhaseTitle}
              </h3>
              <p className="text-[12px] sm:text-[13px] text-[#556057] mt-1.5 leading-relaxed font-sans max-w-xl mx-auto">
                {t.twoPhaseDesc}
              </p>
            </div>

            {/* Two wide phase cards side by side (matching Photo 1: wider width max-w-6xl) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto items-stretch">
              {/* Card 1: Phase 1 */}
              <div className="h-full bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#EAE4D7] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  {/* Card Header: Large serif numeral 1 (left) + Title + Large Circular Icon (right) */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B2317] border border-[#163B27] text-white font-serif text-2xl sm:text-3xl font-normal flex items-center justify-center shrink-0 shadow-md">
                      1
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-[17px] sm:text-[19px] lg:text-[20px] font-bold text-[#142318] leading-snug">
                        {t.phase1Title}
                      </h4>
                    </div>
                    <div className="text-[#1E3B29] flex items-center justify-center shrink-0 ml-auto">
                      <Users className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.6]" />
                    </div>
                  </div>

                  {/* Body Text */}
                  <p className="text-[12.5px] sm:text-[13px] text-[#4E5650] leading-[1.65] font-sans mb-4">
                    {t.phase1Desc}
                  </p>
                </div>

                {/* Highlight / Information Box: Compact secondary layer */}
                <div className="p-4 rounded-2xl bg-[#F4EFE6]/90 border border-[#EAE4D7] flex flex-col justify-between mt-auto">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#B89650] shrink-0" />
                      <span className="text-[12px] sm:text-[12.5px] font-bold text-[#142318]">
                        {isUz
                          ? "1-bosqichdagi asosiy faoliyatlar"
                          : isRu
                          ? "Ключевые активности в Фазе 1"
                          : isEn
                          ? "Key Activities in Phase 1"
                          : isTr
                          ? "Aşama 1 Temel Faaliyetleri"
                          : isAr
                          ? "الأنشطة المركزية في المرحلة الأولى"
                          : "Zentrale Aktivitäten in Phase 1"}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-[11.5px] sm:text-[12px] leading-snug text-[#4E5650] font-sans pl-0.5">
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>
                          {isUz
                            ? "MVZ tuzilmasini shakllantirish va ishga tushirish"
                            : isRu
                            ? "Формирование и запуск структуры MVZ"
                            : isEn
                            ? "Establishment of the MVZ structure"
                            : isTr
                            ? "MVZ yapısının kurulması ve faaliyete geçirilmesi"
                            : isAr
                            ? "بناء وإطلاق شبكة مراكز MVZ"
                            : "Aufbau der MVZ-Struktur"}
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>
                          {isUz
                            ? "Dr. Fischer-Rahimovning ta'sischi shifokor sifatidagi ishtiroki"
                            : isRu
                            ? "Участие д-ра Фишер-Рахимова как врача-учредителя"
                            : isEn
                            ? "Founding equity of Dr. Fischer-Rahimov"
                            : isTr
                            ? "Dr. Fischer-Rahimov'un kurucu hekim olarak ortaklığı"
                            : isAr
                            ? "مساهمة د. فيشر-رحيموف كطبيب معتمد مؤسس"
                            : "Beteiligung von Dr. Fischer-Rahimov"}
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>
                          {isUz
                            ? "Keyingi sho'ba korxonalarni tayyorlash"
                            : isRu
                            ? "Подготовка дальнейших дочерних обществ"
                            : isEn
                            ? "Preparation of additional subsidiaries"
                            : isTr
                            ? "Diğer iştiraklerin ve şirketlerin hazırlanması"
                            : isAr
                            ? "التحضير للشركات والكيانات التابعة الإضافية"
                            : "Vorbereitung weiterer Beteiligungen"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 2: Phase 2 */}
              <div className="h-full bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#EAE4D7] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  {/* Card Header: Large serif numeral 2 (left) + Title + Large Circular Icon (right) */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B2317] border border-[#163B27] text-white font-serif text-2xl sm:text-3xl font-normal flex items-center justify-center shrink-0 shadow-md">
                      2
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-[17px] sm:text-[19px] lg:text-[20px] font-bold text-[#142318] leading-snug">
                        {t.phase2Title}
                      </h4>
                    </div>
                    <div className="text-[#1E3B29] flex items-center justify-center shrink-0 ml-auto">
                      <Building2 className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.6]" />
                    </div>
                  </div>

                  {/* Body Text */}
                  <p className="text-[12.5px] sm:text-[13px] text-[#4E5650] leading-[1.65] font-sans mb-4">
                    {t.phase2Desc}
                  </p>
                </div>

                {/* Highlight / Information Box: Compact secondary layer */}
                <div className="p-4 rounded-2xl bg-[#F4EFE6]/90 border border-[#EAE4D7] flex flex-col justify-between mt-auto">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#B89650] shrink-0" />
                      <span className="text-[12px] sm:text-[12.5px] font-bold text-[#142318]">
                        {isUz
                          ? "Boshqaruvning asosiy tamoyillari"
                          : isRu
                          ? "Ключевые принципы управления"
                          : isEn
                          ? "Central Governance Principles"
                          : isTr
                          ? "Merkezi Yönetişim İlkeleri"
                          : isAr
                          ? "مبادئ الحوكمة المركزية"
                          : "Zentrale Governance-Prinzipien"}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-[11.5px] sm:text-[12px] leading-snug text-[#4E5650] font-sans pl-0.5">
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>
                          {isUz
                            ? "Shifokor siri va ma'lumotlarni qat'iy himoya qilish (DSGVO)"
                            : isRu
                            ? "Врачебная тайна и строгая защита данных (DSGVO)"
                            : isEn
                            ? "Medical confidentiality & strict data protection"
                            : isTr
                            ? "Tıbbi sır saklama yükümlülüğü ve sıkı veri koruması (GDPR/DSGVO)"
                            : isAr
                            ? "السرية الطبية وحماية البيانات الصارمة (DSGVO)"
                            : "Ärztliche Schweigepflicht & strenger Datenschutz (DSGVO)"}
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>
                          {isUz
                            ? "Markaziy boshqaruv: IT, moliya, xaridlar va marketing"
                            : isRu
                            ? "Центральное управление: IT, финансы, закупки и маркетинг"
                            : isEn
                            ? "Central management: IT, Finance, Purchasing & Marketing"
                            : isTr
                            ? "Merkezi yönetim: IT, Finans, Satın Alma & Pazarlama"
                            : isAr
                            ? "الإدارة المركزية: تكنولوجيا المعلومات، المالية، المشتريات، والتسويق"
                            : "Zentrales Management: IT, Finanzen, Einkauf & Marketing"}
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#142318] font-bold">•</span>
                        <span>
                          {isUz
                            ? "DIN EN ISO sifat menejmenti va bemorlar xavfsizligi"
                            : isRu
                            ? "Менеджмент качества DIN EN ISO и безопасность пациентов"
                            : isEn
                            ? "DIN EN ISO quality management & patient safety"
                            : isTr
                            ? "DIN EN ISO kalite yönetimi & hasta güvenliği"
                            : isAr
                            ? "إدارة الجودة وفق DIN EN ISO وسلامة المرضى"
                            : "Qualitätsmanagement nach DIN EN ISO & Patientensicherheit"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Target-model disclaimer (PDF Section I) */}
            <div className="mt-6 sm:mt-8 max-w-4xl mx-auto flex items-start gap-3 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/80 border border-[#E3DAC6] shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#B89650] shrink-0 mt-0.5" />
              <p className="text-[12px] sm:text-[12.5px] text-[#4E5650] leading-relaxed font-sans">
                <strong className="font-semibold text-[#142318]">
                  {isUz
                    ? "Maqsadli model. "
                    : isRu
                    ? "Целевая модель. "
                    : isEn
                    ? "Target model. "
                    : isTr
                    ? "Hedef model. "
                    : isAr
                    ? "النموذج المستهدف. "
                    : "Zielmodell. "}
                </strong>
                {isUz
                  ? "Keltirilgan organogrammalar maqsadli modelni tavsiflaydi. Amaldagi korporativ huquqiy tuzilma tijorat reestridagi ma'lumotlarga mos keladi."
                  : isRu
                  ? "Представленные органиграммы описывают целевую модель. Текущая структура собственников и допуск каждого существующего MVZ устанавливаются отдельно на основании его списка участников (Gesellschafterliste) и решений о допуске (Zulassungsbescheide). Регистрация холдинга в торговом реестре не заменяет допуск MVZ."
                  : isEn
                  ? "The organizational charts shown describe a target model. The current ownership structure and approval of each existing MVZ must be determined separately on the basis of its shareholder list and approval notices. The commercial register entry of the holding does not replace an MVZ approval."
                  : isTr
                  ? "Sunulan organizasyon şemaları bir hedef modeli tanımlamaktadır. Mevcut her bir MVZ'nin güncel mülkiyet yapısı ve faaliyet izni, ortaklar listesi ve izin kararlarına dayalı olarak ayrıca tespit edilir. Holdingin ticaret siciline tescili, MVZ faaliyet izninin yerine geçmez."
                  : isAr
                  ? "تصف المخططات التنظيمية المعروضة نموذجاً مستهدفاً. ويتم تحديد هيكل الملكية الحالي والتراخيص لكل مركز MVZ قائم بشكل منفصل بناءً على قائمة الشركاء وإخطارات الاعتماد الرسمية. ولا يغني قيد الشركة القابضة في السجل التجاري عن ترخيص تشغيل MVZ."
                  : "Die vorliegenden Organigramme beschreiben ein Zielmodell. Die aktuelle Eigentümerstruktur und Zulassung jedes bestehenden MVZ sind anhand seiner Gesellschafterliste und Zulassungsbescheide gesondert festzustellen. Die Handelsregistereintragung der Holding ersetzt keine MVZ-Zulassung."}
              </p>
            </div>

            {/* Legal Footnote: small font size and subtle weight */}
            <p className="text-center text-[10.5px] sm:text-[11px] text-[#78857C] mt-5 sm:mt-6 font-sans">
              {isUz
                ? "Ma'lumotlar notarial ustav loyihasi va amaldagi huquqiy me'yorlarga muvofiq taqdim etilgan."
                : isRu
                ? "Сведения в соответствии с нотариальным проектом устава и положениями § 95 SGB V. По состоянию на 4 октября 2026 г."
                : isEn
                ? "In accordance with notarized corporate filings and statutory § 95 SGB V regulations. As of 4 October 2026."
                : isTr
                ? "Noter onaylı kuruluş belgelerine ve § 95 SGB V hükümlerine göre hazırlanmıştır. Durum: 4 Ekim 2026."
                : isAr
                ? "وفقاً لوثائق التأسيس الموثقة وأحكام المادة 95 من القانون الاجتماعي الخامس (SGB V). التحديث: 4 أكتوبر 2026."
                : "Gemäß notarieller Gründungsdokumentation und den Vorgaben des § 95 SGB V. Stand: 4. Oktober 2026."}
            </p>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 9: UNSERE WERTE ("Das macht uns besonders.")
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-14 sm:py-18 lg:py-20 border-b border-[#ECE7DC] overflow-hidden bg-[#FAF8F5]">
          {/* Background: photo2.png from public/images/about/ */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/photo2.webp"
              alt="Values background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <Container size="wide" className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal text-[#142318] leading-[1.15]">
                {t.valuesHeading}
              </h2>
            </div>

            {/* 4 Value Cards in a single row - horizontal layout matching screenshot 1:1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878] p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all group">
                <div className="text-[#B89650] group-hover:text-[#9C8145] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <HandshakeIcon className="w-8 h-8 stroke-[1.6]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-[#142318] mb-0.5 group-hover:text-[#BFA267] transition-colors leading-snug">
                    {t.val1Title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                    {t.val1Desc}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878] p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all group">
                <div className="text-[#B89650] group-hover:text-[#9C8145] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <LightbulbValuesIcon className="w-8 h-8 stroke-[1.6]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-[#142318] mb-0.5 group-hover:text-[#BFA267] transition-colors leading-snug">
                    {t.val2Title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                    {t.val2Desc}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878] p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all group">
                <div className="text-[#B89650] group-hover:text-[#9C8145] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <LeafIcon className="w-8 h-8 stroke-[1.6]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-[#142318] mb-0.5 group-hover:text-[#BFA267] transition-colors leading-snug">
                    {t.val3Title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                    {t.val3Desc}
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878] p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all group">
                <div className="text-[#B89650] group-hover:text-[#9C8145] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <TeamStatsIcon className="w-8 h-8 stroke-[1.6]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-[#142318] mb-0.5 group-hover:text-[#BFA267] transition-colors leading-snug">
                    {t.val4Title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug">
                    {t.val4Desc}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 10: DARK CALL-TO-ACTION PRE-FOOTER BANNER
        ══════════════════════════════════════════════════════════ */}
        <section className="bg-[#07160D] text-white py-12 sm:py-14 relative overflow-hidden">
          {/* Botanical leaf silhouette watermark accents */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
            <Image
              src="/images/bacground.webp"
              alt="Watermark"
              fill
              className="object-cover object-center"
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
              <div>
                <h2 className="font-serif text-[24px] sm:text-[30px] lg:text-[34px] font-normal text-white leading-tight">
                  {t.ctaHeading}
                </h2>
              </div>

              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF96] to-[#D8B772] text-[#142217] font-sans font-semibold text-xs sm:text-sm tracking-wide shadow-lg hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all duration-300 flex-shrink-0"
              >
                <span>{t.ctaBtn}</span>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
