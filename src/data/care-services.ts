import type { SupportedLocale } from "@/lib/i18n";

export interface CareServiceModalData {
  id: string;
  badge: string;
  image: string;
  iconType:
    | "stethoscope"
    | "award"
    | "heart"
    | "shield"
    | "pill"
    | "users"
    | "accessibility"
    | "home";
  title: string;
  shortDesc: string;
  modal: {
    title: string;
    subtitle: string;
    description: string;
    indicationsTitle: string;
    indications: string[];
    scopeTitle: string;
    scopeItems: string[];
    billingTitle: string;
    billingText: string;
    qualityTitle: string;
    qualityText: string;
    ctaButtonText: string;
  };
}

function localeFlags(locale: SupportedLocale) {
  return {
    isUz: locale === "uz",
    isRu: locale === "ru",
    isEn: locale === "en",
    isTr: locale === "tr",
    isAr: locale === "ar",
  };
}

export function getHomeCareServices(
  locale: SupportedLocale,
): CareServiceModalData[] {
  const { isUz, isRu, isEn, isTr, isAr } = localeFlags(locale);
  return [
    {
      id: "behandlungspflege",
      badge: isUz
        ? "SGB V • SHIFOKOR KO'RSATMASI"
        : isRu
        ? "SGB V • НАЗНАЧЕНИЕ ВРАЧА"
        : isEn
        ? "SGB V • MEDICAL PRESCRIPTION"
        : isTr
        ? "SGB V • DOKTOR REÇETESİ"
        : isAr
        ? "SGB V • وصفة طبية معتمدة"
        : "SGB V • ÄRZTLICHE VERORDNUNG",
      image: "/images/care/behandlungspflege.webp",
      iconType: "stethoscope",
      title: isUz
        ? "Tibbiy davolash parvarishi (SGB V)"
        : isRu
        ? "Медицинский уход & процедуры (SGB V)"
        : isEn
        ? "Clinical Treatment Nursing (SGB V)"
        : isTr
        ? "Tedavi Bakımı & Tıbbi Uygulamalar (SGB V)"
        : isAr
        ? "الرعاية الطبية والعلاجية الموصوفة (SGB V)"
        : "Behandlungspflege & Med. Versorgung (SGB V)",
      shortDesc: isUz
        ? "Shifokor ko'rsatmasi bo'yicha tibbiy muolajalarni malakali bajarish: inyeksiyalar, infuziyalar, dori vositalarini berish, kompressiya terapiyasi va hayotiy ko'rsatkichlar nazorati."
        : isRu
        ? "Квалифицированное выполнение медицинских назначений врача: инъекции, инфузии, выдача лекарств, компрессионная терапия и контроль показателей."
        : isEn
        ? "Professional clinical nursing according to physician orders: injections, infusions, medication administration, compression therapy, and vital monitoring."
        : isTr
        ? "Reçeteli tıbbi işlemlerin uzman hemşirelerce uygulanması: enjeksiyonlar, infüzyonlar, ilaç dağıtımı, kompresyon tedavisi ve vital bulgu takibi."
        : isAr
        ? "تنفيذ الإجراءات الطبية الموصوفة من قبل ممرضين معتمدين: الحقن، المحاليل الوريدية، إعطاء الأدوية، العلاج بالضغط ومراقبة المؤشرات الحيوية."
        : "Fachgerechte Durchführung verordneter medizinischer Maßnahmen wie Injektionen, Infusionen, Medikamentengabe, Kompressionstherapie und Vitalzeichenkontrollen.",
      modal: {
        title: isUz
          ? "Uyda tibbiy parvarish va davolash (SGB V)"
          : isRu
          ? "Медицинская помощь и лечение на дому (SGB V)"
          : isEn
          ? "Home Treatment Nursing & Clinical Procedures (SGB V)"
          : isTr
          ? "Evde Tedavi ve Tıbbi Hemşirelik Bakımı (SGB V)"
          : isAr
          ? "التمريض المنزلي والرعاية الطبية العلاجية (SGB V)"
          : "Häusliche Krankenpflege & Behandlungspflege (SGB V)",
        subtitle: isUz
          ? "Diplomli hamshiralar nazorati ostida shifokor ko'rsatmalarini bajarish"
          : isRu
          ? "Врачебные назначения под контролем дипломированных медсестер"
          : isEn
          ? "Physician-prescribed home nursing under certified clinical oversight"
          : isTr
          ? "Diplomalı uzman hemşireler gözetiminde hekim direktiflerinin uygulanması"
          : isAr
          ? "تنفيذ تعليمات الطبيب في المنزل تحت إشراف تمريضي متخصص"
          : "Fachpflegerische Durchführung ärztlicher Anordnungen im vertrauten Zuhause",
        description: isUz
          ? "§ 37 SGB V bo'yicha davolash parvarishi ambulator davolanishni kafolatlash yoki shifoxonada yotish muddatini qisqartirish uchun davolovchi shifokor tomonidan buyurilgan barcha tibbiy choralarni o'z ichiga oladi. Bizning davlat imtihonidan o'tgan hamshiralarimiz barcha ko'rsatmalarni eng yuqori sifat va gigiyena standartlarida bajaradilar va davolovchi shifokorlar bilan bevosita muloqotda bo'ladilar."
          : isRu
          ? "Лечебный уход по § 37 SGB V включает все медицинские процедуры, назначенные лечащим врачом или специалистом MVZ для ускорения выздоровления, предотвращения осложнений или сокращения пребывания в стационаре. Наши специалисты строго соблюдают протоколы безопасности и поддерживают постоянный контакт с лечащим доктором."
          : isEn
          ? "Treatment nursing under § 37 SGB V encompasses all clinical interventions prescribed by attending general practitioners or hospital specialists to support recovery, prevent complications, or shorten inpatient hospital stays. Our certified nurses maintain strict aseptic protocols and direct communication with physicians."
          : isTr
          ? "SGB V § 37 kapsamındaki tedavi bakımı, hastanede kalış süresini kısaltmak veya evde iyileşmeyi güvenceye almak için hekim tarafından reçete edilen tüm klinik müdahaleleri içerir. Uzman hemşirelerimiz tüm uygulamaları en yüksek hijyen standartlarında ve hekimlerle doğrudan koordinasyon halinde yürütür."
          : isAr
          ? "تشمل الرعاية العلاجية وفق المادة § 37 SGB V جميع الإجراءات الطبية الموصوفة من طبيب الأسرة أو الأخصائي لضمان نجاح العلاج أو تجنب الإقامة في المستشفى. ينفذ كادرنا التمريضي المتخصص كافة التعليمات وفق أعلى معايير الجودة والتعقيم وبالتنسيق المباشر مع الأطباء."
          : "Die Behandlungspflege nach § 37 SGB V umfasst alle vom Haus- oder Facharzt verordneten medizinischen Maßnahmen, die der Sicherung der ambulanten ärztlichen Behandlung dienen oder einen Krankenhausaufenthalt verkürzen bzw. vermeiden. Unsere examinierten Pflegefachkräfte führen alle Verordnungen nach strengsten Qualitäts- und Hygienestandards durch und stehen im direkten Austausch mit den behandelnden Ärzten.",
        indicationsTitle: isUz ? "Tibbiy ko'rsatmalar" : isRu ? "Медицинские показания" : isEn ? "Clinical Indications" : isTr ? "Tıbbi Endikasyonlar" : isAr ? "دواعي الرعاية النموذجية" : "Typische Indikationen",
        indications: isUz
          ? [
              "Insulin talab qiluvchi 1 va 2-tur qandli diabet va qon shakarini o'lchash",
              "Qon bosimi va pulsni qat'iy nazorat qilishni talab qiluvchi yurak-qon tomir kasalliklari",
              "Antikoagulyant terapiya va teri ostiga geparin inyeksiyalari (s.c. / i.m.)",
              "Murakkab dori-darmon terapiyasi va nazoratli dori tayyorlash hamda berish",
              "Kompressiya terapiyasi bilan surunkali venoz yetishmovchilik (I-IV sinf)",
              "Ambulator va statsionar jarrohlik amaliyotlaridan keyingi operatsiyadan keyingi kuzatuv",
            ]
          : isRu
          ? [
              "Инсулинотерапия и сахарный диабет I и II типа",
              "Артериальная гипертензия и кардиоваскулярные заболевания",
              "Антикоагулянтная терапия и инъекции гепарина",
              "Хронические боли и необходимость регулярного приема препаратов",
              "Хроническая венозная недостаточность и отеки конечностей",
              "Послеоперационный период после выписки из стационара",
            ]
          : isEn
          ? [
              "Insulin-dependent diabetes mellitus type I & II",
              "Arterial hypertension and cardiovascular conditions",
              "Anticoagulation therapy and regular heparin injections",
              "Chronic pain syndromes requiring structured analgesics",
              "Chronic venous insufficiency, lymphoedema, and compression therapy",
              "Post-surgical recovery requiring professional clinical surveillance",
            ]
          : isTr
          ? [
              "İnsülin bağımlı Tip 1 ve 2 Diyabet ve kan şekeri takibi",
              "Düzenli tansiyon ve nabız kontrolü gerektiren kardiyovasküler hastalıklar",
              "Antikoagülasyon tedavisi ve subkutan heparin enjeksiyonları (s.c. / i.m.)",
              "Karmaşık ilaç tedavileri, kontrollü ilaç hazırlama ve verme",
              "Kompresyon tedavisi gerektiren kronik venöz yetmezlik (Sınıf I-IV)",
              "Ayakta veya yatarak ameliyatlar sonrası ameliyat sonrası takip",
            ]
          : isAr
          ? [
              "داء السكري من النوع 1 و2 المعتمد على الأنسولين وقياس السكر",
              "أمراض القلب والأوعية الدموية ومراقبة ضغط الدم والنبض بدقة",
              "علاج تخثر الدم وحقن الهيبارين تحت الجلد (s.c. / i.m.)",
              "العلاجات الدوائية المعقدة وترتيب وتوزيع الجرعات بدقة",
              "القصور الوريدي المزمن والعلاج بالضغط الطبي (الفئات I-IV)",
              "المراقبة الطبية بعد العمليات الجراحية للمرضى الداخليين والخارجيين",
            ]
          : [
              "Insulinpflichtiger Diabetes mellitus Typ 1 und 2 mit Blutzuckermessung",
              "Kardiovaskuläre Erkrankungen mit engmaschiger Blutdruck- und Pulskontrolle",
              "Antikoagulationstherapie und subkutane Heparininjektionen (s.c. / i.m.)",
              "Komplexe medikamentöse Therapien und kontrolliertes Richten / Verabreichen",
              "Chronische venöse Insuffizienz mit Kompressionstherapie (Klasse I-IV)",
              "Postoperative Überwachung nach ambulanten und stationären Eingriffen",
            ],
        scopeTitle: isUz ? "Tibbiy xizmatlar ko'lami" : isRu ? "Спектр медицинских услуг" : isEn ? "Scope of Interventions" : isTr ? "Hizmet Yelpazesi" : isAr ? "نطاق الخدمات التمريضية" : "Leistungsspektrum",
        scopeItems: isUz
          ? [
              "Inyeksiyalar (s.c. va i.m.) hamda shifokor buyurgan infuziyalarni monitoring qilish",
              "Tayinlangan dori vositalarini dozirovka qilish, tartibga solish va berish",
              "Qon shakari darajasini nazorat qilish va ehtiyojga ko'ra insulin yuborish",
              "Kompressiya bog'lamalarini qo'yish/almashtirish va kompressiya paypoqlarini kiyish/yechish",
              "Hayotiy ko'rsatkichlarni (qon bosimi, puls, kislorod saturatsiyasi) doimiy nazorat qilish",
              "Drenajlarni nazorat qilish va parvarish hisobotida holatni to'liq hujjatlashtirish",
            ]
          : isRu
          ? [
              "Инъекции (подкожные, внутримышечные) и капельные инфузии",
              "Раскладка, контроль и выдача медикаментов по рецепту",
              "Контроль уровня сахара в крови и адаптация дозировок инсулина",
              "Наложение компрессионных бинтов и надевание компрессионного трикотажа",
              "Регулярное измерение артериального давления, пульса и насыщения кислородом",
              "Контроль дренажей, катетеров и ведение карты состояния здоровья",
            ]
          : isEn
          ? [
              "Subcutaneous and intramuscular injections; peripheral infusions",
              "Structured medication preparation, dispensing, and compliance tracking",
              "Capillary blood glucose testing and targeted insulin administration",
              "Application of medical compression wraps and compression stockings",
              "Routine monitoring of vital parameters (BP, heart rate, oxygen saturation)",
              "Drainage surveillance, catheter care, and electronic nursing records",
            ]
          : isTr
          ? [
              "Enjeksiyonlar (s.c. ve i.m.) ve reçeteli infüzyonların takibi",
              "Reçeteli ilaçların hazırlanması, dozajı ve hastaya verilmesi",
              "Kan şekeri ölçümleri ve ihtiyaca göre insülin uygulaması",
              "Kompresyon bandajlarının sarılması/değişimi ve varis çoraplarının giydirilmesi",
              "Sürekli vital bulgu takibi (tansiyon, nabız, oksijen satürasyonu)",
              "Drenaj takibi ve bakım raporunda eksiksiz durum dokümantasyonu",
            ]
          : isAr
          ? [
              "الحقن (تحت الجلد وفي العضل) ومراقبة المحاليل الوريدية الموصوفة",
              "تجهيز الأدوية الموصوفة وتحديد جرعاتها وتقديمها في مواعيدها",
              "مراقبة مستويات السكر بالدم وحقن الأنسولين وفق الحاجة",
              "تطبيق وتغيير الضمادات الضاغطة وارتداء/نزع الجوارب الطبية الضاغطة",
              "مراقبة المؤشرات الحيوية بانتظام (ضغط الدم، النبض، نسبة الأكسجين)",
              "متابعة مصارف السوائل الجراحية (الدِرَن) والتوثيق الدقيق في التقرير التمريضي",
            ]
          : [
              "Injektionen (s.c. und i.m.) sowie Überwachung ärztlich angeordneter Infusionen",
              "Richten, Dosieren und Verabreichen von verordneten Arzneimitteln",
              "Blutzuckerkontrollen und bedarfsgerechte Insulininjektion",
              "Anlegen und Wechseln von Kompressionsverbänden sowie An-/Ausziehen von Kompressionsstrümpfen",
              "Kontinuierliche Vitalzeichenkontrolle (Blutdruck, Puls, Sauerstoffsättigung)",
              "Überwachung von Drainagen und lückenlose Verlaufsdokumentation im Pflegebericht",
            ],
        billingTitle: isUz ? "Xarajatlarni qoplash va retsept" : isRu ? "Финансирование и кассы" : isEn ? "Insurance & Coverage" : isTr ? "Gider Karşılama ve Reçete" : isAr ? "تغطية التكاليف والوصفة الطبية" : "Kostenübernahme & Verordnung",
        billingText: isUz
          ? "Tibbiy parvarish xarajatlari uyda tibbiy parvarish bo'yicha shifokor retsepti (Muster 12) mavjud bo'lganda, tasdiqlangandan so'ng davlat (GKV) va xususiy (PKV) tibbiy sug'urta kassalari tomonidan 100% to'liq qoplanadi. NabiOta HomeCare barcha rasmiylashtirish va tasdiqlash jarayonini o'z zimmasiga oladi."
          : isRu
          ? "Все услуги медицинской помощи (SGB V) на 100% покрываются государственными (GKV) и частными (PKV) страховыми кассами Германии при наличии рецепта врача (Muster 12). Мы берем на себя полное согласование с вашей страховой компанией."
          : isEn
          ? "All prescribed clinical services under SGB V are covered by statutory (GKV) and private (PKV) health insurance funds with a valid physician prescription (Muster 12). We handle all administrative clearance with your insurance provider."
          : isTr
          ? "Tedavi bakımı masrafları, hekim tarafından evde sağlık hizmeti reçetesi (Muster 12) düzenlenmesi halinde tüm yasal (GKV) ve özel (PKV) sağlık sigortaları tarafından %100 karşılanır. NabiOta HomeCare tüm onay ve başvuru sürecini sizin adınıza yürütür."
          : isAr
          ? "تُغطى تكاليف الرعاية العلاجية بنسبة 100% من قبل صناديق التأمين الصحي الحكومية (GKV) والخاصة (PKV) بموجب وصفة طبية (Muster 12). تتولى NabiOta HomeCare إجراءات التقديم والحصول على الموافقات بالكامل نيابة عنكم."
          : "Die Kosten der Behandlungspflege werden bei Vorliegen einer ärztlichen Verordnung häuslicher Krankenpflege (Muster 12) nach Genehmigung vollständig von den gesetzlichen (GKV) und privaten (PKV) Krankenkassen übernommen. NabiOta HomeCare übernimmt für Sie die gesamte Einreichung und Genehmigungsabstimmung.",
        qualityTitle: isUz ? "Xavfsizlik va sifat standartlari" : isRu ? "Стандарты безопасности" : isEn ? "Quality & Safety" : isTr ? "Kalite ve Güvenlik Standartları" : isAr ? "معايير الجودة والسلامة" : "Qualitäts- & Sicherheitsstandards",
        qualityText: isUz
          ? "Muolajalar faqatgina davlat tomonidan imtihondan o'tgan diplomli hamshiralar tomonidan Robert Koch Instituti (RKI) gigiyena ko'rsatmalariga qat'iy rioya qilgan holda bajariladi."
          : isRu
          ? "Процедуры проводятся исключительно государственно экзаменованными медицинскими сестрами в строгом соответствии с санитарно-эпидемиологическими стандартами Института Роберта Коха (RKI)."
          : isEn
          ? "Procedures are delivered exclusively by licensed, state-certified registered nurses strictly adhering to the infection control guidelines of the Robert Koch Institute (RKI)."
          : isTr
          ? "Hizmetler yalnızca diplomalı ve sınavlı hemşireler tarafından Robert Koch Enstitüsü (RKI) hijyen kılavuzlarına sıkı sıkıya bağlı kalınarak sunulur."
          : isAr
          ? "تُقدم الخدمات حصرياً من قبل ممرضين مجازين رسمياً ومعتمدين، مع الالتزام الصارم بإرشادات التعقيم الصادرة عن معهد روبرت كوخ (RKI)."
          : "Die Leistungen werden ausnahmslos durch staatlich examinierte Pflegefachkräfte erbracht. Strenge Einhaltung der Hygiene-Richtlinien des Robert Koch-Instituts (RKI) und regelmäßige Fortbildungen garantieren maximale Behandlungssicherheit.",
        ctaButtonText: isUz ? "Tibbiy parvarish so'rash" : isRu ? "Запросить организацию ухода" : isEn ? "Request Nursing Consultation" : isTr ? "Tedavi Bakımı Talebi" : isAr ? "طلب رعاية علاجية منزلية" : "Behandlungspflege anfragen",
      },
    },
    {
      id: "wundversorgung",
      badge: isUz
        ? "ICW® • YARALARNI DAVOLASH"
        : isRu
        ? "ICW® • ВЕДЕНИЕ РАН"
        : isEn
        ? "ICW® • WOUND MANAGEMENT"
        : isTr
        ? "ICW® • YARA YÖNETİMİ"
        : isAr
        ? "ICW® • إدارة وعلاج الجروح"
        : "ICW® • ZERTIFIZIERTES MANAGEMENT",
      image: "/images/care/wound-care.webp",
      iconType: "award",
      title: isUz
        ? "Sertifikatlangan yaralarni davolash (ICW®)"
        : isRu
        ? "Сертифицированное лечение ран (ICW®)"
        : isEn
        ? "Certified Wound Management (ICW®)"
        : isTr
        ? "Sertifikalı Yara Yönetimi (ICW®)"
        : isAr
        ? "إدارة الجروح المعتمدة (معايير ICW®)"
        : "Zertifiziertes Wundmanagement (ICW®)",
      shortDesc: isUz
        ? "Surunkali, operatsiyadan keyingi va qiyin bituvchi yaralarni zamonaviy nam usulda davolash va fotohujjatlashtirish bo'yicha ixtisoslashgan parvarish."
        : isRu
        ? "Профессиональный уход за хроническими, послеоперационными и труднозаживающими ранами с применением влажного заживления и фотодокументации."
        : isEn
        ? "Specialized management of chronic, postoperative, and non-healing wounds utilizing modern moist wound therapy and digital photo documentation."
        : isTr
        ? "Kronik, ameliyat sonrası ve zor iyileşen yaraların modern nemli yara tedavisi ve dijital fotoğraflı takibi."
        : isAr
        ? "علاج متخصص للجروح المزمنة، ما بعد الجراحة وصعبة الالتئام باستخدام تقنيات الضماد الرطب والتوثيق الرقمي."
        : "Spezialisierte Versorgung chronischer, postoperativer und sekundär heilender Wunden mit moderner Feuchtwundbehandlung und Fotodokumentation.",
      modal: {
        title: isUz
          ? "ICW® standarti bo'yicha sertifikatlangan yara boshqaruvi"
          : isRu
          ? "Zertifiziertes Wundmanagement nach ICW®"
          : isEn
          ? "Certified Wound Management according to ICW®"
          : isTr
          ? "ICW® Sertifikalı Yara Yönetimi"
          : isAr
          ? "إدارة الجروح المعتمدة وفق معايير ICW®"
          : "Zertifiziertes Wundmanagement (ICW®-Standard)",
        subtitle: isUz
          ? "Zamonaviy bosqichma-bosqich yara terapiyasi va to'liq fotomonitoring"
          : isRu
          ? "Современное влажное заживление ран и экспертная фотодокументация"
          : isEn
          ? "Modern moist wound therapy and digital clinical progress documentation"
          : isTr
          ? "Modern aşamaya uygun yara tedavisi ve eksiksiz gelişim takibi"
          : isAr
          ? "علاج حديث للجروح وفق مراحل الالتئام وتوثيق سريري رقمي متكامل"
          : "Moderne phasengerechte Wundtherapie und lückenlose Verlaufsdokumentation",
        description: isUz
          ? "Surunkali va ikkilamchi bituvchi yaralar chuqur klinik mahorat va tizimli parvarishni talab qiladi. NabiOta HomeCare kompaniyasining Initiative Chronische Wunden e.V. (ICW®) standartlari bo'yicha sertifikatlangan yara mutaxassislari og'riqni yengillashtiruvchi, granulyatsiyani tezlashtiruvchi va infeksiyalarni oldini oluvchi dalillarga asoslangan zamonaviy nam yara vositalarini qo'llaydilar."
          : isRu
          ? "Хронические и вторично заживающие раны требуют глубоких специализированных знаний и терпеливого подхода. Сертифицированные эксперты по ранам ICW® (Initiative Chronische Wunden) компании NabiOta HomeCare применяют доказательные методики влажного заживления, снижая болевой синдром и стимулируя естественную регенерацию тканей."
          : isEn
          ? "Chronic and non-healing wounds demand specialized clinical expertise and structured care protocols. NabiOta HomeCare's certified ICW® wound care specialists employ modern evidence-based moist healing principles that alleviate pain, accelerate tissue granulation, and prevent infections."
          : isTr
          ? "Kronik ve zor iyileşen yaralar uzmanlık ve sabır gerektirir. NabiOta HomeCare'in ICW® sertifikalı yara uzmanları, ağrıyı azaltan, granülasyonu hızlandıran ve enfeksiyonları önleyen kanıta dayalı modern nemli yara tedavi ürünlerini uygular."
          : isAr
          ? "تتطلب الجروح المزمنة والمعقدة خبرة سريرية متقدمة ورعاية مستمرة. يطبق أخصائيو الجروح المعتمدون من جمعية (ICW®) لدى NabiOta أحدث أساليب العلاج الرطب للجروح، مما يسكن الألم ويحفز نمو الأنسجة ويقي من العدوى."
          : "Chronische, postoperative und schwer heilende Wunden erfordern fundierte Fachkompetenz und strukturierte Betreuung. Unsere nach den Standards der Initiative Chronische Wunden e.V. (ICW®) zertifizierten Wundexperten setzen moderne, phasengerechte Wundtherapeutika ein. Durch das Prinzip der feuchten Wundbehandlung werden Wundschmerzen gelindert, Granulation gefördert und Infektionen wirksam verhindert.",
        indicationsTitle: isUz ? "Yara turlari va tashxislar" : isRu ? "Виды ран и диагнозы" : isEn ? "Treated Wound Types" : isTr ? "Tedavi Kapsamı ve Yara Türleri" : isAr ? "نطاق الحالات وأنواع الجروح" : "Behandlungsspektrum",
        indications: isUz
          ? [
              "Boldirning venoz, arterial yoki aralash trofik yaralari (Ulcus cruris)",
              "Barcha bosqichdagi yotoq yaralari (Dekubitus I-IV daraja)",
              "Neyropatik yoki ishemik zararlanishlar bilan diabetik tovon sindromi (DFS)",
              "Ikkilamchi bituvchi yoki infeksiyalangan operatsiya yaralari va chok ochilishlari",
              "Ortopedik va umumiy jarrohlik amaliyotlaridan keyingi yara bitish buzilishlari",
              "Termik yaralar, kuyishlar va shikastlanishdan keyingi to'qima nuqsonlari",
            ]
          : isRu
          ? [
              "Трофические язвы голени (Ulcus cruris venosum / arteriosum / mixtum)",
              "Пролежни всех степеней тяжести (Dekubitus Grad I-IV)",
              "Синдром диабетической стопы (DFS) с нейропатическими/ишемическими язвами",
              "Вторично заживающие и инфицированные послеоперационные раны",
              "Раны после онкологических операций или лучевой терапии",
              "Ожоги и длительно незаживающие травматические дефекты кожи",
            ]
          : isEn
          ? [
              "Venous, arterial, and mixed leg ulcers (Ulcus cruris)",
              "Pressure injuries and decubitus ulcers (Stages I through IV)",
              "Diabetic foot syndrome (DFS) neuropathic and ischemic lesions",
              "Secondary healing and infected surgical incisions",
              "Post-surgical wound dehiscence and radiation skin injuries",
              "Thermal burns and traumatic tissue defects with healing delay",
            ]
          : isTr
          ? [
              "Venöz, arteriyel veya mikst bacak ülserleri (Ulcus cruris)",
              "Tüm evrelerde bası yaraları (Dekübitüs Evre I-IV)",
              "Diyabetik ayak sendromu (DFS) ve nöropatik/iskemik lezyonlar",
              "İkincil iyileşen veya enfekte ameliyat yaraları ve dikiş açılmaları",
              "Ortopedik ve cerrahi operasyonlar sonrası yara iyileşme bozuklukları",
              "Termal yaralar, yanıklar ve travmatik cilt doku kayıpları",
            ]
          : isAr
          ? [
              "قرح الساق الوريدية، الشريانية أو المختلطة (Ulcus cruris)",
              "قرح الفراش والضغط بجميع درجاتها (Dekubitus من الدرجة 1 إلى 4)",
              "متلازمة القدم السكرية (DFS) مع الآفات العصبية أو الإقفارية",
              "الجروح الجراحية الملتهبة أو الملتئمة ثانوياً وتفزر الغرز",
              "اضطرابات التئام الجروح بعد جراحات العظام والجراحة العامة",
              "الجروح الحرارية، الحروق وإصابات الجلد الرضية المزمنة",
            ]
          : [
              "Ulcus cruris venosum, arteriosum oder mixtum (Offenes Bein)",
              "Dekubitalulzera aller Schweregrade (Druckgeschwüre Grad 1 bis 4)",
              "Diabetisches Fußsyndrom (DFS) mit neuropathischen oder ischämischen Läsionen",
              "Sekundär heilende oder infizierte Operationswunden und Nahtdehiszenzen",
              "Wundheilungsstörungen nach orthopädischen und viszeralchirurgischen Eingriffen",
              "Thermische Wunden, Verbrennungen und traumatische Hautdefekte",
            ],
        scopeTitle: isUz ? "Davolash rejasi va muolajalar" : isRu ? "План лечения и процедуры" : isEn ? "Clinical Protocol" : isTr ? "Terapötik Önlemler" : isAr ? "الإجراءات والتدخلات العلاجية" : "Therapeutische Maßnahmen",
        scopeItems: isUz
          ? [
              "Steril sharoitda bog'lamalarni avaylab va og'riqsiz almashtirish",
              "Zamonaviy yara qoplamalarini bosqichga mos tanlash (alginatlar, gidrokolloidlar, ko'piklar, kumush)",
              "Antiseptik yara yuvish va mikrob yuklamasini kamaytirish",
              "Yuqori aniqlikdagi raqamli fotodokumentatsiya va yara o'lchamlarini doimiy qayd etish",
              "Venoz yaralarda shishni qaytaruvchi kompressiya terapiyasi",
              "Davolovchi jarrohlar, qon tomir shifokorlari va MVZ mutaxassislari bilan bevosita klinik muvofiqlashtirish",
            ]
          : isRu
          ? [
              "Атравматическая смена повязок с обезболиванием",
              "Фазовое применение современных повязок (гидроколлоиды, альгинаты, пены, серебро)",
              "Антисептическая санация и промывание раневого ложа",
              "Цифровая калиброванная фотодокументация динамики заживления",
              "Компрессионная терапия при венозной этиологии язв",
              "Тесное взаимодействие с оперирующим хирургом и дерматологом",
            ]
          : isEn
          ? [
              "Atraumatic, pain-reduced dressing changes with sterile technique",
              "Phase-adapted dressing selection (hydrocolloids, alginates, foams, silver dressings)",
              "Antiseptic wound cleansing, irrigation, and bacterial burden reduction",
              "Standardized digital photography and computer-assisted wound dimension tracking",
              "Targeted medical compression therapy for venous insufficiency",
              "Direct multidisciplinary dialogue with surgeons, dermatologists, and MVZ clinics",
            ]
          : isTr
          ? [
              "Steril koşullarda hassas ve ağrısız pansuman değişimi",
              "Modern yara örtülerinin (aljinatlar, hidrokolloidler, köpükler, gümüş) aşamaya uygun seçimi",
              "Antiseptik yara yıkama ve mikrop yükünün azaltılması",
              "Yüksek çözünürlüklü dijital fotoğraf dokümantasyonu ve yara ölçümü",
              "Venöz kökenli yaralarda ödem çözücü kompresyon tedavisi",
              "Tedaviyi yürüten cerrahlar ve MVZ hekimleri ile doğrudan vaka koordinasyonu",
            ]
          : isAr
          ? [
              "تغيير لطيف وغير مؤلم للضمادات وفق شروط التعقيم الطبي الصارمة",
              "اختيار الضمادات الحديثة المناسبة لكل مرحلة (ألجينات، هيدروكولويد، رغوية، فضة)",
              "غسيل وتطهير الجروح بمحاليل معقمة للحد من العبء البكتيري",
              "توثيق فوتوغرافي رقمي عالي الدقة وقياس مستمر لأبعاد الجرح وتطوره",
              "علاج بالضغط الطبي لإزالة الوذمات في حالات القصور الوريدي",
              "تنسيق طبي مباشر ومستمر مع الجراحين وأطباء مراكز MVZ",
            ]
          : [
              "Schonender, schmerzarmer Verbandwechsel unter sterilen Kautelen",
              "Phasengerechte Auswahl moderner Wundauflagen (Alginate, Hydrokolloide, Schaumverbände, Silber)",
              "Antiseptische Wundspülung und Reduktion der Keimbelastung",
              "Hochauflösende digitale Fotodokumentation und exakte Vermessung des Wundverlaufs",
              "Entstauende Kompressionstherapie bei venöser Wundgenese",
              "Direkte Fallabstimmung mit behandelnden Chirurgen, Gefäßmedizinern und MVZ-Ärzten",
            ],
        billingTitle: isUz ? "To'lov va retseptlar" : isRu ? "Оплата и рецепты" : isEn ? "Insurance & Reimbursement" : isTr ? "Reçete ve Masraf Karşılama" : isAr ? "الوصفة الطبية والجهات الضامنة" : "Verordnung & Kostenträger",
        billingText: isUz
          ? "Yaralarni davolash SGB V bo'yicha tan olingan tibbiy xizmatdir. Bog'lamalarni almashtirish va zamonaviy yara vositalari xarajatlari davlat va xususiy sug'urta kassalari tomonidan to'liq qoplanadi. NabiOta dorixonasi va Sanitätshaus orqali steril materiallar yetkazib berilishini muvofiqlashtiramiz."
          : isRu
          ? "Уход за ранами и перевязочные материалы оплачиваются медицинскими страховками по SGB V на основании врачебного назначения. NabiOta HomeCare координирует доставку стерильных материалов через партнерские аптеки и Sanitätshaus."
          : isEn
          ? "Wound management and advanced dressing supplies are covered under SGB V statutory and private health insurance. NabiOta HomeCare coordinates the swift delivery of sterile dressings via our affiliated pharmacy and medical supply store."
          : isTr
          ? "Yara bakımı SGB V kapsamında tanınan bir sağlık hizmetidir. Pansuman değişimi ve modern yara örtülerinin masrafları sağlık sigortaları tarafından karşılanır. NabiOta Eczanesi ve Sanitätshaus üzerinden steril malzeme tedariğini koordine ediyoruz."
          : isAr
          ? "تعتبر رعاية الجروح خدمة معتمدة وممولة ضمن التأمين الصحي (SGB V). تغطي الصناديق تكاليف تغيير الضمادات ومواد العلاج الحديثة بالكامل. ننسق التوريد المباشر عبر صيدلية ومتجر المستلزمات الطبية التابع للمجموعة."
          : "Die Wundversorgung ist eine anerkannte Leistung der häuslichen Krankenpflege nach SGB V. Die Kosten für Verbandwechsel und moderne Wundauflagen werden von den gesetzlichen und privaten Krankenkassen übernommen. Wir koordinieren die reibungslose Belieferung über die NabiOta Apotheke und das Sanitätshaus.",
        qualityTitle: isUz ? "ICW® sertifikatsiyasi" : isRu ? "Квалификация ICW®" : isEn ? "ICW® Quality Certification" : isTr ? "ICW® Sertifikasyonu" : isAr ? "اعتماد وجودة ICW®" : "ICW®-Zertifizierung",
        qualityText: isUz
          ? "Bizning yara koordinatorlarimiz tan olingan ICW® (Initiative Chronische Wunden e.V.) sertifikatlariga ega bo'lib, DNQP milliy ekspert standartlari bo'yicha har yili muntazam malaka oshirib boradilar."
          : isRu
          ? "Наши специалисты имеют действующие сертификаты Wundexperte ICW® и ежегодно проходят курсы повышения квалификации в соответствии с национальными экспертными стандартами DNQP."
          : isEn
          ? "Our wound coordinators hold accredited ICW® certifications and complete annual clinical training adhering to German National Expert Standards (DNQP)."
          : isTr
          ? "Yara yöneticilerimiz tanınmış ICW® (Initiative Chronische Wunden) sertifikalarına sahiptir ve Alman Ulusal Uzman Standartlarına (DNQP) göre düzenli eğitim alır."
          : isAr
          ? "يحمل خبراؤنا شهادات رسمية معتمدة من مبادرة الجروح المزمنة (ICW®) ويخضعون لتدريب مستمر وفق معايير الجودة السريرية الوطنية (DNQP)."
          : "Unsere Wundmanager verfügen über anerkannte ICW®-Zertifikate (Initiative Chronische Wunden e.V.) und bilden sich fortlaufend nach den nationalen Expertenstandards des DNQP weiter.",
        ctaButtonText: isUz ? "Yara ko'rigiga yozilish" : isRu ? "Записаться на осмотр раны" : isEn ? "Request Wound Assessment" : isTr ? "Yara Muayenesi Talebi" : isAr ? "حجز فحص ومعاينة للجروح" : "Wundvisite vereinbaren",
      },
    },
    {
      id: "grundpflege",
      badge: isUz
        ? "SGB XI • PARVARISH DARAJALARI 1-5"
        : isRu
        ? "SGB XI • СТЕПЕНИ УХОДА 1-5"
        : isEn
        ? "SGB XI • CARE LEVELS 1-5"
        : isTr
        ? "SGB XI • BAKIM DERECELERİ 1-5"
        : isAr
        ? "SGB XI • درجات الرعاية 1-5"
        : "SGB XI • PFLEGEGRADE 1-5",
      image: "/images/care/grundpflege.webp",
      iconType: "heart",
      title: isUz
        ? "Tana parvarishi va kundalik yordam (SGB XI)"
        : isRu
        ? "Базовый уход & помощь в быту (SGB XI)"
        : isEn
        ? "Personal Care & Daily Living (SGB XI)"
        : isTr
        ? "Vücut Odaklı Bakım & Temel Bakım (SGB XI)"
        : isAr
        ? "الرعاية الشخصية والأساسية (SGB XI)"
        : "Körperbezogene Pflege & Grundpflege (SGB XI)",
      shortDesc: isUz
        ? "Shaxsiy mustaqillik va qulaylikni saqlash uchun gigiyena, kiyinish, ovqatlanish va harakatlanishda ehtiromli ko'mak."
        : isRu
        ? "Бережная помощь в гигиене, одевании, приеме пищи и мобилизации для сохранения личной автономии и комфорта."
        : isEn
        ? "Dignified assistance with personal hygiene, dressing, nutrition, and mobilization to foster autonomy and comfort at home."
        : isTr
        ? "Kişisel bağımsızlığı ve konforu korumak için kişisel hijyen, beslenme ve hareketlilikte saygılı ve şefkatli destek."
        : isAr
        ? "دعم كريم ومهني في النظافة الشخصية، التغذية والحركة للحفاظ على الاستقلالية والراحة في المنزل."
        : "Respektvolle Unterstützung bei der Körperpflege, Ernährung und Mobilität zur Erhaltung und Förderung der persönlichen Selbstständigkeit.",
      modal: {
        title: isUz
          ? "Tana parvarishi va kundalik hayot ko'magi (SGB XI)"
          : isRu
          ? "Базовый сестринский уход и помощь в быту (SGB XI)"
          : isEn
          ? "Personal Care & Activities of Daily Living (SGB XI)"
          : isTr
          ? "Vücut Odaklı Temel Bakım & Günlük Yaşam Yardımı (SGB XI)"
          : isAr
          ? "الرعاية التمريضية الأساسية والدعم اليومي (SGB XI)"
          : "Körperbezogene Grundpflege & Alltagshilfe (SGB XI)",
        subtitle: isUz
          ? "O'z uyida mustaqil yashash uchun ehtiromli va faollashtiruvchi yordam"
          : isRu
          ? "Уважительная поддержка для сохранения самостоятельности в родных стенах"
          : isEn
          ? "Respectful, empowering assistance preserving independence at home"
          : isTr
          ? "Ev ortamında bağımsız bir yaşam için saygın ve harekete geçirici destek"
          : isAr
          ? "دعم محترم ومحفز للحفاظ على حياة مريحة ومستقلة في المنزل"
          : "Würdevolle, aktivierende Unterstützung für ein selbstbestimmtes Leben zu Hause",
        description: isUz
          ? "SGB XI bo'yicha tana parvarishi faollashtiruvchi parvarish yetakchi g'oyasiga asoslanadi: Biz yordam talab qilinadigan sohalarda ko'maklashamiz, shu bilan birga mijozlarimiz o'z resurslari va ko'nikmalarini saqlab qolishlarini va o'z uyida erkin va mustaqil yashashlarini maqsadli qo'llab-quvvatlaymiz."
          : isRu
          ? "Каждый человек заслуживает уважительного и бережного отношения. Базовый уход по SGB XI строится на принципе активирующего ухода: мы помогаем в том, что вызывает затруднения, но бережно сохраняем и стимулируем те навыки, которые пациент может выполнять сам."
          : isEn
          ? "Every person deserves dignified and compassionate care. Personal care under SGB XI is centered around restorative, activating nursing: we assist where help is needed while encouraging and maintaining existing capabilities so clients remain self-determined in their own home."
          : isTr
          ? "SGB XI kapsamındaki vücut odaklı bakım, harekete geçirici bakım ilkesine dayanır: Yardıma ihtiyaç duyulan noktalarda destek olurken, hastalarımızın kendi yapabildikleri becerileri koruyup teşvik ederek ev ortamında bağımsızlıklarını sürdürmelerini sağlarız."
          : isAr
          ? "ترتكز الرعاية الأساسية وفق SGB XI على مبدأ الرعاية التنشيطية: نقدم العون حيث تدعو الحاجة، مع تعزيز القدرات الذاتية المتبقية لتمكين المريض من الحفاظ على استقلاليته وكرامته في بيته."
          : "Die körperbezogene Pflege nach SGB XI basiert auf dem Leitgedanken der aktivierenden Pflege: Wir unterstützen dort, wo Hilfe benötigt wird, fördern aber gleichzeitig gezielt vorhandene Ressourcen und Fähigkeiten, damit unsere Klienten ihre Eigenständigkeit und Lebensfreude im vertrauten Zuhause bewahren.",
        indicationsTitle: isUz ? "Kimlar uchun mo'ljallangan" : isRu ? "Для кого предназначен уход" : isEn ? "Target Audience" : isTr ? "Hedef Kitle ve Koşullar" : isAr ? "الفئات المستهدفة وشروط الاستحقاق" : "Zielgruppe & Voraussetzungen",
        indications: isUz
          ? [
              "Tasdiqlangan parvarish darajasiga ega (Pflegegrad 1-5) parvarishga muhtoj insonlar",
              "Harakatlanish va motorikada yoshga bog'liq cheklovlari bo'lgan keksalar",
              "Og'ir kasalliklar, insult yoki bo'g'im protezlash amaliyotidan keyingi bemorlar",
              "Surunkali nevrologik kasalliklarga chalingan insonlar (masalan, Parkinson kasalligi)",
              "Xotira buzilishlari, kognitiv cheklovlar yoki demensiyasi bo'lgan mijozlar",
              "Vaqtinchalik sog'ayish va tiklanish bosqichida bo'lgan shaxslar",
            ]
          : isRu
          ? [
              "Люди пожилого возраста с присвоенной степенью ухода (Pflegegrad 1-5)",
              "Пациенты после тяжелых операций, инсультов или травм",
              "Люди с дегенеративными заболеваниями суставов и позвоночника",
              "Пациенты с болезнью Паркинсона или рассеянным склерозом",
              "Люди с умеренными или выраженными когнитивными нарушениями / деменцией",
              "Лица, временно утратившие способность к самостоятельному самообслуживанию",
            ]
          : isEn
          ? [
              "Elderly individuals with recognized care levels (Pflegegrade 1 to 5)",
              "Post-acute patients recovering from stroke, major surgeries, or joint replacements",
              "Individuals with advanced osteoarthritis or severe mobility impairments",
              "Patients living with Parkinson's, Multiple Sclerosis, or neurological deficits",
              "People experiencing memory impairment, cognitive decline, or dementia",
              "Anyone experiencing temporary loss of independent self-care abilities",
            ]
          : isTr
          ? [
              "Onaylanmış bakım derecesine sahip (Pflegegrad 1-5) bakıma muhtaç bireyler",
              "Yaşa bağlı hareketlilik ve motor beceri kısıtlılığı yaşayan yaşlılar",
              "Ağır hastalıklar, inme veya eklem protezi ameliyatları sonrası hastalar",
              "Kronik nörolojik hastalıkları olanlar (örn. Parkinson veya MS)",
              "Demans veya bilişsel kısıtlılık yaşayan danışanlar",
              "Geçici iyileşme ve toparlanma sürecinde olan kişiler",
            ]
          : isAr
          ? [
              "الأشخاص المصنفون ضمن درجات الرعاية المعتمدة (Pflegegrad من 1 إلى 5)",
              "كبار السن الذين يعانون من قيود الحركة المرتبطة بالتقدم في العمر",
              "المرضى بعد الجراحات الكبرى، السكتات الدماغية أو استبدال المفاصل",
              "المصابون بالأمراض العصبية المزمنة (مثل مرض باركنسون والتصلب المتعدد)",
              "المرضى الذين يعانون من أعراض الخرف أو التراجع المعرفي",
              "الأشخاص في فترات النقاهة المؤقتة لاستعادة القدرة على خدمة الذات"
            ]
          : [
              "Pflegebedürftige Menschen mit anerkanntem Pflegegrad (Pflegegrad 1 bis 5)",
              "Senioren mit altersbedingten Einschränkungen der Mobilität und Motorik",
              "Patienten nach schweren Erkrankungen, Schlaganfall oder Gelenkersatz",
              "Menschen mit chronischen neurologischen Erkrankungen (z.B. Morbus Parkinson)",
              "Klienten mit dementiellen Veränderungen oder kognitiven Einschränkungen",
              "Personen in vorübergehenden Rekonvaleszenz- und Erholungsphasen",
            ],
        scopeTitle: isUz ? "Asosiy parvarish xizmatlari" : isRu ? "Что входит в базовый уход" : isEn ? "Scope of Services" : isTr ? "Modüler Bakım Hizmetleri" : isAr ? "خدمات الرعاية المعيارية" : "Modulare Pflegeleistungen",
        scopeItems: isUz
          ? [
              "To'liq va qisman yuvinish, vanna, dush qabul qilish hamda og'iz, soch va tish parvarishi",
              "Kiyinish va yechinishda yordam, shu jumladan protez/ortezlarni taqish",
              "Ovqatni tayyorlash hamda oziqlanish va suyuqlik ichishda yordamlashish",
              "Hojatga chiqishda yordam va ehtiromli, xushmuomala inkontinensiya parvarishi",
              "Faollashtiruvchi mobilizatsiya: o'rindan aravachaga o'tkazish, yurish va turish mashqlari",
              "Dekubitus va kontrakturani oldini olish uchun tibbiy krovatda to'g'ri joylashtirish",
            ]
          : isRu
          ? [
              "Полное или частичное умывание, душ, купание, гигиена полости рта и волос",
              "Помощь при одевании, раздевании и подборе комфортной одежды",
              "Помощь при приеме пищи, сервировка и контроль питьевого режима",
              "Помощь при посещении туалета и деликатный уход при недержании",
              "Активирующая мобилизация: пересаживание в кресло, помощь при ходьбе",
              "Правильное позиционирование в постели для предотвращения пролежней",
            ]
          : isEn
          ? [
              "Assistance with morning and evening hygiene, shower, bath, and oral care",
              "Support with dressing, undressing, and orthopedic footwear",
              "Nutritional support, meal preparation assistance, and hydration monitoring",
              "Dignified assistance with toileting and discreet continence management",
              "Activating mobilization, bed-to-chair transfers, and supervised walking",
              "Micro-positioning in bed for comfort, contracture, and pressure relief",
            ]
          : isTr
          ? [
              "Tam veya kısmi vücut yıkama, banyo, duş ile ağız, saç ve diş bakımı",
              "Giyinme ve soyunmada yardım, protez/ortez takılması desteği",
              "Gıdaların hazırlanması ve besin/sıvı alımında destek",
              "Tuvalet ihtiyacında yardım ve saygın, gizliliğe uygun inkontinans bakımı",
              "Harekete geçirici mobilizasyon: yataktan tekerlekli sandalyeye transfer, yürüme egzersizleri",
              "Bası yarası ve kontraktürleri önlemek için bakım yatağında ergonomik pozisyonlama",
            ]
          : isAr
          ? [
              "الاستحمام الجزئي أو الكامل، غسيل الشعر، العناية بالفم والأسنان",
              "المساعدة في ارتداء وخلع الملابس وتركيب الأجهزة التعويضية/التقويمية",
              "تحضير الطعام والمساعدة في تناول الوجبات وشرب السوائل الكافية",
              "المساعدة في استخدام المرحاض ورعاية سلس البول بكل خصوصية وكرامة",
              "التنشيط الحركي: الانتقال من السرير للكرسي وتمارين الوقوف والمشي",
              "الوضعية السليمة في السرير الطبي للوقاية من قرح الفراش والتصلب المفصلي",
            ]
          : [
              "Ganz- und Teilkörperwäsche, Baden, Duschen sowie Mund-, Haar- und Zahnpflege",
              "Hilfe beim An- und Auskleiden inklusive Anlegen von Prothesen/Orthesen",
              "Mundgerechte Zubereitung und Unterstützung bei der Nahrungs- und Flüssigkeitsaufnahme",
              "Hilfe bei der Ausscheidung und diskrete, würdevolle Inkontinenzversorgung",
              "Aktivierende Mobilisation: Transfer vom Bett in den Rollstuhl, Geh- und Stehübungen",
              "Fachgerechte Lagerung im Pflegebett zur Dekubitus- und Kontrakturvermeidung",
            ],
        billingTitle: isUz ? "Parvarish kassasi orqali moliyalashtirish" : isRu ? "Оплата через кассу ухода" : isEn ? "Care Fund Billing" : isTr ? "Finansman ve Ayni Bakım Yardımları" : isAr ? "التمويل والمزايا العينية لصندوق الرعاية" : "Finanzierung & Sachleistungen",
        billingText: isUz
          ? "Xarajatlar tegishli Pflegegrad (1 dan 5 gacha) qonuniy me'yoriga muvofiq bevosita parvarish kassasi (Pflegekasse) bilan Pflegesachleistung sifatida hisob-kitob qilinadi. Shuningdek, pul shaklidagi nafaqa bilan kombinatsiya qilish imkoni mavjud. Biz mutlaqo shaffof narx hisob-kitobini taqdim etamiz."
          : isRu
          ? "Услуги оплачиваются кассой по уходу (Pflegekasse) в виде натуральных пособий (Pflegesachleistungen) в соответствии с присвоенным Pflegegrad (1-5) либо в комбинации с Pflegegeld. Мы рассчитываем оптимальный индивидуальный тариф без скрытых затрат."
          : isEn
          ? "Services are billed directly to statutory and private long-term care insurance funds (Pflegekassen) via care in-kind benefits (Pflegesachleistungen) based on Pflegegrad 1-5, or as a combination with monetary care allowances."
          : isTr
          ? "Masraflar, ilgili bakım derecesinin (1-5) yasal tavanına kadar ayni bakım yardımı (Pflegesachleistung) olarak doğrudan bakım sandığı (Pflegekasse) ile mahsuplaşılır. Nakdi bakım parası ile kombinasyon mümkündür."
          : isAr
          ? "تُسوى التكاليف مباشرة كخدمات عينية (Pflegesachleistung) مع صندوق الرعاية حتى السقف القانوني لدرجة الرعاية (1 إلى 5)، مع إمكانية الجمع بين المساعدة العينية والبدل النقدي."
          : "Die Kosten werden bis zum gesetzlichen Höchstbetrag des jeweiligen Pflegegrads (1 bis 5) direkt als Pflegesachleistung mit der Pflegekasse abgerechnet. Auch Kombinationsleistungen (Pflegegeld + Pflegedienst) sind möglich. Wir erstellen transparente, verständliche Kostenvoranschläge.",
        qualityTitle: isUz ? "Biriktirilgan hamshira tizimi (Bezugspflege)" : isRu ? "Система закрепленной медсестры" : isEn ? "Primary Nursing Model" : isTr ? "Sabit Primer Hemşire Sistemi" : isAr ? "نظام الممرض المرجعي المخصص" : "Bezugspflegesystem",
        qualityText: isUz
          ? "Bizning biriktirilgan hamshira modelimiz orqali sizning uyingizga har doim tanish va ishonchli xodimlar keladi. Bu esa mustahkam ishonch muhitini va mijozlar hamda ularning oilalari uchun to'liq xotirjamlikni yaratadi."
          : isRu
          ? "Мы внедряем систему постоянных кураторов (Bezugspflege): за вами закрепляется небольшая команда медсестер, знающая ваши индивидуальные привычки и пожелания."
          : isEn
          ? "We implement a dedicated primary nursing system ensuring consistent, familiar caregivers who know your daily routines and preferences intimately."
          : isTr
          ? "Sabit hemşire modelimiz sayesinde evinize her zaman tanıdığınız ve güvendiğiniz ekip üyeleri gelir; bu da derin bir güven ve huzur ortamı yaratır."
          : isAr
          ? "يضمن نظام الممرض المرجعي قدوم نفس الكوادر التمريضية المألوفة لديكم بانتظام، مما يبني علاقة ثقة راسخة ويمنح العائلة راحة البال."
          : "Unser Bezugspflegesystem stellt sicher, dass feste und vertraute Pflegekräfte zu Ihnen kommen. Das schafft eine vertrauensvolle Bindung und gibt den Klienten sowie ihren Angehörigen ein beruhigendes Gefühl von Sicherheit.",
        ctaButtonText: isUz ? "Parvarish bo'yicha maslahat olish" : isRu ? "Рассчитать план ухода" : isEn ? "Calculate Care Plan" : isTr ? "Bakım Danışmanlığı Talebi" : isAr ? "طلب استشارة وحساب خطة الرعاية" : "Pflegeberatung anfordern",
      },
    },
    {
      id: "postoperativ",
      badge: isUz
        ? "KLINIKADAN O'TKAZISH"
        : isRu
        ? "ПЕРЕВОД ИЗ КЛИНИКИ"
        : isEn
        ? "DISCHARGE TRANSITION"
        : isTr
        ? "KLİNİK & MVZ GEÇİŞ YÖNETİMİ"
        : isAr
        ? "إدارة الانتقال من المستشفيات ومراكز MVZ"
        : "KLINIK- & MVZ-ÜBERLEITUNG",
      image: "/images/care/post-op.webp",
      iconType: "shield",
      title: isUz
        ? "Operatsiyadan keyingi patronaj va parvarish"
        : isRu
        ? "Послеоперационный патронаж & переливание"
        : isEn
        ? "Postoperative Care & Discharge Management"
        : isTr
        ? "Ameliyat Sonrası Bakım & Taburculuk Yönetimi"
        : isAr
        ? "الرعاية بعد العمليات وإدارة الخروج من المستشفى"
        : "Postoperative Nachsorge & Entlassmanagement",
      shortDesc: isUz
        ? "Jarrohlik amaliyotlaridan so'ng uy sharoitida xavfsiz va xotirjam tiklanish uchun statsionardan to'g'ridan-to'g'ri uzluksiz o'tkazish."
        : isRu
        ? "Бесшовный перевод из стационара домой после хирургических операций для безопасного и спокойного восстановления в домашнем уюте."
        : isEn
        ? "Seamless hospital discharge transition following surgical procedures ensuring guided and complication-free recovery at home."
        : isTr
        ? "Klinik yatışı veya ayakta operasyonlar sonrasında evde güvenli ve sorunsuz iyileşme için kesintisiz tıbbi ve hemşirelik desteği."
        : isAr
        ? "انتقال طبي وتمريضي سلس بعد الإقامة بالمستشفى أو العمليات الجراحية لضمان تعافٍ منزلي آمن وبدون مضاعفات."
        : "Nahtlose medizinisch-pflegerische Überleitung nach Klinikaufenthalten oder ambulanten Operationen für eine sichere Genesung zu Hause.",
      modal: {
        title: isUz
          ? "Operatsiyadan keyingi patronaj va chiqarilgandan keyingi parvarish"
          : isRu
          ? "Послеоперационный патронаж и ведение после выписки"
          : isEn
          ? "Postoperative Transitional Care & Discharge Management"
          : isTr
          ? "Ameliyat Sonrası Takip ve Taburculuk Yönetimi"
          : isAr
          ? "الرعاية اللاحقة بعد الجراحة وإدارة الخروج"
          : "Postoperative Nachsorge & Entlassmanagement",
        subtitle: isUz
          ? "Shifoxona va uy qulayligi o'rtasidagi xavfsiz ko'prik"
          : isRu
          ? "Безопасный мост между больницей и домашним уютом"
          : isEn
          ? "Safe continuity of clinical care from hospital bedside to home"
          : isTr
          ? "Klinik yatışı ile evdeki iyileşme arasındaki güvenli köprü"
          : isAr
          ? "الجسر الآمن بين الإقامة في المستشفى والتعافي المريح في المنزل"
          : "Die sichere Brücke zwischen Klinikaufenthalt und Genesung zu Hause",
        description: isUz
          ? "Shifoxonadan chiqarilgandan keyingi dastlabki kunlar muvaffaqiyatli sog'ayish uchun hal qiluvchi ahamiyatga ega. NabiOta HomeCare shifoxonadan (NabiOta Clinics Germany GmbH yoki boshqa klinikalardan) to'g'ridan-to'g'ri uy muhitiga o'tishni muvofiqlashtiradi. Biz operatsiya choklari bitishini, drenajlarni nazorat qilamiz, og'riqni qoldiramiz va asoratlarning oldini olamiz."
          : isRu
          ? "Первые дни после выписки из больницы критически важны для успешного выздоровления. NabiOta HomeCare координирует переход из клиники (NabiOta Clinics Germany GmbH или других стационаров) прямо в домашнюю обстановку. Мы следим за заживлением швов, дренажами, снимаем болевой синдром и предотвращаем опасные осложнения."
          : isEn
          ? "The initial days following surgical discharge are critical for complication-free recovery. NabiOta HomeCare establishes an uninterrupted care continuum from the hospital ward (NabiOta Clinics or regional partner hospitals) to the client's home. We monitor healing, drainage, manage medications, and prevent unplanned rehospitalizations."
          : isTr
          ? "Cerrahi müdahale sonrası ilk günler iyileşme başarısı için belirleyicidir. NabiOta HomeCare, klinikten (örn. NabiOta Clinics Germany GmbH veya diğer hastaneler) doğrudan ev ortamına koordineli geçişi sağlar. Yara iyileşmesini, drenajları ve vital bulguları izler, medikal malzeme temin eder ve komplikasyonları önleriz."
          : isAr
          ? "تعد الأيام الأولى بعد الجراحة حاسمة لنجاح العلاج. تتولى NabiOta HomeCare إدارة الخروج المنظم مباشرة من المستشفى (مثل مستشفيات NabiOta الشريكة) إلى المنزل. نراقب التئام الجروح، مصارف السوائل، العلامات الحيوية، وننظم الأجهزة لتجنب أي انتكاسات."
          : "Die ersten Tage nach einem operativen Eingriff sind entscheidend für den Heilungserfolg. NabiOta HomeCare übernimmt das koordinierte Entlassmanagement direkt aus dem Krankenhaus (z.B. NabiOta Clinics Germany GmbH oder anderen Akutkliniken) in die häusliche Umgebung. Wir überwachen Wundheilung, Drainagen und Vitalwerte, organisieren Hilfsmittel und verhindern Komplikationen.",
        indicationsTitle: isUz ? "Kimlarga yordam zarur" : isRu ? "Кому необходима помощь" : isEn ? "Common Surgeries" : isTr ? "Sık Karşılaşılan Uygulama Alanları" : isAr ? "أبرز الحالات ومجالات التطبيق" : "Häufige Einsatzbereiche",
        indications: isUz
          ? [
              "Bo'g'imlarni endoprotezlashdan keyingi holat (chanoq-son, tizza)",
              "Qorin bo'shlig'i va ichki a'zolar operatsiyalaridan keyin (visseral jarrohlik)",
              "Umurtqa pog'onasi va disklar bo'yicha neyrojarrohlik amaliyotlaridan so'ng",
              "Qon tomir va kardiojarrohlik amaliyotlaridan keyingi holat",
              "Keng qamrovli onkologik rezektsiyalardan keyingi bemorlar",
              "Drenajlar, kateterlar yoki choklar bilan shifoxonadan chiqarilgan bemorlar",
            ]
          : isRu
          ? [
              "Состояние после эндопротезирования суставов (тазобедренный, коленный)",
              "После операций на брюшной полости и внутренних органах (висцеральная хирургия)",
              "После нейрохирургических операций на позвоночнике и межпозвоночных дисках",
              "Состояние после сосудистых и кардиохирургических вмешательств",
              "Пациенты после обширных онкологических резекций",
              "Пациенты, выписанные с дренажами, катетерами или швами",
            ]
          : isEn
          ? [
              "Total joint replacement recovery (hip, knee arthroplasty)",
              "Abdominal and visceral surgical interventions",
              "Spinal surgery and neurosurgical disc procedures",
              "Vascular revascularization and cardiovascular surgeries",
              "Complex oncological surgical resections",
              "Patients discharged with surgical drains, catheters, or staple lines",
            ]
          : isTr
          ? [
              "Kalça ve diz protezi (TEP) ameliyatları sonrası durum",
              "Genel cerrahi ve batın ameliyatları sonrası takipler",
              "Omurga ve bel fıtığı beyin cerrahisi operasyonları",
              "Damar cerrahisi ve kardiyolojik girişimler",
              "Yüksek bakım ihtiyacı olan karmaşık onkolojik operasyonlar",
              "Cerrahi drenajlar, port kateterler veya dikişlerle taburculuk",
            ]
          : isAr
          ? [
              "حالات استبدال مفاصل الورك والركبة (TEP)",
              "جراحات البطن والأحشاء الجراحية المعقدة",
              "جراحات العمود الفقري والانزلاق الغضروفي العصبية",
              "جراحات الأوعية الدموية والقلب التداخلية",
              "العمليات الجراحية للأورام ذات متطلبات الرعاية الفائقة",
              "الخروج مع وجود مصارف جراحية، قساطر بورت، أو غرز جراحية",
            ]
          : [
              "Zustand nach endoprothetischem Gelenkersatz (Hüft- und Knie-TEP)",
              "Eingriffe der Viszeral- und Abdominalchirurgie",
              "Neurochirurgische Operationen an Wirbelsäule und Bandscheiben",
              "Gefäßchirurgische und kardiologische Eingriffe",
              "Komplexe onkologische Operationen mit erhöhtem Pflegebedarf",
              "Entlassung mit chirurgischen Drainagen, Portkathetern oder Wundnähten",
            ],
        scopeTitle: isUz ? "Operatsiyadan keyingi choralar" : isRu ? "Послеоперационные мероприятия" : isEn ? "Clinical Care Protocol" : isTr ? "Hemşirelik ve Bakım Hizmetleri" : isAr ? "الخدمات والتدخلات التمريضية" : "Pflegerische Leistungen",
        scopeItems: isUz
          ? [
              "Jarrohlik choklarini nazorat qilish, shifokor ko'rsatmasi bo'yicha qisqich va choklarni olish",
              "Drenajlar bo'yicha ajralmalar hajmi va xususiyatini monitoring qilish",
              "Og'riqni nazorat qilish va og'riqsizlantiruvchi dori vositalarini xavfsiz berish",
              "Tromboz profilaktikasi (antikoagulyant inyeksiyalari, kompressiya paypoqlari)",
              "Erta mobilizatsiya va NabiOta Reha ambulator fizioterapiyasi bilan muvofiqlashtirish",
              "Yallig'lanish belgilari paydo bo'lganda navbatchi shifokor bilan 24/7 aloqa",
            ]
          : isRu
          ? [
              "Контроль хирургических швов, снятие скоб и швов по назначению врача",
              "Мониторинг объема и характера отделяемого по дренажам",
              "Контроль боли и безопасная подача обезболивающих препаратов",
              "Профилактика тромбозов (уколы антикоагулянтов, компрессионные чулки)",
              "Ранняя мобилизация и координация с амбулаторной физиотерапией NabiOta Reha",
              "Круглосуточный контакт с дежурным врачом при признаках воспаления",
            ]
          : isEn
          ? [
              "Surgical incision monitoring, suture/staple removal per physician instruction",
              "Drainage output measurement, sterile care, and scheduled removal support",
              "Postoperative pain assessment and analgesic administration",
              "Thrombosis prophylaxis (anticoagulant injections, graduated stockings)",
              "Early in-home mobilization in coordination with NabiOta Rehabilitation",
              "24/7 escalation protocol and direct reporting back to operating surgeons",
            ]
          : isTr
          ? [
              "Günlük yara ve dikiş kontrolü, hekim talimatıyla dikiş/zımba alma",
              "Yara drenajlarının ve sekresyon akışının titizlikle izlenmesi",
              "Ameliyat sonrası ağrı takibi ve reçeteye uygun analjezik verilmesi",
              "Düzenli tromboz ve pnömoni profilaksisi",
              "NabiOta Rehabilitasyon iş birliğiyle ev ortamında erken mobilizasyon",
              "24/7 nöbetçi destek ve herhangi bir bulguda cerrahlarla anında irtibat",
            ]
          : isAr
          ? [
              "مراقبة يومية للجروح والغرز، وإزالة الغرز والدبابيس الجراحية بأمر الطبيب",
              "متابعة دقيقة ومستمرة لمصارف السوائل الجراحية والإفرازات",
              "مراقبة الألم بعد الجراحة وإعطاء المسكنات الموصوفة بدقة",
              "الوقاية الصارمة من الجلطات والالتهابات الرئوية",
              "التنشيط المبكر في المنزل بالتعاون مع مراكز NabiOta للتأهيل",
              "مناوبة هاتفية 24/7 والتواصل الفوري مع الجراحين عند أي طارئ",
            ]
          : [
              "Tägliche Wund- und Nahtkontrolle sowie Fadenzug/Klammerentfernung nach ärztlicher Anordnung",
              "Sorgfältiges Monitoring von Wunddrainagen und Sekretabfluss",
              "Postoperatives Schmerzmonitoring und verordnungskonforme Analgetikagabe",
              "Konsequente Thrombose- und Pneumonieprophylaxe",
              "Frühmobilisation im häuslichen Umfeld in Kooperation mit der NabiOta Rehabilitation",
              "24/7 Rufbereitschaft und sofortige Rücksprache mit den Operateuren bei Auffälligkeiten",
            ],
        billingTitle: isUz ? "Xarajatlarni qoplash" : isRu ? "Покрытие расходов" : isEn ? "Billing & Coverage" : "Kostenträger & Anspruch",
        billingText: isUz
          ? "Tibbiy sug'urta kassasi tomonidan § 37 1 yoki 2-bandi SGB V (shifoxonadan keyingi parvarish) yoxud § 38 SGB V (vaqtincha mehnatga layoqatsizlikda uy ro'zg'origa yordam) bo'yicha moliyalashtiriladi. Yo'llanma chiqarilishdan oldin klinika tomonidan rasmiylashtiriladi."
          : isRu
          ? "Финансируется кассой медицинского страхования по § 37 Abs. 1 или 2 SGB V (послебольничный уход) либо по § 38 SGB V (помощь по хозяйству при временной нетрудоспособности). Направление оформляет клиника перед выпиской."
          : isEn
          ? "Covered by statutory and private health insurance under § 37 SGB V (transitional hospital care) or § 38 SGB V (household assistance during acute recovery). Hospital social services initiate the prescription prior to discharge."
          : isTr
          ? "Masraflar SGB V § 37 Abs. 1 veya 2 (hastane sonrası bakım) ve gerekirse SGB V § 38 (ev idaresi desteği) kapsamında karşılanır. Reçete doğrudan hastane taburculuk servisi tarafından düzenlenir."
          : isAr
          ? "تُغطى التكاليف عبر رعاية ما بعد المستشفى وفق § 37 SGB V والمساعدة المنزلية وفق § 38 SGB V. تصدر الوصفة مباشرة ضمن خدمة إدارة الخروج من المستشفى."
          : "Die Kosten werden über die Krankenhausnachsorge gemäß § 37 Abs. 1 oder Abs. 2 SGB V sowie bei Bedarf über Haushaltshilfe nach § 38 SGB V abgedeckt. Die Verordnung wird bereits im Rahmen des Entlassmanagements im Krankenhaus ausgestellt.",
        qualityTitle: isUz ? "Jarrohlar bilan muvofiqlashtirish" : isRu ? "Координация с хирургами" : isEn ? "Surgical Coordination" : isTr ? "Holding İçi Entegre Ağ" : isAr ? "سلسلة متكاملة داخل منظومة المجموعة" : "Nahtlose Verbundkette",
        qualityText: isUz
          ? "NabiOta yagona ekotizimi tufayli operatsiya jarayoni va jarroh tavsiyalari to'g'risidagi ma'lumotlar patronaj hamshirasiga tezkor va xavfsiz tarzda uzatiladi."
          : isRu
          ? "Благодаря единой экосистеме NabiOta информация о ходе операции и рекомендациях хирурга передается патронажной сестре мгновенно и безопасно."
          : isEn
          ? "Within the NabiOta Health Group ecosystem, surgical discharge summaries and surgeon instructions are transferred directly and securely to the visiting nurse."
          : isTr
          ? "NabiOta Grubunun cerrahi birimleriyle yakın koordinasyon, ameliyat detaylarının ve hekim notlarının evde bakım planına eksiksiz aktarılmasını sağlar."
          : isAr
          ? "يضمن التنسيق الوثيق مع الأقسام الجراحية في مجموعة NabiOta انتقال كافة تفاصيل الجراحة وتوصيات الأطباء إلى خطة الرعاية المنزلية دون أي فجوات."
          : "Die enge Verzahnung mit den operativen Einheiten der NabiOta-Gruppe stellt sicher, dass postoperative Besonderheiten und OP-Berichte ohne Informationsverlust in den häuslichen Pflegeplan einfließen.",
        ctaButtonText: isUz ? "Operatsiyadan keyingi parvarishga buyurtma berish" : isRu ? "Заказать послеоперационный уход" : isEn ? "Arrange Post-Op Care" : isTr ? "Ameliyat Sonrası Bakım Talebi" : isAr ? "ترتيب رعاية ما بعد الجراحة" : "Nachsorge organisieren",
      },
    },
    {
      id: "spezialpflege",
      badge: isUz
        ? "MAXSUS PARVARISH"
        : isRu
        ? "СПЕЦИАЛЬНЫЙ УХОД"
        : isEn
        ? "SPECIALIZED NURSING"
        : isTr
        ? "UZMANLAŞMIŞ TEDAVİ"
        : isAr
        ? "علاج ورعاية متخصصة"
        : "SPEZIALISIERTE BEHANDLUNG",
      image: "/images/care/intensivpflege.webp",
      iconType: "pill",
      title: isUz
        ? "Stomalar, kateterlar va port-tizimlar"
        : isRu
        ? "Стомы, катетеры & порт-системы"
        : isEn
        ? "Stoma, Catheter & Port Management"
        : isTr
        ? "Stoma, Kateter & Port Yönetimi"
        : isAr
        ? "رعاية الفغرات، القساطر وأنظمة البورت"
        : "Stoma-, Katheter- & Portversorgung",
      shortDesc: isUz
        ? "Steril sharoitda stomalar, kateterlar, port-tizimlar hamda enteral va parenteral oziqlantirish bo'yicha yuqori malakali parvarish."
        : isRu
        ? "Квалифицированный уход за стомами, катетерами, порт-системами, а также энтеральным и парентеральным питанием в стерильных условиях."
        : isEn
        ? "Expert management of artificial access routes, enteral and parenteral nutrition, and sterile port flushing routines."
        : isTr
        ? "Drenaj ve yapay giriş yollarının nitelikli bakımı, enteral/parenteral beslenme ve steril koşullarda port yıkamaları."
        : isAr
        ? "رعاية فائقة للمنافذ والمصارف الجراحية، التغذية المعوية والوريدية، وغسيل البورت في ظروف معقمة تماماً."
        : "Qualifizierte Versorgung ableitender und künstlicher Zugänge, enterale/parenterale Ernährung und Portspülungen unter sterilen Bedingungen.",
      modal: {
        title: isUz
          ? "Stomalar, kateterlar va port-tizimlar parvarishi"
          : isRu
          ? "Уход за стомами, катетерами и порт-системами"
          : isEn
          ? "Specialized Stoma, Catheter & Port System Care"
          : isTr
          ? "Stoma, Kateter ve Port Bakımı"
          : isAr
          ? "رعاية الفغرات، القساطر وأنظمة البورت الوريدي"
          : "Stoma-, Katheter- & Portversorgung",
        subtitle: isUz
          ? "Maksimal sterillik, ishonchlilik va infeksiyalarning oldini olish"
          : isRu
          ? "Максимальная стерильность, надежность и предотвращение инфекций"
          : isEn
          ? "Maximum asepsis, skin protection, and catheter infection prevention"
          : isTr
          ? "En yüksek asepsi, cilt koruması ve güvenilir enfeksiyon önleme"
          : isAr
          ? "أعلى درجات التعقيم وحماية الجلد والوقاية الصارمة من العدوى"
          : "Höchste Asepsis, Hautschutz und zuverlässige Infektionsprävention",
        description: isUz
          ? "Maxsus invaziv tizimlar (kateterlar, kalo- va urostomalar, infuzion portlar, PEG zondlari) aseptika qoidalariga qat'iy rioya qilishni talab qiladi. Bizning hamshiralarimiz ixtisoslashgan parvarish bo'yicha chuqur tayyorgarlikdan o'tgan bo'lib, bu qon oqimi infeksiyalari, teri ta'sirlanishi va asboblar buzilishining oldini oladi."
          : isRu
          ? "Специальные инвазивные системы (катетеры, кало- и уростомы, инфузионные порты, зонды PEG) требуют строжайшего соблюдения правил асептики. Наши медсестры прошли углубленную подготовку по специализированному уходу, что позволяет предотвратить инфекции кровотока, раздражения кожи и поломку оборудования."
          : isEn
          ? "Invasive clinical access devices such as urinary catheters, enterostomies, urostomies, subcutaneous infusion ports, and PEG feeding tubes require rigorous aseptic protocols. Our specialized nurses possess advanced training to protect delicate peristomal skin, prevent bloodstream infections, and ensure smooth therapy delivery."
          : isTr
          ? "Suprapubik kateterler, kolostomiler, port kateterler veya PEG beslenme tüpleri gibi invaziv sistemler azami özen ve mutlak asepsi gerektirir. Özel eğitimli uzman hemşirelerimiz, enfeksiyonları önlemek ve hastaların yaşam kalitesini korumak için steril teknikleri eksiksiz uygular."
          : isAr
          ? "تتطلب الأجهزة التداخلية مثل القساطر البولية، الفغرات، قساطر البورت، أو أنابيب التغذية PEG عناية دقيقة وتعقيماً مطلقاً. يتقن كادرنا التمريضي المتخصص تقنيات اللمس المعقم لمنع العدوى الخطيرة وحماية صحة المريض."
          : "Invasive Zugangs- und Ableitungssysteme - wie suprapubische Katheter, Enterostomata, Portkatheter oder PEG-Ernährungssonden - verlangen äußerste Sorgfalt und strikte Asepsis. Unsere speziell geschulten Pflegefachkräfte beherrschen die sterile Non-Touch-Technik, um lebensbedrohliche Infektionen zu vermeiden und die Lebensqualität der Betroffenen zu sichern.",
        indicationsTitle: isUz ? "Qo'llash sohalari" : isRu ? "Области применения" : isEn ? "Clinical Devices & Systems" : isTr ? "Bakım ve Uygulama Odakları" : isAr ? "محاور الرعاية والتطبيقات" : "Versorgungsschwerpunkte",
        indications: isUz
          ? [
              "Kolostoma, ileostoma va urostomalar (vaqtinchalik va doimiy)",
              "Transuretral va qovuq usti (suprapubik) siydik kateterlari",
              "Teri osti venoz port-tizimlari (kimyoterapiya, uzoq muddatli infuziyalar)",
              "Nazogastral zondlar va gastrostomalar (PEG / PEJ) orqali enteral oziqlantirish",
              "Uy sharoitida parenteral tomir ichiga oziqlantirish",
              "Traxeostomali va sanatsiyaga muhtoj bemorlar",
            ]
          : isRu
          ? [
              "Колостомы, илеостомы и уростомы (временные и постоянные)",
              "Трансуретральные и надлобковые (супрапубические) мочевые катетеры",
              "Подкожные венозные порт-системы (химиотерапия, длительные инфузии)",
              "Энтеральное питание через назогастральные зонды и гастростомы (PEG / PEJ)",
              "Парентеральное внутривенное питание на дому",
              "Пациенты с трахеостомами и потребностью в санации",
            ]
          : isEn
          ? [
              "Colostomies, ileostomies, and urostomies (temporary or permanent)",
              "Transurethral and suprapubic urinary bladder catheters",
              "Subcutaneous central venous port systems (oncology, parenteral therapy)",
              "Enteral tube feeding via PEG, PEJ, or nasogastric tubes",
              "Home total parenteral nutrition (TPN) infusion protocols",
              "Tracheostomy care, cannula changes, and endotracheal suctioning",
            ]
          : isTr
          ? [
              "Kolostomi, ileostomi ve ürostomi (tek ve iki parçalı sistemler)",
              "Suprapubik ve transüretral kalıcı mesane kateterleri",
              "Kemoterapi veya ağrı tedavisi için implante port sistemleri",
              "PEG / PEJ üzerinden enteral tüple beslenme",
              "Evde parenteral beslenme ve intravenöz sıvı desteği",
              "Trakeostomi bakımı ve aspirasyon uygulamaları",
            ]
          : isAr
          ? [
              "فغر القولون، فغر اللفائفي وفغر المسالك البولية (أنظمة أحادية وثنائية)",
              "القساطر البولية الدائمة عبر الإحليل وعبر جدار البطن (فوق العانة)",
              "أنظمة البورت المزروعة للعلاج الكيميائي أو المسكنات",
              "التغذية المعوية عبر أنابيب فغر المعدة (PEG / PEJ)",
              "التغذية الوريدية الكاملة وإعطاء السوائل في المنزل",
              "رعاية فغر الرغامي (القصبة الهوائية) والشفط الإفرازي المتخصص",
            ]
          : [
              "Colostomie, Ileostomie und Urostomie (einteilige und zweiteilige Systeme)",
              "Suprapubische (Bauchdecken-) und transurethrale Blasenverweilkatheter",
              "Vollständig implantierte Port-Systeme für Chemotherapie oder Schmerztherapie",
              "Enterale Ernährung über perkutane endoskopische Gastrostomie (PEG / PEJ)",
              "Parenterale Ernährung und intravenöse Flüssigkeitssubstitution",
              "Tracheostoma-Versorgung und fachgerechte endotracheale Absaugung",
            ],
        scopeTitle: isUz ? "Parvarish rejasi va muolajalar" : isRu ? "План ухода и процедуры" : isEn ? "Care Interventions" : isTr ? "Hemşirelik ve Bakım Hizmetleri" : isAr ? "الخدمات والتدخلات التمريضية" : "Pflegerische Leistungen",
        scopeItems: isUz
          ? [
              "Terini himoya qilgan holda stoma plastinalari va kalopriyomniklarni aseptik almashtirish",
              "Shifokor ko'rsatmasiga binoan siydik kateterlarini yuvish va almashtirish",
              "Steril sharoitda maxsus Gyuber ignalari bilan port-tizimlarni punksiya qilish va yuvish",
              "Enteral va parenteral oziqlantirish nasoslarini sozlash va nazorat qilish",
              "Kateter bilan bog'liq siydik yo'llari infeksiyalarining (CAUTI) oldini olish",
              "Bemor va uning oila a'zolarini mustaqil muolaja qilishga o'rgatish",
            ]
          : isRu
          ? [
              "Асептическая смена стомических пластин и калоприемников с защитой кожи",
              "Промывание и смена мочевых катетеров в соответствии с предписанием врача",
              "Пункция и промывание порт-систем специальными иглами Губера в стерильных условиях",
              "Настройка и контроль работы помп для энтерального и парентерального питания",
              "Профилактика катетер-ассоциированных инфекций мочевыводящих путей (CAUTI)",
              "Обучение пациента и его родственников самостоятельным манипуляциям",
            ]
          : isEn
          ? [
              "Aseptic stoma plate & pouch changes with specialized skin barrier care",
              "Urinary catheter flushes, catheter changes, and sterile collection bag management",
              "Sterile port puncture with non-coring Huber needles and scheduled heparin flushes",
              "Programming and maintenance of automated enteral and parenteral feeding pumps",
              "Systematic prevention of catheter-associated infections per RKI recommendations",
              "Sensitive guidance and coaching for patients and family caregivers",
            ]
          : isTr
          ? [
              "Stoma plakalarının ve torba sistemlerinin cilt korumalı steril değişimi",
              "Mesane kateterlerinin hekim aralığına uygun steril değişimi ve yıkanması",
              "Huber iğneleriyle port sistemlerinin aseptik ponksiyonu ve steril pansumanı",
              "Beslenme pompalarının (PEG / TPN) bağlanması ve kontrolü",
              "Kateter ilişkili enfeksiyonlara karşı RKI önerilerine tam uyum",
              "Hasta ve yakınlarına evde güvenlik için rehberlik ve eğitim",
            ]
          : isAr
          ? [
              "تغيير معقم ولطيف لقواعد وأكياس الفغر مع حماية فائقة للجلد",
              "تغيير معقم وغسيل للقساطر البولية وفق الفترات المحددة طبياً",
              "وخز معقم لأنظمة البورت بإبر هوبر الخاصة وتغيير الضمادات المعقمة",
              "توصيل وضبط مضخات التغذية الأنبوبية والوريدية بدقة (PEG / TPN)",
              "الالتزام الصارم بتوصيات معهد RKI للوقاية من عدوى القساطر",
              "تدريب وتوجيه دافئ ومبسط لأفراد الأسرة لتحقيق الأمان اليومي",
            ]
          : [
              "Fachgerechter, atraumatischer Wechsel von Stomaplatten und Beutelsystemen inklusive Hautschutz",
              "Steriler Wechsel und Spülung von Blasenkathetern nach ärztlichem Intervall",
              "Aseptische Punktion von Portsystemen mit Huber-Sicherheitsnadeln und steriler Verbandwechsel",
              "Anschluss, Spülung und sachgemäße Bedienung von Ernährungspumpen (PEG / TPN)",
              "Strikte Einhaltung der RKI-Präventionsempfehlungen gegen Katheter-assoziierte Infektionen",
              "Einfühlsame Anleitung und Schulung von Angehörigen für mehr Sicherheit im Alltag",
            ],
        billingTitle: isUz ? "Sug'urta orqali moliyalashtirish" : isRu ? "Страховое финансирование" : isEn ? "Reimbursement" : isTr ? "Masraf Karşılama ve Tıbbi Cihazlar" : isAr ? "الجهات الضامنة والمستلزمات الطبية" : "Kostenträger & Hilfsmittel",
        billingText: isUz
          ? "Barcha muolajalar shifokor retsepti bo'yicha tibbiy kassa (SGB V) tomonidan qoplanadi. Kerakli sarf materiallari va uskunalar NabiOta Sanitätshaus GmbH orqali kassa bilan to'g'ridan-to'g'ri hisob-kitob qilinadi."
          : isRu
          ? "Все манипуляции покрываются больничной кассой (SGB V) по рецепту врача. Необходимые расходные материалы и аппараты поставляются через санитарный дом NabiOta Sanitätshaus GmbH с прямым расчетом с кассой."
          : isEn
          ? "Nursing interventions are covered by health insurance under SGB V. Associated consumables and equipment are supplied directly via our NabiOta Sanitätshaus GmbH medical supply unit."
          : isTr
          ? "Hemşirelik uygulamaları SGB V kapsamında sağlık sigortaları tarafından karşılanır. Gerekli medikal malzemeler, kateter setleri, stoma ürünleri doğrudan NabiOta Sanitätshaus üzerinden temin edilir."
          : isAr
          ? "تُغطى الإجراءات التمريضية بالكامل وفق SGB V من قبل التأمين الصحي. وتُورد المستلزمات الطبية، مجموعات القساطر، وأدوات الفغر مباشرة عبر متجر Sanitätshaus التابع للمجموعة."
          : "Die pflegerischen Maßnahmen werden vollumfänglich nach SGB V von den Krankenkassen vergütet. Die erforderlichen Hilfsmittel, Kathetersets, Stomaartikel und Ernährungsprodukte werden direkt über das NabiOta Sanitätshaus bezogen.",
        qualityTitle: isUz ? "Infeksion nazorat" : isRu ? "Инфекционный контроль" : isEn ? "Infection Control" : isTr ? "En Yüksek Hijyen Güvenliği" : isAr ? "أعلى معايير الأمان والتعقيم" : "Höchste Hygienesicherheit",
        qualityText: isUz
          ? "Gospital gigiyenasi protokollariga rioya qilgan holda, faqat bir martalik steril to'plamlar va sertifikatlangan antiseptiklardan foydalanamiz."
          : isRu
          ? "Мы используем исключительно одноразовые стерильные наборы и сертифицированные антисептики, соблюдая протоколы госпитальной гигиены."
          : isEn
          ? "We utilize strictly sterile disposable procedural packs and hospital-grade antiseptics, adhering to high-standard clinical hygiene guidelines."
          : isTr
          ? "Uygulamalar istisnasız sertifikalı steril tek kullanımlık setlerle ve klinik hijyen protokollerimize göre gerçekleştirilir."
          : isAr
          ? "يتم التنفيذ حصرياً باستخدام أطقم معقمة ذات استخدام أحادي ووفق خطط التعقيم المعتمدة بالمستشفيات."
          : "Die Durchführung erfolgt ausnahmslos mit zertifizierten sterilen Einmal-Sets unter strikter Beachtung unserer klinikkonformen Hygienepläne.",
        ctaButtonText: isUz ? "Kateter va stomalar bo'yicha maslahat" : isRu ? "Консультация по катетерам и стомам" : isEn ? "Request Specialist Nursing" : isTr ? "Özel Bakım Hizmeti Talebi" : isAr ? "طلب رعاية تمريضية متخصصة" : "Spezialpflege anfordern",
      },
    },
    {
      id: "beratung-entlastung",
      badge: isUz
        ? "§ 37.3 SGB XI • YENGILLATISH"
        : isRu
        ? "§ 37.3 SGB XI • РАЗГРУЗКА"
        : isEn
        ? "§ 37.3 SGB XI • COUNSELING"
        : isTr
        ? "§ 37.3 SGB XI & AİLEYE DESTEK"
        : isAr
        ? "§ 37.3 SGB XI ودعم أسر المرضى"
        : "§ 37.3 SGB XI & ENTLASTUNG",
      image: "/images/care/beratung.webp",
      iconType: "users",
      title: isUz
        ? "Maslahatlar, profilaktika va yaqinlarni qo'llab-quvvatlash"
        : isRu
        ? "Консультации, профилактика & разгрузка близких"
        : isEn
        ? "Care Counseling, Prophylaxis & Respite"
        : isTr
        ? "Bakım Danışmanlığı, Profilaksi & Aile Desteği"
        : isAr
        ? "استشارات الرعاية، الوقاية ودعم وتخفيف العبء عن الأسرة"
        : "Pflegeberatung, Prophylaxen & Angehörigenentlastung",
      shortDesc: isUz
        ? "§ 37.3 SGB XI bo'yicha majburiy maslahatlar, dekubitus va yiqilishlar profilaktikasi, qarindoshlarni o'rgatish va vaqtinchalik o'rinbosar parvarish."
        : isRu
        ? "Обязательные консультации по § 37.3 SGB XI, профилактика пролежней и падений, обучение родственников и временный замещающий уход."
        : isEn
        ? "Mandatory § 37.3 SGB XI counseling visits, fall and pressure injury prevention, caregiver coaching, and hourly respite care."
        : isTr
        ? "Yasal danışmanlık ziyaretleri (§ 37.3 SGB XI), düşme ve bası yarası profilaksisi, hasta yakını eğitimi ve saatlik ikame bakım."
        : isAr
        ? "زيارات الاستشارة القانونية الإلزامية (§ 37.3 SGB XI)، الوقاية من السقوط وقرح الفراش، تدريب الأسرة، والرعاية البديلة بالساعة."
        : "Gesetzliche Beratungseinsätze (§ 37 Abs. 3 SGB XI), Sturz- und Dekubitusprophylaxe, Anleitung Angehöriger sowie stundenweise Entlastung.",
      modal: {
        title: isUz
          ? "Maslahatlar, profilaktika va qarindoshlarni qo'llab-quvvatlash"
          : isRu
          ? "Консультации, профилактика и поддержка родственников"
          : isEn
          ? "Care Counseling (§ 37.3 SGB XI), Prevention & Respite Care"
          : isTr
          ? "Bakım Danışmanlığı (§ 37.3 SGB XI), Profilaksi ve Aileye Destek"
          : isAr
          ? "استشارات الرعاية (§ 37.3 SGB XI)، الوقاية وتخفيف العبء الأسري"
          : "Pflegeberatung (§ 37 Abs. 3 SGB XI), Prophylaxen & Entlastung",
        subtitle: isUz
          ? "Yaqinlarni charchoqdan asrash va sug'urta kassalari uchun rasmiy hisobotlar"
          : isRu
          ? "Защита близких от выгорания и официальные отчеты для больничных касс"
          : isEn
          ? "Preventing caregiver burnout and official statutory counseling for insurance funds"
          : isTr
          ? "Hasta yakınları için somut destek ve sosyal hukukta güvenilir rehberlik"
          : isAr
          ? "تخفيف ملموس للعبء عن كاهل الأسرة ومرافقة قانونية واجتماعية موثوقة"
          : "Spürbare Entlastung für Angehörige und verlässliche Begleitung im Sozialrecht",
        description: isUz
          ? "Yaqin insonni parvarish qilish ulkan ruhiy va jismoniy kuch talab etadi. NabiOta HomeCare nafaqat § 37.3 SGB XI bo'yicha kassa uchun majburiy tasdiqlash hujjatlarini rasmiylashtiradi, balki qarindoshlarga to'g'ri parvarish usullarini o'rgatadi, yuqoriroq Pflegegrad olishda ko'maklashadi va dam olishingiz zarur bo'lganda vaqtinchalik o'rinbosar parvarishni (Verhinderungspflege) tashkil etadi."
          : isRu
          ? "Уход за близким человеком требует колоссальных душевных и физических сил. NabiOta HomeCare не только оформляет обязательные для кассы подтверждения по § 37.3 SGB XI, но и практически обучает родственников правильным приемам ухода, помогает получить более высокий Pflegegrad и организует временную замену (Verhinderungspflege), когда вам нужен отдых."
          : isEn
          ? "Caring for a loved one is emotionally and physically demanding. NabiOta HomeCare not only conducts mandatory statutory counseling visits under § 37.3 SGB XI to preserve cash benefits, but also trains family members in ergonomic techniques, helps adjust Pflegegrad ratings, and provides respite care (§ 39/45b SGB XI) when caregivers need a well-deserved break."
          : isTr
          ? "Bir yakına bakmak muazzam bir güç gerektirir. NabiOta HomeCare yasal zorunlu § 37.3 SGB XI danışmanlık ziyaretlerini gerçekleştirir, bakım parası hakkınızı korur ve derece yükseltme başvurularında destek olur. Ayrıca ikame bakım (§ 39) ve ek rahatlama hizmetleriyle (§ 45b) ailelerin yükünü hafifletiriz."
          : isAr
          ? "تتطلب رعاية أحد أفراد الأسرة جهداً بدنياً ونفسياً هائلاً. تنفذ NabiOta HomeCare الزيارات الاستشارية الإلزامية وفق § 37.3 SGB XI لضمان استمرار بدل الرعاية، وتساعد في طلبات رفع درجة الرعاية، وتقدم الرعاية البديلة المؤقتة (§ 39) لتوفير قسط من الراحة للأسرة."
          : "Die Pflege eines Angehörigen erfordert enorme körperliche und seelische Kraft. Die NabiOta HomeCare führt die gesetzlich vorgeschriebenen Beratungseinsätze nach § 37 Abs. 3 SGB XI durch, sichert Ihren Anspruch auf Pflegegeld und unterstützt bei Höherstufungsanträgen. Zudem entlasten wir pflegende Angehörige durch stundenweise Verhinderungspflege (§ 39 SGB XI) und gezielte Entlastungsangebote (§ 45b SGB XI).",
        indicationsTitle: isRu ? "Кому адресована программа" : isEn ? "Who Needs This" : isTr ? "Bu Desteğin Devreye Girdiği Durumlar" : isAr ? "متى تحتاج الأسرة إلى هذا الدعم" : "Wann diese Unterstützung greift",
        indications: isUz
          ? [
              "Kassaga majburiy hisobot topshirishi kerak bo'lgan Pflegegeld oluvchilar",
              "Hissiy yoki jismoniy toliqishni his qilayotgan parvarishlovchi qarindoshlar",
              "Tibbiy-ijtimoiy ekspertizaga (MD / Pflegegrad) tayyorlanayotgan oilalar",
              "Yiqilish yoki yotoq yarasi paydo bo'lish xavfi yuqori bo'lgan bemorlar",
              "Parvarishlovchi qarindoshning ta'tili, kasalligi yoki shoshilinch ishlari davri",
              "Xonadonni nogironlar aravachasiga moslashtirish zarurati bo'lgan holatlar",
            ]
          : isRu
          ? [
              "Получатели пособия по уходу (Pflegegeld) для обязательного отчета в кассу",
              "Родственники, испытывающие эмоциональное или физическое истощение",
              "Семьи, готовящиеся к медико-социальной экспертизе (MD / Pflegegrad)",
              "Пациенты с высоким риском падений или появления пролежней",
              "Периоды отпуска, болезни или срочных дел ухаживающего родственника",
              "Необходимость переоборудования квартиры для инвалидной коляски",
            ]
          : isEn
          ? [
              "Recipients of statutory cash care allowances needing mandatory verification",
              "Family caregivers experiencing exhaustion, stress, or requiring holiday coverage",
              "Families preparing for medical assessment (MD) for initial or increased Pflegegrad",
              "Seniors facing high risks of accidental falls or immobility-related skin breakdown",
              "Periods when primary family caregivers fall ill or need personal time off",
              "Homes requiring barrier-free adaptations and technical care aids",
            ]
          : isTr
          ? [
              "Bakım parası alanlar için yasal danışmanlık zorunluluğu (§ 37.3 SGB XI)",
              "Tatil, hastalık veya acil durumlarda hasta yakınlarının dinlenme ihtiyacı (§ 39)",
              "Doğru bakım derecesinin tespiti için MD/MDK bilirkişi incelemesi öncesi aileler",
              "Yüksek düşme veya bası yarası riski taşıyan danışanlar",
              "Günlük yaşamda ergonomik kaldırma ve taşıma teknikleri eğitimi ihtiyacı",
              "Ev ortamını iyileştirici önlemler ve bakım yardımcıları danışmanlığı",
            ]
          : isAr
          ? [
              "الحاصلون على بدل الرعاية النقدي لضمان استحقاقهم القانوني (§ 37.3 SGB XI)",
              "أفراد الأسرة المعيلون في فترات العطلات، المرض أو الحاجة للراحة (§ 39 SGB XI)",
              "الأسر المقبلة على تقييم اللجان الطبية (MD) للحصول على درجة رعاية عادلة",
              "المرضى المعرضون لمخاطر السقوط أو قرح الفراش",
              "الحاجة إلى تدريب عملي على تقنيات حمل ونقل المريض المريحة للظهر",
              "استشارات تكييف بيئة المنزل وتوفير الأجهزة والمستلزمات الطبية المساعدة",
            ]
          : [
              "Bezieher von Pflegegeld zur Sicherung des Anspruchs (§ 37 Abs. 3 SGB XI)",
              "Pflegende Angehörige bei Urlaub, eigener Erkrankung oder Terminen (§ 39 SGB XI)",
              "Familien vor der MDK/MD-Begutachtung zur Erlangung eines gerechten Pflegegrads",
              "Gefährdete Klienten mit erhöhtem Sturzrisiko oder drohenden Druckgeschwüren",
              "Bedarf an praktischer Anleitung ergonomischer Hebetechniken im Alltag",
              "Beratung zu wohnumfeldverbessernden Maßnahmen und Pflegehilfsmitteln",
            ],
        scopeTitle: isUz ? "Xizmatlarimiz va yordamimiz" : isRu ? "Наши услуги и помощь" : isEn ? "Services Included" : isTr ? "Hizmet Kapsamı ve Destekler" : isAr ? "نطاق الخدمات والمساندة المقدمة" : "Leistungsumfang & Entlastung",
        scopeItems: isUz
          ? [
              "§ 37.3 SGB XI bo'yicha rasmiy tashriflarni o'tkazish va hisobotni kassaga yuborish",
              "Tibbiy xizmat eksperti (MD/MDK) tashrifi chog'ida hamrohlik qilish",
              "Yaqinlar uchun amaliy mashg'ulotlar: xavfsiz ko'chirish, cho'miltirish, jarohatlar profilaktikasi",
              "Ta'til yoki kasallik vaqtingizda o'rinbosar parvarish (§ 39 SGB XI)",
              "§ 45b SGB XI bo'yicha uy ro'zg'origa yordam va hamrohlik xizmatlari (kassadan 131 €/oy)",
              "Yiqilish xavfini baholash va NabiOta Sanitätshaus bilan antidekubitus tizimlarini tanlash",
            ]
          : isRu
          ? [
              "Проведение официальных визитов по § 37.3 SGB XI с отправкой отчета в кассу",
              "Сопровождение при визите эксперта Медицинской службы (MD/MDK)",
              "Практические уроки для близких: безопасные перемещения, мытье, профилактика травм",
              "Замещающий уход на время вашего отпуска или болезни (§ 39 SGB XI)",
              "Услуги помощи в быту и сопровождения по § 45b SGB XI (131 €/мес от кассы)",
              "Оценка риска падений и подбор противопролежневых систем с NabiOta Sanitätshaus",
            ]
          : isEn
          ? [
              "Conduct of mandatory § 37.3 SGB XI visits with direct electronic notification to insurer",
              "Personal advocacy and representation during statutory medical review (MD)",
              "Hands-on caregiver coaching: ergonomic transfers, gentle skin care, fall prevention",
              "Flexible substitute and respite care during caregiver holidays or illness (§ 39 SGB XI)",
              "Activation and everyday household assistance covered under § 45b SGB XI",
              "Systematic fall-risk screening and anti-decubitus mattress provision with Sanitätshaus",
            ]
          : isTr
          ? [
              "Bakım sandığına bildirimli yasal § 37.3 SGB XI danışmanlık ziyaretleri",
              "MD bakım derecesi incelemesine profesyonel hazırlık ve eşlik",
              "Evde pratik bakım eğitimleri: sırtı koruyan transfer teknikleri ve profilaksiler",
              "Bakıcı yakının yokluğunda saatlik veya günlük ikame bakım (§ 39 SGB XI)",
              "Ek rahatlama ve refakat hizmetleri (§ 45b SGB XI - aylık 131 € bütçe)",
              "Düşme ve bası yarası taraması ile Sanitätshaus üzerinden özel yatak temini",
            ]
          : isAr
          ? [
              "إجراء زيارات الاستشارة الإلزامية (§ 37.3 SGB XI) مع إرسال الإشعار للصندوق",
              "التحضير المهني والمرافقة الشخصية أثناء تقييم درجة الرعاية من قبل أطباء MD",
              "تدريب عملي للأسرة في المنزل: تقنيات نقل آمنة للظهر وطرق الوقاية السليمة",
              "رعاية بديلة بالساعات أو الأيام (§ 39 SGB XI) أثناء غياب المعيل الأساسي",
              "خدمات الرعاية المنزلية والمرافقة الترفيهية وفق § 45b SGB XI (131 € شهرياً)",
              "فحص مخاطر السقوط وقرح الفراش وتوفير مراتب وأنظمة خاصة عبر المتجر الطبي",
            ]
          : [
              "Durchführung der gesetzlichen Beratungseinsätze nach § 37 Abs. 3 SGB XI mit Nachweis an die Kasse",
              "Professionelle Vorbereitung und persönliche Begleitung bei der MD-Pflegegradbegutachtung",
              "Praktische Pflegeschulungen vor Ort: rückenschonende Transfertechniken und Prophylaxen",
              "Stunden- oder tageweise Verhinderungspflege (§ 39 SGB XI) bei Abwesenheit der Pflegeperson",
              "Zusätzliche Betreuungs- und Entlastungsleistungen nach § 45b SGB XI (z.B. Begleitung, Haushalt)",
              "Sturz- und Dekubitus-Screening sowie Bereitstellung von Spezialhilfsmitteln via Sanitätshaus",
            ],
        billingTitle: isUz ? "Kassa tomonidan 100% to'lanadi" : isRu ? "100% оплата кассой" : isEn ? "No Out-of-Pocket Cost" : isTr ? "Masraf Karşılama ve Yasal Bütçeler" : isAr ? "تغطية التكاليف والميزانيات القانونية" : "Kostenübernahme & Budgets",
        billingText: isUz
          ? "§ 37.3 SGB XI bo'yicha tashriflar parvarish kassasi tomonidan bemor tomonidan hech qanday qo'shimcha to'lovlarsiz 100% to'lanadi. O'rinbosar parvarish (§ 39: 1.612 € gacha) va yengillatish byudjetlari (§ 45b: oyiga 131 €) davlat tomonidan moliyalashtiriladi."
          : isRu
          ? "Визиты по § 37.3 SGB XI на 100% оплачиваются кассой по уходу без каких-либо доплат со стороны пациента. Бюджеты на замещающий уход (§ 39: до 1.612 €) и разгрузку (§ 45b: 131 €/мес) финансируются государством."
          : isEn
          ? "Statutory § 37.3 SGB XI counseling visits are 100% covered by long-term care insurance with zero out-of-pocket costs. Annual respite budgets (§ 39) and monthly relief allowances (§ 45b) can be fully utilized."
          : isTr
          ? "Yasal § 37.3 SGB XI danışmanlık ziyaretleri sizin için tamamen ücretsizdir ve doğrudan bakım sandığı ile mahsuplaşılır. İkame bakım bütçesi (yılda 1.612 €'ya kadar) ve ek rahatlama ödeneği (ayda 131 €) yasal hakkınızdır."
          : isAr
          ? "زيارات الاستشارة القانونية وفق § 37.3 SGB XI مجانية تماماً بالنسبة لكم وتُسوى مباشرة مع الصندوق. كما يحق لكم الاستفادة الكاملة من ميزانيات الرعاية البديلة (حتى 1.612 € سنوياً) ومبلغ تخفيف العبء (131 € شهرياً)."
          : "Die gesetzlichen Beratungseinsätze nach § 37 Abs. 3 SGB XI sind für Sie kostenfrei und werden direkt mit der Pflegekasse abgerechnet. Auch die Budgets für Verhinderungspflege (bis zu 1.612 €/Jahr) und der Entlastungsbetrag (131 €/Monat) stehen Ihnen gesetzlich zu.",
        qualityTitle: isUz ? "Sertifikatlangan maslahatchilar" : isRu ? "Сертифицированные консультанты" : isEn ? "Licensed Care Advisors" : isTr ? "Sertifikalı Bakım Danışmanları" : isAr ? "مستشارو رعاية معتمدون" : "Zertifizierte Pflegeberater",
        qualityText: isUz
          ? "Maslahatlarni Germaniya ijtimoiy huquqini chuqur biladigan va boy amaliy tajribaga ega bo'lgan diplomli parvarish mutaxassislari o'tkazadilar."
          : isRu
          ? "Консультации проводят дипломированные эксперты по уходу с глубоким знанием немецкого социального права и богатым практическим опытом."
          : isEn
          ? "Counseling is conducted by accredited eldercare specialists with comprehensive mastery of German social insurance regulations."
          : isTr
          ? "Danışmanlarımız SGB XI § 7a uyarınca resmi ek niteliklere sahiptir ve size empati ve uzmanlıkla rehberlik eder."
          : isAr
          ? "يحمل مستشارونا مؤهلات إضافية معتمدة وفق § 7a SGB XI ويقدمون مشورتهم بأسلوب إنساني رفيع وحلول عملية."
          : "Unsere Pflegeberater verfügen über anerkannte Zusatzqualifikationen nach § 7a SGB XI und beraten Sie empathisch, kompetent und lösungsorientiert.",
        ctaButtonText: isUz ? "Maslahatga yozilish (§ 37.3)" : isRu ? "Записаться на консультацию (§ 37.3)" : isEn ? "Schedule § 37.3 Visit" : isTr ? "Danışmanlık Ziyareti Talebi (§ 37.3)" : isAr ? "طلب زيارة استشارية (§ 37.3)" : "Beratungseinsatz anfordern",
      },
    },
  ];
}

export function getSanitaetshausServices(
  locale: SupportedLocale,
): CareServiceModalData[] {
  const { isUz, isRu, isEn, isTr, isAr } = localeFlags(locale);
  return [
    {
      id: "orthopaedie-bandagen",
      badge: isUz
        ? "§§ 126, 127 SGB V • HUNARMANDLIK PALATASI"
        : isRu
        ? "§§ 126, 127 SGB V • РЕМЕСЛЕННАЯ ПАЛАТА"
        : isEn
        ? "§§ 126, 127 SGB V • CRAFTS GUILD"
        : isTr
        ? "§§ 126, 127 SGB V • ZANAAT ODASI (HANDWERKSROLLE)"
        : isAr
        ? "§§ 126, 127 SGB V • غرفة الحرف اليدوية"
        : "§§ 126, 127 SGB V • HANDWERKSROLLE",
      image: "/images/nursing/stage-postsurgical.webp",
      iconType: "accessibility",
      title: isUz
        ? "Ortopedik ta'minot va bandajlar"
        : isRu
        ? "Ортопедическое обеспечение и бандажи"
        : isEn
        ? "Orthopedic Braces & Custom Bandages"
        : isTr
        ? "Ortopedik Yardımcı Cihazlar ve Bandajlar"
        : isAr
        ? "الأجهزة التعويضية والضمادات التقويمية"
        : "Orthopädische Hilfsmittel & Bandagen",
      shortDesc: isUz
        ? "Ortezlar, bo'g'im bandajlari, tayanch korsetlari va kompressiya trikotajini (I-IV sinf) individual tanlash va tayyorlash."
        : isRu
        ? "Индивидуальный подбор и изготовление ортезов, суставных бандажей, поддерживающих корсетов и компрессионного трикотажа (I-IV класс)."
        : isEn
        ? "Custom-fitted orthoses, dynamic joint braces, spinal support corsets, and medical compression garments (classes I-IV)."
        : isTr
        ? "Kişiye özel ortezler, fonksiyonel eklem bandajları, destek korseleri ve tıbbi kompresyon çorapları (I-IV. sınıf)."
        : isAr
        ? "جبائر وتقويمات مخصصة، دعامات المفاصل الوظيفية، مشدات الظهر الداعمة، والجوارب الضاغطة الطبية (الفئات I-IV)."
        : "Maßgefertigte Orthesen, funktionelle Gelenkbandagen, Stützkorsetts und medizinische Kompressionsversorgung (Klassen I-IV).",
      modal: {
        title: isUz
          ? "NabiOta Sanitätshaus: Ortopedik ta'minot"
          : isRu
          ? "NabiOta Sanitätshaus: Ортопедическое обеспечение"
          : isEn
          ? "NabiOta Medical Supplies: Orthopedic Appliances"
          : isTr
          ? "NabiOta Sanitätshaus: Ortopedik Donanım ve Cihazlar"
          : isAr
          ? "NabiOta Sanitätshaus: الأجهزة التعويضية والتجهيزات التقويمية"
          : "NabiOta Sanitätshaus: Orthopädische Versorgung",
        subtitle: isUz
          ? "Aniq biomexanik barqarorlashtirish va funksiyalarni tiklash"
          : isRu
          ? "Точная биомеханическая стабилизация и восстановление функций"
          : isEn
          ? "Precision Biomechanical Stabilization & Functional Recovery"
          : isTr
          ? "Hassas biyomekanik stabilizasyon ve hareket kabiliyetinin korunması"
          : isAr
          ? "تثبيت ميكانيكي حيوي دقيق واستعادة وظائف الحركة"
          : "Präzise biomechanische Stabilisierung und Funktionssicherung",
        description: isUz
          ? "NabiOta Sanitätshaus GmbH ortopediya ustaxonasi ilg'or hunarmandlik mahoratini tibbiy standartlar bilan birlashtiradi. Biz bo'g'imlarni yengillatish, qad-qomatni to'g'rilash va operatsiyadan keyingi himoya uchun ortopedik mahsulotlarni ishlab chiqaramiz va individual moslashtiramiz."
          : isRu
          ? "Ортопедическая мастерская NabiOta Sanitätshaus GmbH сочетает передовое ремесленное мастерство с медицинскими стандартами. Мы производим и индивидуально подгоняем ортопедические изделия для разгрузки суставов, коррекции осанки и постоперационной защиты."
          : isEn
          ? "The certified orthopedic workshop of NabiOta Sanitätshaus GmbH unites traditional master craftsmanship with clinical precision. We configure and customize orthopedic appliances to relieve joint stress, correct alignment, and ensure safe postoperative recovery."
          : isTr
          ? "NabiOta Sanitätshaus GmbH'nin sertifikalı ortopedi atölyesi, geleneksel zanaat ustalığını en modern klinik standartlarla buluşturur. Zanaat Yönetmeliği ve §§ 126, 127 SGB V uyarınca kas-iskelet sistemini rahatlatmak, yönlendirmek ve stabilize etmek amacıyla ortopedik ürünleri kişiye özel uyarlıyor ve üretiyoruz."
          : isAr
          ? "تجمع ورشة الأجهزة التعويضية المعتمدة في NabiOta Sanitätshaus GmbH بين الدقة الحرفية المتوارثة وأحدث المعايير الطبية السريرية. وفقاً للائحة الحرف والفقرات §§ 126, 127 SGB V، نقوم بتصنيع ومواءمة الأجهزة التقويمية لتخفيف الحمل عن الجهاز الحركي وتثبيته بكفاءة."
          : "Die zertifizierte orthopädietechnische Werkstatt der NabiOta Sanitätshaus GmbH verbindet handwerkliche Präzision mit modernster medizinischer Versorgung. Gemäß Handwerksordnung und §§ 126, 127 SGB V fertigen und adaptieren wir orthopädische Hilfsmittel zur gezielten Entlastung, Führung und Stabilisierung des Bewegungsapparats.",
        indicationsTitle: isUz
          ? "Tibbiy ko'rsatmalar"
          : isRu
          ? "Медицинские показания"
          : isEn
          ? "Clinical Indications"
          : isTr
          ? "Tıbbi Endikasyonlar"
          : isAr
          ? "دواعي الاستعمال الطبية"
          : "Medizinische Indikationen",
        indications: isUz
          ? [
              "Xochsimon paylar, menisklar va bo'g'imlar operatsiyalaridan keyingi holatlar",
              "Yaqqol gonartroz, koksartroz va to'piq beqarorligi",
              "Umurtqa pog'onasi deformatsiyalari va degenerativ kasalliklari (grija, skolioz)",
              "Surunkali venoz yetishmovchilik, limfedema va tromboz profilaktikasi",
            ]
          : isRu
          ? [
              "Состояния после операций на крестообразных связках, менисках и суставах",
              "Выраженный гонартроз, коксартроз и нестабильность голеностопа",
              "Деформации и дегенеративные заболевания позвоночника (грыжи, сколиоз)",
              "Хроническая венозная недостаточность, лимфедема и профилактика тромбоза",
            ]
          : isEn
          ? [
              "Postoperative immobilization following ACL, meniscus, or joint surgeries",
              "Severe gonarthrosis, coxarthrosis, and chronic ligament instability",
              "Spinal degenerative disorders, disc herniations, and scoliosis",
              "Chronic venous insufficiency, lymphedema, and deep vein thrombosis prophylaxis",
            ]
          : isTr
          ? [
              "Çapraz bağ, menisküs veya eklem ameliyatları sonrası postoperatif stabilizasyon",
              "İleri evre gonartroz, koksartroz ve kronik bağ instabiliteleri",
              "Dejeneratif omurga hastalıkları, bel fıtıkları ve skolyoz",
              "Kronik venöz yetmezlik, lenfödem ve postoperatif tromboz profilaksisi",
            ]
          : isAr
          ? [
              "التثبيت بعد جراحات الرباط الصليبي، الغضروف المفصلي أو المفاصل",
              "الفصال العظمي المتقدم في الركبة والورك وعدم استقرار الأربطة المزمن",
              "أمراض العمود الفقري التنكسية، الانزلاق الغضروفي والجنف",
              "القصور الوريدي المزمن، الوذمة اللمفية والوقاية من الجلطات بعد الجراحة",
            ]
          : [
              "Postoperative Stabilisierung nach Kreuzband-, Meniskus- oder Gelenkoperationen",
              "Fortgeschrittene Gonarthrose, Koxarthrose und chronische Bandinstabilitäten",
              "Degenerative Wirbelsäulenerkrankungen, Bandscheibenvorfälle und Skoliosen",
              "Chronisch-venöse Insuffizienz, Lymphödeme und postoperative Thromboseprophylaxe",
            ],
        scopeTitle: isUz
          ? "Mahsulotlar va xizmatlar ko'lami"
          : isRu
          ? "Спектр изделий и услуг"
          : isEn
          ? "Product & Service Scope"
          : isTr
          ? "Ürün ve Hizmet Kapsamı"
          : isAr
          ? "نطاق المنتجات والخدمات"
          : "Leistungsumfang & Versorgung",
        scopeItems: isUz
          ? [
              "Tizza, yelka, tirsak va bilak bo'g'imlari uchun anatomik bandajlar",
              "Bukilish burchagi sozlanadigan sharnirli qattiq va yarim qattiq ortezlar",
              "Bel va ko'krak umurtqa sohalari uchun ixtisoslashtirilgan korsetlar",
              "Tibbiy kompressiya trikotajini individual o'lchash va tanlash (RAL standarti)",
            ]
          : isRu
          ? [
              "Анатомические бандажи для коленного, плечевого, локтевого и лучезапястного суставов",
              "Шарнирные жесткие и полужесткие ортезы с регулируемым углом сгибания",
              "Специализированные корсеты для поясничного и грудного отделов позвоночника",
              "Индивидуальный замер и подбор медицинского компрессионного трикотажа (RAL-стандарт)",
            ]
          : isEn
          ? [
              "Anatomical braces for knee, shoulder, elbow, and wrist joints",
              "Hinged functional orthoses with adjustable flexion/extension limits",
              "Custom-fitted spinal corsets and supportive lumbar orthoses",
              "Certified measure-taking for medical circular/flat-knit compression stockings",
            ]
          : isTr
          ? [
              "Diz, ayak bileği, omuz ve el bileği için anatomik dokuma eklem bandajları",
              "Belirli fleksiyon/ekstansiyon açılı sert çerçeveli ve fonksiyonel ortezler",
              "Omurgayı stabilize edici ortezler, gövde korseleri ve yük azaltıcı kemerler",
              "Medikal yuvarlak ve düz örgü kompresyon giysileri için sertifikalı ölçü alımı",
            ]
          : isAr
          ? [
              "ضمادات مفاصل تشريحية محبوكة للركبة، الكاحل، الكتف والمعصم",
              "جبائر وظيفية ذات إطار صلب مع تحكم دقيق بزوايا الثني والبسط",
              "تقويمات داعمة للعمود الفقري، مشدات الجذع وأحزمة تفريغ الضغط",
              "أخذ قياسات معتمد للجوارب الضاغطة الطبية المحبوكة الدائرية والمسطحة",
            ]
          : [
              "Anatomisch gestrickte Gelenkbandagen für Knie, Sprunggelenk, Schulter und Hand",
              "Hartrahmen- und Funktionsorthesen mit definierter Flexions-/Extensionsbegrenzung",
              "Stabilisierende Wirbelsäulenorthesen, Rumpfkorsetts und Entlastungsbandagen",
              "Zertifizierte Maßabnahme für medizinische Rund- und Flachstrickkompression",
            ],
        billingTitle: isUz
          ? "Moliyalashtirish va retseptlar"
          : isRu
          ? "Финансирование и рецепты"
          : isEn
          ? "Statutory Reimbursement"
          : isTr
          ? "Reçete ve Masraf Karşılama"
          : isAr
          ? "طرق الوصفة الطبية وتسوية التكاليف"
          : "Verordnungs- und Abrechnungswege",
        billingText: isUz
          ? "Barcha mahsulotlar shifokor retsepti (Muster 16) bo'yicha §§ 126, 127 SGB V ga binoan Germaniyaning barcha davlat (GKV) va xususiy (PKV) sug'urta kassalari bilan to'g'ridan-to'g'ri hisob-kitob asosida yetkazib beriladi."
          : isRu
          ? "Все изделия поставляются по врачебному рецепту (Muster 16) с прямым расчетом со всеми государственными (GKV) и частными (PKV) страховыми кассами Германии в соответствии с §§ 126, 127 SGB V."
          : isEn
          ? "Reimbursed under statutory physician prescription (Muster 16) with direct settlement across all German public (GKV) and private (PKV) health insurers pursuant to §§ 126, 127 SGB V."
          : isTr
          ? "Tedarik, hekim tarafından düzenlenen tıbbi malzeme reçetesine (Muster 16) dayanır. §§ 126, 127 SGB V uyarınca ön yeterlilik (Präqualifizierung) sahibi bir sağlık sağlayıcısı olarak tüm resmi ve özel sağlık kasalarıyla doğrudan mahsuplaşıyoruz."
          : isAr
          ? "يتم التوريد بموجب وصفة المستلزمات الطبية المعتمدة من الطبيب (Muster 16). بصفتنا مزود رعاية معتمد ومؤهل وفق §§ 126, 127 SGB V، نسوي النفقات مباشرة مع كافة صناديق التأمين الصحي القانونية والخاصة."
          : "Die Versorgung erfolgt auf Grundlage einer vertragsärztlichen Hilfsmittelverordnung (Muster 16). Als präqualifizierter Leistungserbringer nach §§ 126, 127 SGB V rechnen wir direkt mit allen gesetzlichen und privaten Krankenkassen ab.",
        qualityTitle: isUz
          ? "Sifat standartlari"
          : isRu
          ? "Стандарты качества"
          : isEn
          ? "Quality Standards"
          : isTr
          ? "Kalite Standartları"
          : isAr
          ? "معايير الجودة والاعتماد"
          : "Qualitätsstandards",
        qualityText: isUz
          ? "Hunarmandlik palatasida (Handwerksrolle) ro'yxatdan o'tganlik, EU-MDR sertifikatsiyasi va tajribali usta-ortopedlar tomonidan shaxsan kiyib ko'rsatish."
          : isRu
          ? "Запись в ремесленной палате (Handwerksrolle), сертификация EU-MDR и персональная примерка опытными мастерами-ортопедами."
          : isEn
          ? "Registered with the German Crafts Guild (Handwerksrolle), EU-MDR compliant, and fitted by master orthopedic technicians."
          : isTr
          ? "Ortopedi tekniği zanaat siciline (Handwerksrolle) kayıt, AB Tıbbi Cihaz Tüzüğü (EU-MDR) uyumu ve uzman ustalar tarafından kişisel danışmanlık."
          : isAr
          ? "قيد رسمي في سجل الحرف اليدوية للأجهزة التقويمية (Handwerksrolle)، الامتثال للائحة الأوروبية للأجهزة الطبية (EU-MDR)، ومتابعة فردية من فنيين وخبراء معتمدين."
          : "Eintragung in die Handwerksrolle für Orthopädietechnik, Einhaltung der EU-Medizinprodukteverordnung (MDR) und individuelle Fachberatung durch Meister.",
        ctaButtonText: isUz
          ? "Ortopedik yordam so'rash"
          : isRu
          ? "Запросить ортопедическую помощь"
          : isEn
          ? "Request Orthopedic Consultation"
          : isTr
          ? "Ortopedik Yardımcı Talep Et"
          : isAr
          ? "طلب مستلزمات وأجهزة تقويمية"
          : "Hilfsmittel anfragen",
      },
    },
    {
      id: "mobilitaet-rehatechnik",
      badge: isUz
        ? "HARAKATCHANLIK • ERKIN HARAKAT"
        : isRu
        ? "МОБИЛЬНОСТЬ • СВОБОДА ДВИЖЕНИЯ"
        : isEn
        ? "MOBILITY • INDEPENDENCE"
        : isTr
        ? "HAREKETLİLİK • BAĞIMSIZ YAŞAM"
        : isAr
        ? "الحركة • الاستقلالية الذاتية"
        : "MOBILITÄT • SELBSTSTÄNDIGKEIT",
      image: "/images/nursing/stage-senior.webp",
      iconType: "accessibility",
      title: isUz
        ? "Harakatchanlik va reabilitatsiya texnikasi"
        : isRu
        ? "Мобильность и реабилитационная техника"
        : isEn
        ? "Mobility & Rehabilitation Technology"
        : isTr
        ? "Mobilite ve Rehabilitasyon Teknolojisi"
        : isAr
        ? "تقنيات الحركة والتأهيل الطبي"
        : "Mobilitäts- & Rehabilitationstechnik",
      shortDesc: isUz
        ? "Xavfsiz harakatlanish uchun faol va palliativ nogironlar aravachalari, yengil rollatorlar, qo'ltiqtayoqlar va elektr ko'targichlar."
        : isRu
        ? "Активные и паллиативные инвалидные коляски, легкие роллаторы, костыли и электрические подъемники для безопасного передвижения."
        : isEn
        ? "Active and multi-position wheelchairs, lightweight rollators, crutches, and patient transfer lifters for safe mobility."
        : isTr
        ? "Aktif ve bakım tipi tekerlekli sandalyeler, ergonomik hafif tekerlekli yürüteçler (rollator), yürüme destekleri ve elektrikli hasta taşıma lifterleri."
        : isAr
        ? "كراسي متحركة نشطة ومخصصة للرعاية، مشايات خفيفة الوزن ومريحة (Rollator)، عكازات ورافعات كهربائية لنقل المرضى بأمان."
        : "Aktiv- und Pflegerollstühle, ergonomische Leichtgewicht-Rollatoren, Gehhilfen und elektrische Patientenlifter.",
      modal: {
        title: isUz
          ? "NabiOta Sanitätshaus: Harakatchanlik va reabilitatsiya texnikasi"
          : isRu
          ? "NabiOta Sanitätshaus: Мобильность и реабилитационная техника"
          : isEn
          ? "NabiOta Medical Supplies: Mobility & Rehabilitation"
          : isTr
          ? "NabiOta Sanitätshaus: Mobilite ve Rehabilitasyon Teknolojisi"
          : isAr
          ? "NabiOta Sanitätshaus: تقنيات الحركة والتأهيل"
          : "NabiOta Sanitätshaus: Mobilitäts- & Rehatechnik",
        subtitle: isUz
          ? "Faollikni saqlash, yiqilishlarning oldini olish va parvarishni osonlashtirish"
          : isRu
          ? "Сохранение активности, предотвращение падений и облегчение ухода"
          : isEn
          ? "Preserving Independence, Fall Prevention & Transfer Assistance"
          : isTr
          ? "Hareketliliğin korunması, düşmelerin önlenmesi ve günlük yaşamda destek"
          : isAr
          ? "الحفاظ على الحركة، الوقاية من السقوط وتيسير الحياة اليومية"
          : "Erhalt der Mobilität, Sturzprävention und Unterstützung im Alltag",
        description: isUz
          ? "Harakatlanishning cheklanishi hayotni chegaralamasligi kerak. NabiOta Sanitätshaus GmbH har bir bemorning individual anatomik va jismoniy xususiyatlariga mos keladigan harakatlanish vositalarini tanlaydi, yetkazib beradi va sozlaydi."
          : isRu
          ? "Потеря подвижности не должна ограничивать жизнь. NabiOta Sanitätshaus GmbH подбирает, доставляет и настраивает средства передвижения под индивидуальные анатомические и физические особенности каждого пациента."
          : isEn
          ? "Mobility restrictions should never diminish quality of life. NabiOta Sanitätshaus GmbH configures, delivers, and ergonomically adapts mobility equipment to each patient's individual biomechanical requirements."
          : isTr
          ? "Kısıtlı hareketlilik, yaşam kalitesinden ödün vermek anlamına gelmez. NabiOta Sanitätshaus GmbH, danışanların fiziksel durumuna, ev koşullarına ve bireysel aktivite seviyesine tam olarak uyarlanmış en modern mobilite araçlarını sunar."
          : isAr
          ? "محدودية الحركة لا تعني فقدان جودة الحياة. توفر NabiOta Sanitätshaus GmbH أحدث وسائل الحركة المساعدة المصممة بدقة لتناسب البنية الجسدية للمريض وبيئته المنزلية ومستوى نشاطه اليومي."
          : "Eingeschränkte Mobilität bedeutet Verlust an Lebensqualität. Die NabiOta Sanitätshaus GmbH versorgt Patienten mit modernsten Mobilitätshilfen, die exakt auf die körperliche Verfassung, die häusliche Umgebung und den individuellen Aktivitätsgrad abgestimmt werden.",
        indicationsTitle: isUz
          ? "Tibbiy ko'rsatmalar"
          : isRu
          ? "Медицинские показания"
          : isEn
          ? "Clinical Indications"
          : isTr
          ? "Tıbbi Endikasyonlar"
          : isAr
          ? "دواعي الاستعمال الطبية"
          : "Medizinische Indikationen",
        indications: isUz
          ? [
              "Chanoq-son va tizza bo'g'imlarini endoprotezlashdan (TEP) keyin tiklanish",
              "Insult yoki bosh miya jarohatidan keyingi parezlar va yurish buzilishlari",
              "Yoshga bog'liq zaiflik, ataksiya hamda uyda va ko'chada yiqilish xavfining yuqoriligi",
              "Mushak distrofiyasi, tarqoq skleroz va Parkinson kasalligining og'ir shakllari",
            ]
          : isRu
          ? [
              "Восстановление после эндопротезирования тазобедренного и коленного суставов (TEP)",
              "Парезы и нарушения походки после инсульта или черепно-мозговой травмы",
              "Возрастная слабость, атаксия и повышенный риск падений дома и на улице",
              "Тяжелые формы мышечной дистрофии, рассеянного склероза и болезни Паркинсона",
            ]
          : isEn
          ? [
              "Rehabilitation following total hip or knee replacement (THR/TKR)",
              "Paresis and gait ataxia following stroke or traumatic neurotrauma",
              "Frailty, vestibular balance deficits, and heightened domestic fall risks",
              "Progressive neurological conditions (Multiple Sclerosis, Parkinson's disease)",
            ]
          : isTr
          ? [
              "Kalça veya diz total endoprotez (TEP) ameliyatları sonrası rehabilitasyon",
              "İnme (apopleksi) veya kafa travması sonrası parezi ve yürüme dengesizlikleri",
              "Geriatrik travmatoloji, yürüme ataksisi ve belirgin düşme riski",
              "İlerlemiş nörolojik hastalıklar (Parkinson, Multipl Skleroz)",
            ]
          : isAr
          ? [
              "التأهيل الطبي بعد عمليات استبدال مفصل الورك أو الركبة الكاملة (TEP)",
              "الشلل الجزئي واضطراب المشي بعد الجلطة الدماغية أو إصابات الدماغ الرضية",
              "ضعف الحركة لدى كبار السن، الرنح وازدياد مخاطر السقوط بشكل ملحوظ",
              "الأمراض العصبية المتقدمة (مرض باركنسون، التصلب اللويحي المتعدد)",
            ]
          : [
              "Rehabilitation nach Hüft- oder Knie-Totalendoprothesen (TEP)",
              "Paresen und Gangunsicherheiten nach Apoplex oder Schädel-Hirn-Trauma",
              "Alterstraumatologie, Gangataxie und signifikant erhöhtes Sturzrisiko",
              "Fortgeschrittene neurologische Erkrankungen (Morbus Parkinson, Multiple Sklerose)",
            ],
        scopeTitle: isUz
          ? "Reabilitatsiya texnikasi ko'lami"
          : isRu
          ? "Спектр реабилитационной техники"
          : isEn
          ? "Equipment Continuum"
          : isTr
          ? "Yardımcı Cihaz Yelpazesi"
          : isAr
          ? "طيف الأجهزة المساعدة المتاحة"
          : "Hilfsmittelspektrum",
        scopeItems: isUz
          ? [
              "Individual sozlanadigan xona ichi va ko'cha uchun yengillashtirilgan aravachalar",
              "Orqa suyanchig'i egiluvchan va bosh tayanchiga ega ko'p funksiyali aravachalar",
              "Tormozlar, sumka va yumshoq o'rindiqqa ega alyuminiy va uglerod tolali rollatorlar",
              "Tirsakli qo'ltiqtayoqlar, xodunoklar, aylanma yostiqlar va elektr ko'targichlar",
            ]
          : isRu
          ? [
              "Комнатные и уличные облегченные коляски с индивидуальной регулировкой",
              "Многофункциональные кресла-коляски с функцией наклона спинки и подголовником",
              "Алюминиевые и карбоновые роллаторы с тормозами, сумкой и мягким сиденьем",
              "Подлокотные костыли, ходунки, поворотные подушки и электрические подъемники",
            ]
          : isEn
          ? [
              "Indoor and outdoor lightweight manual wheelchairs with ergonomic adjustments",
              "Multifunctional tilt-in-space comfort wheelchairs for high dependency",
              "Carbon-fiber and aluminum rollators with dual braking and resting seats",
              "Forearm crutches, reciprocal walking frames, and electric patient hoists",
            ]
          : isTr
          ? [
              "İç ve dış mekan için hafif ve adaptif tekerlekli sandalyeler",
              "Tilt ve yatış pozisyonu özellikli çok fonksiyonlu bakım tekerlekli sandalyeleri",
              "Oturma fileli, çantalı ve çift kilit frenli ergonomik hafif rollatorlar",
              "Önkol koltuk değnekleri, dört ayaklı destekler, döner diskler ve elektrikli hasta vinçleri",
            ]
          : isAr
          ? [
              "كراسي متحركة خفيفة وقابلة للتعديل للاستخدام المنزلي والخارجي",
              "كراسي رعاية متعددة الوظائف قابلة للإمالة وتعديل وضعية الاستلقاء",
              "مشايات خفيفة مريحة (Rollator) مزودة بمقعد شبكي، حقيبة وفرامل أمان مزدوجة",
              "عكازات ساندة للساعد، دعامات رباعية الأرجل، أقراص تدوير ورافعات مرضى كهربائية",
            ]
          : [
              "Leichtgewicht- und Adaptivrollstühle für Innen- und Außenbereich",
              "Multifunktionale Pflegerollstühle mit Kantelung und Liegefunktion",
              "Ergonomische Leichtgewicht-Rollatoren mit Sitznetz, Tasche und Doppelfeststellbremse",
              "Unterarmgehstützen, Vierfuß-Gehhilfen, Drehscheiben und elektrische Patientenlifter",
            ],
        billingTitle: isUz
          ? "Kassalar to'lovi va yetkazib berish"
          : isRu
          ? "Оплата кассами и доставка"
          : isEn
          ? "Insurance Settlement"
          : isTr
          ? "Masraf Karşılama ve Teslimat"
          : isAr
          ? "تغطية التكاليف والتوصيل المنزلي"
          : "Kostenübernahme & Lieferung",
        billingText: isUz
          ? "Tibbiy kassalar (SGB V) tomonidan moliyalashtiriladi. Biz xarajat smetasini tasdiqlashni (Kostenvoranschlag), uyga bepul yetkazib berishni va xavfsizlik bo'yicha amaliy ko'rsatmalarni o'z zimmamizga olamiz."
          : isRu
          ? "Финансируется медицинскими кассами (SGB V). Мы берем на себя оформление согласований (Kostenvoranschlag), бесплатную доставку на дом и практический инструктаж по безопасности."
          : isEn
          ? "Covered under German statutory health insurance (SGB V). We handle all pre-authorizations (Kostenvoranschlag), home delivery, and safe usage training."
          : isTr
          ? "Masraflar, yasal veya özel sağlık sigortasından maliyet onayı (Kostenvoranschlag) alındıktan sonra karşılanır. Başvuruların tamamını üstleniyor, eve ücretsiz teslimat yapıyor ve ergonomik kullanım eğitimi veriyoruz."
          : isAr
          ? "يتحمل التأمين الصحي القانوني أو الخاص التكاليف بعد الموافقة على عرض السعر (Kostenvoranschlag). نتولى جميع إجراءات التقديم والتسوية، والتوصيل المجاني إلى المنزل مع التدريب العملي على الاستخدام الآمن."
          : "Die Kosten werden nach Bewilligung des Kostenvoranschlags durch die gesetzliche oder private Krankenversicherung getragen. Wir übernehmen die gesamte Einreichung, die kostenfreie Anlieferung nach Hause und die ergonomische Einweisung.",
        qualityTitle: isUz
          ? "Xizmat ko'rsatish va xavfsizlik"
          : isRu
          ? "Сервис и безопасность"
          : isEn
          ? "Safety & Maintenance"
          : isTr
          ? "Güvenlik ve Bakım Onarım"
          : isAr
          ? "السلامة والصيانة الفنية"
          : "Sicherheit & Wartung",
        qualityText: isUz
          ? "Muntazam texnik ko'rik (STK), ta'mirlash, eskirgan qismlarni almashtirish va uskunalarni sanitariya ishlovi."
          : isRu
          ? "Регулярный технический осмотр (STK), ремонт, замена быстроизнашивающихся деталей и санитарная обработка оборудования."
          : isEn
          ? "Safety inspections (STK), technical servicing, spare parts warranty, and certified hygienic preparation."
          : isTr
          ? "Düzenli güvenlik kontrolleri (STK), mobil onarım servisi ve sertifikalı hijyenik yeniden kullanıma hazırlama."
          : isAr
          ? "فحوصات سلامة دورية معتمدة (STK)، خدمة صيانة وإصلاح متنقلة، وتجهيز صحي وتعقيم معتمد للأجهزة."
          : "Regelmäßige sicherheitstechnische Kontrollen (STK), mobiler Reparaturservice und zertifizierte hygienische Wiederaufbereitung.",
        ctaButtonText: isUz
          ? "Aravacha yoki rollator tanlash"
          : isRu
          ? "Подобрать коляску или роллатор"
          : isEn
          ? "Inquire Mobility Aid"
          : isTr
          ? "Mobilite Yardımcısı Talep Et"
          : isAr
          ? "طلب وسيلة مساعدة على الحركة"
          : "Mobilitätshilfe anfragen",
      },
    },
    {
      id: "haeusliche-betten",
      badge: isUz
        ? "SGB XI & SGB V • UYDA PARVARISH"
        : isRu
        ? "SGB XI & SGB V • УХОД НА ДОМУ"
        : isEn
        ? "SGB XI & SGB V • HOME CARE BEDS"
        : isTr
        ? "SGB XI & SGB V • EVDE BAKIM YATAKLARI"
        : isAr
        ? "SGB XI & SGB V • أسرة الرعاية المنزلية"
        : "SGB XI & SGB V • PFLEGEBETTEN",
      image: "/images/nursing/stage-rehab.webp",
      iconType: "home",
      title: isUz
        ? "Funksional krovatlar va parvarish jihozlari"
        : isRu
        ? "Функциональные кровати и оснащение для ухода"
        : isEn
        ? "Medical Care Beds & Home Ergonomics"
        : isTr
        ? "Evde Bakım ve Yatak Donanımı"
        : isAr
        ? "أسرة الرعاية وتجهيزات المنزل الطبية"
        : "Häusliche Pflege- & Bettenausstattung",
      shortDesc: isUz
        ? "Elektr uzatmali tibbiy funksional krovatlar, antidekubitus matraslari, ko'targichlar va sanuzel jihozlari."
        : isRu
        ? "Медицинские функциональные кровати с электроприводом, противопролежневые матрасы, подъемники и оснащение санузлов."
        : isEn
        ? "Electric profiling medical care beds, dynamic pressure-relieving mattresses, bathroom lifters, and safety rails."
        : isTr
        ? "Elektrikli ayarlanabilir bakım yatakları, bası yarası önleyici (antidekübit) yataklar, hasta kaldırma barları ve engelsiz hijyen yardımcıları."
        : isAr
        ? "أسرة رعاية كهربائية متعددة الأوضاع، مراتب وقاية وعلاج قرح الفراش، رافعات مساعدة للمريض وتجهيزات حمام خالية من العوائق."
        : "Elektrisch verstellbare Pflegebetten, Antidekubitus-Matratzen, Patientenaufrichter und barrierefreie Hygienehilfen.",
      modal: {
        title: isUz
          ? "NabiOta Sanitätshaus: Funksional krovatlar va uyda parvarish"
          : isRu
          ? "NabiOta Sanitätshaus: Функциональные кровати и уход на дому"
          : isEn
          ? "NabiOta Medical Supplies: Specialized Care Beds"
          : isTr
          ? "NabiOta Sanitätshaus: Bakım Yatakları ve Yaşam Alanı Uyarlaması"
          : isAr
          ? "NabiOta Sanitätshaus: أسرة الرعاية وتكييف بيئة المعيشة"
          : "NabiOta Sanitätshaus: Pflegebetten & Wohnraumanpassung",
        subtitle: isUz
          ? "Uy sharoitida ergonomika, xavfsizlik va yotoq yaralaridan himoya"
          : isRu
          ? "Эргономика, безопасность и защита от пролежней в домашних условиях"
          : isEn
          ? "Clinical Ergonomics, Safety, and Advanced Pressure Injury Prevention"
          : isTr
          ? "Ergonomik bakım koşulları ve azami yatış konforu"
          : isAr
          ? "ظروف عمل مريحة ومريحة وتوفير أقصى درجات الراحة للمريض"
          : "Ergonomische Arbeitsbedingungen und maximaler Liegekomfort",
        description: isUz
          ? "Sifatli parvarishni to'g'ri jihozlarsiz tasavvur qilib bo'lmaydi. NabiOta Sanitätshaus elektr ko'p funksiyali krovatlarni tezkor o'rnatadi, yotoq yarasi xavfiga mos matraslarni tanlaydi va maksimal xavfsizlik uchun yuvinish xonalarini jihozlaydi."
          : isRu
          ? "Качественный уход невозможен без правильного оборудования. NabiOta Sanitätshaus оперативно устанавливает электрические многофункциональные кровати, подбирает матрасы под степень риска пролежней и оснащает санузлы для максимальной безопасности."
          : isEn
          ? "Dignified home care requires ergonomic medical infrastructure. NabiOta Sanitätshaus swiftly installs electric care beds, determines pressure mattress requirements to prevent ulcers, and adapts bathroom facilities for patient safety."
          : isTr
          ? "İhtiyaca uygun bir hasta bakım yatağı hem hasta yakınlarının hem de ayakta bakım ekibinin yükünü hafifletir. Elektrikli ayarlanabilir bakım yataklarını, yenilikçi antidekübit sistemlerini ve engelsiz banyo yardımcılarını doğrudan yerinde kuruyoruz."
          : isAr
          ? "يوفر سرير الرعاية المناسب راحة كبرى للمريض والأسرة وفريق التمريض المنزلي على حد سواء. نقوم بتوريد وتركيب أسرة رعاية قابلة للتعديل كهربائياً، وأنظمة متطورة مضادة لقرح الفراش، ومستلزمات صحية خالية من العوائق مباشرة في منزلكم."
          : "Ein bedarfsgerechtes Pflegebett entlastet pflegende Angehörige und ambulante Pflegekräfte gleichermaßen. Wir liefern und montieren elektrisch verstellbare Pflegebetten, innovative Antidekubitus-Systeme sowie barrierefreie Sanitärhilfen direkt vor Ort.",
        indicationsTitle: isUz
          ? "Tibbiy ko'rsatmalar"
          : isRu
          ? "Медицинские показания"
          : isEn
          ? "Clinical Indications"
          : isTr
          ? "Tıbbi Endikasyonlar"
          : isAr
          ? "دواعي الاستعمال الطبية"
          : "Medizinische Indikationen",
        indications: isUz
          ? [
              "Og'ir kasalliklarda uzoq muddatli yoki doimiy yotoq tartibi",
              "Yotoq yaralari paydo bo'lish xavfining yuqoriligi yoki I-IV darajali dekubitus terapiyasi",
              "Krovatdan mustaqil turishning qiyinligi va yon to'siqlarga bo'lgan ehtiyoj",
              "Kundalik muolajalarni osonlashtirish uchun parvarish darajasi (Pflegegrad 1-5) belgilanishi",
            ]
          : isRu
          ? [
              "Длительный или постоянный постельный режим при тяжелых заболеваниях",
              "Высокий риск образования пролежней или терапия пролежней I-IV степени",
              "Затрудненный самостоятельный подъем с кровати и необходимость в боковых ограждениях",
              "Присвоение степени ухода (Pflegegrad 1-5) для облегчения ежедневных манипуляций",
            ]
          : isEn
          ? [
              "Prolonged or permanent bedridden status due to chronic severe illnesses",
              "High risk of decubitus pressure injuries or existing stage I-IV ulcers",
              "Inability to reposition independently and need for safety side rails",
              "Accredited care level (Pflegegrad 1-5) requiring home nursing equipment",
            ]
          : isTr
          ? [
              "Ağır bakım ihtiyacında geçici veya kalıcı yatalaklık durumu",
              "Yüksek dekübitus riski veya I-IV. derece bası yaraları",
              "Kendi başına pozisyon değiştirmede zorlanma ve düşmeyi önleyici yan korkuluk gereksinimi",
              "Evde bakımı güvenceye almak için onaylı bir bakım derecesi (Pflegegrad 1-5)",
            ]
          : isAr
          ? [
              "ملازمة الفراش المؤقتة أو الدائمة بسبب الحاجة الشديدة للرعاية",
              "ارتفاع مخاطر الإصابة بقرح الفراش أو وجود قرح من الدرجات I إلى IV",
              "صعوبة تغيير الوضعية ذاتياً والحاجة لحواجز حماية جانبية تمنع السقوط",
              "وجود درجة رعاية معتمدة (Pflegegrad 1-5) لضمان توفير الرعاية المنزلية الملائمة",
            ]
          : [
              "Dauerhafte oder vorübergehende Bettlägerigkeit bei schwerer Pflegebedürftigkeit",
              "Hohes Dekubitusrisiko oder bestehende Druckulzera der Grade I bis IV",
              "Erschwerter selbstständiger Positionswechsel und Notwendigkeit stürzverhindernder Seitengitter",
              "Vorliegen eines Pflegegrads (PG 1-5) zur Sicherstellung der häuslichen Pflege",
            ],
        scopeTitle: isUz
          ? "Uskunalar to'plami"
          : isRu
          ? "Комплектация оборудования"
          : isEn
          ? "Equipment Continuum"
          : isTr
          ? "Donanım Yelpazesi"
          : isAr
          ? "طيف التجهيزات والمعدات"
          : "Ausstattungsspektrum",
        scopeItems: isUz
          ? [
              "Balandligi, bosh va oyoq qismi elektr boshqariladigan 4 seksiyali krovatlar",
              "Ko'tarilish shtangasi (trapeziya) va buklanuvchi himoya yon to'siqlari",
              "O'zgaruvchan bosimli dinamik kompressor matraslar va ortopedik ko'pik",
              "Vanna ko'targichlari, hojatxona-stullari, dush kursilari va devor tutqichlari",
            ]
          : isRu
          ? [
              "4-секционные кровати с электроприводом регулировки высоты, спинки и изножья",
              "Штанги-подъемники (трапеции/гусаки) и складные защитные боковые решетки",
              "Динамические компрессорные матрасы переменного давления и ортопедическая пена",
              "Подъемники для ванны, кресла-туалеты, душевые табуреты и настенные поручни",
            ]
          : isEn
          ? [
              "4-section electric profiling beds with variable height, head, and knee break adjustments",
              "Patient lifting poles (monkey poles) and integrated split safety rails",
              "Alternating pressure air mattress systems and specialized foam anti-decubitus overlays",
              "Powered bath lifters, commode chairs, shower stools, and ergonomic grab bars",
            ]
          : isTr
          ? [
              "Düşük giriş yüksekliğine ve bölünmüş ahşap yan korkuluklara sahip 4 motorlu ayarlanabilir bakım yatakları",
              "Üçgen tutamaçlı hasta kaldırma aparatı (trapez), yatak lambaları ve serum askıları",
              "Dijital basınç ayarlı dinamik havalı yataklar (dalgalı basınç) ve yumuşak konumlandırma şilteleri",
              "Küvet lifterleri, duş ve tuvalet sandalyeleri, klozet yükselticileri ve modüler tutunma barları",
            ]
          : isAr
          ? [
              "أسرة رعاية قابلة للتعديل بأربعة محركات مع انخفاض سهل وحواجز جانبية خشبية مجزأة",
              "رافع مريض بمقبض مثلثي، إضاءة سرير وحوامل محاليل وريدية",
              "أنظمة مراتب هوائية تفريغية ديناميكية مع ضبط رقمي للضغط ومراتب رغوية للتخفيف",
              "رافعات مغطس الاستحمام، كراسي الاستحمام والمرحاض، رافعات المقاعد ومقابض تثبيت معيارية",
            ]
          : [
              "4-motorig verstellbare Pflegebetten mit Niedrigst-Einstieg und geteilten Holzseitengittern",
              "Patientenaufrichter mit Triangelgriff, Bettleuchten und Infusionshaltern",
              "Dynamische Wechseldrucksysteme mit digitaler Druckanpassung sowie Weichlagerungsmatratzen",
              "Badewannenlifter, Dusch- und Toilettenstühle, Sitzerhöhungen und modulare Haltegriffe",
            ],
        billingTitle: isUz
          ? "Sug'urta kassasi to'lovi"
          : isRu
          ? "Оплата страховой кассой"
          : isEn
          ? "Insurance Coverage"
          : isTr
          ? "SGB XI / SGB V Kapsamında Masraf Karşılama"
          : isAr
          ? "تغطية النفقات وفق SGB XI / SGB V"
          : "Kostenübernahme nach SGB XI / SGB V",
        billingText: isUz
          ? "Parvarish darajasi (Pflegegrad) mavjud bo'lganda funksional krovat parvarish kassasi (Pflegekasse) tomonidan 10 € gacha ramziy qo'shimcha to'lov bilan (undan ham ozod bo'lish mumkin) bepul taqdim etiladi."
          : isRu
          ? "При наличии степени ухода (Pflegegrad) функциональная кровать предоставляется бесплатно кассой ухода (Pflegekasse) с символической доплатой до 10 € (от которой можно освободиться)."
          : isEn
          ? "Funded by statutory long-term care insurance (Pflegekasse) upon approved care grade with minimal statutory co-pay (capped at 10 € unless exempt)."
          : isTr
          ? "Bir bakım derecesi (Pflegegrad) bulunması durumunda, bakım sandığı (SGB XI) bakım yatağını teknik bakım yardımcısı olarak karşılar. Katkı payı muafiyeti yoksa yasal katkı payı en fazla 10 EUR'dur."
          : isAr
          ? "في حال وجود درجة رعاية (Pflegegrad)، يتكفل صندوق تأمين الرعاية (SGB XI) بتكاليف سرير الرعاية كمستلزم تقني مساعد. وتبلغ المساهمة الشخصية القانونية 10 يورو بحد أقصى ما لم يكن هناك إعفاء من المساهمة."
          : "Bei Vorliegen eines Pflegegrads übernimmt die Pflegekasse (SGB XI) die Kosten für ein Pflegebett als technisches Pflegehilfsmittel. Der gesetzliche Eigenanteil beträgt maximal 10 EUR, sofern keine Zuzahlungsbefreiung vorliegt.",
        qualityTitle: isUz
          ? "O'rnatish va kafolat"
          : isRu
          ? "Монтаж и гарантия"
          : isEn
          ? "Installation & Warranty"
          : isTr
          ? "Montaj ve Ekspres Servis"
          : isAr
          ? "التركيب وخدمة الصيانة السريعة"
          : "Montage & Express-Service",
        qualityText: isUz
          ? "Tezkor yetkazib berish, malakali texniklar tomonidan joyida professional yig'ish va zarurat tug'ilganda eski mebelni olib chiqib ketish."
          : isRu
          ? "Экспресс-доставка, профессиональная сборка на месте квалифицированными техниками и вывоз старой мебели при необходимости."
          : isEn
          ? "Express delivery, full on-site mechanical assembly by certified technicians, and removal service."
          : isTr
          ? "Yerinde profesyonel montaj, DGUV Kural 3 uyarınca elektrik güvenliği testi ve acil servisimiz kapsamında hızlı arıza giderme."
          : isAr
          ? "تركيب احترافي في المنزل، فحص أمان كهربائي رسمي وفق لائحة DGUV 3، وإصلاح سريع لأي أعطال من خلال خدمة الطوارئ لدينا."
          : "Fachgerechte Montage vor Ort, elektrische Prüfung nach DGUV Vorschrift 3 und prompte Störungsbeseitigung im Rahmen unseres Notdienstes.",
        ctaButtonText: isUz
          ? "Krovat o'rnatishga buyurtma berish"
          : isRu
          ? "Заказать установку кровати"
          : isEn
          ? "Request Care Bed Setup"
          : isTr
          ? "Bakım Yatağı Talep Et"
          : isAr
          ? "طلب سرير رعاية منزلية"
          : "Pflegebett anfragen",
      },
    },
    {
      id: "wund-verbrauchsmaterial",
      badge: isUz
        ? "STERIL • OYIGA 40 € BEPUL"
        : isRu
        ? "СТЕРИЛЬНО • 40 € В МЕСЯЦ БЕСПЛАТНО"
        : isEn
        ? "STERILE LOGISTICS • €40 MONTHLY ALLOWANCE"
        : isTr
        ? "STERİL LOJİSTİK • AYLIK 40 € BAKIM ÖDENEĞİ"
        : isAr
        ? "لوجستيات معقمة • مخصصات رعاية شهرية بقيمة 40 €"
        : "STERILE LOGISTIK • 40 € PFLEGEPAUSCHALE",
      image: "/images/services/wundversorgung.webp",
      iconType: "pill",
      title: isUz
        ? "Sarf materiallari, yaralar va stomalar"
        : isRu
        ? "Расходные материалы, раны и стомы"
        : isEn
        ? "Wound Consumables & Ostomy Supplies"
        : isTr
        ? "Yara Bakımı ve Tüketim Malzemeleri Tedariği"
        : isAr
        ? "مستلزمات علاج الجروح والمواد الاستهلاكية"
        : "Wund- & Verbrauchsmaterialversorgung",
      shortDesc: isUz
        ? "Zamonaviy yara bog'lamalari, urologik va stomik kateterlar, dezinfeksiya va oyiga 40 € miqdoridagi bepul parvarish to'plami."
        : isRu
        ? "Современные раневые повязки, урологические и стомические катетеры, дезинфекция и ежемесячный набор для ухода на 40 €."
        : isEn
        ? "Advanced wound dressings, ostomy and urological supplies, disinfectants, and the free €40 monthly caregiver consumable box."
        : isTr
        ? "Aşamalara uygun modern yara örtüleri, stoma, kateter ve inkontinans ürünleri ile aylık 40 EUR değerindeki ücretsiz bakım kutusu."
        : isAr
        ? "ضمادات جروح حديثة تواكب مراحل الالتئام، مستلزمات الفغرة والقساطر والسلس البولي، وصندوق مستلزمات الرعاية الشهري المجاني بقيمة 40 يورو."
        : "Phasengerechte Wundauflagen, Stoma-, Katheter- und Inkontinenzartikel sowie die monatliche 40-EUR-Pflegehilfsmittelbox.",
      modal: {
        title: isUz
          ? "NabiOta Sanitätshaus: Yara va sarf materiallari"
          : isRu
          ? "NabiOta Sanitätshaus: Раневые и расходные материалы"
          : isEn
          ? "NabiOta Medical Supplies: Wound & Medical Consumables"
          : isTr
          ? "NabiOta Sanitätshaus: Yara ve Tüketim Malzemeleri"
          : isAr
          ? "NabiOta Sanitätshaus: مستلزمات الجروح والمواد المستهلكة"
          : "NabiOta Sanitätshaus: Wund- & Verbrauchsmaterialien",
        subtitle: isUz
          ? "Navbatlarsiz va retsept kechikishlarisiz steril materiallar bilan uzluksiz ta'minlash"
          : isRu
          ? "Бесперебойное снабжение стерильными материалами без очередей и рецептурных задержек"
          : isEn
          ? "Uninterrupted Supply of Sterile Consumables and Specialized Dressing Protocols"
          : isTr
          ? "Modern pansuman malzemelerinin reçeteye dayalı, kesintisiz temini"
          : isAr
          ? "توريد منتظم ومستمر لضمادات الجروح الحديثة بموجب الوصفات الطبية"
          : "Kontinuierliche, rezeptgestützte Belieferung mit modernen Verbandstoffen",
        description: isUz
          ? "Surunkali yaralar va parvarish ehtiyojlari sifatli steril vositalarning doimiy mavjud bo'lishini talab qiladi. Biz shifokorlar bilan retseptlarni muntazam muvofiqlashtiramiz va zarur yara qoplamalari, qo'lqoplar hamda gigiyena vositalarini to'g'ridan-to'g'ri xonadoningizga yetkazib beramiz."
          : isRu
          ? "Хронические раны и потребности в уходе требуют постоянного наличия качественных стерильных средств. Мы берем на себя регулярное согласование рецептов с врачами и доставляем необходимые раневые покрытия, перчатки и средства гигиены прямо на дом."
          : isEn
          ? "Chronic wounds and daily nursing demand dependable sterile supplies. We coordinate recurring prescriptions directly with treating physicians and deliver specialized dressings, protective gloves, and disinfectants straight to your door."
          : isTr
          ? "Aşamalara uygun yara bakımı ve hijyenik hasta bakımı özel ürünler gerektirir. NabiOta Sanitätshaus GmbH, reçete taleplerini, tedaviyi yürüten hekimlerle koordinasyonu ve aylık doğrudan adrese teslimatı eksiksiz üstlenir."
          : isAr
          ? "يتطلب علاج الجروح حسب مراحل الشفاء والرعاية الصحية التمريضية منتجات متخصصة ومعقمة. تتولى NabiOta Sanitätshaus GmbH طلب الوصفات الطبية بانتظام، والتنسيق مع الأطباء المعالجين، والتوصيل الشهري المباشر إلى باب المنزل."
          : "Eine phasengerechte Wundversorgung und hygienische Krankenpflege erfordern spezialisierte Produkte. Die NabiOta Sanitätshaus GmbH übernimmt die lückenlose Rezeptanforderung, Abstimmung mit behandelnden Ärzten und monatliche Direktbelieferung frei Haus.",
        indicationsTitle: isUz
          ? "Tibbiy ko'rsatmalar"
          : isRu
          ? "Медицинские показания"
          : isEn
          ? "Clinical Indications"
          : isTr
          ? "Tıbbi Endikasyonlar"
          : isAr
          ? "دواعي الاستعمال الطبية"
          : "Medizinische Indikationen",
        indications: isUz
          ? [
              "Surunkali yaralar: boldirning venoz yaralari, diabetik tovon, dekubitus",
              "Stomali bemorlar (kolostoma, ileostoma, urostoma)",
              "Doimiy yoki davriy siydik kateterlariga bo'lgan ehtiyoj",
              "Parvarish paytida dezinfeksiya va himoyaga doimiy ehtiyoj (Pflegegrad 1-5)",
            ]
          : isRu
          ? [
              "Хронические раны: венозные язвы голени, диабетическая стопа, пролежни",
              "Пациенты со стомой (колостома, илеостома, уростома)",
              "Необходимость в постоянных или периодических мочевых катетерах",
              "Постоянная потребность в дезинфекции и защите при уходе (Pflegegrad 1-5)",
            ]
          : isEn
          ? [
              "Chronic hard-to-heal wounds: venous leg ulcers, diabetic foot syndrome, pressure sores",
              "Ostomy care management (colostomy, ileostomy, urostomy)",
              "Indwelling, suprapubic, or intermittent urological catheterization",
              "Daily infection control and hygienic care (care level Pflegegrad 1-5)",
            ]
          : isTr
          ? [
              "Kronik ve zor iyileşen yaralar (bacak ülseri, dekübit, diyabetik ayak sendromu)",
              "Enterostomal ve ürostomal bakım (kolostomi, ileostomi, ürostomi)",
              "Transüretral ve suprapubik kateter drenajı ile aralıklı kendi kendine kateterizasyon",
              "Günlük dezenfeksiyon ve koruyucu malzeme ihtiyacı olan evde bakım hastaları",
            ]
          : isAr
          ? [
              "الجروح المزمنة وصعبة الالتئام (قرح الساق، قرح الفراش، متلازمة القدم السكرية)",
              "رعاية الفغرات المعوية والبولية (فغر القولون، فغر اللفائفي، فغر البول)",
              "القساطر البولية عبر الإحليل وفوق العانة والقسطرة الذاتية المتقطعة",
              "المرضى في المنزل المحتاجون لمواد التعقيم والوقاية الصحية اليومية",
            ]
          : [
              "Chronische und schwer heilende Wunden (Ulcus cruris, Dekubitus, Diabetisches Fußsyndrom)",
              "Enterostomale und urostomale Versorgung (Kolo-, Ileo-, Urostomie)",
              "Transurethrale und suprapubische Katheterableitung sowie intermittierender Selbstkatheterismus",
              "Häusliche Pflegebedürftigkeit mit täglichem Desinfektions- und Schutzbedarf",
            ],
        scopeTitle: isUz
          ? "Yetkazib berish nomenklaturasi"
          : isRu
          ? "Номенклатура поставок"
          : isEn
          ? "Supply Continuum"
          : isTr
          ? "Tedarik Yelpazesi"
          : isAr
          ? "طيف المستلزمات الطبية المتوفرة"
          : "Versorgungssortiment",
        scopeItems: isUz
          ? [
              "Poliuretanli gubka bog'lamalar, alginatlar, gidrokolloidlar va kumushli qoplamalar",
              "Bog'lash uchun steril to'plamlar, yaralarni yuvish eritmalari (poligeksanid/oktenidin)",
              "Bir va ikki komponentli stoma xaltachalari, pastalar, himoya halqalari va kamarlar",
              "Oylik parvarish qutisi (§ 40 SGB XI): nitril qo'lqoplar, niqoblar, choyshablar, antiseptiklar",
            ]
          : isRu
          ? [
              "Губчатые повязки с полиуретаном, альгинаты, гидроколлоиды и серебросодержащие покрытия",
              "Стерильные наборы для перевязок, растворы для промывания ран (полигексанид/октенидин)",
              "Одно- и двухкомпонентные стомические мешки, пасты, защитные кольца и ремни",
              "Ежемесячный набор (§ 40 SGB XI): нитриловые перчатки, маски, простыни, антисептики",
            ]
          : isEn
          ? [
              "Polyurethane foam dressings, calcium alginates, hydrogels, and antibacterial silver meshes",
              "Sterile dressing sets, wound irrigation solutions (polyhexanide/octenidine)",
              "1- and 2-piece ostomy appliances, skin barrier pastes, hydrocolloid wafer plates",
              "Caregiver consumable box (§ 40 SGB XI): disposable gloves, surface disinfectants, bed pads",
            ]
          : isTr
          ? [
              "Hidroaktif yara örtüleri (köpük pansumanlar, aljinatlar, hidrojeller, gümüşlü pansumanlar)",
              "Steril pansuman setleri, yara yıkama solüsyonları ve hipoalerjenik tespit bantları",
              "Modern tek ve çift parçalı stoma sistemleri, cilt koruyucu plakalar ve stoma bakım ürünleri",
              "Tek kullanımlık eldivenler, yatak koruyucu örtüler ve dezenfektanlar içeren aylık bakım kutusu (§ 40 SGB XI)",
            ]
          : isAr
          ? [
              "ضمادات جروح تفاعلية مائية (رغوية، ألجينات، جل مائي، وضمادات مدعمة بالفضة)",
              "مجموعات تبديل الضمادات المعقمة، محاليل غسيل الجروح وأشرطة التثبيت اللطيفة على الجلد",
              "أنظمة فغرة حديثة ذات قطعة واحدة وقطعتين، ألواح حماية الجلد ومنتجات عناية بالفغرة",
              "صندوق الرعاية الشهري (§ 40 SGB XI) الذي يضم قفازات، مفارش أسرة واقية، ومطهرات معقمة",
            ]
          : [
              "Hydroaktive Wundauflagen (Schaumstoffe, Alginate, Hydrogele, Silberwundauflagen)",
              "Sterile Verbandwechselsets, Wundspüllösungen und hypoallergene Fixiervliese",
              "Moderne ein- und zweiteilige Stomasysteme, Hautschutzplatten und Stomapflegeartikel",
              "Monatliche Pflegebox (§ 40 SGB XI) mit Einweghandschuhen, Bettschutzeinlagen und Desinfektionsmitteln",
            ],
        billingTitle: isUz
          ? "Kassa to'lovi va imtiyozlar"
          : isRu
          ? "Оплата кассой и льготы"
          : isEn
          ? "Billing & Care Box Allowance"
          : isTr
          ? "Faturalandırma ve Aylık 40 EUR Bakım Sandığı Ödeneği"
          : isAr
          ? "التسوية والمخصصات الشهرية بقيمة 40 يورو من صندوق الرعاية"
          : "Abrechnung & 40-EUR-Pflegekassenpauschale",
        billingText: isUz
          ? "Yara materiallari retsept bo'yicha tibbiy kassalar tomonidan to'lanadi (SGB V). Oyiga 40 € gacha bo'lgan gigiyenik sarf materiallari to'plami parvarish kassasi (SGB XI) tomonidan 100% bepul qoplanadi."
          : isRu
          ? "Раневые материалы оплачиваются больничными кассами по рецепту (SGB V). Набор гигиенических расходников до 40 € в месяц оплачивается кассой ухода (SGB XI) на 100% бесплатно."
          : isEn
          ? "Specialized dressings are covered via health insurance prescription (SGB V). The €40 monthly caregiver hygiene box is 100% reimbursed by the nursing care fund (SGB XI)."
          : isTr
          ? "Pansuman malzemeleri ve stoma ürünleri hekim reçetesiyle SGB V kapsamında sağlık sigortalarınca karşılanır. Bakım derecesine sahip bireyler ayrıca aylık 40 EUR değerindeki sarf malzemesi kutusuna yasal olarak hak kazanır (§ 40 Abs. 2 SGB XI); bunu doğrudan sandıkla mahsuplaşıyoruz."
          : isAr
          ? "تغطي صناديق التأمين الصحي مستلزمات الضمادات والفغرة كخدمات موصوفة طبياً بموجب SGB V. كما يحق للمستفيدين من درجات الرعاية الحصول قانونياً على مواد استهلاكية تصل قيمتها إلى 40 يورو شهرياً (§ 40 Abs. 2 SGB XI) نسويها مباشرة دون عناء."
          : "Verbandmittel und Stomaartikel werden als ärztlich verordnete Leistungen nach SGB V von den Krankenkassen getragen. Pflegebedürftige mit Pflegegrad haben zudem gesetzlichen Anspruch auf Pflegehilfsmittel zum Verbrauch im Wert von bis zu 40 EUR monatlich (§ 40 Abs. 2 SGB XI), die wir direkt abrechnen.",
        qualityTitle: isUz
          ? "Sifat nazorati"
          : isRu
          ? "Контроль качества"
          : isEn
          ? "Clinical Quality"
          : isTr
          ? "Kalite Güvencesi ve Fotoğraflı Takip"
          : isAr
          ? "توثيق الجودة والمتابعة الفوتوغرافية"
          : "Qualitäts- & Fotodokumentation",
        qualityText: isUz
          ? "Shifokorlar va NabiOta HomeCare ICW® yara mutaxassislari bilan bitish jarayonini raqamli fotofiksatsiya qilgan holda yaqin hamkorlik."
          : isRu
          ? "Тесная координация с врачами и экспертами ICW® по ранам NabiOta HomeCare с цифровой фотофиксацией процесса заживления."
          : isEn
          ? "Tight alignment with NabiOta HomeCare ICW® wound nurses including digital photographic healing tracking."
          : isTr
          ? "NabiOta HomeCare'in sertifikalı ICW® yara uzmanlarıyla yakın koordinasyon ve dijital fotoğraflarla iyileşme sürecinin eksiksiz takibi."
          : isAr
          ? "تنسيق وثيق مع خبراء الجروح المعتمدين (ICW®) من NabiOta HomeCare مع توثيق مسار الشفاء بالصور الرقمية."
          : "Enge Abstimmung mit den zertifizierten ICW®-Wundexperten von NabiOta HomeCare und lückenlose Verlaufsdokumentation.",
        ctaButtonText: isUz
          ? "Materiallar / Pflegebox buyurtma qilish"
          : isRu
          ? "Заказать материалы / Pflegebox"
          : isEn
          ? "Order Consumables / Care Box"
          : isTr
          ? "Bakım Kutusu / Yara Malzemesi Talep Et"
          : isAr
          ? "طلب صندوق الرعاية / مستلزمات الجروح"
          : "Pflegebox / Wundartikel anfordern",
      },
    },
  ];
}
