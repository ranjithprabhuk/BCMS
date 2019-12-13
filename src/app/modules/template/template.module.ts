import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TemplateComponent } from './components/dashboard/template.component';
import { TemplateService } from './template.service';
import { TemplateContainer } from './container/template.container';
import { ManageTemplateComponent } from './components/manage/manage.component';

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
        path: 'manage/:id',
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
    SharedModule
  ],
  providers: [TemplateService]
})
export class TemplateModule { }
