import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureGamesComponent } from './feature-games.component';
import { provideHttpClient } from '@angular/common/http';

describe(FeatureGamesComponent.name, () => {
  let component: FeatureGamesComponent;
  let fixture: ComponentFixture<FeatureGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureGamesComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
