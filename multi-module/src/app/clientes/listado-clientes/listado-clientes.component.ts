import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from '../clientes.service';
@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css'],
})
export class ListadoClientesComponent implements OnInit {
  // private clientesService: ClientesService;
  constructor(private cs: ClientesService) {
    // Dependency injection
    // this.clientesService = new ClientesService();
  }

  Clientes = [];

  ngOnInit(): void {
    this.Clientes = this.cs.getClientes();
  }
}
