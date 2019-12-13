import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TemplateComponent } from './components/campaign/template.component';
import { TemplateService } from './template.service';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent
  }
];

@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [TemplateService]
})
export class TemplateModule { }
