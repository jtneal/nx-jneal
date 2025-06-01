export interface GameSection {
  categories: GameCategory[];
  icon: string;
  title: string;
}

export interface GameCategory {
  games: Game[];
  title: string;
}

export interface Game {
  developer: string;
  genre: string;
  image: string;
  link: string;
  title: string;
}
