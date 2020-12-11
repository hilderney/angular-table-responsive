/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientRegisterComponent } from './client-register.component';

describe('ClientRegisterComponent', () => {
  let component: ClientRegisterComponent;
  let fixture: ComponentFixture<ClientRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  // must get data from selected id of the list
  // must have a Save button
  // must have a cancel button
  // on save send put data to API
  // must return to the list page
  // nust notify "Cliente {name} Atualizado com sucesso

});
