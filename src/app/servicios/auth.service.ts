import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {usuariosSimulados } from '../models/data.models'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private direccionSubject = new BehaviorSubject<string>('');
  direccion$ = this.direccionSubject.asObservable();

  private rolSubject = new BehaviorSubject<string | null>(null);
  rol$ = this.rolSubject.asObservable();

  private nombreApellidoSubject = new BehaviorSubject<string | null>(null);
  nombreApellido$ = this.nombreApellidoSubject.asObservable();

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();

/* verfCuenta(direccion: string, clave: string){
    if(direccion === 'profesor@gmail.com' && clave === 'profesor'){
      this.isAuthenticatedSubject.next(true);
      this.direccionSubject.next(direccion);
      this.loginFailedSubject.next(false);
    }else if (direccion === 'alumno@gmail.com' && clave === 'alumno'){
      this.isAuthenticatedSubject.next(true);
      this.direccionSubject.next(direccion);
      this.loginFailedSubject.next(false);
    }else{
      this.isAuthenticatedSubject.next(false);
      this.loginFailedSubject.next(true);
    }
  } */

  verfCuenta2(direccion: string, clave: string): void {
    const usuarioEncontrado = usuariosSimulados.find(
      u => u.direccion === direccion && u.clave === clave
    );

    if (usuarioEncontrado){
      this.isAuthenticatedSubject.next(true);
      this.direccionSubject.next(usuarioEncontrado.direccion);
      this.loginFailedSubject.next(false);
      this.rolSubject.next(usuarioEncontrado.rol);
      this.nombreApellidoSubject.next(`${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`);
    } else {
      this.isAuthenticatedSubject.next(false);
      this.loginFailedSubject.next(true);
      this.rolSubject.next(null);
      this.nombreApellidoSubject.next(null);
    }
  }


  logout(): void {
    this.direccionSubject.next('');
    this.isAuthenticatedSubject.next(false);
    this.loginFailedSubject.next(false);
  }

  isLoggedIn(){
    return this.isAuthenticated$;
  }
}
