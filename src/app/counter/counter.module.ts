import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterRoutingModule} from "./counter-routing.module";
import {CounterComponent} from "./counter/counter.component";
import {SharedModule} from "../shared/shared.module";
import {ButtonModule} from "../components/button/button.component";



@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    SharedModule,
    ButtonModule,
  ]
})
export class CounterModule { }
