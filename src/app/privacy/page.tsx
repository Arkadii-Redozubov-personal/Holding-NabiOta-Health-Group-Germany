import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { companyInfo } from "@/data/company";

export const metadata = {
  title: "Datenschutzerklärung | DSGVO Konformität",
  description:
    "Datenschutzerklärung der NabiOta® Health Group Germany GmbH gemäß Datenschutz-Grundverordnung (DSGVO).",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="DATENSCHUTZ & TRANSPARENZ"
          title="Datenschutzerklärung"
          description="Informationen über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten."
          imageSrc="/images/heroes/hero-campus.jpg"
          imageAlt="NabiOta Health Group Germany Datenschutz"
        />

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="narrow" className="max-w-[800px]">
            <div className="bg-white p-8 sm:p-12 rounded-2xl border border-forest-900/10 shadow-sm space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              <div>
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  1. Verantwortliche Stelle
                </h2>
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:
                </p>
                <div className="mt-2 text-forest-950 font-medium">
                  <p>{companyInfo.legalName}</p>
                  <p>{companyInfo.street}</p>
                  <p>{companyInfo.postalCode} {companyInfo.city}</p>
                  <p>E-Mail: {companyInfo.email}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  2. Erhebung und Speicherung personenbezogener Daten
                </h2>
                <p>
                  Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert.
                </p>
                <p className="mt-2">
                  Hierzu gehören: IP-Adresse, Datum und Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei, Website, von der aus der Zugriff erfolgt (Referrer-URL), verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  3. Kontaktformular und E-Mail-Kontakt
                </h2>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  4. Ihre Rechte als betroffene Person
                </h2>
                <p>
                  Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie das Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).
                </p>
                <p className="mt-2">
                  Bitte wenden Sie sich hierfür direkt an unsere im Impressum angegebene Kontaktadresse.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
