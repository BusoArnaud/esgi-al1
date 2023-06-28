import {createReducer, on} from "@ngrx/store";
import * as CounterActions from "../store/counter.actions";

export interface CounterState {
  value: number;
}
export const initialState: CounterState = {
  value: 0
}

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.add, (state) => (
    {...state, value: state.value + 1}
  )),
  on(CounterActions.minus, (state) => (
    {...state, value: state.value - 1}
  )),
  on(CounterActions.reset, (state) => (
    {...state, value: 0}
  ))
);
