export interface HeroDataProps {
  title: string;
  subtitle: string;
  primaryCTA: { label: string; targetId: string };
  secondaryCTA: { label: string; targetId: string };
  backgroundImage: string;
  tags: string[];
  heroInfoBar: HeroInfoBarProps;
}
export interface SiteDataProps {
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  socials: {
    facebook: string;
    instagram: string;
  };
  // availableSocials: {
  //   label: string;
  //   href: string;
  // }[];
  openingHours: {
    weekdays: string;
    weekends: string;
  };
}
export interface NavigationDataProps {
  name: string;
  items: {
    label: string;
    href: string;
  }[];
}

export interface HeroInfoBarProps {
  days: string;
  weekends: string;
  firstTraining: string;
}
export interface TrainerProps {
  id: number;
  name: string;
  role: string;
  image: string;
  bioShort: string;
  highlights?: string[];
  contact?: {
    phone: string;
    email: string;
  };
}

export interface PageDataProps {
  site: SiteDataProps;
  hero: HeroDataProps;
  navigation: NavigationDataProps;
  trainers: TrainerProps[];
}

// SCHEDULES
export interface GroupSchedule {
  title: string;
  time: string;
}

export interface DaySchedule {
  title: string;
  groups: GroupSchedule[];
}

export type ScheduleData = DaySchedule[];
