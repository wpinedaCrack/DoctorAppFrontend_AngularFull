import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './usuario/login/login.component';
import { LayoutComponent } from './compartido/layout/layout.component';//estaba antes
import { DashboardComponent } from './compartido/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'layout', component: LayoutComponent, pathMatch: 'full' },//quitar

  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },



  // {
  //   path: 'layout',  //layout/dashboard , layout/especialidades
  //   loadChildren: () => import('./compartido/compartido.module').then(m => m.CompartidoModule)//hijos de layout
  // },  implementacion fallida
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }