import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items:[string] = ["click", "on", "me", "and", "see", 'the', 'magic'];
  color: string = '';
  directiveColorChange(event){
    console.log(event);
    this.color = event;
  }
}
