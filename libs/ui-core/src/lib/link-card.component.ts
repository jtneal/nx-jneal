import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  selector: 'lib-link-card',
  imports: [CardComponent, CommonModule],
  styles: `
    .jneal-link-card {
      display: block;
      height: 100%;
      transition: transform 0.2s ease-out;

      &:hover {
        transform: translateY(-5px);
      }

      lib-card {
        height: 100%;
      }
    }
  `,
  template: `
    <a class="jneal-link-card" [href]="link()" rel="noopener noreferrer" target="_blank">
      <lib-card [image]="image()" [imageSize]="imageSize()" [subtitle]="subtitle()" [title]="title()">
        <ng-content></ng-content>
      </lib-card>
    </a>
  `,
})
export class LinkCardComponent extends CardComponent {
  public link = input.required<string>();
}
