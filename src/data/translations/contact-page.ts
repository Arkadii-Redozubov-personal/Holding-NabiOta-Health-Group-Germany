import { SupportedLocale } from "@/lib/i18n";

export interface LocationOffice {
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

export const contactTranslations = {
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
  };;

export function getContactLocations(locale: SupportedLocale = "de"): LocationOffice[] {
  return [
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
  ];;
}
