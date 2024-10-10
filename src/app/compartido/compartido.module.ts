import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent
  ],
  imports: [CommonModule],
  exports: [HttpClientModule, ReactiveFormsModule, FormsModule],
})
export class CompartidoModule {}
