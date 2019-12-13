import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CampaignService } from '../../campaign.service';

@Component({
  selector: 'app-campaign-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageCampaignComponent {
  public campaignInfo: any = {};
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};

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

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }


  public getTemplate(id: string): void {
    this.campaignService.getTemplateById(id).subscribe((response) => {
      console.log("get responsee", response);
    });
  }

  public cancelCampaign(): void {
    this.router.navigateByUrl('/campaign/dashboard');
  }

  public saveCampaign(): void {

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
