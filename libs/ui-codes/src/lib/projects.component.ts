import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectComponent } from './project.component';

@Component({
  selector: 'lib-projects',
  imports: [CommonModule, MatIconModule, ProjectComponent],
  styles: `
    section {
      padding: 3rem 0;
      scroll-margin-top: 6rem;
    }

    .container {
      align-items: start;
      flex-direction: column;
    }

    .projects {
      display: flex;
      gap: 1.5rem;
      margin-top: 2rem;
    }

    h2 {
      font-size: 1.875rem;
    }

    mat-icon {
      color: var(--red-bright);
      margin-right: 0.5rem;
    }
  `,
  template: `
    <section id="portfolio">
      <div class="container">
        <h2><mat-icon fontIcon="code"></mat-icon>Featured Projects</h2>
        <div class="projects">
          <lib-project></lib-project>
          <lib-project></lib-project>
          <lib-project></lib-project>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {}
