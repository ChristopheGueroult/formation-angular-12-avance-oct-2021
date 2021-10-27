import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';
import {
  addOrderSuccessAction,
  errorAction,
  getAllOrdersSuccessAction,
  tryAddtOrderAction,
  tryGetAllOrdersAction,
} from '../actions/oreders.actions';

@Injectable()
export class OrdersEffects {
  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
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
}
