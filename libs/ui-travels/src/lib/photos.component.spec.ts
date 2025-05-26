import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';

describe(PhotosComponent.name, () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('albums', []);
    fixture.componentRef.setInput('photos', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
