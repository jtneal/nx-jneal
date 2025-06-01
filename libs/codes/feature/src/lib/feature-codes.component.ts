import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CodesService } from '@nx-jneal/data-access-codes';
import { EducationComponent, ExperienceComponent, ProjectsComponent, SkillsComponent } from '@nx-jneal/ui-codes';
import { ArticlesComponent, SubHeroComponent, SubNavComponent } from '@nx-jneal/ui-components';

@Component({
  selector: 'lib-feature-codes',
  imports: [
    ArticlesComponent,
    CommonModule,
    ExperienceComponent,
    MatIconModule,
    ProjectsComponent,
    EducationComponent,
    SkillsComponent,
    SubHeroComponent,
    SubNavComponent,
  ],
  template: `
    <div class="red-theme">
      @if (hero$ | async; as hero) {
        <lib-sub-hero [description]="hero.description" [image]="hero.image" [title]="hero.title"></lib-sub-hero>
      }
      <div class="sticky-container">
        @if (links$ | async; as links) {
          <lib-sub-nav [links]="links"></lib-sub-nav>
        }
        <div class="sub-content">
          @if (projects$ | async; as projects) {
            <lib-projects [projects]="projects"></lib-projects>
          }
          @if (experience$ | async; as experience) {
            <lib-experience [experience]="experience"></lib-experience>
          }
          @if (education$ | async; as education) {
            <lib-education [education]="education"></lib-education>
          }
          @if (skills$ | async; as skills) {
            <lib-skills [skills]="skills"></lib-skills>
          }
          @if (articles$ | async; as articles) {
            <lib-articles [articles]="articles"></lib-articles>
          }
        </div>
      </div>
    </div>
  `,
})
export class FeatureCodesComponent {
  private readonly service = inject(CodesService);

  public readonly articles$ = this.service.getArticles();
  public readonly education$ = this.service.getEducation();
  public readonly experience$ = this.service.getExperience();
  public readonly hero$ = this.service.getHero();
  public readonly links$ = this.service.getLinks();
  public readonly projects$ = this.service.getProjects();
  public readonly skills$ = this.service.getSkills();
}
