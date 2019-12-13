import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from '../../template.service';

@Component({
  selector: 'app-template-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageTemplateComponent {
  constructor(private router: Router, private templateService: TemplateService){ }
  @ViewChild('valueTemplate') valueTemplate;

  public templateInfo: any = { name: '', value: ''};
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

  public saveTemplate(): void {
    this.templateService.getTemplateById(this.templateInfo).subscribe((response) => {
      console.log("responsee", response);
    });
  }

  public getTemplateValue(template): void {
    this.templateInfo.value = template.value;
  }

  public cancelTemplate(): void {
    this.router.navigateByUrl('/template/dashboard');
  }
}
