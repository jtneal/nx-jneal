import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DarkModeToggleComponent } from '@nx-jneal/ui-core';

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
      flex-wrap: wrap;
      font-weight: 500;
      gap: 0.5rem 1.5rem;

      :first-child {
        color: var(--foreground);
        font-weight: 700;
      }

      .active {
        color: var(--foreground);

        &.red {
          color: var(--red-dark);
        }

        &.blue {
          color: var(--blue-dark);
        }

        &.green {
          color: var(--green-dark);
        }
      }
    }
  `,
  template: `
    <header>
      <div class="container">
        <nav class="text-small">
          <a class="text-large" routerLink="/">JNeal</a>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
          <a class="red" routerLink="/codes" routerLinkActive="active">JNealCodes</a>
          <a class="blue" routerLink="/travels" routerLinkActive="active">JNealTravels</a>
          <a class="green" routerLink="/games" routerLinkActive="active">JNealGames</a>
        </nav>
        <lib-dark-mode-toggle></lib-dark-mode-toggle>
      </div>
    </header>
  `,
})
export class SiteHeaderComponent {}
