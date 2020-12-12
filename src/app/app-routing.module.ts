import { ClientListModule } from './components/client/client-list/client-list.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'client',
    children: [
      {
        path: 'register',
        loadChildren: () => import('./components/client/client-register/client-register.module').then(m => m.ClientRegisterModule),
      },
      {
        path: 'list',
        loadChildren: () => import('./components/client/client-list/client-list.module').then(m => m.ClientListModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
