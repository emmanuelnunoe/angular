let myBoolean : boolean = true ; // utiliza de valores tipados

let myNumber : number = 1234;
let myStringArray : string[] = [`first`, `second`, `third`]
let flag : boolean = false;
let dato : any = 'cadena'; // puede almacenar cualquier tipo de  cadena

console.log(dato)
dato=100
console.log(dato)


type Animal = 'Cheeta' | 'Lion' | 'Turtle';
const prueba : Animal = "Turtle"

enum Brands { Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge }
class TarjetaCrediti{}

let carro : Brands = Brands.Chevrolet;

function SaludarAlUsuario( ) :void{
console.log("Hol usuario");
    
}

let marca ="Bachoco";
// sobrecarga de funciones
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);



agregarUsuario('Emmanuel', Role.SuperUser)

class Persona{
   
    private nombre : string ="";
    private apellidoPaterno : string ="";
    private apellidoMaterno : string ="";
    constructor (n: string, ap:string, am:string, private mayorDeEdad: boolean){

        this.nombre =n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno =am;
    }

    getINE(){
        return this.mayorDeEdad?"Puede tramitar el INE":"No puede asignarsele INE";
    }
}

interface FiguraGeometrica{
    color:string;
    diametro?:number;
    calculaArea():number;
}

class Rectangulo implements FiguraGeometrica{
     color: string ='rojo';
     base:number =10;
     altura:number= 20;
     
     calculaArea(){
        return this.base*this.altura;
    }
}


class Triangulo implements FiguraGeometrica{
    color:string="Verde";
    base:number =10;
    altura:number= 20;
    
    calculaArea(){
        return (this.base*this.altura)/2;
    }
}

class Circulo implements FiguraGeometrica {
    color:string ="amarillo"
    diametro:number=10;
    calculaArea(){
        return Math.PI * Math.pow(this.diametro/2,2)
    }
}


class TrianguloIsoceles extends Triangulo{

}

class TrianguloEscaleno extends Triangulo{

}

let miTriangulo = new TrianguloEscaleno()
miTriangulo.color="verde";
miTriangulo.calculaArea();