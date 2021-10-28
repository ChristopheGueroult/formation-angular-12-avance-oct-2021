import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';
import { selectRouteParam, selectUrl } from '../../router.reducer';
import {
  addOrderSuccessAction,
  changeStateAction,
  deleteOrderSuccessAction,
  errorAction,
  getAllOrdersSuccessAction,
  getOrderSuccessAction,
  tryAddtOrderAction,
  tryDeleteOrderAction,
  tryGetAllOrdersAction,
  trygetOrderAction,
  tryUpdateOrderAction,
  updateOrderSuccessAction,
} from '../actions/oreders.actions';

@Injectable()
export class OrdersEffects {
  constructor(
    private actions$: Actions,
    private ordersService: OrdersService,
    private store: Store,
    private router: Router
  ) {}

  getAllOrdersEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryGetAllOrdersAction),
      switchMap(() =>
        this.ordersService.collection.pipe(
          map((orders: Order[]) => getAllOrdersSuccessAction({ orders })),
          catchError((error) => of(errorAction({ error })))
        )
      )
    )
  );

  addOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryAddtOrderAction),
      switchMap(({ order }: { order: Order }) =>
        this.ordersService.add(order).pipe(
          map((order: Order) => addOrderSuccessAction({ order })),
          catchError((error) => of(errorAction({ error })))
        )
      )
    )
  );

  updateOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryUpdateOrderAction),
      switchMap(({ order }: { order: Order }) =>
        this.ordersService.update(order).pipe(
          map((order: Order) => {
            this.router.navigate(['/orders']);
            return updateOrderSuccessAction({ order });
          }),
          catchError((error) => of(errorAction({ error })))
        )
      )
    )
  );

  changeStateEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeStateAction),
      switchMap(({ order, state }: { order: Order; state: StateOrder }) =>
        this.ordersService.changeState(order, state).pipe(
          map((order: Order) => updateOrderSuccessAction({ order })),
          catchError((error) => of(errorAction({ error })))
        )
      )
    )
  );

  deleteOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryDeleteOrderAction),
      switchMap(({ id }: { id: number }) =>
        this.ordersService.delete(id).pipe(
          map(() => deleteOrderSuccessAction({ id })),
          catchError((error) => of(errorAction({ error })))
        )
      )
    )
  );

  getOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(trygetOrderAction),
      switchMap(({ id }: { id: number }) =>
        this.ordersService.getItemById(id).pipe(
          map((order: Order) => getOrderSuccessAction({ order })),
          catchError((error) => of(errorAction({ error })))
        )
      )
    )
  );

  editIdChange$ = createEffect(() =>
    this.store.select(selectUrl).pipe(
      filter((route: string) => {
        return !!route && route.includes('orders/edit');
      }),
      switchMap(() => {
        return this.store.select(selectRouteParam('id'));
      }),
      map((id) => {
        if (id) {
          return trygetOrderAction({ id: Number(id) });
        } else {
          return errorAction({ error: null });
        }
      })
    )
  );
}
