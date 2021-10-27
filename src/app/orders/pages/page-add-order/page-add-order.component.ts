import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import { tryAddtOrderAction } from 'src/app/core/store/orders-store/actions/oreders.actions';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageAddOrderComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}
  public action(item: Order): void {
    this.store.dispatch(tryAddtOrderAction({ order: item }));
  }

  check() {
    console.log('CD PAGE ADD ORDER');
  }
}
