import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assitance',
  templateUrl: './assitance.component.html',
  styleUrls: ['./assitance.component.scss'],
})

export class AssitanceComponent  implements OnInit {


  direccion: string = '';
  private authService = inject(AuthService);

  subscriptionAuthService: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.subscriptionAuthService = this.authService.usuario$.subscribe(direccion => {
      this.direccion = direccion;
      console.log('Header: ', direccion);
    });
  }

}
