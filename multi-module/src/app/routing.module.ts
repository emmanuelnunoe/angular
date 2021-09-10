import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { NotesComponentComponent } from './notas/notes-component/notes-component.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { ListadoPostsComponent } from './clientes/listado-posts/listado-posts.component';

export const routes: Routes = [
  { path: 'clientes', component: ListadoClientesComponent },
  { path: 'notas', component: NotesComponentComponent },
  { path: 'facturas', component: ListadoFacturasComponent },
  { path: 'posts', component: ListadoPostsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
