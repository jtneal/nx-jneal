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
      height: 300px;
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
            I'm a multifaceted individual with a passion for technology, exploration, and gaming. My diverse interests
            have led me to create distinct personas that allow me to connect with different communities while
            maintaining my authentic self.
          </p>
          <p class="text-large single-spaced">
            Whether I'm coding a new project, exploring ancient ruins, or diving into a new game, I bring the same level
            of enthusiasm and dedication to everything I do.
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
