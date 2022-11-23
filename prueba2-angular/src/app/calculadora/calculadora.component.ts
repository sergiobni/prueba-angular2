import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  pantalla = '';
  memoria = 0;

  constructor() {}

  ngOnInit(): void {}

  recoge(a: any) {
    //   if (typeof a === 'number'){this.memoria += a;}else if{ typeof a === 'string'{
    //     switch(a){
    //       case a === '+':
    //   }}
  }
}
