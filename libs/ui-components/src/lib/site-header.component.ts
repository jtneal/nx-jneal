import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DarkModeToggleComponent } from './dark-mode-toggle.component';

@Component({
  selector: 'lib-site-header',
  imports: [CommonModule, DarkModeToggleComponent, MatIconModule, RouterModule],
  styles: `
    header {
      background-color: var(--background);
      border-bottom: 1px solid var(--background-muted);
      position: fixed;
      width: 100%;
      z-index: 100;
    }

    nav {
      align-items: center;
      display: flex;
      font-weight: 500;
      gap: 1.5rem;

      :first-child {
        color: var(--foreground);
        font-size: 1.25rem;
        font-weight: 700;
      }

      .active {
        color: var(--foreground);
      }
    }
  `,
  template: `
    <header>
      <div class="container">
        <nav class="text-small">
          <a routerLink="/">JNeal</a>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
          <a routerLink="/codes" routerLinkActive="active">JNealCodes</a>
          <a routerLink="/travels" routerLinkActive="active">JNealTravels</a>
          <a routerLink="/games" routerLinkActive="active">JNealGames</a>
        </nav>
        <lib-dark-mode-toggle></lib-dark-mode-toggle>
      </div>
    </header>
  `,
})
export class SiteHeaderComponent {}
