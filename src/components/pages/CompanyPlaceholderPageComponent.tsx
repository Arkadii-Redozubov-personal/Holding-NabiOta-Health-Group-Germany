import React from "react";
import Link from "next/link";
import { ArrowRight } from "@/lib/icons";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { SupportedLocale } from "@/lib/i18n";

export interface CompanyPlaceholderCopy {
  eyebrow?: string;
  title: string;
  note: string;
  link: string;
  linkHref?: string;
  back: string;
  backHref: string;
}

interface CompanyPlaceholderPageComponentProps {
  locale: SupportedLocale;
  data: CompanyPlaceholderCopy;
}

export function CompanyPlaceholderPageComponent({
  locale,
  data,
}: CompanyPlaceholderPageComponentProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header currentLocale={locale} />
      <main id="main-content" className="flex flex-1 items-center bg-[#FAF8F5] py-24 sm:py-32">
        <Container size="wide">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#EDE8DE] bg-white p-8 text-center shadow-sm sm:p-12">
            {data.eyebrow && (
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#9E7D3B]">
                {data.eyebrow}
              </p>
            )}
            <h1 className="font-serif text-3xl leading-tight text-[#132218] sm:text-4xl">
              {data.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#556358]">{data.note}</p>

            {data.linkHref ? (
              <Link
                href={data.linkHref}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D1910] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1C452F]"
              >
                {data.link}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D1910] px-6 py-3 text-sm font-semibold text-white">
                {data.link}
                <ArrowRight className="h-4 w-4" />
              </div>
            )}

            <div className="mt-6">
              <Link
                href={data.backHref}
                className="text-sm text-[#556358] underline decoration-[#D5B878] underline-offset-4 hover:text-[#142318]"
              >
                {data.back}
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
