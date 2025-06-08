import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-promo',
  imports: [CommonModule, MatIconModule, RouterModule],
  styles: `
    a {
      border: 1px solid;
      border-radius: 0.5rem;
      display: block;
      height: 100%;
      overflow: hidden;
      transition: transform 0.2s ease-out;

      &:hover {
        transform: translateY(-5px);

        img {
          transform: scale(1.05);
        }
      }
    }

    .photo-container {
      height: 12rem;
      overflow: hidden;
    }

    img {
      border-radius: 0.5rem 0.5rem 0 0;
      transition: transform 0.2s ease-out;
      width: 100%;
    }

    .card-content {
      height: 100%;
      padding: 1.5rem;
    }

    p {
      margin: 0.75rem 0 1.5rem;

      &.button {
        display: flex;
        font-weight: 500;
        gap: 0.5rem;
        margin: 0;
        transition: transform 0.2s ease-out;
      }
    }

    a:hover p.button {
      transform: translateX(5px);
    }

    mat-icon {
      transform: scale(0.75);
    }

    ////////////////////////////////////////////////////////////////////////////
    // Red Theme
    ////////////////////////////////////////////////////////////////////////////

    a.red {
      border-color: var(--red-bright);

      article {
        background-color: var(--red-light);
      }

      &:hover article {
        background-color: var(--red-mid);
      }

      h3 {
        color: var(--red-dark);
      }

      p.button {
        color: var(--red-dark);
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    // Blue Theme
    ////////////////////////////////////////////////////////////////////////////

    a.blue {
      border-color: var(--blue-bright);

      article {
        background-color: var(--blue-light);
      }

      &:hover article {
        background-color: var(--blue-mid);
      }

      h3 {
        color: var(--blue-dark);
      }

      p.button {
        color: var(--blue-dark);
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    // Green Theme
    ////////////////////////////////////////////////////////////////////////////

    a.green {
      border-color: var(--green-bright);

      article {
        background-color: var(--green-light);
      }

      &:hover article {
        background-color: var(--green-mid);
      }

      h3,
      p.button {
        color: var(--green-dark);
      }
    }
  `,
  template: `
    <a [class]="theme()" [routerLink]="link()">
      <div class="photo-container"><img alt="photo representing {{ title() }}" [src]="image()" /></div>
      <article class="card-content">
        <h3>{{ title() }}</h3>
        <p>{{ description() }}</p>
        <p class="button">
          <span>Explore</span>
          <mat-icon svgIcon="jneal_next" iconPositionEnd></mat-icon>
        </p>
      </article>
    </a>
  `,
})
export class PromoComponent {
  public description = input.required<string>();
  public image = input.required<string>();
  public link = input.required<string>();
  public theme = input.required<'red' | 'green' | 'blue'>();
  public title = input.required<string>();
}
