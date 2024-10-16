import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recoverpw',
  templateUrl: './recoverpw.component.html',
  styleUrls: ['./recoverpw.component.scss'],
})
export class RecoverpwComponent  implements OnInit {

  private alertController = inject(AlertController);

  direccion: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor() { }

  async recuperar(direccion: string){
    if(direccion === ''){
      this.errorMessage = 'Debe ingresar su dirección de correo electrónico';
      await this.mostrarAlerta('Error',this.errorMessage)
      return;
    }
    else{
      this.successMessage = 'Se ha enviado un correo de recuperación a su dirección de correo electrónico';
      await this.mostrarAlerta('Recuperación de contraseña',this.successMessage);
      this.direccion = '';
      this.errorMessage = '';
      this.successMessage = '';
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


  ngOnInit() {}

}
