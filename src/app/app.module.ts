import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './Pages/pages.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './Auth/auth.module';

import { NoPageFoundComponent } from './Pages/no-page-found/no-page-found.component';
import { AppComponent } from './Pages/Root/app.component';


@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
