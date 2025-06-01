import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '@nx-jneal/ui-core';
import { ResearchSection } from '@nx-jneal/util-travels';

@Component({
  selector: 'lib-research',
  imports: [CardComponent, CommonModule, MatButtonModule, MatIconModule],
  template: `
    <section class="sub-page" id="research">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon svgIcon="jneal_uap"></mat-icon>UAP Research</h2>
        <p class="triple-spaced">
          I've been fascinated by the mysteries of the universe and the possibility of non-human intelligence (NHI) for
          as long as I can remember. My research into Unidentified Anomalous Phenomena (UAP) and related topics has been
          a lifelong passion, blending history, religion, science, and the unexplained.
        </p>
        <div class="columns columns-2 triple-spaced">
          <div>
            @for (card of research().cards; track $index) {
              @if ($index < 3) {
                <lib-card [class.double-spaced]="$index > 0" [subtitle]="card.subtitle" [title]="card.title">
                  <p class="double-spaced">{{ card.description }}</p>
                </lib-card>
              }
            }
          </div>
          <aside>
            <a class="photo-link" href="/images/second-bookshelf.jpg" target="_blank">
              <img alt="photo of my second bookshelf" src="/images/second-bookshelf.jpg" />
            </a>
          </aside>
        </div>
        <div class="columns columns-2 double-spaced">
          @for (card of research().cards; track $index) {
            @if ($index >= 3) {
              <lib-card [subtitle]="card.subtitle" [title]="card.title">
                <p class="double-spaced">{{ card.description }}</p>
              </lib-card>
            }
          }
        </div>
      </div>
    </section>
  `,
})
export class ResearchComponent {
  public research = input.required<ResearchSection>();
}
