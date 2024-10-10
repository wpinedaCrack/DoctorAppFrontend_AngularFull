import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from '../../usuario/servicios/usuario.service';
import { CompartidoService } from '../../compartido/compartido.service';
import { Login } from '../../usuario/interfaces/Login';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  ocultarPassworld: boolean=false;
  mostrarLoading: boolean=false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private usuarioServicio: UsuarioService,
              private compartidoService: CompartidoService)
  {
    this.formLogin =  this.fb.group({
      username: ['', Validators.required],
      passwold: ['', Validators.required]
    });
  }

  iniciarSesion(){
    this.mostrarLoading = true;
    const request: Login={
      username: this.formLogin.value.username,
      password: this.formLogin.value.password
    };

    this.usuarioServicio.iniciarSesion(request).subscribe({
      next: (response)=>{
        this.compartidoService.guardarSersion(response);
        this.router.navigate(['layout']);
      },
      complete:()=>{
        this.mostrarLoading = false;
      },
      error:(error)=>{
        this.compartidoService.mostrarAlerta(error.error,'Error!');
        this.mostrarLoading = false;
      }
    });
  }

  ngOnInit(): void {  }
}