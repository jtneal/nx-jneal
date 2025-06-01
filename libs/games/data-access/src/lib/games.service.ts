import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GameSection, SetupSection } from '@nx-jneal/util-games';
import { ArticleSection, Hero, Link } from '@nx-jneal/util-shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private readonly http = inject(HttpClient);

  public getArticles(): Observable<ArticleSection> {
    return this.http.get<ArticleSection>('/api/games/articles.json');
  }

  public getGames(): Observable<GameSection> {
    return this.http.get<GameSection>('/api/games/games.json');
  }

  public getHero(): Observable<Hero> {
    return this.http.get<Hero>('/api/games/hero.json');
  }

  public getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('/api/games/links.json');
  }

  public getSetup(): Observable<SetupSection> {
    return this.http.get<SetupSection>('/api/games/setup.json');
  }
}
