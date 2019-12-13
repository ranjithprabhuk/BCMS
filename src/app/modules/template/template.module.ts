import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService, MarkdownEditorService  } from '@syncfusion/ej2-angular-richtexteditor';

import { SharedModule } from '../../shared/shared.module';
import { TemplateComponent } from './components/dashboard/template.component';
import { TemplateService } from './template.service';
import { TemplateContainer } from './container/template.container';
import { ManageTemplateComponent } from './components/manage/manage.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: TemplateContainer,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: TemplateComponent
      },
      {
        path: 'manage/:categoryId/:templateId',
        component: ManageTemplateComponent
      },
      {
        path: 'manage/:categoryId',
        component: ManageTemplateComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    TemplateContainer,
    TemplateComponent,
    ManageTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    RichTextEditorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TemplateService, ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService ],
})
export class TemplateModule { }
