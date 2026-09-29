import React from "react";
import { ContactPageComponent } from "@/components/pages/ContactPageComponent";

export const metadata = {
  title: "Kontakt | NabiOta® Health Group Germany",
  description:
    "Treten Sie mit der NabiOta® Health Group Germany in Kontakt. Ansprechpartner, Standorte in Mönchengladbach und Kontaktformular.",
};

export default function ContactPage() {
  return <ContactPageComponent locale="de" />;
}
