import {createFeatureSelector, createSelector} from "@ngrx/store";

interface counterState {
  value: number;
}

export const selectCounterState = createFeatureSelector<counterState>('counter');

export const selectCounterValue = createSelector(
  selectCounterState,
  ({value}) => value
)
