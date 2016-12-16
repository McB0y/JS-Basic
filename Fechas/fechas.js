/*
   McB0y.
   Ejemplos de como se utiliza el objeto Date() para generar fechas.

*/


//Utilizando herencia multiple y clases podemos implementar lo sig.
   class fecha extends Date {
      constructor() {
         super();//todos los métodos y atributos de Date();
      }

      sumarDias(dias){
      this.setDate( this.getDate()  + dias);
      return this;
      }

      sumarAnios(anios){
      this.setFullYear( this.getFullYear()  + anios );
      return this;
      }

      detalleFecha(){
         console.log("Día : " + this.getDate() + ", Mes : " + this.getMonth() + ", Año : " + this.getFullYear());
      }
   };


var fecha = new Date(2016, 9, 20);
console.log(fecha1);
console.log(fecha1.sumarAnios(-20));
console.log(fecha1.sumarDias(-20));
console.log(fecha1.detalleFecha());

//Puede pasarse a las fechas una cadena con la fecha que se desea y esto nos regresara la fecha exacta.

var cumple = new Date("1990, 10, 20")// esto devuelve el 20 de Octubre de 1990 y no el 20 de noviembre.

//Se pueden generar más petodos en la clase para el manejo de fechas
