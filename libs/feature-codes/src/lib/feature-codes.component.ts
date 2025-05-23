import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SubHeroComponent, SubNavComponent, SubNavLink } from '@nx-jneal/ui-components';
import { ProjectsComponent } from '@nx-jneal/ui-codes';

@Component({
  selector: 'lib-feature-codes',
  imports: [CommonModule, MatIconModule, ProjectsComponent, SubHeroComponent, SubNavComponent],
  styles: `
    .container {
      align-items: start;
      background-color: var(--background-alt);
      flex-direction: column;
      padding: 3rem 0;
      scroll-margin-top: 6rem;
    }

    .projects {
      display: flex;
      gap: 1.5rem;
      margin-top: 2rem;
    }

    h2 {
      font-size: 1.875rem;
    }

    mat-icon {
      color: var(--red-bright);
      margin-right: 0.5rem;
    }
  `,
  template: `
    <lib-sub-hero
      description="Software engineering, programming tutorials, and tech insights"
      image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
      title="JNealCodes"
    ></lib-sub-hero>
    <lib-sub-nav [links]="links"></lib-sub-nav>
    <lib-projects></lib-projects>
  `,
})
export class FeatureCodesComponent {
  public links: SubNavLink[] = [
    {
      icon: 'code',
      link: '/codes#portfolio',
      title: 'Portfolio',
    },
    {
      icon: 'work_outline',
      link: '/codes#experience',
      title: 'Experience',
    },
    {
      icon: 'lightbulb_outline',
      link: '/codes#skills',
      title: 'Skills',
    },
    {
      icon: 'list_alt',
      link: '/codes#articles',
      title: 'Articles',
    },
  ];
}
