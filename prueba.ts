
function prueba(){
    let numero:number = 7 * 8;
    return numero    
}

let prueba1 = prueba();
console.log(prueba1);


// parametros Obligarorios, Opcionales y por defecto

function activar ( obligario:string,
                    porDeFecto:string ="batiseñal",
                    opcionales?:string){
let mensaje: string;

if(opcionales){
    mensaje = `${ obligario } activó la ${ porDeFecto } en la ${opcionales}`
}else{
    mensaje = `${ obligario } activó la ${ porDeFecto }`
}
console.log(mensaje);
}
activar("Kevin")

//funciones de Flecha

//funcion normal
let miFuncion = function( a:any ){
    return a
}
//funcion de flecha
let  miFuncionF = (a:any) => a;

console.log(miFuncion("normal"));
console.log(miFuncionF("flecha"));

let miFuncion2 = function( a:number, b:number){
    return a + b;
}

let miFuncion2F = (a:number, b:number) => a + b;


let miFuncion3 = function (nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

//---------------------------------
// EJEMPLO FUNCIONES DE FLECHA

let hulk ={
    nombre: "Hulk",
    smash(){
        console.log(this.nombre + " smash!!");
    },
    smash1(){
        setTimeout( () => console.log(this.nombre + " smash!!"), 1500 );
    }
}

hulk.smash();
hulk.smash1();


// DESTRUCTURACION DE OBJETOS


let avenger ={
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
}

//Descructuracion Normal
/*
let nombre = avenger.nombre;
let clave = avenger.clave;
let poder = avenger.poder;*/

let { nombre, clave, poder} = avenger;

console.log(nombre, clave, poder);


// DESTRUCTURACION DE LOS ARREGLOS

let avengers:string[] = ["Thor", "Steve", "Tony"];

let [thor, capi, ironman ] = avengers;

console.log(thor, capi, ironman);


//Promesas

let prom1 = new Promise( function(resolve, reject){
    
    setTimeout(()=>{
        console.log("Promesa Terminada")
        //termina bien
        resolve();

        //termina mal
        //reject();
    },1500)
});

console.log("paso 1");

prom1.then(function(){
    console.log("Ejecutar cuando se termine Bien")
}, 
function(){
    console.error("ejecutar si todo sale mal")
});

console.log("paso 1");