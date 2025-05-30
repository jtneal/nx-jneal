import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesService } from './games.service';

describe(GamesService.name, () => {
  let component: GamesService;
  let fixture: ComponentFixture<GamesService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesService],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
