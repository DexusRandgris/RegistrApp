import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecoverpwComponent } from './recoverpw/recoverpw.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { AssitanceComponent } from './assitance/assitance.component';
import { DetalleAsignaturaComponent } from './detalle-asignatura/detalle-asignatura.component';
import { ProfesorQrComponent } from './profesor-qr/profesor-qr.component';
import { DetalleProfesorComponent } from './detalle-profesor/detalle-profesor.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [HomeComponent,
    LogoutComponent,
    NotfoundComponent,
    RecoverpwComponent,
    LoginComponent,AlumnoComponent,
    ProfesorComponent,AssitanceComponent,
    DetalleAsignaturaComponent,
    ProfesorQrComponent,
    DetalleProfesorComponent,
    RegistrarComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    IonicModule,
    FormsModule,
    SharedModule
  ]
})
export class ViewsModule { }
