import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import { ordersFeatureKey, OrdersState } from '../reducer/orders.reducer';

export const selectOrdersFeature =
  createFeatureSelector<OrdersState>(ordersFeatureKey);

export const selectAllOrders = createSelector(
  selectOrdersFeature,
  (state: OrdersState): Order[] => {
    return state.orders;
  }
);

// export const selectOrder = createSelector(
//   selectAllOrders,
//   selectRouteParams,
//   (orders: Order[], params: Params) => {
//     const id = params['id'];
//     if (id && orders.length) {
//       return orders.find((item) => item.id === Number(id));
//     } else {
//       return null;
//     }
//   }
// );

export const selectOrder = createSelector(
  selectOrdersFeature,
  (state: OrdersState): Order | null => {
    return state.selectedOrder;
  }
);
