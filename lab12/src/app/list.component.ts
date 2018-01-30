import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() names:[string];
  color: string = 'black';
  constructor() { }

  ngOnInit() {
  }

  directiveColorChange(event){
    this.color = event;
  }

}
