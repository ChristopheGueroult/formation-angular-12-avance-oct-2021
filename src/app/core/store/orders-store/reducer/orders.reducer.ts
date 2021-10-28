import { createReducer, on } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import {
  addOrderSuccessAction,
  deleteOrderSuccessAction,
  errorAction,
  getAllOrdersSuccessAction,
  getOrderSuccessAction,
  updateOrderSuccessAction,
} from '../actions/oreders.actions';

export interface OrdersState {
  orders: Order[];
  error: any;
  selectedOrder: Order | null;
}

export const initiaOrdersState: OrdersState = {
  orders: [],
  error: null,
  selectedOrder: null,
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
  ),
  on(
    updateOrderSuccessAction,
    (state: OrdersState, { order }: { order: Order }): OrdersState => {
      return {
        ...state,
        orders: state.orders.map((item) =>
          item.id !== order.id ? item : order
        ),
      };
    }
  ),
  on(
    deleteOrderSuccessAction,
    (state: OrdersState, { id }: { id: number }): OrdersState => {
      return {
        ...state,
        orders: state.orders.filter((item) => item.id !== id),
      };
    }
  ),
  on(
    getOrderSuccessAction,
    (state: OrdersState, { order }: { order: Order }): OrdersState => {
      return {
        ...state,
        selectedOrder: order,
      };
    }
  ),
  on(
    errorAction,
    (state: OrdersState, { error }: { error: any }): OrdersState => {
      return {
        ...state,
        error: error,
      };
    }
  )
);
