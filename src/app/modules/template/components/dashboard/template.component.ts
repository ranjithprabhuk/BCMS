import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from '../../template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  public categories: any[] = [{id: '1', name: 'General', templateIds: ''}];
  public selectedCategory: string = '';

  constructor(private router: Router, private templateService: TemplateService) { }

  ngOnInit(): void {
    this.templateService.getAllCategories().subscribe(category => {
      console.log("Categories >>", category);
      if (category) {
        this.categories = category;
      }
    });
  }

  public manageTemplate(id: string): void {
    this.router.navigateByUrl(`/template/manage/${id}`);
  }

  public onCategoryChange(): void {
    if (this.selectedCategory) {

    }
  }
}
