import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[libFancyFadeIn]',
})
export class FancyFadeInDirective implements AfterViewInit {
  private readonly el = inject(ElementRef);

  public ngAfterViewInit(): void {
    this.el.nativeElement.innerHTML = this.el.nativeElement.textContent
      .split(' ')
      .map((word: string) => `<span>${word}</span>`)
      .join('');
  }
}
