import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent, HeroComponent, PersonasComponent } from '@nx-jneal/ui-home';

@Component({
  selector: 'lib-feature-home',
  imports: [AboutComponent, CommonModule, HeroComponent, PersonasComponent],
  styles: ``,
  template: `
    <lib-hero></lib-hero>
    <lib-personas></lib-personas>
    <lib-about></lib-about>
  `,
})
export class FeatureHomeComponent {}
