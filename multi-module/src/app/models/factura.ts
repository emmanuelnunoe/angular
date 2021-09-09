export class Factura {
  Id: number;
  fecha: string;
  cliente: number;
  monto: number;

  constructor(id: number, fecha: string, cliente: number, monto: number) {
    this.Id = id;
    this.fecha = fecha;
    this.cliente = cliente;
    this.monto = monto;
  }
}
