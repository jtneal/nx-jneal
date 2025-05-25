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
    fixture.componentRef.setInput('code', 'code');
    fixture.componentRef.setInput('demo', 'demo');
    fixture.componentRef.setInput('description', 'description');
    fixture.componentRef.setInput('image', 'image');
    fixture.componentRef.setInput('tech', []);
    fixture.componentRef.setInput('title', 'title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
