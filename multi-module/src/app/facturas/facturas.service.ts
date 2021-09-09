import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root',
})
export class FacturasService {
  listaFacturas = [];
  result: Factura;

  constructor() {
    this.listaFacturas = [
      { Id: 1, fecha: '08/09/2021', cliente: 3, monto: 54400 },
      { Id: 2, fecha: '14/03/2021', cliente: 2, monto: 90024 },
      { Id: 3, fecha: '12/07/2021', cliente: 4, monto: 200424 },
    ];

    this.listaFacturas = this.getFacturas();
  }

  getFacturas(): Factura[] {
    return this.listaFacturas;
  }
  agregarFactura(nuevaFactura: Factura) {
    console.log(nuevaFactura);
    this.listaFacturas.push(nuevaFactura);
    console.log(this.listaFacturas);
  }

  buscarFactura(id: number): Factura {
    let resultf: Factura;
    this.listaFacturas.forEach(function (f) {
      if (f.Id == id) {
        resultf = f;
        return f;
      }
    });

    return resultf;
  }
}
