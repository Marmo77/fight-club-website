import type { PageDataProps } from "@/types/types";

export const PageData: PageDataProps = {
  site: {
    name: "TAURUS SZCZECIN",
    city: "SZCZECIN",
    address: "ul. Portowa 7, 70-000 Szczecin",
    phone: "+48 600 987 654",
    email: "kontakt@fightcorner.pl",
    socials: {
      facebook: "https://facebook.com/szczecinfightcorner",
      instagram: "https://instagram.com/szczecinfightcorner",
    },
    openingHours: {
      weekdays: "PON-PT: 16:30-20:30",
      weekends: "SOB-NDZ: Nieczynne",
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
      "Trenuj w kameralnym klubie sportów walki w centrum Szczecina – pod okiem trenerów Lyoshy i Iskandera. Pierwszy trening zawsze ZA DARMO.",
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
};
