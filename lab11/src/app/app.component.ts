import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cntr: number = 5;
  componentCounterValue(event){
    this.cntr = event;
  }
}
