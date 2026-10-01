"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ArrowRight,
  QrCode,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

interface ContactPageComponentProps {
  locale?: SupportedLocale;
}

export function ContactPageComponent({ locale = "de" }: ContactPageComponentProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "Allgemeine Anfrage",
    message: "",
    privacyConsent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const t = {
    de: {
      left: {
        eyebrow: "UNSERE KONTAKTDATEN",
        title: "So erreichen Sie uns",
        desc: "Wir freuen uns über Ihre Nachricht. Unser Team hilft Ihnen gerne weiter und ist für Sie da – telefonisch, per E-Mail oder vor Ort.",
        addressTitle: "Postanschrift",
        street: "Aachener Straße 114",
        city: "41061 Mönchengladbach, Deutschland",
        phoneTitle: "Telefonische Erreichbarkeit",
        reception: "Sekretariat:",
        admission: "Aufnahme:",
        executive: "Geschäftsführung:",
        emailTitle: "E-Mail",
        hqEmail: "Zentrale:",
        careerEmail: "Karriere:",
        hoursTitle: "Servicezeiten",
        hours: "Montag – Freitag: 08:00 – 18:00 Uhr",
      },
      form: {
        eyebrow: "NACHRICHT SENDEN",
        title: "Wir freuen uns auf Ihre Nachricht",
        subtitle:
          "Füllen Sie das Formular aus – wir setzen uns zeitnah mit Ihnen in Verbindung.",
        nameLabel: "VOLLSTÄNDIGER NAME *",
        namePlaceholder: "Dr. med. Maria Muster",
        emailLabel: "E-MAIL *",
        emailPlaceholder: "muster@beispiel.de",
        phoneLabel: "TELEFON (OPTIONAL)",
        phonePlaceholder: "+49 170 1234567",
        companyLabel: "UNTERNEHMEN / PRAXIS",
        companyPlaceholder: "Klinik / Gemeinschaftspraxis",
        subjectLabel: "BETREFF",
        subjects: [
          "Allgemeine Anfrage",
          "Bewerbung / Karriere",
          "Kooperationsanfrage",
          "Medizinische Leistungen",
          "Sonstiges",
        ],
        messageLabel: "IHRE NACHRICHT *",
        messagePlaceholder: "Wie können wir Sie unterstützen?",
        privacyText:
          "Ich habe die Datenschutzerklärung gelesen und erkläre mich mit der Verarbeitung meiner Daten einverstanden. *",
        submitBtn: "Nachricht absenden",
        successMsg: "Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt.",
        errorRequired: "Bitte füllen Sie alle erforderlichen Pflichtfelder aus.",
        errorPrivacy: "Bitte stimmen Sie der Datenschutzerklärung zu.",
      },
      cards: {
        mapTitle: "NabiOta Health Group Germany GmbH",
        mapAddress: "Aachener Straße 114, 41061 Mönchengladbach",
        openMaps: "In Google Maps öffnen",
        qrTitle: "QR-Code für Google Maps",
        qrDesc:
          "Scannen Sie den QR-Code mit Ihrem Smartphone, um die genaue Route zu unserem Standort zu erhalten.",
        qrBtn: "QR-Code scannen",
        clinicSlogan1: "Ihre Gesundheit",
        clinicSlogan2: "in besten Händen.",
      },
    },
    en: {
      left: {
        eyebrow: "OUR CONTACT DETAILS",
        title: "How to Reach Us",
        desc: "We look forward to hearing from you. Our team is at your disposal and here to assist you – by phone, email, or on site.",
        addressTitle: "Postal Address",
        street: "Aachener Straße 114",
        city: "41061 Mönchengladbach, Germany",
        phoneTitle: "Telephone Availability",
        reception: "Secretariat:",
        admission: "Admissions:",
        executive: "Executive Office:",
        emailTitle: "E-Mail",
        hqEmail: "Headquarters:",
        careerEmail: "Careers:",
        hoursTitle: "Service Hours",
        hours: "Monday – Friday: 08:00 – 18:00 CET",
      },
      form: {
        eyebrow: "SEND MESSAGE",
        title: "We Look Forward to Your Message",
        subtitle: "Fill out the form – we will get in touch with you promptly.",
        nameLabel: "FULL NAME *",
        namePlaceholder: "Dr. Maria Muster",
        emailLabel: "E-MAIL *",
        emailPlaceholder: "muster@example.com",
        phoneLabel: "PHONE (OPTIONAL)",
        phonePlaceholder: "+49 170 1234567",
        companyLabel: "COMPANY / CLINIC",
        companyPlaceholder: "Clinic / Medical Practice",
        subjectLabel: "SUBJECT",
        subjects: [
          "General Inquiry",
          "Application / Career",
          "Partnership Proposal",
          "Medical Services",
          "Other",
        ],
        messageLabel: "YOUR MESSAGE *",
        messagePlaceholder: "How can we assist you?",
        privacyText:
          "I have read the privacy policy and consent to the processing of my data. *",
        submitBtn: "Send Message",
        successMsg: "Thank you! Your inquiry has been submitted successfully.",
        errorRequired: "Please fill in all required fields.",
        errorPrivacy: "Please accept the privacy policy to proceed.",
      },
      cards: {
        mapTitle: "NabiOta Health Group Germany GmbH",
        mapAddress: "Aachener Straße 114, 41061 Mönchengladbach",
        openMaps: "Open in Google Maps",
        qrTitle: "QR Code for Google Maps",
        qrDesc:
          "Scan the QR code with your smartphone camera to get exact turn-by-turn directions to our headquarters.",
        qrBtn: "Scan QR Code",
        clinicSlogan1: "Your health",
        clinicSlogan2: "in the best hands.",
      },
    },
    ru: {
      left: {
        eyebrow: "НАШИ КОНТАКТНЫЕ ДАННЫЕ",
        title: "Как с нами связаться",
        desc: "Мы рады вашему обращению. Наша команда всегда готова помочь вам и ответить на любые вопросы — по телефону, электронной почте или лично.",
        addressTitle: "Почтовый адрес",
        street: "Aachener Straße 114",
        city: "41061 Mönchengladbach, Deutschland",
        phoneTitle: "Телефоны для связи",
        reception: "Секретариат:",
        admission: "Приемное отделение:",
        executive: "Руководство:",
        emailTitle: "Электронная почта",
        hqEmail: "Центральный офис:",
        careerEmail: "Отдел кадров / карьера:",
        hoursTitle: "Часы работы",
        hours: "Понедельник – Пятница: 08:00 – 18:00",
      },
      form: {
        eyebrow: "ОТПРАВИТЬ СООБЩЕНИЕ",
        title: "Мы будем рады вашему обращению",
        subtitle:
          "Заполните контактную форму — наши специалисты оперативно свяжутся с вами.",
        nameLabel: "ПОЛНОЕ ИМЯ *",
        namePlaceholder: "Д-р мед. Мария Мустер",
        emailLabel: "E-MAIL *",
        emailPlaceholder: "muster@beispiel.de",
        phoneLabel: "ТЕЛЕФОН (НЕОБЯЗАТЕЛЬНО)",
        phonePlaceholder: "+49 170 1234567",
        companyLabel: "ОРГАНИЗАЦИЯ / ПРАКТИКА",
        companyPlaceholder: "Клиника / Медцентр",
        subjectLabel: "ТЕМА ОБРАЩЕНИЯ",
        subjects: [
          "Общий запрос",
          "Карьера и вакансии",
          "Сотрудничество и партнерство",
          "Медицинские услуги",
          "Другое",
        ],
        messageLabel: "ВАШЕ СООБЩЕНИЕ *",
        messagePlaceholder: "Чем мы можем вам помочь?",
        privacyText:
          "Я ознакомился с политикой конфиденциальности и даю согласие на обработку персональных данных. *",
        submitBtn: "Отправить сообщение",
        successMsg: "Спасибо! Ваше обращение успешно отправлено.",
        errorRequired: "Пожалуйста, заполните все обязательные поля.",
        errorPrivacy: "Необходимо согласиться с политикой конфиденциальности.",
      },
      cards: {
        mapTitle: "NabiOta Health Group Germany GmbH",
        mapAddress: "Aachener Straße 114, 41061 Mönchengladbach",
        openMaps: "Открыть в Google Maps",
        qrTitle: "QR-код для Google Maps",
        qrDesc:
          "Отсканируйте QR-код камерой смартфона, чтобы открыть маршрут к нашему адресу в приложении Google Maps.",
        qrBtn: "Сканировать QR-код",
        clinicSlogan1: "Ваше здоровье",
        clinicSlogan2: "в надежных руках.",
      },
    },
  }[locale];

  const mapsUrl =
    "https://maps.google.com/?q=Aachener+Stra%C3%9Fe+114,+41061+M%C3%B6nchengladbach";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage(t.form.errorRequired);
      return;
    }

    if (!formData.privacyConsent) {
      setStatus("error");
      setErrorMessage(t.form.errorPrivacy);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        subject: t.form.subjects[0],
        message: "",
        privacyConsent: false,
      });
    }, 900);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF7] text-forest-950 font-sans selection:bg-[#C5A56A]/20 selection:text-forest-950">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* ── Page Hero Header (Unified across all subpages) ── */}
        <PageHero
          breadcrumb={
            <Breadcrumb
              items={[
                { label: locale === "ru" ? "Главная" : locale === "en" ? "Home" : "Startseite", href: `/${locale}` },
                { label: locale === "ru" ? "Контакты" : locale === "en" ? "Contact" : "Kontakt" },
              ]}
            />
          }
          title={
            locale === "ru"
              ? "Свяжитесь с нами"
              : locale === "en"
              ? "Get in Touch"
              : "Treten Sie mit uns in Kontakt"
          }
          description={
            locale === "ru"
              ? "Мы рады ответить на ваши вопросы, предоставить информацию о медицинских направлениях холдинга и обсудить сотрудничество."
              : locale === "en"
              ? "We look forward to hearing from you. Our team is available by phone, email, or in person at our Mönchengladbach headquarters."
              : "Wir freuen uns über Ihre Nachricht. Unser Team hilft Ihnen gerne weiter und ist für Sie da – telefonisch, per E-Mail oder vor Ort in Mönchengladbach."
          }
          imageSrc="/images/heroes/hero-contact.jpg"
          imageAlt="NabiOta Health Group Germany Kontakt"
        />

        <div className="pt-14 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 relative overflow-hidden bg-[#FCFAF7]">
          {/* Subtle decorative leaf silhouettes on sides matching reference photo */}
          <div className="absolute top-24 -left-16 w-56 h-96 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(20,40,25,0.3),transparent_70%)]" />
          <div className="absolute top-20 -right-16 w-56 h-96 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(20,40,25,0.3),transparent_70%)]" />

          <Container size="wide" className="relative z-10">
            {/* ══════════════════════════════════════════════════════════
                UPPER SECTION: 2-COLUMN CONTACT DETAILS & FORM
            ══════════════════════════════════════════════════════════ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-8 sm:mb-10">
              {/* ── Left Column: Contact Details ─────────────────────── */}
              <div className="lg:col-span-5 space-y-6">
                {/* Header */}
                <div>
                  <span className="text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-2">
                    {t.left.eyebrow}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-forest-950 font-normal leading-tight mb-3">
                    {t.left.title}
                  </h2>
                  <p className="text-xs sm:text-[13.5px] text-[#556057] leading-relaxed">
                    {t.left.desc}
                  </p>
                </div>

              {/* 4 Information Cards matching photo */}
              <div className="space-y-3 pt-1">
                {/* 1. Postanschrift */}
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EDE7D9] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#C5A56A] transition-all duration-200 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] flex-shrink-0 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors duration-200">
                      <MapPin className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-forest-950 leading-snug">
                        {t.left.addressTitle}
                      </h3>
                      <p className="text-xs text-[#556057] mt-0.5 leading-snug">
                        {t.left.street}
                        <br />
                        {t.left.city}
                      </p>
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-full border border-[#EDE7D9] group-hover:border-[#C5A56A] flex items-center justify-center text-[#C5A56A] group-hover:translate-x-0.5 transition-all flex-shrink-0">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </a>

                {/* 2. Telefonische Erreichbarkeit */}
                <div className="p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EDE7D9] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#C5A56A] transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] flex-shrink-0 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors duration-200 mt-0.5">
                      <Phone className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-forest-950 leading-snug mb-1">
                        {t.left.phoneTitle}
                      </h3>
                      <div className="text-xs text-[#556057] space-y-0.5 font-sans">
                        <div className="flex items-center gap-2">
                          <span className="w-24 text-[#7B867D]">{t.left.reception}</span>
                          <a
                            href="tel:+4921619170016"
                            className="text-forest-950 font-medium hover:text-[#C5A56A] transition-colors"
                          >
                            +49 2161 9170016
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-24 text-[#7B867D]">{t.left.admission}</span>
                          <a
                            href="tel:+4921619170017"
                            className="text-forest-950 font-medium hover:text-[#C5A56A] transition-colors"
                          >
                            +49 2161 9170017
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-24 text-[#7B867D]">{t.left.executive}</span>
                          <a
                            href="tel:+4921619170018"
                            className="text-forest-950 font-medium hover:text-[#C5A56A] transition-colors"
                          >
                            +49 2161 9170018
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="tel:+4921619170016"
                    className="w-7 h-7 rounded-full border border-[#EDE7D9] group-hover:border-[#C5A56A] flex items-center justify-center text-[#C5A56A] group-hover:translate-x-0.5 transition-all flex-shrink-0"
                    aria-label="Call Secretariat"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* 3. E-Mail */}
                <div className="p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EDE7D9] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#C5A56A] transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] flex-shrink-0 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors duration-200 mt-0.5">
                      <Mail className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-forest-950 leading-snug mb-1">
                        {t.left.emailTitle}
                      </h3>
                      <div className="text-xs text-[#556057] space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="w-16 text-[#7B867D]">{t.left.hqEmail}</span>
                          <a
                            href="mailto:kontakt@nabiota-health-group.de"
                            className="text-forest-950 font-medium hover:text-[#C5A56A] transition-colors"
                          >
                            kontakt@nabiota-health-group.de
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-16 text-[#7B867D]">{t.left.careerEmail}</span>
                          <a
                            href="mailto:karriere@nabiota.de"
                            className="text-forest-950 font-medium hover:text-[#C5A56A] transition-colors"
                          >
                            karriere@nabiota.de
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="mailto:kontakt@nabiota-health-group.de"
                    className="w-7 h-7 rounded-full border border-[#EDE7D9] group-hover:border-[#C5A56A] flex items-center justify-center text-[#C5A56A] group-hover:translate-x-0.5 transition-all flex-shrink-0"
                    aria-label="Send Email"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* 4. Servicezeiten */}
                <div className="p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EDE7D9] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#C5A56A] transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] flex-shrink-0 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors duration-200">
                      <Clock className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-forest-950 leading-snug">
                        {t.left.hoursTitle}
                      </h3>
                      <p className="text-xs text-[#556057] mt-0.5 leading-snug">
                        {t.left.hours}
                      </p>
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-full border border-[#EDE7D9] group-hover:border-[#C5A56A] flex items-center justify-center text-[#C5A56A] flex-shrink-0">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column: Message Form ──────────────────────── */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#EDE7D9] shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                <span className="text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-1.5">
                  {t.form.eyebrow}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal leading-tight mb-2">
                  {t.form.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#556057] leading-relaxed mb-6">
                  {t.form.subtitle}
                </p>

                {status === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 text-xs sm:text-sm">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                    <p>{t.form.successMsg}</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-800 text-xs sm:text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-600" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-forest-950 uppercase mb-1.5">
                        {t.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder={t.form.namePlaceholder}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/50 text-forest-950 text-xs sm:text-sm placeholder:text-[#A1A8A2] focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-forest-950 uppercase mb-1.5">
                        {t.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder={t.form.emailPlaceholder}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/50 text-forest-950 text-xs sm:text-sm placeholder:text-[#A1A8A2] focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-forest-950 uppercase mb-1.5">
                        {t.form.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder={t.form.phonePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/50 text-forest-950 text-xs sm:text-sm placeholder:text-[#A1A8A2] focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-forest-950 uppercase mb-1.5">
                        {t.form.companyLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder={t.form.companyPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/50 text-forest-950 text-xs sm:text-sm placeholder:text-[#A1A8A2] focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Subject */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-forest-950 uppercase mb-1.5">
                      {t.form.subjectLabel}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/50 text-forest-950 text-xs sm:text-sm focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all cursor-pointer"
                    >
                      {t.form.subjects.map((subj, idx) => (
                        <option key={idx} value={subj}>
                          {subj}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-forest-950 uppercase mb-1.5">
                      {t.form.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t.form.messagePlaceholder}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/50 text-forest-950 text-xs sm:text-sm placeholder:text-[#A1A8A2] focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all resize-y"
                    />
                  </div>

                  {/* Checkbox: Privacy */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          privacyConsent: e.target.checked,
                        })
                      }
                      required
                      className="mt-1 w-4 h-4 rounded border-[#DCD6C8] text-[#C5A56A] focus:ring-[#C5A56A] cursor-pointer"
                    />
                    <label
                      htmlFor="privacyConsent"
                      className="text-[11.5px] sm:text-xs text-[#556057] leading-relaxed cursor-pointer"
                    >
                      {locale === "ru" ? (
                        <>
                          Я ознакомился с{" "}
                          <Link
                            href={`/${locale}/privacy`}
                            className="text-[#96742E] underline hover:text-forest-950"
                          >
                            политикой конфиденциальности
                          </Link>{" "}
                          и согласен на обработку персональных данных. *
                        </>
                      ) : locale === "en" ? (
                        <>
                          I have read the{" "}
                          <Link
                            href={`/${locale}/privacy`}
                            className="text-[#96742E] underline hover:text-forest-950"
                          >
                            privacy policy
                          </Link>{" "}
                          and agree to the processing of my data. *
                        </>
                      ) : (
                        <>
                          Ich habe die{" "}
                          <Link
                            href={`/${locale}/privacy`}
                            className="text-[#96742E] underline hover:text-forest-950"
                          >
                            Datenschutzerklärung
                          </Link>{" "}
                          gelesen und erkläre mich mit der Verarbeitung meiner
                          Daten einverstanden. *
                        </>
                      )}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#C5A56A] hover:bg-[#D5B878] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer disabled:opacity-50"
                    >
                      <span>{t.form.submitBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              LOWER SECTION: 2 CARDS (EXPANDED MAP & STRETCHED QR-CODE)
          ══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* ── Block 1 (5 cols): Google Maps Card with increased height ── */}
            <div className="md:col-span-5 rounded-2xl overflow-hidden border border-[#EDE7D9] bg-white shadow-xs relative flex flex-col min-h-[220px] sm:min-h-[240px]">
              {/* Interactive iframe map */}
              <iframe
                title="Google Maps Aachener Straße 114, 41061 Mönchengladbach"
                src="https://maps.google.com/maps?q=Aachener+Stra%C3%9Fe+114,+41061+M%C3%B6nchengladbach&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[220px] sm:min-h-[240px] border-0"
                loading="lazy"
              />

              {/* Pinned Info Badge on top left of map */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs rounded-lg px-3 py-2 border border-black/10 shadow-md text-left pointer-events-none max-w-[85%]">
                <p className="font-bold text-[11px] text-forest-950 leading-tight">
                  {t.cards.mapTitle}
                </p>
                <p className="text-[10px] text-[#556057] leading-tight mt-0.5">
                  {t.cards.mapAddress}
                </p>
              </div>

              {/* Direct Link to Google Maps */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2.5 right-2.5 bg-white/95 hover:bg-white text-forest-950 text-[10.5px] font-medium px-3 py-1.5 rounded-lg shadow-sm border border-black/10 flex items-center gap-1.5 transition-colors"
              >
                <span>{t.cards.openMaps}</span>
                <ExternalLink className="w-3 h-3 text-[#C5A56A]" />
              </a>
            </div>

            {/* ── Block 2 (7 cols): Stretched QR Code Card taking space of removed banner ── */}
            <div className="md:col-span-7 rounded-2xl border border-[#EDE7D9] bg-[#FAF8F5] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 min-h-[220px] sm:min-h-[240px]">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
                {/* Real working QR Code */}
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-[#EDE7D9] bg-white p-1.5 flex-shrink-0 hover:scale-105 transition-transform shadow-xs"
                  title="Google Maps QR Code"
                >
                  <Image
                    src="/images/contact/google-maps-qr.png"
                    alt="QR Code für Google Maps"
                    fill
                    className="object-contain p-1"
                  />
                </a>

                {/* QR Text */}
                <div className="space-y-1.5 max-w-sm">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EFE9DC] text-[10px] font-semibold text-[#8D6B27] uppercase tracking-wider">
                    <QrCode className="w-3 h-3" />
                    <span>Navigation</span>
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-forest-950 leading-snug">
                    {t.cards.qrTitle}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#556057] leading-relaxed">
                    {t.cards.qrDesc}
                  </p>
                </div>
              </div>

              {/* Action Button: Scan / Open QR */}
              <div className="flex-shrink-0 w-full sm:w-auto">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 sm:px-6 rounded-xl border border-[#DCD6C8] bg-white hover:bg-[#FAF6EE] hover:border-[#C5A56A] text-forest-950 font-semibold text-xs sm:text-[13px] transition-all duration-200 shadow-xs hover:shadow-sm group"
                >
                  <QrCode className="w-4 h-4 text-[#C5A56A] group-hover:scale-110 transition-transform" />
                  <span>{t.cards.qrBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#717A73]" />
                </a>
              </div>
            </div>
          </div>
        </Container>
        </div>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
