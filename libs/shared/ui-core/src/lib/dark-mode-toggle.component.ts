import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-dark-mode-toggle',
  imports: [CommonModule, MatIconModule],
  styles: `
    button {
      align-items: center;
      background-color: var(--background-muted);
      border: none;
      border-radius: 1.25rem;
      color: var(--foreground);
      cursor: pointer;
      display: flex;
      gap: 0.75rem;
      margin: 0.75rem 0;
      padding: 0.5rem;
      position: relative;

      mat-icon {
        transform: scale(0.75);

        &:last-child {
          left: calc(100% - 2rem);
          position: absolute;
          transform: scale(1.25);
          transition: left 0.2s ease-out;
        }

        &.dark-mode {
          left: 0.5rem;
        }
      }
    }
  `,
  template: `
    <button (click)="toggleDarkMode()">
      <mat-icon svgIcon="jneal_sun"></mat-icon>
      <mat-icon svgIcon="jneal_moon"></mat-icon>
      <mat-icon [class.dark-mode]="darkMode" fontIcon="circle"></mat-icon>
    </button>
  `,
})
export class DarkModeToggleComponent {
  public darkMode = true;
  private readonly document = inject(DOCUMENT);

  public toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.document.documentElement.classList.toggle('dark');
  }
}
