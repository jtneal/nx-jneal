import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Skill, SkillComponent } from './skill.component';

@Component({
  selector: 'lib-skills',
  imports: [CommonModule, MatIconModule, SkillComponent],
  template: `
    <section class="sub-page" id="skills">
      <div class="container column">
        <h2 class="icon-heading triple-spaced">
          <mat-icon fontIcon="lightbulb_outline"></mat-icon>Skills &amp; Technologies
        </h2>
        <div class="columns columns-2 triple-spaced">
          @for (skill of skills(); track $index) {
            <lib-skill [skill]="skill"></lib-skill>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  public skills = input.required<Skill[]>();
}
