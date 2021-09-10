import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { FacturasModule } from './facturas/facturas.module';
import { NotasModule } from './notas/notas.module';
import { RoutingModule } from './routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ClientesModule,
    FacturasModule,
    NotasModule,
    RoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
