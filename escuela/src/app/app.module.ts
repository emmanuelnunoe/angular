import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AlumnosListaComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
