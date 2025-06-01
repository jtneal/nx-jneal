import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '@nx-jneal/ui-core';
import { EducationSection } from '@nx-jneal/util-codes';

@Component({
  selector: 'lib-education',
  imports: [CardComponent, CommonModule, MatIconModule],
  template: `
    <section class="sub-page" id="education">
      <div class="container column">
        <h2 class="icon-heading triple-spaced">
          <mat-icon [svgIcon]="education().icon"></mat-icon>{{ education().title }}
        </h2>
        <div class="columns columns-2 triple-spaced">
          @for (card of education().cards; track $index) {
            <lib-card [badge]="card.dates" [subtitle]="card.name" [title]="card.title"></lib-card>
          }
        </div>
      </div>
    </section>
  `,
})
export class EducationComponent {
  public education = input.required<EducationSection>();
}
