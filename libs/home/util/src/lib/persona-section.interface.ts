export interface PersonaSection {
  cards: PersonaCard[];
  description: string;
  title: string;
}

export interface PersonaCard {
  description: string;
  image: string;
  link: string;
  title: string;
  theme: 'red' | 'blue' | 'green';
}
