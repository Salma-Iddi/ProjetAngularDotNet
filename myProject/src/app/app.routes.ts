// import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FraiComponent } from './frai/frai.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    
    {
        path:'',component:HomepageComponent
    },
    {
        path:'register',component:RegisterComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'frai',component:FraiComponent
    },{
        path:'dashboard',component:DashboardComponent
    }
];

export class AppRoutes {}