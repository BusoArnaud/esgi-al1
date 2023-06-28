import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RestaurantServiceApi} from "../restaurant/services/restaurant.service-api";
import * as RestaurantActions from "./app.actions";
import {map, mergeMap} from "rxjs";
import {RestaurantModel} from "../restaurant/models/restaurant.model";
import {Store} from "@ngrx/store";

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private restaurantServiceApi: RestaurantServiceApi, private store: Store) {
  }

  getRestaurants$ = createEffect(() => this.actions$.pipe(
    ofType(RestaurantActions.getRestaurants),
    mergeMap(() => {
      return this.restaurantServiceApi.getMock().pipe(
        map((restaurants: Array<RestaurantModel>) => RestaurantActions.setRestaurants({restaurants}))
      );
    })
  ));
}
