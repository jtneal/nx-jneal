import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonComponent } from '@nx-jneal/ui-components';

@Component({
  selector: 'lib-article',
  imports: [ButtonComponent, CommonModule],
  styles: `
    :host {
      width: 100%;
    }

    article {
      border: 1px solid var(--background-muted);
      border-radius: 0.5rem;
      padding: 1.5rem;

      &:hover {
        .description {
          color: var(--foreground);
        }
      }
    }
  `,
  template: `
    <article>
      <h3>{{ title() }}</h3>
      <p class="text-small quarter-spaced">{{ date() }} &bull; {{ length() }} min read</p>
      <p class="double-spaced">{{ description() }}</p>
      <p class="buttons double-spaced">
        <lib-button [external]="true" icon="open_in_new" link="#" text="Read on Medium"></lib-button>
      </p>
    </article>
  `,
})
export class ArticleComponent {
  public date = input.required<string>();
  public description = input.required<string>();
  public length = input.required<string>();
  public link = input.required<string>();
  public title = input.required<string>();
}
