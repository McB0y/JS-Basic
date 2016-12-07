/*
   McB0y.
   La sintaxis básica de los ciclos "while, do while y for" y el uso de funciones anonimas.

   Puedes consultar la siguiente bibliografía:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.
*/

var numero = Math.random();
var mul = Math.round(numero*100);

(function() {
   console.time("Test: ");
   for(var i = 0; i <mul; i++){
      console.log("Iteración número : " + i);
   }
   console.timeEnd("Test: ")
})();

//Ciclo while:

(function (inicio) {
   console.time("Test: ");
   while (inicio < mul) {
      console.log("Iteración número : " + inicio);
      inicio++;
   }
   console.timeEnd("Test: ");
})(0);


//Ciclo do while.


(function(i) {
   console.time("Test :")
   do {
         console.log("Iteración número : " + i);
      i++;
   } while (i < mul);

   console.timeEnd("Test :")

})(0);
