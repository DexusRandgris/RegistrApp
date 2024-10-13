import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit,OnDestroy,ElementRef, ViewChild, inject } from '@angular/core';
import QRious from 'qrious';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-detalle-profesor',
  templateUrl: './detalle-profesor.component.html',
  styleUrls: ['./detalle-profesor.component.scss'],
})
export class DetalleProfesorComponent  implements OnInit, OnDestroy {
  private AuthService = inject(AuthService);
  usuario: string = '';

  subscriptionAuthService: Subscription = new Subscription;

  constructor() { }

  ngOnInit() {}


  @ViewChild('qrCanvas') qrCanvas!: ElementRef<HTMLCanvasElement>; // Referencia al canvas

  qrData: string = ''; // Almacena los datos del QR
  showQRCode: boolean = false; // Controla la visibilidad del código QR


  generarQR(){
    this.showQRCode = true;
    this.qrData = `Nombre: ${this.usuario}`;
    this.createQR(); // Generar el código QR
  }

  //metodo crear QR
  createQR() {
    const qr = new QRious({
      element: this.qrCanvas.nativeElement,
      value: this.qrData,
      size: 256, // Tamaño del QR
      level: 'M' // Nivel de corrección de errores
    });
  }
  ngOnDestroy() {
    this.subscriptionAuthService?.unsubscribe(); // Desuscribirse del observable del estado de autenticación
  }

}
