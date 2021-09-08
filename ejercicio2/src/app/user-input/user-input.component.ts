import { Component, OnInit, SimpleChange, Input } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  @Input() dato = 5;
  name: string = '';
  price: string = '';
  productsList = [];

  constructor() {}

  addProduct() {
    console.log('New product was added');
    let newProduct = {
      name: this.name,
      price: this.price,
    };
    this.productsList.push(newProduct);
  }

  limpiaCajasEjecutado() {
    console.log('Limpiacajas ejecutado');
  }

  ngOnInit(): void {
    console.log('se ha inicializado componente user-input');
  }

  ngOnChanges(changes: SimpleChange) {
    for (const propiedad in changes) {
      console.log(`propiedad modificada: ${propiedad}`);
      const cambios = changes['dato'];
      const previousValor = cambios.previousValue;
      const nuevoValor = cambios.currentValue;
    }
  }
}
