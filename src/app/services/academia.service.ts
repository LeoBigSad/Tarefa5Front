import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcademiaListar } from '../models/academia';

@Injectable({
  providedIn: 'root'
})
export class AcademiaService {

  ApiURL = environment.UrlAPI;

  constructor(private http : HttpClient) { }

  GetAcademias(): Observable<AcademiaListar[]>{
    return this.http.get<AcademiaListar[]>(this.ApiURL);
  }
  DeletarAcademias(id: string | undefined): Observable<any> {
    return this.http.delete(`${this.ApiURL}/${id}`, {
      observe: 'response'
    });
  }
  CriarAcademia(academia: AcademiaListar): Observable<AcademiaListar>{
    return this.http.post<AcademiaListar>(this.ApiURL, academia);
  }
  GetAcademiaPorId(id: string): Observable<AcademiaListar> {
    return this.http.get<AcademiaListar>(`${this.ApiURL}/${id}`);
  }
  EditarAcademia(academia: AcademiaListar): Observable<AcademiaListar> {
    return this.http.put<AcademiaListar>(`${this.ApiURL}/${academia.id}`, academia);
  }
}
