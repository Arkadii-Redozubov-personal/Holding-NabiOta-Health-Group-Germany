import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { IconCircle } from "@/components/ui/IconCircle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { holdingServices } from "@/data/services";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return holdingServices.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = holdingServices.find((s) => s.slug === slug);
  if (!service) return { title: "Leistung nicht gefunden" };

  return {
    title: `${service.title} | Unsere Leistungen`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = holdingServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = holdingServices.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="bg-[#FAF8F5] border-b border-forest-900/10 py-3">
          <Container size="wide">
            <nav className="flex items-center gap-2 text-xs text-text-secondary" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-gold-600 transition-colors">Startseite</Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-secondary/50" />
              <Link href="/services" className="hover:text-gold-600 transition-colors">Unsere Leistungen</Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-secondary/50" />
              <span className="text-forest-950 font-medium">{service.title}</span>
            </nav>
          </Container>
        </div>

        {/* Hero Section */}
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <IconCircle
                  name={service.iconName}
                  size="sm"
                  variant="dark"
                  className="w-8 h-8"
                />
                <Eyebrow variant="gold">{service.category}</Eyebrow>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight mb-4 text-ivory-50">
                {service.title}
              </h1>
              {service.subtitle && (
                <p className="text-lg sm:text-xl text-gold-300 font-light mb-6 font-display">
                  {service.subtitle}
                </p>
              )}
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light font-sans max-w-2xl">
                {service.shortDescription}
              </p>
            </div>
          </Container>
        </section>

        {/* Overview & Detail Section */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-forest-900/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <Eyebrow variant="forest">LEISTUNG IM DETAIL</Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-950 leading-tight">
                  Individuelle Versorgung mit höchsten Ansprüchen
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  {service.description}
                </p>

                {/* Key Benefits */}
                {service.benefits && (
                  <div className="space-y-3 pt-2">
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-forest-950 font-medium">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Process Steps */}
        {service.processSteps && (
          <section className="py-16 sm:py-20 bg-white border-y border-forest-900/10">
            <Container size="wide">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <Eyebrow variant="forest">BEHANDLUNGSPFAD & ABLAUF</Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
                  Transparente Schritte zu Ihrer Genesung
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-6 rounded-xl bg-[#FAF8F5] border border-forest-900/10 relative"
                  >
                    <span className="font-display text-4xl text-gold-400 font-semibold mb-3 block">
                      0{step.step}
                    </span>
                    <h3 className="font-sans text-base font-bold text-forest-950 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Consultation CTA */}
              <div className="mt-14 text-center">
                <Button variant="gold-solid" size="lg" href="/contact">
                  Beratungstermin anfragen
                </Button>
              </div>
            </Container>
          </section>
        )}

        {/* Related Services */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <h3 className="font-display text-2xl sm:text-3xl text-forest-950 mb-8">
              Weitere Leistungen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <ServiceCard key={rel.id} service={rel} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
