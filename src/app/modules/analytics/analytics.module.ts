import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AnalyticsService } from './analytics.service';
import { AnalyticsContainer } from './container/analytics.container';
import { AnalyticsComponent } from './components/dashboard/analytics.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsContainer,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: AnalyticsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AnalyticsContainer,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [AnalyticsService],
})
export class AnalyticsModule { }
