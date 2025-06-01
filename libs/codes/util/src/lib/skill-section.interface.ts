export interface SkillSection {
  cards: SkillCard[];
  icon: string;
  title: string;
}

export interface SkillCard {
  skills: Skill[];
  title: string;
}

export interface Skill {
  name: string;
  rating: RatingEnum;
}

export enum RatingEnum {
  BEGINNER = 1,
  PROFICIENT = 2,
  EXPERT = 3,
}
