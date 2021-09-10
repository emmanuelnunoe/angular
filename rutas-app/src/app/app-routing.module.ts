import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DosComponent } from './dos/dos.component';
import { UnoComponent } from './uno/uno.component';

const routes: Routes = [
  { path: 'uno', component: UnoComponent },
  { path: 'dos', component: DosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
