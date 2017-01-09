/*

Uso de funciones Fat Arrow (Flecha), tienen ciertas peculiaridades con respecto a la especificación pasada ES5,
ya que no se usa de la misma forma las siguienete palabras: "this, super, arguments, new.target" esto debido 
a que siempre se apunta a la función padre no flecha, por tanto no hay;

-llamadas con new invalidas ya que no pueden ser utilizadas como constructor
-no prototipos (ya que no hay necesidad)
-no cambia el contexto debido a un lexical this
-no hay bind con el objeto 'arguments'
-no puede haber nombres duplicados en los parámetros
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


//LO siguientes ejemplos fueron sacados directamente de la documentación de Mozilla:

var adder = {
  base : 1,
  add : function(a) {
    var f = function(v) {
      console.log(v+this.base);
    }
    return f(a);
  },
  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base : 2
    };
    return f.call(b, a);
  }
};

console.log(adder.add(1));         // This would log to 2
console.log(adder.addThruCall(1)); // This would log to 2 still





var miAr = function(a,b,c){console.log(arguments)};

var miAr = (a,b,c) => console.log(arguments);//No existe el obj.arguments







'use strict';
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b(); // prints undefined, Window
obj.c(); // prints 10, Object {...}
