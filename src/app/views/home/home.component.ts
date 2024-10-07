import { Subscription } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  nombre: string = '';

  datos = inject(DatosService)

  direccion: string = '';
  private authService = inject(AuthService);

  subscriptionAuthService: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.subscriptionAuthService = this.authService.usuario$.subscribe(direccion => {
      this.direccion = direccion;
      console.log('Header: ', direccion);
    });
  }

  saludar(){
    console.log("Hola: " + this.nombre);
  }

  guardarNombre(){
    this.datos.setNombre(this.nombre);
    console.log("Nombre guardado: " + this.nombre);
  }

}
