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

oso.forEach(function(elemento) {
         console.log("Distintas razas : " + elemento);
   });

for (var i in razasOso) {
      console.log("Raza : " + razasOso[i]);
}
