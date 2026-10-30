import { SupportedLocale } from "@/lib/i18n";

export function getValuesPageTranslations(locale: SupportedLocale = "de") {
  const isUz = locale === "uz";
  const isEn = locale === "en";
  const isRu = locale === "ru";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  return {
    // Section 1: Hero Section
    heroEyebrow: isUz ? "XOLDING HAQIDA" : isRu ? "О ХОЛДИНГЕ" : isEn ? "ABOUT US" : isTr ? "HOLDİNG HAKKINDA" : isAr ? "عن المجموعة الصحية" : "ÜBER UNS",
    heroTitle1: isUz ? "Yana-da sog'lomroq" : isRu ? "Вместе ради более" : isEn ? "Together for a" : isTr ? "Daha sağlıklı bir" : isAr ? "معاً من أجل" : "Gemeinsam für eine",
    heroTitle2: isUz ? "kelajak sari birgalikda." : isRu ? "здорового будущего." : isEn ? "healthier future." : isTr ? "gelecek için birlikte." : isAr ? "مستقبل أكثر صحة." : "gesündere Zukunft.",
    heroTitle3: "",
    heroDesc: isUz
      ? "NabiOta® Health Group Germany GmbH - zamonaviy tibbiyot, innovatsion yechimlar va insoniy g'amxo'rlikni birlashtirgan integratsiyalashgan sog'liqni saqlash kompaniyasidir. Bizning maqsadimiz - bugun va kelajakda insonlar hayot sifatini barqaror yaxshilashdir."
      : isRu
      ? "NabiOta® Health Group Germany GmbH - интегрированная компания в сфере здравоохранения, объединяющая современную медицину, инновационные решения и человеческую заботу. Наша цель - устойчиво улучшать качество жизни людей сегодня и в будущем."
      : isEn
      ? "NabiOta® Health Group Germany GmbH is an integrated healthcare enterprise uniting modern medicine, innovative solutions, and human compassion. Our goal is to sustainably enhance the quality of life for people - today and in the future."
      : isTr
      ? "NabiOta® Health Group Germany GmbH, modern tıbbı, yenilikçi çözümleri ve insani şefkati bir araya getiren entegre bir sağlık kuruluşudur. Amacımız, insanların yaşam kalitesini bugün ve gelecekte kalıcı olarak yükseltmektir."
      : isAr
      ? "تعد مجموعة NabiOta® Health Group Germany GmbH مؤسسة رعاية صحية متكاملة تجمع بين الطب الحديث، والحلول المبتكرة، والرعاية الإنسانية الشاملة. هدفنا هو تحسين جودة حياة المرضى بصورة مستدامة - اليوم وفي المستقبل."
      : "NabiOta® Health Group Germany GmbH ist ein integriertes Gesundheitsunternehmen, das moderne Medizin, innovative Lösungen und menschliche Fürsorge vereint. Unser Ziel ist es, die Lebensqualität von Menschen nachhaltig zu verbessern - heute und in Zukunft.",
    heroBtn: isUz ? "Bizning tariximiz" : isRu ? "Наша история" : isEn ? "Our Story" : isTr ? "Hikayemiz" : isAr ? "مسيرتنا وقصتنا" : "Unsere Geschichte",
    badge1Title: isUz ? "Teng huquqli" : isRu ? "Партнерство" : isEn ? "Partnership" : isTr ? "Ortaklık" : isAr ? "شراكة موثوقة" : "Partnerschaft",
    badge1Sub: isUz ? "hamkorlik" : isRu ? "на равных" : isEn ? "on equal footing" : isTr ? "eşit düzeyde" : isAr ? "على قدم المساواة" : "auf Augenhöhe",
    badge2Title: isUz ? "Amaliy" : isRu ? "Ответственность" : isEn ? "Responsibility" : isTr ? "Sorumluluk" : isAr ? "مسؤولية حقيقية" : "Verantwortung",
    badge2Sub: isUz ? "mas'uliyat" : isRu ? "перед обществом" : isEn ? "in all we do" : isTr ? "her eylemimizde" : isAr ? "في كل تصرف" : "im Handeln",
    badge3Title: isUz ? "Kelajak uchun" : isRu ? "Инновации" : isEn ? "Innovation" : isTr ? "İnovasyon" : isAr ? "ابتكار مستمر" : "Innovation",
    badge3Sub: isUz ? "innovatsiyalar" : isRu ? "для будущего" : isEn ? "for the future" : isTr ? "gelecek için" : isAr ? "من أجل المستقبل" : "für die Zukunft",

    // Section 2: Mission Section
    missionHeading1: isUz ? "Shunchaki tibbiy yordamdan" : isRu ? "Больше, чем просто" : isEn ? "More than just" : isTr ? "Sadece sağlık hizmetinden" : isAr ? "أكثر من مجرد" : "Mehr als nur",
    missionHeading2: isUz ? "ancha ortig'i." : isRu ? "медицинская помощь." : isEn ? "healthcare." : isTr ? "çok daha fazlası." : isAr ? "رعاية صحية تقليدية." : "Gesundheitsversorgung.",
    missionText: isUz
      ? "NabiOta® da biz insonni diqqat markaziga qo'yadigan yaxlit sog'liqni saqlashga ishonamiz. Bizning missiyamiz - shifo topish, profilaktika va hayot sifatini uzoq muddatli yaxshilashga xizmat qiladigan yuqori sifatli tibbiy xizmatlar, innovatsion davolash usullari va qo'llab-quvvatlovchi ekotizimni yaratishdir."
      : isRu
      ? "В NabiOta® мы верим в целостное здравоохранение, в центре которого стоит человек. Наша миссия - создавать высококачественные медицинские услуги, инновационные методы лечения и поддерживающую экосистему, способствующую выздоровлению, профилактике и долгосрочному улучшению качества жизни."
      : isEn
      ? "At NabiOta®, we believe in holistic healthcare that puts people first. Our mission is to provide high-quality medical services, innovative therapies, and a supportive network that sustainably fosters healing, prevention, and quality of life."
      : isTr
      ? "NabiOta®'da insanı merkezine alan bütüncül bir sağlık anlayışına inanıyoruz. Misyonumuz; iyileşmeyi, önleyici hekimliği ve yaşam kalitesini kalıcı biçimde destekleyen yüksek kaliteli klinik hizmetler, yenilikçi tedavi yöntemleri ve güçlü bir destek ekosistemi sunmaktır."
      : isAr
      ? "نؤمن في NabiOta® برعاية صحية شمولية تضع الإنسان وكرامته في صميم كل قرار. رسالتنا هي تقديم خدمات طبية فائقة الجودة، وبروتوكولات علاجية مبتكرة، وشبكة دعم سريرية متكاملة تعزز الشفاء والوقاية وجودة الحياة على المدى الطويل."
      : "Wir bei NabiOta® glauben an eine ganzheitliche Gesundheitsversorgung, die den Menschen in den Mittelpunkt stellt. Unsere Mission ist es, hochwertige medizinische Leistungen, innovative Therapien und ein unterstützendes Netzwerk zu schaffen, das Heilung, Prävention und Lebensqualität nachhaltig fördert.",
    missionQuote: isUz
      ? "„Salomatlik hamma narsa emas, ammo salomatliksiz qolgan barcha narsa hech narsadir.“"
      : isRu
      ? "„Здоровье - это не всё, но без здоровья всё - ничто.“"
      : isEn
      ? "“Health is not everything, but without health, everything is nothing.”"
      : isTr
      ? "„Sağlık her şey değildir, ancak sağlık olmadan her şey bir hiçtir.“"
      : isAr
      ? "«الصحة ليست كل شيء، ولكن بدون الصحة كل شيء لا يساوي شيئاً.»"
      : "„Gesundheit ist nicht alles, aber ohne Gesundheit ist alles nichts.“",
    signatureCompany: "NabiOta® Health Group Germany",
    signatureTitle: isUz ? "Xolding rahbariyati" : isRu ? "Руководство холдинга" : isEn ? "Executive Management" : isTr ? "Holding Yönetimi" : isAr ? "الإدارة التنفيذية للمجموعة" : "Geschäftsführung",

    // Section 3: Values Section (Das macht uns besonders)
    valuesHeading: isUz ? "Bizni nima o'ziga xos qiladi." : isRu ? "Что делает нас особенными." : isEn ? "What makes us distinct." : isTr ? "Bizi farklı kılan nitelikler." : isAr ? "ما يميزنا في الرعاية والخدمة." : "Das macht uns besonders.",
    valuesSubtitle: isUz
      ? "Bizning qadriyatlarimiz xatti-harakatlarimiz poydevorini tashkil etadi va butun kompaniyalar guruhidagi hamkorlikni belgilaydi."
      : isRu
      ? "Наши ценности образуют фундамент наших действий и определяют сотрудничество во всей группе компаний."
      : isEn
      ? "Our values form the bedrock of our actions and define collaboration across the entire enterprise group."
      : isTr
      ? "Değerlerimiz, tüm eylemlerimizin temelini oluşturur ve grup şirketlerimiz genelindeki iş birliğine yön verir."
      : isAr
      ? "تشكل قيمنا الأساس الراسخ لجميع أعمالنا وتحدد معايير التعاون والعمل المشترك عبر كافة قطاعات مجموعتنا."
      : "Unsere Werte bilden das Fundament unseres Handelns und prägen die Zusammenarbeit in der gesamten Unternehmensgruppe.",

    val1Title: isUz ? "Ishonchli hamkor" : isRu ? "Надежный партнер" : isEn ? "Reliable Partner" : isTr ? "Güvenilir Ortak" : isAr ? "شريك موثوق" : "Verlässlicher Partner",
    val1Desc: isUz ? "Teng huquqli uzoq muddatli hamkorlik." : isRu ? "Долгосрочное партнерство на равных." : isEn ? "Long-term partnership on equal footing." : isTr ? "Eşit düzeyde uzun vadeli ve sağlam ortaklık." : isAr ? "شراكة استراتيجية طويلة الأمد على قدم المساواة." : "Langfristige Partnerschaft auf Augenhöhe.",
    val2Title: isUz ? "Innovatsion yechimlar" : isRu ? "Инновационные решения" : isEn ? "Innovative Solutions" : isTr ? "Yenilikçi Çözümler" : isAr ? "حلول علاجية مبتكرة" : "Innovative Lösungen",
    val2Desc: isUz ? "Yaxshiroq kelajak yo'lida zamonaviy yondashuvlar." : isRu ? "Современные подходы во имя лучшего будущего." : isEn ? "Modern approaches for a brighter future." : isTr ? "Daha parlak bir gelecek için modern yaklaşımlar." : isAr ? "مناهج طبية حديثة ومتقدمة من أجل مستقبل أفضل." : "Moderne Ansätze für eine bessere Zukunft.",
    val3Title: isUz ? "Jonli mas'uliyat" : isRu ? "Живая ответственность" : isEn ? "Living Responsibility" : isTr ? "Yaşayan Sorumluluk" : isAr ? "مسؤولية مجتمعية حية" : "Living Responsibility",
    val3Desc: isUz ? "Insonlar, jamiyat va tabiat oldidagi mas'uliyat." : isRu ? "Ответственность перед людьми, обществом и природой." : isEn ? "Accountability towards people, society, and the environment." : isTr ? "İnsana, çevreye ve topluma karşı sürdürülebilir sorumluluk." : isAr ? "التزام راسخ تجاه المرضى، والمجتمع، والبيئة." : "Verantwortung für Mensch, Umwelt und Gesellschaft.",
    val4Title: isUz ? "Jamoa rivoji" : isRu ? "Развитие команды" : isEn ? "People Development" : isTr ? "İnsan ve Ekip Gelişimi" : isAr ? "تطوير الكوادر والفرق الطبية" : "People Development",
    val4Desc: isUz ? "Mutaxassislarimizni qo'llab-quvvatlash va rivojlantirish." : isRu ? "Укрепление и поддержка наших специалистов." : isEn ? "Empowerment and advancement of our teams." : isTr ? "Sağlık uzmanlarımızın ve ekiplerimizin sürekli gelişimi." : isAr ? "تمكين ودعم الكوادر الطبية والسريرية لتحقيق التميز." : "Stärkung und Förderung unserer Teams.",

    // Section 3B: Governance & Medical Ethics (PDF Section II & IV)
    govHeading1: isUz ? "Shifokorlar mustaqilligi" : isRu ? "Врачебная независимость" : isEn ? "Physician Independence" : isTr ? "Tıbbi Bağımsızlık" : isAr ? "استقلالية القرار الطبي" : "Ärztliche Unabhängigkeit",
    govHeading2: isUz ? "va mas'uliyatli boshqaruv." : isRu ? "и ответственное управление." : isEn ? "& Responsible Governance." : isTr ? "ve Sorumlu Yönetim." : isAr ? "والحوكمة المسؤولة." : "& verantwortungsvolle Governance.",
    govSubtitle: isUz
      ? "Xususiy nemis tibbiy xoldingi sifatida biz Germaniya qonunlariga muvofiq so'zsiz shifokorlar mustaqilligi, etika kodekslariga qat'iy rioya qilish va bemorlar ma'lumotlarini himoya qilishni kafolatlaymiz."
      : isRu
      ? "Как частный немецкий медицинский холдинг мы гарантируем безусловную врачебную свободу в соответствии с § 95 SGB V и объединяем её с высочайшими стандартами клинического качества, гигиены и защиты данных."
      : isEn
      ? "As an owner-managed German healthcare holding, we guarantee total clinical independence under § 95 SGB V and combine it with the highest standards of medical quality, hygiene, and data protection."
      : isTr
      ? "Bağımsız bir Alman sağlık holdingi olarak, § 95 SGB V uyarınca hekimlerimizin tam tedavi özgürlüğünü garanti ediyor; bunu en yüksek klinik kalite, hijyen ve veri koruma standartlarıyla birleştiriyoruz."
      : isAr
      ? "بصفتنا مجموعة رعاية صحية ألمانية خاصة، نضمن بموجب المادة § 95 SGB V حرية القرار العلاجي التام لأطبائنا، وندمج ذلك بأعلى معايير الجودة السريرية والنظافة وحماية البيانات."
      : "Als inhabergeführte Gesundheitsholding garantieren wir gemäß § 95 SGB V die uneingeschränkte ärztliche Therapiefreiheit unserer Mediziner und verbinden dies mit höchsten Standards für klinische Qualität, Hygiene und Patientensicherheit.",

    govPillar1Title: isUz ? "Shifokorlar mustaqilligi va terapiya erkinligi" : isRu ? "Врачебная независимость и свобода терапии" : isEn ? "Physician Independence & Clinical Autonomy" : isTr ? "Tıbbi Bağımsızlık ve Tedavi Özgürlüğü" : isAr ? "استقلالية الأطباء وحرية اتخاذ القرارات العلاجية" : "Ärztliche Weisungsfreiheit & Therapiefreiheit",
    govPillar1Desc: isUz
      ? "Tibbiy rahbariyat va shifokorlar diagnostika, ko'rsatmalar va davolash to'g'risidagi qarorlarni faqat tibbiy zarurat asosida qabul qiladilar."
      : isRu
      ? "Медицинское руководство и врачи принимают решения о диагностике, показаниях и лечении исключительно на основе врачебного искусства и блага пациента - без каких-либо коммерческих указаний руководства холдинга."
      : isEn
      ? "Clinical directors and attending physicians determine diagnostics, indications, and therapy solely according to medical expertise and patient welfare - free from economic directives of holding management."
      : isTr
      ? "Tıbbi direktörlerimiz ve hekimlerimiz; teşhis, endikasyon ve tedavi kararlarını holding yönetiminin ticari yönlendirmelerinden bağımsız olarak, yalnızca tıp sanatının kuralları ve hasta yararı doğrultusunda alırlar."
      : isAr
      ? "تتخذ الإدارة الطبية وكافة الأطباء المعالجين قرارات التشخيص وتحديد العلاج وفقاً لأصول الطب ورعاية المريض فقط - دون أي توجيهات تجارية من إدارة المجموعة."
      : "Die medizinische Leitung und alle behandelnden Ärzte entscheiden über Diagnostik, Indikation und Therapie ausschließlich nach den Regeln der ärztlichen Kunst und dem Patientenwohl - frei von wirtschaftlichen Weisungen der Holding-Gesellschafter.",
    govPillar1Points: [
      isUz ? "Davolash usullarini erkin tanlash" : isRu ? "Свободный выбор методов лечения" : isEn ? "Free choice of medical treatment" : isTr ? "Meslek kurallarına uygun serbest tedavi yöntemi seçimi" : isAr ? "حرية كاملة في اختيار مناهج العلاج المعتمدة طبياً" : "Freie Methodenwahl nach Berufsordnung",
      isUz ? "Muolajalar uchun tijoriy kvotalarni taqiqlash" : isRu ? "Запрет коммерческих квот на процедуры" : isEn ? "No revenue quotas for medical decisions" : isTr ? "Tıbbi kararlarda ticari vaka sayısı veya ciro kotalarının bulunmaması" : isAr ? "عدم فرض أي حصص أو مستهدفات تجارية على القرارات الطبية" : "Keine ökonomischen Fallzahl- oder Therapievorgaben",
      isUz ? "Bosh ustuvorlik - bemor farovonligi" : isRu ? "Главный приоритет - благополучие пациента" : isEn ? "Absolute focus on patient welfare" : isTr ? "Hasta sağlığı ve yararının koşulsuz önceliği" : isAr ? "الأولوية المطلقة لصحة وسلامة المريض" : "Bedingungsloses Primat des Patientenwohls",
    ],

    govPillar2Title: isUz ? "Klinik sifat va bemorlar xavfsizligi" : isRu ? "Клиническое качество и безопасность пациентов" : isEn ? "Clinical Quality & Patient Safety" : isTr ? "Klinik Kalite ve Hasta Güvenliği Yönetimi" : isAr ? "إدارة الجودة السريرية وإدارة المخاطر وسلامة المرضى" : "Klinisches Qualitäts- & Risikomanagement",
    govPillar2Desc: isUz
      ? "Sifat nazorati bo'yicha G-BA direktivalariga qat'iy rioya qilish, uzluksiz gigiyenik verifikatsiya va barcha tibbiy jarayonlarning muntazam sertifikatsiyasi."
      : isRu
      ? "Строгое следование директивам G-BA по контролю качества, непрерывная система сообщений об инцидентах CIRS, валидированные протоколы гигиены по институту Роберта Коха (RKI) и постоянный мониторинг оборудования."
      : isEn
      ? "Strict adherence to G-BA quality directives, active CIRS (Critical Incident Reporting), certified RKI-compliant hygiene protocols, and comprehensive radiation safety monitoring across all diagnostic facilities."
      : isTr
      ? "Federal G-BA kalite yönetimi yönergelerine tam uyum, aktif CIRS kritik olay bildirim sistemi, Robert Koch Enstitüsü (RKI) onaylı hijyen protokolleri ve tanı cihazlarının kesintisiz denetimi."
      : isAr
      ? "الالتزام الصارم بتوجيهات إدارة الجودة الصادرة عن اللجنة الفيدرالية المشتركة (G-BA)، ونظام الإبلاغ عن الحوادث السريرية CIRS، وخطط النظافة المعتمدة من معهد روبرت كوخ (RKI)، والفحص الدوري للأجهزة."
      : "Strikte Einhaltung der G-BA-Qualitätsmanagement-Richtlinien, aktives CIRS-Fehlermeldesystem, validierte RKI-Hygienepläne und kontinuierliche Überwachung aller diagnostischen Großgeräte.",
    govPillar2Points: [
      isUz ? "Sertifikatlangan sifat menejmenti tizimi" : isRu ? "Сертифицированная система менеджмента качества" : isEn ? "Certified clinical QM system" : isTr ? "Federal gereksinimlere uygun sertifikalı klinik kalite yönetim sistemi" : isAr ? "نظام معتمد لإدارة الجودة السريرية وفق المعايير الفيدرالية" : "Zertifiziertes QM-System nach Bundesvorgaben",
      isUz ? "RKI me'yorlari bo'yicha ko'p bosqichli gigiyena nazorati" : isRu ? "Многоступенчатый гигиенический контроль RKI" : isEn ? "RKI-compliant multi-stage hygiene management" : isTr ? "RKI standartlarına uygun çok aşamalı hijyen denetimleri" : isAr ? "إدارة بروتوكولات النظافة والتعقيم الشاملة وفق معايير معهد RKI" : "RKI-konformes Hygienemanagement & Begehungen",
      isUz ? "Muntazam audit va xavfsizlik nazorati" : isRu ? "Регулярный аудит и контроль безопасности" : isEn ? "Regular medical device safety inspections" : isTr ? "Düzenli tıbbi cihaz (MPG) ve radyasyondan korunma denetimleri" : isAr ? "فحوصات وتدقيق دوري لسلامة الأجهزة الطبية والحماية من الإشعاع" : "Regelmäßige MPG- und Strahlenschutz-Audits",
    ],

    govPillar3Title: isUz ? "Shifokor siri va shaxsiy ma'lumotlarni himoya qilish" : isRu ? "Врачебная тайна и защита персональных данных" : isEn ? "Medical Confidentiality & Data Privacy" : isTr ? "Tıbbi Sır Saklama Yükümlülüğü ve Veri Gizliliği" : isAr ? "السرية الطبية وحماية البيانات الشخصية والصحية" : "Ärztliche Schweigepflicht & Datenschutz",
    govPillar3Desc: isUz
      ? "Shifrlangan nemis telematika infratuzilmasi va DSGVO ning eng qat'iy talablariga rioya qilish orqali tibbiy ma'lumotlarni murosasiz himoyalash."
      : isRu
      ? "Бескомпромиссная защита медицинских данных через шифрованную немецкую телематическую инфраструктуру (TI), строгое разделение административной части холдинга и медицинских карт пациентов."
      : isEn
      ? "Uncompromising protection of health data through end-to-end encrypted Telematics Infrastructure (TI), strict physical and digital segregation of holding administration and patient charts."
      : isTr
      ? "Sertifikalı Telematik Altyapısı (TI) aracılığıyla yüksek hassasiyetli hasta verilerinin ödün vermeden korunması; holding idaresi ile klinik hasta kayıtlarının kesin fiziki ve dijital ayrımı."
      : isAr
      ? "حماية مطلقة لبيانات المرضى شديدة الحساسية عبر البنية التحتية للاتصالات الطبية المعتمدة (TI)، وفصل صارم بين الإدارة العامة للمجموعة والسجلات الطبية السريرية."
      : "Strengster Schutz hochsensibler Patientendaten über die zertifizierte Telematikinfrastruktur (TI), strikte Trennung von Holding-Administration und medizinischen Patientenakten sowie bedingungslose Wahrung der Schweigepflicht.",
    govPillar3Points: [
      isUz ? "Klinik ma'lumotlarning xoldingdan to'liq ajratilishi" : isRu ? "Полная изоляция клинических карт от холдинга" : isEn ? "Total clinical data isolation from corporate ops" : isTr ? "Klinik verilerin holding idari operasyonlarından mutlak yalıtımı" : isAr ? "فصل تام بين البيانات الإدارية وسجلات المرضى السريرية" : "Strikte Trennung von Verwaltungs- und Patientendaten",
      isUz ? "Telematikinfrastruktur ga xavfsiz ulanish" : isRu ? "Защищенное подключение к Telematikinfrastruktur" : isEn ? "Certified Telematics Infrastructure connection" : isTr ? "Sertifikalı Telematik Altyapısı (TI) bağlantı güvenliği" : isAr ? "اتصال مشفر ومحمي عبر البنية التحتية الطبية الألمانية TI" : "Zertifizierter Konnektor- und TI-Datenschutz",
      isUz ? "Yevropa GDPR reglamentiga 100% muvofiqlik" : isRu ? "100% соответствие европейскому регламенту GDPR" : isEn ? "Full compliance with GDPR Art. 9" : isTr ? "GDPR Madde 9 ile %100 uyumlu hasta portalları ve arşivleme" : isAr ? "امتثال كامل للمادة 9 من اللائحة العامة لحماية البيانات (GDPR)" : "DSGVO-konforme Patientenportale und Archive",
    ],

    govPillar4Title: isUz ? "Davlat va xususiy sug'urta jamg'armalari bilan hamkorlik" : isRu ? "Партнерство с государственными и частными кассами" : isEn ? "Statutory & Private Healthcare Integration" : isTr ? "Yasal ve Özel Sağlık Sigortalarıyla Güçlü Ortaklık" : isAr ? "الشراكة المتكاملة مع صناديق التأمين الصحي العام والخاص" : "Partnerschaftliche Versorgung im Rheinland",
    govPillar4Desc: isUz
      ? "Tibbiy sug'urta jamg'armalari va shifokorlar uyushmalari bilan shartnomalar orqali Germaniya davlat sog'liqni saqlash tizimiga ishonchli integratsiya."
      : isRu
      ? "Надежная интеграция в государственную систему здравоохранения Германии, тесное сотрудничество с Kassenärztliche Vereinigung Nordrhein (KVNO), всеми больничными кассами (GKV/PKV) и региональными клиниками."
      : isEn
      ? "Reliable integration into Germany's public healthcare framework, close coordination with the Association of Statutory Health Insurance Physicians (KVNO), health insurers, and regional hospitals."
      : isTr
      ? "Kuzey Ren Hekimler Birliği (KVNO) aracılığıyla kamu sağlık sistemine sağlam entegrasyon; tüm yasal (GKV) ve özel (PKV) sigortalarla ortak sözleşmeler ve bölgesel hastane ağları."
      : isAr
      ? "اندماج وثيق بالنظام الصحي العام عبر جمعية أطباء التأمين الصحي (KVNO)، وعقود تعاونية مع كافة صناديق التأمين القانونية والخاصة وشبكات المستشفيات الإقليمية."
      : "Feste Verwurzelung im öffentlichen Gesundheitssystem über die Kassenärztliche Vereinigung Nordrhein (KVNO), kooperative Verträge mit allen gesetzlichen und privaten Kassen sowie regionale Klinikverbünde.",
    govPillar4Points: [
      isUz ? "Barcha sug'urta jamg'armalari bemorlarini qabul qilish (GKV & PKV)" : isRu ? "Прием пациентов всех страховых касс (GKV & PKV)" : isEn ? "Full coverage for all statutory & private patients" : isTr ? "Yasal ve özel sigortalı tüm hastalar için tam kabul yetkisi" : isAr ? "قبول واعتماد كامل للمؤمنين قانونياً وخاصاً (GKV & PKV)" : "Volle Kassenzulassung für gesetzlich & privat Versicherte",
      isUz ? "§ 140a SGB V bo'yicha integratsiyalashgan yordam shartnomalari" : isRu ? "Договоры интегрированной помощи по § 140a SGB V" : isEn ? "Integrated care contracts under § 140a SGB V" : isTr ? "§ 140a SGB V kapsamında entegre bakım modelleri" : isAr ? "نماذج الرعاية الصحية المتكاملة بموجب المادة § 140a SGB V" : "Integrierte Versorgungskonzepte (§ 140a SGB V)",
      isUz ? "Mintaqaning yetakchi klinikalari bilan muvofiqlashtirish" : isRu ? "Координация с ведущими клиниками региона" : isEn ? "Close coordination with regional university hospitals" : isTr ? "Bölgesel uzman ve üniversite klinikleriyle yakın koordinasyon" : isAr ? "تنسيق سريري وثيق مع المستشفيات التخصصية والجامعية" : "Enge Kooperation mit regionalen Schwerpunktkliniken",
    ],

    govBannerTitle: isUz ? "Kelajak avlodlar oldidagi mas'uliyat" : isRu ? "Ответственность перед будущими поколениями" : isEn ? "Responsibility for Future Generations" : isTr ? "Tıbbın Geleceğine Karşı Sorumluluk" : isAr ? "مسؤولية راسخة نحو مستقبل الرعاية الطبية" : "Verantwortung für die Zukunft der Medizin",
    govBannerDesc: isUz
      ? "Biz bemorlar salomatligi yo'lida nemis shifokorlar hamjamiyatining tibbiy an'analarini shaffof korporativ boshqaruv bilan birlashtiramiz."
      : isRu
      ? "Мы объединяем медицинские традиции немецкого врачебного сообщества с технологическими инновациями и устойчивым инвестированием в здоровье общества."
      : isEn
      ? "We unite the medical traditions of the German healthcare profession with state-of-the-art clinical innovation and sustainable community investment."
      : isTr
      ? "Alman hekimlik meslek ahlakının köklü geleneklerini, en modern teknolojiler ve topluma değer katan sürdürülebilir yatırımlarla buluşturuyoruz."
      : isAr
      ? "نجمع بين التقاليد العريقة لأخلاقيات مهنة الطب الألمانية وأحدث التقنيات السريرية والاستثمار المستدام لصالح المجتمع."
      : "Wir verbinden die bewährten Traditionen des deutschen Berufsbeamtentums und der ärztlichen Standesethik mit modernsten Technologien und nachhaltiger regionaler Wertschöpfung.",

    // Section 4: Areas / Divisions Section
    areasHeading1: isUz ? "Ko'p qirrali kompetensiyalar" : isRu ? "Многогранные компетенции" : isEn ? "Diverse Expertise" : isTr ? "Sağlığınız için" : isAr ? "خبرات طبية متكاملة" : "Vielfältige Kompetenzen",
    areasHeading2: isUz ? "salomatligingiz uchun." : isRu ? "для вашего здоровья." : isEn ? "for your health." : isTr ? "kapsamlı uzmanlıklar." : isAr ? "لرعاية صحتكم." : "für Ihre Gesundheit.",
    areasText: isUz
      ? "Bizning tajribamiz yagona brend ostida birlashgan tibbiy va terapevtik yo'nalishlarning keng spektrini qamrab oladi."
      : isRu
      ? "Наш опыт охватывает широкий спектр медицинских и терапевтических направлений - от профилактики до узкоспециализированного лечения."
      : isEn
      ? "Our expertise spans a wide spectrum of medical and therapeutic disciplines - from prevention to specialized clinical care."
      : isTr
      ? "Uzmanlığımız; koruyucu hekimlikten yüksek düzeyde özelleşmiş klinik tedavilere kadar geniş bir tıbbi ve terapötik yelpazeyi kapsar."
      : isAr
      ? "تغطي خبراتنا طيفاً واسعاً من التخصصات الطبية والعلاجية - بدءاً من الطب الوقائي وحتى الرعاية السريرية المتخصصة."
      : "Unsere Expertise deckt ein breites Spektrum medizinischer und therapeutischer Bereiche ab - von der Prävention bis zur spezialisierten Behandlung.",
    areasBtn: isUz ? "Barcha yo'nalishlar" : isRu ? "Все направления" : isEn ? "All Divisions" : isTr ? "Tüm Faaliyet Alanları" : isAr ? "كافة القطاعات الطبية" : "Alle Bereiche",

    // 9 Competencies Grid
    comp1: isUz ? "Tibbiyot markazlari va MVZ" : isRu ? "Медицинские центры и MVZ" : isEn ? "Medical Care Centers" : isTr ? "Tıbbi Bakım Merkezleri (MVZ)" : isAr ? "مراكز الرعاية الطبية (MVZ)" : "Medizinische Versorgungszentren",
    comp2: isUz ? "Diagnostika" : isRu ? "Диагностика" : isEn ? "Diagnostics" : isTr ? "Tanı ve Görüntüleme" : isAr ? "التشخيص المخبري والإشعاعي" : "Diagnostik",
    comp3: isUz ? "Reabilitatsiya" : isRu ? "Реабилитация" : isEn ? "Rehabilitation" : isTr ? "Rehabilitasyon" : isAr ? "التأهيل الطبي المتخصص" : "Rehabilitation",
    comp4: isUz ? "Parvarish va ko'mak" : isRu ? "Уход и поддержка" : isEn ? "Nursing & Care" : isTr ? "Hasta Bakımı" : isAr ? "التمريض والرعاية التلطيفية" : "Pflege",
    comp5: isUz ? "Rekruting va kadrlar" : isRu ? "Рекрутинг и персонал" : isEn ? "Recruiting & Care" : isTr ? "İstihdam ve Sağlık Personeli" : isAr ? "استقطاب الكوادر والتمريض" : "Recruiting & Care",
    comp6: isUz ? "Konsalting va rivojlanish" : isRu ? "Консалтинг и развитие" : isEn ? "Consulting & Dev" : isTr ? "Danışmanlık ve Proje Geliştirme" : isAr ? "الاستشارات والتطوير الصحي" : "Beratung & Entwicklung",
    comp7: isUz ? "Xalqaro hamkorlik" : isRu ? "Международное сотрудничество" : isEn ? "International Cooperation" : isTr ? "Uluslararası İş Birlikleri" : isAr ? "التعاون الطبي الدولي" : "Internationale Zusammenarbeit",
    comp8: isUz ? "Tadqiqotlar va innovatsiyalar" : isRu ? "Исследования и инновации" : isEn ? "Research & Innovation" : isTr ? "Araştırma ve İnovasyon" : isAr ? "البحوث والابتكار الطبي" : "Forschung & Innovation",
    comp9: isUz ? "Uyda parvarishlash (Home Care)" : isRu ? "Домашний уход (Home Care)" : isEn ? "Home Care" : isTr ? "Evde Sağlık ve Bakım (Home Care)" : isAr ? "الرعاية الصحية المنزلية (Home Care)" : "Home Care",

    // Section 5: Stats Section
    statsHeading1: isUz ? "Bizning raqamlarimiz" : isRu ? "Наши цифры говорят" : isEn ? "Our numbers speak" : isTr ? "Rakamlarımız kendini" : isAr ? "أرقامنا وإنجازاتنا" : "Unsere Zahlen sprechen",
    statsHeading2: isUz ? "o'z-o'zidan so'zlaydi." : isRu ? "сами за себя." : isEn ? "for themselves." : isTr ? "açıkça gösteriyor." : isAr ? "تتحدث عن تميزنا." : "für sich.",
    stat1Num: "1",
    stat1Label: isUz ? "Kuchli brend" : isRu ? "Сильный бренд" : isEn ? "Strong Brand" : isTr ? "Güçlü Marka" : isAr ? "علامة موثوقة" : "Starke Marke",
    stat2Num: "6+",
    stat2Label: isUz ? "Biznes yo'nalishlari" : isRu ? "Направлений бизнеса" : isEn ? "Divisions" : isTr ? "Faaliyet Alanı" : isAr ? "قطاعات متخصصة" : "Unternehmensbereiche",
    stat3Num: "100+",
    stat3Label: isUz ? "Tarmoqdagi mutaxassislar" : isRu ? "Экспертов в сети" : isEn ? "Network Experts" : isTr ? "Ağımızdaki Uzman" : isAr ? "خبير في الشبكة" : "Experten im Netzwerk",
    stat4Num: "∞",
    stat4Label: isUz ? "Yagona umumiy missiya" : isRu ? "Одна общая миссия" : isEn ? "One Shared Mission" : isTr ? "Ortak Misyon" : isAr ? "رسالة واحدة مشتركة" : "Eine Mission",

    // Section 6: Team Section
    teamHeading: isUz ? "Birgalikda ko'prog'iga erishish." : isRu ? "Вместе достигать большего." : isEn ? "Achieving more together." : isTr ? "Birlikte daha fazlasını başarmak." : isAr ? "معاً نحقق أعلى درجات التميز." : "Gemeinsam mehr erreichen.",
    teamText: isUz
      ? "NabiOta® ortida har kuni insonlar salomatligi yo'lida mehnat qilayotgan malakali mutaxassislar, ekspertlar va rahbarlarning fidoyi jamoasi turadi."
      : isRu
      ? "За NabiOta® стоит преданная команда квалифицированных специалистов, экспертов и визионеров. Мы работаем рука об руку, чтобы оказывать людям наилучшую помощь и формировать здравоохранение завтрашнего дня."
      : isEn
      ? "Behind NabiOta® stands a committed team of healthcare professionals, specialists, and visionaries. We work hand-in-hand to deliver optimal patient care and shape the healthcare of tomorrow."
      : isTr
      ? "NabiOta®'nın arkasında nitelikli sağlık uzmanları, hekimler ve vizyonerlerden oluşan adanmış bir ekip yer alır. İnsanlara en iyi bakımı sunmak ve geleceğin sağlık hizmetlerini şekillendirmek için el ele çalışıyoruz."
      : isAr
      ? "يقف خلف NabiOta® فريق متفانٍ من الأطباء، والكوادر السريرية، والخبراء الاستراتيجيين. نعمل يداً بيد لتقديم أفضل رعاية ممكنة لمرضانا وبناء مستقبل الرعاية الصحية."
      : "Hinter NabiOta® steht ein engagiertes Team aus Fachkräften, Spezialisten und Visionären. Wir arbeiten Hand in Hand, um Menschen bestmöglich zu helfen und die Gesundheitsversorgung von morgen zu gestalten.",
    teamBtn: isUz ? "Bizdagi karyera" : isRu ? "Наша карьера" : isEn ? "Our Careers" : isTr ? "Kariyer Fırsatları" : isAr ? "فرص العمل والانضمام" : "Unsere Karriere",
    teamBadge: isUz ? "Kuchli jamoalar. Yuqori natija." : isRu ? "Сильные команды. Высокий результат." : isEn ? "Strong teams. Major impact." : isTr ? "Güçlü ekipler. Büyük etki." : isAr ? "فرق متميزة. أثر سريري عظيم." : "Starke Teams. Große Wirkung.",

    // Section 7: Founder Quote Section
    founderName: "Marike NabiOta®",
    founderQuote: isUz
      ? "„Sog'liqni saqlash kelajagini mas'uliyatni o'z zimmasiga olishga va bemorni doimo birinchi o'ringa qo'yishga tayyor insonlar yaratadi.“"
      : isRu
      ? "„Будущее здравоохранения создают люди, готовые брать на себя ответственность - и обладающие смелостью идти новыми путями.“"
      : isEn
      ? "“The future of healthcare is shaped by people who take responsibility - and who have the courage to break new ground.”"
      : isTr
      ? "„Sağlık hizmetlerinin geleceği; sorumluluk alan ve yeni yollar açma cesaretine sahip olan insanlar tarafından inşa edilir.“"
      : isAr
      ? "«إن مستقبل الرعاية الصحية يصنعه أولئك الذين يتحملون المسؤولية - ويمتلكون الشجاعة لابتكار آفاق جديدة.»"
      : "„Die Zukunft der Gesundheitsversorgung entsteht durch Menschen, die Verantwortung übernehmen - und die den Mut haben, neue Wege zu gehen.“",
    founderRole: isUz ? "Xolding rahbariyati" : isRu ? "Руководство холдинга" : isEn ? "Managing Director" : isTr ? "Holding Yönetimi" : isAr ? "الإدارة التنفيذية للمجموعة" : "Geschäftsführung",
  };
}
