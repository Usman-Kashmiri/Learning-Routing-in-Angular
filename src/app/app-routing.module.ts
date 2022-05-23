import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { WildCardPageComponent } from './wild-card-page/wild-card-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path:'Contact',
    component:ContactUsComponent
  },
  {
    path:'About',
    component:AboutUsComponent
  },
  {
    path:'user/:id',
    component:UsersComponent
  },
  {
    path:'**',
    component:WildCardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
