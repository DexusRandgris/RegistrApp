
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss'],

})
export class ProfesorComponent  implements OnInit {

  private router = inject(Router)

  constructor() { }


  asistencia(): void{
    this.router.navigate(['/profesor-qr']);
  }

  detalleAsignatura(): void{
    this.router.navigate(['/detalle-profesor']);
  }

  ngOnInit() {}

}
