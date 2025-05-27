import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Article, ArticlesComponent, SubHeroComponent, SubNavComponent, SubNavLink } from '@nx-jneal/ui-components';
import { Photo, PhotosComponent, ResearchComponent } from '@nx-jneal/ui-travels';

@Component({
  selector: 'lib-feature-travels',
  imports: [ArticlesComponent, CommonModule, PhotosComponent, ResearchComponent, SubHeroComponent, SubNavComponent],
  template: `
    <lib-sub-hero [description]="hero.description" [image]="hero.image" [title]="hero.title"></lib-sub-hero>
    <div class="sticky-container">
      <lib-sub-nav [links]="links"></lib-sub-nav>
      <div class="sub-content">
        <lib-photos [albums]="albums" [photos]="photos"></lib-photos>
        <lib-research></lib-research>
        <lib-articles [articles]="articles"></lib-articles>
      </div>
    </div>
  `,
})
export class FeatureTravelsComponent {
  public hero = {
    description: 'Photo gallery, explorations of UAP/UFO phenomena, and articles on related topics.',
    image: 'https://images.unsplash.com/photo-1608546043931-6c9678ea9feb?q=80&w=2069&auto=format&fit=crop',
    title: 'JNealTravels',
  };

  public links: SubNavLink[] = [
    { icon: 'jneal_cam', link: 'photos', title: 'Photo Gallery' },
    { icon: 'circle', link: 'research', title: 'UAP/UFO Research' },
    { icon: 'jneal_book', link: 'articles', title: 'Articles' },
  ];

  public albums: string[] = ['All Photos', 'Europe 2023', 'Egypt 2022'];

  public photos: Photo[] = [
    {
      link: '#',
      src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop',
      title: 'Eiffel Tower, Paris',
    },
    {
      link: '#',
      src: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop',
      title: 'Colosseum, Rome',
    },
    {
      link: '#',
      src: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop',
      title: 'Sagrada Familia, Barcelona',
    },
    {
      link: '#',
      src: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=2070&auto=format&fit=crop',
      title: 'Canals of Amsterdam',
    },
    {
      link: '#',
      src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop',
      title: 'Tower Bridge, London',
    },
    {
      link: '#',
      src: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=2070&auto=format&fit=crop',
      title: 'Prague Castle',
    },
  ];

  public articles: Article[] = [
    {
      date: 'December 5, 2022',
      description: 'My journey through the land of pharaohs and the incredible discoveries I made along the way.',
      length: '12',
      link: '#',
      title: 'Exploring the Ancient Mysteries of Egypt',
    },
    {
      date: 'August 18, 2023',
      description: "Discovering lesser-known architectural wonders across Europe's historic cities.",
      length: '9',
      link: '#',
      title: 'The Hidden Gems of European Architecture',
    },
    {
      date: 'February 28, 2023',
      description: 'Visiting locations known for frequent UAP sightings and the stories behind them.',
      length: '15',
      link: '#',
      title: 'In Search of the Unexplained: UAP Hotspots Around the World',
    },
  ];
}
