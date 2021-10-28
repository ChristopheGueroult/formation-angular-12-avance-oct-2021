import { createFeatureSelector, createSelector } from '@ngrx/store';
import { gbFeatureKey, GbState } from '../reducer/gb.reducer';

export const selectGbFeature = createFeatureSelector<GbState>(gbFeatureKey);

export const selectOpenSidebar = createSelector(
  selectGbFeature,
  (state: GbState): boolean => {
    return state.open;
  }
);
