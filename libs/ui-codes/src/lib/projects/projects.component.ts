import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Project, ProjectComponent } from './project.component';

@Component({
  selector: 'lib-projects',
  imports: [CommonModule, MatIconModule, ProjectComponent],
  template: `
    <section class="sub-page-large " id="projects">
      <div class="container column">
        <h2 class="icon-heading"><mat-icon fontIcon="code"></mat-icon>Featured Projects</h2>
        <div class="columns columns-3 projects triple-spaced">
          @for (project of projects(); track $index) {
            <lib-project [project]="project"></lib-project>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  public projects = input.required<Project[]>();
}
