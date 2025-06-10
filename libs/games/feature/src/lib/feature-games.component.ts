import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GamesService } from '@nx-jneal/data-access-games';
import { ArticlesComponent, SubHeroComponent, SubNavComponent } from '@nx-jneal/ui-components';
import { GamesComponent, SetupComponent } from '@nx-jneal/ui-games';

@Component({
  selector: 'lib-feature-games',
  imports: [ArticlesComponent, CommonModule, GamesComponent, SetupComponent, SubHeroComponent, SubNavComponent],
  template: `
    <div class="green-theme">
      @if (hero$ | async; as hero) {
        <lib-sub-hero color="#050607" [image]="hero.image" [title]="hero.title"></lib-sub-hero>
      }
      <div class="sticky-container">
        @if (links$ | async; as links) {
          <lib-sub-nav [links]="links"></lib-sub-nav>
        }
        <div class="sub-content">
          @if (setup$ | async; as setup) {
            <lib-setup [setup]="setup"></lib-setup>
          }
          @if (games$ | async; as games) {
            <lib-games [games]="games"></lib-games>
          }
          @if (articles$ | async; as articles) {
            <lib-articles [articles]="articles"></lib-articles>
          }
        </div>
      </div>
    </div>
  `,
})
export class FeatureGamesComponent {
  private readonly service = inject(GamesService);

  public readonly articles$ = this.service.getArticles();
  public readonly games$ = this.service.getGames();
  public readonly hero$ = this.service.getHero();
  public readonly links$ = this.service.getLinks();
  public readonly setup$ = this.service.getSetup();
}
