import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
        border-color: var(--white);
        color: var(--vibrant-end) !important;
        width: fit-content;
      }
    }

    mat-icon {
      transform: scale(0.9);
    }
  `,
  template: `
    @if (external()) {
      <a [class]="theme()" class="text-small" href="#" mat-flat-button rel="noopener noreferrer" target="_blank">
        {{ text() }}
        <mat-icon iconPositionEnd [svgIcon]="icon()"></mat-icon>
      </a>
    } @else {
      <a [class]="theme()" class="text-small" [href]="link()" mat-flat-button>
        {{ text() }}
        <mat-icon iconPositionEnd [svgIcon]="icon()"></mat-icon>
      </a>
    }
  `,
})
export class ButtonComponent {
  public external = input.required<boolean>();
  public icon = input.required<string>();
  public link = input.required<string>();
  public text = input.required<string>();
  public theme = input<'dim' | 'bright'>('dim');
}
