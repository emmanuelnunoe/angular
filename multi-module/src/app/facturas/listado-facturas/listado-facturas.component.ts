import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../facturas.service';
import { Factura } from 'src/app/models/factura';
@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css'],
})
export class ListadoFacturasComponent implements OnInit {
  constructor(private fs: FacturasService) {}
  Facturas = [];
  buscarId: number;
  facturaResult: Factura;

  ngOnInit(): void {
    this.Facturas = this.fs.getFacturas();
  }
  buscarFactura() {
    this.facturaResult = this.fs.buscarFactura(this.buscarId);
    console.log(this.facturaResult);
  }

  nuevaFactura() {
    let id = Math.floor(Math.random() * (10 - 1) + 1);
    let dia = Math.floor(Math.random() * (31 - 1) + 1);
    let mes = Math.floor(Math.random() * (12 - 1) + 1);
    let anio = Math.floor(Math.random() * (2021 - 2020) + 2020);
    let cliente = Math.floor(Math.random() * (99 - 1) + 1);
    let monto = Math.floor(Math.random() * (999999999 - 1) + 1);
    let nuevaFactura = new Factura(id, `${dia}/${mes}/${anio}`, cliente, monto);

    this.fs.agregarFactura(nuevaFactura);
    console.log(nuevaFactura);
  }
}
