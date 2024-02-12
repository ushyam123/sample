import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Aos from 'aos';
import { AngularMaterialModule } from './app-material/material-module';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './standalone/child1/child1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    Child1Component,
    Home2Component,
    Home3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



