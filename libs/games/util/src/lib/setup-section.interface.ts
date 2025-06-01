import { Dictionary } from '@nx-jneal/util-shared';

export interface SetupSection {
  articles: SetupArticle[];
  description: string;
  icon: string;
  theme: 'red' | 'blue' | 'green';
  title: string;
}

export interface SetupArticle {
  dictionary: Dictionary[];
  image: string;
  title: string;
}
