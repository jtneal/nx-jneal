export interface PhotoSection {
  albums: string[];
  cards: PhotoCard[];
  icon: string;
  title: string;
}

export interface PhotoCard {
  album: string;
  link: string;
  src: string;
  title: string;
}
