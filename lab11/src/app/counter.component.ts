import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChange: EventEmitter<number>;
  counterValue: number;
  constructor() {
    this.counterChange  = new EventEmitter<number>();
  }

  ngOnInit() {
    this.counterValue = this.counter || 0;
  }

  decrease(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }

}
