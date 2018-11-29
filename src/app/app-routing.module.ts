import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountdownComponent} from './countdown/countdown.component';
import {HomeComponent} from './home/home.component';
import {RatingbarComponent} from './ratingbar/ratingbar.component';
import { TodoComponent } from './todo/todo.component';
import { RegisterFinalComponent } from './register-final/register-final.component';
import { LoginComponent } from './login/login.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { MymusicComponent } from './mymusic/mymusic.component';
import { DictionaryComponent } from './dictionary/dictionary.component';

const routes: Routes = [
  {path: 'countdown-app', component: CountdownComponent},
  {path: 'home', component: HomeComponent},
  {path: 'rating', component: RatingbarComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'register', component: RegisterFinalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'timelines', component: TimelinesComponent},
  {path: 'mymusic', component: MymusicComponent},
  {path: 'dictionary', component: DictionaryComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
