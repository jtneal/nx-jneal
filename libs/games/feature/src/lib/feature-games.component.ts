import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GamesService } from '@nx-jneal/data-access-games';
import { ArticlesComponent, SubHeroComponent, SubNavComponent } from '@nx-jneal/ui-components';
import { GamesComponent, SetupComponent } from '@nx-jneal/ui-games';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'lib-feature-games',
  imports: [ArticlesComponent, CommonModule, GamesComponent, SetupComponent, SubHeroComponent, SubNavComponent],
  template: `
    @if (hero$ | async; as hero) {
      <lib-sub-hero [description]="hero.description" [image]="hero.image" [title]="hero.title"></lib-sub-hero>
    }

    <div class="sticky-container">
      @if (links$ | async; as links) {
        <lib-sub-nav [links]="links"></lib-sub-nav>
      }

      <div class="sub-content">
        @if (setup$ | async; as setup) {
          <lib-setup [peripherals]="setup[0]" [specifications]="setup[1]">
            <p class="double-spaced">
              Every few years, I build a new gaming PC from the ground up - an opportunity to stay current with
              cutting-edge hardware and optimize performance for both work and play. I also enjoy building custom rigs
              for friends and family, sharing my expertise and helping them get the most out of their systems. My love
              for gaming and technology fuels a constant pursuit of the ideal setup - one that enhances immersion,
              performance, and productivity alike. Whether I'm raiding in Destiny 2, grinding through Diablo 4, or
              diving into a new coding project, I want every experience to feel seamless and powerful.
            </p>
          </lib-setup>
        }

        @if (games$ | async; as games) {
          <lib-games [past]="games[0]" [recent]="games[1]"></lib-games>
        }

        @if (articles$ | async; as articles) {
          <lib-articles [articles]="articles"></lib-articles>
        }
      </div>
    </div>
  `,
})
export class FeatureGamesComponent {
  private readonly service = inject(GamesService);

  public readonly articles$ = this.service.getArticles();
  public readonly games$ = forkJoin([this.service.getPast(), this.service.getRecent()]);
  public readonly hero$ = this.service.getHero();
  public readonly links$ = this.service.getLinks();
  public readonly setup$ = forkJoin([this.service.getPeripherals(), this.service.getSpecifications()]);
}
