import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobComponent } from './job.component';

describe(JobComponent.name, () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('company', 'company');
    fixture.componentRef.setInput('dates', 'dates');
    fixture.componentRef.setInput('title', 'title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
