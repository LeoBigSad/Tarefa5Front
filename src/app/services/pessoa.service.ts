import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoaListar } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  ApiURL = environment.UrlAPI;

  constructor(private http : HttpClient) { }

  GetPessoas(): Observable<PessoaListar[]>{
    return this.http.get<PessoaListar[]>(this.ApiURL);
  }
  DeletarPessoa(id: string | undefined): Observable<any> {
    return this.http.delete(`${this.ApiURL}/${id}`, {
      observe: 'response'
    });
  }
  CriarPessoa(pessoa: PessoaListar): Observable<PessoaListar>{
    return this.http.post<PessoaListar>(this.ApiURL, pessoa);
  }
  GetPessoaPorId(id: string): Observable<PessoaListar> {
    return this.http.get<PessoaListar>(`${this.ApiURL}/${id}`);
  }
  EditarPessoa(pessoa: PessoaListar): Observable<PessoaListar> {
    return this.http.put<PessoaListar>(`${this.ApiURL}/${pessoa.id}`, pessoa);
  }
}
