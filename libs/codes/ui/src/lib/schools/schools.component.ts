import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { School, SchoolComponent } from './school.component';

@Component({
  selector: 'lib-schools',
  imports: [CommonModule, MatIconModule, SchoolComponent],
  template: `
    <section class="sub-page" id="education">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon svgIcon="jneal_cap"></mat-icon>Education</h2>
        <div class="columns columns-2 triple-spaced">
          @for (school of schools(); track $index) {
            <lib-school [school]="school"></lib-school>
          }
        </div>
      </div>
    </section>
  `,
})
export class SchoolsComponent {
  public schools = input.required<School[]>();
}
