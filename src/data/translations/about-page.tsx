import React from "react";
import { SupportedLocale } from "@/lib/i18n";

export interface OrganigramItem {
  name: string;
  sub: string;
  badge: string;
  href: string;
  iconKey:
    | "stethoscope"
    | "clinic"
    | "rehab"
    | "surgery"
    | "diagnostics"
    | "homecare"
    | "recruitment"
    | "real-estate"
    | "pharmacy";
}

export interface OrganigramColumn {
  colTitle: string;
  items: OrganigramItem[];
}

export function getAboutPageTranslations(locale: SupportedLocale) {
  const isUz = locale === "uz";
  const isEn = locale === "en";
  const isRu = locale === "ru";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  return {
    heroEyebrow: isUz
      ? "XOLDING HAQIDA"
      : isRu
      ? "О ХОЛДИНГЕ"
      : isEn
      ? "ABOUT THE HOLDING"
      : isTr
      ? "ŞİRKET GRUBU HAKKINDA"
      : isAr
      ? "عن مجموعة الشركات"
      : "ÜBER DIE UNTERNEHMENSGRUPPE",
    heroTitlePart1: isUz
      ? "Kuchli guruh"
      : isRu
      ? "Сильная группа"
      : isEn
      ? "A strong group"
      : isTr
      ? "Güçlü bir grup"
      : isAr
      ? "مجموعة رائدة متكاملة"
      : "Eine starke Gruppe",
    heroTitlePart2: isUz
      ? "sog'lom kelajak yo'lida."
      : isRu
      ? "для здорового будущего."
      : isEn
      ? "for a healthier future."
      : isTr
      ? "daha sağlıklı bir gelecek için."
      : isAr
      ? "من أجل مستقبل صحي مستدام."
      : "für eine gesündere Zukunft.",
    heroDesc: isUz
      ? "Mönchengladbach shahrida joylashgan NabiOta® Health Group Germany GmbH birlamchi tibbiy yordam, diagnostika, reabilitatsiya, parvarishlash va yondosh sog'liqni saqlash xizmatlarini yagona brend ostida birlashtirib, bemorlar, xodimlar va hamkorlar uchun uzoq muddatli barqaror qadriyatlarni yaratadi."
      : isRu
      ? "NabiOta® Health Group Germany GmbH с головным офисом в Мёнхенгладбахе объединяет первичную медицинскую помощь, диагностику, реабилитацию, уход и сопутствующие медицинские услуги под единым брендом, создавая долгосрочную ценность для пациентов, сотрудников и партнеров."
      : isEn
      ? "NabiOta® Health Group Germany GmbH based in Mönchengladbach unites primary medical care, diagnostics, rehabilitation, home care, and related healthcare services under one cohesive brand, creating long-term value for patients, staff, and partners."
      : isTr
      ? "Merkezi Mönchengladbach'ta bulunan NabiOta® Health Group Germany GmbH; birinci basamak sağlık hizmetlerini, ileri tanı merkezlerini, rehabilitasyonu, evde bakım ve entegre klinik servislerini tek bir çatı altında birleştirerek hastalar, çalışanlar ve paydaşlar için kalıcı değerler üretir."
      : isAr
      ? "تجمع شركة NabiOta® Health Group Germany GmbH، ومقرها مونشنغلادباخ، بين الرعاية الطبية الأولية، التشخيص المتقدم، إعادة التأهيل، الرعاية التمريضية المنزلية والخدمات الصحية الشاملة تحت مظلة موحدة - لصناعة قيمة مستدامة للمرضى والكوادر والشركاء."
      : "Die NabiOta® Health Group Germany GmbH mit Sitz in Mönchengladbach vereint medizinische Grundversorgung, Diagnostik, Rehabilitation, Pflege und angrenzende Gesundheitsleistungen unter einer gemeinsamen Marke - für nachhaltige Werte für Patienten, Mitarbeitende und Partner.",
    badge1Title: isUz ? "Inson" : isRu ? "Человек" : isEn ? "People" : isTr ? "İnsan" : isAr ? "الإنسان" : "Mensch",
    badge1Sub: isUz
      ? "diqqat markazida"
      : isRu
      ? "в центре внимания"
      : isEn
      ? "at the center"
      : isTr
      ? "odağımızda"
      : isAr
      ? "في قلب اهتمامنا"
      : "im Mittelpunkt",
    badge2Title: isUz
      ? "Barqaror"
      : isRu
      ? "Устойчивый"
      : isEn
      ? "Sustainable"
      : isTr
      ? "Sürdürülebilir"
      : isAr
      ? "نمو"
      : "Nachhaltiges",
    badge2Sub: isUz ? "o'sish" : isRu ? "рост" : isEn ? "growth" : isTr ? "büyüme" : isAr ? "مستدام" : "Wachstum",
    badge3Title: isUz
      ? "Sog'lom"
      : isRu
      ? "Здоровое"
      : isEn
      ? "A healthier"
      : isTr
      ? "Daha sağlıklı"
      : isAr
      ? "غدٌ أكثر"
      : "Gesünderes",
    badge3Sub: isUz ? "ertangi kun" : isRu ? "завтра" : isEn ? "tomorrow" : isTr ? "bir yarın" : isAr ? "صحة وعافية" : "Morgen",

    rootsEyebrow: isUz
      ? "TARIX VA ILDIZLAR"
      : isRu
      ? "ИСТОРИЯ И КОРНИ"
      : isEn
      ? "OUR ROOTS & HISTORY"
      : isTr
      ? "KÖKLERİMİZ VE TARİHÇEMİZ"
      : isAr
      ? "جذورنا ومسيرتنا"
      : "UNSERE WURZELN & GESCHICHTE",
    rootsTitle1: isUz
      ? "O'n yilliklar tajribasi."
      : isRu
      ? "Опыт десятилетий."
      : isEn
      ? "Rooted in Experience."
      : isTr
      ? "Deneyimle büyüyen güç."
      : isAr
      ? "خبرة متجذرة في التميز."
      : "Aus Erfahrung gewachsen.",
    rootsTitle2: isUz
      ? "Kelajakka intilish."
      : isRu
      ? "Направленность в будущее."
      : isEn
      ? "Built for the Future."
      : isTr
      ? "Geleceğe hazır adımlar."
      : isAr
      ? "رؤية راسخة نحو المستقبل."
      : "Für die Zukunft aufgestellt.",
    rootsP1: isUz ? (
      <>
        NabiOta® Health Group Germany GmbH Mönchengladbach shahar sudida (Amtsgericht) HRB 16787 raqami ostida ro'yxatga olingan. 2026-yil 9-yanvardagi ro'yxatdan o'tkazish bildirishnomasida 50.000 EUR ustav kapitali va rasmiy yuridik manzil ko'rsatilgan: Aachener Straße 114, 41061 Mönchengladbach. Faoliyat maqsadi - sog'liqni saqlash sohasida ulushlarni boshqarish va markazlashtirilgan boshqaruv xizmatlarini ko'rsatishdan iborat. Guruhning ildizlari strategik tibbiy ekspertiza hamda{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong> merosiga borib taqaladi; tuzilmaviy korporativ rivojlanish va litsenziyalangan shifokorlarning ishtiroki tufayli uzoq muddatli integratsiyalashgan tibbiy guruhning mustahkam poydevori yaratildi.
      </>
    ) : isRu ? (
      <>
        NabiOta® Health Group Germany GmbH зарегистрирована в Amtsgericht Mönchengladbach под номером HRB 16787. Уведомление о регистрации от 9 января 2026 года указывает уставный капитал 50.000 EUR и юридический адрес: Aachener Straße 114, 41061 Mönchengladbach. Предмет деятельности - управление участиями и централизованные управленческие услуги в сфере здравоохранения. Корни группы восходят к стратегическому развитию медицинской экспертизы и{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong>. Благодаря расширению корпоративной структуры и привлечению лицензированных специалистов был заложен фундамент долгосрочной медицинской группы.
      </>
    ) : isEn ? (
      <>
        NabiOta® Health Group Germany GmbH is registered under HRB 16787 at the Amtsgericht Mönchengladbach. The registration notice dated 9 January 2026 states a share capital of EUR 50,000 and the business address Aachener Straße 114, 41061 Mönchengladbach. Its corporate purpose comprises investment management and central management services in the healthcare sector. Tracing its origins back to{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong>, the group has evolved through structured corporate development and specialist medical participation into a future-ready healthcare group.
      </>
    ) : isTr ? (
      <>
        NabiOta® Health Group Germany GmbH, Mönchengladbach Asliye Hukuk Mahkemesi (Amtsgericht) nezdinde HRB 16787 tescil numarasıyla kayıtlıdır. 9 Ocak 2026 tarihli sicil tescil bildiriminde 50.000 EUR sermaye ve Aachener Straße 114, 41061 Mönchengladbach şirket adresi yer almaktadır. Faaliyet konusu, sağlık sektöründe iştirak yönetimi ve merkezi yönetim hizmetlerini kapsar. Grubun kökleri, stratejik medikal uzmanlık ve{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong> mirasına dayanır; yapılandırılmış kurumsal gelişim ve uzman tıbbi ortaklıklar sayesinde ayakta ve yatarak tedavi sağlayan entegre bir sağlık grubunun temelleri atılmıştır.
      </>
    ) : isAr ? (
      <>
        تم قيد شركة NabiOta® Health Group Germany GmbH بالسجل التجاري لدى محكمة مونشنغلادباخ الابتدائية برقم HRB 16787. يفيد إخطار القيد الصادر في 9 يناير 2026 برأس مال قدره 50,000 يورو ومقر العمل في Aachener Straße 114, 41061 Mönchengladbach. يشمل غرض الشركة إدارة الحصص الاستثمارية وتقديم الخدمات الإدارية المركزية في قطاع الرعاية الصحية. واستناداً إلى الخبرات الطبية التأسيسية الراسخة لشركة{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong>، تم من خلال التطوير المؤسسي المنظم ومشاركة كبار الأطباء الاستشاريين إرساء القاعدة الصلبة لشبكة متكاملة تجمع بين مرافق الرعاية المتنقلة والسريرية.
      </>
    ) : (
      <>
        Die NabiOta® Health Group Germany GmbH ist unter HRB 16787 beim Amtsgericht Mönchengladbach eingetragen. Die Eintragungsnachricht vom 9. Januar 2026 nennt ein Stammkapital von 50.000 EUR und die Geschäftsanschrift Aachener Straße 114, 41061 Mönchengladbach. Der Unternehmensgegenstand umfasst Beteiligungsverwaltung und zentrale Managementleistungen im Gesundheitswesen. Ausgehend von den Wurzeln der{" "}
        <strong className="font-bold text-[#142318]">Medical A-Z Consulting GmbH</strong> wurde durch organisatorische Weiterentwicklung und den Ausbau gesellschaftsrechtlicher Strukturen die Grundlage für einen integrierten Verbund ambulanter und stationärer medizinischer Einrichtungen geschaffen.
      </>
    ),
    rootsP2: isUz
      ? "Maqsad - umumiy amaliyot va ichki kasalliklar, nevrologiya va jarrohlik yordamini, shuningdek, dastlabki bosqichda § 30 GewO bo'yicha faoliyat yuritadigan xususiy klinikani yagona tarmoqqa birlashtirishdir. Xolding markaziy iqtisodiy va tashkiliy vazifalarni o'z zimmasiga oladi. Litsenziyalar (Zulassungen), tibbiy mas'uliyat va xizmatlar ko'rsatish tegishli vakolatli operatorlar tasarrufida qoladi. Davlat tibbiy sug'urtasiga ega bemorlarni keyingi statsionar davolash va MVZ ta'sischisi sifatida kasalxona boshqaruv kompaniyasini tashkil etish alohida rivojlanish bosqichlari sifatida tayyorlanmoqda."
      : isRu
      ? "Цель - объединение семейной и терапевтической, неврологической и хирургической помощи, а также частной клиники, которая на первом этапе работает по § 30 GewO. Холдинг берет на себя центральные экономические и организационные задачи. Допуски (Zulassungen), медицинская ответственность и оказание услуг остаются у соответствующих уполномоченных операторов. Последующее стационарное обслуживание пациентов обязательного медицинского страхования и больничное общество как учредитель MVZ готовятся как отдельные этапы развития."
      : isEn
      ? "The goal is a network of general practice and internal medicine, neurological and surgical care, as well as a private clinic initially operated under § 30 GewO. The holding assumes central economic and organizational tasks. Approvals, medical responsibility and service provision remain with the respective authorized operators. Later inpatient care for statutorily insured patients and a hospital company acting as MVZ sponsor are being prepared as separate development steps."
      : isTr
      ? "Hedefimiz; aile hekimliği ve dahiliye, nöroloji ve cerrahi branşlarının yanı sıra başlangıçta § 30 GewO uyarınca işletilen özel bir kliniği kapsayan entegre bir sağlık ağıdır. Holding merkezi ekonomik ve operasyonel görevleri üstlenir. Ruhsatlar, tıbbi sorumluluk ve hasta tedavisi yetkili işleticilerin bünyesinde kalır. Yasal sağlık sigortalı hastaların yatan hasta tedavisi ve MVZ kurucu tüzel kişisi olarak hastane şirketinin yapılandırılması ayrı aşamalar halinde planlanmaktadır."
      : isAr
      ? "الهدف هو تأسيس شبكة رعاية طبية متكاملة تضم طب الأسرة والأمراض الباطنية، طب الأعصاب، الجراحة، بالإضافة إلى مستشفى خاص يعمل مبدئياً وفق § 30 GewO. تتولى القابضة المهام الاقتصادية والتنظيمية المركزية، بينما تظل التراخيص والمسؤولية الطبية وتقديم الرعاية السريرية تحت الإشراف الكامل والمستقل للأطباء المرخصين. ويجري التحضير لتقديم الرعاية السريرية لمرضى التأمين الصحي العام وتأسيس شركة مستشفيات كجهة مشغلة لمراكز MVZ كخطوات تطويرية منفصلة."
      : "Ziel ist ein Verbund aus hausärztlicher und internistischer Versorgung, neurologischer und chirurgischer Versorgung sowie einer zunächst nach § 30 GewO betriebenen Privatklinik. Die Holding übernimmt zentrale wirtschaftliche und organisatorische Aufgaben. Zulassungen, medizinische Verantwortung und Leistungserbringung verbleiben bei den jeweils berechtigten Betreibern. Die spätere stationäre Versorgung gesetzlich Versicherter und eine Krankenhausgesellschaft als MVZ-Trägerin werden als gesonderte Entwicklungsschritte vorbereitet.",

    missionEyebrow: isUz
      ? "MISSIYA VA QARASH"
      : isRu
      ? "МИССИЯ И ВИДЕНИЕ"
      : isEn
      ? "OUR MISSION & GOALS"
      : isTr
      ? "MİSYONUMUZ VE HEDEFLERİMİZ"
      : isAr
      ? "رسالتنا وأهدافنا"
      : "UNSER AUFTRAG & ZIELE",
    missionHeading: isUz
      ? "Bizni nima harakatga keltiradi"
      : isRu
      ? "Что нами движет"
      : isEn
      ? "What Drives Us"
      : isTr
      ? "Bizi harekete geçiren güç"
      : isAr
      ? "ما يلهم مسيرتنا"
      : "Was uns antreibt",
    missionLead: isUz
      ? "Biz salomatlikni nafaqat kasalliklarni davolash, balki yaxlit vazifa deb bilamiz: insonlarga hayotning barcha bosqichlarida hamrohlik qilish, ularning hayot sifatini saqlash va tibbiy tuzilmalarni uzoq muddatli istiqbolda mustahkamlash."
      : isRu
      ? "Мы понимаем здоровье не только как лечение заболеваний, но и как целостную задачу: всесторонняя поддержка человека в различных жизненных ситуациях и долгосрочное повышение качества жизни."
      : isEn
      ? "We understand health not merely as the treatment of illnesses, but as a holistic mission: supporting people in diverse life situations and sustainably enhancing their quality of life."
      : isTr
      ? "Sağlığı yalnızca hastalıkların tedavisi olarak değil, bütüncül bir görev olarak değerlendiriyoruz. Bu nedenle farklı yaşam evrelerindeki insanları en iyi şekilde desteklemeye ve yaşam kalitelerini uzun vadeli artırmaya odaklanıyoruz."
      : isAr
      ? "نحن ننظر إلى الصحة ليس فقط باعتبارها علاجاً للأمراض، بل كرسالة إنسانية شاملة؛ لذا نكرس جهودنا لدعم المرضى في مختلف مراحل حياتهم بأعلى مستويات الرعاية وتعزيز جودة حياتهم بصورة مستدامة."
      : "Wir verstehen Gesundheit nicht nur als Behandlung von Krankheiten, sondern als ganzheitliche Aufgabe. Deshalb setzen wir uns dafür ein, Menschen in unterschiedlichen Lebenssituationen bestmöglich zu unterstützen und ihre Lebensqualität langfristig zu fördern.",
    cardMissionTitle: isUz
      ? "Bizning vazifamiz (Missiya)"
      : isRu
      ? "Наш заказ (Миссия)"
      : isEn
      ? "Our Mission"
      : isTr
      ? "Misyonumuz"
      : isAr
      ? "رسالتنا"
      : "Unser Auftrag",
    cardMissionText: isUz
      ? "Insonlarga yuqori sifatli, mehr-oqibatli va shaxsiylashtirilgan tibbiy xizmat ko'rsatish orqali eng yaxshi yordamni taqdim etish - birlamchi bo'g'indan tortib reabilitatsiyagacha."
      : isRu
      ? "Оказывать людям наилучшую поддержку посредством высококачественной медицинской помощи, современной диагностики, индивидуального ухода и инновационных услуг - надежно сопровождая пациентов на всем пути лечения."
      : isEn
      ? "To provide people with the best possible support through high-quality medical care, modern diagnostics, personalized attention, and innovative healthcare services throughout their entire treatment journey."
      : isTr
      ? "Yüksek kaliteli tıbbi bakım, modern tanı yöntemleri, kişiye özel ilgi ve yenilikçi sağlık hizmetleriyle insanları en iyi şekilde desteklemek ve tedavi süreçlerinin her adımında güvenilir bir rehber olmaktır."
      : isAr
      ? "رسالتنا هي تقديم أفضل دعم ممكن للمرضى من خلال رعاية طبية فائقة الجودة، تقنيات تشخيص حديثة، رعاية شخصية دقيقة، وخدمات صحية مبتكرة ترافق المريض بكل موثوقية عبر مسار علاجه بأكمله."
      : "Unser Auftrag ist es, Menschen durch hochwertige medizinische Versorgung, moderne Diagnostik, individuelle Betreuung und innovative Gesundheitsdienstleistungen bestmöglich zu unterstützen und Patienten auf ihrem gesamten Behandlungsweg verlässlich zu begleiten.",
    cardVisionTitle: isUz
      ? "Bizning maqsadlarimiz (Qarash)"
      : isRu
      ? "Наши цели"
      : isEn
      ? "Our Goals"
      : isTr
      ? "Hedeflerimiz"
      : isAr
      ? "أهدافنا"
      : "Unsere Ziele",
    cardVisionText: isUz
      ? "Tibbiy malaka, shaxsiy g'amxo'rlik va zamonaviy tuzilmalar qo'l berib harakat qiladigan hamda inson doimo diqqat markazida turadigan sog'liqni saqlash tizimi."
      : isRu
      ? "Здравоохранение, в котором медицинская компетентность, передовые технологии и человеческая забота идут рука об руку: объединение медицинских услуг, облегчение доступа к лечению и создание устойчивых структур."
      : isEn
      ? "Healthcare in which medical competence, modern technologies, and human compassion go hand in hand: connecting care services, easing access to treatments, and creating sustainable structures for the future."
      : isTr
      ? "Tıbbi uzmanlığın, ileri teknolojinin ve insani ilginin el ele verdiği bir sağlık ekosistemi hedefliyoruz. Sağlık hizmetlerini ağlar halinde birleştiriyor, erişimi kolaylaştırıyor ve geleceğe hazır yapılar inşa ediyoruz."
      : isAr
      ? "هدفنا هو منظومة رعاية صحية تتكامل فيها الكفاءة الطبية العالية والتقنيات الحديثة مع العناية الإنسانية المخلصة. نربط خدمات الرعاية ببعضها، نسهل وصول المرضى إليها، ونبني هياكل علاجية مستدامة للأجيال القادمة."
      : "Unser Ziel ist eine Gesundheitsversorgung, in der medizinische Kompetenz, moderne Technologien und menschliche Zuwendung Hand in Hand gehen. Wir vernetzen Versorgungsangebote, erleichtern den Zugang und schaffen nachhaltige Versorgungsstrukturen.",

    stat1Num: "3.000+",
    stat1Label: isUz
      ? "Fidoyi mutaxassislar"
      : isRu
      ? "Преданных специалистов"
      : isEn
      ? "Dedicated professionals"
      : isTr
      ? "Özverili Uzman Personel"
      : isAr
      ? "كادراً متخصصاً متفانياً"
      : "Engagierte Fachkräfte",
    stat2Num: "10",
    stat2Label: isUz
      ? "Tarkibiy bo'linmalar va korxonalar"
      : isRu
      ? "Подразделений и предприятий"
      : isEn
      ? "Divisions & operating entities"
      : isTr
      ? "Faaliyet Alanı ve Şirket"
      : isAr
      ? "قطاعات ووحدات تشغيلية"
      : "Unternehmensbereiche & Einheiten",
    stat3Num: "100+",
    stat3Label: isUz
      ? "Hamkorlik tarmog'i"
      : isRu
      ? "Партнерская сеть"
      : isEn
      ? "Partner network"
      : isTr
      ? "Ağ Ortakları"
      : isAr
      ? "شريكاً في الشبكة الطبية"
      : "Partner im Netzwerk",
    stat4Num: isUz ? "Yagona" : isRu ? "Одна" : isEn ? "One" : isTr ? "Tek" : isAr ? "رسالة" : "Eine",
    stat4Label: isUz
      ? "Sog'lom kelajak yo'lidagi umumiy missiya"
      : isRu
      ? "Общая миссия во имя здорового будущего"
      : isEn
      ? "Shared mission for a healthier tomorrow"
      : isTr
      ? "Daha sağlıklı bir gelecek için ortak misyon"
      : isAr
      ? "واحدة مشتركة لمستقبل صحي واعد"
      : "Gemeinsame Mission für eine gesündere Zukunft",

    orgEyebrow: isUz
      ? "TASHKILIY TUZILMA"
      : isRu
      ? "ОРГАНИЗАЦИОННАЯ СТРУКТУРА"
      : isEn
      ? "ORGANIZATIONAL STRUCTURE"
      : isTr
      ? "ORGANİZASYON VE YAPI"
      : isAr
      ? "الهيكل التنظيمي والمؤسسي"
      : "ORGANISATION & STRUKTUR",
    orgHeading: isUz
      ? "Xolding tuzilmasi va sho'ba korxonalar"
      : isRu
      ? "Структура холдинга и дочерние общества"
      : isEn
      ? "Holding & Subsidiary Entities"
      : isTr
      ? "Şirket Yapısı - Holding ve İştirakler"
      : isAr
      ? "الهيكل المؤسسي - القابضة والشركات التابعة"
      : "Unternehmensstruktur - Holding & Tochtergesellschaften",
    holdingBadge: isUz
      ? "XOLDING / KONSERN"
      : isRu
      ? "ХОЛДИНГ / КОНЦЕРН"
      : isEn
      ? "HOLDING / KONZERN"
      : isTr
      ? "HOLDİNG / GRUP"
      : isAr
      ? "الشركة القابضة / المجموعة"
      : "HOLDING / KONZERN",

    twoPhaseEyebrow: isUz
      ? "RIVOJLANISH STRATEGIYASI"
      : isRu
      ? "СТРАТЕГИЯ РАЗВИТИЯ"
      : isEn
      ? "DEVELOPMENT STRATEGY"
      : isTr
      ? "STRATEJİK GELİŞİM"
      : isAr
      ? "التطوير الاستراتيجي"
      : "STRATEGISCHE ENTWICKLUNG",
    twoPhaseTitle: isUz
      ? "Ikki bosqichli ishtirok etish modeli"
      : isRu
      ? "Структура участия в две фазы"
      : isEn
      ? "Two-Phase Corporate Evolution"
      : isTr
      ? "İki Aşamalı İştirak Yapısı"
      : isAr
      ? "هيكل المساهمة والاستثمار عبر مرحلتين"
      : "Beteiligungsstruktur in zwei Phasen",
    twoPhaseDesc: isUz
      ? "Xolding rivojlanishi SGB V bo'yicha qonuniy me'yorlar va KV Nordrhein talablariga to'liq mos kelishini ta'minlash uchun bosqichma-bosqich amalga oshiriladi."
      : isRu
      ? "Развитие холдинга строится последовательно для обеспечения юридической безупречности и устойчивого масштабирования."
      : isEn
      ? "The group's corporate expansion is engineered systematically to ensure full regulatory compliance and sustainable scaling."
      : isTr
      ? "NabiOta Grubu'nun inşası, mesleki ve idari mevzuata tam uyumu sağlamak amacıyla açıkça tanımlanmış iki aşamada gerçekleştirilmektedir."
      : isAr
      ? "يتم بناء وتوسيع مجموعة NabiOta عبر مرحلتين محددتين بدقة لضمان الامتثال التام للأنظمة المهنية وقوانين تراخيص الرعاية الطبية."
      : "Der Aufbau der NabiOta-Gruppe erfolgt in zwei klar definierten Phasen zur Sicherstellung voller berufs- und zulassungsrechtlicher Konformität.",
    phase1Title: isUz
      ? "1-bosqich: Shifokor ishtirokidagi shakllanish bosqichi"
      : isRu
      ? "Фаза 1: Этап становления с участием врача"
      : isEn
      ? "Phase 1: Foundation Phase with Physician"
      : isTr
      ? "Aşama 1: Hekim Katılımlı Kuruluş Evresi"
      : isAr
      ? "المرحلة الأولى: مرحلة التأسيس بمشاركة الأطباء المرخصين"
      : "Phase 1: Aufbauphase mit ärztlicher Beteiligung",
    phase1Desc: isUz
      ? "Dr. Fischer-Rahimov litsenziyalangan shartnoma shifokori sifatida MVZ tuzilmasining asoschisi va tibbiy langari hisoblanadi (§ 95 Abs. 1a SGB V). Xolding 1-bosqichda tibbiy bo'lmagan xizmatlar va infratuzilmani rivojlantirishga e'tibor qaratadi."
      : isRu
      ? "Dr. Fischer-Rahimov как лицензированный врач-контрактник владеет долями MVZ на основе права учредителя. Холдинг берет на себя центральные сервисные и управляющие функции через индивидуальные договоры услуг."
      : isEn
      ? "Dr. Fischer-Rahimov holds MVZ shares directly on the basis of his statutory physician entitlement. The holding company provides centralized management services via individually defined service agreements."
      : isTr
      ? "Dr. Fischer-Rahimov, yasal kurucu hekim hakkı temelinde doğrudan MVZ hisselerini elinde bulundurur. Holding, bireysel olarak kararlaştırılan hizmet sözleşmeleri aracılığıyla MVZ merkezlerine kurumsal destek sunar."
      : isAr
      ? "يمتلك د. فيشر-رحيموف حصص مراكز MVZ مباشرةً استناداً إلى أهليته التأسيسية كطبيب معتمد. وترتبط الشركة القابضة بمراكز MVZ عبر اتفاقيات خدمات إدارية محددة."
      : "Dr. Fischer-Rahimov hält MVZ-Anteile unmittelbar auf Grundlage seiner Gründungsberechtigung. Die Holding verbindet sich mit den MVZ durch einzeln vereinbarte Dienstleistungen. Andere zulässige Beteiligungen werden separat aufgebaut.",
    phase2Title: isUz
      ? "2-bosqich: Statsionar shifoxona tuzilmasi"
      : isRu
      ? "Фаза 2: Стационарная больничная структура"
      : isEn
      ? "Phase 2: Hospital Corporation Structure"
      : isTr
      ? "Aşama 2: Gelecekteki Hastane Yapılanması"
      : isAr
      ? "المرحلة الثانية: هيكل المستشفى المؤسسي اللاحق"
      : "Phase 2: Spätere Krankenhausstruktur",
    phase2Desc: isUz
      ? "Xolding klinikani boshqarish kompaniyasini (NabiOta Clinics Germany GmbH) ta'sis etadi va § 30 GewO litsenziyasiga ega bo'ladi hamda kasalxona rejasiga muvofiq statsionar shifoxona sifatida MVZ ning qonuniy ta'sischisi maqomini oladi."
      : isRu
      ? "Холдинг учреждает компанию управления клиникой (NabiOta Clinics Germany GmbH nach § 30 GewO). После получения лицензии больницы (§ 108/109 SGB V) компания сможет напрямую участвовать в долях MVZ."
      : isEn
      ? "The holding operates the hospital operating entity (under § 30 GewO). Upon obtaining official hospital accreditation (§ 108/109 SGB V), it can hold MVZ shares directly."
      : isTr
      ? "Holding, hastane işletme şirketini (§ 30 GewO) bünyesinde tutar. Yasal hastane ruhsatı (§ 108/109 SGB V) alındıktan sonra ve pay devri incelemesinin ardından bu şirket doğrudan MVZ hisselerini devralabilir."
      : isAr
      ? "تمتلك الشركة القابضة شركة إدارة وتشغيل المستشفى (§ 30 GewO). وفور الحصول على اعتماد المستشفيات المطلوب (§ 108/109 SGB V) وبعد فحص تحويل الحصص، يمكن لهذه الشركة امتلاك حصص MVZ مباشرةً."
      : "Die Holding hält die Krankenhaus-Betriebsgesellschaft. Erst bei deren erforderlicher Krankenhauszulassung (§ 108/109 SGB V) und nach Prüfung der Anteilsübertragung kann diese unmittelbar MVZ-Anteile halten.",

    independenceTitle: isUz
      ? "Tibbiy qarorlarning to'liq mustaqilligi"
      : isRu
      ? "Полная независимость врачебных решений"
      : isEn
      ? "Guaranteed Medical Independence"
      : isTr
      ? "Garantili Tıbbi Bağımsızlık"
      : isAr
      ? "استقلالية كاملة ومضمونة للقرارات الطبية"
      : "Garantierte ärztliche Weisungsfreiheit",
    independenceDesc: isUz
      ? "Xolding iqtisodiy, IT va infratuzilma yordamini ko'rsatadi, ammo shifokorlarning davolash usullari, dori-darmonlar tayinlash va tibbiy erkinligiga hech qanday aralashmaydi."
      : isRu
      ? "Холдинг обеспечивает экономическое, IT- и инфраструктурное сопровождение, но не имеет полномочий влиять на индивидуальные медицинские решения. Врачебное руководство каждого центра действует абсолютно автономно в соответствии с § 95 SGB V."
      : isEn
      ? "The holding handles administrative, IT, and facility management without interfering in clinical care. The medical directorship of each facility remains completely autonomous in all healthcare matters."
      : isTr
      ? "Tıbbi kurumlar; tedavi kararları, tanı ve klinik işleyiş konusunda tamamen bağımsız kalır. Bir MVZ'nin tıbbi direktörlüğünün serbest karar alma hakkı (§ 95 SGB V) hiçbir kısıtlama olmaksızın korunur."
      : isAr
      ? "تتمتع المرافق الطبية بالاستقلالية التامة في القرارات العلاجية والتشخيصية والتنظيم السريري. وتظل الاستقلالية المهنية غير المقيدة للإدارة الطبية في مراكز MVZ مصونة بالكامل (§ 95 SGB V)."
      : "Die medizinischen Einrichtungen bleiben für Behandlungsentscheidungen, Diagnostik und ärztliche Organisation eigenverantwortlich. Die medizinische Weisungsfreiheit der ärztlichen Leitung eines MVZ bleibt uneingeschränkt gewahrt (§ 95 SGB V).",

    // Section 3B: Medical Leadership & Founder (PDF Pages 2-4)
    leadershipEyebrow: isUz
      ? "SHIFOKORLAR RAHBARLIGI VA TA'SISCHI"
      : isRu
      ? "ВРАЧЕБНОЕ РУКОВОДСТВО И ОСНОВАТЕЛЬ"
      : isEn
      ? "MEDICAL LEADERSHIP & FOUNDER"
      : isTr
      ? "TIBBİ LİDERLİK VE KURUCU"
      : isAr
      ? "القيادة الطبية ومؤسس المجموعة"
      : "ÄRZTLICHE FÜHRUNG & GRÜNDER",
    leadershipHeading1: isUz
      ? "Mas'uliyatli tibbiyot"
      : isRu
      ? "Ответственная медицина"
      : isEn
      ? "Responsible Healthcare"
      : isTr
      ? "Sorumlu tıp,"
      : isAr
      ? "طب مسؤول"
      : "Verantwortungsvolle Medizin",
    leadershipHeading2: isUz
      ? "shifokorlar rahbarligida."
      : isRu
      ? "под руководством врачей."
      : isEn
      ? "Led by Physicians."
      : isTr
      ? "hekim liderliğinde."
      : isAr
      ? "بقيادة استشارية طبية رائدة."
      : "durch ärztliche Führung.",
    leadershipSubtitle: isUz
      ? "NabiOta® Health Group Germany poydevori klinik ekspertiza, mustaqil shifokorlik mas'uliyati va nemis tibbiyot an'analariga asoslangan."
      : isRu
      ? "Фундамент NabiOta® Health Group Germany основан на клиническом авторитете и статусе врача-учредителя (Gründungsberechtigter Vertragsarzt). Медицинский совет гарантирует превосходство в лечении, свободное от коммерческого давления."
      : isEn
      ? "The bedrock of NabiOta® Health Group Germany rests upon clinical integrity and the statutory founder status of licensed physicians. Our clinical board guarantees superior standards of care independent of purely commercial return pressures."
      : isTr
      ? "NabiOta® Health Group Germany'nin temeli, köklü klinik mükemmellik ve yerleşik sözleşmeli hekimlerin yasal kuruculuk yetkisine dayanır. Tıbbi yönetim, ticari getiri baskısından uzak, en yüksek tedavi kalitesini garanti eder."
      : isAr
      ? "يرتكز أساس NabiOta® Health Group Germany على التميز السريري الرفيع والحق التأسيسي القانوني للأطباء المعتمدين. تضمن الإدارة الطبية أعلى معايير جودة الرعاية دون أي ضغوط ربحية تجارية بحتة."
      : "Das Fundament der NabiOta® Health Group Germany basiert auf der klinischen Exzellenz und der gesetzlichen Gründungsberechtigung niedergelassener Vertragsärzte. Die medizinische Leitung sichert höchste Behandlungsqualität frei von rein ökonomischem Renditedruck.",

    founderName: isRu
      ? "Доктор медицины К. Фишер-Рахимов"
      : isUz
      ? "Tibbiyot fanlari doktori K. Fisher-Raximov"
      : isTr
      ? "Tıp Doktoru K. Fischer-Rahimov"
      : isAr
      ? "د. ك. فيشر-رحيموف"
      : "Dr. med. K. Fischer-Rahimov",
    founderRole: isUz
      ? "Xoldingning asoschisi, yagona ta'sischisi va bosh direktori · NabiOta Health Group Germany"
      : isRu
      ? "Основатель, единственный участник и генеральный директор холдинга NabiOta Health Group Germany"
      : isEn
      ? "Founder, Sole Shareholder and Managing Director of the Holding NabiOta Health Group Germany"
      : isTr
      ? "NabiOta Health Group Germany Holdingi Kurucusu, Tek Ortağı ve Genel Müdürü"
      : isAr
      ? "المؤسس والمساهم الوحيد والمدير العام لمجموعة NabiOta Health Group Germany القابضة"
      : "Gründer, Alleingesellschafter und Geschäftsführer der Holding NabiOta Health Group Germany",
    founderBadge: isRu ? "§ 95 Abs. 1a SGB V · Врач-учредитель" : "§ 95 Abs. 1a SGB V · Gründungsarzt",

    founderIntroParagraphs: [
      isUz
        ? "Mening turli mamlakatlardagi shifokorlik faoliyatim tibbiy tajribamni kengaytirdi va turli xil sog'liqni saqlash tuzilmalari haqidagi tushunchamni shakllantirdi. Bu jarayonda bemorlarga yuqori sifatli yordam ko'rsatish nafaqat kasbiy malakani, balki tibbiyot yo'nalishlari o'rtasida yaqin hamkorlikni ham talab qilishi haqidagi qat'iy ishonch paydo bo'ldi."
        : isRu
        ? "Моя врачебная деятельность в различных странах расширила мой медицинский опыт и сформировала понимание различных структур здравоохранения. При этом окрепло убеждение, что качественная помощь пациентам, помимо профессиональной компетентности, требует тесного взаимодействия между различными медицинскими дисциплинами."
        : isEn
        ? "My medical practice in various countries has broadened my clinical experience and shaped my understanding of different healthcare delivery structures. Through this, I developed the firm conviction that good patient care requires not only technical expertise, but also close cooperation between medical disciplines."
        : isTr
        ? "Farklı ülkelerdeki hekimlik faaliyetlerim tıbbi deneyimimi genişletti ve farklı sağlık sistemi yapılarına dair anlayışımı şekillendirdi. Bu süreçte, nitelikli bir hasta bakımının yalnızca mesleki yetkinlik değil, aynı zamanda tıbbi disiplinler arasında yakın bir iş birliği gerektirdiği inancı gelişti."
        : isAr
        ? "لقد وسعت ممارستي الطبية في بلدان مختلفة من خبرتي السريرية وصقلت فهمي لهياكل الرعاية الصحية المتنوعة. ومن هنا ترسخت قناعتي بأن الرعاية المثلى للمرضى لا تتطلب الكفاءة المهنية فحسب، بل تستلزم أيضاً تعاوناً وثيقاً بين مختلف التخصصات الطبية."
        : "Meine ärztliche Tätigkeit in verschiedenen Ländern hat meine medizinische Erfahrung erweitert und mein Verständnis für unterschiedliche Versorgungsstrukturen geprägt. Dabei entwickelte sich die Überzeugung, dass eine gute Patientenversorgung neben fachlicher Kompetenz auch eine enge Zusammenarbeit zwischen den medizinischen Disziplinen braucht.",
      isUz
        ? "Ushbu ishonchdan NabiOta Health Group Germany g'oyasi vujudga keldi: umumiy amaliyot va ixtisoslashtirilgan mutaxassislar tajribasini yagona tashkiliy tizim ostida birlashtirish hamda tibbiy xizmatni bemor manfaatlari nuqtai nazaridan tashkil etish."
        : isRu
        ? "Из этого убеждения родилась идея создания NabiOta Health Group Germany: объединить терапевтические и узкопрофильные врачебные компетенции под единой организационной крышей и выстраивать медицинскую помощь с точки зрения интересов пациента."
        : isEn
        ? "From this conviction arose the idea for NabiOta Health Group Germany: bringing primary and specialized clinical competencies together under a shared organizational roof and shaping healthcare from the patient's perspective."
        : isTr
        ? "Bu inanç doğrultusunda NabiOta Health Group Germany fikri doğdu: Aile hekimliği ve uzman hekimlik yetkinliklerini ortak bir kurumsal çatı altında toplamak ve sağlık hizmetlerini hastanın bakış açısıyla şekillendirmek."
        : isAr
        ? "ومن هذه القناعة ولدت فكرة تأسيس NabiOta Health Group Germany: الجمع بين كفاءات طب الأسرة والطب التخصصي تحت مظلة تنظيمية واحدة، وتصميم منظومة الرعاية من منظور المريض واحتياجاته."
        : "Aus dieser Überzeugung entstand die Idee zur NabiOta Health Group Germany: hausärztliche und fachärztliche Kompetenzen unter einem gemeinsamen organisatorischen Dach zusammenzuführen und die Versorgung aus der Perspektive der Patienten zu gestalten.",
    ],

    founderKeyPoints: [
      {
        title: isRu
          ? "Междисциплинарность"
          : isUz
          ? "Ko'p tarmoqli yordam"
          : isEn
          ? "Interdisciplinary"
          : isTr
          ? "Branşlar Arası Uyum"
          : isAr
          ? "تكامل التخصصات"
          : "Fachübergreifend",
        desc: isRu
          ? "Тесное взаимодействие терапевтов и узких специалистов."
          : isUz
          ? "Umumiy va ixtisoslashgan shifokorlar yaqin hamkorligi."
          : isEn
          ? "Primary & specialist care closely united under one roof."
          : isTr
          ? "Aile ve uzman hekimlerin tek çatı altında iş birliği."
          : isAr
          ? "تعاون وثيق بين أطباء الأسرة والأطباء الاختصاصيين."
          : "Haus- & Fachärzte Hand in Hand unter einem Dach.",
      },
      {
        title: isRu
          ? "Забота о пациенте"
          : isUz
          ? "Bemorga yo'naltirilgan"
          : isEn
          ? "Patient-Centered"
          : isTr
          ? "Hasta Odaklı"
          : isAr
          ? "التركيز على المريض"
          : "Patientenorientiert",
        desc: isRu
          ? "Надежная маршрутизация при сложных и хронических случаях."
          : isUz
          ? "Murakkab va surunkali kasalliklarda ishonchli yo'nalish."
          : isEn
          ? "Dependable guidance for complex & chronic conditions."
          : isTr
          ? "Karmaşık ve kronik rahatsızlıklarda güvenilir rehberlik."
          : isAr
          ? "توجيه موثوق للحالات المعقدة والأمراض المزمنة."
          : "Verlässliche Orientierung bei komplexen & chronischen Fällen.",
      },
      {
        title: isRu
          ? "Врачебная автономия"
          : isUz
          ? "Tibbiy mustaqillik"
          : isEn
          ? "Clinical Autonomy"
          : isTr
          ? "Tıbbi Bağımsızlık"
          : isAr
          ? "استقلالية طبية"
          : "Ärztliche Autonomie",
        desc: isRu
          ? "Полная независимость в медицинских решениях."
          : isUz
          ? "Klinik qarorlarda mustaqil va erkin shifokorlik."
          : isEn
          ? "Strictly independent, non-directive medical directorship."
          : isTr
          ? "Klinik kararlarda talimatsız tam hekimlik özerkliği."
          : isAr
          ? "إدارة طبية حرة ومستقلة تماماً في القرارات العلاجية."
          : "Weisungsfreie medizinische Leitung der Einrichtungen.",
      },
    ],

    founderQuote: isRu
      ? "«Наш руководящий принцип: объединять медицинский опыт, укреплять партнерство и ставить человека в центр внимания.»"
      : isUz
      ? "«Bosh tamoyilimiz: tibbiy tajribani jamlash, hamkorlikni mustahkamlash va insonni markaziy o'ringa qo'yish.»"
      : isEn
      ? "“Our guiding principle: uniting clinical experience, strengthening collaboration, and placing people at the center.”"
      : isTr
      ? "“Temel ilkemiz: Tıbbi deneyimi birleştirmek, iş birliğini güçlendirmek ve insanı merkeze koymak.”"
      : isAr
      ? "«مبدؤنا التوجيهي: حشد الخبرة الطبية، تعزيز التعاون، ووضع الإنسان في قلب كل اهتمام.»"
      : "„Unser Leitgedanke: medizinische Erfahrung bündeln, Zusammenarbeit stärken und den Menschen in den Mittelpunkt stellen.“",

    founderExpandBtn: isRu
      ? "Читать полное обращение"
      : isUz
      ? "To'liq murojaatni o'qish"
      : isEn
      ? "Read Full Statement"
      : isTr
      ? "Tam Metni Oku"
      : isAr
      ? "قراءة البيان الكامل"
      : "Vollständiges Leitbild lesen",

    founderCollapseBtn: isRu
      ? "Свернуть обращение"
      : isUz
      ? "Murojaatni yopish"
      : isEn
      ? "Show Less"
      : isTr
      ? "Daha Az Göster"
      : isAr
      ? "طي البيان"
      : "Weniger anzeigen",

    founderExpandedTitle: isRu
      ? "Подробная концепция помощи и структура ответственности"
      : isUz
      ? "Kengaytirilgan yordam konsepsiyasi va mas'uliyat"
      : isEn
      ? "Comprehensive Care Model & Corporate Governance"
      : isTr
      ? "Kapsamlı Sağlık Modeli ve Kurumsal Yönetim"
      : isAr
      ? "نموذج الرعاية الشامل والحوكمة المؤسسية"
      : "Ausführliches Versorgungskonzept & Verantwortung",

    founderExpandedParagraphs: [
      isUz
        ? "Bizning maqsadimiz - shaxsiylashtirilgan, ko'p tarmoqli va muvofiqlashtirilgan tibbiy parvarish. Birlamchi tibbiy yordamdan boshlab ixtisoslashgan diagnostika va keyingi davolanishgacha barcha xizmatlar o'zaro uzviy bog'lanishi kerak."
        : isRu
        ? "Наша цель - персональное, междисциплинарное и четко скоординированное сопровождение. От первичного амбулаторного приема и специализированной диагностики до последующего лечения - все медицинские звенья должны работать слаженно и гармонично."
        : isEn
        ? "Our objective is personalized, cross-disciplinary, and well-coordinated care. From initial primary consultation through specialized diagnostics to continuous treatment, medical services should meaningfully interlock."
        : isTr
        ? "Amacımız kişiye özel, branşlar arası ve iyi koordine edilmiş bir bakımdır. Temel aile hekimliği hizmetinden ileri uzmanlık tanılarına ve müteakip tedaviye kadar tüm tıbbi hizmetlerin anlamlı bir bütünlük içinde işlemesini hedefliyoruz."
        : isAr
        ? "هدفنا هو تقديم رعاية شخصية، متعددة التخصصات ومنسقة بدقة. فمن الرعاية الأولية إلى التشخيص التخصصي الدقيق وحتى مراحل العلاج المتقدمة، يجب أن تتكامل الخدمات الطبية بشكل متناغم."
        : "Unser Ziel ist eine persönliche, fachübergreifende und gut koordinierte Betreuung. Von der hausärztlichen Erstversorgung über die spezialisierte Diagnostik bis zur weiteren Behandlung sollen medizinische Leistungen sinnvoll ineinandergreifen.",
      isUz
        ? "Ayniqsa murakkab yoki surunkali kasalliklarga chalingan insonlarga ishonchli yo'nalish berishga intilamiz. Tushunarli ma'lumotlar, aniq mas'ul shaxslar va o'zaro muvofiqlashtirilgan davolash bosqichlari bizning tibbiy konsepsiyamiz markazida turadi."
        : isRu
        ? "Особое внимание мы уделяем надежной маршрутизации людей со сложными или хроническими заболеваниями. Доступная информация, понятные контактные лица и согласованные этапы лечения находятся в центре нашей концепции медицинской помощи."
        : isEn
        ? "We place particular emphasis on offering dependable guidance to patients with complex or chronic conditions. Understandable medical information, clear contact partners, and coordinated treatment milestones form the core of our healthcare concept."
        : isTr
        ? "Özellikle karmaşık veya kronik rahatsızlıkları olan bireylere güvenilir bir rehberlik sunmayı amaçlıyoruz. Anlaşılır bilgilendirme, net muhataplar ve birbiriyle uyumlu tedavi basamakları hizmet modelimizin merkezindedir."
        : isAr
        ? "نحرص بشكل خاص على توفير مسار موثوق للأشخاص الذين يعانون من أمراض معقدة أو مزمنة. إن المعلومات الواضحة، والتواصل المباشر مع المسؤولين، والخطوات العلاجية المنسقة تمثل جوهر مفهومنا للرعاية."
        : "Dabei möchten wir insbesondere Menschen mit komplexen oder chronischen Erkrankungen eine verlässliche Orientierung bieten. Verständliche Informationen, klare Ansprechpartner und aufeinander abgestimmte Behandlungsschritte stehen im Mittelpunkt unseres Versorgungskonzepts.",
      isUz
        ? "«Bir tom ostidagi tibbiyot» biz uchun muassasalarimiz va filiallarimiz salohiyatini umumiy tarmoqqa jamlashni anglatadi. Ko'rsatiladigan xizmatlar ko'lami har bir hududdagi ixtisosliklar va litsenziyalarga muvofiq belgilanadi."
        : isRu
        ? "«Медицина под одной крышей» означает для нас объединение потенциала наших учреждений и медицинских центров в единую сеть. Конкретный перечень услуг формируется с учетом специализаций и локальных допусков каждого филиала."
        : isEn
        ? "“Medicine under one roof” means uniting the competencies of our facilities and regional sites into an integrated group. The concrete scope of services is oriented toward the respective specialties and accreditations on site."
        : isTr
        ? "Bizim için 'Tek Çatı Altında Tıp', kurumlarımızın ve merkezlerimizin yetkinliklerini ortak bir ağda bir araya getirmek anlamına gelir. Sunulan hizmetler ilgili lokasyondaki uzmanlık alanlarına ve ruhsatlara göre belirlenir."
        : isAr
        ? "«الطب تحت سقف واحد» يعني بالنسبة لنا توحيد إمكانات مؤسساتنا ومواقعنا ضمن شبكة متكاملة. وتتحدد باقة الخدمات المقدمة وفقاً للتخصصات والتراخيص المعتمدة في كل موقع."
        : "„Medizin unter einem Dach“ bedeutet für uns, die Kompetenzen unserer Einrichtungen und Standorte in einem gemeinsamen Verbund zusammenzubringen. Das konkrete Leistungsangebot richtet sich nach den jeweiligen Fachrichtungen und Zulassungen vor Ort.",
      isUz
        ? "Xoldingning yagona ta'sischisi va bosh direktori sifatida guruhning strategik yo'nalishi va tashkiliy rivojlanishi uchun mas'uliyatni o'z zimmamga olaman. Umumiy tuzilma markazlarimizning kundalik faoliyatini qo'llab-quvvatlash va tibbiy ishlar uchun qulay sharoit yaratishga xizmat qiladi."
        : isRu
        ? "Как единственный участник и генеральный директор холдинга я отвечаю за стратегический вектор и организационное развитие группы компаний. Общая структура призвана поддерживать наши центры в повседневной практике и создавать условия для врачебной работы."
        : isEn
        ? "As sole shareholder and managing director of the holding, I oversee the strategic direction and organizational expansion of the corporate group. The common corporate structure is designed to support our clinics in daily operations and preserve dedicated room for medical practice."
        : isTr
        ? "Holdingin tek ortağı ve genel müdürü olarak şirketler grubunun stratejik yöneliminden ve organizasyonel gelişiminden sorumluyum. Ortak yapı, merkezlerimizi günlük pratikte desteklemek ve hekimlik çalışmalarına alan açmak için vardır."
        : isAr
        ? "بصفتي المساهم الوحيد والمدير العام للمجموعة القابضة، أتولى مسؤولية التوجه الاستراتيجي والتطوير المؤسسي للمجموعة. وتهدف هذه الهيكلية المشتركة إلى دعم مراكزنا في العمل اليومي وتوفير البيئة المثلى للممارسة الطبية."
        : "Als Alleingesellschafter und Geschäftsführer der Holding verantworte ich die strategische Ausrichtung und organisatorische Weiterentwicklung der Unternehmensgruppe. Die gemeinsame Struktur soll unsere Einrichtungen im Praxisalltag unterstützen und Raum für die medizinische Arbeit schaffen.",
      isUz
        ? "Bemorlar oldidagi shifokorlik mas'uliyati asosiy mezon bo'lib qoladi. Har bir tibbiyot markazi (MVZ)ning bosh shifokori klinik masalalarda tijoriy ko'rsatmalardan to'liq mustaqildir."
        : isRu
        ? "Определяющей остается врачебная ответственность перед пациентом. Руководство каждого медицинского центра (MVZ) полностью свободно от сторонних указаний в клинических вопросах (weisungsfrei)."
        : isEn
        ? "The decisive factor remains the clinical responsibility toward the patient. The medical directorship of each respective medical center is strictly independent and free from commercial directives in clinical matters."
        : isTr
        ? "Hastalara karşı hekimlik sorumluluğu daima belirleyici kalır. İlgili Tıbbi Bakım Merkezlerinin (MVZ) tıbbi direktörlüğü klinik konularda talimatsız ve tamamen bağımsızdır."
        : isAr
        ? "تبقى المسؤولية الطبية تجاه المرضى هي المعيار الأساسي والمحدد. وتتمتع الإدارة الطبية في مراكز الرعاية الطبية (MVZ) باستقلالية تامة وحرية كاملة دون أي تعليمات تجارية في القرارات العلاجية."
        : "Maßgeblich bleibt dabei die ärztliche Verantwortung gegenüber den Patienten. Die ärztliche Leitung der jeweiligen Medizinischen Versorgungszentren ist in medizinischen Fragen weisungsfrei.",
    ],
    founderParagraphs: [],

    consultantName: isRu
      ? "Азизбек Фишер-Рахимов (Azizbek Fischer-Rahimov)"
      : isUz
      ? "Azizbek Fisher-Raximov"
      : isAr
      ? "عزيز بيك فيشر-رحيموف (Azizbek Fischer-Rahimov)"
      : "Azizbek Fischer-Rahimov",
    consultantRole: isUz
      ? "Menejer va konsultant"
      : isRu
      ? "Менеджер и консультант"
      : isEn
      ? "Manager and Consultant"
      : isTr
      ? "Yönetici ve Danışman"
      : isAr
      ? "مدير واستشاري"
      : "Manager und Consultant",
    consultantParagraphs: [
      isUz
        ? "Azizbek Fisher-Raximov NabiOta Health Group Germany kompaniyasining tashkiliy va strategik rivojlanishini qo'llab-quvvatlaydi. Uning asosiy yo'nalishi operatsion jarayonlarni muvofiqlashtirish, loyihalarni boshqarish hamda rahbariyat va alohida muassasalar o'rtasidagi hamkorlikni ta'minlashdan iborat."
        : isRu
        ? "Азизбек Фишер-Рахимов сопровождает организационное и стратегическое развитие NabiOta Health Group Germany. В фокусе его работы - координация операционных процессов, сопровождение ключевых проектов и взаимодействие между руководством холдинга и отдельными медицинскими подразделениями."
        : isEn
        ? "Azizbek Fischer-Rahimov supports the organizational and strategic expansion of NabiOta Health Group Germany. His focus lies on coordinating operational workflows, overseeing projects, and facilitating cooperation between executive leadership and individual healthcare centers."
        : isTr
        ? "Azizbek Fischer-Rahimov, NabiOta Health Group Germany'nin kurumsal ve stratejik gelişimini desteklemektedir. Odak noktası; operasyonel süreçlerin koordinasyonu, projelerin takibi ile genel yönetim ve münferit sağlık merkezleri arasındaki iş birliğinin sağlanmasıdır."
        : isAr
        ? "يدعم عزيز بيك فيشر-رحيموف التطوير المؤسسي والاستراتيجي لمجموعة NabiOta Health Group Germany. ويتركز نشاطه على تنسيق العمليات التشغيلية، ومتابعة المشاريع، وتعزيز التعاون بين الإدارة التنفيذية ومختلف المنشآت الطبية التابعة للمجموعة."
        : "Azizbek Fischer-Rahimov unterstützt die organisatorische und strategische Weiterentwicklung der NabiOta Health Group Germany. Sein Schwerpunkt liegt auf der Koordination betrieblicher Abläufe, der Begleitung von Projekten und der Zusammenarbeit zwischen Geschäftsführung und den einzelnen Einrichtungen.",
      isUz
        ? "Ushbu faoliyatning maqsadi - aniq tuzilmalarni shakllantirish, jarayonlar samaradorligini oshirish va kundalik amaliyotda jamoalarni tashkiliy jihatdan yengillatishdir. U tadbirkorlik tafakkurini bemorlarga yo'naltirilgan sog'liqni saqlashning o'ziga xos talablarini chuqur tushunish bilan uyg'unlashtiradi."
        : isRu
        ? "Цель его деятельности - содействие прозрачным структурам, повышение эффективности процессов и организационная разгрузка команд на местах в повседневной практике. Он сочетает предпринимательский подход с пониманием особых требований пациент-ориентированного здравоохранения."
        : isEn
        ? "The goal of his work is to promote clear structures, optimize operating processes, and relieve healthcare teams of administrative burdens in daily practice. He unites entrepreneurial thinking with a deep appreciation for the unique requirements of patient-oriented healthcare."
        : isTr
        ? "Çalışmalarının temel hedefi, net kurumsal yapıları teşvik etmek, süreçleri verimli kılmak ve muayenehane ekiplerinin günlük idari yükünü hafifletmektir. Girişimci yaklaşımını hasta odaklı sağlık hizmetlerinin hassas gereksinimleriyle birleştirmektedir."
        : isAr
        ? "يهدف عمله إلى ترسيخ هياكل واضحة، ورفع كفاءة العمليات التشغيلية، وتخفيف الأعباء الإدارية والتنظيمية عن الكوادر الطبية في الممارسة اليومية، جامعاً بين الفكر الريادي والفهم الدقيق لمتطلبات الرعاية الصحية الموجهة نحو خدمة المريض."
        : "Ziel seiner Arbeit ist es, klare Strukturen zu fördern, Prozesse effizient zu gestalten und die Teams im Praxisalltag organisatorisch zu entlasten. Dabei verbindet er unternehmerisches Denken mit einem Verständnis für die besonderen Anforderungen einer patientenorientierten Gesundheitsversorgung.",
    ],

    boardTitle: isUz
      ? "Shifokorlar kengashi va klinik standartlar"
      : isRu
      ? "Врачебный совет и клинические стандарты"
      : isEn
      ? "Medical Advisory Board & Clinical Standards"
      : isTr
      ? "Tıbbi Danışma Kurulu ve Klinik Yönetişim"
      : isAr
      ? "المجلس الاستشاري الطبي والحوكمة السريرية"
      : "Der Ärztliche Beirat & Klinische Governance",
    boardDesc: isUz
      ? "Xoldingning yetakchi amaliyotchi shifokorlaridan iborat kollegial organ barcha sho'ba korxonalarda davolash protokollari (AWMF ko'rsatmalari) va bemorlar xavfsizligini ta'minlaydi."
      : isRu
      ? "Коллегиальный орган из ведущих практикующих врачей холдинга, определяющий клинические протоколы, контролирующий безопасность пациентов и развивающий образовательные программы."
      : isEn
      ? "A collegial board of leading senior clinicians that defines evidence-based pathways, oversees patient safety, and guides residency programs."
      : isTr
      ? "Kıdemli uzman hekimlerden oluşan disiplinler arası kurul; güncel kılavuzlara uygun tek tip tedavi kalitesini denetler ve uzmanlık eğitimlerini yönetir."
      : isAr
      ? "تضمن الهيئة الاستشارية متعددة التخصصات من كبار الأطباء الاستشاريين جودة رعاية موحدة ومبنية على أحدث الأدلة الطبية وتوجه برامج تدريب الأطباء."
      : "Das interdisziplinäre Kollegium aus leitenden Fachärzten sichert die einheitliche Behandlungsqualität nach aktuellen Leitlinien und steuert die Weiterbildung.",

    valuesEyebrow: isUz
      ? "BIZNING QADRIYATLARIMIZ"
      : isRu
      ? "НАШИ ЦЕННОСТИ"
      : isEn
      ? "OUR VALUES"
      : isTr
      ? "DEĞERLERİMİZ"
      : isAr
      ? "قيمنا الجوهرية"
      : "UNSERE WERTE",
    valuesHeading: isUz
      ? "Bizni nima o'ziga xos qiladi."
      : isRu
      ? "Что делает нас особенными."
      : isEn
      ? "What sets us apart."
      : isTr
      ? "Bizi özel kılan nedir?"
      : isAr
      ? "ما يميزنا ويصنع تفردنا"
      : "Das macht uns besonders.",

    val1Title: isUz
      ? "Ishonchli hamkor"
      : isRu
      ? "Надежный партнер"
      : isEn
      ? "Reliable Partner"
      : isTr
      ? "Güvenilir Ortak"
      : isAr
      ? "شريك موثوق"
      : "Verlässlicher Partner",
    val1Desc: isUz
      ? "O'zaro ishonch, ishonchlilik va umumiy maqsadlarga asoslangan uzoq muddatli hamkorlik."
      : isRu
      ? "Долгосрочное партнерство, основанное на взаимном доверии и уважении."
      : isEn
      ? "Long-term partnership built on mutual trust and respect."
      : isTr
      ? "Eşitler arası ve karşılıklı güvene dayalı uzun vadeli ortaklık."
      : isAr
      ? "شراكة استراتيجية طويلة الأمد تقوم على التقدير والثقة المتبادلة."
      : "Langfristige Partnerschaft auf Augenhöhe und gegenseitigem Vertrauen.",
    val2Title: isUz
      ? "Innovatsion yechimlar"
      : isRu
      ? "Инновационные решения"
      : isEn
      ? "Innovative Solutions"
      : isTr
      ? "Yenilikçi Çözümler"
      : isAr
      ? "حلول مبتكرة"
      : "Innovative Lösungen",
    val2Desc: isUz
      ? "Zamonaviy, barqaror va uzoqni ko'zlagan sog'liqni saqlash tizimini rivojlantirish."
      : isRu
      ? "Продвижение современного, устойчивого и дальновидного здравоохранения."
      : isEn
      ? "Advancing modern, resilient, and forward-looking healthcare."
      : isTr
      ? "Modern, sürdürülebilir ve ileriye dönük sağlık hizmetleri."
      : isAr
      ? "منظومة رعاية صحية حديثة ومستدامة واستشرافية للمستقبل."
      : "Moderne, zukunftsfähige und vorausschauende Gesundheitsversorgung.",
    val3Title: isUz
      ? "Jonli mas'uliyat"
      : isRu
      ? "Живая ответственность"
      : isEn
      ? "Living Responsibility"
      : isTr
      ? "Yaşayan Sorumluluk"
      : isAr
      ? "مسؤولية حية"
      : "Gelebte Verantwortung",
    val3Desc: isUz
      ? "Biz qilayotgan barcha ishlarda sifat, shaffoflik va insonparvarlik tamoyillariga sodiqlik."
      : isRu
      ? "Качество, прозрачность и человечность во всем, что мы делаем."
      : isEn
      ? "Quality, transparency, and humanity in everything we do."
      : isTr
      ? "Tüm eylemlerimizde kalite, şeffaflık ve insani duyarlılık."
      : isAr
      ? "جودة، شفافية، وإنسانية متأصلة في كل إجراء نقوم به."
      : "Qualität, Transparenz und Menschlichkeit in unserem gesamten Handeln.",
    val4Title: isUz
      ? "Insonlar kamoloti"
      : isRu
      ? "Развитие людей"
      : isEn
      ? "People Development"
      : isTr
      ? "Çalışan Gelişimi"
      : isAr
      ? "تطوير الكفاءات"
      : "Mitarbeiterförderung",
    val4Desc: isUz
      ? "Kuchli jamoa va sog'lom kelajak uchun xodimlarimizni qo'llab-quvvatlash va iste'dodlarni rivojlantirish."
      : isRu
      ? "Поддержка наших сотрудников и взращивание талантов для сильного будущего."
      : isEn
      ? "Empowering our staff and fostering talent for a strong tomorrow."
      : isTr
      ? "Güçlü bir gelecek için uzmanların ve potansiyellerin hedefe yönelik desteklenmesi."
      : isAr
      ? "تمكين مستمر للكوادر المتخصصة وصقل المواهب لغدٍ واعد."
      : "Gezielte Förderung von Fachkräften und Potenzialen für eine starke Zukunft.",

    ctaEyebrow: isUz
      ? "SOG'LOM KELAJAKNI BIRGALIKDA YARATAMIZ"
      : isRu
      ? "СОЗИДАЕМ ЗДОРОВОЕ БУДУЩЕЕ"
      : isEn
      ? "LET'S BUILD A HEALTHIER TOMORROW"
      : isTr
      ? "BİRLİKTE SAĞLIĞI ŞEKİLLENDİRELİM"
      : isAr
      ? "معاً نصنع مستقبل الصحة"
      : "GEMEINSAM GESUNDHEIT GESTALTEN",
    ctaHeading: isUz
      ? "Sog'lom kelajak yo'lida bizning hamkorimizga aylaning."
      : isRu
      ? "Станьте нашим партнером во имя здорового будущего."
      : isEn
      ? "Partner with us for a healthier future."
      : isTr
      ? "Daha sağlıklı bir geleceği bizimle birlikte inşa edin."
      : isAr
      ? "شاركنا في صياغة مستقبل صحي أكثر أماناً وإشراقاً."
      : "Gestalten Sie mit uns eine gesündere Zukunft.",
    ctaBtn: isUz
      ? "Biz bilan bog'lanish →"
      : isRu
      ? "Связаться с нами →"
      : isEn
      ? "Get in Touch →"
      : isTr
      ? "İletişime Geçin →"
      : isAr
      ? "تواصل معنا ←"
      : "Kontakt aufnehmen →",
  };
}

export function getAboutOrganigramColumns(locale: SupportedLocale): OrganigramColumn[] {
  const isUz = locale === "uz";
  const isEn = locale === "en";
  const isRu = locale === "ru";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  return [
    {
      colTitle: isUz
        ? "Ambulator va statsionar tibbiyot"
        : isRu
        ? "Амбулаторная и стационарная медицина"
        : isEn
        ? "Primary & Inpatient Medicine"
        : isTr
        ? "Ayakta ve Yatan Hasta Tıbbı"
        : isAr
        ? "الطب المتنقل والسريري"
        : "Ambulante & Stationäre Medizin",
      items: [
        {
          name: "“NabiOta” MVZ Zentrum für hausärztliche und fachärztliche Versorgung",
          sub: isUz
            ? "Oilaviy shifokorlik va ixtisoslashtirilgan tibbiy yordam"
            : isRu
            ? "Первичная и специализированная медицинская помощь"
            : isEn
            ? "Primary and specialist medical care"
            : isTr
            ? "Birinci basamak ve uzman hekimlik hizmetleri"
            : isAr
            ? "الرعاية الطبية الأولية والمتخصصة"
            : "Hausärztliche und fachärztliche Versorgung",
          badge: "§ 95 SGB V",
          href: `/${locale}/mvz-hausarzt-facharzt`,
          iconKey: "stethoscope" as const,
        },
        {
          name: "“NabiOta” Klinik Germany GmbH",
          sub: isUz
            ? "Tibbiy klinika (§ 30 GewO bo'yicha) - statsionar, kunduzgi va ambulator jarrohlik o'rinlari"
            : isRu
            ? "Медицинская клиника (по § 30 GewO) - стационарные, дневные и операционные центры"
            : isEn
            ? "Inpatient & Specialty Clinic (acc. to § 30 GewO) - Inpatient surgery & recovery"
            : isTr
            ? "Klinik Germany GmbH (§ 30 KH / GewO uyarınca) - Yataklı, günübirlik ve cerrahi tedavi merkezleri"
            : isAr
            ? "Klinik Germany GmbH (وفق § 30 GewO) - رعاية استشفائية سريرية وجراحية متكاملة"
            : "Klinik Germany GmbH (n. § 30 KH / GewO) - Stationäre, teilstationäre & operative Versorgung",
          badge: "§ 30 GewO",
          href: `/${locale}/nabiota-clinics-germany`,
          iconKey: "clinic" as const,
        },
        {
          name: "“NabiOta” Rehabilitation Center",
          sub: isUz
            ? "Reabilitatsiya va terapiya markazi (Rehabilitation & Therapy GmbH) - ambulator harakat va nevrologik reabilitatsiya"
            : isRu
            ? "Центр реабилитации и терапии (Rehabilitation & Therapy GmbH) - физиотерапия, эрготерапия, логопедия"
            : isEn
            ? "Rehabilitation & Therapy Center - Physiotherapy, Occupational & Speech therapy"
            : isTr
            ? "Rehabilitasyon ve Terapi Merkezi (GmbH) - Fizyoterapi, Ergoterapi, Logopedi ve Medikal Egzersiz Terapisi"
            : isAr
            ? "مركز إعادة التأهيل والعلاج (GmbH) - علاج طبيعي، علاج وظيفي، علاج النطق، وتمارين تأهيلية"
            : "Rehabilitation & Therapy Center (GmbH) - Physiotherapie, Ergotherapie, Logopädie & MTT",
          badge: isTr ? "Ayakta Reha" : isAr ? "تأهيل متنقل" : "Ambulante Reha",
          href: `/${locale}/nabiota-rehabilitation`,
          iconKey: "rehab" as const,
        },
      ],
    },
    {
      colTitle: isUz
        ? "Jarrohlik, diagnostika va parvarish"
        : isRu
        ? "Хирургия, диагностика и уход"
        : isEn
        ? "Surgery, Diagnostics & Care"
        : isTr
        ? "Cerrahi, Tanı ve Bakım"
        : isAr
        ? "الجراحة، التشخيص، والرعاية"
        : "Chirurgie, Diagnostik & Pflege",
      items: [
        {
          name: "“NabiOta” MVZ Chirurgie und Anästhesiologie",
          sub: isUz
            ? "Jarrohlik va anesteziologiya mutaxassisliklari"
            : isRu
            ? "Хирургические направления и анестезиология"
            : isEn
            ? "Surgical specialties and anesthesiology"
            : isTr
            ? "Cerrahi uzmanlıklar ve anesteziyoloji"
            : isAr
            ? "التخصصات الجراحية والتخدير"
            : "Chirurgische Fachbereiche und Anästhesiologie",
          badge: isTr ? "Ayakta Cerrahi" : isAr ? "جراحة اليوم الواحد" : "Ambulante OP",
          href: "https://my-bandscheibe.de/",
          iconKey: "surgery" as const,
        },
        {
          name: "“NabiOta” Diagnostics GmbH",
          sub: isUz
            ? "Yuqori texnologiyali diagnostika: 3T MRT, Low-Dose KT, raqamli rentgen va ultratovush tekshiruvlari"
            : isRu
            ? "Высокотехнологичная диагностика: МРТ 3T, КТ Low-Dose, цифровой рентген, нейрофизиология (ЭМГ/ЭЭГ) и лабораторная логистика"
            : isEn
            ? "Advanced Diagnostics: 3T MRI, Low-Dose CT, X-ray, Neurophysiology (EMG/EEG) & Lab logistics"
            : isTr
            ? "Diagnostics GmbH (3T BT + MRG + Röntgen + Nörofizyoloji & Laboratuvar numune lojistiği)"
            : isAr
            ? "Diagnostics GmbH (أشعة مقطعية + 3T MRI + أشعة سينية + فسيولوجيا عصبية وإدارة العينات المخبرية)"
            : "Diagnostics GmbH (CT + MRT 3T + Rö + Neurophysiologie & Labor-Probenmanagement)",
          badge: "3T MRT / CT",
          href: `/${locale}/nabiota-diagnostics`,
          iconKey: "diagnostics" as const,
        },
        {
          name: "“NabiOta” HomeCare GmbH",
          sub: isUz
            ? "Patronaj va uyda parvarishlash: malakali hamshiralik yordami, intensiv parvarish va SGB XI bo'yicha kunduzgi parvarish"
            : isRu
            ? "Патронаж и уход на дому: квалифицированная сестринская помощь и специализированное лечение ран (Wundversorgung)"
            : isEn
            ? "In-Home Nursing Care: Qualified outpatient nursing & specialized wound care"
            : isTr
            ? "HomeCare GmbH (SGB V & XI uyarınca nitelikli hasta bakımı / uzmanlaşmış yara tedavisi)"
            : isAr
            ? "HomeCare GmbH (تمريض تخصصي معتمد / علاج متقدم للجروح وفق SGB V & XI)"
            : "HomeCare GmbH (Qualifizierte Pflege / spezialisierte Wundversorgung nach SGB V & XI)",
          badge: "HomeCare",
          href: `/${locale}/nabiota-homecare`,
          iconKey: "homecare" as const,
        },
      ],
    },
    {
      colTitle: isUz
        ? "Kadrlar, ko'chmas mulk va ta'minot"
        : isRu
        ? "Кадры, недвижимость и снабжение"
        : isEn
        ? "Recruitment, Real Estate & Supplies"
        : isTr
        ? "İstihdam, Gayrimenkul ve Tedarik"
        : isAr
        ? "الكوادر، العقارات، والإمداد"
        : "Personal, Immobilien & Versorgung",
      items: [
        {
          name: "“NabiOta” Medical Recruitment",
          sub: isUz
            ? "Tibbiy rekruting xizmati (GmbH) - xalqaro shifokorlar va malakali hamshiralarni jalb qilish hamda Approbation dasturi"
            : isRu
            ? "Служба медицинского рекрутинга (GmbH) - привлечение врачей и медперсонала, нострификация и Approbation"
            : isEn
            ? "Medical Recruitment Services GmbH - Healthcare staffing & degree recognition (Approbation)"
            : isTr
            ? "Medical Recruitment Services GmbH (Tıbbi aracılık hizmeti & Approbation ruhsat refakati)"
            : isAr
            ? "Medical Recruitment Services GmbH (استقطاب الكوادر الطبية ومعادلة ترخيص Approbation)"
            : "Medical Recruitment Services GmbH (Med. Vermittlungsservice & Approbationsbegleitung)",
          badge: isTr ? "Uzman İstihdamı" : isAr ? "استقطاب الكوادر" : "Recruitment",
          href: `/${locale}/nabiota-medical-recruitment`,
          iconKey: "recruitment" as const,
        },
        {
          name: "“NabiOta” Real Estate GmbH",
          sub: isUz
            ? "Tibbiy ko'chmas mulk - sog'liqni saqlash ob'ektlarini ishlab chiqish, qayta rejalashtirish va boshqarish"
            : isRu
            ? "Медицинская недвижимость - девелопмент, перепланировка и управление специализированными зданиями клиник и MVZ"
            : isEn
            ? "Medical Real Estate GmbH - Acquisition, clinic construction & medical facility management"
            : isTr
            ? "Real Estate GmbH (Medikal gayrimenkul, klinik planlama ve işletme konseptleri)"
            : isAr
            ? "Real Estate GmbH (العقارات الطبية، تطوير العيادات، ومفاهيم التشغيل)"
            : "Real Estate GmbH (Med. Immobilien, Praxisentwicklung & Betreiberkonzepte)",
          badge: isTr ? "Medikal Gayrimenkul" : isAr ? "العقارات الطبية" : "Real Estate",
          href: `/${locale}/nabiota-real-estate`,
          iconKey: "real-estate" as const,
        },
        {
          name: "“NabiOta” Sanitätshaus & Apotheke",
          sub: isUz
            ? "Ortopediya salonlari (Sanitätshaus GmbH), tibbiy texnika va dori-darmon ta'minoti bilan integratsiya"
            : isRu
            ? "Ортопедические салоны (Sanitätshaus GmbH), обеспечение медикаментами клиник и NabiOta Pharmacy"
            : isEn
            ? "Medical Supplies & NabiOta Pharmacy - Orthopedic aids, rehab products & clinical pharmacy"
            : isTr
            ? "İlaç Tedariki & Sanitätshaus GmbH (Medikal ortopedi araçları & NabiOta Eczanesi)"
            : isAr
            ? "الإمداد الدوائي وSanitätshaus GmbH (المعينات الطبية التعويضية وصيدلية NabiOta)"
            : "Arzneimittelversorgung & Sanitätshaus GmbH (Med. Hilfsmittel & NabiOta Pharmacy)",
          badge: isTr ? "Medikal Malzeme & Eczane" : isAr ? "معينات وصيدلية" : "Supplies & Pharmacy",
          href: `/${locale}/nabiota-sanitaetshaus`,
          iconKey: "pharmacy" as const,
        },
      ],
    },
  ];
}
