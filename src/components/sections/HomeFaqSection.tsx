"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { SupportedLocale } from "@/lib/i18n";

interface HomeFaqSectionProps {
  currentLocale?: SupportedLocale;
}

export function HomeFaqSection({ currentLocale = "de" }: HomeFaqSectionProps) {
  const isRu = currentLocale === "ru";
  const isEn = currentLocale === "en";

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const t = {
    eyebrow: isRu ? "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ" : isEn ? "FREQUENTLY ASKED QUESTIONS" : "HÄUFIG GESTELLTE FRAGEN",
    title: isRu
      ? "Всё о NabiOta® Health Group"
      : isEn
      ? "Insights into NabiOta® Health Group"
      : "Wissenswertes über die NabiOta® Health Group",
    desc: isRu
      ? "Ответы на главные вопросы о структуре холдинга, приеме пациентов, партнерстве и медицинских стандартах."
      : isEn
      ? "Answers to key questions regarding our medical network, patient admissions, partnerships, and clinical standards."
      : "Antworten auf die wichtigsten Fragen rund um unsere Unternehmensbereiche, Patientenversorgung, Kooperationen und Qualitätsstandards.",
    contactCtaText: isRu ? "Остались вопросы? Свяжитесь с нами" : isEn ? "Have more questions? Get in touch" : "Haben Sie weitere Fragen? Kontaktieren Sie uns",
    items: [
      {
        q: isRu
          ? "Какие направления объединяет холдинг NabiOta® Health Group Germany?"
          : isEn
          ? "Which divisions are united under NabiOta® Health Group Germany?"
          : "Welche Unternehmensbereiche vereint die NabiOta® Health Group Germany?",
        a: isRu
          ? "NabiOta® Health Group Germany GmbH (г. Мёнхенгладбах) объединяет комплексную экосистему из 10 дочерних предприятий: амбулаторные центры (MVZ общей медицины и хирургии), подготовку стационарной клиники (§ 30 GewO), диагностический центр (МРТ 3T, КТ, нейрофизиология, лаборатория), амбулаторную реабилитацию (физио-, эрго- и логотерапия), патронаж HomeCare, Sanitätshaus GmbH (ортопедия и медтехника), аптечное обеспечение клиник (§ 14 ApoG), подбор персонала и признание дипломов (Medical Recruitment), девелопмент медицинской недвижимости (Real Estate) и международные медицинские проекты."
          : isEn
          ? "NabiOta® Health Group Germany GmbH, headquartered in Mönchengladbach, unites a comprehensive ecosystem of 10 subsidiaries: primary care & surgical MVZ centers, preparation for a licensed hospital (§ 30 GewO), advanced diagnostics (3T MRI, low-dose CT, neurophysiology, laboratory), outpatient rehabilitation (physio-, ergo- & speech therapy), specialized HomeCare, Sanitätshaus GmbH (orthopedics & medical supplies), clinic pharmacy supply (§ 14 ApoG), Medical Recruitment Services, medical real estate development, and international healthcare partnerships."
          : "Die NabiOta® Health Group Germany GmbH mit Sitz in Mönchengladbach bündelt ein integriertes Ökosystem aus 10 Tochtergesellschaften: ambulante Zentren (hausärztliche & chirurgische MVZ), Vorbereitung einer Fachklinik (§ 30 GewO), moderne Diagnostik (3T-MRT, Low-Dose-CT, Neurophysiologie, Labor), ambulante Rehabilitation (Physio-, Ergo- und Logopädie), spezialisierte HomeCare-Pflege, Sanitätshaus GmbH (Orthopädie & Rehatechnik), Klinik-Arzneimittelversorgung (§ 14 ApoG), Medical Recruitment Services, medizinische Immobilienentwicklung (Real Estate) sowie internationale Kooperationen.",
      },
      {
        q: isRu
          ? "Как записаться на прием или диагностику в центры группы?"
          : isEn
          ? "How do I schedule an appointment or diagnostic scan at a NabiOta facility?"
          : "Wie kann ich einen Termin in einer Einrichtung der NabiOta® Gruppe vereinbaren?",
        a: isRu
          ? "Вы можете направить заявку через наш сайт в соответствующих разделах («Медицинские направления», «Диагностика», «Реабилитация», «Уход»), воспользоваться общей формой обратной связи или позвонить по телефону единой службы координации пациентов. Мы поможем выбрать удобное время и ближайший филиал."
          : isEn
          ? "You can easily schedule a consultation or examination online through our specialized division pages, submit an inquiry via our general contact form, or call our central patient concierge desk. Our coordinators will assist you with fast appointment allocation."
          : "Sie können Termine direkt über unsere jeweiligen Fachbereichsseiten (Medizinische Fachbereiche, Diagnostik, Rehabilitation, Pflege) oder zentral über unser Kontaktformular und unsere telefonische Hotline anfragen. Unser Patientenservice leitet Sie zeitnah an die passende Praxis oder das zuständige Diagnostikzentrum weiter.",
      },
      {
        q: isRu
          ? "Принимаются ли пациенты со всеми видами медицинских страховок?"
          : isEn
          ? "Are both statutory and privately insured patients accepted?"
          : "Werden gesetzlich und privat versicherte Patienten behandelt?",
        a: isRu
          ? "Да. Учреждения холдинга работают со всеми государственными больничными кассами Германии (GKV), частными страховыми компаниями (PKV), организациями страхования от несчастных случаев (BG), пенсионным страхованием (DRV), а также принимают пациентов на условиях прямого расчета (самооплата)."
          : isEn
          ? "Yes. Our medical centers and diagnostic facilities are fully accredited and open to patients with German statutory health insurance (GKV), private insurance (PKV), workers' compensation (BG), statutory pension insurance (DRV), and self-paying international clients."
          : "Ja, unsere Einrichtungen und medizinischen Versorgungszentren stehen sowohl gesetzlich versicherten Patienten (GKV) als auch Privatversicherten (PKV) und Selbstzahlern offen. Zudem kooperieren wir mit Berufsgenossenschaften (BG) und Rentenversicherungsträgern (DRV).",
      },
      {
        q: isRu
          ? "Какие возможности холдинг предлагает врачам, клиникам и инвесторам?"
          : isEn
          ? "What partnership models does NabiOta offer to doctors, clinics, and investors?"
          : "Welche Kooperationsmöglichkeiten gibt es für Ärzte, Kliniken und Partner?",
        a: isRu
          ? "Мы предлагаем практикующим врачам преемственность практик, гибкие форматы работы в структуре MVZ, избавление от административной нагрузки и доступ к передовому оборудованию. Для клиник и инвесторов мы выступаем надежным партнером по совместному управлению, девелопменту медицинских комплексов и трансграничному медицинскому сотрудничеству."
          : isEn
          ? "We offer established practitioners and specialists attractive practice succession solutions, flexible employment within our MVZ network, full administrative relief, and modern infrastructure. For municipalities, institutional owners, and healthcare investors, we engineer future-ready healthcare campuses."
          : "Wir bieten etablierten Fachärzten und Nachwuchsmedizinern attraktive Praxisübernahmen, Kooperationen im MVZ-Verbund, modernste apparative Infrastruktur und administrative Entlastung. Für Kommunen und Investoren entwickeln wir zukunftsfähige Gesundheitscampus-Projekte.",
      },
      {
        q: isRu
          ? "Где расположены подразделения и клиники группы NabiOta®?"
          : isEn
          ? "Where are the locations and facilities of the healthcare group located?"
          : "Wo befinden sich die Standorte der Unternehmensgruppe?",
        a: isRu
          ? "Штаб-квартира и координационный центр холдинга расположены в городе Мёнхенгладбах (Северный Рейн-Вестфалия). Филиалы, диагностические центры, кабинеты и партнерские клиники развиваются в агломерации Рейн-Рур и ключевых регионах Германии."
          : isEn
          ? "Our administrative headquarters and coordination hub are situated in Mönchengladbach, North Rhine-Westphalia. Our outpatient clinics, imaging centers, and care hubs are located across the Rhine-Ruhr metropolitan region and strategic nationwide sites."
          : "Unser Hauptsitz und administratives Zentrum befindet sich in Mönchengladbach (Nordrhein-Westfalen). Unsere Praxen, Diagnostikzentren und kooperierenden Einrichtungen sind in der Metropolregion Rhein-Ruhr sowie an weiteren strategischen Standorten vernetzt.",
      },
      {
        q: isRu
          ? "Каковы стандарты качества и инноваций в работе холдинга?"
          : isEn
          ? "How does NabiOta® ensure quality assurance and medical innovation?"
          : "Wie sichert NabiOta® höchste Qualitäts- und Innovationsstandards?",
        a: isRu
          ? "Вся деятельность холдинга подчинена строгим немецким протоколам доказательной медицины, сертификации ISO, регулярному независимому аудиту и непрерывному повышению квалификации персонала в собственной академии NabiOta® Akademie."
          : isEn
          ? "All group clinical pathways adhere strictly to German evidence-based medical guidelines, ISO-certified quality management, continuous audit procedures, and regular staff development via the NabiOta® Academy."
          : "Durch ein durchgängiges Qualitätsmanagement nach DIN EN ISO, die NabiOta® Akademie für kontinuierliche Mitarbeiterfortbildung, digitale Workflows und Investitionen in zukunftsweisende Medizintechnik sichern wir höchste medizinische Exzellenz und Patientensicherheit.",
      },
    ],
  };

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-t border-[#EAE3D5]/80">
      <div className="mx-auto w-full max-w-[1540px] 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── Top Header: Centered above questions ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#9B7C38] uppercase block font-sans mb-3">
            {t.eyebrow}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-[1.18] tracking-tight">
            {t.title}
          </h2>

          <p className="text-sm sm:text-[15px] text-[#4E6256] leading-relaxed font-sans max-w-2xl mx-auto mt-3.5">
            {t.desc}
          </p>
        </div>

        {/* ── Middle: Accordion Items Centered ── */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto space-y-3.5">
          {t.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-[#C8B896] shadow-sm"
                    : "bg-white/80 hover:bg-white border-[#EBE4D8] hover:border-[#D8CFBC]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 group cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base text-[#0F2A1D] font-medium leading-snug group-hover:text-[#9B7C38] transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 mt-0.5 ${
                      isOpen
                        ? "bg-[#0D2619] text-white"
                        : "bg-[#EBF0EA] text-[#244E33] group-hover:bg-[#0D2619] group-hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-[#4E6256] leading-relaxed border-t border-[#F2ECE1] mt-1 font-sans">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Bottom: Quick Contact Box Centered ── */}
        <div className="mt-10 sm:mt-12 max-w-3xl lg:max-w-4xl mx-auto">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EBE4D8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-full bg-[#EBF0EA] flex items-center justify-center flex-shrink-0 text-[#244E33]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm sm:text-base font-semibold text-[#0F2A1D]">
                  {t.contactCtaText}
                </h4>
                <p className="text-xs sm:text-[13px] text-[#5A6E63] leading-relaxed mt-0.5">
                  {isRu
                    ? "Наши специалисты всегда готовы ответить на ваши вопросы и предоставить исчерпывающую информацию."
                    : isEn
                    ? "Our advisory team is pleased to address your questions and outline personalized care pathways."
                    : "Unser Serviceteam beantwortet Ihre Anliegen gerne persönlich und unverbindlich."}
                </p>
              </div>
            </div>
            <Link
              href={`/${currentLocale}/contact`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0D2619] hover:text-white bg-[#FAF8F5] hover:bg-[#0D2619] border border-[#E0D7C6] hover:border-[#0D2619] px-4 py-2.5 rounded-xl transition-all duration-200 group flex-shrink-0 whitespace-nowrap shadow-xs"
            >
              <span>{isRu ? "Связаться с нами" : isEn ? "Contact us directly" : "Direkt Kontakt aufnehmen"}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
