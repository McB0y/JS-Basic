/*

Hoisting: Un comportamiento que existe en Javascript donde todas las variables
se elevan a la primera linea del documento, por medio de la consola podemos ver que
se regresa la sentencia "undefined" hasta que la variable es llamada,
o la función es ejecutada, a continuación un par de casos.

*/



//El siguiente código puede ejecutarse en la consola para apresiarse mejor.

var numero = 6;//regresa undefined
numero = 5;//regresa este nuevo valor.

//las funciones por declaración son elevadas, es por eso que se prefieren
//declarar funciones por expresión ya que sólo el valor o nombre es elevado.

(function elevacion() {
   console.log("Re regressa este mensaje automaticamente por que es autoejecutable");
})();

//Regresa undefined en la consola esperando a que sea invocada.
function elevada () {
   console.log("Listo fui invocada!");
};

elevada();//nos regresa el valor.


//Esto representa ventajas cómo:
//evitar que se llame la función antes de tener la función en el documento.

var funcionElevada = function (a,b,c,d) { //todos los parametros son cadenas.
   console.log("Sólo mi nombre fue elevado... ;)");
   console.log("Si me autoejecuto saldre ahora en consola!");
   console.log(arguments);//devuelve el arreglo con los valores que mandamos.
};


//Pueden imprimirse, mandarse a llamar, etc variables o funciones, siempre y cuando
//esten declaradas en el documento, esto causara que veamos undefined en consola,
//pero si las variables no estan declaradas entonces tendremos un error.

console.log(a);//devuelve undefined ya que su declaracion esta abajo.
var a = "Reservada en memoria";//si no se encuentra la variable hay error.
console.log(a);//devuelve el valor de la variable.
