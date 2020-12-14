import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  imports: [
    CommonModule,
    SweetAlert2Module.forRoot()
  ],
  declarations: []
})
export class SweetAlertModule { }
