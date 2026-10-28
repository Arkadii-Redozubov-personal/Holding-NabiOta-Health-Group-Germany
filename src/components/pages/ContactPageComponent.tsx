"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
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
  const [activeLocationId, setActiveLocationId] = useState<string>("hq");
  const [activeCategory, setActiveCategory] = useState<"all" | "hq" | "clinics" | "partners">("all");
  const [mapZoom, setMapZoom] = useState<number>(15);

  const contactTranslations = {
    de: {
      left: {
        eyebrow: "UNSERE KONTAKTDATEN",
        title: "So erreichen Sie uns",
        desc: "Wir freuen uns über Ihre Nachricht. Unser Team hilft Ihnen gerne weiter und ist für Sie da - telefonisch, per E-Mail oder vor Ort.",
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
        hours: "Montag - Freitag: 08:00 - 18:00 Uhr",
        registryTitle: "Holding & Handelsregister",
        registryCourt: "Amtsgericht Mönchengladbach",
        registryHrb: "Registernummer: HRB 16787",
        registryCapital: "Stammkapital: 50.000 EUR",
      },
      form: {
        eyebrow: "NACHRICHT SENDEN",
        title: "Wir freuen uns auf Ihre Nachricht",
        subtitle:
          "Füllen Sie das Formular aus - wir setzen uns zeitnah mit Ihnen in Verbindung.",
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
        desc: "We look forward to hearing from you. Our team is at your disposal and here to assist you - by phone, email, or on site.",
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
        hours: "Monday - Friday: 08:00 - 18:00 CET",
        registryTitle: "Holding & Commercial Register",
        registryCourt: "District Court Mönchengladbach",
        registryHrb: "Registration Number: HRB 16787",
        registryCapital: "Share Capital: 50,000 EUR",
      },
      form: {
        eyebrow: "SEND MESSAGE",
        title: "We Look Forward to Your Message",
        subtitle: "Fill out the form - we will get in touch with you promptly.",
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
        desc: "Мы рады вашему обращению. Наша команда всегда готова помочь вам и ответить на любые вопросы - по телефону, электронной почте или лично.",
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
        hours: "Понедельник - Пятница: 08:00 - 18:00",
        registryTitle: "Холдинг и торговый реестр",
        registryCourt: "Участковый суд Менхенгладбаха",
        registryHrb: "Регистрационный номер: HRB 16787",
        registryCapital: "Уставный капитал: 50 000 EUR",
      },
      form: {
        eyebrow: "ОТПРАВИТЬ СООБЩЕНИЕ",
        title: "Мы будем рады вашему обращению",
        subtitle:
          "Заполните контактную форму - наши специалисты оперативно свяжутся с вами.",
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
        hours: "Pazartesi - Cuma: 08:00 - 18:00 OAS",
        registryTitle: "Holding & Ticaret Sicili",
        registryCourt: "Mönchengladbach Sulh Mahkemesi",
        registryHrb: "Kayıt No: HRB 16787",
        registryCapital: "Şirket Sermayesi: 50.000 EUR",
      },
      form: {
        eyebrow: "MESAJ GÖNDERİN",
        title: "Mesajınızı Bekliyoruz",
        subtitle: "Formu doldurun - en kısa sürede sizinle iletişime geçeceğiz.",
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
        desc: "يسعدنا تلقي رسالتكم. فريقنا جاهز دائماً لمساعدتكم وتقديم الدعم - هاتفياً، عبر البريد الإلكتروني أو مباشرة في مقرنا.",
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
        hours: "الاثنين - الجمعة: 08:00 - 18:00 بتوقيت وسط أوروبا",
        registryTitle: "الشركة والسجل التجاري",
        registryCourt: "محكمة مونشنغلادباخ الابتدائية",
        registryHrb: "رقم السجل التجاري: HRB 16787",
        registryCapital: "رأس المال المصرح به: 50,000 يورو",
      },
      form: {
        eyebrow: "إرسال رسالة",
        title: "نتطلع إلى استلام رسالتكم",
        subtitle: "يرجى ملء النموذج أدناه - وسنتواصل معكم في أقرب وقت ممكن.",
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
        desc: "Murojaatingizdan mamnun bo'lamiz. Bizning jamoamiz sizga yordam berishga va savollaringizga javob berishga doim tayyor - telefon, elektron pochta orqali yoki shaxsan uchrashuvda.",
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
        hours: "Dushanba - Juma: 08:00 - 18:00",
        registryTitle: "Xolding va tijorat reestri",
        registryCourt: "Amtsgericht Mönchengladbach",
        registryHrb: "Reestr raqami: HRB 16787",
        registryCapital: "Ustav kapitali: 50 000 EUR",
      },
      form: {
        eyebrow: "XABAR YUBORISH",
        title: "Murojaatingizni kutib qolamiz",
        subtitle:
          "Aloqa shaklini to'ldiring - mutaxassislarimiz tez orada siz bilan bog'lanishadi.",
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

  interface LocationOffice {
    id: string;
    category: "hq" | "clinics" | "partners";
    title: string;
    address: string;
    phone: string;
    email: string;
    image: string;
    query: string;
    mapPin: string;
  }

  const locations: LocationOffice[] = [
    {
      id: "hq",
      category: "hq",
      title:
        locale === "uz"
          ? "Bosh ofis"
          : locale === "ru"
          ? "Головной офис"
          : locale === "en"
          ? "Headquarters"
          : locale === "tr"
          ? "Merkez Ofis"
          : locale === "ar"
          ? "المقر الرئيسي"
          : "Holding-Hauptsitz",
      address: "Aachener Straße 114\n41061 Mönchengladbach, Deutschland",
      phone: "+49 2161 9170016",
      email: "mzv@nabiota-health-group.de",
      image: "/images/partners/phase1-office.jpg",
      query: "Aachener+Stra%C3%9Fe+114,+41061+M%C3%B6nchengladbach",
      mapPin:
        locale === "uz"
          ? "Bosh ofis"
          : locale === "ru"
          ? "Головной офис"
          : locale === "en"
          ? "Headquarters"
          : locale === "tr"
          ? "Merkez Ofis"
          : locale === "ar"
          ? "المقر الرئيسي"
          : "Holding-Hauptsitz",
    },
    {
      id: "klinik-mg",
      category: "clinics",
      title:
        locale === "uz"
          ? "Myonxengladbax klinikasi"
          : locale === "ru"
          ? "Клиника Мёнхенгладбаха"
          : locale === "en"
          ? "Mönchengladbach Medical Center"
          : locale === "tr"
          ? "Mönchengladbach Kliniği"
          : locale === "ar"
          ? "عيادة مونشنغلادباخ"
          : "Klinik Mönchengladbach",
      address: "Lürriper Straße 39\n41065 Mönchengladbach",
      phone: "+49 2161 9170017",
      email: "klinik@nabiota-health-group.de",
      image: "/images/contact/clinic-reception.webp",
      query: "L%C3%BCrriper+Stra%C3%9Fe+39,+41065+M%C3%B6nchengladbach",
      mapPin:
        locale === "uz"
          ? "Myonxengladbax klinikasi"
          : locale === "ru"
          ? "Клиника Мёнхенгладбаха"
          : locale === "en"
          ? "Mönchengladbach Clinic"
          : locale === "tr"
          ? "Mönchengladbach Kliniği"
          : locale === "ar"
          ? "عيادة مونشنغلادباخ"
          : "Klinik Mönchengladbach",
    },
    {
      id: "klinik-dusseldorf",
      category: "clinics",
      title:
        locale === "uz"
          ? "Dyusseldorf klinikasi"
          : locale === "ru"
          ? "Клиника Дюссельдорфа"
          : locale === "en"
          ? "Düsseldorf Medical Center"
          : locale === "tr"
          ? "Düsseldorf Kliniği"
          : locale === "ar"
          ? "عيادة دوسلدورف"
          : "Klinik Düsseldorf",
      address: "Kölner Landstraße 227\n40589 Düsseldorf",
      phone: "+49 211 1234567",
      email: "duesseldorf@nabiota-health-group.de",
      image: "/images/partners/phase2-clinic.jpg",
      query: "K%C3%B6lner+Landstra%C3%9Fe+227,+40589+D%C3%BCsseldorf",
      mapPin:
        locale === "uz"
          ? "Dyusseldorf klinikasi"
          : locale === "ru"
          ? "Клиника Дюссельдорфа"
          : locale === "en"
          ? "Düsseldorf Clinic"
          : locale === "tr"
          ? "Düsseldorf Kliniği"
          : locale === "ar"
          ? "عيادة دوسلدورف"
          : "Klinik Düsseldorf",
    },
    {
      id: "partners-nrw",
      category: "partners",
      title:
        locale === "uz"
          ? "Hamkorlar tarmog'i"
          : locale === "ru"
          ? "Партнерская сеть"
          : locale === "en"
          ? "Partner Network"
          : locale === "tr"
          ? "Ortaklık Ağı"
          : locale === "ar"
          ? "شبكة الشركاء"
          : "Partnernetzwerk NRW",
      address: "Nordrhein-Westfalen &\nBundesweites Kliniknetzwerk",
      phone: "+49 2161 9170018",
      email: "partner@nabiota-health-group.de",
      image: "/images/partners/artium.webp",
      query: "Nordrhein-Westfalen,+Germany",
      mapPin:
        locale === "uz"
          ? "Hamkorlar tarmog'i"
          : locale === "ru"
          ? "Партнерская сеть"
          : locale === "en"
          ? "Partner Network"
          : locale === "tr"
          ? "Ortaklık Ağı"
          : locale === "ar"
          ? "شبكة الشركاء"
          : "Partnernetzwerk",
    },
  ];

  const filteredLocations =
    activeCategory === "all"
      ? locations.filter((l) => l.category !== "partners")
      : locations.filter((l) => l.category === activeCategory);

  const activeLocation = locations.find((l) => l.id === activeLocationId) || locations[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF7] text-forest-950 font-sans selection:bg-[#C5A56A]/20 selection:text-forest-950">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* ── Page Hero Header (Unified across all subpages) ── */}
        <PageHero
          locale={locale}
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
              : "Wir freuen uns über Ihre Nachricht. Unser Team hilft Ihnen gerne weiter und ist für Sie da - telefonisch, per E-Mail oder vor Ort in Mönchengladbach."
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

        <div className="pt-10 sm:pt-14 pb-20 sm:pb-24 relative overflow-hidden bg-[#FCFAF7]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
            {/* ══════════════════════════════════════════════════════════
                SECTION 1 (PHOTO TOP):
                LEFT (6 cols): Контактная информация (5 Contact Cards Grid)
                RIGHT (6 cols): Написать нам (Appointment & Inquiry Form)
            ══════════════════════════════════════════════════════════ */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-start">
              {/* ── Left Column: Contact Information (5 Cards) ── */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div className="mb-4 sm:mb-5">
                  <h2 className="font-serif text-[26px] sm:text-[32px] text-[#132218] font-normal leading-tight mb-1">
                    {locale === "uz"
                      ? "Aloqa ma'lumotlari"
                      : locale === "ru"
                      ? "Контактная информация"
                      : locale === "en"
                      ? "Contact Information"
                      : locale === "tr"
                      ? "İletişim Bilgileri"
                      : locale === "ar"
                      ? "معلومات الاتصال"
                      : "Kontaktinformationen"}
                  </h2>
                  <p className="font-sans text-[12.5px] sm:text-[13px] text-[#556358]">
                    {locale === "uz"
                      ? "Biz bilan bog'lanish uchun ma'lumotlar"
                      : locale === "ru"
                      ? "Наши данные для связи"
                      : locale === "en"
                      ? "Our direct contact details"
                      : locale === "tr"
                      ? "Bize ulaşabileceğiniz iletişim kanalları"
                      : locale === "ar"
                      ? "بيانات التواصل المباشر الخاصة بنا"
                      : "Unsere Kontaktdaten auf einen Blick"}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {/* Card 1: Postal address */}
                  <div className="bg-[#FAF7F0] border border-[#EAE4D7] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
                    <div className="shrink-0 text-[#8C6D2B] pt-0.5">
                      <MapPin className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#132218] mb-1 leading-snug">
                        {t.left.addressTitle}
                      </h3>
                      <p className="font-sans text-[11.5px] sm:text-[12px] text-[#556358] leading-relaxed">
                        {t.left.street}
                        <br />
                        {t.left.city}
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Phone */}
                  <div className="bg-[#FAF7F0] border border-[#EAE4D7] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
                    <div className="shrink-0 text-[#8C6D2B] pt-0.5">
                      <Phone className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#132218] mb-1 leading-snug">
                        {t.left.phoneTitle}
                      </h3>
                      <div className="font-sans text-[11px] sm:text-[11.5px] text-[#556358] leading-relaxed space-y-0.5">
                        <p className="flex justify-between sm:justify-start gap-2">
                          <span className="text-[#7B867D]">{t.left.reception}</span>{" "}
                          <a href="tel:+4921619170016" className="text-[#132218] hover:text-[#8C6D2B] transition-colors font-medium">
                            +49 2161 9170016
                          </a>
                        </p>
                        <p className="flex justify-between sm:justify-start gap-2">
                          <span className="text-[#7B867D]">{t.left.admission}</span>{" "}
                          <a href="tel:+4921619170017" className="text-[#132218] hover:text-[#8C6D2B] transition-colors font-medium">
                            +49 2161 9170017
                          </a>
                        </p>
                        <p className="flex justify-between sm:justify-start gap-2">
                          <span className="text-[#7B867D]">{t.left.executive}</span>{" "}
                          <a href="tel:+4921619170018" className="text-[#132218] hover:text-[#8C6D2B] transition-colors font-medium">
                            +49 2161 9170018
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Email */}
                  <div className="bg-[#FAF7F0] border border-[#EAE4D7] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
                    <div className="shrink-0 text-[#8C6D2B] pt-0.5">
                      <Mail className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#132218] mb-1 leading-snug">
                        {t.left.emailTitle}
                      </h3>
                      <div className="font-sans text-[11px] sm:text-[11.5px] text-[#556358] leading-relaxed space-y-0.5">
                        <p>
                          <a href="mailto:kontakt@nabiota-health-group.de" className="text-[#132218] hover:text-[#8C6D2B] transition-colors font-medium truncate block">
                            kontakt@nabiota-health-group.de
                          </a>
                        </p>
                        <p>
                          <a href="mailto:karriere@nabiota.de" className="text-[#132218] hover:text-[#8C6D2B] transition-colors font-medium truncate block">
                            karriere@nabiota.de
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Hours */}
                  <div className="bg-[#FAF7F0] border border-[#EAE4D7] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
                    <div className="shrink-0 text-[#8C6D2B] pt-0.5">
                      <Clock className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#132218] mb-1 leading-snug">
                        {t.left.hoursTitle}
                      </h3>
                      <div className="font-sans text-[11.5px] sm:text-[12px] text-[#556358] leading-relaxed">
                        <p>{locale === "uz" ? "Dushanba - Juma" : locale === "ru" ? "Понедельник - Пятница" : locale === "en" ? "Monday - Friday" : locale === "tr" ? "Pazartesi - Cuma" : locale === "ar" ? "الاثنين - الجمعة" : "Montag - Freitag"}</p>
                        <p className="font-medium text-[#132218]">08:00 - 18:00</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Holding & Registry (Full Width) */}
                  <div className="sm:col-span-2 bg-[#FAF7F0] border border-[#EAE4D7] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
                    <div className="shrink-0 text-[#8C6D2B] pt-0.5">
                      <ShieldCheck className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#132218] mb-1 leading-snug">
                        {t.left.registryTitle}
                      </h3>
                      <div className="font-sans text-[11px] sm:text-[11.5px] text-[#556358] space-y-0.5">
                        <p>{t.left.registryCourt}, {t.left.registryHrb}</p>
                        <p className="font-medium text-[#8D6B27]">{t.left.registryCapital}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Right Column: Write to Us Form ── */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-[24px] p-5 sm:p-6 lg:p-7 border border-[#EAE4D7] shadow-[0_4px_24px_rgba(19,34,24,0.03)]">
                  <h2 className="font-serif text-[24px] sm:text-[28px] text-[#132218] font-normal leading-tight mb-1">
                    {locale === "uz"
                      ? "Bizga yozing"
                      : locale === "ru"
                      ? "Написать нам"
                      : locale === "en"
                      ? "Write to Us"
                      : locale === "tr"
                      ? "Bize Yazın"
                      : locale === "ar"
                      ? "راسلونا"
                      : "Nachricht schreiben"}
                  </h2>
                  <p className="font-sans text-[12px] sm:text-[12.5px] text-[#556358] mb-5">
                    {t.form.subtitle}
                  </p>

                  {status === "success" && (
                    <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-emerald-800 text-xs sm:text-[12.5px]">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                      <p>{t.form.successMsg}</p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2.5 text-rose-800 text-xs sm:text-[12.5px]">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-3 font-sans">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                          {locale === "uz" ? "To'liq ism *" : locale === "ru" ? "Полное имя *" : locale === "en" ? "Full Name *" : locale === "tr" ? "Ad Soyad *" : locale === "ar" ? "الاسم الكامل *" : "Vollständiger Name *"}
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder={locale === "ru" ? "Ваше имя" : t.form.namePlaceholder}
                          required
                          className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] placeholder:text-[#9EAAA0] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                          {locale === "uz" ? "E-mail *" : locale === "ru" ? "E-mail *" : locale === "en" ? "E-mail *" : locale === "tr" ? "E-posta *" : locale === "ar" ? "البريد الإلكتروني *" : "E-Mail *"}
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={locale === "ru" ? "example@domain.de" : t.form.emailPlaceholder}
                          required
                          className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] placeholder:text-[#9EAAA0] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                          {locale === "uz" ? "Telefon *" : locale === "ru" ? "Телефон *" : locale === "en" ? "Phone *" : locale === "tr" ? "Telefon *" : locale === "ar" ? "الهاتف *" : "Telefon *"}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+49 170 1234567"
                          className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] placeholder:text-[#9EAAA0] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                          {locale === "uz" ? "Tashkilot / Praksis" : locale === "ru" ? "Организация / Практика" : locale === "en" ? "Company / Practice" : locale === "tr" ? "Kurum / Klinik" : locale === "ar" ? "المؤسسة / العيادة" : "Unternehmen / Praxis"}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={locale === "ru" ? "Клиника / Медцентр" : t.form.companyPlaceholder}
                          className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] placeholder:text-[#9EAAA0] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Subject */}
                    <div>
                      <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                        {locale === "uz" ? "Murojaat mavzusi" : locale === "ru" ? "Тема обращения" : locale === "en" ? "Subject" : locale === "tr" ? "Konu" : locale === "ar" ? "الموضوع" : "Betreff"}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all cursor-pointer"
                      >
                        <option value="" disabled>{locale === "uz" ? "Mavzuni tanlang" : locale === "ru" ? "Выберите тему" : locale === "en" ? "Select a subject" : locale === "tr" ? "Konu seçin" : locale === "ar" ? "اختر الموضوع" : "Thema auswählen"}</option>
                        {t.form.subjects.map((subj, idx) => (
                          <option key={idx} value={subj}>
                            {subj}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                        {locale === "uz" ? "Sizning xabaringiz *" : locale === "ru" ? "Ваше сообщение *" : locale === "en" ? "Your Message *" : locale === "tr" ? "Mesajınız *" : locale === "ar" ? "رسالتكم *" : "Ihre Nachricht *"}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={locale === "ru" ? "Напишите ваше сообщение..." : t.form.messagePlaceholder}
                        required
                        className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] placeholder:text-[#9EAAA0] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all resize-none"
                      />
                    </div>

                    {/* Row 5: Privacy Checkbox */}
                    <div className="flex items-start gap-2 pt-0.5">
                      <input
                        type="checkbox"
                        id="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                        required
                        className="mt-0.5 w-4 h-4 rounded border-[#DCD6C8] text-[#132B1E] focus:ring-[#132B1E] cursor-pointer shrink-0"
                      />
                      <label htmlFor="privacyConsent" className="text-[11px] text-[#556358] leading-snug cursor-pointer">
                        {locale === "uz" ? (
                          <>
                            Men{" "}
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              maxfiylik siyosati
                            </Link>{" "}
                            bilan tanishdim va ma'lumotlarim qayta ishlanishiga rozilik bildiraman. *
                          </>
                        ) : locale === "ru" ? (
                          <>
                            Я ознакомился(ась) с{" "}
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              политикой конфиденциальности
                            </Link>{" "}
                            и даю согласие на обработку данных. *
                          </>
                        ) : locale === "en" ? (
                          <>
                            I have read the{" "}
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              privacy policy
                            </Link>{" "}
                            and consent to data processing. *
                          </>
                        ) : locale === "tr" ? (
                          <>
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              Gizlilik politikasını
                            </Link>{" "}
                            okudum ve kişisel verilerimin işlenmesini kabul ediyorum. *
                          </>
                        ) : locale === "ar" ? (
                          <>
                            لقد قرأت{" "}
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              سياسة الخصوصية
                            </Link>{" "}
                            وأوافق على معالجة بياناتي وفقاً لها. *
                          </>
                        ) : (
                          <>
                            Ich habe die{" "}
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              Datenschutzerklärung
                            </Link>{" "}
                            gelesen und willige ein. *
                          </>
                        )}
                      </label>
                    </div>

                    {/* Row 6: Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-3 px-6 rounded-full bg-[#132B1E] hover:bg-[#0C1C11] text-white font-medium text-[13px] sm:text-[13.5px] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer disabled:opacity-50"
                      >
                        <span>
                          {locale === "uz"
                            ? "Xabarni yuborish"
                            : locale === "ru"
                            ? "Отправить сообщение"
                            : locale === "en"
                            ? "Send Message"
                            : locale === "tr"
                            ? "Mesajı Gönder"
                            : locale === "ar"
                            ? "إرسال الرسالة"
                            : "Nachricht absenden"}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                SECTION 2 (PHOTO BOTTOM):
                - Eyebrow: НАШИ ОФИСЫ
                - Header: Где нас найти + Category Tabs (Все локации, Головной офис, Клиники, Партнеры)
                - Left (7 cols): 3 Location Cards (Active Dark Green + White Cards)
                - Right (5 cols): Interactive Google Map + Floating QR Card
            ══════════════════════════════════════════════════════════ */}
            <section className="pt-8 sm:pt-10 border-t border-[#EDE7D9]">
              {/* Header with Title on Left, Tabs on Right */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
                <div>
                  <span className="block text-[#8C6D2B] text-[11px] font-semibold tracking-wider uppercase mb-1">
                    {locale === "uz"
                      ? "BIZNING OFISLARIMIZ"
                      : locale === "ru"
                      ? "НАШИ ОФИСЫ"
                      : locale === "en"
                      ? "OUR LOCATIONS"
                      : locale === "tr"
                      ? "OFİSLERİMİZ"
                      : locale === "ar"
                      ? "مكاتبنا وعياداتنا"
                      : "UNSERE STANDORTE"}
                  </span>
                  <h2 className="font-serif text-[26px] sm:text-[34px] text-[#132218] font-normal leading-tight">
                    {locale === "uz"
                      ? "Bizni qayerdan topish mumkin"
                      : locale === "ru"
                      ? "Где нас найти"
                      : locale === "en"
                      ? "Where to Find Us"
                      : locale === "tr"
                      ? "Bizi Nerede Bulabilirsiniz"
                      : locale === "ar"
                      ? "أين تجدوننا"
                      : "Wo Sie uns finden"}
                  </h2>
                </div>

                {/* Category Tabs */}
                <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-[13px] border-b border-[#EAE4D7] sm:border-0 pb-2 sm:pb-0 overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => setActiveCategory("all")}
                    className={`pb-1 whitespace-nowrap transition-colors cursor-pointer ${
                      activeCategory === "all"
                        ? "font-semibold text-[#132B1E] border-b-2 border-[#132B1E]"
                        : "text-[#7A867E] hover:text-[#132B1E]"
                    }`}
                  >
                    {locale === "uz"
                      ? "Barcha manzillar"
                      : locale === "ru"
                      ? "Все локации"
                      : locale === "en"
                      ? "All Locations"
                      : locale === "tr"
                      ? "Tüm Konumlar"
                      : locale === "ar"
                      ? "جميع المواقع"
                      : "Alle Standorte"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("hq");
                      setActiveLocationId("hq");
                    }}
                    className={`pb-1 whitespace-nowrap transition-colors cursor-pointer ${
                      activeCategory === "hq"
                        ? "font-semibold text-[#132B1E] border-b-2 border-[#132B1E]"
                        : "text-[#7A867E] hover:text-[#132B1E]"
                    }`}
                  >
                    {locale === "uz"
                      ? "Bosh ofis"
                      : locale === "ru"
                      ? "Головной офис"
                      : locale === "en"
                      ? "Headquarters"
                      : locale === "tr"
                      ? "Merkez Ofis"
                      : locale === "ar"
                      ? "المقر الرئيسي"
                      : "Hauptsitz"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("clinics");
                      if (activeLocationId === "hq" || activeLocationId === "partners-nrw") {
                        setActiveLocationId("klinik-mg");
                      }
                    }}
                    className={`pb-1 whitespace-nowrap transition-colors cursor-pointer ${
                      activeCategory === "clinics"
                        ? "font-semibold text-[#132B1E] border-b-2 border-[#132B1E]"
                        : "text-[#7A867E] hover:text-[#132B1E]"
                    }`}
                  >
                    {locale === "uz"
                      ? "Klinikalar"
                      : locale === "ru"
                      ? "Клиники"
                      : locale === "en"
                      ? "Clinics"
                      : locale === "tr"
                      ? "Klinikler"
                      : locale === "ar"
                      ? "العيادات"
                      : "Kliniken"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("partners");
                      setActiveLocationId("partners-nrw");
                    }}
                    className={`pb-1 whitespace-nowrap transition-colors cursor-pointer ${
                      activeCategory === "partners"
                        ? "font-semibold text-[#132B1E] border-b-2 border-[#132B1E]"
                        : "text-[#7A867E] hover:text-[#132B1E]"
                    }`}
                  >
                    {locale === "uz"
                      ? "Hamkorlar"
                      : locale === "ru"
                      ? "Партнеры"
                      : locale === "en"
                      ? "Partners"
                      : locale === "tr"
                      ? "Ortaklar"
                      : locale === "ar"
                      ? "الشركاء"
                      : "Partner"}
                  </button>
                </div>
              </div>

              {/* Grid: 3 Location Cards (left) + Map Container with QR code (right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                {/* 3 Location Cards */}
                <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-stretch">
                  {filteredLocations.map((loc) => {
                    const isActive = loc.id === activeLocationId;
                    return (
                      <div
                        key={loc.id}
                        onClick={() => setActiveLocationId(loc.id)}
                        className={`rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-[#132B1E] text-white border-2 border-[#132B1E] shadow-sm"
                            : "bg-white text-[#132218] border-2 border-[#EAE4D7] hover:border-[#D5B878]/80 shadow-[0_1px_6px_rgba(0,0,0,0.02)]"
                        }`}
                      >
                        <div>
                          {/* Image */}
                          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 bg-neutral-900">
                            <Image
                              src={loc.image}
                              alt={loc.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 300px"
                            />
                          </div>

                          {/* Title */}
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <MapPin className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-[#ECCF96]" : "text-[#8C6D2B]"}`} />
                            <h3 className={`font-serif text-[13.5px] sm:text-[14px] font-medium leading-tight truncate ${isActive ? "text-white" : "text-[#132218]"}`}>
                              {loc.title}
                            </h3>
                          </div>

                          {/* Address */}
                          <p className={`font-sans text-[11px] sm:text-[11.5px] leading-snug mb-3 whitespace-pre-line ${isActive ? "text-white/80" : "text-[#556358]"}`}>
                            {loc.address}
                          </p>

                          {/* Phone & Mail */}
                          <div className="space-y-1 font-sans text-[11px] mb-3">
                            <div className="flex items-center gap-1.5">
                              <Phone className={`w-3 h-3 shrink-0 ${isActive ? "text-white/60" : "text-[#8C6D2B]"}`} />
                              <a
                                href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                                onClick={(e) => e.stopPropagation()}
                                className={`hover:underline truncate ${isActive ? "text-white/90" : "text-[#2C382F]"}`}
                              >
                                {loc.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Mail className={`w-3 h-3 shrink-0 ${isActive ? "text-white/60" : "text-[#8C6D2B]"}`} />
                              <a
                                href={`mailto:${loc.email}`}
                                onClick={(e) => e.stopPropagation()}
                                className={`hover:underline truncate ${isActive ? "text-white/90" : "text-[#2C382F]"}`}
                              >
                                {loc.email}
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Button: "Показать на карте" */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveLocationId(loc.id);
                          }}
                          className={`w-full mt-2 py-2 px-3 rounded-full text-[11px] sm:text-[11.5px] font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                            isActive
                              ? "border border-white/25 hover:border-white text-white bg-white/5 hover:bg-white/10"
                              : "border border-[#DCD6C8] hover:border-[#132B1E] text-[#132218] bg-transparent hover:bg-[#FAF8F5]"
                          }`}
                        >
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span>
                            {locale === "uz"
                              ? "Xaritada ko'rsatish"
                              : locale === "ru"
                              ? "Показать на карте"
                              : locale === "en"
                              ? "Show on map"
                              : locale === "tr"
                              ? "Haritada göster"
                              : locale === "ar"
                              ? "عرض على الخريطة"
                              : "Auf der Karte zeigen"}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Right: Map Container with bottom QR Card */}
                <div className="lg:col-span-5 xl:col-span-5">
                  <div className="relative rounded-[22px] overflow-hidden border border-[#EAE4D7] bg-[#EAE7DC] h-full min-h-[420px] sm:min-h-[460px] shadow-sm flex flex-col justify-between">
                    {/* Interactive Map iframe */}
                    <iframe
                      title={activeLocation.title}
                      src={`https://maps.google.com/maps?q=${activeLocation.query}&t=&z=${mapZoom}&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      className="absolute inset-0 w-full h-full border-0 pointer-events-auto"
                      loading="lazy"
                    />

                    {/* Stylized Floating Map Pin Label */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none drop-shadow-md">
                      <div className="bg-[#132B1E] text-white text-[11.5px] font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20 whitespace-nowrap">
                        <MapPin className="w-3 h-3 text-[#ECCF96]" />
                        <span>{activeLocation.mapPin}</span>
                      </div>
                      <div className="w-0 h-0 border-x-4 border-x-transparent border-t-6 border-t-[#132B1E]" />
                    </div>

                    {/* Map Zoom Controls */}
                    <div className="absolute top-3 right-3 z-10 flex flex-col rounded-lg overflow-hidden border border-black/10 bg-white/95 shadow-md">
                      <button
                        type="button"
                        onClick={() => setMapZoom((prev) => Math.min(prev + 1, 19))}
                        className="w-7 h-7 flex items-center justify-center text-[#132218] hover:bg-[#FAF8F5] border-b border-[#EDE7D9] font-medium text-sm transition-colors cursor-pointer"
                        aria-label="Zoom in"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => setMapZoom((prev) => Math.max(prev - 1, 10))}
                        className="w-7 h-7 flex items-center justify-center text-[#132218] hover:bg-[#FAF8F5] font-medium text-sm transition-colors cursor-pointer"
                        aria-label="Zoom out"
                      >
                        −
                      </button>
                    </div>

                    {/* Spacer to push floating card to bottom */}
                    <div className="flex-1 pointer-events-none" />

                    {/* Floating Bottom Card: QR Code & Open in Google Maps */}
                    <div className="relative z-20 m-3 sm:m-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EDE7D9] shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-11 h-11 rounded-lg border border-[#EDE7D9] bg-white p-0.5 shrink-0 overflow-hidden shadow-2xs">
                          <Image
                            src="/images/contact/google-maps-qr.webp"
                            alt="Google Maps QR Code"
                            fill
                            className="object-contain p-0.5"
                          />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-[12px] text-[#132218] leading-tight">
                            {t.cards.qrTitle}
                          </h4>
                          <p className="font-sans text-[10px] sm:text-[10.5px] text-[#556358] leading-tight mt-0.5 max-w-[210px]">
                            {t.cards.qrDesc}
                          </p>
                        </div>
                      </div>

                      <a
                        href={`https://maps.google.com/?q=${activeLocation.query}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-full border border-[#DCD6C8] bg-white hover:bg-[#FAF8F5] hover:border-[#132B1E] text-[#132218] text-[11px] font-medium transition-colors shadow-2xs shrink-0 cursor-pointer"
                      >
                        <span>{t.cards.openMaps}</span>
                        <ExternalLink className="w-3 h-3 text-[#717A73]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
