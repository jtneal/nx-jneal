import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '@nx-jneal/ui-core';
import { ExperienceSection } from '@nx-jneal/util-codes';

@Component({
  selector: 'lib-experience',
  imports: [CardComponent, CommonModule, MatIconModule],
  template: `
    <section class="sub-page" id="experience">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon svgIcon="jneal_work"></mat-icon>Work Experience</h2>
        @for (card of experience().cards; track $index) {
          <lib-card [badge]="card.dates" class="triple-spaced" [subtitle]="card.company" [title]="card.title">
            <ul class="highlight content double-spaced">
              @for (item of card.description; track $index) {
                <li>{{ item }}</li>
              }
            </ul>
          </lib-card>
        }
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  public experience = input.required<ExperienceSection>();
}
