import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { holdingServices } from "@/data/services";

export const metadata = {
  title: "Leistungen | Ganzheitliche Gesundheitsversorgung unter einem Dach",
  description:
    "Entdecken Sie unsere medizinischen und organisatorischen Leistungen: MVZ, Diagnostik, Rehabilitation, HomeCare, Wundversorgung, Personalvermittlung und Innovationsmanagement.",
};

import { ServicesPageComponent } from "@/components/pages/ServicesPageComponent";

export default function ServicesPage() {
  return <ServicesPageComponent locale="de" />;
}
