/*
Extensiones en Objetos.
*/

let pais = "Rusia";
let ciudad = "TTRR";

let obj ={
   pais,//Rusia
   ciudad//TTRR,
   //Estos valores extienden de las variables de arriba.
}

//podemos inicializar desde el objeto y agregar funciones de la siguiente forma

let obj2 ={
   pais,//Rusia
   ciudad,//TTRR
   localizar(){
      console.log(this.pais, this.ciudad);
   }
}

//Podemos inicializar con notacion string:
let obj2 ={
   "pais" : "Japan",//Rusia
   ciudad,//TTRR
   "localizar"(){
      console.log(this.pais, this.ciudad);
   }
};

//Y mandar a llamar así :

obj2["localizar"]();



let seccion ="Distrito";

let obj2 ={
   "pais" : "Japan",//Rusia
   ciudad,//TTRR
   [seccion] : "Cuarto",//Sin este valor daria ERROR
   "localizar"(){
      console.log(this.pais, this.ciudad);
   }
};




var profesion = "Programador";
var profesion2 = "Admin";
var profesion3 = "Diseñandor"
var sueldo = "$20000";
var sueldo2 = "$10000";
var sueldo3 = "$30000";
var especialidad = "Web";
var estado = "Soltero";





   var miEmpleado2 = {
      [profesion2] : "Jr",
      [especialidad] : "Empresarial",
      //[estado],esto daria ERROR
      estado,
      "Guapo" : "Ojo Azul"
   }
