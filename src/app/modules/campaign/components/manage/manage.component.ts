import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampaignService } from '../../campaign.service';

@Component({
  selector: 'app-campaign-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageCampaignComponent {
  constructor(
    private router: Router,
    private campaignService: CampaignService,
    private activatedRoute: ActivatedRoute,
  ){ }

  ngOnInit(): void {
    const { params } = this.activatedRoute.snapshot;
    if (params && params.id !== 'new') {
      this.getTemplate(params.id);
    }
  }


  public getTemplate(id: string): void {
    this.campaignService.getTemplateById(id).subscribe((response) => {
      console.log("get responsee", response);
    });
  }

  public cancelTemplate(): void {
    this.router.navigateByUrl('/template/dashboard');
  }
}
