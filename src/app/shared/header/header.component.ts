import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  nombre: string = '';
  private sharedService = inject(DatosService);

  direccion: string = '';
  private authService = inject(AuthService);

  subscriptionDatos: Subscription = new Subscription();
  subscriptionAuthService: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.subscriptionDatos = this.sharedService.nombre$.subscribe(nombre =>{
      this.nombre = nombre
      console.log('Header: ', nombre);
    });

    this.subscriptionAuthService = this.authService.usuario$.subscribe(direccion => {
      this.direccion = direccion;
      console.log('Header: ', direccion);
    });
  }

  ngOnDestroy(){
    this.subscriptionDatos?.unsubscribe();
    this.subscriptionAuthService?.unsubscribe();
  }
}
