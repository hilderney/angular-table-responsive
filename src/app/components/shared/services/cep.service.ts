import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  baseUrl: string;

  constructor(protected http: HttpClient) {
    this.baseUrl = `https://viacep.com.br/ws`;
  }

  getCepIbge(cep: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${cep}/json/`);
  }

  getUfsIbge(): Observable<any>{
    return this.http.get<any>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
  }

  getMunicipiosPorUf(uf: string): Observable<any>{
    return this.http.get<any>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
  }
}


