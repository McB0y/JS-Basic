/*
McB0y

Distintas formas para declarar condicionales if, if else y else

*/


//1.- if bifurcado.Conciste en sólo 2 bloques.

var a = 20;
var b = 50;


//la estructura es la siguiente. (condicion)?true:false;
//donde los bloques de código true se ejecuta si la condición
//es verdadera y el bloque false si es falsa la condición.

var c = (a > b)? a : b;


var c = (a > b)? function() {
   console.log("A es mayor que B");
   return a;
}():
function() {
   console.log("B es mayor que A");
   return b;
}();

console.log(c);



//2.otra forma seria evaluaciones booleanas.


var a = 20;
var b = 50;

//forma corta para saber si se recibe el valor, sustituiria a un bloque if.

var c = a||b;


var x = undefinied;// equivalente a solo la declaración de la variable.
var y = "Algo";

var z = x||y;//regresara 'y' ya que x es indefinidio y lo toma como si no hubiera valor.


//3. Utilizando los bloques convencionales.

//3.a- if-else

var nombre = "Daniel";
var apellido = "Solis";

if (nombre === "Daniel" && apellido === "Solis") {
   console.log("Soy : " + nombre + " " + apellido);
}else {
   console.log("Otra persona");
}


//3.b- if-if_else-else

var nombre = "Daniel";
var apellido = "Solis";

if (nombre === "Daniel" && apellido === "Solis") {
   console.log("Soy : " + nombre + " " + apellido);
}else if (nombre === "daniel" && apellido === "solis") {
   console.log("Tambien soy Daniel Solis!");
}else {
   console.log("Soy : " + nombre + " " + apellido);
}
