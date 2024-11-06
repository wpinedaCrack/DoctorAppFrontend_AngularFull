import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompartidoService } from '../compartido.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  username: string = '';
  
  constructor(
    private router: Router,
    private compartidoService: CompartidoService
  ) {}

  ngOnInit(): void {
    const usuarioToken = this.compartidoService.obtenerSersion();
    if (usuarioToken != null) {
      this.username = usuarioToken.username;
    }
  }

  cerrarSesion(){
    this.compartidoService.eliminarSesion();
    this.router.navigate(['login']);
  }

}
