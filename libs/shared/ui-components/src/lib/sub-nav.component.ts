import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface SubNavLink {
  icon: string;
  link: string;
  title: string;
}

@Component({
  selector: 'lib-sub-nav',
  imports: [CommonModule, MatIconModule],
  styles: `
    nav {
      background-color: var(--background-alt);
      border-bottom: 1px solid var(--background-muted);
      border-top: 1px solid var(--background-muted);
      box-shadow: 0 3px 6px rgb(0 0 0 / 0.5);
      padding: 0.5rem 0;
      position: sticky;
      top: 4rem;
      z-index: 100;
    }

    .container {
      gap: 1.5rem;
      justify-content: left;
      flex-wrap: wrap;
    }

    button {
      align-items: center;
      background-color: initial;
      border: none;
      color: var(--foreground-alt);
      cursor: pointer;
      display: flex;
      font-weight: 500;

      &:hover {
        color: var(--foreground);
      }
    }

    mat-icon {
      transform: scale(0.75);
    }
  `,
  template: `
    <nav>
      <div class="container">
        @for (link of links(); track $index) {
          <button class="text-small" (click)="scrollTo(link.link)">
            <mat-icon [svgIcon]="link.icon"></mat-icon>
            <span>{{ link.title }}</span>
          </button>
        }
      </div>
    </nav>
  `,
})
export class SubNavComponent {
  private readonly document = inject(DOCUMENT);
  public links = input.required<SubNavLink[]>();

  public scrollTo(id: string): void {
    this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
