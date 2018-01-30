import { Directive, ElementRef, Renderer2, Input, AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective implements AfterViewInit {
  @Input('myvisibility') display: boolean;
  constructor(private element: ElementRef, private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer2.setStyle(this.element.nativeElement, 'display', (this.display == true) ? 'block': 'none');
  }  
}
