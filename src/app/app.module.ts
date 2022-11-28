import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
// import { ViewallTodoComponent } from './viewall-todo/viewall-todo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';

import { ViewallTodoComponent } from  './viewall-todo/viewall-todo.component';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path:"",
    component:AddTodoComponent
  },
  {
    path:"view",
    component:ViewallTodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ViewallTodoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
