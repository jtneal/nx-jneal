import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PillComponent } from '@nx-jneal/ui-components';

export interface Job {
  company: string;
  dates: string;
  title: string;
}

@Component({
  selector: 'lib-job',
  imports: [CommonModule, PillComponent],
  styles: `
    :host {
      width: 100%;
    }

    header {
      display: flex;
      justify-content: space-between;
    }
  `,
  template: `
    <article class="card">
      <header>
        <div>
          <h3>{{ job().title }}</h3>
          <p class="text-small quarter-spaced">{{ job().company }}</p>
        </div>
        <aside>
          <lib-pill theme="bright">{{ job().dates }}</lib-pill>
        </aside>
      </header>
      <div class="highlight content double-spaced">
        <ng-content></ng-content>
      </div>
    </article>
  `,
})
export class JobComponent {
  public job = input.required<Job>();
}
