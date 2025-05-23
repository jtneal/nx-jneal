import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCodesComponent } from './ui-codes.component';

describe(UiCodesComponent.name, () => {
  let component: UiCodesComponent;
  let fixture: ComponentFixture<UiCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCodesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
