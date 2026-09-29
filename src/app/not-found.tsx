import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center py-32 bg-[#FAF8F5]">
        <Container size="narrow" className="text-center">
          <span className="font-display text-7xl sm:text-9xl text-gold-500 font-light block mb-4">
            404
          </span>
          <h1 className="font-display text-3xl sm:text-4xl text-forest-950 mb-4">
            Seite nicht gefunden
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-md mx-auto mb-8 font-sans">
            Die von Ihnen angeforderte Seite existiert leider nicht oder wurde an
            eine andere Adresse verschoben.
          </p>
          <Button variant="gold-solid" size="lg" href="/">
            Zurück zur Startseite
          </Button>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
