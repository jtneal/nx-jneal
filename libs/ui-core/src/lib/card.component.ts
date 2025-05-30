import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-card',
  imports: [CommonModule],
  styles: `
    :host {
      display: block;
    }

    .jneal-card {
      border: 1px solid var(--background-muted);
      border-radius: 0.5rem;
      height: 100%;
      overflow: hidden;

      &:hover {
        .jneal-card-image {
          transform: scale(1.05);
        }
      }
    }

    .jneal-card-image {
      border-radius: 0.5rem 0.5rem 0 0;
      height: 12rem;
      object-fit: cover;
      transition: transform 0.2s ease-out;
      width: 100%;

      &.small {
        height: 8rem;
      }
    }

    .jneal-card-content {
      padding: 1.5rem;
    }
  `,
  template: `
    <article class="jneal-card">
      @if (image()) {
        <img [alt]="title()" class="jneal-card-image" [class.small]="imageSize() === 'small'" [src]="image()" />
      }
      <div class="jneal-card-content">
        <h4>{{ title() }}</h4>
        @if (subtitle()) {
          <p class="text-small">{{ subtitle() }}</p>
        }
        <ng-content></ng-content>
      </div>
    </article>
  `,
})
export class CardComponent {
  public image = input<string>();
  public imageSize = input<'small' | 'large'>('large');
  public subtitle = input<string>();
  public title = input.required<string>();
}
