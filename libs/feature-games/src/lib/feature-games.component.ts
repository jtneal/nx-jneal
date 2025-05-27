import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Article, ArticlesComponent, SubHeroComponent, SubNavComponent, SubNavLink } from '@nx-jneal/ui-components';
import { GamesComponent, SetupComponent } from '@nx-jneal/ui-games';

@Component({
  selector: 'lib-feature-games',
  imports: [ArticlesComponent, CommonModule, GamesComponent, SetupComponent, SubHeroComponent, SubNavComponent],
  styles: ``,
  template: `
    <lib-sub-hero [description]="hero.description" [image]="hero.image" [title]="hero.title"></lib-sub-hero>
    <div class="sticky-container">
      <lib-sub-nav [links]="links"></lib-sub-nav>
      <div class="sub-content">
        <lib-setup></lib-setup>
        <lib-games></lib-games>
        <lib-articles [articles]="articles"></lib-articles>
      </div>
    </div>
  `,
})
export class FeatureGamesComponent {
  public hero = {
    description: 'My gaming setup, recently played games, past favorites, and gaming articles.',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2057&auto=format&fit=crop',
    title: 'JNealGames',
  };

  public links: SubNavLink[] = [
    { icon: 'jneal_pc', link: 'setup', title: 'Gaming Setup' },
    { icon: 'jneal_game', link: 'games', title: 'My Games' },
    { icon: 'jneal_book', link: 'articles', title: 'Articles' },
  ];

  public articles: Article[] = [
    {
      date: 'July 12, 2023',
      description: "Strategies and tips for mastering Diablo 4's challenging endgame activities.",
      length: '11',
      link: '#',
      title: "Diablo 4: A Veteran's Guide to Endgame Content",
    },
    {
      date: 'May 30, 2023',
      description: 'Tracing the development of the MMORPG genre and where it might be headed next.',
      length: '14',
      link: '#',
      title: 'The Evolution of MMORPGs: From EverQuest to New World',
    },
    {
      date: 'April 5, 2023',
      description: 'Everything you need to know about creating a comfortable and high-performance gaming environment.',
      length: '13',
      link: '#',
      title: 'Building the Ultimate Gaming Setup: A Comprehensive Guide',
    },
  ];
}
