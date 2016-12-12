
/*
   McB0y.

   Estos son algunos ejemplos de la estructura de objetos en Javascript.

   Puedes consultar la siguiente bibliografía:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.
*/




var datos = {
         nombre : "Ronald",
         apellido : {
            paterno : "McPato",
            meterno : "Happy"
         },
         direccion : {
            calle : "Calle esperanza",
            numero : 7564,
            colonia : "Bosque de los 100"
         },
         ciudad : "Condado Sexy",
         telefono : {
            casa : 555333221,
            movil : 5544332233
         }
};


var familia = {
   abuelos : {
      paternos : {
         abuelo : "Tadeo Campomanes",
         abuela : "Sofia Vergara"
      },
      maternos :{
         abuelo : "Francisco Carmona",
         abuela : "Ezperanza Jos"
      },
   },
      padres :{
         padre : "Mane Manito",
         madre : "Tamara Sandels"
      },
      hermanos: {
         h1 : "Alexander Kaiser",
         h2 : "Omar Cabrera",
         h3 : "Jazmin Estrella",
         h3 : "Pollo Kent"
      }
};


function crearJuego(nombre, puntMax, puntMin){
   return{//me regresa el objeto.
      nombre:nombre,
      puntMax: puntMax,
      puntMin: puntMin
   }
}

var juego = crearJuego("Poker", "Flor Imperial", "par 0");


//podemos imprimir esto

console.log("Tenmos lo siguiente : " + juego); //solo dira que hay un objeto.

console.log("Tenmos lo siguiente : " + juego.nombre);



//checar el contexto de objetos utilizando  la palabra reservada "this" y asignarlo a una variable "self"


var Hospital = {
   medicos: {
      nombreMedico : "Todos los médicos",
      apellidoMedico : "Todos los apellidos",
      cedulas : "Todas las cedulas",
      imprimirContexto : function() {
         var self = this;
         console.log(self);
         console.log(self.cedulas);
      }
   },
   pacientes : {
      nombrePaciente : "Todos los pacientes",
      apellidos : "Todos los apellidos",
      estado : "salud del paciente",
      carnet: "carnet del paciente",
      context : function() {
         var self = this;
         console.log(self);
         console.log(self.apellidos);
      }
   },
   cuartos:{
      sala1: "General",
      sala2: "Rehabilitación",
      sala3 : "Parteros",
      sala4: "radiología"
   },
   direccion : {
      pais : "Mexico",
      ciudad: "CDMX",
      delegación:{
         del1 : "Gustavo A. Madero",
         del2 :{
            subdelegacion1 : "Andorra",
            subdelegacion2 : "Atenea",
            subdelegacion3 : "XXX",
            contenido : function () {
               var self = this;
               console.log(self.subdelegacion1);
            }
         },
         del3 : "Mixcoac",
         del4 : "Benito Juárez",
         del5 : {
      //obtendremos el objeto global cuando se invoque a la función.
            contextoGlobal: function(){
               var self= this;
               var critico = function(){
               //aqui ya nohay contexto del objeto... y es por eso que regresa window
               //podria usarse para acceder a variables que son globales.
                  console.log(this)
               }
                  critico();
                  //nos regresa el objeto función.
                  console.log(self);
            },
            contenido : function () {
               var self = this;
               console.log(self);
            }
        }
    }
  }
}



//Preludio del polimorfismo.

function identificada(param) {//identificaremos el tipo de parametro que se esta enviando.
   console.log("Tenemos argumento del tipo :" + typeof param)
   console.log("Tenemos una instancia de : " +  param instanceof Vago);
}

function Vago() {
   this.nombre = "Fernando";
   this.edad = 30;
}

var vago = new Vago();

identificada(vago);
