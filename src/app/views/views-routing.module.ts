import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecoverpwComponent } from './recoverpw/recoverpw.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { AssitanceComponent } from './assitance/assitance.component';
import { DetalleAsignaturaComponent } from './detalle-asignatura/detalle-asignatura.component';
import { ProfesorQrComponent } from './profesor-qr/profesor-qr.component';
import { DetalleProfesorComponent } from './detalle-profesor/detalle-profesor.component';
import { RegistrarComponent } from './registrar/registrar.component';

//linkear rutas a los componentes para que no se redireccione a la misma página(not Found)
//en pocas palabras, si está declarado acá se podrá linkear

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogoutComponent,
  },
  {
    path: 'notfound', component: NotfoundComponent,
  },
  {
    path: 'recoverpw', component: RecoverpwComponent,
  },
  {
    path: 'alumno', component: AlumnoComponent,
  },
  {
    path: 'profesor', component: ProfesorComponent,
  },
  {
    path: 'assistance', component: AssitanceComponent
  },
  {
    path: 'detalle-asignatura', component: DetalleAsignaturaComponent
  },
  {
    path: 'profesor-qr',component: ProfesorQrComponent
  },
  {
    path: 'detalle-profesor', component: DetalleProfesorComponent
  },
  {
    path: 'registrar', component: RegistrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
