import { Component } from '@angular/core';
import { ClientesModule } from './clientes/clientes.module';
import { FacturasModule } from './facturas/facturas.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'multi-module';
}
