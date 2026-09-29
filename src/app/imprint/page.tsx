import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { companyInfo } from "@/data/company";

export const metadata = {
  title: "Impressum | Rechtliche Angaben nach § 5 TMG",
  description:
    "Impressum und Pflichtangaben der NabiOta® Health Group Germany GmbH gemäß § 5 TMG und § 18 Abs. 2 MStV.",
};

export default function ImprintPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        <section className="bg-forest-950 text-ivory-50 py-14 sm:py-20 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">RECHTLICHE PFLICHTANGABEN</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl font-normal leading-tight mb-4">
                Impressum
              </h1>
              <p className="text-sm sm:text-base text-ivory-200/80 font-light">
                Angaben gemäß § 5 Telemediengesetz (TMG) und § 18 Abs. 2 Medienstaatsvertrag (MStV).
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="narrow" className="max-w-[800px]">
            <div className="bg-white p-8 sm:p-12 rounded-2xl border border-forest-900/10 shadow-sm space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              <div>
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  Diensteanbieter
                </h2>
                <p className="font-semibold text-forest-950">{companyInfo.legalName}</p>
                <p>{companyInfo.street}</p>
                <p>{companyInfo.postalCode} {companyInfo.city}</p>
                <p>{companyInfo.country}</p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  Vertretungsberechtigte
                </h2>
                <p>
                  <strong className="text-forest-950 font-medium">Vertreten durch die Geschäftsführung:</strong>
                  <br />
                  {companyInfo.managingDirector}
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  Kontakt
                </h2>
                <p>
                  Telefon (Sekretariat): {companyInfo.phones.sekretariat}
                  <br />
                  Telefon (Aufnahme): {companyInfo.phones.aufnahme}
                  <br />
                  Telefon (Geschäftsführung): {companyInfo.phones.geschaeftsfuehrung}
                  <br />
                  Telefax: {companyInfo.phones.fax}
                </p>
                <p className="mt-2">
                  E-Mail:{" "}
                  <a href={`mailto:${companyInfo.email}`} className="text-gold-700 underline">
                    {companyInfo.email}
                  </a>
                  <br />
                  Internet:{" "}
                  <a href={`https://${companyInfo.website}`} className="text-gold-700 underline">
                    {companyInfo.website}
                  </a>
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  Registereintrag
                </h2>
                <p>
                  Eintragung im Handelsregister.
                  <br />
                  Registergericht: {companyInfo.commercialRegister.court}
                  <br />
                  Handelsregisternummer: {companyInfo.commercialRegister.number}
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  Umsatzsteuer-Identifikationsnummer
                </h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                  <br />
                  <strong className="text-forest-950 font-semibold">
                    {companyInfo.commercialRegister.vatId}
                  </strong>
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <p>
                  {companyInfo.commercialRegister.responsiblePerson}
                  <br />
                  {companyInfo.street}, {companyInfo.postalCode} {companyInfo.city}
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  Markenschutz & Urheberrecht
                </h2>
                <p>
                  NabiOta® ist eine eingetragene und geschützte Marke der NabiOta®
                  Health Group Germany GmbH. Die Nutzung der Marke, der Logos,
                  Unternehmenskennzeichen sowie sonstiger geschützter Bestandteile
                  bedarf der vorherigen schriftlichen Zustimmung der Rechteinhaberin.
                </p>
                <p className="mt-2 text-xs text-text-secondary/80">
                  © 2026 NabiOta® Health Group Germany GmbH. Alle Rechte vorbehalten.
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
