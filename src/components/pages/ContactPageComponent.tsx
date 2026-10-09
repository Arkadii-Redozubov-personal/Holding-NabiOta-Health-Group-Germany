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
  UserCheck,
  ChevronRight,
  ArrowRight,
  QrCode,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
  Stethoscope,
  HeartPulse,
  Sparkles,
  Layers,
  Activity,
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

  const contactTranslations = {
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
        registryTitle: "Holding & Handelsregister",
        registryCourt: "Amtsgericht Mönchengladbach",
        registryHrb: "Registernummer: HRB 16787",
        registryCapital: "Stammkapital: 50.000 EUR",
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
          "Allgemeine Anfrage (Holding Zentrale)",
          "NabiOta MVZ (Hausärztliche & Chirurgische Versorgung)",
          "NabiOta Diagnostics (3T MRT, CT, Röntgen, Labor)",
          "NabiOta Rehabilitation & Therapy (Ambulante Reha)",
          "NabiOta HomeCare (Ambulante Pflege & Wundzentrum)",
          "NabiOta Sanitätshaus & Apotheke (§ 14 ApoG)",
          "NabiOta Real Estate (Praxisflächen & Immobilien)",
          "NabiOta Medical Recruitment (Fachkräfte & Karriere)",
          "Partner- & Investorendialog (2-Phasen-Architektur)",
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
      directory: {
        eyebrow: "DIREKTKONTAKTE IM VERBUND",
        title: "Fachabteilungen & Tochtergesellschaften",
        desc: "Direkte Durchwahlen und spezialisierte Ansprechpartner für Patienten, Fachärzte, Kooperationspartner und Zuweiser.",
        div1Title: "Zentren für ambulante & chirurgische Versorgung",
        div1Desc: "NabiOta MVZ Hausärztlich-Internistisch & NabiOta MVZ Chirurgie und Anästhesiologie GmbH (§ 95 SGB V)",
        div1Email: "mvz@nabiota-health-group.de",
        div1Phone: "+49 2161 9170017",
        div2Title: "High-Tech Diagnostik & Rehabilitation",
        div2Desc: "NabiOta Diagnostics GmbH (3T MRT, CT, Röntgen, Labor) & NabiOta Rehabilitation & Therapy GmbH",
        div2Email: "diagnostik@nabiota-health-group.de",
        div2Phone: "+49 2161 9170016",
        div3Title: "Häusliche Pflege, Sanitätshaus & Pharmazie",
        div3Desc: "NabiOta HomeCare GmbH, NabiOta Sanitätshaus GmbH (§§ 126, 127 SGB V) & NabiOta Pharmacy (§ 14 ApoG)",
        div3Email: "pflege@nabiota-health-group.de",
        div3Phone: "+49 2161 9170019",
        div4Title: "Holding-Management, Real Estate & Recruiting",
        div4Desc: "NabiOta Health Group Zentrale, NabiOta Real Estate GmbH & Medical Recruitment Services GmbH",
        div4Email: "holding@nabiota-health-group.de",
        div4Phone: "+49 2161 9170018",
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
        registryTitle: "Holding & Commercial Register",
        registryCourt: "District Court Mönchengladbach",
        registryHrb: "Registration Number: HRB 16787",
        registryCapital: "Share Capital: 50,000 EUR",
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
          "General Inquiry (Holding Headquarters)",
          "NabiOta MVZ (Primary & Surgical Outpatient Centers)",
          "NabiOta Diagnostics (3T MRI, Low-Dose CT, Lab)",
          "NabiOta Rehabilitation & Therapy (Outpatient Reha)",
          "NabiOta HomeCare (Nursing Care & Wound Center)",
          "NabiOta Medical Supplies & Pharmacy (§ 14 ApoG)",
          "NabiOta Real Estate (Healthcare Properties)",
          "NabiOta Medical Recruitment (Careers & Approbation)",
          "Strategic Partnerships & Investors (2-Phase Model)",
          "Other Inquiry",
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
      directory: {
        eyebrow: "DIRECT CONTACT DIRECTORY",
        title: "Clinical Divisions & Group Subsidiaries",
        desc: "Direct telephone numbers and specialist contact persons for patients, medical professionals, institutional partners, and referrers.",
        div1Title: "Primary & Surgical Centers (MVZ)",
        div1Desc: "NabiOta MVZ Primary Care & NabiOta MVZ Surgery and Anesthesiology GmbH (§ 95 SGB V)",
        div1Email: "mvz@nabiota-health-group.de",
        div1Phone: "+49 2161 9170017",
        div2Title: "High-Tech Diagnostics & Rehabilitation",
        div2Desc: "NabiOta Diagnostics GmbH (3T MRI, CT, X-Ray, Lab) & NabiOta Rehabilitation & Therapy GmbH",
        div2Email: "diagnostik@nabiota-health-group.de",
        div2Phone: "+49 2161 9170016",
        div3Title: "HomeCare, Medical Supplies & Pharmacy",
        div3Desc: "NabiOta HomeCare GmbH, NabiOta Sanitätshaus GmbH (§§ 126, 127 SGB V) & NabiOta Pharmacy (§ 14 ApoG)",
        div3Email: "pflege@nabiota-health-group.de",
        div3Phone: "+49 2161 9170019",
        div4Title: "Holding Management, Real Estate & Staffing",
        div4Desc: "NabiOta Health Group HQ, NabiOta Real Estate GmbH & Medical Recruitment Services GmbH",
        div4Email: "holding@nabiota-health-group.de",
        div4Phone: "+49 2161 9170018",
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
        registryTitle: "Холдинг и торговый реестр",
        registryCourt: "Участковый суд Менхенгладбаха",
        registryHrb: "Регистрационный номер: HRB 16787",
        registryCapital: "Уставный капитал: 50 000 EUR",
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
          "Общий запрос (Штаб-квартира холдинга)",
          "NabiOta MVZ (Терапевтические и хирургические центры)",
          "NabiOta Diagnostics (3T МРТ, КТ, лаборатория)",
          "NabiOta Rehabilitation & Therapy (Амбулаторная реабилитация)",
          "NabiOta HomeCare (Сестринский уход и центр ран)",
          "NabiOta Sanitätshaus & Apotheke (Изделия и аптека)",
          "NabiOta Real Estate (Медицинская недвижимость)",
          "NabiOta Medical Recruitment (Карьера и апробация)",
          "Партнерам и инвесторам (2-фазная модель)",
          "Другой вопрос",
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
      directory: {
        eyebrow: "ПРЯМЫЕ КОНТАКТЫ ПОДРАЗДЕЛЕНИЙ",
        title: "Отделения и дочерние компании холдинга",
        desc: "Прямые телефоны и специализированные контактные лица для пациентов, врачей, партнеров и направляющих клиник.",
        div1Title: "Амбулаторные и хирургические центры (MVZ)",
        div1Desc: "NabiOta MVZ терапевтическое и NabiOta MVZ хирургии и анестезиологии GmbH (§ 95 SGB V)",
        div1Email: "mvz@nabiota-health-group.de",
        div1Phone: "+49 2161 9170017",
        div2Title: "Высокотехнологичная диагностика и реабилитация",
        div2Desc: "NabiOta Diagnostics GmbH (3T МРТ, КТ, рентген, лаборатория) и NabiOta Rehabilitation & Therapy GmbH",
        div2Email: "diagnostik@nabiota-health-group.de",
        div2Phone: "+49 2161 9170016",
        div3Title: "Патронаж, санитарный дом и аптека",
        div3Desc: "NabiOta HomeCare GmbH, NabiOta Sanitätshaus GmbH (§§ 126, 127 SGB V) и NabiOta Pharmacy (§ 14 ApoG)",
        div3Email: "pflege@nabiota-health-group.de",
        div3Phone: "+49 2161 9170019",
        div4Title: "Управление холдингом, недвижимость и рекрутинг",
        div4Desc: "Штаб-квартира NabiOta Health Group, NabiOta Real Estate GmbH и Medical Recruitment Services GmbH",
        div4Email: "holding@nabiota-health-group.de",
        div4Phone: "+49 2161 9170018",
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
    tr: {
      left: {
        eyebrow: "İLETİŞİM BİLGİLERİMİZ",
        title: "Bize Ulaşın",
        desc: "Mesajınızdan memnuniyet duyarız. Ekibimiz telefon, e-posta veya doğrudan yerleşkemizde size yardımcı olmaktan mutluluk duyar.",
        addressTitle: "Posta Adresi",
        street: "Aachener Straße 114",
        city: "41061 Mönchengladbach, Almanya",
        phoneTitle: "Telefonla Ulaşılabilirlik",
        reception: "Sekreterlik:",
        admission: "Hasta Kabul:",
        executive: "Yönetim:",
        emailTitle: "E-Posta",
        hqEmail: "Merkez:",
        careerEmail: "Kariyer:",
        hoursTitle: "Hizmet Saatleri",
        hours: "Pazartesi – Cuma: 08:00 – 18:00 OAS",
        registryTitle: "Holding & Ticaret Sicili",
        registryCourt: "Mönchengladbach Sulh Mahkemesi",
        registryHrb: "Kayıt No: HRB 16787",
        registryCapital: "Şirket Sermayesi: 50.000 EUR",
      },
      form: {
        eyebrow: "MESAJ GÖNDERİN",
        title: "Mesajınızı Bekliyoruz",
        subtitle: "Formu doldurun – en kısa sürede sizinle iletişime geçeceğiz.",
        nameLabel: "AD SOYAD *",
        namePlaceholder: "Dr. Maria Muster",
        emailLabel: "E-POSTA *",
        emailPlaceholder: "muster@example.com",
        phoneLabel: "TELEFON (İSTEĞE BAĞLI)",
        phonePlaceholder: "+49 170 1234567",
        companyLabel: "KURUM / KLİNİK",
        companyPlaceholder: "Klinik / Muayenehane",
        subjectLabel: "KONU",
        subjects: [
          "Genel Başvuru (Holding Merkezi)",
          "NabiOta MVZ (Temel ve Cerrahi Tıp Merkezleri)",
          "NabiOta Tanı & Görüntüleme (3T MRT, CT, Laboratuvar)",
          "NabiOta Rehabilitasyon & Terapi (Ayakta Reha)",
          "NabiOta HomeCare (Hasta Bakımı & Yara Merkezi)",
          "NabiOta Medikal Malzeme & Eczane (§ 14 ApoG)",
          "NabiOta Sağlık Gayrimenkulleri",
          "NabiOta Sağlık Personeli İşe Alım (Kariyer & Denklik)",
          "Stratejik Ortaklıklar & Yatırımcılar (2 Aşamalı Model)",
          "Diğer Konular",
        ],
        messageLabel: "MESAJINIZ *",
        messagePlaceholder: "Size nasıl yardımcı olabiliriz?",
        privacyText:
          "Gizlilik politikasını okudum ve verilerimin işlenmesini kabul ediyorum. *",
        submitBtn: "Mesajı Gönder",
        successMsg: "Teşekkürler! Başvurunuz başarıyla iletildi.",
        errorRequired: "Lütfen tüm zorunlu alanları doldurun.",
        errorPrivacy: "Lütfen devam etmek için gizlilik politikasını onaylayın.",
      },
      directory: {
        eyebrow: "BÖLÜM DOĞRUDAN İLETİŞİM",
        title: "Tıbbi Bölümler ve Bağlı İştirakler",
        desc: "Hastalar, hekimler, kurumsal ortaklar ve yönlendiriciler için doğrudan telefon numaraları ve uzman irtibat kişileri.",
        div1Title: "Temel & Cerrahi Merkezler (MVZ)",
        div1Desc: "NabiOta MVZ Dahiliye & NabiOta MVZ Cerrahi ve Anesteziyoloji GmbH (§ 95 SGB V)",
        div1Email: "mvz@nabiota-health-group.de",
        div1Phone: "+49 2161 9170017",
        div2Title: "Yüksek Teknoloji Tanı & Rehabilitasyon",
        div2Desc: "NabiOta Diagnostics GmbH (3T MRT, CT, Röntgen, Lab) & NabiOta Rehabilitation & Therapy GmbH",
        div2Email: "diagnostik@nabiota-health-group.de",
        div2Phone: "+49 2161 9170016",
        div3Title: "HomeCare, Medikal Malzeme & Eczane",
        div3Desc: "NabiOta HomeCare GmbH, NabiOta Sanitätshaus GmbH (§§ 126, 127 SGB V) & NabiOta Pharmacy (§ 14 ApoG)",
        div3Email: "pflege@nabiota-health-group.de",
        div3Phone: "+49 2161 9170019",
        div4Title: "Holding Yönetimi, Gayrimenkul & İşe Alım",
        div4Desc: "NabiOta Health Group HQ, NabiOta Real Estate GmbH & Medical Recruitment Services GmbH",
        div4Email: "holding@nabiota-health-group.de",
        div4Phone: "+49 2161 9170018",
      },
      cards: {
        mapTitle: "NabiOta Health Group Germany GmbH",
        mapAddress: "Aachener Straße 114, 41061 Mönchengladbach",
        openMaps: "Google Haritalar'da Aç",
        qrTitle: "Google Haritalar için QR Kodu",
        qrDesc:
          "Akıllı telefon kameranızla QR kodunu tarayarak adresimize yol tarifini Google Haritalar uygulamasında açın.",
        qrBtn: "QR Kodunu Tara",
        clinicSlogan1: "Sağlığınız",
        clinicSlogan2: "güvenli ellerde.",
      },
    },
    ar: {
      left: {
        eyebrow: "بيانات الاتصال بنا",
        title: "كيفية الوصول إلينا",
        desc: "يسعدنا تلقي رسالتكم. فريقنا جاهز دائماً لمساعدتكم وتقديم الدعم – هاتفياً، عبر البريد الإلكتروني أو مباشرة في مقرنا.",
        addressTitle: "العنوان البريدي",
        street: "Aachener Straße 114",
        city: "41061 Mönchengladbach, Germany",
        phoneTitle: "ساعات الاتصال الهاتفي",
        reception: "السكرتارية والاستقبال:",
        admission: "قبول المرضى:",
        executive: "الإدارة العامة:",
        emailTitle: "البريد الإلكتروني",
        hqEmail: "المقر الرئيسي:",
        careerEmail: "التوظيف والمهن:",
        hoursTitle: "أوقات الدوام",
        hours: "الاثنين – الجمعة: 08:00 – 18:00 بتوقيت وسط أوروبا",
        registryTitle: "الشركة والسجل التجاري",
        registryCourt: "محكمة مونشنغلادباخ الابتدائية",
        registryHrb: "رقم السجل التجاري: HRB 16787",
        registryCapital: "رأس المال المصرح به: 50,000 يورو",
      },
      form: {
        eyebrow: "إرسال رسالة",
        title: "نتطلع إلى استلام رسالتكم",
        subtitle: "يرجى ملء النموذج أدناه – وسنتواصل معكم في أقرب وقت ممكن.",
        nameLabel: "الاسم الكامل *",
        namePlaceholder: "د. ماريا موستر",
        emailLabel: "البريد الإلكتروني *",
        emailPlaceholder: "muster@example.com",
        phoneLabel: "رقم الهاتف (اختياري)",
        phonePlaceholder: "+49 170 1234567",
        companyLabel: "المؤسسة / العيادة",
        companyPlaceholder: "مستشفى / عيادة طبية",
        subjectLabel: "الموضوع",
        subjects: [
          "استفسار عام (المقر الرئيسي للمجموعة)",
          "مراكز الرعاية الأولية والجراحية (MVZ)",
          "التشخيص الطبي المتطور (الرنين 3T، الأشعة، المختبر)",
          "التأهيل والعلاج الطبيعي التخصصي",
          "التمريض والرعاية المنزلية وعلاج الجروح (HomeCare)",
          "المستلزمات الطبية والصيدلية السريرية (§ 14 ApoG)",
          "العقارات والمرافق الصحية والمجمعات الطبية",
          "توظيف الكوادر الطبية ومعادلة الشهادات (Approbation)",
          "الشراكات الاستراتيجية والمستثمرون (نموذج المرحلتين)",
          "استفسار آخر",
        ],
        messageLabel: "نص الرسالة *",
        messagePlaceholder: "كيف يمكننا مساعدتكم؟",
        privacyText:
          "لقد قرأت سياسة الخصوصية وأوافق على معالجة بياناتي وفقاً لها. *",
        submitBtn: "إرسال الرسالة",
        successMsg: "شكراً لكم! تم إرسال رسالتكم بنجاح.",
        errorRequired: "يرجى ملء جميع الحقول المطلوبة.",
        errorPrivacy: "يرجى الموافقة على سياسة الخصوصية للمتابعة.",
      },
      directory: {
        eyebrow: "دليل الاتصال المباشر بالأقسام",
        title: "الأقسام السريرية والشركات التابعة للمجموعة",
        desc: "أرقام هواتف مباشرة ومسؤولو اتصال متخصصون للمرضى، الأطباء، الشركاء والجهات المحيلة.",
        div1Title: "مراكز الرعاية الأولية والجراحية (MVZ)",
        div1Desc: "NabiOta MVZ للرعاية الأولية و NabiOta MVZ للجراحة والتخدير (§ 95 SGB V)",
        div1Email: "mvz@nabiota-health-group.de",
        div1Phone: "+49 2161 9170017",
        div2Title: "التشخيص عالي الدقة والتأهيل الطبي",
        div2Desc: "NabiOta Diagnostics (رنين 3T، أشعة مقطعية، مختبر) و NabiOta للتأهيل والعلاج الطبيعي",
        div2Email: "diagnostik@nabiota-health-group.de",
        div2Phone: "+49 2161 9170016",
        div3Title: "الرعاية المنزلية، المستلزمات الطبية والصيدلية",
        div3Desc: "NabiOta HomeCare، متجر المستلزمات الطبية (§§ 126, 127 SGB V) والصيدلية (§ 14 ApoG)",
        div3Email: "pflege@nabiota-health-group.de",
        div3Phone: "+49 2161 9170019",
        div4Title: "إدارة المجموعة، العقارات والتوظيف الطبي",
        div4Desc: "المقر الرئيسي لمجموعة نابي أوتا، شركة العقارات الصحية وخدمات استقطاب الكوادر الطبية",
        div4Email: "holding@nabiota-health-group.de",
        div4Phone: "+49 2161 9170018",
      },
      cards: {
        mapTitle: "NabiOta Health Group Germany GmbH",
        mapAddress: "Aachener Straße 114, 41061 Mönchengladbach",
        openMaps: "فتح في خرائط Google",
        qrTitle: "رمز QR لخرائط Google",
        qrDesc:
          "امسح رمز QR بكاميرا هاتفك الذكي لفتح الاتجاهات إلى عنواننا في تطبيق خرائط Google مباشرة.",
        qrBtn: "مسح رمز QR",
        clinicSlogan1: "صحتكم",
        clinicSlogan2: "في أيدٍ أمينة.",
      },
    },
    uz: {
      left: {
        eyebrow: "BIZNING ALOQA MA'LUMOTLARIMIZ",
        title: "Biz bilan bog'lanish",
        desc: "Murojaatingizdan mamnun bo'lamiz. Bizning jamoamiz sizga yordam berishga va savollaringizga javob berishga doim tayyor — telefon, elektron pochta orqali yoki shaxsan uchrashuvda.",
        addressTitle: "Pochta manzili",
        street: "Aachener Straße 114",
        city: "41061 Mönchengladbach, Deutschland",
        phoneTitle: "Telefon orqali bog'lanish",
        reception: "Kotibiyat:",
        admission: "Qabul bo'limi:",
        executive: "Rahbariyat:",
        emailTitle: "Elektron pochta",
        hqEmail: "Bosh ofis:",
        careerEmail: "Kadrlar bo'limi / Karyera:",
        hoursTitle: "Ish vaqti",
        hours: "Dushanba – Juma: 08:00 – 18:00",
        registryTitle: "Xolding va tijorat reestri",
        registryCourt: "Amtsgericht Mönchengladbach",
        registryHrb: "Reestr raqami: HRB 16787",
        registryCapital: "Ustav kapitali: 50 000 EUR",
      },
      form: {
        eyebrow: "XABAR YUBORISH",
        title: "Murojaatingizni kutib qolamiz",
        subtitle:
          "Aloqa shaklini to'ldiring — mutaxassislarimiz tez orada siz bilan bog'lanishadi.",
        nameLabel: "TO'LIQ ISM *",
        namePlaceholder: "masalan, Dr. med. Nodira Karimova",
        emailLabel: "E-MAIL *",
        emailPlaceholder: "pochta@misol.uz",
        phoneLabel: "TELEFON (IXTIYORIY)",
        phonePlaceholder: "+49 170 1234567",
        companyLabel: "TASHKILOT / PRAKSIS",
        companyPlaceholder: "Klinika / Tibbiyot markazi",
        subjectLabel: "MUROJAAT MAVZUSI",
        subjects: [
          "Umumiy so'rov (Xolding bosh qarorgohi)",
          "NabiOta MVZ (Birlamchi va jarrohlik markazlari)",
          "NabiOta Diagnostics (3T MRT, KT, laboratoriya)",
          "NabiOta Rehabilitation & Therapy (Ambulator reabilitatsiya)",
          "NabiOta HomeCare (Hamshiralik parvarishi va yara markazi)",
          "NabiOta Sanitätshaus & Apotheke (Tibbiy buyumlar va dorixona)",
          "NabiOta Real Estate (Tibbiy ko'chmas mulk)",
          "NabiOta Medical Recruitment (Karyera va approbatsiya)",
          "Hamkorlar va investorlar (2 bosqichli model)",
          "Boshqa masala",
        ],
        messageLabel: "XABARINGIZ *",
        messagePlaceholder: "Sizga qanday yordam bera olamiz?",
        privacyText:
          "Men maxfiylik siyosati bilan tanishdim va shaxsiy ma'lumotlarim qayta ishlanishiga rozilik bildiraman. *",
        submitBtn: "Xabarni yuborish",
        successMsg: "Rahmat! Murojaatingiz muvaffaqiyatli yuborildi.",
        errorRequired: "Iltimos, barcha majburiy maydonlarni to'ldiring.",
        errorPrivacy: "Maxfiylik siyosatiga rozilik bildirish majburiydir.",
      },
      directory: {
        eyebrow: "BO'LINMALARNING TO'G'RIDAN-TO'G'RI ALOQALARI",
        title: "Xolding bo'limlari va sho''ba korxonalari",
        desc: "Bemorlar, shifokorlar, hamkorlar va yo'llovchi klinikalar uchun to'g'ridan-to'g'ri telefonlar va mutaxassislar.",
        div1Title: "Ambulator va jarrohlik markazlari (MVZ)",
        div1Desc: "NabiOta MVZ birlamchi yordam va NabiOta MVZ jarrohlik hamda anesteziologiya GmbH (§ 95 SGB V)",
        div1Email: "mvz@nabiota-health-group.de",
        div1Phone: "+49 2161 9170017",
        div2Title: "Yuqori texnologiyali diagnostika va reabilitatsiya",
        div2Desc: "NabiOta Diagnostics GmbH (3T MRT, KT, rentgen, laboratoriya) va NabiOta Rehabilitation & Therapy GmbH",
        div2Email: "diagnostik@nabiota-health-group.de",
        div2Phone: "+49 2161 9170016",
        div3Title: "Patronaj, tibbiy buyumlar uyi va dorixona",
        div3Desc: "NabiOta HomeCare GmbH, NabiOta Sanitätshaus GmbH (§§ 126, 127 SGB V) va NabiOta Pharmacy (§ 14 ApoG)",
        div3Email: "pflege@nabiota-health-group.de",
        div3Phone: "+49 2161 9170019",
        div4Title: "Xolding boshqaruvi, ko'chmas mulk va rekruting",
        div4Desc: "NabiOta Health Group bosh qarorgohi, NabiOta Real Estate GmbH va Medical Recruitment Services GmbH",
        div4Email: "holding@nabiota-health-group.de",
        div4Phone: "+49 2161 9170018",
      },
      cards: {
        mapTitle: "NabiOta Health Group Germany GmbH",
        mapAddress: "Aachener Straße 114, 41061 Mönchengladbach",
        openMaps: "Google Maps orqali ochish",
        qrTitle: "Google Maps uchun QR-kod",
        qrDesc:
          "Google Maps ilovasida manzilimizga marshrutni ochish uchun smartfon kamerasi bilan QR-kodni skanerlang.",
        qrBtn: "QR-kodni skanerlash",
        clinicSlogan1: "Sizning salomatligingiz",
        clinicSlogan2: "ishonchli qo'llarda.",
      },
    },
  };

  const t = contactTranslations[locale as keyof typeof contactTranslations] || contactTranslations.de;

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
          locale={locale}
          breadcrumb={
            <Breadcrumb
              items={[
                {
                  label:
                    locale === "uz"
                      ? "Bosh sahifa"
                      : locale === "ru"
                      ? "Главная"
                      : locale === "en"
                      ? "Home"
                      : locale === "tr"
                      ? "Ana Sayfa"
                      : locale === "ar"
                      ? "الرئيسية"
                      : "Startseite",
                  href: `/${locale}`,
                },
                {
                  label:
                    locale === "uz"
                      ? "Aloqa"
                      : locale === "ru"
                      ? "Контакты"
                      : locale === "en"
                      ? "Contact"
                      : locale === "tr"
                      ? "İletişim"
                      : locale === "ar"
                      ? "اتصل بنا"
                      : "Kontakt",
                },
              ]}
            />
          }
          title={
            locale === "uz"
              ? "Biz bilan bog'laning"
              : locale === "ru"
              ? "Свяжитесь с нами"
              : locale === "en"
              ? "Get in Touch"
              : locale === "tr"
              ? "Bizimle İletişime Geçin"
              : locale === "ar"
              ? "تواصلوا معنا"
              : "Treten Sie mit uns in Kontakt"
          }
          description={
            locale === "uz"
              ? "Savollaringizga javob berishdan, xoldingning tibbiy yo'nalishlari haqida ma'lumot taqdim etishdan va hamkorlikni muhokama qilishdan mamnun bo'lamiz."
              : locale === "ru"
              ? "Мы рады ответить на ваши вопросы, предоставить информацию о медицинских направлениях холдинга и обсудить сотрудничество."
              : locale === "en"
              ? "We look forward to hearing from you. Our team is available by phone, email, or in person at our Mönchengladbach headquarters."
              : locale === "tr"
              ? "Sorularınızı yanıtlamaktan, holdingin tıbbi uzmanlık alanları hakkında bilgi vermekten ve ortaklıkları görüşmekten memnuniyet duyarız."
              : locale === "ar"
              ? "يسعدنا الرد على استفساراتكم، وتقديم معلومات وافية حول قطاعات الرعاية التابعة للمجموعة، وبحث سبل التعاون المشترك."
              : "Wir freuen uns über Ihre Nachricht. Unser Team hilft Ihnen gerne weiter und ist für Sie da – telefonisch, per E-Mail oder vor Ort in Mönchengladbach."
          }
          badges={[
            {
              icon: Clock,
              title:
                locale === "uz"
                  ? "Tezkor"
                  : locale === "ru"
                  ? "Быстрая"
                  : locale === "en"
                  ? "Fast"
                  : locale === "tr"
                  ? "Hızlı"
                  : locale === "ar"
                  ? "وصول"
                  : "Schnelle",
              sub:
                locale === "uz"
                  ? "bog'lanish"
                  : locale === "ru"
                  ? "доступность"
                  : locale === "en"
                  ? "availability"
                  : locale === "tr"
                  ? "erişilebilirlik"
                  : locale === "ar"
                  ? "سريع"
                  : "Erreichbarkeit",
            },
            {
              icon: UserCheck,
              title:
                locale === "uz"
                  ? "Shaxsiy"
                  : locale === "ru"
                  ? "Личная"
                  : locale === "en"
                  ? "Personal"
                  : locale === "tr"
                  ? "Bireysel"
                  : locale === "ar"
                  ? "استشارة"
                  : "Persönliche",
              sub:
                locale === "uz"
                  ? "maslahat"
                  : locale === "ru"
                  ? "консультация"
                  : locale === "en"
                  ? "consultation"
                  : locale === "tr"
                  ? "danışmanlık"
                  : locale === "ar"
                  ? "مباشرة"
                  : "Beratung",
            },
            {
              icon: MapPin,
              title:
                locale === "uz"
                  ? "Qulay"
                  : locale === "ru"
                  ? "Удобная"
                  : locale === "en"
                  ? "Central"
                  : locale === "tr"
                  ? "Merkezi"
                  : locale === "ar"
                  ? "موقع"
                  : "Zentraler",
              sub:
                locale === "uz"
                  ? "manzil"
                  : locale === "ru"
                  ? "локация"
                  : locale === "en"
                  ? "location"
                  : locale === "tr"
                  ? "konum"
                  : locale === "ar"
                  ? "مركزي"
                  : "Standort",
            },
          ]}
          imageSrc="/images/heroes/hero-contact.webp"
          imageAlt="NabiOta Health Group Germany Kontakt"
        />

        <div className="pt-14 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 relative overflow-hidden bg-[#FCFAF7]">
          {/* Subtle decorative leaf silhouettes on sides matching reference photo */}
          <div className="absolute top-24 -left-16 w-56 h-96 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(20,40,25,0.3),transparent_70%)]" />
          <div className="absolute top-20 -right-16 w-56 h-96 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(20,40,25,0.3),transparent_70%)]" />

          <Container size="wide" className="relative z-10">
            {/* ══════════════════════════════════════════════════════════
                SECTION 1:
                LEFT (5 cols): Zentrale Anlaufstelle (5 Contact Cards)
                RIGHT (7 cols): Streamlined Appointment & Inquiry Form
            ══════════════════════════════════════════════════════════ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 sm:mb-16">
              {/* ── Left Column: How to Reach Us (5 Contact Cards) ── */}
              <div className="lg:col-span-5">
                <div className="mb-5 sm:mb-6">
                    <h2 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal leading-tight mb-2">
                      {t.left.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#556057] leading-relaxed">
                      {t.left.desc}
                    </p>
                  </div>

                  {/* 5 Original Contact Cards with complete unaltered text */}
                  <div className="space-y-3 sm:space-y-3.5">
                    {/* 1. Postanschrift */}
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EDE7D9] shadow-2xs hover:shadow-sm hover:border-[#C5A56A] transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] shrink-0 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors">
                          <MapPin className="w-4.5 h-4.5 stroke-[1.75]" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-xs sm:text-sm text-forest-950 leading-snug">
                            {t.left.addressTitle}
                          </h3>
                          <p className="text-[11.5px] sm:text-xs text-[#556057] mt-0.5 leading-snug">
                            {t.left.street}
                            <br />
                            {t.left.city}
                          </p>
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full border border-[#EDE7D9] group-hover:border-[#C5A56A] flex items-center justify-center text-[#C5A56A] group-hover:translate-x-0.5 transition-all shrink-0">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </a>

                    {/* 2. Telefonische Erreichbarkeit */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EDE7D9] shadow-2xs hover:shadow-sm hover:border-[#C5A56A] transition-all flex items-center justify-between group">
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] shrink-0 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors mt-0.5">
                          <Phone className="w-4.5 h-4.5 stroke-[1.75]" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-xs sm:text-sm text-forest-950 leading-snug mb-1">
                            {t.left.phoneTitle}
                          </h3>
                          <div className="text-[11.5px] sm:text-xs text-[#556057] space-y-0.5 font-sans">
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
                        className="w-7 h-7 rounded-full border border-[#EDE7D9] group-hover:border-[#C5A56A] flex items-center justify-center text-[#C5A56A] group-hover:translate-x-0.5 transition-all shrink-0"
                        aria-label="Call Secretariat"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* 3. E-Mail */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EDE7D9] shadow-2xs hover:shadow-sm hover:border-[#C5A56A] transition-all flex items-center justify-between group">
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] shrink-0 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors mt-0.5">
                          <Mail className="w-4.5 h-4.5 stroke-[1.75]" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-xs sm:text-sm text-forest-950 leading-snug mb-1">
                            {t.left.emailTitle}
                          </h3>
                          <div className="text-[11.5px] sm:text-xs text-[#556057] space-y-0.5 font-sans">
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
                        className="w-7 h-7 rounded-full border border-[#EDE7D9] group-hover:border-[#C5A56A] flex items-center justify-center text-[#C5A56A] group-hover:translate-x-0.5 transition-all shrink-0"
                        aria-label="Send Email"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* 4. Servicezeiten */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EDE7D9] shadow-2xs hover:shadow-sm hover:border-[#C5A56A] transition-all flex items-center justify-between group">
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] shrink-0 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors">
                          <Clock className="w-4.5 h-4.5 stroke-[1.75]" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-xs sm:text-sm text-forest-950 leading-snug">
                            {t.left.hoursTitle}
                          </h3>
                          <p className="text-[11.5px] sm:text-xs text-[#556057] mt-0.5 leading-snug">
                            {t.left.hours}
                          </p>
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full border border-[#EDE7D9] group-hover:border-[#C5A56A] flex items-center justify-center text-[#C5A56A] shrink-0">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* 5. Handelsregister & Holdingdaten */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DEC8] shadow-2xs transition-all">
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] shrink-0 mt-0.5 shadow-2xs">
                          <ShieldCheck className="w-4.5 h-4.5 stroke-[1.75]" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-xs sm:text-sm text-forest-950 leading-snug mb-1">
                            {t.left.registryTitle}
                          </h3>
                          <div className="text-[11px] sm:text-xs text-[#556057] space-y-0.5 font-sans">
                            <p>{t.left.registryCourt}</p>
                            <p>{t.left.registryHrb}</p>
                            <p className="font-medium text-[#8D6B27]">{t.left.registryCapital}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Direct Contact Directory: Clinical Divisions & Group Subsidiaries (Lifted up & separated from map) ── */}
                  <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#EAE3D5]">
                    <div className="mb-4 sm:mb-5">
                      <h3 className="font-serif text-xl sm:text-2xl text-forest-950 font-normal leading-tight mb-1.5">
                        {t.directory.title}
                      </h3>
                      <p className="text-xs text-[#556057] leading-relaxed">
                        {t.directory.desc}
                      </p>
                    </div>

                    {/* 4 Division Cards: No icons, compact height */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Division 1: MVZ */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#EDE7D9] shadow-2xs hover:border-[#C5A56A] hover:shadow-xs transition-all flex flex-col justify-between">
                        <div>
                          <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.2em] text-[#C5A56A] uppercase font-sans mb-1.5 block">
                            MVZ · § 95 SGB V
                          </span>
                          <h4 className="font-serif font-bold text-[13px] text-forest-950 leading-snug mb-1">
                            {t.directory.div1Title}
                          </h4>
                          <p className="text-[11px] text-[#556057] leading-relaxed mb-3">
                            {t.directory.div1Desc}
                          </p>
                        </div>
                        <div className="pt-2.5 border-t border-[#F2ECE1] space-y-1 text-[11px] font-sans">
                          <a
                            href={`tel:${t.directory.div1Phone.replace(/\s+/g, "")}`}
                            className="flex items-center gap-1.5 text-forest-950 font-medium hover:text-[#C5A56A] transition-colors"
                          >
                            <Phone className="w-3 h-3 text-[#C5A56A] shrink-0" />
                            <span>{t.directory.div1Phone}</span>
                          </a>
                          <a
                            href={`mailto:${t.directory.div1Email}`}
                            className="flex items-center gap-1.5 text-[#7B867D] hover:text-forest-950 transition-colors truncate"
                          >
                            <Mail className="w-3 h-3 text-[#C5A56A] shrink-0" />
                            <span className="truncate">{t.directory.div1Email}</span>
                          </a>
                        </div>
                      </div>

                      {/* Division 2: Diagnostik & Reha */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#EDE7D9] shadow-2xs hover:border-[#C5A56A] hover:shadow-xs transition-all flex flex-col justify-between">
                        <div>
                          <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.2em] text-[#C5A56A] uppercase font-sans mb-1.5 block">
                            3T MRT · REHA
                          </span>
                          <h4 className="font-serif font-bold text-[13px] text-forest-950 leading-snug mb-1">
                            {t.directory.div2Title}
                          </h4>
                          <p className="text-[11px] text-[#556057] leading-relaxed mb-3">
                            {t.directory.div2Desc}
                          </p>
                        </div>
                        <div className="pt-2.5 border-t border-[#F2ECE1] space-y-1 text-[11px] font-sans">
                          <a
                            href={`tel:${t.directory.div2Phone.replace(/\s+/g, "")}`}
                            className="flex items-center gap-1.5 text-forest-950 font-medium hover:text-[#C5A56A] transition-colors"
                          >
                            <Phone className="w-3 h-3 text-[#C5A56A] shrink-0" />
                            <span>{t.directory.div2Phone}</span>
                          </a>
                          <a
                            href={`mailto:${t.directory.div2Email}`}
                            className="flex items-center gap-1.5 text-[#7B867D] hover:text-forest-950 transition-colors truncate"
                          >
                            <Mail className="w-3 h-3 text-[#C5A56A] shrink-0" />
                            <span className="truncate">{t.directory.div2Email}</span>
                          </a>
                        </div>
                      </div>

                      {/* Division 3: HomeCare, Sanitätshaus & Pharmacy */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#EDE7D9] shadow-2xs hover:border-[#C5A56A] hover:shadow-xs transition-all flex flex-col justify-between">
                        <div>
                          <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.2em] text-[#C5A56A] uppercase font-sans mb-1.5 block">
                            {locale === "tr"
                              ? "BAKIM · MEDİKAL · ECZANE"
                              : locale === "ar"
                              ? "رعاية · مستلزمات · صيدلية"
                              : locale === "uz"
                              ? "PARVARISH · TIBBIY BUYUMLAR · DORIXONA"
                              : locale === "ru"
                              ? "УХОД · МЕДТЕХНИКА · АПТЕКА"
                              : "PFLEGE · SANITÄTSHAUS · APOTHEKE"}
                          </span>
                          <h4 className="font-serif font-bold text-[13px] text-forest-950 leading-snug mb-1">
                            {t.directory.div3Title}
                          </h4>
                          <p className="text-[11px] text-[#556057] leading-relaxed mb-3">
                            {t.directory.div3Desc}
                          </p>
                        </div>
                        <div className="pt-2.5 border-t border-[#F2ECE1] space-y-1 text-[11px] font-sans">
                          <a
                            href={`tel:${t.directory.div3Phone.replace(/\s+/g, "")}`}
                            className="flex items-center gap-1.5 text-forest-950 font-medium hover:text-[#C5A56A] transition-colors"
                          >
                            <Phone className="w-3 h-3 text-[#C5A56A] shrink-0" />
                            <span>{t.directory.div3Phone}</span>
                          </a>
                          <a
                            href={`mailto:${t.directory.div3Email}`}
                            className="flex items-center gap-1.5 text-[#7B867D] hover:text-forest-950 transition-colors truncate"
                          >
                            <Mail className="w-3 h-3 text-[#C5A56A] shrink-0" />
                            <span className="truncate">{t.directory.div3Email}</span>
                          </a>
                        </div>
                      </div>

                      {/* Division 4: Holding HQ, Real Estate & Staffing */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#EDE7D9] shadow-2xs hover:border-[#C5A56A] hover:shadow-xs transition-all flex flex-col justify-between">
                        <div>
                          <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.2em] text-[#C5A56A] uppercase font-sans mb-1.5 block">
                            {locale === "tr"
                              ? "HOLDİNG · GAYRİMENKUL · İSTİHDAM"
                              : locale === "ar"
                              ? "القابضة · العقارات · الكوادر"
                              : locale === "uz"
                              ? "XOLDING · KO'CHMAS MULK · REKRUTING"
                              : locale === "ru"
                              ? "ХОЛДИНГ · НЕДВИЖИМОСТЬ · РЕКРУТИНГ"
                              : "HOLDING · IMMOBILIEN · RECRUITING"}
                          </span>
                          <h4 className="font-serif font-bold text-[13px] text-forest-950 leading-snug mb-1">
                            {t.directory.div4Title}
                          </h4>
                          <p className="text-[11px] text-[#556057] leading-relaxed mb-3">
                            {t.directory.div4Desc}
                          </p>
                        </div>
                        <div className="pt-2.5 border-t border-[#F2ECE1] space-y-1 text-[11px] font-sans">
                          <a
                            href={`tel:${t.directory.div4Phone.replace(/\s+/g, "")}`}
                            className="flex items-center gap-1.5 text-forest-950 font-medium hover:text-[#C5A56A] transition-colors"
                          >
                            <Phone className="w-3 h-3 text-[#C5A56A] shrink-0" />
                            <span>{t.directory.div4Phone}</span>
                          </a>
                          <a
                            href={`mailto:${t.directory.div4Email}`}
                            className="flex items-center gap-1.5 text-[#7B867D] hover:text-forest-950 transition-colors truncate"
                          >
                            <Mail className="w-3 h-3 text-[#C5A56A] shrink-0" />
                            <span className="truncate">{t.directory.div4Email}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              {/* ── Right Column: Form (with 2-field rows) + Map & QR Navigation (Lifted Up) ── */}
              <div className="lg:col-span-7 space-y-6">
                {/* Form Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EDE7D9] shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden">
                  <h2 className="font-serif text-2xl sm:text-[26px] text-forest-950 font-normal leading-tight mb-2">
                    {t.form.title}
                  </h2>

                  <p className="text-xs sm:text-[12.5px] text-[#556057] leading-relaxed mb-5">
                    {t.form.subtitle}
                  </p>

                  {status === "success" && (
                    <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-emerald-800 text-xs sm:text-[13px]">
                      <CheckCircle2 className="w-4.5 h-4.5 shrink-0 text-emerald-600" />
                      <p>{t.form.successMsg}</p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2.5 text-rose-800 text-xs sm:text-[13px]">
                      <AlertCircle className="w-4.5 h-4.5 shrink-0 text-rose-600" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  {/* Form with 2-field paired rows */}
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      {/* 1: Full Name */}
                      <div>
                        <label className="block text-[10.5px] font-bold tracking-wider text-forest-950 uppercase mb-1">
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/60 text-forest-950 text-xs sm:text-[13px] placeholder:text-[#A1A8A2] focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all"
                        />
                      </div>

                      {/* 2: Email */}
                      <div>
                        <label className="block text-[10.5px] font-bold tracking-wider text-forest-950 uppercase mb-1">
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/60 text-forest-950 text-xs sm:text-[13px] placeholder:text-[#A1A8A2] focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      {/* 3: Phone */}
                      <div>
                        <label className="block text-[10.5px] font-bold tracking-wider text-forest-950 uppercase mb-1">
                          {t.form.phoneLabel}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder={t.form.phonePlaceholder}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/60 text-forest-950 text-xs sm:text-[13px] placeholder:text-[#A1A8A2] focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all"
                        />
                      </div>

                      {/* 4: Company */}
                      <div>
                        <label className="block text-[10.5px] font-bold tracking-wider text-forest-950 uppercase mb-1">
                          {t.form.companyLabel}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder={t.form.companyPlaceholder}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/60 text-forest-950 text-xs sm:text-[13px] placeholder:text-[#A1A8A2] focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Subject */}
                    <div>
                      <label className="block text-[10.5px] font-bold tracking-wider text-forest-950 uppercase mb-1">
                        {t.form.subjectLabel}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/60 text-forest-950 text-xs sm:text-[13px] focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all cursor-pointer"
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
                      <label className="block text-[10.5px] font-bold tracking-wider text-forest-950 uppercase mb-1">
                        {t.form.messageLabel}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder={t.form.messagePlaceholder}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5]/60 text-forest-950 text-xs sm:text-[13px] placeholder:text-[#A1A8A2] focus:outline-none focus:border-[#C5A56A] focus:bg-white transition-all resize-y"
                      />
                    </div>

                    {/* Privacy Checkbox */}
                    <div className="flex items-start gap-2 pt-0.5">
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
                        className="mt-0.5 w-4 h-4 rounded border-[#DCD6C8] text-[#C5A56A] focus:ring-[#C5A56A] cursor-pointer shrink-0"
                      />
                      <label
                        htmlFor="privacyConsent"
                        className="text-[11px] text-[#556057] leading-snug cursor-pointer"
                      >
                        {locale === "uz" ? (
                          <>
                            Men{" "}
                            <Link
                              href={`/${locale}/privacy`}
                              className="text-[#96742E] underline hover:text-forest-950"
                            >
                              maxfiylik siyosati
                            </Link>{" "}
                            bilan tanishdim va ma'lumotlarim qayta ishlanishiga rozilik bildiraman. *
                          </>
                        ) : locale === "ru" ? (
                          <>
                            Я ознакомился с{" "}
                            <Link
                              href={`/${locale}/privacy`}
                              className="text-[#96742E] underline hover:text-forest-950"
                            >
                              политикой конфиденциальности
                            </Link>{" "}
                            и даю согласие на обработку данных. *
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
                            and consent to data processing. *
                          </>
                        ) : locale === "tr" ? (
                          <>
                            <Link
                              href={`/${locale}/privacy`}
                              className="text-[#96742E] underline hover:text-forest-950"
                            >
                              Gizlilik politikasını
                            </Link>{" "}
                            okudum ve kişisel verilerimin işlenmesini kabul ediyorum. *
                          </>
                        ) : locale === "ar" ? (
                          <>
                            لقد قرأت{" "}
                            <Link
                              href={`/${locale}/privacy`}
                              className="text-[#96742E] underline hover:text-forest-950"
                            >
                              سياسة الخصوصية
                            </Link>{" "}
                            وأوافق على معالجة بياناتي وفقاً لها. *
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
                            gelesen und willige ein. *
                          </>
                        )}
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-3 px-6 rounded-full bg-[#C5A56A] hover:bg-[#D5B878] text-[#07150C] font-semibold text-xs sm:text-[13px] tracking-wide shadow-md transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <span>{t.form.submitBtn}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>

                {/* ── Right Column: Map & QR Code Navigation (Lifted Up under Form) ── */}
                <div className="space-y-4">
                  {/* Map Block */}
                  <div className="rounded-2xl overflow-hidden border border-[#EDE7D9] bg-white shadow-xs relative flex flex-col h-[260px] sm:h-[280px]">
                    <iframe
                      title="Google Maps Aachener Straße 114, 41061 Mönchengladbach"
                      src="https://maps.google.com/maps?q=Aachener+Stra%C3%9Fe+114,+41061+M%C3%B6nchengladbach&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      className="w-full h-full border-0"
                      loading="lazy"
                    />

                    {/* Pinned Info Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs rounded-xl px-3 py-2 border border-black/10 shadow-md text-left pointer-events-none max-w-[85%]">
                      <p className="font-serif font-bold text-xs text-forest-950 leading-tight">
                        {t.cards.mapTitle}
                      </p>
                      <p className="text-[11px] text-[#556057] leading-tight mt-0.5">
                        {t.cards.mapAddress}
                      </p>
                    </div>

                    {/* Direct Link to Google Maps */}
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2.5 right-2.5 bg-white/95 hover:bg-white text-forest-950 text-[11px] font-medium px-3.5 py-1.5 rounded-lg shadow-sm border border-black/10 flex items-center gap-1.5 transition-colors"
                    >
                      <span>{t.cards.openMaps}</span>
                      <ExternalLink className="w-3 h-3 text-[#C5A56A]" />
                    </a>
                  </div>

                  {/* QR Navigation Card */}
                  <div className="rounded-2xl border border-[#EDE7D9] bg-[#FAF8F5] p-4 sm:p-4.5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3.5">
                    <div className="flex items-center gap-3.5">
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border border-[#EDE7D9] bg-white p-1 shrink-0 hover:scale-105 transition-transform shadow-xs block"
                        title="Google Maps QR Code"
                      >
                        <Image
                          src="/images/contact/google-maps-qr.webp"
                          alt="QR Code für Google Maps"
                          fill
                          className="object-contain p-0.5"
                        />
                      </a>

                      <div>
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-forest-950 leading-snug">
                          {t.cards.qrTitle}
                        </h4>
                        <p className="text-[11px] text-[#556057] leading-relaxed mt-0.5 line-clamp-2">
                          {t.cards.qrDesc}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 w-full sm:w-auto">
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl border border-[#DCD6C8] bg-white hover:bg-[#FAF6EE] hover:border-[#C5A56A] text-forest-950 font-semibold text-[11px] transition-all shadow-2xs group"
                      >
                        <QrCode className="w-3.5 h-3.5 text-[#C5A56A] group-hover:scale-110 transition-transform" />
                        <span>{t.cards.openMaps}</span>
                        <ExternalLink className="w-3 h-3 text-[#717A73]" />
                      </a>
                    </div>
                  </div>
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
