import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';

export const tryGetAllOrdersAction = createAction(
  '[Orders] try get all orders'
);

export const getAllOrdersSuccessAction = createAction(
  '[Orders]  get all orders success',
  props<{ orders: Order[] }>()
);

export const tryAddtOrderAction = createAction(
  '[Orders] try add order',
  props<{ order: Order }>()
);

export const addOrderSuccessAction = createAction(
  '[Orders]  add order success',
  props<{ order: Order }>()
);

export const errorAction = createAction(
  '[Orders] error orders',
  props<{ error: any }>()
);
