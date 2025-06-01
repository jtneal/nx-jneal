import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent, PillComponent } from '@nx-jneal/ui-core';
import { SkillSection } from '@nx-jneal/util-codes';

@Component({
  selector: 'lib-skills',
  imports: [CardComponent, CommonModule, MatIconModule, PillComponent],
  styles: `
    .bubbles {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem 0.3rem;
    }

    .rating {
      font-size: 1rem;
      line-height: 1.3;

      &:first-child {
        margin-left: 0.3rem;
      }

      &.off {
        color: var(--background-muted);
      }
    }
  `,
  template: `
    <section class="sub-page" id="skills">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon [svgIcon]="skills().icon"></mat-icon>{{ skills().title }}</h2>
        <div class="columns columns-2 triple-spaced">
          @for (card of skills().cards; track $index) {
            <lib-card [title]="card.title">
              <p class="bubbles double-spaced">
                @for (skill of card.skills; track $index) {
                  <lib-pill theme="dim">
                    {{ skill.name }}
                    @for (i of [1, 2, 3]; track i) {
                      <span class="rating" [class.off]="i > skill.rating">&bull;</span>
                    }
                  </lib-pill>
                }
              </p>
            </lib-card>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  public skills = input.required<SkillSection>();
}
