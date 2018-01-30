import { Directive, ElementRef, Renderer2, Input, Output, 
         EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  
  colors: [string];
  @Output() colorChange: EventEmitter<string>;
  constructor(private element: ElementRef, private renderer2: Renderer2) {
    this.colors = ['red', 'black', 'yellow', 'blue', 'orange', 'pink'];
    this.colorChange = new EventEmitter<string>();
  }

  @HostListener('click') onclick(){
    let i = Math.floor(Math.random() * (this.colors.length - 1));
    this.renderer2.setStyle(this.element.nativeElement, 'color', this.colors[i]);
    this.colorChange.emit(this.colors[i]);
  } 
}
