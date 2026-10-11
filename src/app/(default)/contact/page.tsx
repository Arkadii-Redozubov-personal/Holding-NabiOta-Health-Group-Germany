import React from "react";
import { ContactPageComponent } from "@/components/pages/ContactPageComponent";
import { getLocaleAlternates } from "@/lib/seo";

export const metadata = {
  title: "Kontakt | NabiOta® Health Group Germany",
  description:
    "Treten Sie mit der NabiOta® Health Group Germany in Kontakt. Ansprechpartner, Standorte in Mönchengladbach und Kontaktformular.",
  alternates: getLocaleAlternates("de", "contact"),
};

export default function ContactPage() {
  return <ContactPageComponent locale="de" />;
}
