import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../analytics.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

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
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
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
