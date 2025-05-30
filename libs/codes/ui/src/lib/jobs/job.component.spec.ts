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
    fixture.componentRef.setInput('job', { company: 'company', title: 'title', dates: 'dates' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
