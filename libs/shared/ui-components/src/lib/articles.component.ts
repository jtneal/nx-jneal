import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent, CardComponent } from '@nx-jneal/ui-core';

export interface Article {
  date: string;
  description: string;
  length: string;
  link: string;
  title: string;
}

@Component({
  selector: 'lib-articles',
  imports: [ButtonComponent, CardComponent, CommonModule, MatIconModule],
  template: `
    <section class="sub-page" id="articles">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon svgIcon="jneal_book"></mat-icon>Articles</h2>
        <div class="columns columns-3 triple-spaced">
          @for (article of articles(); track $index) {
            <lib-card subtitle="{{ article.date }} &middot; {{ article.length }} min read" [title]="article.title">
              <p class="double-spaced">{{ article.description }}</p>
              <p class="double-spaced">
                <lib-button [external]="true" icon="jneal_new" [link]="article.link" text="Read on Medium"></lib-button>
              </p>
            </lib-card>
          }
        </div>
      </div>
    </section>
  `,
})
export class ArticlesComponent {
  public articles = input.required<Article[]>();
}
