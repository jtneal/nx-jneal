export interface ExperienceSection {
  cards: ExperienceCard[];
  icon: string;
  title: string;
}

export interface ExperienceCard {
  company: string;
  dates: string;
  description: string[];
  title: string;
}
