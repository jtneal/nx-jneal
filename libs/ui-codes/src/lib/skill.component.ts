import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PillComponent } from '@nx-jneal/ui-components';

@Component({
  selector: 'lib-skill',
  imports: [CommonModule, PillComponent],
  styles: `
    :host {
      width: 100%;
    }

    article {
      border: 1px solid var(--background-muted);
      border-radius: 0.5rem;
      padding: 1.5rem;
    }

    header {
      display: flex;
      justify-content: space-between;
    }

    lib-pill {
      margin: 0.5rem 0.5rem 0 0;
    }
  `,
  template: `
    <article>
      <h3>{{ title() }}</h3>
      <p class="text-small quarter-spaced">{{ description() }}</p>
      <p class="single-spaced">
        @for (item of tech(); track $index) {
          <lib-pill theme="dim">{{ item }}</lib-pill>
        }
      </p>
    </article>
  `,
})
export class SkillComponent {
  public description = input.required<string>();
  public tech = input.required<string[]>();
  public title = input.required<string>();
}
