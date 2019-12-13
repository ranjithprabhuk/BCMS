import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../analytics.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
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
