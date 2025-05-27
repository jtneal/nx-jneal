import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Article, ArticleComponent } from './article.component';

@Component({
  selector: 'lib-articles',
  imports: [CommonModule, MatIconModule, ArticleComponent],
  template: `
    <section class="sub-page" id="articles">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon svgIcon="jneal_book"></mat-icon>Articles</h2>
        <div class="columns columns-3 triple-spaced">
          @for (article of articles(); track $index) {
            <lib-article [article]="article"></lib-article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ArticlesComponent {
  public articles = input.required<Article[]>();
}
