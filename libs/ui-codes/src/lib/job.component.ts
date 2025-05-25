import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PillComponent } from '@nx-jneal/ui-components';

@Component({
  selector: 'lib-job',
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

    .content {
      color: var(--foreground);
    }
  `,
  template: `
    <article>
      <header>
        <div>
          <h3>{{ title() }}</h3>
          <p class="text-small quarter-spaced">{{ company() }}</p>
        </div>
        <aside>
          <lib-pill theme="bright">{{ dates() }}</lib-pill>
        </aside>
      </header>
      <div class="content double-spaced">
        <ng-content></ng-content>
      </div>
    </article>
  `,
})
export class JobComponent {
  public company = input.required<string>();
  public dates = input.required<string>();
  public title = input.required<string>();
}
