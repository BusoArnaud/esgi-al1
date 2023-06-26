import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstSubjectComponent} from "./first-subject/first-subject.component";

const routes: Routes = [
  { path: 'firstSubject', loadComponent: () => import('./first-subject/first-subject.component').then(c => c.FirstSubjectComponent) },
  { path: 'counter', loadComponent: () => import('./counter/counter/counter.component').then(c => c.CounterComponent) },
  { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule) },
  { path: '', redirectTo: '/counter', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
