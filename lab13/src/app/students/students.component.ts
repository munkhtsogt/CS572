import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any;
  constructor(private dbService: DbService) { 
    this.students = this.dbService.getData();
  }

  ngOnInit() {
  }

}
