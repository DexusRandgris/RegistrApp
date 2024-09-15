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


@NgModule({
  declarations: [HomeComponent,
    LogoutComponent,
    NotfoundComponent,
    RecoverpwComponent,
    LoginComponent,AlumnoComponent,
    ProfesorComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    IonicModule,
    FormsModule,
    SharedModule
  ]
})
export class ViewsModule { }
