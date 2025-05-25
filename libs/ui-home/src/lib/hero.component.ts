import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-hero',
  imports: [CommonModule, MatButtonModule, MatIconModule],
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

      span {
        animation: fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        display: inline-block;
        margin-right: 1rem;
        opacity: 0;
        transform: translateY(20px);

        &:nth-child(1) {
          animation-delay: 0.04s;
        }

        &:nth-child(2) {
          animation-delay: 0.16s;
        }

        &:nth-child(3) {
          animation-delay: 0.28s;
        }
      }

      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: none;
        }
      }
    }

    p {
      color: rgb(255 255 255 / 0.9);
    }

    .button {
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
          <h1><span>Hi,</span><span>I'm</span><span>JNeal</span></h1>
          <p class="text-large single-spaced">
            Welcome to my digital home where I share my passions for coding, traveling, and gaming. I've created
            distinct personas to help you navigate the different facets of my interests.
          </p>
          <a class="button double-spaced" href="#personas" mat-flat-button>
            Explore My Personas <mat-icon fontIcon="arrow_forward" iconPositionEnd></mat-icon>
          </a>
        </article>
        <img alt="photo of JNeal" src="/images/photo-of-jneal.jpg" />
      </div>
    </section>
  `,
})
export class HeroComponent {}
