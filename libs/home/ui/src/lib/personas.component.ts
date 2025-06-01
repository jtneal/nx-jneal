import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PersonaSection } from '@nx-jneal/util-home';
import { PromoComponent } from './promo.component';

@Component({
  selector: 'lib-personas',
  imports: [CommonModule, PromoComponent],
  styles: `
    section {
      padding: 3rem 0;
      scroll-margin-top: 4rem;
    }

    .container {
      align-items: center;
    }
  `,
  template: `
    <section id="personas">
      <div class="container column">
        <h2 class="huge">{{ personas().title }}</h2>
        <p class="text-large double-spaced">
          {{ personas().description }}
        </p>
        <div class="columns columns-3 triple-spaced">
          @for (card of personas().cards; track $index) {
            <lib-promo
              [description]="card.description"
              [image]="card.image"
              [link]="card.link"
              [theme]="card.theme"
              [title]="card.title"
            ></lib-promo>
          }
        </div>
      </div>
    </section>
  `,
})
export class PersonasComponent {
  public personas = input.required<PersonaSection>();
}
