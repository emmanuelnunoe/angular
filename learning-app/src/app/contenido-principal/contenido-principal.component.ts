import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido-principal',
  templateUrl: './contenido-principal.component.html',
  styleUrls: ['./contenido-principal.component.css']
})
export class ContenidoPrincipalComponent implements OnInit {
   dato1 : string ="dato1: Muestra valor de una variable descrita en el componente.ts";
   estaSeleccionado : boolean = true;
   nombre : string ="";
   // controla las qclases que sevan a aplicar, para quien este configurado
   currentClasses={
     estaSeleccionado: true,
     otro:true

   }
  constructor() { }

  nameChanged(){
    console.log(`Hola ${this.nombre}`)
  }

  checkboxChanged(){
    console.log('se activo el evento...')
  }

  ngOnInit(): void {

  }

}
