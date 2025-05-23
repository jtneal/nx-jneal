import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubNavComponent } from './sub-nav.component';

describe(SubNavComponent.name, () => {
  let component: SubNavComponent;
  let fixture: ComponentFixture<SubNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubNavComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('links', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
