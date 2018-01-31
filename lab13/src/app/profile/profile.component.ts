import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';
import { Subscription } from 'rxjs/Rx';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnDestroy {

  student: any;
  private subscription: Subscription;
  constructor(private route: ActivatedRoute, private dbService: DbService) { 
    this.subscription = route.params.subscribe(params => {
      let students = dbService.getData();
      let index = students.findIndex(s => s._id == params['id']);
      this.student = students[index];
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
