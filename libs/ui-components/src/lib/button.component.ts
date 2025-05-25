import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-button',
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  styles: `
    :host {
      display: inline-block;
      width: 100%;
    }

    a {
      background-color: var(--background) !important;
      border: 1px solid var(--background-muted);
      border-radius: 0.5rem;
      color: var(--foreground) !important;
      width: 100%;

      &:hover {
        background-color: var(--background-muted) !important;
      }

      &.bright {
        background-color: var(--white) !important;
        color: var(--vibrant-end) !important;
        width: fit-content;
      }
    }

    svg {
      height: 1rem;
      width: 1rem;
    }
  `,
  template: `
    @if (external()) {
      <a [class]="theme()" class="text-small" href="#" mat-flat-button rel="noopener noreferrer" target="_blank">
        {{ text() }}
        @if (icon() === 'open_in_new') {
          <mat-icon iconPositionEnd svgIcon="jneal_external"></mat-icon>
        } @else if (icon() === 'github') {
          <mat-icon iconPositionEnd svgIcon="jneal_github"></mat-icon>
        } @else if (icon() === 'arrow_forward') {
          <mat-icon fontIcon="arrow_forward" iconPositionEnd></mat-icon>
        }
      </a>
    } @else {
      <a [class]="theme()" class="text-small" mat-flat-button [routerLink]="[link]">
        {{ text() }}
        @if (icon() === 'open_in_new') {
          <mat-icon iconPositionEnd svgIcon="jneal_external"></mat-icon>
        } @else if (icon() === 'github') {
          <mat-icon iconPositionEnd svgIcon="jneal_github"></mat-icon>
        } @else if (icon() === 'arrow_forward') {
          <mat-icon fontIcon="arrow_forward" iconPositionEnd></mat-icon>
        }
      </a>
    }
  `,
})
export class ButtonComponent {
  public registry = inject(MatIconRegistry);
  public sanitizer = inject(DomSanitizer);

  public constructor() {
    const svgIcons: Record<string, string> = {
      external:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link mr-2 h-4 w-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>',
      github:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github mr-2 h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>',
    };

    for (const icon in svgIcons) {
      this.registry.addSvgIconLiteral(`jneal_${icon}`, this.sanitizer.bypassSecurityTrustHtml(svgIcons[icon]));
    }
  }

  public external = input.required<boolean>();
  public icon = input.required<'open_in_new' | 'github' | 'arrow_forward'>();
  public link = input.required<string>();
  public text = input.required<string>();
  public theme = input<'dim' | 'bright'>('dim');
}
