import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string= '==> Pa las que sea ';
  usuarios: any; // Para almacenar los datos que obtendrás

  constructor(private http: HttpClient) {  } 

   ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')//'https://jsonplaceholder.typicode.com/users')  http://localhost:7287/api/Usuario
    .subscribe( {
      next: response=> this.usuarios = response,
      error: error=> console.log(error),
      complete: ()=> console.log("La Solicitud esta Completa")
    });
   }


}