import {createAction, props} from '@ngrx/store';
import {RestaurantModel} from "../models/restaurant.model";

export const getRestaurants = createAction(
  '[Restaurants] Get restaurants'
);

export const setRestaurants = createAction(
  '[Restaurants] Set restaurants',
  props<{ restaurants: Array<RestaurantModel>}>()
)
