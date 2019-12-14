import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../analytics.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,

  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Total Mails' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Mails Opened' },
    // { data: [23, 56, 23, 10, 71, 12, 20], label: 'Links Clicked' },
  ];

  public lineChartColors: Color[] = [
    { // red
      backgroundColor: 'rgba(89,49,150,1)',
      borderColor: 'white',
      pointBackgroundColor: 'rgba(89,49,150,0.5)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(89,49,150,0.7)'
    },
    { // red
      backgroundColor: 'rgba(19,185,85,1)',
      borderColor: 'white',
      pointBackgroundColor: 'rgba(19,185,85,0.5)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(19,185,85,0.7)'
    },
    { // red
      backgroundColor: 'rgba(239,163,29,1)',
      borderColor: 'white',
      pointBackgroundColor: 'rgba(239,163,29,0.5)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(239,163,29,0.7)'
    },
  ];

  constructor(private router: Router, private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    this.getAnalyticsInfo();
  }

  getAnalyticsInfo(): void {
    this.analyticsService.getAnalyticsInfo().subscribe(category => {
      console.log("Analytics >>", category);
    })
  }
}
