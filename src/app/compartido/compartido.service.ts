import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../usuario/interfaces/Sesion';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  constructor(private _snackBar: MatSnackBar) { }

  mostrarAlerta(mensaje: string, tipo: string){
    this._snackBar.open(mensaje,tipo,{
      horizontalPosition: "end",
      verticalPosition:"top",
      duration: 3000
    })
  }

  guardarSersion(sesion: Sesion){
    localStorage.setItem("usuarioSesion",JSON.stringify(sesion));
  }

  obtenerSersion(){
   const sesionString =localStorage.getItem("usuarioSesion");
   const usuarioToken = JSON.parse(sesionString!);
   return usuarioToken;
  }

  eliminarSersion(){
    localStorage.removeItem("usuarioSesion");
   }
}