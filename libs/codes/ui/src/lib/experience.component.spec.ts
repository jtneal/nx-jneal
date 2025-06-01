import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ExperienceComponent } from './experience.component';

describe(ExperienceComponent.name, () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
    }).compileComponents();

    const registry = TestBed.inject(MatIconRegistry);
    const sanitizer = TestBed.inject(DomSanitizer);

    registry.addSvgIconLiteral(`jneal_work`, sanitizer.bypassSecurityTrustHtml('<svg></svg>'));

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('experience', { title: 'title' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
