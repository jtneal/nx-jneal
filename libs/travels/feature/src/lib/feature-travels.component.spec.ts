import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureTravelsComponent } from './feature-travels.component';

describe(FeatureTravelsComponent.name, () => {
  let component: FeatureTravelsComponent;
  let fixture: ComponentFixture<FeatureTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTravelsComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
