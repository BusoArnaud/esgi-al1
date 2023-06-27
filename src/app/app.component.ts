import { Component } from '@angular/core';
import {RestaurantService} from "./restaurant/services/restaurant.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private restaurantService: RestaurantService,
  ) {
    this.restaurantService.getRestaurants();

  }
}
