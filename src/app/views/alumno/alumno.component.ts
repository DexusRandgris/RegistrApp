import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent  implements OnInit {

  private router = inject(Router)

  constructor() { }

  asistencia(): void{
    this.router.navigate(['/assistance']);
  }

  detalleAsignatura(): void{
    this.router.navigate(['/detalle-asignatura']);
  }

  ngOnInit() {}

}
