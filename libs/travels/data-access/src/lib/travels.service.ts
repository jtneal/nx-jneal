import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ArticleSection, Hero, Link, VideoSection } from '@nx-jneal/util-shared';
import { PhotoSection, ResearchSection } from '@nx-jneal/util-travels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelsService {
  private readonly http = inject(HttpClient);

  public getArticles(): Observable<ArticleSection> {
    return this.http.get<ArticleSection>('/api/travels/articles.json');
  }

  public getHero(): Observable<Hero> {
    return this.http.get<Hero>('/api/travels/hero.json');
  }

  public getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('/api/travels/links.json');
  }

  public getPhotos(): Observable<PhotoSection> {
    return this.http.get<PhotoSection>('/api/travels/photos.json');
  }

  public getResearch(): Observable<ResearchSection> {
    return this.http.get<ResearchSection>('/api/travels/research.json');
  }

  public getVideos(): Observable<VideoSection> {
    return this.http.get<VideoSection>('/api/travels/videos.json');
  }
}
