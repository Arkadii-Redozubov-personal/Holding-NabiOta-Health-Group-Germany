import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface ValuesSectionProps {
  currentLocale?: SupportedLocale;
}

/* ── Custom SVGs matching Reference Photo 1:1 ────────────────────────── */

// 1. Diamond (Qualität)
function DiamondIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 3h12l4 7-10 11L2 10l4-7z" />
      <path d="M2 10h20M12 21 8 10 12 3l4 7-4 11" />
    </svg>
  );
}

// 2. ShieldCheck (Vertrauen)
function ShieldCheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// 3. Handshake (Verlässlichkeit)
function HandshakeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.4-2.4a1 1 0 0 0-1.4 0L13 13" />
      <path d="m13 13-3-3a1 1 0 0 0-1.4 0L4.3 14.3a1 1 0 0 0 0 1.4l2.4 2.4a1 1 0 0 0 1.4 0L11 15" />
      <path d="m7 7 3-3a1 1 0 0 1 1.4 0l8.9 8.9a1 1 0 0 1 0 1.4l-1.6 1.6" />
      <path d="M2 12l2.6-2.6a1 1 0 0 1 1.4 0L9 12" />
    </svg>
  );
}

// 4. Eye (Transparenz)
function EyeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

// 5. Heart (Menschlichkeit)
function HeartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

// 6. Lightbulb (Innovation)
function LightbulbIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6M10 22h4" />
    </svg>
  );
}

export function ValuesSection({ currentLocale = "de" }: ValuesSectionProps) {
  const dict = getDictionary(currentLocale);

  const valuesList = [
    {
      id: "qualitaet",
      icon: DiamondIcon,
      title:
        currentLocale === "ru"
          ? "Качество"
          : currentLocale === "tr"
          ? "Kalite"
          : currentLocale === "ar"
          ? "الجودة"
          : currentLocale === "uz"
          ? "Sifat"
          : currentLocale === "en"
          ? "Quality"
          : "Qualität",
      desc:
        currentLocale === "ru"
          ? "Высочайшие стандарты во всех сферах."
          : currentLocale === "tr"
          ? "Tüm alanlarda en yüksek standartlar."
          : currentLocale === "ar"
          ? "أعلى المعايير في جميع المجالات."
          : currentLocale === "uz"
          ? "Barcha sohalarda eng yuqori standartlar."
          : currentLocale === "en"
          ? "Highest clinical standards across all divisions."
          : "Höchste Standards in allen Bereichen.",
    },
    {
      id: "vertrauen",
      icon: ShieldCheckIcon,
      title:
        currentLocale === "ru"
          ? "Доверие"
          : currentLocale === "tr"
          ? "Güven"
          : currentLocale === "ar"
          ? "الثقة"
          : currentLocale === "uz"
          ? "Ishonch"
          : currentLocale === "en"
          ? "Trust"
          : "Vertrauen",
      desc:
        currentLocale === "ru"
          ? "Честное и надежное партнерство."
          : currentLocale === "tr"
          ? "Dürüst ve güvenilir ortaklıklar."
          : currentLocale === "ar"
          ? "شراكات نزيهة وموثوقة."
          : currentLocale === "uz"
          ? "Halol va mustahkam hamkorlik."
          : currentLocale === "en"
          ? "Honest and reliable partnerships."
          : "Ehrliche und verlässliche Partnerschaften.",
    },
    {
      id: "verlaesslichkeit",
      icon: HandshakeIcon,
      title:
        currentLocale === "ru"
          ? "Надежность"
          : currentLocale === "tr"
          ? "Bağlılık & Güvenilirlik"
          : currentLocale === "ar"
          ? "الموثوقية"
          : currentLocale === "uz"
          ? "Mas'uliyat"
          : currentLocale === "en"
          ? "Reliability"
          : "Verlässlichkeit",
      desc:
        currentLocale === "ru"
          ? "Постоянство в наших действиях."
          : currentLocale === "tr"
          ? "Eylemlerimizde istikrar ve süreklilik."
          : currentLocale === "ar"
          ? "ثبات والتزام في كل خطوة."
          : currentLocale === "uz"
          ? "Faoliyatimizda qat'iylik va barqarorlik."
          : currentLocale === "en"
          ? "Consistency in our actions."
          : "Beständigkeit in unserem Handeln.",
    },
    {
      id: "transparenz",
      icon: EyeIcon,
      title:
        currentLocale === "ru"
          ? "Прозрачность"
          : currentLocale === "tr"
          ? "Şeffaflık"
          : currentLocale === "ar"
          ? "الشفافية"
          : currentLocale === "uz"
          ? "Shaffoflik"
          : currentLocale === "en"
          ? "Transparency"
          : "Transparenz",
      desc:
        currentLocale === "ru"
          ? "Открытый диалог и понятные процессы."
          : currentLocale === "tr"
          ? "Açık iletişim ve anlaşılır süreçler."
          : currentLocale === "ar"
          ? "تواصل واضح وإجراءات شفافة."
          : currentLocale === "uz"
          ? "Ochiq muloqot va aniq jarayonlar."
          : currentLocale === "en"
          ? "Open communication and clear processes."
          : "Offene Kommunikation und klare Prozesse.",
    },
    {
      id: "menschlichkeit",
      icon: HeartIcon,
      title:
        currentLocale === "ru"
          ? "Человечность"
          : currentLocale === "tr"
          ? "İnsani Yaklaşım"
          : currentLocale === "ar"
          ? "الإنسانية"
          : currentLocale === "uz"
          ? "Insoniylik"
          : currentLocale === "en"
          ? "Humanity"
          : "Menschlichkeit",
      desc:
        currentLocale === "ru"
          ? "Человек в центре внимания."
          : currentLocale === "tr"
          ? "İnsan daima odak noktamızdadır."
          : currentLocale === "ar"
          ? "الإنسان في صميم اهتمامنا."
          : currentLocale === "uz"
          ? "Inson har doim e'tiborimiz markazida."
          : currentLocale === "en"
          ? "People at the center of healthcare."
          : "Der Mensch steht im Mittelpunkt.",
    },
    {
      id: "innovation",
      icon: LightbulbIcon,
      title:
        currentLocale === "ru"
          ? "Инновации"
          : currentLocale === "tr"
          ? "Yenilikçilik"
          : currentLocale === "ar"
          ? "الابتكار"
          : currentLocale === "uz"
          ? "Innovatsiyalar"
          : currentLocale === "en"
          ? "Innovation"
          : "Innovation",
      desc:
        currentLocale === "ru"
          ? "Создаем решения будущего уже сегодня."
          : currentLocale === "tr"
          ? "Bugünden geleceğin çözümlerini geliştiriyoruz."
          : currentLocale === "ar"
          ? "نطور حلول الغد الطبية اليوم."
          : currentLocale === "uz"
          ? "Ertangi kun yechimlarini bugun yaratamiz."
          : currentLocale === "en"
          ? "Developing tomorrow's solutions today."
          : "Heute die Lösungen von morgen entwickeln.",
    },
  ];

  return (
    <section className="relative py-14 sm:py-18 lg:py-20 border-b border-[#EAE5DA] overflow-hidden bg-[#FCFAF5]">
      {/* ── Botanical Leaf Background Image (/images/bacground.webp) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/bacground.webp"
          alt="Botanical background with leaves and dew drops"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-95"
        />
        {/* Soft center ambient gradient to ensure crisp typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF5]/10 via-[#FCFAF5]/40 to-[#FCFAF5]/10" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* ── Section Header matching Reference Photo ───────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-md">
            <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.22em] text-[#C5A56A] uppercase block mb-1.5">
              {dict.values.eyebrow}
            </span>
            <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[44px] font-normal tracking-tight text-[#112117] leading-[1.12]">
              {dict.values.heading}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-[13.5px] text-[#5E625A] leading-relaxed font-sans">
              {dict.values.description}
            </p>
          </div>
        </div>

        {/* ── 6 Values in a Single Horizontal Grid with Dividers ─ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-[#E5DFD4]">
          {valuesList.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.id}
                className="flex flex-col items-center text-center px-2 sm:px-3 lg:px-4 py-2 group"
              >
                {/* Gold outlined circle icon matching reference photo */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D5B878] bg-white/75 backdrop-blur-sm flex items-center justify-center text-[#B89650] mb-3 shadow-[0_0_12px_rgba(213,184,120,0.18)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#B89650] group-hover:bg-[#B89650]/15">
                  <Icon className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.5]" />
                </div>

                <h3 className="font-sans text-[13.5px] sm:text-[14.5px] font-bold text-[#112117] mb-1 group-hover:text-[#BFA267] transition-colors">
                  {val.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#6B6659] leading-relaxed max-w-[155px] mx-auto">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
