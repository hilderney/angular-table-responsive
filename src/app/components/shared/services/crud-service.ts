import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export class CrudService<T> {

  baseUrl: string;

  constructor(protected http: HttpClient) {
    this.baseUrl = `private-92a969-processoseletivo1.apiary-mock.com/customers`;
  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`http://${this.baseUrl}`);
  }

  update(id: number, record: T): Observable<Response> {
    return this.http.put<Response>(`https://${this.baseUrl}/${id}`, record);
  }
}
