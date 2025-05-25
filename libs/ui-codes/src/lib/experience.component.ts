import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { JobComponent } from './job.component';

@Component({
  selector: 'lib-experience',
  imports: [CommonModule, JobComponent, MatIconModule],
  styles: `
    section {
      scroll-margin-top: 6rem;
    }

    .container {
      align-items: start;
      flex-direction: column;
    }

    h2 {
      font-size: 1.875rem;
      margin-top: 2rem;
    }

    mat-icon {
      color: var(--red-bright);
      margin-right: 0.75rem;
    }

    lib-job {
      margin-top: 2rem;
    }
  `,
  template: `
    <section id="experience">
      <div class="container">
        <h2><mat-icon fontIcon="work_outline"></mat-icon>Work Experience</h2>
        <lib-job company="Tech Company Inc." dates="2020 - Present" title="Senior Software Engineer">
          <p>Led the development of multiple full-stack applications using modern technologies.</p>
        </lib-job>
        <lib-job company="Digital Solutions LLC" dates="2017 - 2020" title="Software Developer">
          <p>Developed and maintained web applications for various clients.</p>
        </lib-job>
        <lib-job company="Startup Innovations" dates="2015 - 2017" title="Junior Developer">
          <p>Assisted in the development of web applications and learned various technologies.</p>
        </lib-job>
      </div>
    </section>
  `,
})
export class ExperienceComponent {}
