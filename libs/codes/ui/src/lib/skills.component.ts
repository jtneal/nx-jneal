import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '@nx-jneal/ui-core';
import { Skill } from '@nx-jneal/util-codes';

@Component({
  selector: 'lib-skills',
  imports: [CardComponent, CommonModule, MatIconModule],
  styles: `
    .bubbles {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem 0.3rem;
    }

    .bubble {
      background-color: var(--background-muted);
      border-radius: 1rem;
      color: var(--foreground);
      display: inline-block;
      font-weight: 600;
      line-height: 0.8rem;
      padding: 0.25rem 0.5rem;

      .rating {
        font-size: 1.25rem;
        transform: scale(0.5);

        &:first-child {
          margin-left: 0.3rem;
        }

        &.off {
          color: var(--background-ter);
        }
      }
    }
  `,
  template: `
    <section class="sub-page" id="skills">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon svgIcon="jneal_tech"></mat-icon>Skills &amp; Technologies</h2>
        <div class="columns columns-2 triple-spaced">
          @for (skill of skills(); track $index) {
            <lib-card [title]="skill.title">
              <p class="bubbles double-spaced">
                @for (item of skill.tech; track $index) {
                  <span class="bubble text-tiny">
                    {{ item.name }}
                    @for (i of [1, 2, 3]; track i) {
                      <span class="rating" [class.off]="i > item.rating">&bull;</span>
                    }
                  </span>
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
  public skills = input.required<Skill[]>();
}
