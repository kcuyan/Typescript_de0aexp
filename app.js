"use strict";
// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a, b) {
    return (a + b) * 2;
}
var resultadoDoble1 = function (a, b) { return (a + b) * 2; };
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        //mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma " + arma;
    }
    else {
        //mensaje = nombre + " tiene un " + poder
        mensaje = nombre + " tiene un " + poder;
    }
}
;
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        var _this = this;
        this.area = function () { return _this.altura * _this.base; };
        this.calular = function (a, b) { return a * b; };
        this.base = base;
        this.altura = altura;
    }
    return Rectangulo;
}());
var prueba = new Rectangulo(2, 3);
console.log(prueba.calular(3, 5));