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
        color: var(--vibrant-end) !important;
        width: fit-content;
      }
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
  public external = input.required<boolean>();
  public icon = input.required<'open_in_new' | 'github' | 'arrow_forward'>();
  public link = input.required<string>();
  public text = input.required<string>();
  public theme = input<'dim' | 'bright'>('dim');
}
