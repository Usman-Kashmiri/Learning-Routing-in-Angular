import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:3000/users';

  getApiData() {
    return this.http.get(this.Url);
  }

  usersData() {
    return [
      {name:'Usman', age:22, email:'usman@angular.com'},
      {name:'Yasir', age:20, email:'yasir@angular.com'},
      {name:'Abdul Rafay', age:24, email:'arm@angular.com'},
      {name:'Anil', age:24, email:'anil@angular.com'},
    ]
  }

}
