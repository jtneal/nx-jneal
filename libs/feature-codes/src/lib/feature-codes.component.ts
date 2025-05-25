import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  ArticlesComponent,
  EducationComponent,
  ExperienceComponent,
  ProjectsComponent,
  SkillsComponent,
} from '@nx-jneal/ui-codes';
import { SubHeroComponent, SubNavComponent, SubNavLink } from '@nx-jneal/ui-components';

@Component({
  selector: 'lib-feature-codes',
  imports: [
    ArticlesComponent,
    CommonModule,
    EducationComponent,
    ExperienceComponent,
    MatIconModule,
    ProjectsComponent,
    SkillsComponent,
    SubHeroComponent,
    SubNavComponent,
  ],
  styles: `
    .sub-content {
      padding: 2rem 0;
    }
  `,
  template: `
    <lib-sub-hero
      description="Software engineering, programming tutorials, and tech insights"
      image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
      title="JNealCodes"
    ></lib-sub-hero>
    <lib-sub-nav [links]="links"></lib-sub-nav>
    <div class="sub-content">
      <lib-projects></lib-projects>
      <lib-experience></lib-experience>
      <lib-education></lib-education>
      <lib-skills></lib-skills>
      <lib-articles></lib-articles>
    </div>
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
