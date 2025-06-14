export interface VideoSection {
  albums: string[];
  cards: VideoCard[];
  icon: string;
  title: string;
}

export interface VideoCard {
  album: string;
  src: string;
}
