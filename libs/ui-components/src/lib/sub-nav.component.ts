import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
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
      background-color: var(--background);
      border-bottom: 1px solid var(--background-muted);
      border-top: 1px solid var(--background-muted);
      padding: 0.5rem 0;
      position: sticky;
      top: 4rem;
    }

    .container {
      gap: 1.5rem;
      justify-content: left;
    }

    a {
      align-items: center;
      display: flex;
      font-weight: 500;
    }

    mat-icon {
      transform: scale(0.75);
    }
  `,
  template: `
    <nav>
      <div class="container">
        @for (link of links(); track $index) {
          <a class="text-small" [href]="link.link">
            <mat-icon [fontIcon]="link.icon"></mat-icon>
            <span>{{ link.title }}</span>
          </a>
        }
      </div>
    </nav>
  `,
})
export class SubNavComponent {
  public links = input.required<SubNavLink[]>();
}
