"use strict";
// Banco.ts
// Definir una interfaz llamada ICuenta que defina las operaciones deposito, retiro y
// 	consultarSaldo
// Crear las clases CuentaPersonal y CuentaEmpresarial relacionadas con ICuenta
// Crear la interfaz ICuentaDeCredito que herede de ICuenta
// 	agrega la operacion calculaIntereses
// Crear la clase TarjetaDeCredito relacionada con ICuentaDeCredito
// Crear un objeto de cada clase y ver que se puedan los metodos que correspondan al
// tipo de objeto.
console.log('se cargo banco.js');
// Cuenta Personal
class CuentaPersonal {
    constructor(saldo) {
        this.saldo = 0;
    }
    consultarSaldo() {
        return `tu saldo es ${this.saldo}`;
    }
    deposito(cantidad) {
        this.saldo += cantidad;
        return this.consultarSaldo();
    }
    retiro(cantidad) {
        this.saldo -= cantidad;
        return this.consultarSaldo();
    }
}
// Cuenta Empresarial
class CuentaEmpresarial {
    constructor(saldo) {
        this.saldo = 0;
        this.saldo += saldo;
    }
    consultarSaldo() {
        return `tu saldo es ${this.saldo}`;
    }
    deposito(cantidad) {
        this.saldo += cantidad;
        return this.consultarSaldo();
    }
    retiro(cantidad) {
        this.saldo -= cantidad;
        return this.consultarSaldo();
    }
}
class TarjetaDeCredito {
    constructor(saldo) {
        this.saldo = 0;
        this.intereses = 0;
        this.saldo = saldo;
    }
    calculaIntereses() {
        this.intereses = this.saldo * 0.10;
        return this.consultarSaldo();
    }
    consultarSaldo() {
        return `tu saldo es ${this.saldo}`;
    }
    deposito(cantidad) {
        this.saldo += cantidad;
        return this.consultarSaldo();
    }
    retiro(cantidad) {
        this.saldo -= cantidad;
        return this.consultarSaldo();
    }
}
// implementacion de todas lasclases y metodos 
let miCuenta = new CuentaPersonal(2000);
miCuenta.deposito(3500);
miCuenta.retiro(-100);
miCuenta.consultarSaldo();
let cEmpresa = new CuentaEmpresarial(800000);
cEmpresa.deposito(500000);
cEmpresa.retiro(-100000);
cEmpresa.consultarSaldo();
let tCredito = new TarjetaDeCredito(300000);
tCredito.retiro(2000);
tCredito.deposito(1000);
tCredito.consultarSaldo();
tCredito.calculaIntereses();
