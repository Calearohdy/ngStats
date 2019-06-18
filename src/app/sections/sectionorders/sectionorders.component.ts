import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/order';
import { OrdersService } from '../../../services/orders.service';
@Component({
  selector: 'app-sectionorders',
  templateUrl: './sectionorders.component.html',
  styleUrls: ['./sectionorders.component.css']
})
export class SectionordersComponent implements OnInit {

  orders: Order[];
  private total = 0;
  private page = 1;
  private limit = 10;
  private loading = false;

  constructor(private salesData: OrdersService) { }

  ngOnInit() {
    this.setOrders();
  }

  setOrders() {
    this.salesData.getOrders(this.page, this.limit)
      .subscribe(res => {
        this.orders = res['page']['data'];
        this.total = res['page'].total;
        this.loading = false;
      });
  }

  goToPrev() {
    this.page--;
  }

  goToNext(): void {
    this.loading = true;
    this.page++;
    this.setOrders();
  }

  goToPage(n: number): void {
    this.page = n;
    this.setOrders();
  }

}
