import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../../shared/services/crud-service';
import { Client } from '../../client';


@Injectable({
  providedIn: 'root',
})

export class ClientListService extends CrudService<Client> {
  constructor(protected http: HttpClient) {
    super(http);
  }
}
