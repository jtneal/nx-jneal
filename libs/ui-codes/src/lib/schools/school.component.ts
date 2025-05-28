import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PillComponent } from '@nx-jneal/ui-components';

export interface School {
  dates: string;
  name: string;
  title: string;
}

@Component({
  selector: 'lib-school',
  imports: [CommonModule, PillComponent],
  styles: `
    .card {
      display: flex;
      justify-content: space-between;
    }
  `,
  template: `
    <article class="card">
      <header>
        <h3>{{ school().title }}</h3>
        <p class="text-small">{{ school().name }}</p>
      </header>
      <aside>
        <lib-pill theme="bright">{{ school().dates }}</lib-pill>
      </aside>
    </article>
  `,
})
export class SchoolComponent {
  public school = input.required<School>();
}
