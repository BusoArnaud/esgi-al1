import {createAction} from "@ngrx/store";

export const add = createAction(
  '[Counter] Add one'
);
export const minus = createAction(
  '[Counter] Minus one'
);
export const reset = createAction(
  '[Counter] Reset'
);
