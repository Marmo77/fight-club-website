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
  description: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  socials: {
    label: string;
    href: string;
  }[];
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
export interface PricingProps {
  title: string;
  info: string;
  prices: {
    title: string;
    price: number;
    description: string;
  }[];
}

export interface PageDataProps {
  site: SiteDataProps;
  hero: HeroDataProps;
  navigation: NavigationDataProps;
  trainers: TrainerProps[];
  pricing: PricingProps;
  locations: Location[];
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

export interface Location {
  name: string;
  address: string;
  googleMapLink: string;
  description: string;
  assets: {
    icon: any;
    text: string;
  }[];
}

export type ScheduleData = DaySchedule[];
