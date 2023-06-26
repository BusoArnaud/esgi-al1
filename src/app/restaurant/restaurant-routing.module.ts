import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";
import {FormTDComponent} from "./form-td/form-td.component";
import {FormRFComponent} from "./form-rf/form-rf.component";


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'formTD', component: FormTDComponent },
  { path: 'formRF', component: FormRFComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
