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


  direccion: string = '';
  nombre: string = '';
   // @ts-ignore
  nombreApellido;
  private authService = inject(AuthService);

  subscriptionDatos: Subscription = new Subscription();
  subscriptionAuthService: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.subscriptionAuthService = this.authService.direccion$.subscribe(direccion => {
      this.direccion = direccion;
    });

    this.subscriptionAuthService = this.authService.nombreApellido$.subscribe(nombreApellido => {
      this.nombreApellido = nombreApellido;
    });
  }

  ngOnDestroy(){
    this.subscriptionDatos?.unsubscribe();
    this.subscriptionAuthService?.unsubscribe();
  }
}
