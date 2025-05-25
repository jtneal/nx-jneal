import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolsComponent } from './schools.component';

describe(SchoolsComponent.name, () => {
  let component: SchoolsComponent;
  let fixture: ComponentFixture<SchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('schools', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
