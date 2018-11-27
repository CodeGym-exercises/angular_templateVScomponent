import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountdownComponent} from './countdown/countdown.component';
import {HomeComponent} from './home/home.component';
import {RatingbarComponent} from './ratingbar/ratingbar.component';
import { TodoComponent } from './todo/todo.component';
import { RegisterFinalComponent } from './register-final/register-final.component';

const routes: Routes = [
  {path: 'countdown-app', component: CountdownComponent},
  {path: 'home', component: HomeComponent},
  {path: 'rating', component: RatingbarComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'register', component: RegisterFinalComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
