import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignService } from '../../campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent {
  constructor(private router: Router, private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaignService.getAllCategories().subscribe(category => {
      console.log("Categories >>", category);
    })
  }

  public manageTemplate(id: string): void {
    this.router.navigateByUrl(`/campaign/manage/${id}`);
  }
}
