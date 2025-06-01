import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';

describe(HomeService.name, () => {
  let service: HomeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HomeService, provideHttpClient()],
    }).compileComponents();

    service = TestBed.inject(HomeService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
