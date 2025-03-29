import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnderecoListar } from '../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  ApiURL = environment.EnderecoURL;

  constructor(private http : HttpClient) { }

  GetEnderecos(page: number, perPage: number): Observable<EnderecoListar[]> {
    return this.http.get<EnderecoListar[]>(`${this.ApiURL}/${page}/${perPage}`);
  }
  DeletarEndereco(id: string | undefined): Observable<any> {
    return this.http.delete(`${this.ApiURL}/${id}`, {
      observe: 'response'
    });
  }
  CriarEndereco(endereco: EnderecoListar): Observable<EnderecoListar>{
    endereco.id = undefined;
    return this.http.post<EnderecoListar>(this.ApiURL, endereco);
  }
  GetEnderecoPorId(id: string): Observable<EnderecoListar> {
    return this.http.get<EnderecoListar>(`${this.ApiURL}/${id}`);
  }
  EditarEndereco(endereco: EnderecoListar): Observable<EnderecoListar> {
    return this.http.put<EnderecoListar>(`${this.ApiURL}/${endereco.id}`, endereco);
  }
}
