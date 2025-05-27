import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-research',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  styles: `
    .card {
      height: initial;
    }

    img {
      border-radius: 0.5rem;
      height: 100%;
      object-fit: cover;
    }
  `,
  template: `
    <section class="sub-page" id="research">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon svgIcon="jneal_ufo"></mat-icon>UAP/UFO Research</h2>
        <div class="columns columns-2 triple-spaced">
          <main>
            <p>
              My interest in Unidentified Aerial Phenomena (UAP) has taken me around the world to investigate sightings
              and meet with researchers, witnesses, and experts in the field.
            </p>
            <article class="card double-spaced">
              <h3>Historical Documentation</h3>
              <p class="text-small quarter-spaced">Ancient records of unexplained aerial phenomena</p>
              <p class="highlight double-spaced">
                Throughout my travels, I've studied ancient Egyptian hieroglyphs, medieval manuscripts, and indigenous
                artwork that appears to depict aerial phenomena similar to modern UAP reports.
              </p>
            </article>
            <article class="card double-spaced">
              <h3>Modern Investigations</h3>
              <p class="text-small quarter-spaced">Scientific approaches to UAP research</p>
              <p class="highlight double-spaced">
                I follow the work of organizations like UAPx and the Galileo Project, which apply rigorous scientific
                methodologies to the study of unexplained aerial phenomena.
              </p>
            </article>
            <article class="card double-spaced">
              <h3>Hotspot Locations</h3>
              <p class="text-small quarter-spaced">Areas with frequent UAP activity</p>
              <p class="highlight double-spaced">
                My travels have taken me to known UAP hotspots including Hessdalen Valley in Norway, Skinwalker Ranch in
                Utah, and areas around military installations in the southwestern United States.
              </p>
            </article>
            <article class="card double-spaced">
              <h3>Witness Interviews</h3>
              <p class="text-small quarter-spaced">First-hand accounts</p>
              <p class="highlight double-spaced">
                I've conducted interviews with military personnel, pilots, and civilians who have encountered
                unexplained phenomena, documenting their experiences with an open but critical mindset.
              </p>
            </article>
          </main>
          <aside>
            <img
              alt="photo of Milky Way galaxy"
              src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=2078&auto=format&fit=crop"
            />
          </aside>
        </div>
        <div class="columns columns-3 double-spaced">
          <article class="card">
            <h3>Graham Hancock</h3>
            <p class="text-small quarter-spaced">Alternative Archaeology</p>
            <p class="highlight double-spaced">
              Inspired by Graham Hancock's work on ancient civilizations and their potential connections to non-human
              intelligence throughout history.
            </p>
          </article>
          <article class="card">
            <h3>Knights Templar</h3>
            <p class="text-small quarter-spaced">Historical Mystery</p>
            <p class="highlight double-spaced">
              Exploring the mysteries surrounding the Knights Templar and their rumored discoveries during the Crusades.
            </p>
          </article>
          <article class="card">
            <h3>Paranormal Research</h3>
            <p class="text-small quarter-spaced">Beyond the Physical</p>
            <p class="highlight double-spaced">
              Investigating the potential connections between UAP phenomena and other paranormal experiences reported
              throughout human history.
            </p>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class ResearchComponent {}
