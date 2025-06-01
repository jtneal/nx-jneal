import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { EducationComponent } from './education.component';

describe(EducationComponent.name, () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent],
    }).compileComponents();

    const registry = TestBed.inject(MatIconRegistry);
    const sanitizer = TestBed.inject(DomSanitizer);

    registry.addSvgIconLiteral(`jneal_cap`, sanitizer.bypassSecurityTrustHtml('<svg></svg>'));

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('education', { title: 'title' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
