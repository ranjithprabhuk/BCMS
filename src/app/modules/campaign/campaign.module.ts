import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CampaignContainer } from './container/campaign.container';
import { CampaignComponent } from './components/dashboard/campaign.component';
import { ManageCampaignComponent } from './components/manage/manage.component';
import { CampaignService } from './campaign.service';

const routes: Routes = [
  {
    path: '',
    component: CampaignContainer,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: CampaignComponent
      },
      {
        path: 'manage/:id',
        component: ManageCampaignComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    CampaignContainer,
    CampaignComponent,
    ManageCampaignComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [CampaignService],
})
export class CampaignModule { }
