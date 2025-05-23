import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeroComponent } from '@nx-jneal/ui-components';

@Component({
  selector: 'lib-feature-travels',
  imports: [CommonModule, SubHeroComponent],
  styles: ``,
  template: `
    <lib-sub-hero
      description="Travel adventures, spirituality, and explorations of UAP/UFO phenomena"
      image="https://images.unsplash.com/photo-1608546043931-6c9678ea9feb?q=80&w=2069&auto=format&fit=crop"
      title="JNealTravels"
    ></lib-sub-hero>
  `,
})
export class FeatureTravelsComponent {}
