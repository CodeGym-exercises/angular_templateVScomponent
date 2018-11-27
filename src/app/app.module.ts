import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HomeComponent } from './home/home.component';
import { RatingbarComponent } from './ratingbar/ratingbar.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { NamecardComponent } from './namecard/namecard.component';
import { TodoComponent } from './todo/todo.component';


import { RegisterFinalComponent } from './register-final/register-final.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    HomeComponent,
    RatingbarComponent,
    ProgressbarComponent,
    NamecardComponent,
    TodoComponent,
    RegisterFinalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
