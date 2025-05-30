import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillComponent } from './skill.component';

describe(SkillComponent.name, () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('skill', { company: 'company', dates: 'dates', title: 'title' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
