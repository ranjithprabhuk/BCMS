import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignService } from './campaign.service';
import { CampaignComponent } from './components/campaign/campaign.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignComponent
  }
];

@NgModule({
  declarations: [
    CampaignComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [CampaignService]
})
export class CampaignModule { }
