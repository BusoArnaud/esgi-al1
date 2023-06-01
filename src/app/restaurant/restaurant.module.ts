import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";
import {RestaurantRoutingModule} from "./restaurant-routing.module";
import {ButtonModule} from "../components/button/button.component";



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    ButtonModule,
  ]
})
export class RestaurantModule { }
