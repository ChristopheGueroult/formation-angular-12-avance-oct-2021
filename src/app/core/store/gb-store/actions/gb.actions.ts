import { createAction, props } from '@ngrx/store';

export const toggleSideBarAction = createAction(
  '[Orders] toggle sidebar',
  props<{ open: boolean }>()
);
