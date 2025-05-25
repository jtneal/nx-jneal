import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PillComponent } from '@nx-jneal/ui-components';

export interface Skill {
  description: string;
  tech: string[];
  title: string;
}

@Component({
  selector: 'lib-skill',
  imports: [CommonModule, PillComponent],
  template: `
    <article class="card">
      <h3>{{ skill().title }}</h3>
      <p class="text-small quarter-spaced">{{ skill().description }}</p>
      <p class="single-spaced pills">
        @for (item of skill().tech; track $index) {
          <lib-pill theme="dim">{{ item }}</lib-pill>
        }
      </p>
    </article>
  `,
})
export class SkillComponent {
  public skill = input.required<Skill>();
}
