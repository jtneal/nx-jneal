import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '@nx-jneal/ui-core';
import { Job } from '@nx-jneal/util-codes';

@Component({
  selector: 'lib-jobs',
  imports: [CardComponent, CommonModule, MatIconModule],
  template: `
    <section class="sub-page" id="experience">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon svgIcon="jneal_work"></mat-icon>Work Experience</h2>
        @for (job of jobs(); track $index) {
          <lib-card [badge]="job.dates" class="triple-spaced" [subtitle]="job.company" [title]="job.title">
            <ul class="highlight content double-spaced">
              @for (item of job.description; track $index) {
                <li>{{ item }}</li>
              }
            </ul>
          </lib-card>
        }
      </div>
    </section>
  `,
})
export class JobsComponent {
  public jobs = input.required<Job[]>();
}
