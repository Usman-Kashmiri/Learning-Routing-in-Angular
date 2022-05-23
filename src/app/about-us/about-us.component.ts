import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../services/user-service.service";


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  users:any=[]
  constructor(private userData:UserServiceService) {
    this.users = this.userData.usersData();
  }

  ngOnInit(): void {
  }

}
