import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SubHeroComponent } from '@nx-jneal/ui-components';

@Component({
  selector: 'lib-feature-games',
  imports: [CommonModule, SubHeroComponent],
  styles: ``,
  template: `
    <lib-sub-hero
      description="Gaming experiences, setups, and discussions about my favorite titles"
      image="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2057&auto=format&fit=crop"
      title="JNealGames"
    ></lib-sub-hero>
  `,
})
export class FeatureGamesComponent {}
