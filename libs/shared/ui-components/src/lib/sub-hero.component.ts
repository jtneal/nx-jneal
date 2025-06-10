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

    h1 {
      padding: 3rem 0;

      @media (min-width: 768px) {
        padding: 5rem 0;
      }
    }

    img {
      margin: 0 auto;
      width: 100%;

      @media (min-width: 768px) {
        width: 80%;
      }
    }
  `,
  template: `<h1 [ngStyle]="{ backgroundColor: color() }"><img [alt]="title()" [src]="image()" /></h1>`,
})
export class SubHeroComponent {
  public color = input.required<string>();
  public image = input.required<string>();
  public title = input.required<string>();
}
