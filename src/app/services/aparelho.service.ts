import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AparelhoListar } from '../models/aparelho';

@Injectable({
  providedIn: 'root'
})
export class AparelhoService {

  ApiURL = environment.UrlAPI;

  constructor(private http : HttpClient) { }

  GetAparelhos(): Observable<AparelhoListar[]>{
    return this.http.get<AparelhoListar[]>(this.ApiURL);
  }
  DeletarAparelho(id: string | undefined): Observable<any> {
    return this.http.delete(`${this.ApiURL}/${id}`, {
      observe: 'response'
    });
  }
  CriarAparelho(aparelho: AparelhoListar): Observable<AparelhoListar>{
    return this.http.post<AparelhoListar>(this.ApiURL, aparelho);
  }
  GetAparelhoPorId(id: string): Observable<AparelhoListar> {
    return this.http.get<AparelhoListar>(`${this.ApiURL}/${id}`);
  }
  EditarAparelho(aparelho: AparelhoListar): Observable<AparelhoListar> {
    return this.http.put<AparelhoListar>(`${this.ApiURL}/${aparelho.id}`, aparelho);
  }
}
