/*

Uso de funciones Fat Arrow (Flecha)

*/

"use strict";

//Función con sintaxis ES5

var fn = function(){
  console.log("Función ejecutada");
}


//1.-Primera forma en ES6

var fn = () => {
  console.log("Función ejecutada");
}

fn();

// 2.-Segunda forma en ES6

var fn = () => console.log("Función ejecutada");


fn();

// 3.-Tercera forma en ES6 ("corta")

var fn = () => "Función ejecutada"

console.log(fn());

var fn = (a,b) =>{
  return a+b;
}

// Es lo mismo que tener lo siguiente:

var fn = (a,b) => a+b;


console.log(fn(3,8));


//si es sólo un argumento podemos evitar los parentesis
var fn = a => a + 9;

console.log(fn(8));



//Una de sus ventajas puede ser al ejecutar timers

setTimeout(() => console.log("Hola!") , 4000);


//El uso de "this"

function fn() {
   console.log(this);//Nos devuelve el objeto global.
}

var fn = () => console.log(this);// De la misma forma regresa el obj. global
//Las funciones Flecha siempre mantendran su contexto, asi que no se necesitan
//call, bind o apply esa es la principal diferencia
