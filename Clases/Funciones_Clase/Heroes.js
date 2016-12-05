/*
   McB0y.

   Como usar las funciones como clase

   Puedes consultar la siguiente bibliografía para más ejemplos:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.

*/
      function Heroe(nombre, nivel, vengador, vigente)
      {
         this.nombre = nombre;
         this.nivel = nivel;
         this.vengador = vengador;
         this.vigente = vigente;
      }//constructor por defecto.



      //Usamos los prototipos para mejorar el desemeño de las aplicaciones
      /* "Esta forma de codificar	las funciones como clases se conoce
       como:	'Factory	Pattern	o Template	functions'."
       */

      Heroe.prototype = {

      presentarse : function () {

         console.log("Hola yo soy :" + this.nombre);

      },

      pelear : function (nombre, tipo) {

      console.log(this.nombre + " esta peleando contra... " + nombre + " El " + tipo );
      },

      descripcion : function (habilidades) {

         habilidades = habilidades.toString();
         console.log(habilidades);
         hab1 = habilidades.split(",");
         hab1.sort();
         console.log("El es : " + this.nombre + ", Sus habilidades son : " + hab1);

      },

      despedirse : function(mensaje) {
         console.log(this.nombre + " se despide " + mensaje);
      },

      equipo : function () {

         if(this.vengador === true && this.nivel === 5 && this.vigente === true ){
            console.log("Es un vengador, sigue combatiendo a los malos y es de los más poderosos!");
         }else {
            console.log("Es un villano, no esta vigente y no es una amenaza, gracias Avengers!");
         }

      }

      };


      //Creamos las instancias de los objetos.

      var heroe1 = new Heroe("Iron Man", 5, true, true);
      var habilidades1 = ["Genio", "Armamento", "Millonario"];

      var heroe2 = new Heroe ("Capitan America", 5, true, true);
      var habilidades2 = ["Super fuerza", "Escudo de Vibranium", "Estratega"];

      var heroe3 = new Heroe("Hulk", 5, true, true);
      var habilidades3 = ["Super fuerza", "Inmunidad"];

      var villano1 = new Heroe("Red Skull", 4, false, false);
      var habilidades4 = ["Super fuerza", "Estratega", "Ejercito Nazi"];

      var villano2 = new Heroe("Abominación", 5, false, false);
      var habilidades5 = ["Super fuerza", "Maldad Extrema", "Factor ganma"];

      var villano3 = new Heroe("Loki", 3, false, false);
      habilidades6 = ["Magia", "Asgardiano", "3er Acto", "Ejercito Chitauri!"];
