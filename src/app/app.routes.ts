import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',  //ya que están importados en el app-routing.module.ts, se redirecciona a las otras rutas al iniciar la app //no se toca >:
    loadChildren: () => import('./views/views.module').then((m) => m.ViewsModule), //load children es para cargar modulos dinamicamente y puedan ser visibles en tiempo real
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**', redirectTo: 'notfound'
  }
];
