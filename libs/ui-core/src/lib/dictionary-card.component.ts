import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CardComponent } from './card.component';

export interface Dictionary {
  key: string;
  value: string;
}

@Component({
  selector: 'lib-dictionary-card',
  imports: [CardComponent, CommonModule],
  styles: `
    .dictionary {
      align-items: center;
      display: flex;
      justify-content: space-between;

      span {
        &:first-child {
          color: var(--foreground);
          font-weight: 500;
        }
      }
    }
  `,
  template: `
    <lib-card [image]="image()" [imageSize]="imageSize()" [subtitle]="subtitle()" [title]="title()">
      <div class="double-spaced">
        @for (item of dictionary(); track $index) {
          <p class="dictionary quarter-spaced">
            <span>{{ item.key }}</span>
            <span class="text-small">{{ item.value }}</span>
          </p>
        }
      </div>
    </lib-card>
  `,
})
export class DictionaryCardComponent extends CardComponent {
  public dictionary = input.required<Dictionary[]>();
}
