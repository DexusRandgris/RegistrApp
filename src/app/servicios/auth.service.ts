import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private direccionSubject = new BehaviorSubject<string>('');
  direccion$ = this.direccionSubject.asObservable();

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();

  verfCuenta(direccion: string, clave: string){
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
