//CLASE: 
//Propiedades en una clase: caracteristicas que describen la clase.
//metodo en una clase: son acciones que puede tener el objeto.
//Consutructor: es una funcion que se ejecuta cuando se instancia un objeto.

//Declarar un clase

class Avenger{
    nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear:boolean;
    peleasGanadas:number;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman:Avenger = new Avenger( "Antman", "Cap", "Scoott Lang");

console.log(antman);

//DECORADORES
