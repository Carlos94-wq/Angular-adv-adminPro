import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashBoardComponent } from './Pages/dash-board/dash-board.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ProgressComponent } from './Pages/progress/progress.component';
import { Grafica1Component } from './Pages/grafica1/grafica1.component';
import { NoPageFoundComponent } from './Pages/no-page-found/no-page-found.component';
import { PagesComponent } from './Pages/pages.component';


const routes: Routes =[
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },  
  {
     path: '', component: PagesComponent,
     children:[
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'Progress', component: ProgressComponent },
      { path: 'Grafica', component: Grafica1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
     ]
  },
  { path: '**', component: NoPageFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
