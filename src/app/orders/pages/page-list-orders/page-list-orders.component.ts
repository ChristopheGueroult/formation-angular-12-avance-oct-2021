import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageListOrdersComponent implements OnInit {
  public title = 'List orders and Add an Order';
  public headers: string[];
  // public collection!: Order[];
  public collection$: Subject<Order[]>;
  public states = Object.values(StateOrder);
  // private sub: Subscription;
  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.ordersService.refreshCollection();
    this.collection$ = this.ordersService.collection;
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    //   this.cd.markForCheck();
    // });
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
    this.ordersService.changeState(item, state).subscribe((res) => {
      Object.assign(item, res);
    });
  }
  public goToEdit(id: number, title: string): void {
    this.router.navigate(['orders', 'edit', id]);
    this.title = title;
  }
  public deleteItem(id: number): void {
    this.ordersService.delete(id).subscribe();
  }
  public setTitle(title: string): void {
    this.title = title;
  }
  check() {
    console.log('CD PAGE LIST ORDERS');
  }
}
