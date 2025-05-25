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

    h3 {
      margin-bottom: 0.25rem;
    }

    .description {
      margin-top: 1.5rem;
    }

    .buttons {
      margin-top: 1.5rem;

      a {
        align-items: center;
        background-color: var(--background);
        border: 1px solid var(--background-muted);
        border-radius: .5rem;
        color: var(--foreground);
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        padding: 0.5rem;

        &:hover {
          background-color: var(--background-muted);
        }
      }
    }

    svg {
      height: 16px;
      width: 16px;
    }
  `,
  template: `
    <article>
      <h3>{{ title() }}</h3>
      <p class="text-small">{{ date() }} &bull; {{ length() }} min read</p>
      <p class="description">{{ description() }}</p>
      <p class="buttons">
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
