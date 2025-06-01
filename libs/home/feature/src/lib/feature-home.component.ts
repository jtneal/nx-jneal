import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HomeService } from '@nx-jneal/data-access-home';
import { AboutComponent, HeroComponent, PersonasComponent } from '@nx-jneal/ui-home';

@Component({
  selector: 'lib-feature-home',
  imports: [AboutComponent, CommonModule, HeroComponent, PersonasComponent],
  template: `
    @if (hero$ | async; as hero) {
      <lib-hero [hero]="hero"></lib-hero>
    }
    @if (personas$ | async; as personas) {
      <lib-personas [personas]="personas"></lib-personas>
    }
    @if (about$ | async; as about) {
      <lib-about [about]="about"></lib-about>
    }
  `,
})
export class FeatureHomeComponent {
  private readonly home = inject(HomeService);

  public about$ = this.home.getAbout();
  public hero$ = this.home.getHero();
  public personas$ = this.home.getPersonas();
}
