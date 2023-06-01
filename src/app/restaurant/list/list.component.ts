import { Component } from '@angular/core';
import {RestaurantServiceService} from "../../services/restaurant-service.service";

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  restaurants: Array<{id: number; title: string; desc: string; food: Array<string>}> = [];

  constructor(
    private restaurantService: RestaurantServiceService
  ) {
    this.restaurants = this.restaurantService.getRestaurants();
  }

}
