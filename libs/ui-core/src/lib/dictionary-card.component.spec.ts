import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DictionaryCardComponent } from './dictionary-card.component';

describe(DictionaryCardComponent.name, () => {
  let component: DictionaryCardComponent;
  let fixture: ComponentFixture<DictionaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DictionaryCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DictionaryCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('dictionary', []);
    fixture.componentRef.setInput('title', 'title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
