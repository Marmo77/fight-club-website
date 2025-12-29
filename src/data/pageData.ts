import type { PageDataProps, ScheduleData } from "@/types/types";

export const PageData: PageDataProps = {
  site: {
    name: "Taurus Szczecin",
    description:
      "Twój klub sportów walki w Szczecinie. Stawiamy na technikę, charakter i wzajemny szacunek. Dołącz do naszej ekipy.",
    city: "Szczecin",
    address: "ul. Portowa 7, 70-000 Szczecin",
    phone: "+48 600 987 654",
    email: "kontakt@fightcorner.pl",
    socials: [
      {
        label: "Facebook",
        href: "https://facebook.com/szczecinfightcorner",
      },
      {
        label: "Instagram",
        href: "https://instagram.com/szczecinfightcorner",
      },
    ],
    // availableSocials: [
    //   {
    //     label: "Facebook",
    //     href: "https://facebook.com/szczecinfightcorner",
    //   },
    //   {
    //     label: "Instagram",
    //     href: "https://instagram.com/szczecinfightcorner",
    //   },
    // ],
    openingHours: {
      weekdays: "Pon-Pt: 16:30-20:30",
      weekends: "Sob-Ndz: Nieczynne",
    },
  },
  navigation: {
    name: "TAURUS SZCZECIN",
    items: [
      { label: "O klubie", href: "#about" },
      { label: "Trenerzy", href: "#trainers" },
      { label: "Grafik", href: "#schedule" },
      { label: "Cennik", href: "#pricing" },
      { label: "Kontakt", href: "#contact" },
    ],
  },

  hero: {
    title: "BOKS I KICKBOXING W SZCZECINIE.",
    subtitle:
      "Trenuj w kameralnym klubie sportów walki w centrum Szczecina – pod okiem trenerów Lyoshy i Iskandera. Pierwszy trening grupowy zawsze ZA DARMO.",
    primaryCTA: {
      label: "ZACZNIJ TRENOWAĆ",
      targetId: "about",
    },
    secondaryCTA: {
      label: "ZOBACZ GRAFIK",
      targetId: "schedule",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=1920",
    //   "https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      "Boks",
      "Kickboxing",
      "Trening",
      "Goleniów",
      "MMA",
      "HIIT",
      "Boxing",
      "Fitness",
      "Sporty",
      "Szczecin",
      "Siłownia",
      "Boks dzieci",
      "Kickboxing dzieci",
      "Sporty Walki",
    ],
    heroInfoBar: {
      days: "PON-PT: 16:30-20:30",
      weekends: "SOB-NDZ: Nieczynne",
      firstTraining: "Pierwszy trening za darmo",
    },
  },
  trainers: [
    // {
    //   id: 1,
    //   name: "Lyosha",
    //   role: "Trener kickboxingu / K-1",
    //   bioShort:
    //     "Doświadczony zawodnik i trener kickboxingu K-1. Specjalista od dynamiki i precyzyjnych kopnięć.",
    //   highlights: [
    //     "Ponad 5 lat doświadczenia trenerskiego",
    //     "Wielokrotne starty w turniejach K-1",
    //     "Nacisk na technikę i bezpieczeństwo",
    //   ],
    //   image:
    //     "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    //   contact: { phone: "+48 600 111 222", email: "lyosha@fightcorner.pl" },
    // },
    // {
    //   id: 2,
    //   name: "Iskander",
    //   role: "Trener boksu",
    //   bioShort:
    //     "Specjalista od szermierki na pięści. Jego treningi to połączenie klasycznej szkoły boksu z nowoczesną metodyką.",
    //   highlights: [
    //     "Ponad 10 lat na sali bokserskiej",
    //     "Przygotowanie pod starty amatorskie",
    //     "Cierpliwość do początkujących",
    //   ],
    //   image:
    //     "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    //   contact: { phone: "+48 600 333 444", email: "iskander@fightcorner.pl" },
    // },
    // {
    //   id: 1,
    //   name: "Maciek Kowalski",
    //   role: "Główny Trener MMA",
    //   image:
    //     "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60",
    //   bioShort:
    //     "Specjalista od stójki z 10-letnim doświadczeniem w zawodowym MMA. Wychował mistrzów krajowych organizacji.",
    //   highlights: ["Czarny pas BJJ", "Trener roku 2023", "Ex-zawodnik KSW"],
    // },
    {
      id: 1,
      name: "Radosław Majewski",
      role: "Trener Boksu i Kickboxingu",
      image:
        "https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bioShort:
        "Założyciel klubu. Wychował mistrzów polski, europy, trenował najlepszych i dalej kładzie nacisk na rozwój klubu i jego podopiecznych.",
      highlights: [
        "Założyciel klubu",
        "Pracuje z najlepszymi",
        "30 lat doświadczenia",
      ],
      contact: { phone: "+48 600 111 222", email: "radek@fightcorner.pl" },
    },
    {
      id: 2,
      name: "Martyna Nowicka",
      role: "Trenerka Boksu",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=1920",
      bioShort:
        "3 krotna mistrzyni Europy. Młoda zawodniczka która dalej walczy o mistrzostwo świata",
      highlights: [
        "3 krotna mistrzyni Europy",
        "Certyfikowana dietetyczka",
        "15 lat doświadczenia",
      ],
      contact: { phone: "+48 600 111 222", email: "martyna@fightcorner.pl" },
    },
  ],
};

export const scheduleData: ScheduleData = [
  {
    title: "Poniedziałek",
    groups: [
      {
        title: "Boks Kids",
        time: "16:30 - 17:30",
      },
      {
        title: "Grupa młodzieżowa",
        time: "17:30 - 18:30",
      },

      {
        title: "Grupa Otwarta (+18)",
        time: "19:00 - 20:30",
      },
    ],
  },
  {
    title: "Wtorek",
    groups: [
      {
        title: "Sparingi",
        time: "17:00 - 18:30",
      },
      {
        title: "Kickboxing",
        time: "19:00 - 20:30",
      },
      {
        title: "Boks Kobiet",
        time: "20:30 - 21:30",
      },
    ],
  },
  {
    title: "Środa",
    groups: [
      {
        title: "Boks Kids",
        time: "16:30 - 17:30",
      },
      {
        title: "Grupa młodzieżowa",
        time: "17:30 - 18:30",
      },
      {
        title: "Grupa Otwarta (+18)",
        time: "19:00 - 20:30",
      },
    ],
  },
  {
    title: "Czwartek",
    groups: [
      {
        title: "Grupa Młodzieżowa",
        time: "17:30 - 18:30",
      },
      {
        title: "Kickboxing",
        time: "19:00 - 20:30",
      },
      {
        title: "Boks Kobiet",
        time: "20:30 - 21:30",
      },
    ],
  },
  {
    title: "Piątek",
    groups: [
      {
        title: "Trening funkcjonalny",
        time: "17:30 - 18:30",
      },
    ],
  },
];
