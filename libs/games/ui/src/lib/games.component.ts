import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LinkCardComponent } from '@nx-jneal/ui-core';
import { Game } from '@nx-jneal/util-games';

@Component({
  selector: 'lib-games',
  imports: [CommonModule, LinkCardComponent, MatIconModule],
  template: `
    <section class="sub-page-large triple-spaced" id="games">
      <div class="container column">
        <h2 class="icon-heading"><mat-icon svgIcon="jneal_game"></mat-icon>My Games</h2>
        <h3 class="text-larger triple-spaced">Recently Played</h3>
        <div class="columns columns-4 triple-spaced">
          @for (game of recent(); track $index) {
            <lib-link-card
              [image]="game.image"
              imageSize="small"
              [link]="game.link"
              subtitle="{{ game.genre }} by {{ game.developer }}"
              [title]="game.title"
            ></lib-link-card>
          }
        </div>
        <h3 class="text-larger triple-spaced">Past Favorites</h3>
        <div class="columns columns-4 triple-spaced">
          @for (game of past(); track $index) {
            <lib-link-card
              [image]="game.image"
              imageSize="small"
              [link]="game.link"
              subtitle="{{ game.genre }} by {{ game.developer }}"
              [title]="game.title"
            ></lib-link-card>
          }
        </div>
      </div>
    </section>
  `,
})
export class GamesComponent {
  public past = input.required<Game[]>();
  public recent = input.required<Game[]>();
}
