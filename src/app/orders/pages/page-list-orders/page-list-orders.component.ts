import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import {
  changeStateAction,
  tryDeleteOrderAction,
  tryGetAllOrdersAction,
} from 'src/app/core/store/orders-store/actions/oreders.actions';
import { selectAllOrders } from 'src/app/core/store/orders-store/selectors/selectors.orders';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageListOrdersComponent implements OnInit {
  public title = 'List orders and Add an Order';
  public headers: string[];
  public collection$ = this.store.select(selectAllOrders);
  public states = Object.values(StateOrder);

  constructor(private router: Router, private store: Store) {
    this.store.dispatch(tryGetAllOrdersAction());
    this.headers = [
      'Action',
      'Type',
      'Name',
      'Nb Jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
  }
  ngOnInit(): void {}
  changeTitle(): void {
    this.title = 'My new title';
  }
  changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.store.dispatch(changeStateAction({ order: item, state }));
  }
  public goToEdit(id: number, title: string): void {
    this.router.navigate(['orders', 'edit', id]);
    this.title = title;
  }
  public deleteItem(id: number): void {
    this.store.dispatch(tryDeleteOrderAction({ id }));
  }
  public setTitle(title: string): void {
    this.title = title;
  }
}
