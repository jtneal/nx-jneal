import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobsComponent } from './jobs.component';

describe(JobsComponent.name, () => {
  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('jobs', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
