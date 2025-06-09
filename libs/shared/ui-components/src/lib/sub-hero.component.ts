import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-sub-hero',
  imports: [CommonModule],
  styles: `
    :host {
      display: block;
      padding-top: 4rem;
    }

    img {
      height: 400px;
      object-fit: cover;
      width: 100%;
    }
  `,
  template: `<h1><img [alt]="title()" [src]="image()" /></h1>`,
})
export class SubHeroComponent {
  public image = input.required<string>();
  public title = input.required<string>();
}
