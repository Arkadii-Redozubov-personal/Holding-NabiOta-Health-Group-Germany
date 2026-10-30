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
  Briefcase,
  Users,
  GitFork,
  Link2,
  FileSearch,
} from "@/lib/icons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SupportedLocale } from "@/lib/i18n";
import { MvzContractSection } from "@/components/sections/MvzContractSection";
import { getPartnersPageTranslations } from "@/data/translations/partners-page";

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

  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const {
    heroData,
    heroBadges,
    pillars,
    processSteps,
  } = getPartnersPageTranslations(locale);

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF6] text-[#142318] selection:bg-[#EBDDC0] selection:text-[#142318]">
      <Header currentLocale={locale} />

      <main className="flex-1 pb-0">
        {/* 1. PageHero */}
        <PageHero
          locale={locale}
          title={heroData.title}
          eyebrow={heroData.eyebrow}
          description={heroData.desc}
          badges={heroBadges}
          imageSrc="/images/partners/artium.webp"
          imagePosition="object-[center_35%]"
        />

        {/* ========================================================================= */}
        {/* SECTION 2: DIE 4 PARTNERSCHAFTSMODELLE (INTERACTIVE CARDS WITH MODALS)    */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-18 bg-[#FAF8F4] border-t border-[#F0ECE1]">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div className="space-y-2.5 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
                  {isUz
                    ? "Sog'liqni saqlashning asosiy ishtirokchilari uchun maqsadli yechimlar"
                    : isRu
                    ? "Целевые решения для ключевых участников здравоохранения"
                    : isEn
                    ? "Tailored Solutions for Healthcare Stakeholders"
                    : isTr
                    ? "Sağlık Paydaşları İçin Özel Çözümler"
                    : isAr
                    ? "حلول مخصصة للجهات الفاعلة في الرعاية الصحية"
                    : "Passgenaue Lösungen für Ärzte, Kliniken und Partner"}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                  {isUz
                    ? "Hamkorlikning to'rtta ixtisoslashtirilgan modeli - praksis vorisligidan tortib institutsional investitsiyalargacha."
                    : isRu
                    ? "Четыре специализированные модели сотрудничества, разработанные в строгом соответствии с немецким законодательством (SGB V, GewO, ApoG)."
                    : isEn
                    ? "Four specialized collaboration tracks engineered under rigorous German healthcare legislation (SGB V, GewO, ApoG)."
                    : isTr
                    ? "Alman sağlık pazarının yasal ve düzenleyici gereksinimlerine göre uyarlanmış dört özel iş birliği modeli."
                    : isAr
                    ? "أربعة مسارات تعاون متخصصة مصممة وفقاً للمتطلبات التشريعية والتنظيمية للرعاية الصحية في ألمانيا."
                    : "Vier spezialisierte Kooperationsmodelle, abgestimmt auf die regulatorischen Anforderungen des deutschen Gesundheitsmarktes."}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B8934A] hover:text-[#0B2516] transition-colors group"
                >
                  <span>
                    {isUz
                      ? "Konsultatsiyaga yozilish"
                      : isRu
                      ? "Записаться на консультацию"
                      : isEn
                      ? "Schedule consultation"
                      : isTr
                      ? "İş Birliği Görüşmesi Ayarlayın"
                      : isAr
                      ? "حجز موعد لبحث التعاون"
                      : "Kooperationsgespräch vereinbaren"}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 4 Pillars Grid in all divisions card style (Photo 2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {pillars.map((pillar) => {
                const IconComponent =
                  pillar.iconType === "doctor"
                    ? Stethoscope
                    : pillar.iconType === "hospital"
                    ? Building2
                    : pillar.iconType === "investor"
                    ? TrendingUp
                    : Landmark;

                return (
                  <div
                    key={pillar.id}
                    onClick={() => setSelectedPillar(pillar)}
                    className="group bg-white rounded-2xl p-2.5 sm:p-3 border border-[#EDE8DE] hover:border-[#D5B878] shadow-[0_3px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(213,184,120,0.14)] transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {/* Top Photo */}
                    <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden bg-[#0C1C11]/5">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Card Content Row */}
                    <div className="pt-2.5 pb-1 px-1 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="text-[#9E7D3B] flex items-center justify-center shrink-0">
                          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#142318] group-hover:text-[#B89650] transition-colors leading-snug line-clamp-2">
                            {pillar.title}
                          </h3>
                          <p className="text-[11.5px] sm:text-[12px] text-[#6E756D] leading-snug line-clamp-2 mt-0.5 font-sans">
                            {pillar.shortDesc}
                          </p>
                        </div>
                      </div>

                      {/* Right Arrow */}
                      <div className="text-[#142318] group-hover:text-[#B89650] flex items-center justify-center transition-colors shrink-0 ml-1 p-1">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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
        <section id="two-phase-governance" className="relative pt-0 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF7F2] border-t border-[#EDE8DE]/70 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D5B878]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#0B2516]/5 blur-3xl pointer-events-none" />

          {/* ── Full-Width Hero Banner (In True MVZ Style - Full-bleed, no card borders - Photo 1) ── */}
          <div className="relative z-10 w-full overflow-hidden pb-8 sm:pb-12 lg:pb-14 border-b border-[#EDE8DE]/70">
            {/* Soft Background Photo with smooth horizontal fade (full bleed to right screen edge) */}
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-[54%] lg:w-[50%] pointer-events-none overflow-hidden select-none">
              <Image
                src="/images/areas/atrium-lounge.webp"
                alt="Two-Phase Corporate Governance & Ownership Architecture"
                fill
                className="object-cover object-center lg:object-right"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Horizontal gradient fade into page background #FAF7F2 */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] from-0% via-[#FAF7F2]/85 via-20% via-[#FAF7F2]/30 via-45% to-transparent to-75%" />
              {/* Mobile vertical gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/60 via-20% to-transparent md:hidden" />
            </div>

            {/* Botanical foliage branch overlay (matching Photo 1 MVZ reference) */}
            <div className="absolute top-0 right-[35%] lg:right-[42%] xl:right-[44%] w-40 sm:w-52 h-72 pointer-events-none opacity-65 select-none z-10 hidden md:block">
              <Image
                src="/images/areas/botanical-branch-clean.webp"
                alt=""
                fill
                className="object-contain object-top"
                unoptimized
              />
            </div>

            {/* Hero Content Container */}
            <Container size="wide" className="relative z-10 pt-8 sm:pt-12 lg:pt-16">
              <div className="max-w-6xl mx-auto">
                <div className="max-w-xl lg:max-w-2xl">
                  {/* Title with highlighted phrase */}
                  <h2 className="font-serif text-[28px] sm:text-[38px] lg:text-[44px] text-[#142318] font-normal leading-[1.18] mb-3 sm:mb-3.5">
                    {isUz
                      ? "Ikki bosqichli tartibga solish arxitekturasi: to'liq huquqiy xavfsizlik"
                      : isRu ? (
                      <>
                        Двухфазная модель владения и{" "}
                        <span className="font-serif text-[#C5A56A]">корпоративного управления</span>
                      </>
                    ) : isEn ? (
                      <>
                        Two-Phase Corporate Governance &{" "}
                        <span className="font-serif text-[#C5A56A]">Ownership Architecture</span>
                      </>
                    ) : isTr ? (
                      <>
                        İki Aşamalı Kurumsal Yönetim ve{" "}
                        <span className="font-serif text-[#C5A56A]">Ortaklık Mimarisi</span>
                      </>
                    ) : isAr ? (
                      <>
                        نموذج المرحلتين للحوكمة المؤسسية و{" "}
                        <span className="font-serif text-[#C5A56A]">هيكل الملكية والمساهمة</span>
                      </>
                    ) : (
                      <>
                        Zwei-Phasen-Modell der Corporate Governance &{" "}
                        <span className="font-serif text-[#C5A56A]">Beteiligungsarchitektur</span>
                      </>
                    )}
                  </h2>

                  <p className="text-[13px] sm:text-[14px] text-[#556057] leading-relaxed max-w-xl">
                    {isUz
                      ? "Germaniya Federativ Respublikasi SGB V va KV Nordrhein qat'iy talablariga to'liq rioya qilish."
                      : isRu
                      ? "Соблюдение жестких регуляторных требований Федерального кодекса (§ 95 SGB V) и закона о промысле (§ 30 GewO) обеспечивает абсолютную юридическую безопасность для партнеров и инвесторов."
                      : isEn
                      ? "Full compliance with statutory healthcare legislation (§ 95 SGB V) and clinic regulation (§ 30 GewO) ensures watertight legal protection for partners and investors."
                      : isTr
                      ? "Tıbbi tedavi özgürlüğü, yönetim hizmetleri ve hastane işletmeciliğinin kesin ayrımı; ortaklar ve yatırımcılar için azami yasal ve ruhsat güvencesi sağlar."
                      : isAr
                      ? "الفصل الصارم بين الاستقلالية الطبية، والخدمات الإدارية، وإدارة المستشفيات يضمن أقصى درجات الأمان القانوني والتنظيمي للشركاء والمستثمرين."
                      : "Strikte Trennung von ärztlicher Weisungsfreiheit, Managementdienstleistungen und Krankenhausträgerschaft gewährleistet maximale Rechts- und Zulassungssicherheit für Partner und Investoren."}
                  </p>
                </div>
              </div>
            </Container>
          </div>

          {/* ── 2 Phases Comparison Cards Container ── */}
          <Container size="wide" className="relative z-10 pt-8 sm:pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 items-stretch max-w-7xl mx-auto">
              {/* ============================================================= */}
              {/* CARD 1: PHASE 1 (Light Luxury Medical Interior)              */}
              {/* ============================================================= */}
              <div className="group relative overflow-hidden rounded-[26px] sm:rounded-[30px] bg-white border border-[#E2DBD0] shadow-[0_8px_30px_rgba(20,35,24,0.04)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(20,35,24,0.08)]">
                {/* Right Photo Column with organic curve and golden ribbons */}
                <div className="absolute right-0 top-0 bottom-0 w-[42%] lg:w-[44%] overflow-hidden pointer-events-none select-none hidden md:block">
                  <Image
                    src="/images/partners/phase1-office.jpg"
                    alt="Phase 1 - Active Establishment"
                    fill
                    className="object-cover object-[center_right] scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 50vw, 40vw"
                  />
                  {/* Organic wave mask transition with gold rim */}
                  <svg
                    viewBox="0 0 100 600"
                    preserveAspectRatio="none"
                    className="absolute left-0 top-0 bottom-0 h-full w-20 sm:w-24 text-white fill-current pointer-events-none z-10"
                  >
                    <path d="M0,0 L60,0 C20,160 15,280 50,420 C70,500 85,550 95,600 L0,600 Z" />
                    <path
                      d="M60,0 C20,160 15,280 50,420 C70,500 85,550 95,600"
                      fill="none"
                      stroke="#D5B878"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M63,0 C23,160 18,280 53,420 C73,500 88,550 98,600"
                      fill="none"
                      stroke="#ECCF96"
                      strokeWidth="1.2"
                      strokeOpacity="0.8"
                    />
                  </svg>
                  {/* Top golden ribbon flourish */}
                  <svg
                    viewBox="0 0 200 120"
                    className="absolute -top-1 -right-1 w-44 h-28 pointer-events-none z-10 opacity-75"
                  >
                    <path d="M200,0 Q120,20 40,0" fill="none" stroke="#D5B878" strokeWidth="2.5" />
                    <path d="M200,10 Q130,35 60,10" fill="none" stroke="#ECCF96" strokeWidth="1.5" opacity="0.6" />
                  </svg>
                  {/* Bottom golden ribbon flourish */}
                  <svg
                    viewBox="0 0 200 140"
                    className="absolute -bottom-1 -right-1 w-52 h-36 pointer-events-none z-10"
                  >
                    <path d="M0,140 Q100,70 200,90" fill="none" stroke="#C5A56A" strokeWidth="3" opacity="0.9" />
                    <path d="M15,140 Q115,85 200,105" fill="none" stroke="#ECCF96" strokeWidth="1.5" opacity="0.7" />
                    <path d="M35,140 Q130,100 200,120" fill="none" stroke="#D5B878" strokeWidth="1" opacity="0.5" />
                  </svg>
                </div>

                {/* Mobile top photo banner */}
                <div className="relative w-full h-44 sm:h-52 md:hidden overflow-hidden">
                  <Image
                    src="/images/partners/phase1-office.jpg"
                    alt="Phase 1 - Active Establishment"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                </div>

                {/* Left Content Area */}
                <div className="relative z-10 w-full md:w-[60%] lg:w-[58%] p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4 sm:space-y-4.5">
                    {/* Integrated Card Title: Numeral + Phase in Title */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="font-serif text-[40px] sm:text-[46px] lg:text-[52px] text-[#C5A56A] font-light leading-none shrink-0 tracking-tight select-none pt-0.5">
                        01
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-[18px] sm:text-[21px] lg:text-[23px] font-medium text-[#142318] leading-[1.28]">

                          {isUz
                            ? "MVZ da shifokor ishtiroki (§ 95 SGB V) & Markazlashtirilgan xizmatlar"
                            : isRu
                            ? "Врачебное участие в MVZ (§ 95 SGB V) & Централизованное управление"
                            : isEn
                            ? "Physician MVZ Equity (§ 95 SGB V) & Central Management Services"
                            : isTr
                            ? "Hekim MVZ Kuruluşu (§ 95 SGB V) ve Yönetim Sözleşmeleri"
                            : isAr
                            ? "مساهمة الأطباء في MVZ (§ 95 SGB V) وعقود الإدارة المركزية"
                            : "Ärztliche MVZ-Gründung (§ 95 SGB V) & Managementverträge"}
                        </h3>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed">
                      {isUz
                        ? "Dr. Fischer-Rahimov litsenziyalangan shifokor sifatida MVZ ta'sis etadi va tibbiy langar bo'lib xizmat qiladi."
                        : isRu
                        ? "Доктор Рахимов-Фишер как лицензированный врач владеет долями в компаниях MVZ на основании установленного законом врачебного права. Холдинг NabiOta® Health Group Germany GmbH оказывает централизованные услуги управления (биллинг, IT, закупки, кадры) на основе договоров о сервисном обслуживании."
                        : isEn
                        ? "Dr. Fischer-Rahimov holds MVZ equity based on statutory physician entitlement. NabiOta® Health Group Germany GmbH delivers centralized administrative, billing, purchasing, HR, and marketing management via customized commercial service agreements."
                        : isTr
                        ? "Dr. Fischer-Rahimov, MVZ paylarını doğrudan sözleşmeli hekim sıfatı (§ 95 SGB V) kapsamında elinde tutar. NabiOta® Health Group Germany GmbH holdingi, özel hizmet sözleşmeleri aracılığıyla merkezi yönetim, faturalandırma, BT ve satın alma hizmetleri sağlar."
                        : isAr
                        ? "يمتلك الدكتور فيشر-رحيموف حصص مراكز MVZ مباشرة استناداً إلى صفته كطبيب معتمد (§ 95 SGB V). وتقدم الشركة القابضة خدمات مركزية للإدارة، والفوترة، وتكنولوجيا المعلومات، والمشتريات عبر عقود خدمات متخصصة."
                        : "Dr. Fischer-Rahimov hält die MVZ-Anteile direkt auf Basis seiner berufsrechtlichen Vertragsarzt-Eigenschaft (§ 95 SGB V). Die Holding NabiOta® Health Group Germany GmbH erbringt zentrale Management-, Abrechnungs-, IT- und Einkaufsdienstleistungen über individuelle Servicevereinbarungen."}
                    </p>

                    {/* 3 Medal Items */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3">
                        <div className="text-[#8C6D37] flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-[#2C3E32] font-normal leading-snug">
                          {isUz
                            ? "Shifokor suvereniteti va terapevtik mustaqilligining to'liq huquqiy himoyasi."
                            : isRu
                            ? "Полная защита врачебного суверенитета и независимости решений"
                            : isEn
                            ? "Full protection of clinical independence and diagnostic autonomy"
                            : isTr
                            ? "Tam bağımsızlık ve tıbbi tedavi özgürlüğü"
                            : isAr
                            ? "استقلالية تامة وحرية كاملة للقرار الطبي"
                            : "Volle Unabhängigkeit und ärztliche Weisungsfreiheit"}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-[#8C6D37] flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-[#2C3E32] font-normal leading-snug">
                          {isUz
                            ? "Shifokor siriga (§ 203 StGB) to'liq rioya etgan holda markazlashtirilgan IT va hisob-kitob (billing) xizmatlari."
                            : isRu
                            ? "Централизованный IT-контур и биллинг с гарантией защиты данных (GDPR)"
                            : isEn
                            ? "Centralized GDPR-compliant IT, billing, and accounting systems"
                            : isTr
                            ? "Merkezi, GDPR uyumlu BT kontrol ve faturalandırma sistemi"
                            : isAr
                            ? "أنظمة مراقبة وتقنية معلومات وفوترة مركزية متوافقة تماماً مع معايير GDPR"
                            : "Zentralisiertes, DSGVO-konformes IT-Controlling & Abrechnungssystem"}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-[#8C6D37] flex items-center justify-center shrink-0">
                          <Users className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-[#2C3E32] font-normal leading-snug">
                          {isUz
                            ? "KV Nordrhein litsenziyalash qo'mitasi (Zulassungsausschuss) bilan to'liq kelishuv huquqiy tozaligi."
                            : isRu
                            ? "Правовая чистота согласований с комитетом лицензирования KV"
                            : isEn
                            ? "Clean regulatory approval process with the KV licensing board"
                            : isTr
                            ? "KV ruhsat kurulu gereksinimleriyle eksiksiz yasal uyum"
                            : isAr
                            ? "امتثال تنظيمي دقيق مع قرارات لجنة تراخيص أطباء التأمين KV"
                            : "Lückenlose Genehmigungskonformität mit dem KV-Zulassungsausschuss"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer with Gold Rule */}
                  <div className="flex items-center gap-2.5 pt-4 border-t border-[#EAE3D5]">
                    <span className="w-6 h-[1.5px] bg-[#C5A56A] shrink-0" />
                    <span className="text-[11px] sm:text-[11.5px] text-[#7A694A] font-medium tracking-wide">
                      {isUz
                        ? "Yuridik asos: § 95(1a) SGB V"
                        : isRu
                        ? "Юридическая основа: § 95(1a) SGB V"
                        : isEn
                        ? "Legal Basis: § 95(1a) SGB V"
                        : isTr
                        ? "Yasal Dayanak: § 95 Fıkra 1a SGB V"
                        : isAr
                        ? "الأساس القانوني: § 95(1a) SGB V"
                        : "Rechtsgrundlage: § 95 Abs. 1a SGB V"}
                    </span>
                  </div>
                </div>
              </div>

              {/* ============================================================= */}
              {/* CARD 2: PHASE 2 (Deep Emerald Luxury Hospital Exterior)      */}
              {/* ============================================================= */}
              <div className="group relative overflow-hidden rounded-[26px] sm:rounded-[30px] bg-[#0B2116] border border-[#D5B878]/35 shadow-[0_8px_30px_rgba(20,35,24,0.12)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(20,35,24,0.18)]">
                {/* Right Photo Column with organic curve and golden ribbons */}
                <div className="absolute right-0 top-0 bottom-0 w-[42%] lg:w-[44%] overflow-hidden pointer-events-none select-none hidden md:block">
                  <Image
                    src="/images/partners/phase2-clinic.jpg"
                    alt="Phase 2 - Hospital Licensing"
                    fill
                    className="object-cover object-[center_right] scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 50vw, 40vw"
                  />
                  {/* Organic wave mask transition with gold rim */}
                  <svg
                    viewBox="0 0 100 600"
                    preserveAspectRatio="none"
                    className="absolute left-0 top-0 bottom-0 h-full w-20 sm:w-24 text-[#0B2116] fill-current pointer-events-none z-10"
                  >
                    <path d="M0,0 L35,0 C65,140 10,290 40,430 C60,510 75,560 90,600 L0,600 Z" />
                    <path
                      d="M35,0 C65,140 10,290 40,430 C60,510 75,560 90,600"
                      fill="none"
                      stroke="#ECCF96"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M38,0 C68,140 13,290 43,430 C63,510 78,560 93,600"
                      fill="none"
                      stroke="#D5B878"
                      strokeWidth="1.2"
                      strokeOpacity="0.8"
                    />
                  </svg>
                  {/* Top golden ribbon flourish */}
                  <svg
                    viewBox="0 0 200 120"
                    className="absolute -top-1 -right-1 w-44 h-28 pointer-events-none z-10 opacity-75"
                  >
                    <path d="M200,0 Q120,20 40,0" fill="none" stroke="#D5B878" strokeWidth="2.5" />
                    <path d="M200,10 Q130,35 60,10" fill="none" stroke="#ECCF96" strokeWidth="1.5" opacity="0.6" />
                  </svg>
                  {/* Bottom golden ribbon flourish */}
                  <svg
                    viewBox="0 0 200 140"
                    className="absolute -bottom-1 -right-1 w-52 h-36 pointer-events-none z-10"
                  >
                    <path d="M0,140 Q100,70 200,90" fill="none" stroke="#C5A56A" strokeWidth="3" opacity="0.9" />
                    <path d="M15,140 Q115,85 200,105" fill="none" stroke="#ECCF96" strokeWidth="1.5" opacity="0.7" />
                    <path d="M35,140 Q130,100 200,120" fill="none" stroke="#D5B878" strokeWidth="1" opacity="0.5" />
                  </svg>
                </div>

                {/* Mobile top photo banner */}
                <div className="relative w-full h-44 sm:h-52 md:hidden overflow-hidden">
                  <Image
                    src="/images/partners/phase2-clinic.jpg"
                    alt="Phase 2 - Hospital Licensing"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2116] via-[#0B2116]/40 to-transparent" />
                </div>

                {/* Left Content Area */}
                <div className="relative z-10 w-full md:w-[60%] lg:w-[58%] p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4 sm:space-y-4.5">
                    {/* Integrated Card Title: Numeral + Phase in Title */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="font-serif text-[40px] sm:text-[46px] lg:text-[52px] text-[#C5A56A] font-light leading-none shrink-0 tracking-tight select-none pt-0.5">
                        02
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-[18px] sm:text-[21px] lg:text-[23px] font-medium text-white leading-[1.28]">

                          {isUz
                            ? "NabiOta Clinics Germany GmbH (§ 30 GewO) & Bevosita kasalxona ta'sischiligi"
                            : isRu
                            ? "NabiOta Clinics Germany GmbH (§ 30 GewO) & Прямое владение"
                            : isEn
                            ? "NabiOta Clinics Germany GmbH (§ 30 GewO) & Direct Equity"
                            : isTr
                            ? "NabiOta Clinics Germany GmbH (§ 30 GewO) ve Doğrudan Sahiplik"
                            : isAr
                            ? "NabiOta Clinics Germany GmbH (§ 30 GewO) والملكية المباشرة"
                            : "NabiOta Clinics Germany GmbH (§ 30 GewO) & Direktes Halten"}
                        </h3>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[12.5px] sm:text-[13px] text-white/80 leading-relaxed">
                      {isUz
                        ? "Xolding klinikani boshqarish kompaniyasini ta'sis etadi (§ 30 GewO) va statsionar o'rinlarni ochadi."
                        : isRu
                        ? "Холдинг учреждает компанию управления клиникой (NabiOta Clinics Germany GmbH nach § 30 GewO). После получения лицензии стационарной больницы (§ 108/109 SGB V) компания становится полноправным учредителем MVZ без необходимости личного врачебного участия, открывая путь для прямого институционального инвестирования."
                        : isEn
                        ? "The holding establishes the hospital operating company (NabiOta Clinics Germany GmbH § 30 GewO). Upon hospital licensing (§ 108/109 SGB V), the company acquires statutory entitlement to directly own and operate MVZ centers, enabling streamlined institutional equity expansion."
                        : isTr
                        ? "Holding, yataklı tedavi işletme şirketini (NabiOta Clinics Germany GmbH nach § 30 GewO) kurar. Resmi planlama hastanesi (§ 108/109 SGB V) ruhsatının alınmasıyla birlikte şirket, MVZ'lerin doğrudan kurucusu olma hakkını kazanır. Hisseler artık şahsi hekim bağlılığı olmaksızın doğrudan tutulabilir."
                        : isAr
                        ? "تؤسس المجموعة الشركة المشغلة للمستشفى (NabiOta Clinics Germany GmbH بموجب § 30 GewO). ومع الحصول على اعتماد المستشفى الرسمي (§ 108/109 SGB V)، تكتسب الشركة الأهلية القانونية المباشرة لتملك مراكز MVZ دون الحاجة لصفة الطبيب الفردية، مما يمهد الطريق لضخ استثمارات مؤسسية مباشرة."
                        : "Die Holding baut die stationäre Betreibergesellschaft (NabiOta Clinics Germany GmbH nach § 30 GewO) auf. Mit Erhalt der Zulassung als Plankrankenhaus (§ 108/109 SGB V) erwirbt die Gesellschaft die unmittelbare gesetzliche Gründungsberechtigung für MVZ. Anteile können sodann direkt und ohne persönliche Arztbindung gehalten werden."}
                    </p>

                    {/* 3 Items */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3">
                        <div className="text-[#ECCF96] flex items-center justify-center shrink-0">
                          <GitFork className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-white/90 font-normal leading-snug">
                          {isUz
                            ? "Kasalxona yuridik shaxsi sifatida MVZ ulushlariga bevosita korporativ egalik qilish (§ 95 Abs. 1a SGB V)."
                            : isRu
                            ? "Прямое корпоративное владение долями MVZ клинической компанией"
                            : isEn
                            ? "Direct corporate ownership of MVZ subsidiaries by hospital operating company"
                            : isTr
                            ? "MVZ iştiraklerinin doğrudan hastane işletme şirketi tarafından sahiplenilmesi"
                            : isAr
                            ? "ملكية مؤسسية مباشرة لمراكز MVZ التابعة عبر الشركة المشغلة للمستشفى"
                            : "Direkte Trägerschaft der MVZ-Töchter durch die Krankenhausträgergesellschaft"}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-[#ECCF96] flex items-center justify-center shrink-0">
                          <TrendingUp className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-white/90 font-normal leading-snug">
                          {isUz
                            ? "Institutsional miqyos va xususiy kapital fondlariga to'liq bog'liq bo'lmaslik."
                            : isRu
                            ? "Институциональная масштабируемость и готовность к синдикации капитала"
                            : isEn
                            ? "Institutional scalability and readiness for major equity syndication"
                            : isTr
                            ? "Büyük ölçekli özkaynak sendikasyonları için kurumsal ölçeklenebilirlik"
                            : isAr
                            ? "قابلية توسع مؤسسية عالية للتحالفات الاستثمارية وضخ رؤوس الأموال الكبرى"
                            : "Institutionelle Skalierbarkeit für größere Eigenkapitalsyndizierungen"}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-[#ECCF96] flex items-center justify-center shrink-0">
                          <Link2 className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] text-white/90 font-normal leading-snug">
                          {isUz
                            ? "Statsionar va ambulator davolash o'rtasida uzluksiz integratsiyalashgan tibbiy zanjir."
                            : isRu
                            ? "Непрерывный континуум между стационаром и амбулаторными центрами"
                            : isEn
                            ? "Unbroken continuum between acute hospital wards and outpatient centers"
                            : isTr
                            ? "Akut klinik ile MVZ merkezleri arasında kesintisiz bakım zinciri"
                            : isAr
                            ? "سلسلة رعاية متصلة وبلا انقطاع بين المستشفى الحاد ومراكز MVZ التابعة"
                            : "Lückenloser Versorgungskontinuum zwischen Akutklinik und MVZ-Zentren"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer with Gold Rule */}
                  <div className="flex items-center gap-2.5 pt-4 border-t border-white/10">
                    <span className="w-6 h-[1.5px] bg-[#C5A56A] shrink-0" />
                    <span className="text-[11px] sm:text-[11.5px] text-[#ECCF96] font-medium tracking-wide">
                      {isUz
                        ? "Yuridik asos: § 30 GewO / § 108 SGB V / § 95 SGB V"
                        : isRu
                        ? "Юридическая основа: § 30 GewO / § 108 SGB V / § 95(1a) SGB V"
                        : isEn
                        ? "Legal Basis: § 30 GewO / § 108 SGB V / § 95(1a) SGB V"
                        : isTr
                        ? "Yasal Dayanak: § 30 GewO / § 108 SGB V / § 95 Fıkra 1a SGB V"
                        : isAr
                        ? "الأساس القانوني: § 30 GewO / § 108 SGB V / § 95(1a) SGB V"
                        : "Rechtsgrundlage: § 30 GewO / § 108 SGB V / § 95 Abs. 1a SGB V"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 3B: VERTRAGLICHE VERBINDUNG ZWISCHEN HOLDING UND MVZ (PDF III) */}
        <MvzContractSection locale={locale} />

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
                  {isUz
                    ? "Ustav kapitali"
                    : isRu
                    ? "Уставный капитал"
                    : isEn
                    ? "Registered Capital"
                    : isTr
                    ? "Esas Sermaye"
                    : isAr
                    ? "رأس المال المسجل"
                    : "Stammkapital"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isUz
                    ? "HRB 16787 Mönchengladbach"
                    : isRu
                    ? "HRB 16787 Мёнхенгладбах"
                    : isEn
                    ? "HRB 16787 Mönchengladbach"
                    : isTr
                    ? "HRB 16787 Mönchengladbach"
                    : isAr
                    ? "HRB 16787 مونشنغلادباخ"
                    : "HRB 16787 Mönchengladbach"}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECCF96]">
                  10
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {isUz
                    ? "Sho'ba korxonalar"
                    : isRu
                    ? "Дочерних обществ"
                    : isEn
                    ? "Group Subsidiaries"
                    : isTr
                    ? "Grup İştiraki"
                    : isAr
                    ? "شركات تابعة للمجموعة"
                    : "Tochtergesellschaften"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isUz
                    ? "3 ta strategik tarmoq"
                    : isRu
                    ? "3 стратегические ветви"
                    : isEn
                    ? "3 strategic branches"
                    : isTr
                    ? "3 stratejik sütun"
                    : isAr
                    ? "3 قطاعات استراتيجية"
                    : "3 strategische Säulen"}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECCF96]">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {isUz
                    ? "Huquqiy tozalik"
                    : isRu
                    ? "Правовая чистота"
                    : isEn
                    ? "Regulatory Compliance"
                    : isTr
                    ? "Yasal Güvence"
                    : isAr
                    ? "امتثال قانوني كامل"
                    : "Rechtssicherheit"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isUz
                    ? "KV, SGB V & Berufsordnung"
                    : isRu
                    ? "KV, SGB V & Berufsordnung"
                    : isEn
                    ? "German healthcare standards"
                    : isTr
                    ? "KV ve meslek mevzuatına uygun"
                    : isAr
                    ? "متوافق مع لوائح KV وقوانين الصحة"
                    : "KV- & berufsrechtskonform"}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#ECCF96]">
                  32°C & 3T
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {isUz
                    ? "High-End infratuzilma"
                    : isRu
                    ? "Инфраструктура High-End"
                    : isEn
                    ? "High-End Technology"
                    : isTr
                    ? "İleri Teknoloji"
                    : isAr
                    ? "تقنيات وبنية سريرية فائقة"
                    : "Spitzentechnologie"}
                </div>
                <div className="text-[11px] text-white/70">
                  {isUz
                    ? "Basseyn, 3T MRT, toza OP zallari"
                    : isRu
                    ? "Бассейн, 3T MRT, чистые OP"
                    : isEn
                    ? "Aquatic rehab & 3T MRI"
                    : isTr
                    ? "Hidroterapi havuzu ve temiz oda OP"
                    : isAr
                    ? "حوض تأهيل مائي وغرف عمليات معقمة"
                    : "Bewegungsbad & Reinraum-OP"}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: DER STRUKTURIERTE PARTNERSCHAFTSPROZESS (4 SCHRITTE)           */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-18 lg:py-20 bg-[#FAF8F4] border-t border-[#EBE6DC]">
          <Container size="wide">
            {/* Section Header */}
            <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0B2516] font-normal leading-tight">
                {isUz
                  ? "Muvaffaqiyatli hamkorlik sari to'rt qadam"
                  : isRu ? (
                  <>
                    Четыре шага к{" "}
                    <span className="font-serif text-[#C5A56A]">успешному партнерству</span>
                  </>
                ) : isEn ? (
                  <>
                    Four Milestones to a{" "}
                    <span className="font-serif text-[#C5A56A]">Successful Partnership</span>
                  </>
                ) : isTr ? (
                  <>
                    4 Yapılandırılmış Adımda{" "}
                    <span className="font-serif text-[#C5A56A]">Ortaklığa</span>
                  </>
                ) : isAr ? (
                  <>
                    أربع مراحل منظمة نحو{" "}
                    <span className="font-serif text-[#C5A56A]">الشراكة الناجحة</span>
                  </>
                ) : (
                  <>
                    In 4 strukturierten Schritten zur{" "}
                    <span className="font-serif text-[#C5A56A]">Partnerschaft</span>
                  </>
                )}
              </h2>
              <p className="text-xs sm:text-[13.5px] text-[#4A5D52] leading-relaxed max-w-xl mx-auto">
                {isUz
                  ? "Har bir bosqichda shaffof, maxfiy va qonuniy tekshirilgan jarayon."
                  : isRu
                  ? "Прозрачный, конфиденциальный и юридически выверенный процесс: от первого контакта до интеграции."
                  : isEn
                  ? "A discreet, transparent, and legally guided pathway from initial dialogue to operational integration."
                  : isTr
                  ? "Gizlilik, güvenilirlik ve hızlı uygulama, ortaklık sürecimizin temel özellikleridir."
                  : isAr
                  ? "السرية والشفافية والتنفيذ الدقيق تميز مسار انضمام الشركاء إلى شبكتنا."
                  : "Diskretion, Verlässlichkeit und zügige Umsetzung kennzeichnen unseren partnerschaftlichen Onboarding-Prozess."}
              </p>
            </div>

            {/* 4 Photo-Backed Cards Grid Matching Photo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch max-w-7xl mx-auto">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-[22px] sm:rounded-[24px] bg-[#FCFAF7] p-5 sm:p-6 lg:p-6.5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(20,35,24,0.08)] ${
                    idx === 0
                      ? "border-[1.5px] border-[#55755E] shadow-[0_4px_24px_rgba(85,117,94,0.08)]"
                      : "border border-[#E7E1D4] shadow-[0_4px_20px_rgba(20,35,24,0.03)] hover:border-[#8C6D37]/50"
                  }`}
                >
                  {/* Top-right soft photo container with delicate fade */}
                  <div className="absolute right-0 top-0 w-[54%] sm:w-[50%] h-28 sm:h-32 pointer-events-none overflow-hidden select-none z-0">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover object-right-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                    {/* Horizontal fade into card background #FCFAF7 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF7] via-[#FCFAF7]/40 to-transparent" />
                    {/* Bottom fade into card background #FCFAF7 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7] via-[#FCFAF7]/30 to-transparent" />
                  </div>

                  {/* Top Content: Medallion and Numeral, Title, Description */}
                  <div className="relative z-10 space-y-3.5 sm:space-y-4">
                    {/* Icon + Serif Italic Number */}
                    <div className="flex items-center gap-3">
                      <div className="text-[#4A6353] group-hover:text-[#274632] flex items-center justify-center shrink-0 transition-colors">
                        <step.icon className="w-8 h-8 stroke-[1.8]" />
                      </div>
                      <span className="font-serif italic text-2xl sm:text-[27px] text-[#C5A56A] font-light leading-none select-none pl-0.5">
                        {step.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[18px] sm:text-[19px] lg:text-[20px] font-medium text-[#142318] leading-[1.25]">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}

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
                  {isUz
                    ? "Keling, hamkorligingizni"
                    : isRu
                    ? "Давайте обсудим"
                    : isEn
                    ? "Let's Shape the"
                    : isTr
                    ? "Geleceği Birlikte"
                    : isAr
                    ? "معاً نبني"
                    : "Gemeinsam Zukunft"}
                  <br />
                  {isUz
                    ? "birgalikda muhokama qilamiz."
                    : isRu
                    ? "ваше партнерство."
                    : isEn
                    ? "Future Together."
                    : isTr
                    ? "Şekillendirelim. ♡"
                    : isAr
                    ? "مستقبل الرعاية. ♡"
                    : "gestalten. ♡"}
                </p>
                <div className="flex items-center gap-2 pt-2.5">
                  <div className="w-8 h-[1px] bg-[#2F4F3E]/60" />
                  <Heart className="w-3.5 h-3.5 text-[#2F4F3E] fill-transparent stroke-[1.8]" />
                  <div className="w-8 h-[1px] bg-[#2F4F3E]/60" />
                </div>
              </div>

              {/* Center Column: Heading, Desc, Gold Button */}
              <div className="lg:col-span-4 space-y-3 sm:space-y-3.5">
                <h2 className="font-serif text-2xl sm:text-[28px] lg:text-[30px] xl:text-[32px] text-[#0F2A1D] font-normal leading-[1.2]">
                  {isUz
                    ? "Biz bilan bog'laning"
                    : isRu
                    ? "Свяжитесь с нами"
                    : isEn
                    ? "Initiate Your Partnership"
                    : isTr
                    ? "Sizinle görüşmeyi sabırsızlıkla bekliyoruz."
                    : isAr
                    ? "نتطلع إلى بدء المشاورات معكم."
                    : "Wir freuen uns auf den Dialog."}
                </h2>

                <p className="text-xs sm:text-[13px] text-[#4A5D52] leading-relaxed max-w-sm font-sans">
                  {isUz
                    ? "Praksis vorisligi, sektorlararo klinika loyihasi yoki investitsion ishtirok bo'ladimi - biz siz bilan shaxsan uchrashishdan mamnun bo'lamiz."
                    : isRu
                    ? "Будь то преемственность праксиса, межсекторальное партнерство с клиникой или инвестиции - мы гарантируем полную конфиденциальность."
                    : isEn
                    ? "Whether practice succession, clinical hospital networks, or healthcare equity - we ensure maximum confidentiality."
                    : isTr
                    ? "İster muayenehane devri, ister klinik ağı, ister gayrimenkul yatırımı olsun: Yönetimimiz size gizlilik içinde ve memnuniyetle danışmanlık sağlar."
                    : isAr
                    ? "سواء كان الأمر يتعلق بخلافة عيادة، أو تحالفات المستشفيات، أو الاستثمار العقاري: يسر إدارتنا تقديم الاستشارة السرية المناسبة دون أي التزامات مسبقة."
                    : "Ob Praxisabgabe, Kliniknetzwerk oder Immobilieninvestment: Unser Vorstand berät Sie gerne diskret und unverbindlich."}
                </p>

                <div className="pt-1.5">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-[48px] sm:h-[50px] rounded-full bg-gradient-to-r from-[#ECCF96] via-[#DFBF76] to-[#C8A050] hover:from-[#F4DCAC] hover:to-[#D4AC5B] text-[#08170D] text-xs sm:text-[13.5px] font-semibold transition-all duration-300 shadow-sm group hover:scale-[1.02]"
                  >
                    <span>
                      {isUz
                        ? "Uchrashuvga yozilish"
                        : isRu
                        ? "Записаться на встречу"
                        : isEn
                        ? "Request appointment"
                        : isTr
                        ? "Görüşme Ayarlayın"
                        : isAr
                        ? "طلب موعد اجتماع"
                        : "Gespräch vereinbaren"}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 3 Contact entries with round icons */}
              <div className="lg:col-span-4 flex justify-start lg:justify-start lg:pl-4 xl:pl-6">
                <div className="w-full max-w-[340px] space-y-3.5 sm:space-y-4">
                  <a
                    href="tel:+4921614794000"
                    className="flex items-center gap-3 text-xs sm:text-[13.5px] text-[#1B3A29] hover:text-[#0D2619] transition-colors group"
                  >
                    <div className="text-[#8C6D37] flex items-center justify-center shrink-0">
                      <Phone className="w-5.5 h-5.5 fill-[#8C6D37] text-[#8C6D37]" />
                    </div>
                    <span className="font-medium font-sans">+49 2161 4794000</span>
                  </a>

                  <a
                    href="mailto:partner@nabiota-health-group.de"
                    className="flex items-center gap-3 text-xs sm:text-[13.5px] text-[#1B3A29] hover:text-[#0D2619] transition-colors group"
                  >
                    <div className="text-[#0F2A1D] flex items-center justify-center shrink-0">
                      <Mail className="w-5.5 h-5.5 fill-[#0F2A1D] text-[#0F2A1D]" />
                    </div>
                    <span className="font-medium font-sans">partner@nabiota-health-group.de</span>
                  </a>

                  <div className="flex items-center gap-3 text-xs sm:text-[13.5px] text-[#1B3A29]">
                    <div className="text-[#0F2A1D] flex items-center justify-center shrink-0">
                      <MapPin className="w-5.5 h-5.5 fill-[#0F2A1D] text-[#0F2A1D]" />
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
              className="relative w-full max-w-5xl xl:max-w-[1100px] max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border border-[#E8DEC8] shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 animate-in zoom-in-95 duration-200"
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
                <div className="flex items-center gap-2">
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
                  {isUz
                    ? "Oynani yopish"
                    : isRu
                    ? "Закрыть окно"
                    : isEn
                    ? "Close window"
                    : isTr
                    ? "Pencereyi Kapat"
                    : isAr
                    ? "إغلاق النافذة"
                    : "Schließen"}
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
