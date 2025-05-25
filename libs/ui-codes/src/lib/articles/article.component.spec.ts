import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';

describe(ArticleComponent.name, () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('article', {
      date: 'date',
      description: 'description',
      length: 'legnth',
      link: 'link',
      title: 'title',
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
