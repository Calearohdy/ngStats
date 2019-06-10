import { Component, OnInit } from '@angular/core';

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

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabel: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barchartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: false
  };

  constructor() { }

  ngOnInit() {
  }

}
