import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  nombre: string = '';
  direccion: string = '';
  private sharedService = inject(DatosService);
  private authService = inject(AuthService);
  private router = inject(Router);
  subscriptionDatos: Subscription = new Subscription();
  subscriptionAuthService: Subscription = new Subscription();
  subscriptionRouter: Subscription = new Subscription(); // Suscripción al router
  isLogin: boolean = false; // Variable para almacenar el estado de login

  constructor() { }

  ngOnInit() {
    // Suscribirse a los cambios de dirección y nombre
    this.subscriptionDatos = this.sharedService.nombre$.subscribe(nombre => {
      this.nombre = nombre;
      console.log('Header: ', nombre);
    });

    this.subscriptionAuthService = this.authService.usuario$.subscribe(direccion => {
      this.direccion = direccion;
      console.log('Header: ', direccion);
    });

    // Suscribirse a los cambios de la ruta
    this.subscriptionRouter = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verificar si estamos en la página principal ('/') o en la de login ('/login')
        this.isLogin = this.router.url === '/' || this.router.url === '/login';
      }
    });
  }

  ngOnDestroy() {
    this.subscriptionDatos?.unsubscribe();
    this.subscriptionAuthService?.unsubscribe();
    this.subscriptionRouter?.unsubscribe(); // Desuscribirse de la suscripción del router
  }
}
