import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  constructor(private element: ElementRef, private rendere2: Renderer2) { 
    this.rendere2.setStyle(element.nativeElement, 'text-transform', 'uppercase');
  }

}
