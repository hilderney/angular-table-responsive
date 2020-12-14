import { SpinnerComponent } from './../../shared/spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MaterialModule } from './../../shared/modules/material.module';

import { ClientListComponent } from './client-list.component';
import { ClientListRoutes } from './client-list.routing';


@NgModule({
  imports: [
    CommonModule,
    ClientListRoutes,
    ReactiveFormsModule,
    MaterialModule,
    SweetAlert2Module
  ],
  declarations: [
    ClientListComponent,
    SpinnerComponent,
  ]
})
export class ClientListModule { }
