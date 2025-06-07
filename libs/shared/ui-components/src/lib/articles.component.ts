import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent, CardComponent } from '@nx-jneal/ui-core';
import { ArticleSection } from '@nx-jneal/util-shared';

@Component({
  selector: 'lib-articles',
  imports: [ButtonComponent, CardComponent, CommonModule, MatIconModule],
  template: `
    <section class="sub-page" id="articles">
      <div class="container column">
        <h2 class="icon-heading triple-spaced">
          <mat-icon [svgIcon]="articles().icon"></mat-icon>{{ articles().title }}
        </h2>
        <div class="columns columns-3 triple-spaced">
          @for (card of articles().cards; track $index) {
            <lib-card subtitle="{{ card.date }} &middot; {{ card.length }} min read" [title]="card.title">
              <p class="double-spaced">{{ card.description }}</p>
              <p class="double-spaced">
                <lib-button [external]="true" icon="jneal_new" [link]="card.link" text="Read on Medium"></lib-button>
              </p>
            </lib-card>
          } @empty {
            <p>Stay tuned, I will begin posting some articles soon.</p>
          }
        </div>
      </div>
    </section>
  `,
})
export class ArticlesComponent {
  public articles = input.required<ArticleSection>();
}
