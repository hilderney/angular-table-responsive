import { ClientRegisterModule } from './components/client/client-register/client-register.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './components/shared/modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSidebarComponent } from './components/shared/sidebar/main-sidebar/main-sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    MainSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    ClientRegisterModule,

  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
