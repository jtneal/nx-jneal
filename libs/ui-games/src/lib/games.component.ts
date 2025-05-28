import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-games',
  imports: [CommonModule, MatIconModule],
  styles: `
    .card {
      height: initial;

      img {
        height: 10rem;
      }
    }
  `,
  template: `
    <section class="sub-page-large triple-spaced" id="games">
      <div class="container column">
        <h2 class="icon-heading"><mat-icon svgIcon="jneal_game"></mat-icon>My Games</h2>
        <h3 class="text-larger triple-spaced">Recently Played</h3>
        <div class="columns columns-4 triple-spaced">
          <article class="card with-photo">
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
            />
            <div class="card-content">
              <h4>Diablo 4</h4>
              <p class="text-small">Action RPG by Blizzard Entertainment</p>
            </div>
          </article>
          <article class="card with-photo">
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2065&auto=format&fit=crop"
            />
            <div class="card-content">
              <h4>The First Descendant</h4>
              <p class="text-small">Free-to-play co-op looter shooter</p>
            </div>
          </article>
          <article class="card with-photo">
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
            />
            <div class="card-content">
              <h4>New World</h4>
              <p class="text-small">MMORPG by Amazon Games</p>
            </div>
          </article>
          <article class="card with-photo">
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop"
            />
            <div class="card-content">
              <h4>Destiny 2</h4>
              <p class="text-small">FPS MMO by Bungie</p>
            </div>
          </article>
        </div>
        <h3 class="text-larger triple-spaced">Past Favorites</h3>
        <div class="columns columns-4 triple-spaced">
          <article class="card with-photo">
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2057&auto=format&fit=crop"
            />
            <div class="card-content">
              <h4>Halo</h4>
              <p class="text-small">FPS series by Microsoft</p>
            </div>
          </article>
          <article class="card with-photo">
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop"
            />
            <div class="card-content">
              <h4>Call of Duty</h4>
              <p class="text-small">FPS series by Activision</p>
            </div>
          </article>
          <article class="card with-photo">
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=2069&auto=format&fit=crop"
            />
            <div class="card-content">
              <h4>Star Wars: The Old Republic</h4>
              <p class="text-small">MMORPG by BioWare</p>
            </div>
          </article>
          <article class="card with-photo">
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1947&auto=format&fit=crop"
            />
            <div class="card-content">
              <h4>Final Fantasy XIV</h4>
              <p class="text-small">MMORPG by Square Enix</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class GamesComponent {}
