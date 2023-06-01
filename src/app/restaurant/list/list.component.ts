import { Component } from '@angular/core';
import {RestaurantService} from "../services/restaurant.service";

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  restaurants: Array<{id: number; title: string; desc: string; food: Array<string>}> = [];

  constructor(
    private restaurantService: RestaurantService
  ) {
    this.restaurants = this.restaurantService.getRestaurants();
  }

}
