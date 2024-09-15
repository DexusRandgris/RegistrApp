import { Component, inject, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  nombre: string = '';

  datos = inject(DatosService)

  constructor() { }

  ngOnInit() {}

  saludar(){
    console.log("Hola: " + this.nombre);
  }

  guardarNombre(){
    this.datos.setNombre(this.nombre);
    console.log("Nombre guardado: " + this.nombre);
  }

}
