import React from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Karriere | Gestalten Sie mit uns die Zukunft der Gesundheit",
  description:
    "Karrieremöglichkeiten bei der NabiOta® Health Group Germany: Ärztlicher Dienst, Pflege, Therapie, Diagnostik, Management und internationale Projekte.",
};

const careerFields = [
  "Ärztlicher Dienst (Allgemeinmedizin, Chirurgie, Orthopädie, Radiologie)",
  "Pflege und HomeCare (examinierte Pflegefachkräfte)",
  "Therapie und Rehabilitation (Physio-, Ergo- und Sporttherapeuten)",
  "Diagnostik (MTRA, radiologische Assistenzberufe)",
  "Verwaltung, Abrechnung und Praxismanagement",
  "Personalvermittlung und internationale Fachkräfteprojekte",
];

export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">KARRIERE BEI NABIOTA</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                Gestalten Sie mit uns<br />die Zukunft der Gesundheit.
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                Wir leben von den Menschen, die ihr Wissen, ihre Erfahrung und ihr
                Engagement täglich einbringen. Werden Sie Teil unserer
                zukunftsorientierten Gesundheitsgruppe.
              </p>
            </div>
          </Container>
        </section>

        {/* Benefits & Fields */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-forest-900/10">
                <Image
                  src="/images/careers/team.jpg"
                  alt="Unser Team bei NabiOta Health Group"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <Eyebrow variant="forest">PERSPEKTIVEN & ENTWICKLUNG</Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-950 leading-tight">
                  Mögliche Einsatzbereiche
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  Wir bieten ein modernes Arbeitsumfeld, interdisziplinäre
                  Zusammenarbeit, fachliche Weiterbildung und echte
                  Gestaltungsspielräume.
                </p>

                <div className="space-y-3 pt-2">
                  {careerFields.map((field, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-forest-950 font-medium">
                        {field}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Application details from PDF */}
        <section className="py-16 sm:py-20 bg-white border-y border-forest-900/10">
          <Container size="wide">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Eyebrow variant="forest">BEWERBUNG</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-4">
                Sie möchten Teil der NabiOta® Gruppe werden?
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Nutzen Sie unser Kontaktformular oder senden Sie uns Ihre Unterlagen
                (Lebenslauf, Qualifikationsnachweise, gewünschter Tätigkeitsbereich und
                frühestmöglicher Eintrittstermin) unkompliziert per E-Mail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="p-6 rounded-xl bg-[#FAF8F5] border border-forest-900/10 text-center">
                <Mail className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                <h3 className="font-bold text-sm text-forest-950 mb-1">
                  E-Mail Bewerbung
                </h3>
                <p className="text-xs text-text-secondary mb-3">
                  Direkt an unser Recruiting-Team:
                </p>
                <a
                  href="mailto:karriere@nabiota.de"
                  className="font-medium text-gold-700 hover:underline text-sm"
                >
                  karriere@nabiota.de
                </a>
              </div>

              <div className="p-6 rounded-xl bg-[#FAF8F5] border border-forest-900/10 text-center">
                <Phone className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                <h3 className="font-bold text-sm text-forest-950 mb-1">
                  Telefonische Vorabberatung
                </h3>
                <p className="text-xs text-text-secondary mb-3">
                  Personalmanagement & Recruiting:
                </p>
                <a
                  href="tel:+4921619170018"
                  className="font-medium text-gold-700 hover:underline text-sm"
                >
                  +49 2161 9170018
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="gold-solid" size="lg" href="/contact">
                Zum Bewerbungsformular
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
