import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonComponent } from '@nx-jneal/ui-core';
import { VideoCard, VideoSection } from '@nx-jneal/util-shared';

@Component({
  selector: 'lib-videos',
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

    iframe {
      border-radius: 0.75rem;
    }
  `,
  template: `
    <section class="sub-page" id="videos">
      <div class="container column">
        <h2 class="icon-heading triple-spaced"><mat-icon [svgIcon]="videos().icon"></mat-icon>{{ videos().title }}</h2>
        <p class="albums double-spaced">
          @for (album of videos().albums; track $index) {
            <button [class.selected]="selected === $index" (click)="changeAlbum($index)" mat-flat-button>
              {{ album }}
            </button>
          }
        </p>
        <h3 class="text-larger">{{ videos().albums[selected] }}</h3>
        <div class="columns columns-3 triple-spaced">
          @for (video of album; track $index) {
            @if ($index < currentLimit) {
              <!-- prettier-ignore -->
              <iframe height="225" [src]="video.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
export class VideosComponent implements OnInit {
  private readonly sanitizer = inject(DomSanitizer);

  public videos = input.required<VideoSection>();

  private readonly pageLimit = 9;

  public album: VideoCard[] = [];
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
      this.album = this.videos().cards.filter((video) => video.album === this.videos().albums[index]);
    } else {
      this.album = this.videos().cards;
    }

    // Sanitize the video URLs
    this.album = this.album.map((video) => ({
      ...video,
      src: this.sanitizer.bypassSecurityTrustResourceUrl(video.src) as never,
    }));
  }

  public loadMore(event: Event): void {
    event.preventDefault();
    this.currentLimit += this.pageLimit;
  }
}
