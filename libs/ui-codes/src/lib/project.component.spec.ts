import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectComponent } from './project.component';

describe(ProjectComponent.name, () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('links', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
