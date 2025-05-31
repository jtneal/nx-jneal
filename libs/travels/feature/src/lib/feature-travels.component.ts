import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TravelsService } from '@nx-jneal/data-access-travels';
import { ArticlesComponent, SubHeroComponent, SubNavComponent } from '@nx-jneal/ui-components';
import { PhotosComponent, ResearchComponent } from '@nx-jneal/ui-travels';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'lib-feature-travels',
  imports: [ArticlesComponent, CommonModule, PhotosComponent, ResearchComponent, SubHeroComponent, SubNavComponent],
  template: `
    @if (hero$ | async; as hero) {
      <lib-sub-hero [description]="hero.description" [image]="hero.image" [title]="hero.title"></lib-sub-hero>
    }

    <div class="sticky-container">
      @if (links$ | async; as links) {
        <lib-sub-nav [links]="links"></lib-sub-nav>
      }

      <div class="sub-content">
        @if (photos$ | async; as photos) {
          <lib-photos [albums]="photos[0]" [photos]="photos[1]"></lib-photos>
        }

        @if (research$ | async; as research) {
          <lib-research [research]="research"></lib-research>
        }

        @if (articles$ | async; as articles) {
          <lib-articles [articles]="articles"></lib-articles>
        }
      </div>
    </div>
  `,
})
export class FeatureTravelsComponent {
  private readonly service = inject(TravelsService);

  public readonly photos$ = forkJoin([this.service.getAlbums(), this.service.getPhotos()]);
  public readonly articles$ = this.service.getArticles();
  public readonly hero$ = this.service.getHero();
  public readonly links$ = this.service.getLinks();
  public readonly research$ = this.service.getResearch();
}
