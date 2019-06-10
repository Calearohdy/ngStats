import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  public pieChartData: number[] = [350, 150, 220];
  public pieChartLabels: string[] = ['cust1', 'cust2', 'cust3'];
  public pieChartType = 'pie';
  public colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
