import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FancyFadeInDirective } from '@nx-jneal/ui-components';

@Component({
  selector: 'lib-hero',
  imports: [CommonModule, FancyFadeInDirective, MatButtonModule, MatIconModule],
  styles: `
    section {
      align-items: center;
      background-image: linear-gradient(
        to bottom right,
        var(--vibrant-start),
        var(--vibrant-middle),
        var(--vibrant-end)
      );
      display: flex;
      height: 100vh;
      padding-top: 4rem;
    }

    .container {
      gap: 4rem;
      width: 100%;
    }

    article {
      max-width: 600px;
    }

    h1 {
      color: var(--white);
    }

    p {
      color: rgb(255 255 255 / 0.9);
    }

    button {
      background-color: var(--white) !important;
      border-radius: 0.5rem;
      color: var(--vibrant-end) !important;
    }

    img {
      border: 0.5rem solid var(--navy);
      border-radius: 50%;
      width: 400px;
    }
  `,
  template: `
    <section>
      <div class="container">
        <article>
          <h1 libFancyFadeIn>Hi, I'm JNeal</h1>
          <p class="text-large single-spaced">
            Welcome to my digital home where I share my passions for coding, traveling, and gaming. I've created
            distinct personas to help you navigate the different facets of my interests.
          </p>
          <button class="double-spaced" (click)="scrollToPersonas()" mat-flat-button>
            Explore My Personas <mat-icon fontIcon="arrow_forward" iconPositionEnd></mat-icon>
          </button>
        </article>
        <img alt="photo of JNeal" src="/images/photo-of-jneal.jpg" />
      </div>
    </section>
  `,
})
export class HeroComponent {
  private readonly document = inject(DOCUMENT);

  public scrollToPersonas(): void {
    this.document.getElementById('personas')?.scrollIntoView({ behavior: 'smooth' });
  }
}
