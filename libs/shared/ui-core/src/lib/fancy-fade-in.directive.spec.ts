import { TestBed } from '@angular/core/testing';
import { FancyFadeInDirective } from './fancy-fade-in.directive';
import { ElementRef } from '@angular/core';

describe(FancyFadeInDirective.name, () => {
  let directive: FancyFadeInDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        FancyFadeInDirective,
        {
          provide: ElementRef,
          useValue: {
            nativeElement: {
              textContent: 'Test Content',
            },
          },
        },
      ],
    }).compileComponents();

    directive = TestBed.inject(FancyFadeInDirective);
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });
});
