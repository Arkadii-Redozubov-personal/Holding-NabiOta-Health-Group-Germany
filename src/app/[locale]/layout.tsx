import "../globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RootDocument } from "@/components/layout/RootDocument";
import { getSiteMetadata } from "@/lib/site-metadata";
import { isValidLocale, locales } from "@/lib/i18n";

export const dynamicParams = false;

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return getSiteMetadata(locale);
}

export default async function LocaleRootLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return <RootDocument locale={locale}>{children}</RootDocument>;
}
