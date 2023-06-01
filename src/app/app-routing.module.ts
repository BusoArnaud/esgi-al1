import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from "./restaurant/list/list.component";
import { DetailComponent } from "./restaurant/detail/detail.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { CounterComponent } from "./counter/counter/counter.component";

const routes: Routes = [
  { path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule) },
  { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule) },
  { path: '', redirectTo: '/counter', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
