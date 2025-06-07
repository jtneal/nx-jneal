import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PillComponent } from './pill.component';

@Component({
  selector: 'lib-card',
  imports: [CommonModule, PillComponent],
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    .jneal-card {
      background: var(--background-card);
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

      .with-badge {
        display: flex;
        justify-content: space-between;
      }
    }
  `,
  template: `
    <article class="jneal-card">
      @if (image()) {
        <img [alt]="title()" class="jneal-card-image" [class.small]="imageSize() === 'small'" [src]="image()" />
      }
      <div class="jneal-card-content">
        <div [class.with-badge]="badge()">
          <header>
            <h4>{{ title() }}</h4>
            @if (subtitle()) {
              <p class="text-small">{{ subtitle() }}</p>
            }
          </header>
          @if (badge()) {
            <aside>
              <lib-pill theme="bright">{{ badge() }}</lib-pill>
            </aside>
          }
        </div>
        <ng-content></ng-content>
      </div>
    </article>
  `,
})
export class CardComponent {
  public badge = input<string>();
  public image = input<string>();
  public imageSize = input<'small' | 'large'>('large');
  public subtitle = input<string>();
  public title = input.required<string>();
}
