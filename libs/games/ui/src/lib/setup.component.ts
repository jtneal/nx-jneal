import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Dictionary, DictionaryCardComponent } from '@nx-jneal/ui-core';

@Component({
  selector: 'lib-setup',
  imports: [CommonModule, DictionaryCardComponent, MatButtonModule, MatIconModule],
  template: `
    <section class="sub-page-large" id="setup">
      <div class="container column">
        <h2 class="icon-heading"><mat-icon svgIcon="jneal_pc"></mat-icon>My Gaming Setup</h2>
        <ng-content></ng-content>
        <div class="columns columns-2 triple-spaced">
          <lib-dictionary-card [dictionary]="specifications()" title="PC Specifications"></lib-dictionary-card>
          <aside>
            <a class="photo-link" href="/images/gaming-pc.jpg" target="_blank">
              <img alt="photo of my gaming pc" src="/images/gaming-pc.jpg" />
            </a>
          </aside>
        </div>
        <div class="columns columns-2 triple-spaced">
          <main>
            <lib-dictionary-card [dictionary]="peripherals()" title="Peripherals"></lib-dictionary-card>
          </main>
          <aside>
            <a class="photo-link" href="/images/gaming-setup.jpg" target="_blank">
              <img alt="photo of my gaming setup" src="/images/gaming-setup.jpg" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  `,
})
export class SetupComponent {
  public peripherals = input.required<Dictionary[]>();
  public specifications = input.required<Dictionary[]>();
}
