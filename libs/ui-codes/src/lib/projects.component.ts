import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectComponent } from './project.component';

@Component({
  selector: 'lib-projects',
  imports: [CommonModule, MatIconModule, ProjectComponent],
  styles: `
    .container {
      align-items: start;
      flex-direction: column;
    }

    .projects {
      display: flex;
      gap: 1.5rem;
    }

    mat-icon {
      color: var(--red-bright);
      margin-right: 0.75rem;
    }
  `,
  template: `
    <section class="sub-page" id="portfolio">
      <div class="container">
        <h2><mat-icon fontIcon="code"></mat-icon>Featured Projects</h2>
        <div class="projects triple-spaced">
          <lib-project
            code="#"
            demo="#"
            description="A full-stack web application built with Next.js and TypeScript"
            image="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
            [tech]="['Next.js', 'TypeScript', 'Tailwind CSS']"
            title="Project Alpha"
          ></lib-project>
          <lib-project
            code="#"
            demo="#"
            description="A full-stack web application built with Next.js and TypeScript"
            image="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
            [tech]="['Next.js', 'TypeScript', 'Tailwind CSS']"
            title="Project Alpha"
          ></lib-project>
          <lib-project
            code="#"
            demo="#"
            description="A full-stack web application built with Next.js and TypeScript"
            image="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
            [tech]="['Next.js', 'TypeScript', 'Tailwind CSS']"
            title="Project Alpha"
          ></lib-project>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {}
