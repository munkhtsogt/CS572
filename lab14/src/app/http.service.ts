import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getPromises(){
    return [this.http.get('https://jsonplaceholder.typicode.com/users/1').toPromise(),
            this.http.get('https://jsonplaceholder.typicode.com/posts?id=1').toPromise()];
  }
}
