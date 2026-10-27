"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconStethoscope,
  IconMicroscope,
  IconHeartRateMonitor,
  IconWalk,
  IconBuildingHospital,
  IconBuildingCommunity,
  IconWorld,
  IconScale,
  IconShieldCheck,
  IconHeartHandshake,
  IconDiamond,
  IconBulb,
  IconUsersGroup,
  IconCertificate,
  IconPill,
  IconVaccine,
  IconDna2,
  IconEmergencyBed,
  IconBrain,
  IconArrowRight,
  IconArrowUpRight,
  IconChevronDown,
  IconChevronUp,
  IconCircleCheck,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";
import { ComparisonHeader } from "./ComparisonHeader";

export function TablerOptionView() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const areas = [
    {
      title: "Медицинские направления",
      subtitle: "Амбулаторная помощь (§ 95 SGB V), два центра MVZ и подготовка клиники",
      image: "/images/areas/medical-departments.webp",
      icon: IconStethoscope,
    },
    {
      title: "Диагностика",
      subtitle: "3T МРТ, низкодозовая КТ, цифровой рентген и нейрофизиология",
      image: "/images/areas/diagnostics.webp",
      icon: IconMicroscope,
    },
    {
      title: "Реабилитация",
      subtitle: "Комплексная нейро- и ортопедическая реабилитация",
      image: "/images/areas/rehabilitation.webp",
      icon: IconWalk,
    },
    {
      title: "Забота и патронаж (Home Care)",
      subtitle: "Амбулаторная служба ухода и специализированный патронаж",
      image: "/images/areas/homecare.webp",
      icon: IconHeartHandshake,
    },
    {
      title: "Медицинская недвижимость",
      subtitle: "Девелопмент и управление современными медицинскими центрами",
      image: "/images/areas/real-estate.webp",
      icon: IconBuildingHospital,
    },
    {
      title: "Международное сотрудничество",
      subtitle: "Рекрутинг медиков, нострификация и Approbation, партнерство с клиниками",
      image: "/images/areas/international.webp",
      icon: IconWorld,
    },
  ];

  const purposeBlocks = [
    {
      icon: IconUsersGroup,
      title: "Стратегическое руководство и управление долями",
      text: "Холдинг обеспечивает централизованное корпоративное и финансовое руководство дочерними структурами, инвестируя в устойчивую медицинскую инфраструктуру Федеративной Республики Германия.",
    },
    {
      icon: IconBuildingCommunity,
      title: "Создание и развитие сети MVZ по § 95 SGB V",
      text: "Создание медицинских центров первичного и специализированного звена в строгом соответствии с требованиями Федерального закона о социальном страховании Германии.",
    },
    {
      icon: IconCertificate,
      title: "Академические стандарты и центры передового опыта",
      text: "Внедрение доказательной медицины университетского уровня, постоянная сертификация врачебных кадров и трансляция передовых протоколов лечения.",
    },
    {
      icon: IconScale,
      title: "Правовая безопасность и комплаенс",
      text: "Безукоризненное соблюдение немецких правовых норм, требований KV (Kassenärztliche Vereinigung) и стандартов защиты персональных данных пациентов GDPR.",
    },
  ];

  const values = [
    {
      icon: IconDiamond,
      title: "Высшее качество",
      text: "Немецкие медицинские протоколы доказательной медицины высшего уровня надежности.",
    },
    {
      icon: IconShieldCheck,
      title: "Доверие и безопасность",
      text: "Индивидуальный подход к каждому пациенту и безупречная защита медицинских данных.",
    },
    {
      icon: IconHeartHandshake,
      title: "Надежность партнерства",
      text: "Долгосрочные взаимовыгодные отношения с врачами, клиниками и страховыми кассами.",
    },
    {
      icon: IconBulb,
      title: "Инновации и прогресс",
      text: "Передовое диагностическое оборудование 3T МРТ, телемедицина и цифровая среда.",
    },
  ];

  const iconCatalog = [
    { name: "Стетоскоп", icon: IconStethoscope, category: "Медицина" },
    { name: "Микроскоп", icon: IconMicroscope, category: "Диагностика" },
    { name: "ЭКГ / Пульс", icon: IconHeartRateMonitor, category: "Медицина" },
    { name: "Реабилитация", icon: IconWalk, category: "Восстановление" },
    { name: "Фармацевтика", icon: IconPill, category: "Фармацевтика" },
    { name: "Вакцинация", icon: IconVaccine, category: "Терапия" },
    { name: "ДНК / Генетика", icon: IconDna2, category: "Наука" },
    { name: "Стационар / Койка", icon: IconEmergencyBed, category: "Клиника" },
    { name: "Неврология / Мозг", icon: IconBrain, category: "Специализация" },
    { name: "Клиника / Госпиталь", icon: IconBuildingHospital, category: "Инфраструктура" },
    { name: "Медицинский центр", icon: IconBuildingCommunity, category: "Недвижимость" },
    { name: "Глобальная сеть", icon: IconWorld, category: "Международный" },
    { name: "Защита / Щит", icon: IconShieldCheck, category: "Безопасность" },
    { name: "Право / Весы", icon: IconScale, category: "Комплаенс" },
    { name: "Сотрудничество", icon: IconHeartHandshake, category: "Отношения" },
    { name: "Бриллиант / Качество", icon: IconDiamond, category: "Ценности" },
    { name: "Инновации / Идея", icon: IconBulb, category: "Развитие" },
    { name: "Команда / Правление", icon: IconUsersGroup, category: "Руководство" },
    { name: "Сертификация", icon: IconCertificate, category: "Стандарты" },
    { name: "Стрелка перехода", icon: IconArrowRight, category: "Интерфейс" },
    { name: "Диагональная стрелка", icon: IconArrowUpRight, category: "Интерфейс" },
    { name: "Подтверждено", icon: IconCircleCheck, category: "Интерфейс" },
    { name: "Телефон / Связь", icon: IconPhone, category: "Контакты" },
    { name: "Локация / Адрес", icon: IconMapPin, category: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#142318]">
      <ComparisonHeader currentTab="option-2" />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#07130B] via-[#0B1E12] to-[#0E2818] text-white pt-12 pb-14 border-b border-[#D5B878]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5B878]/15 border border-[#D5B878]/30 text-[#D5B878] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Вариант 2 из 3</span>
            <span>•</span>
            <span>@tabler/icons-react (stroke=1.35)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Немецкая инженерная геометрия (Bauhaus Precision)
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            Построены по строгой сетке 24×24 пикселя со сбалансированной толщиной штриха <code className="text-[#D5B878] bg-black/30 px-1.5 py-0.5 rounded">stroke=1.35</code>.
            Идеально передает немецкий корпоративный дух (Siemens Healthineers, Fresenius, Helios): строгость, надежность, инженерную выверенность и солидность крупного медицинского холдинга.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-[11px] text-[#D5B878] uppercase font-semibold">Толщина линии</div>
              <div className="text-sm font-bold text-white mt-0.5">1.35 px (Выверенная)</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-[11px] text-[#D5B878] uppercase font-semibold">Характер</div>
              <div className="text-sm font-bold text-white mt-0.5">Немецкий инжиниринг</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-[11px] text-[#D5B878] uppercase font-semibold">Визуальный вес</div>
              <div className="text-sm font-bold text-white mt-0.5">Уверенный / Четкий</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-[11px] text-[#D5B878] uppercase font-semibold">Ассоциация</div>
              <div className="text-sm font-bold text-white mt-0.5">Крупный немецкий холдинг</div>
            </div>
          </div>

          {/* Quick jump */}
          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/10 text-xs">
            <span className="text-white/60">Перейти к другим вариантам:</span>
            <Link
              href="/icons-comparison/option-1"
              className="inline-flex items-center gap-1 text-[#D5B878] hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            >
              <span>Вариант 1 (Phosphor Light)</span>
              <IconArrowRight size={14} stroke={1.35} />
            </Link>
            <Link
              href="/icons-comparison/option-3"
              className="inline-flex items-center gap-1 text-[#D5B878] hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            >
              <span>Вариант 3 (Bespoke Sharp)</span>
              <IconArrowRight size={14} stroke={1.35} />
            </Link>
            <Link
              href="/icons-comparison"
              className="inline-flex items-center gap-1 text-white/90 hover:text-white px-3 py-1.5 rounded-lg bg-[#D5B878]/20 hover:bg-[#D5B878]/30 transition-colors border border-[#D5B878]/40 ml-auto"
            >
              <span>Сравнить все 3 бок о бок</span>
              <IconArrowUpRight size={14} stroke={1.35} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 1: Services Grid Component ── */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 border-b border-[#EAE5DA]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#9C8145] mb-1">
              Реальный блок сайта 1
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142318]">
              Медицинские направления с иконками Tabler (Stroke 1.35)
            </h2>
            <p className="text-sm text-[#5C645A] mt-1">
              Иконка в золотом цвете #C5A56A рядом с заголовком + круглая кнопка со стрелкой
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-row items-stretch rounded-2xl bg-white border border-[#EDE8DE] shadow-[0_2px_10px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:border-[#D5B878] hover:shadow-[0_6px_20px_rgba(197,165,106,0.14)] hover:-translate-y-0.5 h-[152px]"
              >
                <div className="relative h-full flex-shrink-0 overflow-hidden bg-[#07170E]/5 w-[40%]">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="200px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 min-w-0 p-3.5 flex flex-col justify-between h-full bg-white">
                  <div>
                    <div className="flex items-start gap-2.5">
                      <div className="flex-shrink-0 text-[#C5A56A] mt-0.5">
                        <Icon size={22} stroke={1.35} />
                      </div>
                      <h3 className="font-serif font-bold text-[#142318] leading-[1.2] text-[14px] line-clamp-2">
                        {area.title}
                      </h3>
                    </div>

                    <p className="text-[11px] text-[#636861] leading-[1.35] line-clamp-2 mt-1.5">
                      {area.subtitle}
                    </p>
                  </div>

                  <div className="flex justify-end mt-auto pt-1">
                    <div className="w-6 h-6 rounded-full border border-[#D5BE8A] text-[#B89650] flex items-center justify-center flex-shrink-0 group-hover:border-[#B89650] group-hover:bg-[#B89650] group-hover:text-white transition-all shadow-[0_1px_4px_rgba(213,190,138,0.2)]">
                      <IconArrowRight size={13} stroke={1.35} className="transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Section 2: Accordion Holding Purpose ── */}
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 border-b border-[#EAE5DA]">
        <div className="mb-8">
          <div className="text-xs uppercase font-bold tracking-wider text-[#9C8145] mb-1">
            Реальный блок сайта 2
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142318]">
            Задачи и предмет деятельности холдинга (Аккордеон)
          </h2>
          <p className="text-sm text-[#5C645A] mt-1">
            Дизайн в точности как на референсе из немецкого нотариального устава с иконками Tabler (Stroke 1.35)
          </p>
        </div>

        <div className="space-y-3">
          {purposeBlocks.map((block, idx) => {
            const Icon = block.icon;
            const isOpen = openAccordion === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E7E2D7] rounded-xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenAccordion(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-[#FAF8F3] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#E5DFD3] flex items-center justify-center text-[#9C8145] flex-shrink-0">
                      <Icon size={22} stroke={1.35} />
                    </div>
                    <span className="font-serif font-bold text-base sm:text-lg text-[#142318]">
                      {block.title}
                    </span>
                  </div>
                  <div className="text-[#9C8145] flex-shrink-0 ml-3">
                    {isOpen ? <IconChevronUp size={18} stroke={1.35} /> : <IconChevronDown size={18} stroke={1.35} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#4E564F] leading-relaxed border-t border-[#F2EFE8] bg-[#FAF8F5]/60 pl-[64px]">
                    {block.text}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Section 3: Core Values Grid ── */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 border-b border-[#EAE5DA]">
        <div className="mb-8">
          <div className="text-xs uppercase font-bold tracking-wider text-[#9C8145] mb-1">
            Реальный блок сайта 3
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142318]">
            Корпоративные ценности в стиле Tabler (Stroke 1.35)
          </h2>
          <p className="text-sm text-[#5C645A] mt-1">
            Геометрическая точность и уверенный немецкий графический язык
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#EDE8DE] hover:border-[#D5B878] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EB] to-[#F1E8D5] border border-[#E3D6BC] text-[#9C8145] flex items-center justify-center mb-4 shadow-sm">
                    <Icon size={26} stroke={1.35} />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#142318] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#5D645B] leading-relaxed">
                    {val.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Section 4: Full 24-Icon Gallery (Light & Dark Cards) ── */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <div className="text-xs uppercase font-bold tracking-wider text-[#9C8145] mb-1">
            Полный набор
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142318]">
            Галерея ключевых иконок холдинга (Tabler 1.35)
          </h2>
          <p className="text-sm text-[#5C645A] mt-1">
            Оцените детализацию, читаемость и пропорции каждого символа
          </p>
        </div>

        {/* Light cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {iconCatalog.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#E9E4D9] flex flex-col items-center text-center hover:border-[#D5B878] transition-all hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#EDE7DC] flex items-center justify-center text-[#9C8145] mb-2.5">
                  <Icon size={26} stroke={1.35} />
                </div>
                <div className="text-xs font-semibold text-[#142318] line-clamp-1">{item.name}</div>
                <div className="text-[10px] text-[#8A9088] mt-0.5">{item.category}</div>
              </div>
            );
          })}
        </div>

        {/* Dark mode cards preview (how it looks on #07130B) */}
        <div className="p-8 rounded-3xl bg-[#07130B] border border-[#D5B878]/30 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-[#D5B878]">
                В темно-изумрудной гамме холдинга (#07130B)
              </div>
              <h3 className="font-serif text-xl font-bold text-white mt-1">
                Контраст и читаемость на темном фоне
              </h3>
            </div>
            <span className="text-xs text-white/60">Золотые акценты #D5B878</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {iconCatalog.slice(0, 16).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:border-[#D5B878]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-black/40 border border-[#D5B878]/30 flex items-center justify-center text-[#D5B878] mb-2">
                    <Icon size={22} stroke={1.35} />
                  </div>
                  <div className="text-[11px] font-medium text-white/90 line-clamp-1">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F4EFE6] border border-[#E4DCCA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-serif font-bold text-lg text-[#142318]">
              Хотите оценить кастомные хирургические SVG (Вариант 3)?
            </div>
            <div className="text-xs text-[#5D645B] mt-0.5">
              Индивидуальная ручная геометрия с прямыми краями без закруглений
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/icons-comparison/option-3"
              className="px-4 py-2 rounded-xl bg-[#07130B] text-white hover:bg-[#0B1E12] font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-md"
            >
              <span>Открыть Вариант 3 (Bespoke Sharp)</span>
              <IconArrowRight size={14} stroke={1.35} />
            </Link>
            <Link
              href="/icons-comparison"
              className="px-4 py-2 rounded-xl bg-[#D5B878] text-[#07130B] hover:bg-[#C8A864] font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-md"
            >
              <span>Бок о бок</span>
              <IconArrowUpRight size={14} stroke={1.35} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
