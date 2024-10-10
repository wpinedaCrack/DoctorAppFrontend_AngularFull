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
  baseUrl: string = environment.production + "usuario/";

  constructor(private http: HttpClient) { }

  iniciarSesion(request: Login): Observable<Sesion> {
    // Corregido: usar comillas invertidas (``) para template literals
    return this.http.post<Sesion>(`${this.baseUrl}login`, request);
  }
}

