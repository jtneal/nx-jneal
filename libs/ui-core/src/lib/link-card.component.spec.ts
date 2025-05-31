import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkCardComponent } from './link-card.component';

describe(LinkCardComponent.name, () => {
  let component: LinkCardComponent;
  let fixture: ComponentFixture<LinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('link', 'link');
    fixture.componentRef.setInput('title', 'title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
