import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecoverpwComponent } from './recoverpw/recoverpw.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';

//linkear rutas a los componentes para que no se redireccione a la misma página(not Found)
//en pocas palabras, si está declarado acá se podrá linkear

const routes: Routes = [
  {
    path: '', component: HomeComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
