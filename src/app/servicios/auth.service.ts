import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { WebService } from './web.service';
import { UsuarioAPI } from '../models/UsuarioAPI.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private direccionSubject = new BehaviorSubject<string>('');
  direccion$ = this.direccionSubject.asObservable();

  private usuarioCompletoSubject = new BehaviorSubject<UsuarioAPI | null>(null);
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable();

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();

/*   verfCuenta(direccion: string, clave: string){
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

  webservice = inject(WebService);
  async verfCuenta(direccion: string, clave: string){
    const url = 'https://67047048ab8a8f892733d8cf.mockapi.io/api/v1'
    const res = await this.webservice.request('GET', url, 'users') as Array<UsuarioAPI>;

    const user = res.find(u => u.correo === direccion && u.clave === clave);
    if (user) {
      console.log('Autenticación exitosa!');
      console.log(user);
      this.isAuthenticatedSubject.next(true);
      this.direccionSubject.next(user.name);
      this.usuarioCompletoSubject.next(user);
      this.loginFailedSubject.next(false);
    } else {
      this.isAuthenticatedSubject.next(false);
      this.loginFailedSubject.next(true);
      console.log('No encontrado', res)
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
