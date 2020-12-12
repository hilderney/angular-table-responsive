import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientRegisterComponent } from './client-register.component';

const routes: Routes = [{
  path: '',
  component: ClientRegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRegisterRoutes { }
