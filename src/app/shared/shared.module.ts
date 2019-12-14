import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedService } from './shared.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
  ],
  providers: [SharedService],
  exports: [
    HeaderComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
