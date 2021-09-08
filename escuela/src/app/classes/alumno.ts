export class Alumno {
  nombre: string;
  apellido: string;
  correo: String;
  fechaIngreso: string;

  constructor(
    nombre: string,
    apellido: string,
    correo: string,
    fechaIngreso: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.fechaIngreso = fechaIngreso;
  }
}
