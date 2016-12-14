/*
   McB0y.

   Demostración del reflejo de objetos.
*/




//El reflejo de los objetos el la capacidad que tienen los objetos para conocerse a si mismos.


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
