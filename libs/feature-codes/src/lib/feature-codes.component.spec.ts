import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCodesComponent } from './feature-codes.component';

describe('FeatureCodesComponent', () => {
  let component: FeatureCodesComponent;
  let fixture: ComponentFixture<FeatureCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCodesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
