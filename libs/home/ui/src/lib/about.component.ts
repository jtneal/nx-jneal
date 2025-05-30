import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-about',
  imports: [CommonModule],
  styles: `
    section {
      background-color: var(--background-alt);
      padding: 3rem 0;
    }

    .container {
      gap: 4rem;
    }

    article,
    aside {
      width: 50%;
    }

    p {
      color: var(--foreground-muted);
    }

    img {
      border-radius: 0.75rem;
      height: 100%;
      max-width: 100%;
      object-fit: cover;
      width: 100%;
    }
  `,
  template: `
    <section>
      <div class="container">
        <article>
          <h2 class="big">About Me</h2>
          <p class="text-large single-spaced">
            I've been passionate about technology for as long as I can remember - from grade school computer class, to
            building my first website at 13, and landing my first paid gig at 19. Coding has been a creative constant
            ever since.
          </p>
          <p class="text-large single-spaced">
            I've been gaming since I got the NES at age 5. Today, I'm a dedicated PC gamer drawn to open-world
            experiences and loot-driven games like Destiny 2 and Diablo 4.
          </p>
          <p class="text-large single-spaced">
            Traveling is a spiritual pursuit for me. My fondest childhood memories are from trips I took. My interests
            in UAPs and consciousness began to intertwine with those journeys in unexpected ways. I now live my life in
            a way that reflects my belief in the power of positive thinking.
          </p>
        </article>
        <aside>
          <img
            alt="photo of JNeal"
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
          />
        </aside>
      </div>
    </section>
  `,
})
export class AboutComponent {}
