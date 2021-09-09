import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor() {}
  getClientes(): Cliente[] {
    return [
      { name: 'Cliente1', email: 'cliente1@gmail.com' },
      { name: 'Cliente2', email: 'cliente1@gmail.com' },
      { name: 'Cliente3', email: 'cliente1@gmail.com' },
    ];
  }
}
