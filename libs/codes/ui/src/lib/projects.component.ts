import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent, CardComponent, PillComponent } from '@nx-jneal/ui-core';
import { ProjectSection } from '@nx-jneal/util-codes';

@Component({
  selector: 'lib-projects',
  imports: [ButtonComponent, CardComponent, CommonModule, MatIconModule, PillComponent],
  styles: `
    lib-pill {
      margin: 0.5rem 0.5rem 0 0;
    }
  `,
  template: `
    <section class="sub-page-large " id="projects">
      <div class="container column">
        <h2 class="icon-heading"><mat-icon [svgIcon]="projects().icon"></mat-icon>{{ projects().title }}</h2>
        <div class="columns columns-3 triple-spaced">
          @for (card of projects().cards; track $index) {
            <lib-card [image]="card.image" [title]="card.title">
              <p>
                @for (item of card.tech; track $index) {
                  <lib-pill theme="dim">{{ item }}</lib-pill>
                }
              </p>
              <p class="double-spaced">{{ card.description }}</p>
              <p class="columns columns-2 double-spaced">
                <lib-button [external]="true" icon="jneal_new" [link]="card.demo" text="Demo"></lib-button>
                <lib-button
                  [disabled]="card.code === ''"
                  [external]="true"
                  icon="jneal_git"
                  [link]="card.code"
                  text="Code"
                ></lib-button>
              </p>
            </lib-card>
          } @empty {
            <p>Stay tuned, I will begin adding some projects soon.</p>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  public projects = input.required<ProjectSection>();
}
