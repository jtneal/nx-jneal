import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SchoolComponent } from './school.component';

@Component({
  selector: 'lib-education',
  imports: [CommonModule, MatIconModule, SchoolComponent],
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

    .schools {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 2rem;
      width: 100%;
    }

    lib-school {
      flex: 0 0 calc(50% - 1rem);
    }
  `,
  template: `
    <section id="education">
      <div class="container">
        <h2><mat-icon fontIcon="work_outline"></mat-icon>Education</h2>
        <div class="schools">
          <lib-school
            dates="2011 - 2015"
            school="University of Technology"
            title="Bachelor of Science in Computer Science"
          ></lib-school>
          <lib-school dates="2019" school="Amazon Web Services" title="AWS Certified Solutions Architect"></lib-school>
        </div>
      </div>
    </section>
  `,
})
export class EducationComponent {}
