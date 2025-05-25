import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PromoComponent } from './promo.component';

@Component({
  selector: 'lib-personas',
  imports: [CommonModule, PromoComponent],
  styles: `
    section {
      background-color: var(--background-alt);
      padding: 3rem 0;
      scroll-margin-top: 4rem;
    }

    .container {
      align-items: center;
    }

    .promos {
      display: flex;
      gap: 1.5rem;
    }
  `,
  template: `
    <section id="personas">
      <div class="container column">
        <h2 class="huge">My Personas</h2>
        <p class="text-large double-spaced">
          I've created these personas to separate my wildly varying interests and provide focused content for different
          communities.
        </p>
        <div class="promos triple-spaced">
          <lib-promo
            description="Software engineering, programming tutorials, and tech insights."
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
            link="/codes"
            theme="red"
            title="JNealCodes"
          ></lib-promo>
          <lib-promo
            description="Travel adventures, spirituality, and explorations of UAP/UFO phenomena."
            image="https://images.unsplash.com/photo-1608546043931-6c9678ea9feb?q=80&w=2069&auto=format&fit=crop"
            link="/travels"
            theme="blue"
            title="JNealTravels"
          ></lib-promo>
          <lib-promo
            description="Gaming experiences, setups, and discussions about my favorite titles."
            image="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2057&auto=format&fit=crop"
            link="/games"
            theme="green"
            title="JNealGames"
          ></lib-promo>
        </div>
      </div>
    </section>
  `,
})
export class PersonasComponent {}
