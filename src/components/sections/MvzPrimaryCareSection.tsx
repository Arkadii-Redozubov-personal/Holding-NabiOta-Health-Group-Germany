import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Pill,
  Syringe,
  GitMerge,
  Hospital,
  ClipboardList,
  CalendarClock,
  Siren,
  GraduationCap,
  FileBadge,
  UserCog,
  Users,
  ScrollText,
  Lock,
  ShieldCheck,
  Cpu,
  Receipt,
  Scale,
  Heart,
  Wind,
  Brain,
  Dna,
  ArrowRight,
  Check,
  Leaf,
  Award,
  Info,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section IV.1 – "NabiOta MVZ für hausärztliche und fachärztliche Versorgung GmbH"
 * Unternehmensgegenstand, medizinische/organisatorische Aufgaben, rechtliche/betriebliche Pflichten.
 */

type Lang = "de" | "en" | "ru" | "tr" | "ar" | "uz";
type T = Record<Lang, string>;
type Icon = React.ComponentType<{ className?: string }>;

const c = {
  tag: {
    de: "MVZ 1 · § 95 SGB V",
    en: "MVZ 1 · § 95 SGB V",
    ru: "MVZ 1 · § 95 SGB V",
    tr: "MVZ 1 · § 95 SGB V",
    ar: "MVZ 1 · § 95 SGB V",
    uz: "MVZ 1 · § 95 SGB V",
  } as T,
  title: "NabiOta MVZ für hausärztliche und fachärztliche Versorgung GmbH",
  subtitle: {
    de: "Unternehmensgegenstand, Aufgaben und Pflichten",
    en: "Corporate purpose, tasks and obligations",
    ru: "Предмет деятельности, задачи и обязанности",
    tr: "Şirket Faaliyet Konusu, Görev ve Yükümlülükleri",
    ar: "أغراض الشركة والمهام والالتزامات التشغيلية",
    uz: "Faoliyat predmeti, vazifalar va majburiyatlar",
  } as T,
  lead: {
    de: "Gegenstand des Unternehmens ist die Errichtung und der Betrieb eines oder mehrerer ärztlich geleiteter medizinischer Versorgungszentren gemäß § 95 SGB V zur hausärztlichen und fachärztlichen Versorgung gesetzlich und privat versicherter Patienten.",
    en: "The purpose of the company is the establishment and operation of one or more physician-led medical care centres pursuant to § 95 SGB V for general practice and specialist care of statutorily and privately insured patients.",
    ru: "Предметом деятельности общества является создание и эксплуатация одного или нескольких медицинских центров под врачебным руководством согласно § 95 SGB V для семейной и специализированной помощи пациентам с обязательной и частной страховкой.",
    tr: "Şirketin faaliyet konusu, yasal ve özel sigortalı hastalara yönelik birinci basamak aile hekimliği ve uzman hekimlik hizmetleri sunmak amacıyla § 95 SGB V uyarınca hekim yönetiminde bir veya birden fazla tıp merkezinin (MVZ) kurulması ve işletilmesidir.",
    ar: "يتمثل الغرض من الشركة في إنشاء وتشغيل مركز أو أكثر من مراكز الرعاية الطبية (MVZ) بإشراف وإدارة طبية وفقاً للمادة § 95 SGB V، لتقديم خدمات طب الأسرة والرعاية التخصصية للمرضى المؤمن عليهم في التأمين الصحي الإلزامي والخاص.",
    uz: "Jamiyat faoliyatining predmeti majburiy va ixtiyoriy tibbiy sug'urtaga ega bo'lgan bemorlarga oilaviy va ixtisoslashtirilgan tibbiy yordam ko'rsatish maqsadida § 95 SGB V ga muvofiq shifokorlar boshchiligidagi bir yoki bir nechta tibbiy markazlarni (MVZ) tashkil etish va boshqarishdan iborat.",
  } as T,

  specialtiesTitle: {
    de: "Versorgungsangebot",
    en: "Range of care",
    ru: "Спектр помощи",
    tr: "Hizmet Yelpazesi",
    ar: "نطاق الرعاية والخدمات الطبية",
  } as T,
  specialties: {
    de: ["Allgemeinmedizin", "Hausärztliche Innere Medizin", "Fachärztliche Innere Medizin", "Kardiologie", "Gastroenterologie", "Endokrinologie", "Pneumologie", "Neurologie"],
    en: ["General medicine", "GP internal medicine", "Specialist internal medicine", "Cardiology", "Gastroenterology", "Endocrinology", "Pulmonology", "Neurology"],
    ru: ["Общая медицина", "Терапия (семейная)", "Терапия (специализированная)", "Кардиология", "Гастроэнтерология", "Эндокринология", "Пульмонология", "Неврология"],
    tr: ["Genel Tıp / Aile Hekimliği", "Birinci Basamak Dahiliye", "Uzman Dahiliye", "Kardiyoloji", "Gastroenteroloji", "Endokrinoloji", "Göğüs Hastalıkları (Pnömoloji)", "Nöroloji"],
    ar: ["الطب العام", "الباطنية العامة وطب الأسرة", "الباطنية التخصصية", "أمراض القلب", "أمراض الجهاز الهضمي", "الغدد الصماء والسكري", "أمراض الصدر والرئة", "طب الأعصاب"],
    uz: ["Umumiy amaliyot tibbiyoti", "Ichki kasalliklar (oilaviy)", "Ichki kasalliklar (ixtisoslashgan)", "Kardiologiya", "Gastroenterologiya", "Endokrinologiya", "Pulmonologiya", "Nevrologiya"],
  },
  specialtiesNote: {
    de: "Weitere ärztliche Fachgebiete können unter Wahrung der jeweiligen fachlichen, berufsrechtlichen und zulassungsrechtlichen Voraussetzungen ergänzt werden.",
    en: "Further medical specialties may be added, subject to the respective professional, professional-law and approval-law requirements.",
    ru: "Другие врачебные специальности могут быть добавлены при соблюдении соответствующих профессиональных, профессионально-правовых и разрешительных требований.",
    tr: "İlgili uzmanlık, meslek hukuku ve ruhsatlandırma şartlarına uyulması kaydıyla diğer tıbbi uzmanlık alanları da eklenebilir.",
    ar: "يمكن إضافة تخصصات طبية أخرى مع مراعاة المتطلبات المهنية واللوائح القانونية والتراخيص المعمول بها.",
    uz: "Tegishli kasbiy, huquqiy va litsenziyalash talablariga rioya qilingan holda boshqa tibbiy mutaxassisliklar ham qo'shilishi mumkin.",
  } as T,

  paragraphs: [
    {
      icon: Stethoscope as Icon,
      title: {
        de: "Ambulante Leistungen",
        en: "Outpatient services",
        ru: "Амбулаторные услуги",
        tr: "Ayakta Tedavi Hizmetleri",
        ar: "خدمات الرعاية المتنقلة",
        uz: "Ambulator xizmatlar",
      } as T,
      text: {
        de: "Die Gesellschaft erbringt durch entsprechend qualifizierte Ärzte und sonstiges befugtes Fachpersonal ambulante Leistungen der Prävention, Früherkennung, Diagnostik, Beratung, Behandlung und Nachsorge. Dazu gehören insbesondere die Betreuung akuter und chronischer Erkrankungen, konservative Therapien, die Koordination fachübergreifender Behandlungsabläufe und die medizinisch erforderliche Zusammenarbeit mit weiteren Leistungserbringern.",
        en: "Through appropriately qualified physicians and other authorized specialist staff, the company provides outpatient services in prevention, early detection, diagnostics, counselling, treatment and aftercare. These include in particular the care of acute and chronic illnesses, conservative therapies, the coordination of interdisciplinary treatment processes and medically necessary cooperation with other providers.",
        ru: "Силами квалифицированных врачей и другого уполномоченного персонала общество оказывает амбулаторные услуги по профилактике, раннему выявлению, диагностике, консультированию, лечению и последующему наблюдению. Сюда относятся, в частности, ведение острых и хронических заболеваний, консервативная терапия, координация междисциплинарного лечения и необходимое по медицинским показаниям взаимодействие с другими поставщиками услуг.",
        tr: "Şirket; nitelikli hekimler ve yetkili sağlık personeli aracılığıyla koruyucu hekimlik, erken teşhis, tanı, danışmanlık, tedavi ve izlem alanlarında ayakta sağlık hizmetleri sunar. Akut ve kronik hastalıkların takibi, konservatif tedaviler, branşlar arası süreçlerin koordinasyonu ve diğer sağlık kuruluşlarıyla gerekli tıbbi iş birliği buna dahildir.",
        ar: "تقدم الشركة، من خلال أطباء مؤهلين وكوادر متخصصة معتمدة، خدمات الرعاية النهارية المتنقلة في الوقاية، والكشف المبكر، والتشخيص، والاستشارات، والعلاج، والرعاية اللاحقة. ويشمل ذلك رعاية الأمراض الحادة والمزمنة، والعلاجات التحفظية، وتنسيق الإجراءات متعددة التخصصات والتعاون الطبي المطلوب.",
        uz: "Jamiyat tegishli malakaga ega shifokorlar va boshqa vakolatli xodimlar orqali profilaktika, erta aniqlash, diagnostika, maslahat, davolash va keyingi kuzatuv bo'yicha ambulator xizmatlarni taqdim etadi. Bunga, xususan, o'tkir va surunkali kasalliklarni nazorat qilish, konservativ davolash, ko'p tarmoqli davolash jarayonlarini muvofiqlashtirish va boshqa tibbiy tashkilotlar bilan zarur hamkorlik kiradi.",
      } as T,
    },
    {
      icon: Hospital as Icon,
      title: {
        de: "Einrichtungen & Kooperationen",
        en: "Facilities & cooperations",
        ru: "Ресурсы и кооперации",
        tr: "Tesisler ve İş Birlikleri",
        ar: "المرافق والشراكات التعاونية",
        uz: "Muassasalar va hamkorlik",
      } as T,
      text: {
        de: "Die Gesellschaft ist berechtigt, die hierfür erforderlichen personellen, räumlichen, technischen und organisatorischen Einrichtungen vorzuhalten und zu betreiben. Sie darf im rechtlich zulässigen Umfang Zweigpraxen und ausgelagerte Praxisräume errichten sowie Kooperationen mit Ärzten, anderen medizinischen Versorgungszentren, Krankenhäusern, Rehabilitationseinrichtungen und weiteren befugten Leistungserbringern eingehen.",
        en: "The company is entitled to maintain and operate the necessary personnel, premises, technical and organizational facilities. To the extent legally permissible, it may set up branch practices and outsourced practice rooms and enter into cooperations with physicians, other medical care centres, hospitals, rehabilitation facilities and other authorized providers.",
        ru: "Общество вправе содержать и эксплуатировать необходимые кадровые, пространственные, технические и организационные ресурсы. В законно допустимых рамках оно может открывать филиальные практики и вынесенные кабинеты, а также сотрудничать с врачами, другими MVZ, больницами, реабилитационными учреждениями и иными уполномоченными поставщиками услуг.",
        tr: "Şirket, bu amaçla gerekli personel, mekân, teknik ve organizasyonel tesisleri bulundurma ve işletme yetkisine sahiptir. Yasal sınırlar dahilinde şube muayenehaneleri ve harici çalışma odaları açabilir; hekimler, diğer tıp merkezleri, hastaneler, rehabilitasyon kurumları ve yetkili hizmet sunucuları ile iş birliği yapabilir.",
        ar: "يحق للشركة تجهيز وتشغيل البنية التحتية من كوادر ومبانٍ ومعدات تقنية وتنظيمية لازمة. ويجوز لها، في الحدود المسموح بها قانوناً، إنشاء فروع وعيادات خارجية، والدخول في شراكات تعاونية مع الأطباء ومراكز الرعاية الطبية الأخرى والمستشفيات ومرافق التأهيل ومقدمي الرعاية المعتمدين.",
        uz: "Jamiyat buning uchun zarur bo'lgan kadrlar, binolar, texnik va tashkiliy infratuzilmani saqlash va boshqarish huquqiga ega. Qonun doirasida u filial amaliyotlari va tashqi xonalarni ochishi, shuningdek shifokorlar, boshqa tibbiy markazlar (MVZ), shifoxonalar, reabilitatsiya muassasalari va boshqa vakolatli xizmat ko'rsatuvchilar bilan hamkorlik qilishi mumkin.",
      } as T,
    },
    {
      icon: Scale as Icon,
      title: {
        de: "Zulassungen & Genehmigungen",
        en: "Approvals & permits",
        ru: "Допуски и разрешения",
        tr: "Ruhsat ve Yasal İzinler",
        ar: "التراخيص والموافقات الرسمية",
        uz: "Litsenziyalar va ruxsatnomalar",
      } as T,
      text: {
        de: "Die Teilnahme an der vertragsärztlichen Versorgung, die Beschäftigung von Ärzten und die Erbringung und Abrechnung genehmigungspflichtiger Leistungen erfolgen ausschließlich auf Grundlage der jeweils erforderlichen Zulassungen und Genehmigungen. Die Fachgebietsgrenzen und die ärztliche Weisungsfreiheit in medizinischen Fragen sind zu wahren. Die Gesellschaft darf alle Geschäfte und Maßnahmen vornehmen, die dem Unternehmensgegenstand unmittelbar oder mittelbar dienen, soweit sie rechtlich zulässig sind. Erlaubnis- oder genehmigungspflichtige Tätigkeiten dürfen erst nach Vorliegen der erforderlichen Erlaubnisse oder Genehmigungen aufgenommen werden.",
        en: "Participation in contract-physician care, the employment of physicians and the provision and billing of services requiring approval take place exclusively on the basis of the required approvals and permits. Specialty boundaries and medical independence in medical matters must be observed. The company may carry out all transactions and measures that directly or indirectly serve the corporate purpose, insofar as they are legally permissible. Activities requiring a permit or approval may only begin once the necessary permits or approvals have been obtained.",
        ru: "Участие в системе обязательного медицинского страхования, наём врачей, оказание и выставление счетов за услуги, требующие разрешения, осуществляются исключительно на основании необходимых допусков и разрешений. Границы специальностей и независимость врачей в медицинских вопросах должны соблюдаться. Общество вправе совершать все сделки и действия, прямо или косвенно служащие предмету деятельности, если они законно допустимы. Деятельность, требующая разрешения, начинается только после получения необходимых разрешений.",
        tr: "Anlaşmalı hekimlik (Kassenarzt) hizmetlerine katılım, hekim istihdamı ve izne tabi hizmetlerin sunumu ve faturalandırılması yalnızca ilgili zorunlu ruhsat ve izinler temelinde gerçekleşir. Uzmanlık alanı sınırları ve hekimlerin tıbbi bağımsızlığı korunur. İzne veya onaya tabi faaliyetler ancak gerekli onaylar alındıktan sonra başlatılır.",
        ar: "تتم المشاركة في الرعاية التعاقدية (التأمين الإلزامي) وتوظيف الأطباء وتقديم وفوترة الخدمات الخاضعة للموافقة حصرياً على أساس التراخيص الإلزامية. وتُصان الحدود التخصصية والاستقلالية الطبية في القرارات العلاجية. وتبدأ الأنشطة الخاضعة للترخيص فقط بعد استيفاء جميع الموافقات الرسمية.",
        uz: "Majburiy tibbiy sug'urta (Kassenärztliche Versorgung) tizimida ishtirok etish, shifokorlarni ishga olish hamda ruxsat talab qiluvchi xizmatlarni ko'rsatish va hisob-kitob qilish faqat talab qilinadigan litsenziyalar va ruxsatnomalar asosida amalga oshiriladi. Mutaxassislik chegaralari va shifokorlarning tibbiy qarorlar qabul qilishdagi mustaqilligi saqlanadi. Ruxsatnoma talab qilinadigan faoliyat faqat tegishli hujjatlar olingandan so'ng boshlanadi.",
      } as T,
    },
  ],

  tasksTitle: {
    de: "Medizinische und organisatorische Aufgaben",
    en: "Medical and organizational tasks",
    ru: "Медицинские и организационные задачи",
    tr: "Tıbbi ve Organizasyonel Görevler",
    ar: "المهام الطبية والتنظيمية",
    uz: "Tibbiy va tashkiliy vazifalar",
  } as T,
  tasks: [
    {
      icon: HeartPulse as Icon,
      title: { de: "Kontinuierliche Betreuung", en: "Continuous Care", ru: "Непрерывная помощь", tr: "Sürekli Hasta Takibi", ar: "الرعاية المستمرة", uz: "Uzluksiz yordam" } as T,
      de: "Sicherstellung einer kontinuierlichen hausärztlichen Betreuung sowie ergänzender fachärztlicher Versorgung im jeweils genehmigten Umfang.",
      en: "Ensuring continuous GP care and supplementary specialist care within the approved scope.",
      ru: "Обеспечение непрерывной семейной помощи и дополнительной специализированной помощи в утверждённом объёме.",
      tr: "Onaylanan kapsam dahilinde kesintisiz birinci basamak aile hekimliği ve tamamlayıcı uzman hekimlik hizmetlerinin güvenceye alınması.",
      ar: "ضمان الرعاية المستمرة لطب الأسرة والرعاية التخصصية التكميلية ضمن النطاق المعتمد.",
      uz: "Tasdiqlangan hajm doirasida uzluksiz oilaviy tibbiy yordam va qo'shimcha ixtisoslashtirilgan xizmatlarni ta'minlash.",
    },
    {
      icon: Stethoscope as Icon,
      title: { de: "Ärztliche Untersuchungen", en: "Medical Examinations", ru: "Врачебные осмотры", tr: "Tıbbi Muayene ve Tedavi", ar: "الفحوصات الطبية", uz: "Tibbiy ko'riklar" } as T,
      de: "Durchführung medizinisch indizierter Untersuchungen und Behandlungen durch hierfür qualifizierte und befugte Ärzte.",
      en: "Medically indicated examinations and treatments by qualified and authorized physicians.",
      ru: "Проведение показанных обследований и лечения квалифицированными и уполномоченными врачами.",
      tr: "Tıbbi endikasyonu bulunan tetkik ve tedavilerin nitelikli ve yetkili hekimler tarafından yürütülmesi.",
      ar: "إجراء الفحوصات والعلاجات المستندة إلى دواعي طبية دقيقة بواسطة أطباء مؤهلين ومرخصين.",
      uz: "Malakali va vakolatli shifokorlar tomonidan tibbiy ko'rsatilgan tekshiruv va muolajalarni o'tkazish.",
    },
    {
      icon: Pill as Icon,
      title: { de: "Chroniker-Betreuung", en: "Chronic Patient Care", ru: "Ведение хронических больных", tr: "Kronik Hasta Yönetimi", ar: "رعاية الأمراض المزمنة", uz: "Surunkali bemorlarni nazorat qilish" } as T,
      de: "Langfristige Betreuung chronisch erkrankter und multimorbider Patienten einschließlich regelmäßiger Verlaufskontrollen und Überprüfung der Medikation.",
      en: "Long-term care of chronically ill and multimorbid patients, including regular follow-ups and medication reviews.",
      ru: "Долгосрочное ведение хронических и полиморбидных пациентов, включая регулярный контроль и проверку медикации.",
      tr: "Kronik ve birden fazla hastalığı bulunan hastaların düzenli kontrol ve ilaç gözden geçirmeleri dahil uzun vadeli takibi.",
      ar: "المتابعة طويلة الأجل لمرضى الحالات المزمنة والأمراض المتعددة، بما في ذلك الفحوصات الدورية ومراجعة الأدوية.",
      uz: "Surunkali va ko'p kasalliklarga chalingan bemorlarni uzoq muddatli kuzatish, jumladan muntazam ko'riklar va dori vositalarini tekshirib borish.",
    },
    {
      icon: Syringe as Icon,
      title: { de: "Prävention & Impfungen", en: "Prevention & Vaccines", ru: "Профилактика и прививки", tr: "Önleyici Bakım ve Aşılar", ar: "الوقاية والتطعيمات", uz: "Profilaktika va emlashlar" } as T,
      de: "Durchführung von Vorsorge, Früherkennung, Impfberatung und Impfungen entsprechend dem tatsächlichen Leistungsangebot.",
      en: "Preventive care, early detection, vaccination advice and vaccinations according to the actual service offering.",
      ru: "Профилактика, раннее выявление, консультации по вакцинации и прививки согласно фактическому спектру услуг.",
      tr: "Check-up, erken tanı, aşı danışmanlığı ve koruyucu aşılamaların fiili hizmet portföyüne uygun olarak yapılması.",
      ar: "تنفيذ برامج الرعاية الوقائية والكشف المبكر واستشارات التطعيم وتقديم اللقاحات وفق باقة الخدمات الفعلية.",
      uz: "Haqiqiy xizmatlar doirasiga muvofiq profilaktik ko'riklar, erta aniqlash, emlash bo'yicha maslahatlar va vaksinalarni amalga oshirish.",
    },
    {
      icon: GitMerge as Icon,
      title: { de: "Interdisziplinäre Koordination", en: "Care Coordination", ru: "Координация специалистов", tr: "Disiplinlerarası Koordinasyon", ar: "التنسيق متعدد التخصصات", uz: "Sohalararo koordinatsiya" } as T,
      de: "Koordination von Diagnostik, Therapie, Überweisungen und Nachsorge zwischen den beteiligten Fachrichtungen.",
      en: "Coordination of diagnostics, therapy, referrals and aftercare between the specialties involved.",
      ru: "Координация диагностики, терапии, направлений и последующего наблюдения между специальностями.",
      tr: "İlgili uzmanlık branşları arasında tanı, tedavi, sevk ve rehabilitasyon/izlem süreçlerinin koordinasyonu.",
      ar: "تنسيق التشخيص والعلاج والإحالات والرعاية اللاحقة بين مختلف التخصصات الطبية المشاركة.",
      uz: "Ishtirok etuvchi mutaxassisliklar o'rtasida diagnostika, terapiya, yo'llanmalar va keyingi parvarishni muvofiqlashtirish.",
    },
    {
      icon: Hospital as Icon,
      title: { de: "Klinik- & Reha-Abstimmung", en: "Hospital & Rehab Links", ru: "Связь со стационаром", tr: "Klinik ve Reha Bağlantısı", ar: "التنسيق مع المستشفيات ومراكز التأهيل", uz: "Shifoxona va reabilitatsiya bilan aloqa" } as T,
      de: "Abstimmung der Versorgung vor und nach Krankenhausaufenthalten sowie Zusammenarbeit mit Rehabilitation, Pflege und weiteren behandelnden Einrichtungen.",
      en: "Coordinating care before and after hospital stays and cooperating with rehabilitation, nursing and other treating facilities.",
      ru: "Согласование помощи до и после госпитализации, взаимодействие с реабилитацией, уходом и другими учреждениями.",
      tr: "Hastaneye yatış öncesi ve sonrası bakımın planlanması ile rehabilitasyon ve bakım kurumlarıyla iş birliği.",
      ar: "تنسيق الرعاية قبل وبعد الإقامة في المستشفى والتعاون الوثيق مع مرافق إعادة التأهيل والتمريض.",
      uz: "Gospitalizatsiyadan oldin va keyingi yordamni rejalashtirish hamda reabilitatsiya va parvarishlash muassasalari bilan yaqin hamkorlik.",
    },
    {
      icon: ClipboardList as Icon,
      title: { de: "Behandlungsprogramme (DMP)", en: "Treatment Programs (DMP)", ru: "Программы лечения (DMP)", tr: "Tedavi Programları (DMP)", ar: "برامج إدارة الأمراض (DMP)", uz: "Davolash dasturlari (DMP)" } as T,
      de: "Teilnahme an strukturierten Behandlungsprogrammen und besonderen Versorgungsverträgen, soweit die jeweiligen Voraussetzungen erfüllt sind.",
      en: "Participation in structured treatment programmes and special care contracts, where the requirements are met.",
      ru: "Участие в структурированных программах лечения (DMP) и особых договорах, если выполнены условия.",
      tr: "İlgili koşullar sağlandığında yapılandırılmış hastalık yönetim programlarına (DMP) ve özel bakım anlaşmalarına katılım.",
      ar: "المشاركة في برامج العلاج المنظمة (DMP) وعقود الرعاية الخاصة متى استوفيت الشروط المقررة.",
      uz: "Tegishli shartlar bajarilganda tuzilgan kasalliklarni boshqarish dasturlarida (DMP) va maxsus shartnomalarda ishtirok etish.",
    },
    {
      icon: CalendarClock as Icon,
      title: { de: "Sprechstunden & Termine", en: "Consultations & Hours", ru: "Организация приёма", tr: "Muayene Saatleri ve Randevu", ar: "ساعات العمل والمواعيد", uz: "Qabul soatlari va navbatlar" } as T,
      de: "Organisation bedarfsgerechter Sprechstunden, einer angemessenen Erreichbarkeit, geordneter Terminabläufe und geeigneter Vertretungsregelungen.",
      en: "Needs-based consultation hours, appropriate availability, orderly appointment processes and suitable substitution arrangements.",
      ru: "Организация приёма по потребности, достаточной доступности, упорядоченной записи и замещения.",
      tr: "İhtiyaca uygun poliklinik saatlerinin, düzenli randevu süreçlerinin ve hekim vekâlet düzenlemelerinin organizasyonu.",
      ar: "تنظيم ساعات استشارة متوافقة مع الاحتياج، وجداول مواعيد منضبطة، وترتيبات مناسبة للإنابة الطبية.",
      uz: "Ehtiyojga mos qabul soatlarini tashkil qilish, yetarli darajada qulaylik, tartibli qabul va shifokor o'rnini bosish tartibini ta'minlash.",
    },
    {
      icon: Siren as Icon,
      title: { de: "Notfallmanagement", en: "Emergency Management", ru: "Неотложная помощь", tr: "Acil Durum Yönetimi", ar: "إدارة الطوارئ الطبية", uz: "Shoshilinch yordamni boshqarish" } as T,
      de: "Einrichtung eines Notfallmanagements entsprechend dem Leistungsangebot und der Ausstattung des MVZ.",
      en: "Emergency management appropriate to the MVZ's services and equipment.",
      ru: "Организация экстренной помощи в соответствии со спектром услуг и оснащением MVZ.",
      tr: "MVZ'nin donanım ve hizmet profiline uygun acil müdahale organizasyonunun kurulması.",
      ar: "إنشاء منظومة لإدارة الحالات الطارئة تتناسب مع نطاق خدمات وتجهيزات مركز MVZ.",
      uz: "MVZ ning xizmatlar ko'lami va jihozlanishiga muvofiq shoshilinch tezkor yordam tizimini tashkil etish.",
    },
    {
      icon: GraduationCap as Icon,
      title: { de: "Weiterbildung & Schulung", en: "Training & Education", ru: "Обучение персонала", tr: "Eğitim ve Mesleki Gelişim", ar: "التدريب والتأهيل الطبي", uz: "Xodimlarni o'qitish va malaka oshirish" } as T,
      de: "Fortbildung des Personals und gegebenenfalls ärztliche Weiterbildung auf Grundlage der erforderlichen Weiterbildungsbefugnisse.",
      en: "Staff training and, where applicable, postgraduate medical training based on the required training authorizations.",
      ru: "Повышение квалификации персонала и, при наличии полномочий, врачебная последипломная подготовка.",
      tr: "Personel eğitimi ve yetkili eğitim izinleri çerçevesinde hekim uzmanlık sonrası eğitimlerinin verilmesi.",
      ar: "التدريب المستمر للكوادر، والتدريب التخصصي للأطباء استناداً إلى صلاحيات التدريب المعتمدة.",
      uz: "Xodimlar malakasini oshirish va ruxsatnomalar doirasida shifokorlarning ordinatura/diplomdan keyingi tayyorgarligi.",
    },
  ],

  dutiesTitle: {
    de: "Rechtliche und betriebliche Pflichten",
    en: "Legal and operational obligations",
    ru: "Правовые и операционные обязанности",
    tr: "Yasal ve Operasyonel Yükümlülükler",
    ar: "الالتزامات القانونية والتشغيلية",
    uz: "Huquqiy va operatsion majburiyatlar",
  } as T,
  dutiesLead: {
    de: "Die Gesellschaft stellt durch geeignete Zuständigkeiten und Kontrollverfahren insbesondere Folgendes sicher:",
    en: "Through appropriate responsibilities and control procedures, the company ensures in particular the following:",
    ru: "Посредством распределения ответственности и процедур контроля общество обеспечивает, в частности, следующее:",
    tr: "Şirket, tanımlanmış sorumluluklar ve denetim süreçleri aracılığıyla özellikle şunları güvence altına alır:",
    ar: "تضمن الشركة، عبر تحديد المسؤوليات وإجراءات الرقابة المحكمة، الالتزام بالنقاط التالية على وجه الخصوص:",
    uz: "Kompaniya mas'uliyatni aniq taqsimlash va nazorat tartib-qoidalari orqali xususan quyidagilarni ta'minlaydi:",
  } as T,
  duties: [
    {
      icon: FileBadge as Icon,
      title: {
        de: "Zulassung und Arztstellen",
        en: "Approval and physician positions",
        ru: "Допуск и врачебные ставки",
        tr: "Ruhsat ve Hekim Kadroları",
        ar: "التراخيص وشواغر الأطباء",
        uz: "Litsenziya va shifokor shtatlari",
      } as T,
      text: {
        de: "Einhaltung des genehmigten Versorgungsauftrags, der Anstellungsgenehmigungen, der zulässigen Tätigkeitsorte und der vorgeschriebenen Anzeige- und Antragspflichten bei Veränderungen.",
        en: "Compliance with the approved care mandate, employment permits, permitted places of activity and mandatory notification and application duties in the event of changes.",
        ru: "Соблюдение утверждённого объёма помощи, разрешений на наём, допустимых мест работы и обязанностей уведомления и подачи заявлений при изменениях.",
        tr: "Onaylı hizmet görevi, hekim istihdam izinleri, izin verilen çalışma mekanları ve değişiklik bildirim yükümlülüklerine tam uyum.",
        ar: "الالتزام بنطاق الرعاية المعتمد، وتصاريح توظيف الأطباء، ومواقع العمل المرخصة، وإخطار الجهات بأي تعديلات.",
        uz: "Tasdiqlangan tibbiy xizmat topshirig'i, shtat ruxsatnomalari, belgilangan faoliyat joylari hamda o'zgarishlar yuz berganda bildirishnoma majburiyatlariga to'liq rioya qilish.",
      } as T,
    },
    {
      icon: UserCog as Icon,
      title: {
        de: "Ärztliche Leitung",
        en: "Medical director",
        ru: "Врачебное руководство",
        tr: "Tıbbi Direktörlük",
        ar: "الإدارة الطبية",
        uz: "Tibbiy rahbarlik",
      } as T,
      text: {
        de: "Bestellung einer ärztlichen Leitung, die die gesetzlichen Voraussetzungen erfüllt und im MVZ selbst ärztlich tätig ist. Medizinische Entscheidungen bleiben frei von fachfremden Weisungen der Geschäftsführung oder der Gesellschafter.",
        en: "Appointment of a medical director who meets the legal requirements and practises in the MVZ. Medical decisions remain free from non-medical instructions by management or shareholders.",
        ru: "Назначение врачебного руководителя, отвечающего требованиям закона и работающего в самом MVZ. Медицинские решения свободны от непрофильных указаний руководства или участников.",
        tr: "Yasal gereklilikleri karşılayan ve MVZ bünyesinde bizzat hekimlik yapan bir tıbbi direktörün atanması. Tıbbi kararlar şirket yönetiminin talimatlarından bağımsızdır.",
        ar: "تعيين مدير طبي يستوفي الاشتراطات القانونية ويمارس الطب داخل المركز. وتظل القرارات الطبية مستقلة تماماً عن أي توجيهات إدارية.",
        uz: "Qonun talablariga javob beradigan va markazning o'zida shifokorlik qiladigan tibbiy rahbarni tayinlash. Tibbiy qarorlar rahbariyat yoki ta'sischilarning noxolis ko'rsatmalaridan mustaqildir.",
      } as T,
    },
    {
      icon: Users as Icon,
      title: {
        de: "Qualifikation und Delegation",
        en: "Qualification and delegation",
        ru: "Квалификация и делегирование",
        tr: "Yetkinlik ve Yetki Devri",
        ar: "المؤهلات وتفويض المهام",
        uz: "Malaka va vakolatlarni topshirish",
      } as T,
      text: {
        de: "Prüfung der erforderlichen beruflichen Qualifikationen und Berechtigungen. Übertragung delegierbarer Tätigkeiten auf geeignetes Personal unter angemessener ärztlicher Anleitung und Überwachung.",
        en: "Verification of required professional qualifications and authorizations. Delegation of delegable tasks to suitable staff under appropriate medical guidance and supervision.",
        ru: "Проверка необходимых квалификаций и полномочий. Передача делегируемых задач подходящему персоналу под надлежащим врачебным руководством и контролем.",
        tr: "Gerekli mesleki yeterliliklerin kontrolü. Devredilebilir görevlerin hekim gözetimi altında yetkili personele aktarılması.",
        ar: "التحقق من المؤهلات والتراخيص المهنية الإلزامية. تفويض المهام القابلة للتحويل إلى كوادر مناسبة تحت إشراف طبي مباشر.",
        uz: "Zarur kasbiy malakalar va vakolatlarni tekshirish. Topshirilishi mumkin bo'lgan vazifalarni tegishli xodimlarga shifokor nazorati ostida topshirish.",
      } as T,
    },
    {
      icon: ScrollText as Icon,
      title: {
        de: "Patientenrechte",
        en: "Patient rights",
        ru: "Права пациентов",
        tr: "Hasta Hakları",
        ar: "حقوق المرضى",
        uz: "Bemorlar huquqlari",
      } as T,
      text: {
        de: "Gewährleistung einer verständlichen Patienteninformation, ordnungsgemäßer Aufklärung und wirksamer Einwilligung, soweit diese erforderlich sind. Beachtung der gesetzlichen Vorgaben zur Kosteninformation und Einsicht in Behandlungsunterlagen.",
        en: "Ensuring understandable patient information, proper explanation and valid consent where required. Compliance with legal requirements on cost information and access to treatment records.",
        ru: "Понятное информирование пациентов, надлежащее разъяснение и действительное согласие, где это требуется. Соблюдение требований к информированию о расходах и доступу к медицинской документации.",
        tr: "Anlaşılır hasta bilgilendirmesi, usulüne uygun aydınlatma ve geçerli onamın alınması. Tedavi kayıtlarına erişim ve masraf bildirim haklarına uyulması.",
        ar: "ضمان تقديم معلومات واضحة للمريض، وتوفير التوعية القانونية والموافقة الصريحة، وتيسير الاطلاع على الملفات الطبية وتفاصيل التكاليف.",
        uz: "Bemorlarni tushunarli xabardor qilish, to'g'ri tushuntirish va qonuniy rozilik olish. Xarajatlar to'g'risida axborot va tibbiy hujjatlar bilan tanishish huquqlariga rioya qilish.",
      } as T,
    },
    {
      icon: Lock as Icon,
      title: {
        de: "Dokumentation und Datenschutz",
        en: "Documentation and data protection",
        ru: "Документация и защита данных",
        tr: "Belgeleme ve Veri Koruma",
        ar: "التوثيق وحماية البيانات",
        uz: "Hujjatlashtirish va ma'lumotlar xavfsizligi",
      } as T,
      text: {
        de: "Ordnungsgemäße Führung, Sicherung und Aufbewahrung der Behandlungsdokumentation. Wahrung der Schweigepflicht und Umsetzung der geltenden Datenschutzanforderungen, insbesondere durch geregelte Zugriffsrechte und sichere Datenübermittlung.",
        en: "Proper keeping, securing and storage of treatment records. Maintaining confidentiality and implementing applicable data protection requirements, in particular through regulated access rights and secure data transmission.",
        ru: "Надлежащее ведение, защита и хранение медицинской документации. Соблюдение врачебной тайны и требований защиты данных, в частности через регламентированные права доступа и защищённую передачу данных.",
        tr: "Tedavi kayıtlarının düzenli tutulması, saklanması ve arşivlenmesi. Tıbbi gizlilik ve GDPR veri koruma gerekliliklerinin tam uygulanması.",
        ar: "حفظ وتأمين السجلات العلاجية بانتظام، والالتزام الصارم بالسرية الطبية وتطبيق معايير حماية البيانات (GDPR) وأمن نقل المعلومات.",
        uz: "Tibbiy yozuvlarni to'g'ri yuritish, saqlash va arxivlash. Shifokorlik sirini saqlash va ma'lumotlarni himoya qilish talablarini (GDPR) to'liq bajarish.",
      } as T,
    },
    {
      icon: ShieldCheck as Icon,
      title: {
        de: "Qualitätsmanagement und Hygiene",
        en: "Quality management and hygiene",
        ru: "Менеджмент качества и гигиена",
        tr: "Kalite Yönetimi ve Hijyen",
        ar: "إدارة الجودة ومكافحة العدوى",
        uz: "Sifat menejmenti va gigiyena",
      } as T,
      text: {
        de: "Einrichtung und Weiterentwicklung eines einrichtungsinternen Qualitätsmanagements. Umsetzung der einschlägigen Hygieneanforderungen sowie eines angemessenen Fehler-, Beschwerde- und Risikomanagements.",
        en: "Establishing and developing internal quality management. Implementing relevant hygiene requirements and appropriate error, complaint and risk management.",
        ru: "Создание и развитие внутреннего менеджмента качества. Выполнение гигиенических требований, а также управление ошибками, жалобами и рисками.",
        tr: "Kurum içi kalite yönetim sisteminin kurulması ve geliştirilmesi. Güncel hijyen kurallarının, hata ve risk yönetiminin eksiksiz uygulanması.",
        ar: "تأسيس وتطوير نظام داخلي لإدارة الجودة، وتطبيق معايير النظافة والتعقيم، وإدارة الأخطاء والشكاوى والمخاطر.",
        uz: "Ichki sifat menejmenti tizimini joriy etish va rivojlantirish. Amaldagi gigiyena talablariga, xatolar, e'tirozlar va xavflarni boshqarishga to'liq rioya qilish.",
      } as T,
    },
    {
      icon: Cpu as Icon,
      title: {
        de: "Medizinprodukte und technische Ausstattung",
        en: "Medical devices and technical equipment",
        ru: "Медизделия и техническое оснащение",
        tr: "Tıbbi Cihazlar ve Teknik Donanım",
        ar: "الأجهزة الطبية والتجهيزات الفنية",
        uz: "Tibbiy buyumlar va texnik jihozlar",
      } as T,
      text: {
        de: "Sicherstellung eines ordnungsgemäßen Betriebs der eingesetzten Medizinprodukte und Geräte einschließlich erforderlicher Einweisungen, Wartungen, Kontrollen und Dokumentationen. Beachtung des Strahlenschutzrechts, soweit entsprechende Anwendungen erfolgen.",
        en: "Ensuring proper operation of medical devices and equipment, including required instruction, maintenance, inspections and documentation. Compliance with radiation protection law where applicable.",
        ru: "Надлежащая эксплуатация медицинских изделий и оборудования, включая инструктажи, обслуживание, проверки и документацию. Соблюдение законодательства о радиационной защите, если применимо.",
        tr: "Tıbbi cihazların düzenli bakım, kontrol, eğitim ve belgelendirme ile güvenli çalıştırılması. Radyasyondan korunma kurallarına tam uyum.",
        ar: "ضمان التشغيل السليم للأجهزة الطبية مع الالتزام بالتدريب الفني والصيانة والتفتيش، ومراعاة قوانين الوقاية من الإشعاع.",
        uz: "Foydalaniladigan tibbiy asbob-uskunalar va qurilmalarning xavfsiz ishlashini ta'minlash, muntazam texnik xizmat, tekshiruv va nurlanishdan himoyalanish qoidalariga rioya qilish.",
      } as T,
    },
    {
      icon: Receipt as Icon,
      title: {
        de: "Abrechnung und Wirtschaftlichkeit",
        en: "Billing and efficiency",
        ru: "Расчёты и экономичность",
        tr: "Faturalandırma ve Verimlilik",
        ar: "الفوترة والكفاءة الاقتصادية",
        uz: "Hisob-kitoblar va iqtisodiy samaradorlik",
      } as T,
      text: {
        de: "Sicherstellung einer vollständigen, zutreffenden und nachvollziehbaren Abrechnung. Beachtung der jeweils anwendbaren Vergütungsregelungen, des Wirtschaftlichkeitsgebots und der Voraussetzungen für genehmigungspflichtige Leistungen.",
        en: "Ensuring complete, accurate and traceable billing. Compliance with the applicable remuneration rules, the efficiency requirement and the prerequisites for services requiring approval.",
        ru: "Полные, корректные и прозрачные расчёты. Соблюдение применимых правил вознаграждения, принципа экономичности и условий для услуг, требующих разрешения.",
        tr: "Eksiksiz, doğru ve şeffaf faturalandırma. Geçerli tarife kurallarına, ekonomiklik ilkesine ve izne tabi hizmet şartlarına riayet.",
        ar: "ضمان فوترة مكتملة ودقيقة وقابلة للتدقيق، مع الامتثال للوائح الأتعاب المعتمدة ومبدأ الكفاءة الاقتصادية للخدمات المرخصة.",
        uz: "Hisob-kitoblarning to'liq, aniq va shaffof bo'lishini ta'minlash. Amaldagi tarif qoidalariga, iqtisodiy tejamkorlik tamoyiliga va ruxsat berilgan xizmatlar shartlariga rioya qilish.",
      } as T,
    },
  ],
};

const specialtyIconsList: React.ComponentType<{ className?: string }>[] = [
  Stethoscope,
  HeartPulse,
  Activity,
  Heart,
  Pill,
  Dna,
  Wind,
  Brain,
];

const cardEyebrows: T[] = [
  { de: "ÄRZTLICHE VERSORGUNG", en: "OUTPATIENT CARE", ru: "ВРАЧЕБНАЯ ПОМОЩЬ", tr: "HEKİMLİK HİZMETLERİ", ar: "الرعاية الطبية العيادية", uz: "SHIFOKORLIK YORDAMI" },
  { de: "STANDORTE & NETZWERK", en: "FACILITIES & NETWORK", ru: "ИНФРАСТРУКТУРА И СЕТЬ", tr: "TESİSLER VE AĞ", ar: "المرافق والشبكة التعاونية", uz: "INFRATUZILMA VA TARMOQ" },
  { de: "RECHTLICHER RAHMEN", en: "LEGAL FRAMEWORK", ru: "ПРАВОВАЯ БАЗА И ДОПУСКИ", tr: "YASAL ÇERÇEVE", ar: "الأطر القانونية والتراخيص", uz: "HUQUQIY ASOSLAR VA RUXSATNOMALAR" },
];

const facilitiesPointIcons = [Hospital, GitMerge, Users];

const cardPoints: Record<Lang, string[]>[] = [
  // Card 1: Ambulante Leistungen
  {
    de: [
      "Hausärztliche & fachärztliche Versorgung",
      "Prävention, Diagnostik & Früherkennung",
      "Individuelle Therapiepläne & Nachsorge",
    ],
    en: [
      "General practice & specialist care",
      "Prevention, diagnostics & early detection",
      "Individual therapy plans & aftercare",
    ],
    ru: [
      "Семейная и специализированная помощь",
      "Профилактика, диагностика и раннее выявление",
      "Индивидуальные планы лечения и наблюдение",
    ],
    tr: [
      "Aile hekimliği ve uzman poliklinik hizmetleri",
      "Önleyici tıp, teşhis ve erken tanı",
      "Kişiye özel tedavi planları ve takip",
    ],
    ar: [
      "طب الأسرة والرعاية التخصصية",
      "الوقاية والتشخيص والكشف المبكر",
      "خطط علاجية مخصصة ومتابعة مستمرة",
    ],
    uz: [
      "Oilaviy va ixtisoslashgan yordam",
      "Profilaktika, diagnostika va erta aniqlash",
      "Individual davolash rejalari va kuzatuv",
    ],
  },
  // Card 2: Einrichtungen & Kooperationen
  {
    de: [
      "Moderne Praxisräume & Ausstattung",
      "Zweigpraxen & ausgelagerte Praxisräume",
      "Kooperationen mit Kliniken & Partnern",
    ],
    en: [
      "Modern practice facilities & equipment",
      "Branch practices & outsourced suites",
      "Cooperation with hospitals & partners",
    ],
    ru: [
      "Современные кабинеты и оснащение",
      "Филиалы и вынесенные помещения",
      "Сотрудничество с клиниками и партнерами",
    ],
    tr: [
      "Modern muayenehane odaları ve donanım",
      "Şube klinikleri ve dış uygulama alanları",
      "Hastaneler ve partnerlerle iş birliği",
    ],
    ar: [
      "مرافق وتجهيزات عيادية متطورة",
      "فروع عيادية ومساحات خدمة خارجية",
      "تعاون وثيق مع المستشفيات والشركاء",
    ],
    uz: [
      "Zamonaviy xonalar va jihozlar",
      "Filiallar va tashqi amaliyot xonalari",
      "Klinikalar va hamkorlar bilan aloqalar",
    ],
  },
  // Card 3: Zulassungen & Genehmigungen
  {
    de: [
      "Vertragsärztliche Versorgung (§ 95 SGB V)",
      "Ärztliche Unabhängigkeit & Weisungsfreiheit",
      "Genehmigte Qualitäts- & Abrechnungsstandards",
    ],
    en: [
      "Contract-physician care (§ 95 SGB V)",
      "Full medical independence & discretion",
      "Approved quality & billing standards",
    ],
    ru: [
      "Помощь по обязательному страхованию (§ 95 SGB V)",
      "Полная врачебная независимость решений",
      "Лицензированные стандарты качества",
    ],
    tr: [
      "Anlaşmalı sağlık hizmetleri (§ 95 SGB V)",
      "Tam tıbbi bağımsızlık ve tarafsızlık",
      "Onaylı kalite ve faturalandırma standartları",
    ],
    ar: [
      "رعاية تعاقدية معتمدة (§ 95 SGB V)",
      "استقلالية طبية كاملة في القرار العلاجي",
      "معايير جودة وفوترة معتمدة رسمياً",
    ],
    uz: [
      "Sug'urta bo'yicha yordam (§ 95 SGB V)",
      "To'liq shifokorlik mustaqilligi",
      "Tasdiqlangan sifat va hisob-kitob standartlari",
    ],
  },
];

export function MvzPrimaryCareSection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "uz" ? "uz" : locale === "tr" ? "tr" : locale === "ar" ? "ar" : locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  return (
    <>
      <section
        id="mvz-hausaerztlich-fachaerztlich"
        className="relative pt-0 pb-14 sm:pb-18 lg:pb-20 bg-[#FAF7F2] border-t border-[#EDE8DE]/60 overflow-hidden"
      >
      <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#D5B878]/10 blur-3xl pointer-events-none" />

      {/* ── Hero Banner: Full-width banner with soft right-photo fade & full-width specialty cards along bottom ── */}
      <div className="relative z-10 w-full overflow-hidden pb-4 sm:pb-6">
        {/* Soft Background Photo with smooth horizontal fade / blur effect (replacing vector arc) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[60%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/areas/stethoscope-clinic.webp"
            alt="MVZ hausärztliche und fachärztliche Versorgung"
            fill
            className="object-cover object-center lg:object-right"
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {/* Subtle horizontal gradient fade - softer and crisper photo visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] from-0% via-[#FAF7F2]/75 via-18% via-[#FAF7F2]/20 via-38% to-transparent to-75%" />
          {/* Subtle vertical gradient fade for mobile & bottom blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 via-15% to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] from-0% via-[#FAF7F2]/20 via-10% to-transparent hidden lg:block" />
        </div>

        {/* Botanical foliage watermark on far left (matching reference image) */}
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
            <div className="max-w-xl lg:max-w-2xl mb-5 sm:mb-6 lg:mb-7">
              {/* Eyebrow with gold line: MVZ 1 · § 95 SGB V */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase font-sans">
                  {c.tag[l]}
                </span>
              </div>

              {/* Title with styled italic phrase */}
              <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] text-[#142318] font-normal leading-[1.18] mb-3">
                {(() => {
                  const phrase = "hausärztliche und fachärztliche";
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

            {/* Bottom: 8 Specialty Cards spanning along the entire width */}
            {/* No "SPECIALTIES" or "Range of care" labels as requested */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
                {c.specialties[l].map((s, idx) => {
                  const SpecIcon = specialtyIconsList[idx % specialtyIconsList.length] || Stethoscope;
                  return (
                    <div
                      key={s}
                      className="group relative rounded-xl bg-white/85 hover:bg-white border border-[#EAE4D7] hover:border-[#D5B878]/70 py-2 px-3 sm:py-2.5 sm:px-3.5 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-sm transition-all duration-300 backdrop-blur-xs"
                    >
                      <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                        <SpecIcon className="w-3.5 h-3.5 text-[#9E7D3B]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-[12.5px] sm:text-[13px] text-[#142318] font-medium leading-tight">
                          {s}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Warning / Note banner */}
              <div className="flex items-start sm:items-center gap-2.5 mt-2.5 sm:mt-3 px-3.5 py-2 rounded-xl border border-[#E8DFC8]/75 bg-white/75 backdrop-blur-xs text-[#556057]">
                <Info className="w-3.5 h-3.5 text-[#9E7D3B] shrink-0" />
                <p className="text-[11px] sm:text-[11.5px] leading-relaxed">
                  {c.specialtiesNote[l]}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container size="wide" className="relative z-10 mt-10 sm:mt-12">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14">

          {/* Gegenstand – Row 1: Left & Right 50/50 (Design 1:1 with Photo 1, Default Container Width, No Button) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch pt-2 sm:pt-4">
            {[0, 2].map((cardIdx) => {
              const p = c.paragraphs[cardIdx];
              const Icon = p.icon;
              const bgImage =
                cardIdx === 0
                  ? "/images/areas/card-stethoscope.webp"
                  : "/images/areas/card-plant.webp";

              return (
                <article
                  key={cardIdx}
                  className="col-span-1 group relative rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 lg:p-8 overflow-hidden flex flex-col justify-start transition-all duration-300 bg-white border border-[#EAE4D7] text-[#142318] shadow-xs hover:shadow-xl hover:border-[#D5B878]/70"
                >
                  {/* Right Faded Image Layer with smooth transition like Clinical operations */}
                  <div className="absolute right-0 top-0 bottom-0 pointer-events-none overflow-hidden select-none w-[40%] sm:w-[42%] lg:w-[44%]">
                    <div className="relative w-full h-full translate-x-1 sm:translate-x-3">
                      <Image
                        src={bgImage}
                        alt=""
                        fill
                        className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                    </div>
                    {/* Seamless full-height gradient transition (like Clinical operations) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent pointer-events-none" />
                    {/* Left soft bloom fade */}
                    <div className="absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
                  </div>

                  <div className="relative z-10 max-w-[90%] sm:max-w-[84%] lg:max-w-[80%] pb-2">
                    {/* Eyebrow badge with icon */}
                    <div className="flex items-center gap-2 mb-3.5 sm:mb-4">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[#EFE8D8] text-[#9E7D3B] border border-[#D5B878]/30">
                        <Icon className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[22px] sm:text-[24px] lg:text-[25px] font-medium leading-[1.25] mb-3 sm:mb-3.5 text-[#142318]">
                      {p.title[l]}
                    </h3>

                    {/* Paragraph Text */}
                    <p className="text-[12.5px] sm:text-[13px] leading-relaxed mb-5 text-[#4E5650]">
                      {p.text[l]}
                    </p>

                    {/* Bullet Points with Gold Checkmarks */}
                    <ul className="space-y-2.5 pt-1">
                      {cardPoints[cardIdx][l].map((point, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2.5">
                          <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full flex items-center justify-center shrink-0 bg-[#EFE5CD] text-[#8C6D2D] border border-[#D5B878]/40">
                            <Check className="w-2.5 h-2.5 stroke-[2.8]" />
                          </span>
                          <span className="text-[12px] sm:text-[12.5px] font-medium leading-snug text-[#1B3624]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>

      {/* ── Card 1: Facilities & Cooperations – 100% FULL WIDTH EDGE-TO-EDGE (Photo 2 Style, No Frames) ── */}
      <div className="w-full relative overflow-hidden my-8 sm:my-10 lg:my-12">
        {/* Full-bleed background image across 100% of the screen */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="/images/areas/facilities-cooperation-bg.webp"
            alt="Facilities & Cooperations"
            fill
            className="object-cover object-bottom sm:object-center"
            priority
            unoptimized
          />
        </div>

        {/* Inner Content Area: aligns with page container, completely open without borders or frames */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 lg:py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-14 w-full">
            {/* Left Column: Original Eyebrow, Title, Description, Pill Button */}
            <div className="w-full lg:w-[52%] xl:w-[48%]">
              <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
              </div>

              <h3 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] font-normal text-[#142318] leading-[1.18] mb-3.5 sm:mb-4">
                {c.paragraphs[1].title[l]}
              </h3>

              <p className="text-[13px] sm:text-[13.5px] text-[#4E5650] leading-relaxed max-w-xl mb-6">
                {c.paragraphs[1].text[l]}
              </p>

              <div>
                <Link
                  href={`/${l}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#8C9886] bg-white/70 hover:bg-[#142318] hover:text-white hover:border-[#142318] text-[#2C3B2E] text-[12.5px] font-medium tracking-wide transition-all shadow-xs"
                >
                  <span>{l === "uz" ? "Batafsil" : l === "tr" ? "Daha fazla bilgi" : l === "ar" ? "المزيد من التفاصيل" : l === "ru" ? "Подробнее" : l === "en" ? "Learn more" : "Mehr erfahren"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 Original Points with gold emblem icons */}
            <div className="w-full lg:w-[48%] xl:w-[52%] flex justify-center lg:justify-end">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 w-full max-w-xl lg:max-w-none pt-2 lg:pt-0 self-center lg:self-start mt-2 lg:mt-3">
                {cardPoints[1][l].map((point, pIdx) => {
                  const PointIcon = facilitiesPointIcons[pIdx] || Hospital;
                  return (
                    <div key={pIdx} className="flex flex-col items-center text-center p-2">
                      <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full border border-[#D5B878]/60 bg-white/75 backdrop-blur-xs flex items-center justify-center text-[#9E7D3B] mb-2.5 shadow-2xs hover:bg-[#FAF3E8] transition-colors">
                        <PointIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.6]" />
                      </div>
                      <span className="text-[12px] sm:text-[12.5px] font-medium text-[#3E4940] leading-snug">
                        {point}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container size="wide">
        <div className="space-y-12 sm:space-y-16">

          {/* Medizinische und organisatorische Aufgaben (Photo Style: 4 Columns Grid) */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-[22px] sm:text-[26px] lg:text-[28px] font-normal text-[#142318] leading-[1.2]">
                {c.tasksTitle[l]}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
              {c.tasks.map((t, i) => {
                const Icon = t.icon;
                return (
                  <article
                    key={i}
                    className="group relative rounded-[18px] sm:rounded-[20px] p-3.5 sm:p-4 bg-white border border-[#EAE4D7] hover:border-[#D5B878] hover:shadow-[0_4px_16px_-4px_rgba(20,35,24,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {/* Top Row: Circular Icon + Title */}
                    <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
                      <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#FAF7F2] border border-[#E8DFC8] flex items-center justify-center text-[#B89650] shrink-0 group-hover:bg-[#0B2317] group-hover:text-[#ECCF96] group-hover:border-[#0B2317] transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-medium text-[13.5px] sm:text-[14px] text-[#142318] group-hover:text-[#8C6D2D] transition-colors leading-snug">
                        {t.title[l]}
                      </h4>
                    </div>

                    {/* Description Text */}
                    <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-snug sm:leading-relaxed">
                      {t[l]}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>

    {/* Rechtliche und betriebliche Pflichten – FULL WIDTH SCREEN SECTION (leaves_bag.png background) */}
    <section className="relative w-full bg-[#011B0B] text-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-[#D5B878]/25">
      {/* Full-width foliage & background layer spanning 100% of the screen width */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/areas/leaves_bag.png"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-top opacity-95"
        />
      </div>

      {/* Full-width container with generous max-width */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-7 sm:mb-9">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="h-px w-8 bg-[#C5A56A]" />
          </div>
          <h3 className="font-serif text-[26px] sm:text-[32px] lg:text-[38px] text-white font-normal leading-[1.15] mb-2.5">
            {l === "de" ? (
              <>
                Rechtliche und betriebliche <span className="italic text-[#ECCF96]">Pflichten</span>
              </>
            ) : l === "tr" ? (
              <>
                Yasal ve Operasyonel <span className="italic text-[#ECCF96]">Yükümlülükler</span>
              </>
            ) : l === "ar" ? (
              <>
                الالتزامات القانونية <span className="italic text-[#ECCF96]">والتشغيلية</span>
              </>
            ) : (
              c.dutiesTitle[l]
            )}
          </h3>
          <p className="text-[12.5px] sm:text-[13.5px] text-[#A6BCB0] leading-relaxed">
            {c.dutiesLead[l]}
          </p>
        </div>

        {/* 8 Cards Grid (2 Columns, 4 Rows) – Lighter Card Background & High Text Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4.5">
          {c.duties.map((d, i) => {
            const Icon = d.icon;
            const numStr = String(i + 1).padStart(2, "0");

            return (
              <article
                key={i}
                className="group relative rounded-[18px] sm:rounded-[20px] p-4.5 sm:p-5 bg-gradient-to-br from-[#123824]/92 via-[#0e301e]/92 to-[#092617]/92 backdrop-blur-md border border-[#D5B878]/40 hover:border-[#ECCF96]/80 hover:from-[#17462d]/95 hover:to-[#0f3420]/95 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.35)] flex flex-col justify-center overflow-hidden"
              >
                {/* Subtle botanical leaf watermark on the right edge */}
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-28 pointer-events-none overflow-hidden select-none opacity-20 group-hover:opacity-30 transition-opacity">
                  <Image
                    src="/images/areas/botanical-branch-clean.webp"
                    alt=""
                    fill
                    className="object-contain object-right"
                  />
                </div>

                <div className="relative z-10">
                  {/* Top Row: Number 01 + Circular Icon + Title */}
                  <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
                    <span className="font-serif text-[22px] sm:text-[25px] text-[#F4DFC0] font-normal leading-none shrink-0 w-7 sm:w-8">
                      {numStr}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5B878]/50 bg-[#164329] text-[#F4DFC0] flex items-center justify-center shrink-0 group-hover:border-[#ECCF96] group-hover:bg-[#1b4e31] group-hover:scale-105 transition-all shadow-xs">
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <h4 className="font-serif font-medium text-[15px] sm:text-[16px] text-white leading-snug">
                      {d.title[l]}
                    </h4>
                  </div>

                  {/* Description Text with high contrast readable color */}
                  <p className="text-[12px] sm:text-[12.5px] text-[#E4EFE8] leading-relaxed pl-0.5 font-normal">
                    {d.text[l]}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  </>
  );
}
