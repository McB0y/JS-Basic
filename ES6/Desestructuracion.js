/*
Desestructuración de objetos y de arreglos:
"Nos permite guardar variables de una manera más fácil".
*/

var dias = ["lunes","martes","miercoles"];

var [dia1,dia2,dia3] = dias;
//dia1= "lunes", dia2="martes", dia3="miercoles"


var Mascota = {
  nombre: "Buck",
  tipo : "perro",
  edad: 4,
  raza: "Bull-Dog Inglés"
};

var {nombre,tipo,edad, raza} = Mascota;
