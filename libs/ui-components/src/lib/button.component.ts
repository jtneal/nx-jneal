import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-button',
  imports: [CommonModule, RouterModule],
  styles: `
    :host {
      display: inline-block;
      width: 100%;
    }

    a {
      align-items: center;
      background-color: var(--background);
      border: 1px solid var(--background-muted);
      border-radius: 0.5rem;
      color: var(--foreground);
      display: flex;
      font-weight: 500;
      gap: 0.75rem;
      justify-content: center;
      padding: 0.5rem 1rem;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: var(--background-muted);
      }
    }

    svg {
      height: 1rem;
      width: 1rem;
    }
  `,
  template: `
    @if (external()) {
      <!-- prettier-ignore -->
      <a class="text-small" href="#" rel="noopener noreferrer" target="_blank">
        {{ text() }}
        @if (icon() === 'open_in_new') {
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link mr-2 h-4 w-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
        } @else if(icon() === 'github') {
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github mr-2 h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        }
      </a>
    } @else {
      <a class="text-small" [routerLink]="[link]"><ng-content></ng-content></a>
    }
  `,
})
export class ButtonComponent {
  public external = input.required<boolean>();
  public icon = input.required<'open_in_new' | 'github'>();
  public link = input.required<string>();
  public text = input.required<string>();
}
