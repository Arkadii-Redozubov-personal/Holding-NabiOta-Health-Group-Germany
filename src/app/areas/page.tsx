import React from "react";
import { AreasPageComponent } from "@/components/pages/AreasPageComponent";

export const metadata = {
  title: "Unternehmensbereiche | NabiOta® Health Group Germany",
  description:
    "Erkunden Sie unsere Unternehmensbereiche: Medizinische Fachbereiche, Diagnostik, Rehabilitation, Pflege, Beratung & Projektentwicklung sowie Internationale Kooperationen.",
};

export default function AreasPage() {
  return <AreasPageComponent locale="de" />;
}
