import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { JobComponent } from './job.component';

@Component({
  selector: 'lib-experience',
  imports: [CommonModule, JobComponent, MatIconModule],
  styles: `
    .container {
      align-items: start;
      flex-direction: column;
    }

    mat-icon {
      color: var(--red-bright);
      margin-right: 0.75rem;
    }
  `,
  template: `
    <section class="sub-page" id="experience">
      <div class="container">
        <h2 class="triple-spaced"><mat-icon fontIcon="work_outline"></mat-icon>Work Experience</h2>
        <lib-job
          class="triple-spaced"
          company="Tech Company Inc."
          dates="2020 - Present"
          title="Senior Software Engineer"
        >
          <p>Led the development of multiple full-stack applications using modern technologies.</p>
        </lib-job>
        <lib-job class="triple-spaced" company="Digital Solutions LLC" dates="2017 - 2020" title="Software Developer">
          <p>Developed and maintained web applications for various clients.</p>
        </lib-job>
        <lib-job class="triple-spaced" company="Startup Innovations" dates="2015 - 2017" title="Junior Developer">
          <p>Assisted in the development of web applications and learned various technologies.</p>
        </lib-job>
      </div>
    </section>
  `,
})
export class ExperienceComponent {}
