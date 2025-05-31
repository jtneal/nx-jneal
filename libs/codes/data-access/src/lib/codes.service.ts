import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Job, Project, School, Skill } from '@nx-jneal/util-codes';
import { Article, Hero, Link } from '@nx-jneal/util-shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodesService {
  private readonly http = inject(HttpClient);

  public getHero(): Observable<Hero> {
    return this.http.get<Hero>('/api/codes/hero.json');
  }

  public getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('/api/codes/links.json');
  }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/api/codes/projects.json');
  }

  public getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/api/codes/jobs.json');
  }

  public getSchools(): Observable<School[]> {
    return this.http.get<School[]>('/api/codes/schools.json');
  }

  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('/api/codes/skills.json');
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/codes/articles.json');
  }
}
