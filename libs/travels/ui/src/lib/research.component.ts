import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '@nx-jneal/ui-core';

@Component({
  selector: 'lib-research',
  imports: [CardComponent, CommonModule, MatButtonModule, MatIconModule],
  styles: `
    ::ng-deep #research {
      .reset-card-height .jneal-card {
        height: initial !important;
      }
    }

    .photo-link {
      height: 100%;
    }
  `,
  template: `
    <section class="sub-page" id="research">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon svgIcon="jneal_uap"></mat-icon>UAP Research</h2>
        <div class="reset-card-height columns columns-2 triple-spaced">
          <div>
            <p>
              I've been fascinated by the mysteries of the universe and the possibility of non-human intelligence (NHI)
              for as long as I can remember. My research into Unidentified Anomalous Phenomena (UAP) and related topics
              has been a lifelong passion, blending history, religion, science, and the unexplained.
            </p>
            <lib-card
              class="double-spaced"
              subtitle="Ancient records of unexplained anomalous phenomena"
              title="Historical Documentation"
            >
              <p class="double-spaced">
                I'm deeply fascinated by ancient civilizations - their myths, mysteries, and the tantalizing possibility
                of connections to non-human intelligence. While I've spent the most time studying the ancient Egyptians,
                my curiosity also draws me to the Sumerians, the enigmatic Taş Tepeler culture, the Maya, the Olmecs,
                the Paracas people, and many others that shaped humanity's early story. What captivates me most is the
                idea of a forgotten chapter in our history - a lost advanced civilization, as explored in the writings
                of Graham Hancock and others who challenge conventional timelines.
              </p>
            </lib-card>
            <lib-card
              class="double-spaced"
              subtitle="Recent records of unexplained anomalous phenomena"
              title="Recent History"
            >
              <p class="highlight double-spaced">
                Richard Dolan's <em>UFOs and the National Security State</em> series provided me with a comprehensive
                foundation for understanding UAP phenomena through a historical and geopolitical lens. His research has
                deeply shaped my perspective on how governments have perceived, documented, and responded to these
                encounters throughout the 20th and 21st centuries. I also closely follow the work of Robert Hastings,
                particularly his book <em>UFOs & Nukes</em>, which delves into the unsettling correlation between UAP
                activity and nuclear weapons sites - raising profound questions about the intersection of these
                phenomena with national and global security.
              </p>
            </lib-card>
            <lib-card
              class="double-spaced"
              subtitle="Scientific approaches to UAP research"
              title="Modern Investigations"
            >
              <p class="highlight double-spaced">
                I closely follow the work of organizations such as Skywatcher, OpenNHI, CUFOS, MUFON, UAPx, the
                Scientific Coalition for UAP Studies, and the Galileo Project - groups dedicated to the scientific
                investigation of unexplained anomalous phenomena. Their commitment to data collection, rigorous
                analysis, and thoughtful engagement with both military and civilian witnesses aligns with my belief that
                a methodical, evidence-based approach is essential to advancing our understanding of these mysteries.
              </p>
            </lib-card>
          </div>
          <aside>
            <a class="photo-link" href="/images/second-bookshelf.jpg" target="_blank">
              <img alt="photo of my second bookshelf" src="/images/second-bookshelf.jpg" />
            </a>
          </aside>
        </div>
        <div class="columns columns-2 double-spaced">
          <lib-card subtitle="Alternative Archaeology" title="Religious Connections">
            <p class="highlight double-spaced">
              I'm particularly inspired by the work of individuals like Chris Bledsoe, whose book
              <em>UFO of God</em> explores the profound intersection between UAP phenomena, religious experiences, and
              spiritual belief systems. Similarly, D.W. Pasulka's <em>American Cosmic</em> offers a compelling
              examination of how technology, faith, and the human search for meaning converge in the context of UAPs and
              the possibility of non-human intelligence. Both works challenge traditional narratives and invite deeper
              contemplation of the metaphysical dimensions of these encounters.
            </p>
          </lib-card>
          <lib-card subtitle="Historical Mystery" title="The Knights Templar">
            <p class="highlight double-spaced">
              Some of my most compelling research has centered on the Knights Templar - a medieval order cloaked in
              secrecy, legend, and enduring mystery. Their abrupt dissolution in the early 14th century, along with
              persistent rumors of their connection to ancient knowledge and sacred relics, has given rise to a wealth
              of speculation about their true mission and ultimate fate. The writings of authors such as Timothy Hogan
              and Scott Wolter have been particularly influential in shaping my understanding of the Templars'
              historical importance and their lasting imprint on modern esoteric and spiritual traditions.
            </p>
          </lib-card>
        </div>
      </div>
    </section>
  `,
})
export class ResearchComponent {}
