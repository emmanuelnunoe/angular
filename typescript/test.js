"use strict";
let myBoolean = true;
let myNumber = 1234;
let myStringArray = [`first`, `second`, `third`];
let flag = false;
let dato = 'cadena';
console.log(dato);
dato = 100;
console.log(dato);
const prueba = "Turtle";
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["Chrysler"] = 4] = "Chrysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
class TarjetaCrediti {
}
let carro = Brands.Chevrolet;
function SaludarAlUsuario() {
    console.log("Hol usuario");
}
let marca = "Bachoco";
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
agregarUsuario('Emmanuel', Role.SuperUser);
class Persona {
    constructor(n, ap, am, mayorDeEdad) {
        this.mayorDeEdad = mayorDeEdad;
        this.nombre = "";
        this.apellidoPaterno = "";
        this.apellidoMaterno = "";
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }
    getINE() {
        return this.mayorDeEdad ? "Puede tramitar el INE" : "No puede asignarsele INE";
    }
}
class Rectangulo {
    constructor() {
        this.color = 'rojo';
        this.base = 10;
        this.altura = 20;
    }
    calculaArea() {
        return this.base * this.altura;
    }
}
class Triangulo {
    constructor() {
        this.color = "Verde";
        this.base = 10;
        this.altura = 20;
    }
    calculaArea() {
        return (this.base * this.altura) / 2;
    }
}
class Circulo {
    constructor() {
        this.color = "amarillo";
        this.diametro = 10;
    }
    calculaArea() {
        return Math.PI * Math.pow(this.diametro / 2, 2);
    }
}
class TrianguloIsoceles extends Triangulo {
}
class TrianguloEscaleno extends Triangulo {
}
let miTriangulo = new TrianguloEscaleno();
miTriangulo.color = "verde";
miTriangulo.calculaArea();
