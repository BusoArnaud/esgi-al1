import { Component } from '@angular/core';
import {RestaurantService} from "../services/restaurant.service";
import {RestaurantModel} from "../models/restaurant.model";
import {Observable} from "rxjs";

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  restaurantsSub$: Observable<Array<RestaurantModel>>;

  constructor(
    private restaurantService: RestaurantService
  ) {
    this.restaurantsSub$ = this.restaurantService.restaurants$;
  }

}
