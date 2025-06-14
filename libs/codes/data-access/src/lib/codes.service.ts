import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EducationSection, ExperienceSection, ProjectSection, SkillCard, SkillSection } from '@nx-jneal/util-codes';
import { ArticleSection, Hero, Link, VideoSection } from '@nx-jneal/util-shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodesService {
  private readonly http = inject(HttpClient);

  public getArticles(): Observable<ArticleSection> {
    return this.http.get<ArticleSection>('/api/codes/articles.json');
  }

  public getEducation(): Observable<EducationSection> {
    return this.http.get<EducationSection>('/api/codes/education.json');
  }

  public getExperience(): Observable<ExperienceSection> {
    return this.http.get<ExperienceSection>('/api/codes/experience.json');
  }

  public getHero(): Observable<Hero> {
    return this.http.get<Hero>('/api/codes/hero.json');
  }

  public getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('/api/codes/links.json');
  }

  public getProjects(): Observable<ProjectSection> {
    return this.http.get<ProjectSection>('/api/codes/projects.json');
  }

  public getSkills(): Observable<SkillSection> {
    return this.http.get<SkillSection>('/api/codes/skills.json');
  }

  public getVideos(): Observable<VideoSection> {
    return this.http.get<VideoSection>('/api/codes/videos.json');
  }
}
