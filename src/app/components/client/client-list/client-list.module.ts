import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientListComponent } from './client-list.component';
import { ClientListRoutes } from './client-list.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClientListRoutes,
    ReactiveFormsModule
  ],
  declarations: [ClientListComponent]
})
export class ClientListModule { }
