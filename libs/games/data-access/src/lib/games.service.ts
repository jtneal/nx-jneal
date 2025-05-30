import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Game } from '@nx-jneal/util-games';
import { Article, Dictionary, Hero, Link } from '@nx-jneal/util-shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private readonly http = inject(HttpClient);

  public getHero(): Observable<Hero> {
    return this.http.get<Hero>('/api/games/hero.json');
  }

  public getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('/api/games/links.json');
  }

  public getSpecifications(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>('/api/games/specifications.json');
  }

  public getPeripherals(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>('/api/games/peripherals.json');
  }

  public getPast(): Observable<Game[]> {
    return this.http.get<Game[]>('/api/games/past.json');
  }

  public getRecent(): Observable<Game[]> {
    return this.http.get<Game[]>('/api/games/recent.json');
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/games/articles.json');
  }
}
