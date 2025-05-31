export interface Skill {
  tech: SkillRated[];
  title: string;
}

export interface SkillRated {
  name: string;
  rating: RatingEnum;
}

export enum RatingEnum {
  BEGINNER = 1,
  PROFICIENT = 2,
  EXPERT = 3,
}
