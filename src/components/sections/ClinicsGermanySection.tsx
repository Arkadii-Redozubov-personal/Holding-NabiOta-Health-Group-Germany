"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Stethoscope,
  Users,
  Scale,
  Network,
  Microscope,
  Brain,
  Syringe,
  Shield,
  MapPin,
  ClipboardList,
  BarChart3,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section IV.3 – "NabiOta Clinics Germany GmbH"
 * Unternehmensgegenstand, geplante Fachabteilungen, stationäre Entwicklung.
 */

type Lang = "de" | "en" | "ru" | "tr" | "ar" | "uz";
type T = Record<Lang, string>;
type Icon = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const c = {
  tag: {
    de: "MVZ 3 · § 30 GewO · § 108 SGB V",
    en: "MVZ 3 · § 30 GewO · § 108 SGB V",
    ru: "MVZ 3 · § 30 GewO · § 108 SGB V",
    tr: "MVZ 3 · § 30 GewO · § 108 SGB V",
    ar: "MVZ 3 · § 30 GewO · § 108 SGB V",
    uz: "MVZ 3 · § 30 GewO · § 108 SGB V",
  } as T,
  title: "NabiOta Clinics Germany GmbH",
  subtitle: {
    de: "Errichtung, Betrieb und Entwicklung medizinischer Kliniken",
    en: "Establishment, operation and development of medical clinics",
    ru: "Создание, эксплуатация и развитие медицинских клиник",
    tr: "Tıbbi Kliniklerin Kurulumu, İşletimi ve Geliştirilmesi",
    ar: "إنشاء وتشغيل وتطوير العيادات والمستشفيات الطبية",
    uz: "Tibbiy klinikalarni tashkil etish, boshqarish va rivojlantirish",
  } as T,
  lead: {
    de: "Gegenstand des Unternehmens ist die Errichtung, der Erwerb, der Betrieb und die Organisation von Kliniken und medizinischen Einrichtungen an einem oder mehreren Standorten in Deutschland, insbesondere von Privatkrankenanstalten nach § 30 Gewerbeordnung (GewO), sowie die Erbringung stationärer, teilstationärer und ambulanter medizinischer, chirurgischer, diagnostischer, therapeutischer und pflegerischer Leistungen.",
    en: "The company's purpose is the establishment, acquisition, operation and organisation of clinics and medical facilities at one or more locations in Germany, in particular private hospitals pursuant to § 30 GewO, and the provision of inpatient, day-case and outpatient medical, surgical, diagnostic, therapeutic and nursing services.",
    ru: "Предметом деятельности общества является создание, приобретение, эксплуатация и организация клиник и медицинских учреждений в одном или нескольких местах в Германии, в частности частных больниц по § 30 GewO, а также оказание стационарных, частично стационарных и амбулаторных медицинских, хирургических, диагностических, терапевтических и сестринских услуг.",
    tr: "Şirketin faaliyet konusu; Almanya genelinde bir veya birden fazla lokasyonda kliniklerin ve tıbbi tesislerin, özellikle de § 30 GewO uyarınca özel hastanelerin kurulması, devralınması, işletilmesi ve organizasyonu ile yatarak, yarı yatarak ve ayakta tedavi kapsamında tıbbi, cerrahi, tanısal, terapötik ve bakım hizmetlerinin sunulmasıdır.",
    ar: "يتمثل غرض الشركة في إنشاء واقتناء وتشغيل وتنظيم المستشفيات والمرافق الطبية في موقع واحد أو عدة مواقع في ألمانيا، لا سيما المستشفيات الخاصة بموجب المادة 30 من قانون تنظيم المهن الحرة (GewO)، وتقديم الخدمات الطبية والجراحية والتشخيصية والعلاجية والتمريضية سواء أكانت إقامة كاملة أو رعاية نهارية أو عيادات خارجية.",
    uz: "Jamiyatning faoliyat predmeti Germaniyaning bir yoki bir nechta hududlarida klinikalar va tibbiyot muassasalarini, xususan § 30 GewO bo'yicha xususiy shifoxonalarni tashkil etish, sotib olish, boshqarish va tashkil qilish, shuningdek statsionar, kunduzgi statsionar va ambulator tibbiy, jarrohlik, diagnostika, terapevtik va parvarish xizmatlarini ko'rsatishdan iborat.",
  } as T,

  pillars: [
    {
      icon: Building2 as Icon,
      title: {
        de: "Klinischer Betrieb",
        en: "Clinical operations",
        ru: "Клинический комплекс",
        tr: "Klinik İşletimi",
        ar: "العمليات والتشغيل السريري",
        uz: "Klinik faoliyat",
      } as T,
      text: {
        de: "Hierzu gehören insbesondere der Betrieb von Operationszentren, Diagnostik- und Therapiebereichen sowie die pflegerische und postoperative Versorgung. Das Leistungsangebot kann schmerztherapeutische, rehabilitative und sonstige Nachsorgeleistungen umfassen.",
        en: "This includes in particular the operation of operating centres, diagnostic and therapy areas, as well as nursing and post-operative care. The range of services may include pain management, rehabilitative and other aftercare services.",
        ru: "Это включает работу операционных центров, диагностических и терапевтических отделений, а также сестринский уход и послеоперационное обеспечение. Спектр может охватывать обезболивание, реабилитацию и другие виды последующего ухода.",
        tr: "Bu faaliyetler özellikle ameliyathanelerin, tanı ve tedavi birimlerinin işletilmesini, hemşirelik hizmetlerini ve postoperatif bakımı içerir. Hizmet yelpazesi ağrı tedavisi, rehabilitasyon ve diğer takip/idame bakım hizmetlerini kapsayabilir.",
        ar: "يشمل ذلك بوجه خاص تشغيل مراكز العمليات الجراحية، وأقسام التشخيص والعلاج، بالإضافة إلى الرعاية التمريضية والتأهيل بعد الجراحة. قد يتضمن نطاق الخدمات علاج الألم، وخدمات إعادة التأهيل، ومختلف برامج الرعاية اللاحقة.",
        uz: "Bunga xususan jarrohlik markazlari, diagnostika va davolash bo'limlarini boshqarish, shuningdek hamshiralik parvarishi va operatsiyadan keyingi reabilitatsiya kiradi. Xizmatlar qatoriga og'riqni davolash, reabilitatsiya va boshqa keyingi parvarish choralari kirishi mumkin.",
      } as T,
      image: "/images/areas/surgical-center.webp",
    },
    {
      icon: Users as Icon,
      title: {
        de: "Personal & Kooperationen",
        en: "Staff & cooperations",
        ru: "Персонал и кооперации",
        tr: "Personel ve İş Birlikleri",
        ar: "الكوادر والشراكات التعاونية",
        uz: "Xodimlar va hamkorlik",
      } as T,
      text: {
        de: "Die Gesellschaft ist berechtigt, ärztliches und nichtärztliches Personal zu beschäftigen sowie Kooperationen mit Ärzten, Krankenhäusern, medizinischen Versorgungszentren, Pflege-, Therapie-, Rehabilitations- und Forschungseinrichtungen einzugehen. Ambulante Operationen und die Zusammenarbeit mit Belegärzten erfolgen unter Beachtung der jeweils geltenden gesetzlichen, berufsrechtlichen und vertraglichen Voraussetzungen.",
        en: "The company is entitled to employ medical and non-medical staff and to enter into cooperations with physicians, hospitals, MVZs, nursing, therapy, rehabilitation and research facilities. Outpatient operations and cooperation with attending physicians are subject to applicable legal, professional and contractual requirements.",
        ru: "Общество вправе нанимать медицинский и немедицинский персонал, а также заключать соглашения о сотрудничестве с врачами, больницами, MVZ, учреждениями по уходу, терапии, реабилитации и исследованиям. Амбулаторные операции и работа с ординаторами осуществляются в рамках закона.",
        tr: "Şirket; hekim ve hekim dışı personel istihdam etme, hekimler, hastaneler, tıbbi bakım merkezleri (MVZ), bakım, terapi, rehabilitasyon ve araştırma kuruluşları ile iş birlikleri kurma yetkisine sahiptir. Ayakta ameliyatlar ve anlaşmalı doktorlarla (Belegärzte) iş birliği yürürlükteki yasal, mesleki ve sözleşmesel şartlara tabidir.",
        ar: "يحق للشركة توظيف الكوادر الطبية وغير الطبية وإبرام شراكات تعاونية مع الأطباء والمستشفيات والمراكز الطبية (MVZ) ومؤسسات التمريض والعلاج وإعادة التأهيل والبحث العلمي. وتخضع الجراحات اليومية والتعاون مع الأطباء المنتسبين للشروط القانونية والمهنية والتعاقدية السارية.",
        uz: "Jamiyat shifokorlar va tibbiy bo'lmagan xodimlarni ishga olishga hamda shifokorlar, shifoxonalar, MVZlar, parvarish, terapiya, reabilitatsiya va ilmiy-tadqiqot muassasalari bilan hamkorlik qilishga haqlidir. Ambulator jarrohlik amaliyotlari va shartnomaviy shifokorlar (Belegärzte) bilan hamkorlik amaldagi qonunchilik, kasbiy va shartnomaviy talablarga rioya qilgan holda amalga oshiriladi.",
      } as T,
      image: "/images/areas/stethoscope-clinic.webp",
    },
    {
      icon: Scale as Icon,
      title: {
        de: "GKV-Zulassung & SGB V",
        en: "SHI approval & SGB V",
        ru: "Допуск GKV и SGB V",
        tr: "GKV Ruhsatı ve SGB V",
        ar: "اعتماد التأمين الصحي الإلزامي و SGB V",
        uz: "GKV litsenziyasi va SGB V",
      } as T,
      text: {
        de: "Die Gesellschaft kann die Zulassung ihrer Krankenhäuser nach § 108 SGB V anstreben, insbesondere durch Aufnahme in den Krankenhausplan oder durch Abschluss eines Versorgungsvertrags nach § 109 SGB V. Leistungen zulasten der gesetzlichen Krankenversicherung werden ausschließlich auf Grundlage der erforderlichen Zulassungen, Genehmigungen und Verträge erbracht.",
        en: "The company may seek approval of its hospitals under § 108 SGB V, in particular through inclusion in the hospital plan or by concluding a care contract under § 109 SGB V. Services at the expense of the statutory health insurance are only provided on the basis of the required approvals, permits and contracts.",
        ru: "Общество может добиваться допуска своих больниц по § 108 SGB V, в частности путём включения в больничный план или заключения договора об оказании помощи по § 109 SGB V. Услуги за счёт обязательного медицинского страхования оказываются исключительно на основе необходимых разрешений и договоров.",
        tr: "Şirket; özellikle hastane planlamasına dahil olma yoluyla veya § 109 SGB V uyarınca bakım sözleşmesi akdederek hastaneleri için § 108 SGB V kapsamında onay almayı hedefleyebilir. Yasal sağlık sigortası (GKV) kapsamındaki hizmetler yalnızca gerekli onay, ruhsat ve sözleşmeler temelinde sunulur.",
        ar: "يجوز للشركة السعي لاعتماد مستشفياتها بموجب المادة 108 من SGB V، لا سيما من خلال إدراجها ضمن الخطة العامة للمستشفيات أو إبرام عقود تقديم الرعاية بموجب المادة 109 من SGB V. وتُقدم الخدمات على حساب التأمين الصحي الإلزامي حصرياً استناداً إلى التراخيص والاعتمادات والعقود المقررة.",
        uz: "Jamiyat o'z shifoxonalari uchun § 108 SGB V bo'yicha ruxsatnoma olishga, xususan shifoxonalar rejasiga kiritilish yoki § 109 SGB V bo'yicha xizmat ko'rsatish shartnomasini tuzish orqali erishishi mumkin. Majburiy tibbiy sug'urta (GKV) hisobidan xizmatlar faqat zaruriy ruxsatnomalar, litsenziyalar va shartnomalar asosida ko'rsatiladi.",
      } as T,
      image: "/images/areas/diagnostics.webp",
    },
    {
      icon: Network as Icon,
      title: {
        de: "Beteiligungen & Expansion",
        en: "Investments & expansion",
        ru: "Участия и экспансия",
        tr: "İştirakler ve Büyüme",
        ar: "الاستثمارات والتوسع المؤسسي",
        uz: "Ishtirok va kengayish",
      } as T,
      text: {
        de: "Die Gesellschaft ist berechtigt, Unternehmen mit gleichem oder verwandtem Unternehmensgegenstand zu gründen, zu erwerben oder sich an ihnen zu beteiligen sowie Betriebsstätten, Zweigniederlassungen und Tochtergesellschaften im In- und Ausland zu errichten. Die Gründung oder das Halten von Beteiligungen an vertragsärztlichen MVZ setzt die Erfüllung der geltenden Anforderungen des § 95 SGB V voraus.",
        en: "The company is entitled to found, acquire or acquire interests in companies with the same or related purpose, and to establish branch offices, subsidiaries and affiliated companies in Germany and abroad. The founding or holding of interests in contracted MVZ is subject to the applicable requirements of § 95 SGB V.",
        ru: "Общество вправе основывать, приобретать или участвовать в компаниях с аналогичным предметом деятельности, а также создавать филиалы, дочерние компании в Германии и за рубежом. Участие в MVZ по договорной медицине возможно при соблюдении § 95 SGB V.",
        tr: "Şirket; aynı veya benzer faaliyet konusuna sahip şirketler kurma, devralma veya bunlara iştirak etme; yurt içinde ve yurt dışında işletmeler, şubeler ve bağlı ortaklıklar tesis etme yetkisine sahiptir. Sözleşmeli hekimlik MVZ'lerinde iştirak tesisi veya holding payı, § 95 SGB V gereksinimlerinin karşılanmasına bağlıdır.",
        ar: "يحق للشركة تأسيس شركات ذات أغراض مماثلة أو ذات صلة، أو الاستحواذ عليها أو المساهمة فيها، وإنشاء فروع ومقرات تشغيل وشركات تابعة داخل ألمانيا وخارجها. ويشترط لتأسيس أو تملك حصص في مراكز طبية تابعة لأطباء التأمين استيفاء متطلبات المادة 95 من SGB V.",
        uz: "Jamiyat bir xil yoki turdosh faoliyat yo'nalishiga ega korxonalarni ta'sis etish, sotib olish yoki ularda ishtirok etish, shuningdek Germaniyada va xorijda filiallar, bo'linmalar va sho'ba korxonalarni tashkil qilish huquqiga ega. Shartnomaviy tibbiyot MVZlarida ishtirok etish yoki ularni ta'sis etish § 95 SGB V talablariga to'liq javob berishni talab qiladi.",
      } as T,
      image: "/images/areas/consulting.webp",
    },
  ],

  legalNote: {
    de: "Alle Tätigkeiten werden im rechtlich zulässigen Umfang ausgeübt. Erlaubnis- und zulassungspflichtige Tätigkeiten werden an jedem Standort erst nach Vorliegen der jeweils erforderlichen Voraussetzungen aufgenommen. Eine Konzession nach § 30 GewO begründet für sich allein weder eine Zulassung nach § 108 SGB V noch eine MVZ-Gründungsberechtigung als zugelassenes Krankenhaus.",
    en: "All activities are carried out within the legally permissible scope. Activities requiring a permit or approval are not commenced at any location until the respective required prerequisites are met. A concession under § 30 GewO alone does not constitute approval under § 108 SGB V or a right to establish an MVZ as an approved hospital.",
    ru: "Вся деятельность осуществляется в законно допустимых рамках. Лицензируемые виды деятельности начинаются в каждом месте только после выполнения соответствующих условий. Разрешение по § 30 GewO само по себе не является ни допуском по § 108 SGB V, ни правом на создание MVZ как допущенной больницы.",
    tr: "Tüm faaliyetler yasal olarak izin verilen sınırlar dahilinde yürütülür. İzin ve ruhsata tabi faaliyetler her bir lokasyonda ancak gerekli yasal şartlar sağlandıktan sonra başlatılır. Tek başına § 30 GewO ruhsatı, ne § 108 SGB V uyarınca bir hastane onayına ne de yetkili bir hastane sıfatıyla MVZ kurma hakkına dayanak teşkil etmez.",
    ar: "تُمارس جميع الأنشطة ضمن النطاق المسموح به قانوناً. ولا تبدأ الأنشطة الخاضعة للتراخيص والاعتمادات في أي موقع إلا بعد استيفاء الشروط القانونية المقررة. إن الترخيص بموجب المادة 30 من GewO وحده لا يشكل اعتماداً وفق المادة 108 من SGB V ولا يمنح أهلية تأسيس مركز MVZ كمستشفى معتمد.",
    uz: "Barcha faoliyat qonuniy ruxsat etilgan doirada amalga oshiriladi. Ruxsatnoma va litsenziya talab qiladigan faoliyat turlari har bir manzilda faqat tegishli zaruriy shartlar mavjud bo'lgandagina boshlanadi. § 30 GewO bo'yicha ruxsatnomaning o'zi § 108 SGB V bo'yicha shifoxona ruxsatnomasini ham, tan olingan shifoxona sifatida MVZ tashkil etish huquqini ham ta'minlamaydi.",
  } as T,

  deptEyebrow: {
    de: "UNSERE PERSPEKTIVE",
    en: "OUR PERSPECTIVE",
    ru: "НАША ПЕРСПЕКТИВА",
    tr: "PERSPEKTİFİMİZ",
    ar: "رؤيتنا المستقبلية",
    uz: "BIZNING ISTIQBOLIMIZ",
  } as T,

  deptIntro: {
    de: "Die ambulanten Fachrichtungen werden anhand des geplanten stationären Eingriffsspektrums weiterentwickelt. Maßgeblich sind die beantragten Leistungsgruppen, ihre Qualitätskriterien und der regionale Bedarf. Ärztliche Vollzeitäquivalente, Dienstbereitschaft, Pflege, Ausstattung und zulässige Kooperationen sind für den Krankenhausstandort gesondert nachzuweisen. Eine automatische Umwandlung von MVZ-Fachrichtungen in Krankenhausabteilungen wird nicht vorausgesetzt.",
    en: "The outpatient specialties will be further developed based on the planned inpatient procedure spectrum. Decisive factors are the applied-for service groups, their quality criteria and regional demand. Medical full-time equivalents, on-call duty, nursing, equipment and permitted cooperations must be demonstrated separately for the hospital site. An automatic conversion of MVZ specialties into hospital departments is not assumed.",
    ru: "Амбулаторные специальности будут развиваться с учётом планируемого стационарного спектра вмешательств. Ключевыми факторами являются заявленные группы услуг, их критерии качества и региональный спрос. Врачебные ставки полного рабочего времени, дежурства, уход, оснащение и разрешённые кооперации должны подтверждаться отдельно для больничного места. Автоматическая трансформация специальностей MVZ в отделения больницы не предполагается.",
    tr: "Ayakta tedavi uzmanlık alanları, planlanan yatarak cerrahi müdahale yelpazesi doğrultusunda geliştirilmektedir. Başvurulan hizmet grupları, bunların kalite kriterleri ve bölgesel ihtiyaç belirleyicidir. Tam zamanlı hekim kadroları, nöbet hizmetleri, hemşirelik, donanım ve izin verilen iş birlikleri hastane lokasyonu için ayrıca belgelenmelidir. MVZ uzmanlıklarının otomatik olarak hastane departmanlarına dönüşeceği varsayılamaz.",
    ar: "يتم تطوير التخصصات الطبية للعيادات الخارجية استناداً إلى النطاق المخطط للتدخلات الجراحية السريرية. وتعتبر مجموعات الخدمات المطلوبة، ومعايير جودتها، والاحتياج الإقليمي هي العوامل الحاسمة. كما يجب إثبات مكافئات الدوام الكامل للأطباء، وخدمات النوبات، والتمريض، والتجهيزات، والتعاون المصرح به بشكل منفصل لموقع المستشفى. ولا يُفترض التحويل التلقائي لتخصصات MVZ إلى أقسام مستشفى.",
    uz: "Ambulator mutaxassisliklar rejalashtirilgan statsionar jarrohlik aralashuvlari doirasiga muvofiq yanada rivojlantiriladi. Ariza topshirilgan xizmat guruhlari, ularning sifat mezonlari va mintaqaviy ehtiyoj hal qiluvchi ahamiyatga ega. To'liq stavkali shifokorlar, navbatchilik xizmati, parvarishlash, jihozlar va ruxsat etilgan hamkorliklar shifoxona joylashgan manzil uchun alohida tasdiqlanishi lozim. MVZ ixtisosliklarining shifoxona bo'limlariga avtomatik aylanishi ko'zda tutilmaydi.",
  } as T,

  depts: [
    {
      icon: Syringe as Icon,
      title: {
        de: "Anästhesiologie",
        en: "Anaesthesiology",
        ru: "Анестезиология",
        tr: "Anesteziyoloji",
        ar: "التخدير والعناية المركزة",
        uz: "Anesteziologiya",
      } as T,
      text: {
        de: "Anästhesiologie, intensivmedizinische Kompetenz und internistische Versorgung werden frühzeitig eingeplant.",
        en: "Anaesthesiology, intensive care expertise and internal medicine are planned at an early stage.",
        ru: "Анестезиология, реанимационная компетенция и терапевтическое обеспечение планируются на раннем этапе.",
        tr: "Anesteziyoloji, yoğun bakım uzmanlığı ve dahiliye desteği erken aşamada planlanır.",
        ar: "يتم التخطيط المبكر لطب التخدير، وكفاءات العناية المركزة، والرعاية الباطنية.",
        uz: "Anesteziologiya, reanimatsiya kompetensiyasi va terapiya ta'minoti erta bosqichda rejalashtiriladi.",
      } as T,
    },
    {
      icon: Microscope as Icon,
      title: {
        de: "Radiologie",
        en: "Radiology",
        ru: "Радиология",
        tr: "Radyoloji",
        ar: "الأشعة التشخيصية",
        uz: "Radiologiya",
      } as T,
      text: {
        de: "Radiologie wird je nach OP-Spektrum angebunden.",
        en: "Radiology is integrated according to the surgical spectrum.",
        ru: "Радиология подключается в зависимости от операционного спектра.",
        tr: "Radyoloji, cerrahi operasyon yelpazesine göre entegre edilir.",
        ar: "يتم دمج خدمات الأشعة وفقاً لنطاق العمليات الجراحية المعتمد.",
        uz: "Radiologiya jarrohlik amaliyotlari ko'lamiga muvofiq ulanadi.",
      } as T,
    },
    {
      icon: Brain as Icon,
      title: {
        de: "Neurologie",
        en: "Neurology",
        ru: "Неврология",
        tr: "Nöroloji",
        ar: "طب الأعصاب",
        uz: "Nevrologiya",
      } as T,
      text: {
        de: "Neurologie wird je nach OP-Spektrum angebunden.",
        en: "Neurology is integrated according to the surgical spectrum.",
        ru: "Неврология — в зависимости от операционного спектра.",
        tr: "Nöroloji, cerrahi ve klinik operasyon yelpazesine göre entegre edilir.",
        ar: "يتم ربط طب الأعصاب بحسب نطاق العمليات التخصصية.",
        uz: "Nevrologiya jarrohlik va klinik operatsiyalar hajmiga qarab integratsiya qilinadi.",
      } as T,
    },
    {
      icon: Stethoscope as Icon,
      title: {
        de: "Endoskopie",
        en: "Endoscopy",
        ru: "Эндоскопия",
        tr: "Endoskopi",
        ar: "التنظير الداخلي",
        uz: "Endoskopiya",
      } as T,
      text: {
        de: "Endoskopie wird je nach OP-Spektrum angebunden.",
        en: "Endoscopy is integrated according to the surgical spectrum.",
        ru: "Эндоскопия — в зависимости от операционного спектра.",
        tr: "Endoskopi, cerrahi ve tanısal operasyon yelpazesine göre entegre edilir.",
        ar: "يتم ربط وحدات التنظير وفقاً لنطاق الإجراءات الجراحية والتشخيصية.",
        uz: "Endoskopiya jarrohlik va diagnostik operatsiyalar doirasiga qarab integratsiya qilinadi.",
      } as T,
    },
    {
      icon: BarChart3 as Icon,
      title: {
        de: "Planung und Struktur",
        en: "Planning and structure",
        ru: "Планирование и структура",
        tr: "Planlama ve Yapı",
        ar: "التخطيط والهيكلة",
        uz: "Rejalashtirish va tuzilma",
      } as T,
      text: {
        de: "Der erforderliche Umfang eigener Strukturen wird vor Investitionsentscheidungen mit der Krankenhausplanung abgestimmt.",
        en: "The required scope of own structures is coordinated with hospital planning prior to investment decisions.",
        ru: "Необходимый объём собственной инфраструктуры согласовывается с планированием больницы до принятия инвестиционных решений.",
        tr: "Gerekli öz yapıların kapsamı, yatırım kararlarından önce hastane planlama mercileriyle koordine edilir.",
        ar: "يتم تنسيق النطاق المطلوب للهياكل والمقرات الذاتية مع جهات تخطيط المستشفيات قبل قرارات الاستثمار.",
        uz: "O'z infratuzilmasining zaruriy ko'lami investitsiya qarorlaridan oldin shifoxonani rejalashtirish organlari bilan kelishiladi.",
      } as T,
    },
    {
      icon: ClipboardList as Icon,
      title: {
        de: "Leistungsgruppen und Qualität",
        en: "Service groups and quality",
        ru: "Группы услуг и качество",
        tr: "Hizmet Grupları ve Kalite",
        ar: "مجموعات الخدمات والجودة",
        uz: "Xizmat guruhlari va sifat",
      } as T,
      text: {
        de: "Maßgeblich sind die beantragten Leistungsgruppen, ihre Qualitätskriterien und der regionale Bedarf.",
        en: "Decisive are the applied-for service groups, their quality criteria and regional demand.",
        ru: "Ключевыми являются заявленные группы услуг, их критерии качества и региональный спрос.",
        tr: "Belirleyici olan; başvurulan hizmet grupları, kalite kriterleri ve bölgesel sağlık ihtiyacıdır.",
        ar: "المحدد الأساسي هو مجموعات الخدمات المقدمة، ومعايير جودتها، والاحتياج الطبي في المنطقة.",
        uz: "Ariza berilgan xizmat guruhlari, ularning sifat mezonlari va mintaqaviy ehtiyoj asosiy omillardir.",
      } as T,
    },
    {
      icon: Settings as Icon,
      title: {
        de: "Personal und Ausstattung",
        en: "Staffing and equipment",
        ru: "Персонал и оснащение",
        tr: "Personel ve Donanım",
        ar: "الكوادر والتجهيزات الطبية",
        uz: "Xodimlar va jihozlar",
      } as T,
      text: {
        de: "Ärztliche Vollzeitäquivalente, Dienstbereitschaft, Pflege und Ausstattung sind gesondert nachzuweisen.",
        en: "Medical full-time equivalents, on-call duty, nursing and equipment must be demonstrated separately.",
        ru: "Врачебные ставки, дежурства, уход и оснащение подтверждаются отдельно.",
        tr: "Tam zamanlı hekim kadroları, nöbet hizmetleri, hemşirelik ve teknik donanım ayrıca belgelenmelidir.",
        ar: "يجب إثبات معدلات التفرغ الطبي الكامل، وجاهزية النوبات، والتمريض، والتجهيزات بشكل مستقل.",
        uz: "Shifokorlarning to'liq stavkalari, navbatchilik, parvarish va uskunalar alohida tasdiqlanishi kerak.",
      } as T,
    },
    {
      icon: MapPin as Icon,
      title: {
        de: "Kooperationen",
        en: "Cooperations",
        ru: "Кооперации",
        tr: "İş Birlikleri",
        ar: "الشراكات التعاونية",
        uz: "Hamkorliklar",
      } as T,
      text: {
        de: "Zulässige Kooperationen sind für den Krankenhausstandort gesondert nachzuweisen.",
        en: "Permitted cooperations must be demonstrated separately for the hospital site.",
        ru: "Разрешённые кооперации подтверждаются отдельно для каждого места больницы.",
        tr: "Mevzuata uygun iş birlikleri hastane lokasyonu için ayrıca belgelenmelidir.",
        ar: "يجب توثيق الشراكات التعاونية المصرح بها نظاماً لكل موقع مستشفى على حدة.",
        uz: "Ruxsat etilgan hamkorliklar har bir shifoxona manzili uchun alohida hujjatlashtirilishi lozim.",
      } as T,
    },
  ],
};

export function ClinicsGermanySection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "uz" ? "uz" : locale === "tr" ? "tr" : locale === "ar" ? "ar" : locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  return (
    <section
      id="nabiota-clinics-germany"
      className="relative pt-0 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF8F5] border-t border-[#EDE8DE]/60 overflow-hidden"
    >
      {/* Subtle background glow accents */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[#D5B878]/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -right-24 w-[400px] h-[400px] rounded-full bg-[#E8DFC8]/25 blur-3xl pointer-events-none" />

      {/* ── Hero Banner: Full-width banner with soft right-photo fade (Matching MVZ 1 & 2 design) ── */}
      <div className="relative z-10 w-full overflow-hidden pb-4 sm:pb-6">
        {/* Soft Background Photo with smooth horizontal fade / blur effect */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[60%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/areas/atrium-lounge.webp"
            alt="NabiOta Clinics Germany GmbH"
            fill
            className="object-cover object-center lg:object-right"
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {/* Subtle horizontal gradient fade - softer and crisper photo visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] from-0% via-[#FAF8F5]/75 via-18% via-[#FAF8F5]/20 via-38% to-transparent to-75%" />
          {/* Subtle vertical gradient fade for mobile & bottom blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/50 via-15% to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] from-0% via-[#FAF8F5]/20 via-10% to-transparent hidden lg:block" />
        </div>

        {/* Botanical foliage watermark on far left (matching reference) */}
        <div className="absolute top-2 left-0 w-44 sm:w-56 h-72 pointer-events-none opacity-35 select-none sepia hue-rotate-[15deg]">
          <Image
            src="/images/areas/botanical-branch-clean.webp"
            alt=""
            fill
            className="object-contain object-left"
            unoptimized
          />
        </div>

        {/* Hero Content Container */}
        <Container size="wide" className="relative z-10 pt-4 sm:pt-6">
          <div className="max-w-6xl mx-auto">
            {/* Top Row: Title, Eyebrow & Lead on the left (No buttons) */}
            <div className="max-w-xl lg:max-w-2xl mb-6 sm:mb-8 lg:mb-9">
              {/* Eyebrow with gold line: incorporating MVZ 3 · § 30 GewO · § 108 SGB V & subtitle */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3 flex-wrap">
                <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase">
                  {c.tag[l]}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#C5A56A]/60" />
                <span className="text-[10px] sm:text-[10.5px] font-medium tracking-[0.2em] text-[#6E7870] uppercase">
                  {c.subtitle[l]}
                </span>
              </div>

              {/* Title with styled italic phrase */}
              <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] text-[#142318] font-normal leading-[1.18] mb-3">
                {(() => {
                  const phrase = "Clinics Germany";
                  const [before, after] = c.title.split(phrase);
                  return after === undefined ? (
                    c.title
                  ) : (
                    <>
                      {before}
                      <span className="font-serif italic text-[#C5A56A]">{phrase}</span>
                      {after}
                    </>
                  );
                })()}
              </h2>

              <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-xl">
                {c.lead[l]}
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Top Part: 4 Pillars & Legal Disclaimer ── */}
      <Container size="wide" className="relative z-10 mt-4 sm:mt-6">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {/* 4 Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {c.pillars.map((p, i) => {
              const Icon = p.icon;
              const numStr = String(i + 1).padStart(2, "0");
              return (
                <article
                  key={i}
                  className="group relative rounded-[20px] sm:rounded-[22px] bg-white border border-[#EAE4D7] hover:border-[#D5B878]/60 hover:shadow-xl transition-all duration-300 shadow-sm overflow-hidden flex flex-col justify-between min-h-[200px]"
                >
                  {/* Right faded photo */}
                  <div className="absolute right-0 top-0 bottom-0 w-[40%] sm:w-[38%] pointer-events-none overflow-hidden select-none">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                  </div>

                  {/* Left content */}
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Number + Icon row */}
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="font-serif text-[22px] sm:text-[24px] text-[#C5A56A] font-normal leading-none w-8 shrink-0">
                          {numStr}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-[#FAF3E8] border border-[#E8DFC8] text-[#9E7D3B] flex items-center justify-center shrink-0 group-hover:bg-[#F0E5CD] transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-[17px] sm:text-[18.5px] text-[#142318] font-medium leading-snug mb-2.5 max-w-[62%] sm:max-w-[60%]">
                        {p.title[l]}
                      </h3>

                      {/* Body text */}
                      <p className="text-[12px] sm:text-[12.5px] text-[#4E5650] leading-relaxed max-w-[64%] sm:max-w-[62%]">
                        {p.text[l]}
                      </p>
                    </div>

                    {/* Mehr erfahren link */}
                    <div className="mt-4 pt-3.5 border-t border-[#EDE8DE]">
                      <Link
                        href={`/${l}/contact`}
                        className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-[12px] font-semibold text-[#9E7D3B] hover:text-[#142318] transition-colors"
                      >
                        <span>{l === "ru" ? "Подробнее" : l === "en" ? "Learn more" : l === "tr" ? "Daha fazla bilgi" : l === "ar" ? "اعرف المزيد" : l === "uz" ? "Batafsil" : "Mehr erfahren"}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Legal disclaimer */}
          <div className="flex gap-4 rounded-xl sm:rounded-2xl border border-[#E0D5C1] bg-[#FAF5EC] p-5 sm:p-6">
            <Shield className="w-5 h-5 text-[#9E7D3B] shrink-0 mt-0.5" />
            <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed">{c.legalNote[l]}</p>
          </div>
        </div>
      </Container>

      {/* ── Preparation of future departments (Full Page Width Section, Real Vector Arc Transition, Compact Height) ── */}
      <div className="relative mt-8 sm:mt-10 lg:mt-12 w-full overflow-hidden">
        {/* Full-bleed Top Hero: Description on Left, mvz.webp on Right with Real Vector Curve Arc */}
        <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[250px] sm:min-h-[280px] lg:min-h-[320px] xl:min-h-[340px] relative">
          
          {/* Left Column: Eyebrow, Title, Description */}
          <div className="w-full lg:w-[52%] xl:w-[54%] flex flex-col justify-center py-6 sm:py-8 lg:py-10 px-6 sm:px-10 lg:pl-16 xl:pl-28 2xl:pl-36 lg:pr-10 z-10">
            <div className="max-w-xl">
              {/* Eyebrow with gold line */}
              <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
                <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#C5A56A] uppercase">
                  {c.deptEyebrow[l]}
                </span>
              </div>

              {/* Main Title with styled italic word */}
              <h3 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-[#142318] font-normal leading-[1.18] mb-2.5 sm:mb-3">
                {l === "en" ? (
                  <>
                    Preparation of{" "}
                    <span className="font-serif italic text-[#C5A56A]">future</span>{" "}
                    departments
                  </>
                ) : l === "ru" ? (
                  <>
                    Подготовка{" "}
                    <span className="font-serif italic text-[#C5A56A]">будущих</span>{" "}
                    отделений
                  </>
                ) : l === "tr" ? (
                  <>
                    Gelecekteki uzmanlık bölümlerinin{" "}
                    <span className="font-serif italic text-[#C5A56A]">hazırlığı</span>
                  </>
                ) : l === "ar" ? (
                  <>
                    التحضير للأقسام التخصصية{" "}
                    <span className="font-serif italic text-[#C5A56A]">المستقبلية</span>
                  </>
                ) : l === "uz" ? (
                  <>
                    Kelgusi mutaxassislik bo&apos;limlarini{" "}
                    <span className="font-serif italic text-[#C5A56A]">tayyorlash</span>
                  </>
                ) : (
                  <>
                    Vorbereitung der{" "}
                    <span className="font-serif italic text-[#C5A56A]">späteren</span>{" "}
                    Fachabteilungen
                  </>
                )}
              </h3>

              {/* Description */}
              <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-lg">
                {c.deptIntro[l]}
              </p>
            </div>
          </div>

          {/* Right Column: Full-bleed mvz.webp with Real Curved Vector Transition */}
          <div className="w-full lg:w-[48%] xl:w-[46%] relative min-h-[200px] sm:min-h-[240px] lg:min-h-full overflow-hidden">
            <Image
              src="/images/services/mvz.webp"
              alt="MVZ Medical Care"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* ── Real SVG Curved Arc Transition (Desktop) ── */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-36 sm:w-44 lg:w-56 xl:w-64 h-full pointer-events-none z-10">
              <svg
                viewBox="0 0 200 600"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="curveRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C5A56A" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#EADEC7" stopOpacity="0.15" />
                  </linearGradient>
                </defs>

                {/* Solid fill matching section background #FAF8F5 on the left */}
                <path
                  d="M 0,0 L 50,0 C 130,120 160,260 110,410 C 85,485 45,550 0,600 L 0,600 Z"
                  fill="#FAF8F5"
                />

                {/* Soft beige gradient ribbon band */}
                <path
                  d="M 50,0 C 130,120 160,260 110,410 C 85,485 45,550 0,600 L 16,600 C 62,550 102,485 128,410 C 178,260 148,120 68,0 Z"
                  fill="url(#curveRibbonGrad)"
                />

                {/* Primary gold wave line */}
                <path
                  d="M 50,0 C 130,120 160,260 110,410 C 85,485 45,550 0,600"
                  fill="none"
                  stroke="#C5A56A"
                  strokeWidth="1.6"
                  strokeOpacity="0.8"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Secondary champagne ribbon line */}
                <path
                  d="M 68,0 C 148,120 178,260 128,410 C 102,485 62,550 16,600"
                  fill="none"
                  stroke="#E2D4BD"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Third delicate dashed line */}
                <path
                  d="M 84,0 C 164,120 194,260 144,410 C 118,485 78,550 28,600"
                  fill="none"
                  stroke="#C5A56A"
                  strokeWidth="0.8"
                  strokeOpacity="0.45"
                  strokeDasharray="4 3"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Delicate botanical leaf watermark sitting along the curved wave */}
              <div className="absolute top-[48%] left-6 -translate-y-1/2 w-44 h-44 pointer-events-none opacity-40 select-none sepia hue-rotate-[15deg]">
                <Image
                  src="/images/areas/botanical-branch-clean.webp"
                  alt=""
                  fill
                  className="object-contain -rotate-12"
                  unoptimized
                />
              </div>
            </div>

            {/* ── Real SVG Curved Arc Transition (Mobile) ── */}
            <div className="lg:hidden absolute inset-x-0 top-0 h-16 pointer-events-none z-10">
              <svg
                viewBox="0 0 600 80"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <path
                  d="M 0,0 L 600,0 L 600,30 C 450,75 250,15 0,55 Z"
                  fill="#FAF8F5"
                />
                <path
                  d="M 0,55 C 250,15 450,75 600,30"
                  fill="none"
                  stroke="#C5A56A"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M 0,63 C 250,23 450,83 600,38"
                  fill="none"
                  stroke="#E2D4BD"
                  strokeWidth="1.2"
                  strokeOpacity="0.6"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ── 8 Cards Grid (Clean and compact, without enclosing frame) ── */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-6 sm:mt-8 pb-3 relative">
          {/* Subtle botanical leaves watermark in bottom-right behind cards */}
          <div className="absolute -bottom-8 -right-8 w-64 h-64 pointer-events-none opacity-20 select-none sepia">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt=""
              fill
              className="object-contain rotate-12"
              unoptimized
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
            {c.depts.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-[18px] bg-white border border-[#EAE4D7] p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#D5B878]/60 transition-all duration-300"
                >
                  {/* Left: Icon circle */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                    <Icon className="w-5 h-5 text-[#9E7D3B]" strokeWidth={1.7} />
                  </div>

                  {/* Center: Title + Description */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-[15px] sm:text-[16px] text-[#142318] font-medium leading-snug mb-0.5">
                      {d.title[l]}
                    </h4>
                    <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-relaxed">
                      {d.text[l]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
