import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { FacturasModule } from './facturas/facturas.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClientesModule, FacturasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
