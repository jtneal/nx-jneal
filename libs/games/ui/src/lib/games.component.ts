import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LinkCardComponent } from '@nx-jneal/ui-core';
import { GameSection } from '@nx-jneal/util-games';

@Component({
  selector: 'lib-games',
  imports: [CommonModule, LinkCardComponent, MatIconModule],
  template: `
    <section class="sub-page-large triple-spaced" id="games">
      <div class="container column">
        <h2 class="icon-heading"><mat-icon [svgIcon]="games().icon"></mat-icon>{{ games().title }}</h2>
        @for (category of games().categories; track $index) {
          <h3 class="text-larger triple-spaced">{{ category.title }}</h3>
          <div class="columns columns-4 triple-spaced">
            @for (game of category.games; track $index) {
              <lib-link-card
                [image]="game.image"
                imageSize="small"
                [link]="game.link"
                subtitle="{{ game.genre }} by {{ game.developer }}"
                [title]="game.title"
              ></lib-link-card>
            }
          </div>
        }
      </div>
    </section>
  `,
})
export class GamesComponent {
  public games = input.required<GameSection>();
}
