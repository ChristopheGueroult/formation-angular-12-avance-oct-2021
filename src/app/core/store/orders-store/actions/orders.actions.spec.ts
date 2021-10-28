import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as OrdersActions from './oreders.actions';

describe('[Action] tryGetAllOrdersAction', () => {
  it('Should create action tryGetAllOrdersAction', () => {
    const action = OrdersActions.tryGetAllOrdersAction();
    expect(action).toEqual({
      type: '[Orders] try get all orders',
    });
  });

  it('Should create getAllOrdersSuccessAction', () => {
    // mock de Order[]
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
    expect(action).toEqual({
      type: '[Orders]  get all orders success',
      orders: orders,
    });
  });
});
