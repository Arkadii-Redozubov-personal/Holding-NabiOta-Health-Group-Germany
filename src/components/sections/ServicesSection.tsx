import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  Network,
  Globe,
} from "lucide-react";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface ServicesSectionProps {
  currentLocale?: SupportedLocale;
}

export function ServicesSection({ currentLocale = "de" }: ServicesSectionProps) {
  const dict = getDictionary(currentLocale);
  const isRu = currentLocale === "ru";
  const isEn = currentLocale === "en";

  const areas = [
    {
      slug: "medizinische-fachbereiche",
      icon: Stethoscope,
      image: "/images/areas/medical-departments.webp",
      title: isRu
        ? "Медицинские направления"
        : isEn
        ? "Medical Departments"
        : "Medizinische Fachbereiche",
      subtitle: isRu
        ? "Амбулаторная помощь (§ 95 SGB V), два центра MVZ и подготовка клиники"
        : isEn
        ? "Outpatient medicine (§ 95 SGB V), two dedicated MVZ centers and clinic preparation"
        : "Ambulante Spitzenmedizin (§ 95 SGB V), zwei MVZ-Zentren & Klinikaufbau",
    },
    {
      slug: "diagnostik",
      icon: Microscope,
      image: "/images/areas/diagnostics.webp",
      title: isRu ? "Диагностика" : isEn ? "Diagnostics" : "Diagnostik",
      subtitle: isRu
        ? "3T МРТ, низкодозовая КТ, цифровой рентген и нейрофизиология"
        : isEn
        ? "3T MRI, low-dose CT, digital radiography & clinical neurophysiology"
        : "Niedrigdosis-CT, 3T MRT, digitales Röntgen & Neurophysiologie",
    },
    {
      slug: "rehabilitation",
      icon: HeartPulse,
      image: "/images/areas/rehabilitation.webp",
      title: isRu ? "Реабилитация" : isEn ? "Rehabilitation" : "Rehabilitation",
      subtitle: isRu
        ? "Амбулаторная реабилитация, физио-, эрго-, логопедия и бассейн 32°C"
        : isEn
        ? "Outpatient rehab, physiotherapy, speech therapy and 32°C hydrotherapy pool"
        : "Ganzheitliche Reha, Physio-, Ergo-, Logopädie & Bewegungsbad 32°C",
    },
    {
      slug: "pflege",
      icon: Users,
      image: "/images/areas/pflege.webp",
      title: isRu ? "Патронаж и уход" : isEn ? "Nursing & HomeCare" : "Pflege & HomeCare",
      subtitle: isRu
        ? "Квалифицированный уход по SGB V/XI и сертифицированное лечение ран ICW"
        : isEn
        ? "Qualified home care under SGB V/XI and certified ICW wound management"
        : "Ambulante Pflege nach SGB V/XI & zertifizierte ICW-Wundversorgung",
    },
    {
      slug: "beratung-projektentwicklung",
      icon: Network,
      image: "/images/areas/consulting.webp",
      title: isRu
        ? "Консалтинг и девелопмент"
        : isEn
        ? "Consulting & Real Estate"
        : "Beratung & Projektentwicklung",
      subtitle: isRu
        ? "Медицинская недвижимость, чистые операционные DIN 1946-4 и структуры MVZ"
        : isEn
        ? "Healthcare facilities, DIN 1946-4 cleanroom suites & MVZ structures"
        : "Gesundheitsimmobilien, OP-Zentren nach DIN 1946-4 & MVZ-Strukturen",
    },
    {
      slug: "internationale-kooperationen",
      icon: Globe,
      image: "/images/areas/international.webp",
      title: isRu
        ? "Международное сотрудничество"
        : isEn
        ? "International Cooperations"
        : "Internationale Kooperationen",
      subtitle: isRu
        ? "Рекрутинг медиков, нострификация и Approbation, партнерство с клиниками"
        : isEn
        ? "Healthcare recruitment, medical degree licensing (Approbation) & clinic partnerships"
        : "Fachkräftegewinnung, Approbationsbegleitung & Klinikpartnerschaften",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-10 sm:py-12 lg:py-14 border-b border-[#EAE5DA]">
      <div className="mx-auto w-full max-w-[1540px] 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── Section Header ───────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7 sm:mb-9">
          <div>
            <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.22em] text-[#9C8145] uppercase block mb-1.5">
              {dict.areas.eyebrow}
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#112117] tracking-tight leading-[1.15]">
              {isRu
                ? "Комплексная забота о здоровье на всех этапах жизни"
                : isEn
                ? "Comprehensive care across all life stages"
                : "Ganzheitliche Versorgung über alle Lebensphasen"}
            </h2>
          </div>

          <Link
            href={`/${currentLocale}/areas`}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-[13.5px] font-semibold text-[#9C8145] hover:text-[#7D6532] transition-colors self-start sm:self-end whitespace-nowrap mb-1"
          >
            <span>{dict.areas.cta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── 6 Business Area Cards in 2 Rows of 3 ────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <Link
                key={area.slug}
                href={`/${currentLocale}/areas/${area.slug}`}
                className="group relative flex flex-row items-stretch rounded-2xl bg-white border border-[#EDE8DE] shadow-[0_2px_10px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:border-[#D5B878] hover:shadow-[0_6px_20px_rgba(197,165,106,0.14)] hover:-translate-y-0.5 focus:outline-none h-[146px] sm:h-[152px] lg:h-[156px]"
              >
                {/* Left Thumbnail Image */}
                <div className="relative h-full flex-shrink-0 overflow-hidden bg-[#07170E]/5 w-[38%] sm:w-[40%] lg:w-[42%]">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(max-width: 640px) 140px, (max-width: 1024px) 200px, 240px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 min-w-0 p-3 sm:p-3.5 lg:p-4 flex flex-col justify-between h-full bg-white">
                  <div>
                    <div className="flex items-start gap-2 sm:gap-2.5">
                      <div className="flex-shrink-0 text-[#C5A56A] mt-0.5">
                        <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.6]" />
                      </div>
                      <h3 className="font-serif font-bold text-[#142318] leading-[1.2] group-hover:text-[#BFA267] transition-colors text-[13px] sm:text-[14px] lg:text-[14.5px] line-clamp-2">
                        {area.title}
                      </h3>
                    </div>

                    <p className="text-[10.5px] sm:text-[11px] lg:text-[11.5px] text-[#636861] leading-[1.35] line-clamp-2 mt-1.5">
                      {area.subtitle}
                    </p>
                  </div>

                  {/* Bottom-right: Small gold circular outline with ArrowRight */}
                  <div className="flex justify-end mt-auto pt-1">
                    <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full border border-[#D5BE8A] text-[#B89650] flex items-center justify-center flex-shrink-0 group-hover:border-[#B89650] group-hover:bg-[#B89650] group-hover:text-white transition-all shadow-[0_1px_4px_rgba(213,190,138,0.2)]">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[1.8] transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
