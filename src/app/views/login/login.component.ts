import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular'; // Importa el AlertController

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  usuario: string = ''; // Campo de entrada para el usuario
  clave: string = ''; // Campos de entrada para el usuario y clave

  private authService = inject(AuthService);  // Obtener el servicio de autenticación
  private router = inject(Router);  // Obtener el servicio de navegación
  private alertController = inject(AlertController); // Inyecta el AlertController

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed: boolean = false; // Variable para almacenar el estado de loginFailed

  isLoggingIn: boolean = false; // Nueva variable para controlar si se está intentando iniciar sesión

  ngOnInit(): void {
    this.authService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed); // Obtener el estado de loginFailed
  }

  constructor() {}

  isLoading: boolean = false;

  async login(usuario: string, clave: string) {
    this.isLoggingIn = true; // Indicamos que se está intentando iniciar sesión
    this.isLoading = true; // Activar el estado de carga
    await this.authService.buscarBD4(usuario, clave); // Intentar hacer login
    this.isLoading = false; // Desactivar el estado de carga una vez que la autenticación termine

    // Suscribirse al observable para verificar el estado de autenticación
    this.authService.isAuthenticated$.subscribe(async isAuthenticated => {
      if (isAuthenticated) {
        // Login exitoso: redirigir al usuario basado en su rol
        this.authService.usuarioCompleto$.subscribe(usuarioCompleto => {
          if (usuarioCompleto && usuarioCompleto.rol === "Docente") {
            this.usuario = ''; // Limpiar el campo de usuario
            this.clave = ''; // Limpiar el campo de clave
            this.router.navigate(['/profesor']); // Redirigir al usuario docente
          } else if (usuarioCompleto && usuarioCompleto.rol === "Alumno") {
            this.usuario = ''; // Limpiar el campo de usuario
            this.clave = ''; // Limpiar el campo de clave
            this.router.navigate(['/alumno']); // Redirigir al usuario alumno
          }
        });
      } else if (this.isLoggingIn) {  // Solo mostrar el alert si se está intentando iniciar sesión
        // Login fallido: mostrar alerta de error
        await this.mostrarAlertaError();
        this.loginFailed = true; // Mostrar mensaje de error si el login falla
      }
      this.isLoggingIn = false; // Reiniciar el estado después del intento de login
    });
  }

  // Método para manejar la recuperación de contraseña
  forgotPassword() {
    this.router.navigate(['/recoverpw']); // Redirige a la página de recuperación de contraseña
  }

  registrar(){
    this.router.navigate(['/registrar']); // Redirige a la página de registro
  }

  // Método para mostrar la alerta si el login falla
  async mostrarAlertaError() {
    const alert = await this.alertController.create({
      header: 'Error de autenticación',
      message: 'Usuario o clave incorrectos. Por favor, inténtalo nuevamente.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
