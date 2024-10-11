import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';  //casi mitad del curso
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar esto

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Aquí se añade el módulo de formularios reactivos
    MaterialModule
  ],
  exports:[
    LoginComponent
  ]

})
export class UsuarioModule { }
