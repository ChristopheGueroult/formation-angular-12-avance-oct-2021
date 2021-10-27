import { createAction, props } from '@ngrx/store';
import { StateOrder } from 'src/app/core/enums/state-order';
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

export const tryUpdateOrderAction = createAction(
  '[Orders] try update order',
  props<{ order: Order }>()
);

export const updateOrderSuccessAction = createAction(
  '[Orders]  update order success',
  props<{ order: Order }>()
);

export const tryDeleteOrderAction = createAction(
  '[Orders] try delete order',
  props<{ id: number }>()
);

export const deleteOrderSuccessAction = createAction(
  '[Orders]  delete order success',
  props<{ id: number }>()
);

export const trygetOrderAction = createAction(
  '[Orders] try get order',
  props<{ id: number }>()
);

export const getOrderSuccessAction = createAction(
  '[Orders]  get order success',
  props<{ order: Order }>()
);

export const changeStateAction = createAction(
  '[Orders]  change state order',
  props<{ order: Order; state: StateOrder }>()
);

export const errorAction = createAction(
  '[Orders] error orders',
  props<{ error: any }>()
);
