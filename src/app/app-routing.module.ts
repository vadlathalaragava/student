import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {StudentComponent} from './student/student.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
