import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TravelsService } from './travels.service';

describe(TravelsService.name, () => {
  let service: TravelsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [TravelsService, provideHttpClient()],
    }).compileComponents();

    service = TestBed.inject(TravelsService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
