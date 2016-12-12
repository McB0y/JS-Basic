/*
   McB0y.
   Algunos ejemplos del uso de los arreglos,
   de los objetos y de como se itera sobre ambos.


   Puedes consultar la siguiente bibliografía:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.
*/



var oso = ["Pardo", "Polar", "Grisley", "Mielero", "Panda", "Indú", "Hormiguero"];


   var razasOso = {
      Tipo1 : "Pardo",
      Tipo2 : "Polar",
      Tipo3 : "Grisley",
      Tipo4 : "Mielero",
      Tipo5 : "Panda",
      Tipo7 : "Indú",
      Tipo8 : "Hormiguero"
   };

oso.forEach(function( elemento, index) {
         console.log("Distintas razas : " + elemento);
   });

for (var i in razasOso) {
      console.log("Raza : " + razasOso[i]);
}




/*El reflejo de los objetos donde se conocen a si mismos.


var persona = function() {
   this.nombre = "Juan";
   this.apellido = "Guzman";
   this.edad = 23;
};

var Persona = new persona();
persona.prototype.direccion = "Rivera Maya";

for (var prop in Persona) {
   if (Persona.hasOwnProperty(prop)) {// !Persona.hasOwnProperty(prop)
      continue;
   }
   console.log("persona " + Persona[prop]);
}


*/
