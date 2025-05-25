import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonComponent, PillComponent } from '@nx-jneal/ui-components';

export interface Project {
  code: string;
  demo: string;
  description: string;
  image: string;
  tech: string[];
  title: string;
}

@Component({
  selector: 'lib-project',
  imports: [ButtonComponent, CommonModule, PillComponent],
  template: `
    <article class="card with-photo">
      <img [alt]="project().description" [src]="project().image" />
      <div class="card-content">
        <h3>{{ project().title }}</h3>
        <p class="quarter-spaced pills">
          @for (item of project().tech; track $index) {
            <lib-pill theme="dim">{{ item }}</lib-pill>
          }
        </p>
        <p class="highlight double-spaced">{{ project().description }}</p>
        <p class="columns columns-2 double-spaced">
          <lib-button [external]="true" icon="open_in_new" [link]="project().demo" text="Demo"></lib-button>
          <lib-button [external]="true" icon="github" [link]="project().code" text="Code"></lib-button>
        </p>
      </div>
    </article>
  `,
})
export class ProjectComponent {
  public project = input.required<Project>();
}
