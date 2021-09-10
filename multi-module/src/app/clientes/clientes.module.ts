import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ListadoPostsComponent } from './listado-posts/listado-posts.component';

@NgModule({
  declarations: [ListadoClientesComponent, ListadoPostsComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ListadoClientesComponent],
})
export class ClientesModule {}
