import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWhiteSpaceDirective]'
})
export class WhiteSpaceDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const input = this.el.nativeElement.value;
    this.el.nativeElement.value = input.replace(/^\s+|\s+$/g, '');
  }
}
