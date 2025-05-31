import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-site-footer',
  imports: [CommonModule, MatIconModule],
  styles: `
    footer {
      border-top: 1px solid var(--background-muted);
      padding: 1.5rem 0;
    }

    nav {
      align-items: center;
      display: flex;
      gap: 1rem;
    }

    mat-icon {
      height: 1.25rem;
      width: 1.25rem;
    }
  `,
  template: `
    <footer>
      <div class="container">
        <p class="text-small">
          Copyright &copy; {{ year }} <a href="mailto:jason@jneal.com">JNeal</a>. All Rights Reserved.
        </p>
        <nav>
          <a href="https://x.com/JasonNeal" rel="noopener noreferrer" target="_blank">
            <mat-icon svgIcon="jneal_x"></mat-icon>
          </a>
          <a href="https://github.com/jtneal" rel="noopener noreferrer" target="_blank">
            <mat-icon svgIcon="jneal_git"></mat-icon>
          </a>
          <a href="https://www.linkedin.com/in/jasontneal" rel="noopener noreferrer" target="_blank">
            <mat-icon svgIcon="jneal_in"></mat-icon>
          </a>
        </nav>
      </div>
    </footer>
  `,
})
export class SiteFooterComponent {
  public readonly year = new Date().getFullYear();
}
