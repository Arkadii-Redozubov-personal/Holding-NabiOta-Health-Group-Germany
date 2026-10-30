import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocaleAlternates } from "@/lib/seo";
import { CompanyPlaceholderPageComponent } from "@/components/pages/CompanyPlaceholderPageComponent";
import { getCompanyPlaceholderData, companyPlaceholders } from "@/data/company-placeholders";

export const metadata: Metadata = {
  title: `${companyPlaceholders["mvz-hausarzt-facharzt"].copy.de.title} | NabiOta Health Group`,
  alternates: getLocaleAlternates("de", "mvz-hausarzt-facharzt"),
};

export default function DefaultPage() {
  const data = getCompanyPlaceholderData("mvz-hausarzt-facharzt", "de");
  if (!data) notFound();
  return <CompanyPlaceholderPageComponent locale="de" data={data} />;
}
