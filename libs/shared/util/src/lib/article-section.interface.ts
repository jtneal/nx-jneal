export interface ArticleSection {
  cards: ArticleCard[];
  icon: string;
  title: string;
}

export interface ArticleCard {
  date: string;
  description: string;
  length: string;
  link: string;
  title: string;
}
