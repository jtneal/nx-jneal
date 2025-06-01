import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

describe(HeroComponent.name, () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();

    const registry = TestBed.inject(MatIconRegistry);
    const sanitizer = TestBed.inject(DomSanitizer);

    registry.addSvgIconLiteral(`jneal_next`, sanitizer.bypassSecurityTrustHtml('<svg></svg>'));

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('hero', { title: 'title' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
