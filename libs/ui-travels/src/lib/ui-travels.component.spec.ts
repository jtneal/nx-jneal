import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTravelsComponent } from './ui-travels.component';

describe(UiTravelsComponent.name, () => {
  let component: UiTravelsComponent;
  let fixture: ComponentFixture<UiTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTravelsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
