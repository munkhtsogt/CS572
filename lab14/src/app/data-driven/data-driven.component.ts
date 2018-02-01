import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.myForm = formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'post': ['', this.postValidator],
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.myForm.value);
    this.router.navigateByUrl('thankyou');
    return;
  }

  getData(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users/1')
                 .subscribe(user => {
                  this.http.get('https://jsonplaceholder.typicode.com/posts?id=' + user['id']).subscribe(posts =>{
                    this.myForm.setValue({ name: user['name'], email: user['email'], post: posts[0]['body'] })
                  });
                 });
  }
  
  postValidator(control: FormControl): {[s: string]:boolean} {
    if(control.value.length < 10){
      return {'invalid': true};
    }
    return null;
  }

}
