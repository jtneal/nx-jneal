import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubHeroComponent } from './sub-hero.component';

describe(SubHeroComponent.name, () => {
  let component: SubHeroComponent;
  let fixture: ComponentFixture<SubHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubHeroComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('description', 'description');
    fixture.componentRef.setInput('image', 'image');
    fixture.componentRef.setInput('title', 'title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
