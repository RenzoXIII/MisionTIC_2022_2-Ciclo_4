import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:'inicio',
    component: InicioComponent,
    title: 'Inicio'
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(x => x.SeguridadModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modulos/admin/admin.module').then(x => x.AdminModule)
  },
  {
    path: '**',
    component: ErrorComponent,
    title: 'Error'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
