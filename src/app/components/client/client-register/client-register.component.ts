import { ClientRegisterService } from './client-register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Client } from '../client.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit {
  spinner: boolean;
  client!: Client;
  form!: FormGroup;

  constructor(
    private clientRegisterService: ClientRegisterService,
    private formBuilder: FormBuilder,
  ) {
    this.spinner = false;
    this.loadForm();
   }

  ngOnInit() {

  }

  save(){

  }

  private editClient(clientId: number, client: Client) {
    this.spinner = true;
    this.clientRegisterService
      .update(clientId, client)
      .pipe(take(1))
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          this.spinner = false;
        }
      );
  }

  private loadForm() {
    this.form = this.formBuilder.group({
      id: [this.client ? this.client.id : null],
      name: [this.client ? this.client.name : null, [Validators.required]],
      age: [this.client ? this.client.age : null, [Validators.required]],
      city: [this.client ? this.client.city : null, [Validators.required]],
    });
  }

}
