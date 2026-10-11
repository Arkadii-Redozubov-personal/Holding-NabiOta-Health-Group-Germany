"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SupportedLocale } from "@/lib/i18n";

interface AboutPeopleCarouselProps {
  locale: SupportedLocale;
}

const people = [
  {
    image: "/images/about/wife-rahimov.png",
    alt: {
      de: "Teilnehmerin der NabiOta-Gruppe",
      en: "NabiOta group participant",
      ru: "Участница группы NabiOta",
      tr: "NabiOta grubu katılımcısı",
      ar: "مشاركة في مجموعة NabiOta",
      uz: "NabiOta guruhi ishtirokchisi",
    },
    name: {
      de: "Teilnehmerin der Gruppe",
      en: "Group participant",
      ru: "Участница группы",
      tr: "Grup katılımcısı",
      ar: "مشاركة في المجموعة",
      uz: "Guruh ishtirokchisi",
    },
    role: {
      de: "NabiOta Health Group",
      en: "NabiOta Health Group",
      ru: "NabiOta Health Group",
      tr: "NabiOta Health Group",
      ar: "NabiOta Health Group",
      uz: "NabiOta Health Group",
    },
  },
  {
    image: "/images/about/son-rahimov.png",
    alt: {
      de: "Teilnehmer der NabiOta-Gruppe",
      en: "NabiOta group participant",
      ru: "Участник группы NabiOta",
      tr: "NabiOta grubu katılımcısı",
      ar: "مشارك في مجموعة NabiOta",
      uz: "NabiOta guruhi ishtirokchisi",
    },
    name: {
      de: "Teilnehmer der Gruppe",
      en: "Group participant",
      ru: "Участник группы",
      tr: "Grup katılımcısı",
      ar: "مشارك في المجموعة",
      uz: "Guruh ishtirokchisi",
    },
    role: {
      de: "NabiOta Health Group",
      en: "NabiOta Health Group",
      ru: "NabiOta Health Group",
      tr: "NabiOta Health Group",
      ar: "NabiOta Health Group",
      uz: "NabiOta Health Group",
    },
  },
  {
    image: "/images/about/dc-milana.png",
    alt: {
      de: "Milana, Mitglied des NabiOta-Teams",
      en: "Milana, member of the NabiOta team",
      ru: "Милана, участница команды NabiOta",
      tr: "NabiOta ekibinden Milana",
      ar: "ميلانا، عضوة في فريق NabiOta",
      uz: "NabiOta jamoasi a'zosi Milana",
    },
    name: "Milana",
    role: {
      de: "NabiOta-Team",
      en: "NabiOta team",
      ru: "Команда NabiOta",
      tr: "NabiOta ekibi",
      ar: "فريق NabiOta",
      uz: "NabiOta jamoasi",
    },
  },
] as const;
const loopPeople = [people[people.length - 1], ...people, people[0]];

const copy = {
  de: {
    title: "Die Menschen hinter NabiOta",
    description: "Ärztliche Führung, Beteiligte und Teammitglieder, die die Entwicklung der Gruppe mitgestalten.",
    previous: "Vorherige Personen anzeigen",
    next: "Weitere Personen anzeigen",
  },
  en: {
    title: "The people behind NabiOta",
    description: "Medical leadership, participants and team members shaping the group's development.",
    previous: "Show previous people",
    next: "Show more people",
  },
  ru: {
    title: "Люди, стоящие за NabiOta",
    description: "Врачебное руководство, участники и команда, которые развивают группу.",
    previous: "Предыдущие карточки",
    next: "Следующие карточки",
  },
  tr: {
    title: "NabiOta'nın arkasındaki insanlar",
    description: "Grubun gelişimine yön veren hekimler, katılımcılar ve ekip üyeleri.",
    previous: "Önceki kişileri göster",
    next: "Diğer kişileri göster",
  },
  ar: {
    title: "الأشخاص وراء NabiOta",
    description: "القيادة الطبية والمشاركون وأعضاء الفريق الذين يسهمون في تطوير المجموعة.",
    previous: "عرض الأشخاص السابقين",
    next: "عرض المزيد من الأشخاص",
  },
  uz: {
    title: "NabiOta ortidagi insonlar",
    description: "Guruhni rivojlantirayotgan tibbiy rahbarlar, ishtirokchilar va jamoa a'zolari.",
    previous: "Oldingi kartalarni ko'rsatish",
    next: "Keyingi kartalarni ko'rsatish",
  },
} satisfies Record<SupportedLocale, { title: string; description: string; previous: string; next: string }>;

export function AboutPeopleCarousel({ locale }: AboutPeopleCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const labels = copy[locale];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(min-width: 640px)").matches) return;

    const initialCard = track.children[1] as HTMLElement | undefined;
    if (!initialCard) return;

    centerCard(track, initialCard);

    return () => {
      if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
    };
  }, []);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.78, behavior: "smooth" });
  };

  const settleInfiniteLoop = () => {
    const track = trackRef.current;
    if (!track) return;
    if (settleTimerRef.current) clearTimeout(settleTimerRef.current);

    settleTimerRef.current = setTimeout(() => {
      const cards = Array.from(track.children) as HTMLElement[];
      const center = track.getBoundingClientRect().left + track.clientWidth / 2;
      const closestIndex = cards.reduce((closest, card, index) => {
        const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
        const closestCenter = cards[closest].getBoundingClientRect().left + cards[closest].offsetWidth / 2;
        return Math.abs(cardCenter - center) < Math.abs(closestCenter - center) ? index : closest;
      }, 0);

      const targetIndex = closestIndex === 0
        ? people.length
        : closestIndex === loopPeople.length - 1
        ? 1
        : null;
      if (targetIndex === null) return;

      centerCard(track, cards[targetIndex]);
    }, 140);
  };

  return (
    <section className="mt-10 sm:mt-12" aria-label={labels.title}>
      <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-[25px] sm:text-[30px] lg:text-[34px] text-[#142318] leading-tight">
            {labels.title}
          </h2>
          <p className="mt-2 text-[12.5px] sm:text-[13.5px] text-[#59645B] leading-relaxed">
            {labels.description}
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        dir="ltr"
        role="region"
        aria-label={labels.title}
        tabIndex={0}
        onScroll={settleInfiniteLoop}
        className="flex gap-4 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory px-[5%] pb-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E7D3B] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:snap-none sm:px-0 sm:pb-0 lg:grid-cols-3"
      >
        {loopPeople.map((person, index) => {
          const isClone = index === 0 || index === loopPeople.length - 1;
          return (
          <article
            key={`${person.image}-${index}`}
            aria-hidden={isClone || undefined}
            className={`group min-w-0 shrink-0 basis-[88%] snap-center overflow-hidden rounded-[22px] border border-[#E9E1D2] bg-white shadow-[0_8px_28px_-22px_rgba(20,35,24,0.32)] sm:basis-auto ${isClone ? "sm:hidden" : ""}`}
          >
            <div className="relative aspect-[4/4.5] overflow-hidden bg-[#E9E5DD]">
              <Image
                src={person.image}
                alt={person.alt[locale]}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 47vw, 32vw"
                className="object-cover object-[50%_18%] transition-transform duration-500 group-hover:scale-[1.025]"
                priority={index === 1}
              />
            </div>
            <div className="p-4 sm:p-5">
              <p className="text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.15em] text-[#9E7D3B]">
                {typeof person.role === "string" ? person.role : person.role[locale]}
              </p>
              <h3 className="mt-1.5 font-serif text-[19px] sm:text-[21px] text-[#142318] leading-snug">
                {typeof person.name === "string" ? person.name : person.name[locale]}
              </h3>
            </div>
          </article>
          );
        })}
      </div>

      <div className="mt-1 flex sm:hidden items-center justify-center gap-3" dir="ltr">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label={labels.previous}
          className="w-10 h-10 rounded-full border border-[#D8C79F] bg-white text-[#6F5A32] flex items-center justify-center active:bg-[#F5F0E6] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label={labels.next}
          className="w-10 h-10 rounded-full border border-[#D8C79F] bg-white text-[#6F5A32] flex items-center justify-center active:bg-[#F5F0E6] transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

function centerCard(track: HTMLDivElement, card: HTMLElement) {
  const trackRect = track.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const left = track.scrollLeft + cardRect.left - trackRect.left - (track.clientWidth - card.offsetWidth) / 2;
  track.scrollTo({ left, behavior: "instant" });
}
