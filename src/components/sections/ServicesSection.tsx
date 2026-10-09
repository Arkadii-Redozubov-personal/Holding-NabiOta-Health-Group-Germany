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
  const isTr = currentLocale === "tr";
  const isAr = currentLocale === "ar";
  const isUz = currentLocale === "uz";
  const isEn = currentLocale === "en";

  const areas = [
    {
      slug: "medizinische-fachbereiche",
      icon: Stethoscope,
      image: "/images/areas/medical-departments.webp",
      title: isRu
        ? "Медицинские направления"
        : isTr
        ? "Tıbbi Uzmanlık Alanları"
        : isAr
        ? "الأقسام والتخصصات الطبية"
        : isUz
        ? "Tibbiyot yo'nalishlari"
        : isEn
        ? "Medical Departments"
        : "Medizinische Fachbereiche",
      subtitle: isRu
        ? "Амбулаторная помощь (§ 95 SGB V), два центра MVZ и подготовка клиники"
        : isTr
        ? "Ayakta uzman hekim tedavisi (§ 95 SGB V), 2 MVZ merkezi ve klinik hazırlığı"
        : isAr
        ? "طب العيادات الخارجية التخصصي (§ 95 SGB V)، مركزا MVZ وبناء المستشفى الطبي"
        : isUz
        ? "Ambulator yordam (§ 95 SGB V), ikkita MVZ markazi va klinika tayyorlash"
        : isEn
        ? "Outpatient medicine (§ 95 SGB V), two dedicated MVZ centers and clinic preparation"
        : "Ambulante Spitzenmedizin (§ 95 SGB V), zwei MVZ-Zentren & Klinikaufbau",
    },
    {
      slug: "diagnostik",
      icon: Microscope,
      image: "/images/areas/diagnostics.webp",
      title: isRu
        ? "Диагностика"
        : isTr
        ? "Tanı ve Radyoloji"
        : isAr
        ? "التشخيص الطبي والتصوير"
        : isUz
        ? "Diagnostika"
        : isEn
        ? "Diagnostics"
        : "Diagnostik",
      subtitle: isRu
        ? "3T МРТ, низкодозовая КТ, цифровой рентген и нейрофизиология"
        : isTr
        ? "3T MR, düşük dozlu BT, dijital röntgen ve klinik nörofizyoloji"
        : isAr
        ? "رنين مغناطيسي 3T، أشعة مقطعية بجرعات منخفضة، أشعة رقمية وتخطيط أعصاب"
        : isUz
        ? "3T MRT, past dozali KT, raqamli rentgen va neyrofiziologiya"
        : isEn
        ? "3T MRI, low-dose CT, digital radiography & clinical neurophysiology"
        : "Niedrigdosis-CT, 3T MRT, digitales Röntgen & Neurophysiologie",
    },
    {
      slug: "rehabilitation",
      icon: HeartPulse,
      image: "/images/areas/rehabilitation.webp",
      title: isRu
        ? "Реабилитация"
        : isTr
        ? "Rehabilitasyon"
        : isAr
        ? "التأهيل الطبي المتكامل"
        : isUz
        ? "Reabilitatsiya"
        : isEn
        ? "Rehabilitation"
        : "Rehabilitation",
      subtitle: isRu
        ? "Амбулаторная реабилитация, физио-, эрго-, логопедия и бассейн 32°C"
        : isTr
        ? "Kapsamlı ayakta rehabilitasyon, fizyo-, ergo-, konuşma terapisi ve 32°C hidroterapi"
        : isAr
        ? "تأهيل طبي شامل للعيادات الخارجية، علاج طبيعي ووظيفي ونطق ومسبح علاجي 32°م"
        : isUz
        ? "Ambulator reabilitatsiya, fizio-, ergo-, logopediya va 32°C davolash havzasi"
        : isEn
        ? "Outpatient rehab, physiotherapy, speech therapy and 32°C hydrotherapy pool"
        : "Ganzheitliche Reha, Physio-, Ergo-, Logopädie & Bewegungsbad 32°C",
    },
    {
      slug: "pflege",
      icon: Users,
      image: "/images/areas/pflege.webp",
      title: isRu
        ? "Патронаж и уход"
        : isTr
        ? "Bakım & HomeCare"
        : isAr
        ? "التمريض والرعاية المنزلية"
        : isUz
        ? "Parvarish va HomeCare"
        : isEn
        ? "Nursing & HomeCare"
        : "Pflege & HomeCare",
      subtitle: isRu
        ? "Квалифицированный уход по SGB V/XI и сертифицированное лечение ран ICW"
        : isTr
        ? "SGB V/XI kapsamında evde bakım & ICW sertifikalı yara tedavisi yönetimi"
        : isAr
        ? "رعاية تمريضية متخصصة (SGB V/XI) وإدارة علاج الجروح المعتمدة (ICW)"
        : isUz
        ? "SGB V/XI bo'yicha malakali parvarish va sertifikatlangan ICW jarohat davolash"
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
        : isTr
        ? "Danışmanlık & Gayrimenkul Geliştirme"
        : isAr
        ? "الاستشارات وتطوير المرافق الصحية"
        : isUz
        ? "Konsalting va developpent"
        : isEn
        ? "Consulting & Real Estate"
        : "Beratung & Projektentwicklung",
      subtitle: isRu
        ? "Медицинская недвижимость, чистые операционные DIN 1946-4 и структуры MVZ"
        : isTr
        ? "Sağlık yapıları, DIN 1946-4 standartlarında ameliyathaneler ve MVZ yapıları"
        : isAr
        ? "عقارات الرعاية الصحية، مجمعات جراحية وفق معايير DIN 1946-4 وتطوير مراكز MVZ"
        : isUz
        ? "Tibbiy ko'chmas mulk, DIN 1946-4 operatsiya xonalari va MVZ tuzilmalari"
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
        : isTr
        ? "Uluslararası İş Birlikleri"
        : isAr
        ? "التعاون والشراكات الدولية"
        : isUz
        ? "Xalqaro hamkorlik"
        : isEn
        ? "International Cooperations"
        : "Internationale Kooperationen",
      subtitle: isRu
        ? "Рекрутинг медиков, нострификация и Approbation, партнерство с клиниками"
        : isTr
        ? "Medikal istihdam, hekim denklik desteği (Approbation) ve klinik ortaklıkları"
        : isAr
        ? "استقطاب الكوادر الطبية، معادلة الشهادات الألمانية (Approbation) وشراكات المشافي"
        : isUz
        ? "Tibbiy kadrlar jalb qilish, Approbation va diplom tan olinishi, klinik hamkorlik"
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
            <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#112117] tracking-tight leading-[1.15]">
              {isRu
                ? "Комплексная забота о здоровье на всех этапах жизни"
                : isTr
                ? "Hayatın her aşamasında bütüncül sağlık hizmeti"
                : isAr
                ? "رعاية صحية شاملة ومتكاملة عبر جميع مراحل الحياة"
                : isUz
                ? "Hayotning barcha bosqichlarida kompleks salomatlik g'amxo'rligi"
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
