import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './../spinner/spinner.component';
import { MainSidebarComponent } from '../sidebar/main-sidebar/main-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    SpinnerComponent,
  ],
  declarations: [
    SpinnerComponent,
  ]
})
export class CoreModule { }
