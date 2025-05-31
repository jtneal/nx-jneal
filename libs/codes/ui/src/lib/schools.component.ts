import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '@nx-jneal/ui-core';
import { School } from '@nx-jneal/util-codes';

@Component({
  selector: 'lib-schools',
  imports: [CardComponent, CommonModule, MatIconModule],
  template: `
    <section class="sub-page" id="education">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon svgIcon="jneal_cap"></mat-icon>Education</h2>
        <div class="columns columns-2 triple-spaced">
          @for (school of schools(); track $index) {
            <lib-card [badge]="school.dates" [subtitle]="school.name" [title]="school.title"></lib-card>
          }
        </div>
      </div>
    </section>
  `,
})
export class SchoolsComponent {
  public schools = input.required<School[]>();
}
