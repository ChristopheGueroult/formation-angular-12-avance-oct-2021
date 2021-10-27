import { RouterState } from '@angular/router';
import { routerReducer } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';

export interface AppState {
  router: RouterState;
}

export const rootReducers: ActionReducerMap<AppState, Action> = {
  router: routerReducer,
};
