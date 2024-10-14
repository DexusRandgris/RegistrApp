import { Component, OnInit, inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import QRious from 'qrious';


@Component({
  selector: 'app-profesor-qr',
  templateUrl: './profesor-qr.component.html',
  styleUrls: ['./profesor-qr.component.scss'],
})
export class ProfesorQrComponent  implements OnInit,AfterViewInit {

  qrData: string = '';
  private route = inject(ActivatedRoute)
  @ViewChild('qrCanvas') qrCanvas!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.qrData = params['data'];
      console.log('Datos recibidos para el QR:', this.qrData);
    });
  }

  ngAfterViewInit() {
    if (this.qrData) {
      this.crearQR();
    }
  }

  crearQR(){
    const qr = new QRious({
      element: this.qrCanvas.nativeElement,
      value: this.qrData,
      size: 256,
      level: 'M'
    });
  }
}
