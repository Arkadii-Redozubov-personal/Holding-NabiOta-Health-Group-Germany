import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SupportedLocale } from "@/lib/i18n";

interface HomeCtaBannerSectionProps {
  currentLocale?: SupportedLocale;
}

export function HomeCtaBannerSection({ currentLocale = "de" }: HomeCtaBannerSectionProps) {
  const isRu = currentLocale === "ru";
  const isEn = currentLocale === "en";

  const t = {
    eyebrow: isRu
      ? "ОБЪЕДИНЯЯ ОПЫТ. СОЗДАВАЯ БУДУЩЕЕ МЕДИЦИНЫ."
      : isEn
      ? "CONNECTING COMPETENCE. SHAPING HEALTHCARE."
      : "KOMPETENZ VERBINDEN. GESUNDHEIT GESTALTEN.",
    title: isRu
      ? "Вместе ради передовой и доступной медицины."
      : isEn
      ? "Partnering for a Healthier, Forward-Thinking Future."
      : "Gemeinsam für eine zukunftssichere Gesundheitsversorgung.",
    desc: isRu
      ? "Ищете ли вы высокотехнологичную медицинскую помощь, планируете партнерство в рамках врачебной практики или развиваете инвестиционные проекты в здравоохранении — команда NabiOta® открыта к надежному диалогу."
      : isEn
      ? "Whether you are a patient seeking top-tier clinical care, a physician exploring collaborative network opportunities, or a partner realizing medical infrastructure — NabiOta® is your committed companion."
      : "Ob Sie als Patient erstklassige medizinische Betreuung suchen, als Arzt eine starke partnerschaftliche Praxisstruktur schätzen oder als Träger zukunftssichere Projekte realisieren möchten – die NabiOta® Health Group ist Ihr verlässlicher Begleiter.",
    btnPrimary: isRu ? "Связаться с нами" : isEn ? "Get in Touch With Us" : "Kontakt aufnehmen",
    btnSecondary: isRu ? "Направления холдинга" : isEn ? "Explore Our Divisions" : "Unternehmensbereiche",
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#D5B878]/30">
      {/* Background Image & Forest Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/values/mountains-bg.webp"
          alt="Alps panoramic background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08170D]/94 via-[#08170D]/88 to-[#08170D]/94" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 text-center">
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
          <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.26em] text-[#C5A56A] uppercase block">
            {t.eyebrow}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white font-normal leading-[1.18]">
            {t.title}
          </h2>

          <p className="text-white/85 text-xs sm:text-[14px] leading-relaxed font-sans max-w-xl mx-auto">
            {t.desc}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href={`/${currentLocale}/contact`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-[13.5px] tracking-wide shadow-lg transition-all duration-200 hover:scale-102"
            >
              <span>{t.btnPrimary}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href={`/${currentLocale}/areas`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/30 hover:border-[#D5B878] text-white hover:text-[#ECCF96] font-medium text-xs sm:text-[13px] transition-all bg-white/5 backdrop-blur-sm"
            >
              <span>{t.btnSecondary}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
