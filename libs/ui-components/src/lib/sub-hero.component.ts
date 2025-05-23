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

    section {
      position: relative;
    }

    img {
      height: 400px;
      object-fit: cover;
      width: 100%;
    }

    article {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 400px;
      justify-content: center;
      position: absolute;
      text-shadow: 3px 3px 6px #000;
      top: 0;
      width: 100%;
    }

    h1 {
      color: var(--white);
    }

    p {
      color: rgb(255 255 255 / 0.9);
    }
  `,
  template: `
    <section class="text-center">
      <img [alt]="description()" [src]="image()" />
      <article>
        <h1>{{ title() }}</h1>
        <p class="text-large">{{ description() }}</p>
      </article>
    </section>
  `,
})
export class SubHeroComponent {
  public description = input.required<string>();
  public image = input.required<string>();
  public title = input.required<string>();
}
