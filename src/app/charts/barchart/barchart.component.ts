import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';
import * as moment from 'moment';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 72, 80, 69, 75, 90, 91, 87], label: 'Sale Grades' },
  { data: [62, 76, 81, 79, 73, 95, 81, 89], label: 'Sale Grades' },
  { data: [65, 72, 80, 69, 75, 99, 71, 77], label: 'Sale Grades' }
];

const SAMPLE_BARCHART_LABELS: string[] = [
  'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8',
];

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
