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
  template: `
    <article class="card">
      <h3>{{ school().title }}</h3>
      <p class="text-small quarter-spaced">{{ school().name }}</p>
      <p class="double-spaced">
        <lib-pill theme="bright">{{ school().dates }}</lib-pill>
      </p>
    </article>
  `,
})
export class SchoolComponent {
  public school = input.required<School>();
}
