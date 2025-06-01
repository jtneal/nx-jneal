import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { AboutSection } from '@nx-jneal/util-home';

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
          <h2 class="big">{{ about().title }}</h2>
          @for (description of about().description; track $index) {
            <p class="text-large single-spaced">
              {{ description }}
            </p>
          }
        </article>
        <aside>
          <a class="photo-link" [href]="about().image" target="_blank">
            <img [alt]="about().title" [src]="about().image" />
          </a>
        </aside>
      </div>
    </section>
  `,
})
export class AboutComponent {
  public about = input.required<AboutSection>();
}
