import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../services/user-service.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any=[]
  constructor(private userData:UserServiceService) {
    this.users = this.userData.usersData();
  }

  ngOnInit(): void {
  }

}
