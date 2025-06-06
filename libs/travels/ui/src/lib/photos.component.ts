import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '@nx-jneal/ui-core';
import { PhotoCard, PhotoSection } from '@nx-jneal/util-travels';

@Component({
  selector: 'lib-photos',
  imports: [ButtonComponent, CommonModule, MatButtonModule, MatIconModule],
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
      object-fit: cover;
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
          @for (album of photos().albums; track $index) {
            <button [class.selected]="selected === $index" (click)="changeAlbum($index)" mat-flat-button>
              {{ album }}
            </button>
          }
        </p>
        <h3 class="text-larger">{{ photos().albums[selected] }}</h3>
        <div class="columns columns-3 triple-spaced">
          @for (photo of album; track $index) {
            @if ($index < currentLimit) {
              <a [href]="photo.link" rel="noopener noreferrer" target="_blank">
                <img [alt]="photo.title" [src]="photo.src" />
                <caption>
                  <span>{{ photo.title }}</span>
                </caption>
              </a>
            }
          }
        </div>
        @if (hasMore) {
          <lib-button
            class="double-spaced"
            (click)="loadMore($event)"
            [external]="false"
            icon="jneal_more"
            link="#load-more"
            text="Load More"
          ></lib-button>
        }
      </div>
    </section>
  `,
})
export class PhotosComponent implements OnInit {
  public photos = input.required<PhotoSection>();

  private readonly pageLimit = 9;

  public album: PhotoCard[] = [];
  public currentLimit = this.pageLimit;
  public selected = 0;

  public get hasMore(): boolean {
    return this.currentLimit < this.album.length;
  }

  public ngOnInit(): void {
    this.changeAlbum(0);
  }

  public changeAlbum(index: number): void {
    this.currentLimit = this.pageLimit;
    this.selected = index;

    if (index > 0) {
      this.album = this.photos().cards.filter((photo) => photo.album === this.photos().albums[index]);
    } else {
      this.album = this.photos().cards;
    }
  }

  public loadMore(event: Event): void {
    event.preventDefault();
    this.currentLimit += this.pageLimit;
  }
}
