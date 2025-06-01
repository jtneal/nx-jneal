import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PhotosComponent } from './photos.component';

describe(PhotosComponent.name, () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosComponent],
    }).compileComponents();

    const registry = TestBed.inject(MatIconRegistry);
    const sanitizer = TestBed.inject(DomSanitizer);

    registry.addSvgIconLiteral(`jneal_cam`, sanitizer.bypassSecurityTrustHtml('<svg></svg>'));

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('photos', { albums: ['Album'], cards: [], icon: 'icon', title: 'title' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
