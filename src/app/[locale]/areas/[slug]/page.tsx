import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Award, Stethoscope, Building2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHero } from "@/components/layout/PageHero";
import { businessAreas } from "@/data/areas";
import { MedizinischeFachbereichePageComponent } from "@/components/pages/MedizinischeFachbereichePageComponent";
import { DiagnostikPageComponent } from "@/components/pages/DiagnostikPageComponent";
import { RehabilitationPageComponent } from "@/components/pages/RehabilitationPageComponent";
import { PflegePageComponent } from "@/components/pages/PflegePageComponent";
import { BeratungPageComponent } from "@/components/pages/BeratungPageComponent";
import { InternationalPageComponent } from "@/components/pages/InternationalPageComponent";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  const paths: { locale: SupportedLocale; slug: string }[] = [];
  for (const locale of locales) {
    for (const area of businessAreas) {
      paths.push({ locale, slug: area.slug });
    }
  }
  return paths;
}

interface LocalizedAreaDetailProps {
  params: Promise<{ locale: SupportedLocale; slug: string }>;
}

const areaTitles: Record<string, Record<SupportedLocale, string>> = {
  "medizinische-fachbereiche": {
    de: "Medizinische Fachbereiche",
    en: "Medical Departments",
    ru: "Медицинские направления",
    tr: "Tıbbi Uzmanlık Alanları",
    ar: "الأقسام الطبية التخصصية",
    uz: "Tibbiyot yo'nalishlari",
  },
  "diagnostik": {
    de: "Diagnostik",
    en: "Diagnostics",
    ru: "Диагностика",
    tr: "Tanı & Teşhis",
    ar: "التشخيص والتحاليل",
    uz: "Diagnostika",
  },
  "rehabilitation": {
    de: "Rehabilitation",
    en: "Rehabilitation",
    ru: "Реабилитация",
    tr: "Rehabilitasyon",
    ar: "إعادة التأهيل",
    uz: "Reabilitatsiya",
  },
  "pflege": {
    de: "Pflege & Betreuung",
    en: "Care & Support",
    ru: "Уход и забота",
    tr: "Hasta Bakımı & Destek",
    ar: "التمريض والرعاية المنزلية",
    uz: "Parvarish va qo'llab-quvvatlash",
  },
  "beratung-projektentwicklung": {
    de: "Beratung & Services",
    en: "Consulting & Services",
    ru: "Консалтинг и сервис",
    tr: "Danışmanlık & Hizmetler",
    ar: "الاستشارات والخدمات",
    uz: "Konsalting va xizmatlar",
  },
  "internationale-kooperationen": {
    de: "Internationale Kooperationen",
    en: "International Partnerships",
    ru: "Международная деятельность",
    tr: "Uluslararası İş Birlikleri",
    ar: "التعاون الدولي والكوادر",
    uz: "Xalqaro hamkorlik",
  },
};

export async function generateMetadata({ params }: LocalizedAreaDetailProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const area = businessAreas.find((a) => a.slug === slug);
  const notFoundText =
    locale === "tr"
      ? "Faaliyet alanı bulunamadı"
      : locale === "ar"
      ? "القسم غير موجود"
      : locale === "ru"
      ? "Направление не найдено"
      : locale === "uz"
      ? "Yo'nalish topilmadi"
      : locale === "en"
      ? "Area not found"
      : "Bereich nicht gefunden";
  if (!area) return { title: notFoundText };

  const displayTitle = areaTitles[slug]?.[locale] || area.title;

  return {
    title: `${displayTitle} | NabiOta® Health Group`,
    description: area.description,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/areas/${slug}`,
      languages: {
        de: `https://www.nabiota-health-group.de/de/areas/${slug}`,
        en: `https://www.nabiota-health-group.de/en/areas/${slug}`,
        ru: `https://www.nabiota-health-group.de/ru/areas/${slug}`,
        tr: `https://www.nabiota-health-group.de/tr/areas/${slug}`,
        ar: `https://www.nabiota-health-group.de/ar/areas/${slug}`,
        uz: `https://www.nabiota-health-group.de/uz/areas/${slug}`,
        "x-default": `https://www.nabiota-health-group.de/de/areas/${slug}`,
      },
    },
  };
}

export default async function LocalizedAreaDetailPage({ params }: LocalizedAreaDetailProps) {
  const { locale, slug } = await params;
  const area = businessAreas.find((a) => a.slug === slug);
  const dict = getDictionary(locale);

  if (!area) {
    notFound();
  }

  if (slug === "medizinische-fachbereiche") {
    return <MedizinischeFachbereichePageComponent locale={locale} />;
  }

  if (slug === "diagnostik") {
    return <DiagnostikPageComponent locale={locale} />;
  }

  if (slug === "rehabilitation") {
    return <RehabilitationPageComponent locale={locale} />;
  }

  if (slug === "pflege") {
    return <PflegePageComponent locale={locale} />;
  }

  if (slug === "beratung-projektentwicklung") {
    return <BeratungPageComponent locale={locale} />;
  }

  if (slug === "internationale-kooperationen") {
    return <InternationalPageComponent locale={locale} />;
  }

  const relatedAreas = businessAreas.filter((a) => a.slug !== slug).slice(0, 3);

  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";
  const isUz = locale === "uz";

  const displayTitle = areaTitles[slug]?.[locale] || area.title;

  const areaBadges = [
    {
      icon: <Award className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Высокие" : isEn ? "Highest" : isTr ? "En Yüksek" : isAr ? "أعلى" : isUz ? "Eng yuqori" : "Höchste",
      sub: isRu ? "Стандарты" : isEn ? "Standards" : isTr ? "Standartlar" : isAr ? "المعايير" : isUz ? "Standartlar" : "Standards",
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Врачебная" : isEn ? "Medical" : isTr ? "Uzman Tıbbi" : isAr ? "خبرة طبية" : isUz ? "Ixtisoslashgan" : "Fachärztliche",
      sub: isRu ? "Экспертиза" : isEn ? "Expertise" : isTr ? "Uzmanlık" : isAr ? "تخصصية" : isUz ? "Ekspertiza" : "Expertise",
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "В составе" : isEn ? "Group" : isTr ? "Holding" : isAr ? "ضمن شبكة" : isUz ? "Xolding" : "Holding",
      sub: isRu ? "Холдинга" : isEn ? "Network" : isTr ? "Ağı" : isAr ? "المجموعة" : isUz ? "Tarkibida" : "Verbund",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pb-20">
        {/* Hero Section with Integrated Breadcrumb matching Photo 2 */}
        <PageHero
          breadcrumb={
            <Breadcrumb
              items={[
                { label: dict.nav.home, href: `/${locale}` },
                { label: dict.nav.areas, href: `/${locale}/areas` },
                { label: displayTitle },
              ]}
            />
          }
          title={
            <>
              {displayTitle}
              {area.subtitle && (
                <span className="block text-xl sm:text-2xl text-[#ECCF93] font-light mt-1 font-serif">
                  {area.subtitle}
                </span>
              )}
            </>
          }
          description={area.description}
          imageSrc={area.image || "/images/heroes/hero-areas.webp"}
          badges={areaBadges}
        />

        {/* Overview & Image Section */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-forest-900/10">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <Eyebrow variant="forest">
                  {isRu
                    ? "КОМПЕТЕНЦИИ И СТАНДАРТЫ"
                    : isEn
                    ? "COMPETENCE & QUALITY"
                    : isTr
                    ? "YETKİNLİK VE KALİTE"
                    : isAr
                    ? "الكفاءة وأعلى المعايير"
                    : isUz
                    ? "SALOHIYAT VA STANDARTLAR"
                    : "KOMPETENZ & ANSPRUCH"}
                </Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-950 leading-tight">
                  {isRu
                    ? "Высокотехнологичная медицинская помощь немецкого качества"
                    : isEn
                    ? "Structured Healthcare Excellence according to German Standards"
                    : isTr
                    ? "Alman Standartlarında Yapılandırılmış Üst Düzey Sağlık Hizmeti"
                    : isAr
                    ? "رعاية صحية متقدمة ومنظمة وفق أعلى المعايير الألمانية"
                    : isUz
                    ? "Nemis standartlari bo'yicha yuqori texnologiyali tibbiy xizmat"
                    : "Strukturierte Spitzenversorgung nach deutschen Standards"}
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  {area.fullDescription || area.description}
                </p>

                {area.stats && (
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-forest-900/10">
                    {area.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-display text-2xl sm:text-3xl text-gold-600 font-semibold">
                          {stat.value}
                        </span>
                        <span className="text-xs text-text-secondary font-medium mt-0.5">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Key Services & Advantages */}
        <section className="py-16 sm:py-20 bg-white border-y border-forest-900/10">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {area.keyServices && (
                <div>
                  <h3 className="font-display text-2xl text-forest-950 mb-6">
                    {isRu
                      ? "Ключевые направления"
                      : isEn
                      ? "Core Capabilities"
                      : isTr
                      ? "Temel Hizmet Alanları"
                      : isAr
                      ? "مجالات الخدمات الرئيسية"
                      : isUz
                      ? "Asosiy yo'nalishlar"
                      : "Leistungsschwerpunkte"}
                  </h3>
                  <div className="space-y-3.5">
                    {area.keyServices.map((svc, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-forest-950">
                          {svc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {area.advantages && (
                <div>
                  <h3 className="font-display text-2xl text-forest-950 mb-6">
                    {isRu
                      ? "Преимущества в составе холдинга"
                      : isEn
                      ? "Group Advantages"
                      : isTr
                      ? "Holding Bünyesindeki Avantajlarınız"
                      : isAr
                      ? "مزايا الانضمام إلى شبكة المجموعة"
                      : isUz
                      ? "Xolding tarkibidagi afzalliklaringiz"
                      : "Ihre Vorteile im Verbund"}
                  </h3>
                  <div className="space-y-3.5">
                    {area.advantages.map((adv, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-text-secondary">
                          {adv}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Banner */}
            <div className="mt-16 p-8 rounded-xl bg-forest-900 text-ivory-50 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-display text-2xl mb-1">
                  {isRu
                    ? `Хотите узнать больше о направлении «${displayTitle}»?`
                    : isEn
                    ? `Would you like to learn more about ${displayTitle}?`
                    : isTr
                    ? `${displayTitle} hakkında daha fazla bilgi almak ister misiniz?`
                    : isAr
                    ? `هل ترغبون في معرفة المزيد عن ${displayTitle}؟`
                    : isUz
                    ? `«${displayTitle}» yo'nalishi haqida ko'proq bilmoqchimisiz?`
                    : `Möchten Sie mehr über ${displayTitle} erfahren?`}
                </h4>
                <p className="text-xs sm:text-sm text-ivory-200/80">
                  {isRu
                    ? "Наша команда с радостью ответит на ваши индивидуальные вопросы и обсудит возможности сотрудничества."
                    : isEn
                    ? "Our team is at your disposal to answer questions and discuss partnership options."
                    : isTr
                    ? "Ekibimiz özel sorularınızı yanıtlamaktan ve iş birliği olanaklarını görüşmekten memnuniyet duyacaktır."
                    : isAr
                    ? "يسعد فريقنا الإجابة عن كافة استفساراتكم وبحث فرص التعاون المشترك معكم."
                    : isUz
                    ? "Bizning jamoamiz savollaringizga mamnuniyat bilan javob beradi va hamkorlik imkoniyatlarini muhokama qiladi."
                    : "Unser Team beantwortet gerne Ihre individuellen Fragen und Kooperationsanfragen."}
                </p>
              </div>
              <Button variant="gold-solid" size="md" href={`/${locale}/contact`}>
                {dict.nav.contactCta}
              </Button>
            </div>
          </Container>
        </section>

        {/* Related Areas */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <h3 className="font-display text-2xl sm:text-3xl text-forest-950 mb-8">
              {isRu
                ? "Другие направления холдинга"
                : isEn
                ? "Related Divisions"
                : isTr
                ? "Holdingin Diğer Faaliyet Alanları"
                : isAr
                ? "قطاعات المجموعة الأخرى"
                : isUz
                ? "Xoldingning boshqa yo'nalishlari"
                : "Weitere Unternehmensbereiche"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedAreas.map((rel) => (
                <BusinessCard key={rel.id} area={rel} currentLocale={locale} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
