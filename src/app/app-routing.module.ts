import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './Pages/pages.routing';
import { AuthRoutingModule } from './Auth/auth.routing';

import { NoPageFoundComponent } from './Pages/no-page-found/no-page-found.component';


const routes: Routes =[  
  /* 
    /Login
    /Register
    /aashboard  */
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NoPageFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) ,
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
