import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-pill',
  imports: [CommonModule],
  styles: `
    :host {
      display: inline-block;
    }

    span {
      border-radius: 0.75rem;
      display: inline-block;
      font-weight: 600;
      padding: 0.1rem 0.5rem;
    }

    .dim {
      background-color: var(--background-alt);
      color: var(--foreground);
    }

    .bright {
      background-color: var(--foreground);
      color: var(--background);
    }
  `,
  template: `<span [class]="theme()" class="text-tiny"><ng-content></ng-content></span>`,
})
export class PillComponent {
  public theme = input.required<'dim' | 'bright'>();
}
