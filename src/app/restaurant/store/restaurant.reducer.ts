import {createReducer, on} from "@ngrx/store";
import {RestaurantModel} from "../models/restaurant.model";
import * as RestaurantActions from "./restaurant.actions";

export interface RestaurantsState {
  list: Array<RestaurantModel>
}
export const initialState: RestaurantsState = {
  list: []
}

export const restaurantsReducer = createReducer(
  initialState,
  on(RestaurantActions.setRestaurants, (
    state,
    data) => ({
    ...state, list: data.restaurants
  }))
);
