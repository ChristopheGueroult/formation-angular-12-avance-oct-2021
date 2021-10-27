import { createReducer, on } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import {
  addOrderSuccessAction,
  getAllOrdersSuccessAction,
} from '../actions/oreders.actions';

export interface OrdersState {
  orders: Order[];
}

export const initiaOrdersState: OrdersState = {
  orders: [],
};

export const ordersFeatureKey = 'orders';

export const ordersReducer = createReducer(
  initiaOrdersState,
  on(
    getAllOrdersSuccessAction,
    (state: OrdersState, { orders }: { orders: Order[] }): OrdersState => {
      return {
        ...state,
        orders: [...orders],
      };
    }
  ),
  on(
    addOrderSuccessAction,
    (state: OrdersState, { order }: { order: Order }): OrdersState => {
      return {
        ...state,
        orders: [...state.orders, order],
      };
    }
  )
);
