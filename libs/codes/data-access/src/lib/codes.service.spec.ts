import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CodesService } from './codes.service';

describe(CodesService.name, () => {
  let service: CodesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CodesService, provideHttpClient()],
    }).compileComponents();

    service = TestBed.inject(CodesService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
