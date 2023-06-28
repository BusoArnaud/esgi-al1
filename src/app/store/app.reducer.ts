import {createReducer, on} from "@ngrx/store";
import {RestaurantModel} from "../restaurant/models/restaurant.model";
import * as RestaurantActions from "./app.actions";

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
