import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface Skill {
  tech: SkillRated[];
  title: string;
}

export interface SkillRated {
  name: string;
  rating: RatingEnum;
}

export enum RatingEnum {
  BEGINNER = 1,
  PROFICIENT = 2,
  EXPERT = 3,
}

@Component({
  selector: 'lib-skill',
  imports: [CommonModule, MatIconModule],
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
    <article class="card">
      <h3>{{ skill().title }}</h3>
      <p class="bubbles double-spaced">
        @for (item of skill().tech; track $index) {
          <span class="bubble text-tiny">
            {{ item.name }}
            @for (i of [1, 2, 3]; track i) {
              <span class="rating" [class.off]="i > item.rating">&bull;</span>
            }
          </span>
        }
      </p>
    </article>
  `,
})
export class SkillComponent {
  public skill = input.required<Skill>();
}
