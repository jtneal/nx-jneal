import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonComponent } from '@nx-jneal/ui-components';

export interface Article {
  date: string;
  description: string;
  length: string;
  link: string;
  title: string;
}

@Component({
  selector: 'lib-article',
  imports: [ButtonComponent, CommonModule],
  template: `
    <article class="card">
      <h3>{{ article().title }}</h3>
      <p class="text-small quarter-spaced">{{ article().date }} &bull; {{ article().length }} min read</p>
      <p class="highlight double-spaced">{{ article().description }}</p>
      <p class="buttons double-spaced">
        <lib-button [external]="true" icon="open_in_new" [link]="article().link" text="Read on Medium"></lib-button>
      </p>
    </article>
  `,
})
export class ArticleComponent {
  public article = input.required<Article>();
}
