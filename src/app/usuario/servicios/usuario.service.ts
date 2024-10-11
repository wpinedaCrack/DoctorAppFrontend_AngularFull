import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/Login';
import { Sesion } from '../interfaces/Sesion';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl:string = environment.apiUrl + "Usuario/"; 

  constructor(private http: HttpClient) { }

  iniciarSesion(request: Login): Observable<Sesion> {
    console.log("Request enviado: ", request);
    return this.http.post<Sesion>(`${this.baseUrl}login`, request);
  }
}