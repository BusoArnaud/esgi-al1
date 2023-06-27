import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";
import {RestaurantRoutingModule} from "./restaurant-routing.module";
import {ButtonModule} from "../components/button/button.component";
import { FormTDComponent } from './form-td/form-td.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { FormRFComponent } from './form-rf/form-rf.component';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    FormTDComponent,
    FormRFComponent,
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class RestaurantModule { }
