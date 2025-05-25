import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonComponent, PillComponent } from '@nx-jneal/ui-components';

@Component({
  selector: 'lib-project',
  imports: [ButtonComponent, CommonModule, PillComponent],
  styles: `
    :host {
      display: block;
      flex: 0 1 calc((100% - 3rem) / 3);
    }

    article {
      border: 1px solid var(--background-muted);
      border-radius: 0.5rem;
      display: block;
      overflow: hidden;
      transition: transform 0.2s ease-out;

      &:hover {
        transform: translateY(-5px);

        .description {
          color: var(--foreground);
        }

        img {
          transform: scale(1.05);
        }
      }
    }

    img {
      border-radius: 0.5rem 0.5rem 0 0;
      object-fit: cover;
      height: 12rem;
      transition: transform 0.2s ease-out;
      width: 100%;
    }

    .card-content {
      border-radius: 0 0 0.5rem 0.5rem;
      padding: 1.5rem;
    }

    lib-pill {
      margin: 0.5rem 0.5rem 0 0;
    }

    .buttons {
      display: flex;
      gap: 1.5rem;
    }
  `,
  template: `
    <article>
      <img [alt]="description()" [src]="image()" />
      <div class="card-content">
        <h3>{{ title() }}</h3>
        <p class="quarter-spaced">
          @for (item of tech(); track $index) {
            <lib-pill theme="dim">{{ item }}</lib-pill>
          }
        </p>
        <p class="double-spaced">{{ description() }}</p>
        <p class="buttons double-spaced">
          <lib-button [external]="true" icon="open_in_new" [link]="demo()" text="Demo"></lib-button>
          <lib-button [external]="true" icon="github" [link]="code()" text="Code"></lib-button>
        </p>
      </div>
    </article>
  `,
})
export class ProjectComponent {
  public code = input.required<string>();
  public demo = input.required<string>();
  public description = input.required<string>();
  public image = input.required<string>();
  public tech = input.required<string[]>();
  public title = input.required<string>();
}
