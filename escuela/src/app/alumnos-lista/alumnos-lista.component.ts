import { Component, OnInit } from '@angular/core';
import { Alumno } from '../classes/alumno';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css'],
})
export class AlumnosListaComponent implements OnInit {
  constructor() {}
  listaAlumnos: Alumno[];
  opcion: string;
  ngOnInit(): void {
    this.listaAlumnos = [
      new Alumno('Emmanuel', 'Nuno', 'enuno@gmail.com', '10/03/2021'),
      new Alumno('Juan', 'Perez', 'jperez@gmail.com', '23/05/2021'),
      new Alumno('Macarena', 'Ramirez', 'mramirez@gmail.com', '08/01/2021'),
      new Alumno('Sofia', 'Reyes', 'sreyes@gmail.com', '05/03/2021'),
      new Alumno('Emilio', 'Hernandez', 'enuno@gmail.com', '04/02/2021'),
    ];
  }
}
