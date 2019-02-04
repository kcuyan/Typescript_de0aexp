"use strict";
//CLASE: 
//Propiedades en una clase: caracteristicas que describen la clase.
//metodo en una clase: son acciones que puede tener el objeto.
//Consutructor: es una funcion que se ejecuta cuando se instancia un objeto.
//Declarar un clase
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "Cap", "Scoott Lang");
console.log(antman);
//DECORADORES
