import { type Dispatch, type FormEventHandler, type SetStateAction } from "react";
import Image from "next/image";
import { HeroBadges } from "@/components/ui/HeroBadges";
import type { SupportedLocale } from "@/lib/i18n";
import type { CareerContent } from "@/data/career-translations";
import type { RecruitmentPillar } from "@/types/career";
import {
  Award,
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  FileCheck,
  FileText,
  GraduationCap,
  Heart,
  HeartHandshake,
  Info,
  Send,
  Settings,
  Stethoscope,
  Upload,
  Users,
  X,
} from "lucide-react";

export function CareerHero({ locale, t }: { locale: SupportedLocale; t: CareerContent }) {
  return (
    <>
        {/* ── SECTION 1: HERO (Unified Format: Compact Dark Forest Green + Doctors + Golden Arcs) ── */}
        <section dir="ltr" className="relative w-full min-h-[420px] sm:min-h-[460px] lg:h-[500px] lg:min-h-[500px] pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 overflow-hidden flex items-center bg-[#07150C] text-[#FAF8F5] border-b border-[#D5B878]/25">
          {/* Background: Modern Healthcare Professional in scrubs holding tablet - pulled back & sharp framing */}
          <div className="absolute inset-y-0 right-0 z-0 pointer-events-none overflow-hidden w-full sm:left-[28%] sm:w-[72%] lg:left-[35%] lg:w-[65%] xl:left-[38%] xl:w-[62%] 2xl:left-[40%] 2xl:w-[60%]">
            <Image
              src="/images/careers/hero-career-nurse.webp"
              alt="NabiOta Medical Recruitment Services"
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
              <clipPath id="careerLeftWingClip">
                <path d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z" />
              </clipPath>

              <linearGradient id="careerHeroGoldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFC894" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#D4B06A" stopOpacity="1" />
                <stop offset="75%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="careerHeroGoldGradLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ECCF93" stopOpacity="0.08" />
                <stop offset="35%" stopColor="#ECCF93" stopOpacity="0.45" />
                <stop offset="75%" stopColor="#DFC894" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.08" />
              </linearGradient>
              <filter id="careerHeroGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="careerDarkGreenFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#040F07" stopOpacity="0.15" />
                <stop offset="40%" stopColor="#040F07" stopOpacity="0.32" />
                <stop offset="70%" stopColor="#07180D" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0A1E13" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            <image
              href="/images/botanical-gold-bg.webp"
              x="0"
              y="0"
              width="1440"
              height="600"
              preserveAspectRatio="xMinYMid slice"
              clipPath="url(#careerLeftWingClip)"
              opacity="1"
            />

            <path
              d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z"
              fill="url(#careerDarkGreenFill)"
            />

            <path
              d="M 620,0 C 710,180 680,420 800,600"
              stroke="url(#careerHeroGoldGrad)"
              strokeWidth="2"
              fill="none"
              filter="url(#careerHeroGoldGlow)"
            />

            <path
              d="M 645,0 C 735,185 705,430 825,600"
              stroke="url(#careerHeroGoldGradLight)"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* Mobile Background */}
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

          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#051208]/80 to-transparent pointer-events-none z-10" />

          <div className="absolute top-0 left-0 w-52 sm:w-64 lg:w-80 h-52 sm:h-64 lg:h-80 pointer-events-none z-10 opacity-70">
            <Image
              src="/images/values/leaves-bg.webp"
              alt="Foliage"
              fill
              className="object-contain object-left-top opacity-30 mix-blend-screen"
            />
          </div>

          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-xl lg:max-w-[540px] xl:max-w-[620px] pl-2 sm:pl-6 lg:pl-8 xl:pl-10">
              <h1 dir="auto" className="page-hero-title text-left font-serif text-[30px] sm:text-[38px] lg:text-[42px] xl:text-[46px] text-white font-normal leading-[1.12] tracking-tight mb-3.5 sm:mb-4 break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.hero.titlePrefix}
                <br />
                {t.hero.titleMid}{" "}
                <span className="font-serif text-[#C5A56A] font-normal inline">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              <p dir="auto" className="hero-text-wrap text-left text-[13px] sm:text-[14px] text-[#D2DED5] leading-[1.65] font-sans max-w-xl mb-4 sm:mb-5 font-normal break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.hero.description}
              </p>

              <div>
                <HeroBadges
                  items={[
                    {
                      icon: Users,
                      title: t.hero.badge1Title,
                      sub: t.hero.badge1Sub,
                    },
                    {
                      icon: GraduationCap,
                      title: t.hero.badge2Title,
                      sub: t.hero.badge2Sub,
                    },
                    {
                      icon: Heart,
                      title: t.hero.badge3Title,
                      sub: t.hero.badge3Sub,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export function CareerPillarCatalog({ t, onSelect }: { t: CareerContent; onSelect: (pillar: RecruitmentPillar) => void }) {
  return (
    <>
        {/* ── SECTION 3: DIE 4 FACHKRÄFTE-SÄULEN (Interactive Modal Cards matching Photo 1) ────── */}
        <section id="saeulen" className="py-14 sm:py-18 lg:py-20 bg-[#FAF9F6] border-t border-[#EDE8DE]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight mb-4">
                {t.pillarSection.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed max-w-2xl">
                {t.pillarSection.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {t.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  onClick={() => onSelect(pillar)}
                  className="rounded-3xl bg-white border border-[#EAE4D7] shadow-sm hover:shadow-xl hover:border-[#C5A56A] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                >
                  {/* Photo */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#07150C]">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content with circular icon overlapping the image & gentle wave */}
                  <div className="relative bg-white pt-2 pb-6 px-6 sm:px-7 flex-1 flex flex-col justify-between">
                    {/* Curved wave transition at top */}
                    <div className="absolute -top-6 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                      <svg
                        viewBox="0 0 400 32"
                        preserveAspectRatio="none"
                        className="w-full h-7 fill-white"
                      >
                        <path d="M 0,16 C 18,5 34,0 64,0 C 98,0 118,13 145,17 C 225,27 325,16 400,13 L 400,32 L 0,32 Z" />
                      </svg>
                    </div>

                    {/* Icon overlapping the photo on the left */}
                    <div className="relative -mt-7 mb-3 z-10">
                      <div className="text-[#1C3E2A] flex items-center">
                        {pillar.id === "aerzte" && <Stethoscope className="w-8 h-8" />}
                        {pillar.id === "pflege" && <FileCheck className="w-8 h-8" />}
                        {pillar.id === "diagnostik" && <Settings className="w-8 h-8" />}
                        {pillar.id === "therapie" && <HeartHandshake className="w-8 h-8" />}
                      </div>
                    </div>

                    {/* Title & Description on white background */}
                    <div className="space-y-2 mb-4">
                      <h3 className="font-serif text-xl sm:text-[21px] font-bold text-[#142318] leading-tight group-hover:text-[#8D6B27] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#55695C] leading-relaxed">
                        {pillar.shortDesc}
                      </p>
                    </div>

                    {/* Bottom Action Area: Pill Button + Circle Arrow Button matching Photo 1 */}
                    <div className="pt-4 mt-auto border-t border-[#F2ECE1] flex items-center justify-between">
                      <span className="px-4 py-2 rounded-full bg-[#FAF3E7] text-[#93712C] text-xs font-semibold group-hover:bg-[#F5EAD4] transition-colors">
                        {t.pillarSection.openModalBtn}
                      </span>
                      <div className="text-[#93712C] group-hover:text-[#1C3E2A] transition-colors flex items-center justify-center">
                        <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}

export function CareerJobsSection({ t, onSelectJob }: { t: CareerContent; onSelectJob: (title: string) => void }) {
  return (
    <>
        {/* ── SECTION 6: AKTUELLE STELLENANGEBOTE ────── */}
        <section id="stellen" className="py-14 sm:py-18 lg:py-20 bg-[#FAF7F2] border-t border-[#EDE7D9] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/about/photo2.webp"
              alt=""
              fill
              className="object-cover object-left opacity-90"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#FAF7F2]/40" />
          </div>

          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight">
                  {t.jobs.title}
                </h2>

                <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed">
                  {t.jobs.desc}
                </p>

                <div className="pt-2">
                  <a
                    href="#bewerbung"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#142318] font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] shadow-sm"
                  >
                    <span>{t.jobs.allButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3.5">
                {t.jobs.positions.map((job, idx) => {
                  const JobIcon = job.icon;
                  return (
                    <div
                      key={idx}
                      onClick={() => onSelectJob(job.title)}
                      className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xs border border-[#EDE7D9] hover:border-[#C5A56A] shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 flex items-center justify-center text-[#C5A56A] group-hover:text-[#8D6B27] flex-shrink-0 transition-colors">
                          <JobIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950 group-hover:text-[#8D6B27] transition-colors leading-snug">
                            {job.title}
                          </h3>
                          <p className="text-[11.5px] sm:text-xs text-[#717A73] mt-0.5 flex items-center gap-2">
                            <span>{job.facility}</span>
                            <span className="text-[#C5A56A]">|</span>
                            <span>{job.type}</span>
                            <span className="text-[#C5A56A]">|</span>
                            <span className="text-[#3A5040] font-medium">{job.location}</span>
                          </p>
                        </div>
                      </div>

                      <div className="text-[#C5A56A] group-hover:translate-x-1 transition-transform flex items-center justify-center">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

type CareerApplicationFormProps = {
  t: CareerContent;
  selectedPosition: string;
  setSelectedPosition: Dispatch<SetStateAction<string>>;
  formSubmitted: boolean;
  setFormSubmitted: Dispatch<SetStateAction<boolean>>;
  isSubmitting: boolean;
  fileName: string;
  setFileName: Dispatch<SetStateAction<string>>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export function CareerApplicationForm({
  t,
  selectedPosition,
  setSelectedPosition,
  formSubmitted,
  setFormSubmitted,
  isSubmitting,
  fileName,
  setFileName,
  onSubmit,
}: CareerApplicationFormProps) {
  return (
    <>
        {/* ── SECTION 11: DIREKT BEWERBEN / QUICK APPLY FORM ────── */}
        <section id="bewerbung" className="py-14 sm:py-18 lg:py-20 bg-[#FCFAF7] border-t border-[#EDE7D9] relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 font-normal leading-tight mb-3">
                {t.applyForm.title}
              </h2>
              <p className="text-sm sm:text-[15px] text-[#4E5650] leading-relaxed">
                {t.applyForm.desc}
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5D7B7] shadow-lg text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FAF6EE] border-2 border-[#C5A56A] text-[#C5A56A] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 stroke-[2]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal">
                  {t.applyForm.successTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#4E5650] max-w-md mx-auto leading-relaxed">
                  {t.applyForm.successDesc}
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFileName("");
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#C5A56A] text-[#142318] text-xs sm:text-sm font-semibold hover:bg-[#FAF6EE] transition-colors cursor-pointer"
                  >
                    {t.applyForm.resetBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-white rounded-3xl p-7 sm:p-10 lg:p-12 border border-[#EDE7D9] shadow-lg space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.nameLabel} <span className="text-[#C5A56A]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t.applyForm.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.emailLabel} <span className="text-[#C5A56A]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder={t.applyForm.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      placeholder={t.applyForm.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.positionLabel} <span className="text-[#C5A56A]">*</span>
                    </label>
                    <select
                      required
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all cursor-pointer"
                    >
                      <option value="">{t.applyForm.positionPlaceholder}</option>
                      {t.applyForm.positions.map((pos, idx) => (
                        <option key={idx} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                    {t.applyForm.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.applyForm.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all resize-y"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                    {t.applyForm.uploadLabel}
                  </label>
                  <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#DDD5C7] hover:border-[#C5A56A] rounded-2xl bg-[#FCFAF7] cursor-pointer transition-colors group">
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFileName(e.target.files[0].name);
                        }
                      }}
                    />
                    {fileName ? (
                      <div className="flex items-center gap-2.5 text-[#142318]">
                        <FileText className="w-5 h-5 text-[#C5A56A]" />
                        <span className="text-sm font-medium">{fileName}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-6 h-6 text-[#C5A56A] mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs sm:text-sm font-medium text-forest-950 text-center">
                          {t.applyForm.uploadHint}
                        </span>
                      </>
                    )}
                  </label>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input
                    required
                    type="checkbox"
                    id="career-privacy"
                    className="mt-1 w-4 h-4 rounded border-[#D0C7B7] text-[#C5A56A] focus:ring-[#C5A56A] cursor-pointer"
                  />
                  <label htmlFor="career-privacy" className="text-xs text-[#555E56] leading-relaxed cursor-pointer select-none">
                    {t.applyForm.privacy}
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] hover:from-[#F2DAB0] hover:to-[#DEBD7A] text-[#142217] font-semibold text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.01] disabled:opacity-70 cursor-pointer"
                  >
                    <span>{isSubmitting ? t.applyForm.submitting : t.applyForm.submitBtn}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
    </>
  );
}

export function CareerPillarModal({
  t,
  pillar,
  onClose,
  onApply,
}: {
  t: CareerContent;
  pillar: RecruitmentPillar | null;
  onClose: () => void;
  onApply: (pillar: RecruitmentPillar) => void;
}) {
  if (!pillar) return null;

  return (
    <>
      {/* ── MODAL DIALOG: RECRUITMENT PILLAR DETAILS ── */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#030B06]/80 backdrop-blur-md animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-5xl xl:max-w-[1100px] max-h-[92vh] overflow-y-auto bg-[#FCFAF7] border border-[#D5B878]/50 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-[#07150C] focus:outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label={t.modal.closeBtn}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#FAF5EB] border border-[#E5D7B7] flex items-center justify-center text-[#142318] hover:bg-[#C5A56A] hover:text-white hover:border-[#C5A56A] transition-all shadow-sm cursor-pointer z-10"
              >
                <X className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#07160D] text-[#ECCF96] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
                    {t.modal.badgePrefix}: {pillar.badge}
                  </span>
                  <span className="text-xs font-semibold text-[#8D6B27]">
                    {pillar.category}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-950 font-normal leading-tight">
                  {pillar.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#717A73] font-medium">
                  {t.modal.targetLabel}: <span className="text-[#142318]">{pillar.targetGroup}</span>
                </p>
              </div>

              {/* Modal Hero Banner */}
              <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden my-6 border border-[#EAE4D7] shadow-sm">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium">
                  NabiOta Medical Recruitment Services GmbH • {pillar.title}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-6">
                <p className="text-sm sm:text-[15px] text-[#4E5650] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* 2-Column Grid: Roles and Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-[#8D6B27]">
                    <Briefcase className="w-4 h-4 stroke-[2]" />
                    <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                      {t.modal.scopeTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {pillar.rolesList.map((role, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                        <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-[#8D6B27]">
                    <FileCheck className="w-4 h-4 stroke-[2]" />
                    <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                      {t.modal.approbationTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {pillar.approbationService.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                        <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits Package */}
              <div className="p-5 rounded-2xl bg-[#F8F5EE] border border-[#E5D7B7] space-y-3 mb-6">
                <div className="flex items-center gap-2 text-[#8D6B27]">
                  <Award className="w-4 h-4 stroke-[2]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                    {t.modal.benefitsTitle}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pillar.benefitsPackage.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#243327]">
                      <div className="text-[#8D6B27] shrink-0 mt-0.5 flex items-center justify-center">
                        <Check className="w-4.5 h-4.5 stroke-[2.2]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal Notice */}
              <div className="p-4 rounded-xl bg-white border border-[#EAE4D7] text-xs text-[#556358] leading-relaxed flex items-start gap-3 mb-6">
                <Info className="w-4 h-4 text-[#C5A56A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#142318] block mb-0.5">{t.modal.legalTitle}:</span>
                  {pillar.legalFramework}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#EAE4D7]">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-[#D5B878] text-xs font-semibold text-[#142318] hover:bg-[#FAF5EE] transition-colors"
                >
                  {t.modal.closeBtn}
                </button>
                <button
                  onClick={() => onApply(pillar)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] hover:from-[#F2DAB0] hover:to-[#DEBD7A] text-[#142217] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.01]"
                >
                  <span>{t.modal.applyBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
    </>
  );
}
