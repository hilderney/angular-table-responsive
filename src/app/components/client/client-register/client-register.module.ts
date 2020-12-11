import { SpinnerComponent } from './../../shared/spinner/spinner.component';
import { MaterialModule } from './../../shared/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRegisterRoutes } from './client-register.routing';
import { ClientRegisterComponent } from './client-register.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRegisterRoutes,
    MaterialModule
  ],
  declarations: [
    ClientRegisterComponent,
    SpinnerComponent
  ]
})
export class ClientRegisterModule { }
