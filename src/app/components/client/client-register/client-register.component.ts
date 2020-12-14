import { ClientRegisterService } from './client-register.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Client } from '../client.model';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit {

  spinner: boolean;
  model!: Client;
  clientForm!: FormGroup;

  constructor(
    private clientRegisterService: ClientRegisterService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.spinner = false;
    this.model = new Client();
   }

  ngOnInit() {
    this.setClientModel();
    this.initializeForm();
    console.log(this.model);
  }

  save(){

  }

  private editClient(clientId: number, client: Client) {
    this.spinner = true;
    console.log(this.clientForm);
    return null;
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

  private setClientModel() {
    this.model.id = this.activatedRoute.snapshot.params.id ? this.activatedRoute.snapshot.params.id : null;
    this.model.name = this.activatedRoute.snapshot.params.name ? this.activatedRoute.snapshot.params.name : null;
    this.model.age = this.activatedRoute.snapshot.params.age ? this.activatedRoute.snapshot.params.age : null;
    this.model.city = this.activatedRoute.snapshot.params.city ? this.activatedRoute.snapshot.params.city : null;
  }

  private initializeForm() {
    this.clientForm = this.formBuilder.group({
      id: [this.model.id ? this.model.id : null],
      name: [this.model.name ? this.model.name : null, [Validators.required]],
      age: [this.model.age ? this.model.age : null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      city: [this.model.city ? this.model.city : null, [Validators.required]],
    });
  }

}
