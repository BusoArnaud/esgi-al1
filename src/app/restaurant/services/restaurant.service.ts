import {Injectable} from '@angular/core';
import {RestaurantModel} from "../models/restaurant.model";
import {BehaviorSubject, Subject, take} from "rxjs";
import {RestaurantServiceApi} from "./restaurant.service-api";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurants: Array<RestaurantModel> = [];
  restaurants$: BehaviorSubject<Array<RestaurantModel>> = new BehaviorSubject<Array<RestaurantModel>>(this.restaurants);

  constructor(
    private restaurantServiceApi: RestaurantServiceApi
  ) {
  }

  getRestaurants(): void {
    this.restaurantServiceApi
      .getMock()
      .pipe(take(1))
      .subscribe((res: Array<RestaurantModel>) =>  {
        this.restaurants = res;
        this.restaurants$.next(this.restaurants);
      });

  }

  getFood(id: number): Array<string> {
    const a = this.restaurants.filter(res => res.id === id);
    return a[0].food;
  }

  addNewRestaurant(restaurant: { title: string; desc: string; food: Array<string> }): void {
    this.restaurants.push({...restaurant, id: this.restaurants.length + 1});
    console.log(this.restaurants);
    this.restaurants$.next(this.restaurants);
  }

  canCreateRestaurant(title: string | null): number {
    return this.restaurants.findIndex(res => res.title === title);
  }

}
