"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SupportedLocale } from "@/lib/i18n";

interface HomeFaqSectionProps {
  currentLocale?: SupportedLocale;
}

export function HomeFaqSection({ currentLocale = "de" }: HomeFaqSectionProps) {
  const isRu = currentLocale === "ru";
  const isTr = currentLocale === "tr";
  const isAr = currentLocale === "ar";
  const isUz = currentLocale === "uz";
  const isEn = currentLocale === "en";

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const t = {
    eyebrow: isRu
      ? "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ"
      : isTr
      ? "SIKÇA SORULAN SORULAR"
      : isAr
      ? "الأسئلة الشائعة"
      : isUz
      ? "KO'P SO'RALADIGAN SAVOLLAR"
      : isEn
      ? "FREQUENTLY ASKED QUESTIONS"
      : "HÄUFIG GESTELLTE FRAGEN",
    title: isRu
      ? "Всё о NabiOta® Health Group"
      : isTr
      ? "NabiOta® Health Group Hakkında Merak Edilenler"
      : isAr
      ? "كل ما تريد معرفته عن مجموعة نابي أوتا الصحية"
      : isUz
      ? "NabiOta® Health Group haqida ma'lumotlar"
      : isEn
      ? "Insights into NabiOta® Health Group"
      : "Wissenswertes über die NabiOta® Health Group",
    desc: isRu
      ? "Ответы на главные вопросы о структуре холдинга, приеме пациентов, партнерстве и медицинских стандартах."
      : isTr
      ? "Holding yapımız, hasta kabulleri, ortaklık modelleri ve tıbbi kalite standartlarımız hakkındaki temel soruların yanıtları."
      : isAr
      ? "إجابات شاملة على الأسئلة الرئيسية حول هيكل المجموعة، استقبال المرضى، الشراكات الطبية والمعايير السريرية."
      : isUz
      ? "Xolding tuzilmasi, bemorlarni qabul qilish, hamkorlik va tibbiy sifat standartlari bo'yicha asosiy savollarga javoblar."
      : isEn
      ? "Answers to key questions regarding our medical network, patient admissions, partnerships, and clinical standards."
      : "Antworten auf die wichtigsten Fragen rund um unsere Unternehmensbereiche, Patientenversorgung, Kooperationen und Qualitätsstandards.",
    contactCtaText: isRu
      ? "Остались вопросы? Свяжитесь с нами"
      : isTr
      ? "Başka sorularınız mı var? Bize ulaşın"
      : isAr
      ? "هل لديك أسئلة أخرى؟ تواصل معنا مباشرة"
      : isUz
      ? "Yana savollaringiz bormi? Biz bilan bog'laning"
      : isEn
      ? "Have more questions? Get in touch"
      : "Haben Sie weitere Fragen? Kontaktieren Sie uns",
    items: [
      {
        q: isRu
          ? "Какие направления объединяет холдинг NabiOta® Health Group Germany?"
          : isTr
          ? "NabiOta® Health Group Germany hangi alanları bünyesinde birleştiriyor?"
          : isAr
          ? "ما هي القطاعات الطبية التي تجمعها مجموعة نابي أوتا الصحية ألمانيا؟"
          : isUz
          ? "NabiOta® Health Group Germany xoldingi qaysi sohalarni birlashtiradi?"
          : isEn
          ? "Which divisions are united under NabiOta® Health Group Germany?"
          : "Welche Unternehmensbereiche vereint die NabiOta® Health Group Germany?",
        a: isRu
          ? "NabiOta® Health Group Germany GmbH (г. Мёнхенгладбах) объединяет комплексную экосистему из 10 дочерних предприятий: амбулаторные центры (MVZ общей медицины и хирургии), подготовку стационарной клиники (§ 30 GewO), диагностический центр (МРТ 3T, КТ, нейрофизиология, лаборатория), амбулаторную реабилитацию (физио-, эрго- и логотерапия), патронаж HomeCare, Sanitätshaus GmbH (ортопедия и медтехника), аптечное обеспечение клиник (§ 14 ApoG), подбор персонала и признание дипломов (Medical Recruitment), девелопмент медицинской недвижимости (Real Estate) и международные медицинские проекты."
          : isTr
          ? "Mönchengladbach merkezli NabiOta® Health Group Germany GmbH, 10 bağlı kuruluştan oluşan entegre bir sağlık ekosistemini bir araya getirir: ayakta tedavi merkezleri (genel tıp ve cerrahi MVZ), yataklı ihtisas kliniği hazırlığı (§ 30 GewO), ileri tanı merkezi (3T MR, düşük dozlu BT, nörofizyoloji, laboratuvar), ayakta rehabilitasyon (fizyo-, ergo- ve konuşma terapisi), uzmanlaşmış HomeCare evde bakım, Sanitätshaus GmbH (ortopedi ve rehabilitasyon teknolojisi), klinik ilaç temini (§ 14 ApoG), uluslararası sağlık personeli istihdamı (Medical Recruitment), medikal gayrimenkul geliştirme ve uluslararası sağlık iş birlikleri."
          : isAr
          ? "تجمع مجموعة نابي أوتا الصحية ألمانيا ذ.م.م (ومقرها مونشنغلادباخ) منظومة رعاية متكاملة تضم 10 شركات تابعة: مراكز العيادات التخصصية (MVZ للرعاية الأولية والجراحة)، تجهيز المستشفى التخصصي (§ 30 GewO)، مركز التشخيص المتقدم (رنين 3T، أشعة مقطعية، تخطيط أعصاب، مختبرات)، التأهيل الطبي للعيادات الخارجية (علاج طبيعي ووظيفي ونطق)، الرعاية والتمريض المنزلي HomeCare، المستلزمات الطبية والأطراف Sanitätshaus GmbH، التموين الدوائي للمشافي (§ 14 ApoG)، استقطاب الكوادر الطبية والمعادلة، تطوير العقارات الطبية والشراكات الدولية."
          : isUz
          ? "Myonxengladbaxda joylashgan NabiOta® Health Group Germany GmbH 10 ta sho'ba korxonadan iborat kompleks sog'liqni saqlash ekotizimini birlashtiradi: ambulator markazlar (umumiy amaliyot va xirurgik MVZ), statsionar klinika tayyorgarligi (§ 30 GewO), zamonaviy diagnostika markazi (3T MRT, past dozali KT, neyrofiziologiya, laboratoriya), ambulator reabilitatsiya (fizioterapiya, ergoterapiya va logopediya), ixtisoslashtirilgan HomeCare parvarishi, Sanitätshaus GmbH (ortopediya va reabilitatsiya texnikasi), klinikalarni dori-darmon bilan ta'minlash (§ 14 ApoG), xalqaro tibbiyot kadrlarini tanlash (Medical Recruitment), tibbiy ko'chmas mulkni rivojlantirish (Real Estate) hamda xalqaro hamkorlik."
          : isEn
          ? "NabiOta® Health Group Germany GmbH, headquartered in Mönchengladbach, unites a comprehensive ecosystem of 10 subsidiaries: primary care & surgical MVZ centers, preparation for a licensed hospital (§ 30 GewO), advanced diagnostics (3T MRI, low-dose CT, neurophysiology, laboratory), outpatient rehabilitation (physio-, ergo- & speech therapy), specialized HomeCare, Sanitätshaus GmbH (orthopedics & medical supplies), clinic pharmacy supply (§ 14 ApoG), Medical Recruitment Services, medical real estate development, and international healthcare partnerships."
          : "Die NabiOta® Health Group Germany GmbH mit Sitz in Mönchengladbach bündelt ein integriertes Ökosystem aus 10 Tochtergesellschaften: ambulante Zentren (hausärztliche & chirurgische MVZ), Vorbereitung einer Fachklinik (§ 30 GewO), moderne Diagnostik (3T-MRT, Low-Dose-CT, Neurophysiologie, Labor), ambulante Rehabilitation (Physio-, Ergo- und Logopädie), spezialisierte HomeCare-Pflege, Sanitätshaus GmbH (Orthopädie & Rehatechnik), Klinik-Arzneimittelversorgung (§ 14 ApoG), Medical Recruitment Services, medizinische Immobilienentwicklung (Real Estate) sowie internationale Kooperationen.",
      },
      {
        q: isRu
          ? "Как записаться на прием или диагностику в центры группы?"
          : isTr
          ? "Grup merkezlerinde muayene veya tanı randevusu nasıl alınır?"
          : isAr
          ? "كيف يمكنني حجز موعد استشارة أو فحص تشخيصي في مرافق المجموعة؟"
          : isUz
          ? "Guruh markazlarida qabul yoki diagnostikaga qanday yozilish mumkin?"
          : isEn
          ? "How do I schedule an appointment or diagnostic scan at a NabiOta facility?"
          : "Wie kann ich einen Termin in einer Einrichtung der NabiOta® Gruppe vereinbaren?",
        a: isRu
          ? "Вы можете направить заявку через наш сайт в соответствующих разделах («Медицинские направления», «Диагностика», «Реабилитация», «Уход»), воспользоваться общей формой обратной связи или позвонить по телефону единой службы координации пациентов. Мы поможем выбрать удобное время и ближайший филиал."
          : isTr
          ? "Web sitemiz üzerinden ilgili uzmanlık sayfalarından (Tıbbi Bölümler, Tanı, Rehabilitasyon, Bakım), genel iletişim formumuzdan veya merkezi hasta koordinasyon hattımızdan randevu talebinde bulunabilirsiniz. Hasta hizmetleri ekibimiz size en uygun randevuyu hızla organize edecektir."
          : isAr
          ? "يمكنكم حجز المواعيد مباشرة عبر صفحات التخصصات المعنية على موقعنا (الطبية، التشخيص، التأهيل، التمريض) أو عبر استمارة التواصل المركزية وخط خدمة المرضى المباشر. يتولى فريقنا توجيهكم وحجز الموعد المناسب في أسرع وقت."
          : isUz
          ? "Siz bizning veb-saytimiz orqali tegishli yo'nalish sahifalarida (Tibbiyot yo'nalishlari, Diagnostika, Reabilitatsiya, Parvarish), umumiy aloqa shakli yoki bemorlarni muvofiqlashtirish xizmati telefon raqami orqali murojaat qilishingiz mumkin. Mutaxassislarimiz sizga qulay vaqt va eng yaqin markazni tanlashda tezkor yordam beradi."
          : isEn
          ? "You can easily schedule a consultation or examination online through our specialized division pages, submit an inquiry via our general contact form, or call our central patient concierge desk. Our coordinators will assist you with fast appointment allocation."
          : "Sie können Termine direkt über unsere jeweiligen Fachbereichsseiten (Medizinische Fachbereiche, Diagnostik, Rehabilitation, Pflege) oder zentral über unser Kontaktformular und unsere telefonische Hotline anfragen. Unser Patientenservice leitet Sie zeitnah an die passende Praxis oder das zuständige Diagnostikzentrum weiter.",
      },
      {
        q: isRu
          ? "Принимаются ли пациенты со всеми видами медицинских страховок?"
          : isTr
          ? "Tüm sağlık sigortası türlerinden hastalar kabul ediliyor mu?"
          : isAr
          ? "هل يتم استقبال المرضى المشمولين بكافة أنواع التأمين الصحي؟"
          : isUz
          ? "Barcha turdagi tibbiy sug'urtaga ega bemorlar qabul qilinadimi?"
          : isEn
          ? "Are both statutory and privately insured patients accepted?"
          : "Werden gesetzlich und privat versicherte Patienten behandelt?",
        a: isRu
          ? "Да. Учреждения холдинга работают со всеми государственными больничными кассами Германии (GKV), частными страховыми компаниями (PKV), организациями страхования от несчастных случаев (BG), пенсионным страхованием (DRV), а также принимают пациентов на условиях прямого расчета (самооплата)."
          : isTr
          ? "Evet. Merkezlerimiz ve tıbbi tesislerimiz Almanya yasal sağlık sigortası (GKV), özel sağlık sigortası (PKV), kaza sigortası (BG), emeklilik sigortası (DRV) kapsamındaki tüm hastalara ve uluslararası doğrudan ödeme yapan hastalara açıktır."
          : isAr
          ? "نعم. تستقبل مراكزنا وعياداتنا المرضى المشمولين بالتأمين الصحي الحكومي الألماني (GKV)، والتأمين الخاص (PKV)، وتأمين إصابات العمل (BG)، والتأمين التقاعدي (DRV)، بالإضافة إلى المرضى الدوليين والدفع المباشر."
          : isUz
          ? "Ha. Xolding muassasalari Germaniyaning barcha davlat tibbiy sug'urta jamg'armalari (GKV), xususiy sug'urta kompaniyalari (PKV), baxtsiz hodisalardan sug'urtalash tashkilotlari (BG), pensiya sug'urtasi (DRV) bilan ishlaydi, shuningdek to'lovni o'zi amalga oshiruvchi xalqaro bemorlarni ham qabul qiladi."
          : isEn
          ? "Yes. Our medical centers and diagnostic facilities are fully accredited and open to patients with German statutory health insurance (GKV), private insurance (PKV), workers' compensation (BG), statutory pension insurance (DRV), and self-paying international clients."
          : "Ja, unsere Einrichtungen und medizinischen Versorgungszentren stehen sowohl gesetzlich versicherten Patienten (GKV) als auch Privatversicherten (PKV) und Selbstzahlern offen. Zudem kooperieren wir mit Berufsgenossenschaften (BG) und Rentenversicherungsträgern (DRV).",
      },
      {
        q: isRu
          ? "Какие возможности холдинг предлагает врачам, клиникам и инвесторам?"
          : isTr
          ? "Holding; hekimlere, kliniklere ve yatırımcılara hangi iş birliği fırsatlarını sunuyor?"
          : isAr
          ? "ما هي فرص التعاون والشراكة التي تقدمها المجموعة للأطباء والمستشفيات والمستثمرين؟"
          : isUz
          ? "Xolding shifokorlar, klinikalar va investorlarga qanday hamkorlik imkoniyatlarini taklif etadi?"
          : isEn
          ? "What partnership models does NabiOta offer to doctors, clinics, and investors?"
          : "Welche Kooperationsmöglichkeiten gibt es für Ärzte, Kliniken und Partner?",
        a: isRu
          ? "Мы предлагаем практикующим врачам преемственность практик, гибкие форматы работы в структуре MVZ, избавление от административной нагрузки и доступ к передовому оборудованию. Для клиник и инвесторов мы выступаем надежным партнером по совместному управлению, девелопменту медицинских комплексов и трансграничному медицинскому сотрудничеству."
          : isTr
          ? "Uzman hekimlere muayenehane devri ve sürekliliği, MVZ ağı bünyesinde esnek çalışma modelleri, tam idari yükten muafiyet ve en son teknolojiye erişim imkanı sunuyoruz. Belediyeler, hastane yönetimleri ve sağlık yatırımcıları için geleceğe dönük sağlık kampüsleri ve medikal projeler geliştiriyoruz."
          : isAr
          ? "نوفر للأطباء الاستشاريين نماذج استلام العيادات والشراكة، والعمل المرن ضمن شبكة MVZ مع التحرر التام من الأعباء الإدارية والوصول لأحدث التجهيزات. كما نقوم بتطوير مجمعات ومشاريع صحية مستقبلية بالشراكة مع الهيئات والمستثمرين."
          : isUz
          ? "Biz amaliyotchi shifokorlarga tibbiy amaliyotlarni o'tkazish, MVZ tarmog'ida moslashuvchan ishlash shartlari, ma'muriy yuklamalardan to'liq xalos bo'lish va eng ilg'or uskunalar bilan ishlash imkonini beramiz. Klinikalar, munitsipalitetlar va investorlar uchun esa zonaviy tibbiy kampuslar va istiqbolli sog'liqni saqlash loyihalarini muvaffaqiyatli rivojlantiramiz."
          : isEn
          ? "We offer established practitioners and specialists attractive practice succession solutions, flexible employment within our MVZ network, full administrative relief, and modern infrastructure. For municipalities, institutional owners, and healthcare investors, we engineer future-ready healthcare campuses."
          : "Wir bieten etablierten Fachärzten und Nachwuchsmedizinern attraktive Praxisübernahmen, Kooperationen im MVZ-Verbund, modernste apparative Infrastruktur und administrative Entlastung. Für Kommunen und Investoren entwickeln wir zukunftsfähige Gesundheitscampus-Projekte.",
      },
      {
        q: isRu
          ? "Где расположены подразделения и клиники группы NabiOta®?"
          : isTr
          ? "NabiOta® grubunun tesisleri ve merkezleri nerede yer almaktadır?"
          : isAr
          ? "أين تقع مرافق وفروع مجموعة نابي أوتا الصحية؟"
          : isUz
          ? "NabiOta® guruhining bo'linmalari va klinikalar qayerda joylashgan?"
          : isEn
          ? "Where are the locations and facilities of the healthcare group located?"
          : "Wo befinden sich die Standorte der Unternehmensgruppe?",
        a: isRu
          ? "Штаб-квартира и координационный центр холдинга расположены в городе Мёнхенгладбах (Северный Рейн-Вестфалия). Филиалы, диагностические центры, кабинеты и партнерские клиники развиваются в агломерации Рейн-Рур и ключевых регионах Германии."
          : isTr
          ? "Holdingimizin genel merkezi ve koordinasyon birimi Kuzey Ren-Vestfalya eyaletinin Mönchengladbach şehrindedir. Ayakta tedavi kliniklerimiz, tanı merkezlerimiz ve iş birliği yapılan sağlık kuruluşları Ren-Ruhr metropol bölgesinde ve stratejik noktalarda faaliyet göstermektedir."
          : isAr
          ? "يقع المقر الرئيسي ومركز الإدارة والتنسيق في مدينة مونشنغلادباخ بولاية شمال الراين - وستفاليا بألمانيا. وتتوزع العيادات ومراكز التشخيص الشريكة عبر منطقة الراين-روهر الحيوية ومواقع استراتيجية في ألمانيا."
          : isUz
          ? "Xoldingning bosh qarorgohi va koordinatsiya markazi Myonxengladbax shahrida (Shimoliy Reyn-Vestfaliya) joylashgan. Bizning filiallarimiz, diagnostika markazlarimiz va hamkorlikdagi tibbiyot muassasalari Reyn-Rur aglomeratsiyasi hamda Germaniyaning boshqa strategik hududlarida faoliyat olib bormoqda."
          : isEn
          ? "Our administrative headquarters and coordination hub are situated in Mönchengladbach, North Rhine-Westphalia. Our outpatient clinics, imaging centers, and care hubs are located across the Rhine-Ruhr metropolitan region and strategic nationwide sites."
          : "Unser Hauptsitz und administratives Zentrum befindet sich in Mönchengladbach (Nordrhein-Westfalen). Unsere Praxen, Diagnostikzentren und kooperierenden Einrichtungen sind in der Metropolregion Rhein-Ruhr sowie an weiteren strategischen Standorten vernetzt.",
      },
      {
        q: isRu
          ? "Каковы стандарты качества и инноваций в работе холдинга?"
          : isTr
          ? "Holding kalite ve inovasyon standartlarını nasıl güvence altına alıyor?"
          : isAr
          ? "كيف تضمن مجموعة نابي أوتا أعلى معايير الجودة والابتكار الطبي؟"
          : isUz
          ? "Xolding faoliyatida sifat va innovatsiya standartlari qanday ta'minlanadi?"
          : isEn
          ? "How does NabiOta® ensure quality assurance and medical innovation?"
          : "Wie sichert NabiOta® höchste Qualitäts- und Innovationsstandards?",
        a: isRu
          ? "Вся деятельность холдинга подчинена строгим немецким протоколам доказательной медицины, сертификации ISO, регулярному независимому аудиту и непрерывному повышению квалификации персонала в собственной академии NabiOta® Akademie."
          : isTr
          ? "DIN EN ISO standartlarında uçtan uca kalite yönetimi, sürekli personel eğitimi sağlayan NabiOta® Akademisi, dijital iş akışları ve öncü medikal teknoloji yatırımlarıyla en üst düzey tıbbi mükemmeliyet ve hasta güvenliğini garanti ediyoruz."
          : isAr
          ? "من خلال نظام شامل لإدارة الجودة وفق معايير DIN EN ISO الألمانية، وأكاديمية نابي أوتا للتدريب الطبي المستمر، وسير العمل الرقمي والاستثمار في أحدث التجهيزات، نضمن أعلى درجات التميز السريري وسلامة المرضى."
          : isUz
          ? "Xoldingning butun faoliyati nemis dalillarga asoslangan tibbiyot standartlari, DIN EN ISO sertifikatlangan sifat menejmenti, muntazam auditlar, NabiOta® akademiyasida xodimlarning uzluksiz malaka oshirishi hamda eng so'nggi raqamli texnologiyalarga kiritilgan investitsiyalar bilan to'liq kafolatlanadi."
          : isEn
          ? "All group clinical pathways adhere strictly to German evidence-based medical guidelines, ISO-certified quality management, continuous audit procedures, and regular staff development via the NabiOta® Academy."
          : "Durch ein durchgängiges Qualitätsmanagement nach DIN EN ISO, die NabiOta® Akademie für kontinuierliche Mitarbeiterfortbildung, digitale Workflows und Investitionen in zukunftsweisende Medizintechnik sichern wir höchste medizinische Exzellenz und Patientensicherheit.",
      },
    ],
  };

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-t border-[#EAE3D5]/80">
      <div className="mx-auto w-full max-w-[1540px] 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── Top Header: Centered above questions ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#9B7C38] uppercase block font-sans mb-3">
            {t.eyebrow}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-[1.18] tracking-tight">
            {t.title}
          </h2>

          <p className="text-sm sm:text-[15px] text-[#4E6256] leading-relaxed font-sans max-w-2xl mx-auto mt-3.5">
            {t.desc}
          </p>
        </div>

        {/* ── Middle: Accordion Items Centered ── */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto space-y-3.5">
          {t.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-[#C8B896] shadow-sm"
                    : "bg-white/80 hover:bg-white border-[#EBE4D8] hover:border-[#D8CFBC]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 group cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base text-[#0F2A1D] font-medium leading-snug group-hover:text-[#9B7C38] transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 mt-0.5 ${
                      isOpen
                        ? "bg-[#0D2619] text-white"
                        : "bg-[#EBF0EA] text-[#244E33] group-hover:bg-[#0D2619] group-hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-[#4E6256] leading-relaxed border-t border-[#F2ECE1] mt-1 font-sans">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
