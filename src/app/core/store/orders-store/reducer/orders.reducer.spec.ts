import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as OrdersActions from '../actions/oreders.actions';
import * as OrdersReducer from './orders.reducer';

describe('[Reducer] orderReducer', () => {
  it('Shoud set orders in initiaOrdersState', () => {
    // quand on va invoquer l'action getAllOrdersSuccessAction, on doi verif :
    // quand te tableau d'orders passé en payload de l'action remplace bien ce que contient
    // le state initial avec le new state return par le reducer après le dispatch de l'action
    const initialState = OrdersReducer.initiaOrdersState;
    // mock d'un tableau d'orders
    const orders = [
      new Order({
        tjm_ht: 1200,
        nb_days: 8,
        taux_tva: 20,
        state: StateOrder.OPTION,
        type: 'coaching',
        client: 'Modis',
        comment: 'Merci Modis pour les 10k',
        id: 5,
      }),
    ];

    const action = OrdersActions.getAllOrdersSuccessAction({ orders });
    const newState = OrdersReducer.ordersReducer(initialState, action);
    expect(newState).toEqual({ ...initialState, orders: orders });
  });

  it('Should add an Order', () => {
    // state initial
    const initialState = OrdersReducer.initiaOrdersState;
    // mock d'un Order
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
    // dispatch l'action addOrderSuccessAction
    const action = OrdersActions.addOrderSuccessAction({ order });

    // return new state comme le fait le reducer
    const newState = OrdersReducer.ordersReducer(initialState, action);

    // expect
    expect(newState).toEqual({
      ...initialState,
      orders: [...initialState.orders, order],
    });
  });
});
