import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesComponent } from './games.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

describe(GamesComponent.name, () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesComponent],
    }).compileComponents();

    const registry = TestBed.inject(MatIconRegistry);
    const sanitizer = TestBed.inject(DomSanitizer);

    registry.addSvgIconLiteral(`jneal_game`, sanitizer.bypassSecurityTrustHtml('<svg></svg>'));

    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('games', { categories: [], icon: 'jneal_game', title: 'title' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
