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

interface ClinicsPlaceholderProps {
  params: Promise<{ locale: SupportedLocale }>;
}

const copy: Record<SupportedLocale, { title: string; note: string; link: string; back: string }> = {
  de: {
    title: "NabiOta Clinics Germany GmbH",
    note: "Die Website der geplanten Klinik wird vorbereitet.",
    link: "Zur Website der NabiOta Clinics Germany GmbH",
    back: "Zurück zu den medizinischen Fachbereichen",
  },
  en: {
    title: "NabiOta Clinics Germany GmbH",
    note: "The website for the planned clinic is being prepared.",
    link: "Visit the NabiOta Clinics Germany GmbH website",
    back: "Back to medical departments",
  },
  ru: {
    title: "NabiOta Clinics Germany GmbH",
    note: "Сайт планируемой клиники готовится.",
    link: "Перейти на сайт NabiOta Clinics Germany GmbH",
    back: "Вернуться к медицинским направлениям",
  },
  tr: {
    title: "NabiOta Clinics Germany GmbH",
    note: "Planlanan kliniğin web sitesi hazırlanmaktadır.",
    link: "NabiOta Clinics Germany GmbH web sitesine git",
    back: "Tıbbi uzmanlık alanlarına dön",
  },
  ar: {
    title: "NabiOta Clinics Germany GmbH",
    note: "يجري إعداد الموقع الإلكتروني للعيادة المخطط لها.",
    link: "زيارة موقع NabiOta Clinics Germany GmbH",
    back: "العودة إلى التخصصات الطبية",
  },
  uz: {
    title: "NabiOta Clinics Germany GmbH",
    note: "Rejalashtirilgan klinikaning veb-sayti tayyorlanmoqda.",
    link: "NabiOta Clinics Germany GmbH veb-saytiga o‘tish",
    back: "Tibbiy yo‘nalishlarga qaytish",
  },
};

export async function generateMetadata({ params }: ClinicsPlaceholderProps): Promise<Metadata> {
  const { locale } = await params;
  return { title: `${copy[locale].title} | NabiOta Health Group` };
}

export default async function ClinicsPlaceholderPage({ params }: ClinicsPlaceholderProps) {
  const { locale } = await params;
  const text = copy[locale];

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentLocale={locale} />
      <main id="main-content" className="flex flex-1 items-center bg-[#FAF8F5] py-24 sm:py-32">
        <Container size="wide">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#EDE8DE] bg-white p-8 text-center shadow-sm sm:p-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#9E7D3B]">NabiOta Clinics</p>
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
