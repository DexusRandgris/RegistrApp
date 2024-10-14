import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reg-asistencia',
  templateUrl: './reg-asistencia.component.html',
  styleUrls: ['./reg-asistencia.component.scss'],
})
export class RegAsistenciaComponent  implements OnInit {

  private route = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe(params => {
      console.log(params);
      console.log('Código: ' + params['codigo']);
      console.log('Fecha: ' + params['fecha']);
      console.log('Usuario: ' + params['usuario']);
      });
   }

  ngOnInit() {
    console.log('Asistencia OnInit!');
  }
}
