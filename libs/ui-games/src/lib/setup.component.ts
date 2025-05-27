import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-setup',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  styles: `
    .card {
      height: initial;

      &:hover .key-value span {
        color: var(--foreground);
      }
    }

    .key-value {
      display: flex;
      justify-content: space-between;

      span:first-child {
        color: var(--foreground);
        font-weight: 500;
      }
    }

    img {
      border-radius: 0.5rem;
      height: 100%;
      object-fit: cover;
    }
  `,
  template: `
    <section class="sub-page-large" id="setup">
      <div class="container column">
        <h2 class="icon-heading"><mat-icon svgIcon="jneal_pc"></mat-icon>My Gaming Setup</h2>
        <div class="columns columns-2 triple-spaced">
          <main>
            <p>
              I've built my gaming setup to provide the best experience for a variety of games. Here's what I'm
              currently using:
            </p>
            <article class="card double-spaced">
              <h3>PC Specifications</h3>
              <p class="key-value double-spaced"><span>CPU</span><span>AMD Ryzen 9 5900X</span></p>
              <p class="key-value quarter-spaced"><span>GPU</span><span>NVIDIA RTX 3080</span></p>
              <p class="key-value quarter-spaced"><span>RAM</span><span>32GB DDR4 3600MHz</span></p>
              <p class="key-value quarter-spaced"><span>Storage</span><span>2TB NVMe SSD</span></p>
            </article>
            <article class="card double-spaced">
              <h3>Peripherals</h3>
              <p class="key-value double-spaced"><span>Monitor</span><span>27" 1440p 165Hz</span></p>
              <p class="key-value quarter-spaced"><span>Keyboard</span><span>Mechnical RGB</span></p>
              <p class="key-value quarter-spaced"><span>Mouse</span><span>Wireless Gaming Mouse</span></p>
              <p class="key-value quarter-spaced"><span>Headset</span><span>Wireless 7.1 Surround Sound</span></p>
            </article>
          </main>
          <aside>
            <img
              alt="photo of my gaming setup"
              src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop"
            />
          </aside>
        </div>
      </div>
    </section>
  `,
})
export class SetupComponent {}
