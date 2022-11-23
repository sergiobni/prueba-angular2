import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //esta es la etiqueta html que llamará al componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prueba2-angular';
  //Mis variables
  nombre: string | any = 'Sergio';
  apellido: string = 'J.';
  edad: number = 30;
  salario: any = [1000, 2000, 3000];
  activo: boolean = true;
  mensaje: string = '';

  isActive() {
    if (this.activo) {
      this.mensaje = 'El usuario ya tiene trabajo';
    } else {
      this.mensaje = 'El usuario aún no tiene trabajo';
    }
    return this.mensaje;
  }
}
