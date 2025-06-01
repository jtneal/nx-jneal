import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DictionaryCardComponent } from '@nx-jneal/ui-core';
import { SetupSection } from '@nx-jneal/util-games';

@Component({
  selector: 'lib-setup',
  imports: [CommonModule, DictionaryCardComponent, MatButtonModule, MatIconModule],
  template: `
    <section class="sub-page-large" id="setup">
      <div class="container column">
        <h2 class="icon-heading"><mat-icon svgIcon="jneal_pc"></mat-icon>{{ setup().title }}</h2>
        <p class="double-spaced">
          {{ setup().description }}
        </p>
        @for (article of setup().articles; track $index) {
          <div class="columns columns-2 triple-spaced">
            <lib-dictionary-card [dictionary]="article.dictionary" [title]="article.title"></lib-dictionary-card>
            <aside>
              <a class="photo-link" [href]="article.image" target="_blank">
                <img [alt]="article.title" [src]="article.image" />
              </a>
            </aside>
          </div>
        }
      </div>
    </section>
  `,
})
export class SetupComponent {
  public setup = input.required<SetupSection>();
}
