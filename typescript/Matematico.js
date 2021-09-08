"use strict";
function suma(num1, num2) {
    return num1 + num2;
}
function resta(num1, num2) {
    return num1 - num2;
}
function multiplica(num1, num2) {
    return num1 * num2;
}
function dividde(num1, num2) {
    return num1 / num2;
}
const mayorDeDosNumeros = (numero1, numero2) => {
    let mayor = 0;
    if (numero1 > numero2) {
        mayor = numero1;
    }
    if (numero2 > numero1) {
        mayor = numero2;
    }
    return mayor;
};
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["SuperUser"] = 2] = "SuperUser";
})(Role || (Role = {}));
function agregarUsuario(nombre, rol) {
    console.log('Usuario agregado');
}
