export interface HeroDataProps {
  title: string;
  subtitle: string;
  primaryCTA: { label: string; targetId: string };
  secondaryCTA: { label: string; targetId: string };
  backgroundImage: string;
  tags: string[];
  heroInfoBar: HeroInfoBarProps;
}
export interface HeroInfoBarProps {
  days: string;
  weekends: string;
  firstTraining: string;
}
export interface PageDataProps {
  hero: HeroDataProps;
}
