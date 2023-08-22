import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MinistatementComponent } from './ministatement/ministatement.component';
import {  authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'servicebank/register',component:RegisterComponent},
  {path:'',component:LandingComponent,canActivate:[authGuard]},
  {path:'servicebank/login',component:LoginComponent},
  {path:'servicebank/dashboard',component:DashboardComponent,canActivate:[authGuard]},
  {path:'servicebank/statement',component:MinistatementComponent,canActivate:[authGuard]},
  
  {path:'**',component:PageNotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
