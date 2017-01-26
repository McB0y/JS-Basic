/*
McB0y : El Reflect API que se basa en metaprogramación.
        Lo que significa que nos permite manipular el comportamiento
        que en el que pordefecto esta construido nuestro lenguaje,
        muchas de sus funcionalidades estaban disponibles anteriormente
        en el Object Object ahora estandolo en el Reflect Object.
        Su principal meta del API fue tener disponibles todos estos
        objetos y metodos en un solo lugar para poder mejorar los proyectos
        JavaScrip.
*/


// NOTE: No se ocupa la palabra "new" para instanciar a los objectos.


//Si queremos saber el prototipo de la clase
//Person.prototype
//desde una instancia seria
//var memo = new Person() --> memo.__prototype__
//para saber quien es el constructor de la clase:
//Person.constructor  --> Regresa una función nativa
//si se quiere saber el constructor de nuestra instanciar
//memo.constructor  --> Llo que nos regresa la clase que la creo.




class Person {

}

let person = Reflect.construct(Person, []);

//Cosntrucción de prototipos
let config = {
      greet() {
         console.log('Hello there!');
        }
}
let person = Reflect.construct(Person, []);
Reflect.setPrototypeOf(person, config);


//Tenemos métodos para declarar propiedades.

/*
(defineProperty()),
(deleteProperty()),
(get()) y (set())
*/


//Podemos ejecutarfunciones:
Reflect.apply(person.greet, person, []);
