import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GstAddComponent} from './gst-add/gst-add.component';
 import {GstEditComponent} from './gst-edit/gst-edit.component';
 import { GstGetComponent } from './gst-get/gst-get.component';
 import { ProfileComponent } from './profile/profile.component';

 import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { 
    path: '',
     component: HomeComponent
  },
  { 
    path: 'login',
    component: LoginComponent 
  },
  {
     path: 'signup', 
     component: SignupComponent 
  },
  {
    path: 'business/create',
    component:GstAddComponent
  },
  {
    path:'business/edit/:id',
    component:GstEditComponent
  },
  {
    path: 'business',
    component:GstGetComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
