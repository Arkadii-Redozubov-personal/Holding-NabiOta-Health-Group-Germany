import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocaleAlternates } from "@/lib/seo";
import { CompanyPlaceholderPageComponent } from "@/components/pages/CompanyPlaceholderPageComponent";
import { getCompanyPlaceholderData, companyPlaceholders } from "@/data/company-placeholders";

export const metadata: Metadata = {
  title: `${companyPlaceholders["nabiota-clinics-germany"].copy.de.title} | NabiOta Health Group`,
  alternates: getLocaleAlternates("de", "nabiota-clinics-germany"),
};

export default function DefaultPage() {
  const data = getCompanyPlaceholderData("nabiota-clinics-germany", "de");
  if (!data) notFound();
  return <CompanyPlaceholderPageComponent locale="de" data={data} />;
}
