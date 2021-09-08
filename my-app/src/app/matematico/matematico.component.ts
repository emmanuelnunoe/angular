import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.css'],
})
export class MatematicoComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  resultado:number=0;
  op: string = "0";

  constructor() {}

  limpiaCajasEjecutado()
{
console.log("Limpiacajas ejecutado")
}
  calcular() {
    switch (this.op) {
      case "0":
        this.sumaDosNumeros(this.num1, this.num2);
        break;

      case "1":
        this.restaDosNumeros(this.num1, this.num2);
        break;
      case "2":
        this.multiplicaDosNumeros(this.num1, this.num2);
        break;
      case "3":
        this.divideDosNumeros(this.num1, this.num2);
        break;

      default:
        console.log("opcion incorrrecta")
        break;
    }
  }

  sumaDosNumeros(num1: number, num2: number) {
    this.resultado =this.num1+this.num2
    console.log(this.resultado);
  }
  restaDosNumeros(num1: number, num2: number) {
    this.resultado =this.num1-this.num2
    console.log(this.resultado);
  }
  multiplicaDosNumeros(num1: number, num2: number) {
    this.resultado =this.num1*this.num2
    console.log(this.resultado);
  }
  divideDosNumeros(num1: number, num2: number) {
    this.resultado =this.num1/this.num2
    console.log(this.resultado);
  }

  ngOnInit(): void {}
}
