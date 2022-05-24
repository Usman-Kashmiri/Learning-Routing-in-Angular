import { Component } from '@angular/core';
import { UserServiceService } from "./services/user-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning-Routing-in-Angular';
  userData:any;
  constructor(private apiData:UserServiceService) {
    apiData.getApiData().subscribe((data)=>{
      this.userData=data;
    })
  }

}
