import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCodesComponent } from './feature-codes.component';

describe(FeatureCodesComponent.name, () => {
  let component: FeatureCodesComponent;
  let fixture: ComponentFixture<FeatureCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCodesComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
