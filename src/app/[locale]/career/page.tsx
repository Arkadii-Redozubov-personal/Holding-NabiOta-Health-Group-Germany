import React from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedCareerProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedCareerProps): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    de: "Karriere | Gestalten Sie mit uns die Zukunft der Gesundheit",
    en: "Career | Shape the Future of Healthcare with Us",
    ru: "Карьера | Создавайте будущее медицины вместе с нами",
  };
  return {
    title: titles[locale] || titles.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/career`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/career",
        en: "https://www.nabiota-health-group.de/en/career",
        ru: "https://www.nabiota-health-group.de/ru/career",
        "x-default": "https://www.nabiota-health-group.de/de/career",
      },
    },
  };
}

export default async function LocalizedCareerPage({ params }: LocalizedCareerProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const careerFields = [
    locale === "ru" ? "Врачебный состав (терапия, общая хирургия, ортопедия, нейрохирургия, радиология)" : "Ärztlicher Dienst (Allgemeinmedizin, Chirurgie, Orthopädie, Radiologie)",
    locale === "ru" ? "Сестринский уход и HomeCare (дипломированные специалисты)" : "Pflege und HomeCare (examinierte Pflegefachkräfte)",
    locale === "ru" ? "Терапия и реабилитация (физиотерапевты, эрготерапевты)" : "Therapie und Rehabilitation (Physio-, Ergo- und Sporttherapeuten)",
    locale === "ru" ? "Диагностические отделения (ассистенты радиологии, рентгенологи)" : "Diagnostik (MTRA, radiologische Assistenzberufe)",
    locale === "ru" ? "Медицинский менеджмент и управление практиками" : "Verwaltung, Abrechnung und Praxismanagement",
    locale === "ru" ? "Международные проекты привлечения и интеграции специалистов" : "Personalvermittlung und internationale Fachkräfteprojekte",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">{dict.split.career.eyebrow}</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                {dict.split.career.heading}
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                {dict.split.career.description}
              </p>
            </div>
          </Container>
        </section>

        {/* Benefits & Fields */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-forest-900/10">
                <Image
                  src="/images/careers/team.jpg"
                  alt="Unser Team bei NabiOta Health Group"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <Eyebrow variant="forest">
                  {locale === "ru" ? "СФЕРЫ ДЕЯТЕЛЬНОСТИ" : locale === "en" ? "CAREER OPPORTUNITIES" : "PERSPEKTIVEN & ENTWICKLUNG"}
                </Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-950 leading-tight">
                  {locale === "ru" ? "Возможные направления работы" : locale === "en" ? "Open Clinical & Administrative Fields" : "Mögliche Einsatzbereiche"}
                </h2>
                <div className="space-y-3 pt-2">
                  {careerFields.map((field, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-forest-950 font-medium">
                        {field}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Application details */}
        <section className="py-16 sm:py-20 bg-white border-y border-forest-900/10">
          <Container size="wide">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Eyebrow variant="forest">
                {locale === "ru" ? "ПОДАЧА ЗАЯВКИ" : locale === "en" ? "APPLICATION" : "BEWERBUNG"}
              </Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-4">
                {locale === "ru"
                  ? "Хотите стать частью команды NabiOta®?"
                  : locale === "en"
                  ? "Would you like to join the NabiOta® team?"
                  : "Sie möchten Teil der NabiOta® Gruppe werden?"}
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {locale === "ru"
                  ? "Воспользуйтесь формой на сайте или направьте ваше резюме и документы по электронной почте нашему отделу подбора персонала."
                  : locale === "en"
                  ? "Use our contact form or send your CV and credentials directly to our recruiting specialists."
                  : "Nutzen Sie unser Kontaktformular oder senden Sie uns Ihre Unterlagen unkompliziert per E-Mail."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="p-6 rounded-xl bg-[#FAF8F5] border border-forest-900/10 text-center">
                <Mail className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                <h3 className="font-bold text-sm text-forest-950 mb-1">
                  E-Mail
                </h3>
                <a href="mailto:karriere@nabiota.de" className="font-medium text-gold-700 hover:underline text-sm">
                  karriere@nabiota.de
                </a>
              </div>

              <div className="p-6 rounded-xl bg-[#FAF8F5] border border-forest-900/10 text-center">
                <Phone className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                <h3 className="font-bold text-sm text-forest-950 mb-1">
                  Recruiting Telefon
                </h3>
                <a href="tel:+4921619170018" className="font-medium text-gold-700 hover:underline text-sm">
                  +49 2161 9170018
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="gold-solid" size="lg" href={`/${locale}/contact`}>
                {locale === "ru" ? "Перейти к форме заявки" : locale === "en" ? "To Application Form" : "Zum Bewerbungsformular"}
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
