import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksRentBuyLayoutComponent } from './routingcomponents/books-rent&buy-layout.component';
import { HomeLayoutComponent } from './routingcomponents/home-layout.component';
import { BooksReadLayoutComponent } from './routingcomponents/books-read-layout.component';
import { BooksReturnLayoutComponent } from './routingcomponents/books-return-layout.component';
import { BooksSellLayoutComponent } from './routingcomponents/books-sell-layout.component';
import { AddCardComponent } from './app/add-card/add-card.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'books-rent&buy', component:BooksRentBuyLayoutComponent},
  {path: 'books-read', component:BooksReadLayoutComponent},
  {path: 'books-return', component:BooksReturnLayoutComponent},
  {path: 'books-sell', component:BooksSellLayoutComponent},
  {path: 'admin', component: AddCardComponent},
  {path: 'auth', component: AuthenticationComponent}


];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
