import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { OrdersService } from 'src/app/core/services/orders.service';
import { selectUrl } from '../../router.reducer';
import { toggleSideBarAction } from '../actions/gb.actions';

@Injectable()
export class GbEffects {
  constructor(
    private actions$: Actions,
    private ordersService: OrdersService,
    private store: Store,
    private router: Router
  ) {}

  sideBarffect$ = createEffect(() =>
    this.store.select(selectUrl).pipe(
      filter((route: string) => {
        return (
          !!route && (route.includes('clients') || route.includes('orders'))
        );
      }),
      map((route: string) => {
        // console.log({
        //   show: !!route && (route.includes('edit') || route.includes('add')),
        // });
        return toggleSideBarAction({
          open: !!route && (route.includes('edit') || route.includes('add')),
        });
      })
    )
  );
}
