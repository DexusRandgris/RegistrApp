import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent  implements OnInit {

  nombre: string ='';
  correo: string ='';
  clave: string ='';
  rol: string = 'Alumno';

  errorMessage: string = '';
  successMessage: string = '';

  private authService =  inject(AuthService);
  private router = inject(Router);
  private alertController = inject(AlertController);

  registroFallido: boolean = false;

  constructor() { }

  ngOnInit() {}

  async validarUsuarioExistente(email: string): Promise<boolean> {
    try{
      const usuarioExistentes = await this.authService.obtenerUsuarios();
      return usuarioExistentes.some(u => u.correo === email);
    } catch(error){
      this.errorMessage = 'Error al validar al usuario';
      await this.mostrarAlerta('Error','Error al validar al usuario. Intenelo de nuevo,');
      return true;
    }
  }

  async registrar(){
    this.errorMessage = '';
    this.successMessage = '';
    this.registroFallido = false;

    if (!this.nombre || !this.correo || !this.clave) {
      this.nombre = '';
      this.clave = '';
      this.correo = '';
      this.errorMessage = 'Todos los campos son obligatorios.';
      this.registroFallido = true;
      await this.mostrarAlerta('Error', this.errorMessage);
      return;
    }

    const usuarioExiste = await this.validarUsuarioExistente(this.correo);
    if(usuarioExiste){
      this.errorMessage = 'El correo electrónico ya se encuentra registrado';
      this.registroFallido = true;
      await this.mostrarAlerta('Error', this.errorMessage);
      return;
    }

    const nuevoUsuario = {
      nombre: this.nombre,
      correo: this.correo,
      clave: this.clave,
      rol: this.rol
    };
    try {
      await this.authService.registrarNuevoUsuario(nuevoUsuario);
      this.successMessage = 'Usuario registrado correctamente';
      await this.mostrarAlerta('Registro realizado', this.successMessage);
    }catch(error) {
      this.errorMessage = 'Error al registrar al usuario. Intentalo nuevamente';
      this.registroFallido = true;
      await this.mostrarAlerta('Error', this.errorMessage);
      return;
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  iniciarSesion(){
    this.router.navigate(['/login']);
  }
}
