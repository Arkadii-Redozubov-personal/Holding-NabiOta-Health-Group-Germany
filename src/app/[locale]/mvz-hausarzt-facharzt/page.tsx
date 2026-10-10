import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { locales, SupportedLocale } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PrimaryCarePlaceholderProps {
  params: Promise<{ locale: SupportedLocale }>;
}

const copy: Record<SupportedLocale, { title: string; note: string; link: string; back: string }> = {
  de: {
    title: "NabiOta MVZ Zentrum für hausärztliche und fachärztliche Versorgung",
    note: "Die Website dieses medizinischen Versorgungszentrums wird vorbereitet.",
    link: "Zur Website des MVZ",
    back: "Zurück zu den medizinischen Fachbereichen",
  },
  en: {
    title: "NabiOta MVZ Center for Primary and Specialist Care",
    note: "The website for this medical center is being prepared.",
    link: "Visit the MVZ website",
    back: "Back to medical departments",
  },
  ru: {
    title: "NabiOta MVZ — центр семейной и специализированной медицинской помощи",
    note: "Сайт этого медицинского центра готовится.",
    link: "Перейти на сайт MVZ",
    back: "Вернуться к медицинским направлениям",
  },
  tr: {
    title: "NabiOta MVZ Aile Hekimliği ve Uzman Sağlık Merkezi",
    note: "Bu tıp merkezinin web sitesi hazırlanmaktadır.",
    link: "MVZ web sitesine git",
    back: "Tıbbi uzmanlık alanlarına dön",
  },
  ar: {
    title: "مركز NabiOta MVZ للرعاية الأولية والتخصصية",
    note: "يجري إعداد الموقع الإلكتروني لهذا المركز الطبي.",
    link: "زيارة موقع MVZ",
    back: "العودة إلى التخصصات الطبية",
  },
  uz: {
    title: "NabiOta MVZ — oilaviy va ixtisoslashtirilgan tibbiy yordam markazi",
    note: "Ushbu tibbiy markaz veb-sayti tayyorlanmoqda.",
    link: "MVZ veb-saytiga o‘tish",
    back: "Tibbiy yo‘nalishlarga qaytish",
  },
};

export async function generateMetadata({ params }: PrimaryCarePlaceholderProps): Promise<Metadata> {
  const { locale } = await params;
  return { title: `${copy[locale].title} | NabiOta Health Group` };
}

export default async function PrimaryCarePlaceholderPage({ params }: PrimaryCarePlaceholderProps) {
  const { locale } = await params;
  const text = copy[locale];

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentLocale={locale} />
      <main id="main-content" className="flex flex-1 items-center bg-[#FAF8F5] py-24 sm:py-32">
        <Container size="wide">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#EDE8DE] bg-white p-8 text-center shadow-sm sm:p-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#9E7D3B]">NabiOta MVZ</p>
            <h1 className="font-serif text-3xl leading-tight text-[#132218] sm:text-4xl">{text.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-[#556358]">{text.note}</p>
            <Link
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D1910] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1C452F]"
            >
              {text.link}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-6">
              <Link href={`/${locale}/areas/medizinische-fachbereiche`} className="text-sm text-[#556358] underline decoration-[#D5B878] underline-offset-4 hover:text-[#142318]">
                {text.back}
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
