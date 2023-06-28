import {createFeatureSelector, createSelector} from "@ngrx/store";
import {RestaurantModel} from "../restaurant/models/restaurant.model";
interface restaurantState {
  list: Array<RestaurantModel>
}
export const selectRestaurantState = createFeatureSelector<restaurantState>('restaurant');

export const selectRestaurantList = createSelector(
  selectRestaurantState,
  ({list}) => list
)

