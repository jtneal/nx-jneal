import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SkillComponent } from './skill.component';

@Component({
  selector: 'lib-skills',
  imports: [CommonModule, MatIconModule, SkillComponent],
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

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 2rem;
      width: 100%;
    }

    lib-skill {
      flex: 0 0 calc(50% - 1rem);
    }
  `,
  template: `
    <section id="skills">
      <div class="container">
        <h2><mat-icon fontIcon="lightbulb_outline"></mat-icon>Skills &amp; Technologies</h2>
        <div class="skills">
          <lib-skill
            description="Technologies and tools I work with"
            [tech]="[
              'React',
              'Next.js',
              'TypeScript',
              'JavaScript',
              'HTML',
              'CSS',
              'Tailwind CSS',
              'Framer Motion',
              'Redux'
            ]"
            title="Frontend Development"
          ></lib-skill>
          <lib-skill
            description="Technologies and tools I work with"
            [tech]="[
              'React',
              'Next.js',
              'TypeScript',
              'JavaScript',
              'HTML',
              'CSS',
              'Tailwind CSS',
              'Framer Motion',
              'Redux'
            ]"
            title="Frontend Development"
          ></lib-skill>
          <lib-skill
            description="Technologies and tools I work with"
            [tech]="[
              'React',
              'Next.js',
              'TypeScript',
              'JavaScript',
              'HTML',
              'CSS',
              'Tailwind CSS',
              'Framer Motion',
              'Redux'
            ]"
            title="Frontend Development"
          ></lib-skill>
          <lib-skill
            description="Technologies and tools I work with"
            [tech]="[
              'React',
              'Next.js',
              'TypeScript',
              'JavaScript',
              'HTML',
              'CSS',
              'Tailwind CSS',
              'Framer Motion',
              'Redux'
            ]"
            title="Frontend Development"
          ></lib-skill>
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {}
