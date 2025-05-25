import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ArticleComponent } from './article.component';

@Component({
  selector: 'lib-articles',
  imports: [CommonModule, MatIconModule, ArticleComponent],
  styles: `
    .container {
      align-items: start;
      flex-direction: column;
    }

    mat-icon {
      color: var(--red-bright);
      margin-right: 0.75rem;
    }

    .articles {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      width: 100%;
    }

    lib-article {
      flex: 0 0 calc(50% - 1rem);
    }
  `,
  template: `
    <section class="sub-page" id="articles">
      <div class="container">
        <h2 class="triple-spaced"><mat-icon fontIcon="list_alt"></mat-icon>Articles</h2>
        <div class="articles triple-spaced">
          <lib-article
            date="May 10, 2023"
            description="Learn how to create a full-stack application using Next.js, TypeScript, and Tailwind CSS."
            length="8"
            link="#"
            title="Frontend Development"
          ></lib-article>
          <lib-article
            date="May 10, 2023"
            description="Learn how to create a full-stack application using Next.js, TypeScript, and Tailwind CSS."
            length="8"
            link="#"
            title="Frontend Development"
          ></lib-article>
          <lib-article
            date="May 10, 2023"
            description="Learn how to create a full-stack application using Next.js, TypeScript, and Tailwind CSS."
            length="8"
            link="#"
            title="Frontend Development"
          ></lib-article>
          <lib-article
            date="May 10, 2023"
            description="Learn how to create a full-stack application using Next.js, TypeScript, and Tailwind CSS."
            length="8"
            link="#"
            title="Frontend Development"
          ></lib-article>
        </div>
      </div>
    </section>
  `,
})
export class ArticlesComponent {}
