import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }

  getData() {
    return [
      {_id: 1, name: 'Asaad Saad', stuID: '12345', email: 'asaad@mum.edu'},
      {_id: 2, name: 'Munkhtsogt Tsogabadrakh', stuID: '986131', email: 'mtsogbadrakh@mum.edu'},
      {_id: 3, name: 'John Snow', stuID: '12346', email: 'snow@mum.edu'},
      {_id: 4, name: 'Brad Pitt', stuID: '12347', email: 'pitt@mum.edu'},
      {_id: 5, name: 'Tommy Lee Jones', stuID: '12348', email: 'jones@mum.edu'},
      {_id: 6, name: 'Khureltsooj Davaatseren', stuID: '12349', email: 'davaatseren@mum.edu'},
    ];
  }
}
