import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface Photo {
  link: string;
  src: string;
  title: string;
}

@Component({
  selector: 'lib-photos',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  styles: `
    button {
      background-color: var(--background) !important;
      border: 1px solid var(--background-muted);
      color: var(--foreground) !important;
      margin-bottom: 2rem;
      margin-right: 0.75rem;

      &:hover {
        background-color: var(--background-muted) !important;
      }

      &.selected {
        background-color: var(--background-muted) !important;
      }
    }

    a {
      border-radius: 0.5rem;
      display: block;
      height: 300px;
      position: relative;
      overflow: hidden;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        transform: scale(1.03);

        caption {
          opacity: 1;
        }
      }
    }

    img {
      height: 100%;
      position: absolute;
      width: 100%;
    }

    caption {
      background-image: linear-gradient(transparent, rgb(0 0 0 / 0.7));
      bottom: 0;
      font-weight: 500;
      height: 50%;
      opacity: 0;
      position: absolute;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      width: 100%;

      span {
        bottom: 1.1rem;
        display: block;
        left: 1.5rem;
        position: absolute;
      }
    }
  `,
  template: `
    <section class="sub-page-large" id="photos">
      <div class="container column">
        <h2 class="icon-heading"><mat-icon svgIcon="jneal_cam"></mat-icon>Photo Gallery</h2>
        <p class="albums double-spaced">
          @for (album of albums(); track $index) {
            <button [class.selected]="selected === $index" (click)="selected = $index" mat-flat-button>
              {{ album }}
            </button>
          }
        </p>
        <h3 class="text-larger">{{ albums()[selected] }}</h3>
        <div class="columns columns-3 triple-spaced">
          @for (photo of photos(); track $index) {
            <a [href]="photo.link" rel="noopener noreferrer" target="_blank">
              <img [alt]="photo.title" [src]="photo.src" />
              <caption>
                <span>{{ photo.title }}</span>
              </caption>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class PhotosComponent {
  public albums = input.required<string[]>();
  public photos = input.required<Photo[]>();
  public selected = 0;
}
