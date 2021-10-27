import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import { tryUpdateOrderAction } from 'src/app/core/store/orders-store/actions/oreders.actions';
import { selectOrder } from 'src/app/core/store/orders-store/selectors/selectors.orders';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageEditOrderComponent implements OnInit {
  public item$ = this.store.select(selectOrder);
  constructor(private store: Store) {}

  ngOnInit(): void {}

  public action(item: Order): void {
    this.store.dispatch(tryUpdateOrderAction({ order: item }));
  }

  check() {
    console.log('CD PAGE EDIT ORDER');
  }
}
