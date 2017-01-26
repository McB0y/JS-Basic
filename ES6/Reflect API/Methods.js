//Métodos para manipular propiedades de nuestras clases y objetos
//de manera dinámica, a diferencia de utilizar el operador "."


class Medico {
   constructor(nombre, edad, especialidad) {
      this._nombre = nombre;
      this.edad = edad;
      this.especialidad = especialidad;
   }

   atiende(){
      console.log(`${this._nombre} está dando primeros auxilios a un paciente.`);
   }

   get name(){
      return this._nombre;
   }
   set name(value){
      this._nombre = value;
   }

}


//Un objeto al que haremos referencia

let enfermero = {
   _name : "Ulises",
   atiende{
      console.log(`${this._nombre} checa los signos de un paciente`);
   }
};




let medico = new Medico("Raul", "36", "Neurología");
Reflect.get(medico, "name");//hago referencia al getter name.
console.log(Reflect.get(medico, "name"));

//para setear propiedades o métodos:

Reflect.set(medico, "_nombre", "Camilo");
console.log(Reflect.get(medico, "name"));


//Parámetros
//el objeto que queremos usar.
//la propiedad o metodo que queremos usar
//a que objeto debe de hacer referencia

Reflect.get(medico, "name", enfermero);
Reflect.get(medico, "atiende", enfermero);


//cambiemos el nombre del médico:
Reflect.set(medico, "name", "Homer", enfermero);
console.log(enfermero);
console.log(Reflect.get(medico, "name", mum));




//Todo lo anterior puede que llegue a casi no usarse pero nos es de cierta utilidad.
//Podemos checar si algun objeto contiene las propiedades que queremos.

Reflect.has(medico, "name");//si es asi devuelve un true.
