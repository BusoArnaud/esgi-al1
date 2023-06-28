import { Component } from '@angular/core';
import {RestaurantService} from "../services/restaurant.service";
import {RestaurantModel} from "../models/restaurant.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectRestaurantList} from "../store/restautant.selectors";

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  restaurantsSub$: Observable<Array<RestaurantModel>>;

  constructor(
    private restaurantService: RestaurantService,
    private store: Store,
  ) {
    this.restaurantsSub$ = this.store.select(selectRestaurantList);
  }

}
