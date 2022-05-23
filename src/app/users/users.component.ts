import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userId:any

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.router.snapshot.paramMap.get('id');
  }

}
