import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  student: any;
  constructor(private route: ActivatedRoute, private dbService: DbService) { 
    route.params.subscribe(params => {
      let students = dbService.getData();
      let index = students.findIndex(s => s._id == params['id']);
      this.student = students[index];
    });
  }

  ngOnInit() {
  }

}
