import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HomeComponent } from './home/home.component';
import { RatingbarComponent } from './ratingbar/ratingbar.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { NamecardComponent } from './namecard/namecard.component';
import { TodoComponent } from './todo/todo.component';

import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    HomeComponent,
    RatingbarComponent,
    ProgressbarComponent,
    NamecardComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
