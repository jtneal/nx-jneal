import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GamesService } from './games.service';

describe(GamesService.name, () => {
  let service: GamesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [GamesService, provideHttpClient()],
    }).compileComponents();

    service = TestBed.inject(GamesService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
