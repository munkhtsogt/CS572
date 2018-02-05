import { Component, ViewChild } from '@angular/core';
// import { store, addTopicAction } from './redux-store';
import { IAppState } from './redux-store';
import { ComponentActions } from './redux-store/actions2'
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { ITopic } from './redux-store/topic'
// Now your Angular 2 app has been reduxified:
// Use the @select decorator to access your store state
// Use .dispatch() to dispatch actions
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <h1>Redux with Angular: Using ng2-redux</h1>
    </div>

    <div class="row">
      <div class="col-xs-2">
        <input class="form-control" placeholder="Topic name" #topicText>
      </div>
      <div class="col">
        <button class="btn btn-primary" (click)="addTopic()">Add</button>
      </div>
    </div>
  
    <div class="row">
      <ul>
        <li *ngFor="let topic of topics$ | async">{{topic.id}} - {{topic.name}}</li>
      </ul>
    </div>
</div>

  `
})
export class AppComponent {
  
  //topics;
  //unsubscribe;
  @ViewChild('topicText') topicText;
  @select('data') topics$: Observable<ITopic>;

  constructor(private ngRedux: NgRedux<IAppState>, private componentActions:ComponentActions) {
    
  }

  // updateFromState(){
  //   this.topics = store.getState().data;
  // }

  // ngOnInit(){
  //   this.updateFromState();
  //   this.unsubscribe = store.subscribe(()=>{
  //     this.updateFromState();
  //   })
  // }

  // ngOnDestroy(){
  //   this.unsubscribe();
  // }

  addTopic(){
    // store.dispatch(addTopicAction(this.topicText.nativeElement.value));
    // this.ngRedux.dispatch(addTopicAction(this.topicText.nativeElement.value));
    this.componentActions.addTopicAction(this.topicText.nativeElement.value);
    this.topicText.nativeElement.value = '';
    this.topics$.subscribe(a => {
      console.log(a);
    })
  }

}
