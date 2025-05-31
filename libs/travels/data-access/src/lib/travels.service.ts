import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article, Hero, Link } from '@nx-jneal/util-shared';
import { Photo, Research } from '@nx-jneal/util-travels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelsService {
  private readonly http = inject(HttpClient);

  public getHero(): Observable<Hero> {
    return this.http.get<Hero>('/api/travels/hero.json');
  }

  public getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('/api/travels/links.json');
  }

  public getAlbums(): Observable<string[]> {
    return this.http.get<string[]>('/api/travels/albums.json');
  }

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('/api/travels/photos.json');
  }

  public getResearch(): Observable<Research[]> {
    return this.http.get<Research[]>('/api/travels/research.json');
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/travels/articles.json');
  }
}
