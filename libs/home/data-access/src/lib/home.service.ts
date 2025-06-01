import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AboutSection, HeroSection, PersonaSection } from '@nx-jneal/util-home';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly http = inject(HttpClient);

  public getAbout(): Observable<AboutSection> {
    return this.http.get<AboutSection>('/api/home/about.json');
  }

  public getHero(): Observable<HeroSection> {
    return this.http.get<HeroSection>('/api/home/hero.json');
  }

  public getPersonas(): Observable<PersonaSection> {
    return this.http.get<PersonaSection>('/api/home/personas.json');
  }
}
