import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService, MarkdownEditorService  } from '@syncfusion/ej2-angular-richtexteditor';

import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AnalyticsService } from './analytics.service';
import { AnalyticsContainer } from './container/analytics.container';
import { AnalyticsComponent } from './components/dashboard/analytics.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsContainer,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: AnalyticsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AnalyticsContainer,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    RichTextEditorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AnalyticsService],
})
export class TemplateModule { }
