import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent, PillComponent } from '@nx-jneal/ui-core';
import { CardComponent } from '@nx-jneal/ui-core';
import { Project } from '@nx-jneal/util-codes';

@Component({
  selector: 'lib-projects',
  imports: [ButtonComponent, CardComponent, CommonModule, MatIconModule, PillComponent],
  template: `
    <section class="sub-page-large " id="projects">
      <div class="container column">
        <h2 class="icon-heading"><mat-icon svgIcon="jneal_code"></mat-icon>Featured Projects</h2>
        <div class="columns columns-3 triple-spaced">
          @for (project of projects(); track $index) {
            <lib-card [image]="project.image" [title]="project.title">
              <p class="pills">
                @for (item of project.tech; track $index) {
                  <lib-pill theme="dim">{{ item }}</lib-pill>
                }
              </p>
              <p class="double-spaced">{{ project.description }}</p>
              <p class="columns columns-2 double-spaced">
                <lib-button [external]="true" icon="jneal_new" [link]="project.demo" text="Demo"></lib-button>
                <lib-button [external]="true" icon="jneal_git" [link]="project.code" text="Code"></lib-button>
              </p>
            </lib-card>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  public projects = input.required<Project[]>();
}
