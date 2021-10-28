import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as OrdersReducer from '../reducer/orders.reducer';
import * as OrdersSelectors from './selectors.orders';

describe('[Orders] selectAllOrders', () => {
  it('Should return list of Orders as an Array', () => {
    // get initial state
    const initialState = OrdersReducer.initiaOrdersState;

    // mock Order
    const order = new Order({
      tjm_ht: 1200,
      nb_days: 8,
      taux_tva: 20,
      state: StateOrder.OPTION,
      type: 'coaching',
      client: 'Modis',
      comment: 'Merci Modis pour les 10k',
      id: 5,
    });

    // add mock Order in initial state orders
    initialState.orders.push(order);

    // call selector
    const orders = OrdersSelectors.selectAllOrders({
      [OrdersReducer.ordersFeatureKey]: initialState,
    });

    // expect to verif that initialState.orders === [order]
    expect(orders).toEqual([order]);
  });
});

// un deuxième describe avec juste un it dedans pour tester selectOrder
describe('[Orders] selectOrder', () => {
  it('Should return on Order', () => {
    // get initial state
    const initialState = OrdersReducer.initiaOrdersState;

    // mock Order
    const order = new Order({
      tjm_ht: 1200,
      nb_days: 8,
      taux_tva: 20,
      state: StateOrder.OPTION,
      type: 'coaching',
      client: 'Modis',
      comment: 'Merci Modis pour les 10k',
      id: 5,
    });

    // add mock Order in initial state . seletedOrder
    initialState.selectedOrder = order;

    // call selector
    const data = OrdersSelectors.selectOrder({
      [OrdersReducer.ordersFeatureKey]: initialState,
    });

    // expect to verif that initialState.selectedOrder === order
    expect(data).toEqual(order);
  });
});
