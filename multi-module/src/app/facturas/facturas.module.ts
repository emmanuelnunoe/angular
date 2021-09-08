import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoFacturasComponent } from './listado-facturas/listado-facturas.component';

@NgModule({
  declarations: [ListadoFacturasComponent],
  imports: [CommonModule],
  exports: [ListadoFacturasComponent],
})
export class FacturasModule {}
