// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { LayoutComponent } from './layout/layout.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// // import { AppRoutingModule } from '../app-routing.module';
// import { MaterialModule } from '../material/material.module';
// import { LayoutRoutingModule } from './layout-routing.module';

// @NgModule({
//   declarations: [
//     LayoutComponent,
//     DashboardComponent    
//   ],
//   imports: [CommonModule,MatToolbarModule,BrowserAnimationsModule,
//             MaterialModule,MatIconModule,//AppRoutingModule,
//             LayoutRoutingModule],
//   exports: [HttpClientModule, ReactiveFormsModule, FormsModule],
// })
// export class CompartidoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module'; // No es necesario aquí pero servia bien
import { MaterialModule } from '../material/material.module';
//import { LayoutRoutingModule } from './layout-routing.module'; // Verifica que esta ruta sea correcta

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    AppRoutingModule //en teoria lo debo quitar por LayoutRoutingModule
    //LayoutRoutingModule //wpineda mala implementacion Verifica que este módulo exista y esté exportando RouterModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule   
  ],
})
export class CompartidoModule {}