"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Stethoscope as PhosphorStethoscope,
  Microscope as PhosphorMicroscope,
  Heartbeat as PhosphorHeartbeat,
  PersonSimpleWalk as PhosphorWalk,
  Buildings as PhosphorBuildings,
  ShieldCheck as PhosphorShield,
  Scales as PhosphorScales,
  Handshake as PhosphorHandshake,
  Diamond as PhosphorDiamond,
  UsersThree as PhosphorUsers,
  ArrowRight as PhosphorArrow,
  CaretDown as PhosphorCaret,
  HouseLine as PhosphorHome,
  GlobeHemisphereWest as PhosphorGlobe,
  Certificate as PhosphorAward,
  Pill as PhosphorPill,
} from "@phosphor-icons/react";
import {
  IconStethoscope,
  IconMicroscope,
  IconHeartRateMonitor,
  IconWalk,
  IconBuildingHospital,
  IconShieldCheck,
  IconScale,
  IconHeartHandshake,
  IconDiamond,
  IconUsersGroup,
  IconArrowRight,
  IconChevronDown,
  IconBuildingCommunity,
  IconWorld,
  IconCertificate,
  IconPill,
} from "@tabler/icons-react";
import {
  SharpStethoscope,
  SharpMicroscope,
  SharpHeartbeat,
  SharpRehabilitation,
  SharpHospital,
  SharpShieldCheck,
  SharpScales,
  SharpHandshake,
  SharpDiamond,
  SharpUsers,
  SharpArrowRight,
  SharpChevronDown,
  SharpRealEstate,
  SharpGlobe,
  SharpAward,
  SharpPill,
} from "./BespokeSharpIcons";
import { ComparisonHeader } from "./ComparisonHeader";
import { PhosphorOptionView } from "./PhosphorOptionView";
import { TablerOptionView } from "./TablerOptionView";
import { SharpOptionView } from "./SharpOptionView";

export function MasterComparisonView() {
  const [activeTab, setActiveTab] = useState<"matrix" | "opt1" | "opt2" | "opt3">("matrix");

  const matrixRows = [
    {
      title: "Стетоскоп (Медицина / MVZ)",
      desc: "Главный символ амбулаторной практики и центров MVZ (§ 95 SGB V)",
      renderOpt1: () => <PhosphorStethoscope size={28} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconStethoscope size={28} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpStethoscope size={28} className="text-[#9C8145]" />,
    },
    {
      title: "Микроскоп (Диагностика)",
      desc: "Лабораторные исследования, биопсии и высокоточный анализ",
      renderOpt1: () => <PhosphorMicroscope size={28} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconMicroscope size={28} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpMicroscope size={28} className="text-[#9C8145]" />,
    },
    {
      title: "ЭКГ / Кардиология",
      desc: "Пульс, мониторинг витальных функций, кардиологическое отделение",
      renderOpt1: () => <PhosphorHeartbeat size={28} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconHeartRateMonitor size={28} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpHeartbeat size={28} className="text-[#9C8145]" />,
    },
    {
      title: "Реабилитация / Мобильность",
      desc: "Ортопедическое восстановление, двигательная кинетика, шаг",
      renderOpt1: () => <PhosphorWalk size={28} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconWalk size={28} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpRehabilitation size={28} className="text-[#9C8145]" />,
    },
    {
      title: "Клиника / Госпиталь",
      desc: "Архитектура медицинского комплекса и стационарного корпуса",
      renderOpt1: () => <PhosphorBuildings size={28} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconBuildingHospital size={28} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpHospital size={28} className="text-[#9C8145]" />,
    },
    {
      title: "Щит / Безопасность и защита",
      desc: "Холдинговая защита активов, комплаенс, надежность инвестиций",
      renderOpt1: () => <PhosphorShield size={28} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconShieldCheck size={28} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpShieldCheck size={28} className="text-[#9C8145]" />,
    },
    {
      title: "Весы правосудия (Закон и право)",
      desc: "Юридическая безупречность, соблюдение немецкого законодательства SGB V",
      renderOpt1: () => <PhosphorScales size={28} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconScale size={28} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpScales size={28} className="text-[#9C8145]" />,
    },
    {
      title: "Партнерство / Рукопожатие",
      desc: "Альянсы с немецкими клиниками, университетами и страховыми кассами",
      renderOpt1: () => <PhosphorHandshake size={28} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconHeartHandshake size={28} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpHandshake size={28} className="text-[#9C8145]" />,
    },
    {
      title: "Бриллиант (Высшее качество)",
      desc: "Корпоративная ценность: бескомпромиссное немецкое качество",
      renderOpt1: () => <PhosphorDiamond size={28} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconDiamond size={28} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpDiamond size={28} className="text-[#9C8145]" />,
    },
    {
      title: "Команда / Правление холдинга",
      desc: "Руководство, совет директоров, врачебная коллегия",
      renderOpt1: () => <PhosphorUsers size={28} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconUsersGroup size={28} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpUsers size={28} className="text-[#9C8145]" />,
    },
    {
      title: "Фармация / Препараты",
      desc: "Фармацевтическая логистика и клинические медикаменты",
      renderOpt1: () => <PhosphorPill size={28} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconPill size={28} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpPill size={28} className="text-[#9C8145]" />,
    },
    {
      title: "Стрелка перехода (Кнопки и ссылки)",
      desc: "Главный элемент интерактивных кнопок и переходов по сайту",
      renderOpt1: () => <PhosphorArrow size={24} weight="light" className="text-[#9C8145]" />,
      renderOpt2: () => <IconArrowRight size={24} stroke={1.35} className="text-[#9C8145]" />,
      renderOpt3: () => <SharpArrowRight size={24} className="text-[#9C8145]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#142318]">
      <ComparisonHeader currentTab="all" />

      {/* Top Hero and Mode Switcher */}
      <section className="bg-gradient-to-b from-[#07130B] via-[#0B1E12] to-[#0E2818] text-white pt-12 pb-14 border-b border-[#D5B878]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5B878]/15 border border-[#D5B878]/30 text-[#D5B878] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Центр сравнения вариантов</span>
            <span>•</span>
            <span>NabiOta Health Group Germany</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Сравнение стилей иконок для холдинга
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            По вашему запросу мы подготовили 3 альтернативы стандартным AI-иконкам.
            Ниже вы можете открыть каждый вариант на отдельной странице или сравнить их прямо сейчас бок о бок.
          </p>

          {/* 3 Dedicated Page Jump Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D5B878] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#D5B878]">
                    Вариант 1
                  </span>
                  <span className="text-[11px] text-white/50">weight=&quot;light&quot;</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D5B878] transition-colors">
                  Phosphor Icons (Light)
                </h3>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Швейцарский редакционный минимализм. Тончайшие линии, изысканная воздушность. Идеально для элитной частной медицины.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#D5B878]">
                  <PhosphorStethoscope size={22} weight="light" />
                  <PhosphorMicroscope size={22} weight="light" />
                  <PhosphorHeartbeat size={22} weight="light" />
                </div>
                <Link
                  href="/icons-comparison/option-1"
                  className="px-3 py-1.5 rounded-lg bg-[#D5B878] text-[#07130B] font-bold text-xs hover:bg-white transition-colors"
                >
                  Открыть страницу →
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D5B878] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#D5B878]">
                    Вариант 2
                  </span>
                  <span className="text-[11px] text-white/50">stroke=1.35</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D5B878] transition-colors">
                  Tabler Icons (Bauhaus)
                </h3>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Немецкая инженерная геометрия. Строгая сетка 24×24, выверенный баланс. Передает солидность крупного немецкого холдинга.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#D5B878]">
                  <IconStethoscope size={22} stroke={1.35} />
                  <IconMicroscope size={22} stroke={1.35} />
                  <IconHeartRateMonitor size={22} stroke={1.35} />
                </div>
                <Link
                  href="/icons-comparison/option-2"
                  className="px-3 py-1.5 rounded-lg bg-[#D5B878] text-[#07130B] font-bold text-xs hover:bg-white transition-colors"
                >
                  Открыть страницу →
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D5B878] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#D5B878]">
                    Вариант 3
                  </span>
                  <span className="text-[11px] text-white/50">Square Caps</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D5B878] transition-colors">
                  Bespoke Sharp SVGs
                </h3>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Хирургическая точность. Прямые окончания штрихов без закруглений, авторский дизайн эксклюзивно для NabiOta Health Group.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#D5B878]">
                  <SharpStethoscope size={22} />
                  <SharpMicroscope size={22} />
                  <SharpHeartbeat size={22} />
                </div>
                <Link
                  href="/icons-comparison/option-3"
                  className="px-3 py-1.5 rounded-lg bg-[#D5B878] text-[#07130B] font-bold text-xs hover:bg-white transition-colors"
                >
                  Открыть страницу →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison Matrix */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#9C8145] mb-1">
              Прямое сопоставление
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142318]">
              Матрица сравнения ключевых символов холдинга
            </h2>
            <p className="text-sm text-[#5C645A] mt-1">
              Сравните толщину линии, детализацию и характер каждого глифа в трех вариантах
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-[#E7E2D7] overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#FAF8F5] border-b border-[#E7E2D7] py-4 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider text-[#142318]">
            <div className="col-span-12 sm:col-span-4">Символ / Назначение</div>
            <div className="hidden sm:block col-span-8">
              <div className="grid grid-cols-3 text-center">
                <div className="px-2">
                  <span className="text-[#9C8145]">Вариант 1:</span> Phosphor Light
                </div>
                <div className="px-2">
                  <span className="text-[#9C8145]">Вариант 2:</span> Tabler 1.35
                </div>
                <div className="px-2">
                  <span className="text-[#9C8145]">Вариант 3:</span> Sharp SVGs
                </div>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#EFEAE1]">
            {matrixRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 py-4 px-4 sm:px-6 items-center hover:bg-[#FAF9F5] transition-colors"
              >
                {/* Description Column */}
                <div className="col-span-12 sm:col-span-4 mb-3 sm:mb-0">
                  <div className="font-serif font-bold text-sm sm:text-base text-[#142318]">
                    {row.title}
                  </div>
                  <div className="text-xs text-[#6F766D] mt-0.5">{row.desc}</div>
                </div>

                {/* 3 Option Icon Columns */}
                <div className="col-span-12 sm:col-span-8">
                  <div className="grid grid-cols-3 gap-2">
                    {/* Option 1 */}
                    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#FAF8F5] border border-[#EBE5DB]">
                      <div className="w-12 h-12 rounded-lg bg-white border border-[#E2DBD0] flex items-center justify-center shadow-xs">
                        {row.renderOpt1()}
                      </div>
                      <span className="text-[10px] text-[#8C938A] mt-1.5 sm:hidden font-semibold">
                        Phosphor Light
                      </span>
                    </div>

                    {/* Option 2 */}
                    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#FAF8F5] border border-[#EBE5DB]">
                      <div className="w-12 h-12 rounded-lg bg-white border border-[#E2DBD0] flex items-center justify-center shadow-xs">
                        {row.renderOpt2()}
                      </div>
                      <span className="text-[10px] text-[#8C938A] mt-1.5 sm:hidden font-semibold">
                        Tabler 1.35
                      </span>
                    </div>

                    {/* Option 3 */}
                    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#FAF8F5] border border-[#EBE5DB]">
                      <div className="w-12 h-12 rounded-lg bg-white border border-[#E2DBD0] flex items-center justify-center shadow-xs">
                        {row.renderOpt3()}
                      </div>
                      <span className="text-[10px] text-[#8C938A] mt-1.5 sm:hidden font-semibold">
                        Bespoke Sharp
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Component Comparison Side-by-Side: 1 Service Card in 3 variations */}
        <div className="mt-14">
          <div className="mb-6">
            <div className="text-xs uppercase font-bold tracking-wider text-[#9C8145] mb-1">
              Реальная карточка направления
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#142318]">
              Как выглядит карточка «Медицинские направления» в каждом стиле
            </h3>
            <p className="text-xs text-[#5D645B] mt-1">
              Оцените сочетание иконки рядом с заголовком и круглой кнопки перехода
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Style 1 Preview Card */}
            <div className="p-4 rounded-2xl bg-white border-2 border-[#D5B878]/60 shadow-sm relative">
              <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-[#07130B] text-[#D5B878] text-[10px] font-bold uppercase tracking-wider">
                Вариант 1 (Phosphor Light)
              </div>
              <div className="mt-2 flex items-start gap-2.5">
                <div className="text-[#C5A56A] mt-0.5">
                  <PhosphorStethoscope size={24} weight="light" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#142318]">
                    Медицинские направления
                  </h4>
                  <p className="text-xs text-[#636861] mt-1 leading-relaxed">
                    Амбулаторная помощь (§ 95 SGB V), два центра MVZ и подготовка клиники
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F2ECE1] flex items-center justify-between">
                <span className="text-[11px] text-[#8E958C]">Швейцарская утонченность</span>
                <div className="w-6 h-6 rounded-full border border-[#D5BE8A] text-[#B89650] flex items-center justify-center">
                  <PhosphorArrow size={13} weight="light" />
                </div>
              </div>
            </div>

            {/* Style 2 Preview Card */}
            <div className="p-4 rounded-2xl bg-white border-2 border-[#D5B878]/60 shadow-sm relative">
              <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-[#07130B] text-[#D5B878] text-[10px] font-bold uppercase tracking-wider">
                Вариант 2 (Tabler 1.35)
              </div>
              <div className="mt-2 flex items-start gap-2.5">
                <div className="text-[#C5A56A] mt-0.5">
                  <IconStethoscope size={24} stroke={1.35} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#142318]">
                    Медицинские направления
                  </h4>
                  <p className="text-xs text-[#636861] mt-1 leading-relaxed">
                    Амбулаторная помощь (§ 95 SGB V), два центра MVZ и подготовка клиники
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F2ECE1] flex items-center justify-between">
                <span className="text-[11px] text-[#8E958C]">Немецкая надежность</span>
                <div className="w-6 h-6 rounded-full border border-[#D5BE8A] text-[#B89650] flex items-center justify-center">
                  <IconArrowRight size={13} stroke={1.35} />
                </div>
              </div>
            </div>

            {/* Style 3 Preview Card */}
            <div className="p-4 rounded-2xl bg-white border-2 border-[#D5B878]/60 shadow-sm relative">
              <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-[#07130B] text-[#D5B878] text-[10px] font-bold uppercase tracking-wider">
                Вариант 3 (Bespoke Sharp)
              </div>
              <div className="mt-2 flex items-start gap-2.5">
                <div className="text-[#C5A56A] mt-0.5">
                  <SharpStethoscope size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#142318]">
                    Медицинские направления
                  </h4>
                  <p className="text-xs text-[#636861] mt-1 leading-relaxed">
                    Амбулаторная помощь (§ 95 SGB V), два центра MVZ и подготовка клиники
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F2ECE1] flex items-center justify-between">
                <span className="text-[11px] text-[#8E958C]">Хирургическая эксклюзивность</span>
                <div className="w-6 h-6 rounded-full border border-[#D5BE8A] text-[#B89650] flex items-center justify-center">
                  <SharpArrowRight size={13} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation & Summary Card */}
        <div className="mt-14 p-8 rounded-3xl bg-[#07130B] border border-[#D5B878]/30 text-white shadow-2xl">
          <div className="max-w-3xl">
            <div className="text-xs uppercase font-bold tracking-wider text-[#D5B878] mb-2">
              Экспертный вердикт по брендингу
            </div>
            <h3 className="font-serif text-2xl font-bold text-white leading-snug">
              Какой вариант лучше всего подходит для NabiOta Health Group Germany?
            </h3>
            <p className="text-sm text-white/80 mt-3 leading-relaxed">
              • <strong>Вариант 1 (Phosphor Light)</strong> идеален, если вы хотите сделать акцент на швейцарской утонченности, легкости и эстетике Private Clinic высшего ценового сегмента.<br />
              • <strong>Вариант 2 (Tabler 1.35)</strong> — самый органичный выбор для немецкого холдинга с жесткими стандартами § 95 SGB V, перекликающийся с ведущими медицинскими концернами ФРГ.<br />
              • <strong>Вариант 3 (Bespoke Sharp)</strong> — наивысшая уникальность и авторский статус, гарантирующий, что ни у одного другого сайта не будет похожих иконок.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/icons-comparison/option-1"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/20"
              >
                Открыть Вариант 1 →
              </Link>
              <Link
                href="/icons-comparison/option-2"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/20"
              >
                Открыть Вариант 2 →
              </Link>
              <Link
                href="/icons-comparison/option-3"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/20"
              >
                Открыть Вариант 3 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
