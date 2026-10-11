import React from "react";
import { getDictionary } from "@/lib/i18n";
import { getLocaleAlternates } from "@/lib/seo";
import { HomePageComponent } from "@/components/pages/HomePageComponent";

const germanDictionary = getDictionary("de");

export const metadata = {
  title: germanDictionary.meta.title,
  description: germanDictionary.meta.description,
  alternates: getLocaleAlternates("de", ""),
};

export default function RootHomePage() {
  return <HomePageComponent locale="de" />;
}
