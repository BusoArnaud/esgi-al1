import { createReducer } from "@ngrx/store";
import {RestaurantModel} from "../restaurant/models/restaurant.model";

interface RestaurantsState {
  list: Array<RestaurantModel>
}
export const initialState: RestaurantsState = {
  list: []
}

export const restaurantsReducer = createReducer(
  initialState
);
