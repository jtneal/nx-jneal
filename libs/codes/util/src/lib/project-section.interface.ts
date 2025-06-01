export interface ProjectSection {
  cards: ProjectCard[];
  icon: string;
  title: string;
}

export interface ProjectCard {
  code: string;
  demo: string;
  description: string;
  image: string;
  tech: string[];
  title: string;
}
