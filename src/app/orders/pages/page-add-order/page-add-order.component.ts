import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageAddOrderComponent implements OnInit {
  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  action(item: Order): void {
    this.ordersService.add(item).subscribe((res) => {
      // this.router.navigate(['orders']);
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  check() {
    console.log('CD PAGE ADD ORDER');
  }
}
