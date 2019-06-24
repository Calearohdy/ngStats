import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';
import * as moment from 'moment';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  public barChartData: any[];
  public barChartLabel: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barchartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: false
  };

  orders: any;
  orderLabels: string[];
  orderDate: number[];

  constructor(private salesData: OrdersService) {}

  ngOnInit() {
    this.salesData.getOrders(1, 20)
      .subscribe(res => {
        console.log(res);
        const localChartData = this.getChartData(res);
        this.barChartLabel = localChartData.map(date => date[0]).reverse();
        this.barChartData = [{'data': localChartData.map(data => data[1]), 'label': 'Sales'}];
      });
  }

  getChartData(res: Response) {
    this.orders = res['page']['data'];
    const data = this.orders.map(o => o.total);
    const labels = this.orders.map( o => moment(new Date(o.placed)).format('YY-MM-DD'));

    const formattedOrders = this.orders.reduce((acc, current) => {
      acc.push([moment(current.placed).format('YY-MM-DD'), current.total]);
      return acc;
    }, []);

    const arrHelper = [];

    const chartData = formattedOrders.reduce((acc, current) => {
      const key = current[0];
      if (!arrHelper[key]) {
        arrHelper[key] = current;
        acc.push(arrHelper[key]);
      } else {
        arrHelper[key][1] += current[1];
      }

      return acc;
    }, []);

    return chartData;
  }

}
