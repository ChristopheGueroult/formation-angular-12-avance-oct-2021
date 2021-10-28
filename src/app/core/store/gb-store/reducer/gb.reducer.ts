import { createReducer, on } from '@ngrx/store';
import { toggleSideBarAction } from '../actions/gb.actions';

export interface GbState {
  open: boolean;
}

export const initialGbState: GbState = {
  open: false,
};

export const gbFeatureKey = 'gb';

export const gbReducer = createReducer(
  initialGbState,
  on(
    toggleSideBarAction,
    (state: GbState, { open }: { open: boolean }): GbState => {
      return {
        ...state,
        open: open,
      };
    }
  )
);
