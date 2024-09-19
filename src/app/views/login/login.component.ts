import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  direccion: string = '';
  clave: string = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();

  // @ts-ignore
  loginFailed: boolean;

  ngOnInit(): void {
    this.loginFailed$.subscribe(loginFailed =>{
      this.loginFailed = loginFailed;
    });
   }

  constructor() { }

  login(direccion: string, clave: string): void{
    this.authService.verfCuenta(direccion, clave);

    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated){
        if(direccion === 'profesor@gmail.com'){
          this.direccion = '';
          this.clave = '';
          this.router.navigate(['/profesor']);
        } else if (direccion === 'alumno@gmail.com'){
          this.direccion = '';
          this.clave = '';
          this.router.navigate(['/alumno']);
        }
      }
      else{
        this.loginFailed = true;
      }
    });
  }

}
