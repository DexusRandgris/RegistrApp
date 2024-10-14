import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Subscription } from 'rxjs';
import QRious from 'qrious';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss'],

})
export class ProfesorComponent  implements OnInit {

  usuario: string = '';
  private authService = inject(AuthService);

  subscriptionAuthService: Subscription = new Subscription();

  private router = inject(Router)

  constructor() { }

  asignaturas = [
    {nombre: 'Religión', seccion: '001D', id: 'REG01'},
    {nombre: 'Naturaleza', seccion: '002D', id: 'NAT01'},
    {nombre: 'Biología', seccion: '003D', id: 'BI01'},
    {nombre: 'Física', seccion: '004D', id: 'FS01'},
    {nombre: 'Artes Visuales' , seccion: '005D', id: 'AV01'},
  ];

  qrData: string = '';
  showQRCode: boolean = false;

  @ViewChild('qrCanvas') qrCanvas!: ElementRef<HTMLCanvasElement>;

  generaQR(asignaturaID: string){
    const fechaActual = new Date();

    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2,'0');
    const dia = String(fechaActual.getDate()).padStart(2,'0');

    const horas = String(fechaActual.getHours()).padStart(2,'0');
    const minutos = String(fechaActual.getMinutes()).padStart(2,'0');
    const segundos = String(fechaActual.getSeconds()).padStart(2,'0');

    const fechaHora = `${año}-${mes}-${dia},${horas}:${minutos}:${segundos}`;
    this.qrData = `http://localhost:8100/reg-asistencia/${asignaturaID}/${this.usuario}/${fechaHora}`;


    this.router.navigate(['/profesor-qr'], { queryParams: { data: this.qrData } });
  }

  detalleAsignatura(): void{
    this.router.navigate(['/detalle-profesor']);
  }

  ngOnInit() {
    this.subscriptionAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    });
  }

}
