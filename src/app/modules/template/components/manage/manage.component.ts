import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplateService } from '../../template.service';
import { SharedService } from '../../../../shared/shared.service';

@Component({
  selector: 'app-template-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageTemplateComponent {
  public templateInfo: any = {
    userdId: 1234,
    name: 'Template Name',
    subject: 'Subject',
    content: 'UI template content',
    toListContacts: ['email@sdsd.com'],
    toListAlias: ['developer']
  };
  public editorHeight: number = window.innerHeight - 240;
  public inlineMode: object = { enable: false, onSelection: true };
  public tools: object = {
    items: ['Undo', 'Redo', '|',
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'SubScript', 'SuperScript', '|',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen', 'CreateTable']
  };

  constructor(
    private router: Router,
    private templateService: TemplateService,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService
  ) { }


  ngOnInit(): void {
    const { params } = this.activatedRoute.snapshot;
    if (params && params.categoryId !== 'new') {
      this.getTemplate(params.categoryId, params.templateId);
    }
  }

  public saveTemplate(): void {
    this.templateService.saveTemplate(this.templateInfo).subscribe((response) => {
      console.log("save responsee", response);
      if (response) {
        this.router.navigateByUrl('/template/dashboard');
        this.sharedService.alertMessage(`Successfully saved the template: ${response.id}`);
      }
    });
  }

  public getTemplate(categoryId: string, templateId: string): void {
    this.templateService.getAllTemplates(categoryId).subscribe((categories) => {
      const selectedTemplate = (categories || []).find(category => category && category.templateId == templateId);
      if (selectedTemplate) {
        this.templateInfo.content = selectedTemplate.template;
        this.templateInfo.templateName = selectedTemplate.template;
      }
    });
  }

  public getTemplateValue(template): void {
    this.templateInfo.content = template.value;
  }

  public cancelTemplate(): void {
    this.router.navigateByUrl('/template/dashboard');
  }
}
