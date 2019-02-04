"use strict";
function prueba() {
    var numero = 7 * 8;
    return numero;
}
var prueba1 = prueba();
console.log(prueba1);
// parametros Obligarorios, Opcionales y por defecto
function activar(obligario, porDeFecto, opcionales) {
    if (porDeFecto === void 0) { porDeFecto = "batiseñal"; }
    var mensaje;
    if (opcionales) {
        mensaje = obligario + " activ\u00F3 la " + porDeFecto + " en la " + opcionales;
    }
    else {
        mensaje = obligario + " activ\u00F3 la " + porDeFecto;
    }
    console.log(mensaje);
}
activar("Kevin");
//funciones de Flecha
//funcion normal
var miFuncion = function (a) {
    return a;
};
//funcion de flecha
var miFuncionF = function (a) { return a; };
console.log(miFuncion("normal"));
console.log(miFuncionF("flecha"));
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//---------------------------------
// EJEMPLO FUNCIONES DE FLECHA
var hulk = {
    nombre: "Hulk",
    smash: function () {
        console.log(this.nombre + " smash!!");
    },
    smash1: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
hulk.smash1();
// DESTRUCTURACION DE OBJETOS
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
//Descructuracion Normal
/*
let nombre = avenger.nombre;
let clave = avenger.clave;
let poder = avenger.poder;*/
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
// DESTRUCTURACION DE LOS ARREGLOS
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
//Promesas
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
        //termina bien
        resolve();
        //termina mal
        //reject();
    }, 1500);
});
console.log("paso 1");
prom1.then(function () {
    console.log("Ejecutar cuando se termine Bien");
}, function () {
    console.error("ejecutar si todo sale mal");
});
console.log("paso 1");
