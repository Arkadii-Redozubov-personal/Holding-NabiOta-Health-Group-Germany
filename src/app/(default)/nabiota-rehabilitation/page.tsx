import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocaleAlternates } from "@/lib/seo";
import { CompanyPlaceholderPageComponent } from "@/components/pages/CompanyPlaceholderPageComponent";
import { getCompanyPlaceholderData, companyPlaceholders } from "@/data/company-placeholders";

export const metadata: Metadata = {
  title: `${companyPlaceholders["nabiota-rehabilitation"].copy.de.title} | NabiOta Health Group`,
  alternates: getLocaleAlternates("de", "nabiota-rehabilitation"),
};

export default function DefaultPage() {
  const data = getCompanyPlaceholderData("nabiota-rehabilitation", "de");
  if (!data) notFound();
  return <CompanyPlaceholderPageComponent locale="de" data={data} />;
}
