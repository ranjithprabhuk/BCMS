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
  public templates: any[] = [{templateId: '1', templateName: 'General', templateIds: ''}]
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
      this.templateService.getAllTemplates(this.selectedCategory).subscribe(templates => {
        if (templates) {
          this.templates = templates;
        }
      });
    }
  }

  public getClassName(id: string): string {
    const value = Number(id) % 8;
    if (value) {
      switch(value) {
        case 1: return 'bg-primary';
        case 2: return 'bg-secondary';
        case 3: return 'bg-success';
        case 4: return 'bg-danger';
        case 5: return 'bg-warning';
        case 6: return 'bg-info';
        case 7: return 'bg-light';
        case 0: return 'bg-dark';
      }
    }
  }
}
