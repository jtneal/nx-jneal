import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PillComponent } from '@nx-jneal/ui-components';

@Component({
  selector: 'lib-school',
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

    h3 {
      margin-bottom: 0.25rem;
    }

    p:last-child {
      margin-top: 1.5rem;
    }
  `,
  template: `
    <article>
      <h3>{{ title() }}</h3>
      <p class="text-small">{{ school() }}</p>
      <p>
        <lib-pill theme="bright">{{ dates() }}</lib-pill>
      </p>
    </article>
  `,
})
export class SchoolComponent {
  public dates = input.required<string>();
  public school = input.required<string>();
  public title = input.required<string>();
}
