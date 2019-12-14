import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';

import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedService } from './shared.service';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [SharedService],
  exports: [
    HeaderComponent,
    LoaderComponent,
    AlertComponent
  ]
})
export class SharedModule { }
