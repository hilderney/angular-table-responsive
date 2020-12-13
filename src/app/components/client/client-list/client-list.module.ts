import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../../shared/modules/material.module';

import { ClientListComponent } from './client-list.component';
import { ClientListRoutes } from './client-list.routing';

@NgModule({
  imports: [
    CommonModule,
    ClientListRoutes,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [ClientListComponent]
})
export class ClientListModule { }
