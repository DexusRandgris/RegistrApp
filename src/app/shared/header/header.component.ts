import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  nombre: string = '';
  datos = inject(DatosService);
  subscriptionDatos: Subscription = new Subscription;

  constructor() { }

  ngOnInit() {
    this.subscriptionDatos = this.datos.nombre$.subscribe(datos => {
      this.nombre = datos;
    });
  }

}
