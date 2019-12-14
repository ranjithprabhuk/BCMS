import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    RouterModule
  ],
  providers: [SharedService],
  exports: [
    HeaderComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
