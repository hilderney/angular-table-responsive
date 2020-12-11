import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { take } from 'rxjs/operators';

import { Client, ClientList } from './../client.model';
import { ClientListService } from './client-list.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  spinner: boolean;
  fakeClientList: any[];
  client: Client;
  clientList: ClientList;

  constructor(
    private clientlistService: ClientListService,

  ) {
    this.spinner = false;
    this.fakeClientList = this.getFakeList();
    this.client = { id: 0, name: '', age: 0, city: ''};
    this.clientList = {clients: []};
   }

  ngOnInit() {
    this.loadClientList();
  }

  private loadClientList() {
    this.spinner = true;
    this.clientlistService
      .getAll()
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
        },
      );

  }

  private getFakeList(): any[] {
    return [
      {"id": 1, "name": "Caroline Westernick", "age": 21, "city": "NYC"},
      {"id": 2, "name": "Adam Mengol", "age": 31, "city": "London"},
      {"id": 4, "name": "João Maria José", "age": 25, "city": "Rio de Janeiro"},
      {"id": 5, "name": "Sebastian Urel", "age": 27, "city": "Toronto"},
      {"id": 6, "name": "Leon Colda Dongal", "age": 22, "city": "Ibiza"},
      {"id": 11, "name": "Ted Honda Connel", "age": 33, "city": "Amsterdam"},
      {"id": 13, "name": "Loriel Merita", "age": 24, "city": "Berlim"},
      {"id": 14, "name": "Spliker Sonik", "age": 46, "city": "Tokio"},
      {"id": 15, "name": "Fernando Ogawa", "age": 30, "city": "Porto Alegre"},
      {"id": 17, "name": "Abdul Hamid", "age": 48, "city": "Daca"},
      {"id": 18, "name": "Ariston Alex", "age": 25, "city": "Kaohsiung"},
      {"id": 21, "name": "Chris Arthus", "age": 22, "city": "Naipidau"},
      {"id": 22, "name": "Katty Deanna", "age": 19, "city": "Hanói"},
      {"id": 23, "name": "Emily Ethel", "age": 38, "city": "Katmandu"},
      {"id": 25, "name": "Nico Teofil", "age": 38, "city": "Naggu"},
      {"id": 30, "name": "Calvin Joseph", "age": 38, "city": "Kabul"},
      {"id": 32, "name": "Amberlee Thomas", "age": 38, "city": "Bagdá"},
      {"id": 33, "name": "Jacob Tyler", "age": 38, "city": "Paris"}
    ];
  }

}
