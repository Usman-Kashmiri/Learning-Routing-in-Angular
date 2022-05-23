import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  usersData() {
    return [
      {name:'Usman', age:22, email:'usman@angular.com'},
      {name:'Yasir', age:20, email:'yasir@angular.com'},
      {name:'Abdul Rafay', age:24, email:'arm@angular.com'},
      {name:'Anil', age:24, email:'anil@angular.com'},
    ]
  }

}
