import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent, FancyFadeInDirective } from '@nx-jneal/ui-core';
import { HeroSection } from '@nx-jneal/util-home';

@Component({
  selector: 'lib-hero',
  imports: [ButtonComponent, CommonModule, FancyFadeInDirective, MatButtonModule, MatIconModule],
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
      flex-direction: column;
      gap: 4rem;
      width: 100%;

      @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
      }
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

    img {
      border: 0.5rem solid var(--navy);
      border-radius: 50%;
      transition: transform 0.2s ease-out;
      width: 400px;

      &:hover {
        transform: scale(1.05);
      }
    }
  `,
  template: `
    <section>
      <div class="container">
        <article>
          <h1 libFancyFadeIn>{{ hero().title }}</h1>
          <p class="text-large single-spaced">
            {{ hero().description }}
          </p>
          <lib-button
            class="double-spaced"
            (click)="scrollToPersonas($event)"
            [external]="false"
            icon="jneal_next"
            link="#personas"
            [text]="hero().button"
            theme="bright"
          ></lib-button>
        </article>
        <img [alt]="hero().title" [src]="hero().image" />
      </div>
    </section>
  `,
})
export class HeroComponent {
  public hero = input.required<HeroSection>();
  private readonly document = inject(DOCUMENT);

  public scrollToPersonas(event: Event): void {
    event.preventDefault();
    this.document.getElementById('personas')?.scrollIntoView({ behavior: 'smooth' });
  }
}
