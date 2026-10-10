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

interface PlaceholderProps {
  params: Promise<{ locale: SupportedLocale }>;
}

const copy: Record<SupportedLocale, { title: string; note: string; link: string; back: string }> = {
  de: { title: "NabiOta Real Estate GmbH", note: "Die Website der Gesellschaft wird vorbereitet.", link: "Website in Vorbereitung", back: "Zurück zur Unternehmensseite" },
  en: { title: "NabiOta Real Estate GmbH", note: "The company's website is being prepared.", link: "Website in preparation", back: "Back to the group page" },
  ru: { title: "NabiOta Real Estate GmbH", note: "Сайт компании по недвижимости и развитию проектов готовится.", link: "Сайт готовится", back: "Вернуться к консалтингу и развитию" },
  tr: { title: "NabiOta Real Estate GmbH", note: "Şirketin web sitesi hazırlanmaktadır.", link: "Web sitesi hazırlanıyor", back: "Grup sayfasına dön" },
  ar: { title: "NabiOta Real Estate GmbH", note: "يجري إعداد الموقع الإلكتروني للشركة.", link: "الموقع قيد الإعداد", back: "العودة إلى صفحة المجموعة" },
  uz: { title: "NabiOta Real Estate GmbH", note: "Kompaniya veb-sayti tayyorlanmoqda.", link: "Veb-sayt tayyorlanmoqda", back: "Guruh sahifasiga qaytish" },
};

export async function generateMetadata({ params }: PlaceholderProps): Promise<Metadata> {
  const { locale } = await params;
  return { title: `${copy[locale].title} | NabiOta Health Group` };
}

export default async function PlaceholderPage({ params }: PlaceholderProps) {
  const { locale } = await params;
  const text = copy[locale];
  const parentPath = locale === "ru" ? "beratung-projektentwicklung" : "beratung-projektentwicklung";

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentLocale={locale} />
      <main id="main-content" className="flex flex-1 items-center bg-[#FAF8F5] py-24 sm:py-32">
        <Container size="wide">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#EDE8DE] bg-white p-8 text-center shadow-sm sm:p-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#9E7D3B]">NabiOta Real Estate</p>
            <h1 className="font-serif text-3xl leading-tight text-[#132218] sm:text-4xl">{text.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-[#556358]">{text.note}</p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D1910] px-6 py-3 text-sm font-semibold text-white">
              {text.link}<ArrowRight className="h-4 w-4" />
            </div>
            <div className="mt-6">
              <Link href={`/${locale}/areas/${parentPath}`} className="text-sm text-[#556358] underline decoration-[#D5B878] underline-offset-4 hover:text-[#142318]">
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
