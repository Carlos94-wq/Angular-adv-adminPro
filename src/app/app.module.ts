import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { NoPageFoundComponent } from './Pages/no-page-found/no-page-found.component';
import { DashBoardComponent } from './Pages/dash-board/dash-board.component';
import { BreadCrumbsComponent } from './Shared/bread-crumbs/bread-crumbs.component';
import { SideBarComponent } from './Shared/side-bar/side-bar.component';
import { HeaderComponent } from './Shared/header/header.component';
import { AppComponent } from './Pages/Root/app.component';
import { ProgressComponent } from './Pages/progress/progress.component';
import { Grafica1Component } from './Pages/grafica1/grafica1.component';
import { PagesComponent } from './Pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPageFoundComponent,
    DashBoardComponent,
    BreadCrumbsComponent,
    SideBarComponent,
    HeaderComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
