import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolComponent } from './school.component';

describe(SchoolComponent.name, () => {
  let component: SchoolComponent;
  let fixture: ComponentFixture<SchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('school', { company: 'company', dates: 'dates', title: 'title' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
