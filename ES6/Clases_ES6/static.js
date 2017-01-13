/*export*/ class Helper {//agregando export podemos llevarnos el script a otro script
   static logTwice(){
      console.log("Me llamare 1");
      console.log("NO! dos veces...");
   }
}

//En otros leguajes como Java se puede hacer esto también ya que
//los métodos de clase son accesibles directamente con el nombre de la clase.
Helper.logTwice();



/*
Podemos definir getters y setters en las clases,
teniendo atributos privados
*/


class Persona {
   constructor(name) {
      this._name = name;//el '_' significa que es privado
                        //es solo una convención ya que si quisieramos
                        //setear el valor deberia ser con "_name"
   }

   
   get name(){
      return this._name.toUpperCase();
   }

   set name(value){
      if(value.lenght>2){
         this.name = value;
      }
      console.log("rejected!");
   }
}

let person = new Person("Jane");

console.log("person");
