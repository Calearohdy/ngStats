import { Component, OnInit } from '@angular/core';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 45, 56, 77, 90, 32, 60], label: 'X'},
  { data: [22, 65, 52, 87, 60, 66, 50], label: 'Y'},
  { data: [62, 75, 58, 97, 80, 33, 90], label: 'Z'}
];

const LINE_CHART_SAMPLE_LABELS: string[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
];

const LINE_COLORS: any[] = [
  {
    backgroundColor: 'rgba(6, 214, 160, 0.2)',
    borderColor: 'rgba(0, 200, 140, 0.5)',
    pointBackgroundColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555'
  },
  {
    backgroundColor: 'rgba(214, 214, 160, 0.2)',
    borderColor: 'rgba(0, 200, 140, 0.5)',
    pointBackgroundColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555'
  },
  {
    backgroundColor: 'rgba(6, 6, 160, 0.2)',
    borderColor: 'rgba(0, 200, 140, 0.5)',
    pointBackgroundColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555'
  }
];

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  public lineChartData: any[] = LINE_CHART_SAMPLE_DATA;
  public lineChartLabels: string[] = LINE_CHART_SAMPLE_LABELS;
  public lineChartType = 'line';
  public lineChartOptions: any =  {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartColors = LINE_COLORS;

  constructor() { }

  ngOnInit() {
  }

}
