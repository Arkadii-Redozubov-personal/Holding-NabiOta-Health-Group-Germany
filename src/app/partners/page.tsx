import React from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Partner & Kooperationen | NabiOta® Health Group Germany",
  description:
    "Gemeinsam mehr erreichen: Zusammenarbeit mit medizinischen Einrichtungen, Kliniken, Fachärzten, Bildungsträgern und internationalen Partnern.",
};

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">KOOPERATIONEN & NETZWERK</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                Gemeinsam mehr erreichen.
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                Nachhaltige Entwicklungen und moderne Versorgungskonzepte entstehen
                durch den Austausch von Wissen, Erfahrung und Kompetenzen.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-forest-900/10">
                <Image
                  src="/images/partners/atrium.jpg"
                  alt="Partner und Dialog bei NabiOta"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <Eyebrow variant="forest">STRATEGISCHE PARTNERSCHAFTEN</Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-950 leading-tight">
                  Verlässliche Zusammenarbeit auf Augenhöhe
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  <p>
                    Die NabiOta® Health Group Germany GmbH setzt auf langfristige
                    und vertrauensvolle Zusammenarbeit mit Partnern aus dem
                    Gesundheitswesen.
                  </p>
                  <p>
                    Wir freuen uns über den Austausch und die Zusammenarbeit mit:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-forest-950 font-medium">
                    <li>Medizinischen Einrichtungen & Facharztpraxen</li>
                    <li>Kliniken & Schwerpunktkrankenhäusern</li>
                    <li>Rehabilitations- und Therapiezentren</li>
                    <li>Pflegeeinrichtungen & ambulanten Pflegediensten</li>
                    <li>Bildungsträgern & akademischen Institutionen</li>
                    <li>Nationalen und internationalen Kooperationspartnern</li>
                  </ul>
                  <p>
                    Investoren und strategische Partner begleiten wir bei der
                    Entwicklung langfristiger Projekte und tragfähiger Strukturen.
                  </p>
                </div>

                <div className="pt-4">
                  <Button variant="gold-solid" size="lg" href="/contact">
                    Kooperationsgespräch vereinbaren
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
