import { CoreModule } from './../../shared/modules/core.module';
import { SpinnerComponent } from './../../shared/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRegisterRoutes } from './client-register.routing';
import { ClientRegisterComponent } from './client-register.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRegisterRoutes,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CoreModule
  ],
  declarations: [
    ClientRegisterComponent,
  ]
})
export class ClientRegisterModule { }
