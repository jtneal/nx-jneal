import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Job, JobComponent } from './job.component';

@Component({
  selector: 'lib-jobs',
  imports: [CommonModule, JobComponent, MatIconModule],
  template: `
    <section class="sub-page" id="experience">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon svgIcon="jneal_work"></mat-icon>Work Experience</h2>
        @for (job of jobs(); track $index) {
          <lib-job class="triple-spaced" [job]="job">
            <p>Led the development of multiple full-stack applications using modern technologies.</p>
          </lib-job>
        }
      </div>
    </section>
  `,
})
export class JobsComponent {
  public jobs = input.required<Job[]>();
}
